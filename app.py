import os
import string
import jinja2
import logging
import webapp2
from google.appengine.api import memcache


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

DEBUG=False


def GetHTML(request_path, use_cache=True):
  response = memcache.get(request_path)
  if response is None:
    try:
      template = JINJA_ENVIRONMENT.get_template(request_path)
      response = template.render({})
      if use_cache and not DEBUG:
        memcache.set(request_path, response)
    except jinja2.TemplateNotFound:
      response = None
      logging.warn("File not found: %s", request_path)
  return response

def GetFile(request_path, use_cache=False):
  folder = os.path.dirname(os.path.realpath(__file__))
  file_path = os.path.join(folder, request_path[1:])
  response = memcache.get(request_path)
  if response is None:
    try:
      f = open(file_path, 'r')
      response = f.read()
      if use_cache and not DEBUG:
        memcache.set(request_path, response)
    except:
      response = None
      logging.warn("File not found: %s", request_path)
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
      logging.error("File not found: %s", request_path)
  return response


class PageNotFoundHandler(webapp2.RequestHandler):
  def get(self):
    response = Get404()
    self.response.set_status(404)
    self.response.write(response)


class PageHandler(webapp2.RequestHandler):
  def head(self):
    self.get()

  def get(self):
    request_path = self.request.path

    if request_path.endswith("/"):
      request_path = request_path + "index.html"

    response = None
    if request_path.lower().endswith(".html"):
     response = GetHTML(request_path)
     content_type = "text/html"
    elif request_path.lower().endswith(".js"):
      response = GetFile(request_path, False)
      content_type = "application/javascript"
    elif request_path.lower().endswith(".css"):
      response = GetFile(request_path, False)
      content_type = "text/css"
    else:
      logging.warn("Unknown extension: %s", request_path)

    if response is None:
      response = Get404()
      self.response.set_status(404)
      content_type = "text/html"

    self.response.headers['Content-Type'] = content_type
    self.response.write(response)


class TagHandler(webapp2.RequestHandler):
  def head(self):
    self.get()

  def get(self):
    request_path = self.request.path.lower()
    request_path = string.replace(request_path, "%20", "-")
    request_path = string.replace(request_path, " ", "-")
    request_path = request_path[:-1] + ".html"
    response = GetHTML(request_path)
    if response is None:
      response = Get404()
      self.response.set_status(404)
    self.response.write(response)


class TagRedirectHandler(webapp2.RedirectHandler):
  def head(self):
    self.get()

  def get(self):
    request_path = self.request.path
    if request_path.lower().endswith(".html"):
      request_path = request_path[:-5]
    request_path = request_path + "/"
    self.redirect(request_path, permanent=True)


class CommentPageRedirectHandler(webapp2.RedirectHandler):
  def head(self):
    self.get()

  def get(self):
    request_path = self.request.path

    comment_page = request_path.find("comment-page-")
    if comment_page > 0:
      request_path = request_path[:comment_page]
    self.redirect(request_path, permanent=True)


class RedirectHandler(webapp2.RedirectHandler):
  def head(self):
    self.get()

  def get(self):
    request_path = self.request.path + "/"
    self.redirect(request_path, permanent=True)


class FeedRedirectHandler(webapp2.RedirectHandler):
  def head(self):
    self.get()

  def get(self):
    self.redirect("http://feeds.feedburner.com/petelepage", permanent=True)


class FlushHandler(webapp2.RequestHandler):
  def get(self):
    memcache.flush_all()
    self.redirect("/")


application = webapp2.WSGIApplication([
    ('/blog/.*/.*/comment-page-.*/?', CommentPageRedirectHandler),
    ('/blog/category/microsoft/feed/?', FeedRedirectHandler),
    ('/blog/comments/feed.*', FeedRedirectHandler),
    ('/blog/feed/?', FeedRedirectHandler),
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
