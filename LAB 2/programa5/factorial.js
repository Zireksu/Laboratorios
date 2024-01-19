var num, factorial=1


num=prompt("Ingrese el numero:",0)


while (num!=0) {
    factorial=factorial*num
    num--
}

alert("El factorial es:  "+factorial)