import AOS from 'aos'
import 'aos/dist/aos.css'
import Swiper, { Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

AOS.init()

new Swiper('.swiper', {
   modules: [Autoplay],

   loop: true,
   grabCursor: true,

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   centeredSlides: true,
   slideActiveClass: 'slideActiveClass',

   slidesPerView: 1.3,
   slidesPerGroup: 1,
   spaceBetween: 30,

   speed: 355,
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      992: {
         slidesPerView: 2.4,
         spaceBetween: 70,
      },
   },
})

const upBtn = document.querySelector('.up')
const scrollDistance = 200

const orderBtn = document.querySelector('.heroBody .tagline button')

orderBtn.onclick = () => {
   document.querySelector('body').classList.add('noScroll')
   document.querySelector('.wrapper').classList.add('modalActive')
   document.querySelector('body').insertAdjacentHTML(
      'beforeend',
      `
      <div class="modal">
         <div class="modalBody">
            <h3>ФОРМА ЗАЯВКИ</h3>
            <form onsubmit="return false">
               <button class="closeBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
               </button>
               <div class="userInfo">
                  <input type="text" name="name" placeholder="Ваше имя" />
                  <input type="email" name="email" placeholder="Ваш e-mail" />
               </div>
               <textarea
                  class="userMsg"
                  type="text"
                  name="message"
                  placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"
               ></textarea>
               <button class="sendBtn">отправить</button>
            </form>
         </div>
      </div>
   `
   )
}
window.onclick = event => {
   if (
      event.target.classList.contains('sendBtn') ||
      event.target.classList.contains('modal') ||
      event.target.classList.contains('closeBtn')
   ) {
      document.querySelector('body').classList.remove('noScroll')
      document.querySelector('.wrapper').classList.remove('modalActive')
      document.querySelector('.modal').remove()
   }
}

window.onscroll = () => {
   document.documentElement.scrollTop > scrollDistance
      ? upBtn.classList.add('active')
      : upBtn.classList.remove('active')
}

if (window.matchMedia('(max-width: 1180px)').matches) {
   const infoTabs = document.querySelectorAll('.about .items .item')
   infoTabs.forEach((el, i) => {
      if (i % 2 === 0) el.dataset.aos = 'fade-right'
      else el.dataset.aos = 'fade-left'
   })
}
