var $countB = 0;

        
function clickBtn1(){
    const p1 = document.getElementById("p1");

    if(p1.style.display=="block"){
        p1.style.display ="none";
    }else{
        p1.style.display ="block";
    }
}


function countUpB() {
    document.getElementById( "good" ).innerHTML = ++$countB;
}

function coloeSet(argObj){
     if(argObj.value==""){
         argObj.style.backgroundColor = "";
     }else{
         argObj.style.backgroundColor = "rgba(0, 0, 127, 0.20)";
     }
 }
 
 function colorReset(argObj){
     argObj.style.backgroundColor = "";
 }
 function coloeSet(argObj){
     if(argObj.value==""){
         argObj.style.backgroundColor = "";
     }else{
         argObj.style.backgroundColor = "rgba(0, 0, 127, 0.20)";
     }
 }
 
 function colorReset(argObj){
     argObj.style.backgroundColor = "";
 }
 
 function textAreaHeightSet(argObj){
   argObj.style.height = "10px";
   var wSclollHeight = parseInt(argObj.scrollHeight);
   var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ''));
   if(wSclollHeight < (wLineH * 2)){wSclollHeight=(wLineH * 2);}
   argObj.style.height = wSclollHeight + "px";
 }

 function clickBtn1(id){
    var result = id.replace( 'A', 'B' );
    const p1 = document.getElementById(result);

    if(p1.style.display=="block"){
        p1.style.display ="none";
    }else{
        p1.style.display ="block";
    }
    
}

function clickBtn5(i) {
    for (let a = 1; a <= i; a++) {
        var route = $('.route').last();  // 最後尾にあるinput
        route
        .clone() // クローン
        .val('')  // valueもクローンされるので削除する
        .insertAfter(route)
        .attr('id',"idB"+a);
        
        var list_element2 = document.getElementById("idB"+a);
        var first_child_element2 = list_element2.firstElementChild;
        var last_child_element2 = list_element2.lastElementChild;
        var next_element2 = first_child_element2.nextElementSibling;
        first_child_element2['id'] = 'output-messageA'+a;
        next_element2['id'] = 'output-messageB'+a;
        
        const textbox = document.getElementById("input-messageA"+a);
        console.log(textbox.value);
        const inputValue = textbox.value;
        const output = inputValue;
        document.getElementById("output-messageA"+a).value = output;

        const textbox2 = document.getElementById("input-messageB"+a);
        console.log(textbox2.value);
        const inputValue2 = textbox2.value;
        const output2 = inputValue2;
        document.getElementById("output-messageB"+a).innerHTML = output2;
        document.getElementById("output-messageB"+a).style.display ="none";
        
    }

}