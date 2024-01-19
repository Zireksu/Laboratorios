var diametro, grosor

diametro=prompt("Ingrese el diamtro de la rueda",0)

grosor=prompt("Ingrese su grosor",0)

if(diametro>1.4){
    
    if(grosor>0.4){
        alert("Es una rueda para carro grande")
    }
    else{
        alert("El grosor de la rueda no cumple con el estandar recomendado")
    }
}
else if(diametro<=1.4 && diametro>0.8){
    if(grosor>0.25 && grosor<0.4){
        alert("Es una rueda para carro mediano")
    }
    else{
        alert("El grosor de la rueda no cumple con el estandar recomendado")
    }
}
else{
    alert("Es una rueda para carro pequeño")
}

