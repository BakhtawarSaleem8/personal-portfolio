var navb = document.querySelector('nav');
// var span = document.getElementById('lio');
// console.log(span);
// var body = document.getElementsByTagName("body");
 window.addEventListener( 'scroll' , function(){
    if(this.scrollY > 15 ){
        navb.classList.add('sticky'); 
    }else{
        navb.classList.remove('sticky');
        };
 });
 
//  toggle menu 
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var i = document.querySelector('i');
// menu.classList.add('active');
menuBtn.addEventListener( "click" , function(){
menu.classList.toggle('active');
i.classList.toggle('active');

});