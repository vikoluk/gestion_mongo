from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import pymongo
import bottle

#Todo lo relacionado con el sports. La siguiente vista despues del logueo       
@route('/sports')
def sports():
    
    #Comprobamos la cookie del usuario, a si evitamos que 
    #intenten entrar directamente por la url
    username = request.get_cookie("username")
    
    if username is None: 
        #Al solicitar la ruta /login, devolvemos el teamplate login
        return template('login')
    else:
        
        
        #Contamos el numero de equipos que hay para aniadirlos a la vista        
        num_equipos_voley = len(gestion.distinct( 'equipo_voleiball' ))
        num_equipos_futbol = len(gestion.distinct( 'equipo_futbol' ))
        num_equipos_balonmano = len(gestion.distinct( 'equipo_balonmano' ))
        
        #Comprobamos si la longitud del array es igual a 1 ya que entoces no tendria equipos
        if (num_equipos_voley == 1):
            num_equipos_voley = 0
        if (num_equipos_futbol == 1):
            num_equipos_futbol = 0
        if (num_equipos_balonmano == 1):
            num_equipos_balonmano = 0        
        
        
        
        return template('sports',dict(username=username,
                                      num_equipos_voley = num_equipos_voley,
                                      num_equipos_futbol = num_equipos_futbol,
                                      num_equipos_balonmano = num_equipos_balonmano))
        
connection = pymongo.MongoClient("mongodb://localhost", safe=True)  
db = connection.test
gestion = db.gestion