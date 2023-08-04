//header, footer JS
//header 전체메뉴 스크립트 flow
// 1. oepn-nav 초기숨기기
//2. 햄버거 메뉴 (nav) 클릭시 open-nav 출력
//3. open-nav 안 x 버튼 (nav-close) 클릭시 open-nav 숨기기
// 변수생성
const openNav = document.querySelector('.open_nav') //nav 클릭 시 open대상
const nav = document.querySelector('#nav') // 햄버거메뉴
const navClose = document.querySelector('#nav_close') //닫기버튼
const navCloseImg = document.querySelector('#nav_close img')
// 확인
console.log(openNav, nav, navClose, navCloseImg)
// 숨기기 및 이벤트
openNav.style.transform = 'translateX(100%)' //1. 숨기기
openNav.style.transition = 'all 0.9s'
//css값 상태에 따라 변경이 일어날 경우 애니메이션 transition
nav.addEventListener('click', function(){//2. open-nav출력
    openNav.style.transform = 'translateX(0)'
    // openNav.style.display = 'flex'
    //display:none 으로 숨긴 대상을 다시 보이게 할 경우
    //기존 디자인css 에서 flex로 설정한대상이라면 display = 'flex'
    //기존 디자인css 에서 flex로 설정이 없었다면 display = 'block'
})
navClose.addEventListener('click', function(){//3. open-nav 다시 숨기기
    openNav.style.transform = 'translateX(100%)'
})
navClose.addEventListener('mouseover', function(){
    navCloseImg.src = './images/nav_close_mouseover.png'
})
navClose.addEventListener('mouseout', function(){
    navCloseImg.src = './images/nav_close.png'
})
//swiper-slide-open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:2000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    }
});
