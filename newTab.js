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

	var image = [
		"/media/fortune-cookie-unopened.jpg",
		"/media/fortune-cookie-opened.jpg",
	];

  $('#cookiepicture').on('click', function(event) {
		var fortune = fortunes[Math.floor(Math.random() * fortunes.length )];
		console.log("fortune", fortune);
		$('#fortuneMessage').text(fortune);
		$('#cookiepicture').attr("src", image[1]);
		
	});
	
	$('#newCookie').on('click', function(event) {
		$('#fortuneMessage').text("Click cookie to unbox your fortune");
		$('#cookiepicture').attr("src", image[0]);
	});

	// add UserFortune
	$('#addFortune').on('click', function(event) {
		var newFortune = $('#newFortune').val();
		console.log(newFortune);
		console.log(newFortune);
		fortunes.push(newFortune);

		// change to database save below
		// $.ajax({
		//     url: "/YourPostUrlHere",
		//     type: "POST",
		//     data: { 'fortune': $("#newFortune").val()) },
		//     success: function (result) {
		//         //Do whatever you want with the result.
		//     }
		// });
});


// add crunch sound AnimationEffect
//animation 
//censors certain words with add
//add user-inputed fortune
