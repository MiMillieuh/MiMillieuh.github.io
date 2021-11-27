function unloadload(){
    document.getElementById('welcome').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(unloadload, 2000);
})
function pres(){
    document.getElementById('pres').className = 'presnone';
    document.getElementById('prestitle').style.display = 'none';
    document.getElementById('prestxt').className = 'presnone';
}
function secpagedis(){
    document.getElementById('titlesec').className = 'titlesecdisplay';
    document.getElementById('btnpg').style.display = 'none';
    document.getElementById('btnpage').id = 'btnpagesec';
}
function presrst(){
    document.getElementById('titlesec').className = 'titlesecnodisplay';
    document.getElementById('pres').className = '';
    document.getElementById('prestitle').style.display = 'flex';
    document.getElementById('prestxt').className = '';
}
function secpagedisrst(){
    document.getElementById('btnpg').style.display = 'flex';
    document.getElementById('btnpagesec').id = 'btnpage';
}
/*
$(document).bind('mousewheel', function(e) {
    var delta = e.originalEvent.wheelDelta;
    if(delta <= -1 && document.getElementById('container')){
        setTimeout(Secpage, 0);
    }
 
 });
 */   
function Secpage() {
    if(document.getElementById('container').className == 'container'){
    document.getElementById('container').className = 'containersec';
    document.getElementById('pres').className = 'prestra';
    document.getElementById('btnpg').className = 'btnclicked';
    setTimeout(pres, 200);
    setTimeout(secpagedis, 1000);
    }else{
        urlreset = ""
        document.getElementById('container').className = 'container';
        document.getElementById('pres').className = 'prestra';
        document.getElementById('btnpg').className = 'btnclickedtwo';
        setTimeout(presrst, 200);
        setTimeout(secpagedisrst, 1000);
    }
}