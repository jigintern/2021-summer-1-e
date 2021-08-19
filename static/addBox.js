function clickBtn3() {
    const div2 = document.getElementById("div2");
    // 要素の追加
    if (!div2.hasChildNodes()) {
      const input1 = document.createElement("input");
      input1.setAttribute("type", "text");
      input1.setAttribute("maxlength", "5");
      input1.setAttribute("size", "10");
      input1.setAttribute("value", "初期表示");
      div2.appendChild(input1);
    }
  }
  function clickBtn4() {
    const div2 = document.getElementById("div2");
    if (div2.hasChildNodes()) {
      div2.removeChild(div2.firstChild);
    }
  }
  $(function() {
 
    $('button#add').click(function(){
   
    var tr_form = '' +
    '<tr>' +
      '<td><input type="text" name="text_1[]"></td>' +
      '<td><input type="text" name="text_2[]"></td>' +
    '</tr>';
   
    $(tr_form).appendTo($('table > tbody'));
   
  });
   
   
  });