const characters = "https://rickandmortyapi.com/api/character?page="

var listTeste = [] 

function buscaApi(){
    var pages = Math.floor(Math.random() * 33 + 1);
    fetch(`${characters}${pages}`).then(function(response) {
        response.json().then(function(data) {
          const personagens = data.results.map(personagem=>{
                const {name, image} = personagem; 
                return {
                    name,
                    image
                }
            });
            sortearPersonagens(personagens)

        });

        
      }).catch(function(err) {
        console.error('Failed retrieving information', err);
      });
}

function sortearPersonagens(per){
    var personagensSort;
    for(var i = 0; i < 4 ; i++){
        indices = Math.floor(Math.random() * 20);
        personagensSort = per[indices]
        listTeste.push(personagensSort)
        console.log(indices + i + "----" + personagensSort.name + personagensSort.image)
    }

    mostrarResultado(listTeste)

     
}

function mostrarResultado(list){
    var nome = document.getElementById("nomePersonagem");
    var nome1 = document.getElementById("nomePersonagem1");
    var nome2 = document.getElementById("nomePersonagem2");
    var nome3 = document.getElementById("nomePersonagem3");

       var result = list[0]
       var result1 = list[1]
       var result2 = list[2]
       var result3 = list[3]

    nome.innerText = result.name
    nome1.innerText = result1.name
    nome2.innerText = result2.name
    nome3.innerText = result3.name


    document.getElementById("imgPersonagem").src = result.image
    document.getElementById("imgPersonagem1").src = result1.image
    document.getElementById("imgPersonagem2").src = result2.image
    document.getElementById("imgPersonagem3").src = result3.image


}
