$(document).ready(function() {
  var fortunes = [
		"A lovely future lies ahead of you.",
		"Stay strong and carry on.",
		"This month you will find true love.",
		"A new adventure awaits.",
		"Today will be the best day to date.",
		"You're a great egg.",
		"A smile is your passport into the hearts of others.",
		"A dream you have will come true.",
		"An epiphany of some sort will be appearing to you shortly.",
		"The fortune you seek is in another cookie.",
		"Take the risk you've been considering.",
		"Everyone agrees you are the best.",
		"You will receive a fortune. (cookie)",
		"You are enough just as you are.",
		"In life do not merely survive, but thrive.",
		"You get what you give.",
		"You must do the thing syou think you cannot do.",
		"Happiness is not by chance, but by choice.",
		"Only you can control your future.",
		"Congratulations! Today is your day!",
		"Nothing that’s worthwhile is ever easy.",

		"Don't wait. The time will never be just right.",
		"You do not find the happy life. You make it.",
		"Sometimes you will never know the value of a moment, until it becomes a memory. -Dr. Seuss",
		"Today you are You, that is truer than true. There is no one alive who is Youer than You. -Dr. Seuss",
		"The only limits for tomorrow are the doubts we have today. - Pittacus Lore",

		"Some people look for a beautiful place. Others make a place beautiful. ― Hazrat Inayat Khan",
		"If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely. - Roald Dahl",
		"Happiness often sneaks in through a door you didn't know you left open. - John Barrymore",
		"Keep your face to the sunshine and you cannot see a shadow - Helen Keller",
		"Spread love everywhere you go. - Mother Teresa",
		"A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams",
		"Each person must live their life as a model for others. - Rosa Parks",
		"Motivation comes from working on things we care about. - Sheryl Sandberg",
		"No matter what people tell you, words and ideas can change the world. - Robin Williams",
		"If you look at what you have in life, you'll always have more. - Oprah",
		"Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman",
		"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
		"Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
		"Stay close to anything that makes you glad you are alive. - Hafez",
		"It isn't where you came from. It's where you're going that counts. - Ella Fitzgerald",
		"Try to be a rainbow in someone else's cloud. - Maya Angelou",
		"the most wasted of days is one without laughter - e.e.cummings",
		"If I cannot do great things, I can do small things in a great way. - Martin Luther King Jr.",
		"Well-behaved women seldom make history. - Laurel Thatcher Ulrich",
		"Get busy living, or get busy dying. - Stephen King",
		"None of us really changes over time. We only become more fully what we are. - Anne Rice",
		"Don't Panic.",
		"The goal isn’t to live forever, the goal is to create something that will. - Chuck Palahniuk"

		//"You will read this and say \"Geez! I could have come up with better fortunes than that!\" And you CAN by clicking the extension icon in the upper right corner of this page"	
	];
	
	var leftcookie = "<img id=\"leftcookie\" src=\"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/left-cookie.jpg\" />"
	var rightcookie = "<img id=\"rightcookie\" src=\"https://s3-us-west-1.amazonaws.com/sideprojectmedia/UnBoxYourFortune(cookie)/right-cookie.jpg\" />"

  $('#cookiepicture').on('click', function(event) {
		// change cursor to loading 
		var fortune = fortunes[Math.floor(Math.random() * fortunes.length )];
		console.log("fortune", fortune);
		var newContent = $('<div id=\"newContent\">')
		newContent.append(leftcookie).append(`<div id=\"fortuneMessage\" >${fortune}</div>`)
		newContent.append(rightcookie);
		// add an animation here for opening new cookie -> curtains opening?
		// cookie cracking
		// add crunch sound effect here
		$('#content').replaceWith(newContent)

		// change cursor to normal
	});

});


// add crunch sound AnimationEffect

//animation 
//censors certain words with add
//add user-inputed fortune
// add to dataase hosted online
//get by fetching api
