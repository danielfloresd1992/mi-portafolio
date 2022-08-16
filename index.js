const btnClose = document.getElementById('toogle-close');
const menu = document.getElementById('menu');
let key = null;
window.addEventListener('DOMContentLoaded', e => {
    btnClose.addEventListener('click', () => {
        menu.classList.toggle('opend');
    });
});

function textAnimate(v1, v2, v3,boolean){
    const barra1 = document.querySelectorAll('.hibilitities_barra')[v1];
    const barra2 = document.querySelectorAll('.hibilitities_marcador')[v2];
    const indiceTect = document.querySelectorAll('.marcador_indice')[v3];
    if(boolean){
        barra2.classList.remove(`animate${v2}`);
        return 0;
    }
    else{
        barra2.classList.add(`animate${v2}`);
        setInterval(()=>{  
            const barra1Width = window.getComputedStyle(barra1);
            const barraStyle = window.getComputedStyle(barra2);
            let valor1 = Number(barra1Width.width.substring(0, 7));
            let valor2 = Number(barraStyle.width.substring(0, 7));
            let result = valor2 * 100 / 920;
    
            isNaN(result) ? console.log(`aqui vale result: ${result}`) : indiceTect.textContent =`${parseInt(result)}%`;
            setTimeout(() => {
                clearInterval();
                clearTimeout();
            }, 5000);
        },100);
    }
}




const mainBarra = document.querySelector('.main--hibilitities');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.5, 1.0]
}

let observer = new IntersectionObserver(handleIntersect, options);
observer.observe(mainBarra);

function handleIntersect(entries){
    entries.forEach(entry => {
        console.log(entry);
        if(entry.intersectionRatio*100 > 1){
            textAnimate(0,0,0, false);
            textAnimate(1,1,1, false);
            textAnimate(2,2,2, false);
            key = false;
        }
        else if(entry.intersectionRatio*100 < 1){
            key = true;
            textAnimate(0,0,0, true);
            textAnimate(1,1,1, true);
            textAnimate(2,2,2, true);
        }
    });
}
