from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import sys
import pymongo
import bottle
import random, string, hashlib


#Clase que interactua con la coleccion de gestion
class loginpy:

    # Constructor para la clase
    def __init__(self, database):
        self.db = database
        self.gestion = database.gestion

    def validate_login(self, username, password_hash):
            
            user = None
            try:
                user = self.gestion.find_one({'_id': username})
                                
            except:
                print "Error al obtener el usuario de la bbdd"
    
            if user is None:
                print "El usuario no esta en la bbdd"
                return None
            else:
                print "Tu usuario es " + user['_id']
            
             
            if user['password'] != password_hash:
                print user['password']
                print password_hash
                print "Contrasenia erronea"
                return None
            
            # Login OK
            print user['password']
            print password_hash
            print "Login OK"
            return user