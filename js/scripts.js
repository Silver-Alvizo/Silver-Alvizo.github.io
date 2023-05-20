const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const modal = document.querySelector("#modal");

const btnOpenModal02 = document.querySelector("#btn-open-modal02");
const btnCloseModal02 = document.querySelector("#btn-close-modal02");
const modal02 = document.querySelector("#modal02");

const btnOpenModal03 = document.querySelector("#btn-open-modal03");
const btnCloseModal03 = document.querySelector("#btn-close-modal03");
const modal03 = document.querySelector("#modal03");

const btnOpenModal04 = document.querySelector("#btn-open-modal04");
const btnCloseModal04 = document.querySelector("#btn-close-modal04");
const modal04 = document.querySelector("#modal04");

const btnOpenModal05 = document.querySelector("#btn-open-modal05");
const btnCloseModal05 = document.querySelector("#btn-close-modal05");
const modal05 = document.querySelector("#modal05");

const btnOpenModal06 = document.querySelector("#btn-open-modal06");
const btnCloseModal06 = document.querySelector("#btn-close-modal06");
const modal06 = document.querySelector("#modal06");


btnOpenModal.addEventListener("click",()=>{
    modal.showModal();
});

btnCloseModal.addEventListener("click",()=>{
    modal.close();
});

btnOpenModal02.addEventListener("click",()=>{
    modal02.showModal();
});

btnCloseModal02.addEventListener("click",()=>{
    modal02.close();
});

btnOpenModal03.addEventListener("click",()=>{
    modal03.showModal();
});

btnCloseModal03.addEventListener("click",()=>{
    modal03.close();
});

btnOpenModal04.addEventListener("click",()=>{
    modal04.showModal();
});

btnCloseModal04.addEventListener("click",()=>{
    modal04.close();
});

btnOpenModal05.addEventListener("click",()=>{
    modal05.showModal();
});

btnCloseModal05.addEventListener("click",()=>{
    modal05.close();
});

btnOpenModal06.addEventListener("click",()=>{
    modal06.showModal();
});

btnCloseModal06.addEventListener("click",()=>{
    modal06.close();
});


window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    header.classList.toggle('down',window.scrollY > 0);
});