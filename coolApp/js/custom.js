$(document).ready(function(){
  $('button#your-name-button').click(function(){
      
      console.log("your-name-button clicked");
      
      $.ajax({
          method: "Get",
          url:"//infinite-headland-2896.herokuapp.com/api/yourName"
      }).done(function(response){
          console.log(response.name); 
          $('div#your-name').html("<p>"+response.name+"</p>");
      }).fail(function(mgs){
          
      });
      
  }); 
    
    
    $('button#button-my-name').click(function(){
        
       var theName = $('input#myName').val();
        
        console.log(theName);
        
       $.ajax({
          method: "POST",
           data : {myName: theName},
          url:"//infinite-headland-2896.herokuapp.com/api/myName"
      }).done(function(response){
           
          console.log(response.allNames);
           
           var theNamseHtml = "<ul id=\"allNames\">";
           
           for(var i=0; i> response.allNames.length; i++){
               theNamesHtml += "<li>" + response.allNames[i] + "</li>";
           }
           
           theNamesHtml +="</ul>"
          
           
           $('div#my-name-response').html(response.msg);
           
      }).fail(function(mgs){
          
      });
        
    });
    
         
    
   
});