//Bienvenu dans mon js. ici aucune librairie externe n'a été utilisée...
//Il faut donc parfois mettre un peu les mains dans le cambouis


//Video in out avec le scroll
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    scrollsave = scroll;
     console.log(scroll)
    if (scroll > 50) {
    //  console.log("Je suis vivant")
    document.getElementById("vidaccueil").className = "vidscrollout";} else {
        function vidin(){
        document.getElementById("vidaccueil").className = "vidscrollin";}}
        setTimeout(1000, vidin())
        
    });
//fix du bug resize pour la video
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

    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
    
    function enableScroll() {
        window.onscroll = function() {};
    }
    

/*
    window.addEventListener("scroll", (event) => {
        wineheight = window.innerHeight;
        winewidht = window.innerWidth;
        let scroll = this.scrollY;
        scrollsave = scroll;
        console.log(wineheight)
        if(winewidht < 1000){
            if (scroll >= 801 + wineheight/2){
                timelineheight = scroll - 821 - wineheight/2 + "px";
                document.getElementById("timeline").style.height = timelineheight;
                }else{
                    document.getElementById("timeline").style.height = 0;
                }
        }else{
        if (scroll >= 601 + wineheight/2){
        timelineheight = scroll - 621 - wineheight/2 + "px";
        document.getElementById("timeline").style.height = timelineheight;
        }else{
            document.getElementById("timeline").style.height = 0;
        }}
    
    });
    */

//Ligne qui décends avec le scroll avec une formule qui permets de rester centré peu importe l'écran
    window.addEventListener("scroll", (event) => {
        wineheight = window.innerHeight;
        winewidht = window.innerWidth;
        heightp1 = document.getElementById("page1").offsetHeight;
        heighttitre = document.getElementById("titre").offsetHeight;
        let scroll = this.scrollY;
        scrollsave = scroll;
        console.log(heighttitre + heightp1 - wineheight)
        if(winewidht < 1000){
            timelineheight = scroll - (heightp1 + heighttitre) + wineheight/2 + 300;
            document.getElementById("timeline").style.height = timelineheight +"px";
            if(scroll - (heightp1 + heighttitre) + wineheight/2 + 300 <= 0){
                document.getElementById("timeline").style.height = 0;
            }
        }else
            if (scroll >= heighttitre + heightp1 -wineheight){
                timelineheight = scroll - (heightp1 + heighttitre) + wineheight/2;
                document.getElementById("timeline").style.height = timelineheight +"px";
                if(scroll - (heightp1 + heighttitre) + wineheight/2 <= 0){
                    document.getElementById("timeline").style.height = 0;
                }
            }


            //Apparition de titre 1ère année
            if (timelineheight > 250){
                document.getElementById("timelineone").classList.add("timelinedisplayed")
                
            }else{
                document.getElementById("timelineone").classList.remove("timelinedisplayed")
            }


            //Article 1ère année
                if (timelineheight > 275 && timelineheight < 275 + document.getElementById("col3").offsetHeight){
                    document.getElementById("timeline").classList.add("fonduout")
                    document.getElementById("timeline").classList.remove("fonduin")
                }else{
                    document.getElementById("timeline").classList.remove("fonduout")
                    document.getElementById("timeline").classList.add("fonduin")

        }

        if (timelineheight > 350){
            document.getElementById("timelineone").classList.add("titletimelinearticle")
            document.getElementById("timelineone").classList.remove("titletimelinearticlebaseleft")
            document.getElementById("col3").classList.add("fonduinrev")

        }else{
            document.getElementById("timelineone").classList.add("titletimelinearticle")
            document.getElementById("timelineone").classList.add
            ("titletimelinearticlebaseleft")
            document.getElementById("col3").classList.remove("fonduinrev")

            

            if (timelineheight > 275 + document.getElementById("col3").offsetHeight){
                document.getElementById("timeline").classList.remove("fonduout")
                document.getElementById("timeline").classList.add("fonduin")
            }else{
                document.getElementById("timeline").classList.add("fonduout")
                document.getElementById("timeline").classList.remove("fonduin")

}
  }})