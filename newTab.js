$(document).ready(function() {
  var fortunes = [
		"A mediocre future lies ahead of you",
		"Have a just ok day",
		"Be as awesome as Rebecca... or at least try",
		"Today will be the best day to date-- find someone to share it with",
		"HR99 is the *awesomest*",
		"Shame on you, Duss",
		"You will get a job! (If you apply to min 25 a week, with reach out, study hard, and keep in *perfect* contact with Rebecca and Rashid :)",
		"You're a great egg"
	];

	var image = [
		"/media/fortune-cookie-unopened.jpg",
		"/media/fortune-cookie-opened.jpg",
	];

  $('#cookiepicture').on('click', function(event) {
		var fortune = fortunes[Math.floor(Math.random() * fortunes.length )];
		console.log("fortune", fortune);
		$('#fortuneMessage').text(fortune);
		$('#cookiepicture').attr("src", "/media/fortune-cookie-opened.jpg");
  });
});


// add crunch sound AnimationEffect
//animation 
//censors certain words with add
//add user-inputed fortune