window.onload = function () {
  let myframe = document.getElementById("my-frame");
  if (localStorage.hasOwnProperty("current_page") === false) {
    localStorage.setItem("current_page", "landing.html");
    myframe.src = localStorage.getItem("current_page");
  } else {
    myframe.src = localStorage.getItem("current_page");
  }
};
function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
  document.title = obj.contentWindow.document.title;
}
function pagination(halaman) {
  let page = halaman;
  localStorage.setItem("current_page", halaman);
  let myframe = document.getElementById("my-frame");
  myframe.src = page;
  myframe.style.height = 0 + "px";
}
function responsiveIframe() {
  let myframe = document.getElementById("my-frame");
  myframe.style.height = 0 + "px";
  myframe.style.height =
    myframe.contentWindow.document.documentElement.scrollHeight + "px";
}
window.addEventListener("resize", responsiveIframe);

function validasi() {
  let input_username = document.getElementById("input-username");
  let input_email = document.getElementById("input-email");
  let input_password = document.getElementById("input-password");
  let input_retype_password = document.getElementById("input-retype-password");
  let valid = true;

  if (input_username.value == "" || input_username.value.indexOf(" ") != -1) {
    input_username.className += " is-invalid";
    valid = false;
  } else {
    input_username.className = "form-control";
  }

  if (
    input_email.value == "" ||
    input_email.value.indexOf(" ") != -1 ||
    input_email.value.indexOf("@") <= 0 ||
    input_email.value.indexOf("@") == input_email.value.length - 1
  ){
    input_email.className += " is-invalid";
    valid = false;
  } else {
    input_email.className = "form-control";
  }

  if (input_password.value == "" || input_password.value.indexOf(" ") != -1) {
    input_password.className += " is-invalid";
    valid = false;
  } else {
    input_password.className = "form-control";
  }

  if (input_retype_password.value != input_password.value) {
    input_retype_password.className += " is-invalid";
    valid = false;
  } else {
    input_retype_password.className = "form-control";
  }
  if(valid == true){
    input_username.className += " is-valid"
    input_email.className += " is-valid"
    input_password.className += " is-valid"
    input_retype_password.className += " is-valid"

  }

}
