$(function()
{
	var listadoLOCALSTORAGE = [];
	var cadena=[];
	$(document).keypress(function(e){

		if(e.which == 13){
			var Actividad = $("#Campo_Texto").val();
				var objTMP = eval(localStorage.getItem("LS_Actividad"));
			    listadoLOCALSTORAGE.push({identificador : Actividad});
	            localStorage.setItem("LS_Actividad", JSON.stringify(listadoLOCALSTORAGE));
	            $("#Label").val(Actividad);
			$("#Campo_Texto").val('');
		}
	});

   function imprimeUsuarios(Actividad)
	{
		var datos = $("#Label").val();
		if(datos.length > 0){
			
			$("#Label").val(cadena);
		}else{
			console.log("no hay nada");
			
		}
	}

});