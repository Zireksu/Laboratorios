var num=1, sumapar=0, sumaimpar=0

while (num<=200){
    if(num%2==0){
        sumapar+=num
    }

    else{
        sumaimpar+=num
    }

    num=num+1
}

alert("El resultado de la suma de los numeros pares (Rango 1 - 200) es: "+sumapar)
alert("El resultado de la suma de los numeros impares (Rango 1 - 200) es: "+sumaimpar)