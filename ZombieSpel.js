<script src="https://koda.nu/simple.js">
  
  var zombies = []; //Gör en tom lista för att göra det möjligt att pusha in mer zombies
  
  var human = {x: random(totalWidth), y: random(totalHeight), speed: random(1,5)} //Skapar en variable som ska vara spelaren och lägger den på en random x och y kordinat. Plus så ger jag den en viss "Speed" som ska användas som att springa senare.
  
  var i = 0; //Ger variabeln i en nolla.
  
  var health = 250; //Bestämer med denna variable storleken på min "Health bar"
  
  var sprint = 250; //Samma sak här då jag använder 250 som längden för min "Stamina bar"
 
  var paus = false; //En variabel som innerhåller false
 
 
  while (i < 1) //Beronde bar man sätter "i < x" så kan man ha den mängden zombies pushade in i listan.
  {
    zombies.push({x: random(totalWidth), y: random(totalHeight), speed: random(1,5)});  //Gör samma sak ungefär som "human" fast speed här bara hur sanbbt zombies kommer att gå mot spelaren.
    
    i += 1;
  }
 
   function update() //Denna funktion uppdateras konstant för att kunna göra ett spel som rör sig.
    {
         
      
         if(keyboard.enter) //När jag trycker på enter ska denna false bli till true och sedan tvärtom.
          paus = !paus;
       
         if(paus){ //Denna if aktiveras ifall att det blir true
          text(400, 450, 40, "Paused!", "black"); //Skriver ut "paused!"
          rectangle(300,500,400,300,"gray"); //Är min rektangel har instoktioner
          text(320, 570, 30, 'Gå med "wasd".', "black"); //Skriver ut "Gå med "wasd"
          text(320, 630, 30, 'Spring med', "black"); //Skriver ut "Spring med"
          text(320, 690, 30, 'Spacebar.', "black"); //Skriver ut "Spacebar"
          return; //Detta gör ungefär som att an lämnar funktionen.
         }
        clearScreen()
       
      
        
          var i = 0; //Ger variabeln i en nolla.
      
        var t = 0; //Ger variabeln t en nolla.
      ;
        
      
        rectangle(200,20,health,30,"red"); //Är min rektangel som kommer vara min healthbar
      
        rectangle(600,20,sprint,30,"green"); //Är min rektangel som kommer vara min staminabar
      
        
       
      
     
      
        
        picture(human.x, human.y, "https://cdn.discordapp.com/attachments/425402992313892866/823671473301356554/pixil-frame-0_2.png") //På spelarens x och y kordinat kommer det vara en bild som ska förestäla sin spelare.
     
        if (keyboard.d) { //Bestämmer att spelaren går mot höger om x-axeln när man trycker på "d" plus ger "speed" x-kordinaten.
          human.x +=5;
          human.x += human.speed;
        }
        
            if (keyboard.a){ //Bestämmer att spelaren går mot vänster om x-axeln när man trycker på "a" plus ger "speed" x-kordinaten.
          human.x -= 5;
          human.x -= human.speed;
        }
          if (keyboard.w){ //Bestämmer att spelaren går uppåt om y-axeln när man trycker på "w" plus ger "speed" y-kordinaten.
          human.y -= 5;
          human.y -= human.speed;
        }
            if (keyboard.s){ //Bestämmer att spelaren går neråt om y-axeln när man trycker på "s" plus ger "speed" y-kordinaten.
          human.y += 5;
          human.y += human.speed;
         }
      
        if (sprint > 0){ //Detta bestämmer att detta kommer bara aktiveras om "Staminabaren" är större än noll. Detta hindrar också att rektangel går mot negativ.
          if (keyboard.space) //Går igång ifall man trycker på spacebar
            human.speed = 3; //Lägger spelarens speed som 3
          else
            human.speed = 0 //Och ifall denna Staminabar blir mindre än noll så har man ingen extra speed
 
          if (keyboard.space) //Sedan vill man också att denna "Staminabar" går ner när man trycker på spacebar
            sprint -= 4;
          if (sprint < 250) //Gör så att staminabaren inte kan gå upp mot oändligt
            sprint += 1; //Lägger till lite i "Staminabaren" helatiden.
        }
        else
          if (keyboard.space) //Detta är en kopia av koden och den gör att man inte kan fortsätta att springa efter att man har tagit slut på sin stamina
            human.speed = 0;
          else
            human.speed = 0
 
          if (keyboard.space)
            sprint -= 0;
          if (sprint < 250)
            sprint += 1;
      
      
        while (i < 1) //Samma som när man pushade zombies
        {
          
          var zombie = zombies[i]; //Bestämmer att det är olika zombies beronde på "i"
 
          picture(zombie.x, zombie.y, "https://cdn.discordapp.com/attachments/425402992313892866/823500546333081610/zombie_large.png"); //Ger en bild till zombie samma sak som för spelaren
 
          if (zombie.x < human.x) //Bestämmer vart på x-axeln som zombiesen ska gå beronde på vilken kordinat som spelaren har.
            zombie.x += zombie.speed; //Går höger om spelaren är höger om zombies
          else
            zombie.x -= zombie.speed; //Går vänster om spelaren är vänster om zombies
 
          if (zombie.y < human.y)
            zombie.y += zombie.speed; //Går upp om spelaren är över zombies
          else
            zombie.y -= zombie.speed; //Går ner om spelaren är under zombies
          
          
          
          
          i += 1; //Plusar på i med ett så att denna loop inte fortsätter för evigt.
        
         
        }
        if(health < 0) //Så ifall min "Healthbar" blir mindre än noll så ska spelet stängas av
        {
          alert("Game over"); //Skickar medelande till spelaren
          stopUpdate() //Stopar uppdaterings funktionen
 
        }
      
      
         if(distance(human, zombie) < 5){ //Så ifall spelaren är ett viss avstånd till zombies så kommer den if-sats aktiveras
           health -= 5; //Gör healthbar mindre.
         }
 
      
      
    }
  
    
</script>