AOS.init({
 duration:1000,
 once:true
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar nav').classList.toggle('show');
});
document.querySelectorAll('.accordian-title').forEach(title=>{
    title.addEventListener('click',()=>{
        const content=title.nextElementSibling;
        content.style.display=content.style.display==='block' ?'none':'block';
})
})
const accordianItems = document.querySelectorAll('.accordian-item');
accordianItems.forEach(item => {
item.addEventListener('click', () => {
    accordianItems.forEach(el => {
        if (el !== item)  el.classList.remove('active');
});
        item.classList.toggle('active');
    })
});
const counters = document.querySelectorAll('.counter');
let counterStarted = false;
const startCounter = () => {
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;
            if (count < target) {
       counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 20);
            } else {
       counter.innerText = target;
            }
    };
        updateCounter();
    });
};
window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter-section');
    const sectionTop = section.offsetTop;

    if(!counterStarted && window.scrollY + window.innerHeight >= sectionTop) {
        startCounter();
        conterStarted = true;
    }
});
const bnt = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        bnt.style.display = "block";
    } else {
        bnt.style.display = "none";
    }
}
bnt.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('#mainHeader');
    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});