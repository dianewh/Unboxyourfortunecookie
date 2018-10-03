$(document).ready(function() {
  // var crunch = new Audio("file.wav");

  $('#addFortune').on('click', function(event) {
    // crunch.play();

    var newFortune = $('#newFortune').val();
    
    // change cursor to loading
    // edit this to be prettier pop up alert / confirmation
    alert(`Input received! The following fortune will be added: ${newFortune}`);
    $('#newFortune').val('');
    // return cursor to normal

		// later add server, and send fortune to local database 
		// -- or a hosted database on Amazon AWS? 

		// add a filtering function which filters data before adding to cloud database

		// $.ajax({
		// 	url: "/someurlhere for the server ---> host server and database somewhere",
		// 	type: "POST",
		// 	data: { 'fortune': newFortune },
		// 	success: function (result) {
    // 			// notify user that fortune has been added!
		// 	}
		// });
	});
});
