import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

const getdata = () =>{
let text = document.getElementById("text");
let password = document.getElementById("password");
}
function save() {
    var mydata = document.getElementById("mydata_in").value;
    console.log(`mydata_in = ${mydata_in}`);
    localStorage.setItem('mydata', mydata);
  };

async function getAccount(key, password) {
  const result = await fetchJSON("api/account/find", {
    key: key,
    password: password
  });

  return result;
}

let submit = document.getElementById('submit');

submit.onclick = async () => {
  console.log("click!!")
  const existResult = await fetchJSON("api/account/exist", {
    key: text.value,
    value: password.value
  });

  if(existResult){
    location.href = "./profile.html"
  }

  if(!existResult){
    location.reload();
    alert("アカウントが存在しない");
  }  
}

