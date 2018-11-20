var createPolitician = function (name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.partyColor = partyColor
  politician.electionResults = [];
  politician.tallyUpTotalVotes = function() 
   {
   this.totalVotes = 0;
   for (var i=0; i < this.electionResults.length; i++)
    {
     this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician
};



var harold = createPolitician ("Harold Dumas", [132, 17,11]);
var bj = createPolitician("B.J. McPhail", [245, 141, 136]);

harold.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

bj.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


bj.electionResults[9] = 1;
harold.electionResults[9] = 28;

bj.electionResults[4] = 17;
harold.electionResults[4] = 38;

bj.electionResults[43] = 11;
harold.electionResults[43] = 27; 

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (harold.electionResults[state] > bj.electionResults[state]) {
    theStates[state].winner = harold;
  }
  else if (harold.electionResults[state] < bj.electionResults[state]) {
    theStates[state].winner = bj;
  }
  stateWinner = theStates[state].winner; 
  if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor; 
  } else {
      theStates[state].rgbColor = [11, 32, 57];
  }
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var stateInit = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Votes = body.children[0].children[1];
  var candidate2Votes = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  stateInit.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = harold.name;
  candidate2Name.innerText = bj.name;
  candidate1Votes.innerText = harold.electionResults[state];
  candidate2Votes.innerText = bj.electionResults[state];
  if (theStates[state].winner === null) {
    winnersName.innerText = "TIE!";
    
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};



bj.tallyUpTotalVotes();
harold.tallyUpTotalVotes();


var winner
if (bj.totalVotes > harold.totalVotes) {
  winner = bj.name;
} else if (bj.totalVotes < harold.totalVotes) {
  winner = harold.name;
} else {
  winner = "... it's a draw!";
}

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = harold.name;
row.children[1].innerText = harold.totalVotes;
row.children[2].innerText = bj.name;
row.children[3].innerText = bj.totalVotes;
row.children[5].innerText = winner;

