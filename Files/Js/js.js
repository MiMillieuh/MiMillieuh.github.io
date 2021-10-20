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
    document.getElementById('pres').className = '';
    document.getElementById('prestitle').style.display = 'flex';
    document.getElementById('prestxt').className = '';
}
function secpagedisrst(){
    document.getElementById('titlesec').className = 'titlesecnodisplay';
    document.getElementById('btnpg').style.display = 'flex';
    document.getElementById('btnpagesec').id = 'btnpage';
}
function Secpage() {
    if(document.getElementById('container')){
    document.getElementById('container').id = 'containersec';
    document.getElementById('pres').className = 'prestra';
    document.getElementById('btnpg').className = 'btnclicked';
    setTimeout(pres, 200);
    setTimeout(secpagedis, 1000);
    }else{
        document.getElementById('containersec').id = 'container';
        document.getElementById('pres').className = 'prestra';
        document.getElementById('btnpg').className = 'btnclickedtwo';
        setTimeout(presrst, 200);
        setTimeout(secpagedisrst, 1000);
    }
}