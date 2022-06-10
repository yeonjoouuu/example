//패럴랙스효과
window.addEventListener("scroll",doScroll); //window내에 scroll이벤트 발생시 doScroll함수 호출
function doScroll(){//doScroll함수 생성(패럴랙스 효과 생성) 스크롤 이동값을 변수에 할당
  var scrollMove = window.scrollY;
  //article의 높이값(padding포함)을 변수값에 할당
  var ht = document.querySelectorAll("article").offsetHeight;
  var articles = document.querySelectorAll("article");
  articles.forEach((el) => {
    var thisTop = scrollMove + el.getBoundingClientRect().top;
   
    var start = thisTop - ht;
    var end = thisTop + ht;
    
    if(scrollMove>start && scrollMove <= end){
      var value = scrollMove - start;
      el.querySelector("img").style.bottom = -(value/3)+"px";
    }
  })
}
doScroll();

//cursor effect요소가 마우스를 따라 움직이는 효과
//cursor_effect 요소선택
var cursorEffect = document.querySelector(".cursor_effect");
//마우스 무브 이벤트 생성
document.documentElement.addEventListener("mousemove",function(e){
  //각 변수에 스크롤 이동값을 제외한 마우스 X,Y축 위치 값을 할당
  var posX = e.clientX;
  var posY = e.clientY;
  //.cursor_effect요소의 transform:translate속성값으로 변수값을 적용하여 cursor_effect요소와 마우스의 위치값을 연동
  cursorEffect.style.transform = `translate(${posX}px,${posY}px)`;
});

//a요소에 마우스를 올리면 cursor effect가 커지는 효과
//모든 a요소를 선택
var anchors = document.querySelectorAll("a");

//a요소에 마우스를 올려놓으면 cursorEffect요소에 on클래스를 추가하는 구문
anchors.forEach(anchor => anchor.addEventListener("mouseover",() => {
  cursorEffect.classList.add("on");
}));

//a요소에 마우스를 올려놓으면 cursorEffect요소에 on클래스를 제거하는 구문
anchors.forEach(anchor => anchor.addEventListener("mouseout",() => {
  cursorEffect.classList.remove("on");
}));

//마우스를 클릭했을 때 cursor_effect에 적용할 효과 (클릭하면 커서이펙트가 작아지는 효과)
var cursorIcon = document.querySelector(".cursor_icon");

//마우스 버튼을 누르고 있을 때 cursorIcon요소에 active클래스 추가
document.documentElement.addEventListener("mousedown",() => {
  cursorIcon.classList.add("active");
});

//마우스 버튼을 누르고 있을 때 cursorIcon요소에 active클래스 제거
document.documentElement.addEventListener("mouseup",() => {
  cursorIcon.classList.remove("active");
});
