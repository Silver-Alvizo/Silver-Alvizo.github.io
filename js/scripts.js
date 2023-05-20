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

const btnOpenModal07 = document.querySelector("#btn-open-modal07");
const btnCloseModal07 = document.querySelector("#btn-close-modal07");
const modal07 = document.querySelector("#modal07");

const btnOpenModal08 = document.querySelector("#btn-open-modal08");
const btnCloseModal08 = document.querySelector("#btn-close-modal08");
const modal08 = document.querySelector("#modal08");

const btnOpenModal09 = document.querySelector("#btn-open-modal09");
const btnCloseModal09 = document.querySelector("#btn-close-modal09");
const modal09 = document.querySelector("#modal09");

const btnOpenModal10 = document.querySelector("#btn-open-modal10");
const btnCloseModal10 = document.querySelector("#btn-close-modal10");
const modal10 = document.querySelector("#modal10");

const btnOpenModal11 = document.querySelector("#btn-open-modal11");
const btnCloseModal11 = document.querySelector("#btn-close-modal11");
const modal11 = document.querySelector("#modal11");

const btnOpenModal12 = document.querySelector("#btn-open-modal12");
const btnCloseModal12 = document.querySelector("#btn-close-modal12");
const modal12 = document.querySelector("#modal12");

const btnOpenModal13 = document.querySelector("#btn-open-modal13");
const btnCloseModal13 = document.querySelector("#btn-close-modal13");
const modal13 = document.querySelector("#modal13");

const btnOpenModal14 = document.querySelector("#btn-open-modal14");
const btnCloseModal14 = document.querySelector("#btn-close-modal14");
const modal14 = document.querySelector("#modal14");

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

btnOpenModal07.addEventListener("click",()=>{
    modal07.showModal();
});

btnCloseModal07.addEventListener("click",()=>{
    modal07.close();
});

btnOpenModal08.addEventListener("click",()=>{
    modal08.showModal();
});

btnCloseModal08.addEventListener("click",()=>{
    modal08.close();
});

btnOpenModal09.addEventListener("click",()=>{
    modal09.showModal();
});

btnCloseModal09.addEventListener("click",()=>{
    modal09.close();
});

btnOpenModal10.addEventListener("click",()=>{
    modal10.showModal();
});

btnCloseModal10.addEventListener("click",()=>{
    modal10.close();
});

btnOpenModal11.addEventListener("click",()=>{
    modal11.showModal();
});

btnCloseModal11.addEventListener("click",()=>{
    modal11.close();
});

btnOpenModal12.addEventListener("click",()=>{
    modal12.showModal();
});

btnCloseModal12.addEventListener("click",()=>{
    modal12.close();
});


btnOpenModal13.addEventListener("click",()=>{
    modal13.showModal();
});

btnCloseModal13.addEventListener("click",()=>{
    modal13.close();
});

btnOpenModal14.addEventListener("click",()=>{
    modal14.showModal();
});

btnCloseModal14.addEventListener("click",()=>{
    modal14.close();
});

window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    header.classList.toggle('down',window.scrollY > 0);
});
