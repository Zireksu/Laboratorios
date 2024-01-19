        var padre = document.querySelector('div');
        

        //Remplazar titulo
        function cambiartxt() {
        var newelement = document.createElement('h1');
        var newtitulo = document.createTextNode('"HARRY POTTER Y EL MISTERIO DE JAVASCRIPT"');
        var nomtitulo = document.getElementById('titulo');

        newelement.appendChild(newtitulo);
        padre.replaceChild(newelement,nomtitulo);
            
        }


        //agregar el nuevo parrafo
        var agregar = document.createElement('p');
        var newparrafo = document.createTextNode('Próximo libro: Compilando las Reliquias de Javascript – Parte I');

        padre.appendChild(agregar);
        agregar.appendChild(newparrafo);


        //Contar el numero de enlaces dentro del contenido
        var cont = 0
        while (document.getElementsByTagName('a')[cont]!=undefined){
        cont++
        }
        function cantlinks(){
         return this.cont
        }


        //Contar el numero de enlaces dentro del parrafo 3
        var cont2 = 0
        while (document.getElementsByClassName('p3')[cont2]!=undefined){
        cont2++
        }
        function cantp3(){
         return this.cont2
        }