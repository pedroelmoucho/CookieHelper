

document.addEventListener("click", function () {
    var bestRatio = 0;
    Game.ObjectsById.forEach(function (e) {
        var rat = e.storedCps / e.price * 100000;
        if (rat > bestRatio) {
            bestRatio = rat;
        }
        console.log("productPrice" + e.id + "  " + rat);
        var ratio = document.getElementById("ratio" + e.id);
        console.log(ratio + " " + (ratio == null));
        if (ratio == null) {
            document.getElementById("productPrice" + e.id).innerHTML = document.getElementById("productPrice" + e.id).innerHTML + "<span style='text-shadow: 0px 0px 4px #000,0px 1px 0px #000!important;' id='ratio" + e.id + "'>&nbsp;&nbsp;&nbsp;" + parseInt(rat) + "</span>"
        } else {
            ratio.innerHTML = "&nbsp;&nbsp;&nbsp;" + parseInt(rat);
        }
    });
    Game.ObjectsById.forEach(function (e) {
        var rat = e.storedCps / e.price * 100000;
        var ratio = document.getElementById("ratio" + e.id);
        if (rat == bestRatio) {
            ratio.style.color = "#6f6";
        } else {
            ratio.style.color = "red";
        }
    });
  }, false);