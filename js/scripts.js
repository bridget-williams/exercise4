console.log('scripts loaded');
var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('closebtn');
var background=document.getElementById('content')
var tooltip = document.getElementById('tooltip');
var info = document.getElementById('moreinfo');

burger.addEventListener('click',function () {
    console.log('button clicked.');
    mobileNav.style.width ='50%';
    mobileNav.style.transition = '.5s ease';
    background.style.opacity = '0.3';
});

closeBtn.addEventListener('click',function () {
    mobileNav.style.width = '0';
    mobileNav.style.transition = '.5s ease';
    background.style.opacity = '1';
});



info.addEventListener('mouseenter', function(event){
    tooltip.style.display = 'inline-block';
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    //added +5 to stop weird glitch
    tooltip.style.top = y + 5 +'px';
    tooltip.style.left = x + 5 +'px';

})

info.addEventListener('mouseout', function(){
    tooltip.style.display = 'none';
})

