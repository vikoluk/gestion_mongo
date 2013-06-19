from bottle import route, error, post, get, run, static_file, abort, redirect, response, request, template
import pymongo
import bottle


##CREAR EQUIPO VOLEI
@route('/crear_equipo_voleiball', method="POST")
def crear_equipo_voleiball():
    
    username = request.get_cookie("username")
    myDict = request.json['myDict']
    new_team_name = myDict['equipo_voleiball']
    
    #Comprobamos que no tenga ningun equipo
    user = gestion.find_one({'_id': username})
    team_name_bbdd = user['equipo_voleiball']
    
    if (new_team_name == ""):
        return "Introduzca nombre de equipo"
    
    if  (team_name_bbdd != "" ):    
        return "Ya tiene equipo"
    else:
        try:
            db.gestion.update({ '_id' : username },{'$set': { 'equipo_voleiball': new_team_name }})
            return "Equipo creado correctamente"
        except pymongo.errors.OperationFailure:
            print "oops, mongo error"
            return bottle.template("error")


##CREAR EQUIPO VOLEI
@route('/unirse_equipo_voleiball', method="POST")
def unirse_equipo_voleiball():
    
    username = request.get_cookie("username")
    myDict = request.json['myDict']
    team_name = myDict['equipo_voleiball']    
    print team_name
    user = gestion.find_one({'_id': username})
    
    if (team_name == ""):
        return "Introduzca nombre de equipo"
    
    #Primero comprobamos que no tenga equipo
    team_name_bbdd = user['equipo_voleiball']
    if (team_name_bbdd != ""):
        return "Ya tiene equipo"
    
    #Ahora comprobamos que el equipo exista
    else:
        
        team = gestion.find({'equipo_voleiball': team_name}).count()
        print team
        if (team == 0): #No existe el equipo
            return "El equipo no existe"
        else: #Existe el equipo, le aniadimos al mismo
            try:
                print team_name
                print username
                gestion.update({ '_id' : username },{'$set': { 'equipo_voleiball': team_name }})
                return "Inscrito al equipo"
            except pymongo.errors.OperationFailure:
                print "oops, mongo error"
                return bottle.template("error")


#Borrar equipo voley
@route('/borrar_equipo_voleyball', method="POST")
def borrar_equipo_voleiball():
    
    username = request.get_cookie("username")
    try:
        db.gestion.update({ '_id' : username },{'$set': { 'equipo_voleiball': '' }})
        return "Equipo borrado correctamente"
    except pymongo.errors.OperationFailure:
        return "Error con la operacion"
    
    
    
connection = pymongo.MongoClient("mongodb://localhost", safe=True)  
db = connection.test
gestion = db.gestion