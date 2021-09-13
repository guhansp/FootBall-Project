let nums =[1,2];
let countt1=1;
let countt2=1;
let turn;
let final=0;

//Team 1 details

var team1=
{
    name:"Team Liquid",
    goals:[],
    score:0
}

var team2=
{
    name:"Team Evil Genius",
    goals:[],
    score:0
}

window.onload = () =>
{
    selectTurn();  //Deciding
    updateButtonText(); //updating text on button
    updateScore(); // update initial score
}

let selectTurn = () =>
{
    turn = Math.round(Math.random()+1);
}

let updateButtonText = () =>
{
    let button = document.getElementById("shoot");
    if(turn == 1)
    {
        button.textContent = team1.name + " Shoot ";
    }
    else
    {
        button.textContent = team2.name + " Shoot ";
    }  
}

let updateScore = () =>
{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;    

}
var ButtonClick = () =>
{
    if(countt1==6 && countt2 == 6)
    {
        if(team1.score==team2.score)
        {             
        document.getElementById("results").textContent="Match Draw";
        }
        else if(team1.score>team2.score)
        {       
        
        document.getElementById("results").textContent="Team Liquid Victory";       

        }
        else
        {
            document.getElementById("results").textContent="Team Evil Genius Victory";  
            
        }
        document.getElementById("result").style.visibility="visible";
        document.getElementById("shoot").style.visibility="hidden";
        document.getElementById("results").style.visibility="visible";   
    }
    else
    {    
        if(turn == 1)
        {
            score(turn,countt1);
            countt1++;        
            turn =2
        }
        else
        {
            score(turn,countt2);
            countt2++;
            turn = 1;  
        }
        updateScore();
    }
}

var score = (turn,count) =>
{

    var goal = Math.floor(Math.random()*nums.length); 

    if(turn == 1)
    {
        team1.score = team1.score + goal;
                
    }    
    else
    {
        team2.score = team2.score + goal;
        
    }

    console.log("team-"+turn+"-img-"+count);
    if(goal==1)
    {        
        document.getElementById("team-"+turn+"-img-"+count).src="./img/green.png";
    }
    else
    {
        document.getElementById("team-"+turn+"-img-"+count).src="./img/red.png";
    }
}
