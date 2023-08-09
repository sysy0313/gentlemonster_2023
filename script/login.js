//login js
// --------비회원숨기기
const guest = document.querySelector('.guest > a')
const guestFrm = document.querySelector('#guestFrm')
const main = document.querySelector('main')
//---------로그인
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const login_btn = document.querySelector('#login_btn')
const login_error = document.querySelector('#loginFrm .error')
//-----------비회원주문조회
const guest_num = document.querySelector('#guest_num')
const guest_mail = document.querySelector('#guest_mail')
const guest_btn = document.querySelector('#guest_btn')
const guest_error = document.querySelector('#guestFrm .error')
//---------확인
console.log(guest, guestFrm, user_id, user_pw, login_btn, login_error, main)
console.log(guest_num, guest_mail, guest_btn, guest_error)
// ---------초기 숨기기
guestFrm.style.height = '0'
guest.addEventListener('click', function(e){
    e.preventDefault()
    guestFrm.classList.toggle('openClose')
    this.classList.toggle('openGuest')
})
//-------- 아이디 비밀번호 메시지
login_btn.addEventListener('click', function(){
    if(user_id.value === '' && user_pw.value !== ''){
        login_error.innerHTML = '이메일을 입력해주세요'
    }else if(user_id.value !== '' && user_pw.value === ''){
        login_error.innerHTML ='비밀번호를 입력해주세요'
    }else if (user_id.value === '' && user_pw.value === ''){
        login_error.innerHTML ='이메일과 비밀번호를 입력해주세요'
    }else{
        window.alert(`${user_id.value}님! 환영합니다!`)
        login_error.innerHTML = ''
    }
})
//----------비회원 주문조회 메시지
guest_btn.addEventListener('click', function(){
    if(guest_num.value === '' && guest_mail.value !== ''){
        guest_error.innerHTML = '주문번호를 입력해주세요'
    }else if(guest_num.value !== '' && guest_mail.value === ''){
        guest_error.innerHTML ='이메일을 입력해주세요'
    }else if (guest_num.value === '' && guest_mail.value === ''){
        guest_error.innerHTML ='주문번호와 이메일을 입력해주세요'
    }else{
        window.alert(`주문번호 '${guest_num.value}'님! 환영합니다!`)
        guest_error.innerHTML = ''
    }
})
