var $countB = 0;

/*function coloeSet(argObj){
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
}*/
function clickBtn3() {
    const div2 = document.getElementById("div2");
    // 要素の追加
    if (!div2.hasChildNodes()) {
      const input1 = document.createElement("input");
      const input2 = document.createElement("input");
      input1.setAttribute("type", "text");
      input1.setAttribute("maxlength", "5");
      input1.setAttribute("size", "10");
      input2.setAttribute("type", "text");
      input2.setAttribute("maxlength", "30");
      input2.setAttribute("size", "10");
      div2.appendChild(input1);
      div2.appendChild(input2);
    }
  }
  function clickBtn4() {
    const div2 = document.getElementById("div2");
    if (div2.hasChildNodes()) {
      div2.removeChild(div2.firstChild);
    }
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


function countUpB() {
    document.getElementById( "good" ).innerHTML = ++$countB;
}


