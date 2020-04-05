var Team = /** @class */ (function () {
    function Team() {
        var _this = this;
        this.bat = function () {
            if (_this.ball > 0 && _this.wick < 10) {
                if (_this.s - _this.ball <= 6) {
                    var hit = Math.floor(Math.random() * 7);
                    console.log(hit, _this.ball, '</br>', _this.play);
                    _this.ball -= 1;
                    if (hit == 0) {
                        _this.wick += 1;
                        _this.play.push(_this.score);
                        _this.score = 0;
                    }
                    else {
                        _this.score += hit;
                    }
                }
                else {
                    _this.s = _this.ball;
                    _this.wick += 1;
                    _this.play.push(_this.score);
                    _this.score = 0;
                }
            }
            else {
                console.log('completed');
                _this.turn = true;
                if (team1.turn == true) {
                    document.getElementById("t1").style.visibility = "hidden";
                    document.getElementById("t2").style.visibility = "visible";
                }
                if (team1.turn == true && team2.turn == true) {
                    document.getElementById("t2").style.visibility = "hidden";
                    var a1 = team1.play.toString();
                    var a2 = team2.play.toString();
                    localStorage.setItem("team1", a1);
                    localStorage.setItem("team2", a2);
                    var dc = document.createElement('button');
                    dc.innerHTML = "Declare";
                    dc.addEventListener("click", function () {
                        window.location.assign("declare.html");
                    });
                    document.body.appendChild(dc);
                }
            }
        };
        this.score = 0;
        this.overs = 6;
        this.wick = 0;
        this.ball = 36;
        this.i = 0;
        this.play = [];
        this.s = 36;
        this.turn = false;
    }
    return Team;
}());
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var team1 = new Team();
var team2 = new Team();
t1.addEventListener('click', function () {
    team1.bat();
});
t2.addEventListener('click', function () {
    team2.bat();
});
