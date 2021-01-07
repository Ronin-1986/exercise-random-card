
//FUNCION PARA CREAR TODAS LAS CARTAS DEL MAZO
function mazoCartas() {
    //arrays con las cartas
    const numero = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const tipoCarta = ["Hearts", "Diamonds", "Spades", "Clubs"];
    
    //array que contendra la carta
    const cartaMostrar = [];

    //ciclo genera numero y tipo de carta
    for (let i = 0; i < tipoCarta.length; i++) {
      for (let v = 0; v < numero.length; v++) {
        const valor = numero[v];
        const tipo = tipoCarta[i];
        cartaMostrar.push({ valor, tipo });
      }
    } 
    //retorna la carta
    return cartaMostrar;
  }
  //FIN DE FUNCIÓN AQUI YA REGRESA UNA CARTA
  
  //FUNCION DE CARTA AL AZAR
  function randomCard(carta) {  
      const random = Math.floor(Math.random() * 51);  //genero carta al azar.
      const cardValor = carta[random].valor; // numero de la carta
      const cardTipo = carta[random].tipo; // color y tipo
      let cartaFinal; 

      cardTipo === "Diamonds" ? (cartaFinal = "&diams;") : (cartaFinal = "&" + cardTipo.toLowerCase() + ";"); //validar si es diamantes?
      const card = document.createElement("div"); //creo la carta en html
      card.classList.add("card", cardTipo.toLowerCase()); 
      card.innerHTML = 
      '<span class="card-value-suit top">' + cardValor + cartaFinal + '</span>' + 
      '<span class="card-suit">' + cartaFinal + '</span>' + 
      '<span class="card-value-suit bot">' + cardValor + cartaFinal + '</span>';
      document.body.appendChild(card);
    }
    
    const cards = mazoCartas();
    randomCard(cards);