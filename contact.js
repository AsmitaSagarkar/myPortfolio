//github
const github = document.querySelector("#github");
github.addEventListener("click",()=>{
    const url = "https://github.com/AsmitaSagarkar";
    github.style.color = "#27ae60";
    setTimeout(() => {
        github.style.color = "aliceblue";
        window.open(url,"_blank");
        
    }, 200);
})


//twitter
const twitter = document.querySelector("#twitter");
twitter.addEventListener("click",()=>{
    const url = "https://twitter.com/AsmitaSagarkar";
    twitter.style.color = "#27ae60";
    setTimeout(() => {
        twitter.style.color = "aliceblue";
        window.open(url,"_blank");
        
    }, 200);
})

//mail
const mail = document.querySelector("#mail");
mail.addEventListener("click",()=>{
    const url = "mailto:asmitasagarkar@gmail.com";
    mail.style.color = "#27ae60";
    setTimeout(() => {
        mail.style.color = "aliceblue";
        window.open(url,"_blank");
        
    }, 200);
})
//linkedin
const linkedin = document.querySelector("#linkedin");
linkedin.addEventListener("click",()=>{
    const url = "https://www.linkedin.com/in/asmita-sagarkar-949a08201";
    linkedin.style.color = "#27ae60";
    setTimeout(() => {
        linkedin.style.color = "aliceblue";
        window.open(url,"_blank");
        
    }, 200);
})

//resume
const resume = document.querySelector("#resume");
resume.addEventListener("click",()=>{
    const url = "https://drive.google.com/file/d/1p5ZVhQAr6gnPuujCTYXJ42kexJl1e1t6/view";
    resume.style.color = "#27ae60";
    setTimeout(() => {
        resume.style.color = "aliceblue";
        window.open(url,"_blank");
        
    }, 200);
})