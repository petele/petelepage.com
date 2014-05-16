import os
import json
import jinja2
import logging
import webapp2


from google.appengine.api import memcache

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainPage(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template("/static/index.html")
    self.response.write(template.render(template_values))

class NotFound(webapp2.RequestHandler):
  def post(self):
    self.sendResult()
  def get(self):
    self.sendResult()

  def sendResult(self):
    self.response.set_status(404)
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template("/static/404.html")
    self.response.write(template.render(template_values))


application = webapp2.WSGIApplication([
    ('/', MainPage),
    ('.*', NotFound)
], debug=True)
