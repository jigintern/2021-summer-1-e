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