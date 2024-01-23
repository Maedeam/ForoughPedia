/*------------------------------
 Intro Title
------------------------------*/
function wrapChars(selector) {
  let e = document.getElementsByClassName(selector)[0];
  if (e.children.length > 0) return;

  let text = e.innerText + "";
  e.setAttribute("data-" + selector, e.innerText);
  e.innerText = "";

  let words = text.split(" ");
  words.forEach((word) => {
    var div = document.createElement("div");
    div.classList.add("word");
    Array.from(word).forEach((character) => {
      var span = document.createElement("span");
      span.innerHTML = character;
      div.appendChild(span);
    });
    e.appendChild(div);
  });
}

function pickLetters() {
  let letters = [].slice.call(document.getElementsByTagName("span"));
  let index = 0;

  function switchLetter() {
    let item = letters[index];
    item.classList.add("show");
    letters.shift();
    if (letters.length > 0) {
      setTimeout(switchLetter, 50);
    }
  }
  switchLetter();
}

window.addEventListener(
  "load",
  function () {
    addClickReplay("title");
    wrapChars("title");
    pickLetters();
  },
  true
);

function addClickReplay(selector) {
  document.addEventListener(
    "click",
    function (evt) {
      evt.preventDefault();
      var el = document.getElementsByClassName(selector)[0];
      el.innerText = el.getAttribute("data-" + selector);
      wrapChars(selector);
      pickLetters();
    },
    false
  );
}

/*------------------------------
 Open loading page on button click
------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  addClickReplay("title");
  wrapChars("title");
  pickLetters();

  const btn = document.querySelector(".Literature-Visualization-btn");
  btn.addEventListener("click", function () {
    window.location.href = "loading.html";
  });
});

/*------------------------------
 Loading and Redirecting
------------------------------*/
