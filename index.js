//toggle navbar

const mobile_nav = document.querySelector(".mobilenav");
const header = document.querySelector(".header");
toggleNavbar=()=>{
    header.classList.toggle("active");
}
mobile_nav.addEventListener("click",()=>
toggleNavbar()
);

//text animation
const mediaQuery = window.matchMedia('(max-width:60rem)');
let title= document.querySelector('.para');
let content = "I'm Asmita Sagarkar. I'm a passionate fullstack web-developer from Indore.";
let index=1;
// var audio = new audio("Keyboard-Typing.mp3");
const typeWriter=()=>{

    if(mediaQuery.matches){
    let new_title = content.slice(0,index);
    title.innerText = new_title;
    index++;
    // index>content.length?index=1:index++;
    

    setTimeout(() =>typeWriter(), 100);
    }
    else{
    let new_title = content.slice(0,index);
    title.innerText = new_title;
    //index++;
    index>content.length?index=1:index++;

    setTimeout(() =>typeWriter(), 100);
    // setTimeout(()=>audio.play,100);
    }
}
typeWriter();
