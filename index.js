const time = document.querySelector('.header__content__time__now')

const a = new Date()

function calcTime(offset){
    let b = new Date()
    let utc = b.getTime()+(b.getTimezoneOffset()*60000)
    let nd = new Date(utc + (3600000*offset))
    return nd.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
    })
}

time.innerHTML = calcTime('-5')


const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close')
const formModal = document.querySelector('.modal__form')
const formModalBtn = document.querySelector('.modal__form__btn')
const openModal = document.querySelectorAll('.main__openModal')
const modalContent = document.querySelector('.modal__conteiner')
const burgerMenu = document.querySelector('.burgerMenu')
const burger = document.querySelector('.burger')
const burgerMenuHeadClose = document.querySelector('.burgerMenu__head__close')
const body = document.querySelector('body')
const modalConteinerMobile = document.querySelector('.modal__conteiner__wrapper__mobile')
const modalConteinerApplication = document.querySelector('.modal__conteiner__application')

modal.addEventListener( 'click', () => {
    modal.style.display='none'
    body.classList.remove('active')
})

closeModal.addEventListener( 'click', () => {
    modal.style.display='none'
    body.classList.remove('active')
})

modalContent.addEventListener( 'click', (event) => {
    event.stopPropagation()
})

openModal.forEach( item => {
    item.addEventListener( 'click', () => {
        modal.style.display='block'
        body.classList.add('active')
        burgerMenu.style.display='none'
        body.classList.remove('active')
    })
})

burger.addEventListener('click', function(){
    burgerMenu.style.display='block'
    body.classList.add('active')
})

burgerMenuHeadClose.addEventListener('click', function(){
    burgerMenu.style.display='none'
    body.classList.remove('active')
})


formModal.onsubmit = function(event){

    const formEmeil = formEmeilInput.value
    const formCheckbox = document.querySelector('.modal__form__check__btn').checked;
    let isSuccess = true;

    event.preventDefault();

    if (!formEmeil) {
        formEmeilInput.classList.add('error')
        isSuccess = false;
      } else {
        formEmeilInput.classList.remove('error')
      };
    
      if (!formCheckbox) {
        checkbox.classList.add('error')
        isSuccess = false;
      } else {
        checkbox.classList.remove('error')
      }

      if(isSuccess){
        console.log("bingo")
        modalConteinerMobile.style.display='none'
        modalConteinerApplication.style.display='flex'
        setTimeout(function(){
            location.reload();
        }, 3000);
      }
}