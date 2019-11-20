function xadrez(peca){
peca=peca.toUpperCase();

switch(peca){
    case "RAINHA":
        console.log("Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres");
        break;
    case "TORRE":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser");
        break;
    case "PEAO":
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
        break;
    case "BISPO":
        console.log("Move-se na diagonal, quantas casas quiser");
        break;
    case "CAVALO":
        console.log("O movimento executado pelo Cavalo é conhecido por 'um-dois' ou 'em L'. 2 casas horizontais/verticais seguidos por 1 casa vertical/horizontal.");
        break;  
    case "REI":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
        break;
    default :
        console.log("Digite um valor valido");
        break;         
}
}

xadrez('cavalo')
xadrez('carrinho')

