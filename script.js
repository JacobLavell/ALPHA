var modal;
//var opened = false;
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var span01 = document.getElementsByClassName("close")[1];
/*img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      };*/
//
function imgFull(src, id) {
  //var figCap = find("cap" + id).text();
  //var str = $("cap" + id).text();
  //opened = true;
  modal = document.getElementById("imageFull");
  modal.style.display = "block";
  modalImg.src = src;
  //captionText.innerHTML = str;
}
function moreInfo() {
  modal = document.getElementById("moreInfo");
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal.
span.onclick = function () {
  modal.style.display = "none";
};
span01.onclick = function () {
  modal.style.display = "none";
};

/*$(document).click(function (e) {
        // check that your clicked
        // element has no id=info

        if (opened == true & e.target.id != "img01") {
          //$("#moreInfo").hide();
          alert("Test.");
          opened = false;
        }
      });*/

/*$(document).mouseup(function (e) {
        //var container = $("YOUR CONTAINER SELECTOR");
        var container = modal;

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.hide();
        }
      });*/
