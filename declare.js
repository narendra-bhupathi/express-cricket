var team1scores = localStorage.getItem("team1");
var team2scores = localStorage.getItem("team2");
var t1 = team1scores.split(",").map(function (x) { return +x; });
var t2 = team2scores.split(",").map(function (x) { return +x; });
var t1score = t1.reduce(function (a, b) {
    return a + b;
}, 0);
var t2score = t2.reduce(function (a, b) {
    return a + b;
}, 0);
var t1l = t1.length;
var t2l = t2.length;
var display1 = 'Team 1 score ' + t1score + '-' + t1l + '';
var display2 = 'Team 2 score ' + t2score + '-' + t2l + '';
document.getElementById("team1").innerHTML = display1;
document.getElementById("team2").innerHTML = display2;
if (t1score > t2score) {
    document.getElementById("result").innerHTML = 'Team 1 Won ';
}
else {
    document.getElementById("result").innerHTML = 'Team 2 Won';
}
