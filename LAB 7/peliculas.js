
$(document).ready(function(){
 
    $("#btn1").click(function(){
    $("#movies").html("");
    $.ajax({dataType: "json",url: "http://127.0.0.1:5500/LAB%7/peliculas.json",success: function(data, status, xhr){

        console.log(xhr)
        data.sort();
        data.reverse();
        $.each(data, function(indice,valor){
        $("#movies").html(
    `
        <tr>
            <td>${valor.nombre}</td>
            <td>${valor.género}</td>
            <td>${valor.año}</td>
            <td>${valor.direccion}</td>
            <td>${valor.sala}</td>
        </tr> 
    `
        +$("#movies").html()
        );
    
    });
        console.log (data);
        $("#imagen1").html('<img src='+data[0].imagen+'>')
        $("<p/>",{"class": "text-uppercase text-danger", html: "<strong> Recomendada de la Semana <strong/>"}).appendTo( "#imagen1" );
    
     }}); 
    
    });
    });
   