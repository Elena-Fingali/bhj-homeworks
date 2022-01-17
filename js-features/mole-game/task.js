const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getHole = (index) => {
    let currentHole = document.getElementById(`hole${index}`);
    currentHole.onclick = function() {
        if (currentHole.className.includes('hole_has-mole')){
            dead.textContent++;
            if(dead.textContent >= 10){
                alert("Победа");
            dead.textContent = 0;
            lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent >= 5) {
                alert("Вы проиграли!");
             dead.textContent = 0;
             lost.textContent = 0;   
            }
        }
    } 
};

for (let index = 1; index <=9; index++){
    getHole(index);
};