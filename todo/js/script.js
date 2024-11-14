var myNodeList = document.getElementsByTagName("LI");

for (let i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('UL');

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false)

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === '') {
    alert("you must enter a value");
  } else {
    var el = document.getElementById("myUL");
    el.appendChild(li);
  }

  document.getElementById("myInput").value = '';

  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
