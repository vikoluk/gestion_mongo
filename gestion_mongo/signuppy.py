from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import sys
import pymongo
import bottle
import re
import hashlib


        
#Proceso de alta de usuario
@route('/signup')
def signup():
    return template('signup',dict(username_error = "",password_error = "", sexo_error = "", email_error = ""))

##Captura de datos del formulario
@post('/signup')
def process_signup():
    
    username = request.forms.get("username")
    password = request.forms.get("password")
    email = request.forms.get("email")
    sexo = request.forms.get("sexo")
    
    errors = {}
        
    # Controlamos errores. usuario duplicado
    if not validate_signup(username, password, sexo, email, errors):
        return bottle.template("signup", errors)
    else:
        #Insertamos el usuario
        #Hacemos la password hash
        password_hash = make_pw_hash(password)
        user = {'_id': username, 'sexo': sexo, 'password': password_hash,'email' : email,
                'equipo_voleiball': '', 'equipo_futbol': '' ,'equipo_balonmano': '', 'rol':'mortal'}
               
        try:
            gestion.insert(user, safe=True)
        except pymongo.errors.OperationFailure:
            errors['username_error'] = "Nombre de usuario no disponible, elija otro"
            print "oops, mongo error"
            return bottle.template("signup", errors)
        except pymongo.errors.DuplicateKeyError as e:
            errors['username_error'] = "Nombre de usuario no disponible, elija otro"
            print "oops, username is already taken"
            return bottle.template("signup", errors)

        bottle.redirect("/sports")

def validate_signup(username, password, sexo, email, errors):
            
    USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
    PASS_RE = re.compile(r"^.{3,20}$")
    EMAIL_RE = re.compile(r"^[\S]+@[\S]+\.[\S]+$")
            
    errors['username_error'] = ""
    errors['password_error'] = ""
    errors['sexo_error'] = ""
    errors['email_error'] = ""
            
    if not USER_RE.match(username):
        errors['username_error'] = "Usuario incorrecto, intentalo con numeros y letras"
        return False
            
    if not PASS_RE.match(password):
        errors['password_error'] = "Password no valida"
        return False
            
    if sexo is None:
        errors['sexo_error'] = "Ha de seleccionar sexo"
        return False
            
    if not EMAIL_RE.match(email):
        errors['email_error'] = "Email no valido"
        return False            
            
    return True


#Funcion para hacer hash a la password a la hora de aniadir a la bbdd
def make_pw_hash(pw):
        return hashlib.sha256(pw).hexdigest()
    
    
connection = pymongo.MongoClient("mongodb://localhost", safe=True)  
db = connection.test
gestion = db.gestion      