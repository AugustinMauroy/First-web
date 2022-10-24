function change_lang() {
    var title = document.getElementById("title");
    var fr = document.getElementById("fr");
    var en = document.getElementById("en");
    var p_info_1 = document.getElementById("p_info_1")
    var p_info_2 = document.getElementById("p_info_2")
    var p_info_3 = document.getElementById("p_info_3")
    var github = document.getElementById("mon_github")
    var photos = document.getElementById("photos")
    var playlist = document.getElementById("playlist")
    if (title.innerHTML === "&nbsp;Bienvenue sur mon site Web!") {
      title.innerHTML = "&nbsp;Welcome on my website!";
      fr.classList.remove("select");
      en.classList.add("select");
      fr.setAttribute("onclick","change_lang()");
      en.removeAttribute("onclick");
      p_info_1.innerHTML = "This site is not useful.";
      p_info_2.innerHTML = "It was designed for hours of boredom.";
      p_info_3.innerHTML = "So it's here to pass the time.";
      github.innerHTML = "My github";
      photos.innerHTML = "My pictures";
      playlist.innerHTML = "My playlist";
    } else {
      title.innerHTML = "&nbsp;Bienvenue sur mon site Web!";
      fr.classList.add("select");
      en.classList.remove("select");
      fr.removeAttribute("onclick");
      en.setAttribute("onclick","change_lang()");
      p_info_1.innerHTML = "Ce site n'est pas utile.";
      p_info_2.innerHTML = "Il a été conçue pendant des heures d'ennuis.";
      p_info_3.innerHTML = "Il est donc là pour vous faire passer le temps.";
      github.innerHTML = "Mon github";
      photos.innerHTML = "Mes photos";
      playlist.innerHTML = "Mes playlist";
    }
  }