

//canvas pour etre le cadre de notre jeu
var cvs = document.getElementById("jeu");
var contenu = cvs.getContext("2d");

// les images qui seront les composants de notre jeux (voitures et route)

var route = new Image();
var voiture = new Image(); // voiture de joueur
var car1 = new Image();
var car2 = new Image();
var car3 = new Image();
var car4 = new Image();
var car5 = new Image();
var car6 = new Image();
var car7 = new Image();
var car8 = new Image();
var main_audio = new Audio();


//les sources des images

route.src ="img/route.png";
voiture.src = "img/car.png"; // voiture de joueur
car1.src = "img/1.png";
car2.src = "img/2.png";
car3.src = "img/3.png";
car4.src = "img/4.png";
car5.src = "img/5.png";
car6.src = "img/6.png";
car7.src = "img/7.png";
car8.src = "img/8.png";
main_audio.src= "audio/main.mp3";
// position de notre voiture

var xPos = 150;
var yPos = 620;
var score = 0;
//mouvement de ma voiture 

document.addEventListener("keydown",move);
function move()
   {   
       //alert(event.key);
       if(event.key=="ArrowDown")
          {
             yPos+=10;
          }
       if(event.key=="ArrowUp")
          {
             yPos-=10;
          }
       if(event.key=="ArrowLeft" && xPos >20)
          {
             xPos-=10;
          }
          if(event.key=="ArrowRight" && xPos<route.width-voiture.width-20)
          {
             xPos+=10;
          }
       
   }
   //position des autres voitures;

   var blocvien = [];
   blocvien[0] = {
       x : 50,
       y : 0
   }

   var blocvas = [];
   blocvas[0] = {
       x : 150,
       y : 0
   }



//fonction racecars

function racecars()
   {
      // contenu.clearRect(0,0,cvs.width,cvs.height)
       contenu.drawImage(route,0,0); //route
       main_audio.play();
       contenu.drawImage(voiture,xPos,yPos,50,80); //position initial de notre voiture
     
       //premier voix
       for (var index = 0; index < blocvien.length; index++) {
        contenu.drawImage(car1,blocvien[index].x,blocvien[index].y-580,50,80);
        contenu.drawImage(car2,blocvien[index].x,blocvien[index].y-300,50,80);
        contenu.drawImage(car3,blocvien[index].x,blocvien[index].y,50,80);

        blocvien[index].y++;
        if(blocvien[index].y == 1000)
          {
           
            blocvien.push({
               x : 50,
               y : 0
           });
          }
          //width of cars is 80
          if (yPos<=blocvien[index].y+80 && xPos>=0 && xPos<100&& yPos >blocvien[index].y-80) {
             //alert("accident");
             location.reload();
          }
          if (yPos<=blocvien[index].y-300+80 && xPos>=50 && xPos<100 && yPos >blocvien[index].y-300-80) {
            //alert("accident");
            location.reload();
         }
         if (yPos<=blocvien[index].y-580+80 && xPos>=50 && xPos<100 && yPos >blocvien[index].y-580-80) {
            //alert("accident");
            location.reload();
         }
         score++;
         
       }
       
      
        //2eme voix

        for (var index = 0; index < blocvas.length; index++) {
         contenu.drawImage(car4,blocvas[index].x,blocvas[index].y+20,50,80);
         contenu.drawImage(car5,blocvas[index].x,blocvas[index].y+280,50,80);
         contenu.drawImage(car6,blocvas[index].x,blocvas[index].y+400,50,80);
 
         blocvas[index].y--;
         if(blocvas[index].y == -100)
           {
             blocvas.push({
                x : 150,
                y : 700
            });
           }
           if (yPos<=blocvas[index].y+80 && xPos>150-80 && xPos<230 && yPos >blocvas[index].y-80) {
            //alert("accident");
            location.reload();
         }
         if (yPos<=blocvas[index].y+280+80 && xPos>150-80 && xPos<230 && yPos >blocvas[index].y+280-80) {
            //alert("accident");
            location.reload();
         }
         if (yPos<=blocvas[index].y+400+80 && xPos>150-80 && xPos<230 && yPos >blocvas[index].y+400-80) {
            //alert("accident");
            location.reload();
         }
            
        }
        
        
        yPos += 1;
          //contenu.font("20px Verdana");
        //contenu.fillStyle("#fff");
        contenu.fillText("score :"+score,40,50);
        requestAnimationFrame(racecars);
   }
   car8.onload = racecars;


