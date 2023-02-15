let swiper = new Swiper('.slider', {
    speed: 1500,
    mousewheel: {
        enabled: true,
        sensitivity: 2.5
    },
    direction: 'vertical',
    parallax: true,
    // freeMode: true,
    forceToAxis: true,
    touchReleaseOnEdges:true,
})

let swiper_inner = new Swiper('.second-info-block', {
    speed: 1500,
    mousewheel: {
        enabled: true,
        sensitivity: 2.5
    },
    forceToAxis: true,
    touchReleaseOnEdges:true,
    direction: 'horizontal',

    // freeMode: true,
    nested: true
})

swiper.on('reachBeginning', function(){
    console.log('its Beginning');
})

const header = document.querySelector('.main-header');
const logo = document.querySelector('.logo');
const first_drops = document.querySelector('.first-drops')

swiper.on('progress', function(){
    // console.log('changed');
    if(!swiper.isBeginning){
        // console.log('beginning');
        // console.log(header);
        header.style = 'height: 7%; width: 100%; top: 0';
        logo.style = 'background-image: url("../resources/logo.png"); height: calc(30px + 20 * (100vw / 800)); width: calc(30px + 20 * (100vw / 800)); background-size: contain; left: 0;'
        first_drops.style = 'margin-left: 5%;'
        // header.style = 'width: 80%';
        // header.style = 'top: 3%';


        // console.log(swiper.activeIndex);
        // let active_index = swiper.realIndex;
        // if (active_index == 3){
        //     console.log('444');
        //     // swiper.slideTo(3, 500);
        //     swiper_inner.enabled = true;
        // } else {
        //     swiper_inner.enabled = false;
        // }
        // // const slide_3 = swiper.slides[2];
        // // // console.log(slide_3);
        // // console.log(swiper.progres);

    
    } else {
        
        header.style = 'height: 10%; width: 80%; top: 3%';
        logo.style = 'background-image: url("../resources/big_logo.png"); height: calc(70px + 20 * (100vw / 800)); width: calc(240px + 20 * (100vw / 800));'
        first_drops.style = 'margin-left: 15%;'
        

    }
})


// const allowScroll = (swiper: SwiperEvent) => {
//     var activeIndex = swiper.activeIndex;
//     var activeSlide = swiper.slides[activeIndex];
//     var { scrollHeight, clientHeight } = activeSlide;
//     const diff = scrollHeight - clientHeight;
//     if (diff > 0) {
//       const findScroll = (e) => {
//         const scrollUp = e.deltaY < 0;
//         if (scrollUp && activeSlide.scrollTop === 0) {
//           swiper.mousewheel.enable();
//           activeSlide.removeEventListener("wheel", findScroll);
//         } else if (!scrollUp && activeSlide.scrollTop === diff) {
//           swiper.mousewheel.enable();
//           activeSlide.scrollTop = 0;
//           activeSlide.removeEventListener("wheel", findScroll);
//         }
//       };
//       activeSlide.addEventListener("wheel", findScroll);
//       swiper.mousewheel.disable();
//     }
//   };

// const first_block = document.querySelector('.first-block');
// first_block.onmouseover(function(){
//     consele.log('test');
// })
