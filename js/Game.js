class Game{
    constructor(){
            
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    updateState(state){
        database.ref('/').update({
            gameState : state
        })
    }
    getCode(){
       var codeRef =  database.ref("code");
       codeRef.on("value", function(data){
           gameCode = data.val();
       })
    }
    updateCode(y){
        database.ref('/').update({
            code : y
        })
    }
    async start(){
        
        console.log(gameState);
        if(gameState===0){
            player = new Player();
        var playerRef = await database.ref("playerCount").once("value");
            if(playerRef.exists()){
                playerCount = playerRef;
                player.getCount();
            }
        form  = new Form();
        form.display();
        }
    
        
         player1 = createSprite(1200,2300,100,100);
       
    player2 = createSprite(1300,2300,100,100);
      
       
        players = [player1,player2];
 
    }

   

    

    play(){

        form.hide();
        Player.getPlayerInfo();
       
            
        
        var index = 0;
            var x = 1100;
            var y ;
        if(allPlayers!==undefined){
            background(bg);
            
        for(var plr in allPlayers){
           index = index + 1;
          
          

         x = allPlayers[plr].x;
         y = allPlayers[plr].y;
         
         if(players[index-1]===undefined){
            players[index-1] = {};     
         }

         players[index - 1].x = x;
         players[index - 1].y = y;
         
       
         /*for(var a = 0;a<walls.length; a++){
            players[index-1].collide(walls[a]);
         }*/
        
         if(index === player.index ){
            stroke("red");
            noFill();
            ellipse(players[index-1].x,players[index-1].y,120,120);
            camera.position.x = players[index-1].x;
            camera.position.y = players[index-1].y;
        }
       
        
        }
        if(selection!==undefined){
           
            switch(allPlayers.player1.selection){
                case 1 : player1.addImage("hello1",playera1);
                break;
                case 2 : player1.addImage("hello2",playera2);
                break;
                case 3 : player1.addImage("hello3",playera3);
                break;
                case 4 : player1.addImage("hello4",playera4);
                break;
                case 5 : player1.addImage("hello5",playera5);
                break;
                case 6 : player1.addImage("hello6",playera6);
                break;
                default : break;
            }
        
        
    }
    if(selection!==undefined){
       
        switch(allPlayers.player2.selection){
            case 1 : player2.addImage("hello1",playera1);
            break;
            case 2 : player2.addImage("hello2",playera2);
            break;
            case 3 : player2.addImage("hello3",playera3);
            break;
            case 4 : player2.addImage("hello4",playera4);
            break;
            case 5 : player2.addImage("hello5",playera5);
            break;
            case 6 : player2.addImage("hello6",playera6);
            break;
            default : break;
        }

    
}

        }
      
        for(var i = 0;i<walls.length;i++){
           
                if(player1.isTouching(walls[i])){
                           player1.x = 1200;
                           player1.y = 100;
                           if(player.index===1){
                               player.x = player1.x;
                               player.y = player1.y;
                           }
                           
                }
            
           
                if(player2.isTouching(walls[i])){
                    player2.x = 1200;
                    player2.y = 2300;
                    if(player.index===2){
                        player.x = player2.x;
                        player.y = player2.y;
                    }
         }
            
            
        }
        if(frameCount % 180 === 0 ){
            var randPos = Math.round(random(1,4));
                switch(randPos){
                    case 1 :  zombie = createSprite(600,1500,10,10);
                    break;
                    case 2 : zombie = createSprite(300,300,10,10);
                    break;
                    case 3 : zombie = createSprite(900,600,10,10);
                    break;
                    case 4 : zombie = createSprite(2100,800,10,10);
                    break;
                    default : break;
                }
            
           
            zombie.velocityX = 4.5;
            zombie.velocityY = -3;
            rand = Math.round(random(1,4));
           
            switch(rand){
                case 1 : zombie.addImage("he",zombie1);
                break;
                case 2 : zombie.addImage("he",zombie2);
                break;
                case 3 : zombie.addImage("he",zombie3);
                break;
                case 4 : zombie.addImage("he",zombie4);
                break;
                default : break;
            }
           
            zombies.push(zombie);
          
        }
     for(var a = 0;a< zombies.length;a++){
        
         for(var g = 0;g<walls.length;g++){
            zombies[a].bounceOff(walls[g]);
         }
        
     }
        if(player.index===1){
            if(keyDown(UP_ARROW)&& aimState === false ){
                player.y = player.y -10;
                player.update();
                }
                if(keyDown(DOWN_ARROW) && aimState === false){
                player.y = player.y + 10;
                player.update();
                }
                if(keyDown(RIGHT_ARROW) && aimState === false){
                player.x = player.x + 10;
                player.update();
                }
                if(keyDown(LEFT_ARROW) && aimState === false){
                player.x = player.x - 10;
                player.update();
                }
               
        }
        if(player.index===2){
            if(keyDown(UP_ARROW)&&aimState === false ){
                player.y = player.y -10;
                player.update();
                }
                if(keyDown(DOWN_ARROW) && aimState === false){
                player.y = player.y + 10;
                player.update();
                }
                if(keyDown(RIGHT_ARROW) && aimState === false){
                player.x = player.x + 10;
                player.update();
                }
                if(keyDown(LEFT_ARROW) && aimState === false){
                player.x = player.x - 10;
                player.update();
                }
                if(keyDown("a")){
                    player.x = 600;
                    player.y = 1500;
                }
        }
    drawSprites();
}
}