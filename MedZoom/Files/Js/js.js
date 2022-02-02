window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    scrollsave = scroll;
    // console.log(scroll)
    if (scroll > 50) {
    //  console.log("Je suis vivant")
    document.getElementById("vidaccueil").className = "vidscrollout";} else {
        function vidin(){
        document.getElementById("vidaccueil").className = "vidscrollin";}}
        setTimeout(1000, vidin())
        
    });

    window.addEventListener('resize', function(event){
        setTimeout(500, fixhv())
        console.log("tonpapalenoir")
        document.getElementById("vidaccueil").className = "";
        function fixhv(){
        if (scrollsave > 50) {
            //  console.log("Je suis vivant")
            document.getElementById("vidaccueil").className = "vidscrollout";} else {
                function vidin(){
                document.getElementById("vidaccueil").className = "vidscrollin";}}
                setTimeout(1000, vidin())
    }})