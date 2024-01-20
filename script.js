const days= document.getElementById("days")
const hours= document.getElementById("hours")
const mins= document.getElementById("mins")
const secs= document.getElementById("secs")
const message= document.getElementById("message")

let a=3
let b=16
let c=42
let d=59


setInterval(function(){
    
    d--
    if(d==0){
        d=60
        c--
        if(c==0){
            c=60
            b--
            if(b==0){
                b=24
                a--
                if(a==0){
                    message.innerHTML="Time Completed!"
                }
            }
        }
    }

    days.innerHTML= a
    hours.innerHTML= b
    mins.innerHTML= c
    secs.innerHTML= d

},1000)