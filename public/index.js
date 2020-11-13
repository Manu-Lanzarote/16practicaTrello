function newGame(){
    fetch('/nuevaPartida')
      .then(res => res.json())
      .then(function (datos) {
        for( let i = 0; i < 16 ; i++) {
            mostrar += datos.items[i].pagemap.cse_image
        }
    });


   document.getElementById("show").innerHTML = mostrar
}

function top25(){
    /* llama al back para que devuelva el top25 de las mejores puntuaciones. Luego las imprime en el ID designado */
}

