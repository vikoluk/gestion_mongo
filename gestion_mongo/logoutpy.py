from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import pymongo
import bottle

@route('/logout')
def logout():
    response.set_cookie("username","", expires = 0)
    bottle.redirect("/")