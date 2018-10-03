$(document).ready(function() {
  var fortunes = [
		"A lovely future lies ahead of you",
		"Stay strong and carry on",
		"This month you will find true love (for React)",
		"A new adventure awaits",
		"Be as awesome as Rebecca... or at least try",
		"Today will be the best day to date-- find someone to share it with",
		"HR99 is the *awesomest*",
		"You're a great egg",
		
	];
	
	var leftcookie = "<img id=\"leftcookie\" src=\"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/left-cookie.jpg\" />"
	var rightcookie = "<img id=\"rightcookie\" src=\"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/right-cookie.jpg\" />"
	
	var image = [
		"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/fortune-cookie-unopened.jpg",
		"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/fortune-cookie-opened.jpg",
	];

  $('#cookiepicture').on('click', function(event) {
		var fortune = fortunes[Math.floor(Math.random() * fortunes.length )];
		console.log("fortune", fortune);
		var newContent = $('<div id=\"newContent\">')
		newContent.append(leftcookie).append(`<div id=\"fortuneMessage\" >${fortune}</div>`)
		newContent.append(rightcookie);
		// add an animation here for opening new cookie -> curtains opening?
		// cookie cracking
		// add crunch sound effect here
		$('#content').replaceWith(newContent)
		// $('#fortuneMessage').text(fortune);
		// $('#cookiepicture').attr("src", image[1]);
		
	});
	
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


// add crunch sound AnimationEffect
//animation 
//censors certain words with add
//add user-inputed fortune
