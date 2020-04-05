let team1scores:string= localStorage.getItem("team1");
let team2scores:string= localStorage.getItem("team2");

let t1:number[] = team1scores.split(",").map(x=>+x);
let t2:number[] = team2scores.split(",").map(x=>+x);

let t1score:number = t1.reduce(function(a, b){
        return a + b;
    }, 0); 

let t2score:number = t2.reduce(function(a, b){
        return a + b;
    }, 0);


let t1l:number=t1.length
let t2l:number=t2.length

let display1:string='Team 1 score '+t1score+'-'+t1l+'';
let display2:string='Team 2 score '+t2score+'-'+t2l+'';

document.getElementById("team1").innerHTML = display1;
document.getElementById("team2").innerHTML = display2;


if(t1score>t2score)
{

document.getElementById("result").innerHTML = 'Team 1 Won ';

}

else
{
document.getElementById("result").innerHTML = 'Team 2 Won';
}

