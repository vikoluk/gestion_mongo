from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import pymongo
import bottle


@route('/perfil')
def perfil():
    
    username = request.get_cookie("username")
    user_data = gestion.find_one({'_id': username})
    
    
    volei_team = user_data['equipo_voleiball']
    futbol_team = user_data['equipo_futbol']
    balonmano_team = user_data['equipo_balonmano']
         
    
    return template('perfil',dict(username = username,
        equipo_voleiball = volei_team,
        equipo_futbol = futbol_team,
        equipo_balonmano = balonmano_team))


connection = pymongo.MongoClient("mongodb://localhost", safe=True)  
db = connection.test
gestion = db.gestion    