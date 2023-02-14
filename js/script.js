let swiper = new Swiper('.slider', {
    speed: 1500,
    mousewheel: {
        enabled: true,
        sensitivity: 2.5
    },
    direction: 'vertical',
    parallax: true,
    freeMode: true
})

swiper.on('reachBeginning', function(){
    console.log('its Beginning');
})

const header = document.querySelector('.main-header');
const logo = document.querySelector('.logo');
const first_drops = document.querySelector('.first-drops')

swiper.on('progress', function(){
    console.log('changed');
    if(!swiper.isBeginning){
        // console.log('beginning');
        // console.log(header);
        header.style = 'height: 7%; width: 100%; top: 0';
        logo.style = 'background-image: url("../resources/logo.png"); height: calc(30px + 20 * (100vw / 800)); width: calc(30px + 20 * (100vw / 800)); background-size: contain; left: 0;'
        first_drops.style = 'margin-left: 5%;'
        // header.style = 'width: 80%';
        // header.style = 'top: 3%';
    
    } else {
        
        header.style = 'height: 10%; width: 80%; top: 3%';
        logo.style = 'background-image: url("../resources/big_logo.png"); height: calc(70px + 20 * (100vw / 800)); width: calc(240px + 20 * (100vw / 800));'
        first_drops.style = 'margin-left: 15%;'
        

    }
})

// const first_block = document.querySelector('.first-block');
// first_block.onmouseover(function(){
//     consele.log('test');
// })
