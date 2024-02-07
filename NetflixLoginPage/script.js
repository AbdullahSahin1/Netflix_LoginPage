const netfix = document.querySelector('.netfix');
const p = document.querySelector('.netflixp')
netfix.addEventListener('click',()=>{
    document.querySelector(".netflixp").style.display = "block"
})

const cost = document.querySelector('.cost');
const costP = document.querySelector('.costp')
cost.addEventListener('click',()=>{
    document.querySelector(".costp").style.display = "block"
})

const where = document.querySelector('.where');
const whereP = document.querySelector('.wherep')
where.addEventListener('click',()=>{
    document.querySelector(".wherep").style.display = "block"
})

const kids = document.querySelector('.kids');
const kidsp = document.querySelector('.kidsp')
kids.addEventListener('click',()=>{
    document.querySelector(".kidsp").style.display = "block"
})

const what = document.querySelector('.what');
const whatp = document.querySelector('.whatp')
what.addEventListener('click',()=>{
    document.querySelector(".whatp").style.display = "block"
})

const ignore = document.querySelector('.ignore');
const ignorep = document.querySelector('.ignorep')
ignore.addEventListener('click',()=>{
    document.querySelector(".ignorep").style.display = "block"
})

const headerButton = document.querySelector('.btn');
const showButton = document.querySelector('.show');
const footerButton = document.querySelector('.FooterButton');

runEventListener();

function runEventListener(){
    headerButton.addEventListener("click",()=>{
        window.open("http://127.0.0.1:5500/index.html")
    })
    showButton.addEventListener("click",()=>{
        window.open("http://127.0.0.1:5500/index.html")
    })
    footerButton.addEventListener("click",()=>{
        window.open("http://127.0.0.1:5500/index.html")
    })
}
