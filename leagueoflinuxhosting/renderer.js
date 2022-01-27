document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("loginvid").play = true

});

document.addEventListener("DOMContentLoaded", function checkmusic() {
    if(document.getElementById("nomusic").checked == true){
        document.getElementById("loginvid").muted = true
    }else{
        document.getElementById("loginvid").muted = false
    };
   setTimeout(checkmusic,100);
});

function SetVolume(val)
{
    var player = document.getElementById('loginvid');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}


function PlayDL(){
    window.api.receive("fromMain", (data) => {
        console.log(`Received ${data} from main process`);
        if(data == "launching"){
            window.api.send("toMain", "install");
            document.getElementById("PlayDL").disabled = true
            let timerlolmin = 5
            let timerlolsec = 30
            let timerlolfull = 332
            document.getElementById("PlayDL").innerHTML = '<h5 id="timerlaunch">Launching...</h5><div class="progress"><div class="progress-value"></div></div>'
            setTimeout(Loadinglolloop, 1000);
            function Loadinglolloop(){
                timerlolfull--
                timerlolsec--
            if (timerlolsec == 0){
                timerlolmin--
                timerlolsec = 60
            }
            if (timerlolsec < 10){
                document.getElementById("timerlaunch").innerHTML = timerlolmin + ":0" + timerlolsec
            }else{
            document.getElementById("timerlaunch").innerHTML = timerlolmin + ":" + timerlolsec
            }
            if(timerlolfull !=0){
                setTimeout(Loadinglolloop, 1000);
            
            }else{
                document.getElementById("timerlaunch").innerHTML =''
            }
            }
            }
                        //recieve from main
            
                    window.api.receive("fromMain", (data) => {
                        console.log(`Received ${data} from main process`);
                        if(data == "launched"){
                            document.getElementById("PlayDL").innerHTML = "Launched"
                        }
                    });
            
        }
    )};

