window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    if (scroll > 150) {
    //  console.log("Je suis vivant")
    document.getElementById("vidaccueil").className = "vidscrollout";} else {
        function vidin(){
        document.getElementById("vidaccueil").className = "vidscrollin";}}
        setTimeout(1000, vidin())
  
    });