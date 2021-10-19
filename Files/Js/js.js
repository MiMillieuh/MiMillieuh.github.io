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
function Secpage() {
    document.getElementById('container').id = 'containersec';
    document.getElementById('pres').className = 'prestra';
    document.getElementById('btnpg').className = 'btnclicked';
    setTimeout(pres, 200);
    setTimeout(secpagedis, 1000);

}