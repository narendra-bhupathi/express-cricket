class Team{

    score:number;
    overs:number;
    wick:number;
    ball:number;
    i:number;
    s:number;
    play:number[];
    turn:boolean;


    constructor(){
        this.score=0;
        this.overs=6;
        this.wick=0;
        this.ball=36;
        this.i=0;
        this.play=[];
        this.s=36;
        this.turn=false;
        
        }

        bat=()=>{

           


            if(this.ball>0 && this.wick<10)
            {

                if(this.s-this.ball<=6)
                {

                    let hit=Math.floor(Math.random() * 7);
                    console.log(hit,this.ball,'</br>',this.play);
                    this.ball-=1;
                    if(hit==0)
                    {
                        this.wick+=1;
                        this.play.push(this.score);
                        this.score=0
                    }
                    else
                    {
                        this.score+=hit;
                    }
                        
                }

                else
                {
                    this.s=this.ball;
                    this.wick+=1;
                    this.play.push(this.score);
                    this.score=0;
                }
                
                

            }

            else
            {
                console.log('completed');
                this.turn=true;
                if(team1.turn==true)
                {
                    document.getElementById("t1").style.visibility = "hidden";
                    document.getElementById("t2").style.visibility = "visible";
                }

                if(team1.turn==true && team2.turn==true){


                    document.getElementById("t2").style.visibility = "hidden";

                    let a1:string=team1.play.toString();
                    var a2:string=team2.play.toString();
                    
                        localStorage.setItem("team1", a1);
                
                        localStorage.setItem("team2", a2);


                    
                    let dc=document.createElement('button');
                    dc.innerHTML = "Declare";  
                    dc.addEventListener("click", function(){
                        window.location.assign("declare.html");
                      });     

                    document.body.appendChild(dc);
                      
                        
                }
               
                

            }
            

    
        }


}

let t1=document.getElementById('t1');
let t2=document.getElementById('t2');

let team1=new Team();
let team2=new Team();

t1.addEventListener('click',function(){

   team1.bat();

})


t2.addEventListener('click',function(){

    team2.bat();
    
})