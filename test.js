document.addEventListener("click", function () {
    // Buildings ratio calcul
    var bestRatio = 0;
    var cps = parseInt(Game.cookiePs).toString();
    var mult = 10000;
    for (i = 0; i < cps.length; i++) {
        mult = mult*10;
    }
    Game.ObjectsById.forEach(
        function (e) {
            var rat = parseInt(e.storedCps / e.price * mult);
            if (rat > bestRatio) {
                bestRatio = rat;
            }
            var ratio = document.getElementById("ratio" + e.id);
            if (ratio == null) {
                document.getElementById("productPrice" + e.id).innerHTML = document.getElementById("productPrice" + e.id).innerHTML + "<span style='text-shadow: 0px 0px 4px #000,0px 1px 0px #000!important;' id='ratio" + e.id + "'>&nbsp;&nbsp;&nbsp;" + rat + "</span>"
            } else {
                ratio.innerHTML = "&nbsp;&nbsp;&nbsp;" + rat;
            }
        });
    Game.ObjectsById.forEach(
        function (e) {
            var rat = parseInt(e.storedCps / e.price * mult);
            var ratio = document.getElementById("ratio" + e.id);
            if (rat == bestRatio) {
                ratio.style.color = "#6f6";
            } else {
                ratio.style.color = "#f66";
            }
        });

    // Upgrades ratio calcul
    var upradeNb = 0;
    Game.UpgradesById.forEach(
        function(e) {
            if (e.bought == 0 && e.unlocked == 1) {
                console.log(e);
                if (e.pool == "cookie") {

                }
                switch (e.tier) {
                    case 0:
                        // cps % increase
                        break;
                    case 1:
                        // Building multiplicator
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                }
            }
        });
  }, false);