console.log('Loaded!');
alert("loading");
var element = document.getElementById('madi');
function moveRight(){
  marginLeft=marginLeft+10;
  element.style.marginleft=marginLeft+'px';
    
}
element.onclick= function(){
     var interval= setInterval(moveRight , 100);
};