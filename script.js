const showButton = function (id2, class2) {
  //
  const asDiv = document.querySelector(`#${id2} .${class2}`);
  // asDiv.style.display = "unset";

  const button = document.getElementById(id2);
  button.addEventListener("mouseenter", () => {
    asDiv.style.display = "unset";
  });
  button.addEventListener("mouseleave", () => {
    asDiv.style.display = "none";
  });
};

showButton("kN", "hidetex");
showButton("hV", "hidetex");
showButton("hD", "hidetex");
showButton("sT", "hidetex");
showButton("nN", "hidetex");
showButton("skill", "hidetex");
// sectionKN.addEventListener("mouseenter", function () {
//   hideText("kN", "hidetex");
// });
// sectionKN.addEventListener("mouseleave", function () {
//   showText("kN", "hidetex");
// });
// sectionHV.addEventListener("mouseenter", function () {
//   hideText("hV", "hidetex");
// });
// sectionHV.addEventListener("mouseleave", function () {
//   showText("hV", "hidetex");
// });
const toggleContent = (buttonId, contentId) => {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);

  button.addEventListener("click", () => {
    content.style.display =
      content.style.display === "none" || content.style.display === ""
        ? "unset"
        : "none";

    if (button.innerHTML === "▼ view more") {
      button.innerHTML = "▲ view more";
    } else if (button.innerHTML === "▲ view more") {
      button.innerHTML = "▼ view more";
    }
  });
};

toggleContent("btnKN", "hiddecontenKN");
toggleContent("btnHV", "hiddecontenHV");
toggleContent("btnHD", "hiddecontenHD");
toggleContent("btnST", "hiddecontenST");
toggleContent("btnNN", "hiddecontenNN");
toggleContent("btnskill", "hiddecontenskill");

function myFunction() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let x = document.forms["myForm"]["email"].value;
  const showTT = document.getElementById("hiddecontenTT");
  const hiddeFrom = document.getElementById("tT");
  const p = document.querySelector("#tT .tTe");

  let text;
  if (!regex.test(x)) {
    p.innerHTML = "Email không hợp lệ!";
  } else if (regex.test(x)) {
    showTT.style.display = "unset";
    hiddeFrom.style.display = "none";
  }
}
let avatar = document.getElementById("avatar");
if (window.innerWidth < screen.width - 10) {
  console.log("........");
  avatar.style.display = "none";
}
