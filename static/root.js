var $countB = 0;

        
function clickBtn1(){
    const p1 = document.getElementById("p1");

    if(p1.style.display=="block"){
        // noneで非表示
        p1.style.display ="none";
    }else{
        // blockで表示
        p1.style.display ="block";
    }
}


function countUpB() {
    document.getElementById( "good" ).innerHTML = ++$countB;
}
