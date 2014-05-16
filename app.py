import os
import jinja2
import logging
import webapp2
from google.appengine.api import memcache


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class SiteHandler(webapp2.RequestHandler):
  def find_file(self, request_path):
    if request_path.endswith("/") == False:
      request_path += "/"
    result = memcache.get(request_path)
    if result is None:
      template_values = {}
      try:
        template = JINJA_ENVIRONMENT.get_template(request_path)
        result = template.render(template_values)
      except jinja2.TemplateNotFound:
        try:
          url = request_path + "index.html"
          template = JINJA_ENVIRONMENT.get_template(url)
          result = template.render(template_values)
        except jinja2.TemplateNotFound:
          try:
            url = request_path[:-1] + ".html"
            template = JINJA_ENVIRONMENT.get_template(url)
            result = template.render(template_values)
          except:
            result = None
      memcache.set(request_path, result)
    return result


  def get(self):
    request_path = self.request.path
    response = self.find_file(request_path)
    if response is None:
      self.response.set_status(404)
      response = self.find_file("/static/404.html")
    self.response.write(response)



application = webapp2.WSGIApplication([
    ('/.*', SiteHandler)
], debug=True)
