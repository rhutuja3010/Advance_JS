a=0 
setInterval(Anim,1000);
    function Anim() {
        a=a+10
        var target = document.getElementById("test");
        target.style.marginLeft=a+"px"
        // console.log(a)
    }