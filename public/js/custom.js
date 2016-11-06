$( "#contact" ).on('submit', function() {
   if($('input').val()=== ""){
      alert( "Name or email should not be empty" );
      return false;
   }


});
