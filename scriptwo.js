const accordion = document.getElementsByClassName("contentbox");

for(1 = 0; i<accordion.length; i++){

    accordion[i].addEventListener("click",function(){
        this.classList.toggle("activate")
    })
}