function change_lang() {
  var title = document.getElementById("title");
  var fr = document.getElementById("fr");
  var en = document.getElementById("en");
  if (title.innerHTML === "&nbsp;Ici vous pouvez trouvez mes photos.") {
    title.innerHTML = "&nbsp;You can find here my pictures.";
    fr.classList.remove("select");
    en.classList.add("select");
    fr.setAttribute("onclick","change_lang()");
    en.removeAttribute("onclick");
  } else {
    title.innerHTML = "&nbsp;Ici vous pouvez trouvez mes photos.";
    fr.classList.add("select");
    en.classList.remove("select");
    fr.removeAttribute("onclick");
    en.setAttribute("onclick","change_lang()");
  }
}