

$(document).ready(function () {
    var totalWins = 0;
    var totalLosses = 0;
    var total = 0;
    var crystalNumber = 0;
    var isMessage = false;


    // get the random values for the crystals: 1 to 12 
    initializeGame();

    // console.log("Number " + number);

    // console.log("Crystal Number " + CrystalNumber);


    function getRandomInt() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    function getCrystalNum() {
        return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }

    function initializeGame() {
        total = 0;
        crystalNumber = getRandomInt();
        console.log("Crystal number: " + crystalNumber);
        $("#randomNumber").text(crystalNumber);

        // Lets get 4 unique numbers within a range
        var numArray;
        for (var i = 0; i < 4; i++) {
            var tempNum = getCrystalNum();
            // lets compare numbers with a loop

        }
        // **********

        $("#image1").text(getCrystalNum());
        console.log("Image1: " + $("#image1").text());
        $("#image2").text(getCrystalNum());
        console.log("Image2: " + $("#image2").text());
        $("#image3").text(getCrystalNum());
        console.log("Image3: " + $("#image3").text());
        $("#image4").text(getCrystalNum());
        console.log("Image4: " + $("#image4").text());

        $("#yourScore").html("0");
    }

    $("img").on("click", function () {
        // This is to clear the message, "You win/You lose"
        if (isMessage) {
            $("#message").html("");
        }

        console.log("Clicked crystal - " + $(this).text());
        total += parseInt($(this).text());
        console.log("Total is " + total);
        $("#yourScore").html(total);

        if (total === crystalNumber) {
            $("#wins").html(totalWins += 1);
            $("#message").html("You win!!");
            initializeGame();
            isMessage = true
            var audio = $("#winningSong")[0];
            audio.play();
        } else if (total > crystalNumber) {
            $("#losses").html(totalLosses += 1);
            $("#message").html("You Lose!!");
            initializeGame();
            isMessage = true;

            var audio = $("#losingSong")[0];
            audio.play();
           
        }
    });


});