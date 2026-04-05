document.addEventListener('DOMContentLoaded', ()=>{
    let themeSwitcher = document.querySelector('.switcher');
    let main = document.querySelector('main');
    let articles = document.querySelectorAll('article');
    let p = document.querySelectorAll('p');
    let h3 = document.querySelectorAll('h3');
    let toggleBtn = document.querySelector('.switch-toggle')
    let themeSwicth = false;
    themeSwitcher.addEventListener('click', ()=>{
        themeSwicth = !themeSwicth;
        if(themeSwicth){
            main.style.backgroundColor = "white";
            articles.forEach(el => el.style.backgroundColor = "black");
            p.forEach(el => el.style.color = "white");
            h3.forEach(el =>el.style.color = "white");
            toggleBtn.style.backgroundColor = "white";
            themeSwitcher.style.justifyContent = "flex-start";
        }
        else{
            main.style.backgroundColor = "";
            articles.forEach(el => el.style.backgroundColor = "");
            p.forEach(el => el.style.color = "");
            h3.forEach(el =>el.style.color = "");
            toggleBtn.style.backgroundColor = "";
            themeSwitcher.style.justifyContent = "";
        }
    })
})