const spaces = document.querySelectorAll(".space")

let player = "X"

const printplayer = (nSpace)=> {
    if(isEmpty(nSpace)){
        spaces[nSpace].innerHTML = player;
        player = player == "X" ? "O" : "X";
    }else{
        alert("Espacio Ocupado")
    }
}

const isEmpty = (nS) => {
    if(spaces[nS].innerHTML == ""){
        return true
    }else{
        return false
    }
}

spaces.forEach(space => {
    space.addEventListener("click", () => { 
        printplayer(parseInt(space.id)-1)
    })
});