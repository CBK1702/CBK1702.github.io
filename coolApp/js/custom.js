$(document).ready(function(){
  $('button#your-name-button').click(function(){
      
      console.log("your-name-button clicked");
      
      $.ajax({
          method: "Get",
          url:"//infinite-headland-2896.herokuapp.com/api/yourName"
      }).done(function(response){
          console.log(response.name); 
          
      }).fail(function(mgs){
          
      });
  });    
    
});