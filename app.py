import os
import string
import jinja2
import logging
import webapp2
from google.appengine.api import memcache


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

DEBUG = False


def GetFile(request_path, use_cache=True):
  response = memcache.get(request_path)
  if response is None:
    try:
      template = JINJA_ENVIRONMENT.get_template(request_path)
      response = template.render({})
      if use_cache and not DEBUG:
        memcache.set(request_path, response)
    except jinja2.TemplateNotFound:
      response = None
  return response


def Get404():
  request_path = "/static/404.html"
  response = memcache.get(request_path)
  if response is None:
    try:
      template = JINJA_ENVIRONMENT.get_template(request_path)
      response = template.render({})
      if not DEBUG:
        memcache.set(request_path, response)
    except jinja2.TemplateNotFound:
      response = None
  return response


class PageNotFoundHandler(webapp2.RequestHandler):
  def get(self):
    response = Get404()
    self.response.set_status(404)
    self.response.write(response)


class PageHandler(webapp2.RequestHandler):
  def get(self):
    request_path = self.request.path
    logging.info(request_path)

    if request_path.endswith("/"):
      request_path = request_path + "index.html"

    response = None
    if request_path.endswith(".html"):
     response = GetFile(request_path)
     content_type = "text/html"
    elif request_path.endswith(".js"):
      response = GetFile(request_path, False)
      content_type = "application/javascript"
    elif request_path.endswith(".css"):
      response = GetFile(request_path, False)
      content_type = "text/css"

    if response is None:
      response = Get404()
      self.response.set_status(404)
      content_type = "text/html"

    self.response.headers['Content-Type'] = content_type
    self.response.write(response)    


class TagHandler(webapp2.RequestHandler):
  def get(self):
    request_path = self.request.path
    request_path = string.replace(request_path, "%20", "-")
    request_path = string.replace(request_path, " ", "-")
    request_path = request_path[:-1] + ".html"
    response = GetFile(request_path)
    if response is None:
      response = Get404()
      self.response.set_status(404)
    self.response.write(response)


class TagRedirectHandler(webapp2.RedirectHandler):
  def get(self):
    request_path = self.request.path
    if request_path.endswith(".html"):
      request_path = request_path[:-5]
    request_path = request_path + "/"
    self.redirect(request_path, permanent=True)


class RedirectHandler(webapp2.RedirectHandler):
  def get(self):
    request_path = self.request.path + "/"
    self.redirect(request_path, permanent=True)


class FlushHandler(webapp2.RequestHandler):
  def get(self):
    memcache.flush_all()
    self.redirect("/")


application = webapp2.WSGIApplication([
    ('/blog', RedirectHandler),
    ('/blog/tag/.*/', TagHandler),
    ('/blog/tag/.*', TagRedirectHandler),
    ('/blog/.*', PageHandler),
    ('/photography', RedirectHandler),
    ('/photography/.*', PageHandler),
    ('/presentations', RedirectHandler),
    ('/presentations/.*', PageHandler),
    ('/scratch', RedirectHandler),
    ('/scratch/.*', PageHandler),
    ('/flush/.*', FlushHandler),
    ('.*', PageNotFoundHandler)
], debug=DEBUG)
