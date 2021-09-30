var friends = ["Ron", "Bobby", "Rickey", "Mike"];
var locations = ["Alabama", "Mississippi", "Idaho", "Georgia", "Tennessee", "Hawaii", "France", "Florida", "Maine", "Oklahoma"];
var weapons = ["knife", "shoeknife", "hatknife", "bow", "arrow", "whip", "tikkitorch", "Ak32", "horseshoe", "baster", "spatula", "baby poop", "flaming tire", "car battery", "pliers", "backhoe", "commitment", "kids", "hope", "seatbelt"];




document.addEventListener('DOMContentLoaded', function() {
     for (var i = 1; i < 101; i++){
    
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation' + i;

    }
    h3.addEventListener('click', function() {
        var friends = friends[Math.floor(Math.random() * friends.length)];
        var weapons = weapons[Math.floor(Math.random() * friends.length)];
        var locations = locations[Math.floor(Math.random() * friends.length)];
        
        alert ('Accusation i: I acccuse friends, with the weapons in the locations!')
        document.body.appendChild(h3);  

    console.log()
}
 
    
      
    
,







    )
 
})