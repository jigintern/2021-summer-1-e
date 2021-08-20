function load() {
    var mydata = "";
    if(!localStorage.getItem('mydata')) {
      mydata = "データがありません";
    } else {
      mydata = localStorage.getItem('mydata');
    }
    console.log(`mydata= ${mydata}`);
    document.getElementById("mydata_out").innerHTML = mydata;
  }