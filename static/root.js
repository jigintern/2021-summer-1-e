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

function coloeSet(argObj){
  // ==============================================
  //	入力済み時の背景色設定
  // ==============================================
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
  // ==============================================
  //	入力済み時の背景色設定
  // ==============================================
     if(argObj.value==""){
         argObj.style.backgroundColor = "";
     }else{
         argObj.style.backgroundColor = "rgba(0, 0, 127, 0.20)";
     }
 }
 
 function colorReset(argObj){
  // ==============================================
  //	フォーカス時の背景色リセット
  // ==============================================
     argObj.style.backgroundColor = "";
 }
 
 function textAreaHeightSet(argObj){
  // ==============================================
  //	フォーカス時の背景色リセット
  // ==============================================
   // 一旦テキストエリアを小さくしてスクロールバー（縦の長さを取得）
   argObj.style.height = "10px";
   var wSclollHeight = parseInt(argObj.scrollHeight);
   // 1行の長さを取得する
   var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ''));
   // 最低2行の表示エリアにする
   if(wSclollHeight < (wLineH * 2)){wSclollHeight=(wLineH * 2);}
   // テキストエリアの高さを設定する
   argObj.style.height = wSclollHeight + "px";
 }
