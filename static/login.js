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
  console.log("click!!");
  const account = await fetchJSON("api/account/find", {
    key: text.value,
    password: password.value
  });

  if(account === null) {
    location.reload();
    alert("ユーザーネームかパスワードが間違っています。");
  } else {
    alert("ログインが完了しました。");
    sessionStorage.setItem("hashKey", account['hashKey']);
    console.log(sessionStorage.getItem("hashKey"));
    location.href = "/index.html"
  }
}