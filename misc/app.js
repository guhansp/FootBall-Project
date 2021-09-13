let nums =[1,2];
let countt1=0;
let countt2=0;
var turn;
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
    updateNames(); //update team names

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

let updateNames= () =>
{
    document.getElementById("team-1-name").textContent=team1.name;
    document.getElementById("team-2-name").textContent=team2.name;

}

var ButtonClick = () =>
{
    if(countt1 == 5 && countt2 == 5)    
    {
        if(team1.score>team2.score)
        {        
        document.getElementById("result").style.visibility="visible";
        document.getElementById("shoot").style.visibility="hidden";
        document.getElementById("results").textContent="Team Liquid Victory"
        document.getElementById("results").style.visibility="visible";           

        }
        else
        {          
        document.getElementById("result").style.visibility="visible";   
        document.getElementById("shoot").style.visibility="hidden";
        document.getElementById("results").textContent="Team Evil Genius Victory"
        document.getElementById("results").style.visibility="visible";

        }
        

    }
    else       
     {        
        if(turn == 1 && countt1 == 0)
        {
            team1calc();
        }
        else if(turn == 1 && countt1 == 1)
        {
            team1calc1();
        }
        else if(turn == 1 && countt1 == 2)
        {
            team1calc2();
        }
        else if(turn == 1 && countt1 == 3)
        {
            team1calc3();
        }
        else if(turn == 1 && countt1 == 4)
        {
            team1calc4();
        }

        else
        {
            if(turn == 2 && countt2 == 0)
            {
                team2calc();
            }
            else if(turn == 2 && countt2 == 1)
            {
                team2calc1();
            }
            else if(turn == 2 && countt2 == 2)
            {
                team2calc2();
            }
            else if(turn == 2 && countt2 == 3)
            {
                team2calc3();
            }
            else if(turn == 2 && countt2 == 4)
            {
                team2calc4();                
            }
        }

    }



    updateButtonText();
    updateScore(); 
    


}

let team1calc= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team1.score = team1.score + goal;
    
    
    if(goal==1)
    {
        document.getElementById("team-1-img-1").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-1-img-1").src="./img/red.png";

    }
    countt1++;
    turn =2;
   

}

let team1calc1= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team1.score = team1.score + goal;
    
    
    if(goal==1)
    {
        document.getElementById("team-1-img-2").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-1-img-2").src="./img/red.png";

    }
    countt1++;
    turn =2;
   

}

let team1calc2= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team1.score = team1.score + goal;
    
    
    if(goal==1)
    {
        document.getElementById("team-1-img-3").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-1-img-3").src="./img/red.png";

    }
    countt1++;
    turn =2;

}

let team1calc3= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team1.score = team1.score + goal;
    
    
    if(goal==1)
    {
        document.getElementById("team-1-img-4").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-1-img-4").src="./img/red.png";

    }
    countt1++;
    turn =2;
   

}

let team1calc4= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team1.score = team1.score + goal;
    
    
    if(goal==1)
    {
        document.getElementById("team-1-img-5").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-1-img-5").src="./img/red.png";

    }
    countt1++;
    turn = 2;
   

}



let team2calc= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team2.score = team2.score + goal;
    if(goal==1)
    {
        document.getElementById("team-2-img-1").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-2-img-1").src="./img/red.png";

    }
    countt2++;
    turn=1;

}

let team2calc1= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team2.score = team2.score + goal;
    if(goal==1)
    {
        document.getElementById("team-2-img-2").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-2-img-2").src="./img/red.png";

    }
    countt2++;
    turn=1;

}

let team2calc2= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team2.score = team2.score + goal;
    if(goal==1)
    {
        document.getElementById("team-2-img-3").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-2-img-3").src="./img/red.png";

    }
    countt2++;
    turn=1;

}
let team2calc3= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team2.score = team2.score + goal;
    if(goal==1)
    {
        document.getElementById("team-2-img-4").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-2-img-4").src="./img/red.png";

    }
    countt2++;
    turn=1;

}

let team2calc4= () =>
{
    var goal = Math.floor(Math.random()*nums.length); 
    team2.score = team2.score + goal;
    if(goal==1)
    {
        document.getElementById("team-2-img-5").src="./img/green.png";

    }
    else
    {
        document.getElementById("team-2-img-5").src="./img/red.png";

    }
    countt2++;
    turn = 1;

}




    

    
      
    





