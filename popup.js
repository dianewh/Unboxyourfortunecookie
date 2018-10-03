$(document).ready(function() {
  $('#addFortune').on('click', function(event) {
		var newFortune = $('#newFortune').val()
		console.log("Added following new fortune: ", newFortune)
		fortunes.push(newFortune);

		// add Notification or Animation so User knows Fortune entered
		// ie popup notification

		// later add server, and send fortune to local database 
		// -- or a hosted database on Amazon AWS? 

		// add a filtering function which filters data before adding to cloud database

		// $.ajax({
		// 	url: "/someurlhere for the server ---> host server and database somewhere",
		// 	type: "POST",
		// 	data: { 'age': newFortune },
		// 	success: function (result) {
		// 			// notify user that fortune has been added!
		// 	}
		// });
	});
});
