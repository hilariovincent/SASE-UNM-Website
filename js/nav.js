function includeHTML(file, id) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", file, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(id).innerHTML = this.responseText;
      }
    };
    xhttp.send();
  }
  