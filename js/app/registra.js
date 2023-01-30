 function registra(){
  $.ajax({
        type: "GET",
        dataType: "html",
        data: "nombre="+$('#nom').val()+"&apellido="+$('#ape').val()+"&dni="+$('#dni').val()+"&barrio="+$('#barrio').val()+"&usuario="+$('#user').val()+"&clave="+$('#pass').val()+
        "&mail="+$('#mail').val(),
       
        
       // url: 'http://200.91.34.81:8080/turismo_lr/backend/emergente.php',
      
       url: 'http://200.91.34.81:8080/ds_tarjeta/tierras/backend/registra.php',
        //url: 'https://turismoapp.larioja.gov.ar/public/turismo_lr/backend/emergente.php',  
        success: function(respuesta){   
           //alert(respuesta);
          mensaje('Registro Exitoso');
        loguin()
        }
 }); 
 } 
       