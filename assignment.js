    //   .................Solution : 1...................
    
    function feetToMile(feet){
        if(feet <= 0){
            return false;
        }
        var mile = feet * 0.00018939;
        return mile;
    }
    
    var output = feetToMile(1);
    
    if(output == false){
        console.log("Sorry Wrong Input!!!");
    }
    else{
        console.log(output, "Mile");
    }
    
    //  -------------------End of No:1-----------------  

    //   .................Solution : 2...................

    function woodCalculator(chair, table, bed){
        var totalWood = (chair + (table*3) + (bed*5));
        if(totalWood<=0){
            console.log("Wrong Input. Wood Can't be zero or negative!");
        }
        else{
            return totalWood;
        }
        
    }
    
    var output = woodCalculator(0,1,6);
    console.log(output, "qubic feet");

    //  -------------------End of No:2-----------------
    
    //   .................Solution : 3...................

    function brickCalculator(stories){
        var totalBricks;
        if(stories>0 && stories<=10){
            totalBricks = ((stories*15)*1000);
            return totalBricks;
        }
        else if(stories>10 && stories <=20){
            var firstTenStories = ((10*15)*1000);
            stories = stories-10;
            var aboveTenStories = ((stories*12)*1000);
            totalBricks = firstTenStories + aboveTenStories; 
            return totalBricks;
        }
        else if(stories>20){
            var firstTenStories = ((10*15)*1000);
            var aboveTenStories = ((10*12)*1000);
            stories = stories-20;
            var aboveTwentyStories = ((stories*10)*1000);
            totalBricks = firstTenStories + aboveTenStories + aboveTwentyStories; 
            return totalBricks;
        }
        else if(stories<=0){
            console.log("Stories Can't Be Zero Or Negative");
        }
    }
    
    var output = brickCalculator(50);
    console.log(output, "brick");

    //  -------------------End of No:3-----------------

    //   .................Solution : 4...................

    function tinyFriend(friendsName){
        var tinyFind = friendsName[0].length;
        for(var i=0; i<friendsName.length; i++){
            if(friendsName[i].length<tinyFind){
                var smallFrnd = friendsName[i];
            }
        }
        console.log(smallFrnd);
    }
    
    var friends = ["Fuaaad", "Fuaad", "Fuad"];
    tinyFriend(friends);

    //  -------------------End of No:4-----------------