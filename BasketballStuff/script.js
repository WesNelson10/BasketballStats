function singleGameStats() {

    var hawkWinTotal = 0;
    var hawkFinal = document.getElementById('hawkWin');
    var hawkSummary = `Hawk Wins: ${hawkWinTotal}`;
    hawkFinal.innerHTML = hawkSummary;
    if ((jackPoints + simonPoints > tylerPoints + samuelPoints)) {
        hawkWinTotal += 1;
    }


    var hogWinTotal = 0;
    var hogFinal = document.getElementById('hogWin');
    var hogSummary = `Hog Wins: ${hogWinTotal}`;
    hogFinal.innerHTML = hogSummary;
    if ((jackPoints + simonPoints < tylerPoints + samuelPoints)) {
        hogWinTotal += 1;
    }

    var jackFrost = "Jack Frost";
    var jackJersey = Math.floor(Math.random() * 100);
    var jackPoints = Math.floor(Math.random() * 40) + 1;
    var jackBoards = Math.floor(Math.random() * 20) + 1;
    var jackDimes = Math.floor(Math.random() * 15) + 1;
    var jackFinal = document.getElementById('jack');
    var jackSummary = `${jackFrost}<br>Number: ${jackJersey}<br>${jackPoints} Points<br>${jackBoards} Rebounds<br>${jackDimes} Assists`;

    jackFinal.innerHTML = jackSummary;

    var simonRussell = "Simon Russell";
    var simonJersey = Math.floor(Math.random() * 100);
    var simonPoints = Math.floor(Math.random() * 40) + 1;
    var simonBoards = Math.floor(Math.random() * 20) + 1;
    var simonDimes = Math.floor(Math.random() * 15) + 1;
    var simonFinal = document.getElementById('simon');
    var simonSummary = `<br><br>${simonRussell}<br>Number: ${simonJersey}<br>${simonPoints} Points<br>${simonBoards} Rebounds<br>${simonDimes} Assists`;

    simonFinal.innerHTML = simonSummary

    var tylerBoggs = "Tyler Boggs";
    var tylerJersey = Math.floor(Math.random() * 100);
    var tylerPoints = Math.floor(Math.random() * 40) + 1;
    var tylerBoards = Math.floor(Math.random() * 20) + 1;
    var tylerDimes = Math.floor(Math.random() * 15) + 1;
    var tylerFinal = document.getElementById('tyler');
    var tylerSummary = `<br><br>${tylerBoggs}<br>Number: ${tylerJersey}<br>${tylerPoints} Points<br>${tylerBoards} Rebounds<br>${tylerDimes} Assists`;

    tylerFinal.innerHTML = tylerSummary;

    var samuelMoody = "Samuel Moody";
    var samuelJersey = Math.floor(Math.random() * 100);
    var samuelPoints = Math.floor(Math.random() * 40) + 1;
    var samuelBoards = Math.floor(Math.random() * 20) + 1;
    var samuelDimes = Math.floor(Math.random() * 15) + 1;
    var samuelFinal = document.getElementById('samuel');
    var samuelSummary = `<br><br>${samuelMoody}<br>Number: ${samuelJersey}<br>${samuelPoints} Points<br>${samuelBoards} Rebounds<br>${samuelDimes} Assists`;

    samuelFinal.innerHTML = samuelSummary;

    if ((jackPoints + simonPoints > tylerPoints + samuelPoints)) {
        var message = "Hawks Win!";
    }
    else if ((jackPoints + simonPoints < tylerPoints + samuelPoints)) {
        var message = "Road Hogs Win!";
    }
    else {
        var message = "OVERTIME!!!!!!!!!!!!!!!!!!";
    }
    document.getElementById('compare').innerText = message;

    if ((jackBoards + simonBoards > tylerBoards + samuelBoards)) {
        var message2 = "Hawks out-rebounded the Road Hogs.";
    }
    else {
        message2 = "Road Hogs won the rebound battle!";
    }
    document.getElementById('compare2').innerText = message2;

    if ((jackDimes + simonDimes > tylerDimes + samuelDimes)) {
        var message3 = "Hawks had more assists."
    }
    else {
        message3 = "Road Hogs had more assists."
    }
    document.getElementById('compare3').innerText = message3;

    var hawks = [jackSummary, simonSummary];
    document.getElementById('hawks').innerHTML = hawks;
    var roadHogs = [tylerSummary, samuelSummary];
    document.getElementById('roadHogs').innerHTML = roadHogs;

    if ((jackPoints + simonPoints > tylerPoints + samuelPoints)) {
        var finalScore = `${(jackPoints + simonPoints)} - ${(tylerPoints + samuelPoints)}`
    }
    else {
        var finalScore = `${(tylerPoints + samuelPoints)} - ${(jackPoints + simonPoints)}`
    }
    document.getElementById('finalScore').innerHTML = finalScore;
}
