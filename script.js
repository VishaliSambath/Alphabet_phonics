var n=document.querySelectorAll(".letter").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".letter")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        audioPlay(buttonInnerHTML);
        animation(buttonInnerHTML);
        
    });

    document.querySelectorAll(".letter")[i].addEventListener("keypress",function(event){
        audioPlay(event.key);
        animation(event.key);
    });
}

function audioPlay(key){
    switch (key) {
        case "a":
            var a=new Audio("./sounds/a-letter.mp3");
            a.play();
            break;
            
        case "b":
            var b=new Audio("./sounds/b-letter.mp3");
            b.play();
            break;

        case "c":
            var c=new Audio("./sounds/c-letter.mp3");
            c.play();
            break;

        case "d":
            var d=new Audio("./sounds/d-letter.mp3");
            d.play();
            break;

        case "e":
            var e=new Audio("./sounds/e-letter.mp3");
            e.play();
            break;

        case "f":
            var f=new Audio("./sounds/f-letter.mp3");
            f.play();
            break;

        case "g":
            var g=new Audio("./sounds/g-letter.mp3");
            g.play();
            break;
            
        case "h":
            var h=new Audio("./sounds/h-letter.mp3");  
            h.play();
            break;
        
        case "i":
            var i=new Audio("./sounds/i-letter.mp3");
            i.play();
            break;
            
        case "j":
            var j=new Audio("./sounds/j-letter.mp3");
            j.play();
            break;

        case "k":
            var k=new Audio("./sounds/k-letter.mp3");
            k.play();
            break;
    
        case "l":
            var l=new Audio("./sounds/l-letter.mp3");
            l.play();
            break;

        case "m":
            var m=new Audio("./sounds/m-letter.mp3");
            m.play();
            break;

        case "n":
            var n=new Audio("./sounds/n-letter.mp3");
            n.play();
            break;

        case "o":
            var o=new Audio("./sounds/o-letter.mp3");
            o.play();
            break;

        case "p":
            var p=new Audio("./sounds/p-letter.mp3");
            p.play();
            break;

        case "q":
            var q=new Audio("./sounds/q-letter.mp3");
            q.play();
            break;
            
        case "r":
            var r=new Audio("./sounds/r-letter.mp3"); 
            r.play();
            break;
        
        case "s":
            var s=new Audio("./sounds/s-letter.mp3");
            s.play();
            break;        
            
        case "t":
            var t=new Audio("./sounds/t-letter.mp3");
            t.play();
            break; 
        
        case "u":
            var u=new Audio("./sounds/u-letter.mp3");
            u.play();
            break;

        case "v":
            var v=new Audio("./sounds/v-letter.mp3");
            v.play();
            break;

        case "w":
            var w=new Audio("./sounds/w-letter.mp3");
            w.play();
            break;

        case "x":
            var x=new Audio("./sounds/x-letter.mp3");
            x.play();
            break;
            
        case "y":
            var y=new Audio("./sounds/y-letter.mp3");
            y.play();  
            break;
        
        case "z":
            var z=new Audio("./sounds/z-letter.mp3");
            z.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
    }
}

function animation(key){
    var activeButton= document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

