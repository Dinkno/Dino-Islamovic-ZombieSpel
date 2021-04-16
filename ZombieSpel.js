<script src="https://koda.nu/simple.js">
 
  var zombies = [];
 
  var human = {x: random(totalWidth), y: random(totalHeight), speed: random(1,5)}
 
  var i = 0;
 
  var health = 250;
 
  var sprint = 250;
 
 
  while (i < 1)
  {
    zombies.push({x: random(totalWidth), y: random(totalHeight), speed: random(1,5)});
 
    i += 1;
  }
 
   function update()
    {
         var paus = false;
 
         if(keyboard.enter)
          paus = !paus;
 
         if(paus){
          text("Paused",20,20);
          return;
         }
        clearScreen()
 
        var paus = false;
 
		var i = 0;
 
  		var t = 0;
      ;
 
 
      	rectangle(200,20,health,30,"red");
 
        rectangle(600,20,sprint,30,"green");
 
 
 
 
 
        picture(human.x, human.y, "https://cdn.discordapp.com/attachments/425402992313892866/823671473301356554/pixil-frame-0_2.png")
 
      	if (keyboard.d)
  		  human.x +=5;
        if (keyboard.d)
          human.x += human.speed;
		if (keyboard.a)
 		  human.x -= 5;
        if (keyboard.a)
          human.x -= human.speed;
  		if (keyboard.w)
  		  human.y -= 5;
        if (keyboard.w)
      	  human.y -= human.speed;
 		if (keyboard.s)
  		  human.y += 5;
        if (keyboard.s)
          human.y += human.speed;
 
        if (sprint > 0){
          if (keyboard.space)
            human.speed = 3;
          else
            human.speed = 0
 
          if (keyboard.space)
            sprint -= 4;
          if (sprint < 250)
            sprint += 1;
        }
        else
          if (keyboard.space)
            human.speed = 0;
          else
            human.speed = 0
 
          if (keyboard.space)
            sprint -= 0;
          if (sprint < 250)
            sprint += 1;
 
 
        while (i < 1)
        {
 
          var zombie = zombies[i];
 
          picture(zombie.x, zombie.y, "https://cdn.discordapp.com/attachments/425402992313892866/823500546333081610/zombie_large.png");
 
          if (zombie.x < human.x)
          	zombie.x += zombie.speed;
          else
         	zombie.x -= zombie.speed;
 
          if (zombie.y < human.y)
          	zombie.y += zombie.speed;
          else
          	zombie.y -= zombie.speed;
 
 
 
 
		  i += 1;
 
 
        }
        if(health < 0)
        {
		  alert("Game over");
          stopUpdate()
 
        }
 
 
         if(distance(human, zombie) < 5){
           health -= 5;
         }
 
 
 
    }
 
</script>