/*const bfBtn = document.querySelector('#theClick .before');
const ntBtn = document.querySelector('#theClick .next');
*/
/*
for(let i=1; i < 4; i++ ){

  document.querySelector(`#pg${i} .btnDown`).onclick = function(){
    document.querySelector(`#s${i+1}`).scrollIntoView({behavior:"smooth"})
  }


}


for(let i=1; i < 4; i++ ){
  ntBtn.onclick = function(){
    document.querySelector(`#pg${i+1}`).scrollIntoView({behavior:"smooth"})
  }
}
*/

/*확인용
window.addEventListener('scroll',function(){
  console.log(window.scrollY);

})
*/

// 2 - 570 3-1200 4-1750

// 알게된 사실 -> switch문에서는 값을 비교문이 안되고, 오로지 상수로만 가능하다

//



/* 확인용
if( scl < 570 ) {
  console.log('1pg');
} else if( scl >= 570 && scl < 1200) {
  console.log('2pg');
} else if (scl >=1200 && scl < 1600){
  console.log('3pg');
} else if (scl >= 1600){
  console.log('4pg');
}
*/

/* 폐기
window.addEventListener('scroll',function(){

  if( scl < 570 ) {
    nowPg = 1
  } else if( scl >= 570 && scl < 1200) {
    nowPg = 2
  } else if (scl >=1200 && scl < 1600){
    nowPg = 3
  } else if (scl >= 1600){
    nowPg = 4
  }


})
*/

/*
switch (nowPg) {
  case 1 : ()=>{
    bfBtn.onclick = function(){
      document.querySelector('#pg1').scrollIntoView({behavior:"smooth"})
    };
    ntBtn.onclick = function(){
      pg2.scrollIntoView({behavior:"smooth"})
    };
  }
  break;
}

*/


/*
let pos = {
  y : 0, 
}
let scrollState = ()=>{
  pos.y = window.scrollY; // 현재 스크롤 값 (픽셀단위)
}

window.addEventListener('scroll',function scl(){
  scrollState();
  console.log(pos.y)
})

let scl = pos.y

let nowPg = 0

if( scl < 570 ) {
  nowPg = 1
} else if( scl >= 570 && scl < 1200) {
  nowPg = 2
} else if (scl >=1200 && scl < 1600){
  nowPg = 3
} else if (scl >= 1600){
  nowPg = 4
}

console.log(nowPg);

*/



/*-----[바로가기버튼]-------------------------------------------*/

const sub = document.querySelector('#theClick');

const btn = document.querySelector('.sub_button');


btn.onclick = function(e){
  e.preventDefault();
    
  if(!sub.classList.contains('on')){
    sub.classList.add('on')
    btn.textContent = '▼'
  } else {
    sub.classList.remove('on')
    btn.textContent = '▲'
  }


}



/*-----[TOP메뉴 아래 미니바]----------------------------------------------------*/

const elMenus = document.querySelectorAll('.top_menu a');
    const elBar = document.querySelector('.menu_bar');
    

    elMenus.forEach( item =>{
      item.addEventListener('mouseenter',function(){
        elBar.style = `width:${this.offsetWidth}px;
                      left:${this.offsetLeft}px;`
      });
      item.addEventListener('mouseleave',function(){
        elBar.style = `width:0px;
                      left:${this.offsetLeft}px;`
      } )
    })

const elBar2 = document.querySelector('.menu_bar2');
    

    elMenus.forEach( item =>{
      item.addEventListener('mouseenter',function(){
        elBar2.style = `width:${this.offsetWidth}px;
                      left:${this.offsetLeft}px;`
      });
      item.addEventListener('mouseleave',function(){
        elBar2.style = `width:0px;
                      left:${this.offsetLeft}px;`
      } )
    })


/*-----[후기]----------------------------------------------------*/
const pop = document.querySelector('.pop');
const click = document.querySelectorAll('.post > li > a');
const click1 = click[0]
const click2 = click[1]
const click3 = click[2]
click1.onclick = () =>{
  pop.classList.toggle('active')
}
click2.onclick = () =>{
  pop.classList.toggle('active')
}
click3.onclick = () =>{
  pop.classList.toggle('active')
}

const closeBtn = document.querySelector('.pop > button')
closeBtn.onclick = function(){
  pop.classList.remove('active')
}
