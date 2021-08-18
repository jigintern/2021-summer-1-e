const getdata = () =>{
let text = document.getElementById("text");
let password = document.getElementById("password");
}
function save() {
    var mydata = document.getElementById("mydata_in").value;
    console.log(`mydata_in = ${mydata_in}`);
    localStorage.setItem('mydata', mydata);
  };