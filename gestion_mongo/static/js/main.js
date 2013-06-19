$(document).ready(function () {

/* JS /SPORTS */
ajax_voleiball_crear();
ajax_voleiball_unirse();
cambios_input_voleiball();

ajax_balonmano_crear();
ajax_balonmano_unirse();
cambios_input_balonmano();

ajax_futbol_crear();
ajax_futbol_unirse();
cambios_input_futbol();


/* JS PERFIL */
ajax_borrar_voleiball();
ajax_borrar_futbol();
ajax_borrar_balonmano();

});

/***************************Voleiball a partir de aqui ******************************/

//Llamada ajax a python que va a intentar unirse un equipo de voleiball
function ajax_voleiball_unirse(){
	
	
	$('#form_unirse_volei').submit(function(){
		team_name = $('#unirse_equipo_voleiball').val();
		
				
		$.ajax({
		    type: "POST",
		    url: "/unirse_equipo_voleiball",
		    data: JSON.stringify({myDict: {'equipo_voleiball': team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_unirse_equipo_voleiball').css('display','block').html("<strong>Ya tiene equipo</strong>").fadeOut(5000);
			  	else if (result == "El equipo no existe")
			  		$('#error_unirse_equipo_voleiball').css('display','block').html("<strong>El equipo no existe</strong>").fadeOut(5000);
			  	else if (result == "Inscrito al equipo")
			  		$('#ok_unirse_equipo_voleiball').css('display','block').html("<strong>Inscrito al equipo</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_unirse_equipo_voleiball').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};



//Llamada ajax a python que va a intentar crear un equipo de voleiball
function ajax_voleiball_crear(){
	
	
	$('#form_crear_volei').submit(function(){
		new_team_name = $('#nombre_equipo_voleiball').val();
				
		$.ajax({
		    type: "POST",
		    url: "/crear_equipo_voleiball",
		    data: JSON.stringify({myDict: {'equipo_voleiball': new_team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_crear_equipo_voleiball').css('display','block').html("<strong>Ya dispone de equipo</strong>").fadeOut(5000);
			  	else if (result == "Equipo creado correctamente")
			  		$('#ok_crear_equipo_voleiball').css('display','block').html("<strong>Equipo creado correctamente</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_crear_equipo_voleiball').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};





//Funcion que comprueba que haya cambios en algun input 
//y nos deshabilita otro input
function cambios_input_voleiball(){
	
	$('#nombre_equipo_voleiball').keyup(function(){
		
		var text = $('#nombre_equipo_voleiball').val();
		if (text != "" || text == undefined)
			$('#unirse_equipo_voleiball').attr('disabled','disabled');
		else
			$("#unirse_equipo_voleiball").removeAttr('disabled');
	});
	
	$('#unirse_equipo_voleiball').keyup(function(){
		
		var text = $('#unirse_equipo_voleiball').val();
		if (text != "" || text == undefined)
			$('#nombre_equipo_voleiball').attr('disabled','disabled');
		else
			$("#nombre_equipo_voleiball").removeAttr('disabled');
	});
};
/***************************Voleiball hasta aqui *********************************/

/***************************Balonmano a partir de aqui ******************************/

//Llamada ajax a python que va a intentar unirse un equipo de balonmano
function ajax_balonmano_unirse(){
	
	
	$('#form_unirse_balonmano').submit(function(){
		team_name = $('#unirse_equipo_balonmano').val();
		
				
		$.ajax({
		    type: "POST",
		    url: "/unirse_equipo_balonmano",
		    data: JSON.stringify({myDict: {'equipo_balonmano': team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_unirse_equipo_balonmano').css('display','block').html("<strong>Ya tiene equipo</strong>").fadeOut(5000);
			  	else if (result == "El equipo no existe")
			  		$('#error_unirse_equipo_balonmano').css('display','block').html("<strong>El equipo no existe</strong>").fadeOut(5000);
			  	else if (result == "Inscrito al equipo")
			  		$('#ok_unirse_equipo_balonmano').css('display','block').html("<strong>Inscrito al equipo</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_unirse_equipo_balonmano').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};



//Llamada ajax a python que va a intentar crear un equipo de balonmano
function ajax_balonmano_crear(){
	
	
	$('#form_crear_balonmano').submit(function(){
		new_team_name = $('#nombre_equipo_balonmano').val();
				
		$.ajax({
		    type: "POST",
		    url: "/crear_equipo_balonmano",
		    data: JSON.stringify({myDict: {'equipo_balonmano': new_team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_crear_equipo_balonmano').css('display','block').html("<strong>Ya dispone de equipo</strong>").fadeOut(5000);
			  	else if (result == "Equipo creado correctamente")
			  		$('#ok_crear_equipo_balonmano').css('display','block').html("<strong>Equipo creado correctamente</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_crear_equipo_balonmano').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};





//Funcion que comprueba que haya cambios en algun input 
//y nos deshabilita otro input
function cambios_input_balonmano(){
	
	$('#nombre_equipo_balonmano').keyup(function(){
		
		var text = $('#nombre_equipo_balonmano').val();
		if (text != "" || text == undefined)
			$('#unirse_equipo_balonmano').attr('disabled','disabled');
		else
			$("#unirse_equipo_balonmano").removeAttr('disabled');
	});
	
	$('#unirse_equipo_balonmano').keyup(function(){
		
		var text = $('#unirse_equipo_balonmano').val();
		if (text != "" || text == undefined)
			$('#nombre_equipo_balonmano').attr('disabled','disabled');
		else
			$("#nombre_equipo_balonmano").removeAttr('disabled');
	});
};

/***************************Balonmano hasta aqui *********************************/

/***************************Futbol a partir de aqui ******************************/

//Llamada ajax a python que va a intentar unirse un equipo de futbol
function ajax_futbol_unirse(){
	
	
	$('#form_unirse_futbol').submit(function(){
		team_name = $('#unirse_equipo_futbol').val();
		
				
		$.ajax({
		    type: "POST",
		    url: "/unirse_equipo_futbol",
		    data: JSON.stringify({myDict: {'equipo_futbol': team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_unirse_equipo_futbol').css('display','block').html("<strong>Ya tiene equipo</strong>").fadeOut(5000);
			  	else if (result == "El equipo no existe")
			  		$('#error_unirse_equipo_futbol').css('display','block').html("<strong>El equipo no existe</strong>").fadeOut(5000);
			  	else if (result == "Inscrito al equipo")
			  		$('#ok_unirse_equipo_futbol').css('display','block').html("<strong>Inscrito al equipo</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_unirse_equipo_futbol').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};



//Llamada ajax a python que va a intentar crear un equipo de futbol
function ajax_futbol_crear(){
	
	
	$('#form_crear_futbol').submit(function(){
		new_team_name = $('#nombre_equipo_futbol').val();
				
		$.ajax({
		    type: "POST",
		    url: "/crear_equipo_futbol",
		    data: JSON.stringify({myDict: {'equipo_futbol': new_team_name}}),
		    contentType: "application/json; charset=utf-8"
		    }).done(function(result) {
		    	
			  	if (result == "Ya tiene equipo")
			  		$('#error_crear_equipo_futbol').css('display','block').html("<strong>Ya dispone de equipo</strong>").fadeOut(5000);
			  	else if (result == "Equipo creado correctamente")
			  		$('#ok_crear_equipo_futbol').css('display','block').html("<strong>Equipo creado correctamente</strong>").fadeOut(5000);
			  	else if (result == "Introduzca nombre de equipo")
			  		$('#warning_crear_equipo_futbol').css('display','block').html("<strong>Introduzca nombre de equipo</strong>").fadeOut(5000);
			});
			return false;
		});
};





//Funcion que comprueba que haya cambios en algun input 
//y nos deshabilita otro input
function cambios_input_futbol(){
	
	$('#nombre_equipo_futbol').keyup(function(){
		
		var text = $('#nombre_equipo_futbol').val();
		if (text != "" || text == undefined)
			$('#unirse_equipo_futbol').attr('disabled','disabled');
		else
			$("#unirse_equipo_futbol").removeAttr('disabled');
	});
	
	$('#unirse_equipo_futbol').keyup(function(){
		
		var text = $('#unirse_equipo_futbol').val();
		if (text != "" || text == undefined)
			$('#nombre_equipo_futbol').attr('disabled','disabled');
		else
			$("#nombre_equipo_futbol").removeAttr('disabled');
	});
};
/***************************futbol hasta aqui *********************************/


/************************** ajax borrar equipo volei **************************/

function ajax_borrar_voleiball(){
	
	$('#borrar_voleyball').click(function(){
		$.ajax({
		    type: "POST",
		    url: "/borrar_equipo_voleyball"		    
		    }).done(function(result) {
		    	if (result == "Equipo borrado correctamente")
		    		$(location).attr('href','/perfil');
		    	else
		    		alert("error");
			});
			
	});
};

/************************** ajax borrar equipo futbol **************************/

function ajax_borrar_futbol(){
	
	$('#borrar_futbol').click(function(){
		$.ajax({
		    type: "POST",
		    url: "/borrar_equipo_futbol"		    
		    }).done(function(result) {
		    	if (result == "Equipo borrado correctamente")
		    		$(location).attr('href','/perfil');
		    	else
		    		alert("error");
			});
			
	});
}
/************************** ajax borrar equipo balonmano **************************/

function ajax_borrar_balonmano(){
	
	$('#borrar_balonmano').click(function(){
		$.ajax({
		    type: "POST",
		    url: "/borrar_equipo_balonmano"		    
		    }).done(function(result) {
		    	if (result == "Equipo borrado correctamente")
		    		$(location).attr('href','/perfil');
		    	else
		    		alert("error");
			});
		});
}

