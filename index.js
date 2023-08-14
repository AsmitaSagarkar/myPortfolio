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
// const mediaQuery = window.matchMedia('(max-width:60rem)');
// // let title= document.querySelector('.para');
// let content = "I'm a passionate fullstack web-developer from Indore.";
// let index=1;
// // var audio = new audio("Keyboard-Typing.mp3");
// const typeWriter=()=>{

//     if(mediaQuery.matches){
//     let new_title = content.slice(0,index);
//     title.innerText = new_title;
//     index++;
//     // index>content.length?index=1:index++;
    

//     setTimeout(() =>typeWriter(), 100);
//     }
//     else{
//     let new_title = content.slice(0,index);
//     title.innerText = new_title;
//     //index++;
//     index>content.length?index=1:index++;

//     setTimeout(() =>typeWriter(), 100);
//     // setTimeout(()=>audio.play,100);
//     }
// }
// typeWriter();
var s = ['Web Developer.', 'Programmer.', 'Creator.', 'Innovator.'];
function typejs(stringarr) {
    
    var ele = document.getElementById('st');
    var i = 0;
    var j = 0;
    var x = [];
    var flag = 0;

    setInterval(
        function () {
            if (j == s.length) {
                j = 0;
            }
            if (i < s[j].length && flag == 0) {
                x.push(s[j][i]);
                i++;
            }
            else {
                {x.pop();
                i--;
                flag = 1;
                if (x.length == 0) {
                    flag = 0;
                    j++;
                }}
            }
            ele.innerHTML=''+ x.join('');
            // ele.style.borderRight='1px';
        }, 150
    )
}
typejs(s);


//button

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{

   
    // btn1.style.backgroundColor="#055e2a";
    const url = "https://drive.google.com/file/d/1Ukk0_8fhoWmphIogOds1lkAHdCJaZfyt/view?usp=sharing";
    setTimeout(() => {
    window.open(url,"_blank");
    // btn1.style.backgroundColor="transparent";
    }, 200);
});
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    const url = "intro.html";
    window.open(url,"_blank");
});