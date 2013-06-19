from bottle import Bottle, route, error, post, get, run, static_file, abort, redirect, response, request, static_file, template 
import bottle
import pymongo
import loginpy, signuppy, logoutpy, sportspy, voleiballpy, balonmanopy,futbolpy, perfilpy #mis modulos python
import random, string, hashlib, sys


#Servir ficheros estaticos con bottle
@get('/<filename:re:.*\.js>')
def javascripts(filename):
    return static_file(filename, root='static/js')

@get('/<filename:re:.*\.css>')
def stylesheets(filename):
    return static_file(filename, root='static/css')

@get('/<filename:re:.*\.(jpg|png|gif|ico)>')
def images(filename):
    return static_file(filename, root='static/images')

@get('/<filename:re:.*\.(eot|ttf|woff|svg)>')
def fonts(filename):
    return static_file(filename, root='static/fonts')
#################################################


@route('/')
@route('/index')
def index():
    return template('index')

#Todo lo relacionado con login
@route('/login')
@get('/login')
def login():
    
    username = request.get_cookie("username")
    
    #Comprobamos que no este logueado con la cookie, a si que le mandamos a login
    if username is None: 
        #Al solicitar la ruta /login, devolvemos el teamplate login
        return template('login')
    else:
        print username
        bottle.redirect("/sports")
    

@post('/login')
def process_login():
    
    #Obtenemos los datos del formulario
    username = request.forms.get("username")
    password = request.forms.get("password")
    
    #Hacemos la password hash
    password_hash = make_pw_hash(password)
    #Desde la funcion validate_login del modulo login validamos o denegamos el proceso de login 
    user_record = login.validate_login(username, password_hash)
    
    if user_record is None:
        return template('login_error')
    
    else:
        response.set_cookie("username", username)
        bottle.redirect("/sports")
        
#Funcion para hacer hash a la password a la hora de aniadir a la bbdd
def make_pw_hash(pw):
        return hashlib.sha256(pw).hexdigest()
    
    
###########CONEXION BBDD###############
connection = pymongo.MongoClient("mongodb://localhost", safe=True)  
db = connection.test
gestion = db.gestion


login = loginpy.loginpy(db)


#######################################

run(host='localhost', port=8002, reloader=True)