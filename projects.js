// portfolio
const pbtn = document.getElementById("pbtn");
pbtn.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/myPortfolio";
    pbtn.style.background = "aliceblue";
    pbtn.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        pbtn.style.background = "#001C30";
        pbtn.style.color = "aliceblue"
        
    }, 300);
});
const plink = document.getElementById("plink");
plink.addEventListener("click",()=>{
    const linkUrl = "https://asmitasagarkar.github.io/myPortfolio/";
    plink.style.background = "aliceblue";
    plink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        plink.style.background = "#001C30";
        plink.style.color = "aliceblue"
        
    }, 300);
});

const popen = document.getElementById("popen");
const pclose = document.getElementById("pclose");
const pmini = document.getElementById("pmini");


popen.addEventListener("click",()=>{
    
    popen.style.color = "#001C30";
    popen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        popen.style.background = "#001C30";
        popen.style.color = "aliceblue";
        pmini.style.display = "block";
        
    }, 200);
});
pclose.addEventListener("click",()=>{
    
    pclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        pclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    pmini.style.display = "none";
    }, 200);
});


//blog
const bloggit = document.getElementById("bloggit");
bloggit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Blog_Website/tree/master";
    bloggit.style.background = "aliceblue";
    bloggit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        bloggit.style.background = "#001C30";
        bloggit.style.color = "aliceblue"
        
    }, 300);
});
const bloglink = document.getElementById("bloglink");
bloglink.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Blog_Website/tree/master";
    bloglink.style.background = "aliceblue";
    bloglink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        bloglink.style.background = "#001C30";
        bloglink.style.color = "aliceblue"
        
    }, 300);
});

const blogopen = document.getElementById("blogopen");
const blogclose = document.getElementById("blogclose");
const blogmini = document.getElementById("blogmini");


blogopen.addEventListener("click",()=>{
    
    blogopen.style.color = "#001C30";
    blogopen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        blogopen.style.background = "#001C30";
        blogopen.style.color = "aliceblue";
        blogmini.style.display = "block";
        
    }, 200);
});
blogclose.addEventListener("click",()=>{
    
    blogclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        blogclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    blogmini.style.display = "none";
    }, 200);
});

//notes
const notesgit = document.getElementById("notesgit");
notesgit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Keep_Notes/tree/master";
    notesgit.style.background = "aliceblue";
    notesgit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        notesgit.style.background = "#001C30";
        notesgit.style.color = "aliceblue"
        
    }, 300);
});
const noteslink = document.getElementById("noteslink");
noteslink.addEventListener("click",()=>{
    const linkUrl = "https://oejb7v.csb.app/";
    noteslink.style.background = "aliceblue";
    noteslink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        noteslink.style.background = "#001C30";
        noteslink.style.color = "aliceblue"
        
    }, 300);
});

const notesopen = document.getElementById("notesopen");
const notesclose = document.getElementById("notesclose");
const notesmini = document.getElementById("notesmini");


notesopen.addEventListener("click",()=>{
    
    notesopen.style.color = "#001C30";
    notesopen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        notesopen.style.background = "#001C30";
        notesopen.style.color = "aliceblue";
        notesmini.style.display = "block";
        
    }, 200);
});
notesclose.addEventListener("click",()=>{
    
    notesclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        notesclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    notesmini.style.display = "none";
    }, 200);
});


//todo
const todogit = document.getElementById("todogit");
todogit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/To_Do_List/tree/master";
    todogit.style.background = "aliceblue";
    todogit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        todogit.style.background = "#001C30";
        todogit.style.color = "aliceblue"
        
    }, 300);
});
const todolink = document.getElementById("todolink");
todolink.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/To_Do_List/tree/master";
    todolink.style.background = "aliceblue";
    todolink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        todolink.style.background = "#001C30";
        todolink.style.color = "aliceblue"
        
    }, 300);
});

const todoopen = document.getElementById("todoopen");
const todoclose = document.getElementById("todoclose");
const todomini = document.getElementById("todomini");


todoopen.addEventListener("click",()=>{
    
    todoopen.style.color = "#001C30";
    todoopen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        todoopen.style.background = "#001C30";
        todoopen.style.color = "aliceblue";
        todomini.style.display = "block";
        
    }, 200);
});
todoclose.addEventListener("click",()=>{
    
    todoclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        todoclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    todomini.style.display = "none";
    }, 200);
});


//emoji
const emojigit = document.getElementById("emojigit");
emojigit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Emojipedia";
    emojigit.style.background = "aliceblue";
    emojigit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        emojigit.style.background = "#001C30";
        emojigit.style.color = "aliceblue"
        
    }, 300);
});
const emojilink = document.getElementById("emojilink");
emojilink.addEventListener("click",()=>{
    const linkUrl = "https://codesandbox.io/p/github/AsmitaSagarkar/Emojipedia/main";
    emojilink.style.background = "aliceblue";
    emojilink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        emojilink.style.background = "#001C30";
        emojilink.style.color = "aliceblue"
        
    }, 300);
});

const emojiopen = document.getElementById("emojiopen");
const emojiclose = document.getElementById("emojiclose");
const emojimini = document.getElementById("emojimini");


emojiopen.addEventListener("click",()=>{
    
    emojiopen.style.color = "#001C30";
    emojiopen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        emojiopen.style.background = "#001C30";
        emojiopen.style.color = "aliceblue";
        emojimini.style.display = "block";
        
    }, 200);
});
emojiclose.addEventListener("click",()=>{
    
    emojiclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        emojiclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    emojimini.style.display = "none";
    }, 200);
});


//startup
const startupgit = document.getElementById("startupgit");
startupgit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Tin-Dog";
    startupgit.style.background = "aliceblue";
    startupgit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        startupgit.style.background = "#001C30";
        startupgit.style.color = "aliceblue"
        
    }, 300);
});
const startuplink = document.getElementById("startuplink");
startuplink.addEventListener("click",()=>{
    const linkUrl = "https://asmitasagarkar.github.io/Tin-Dog/";
    startuplink.style.background = "aliceblue";
    startuplink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        startuplink.style.background = "#001C30";
        startuplink.style.color = "aliceblue"
        
    }, 300);
});

const startupopen = document.getElementById("startupopen");
const startupclose = document.getElementById("startupclose");
const startupmini = document.getElementById("startupmini");


startupopen.addEventListener("click",()=>{
    
    startupopen.style.color = "#001C30";
    startupopen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        startupopen.style.background = "#001C30";
        startupopen.style.color = "aliceblue";
        startupmini.style.display = "block";
        
    }, 200);
});
startupclose.addEventListener("click",()=>{
    
    startupclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        startupclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    startupmini.style.display = "none";
    }, 200);
});


//weather
const weathergit = document.getElementById("weathergit");
weathergit.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Weather_Website";
    weathergit.style.background = "aliceblue";
    weathergit.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        weathergit.style.background = "#001C30";
        weathergit.style.color = "aliceblue"
        
    }, 300);
});
const weatherlink = document.getElementById("weatherlink");
weatherlink.addEventListener("click",()=>{
    const linkUrl = "https://github.com/AsmitaSagarkar/Weather_Website";
    weatherlink.style.background = "aliceblue";
    weatherlink.style.color = "#001C30";
    setTimeout(() => {
        window.open(linkUrl, "_blank");
        weatherlink.style.background = "#001C30";
        weatherlink.style.color = "aliceblue"
        
    }, 300);
});
const weatheropen = document.getElementById("weatheropen");
const weatherclose = document.getElementById("weatherclose");
const weathermini = document.getElementById("weathermini");


weatheropen.addEventListener("click",()=>{
    
    weatheropen.style.color = "#001C30";
    weatheropen.style.backgroundColor = "aliceblue";

    setTimeout(() => {
        weatheropen.style.background = "#001C30";
        weatheropen.style.color = "aliceblue";
        weathermini.style.display = "block";
        
    }, 200);
});
weatherclose.addEventListener("click",()=>{
    
    weatherclose.style.color = "#27ae60";
    // pclose.style.backgroundColor="aliceblue";
    setTimeout(() => {
        weatherclose.style.color = "aliceblue";
    // pclose.style.backgroundColor="black";
    weathermini.style.display = "none";
    }, 200);
});
