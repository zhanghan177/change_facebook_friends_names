/* 
* @Author: zhanghan
* @Date:   2015-02-03 01:03:26
* @Last Modified by:   zhanghan
* @Last Modified time: 2015-02-03 12:03:15
*/

'use strict';
var celebreties = ['Angel Perez', 'Han Zhang', 'Matt Stewart','Danny Aiken',
'Ryan Allen',
'Danny Amendola',
'Kyle Arrington',
'Akeem Ayers',
'LeGarrette Blount',
'Brandon Bolden',
'Josh Boyce',
'Tom Brady',
'Alan Branch',
'Brandon Browner',
'Malcolm Butler',
'Marcus Cannon',
'Jonathan Casillas',
'Patrick Chung',
'Jamie Collins',
'Dan Connolly',
'James Develin',
'Jordan Devey',
'Nate Ebner',
'Julian Edelman',
'Cameron Fleming',
'Darius Fleming',
'Jimmy Garoppolo',
'Stephen Gostkowski',
'Jonas Gray',
'Rob Gronkowski',
'Duron Harmon',
'Dont\'a Hightower',
'Michael Hoomanawanui',
'Chandler Jones',
'Chris Jones',
'Josh Kline',
'Brandon LaFell',
'Devin McCourty',
'Zach Moore',
'Rob Ninkovich',
'Darrelle Revis',
'Logan Ryan',
'Sealver Siliga',
'Matthew Slater',
'Nate Solder',
'Bryan Stork',
'Brian Tyms',
'Joe Vellano',
'Shane Vereen',
'Sebastian Vollmer',
'Ryan Wendell',
'Chris White',
'James White',
'Vince Wilfork',
'Tavon Wilson',
'Tim Wright',

];

var myVar=setInterval(function () {myTimer()}, 10);

function myTimer() {
	// Change names in chat list
	var friend_names = document.getElementsByClassName('_55lr');

	var index;
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		var random_number = Math.floor(Math.random() * celebreties.length);
		friend_names[index].textContent = celebreties[random_number];
	}

	// Change names in chat window
	friend_names = document.getElementsByClassName('titlebarText');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		var random_number = Math.floor(Math.random() * celebreties.length);
		friend_names[index].textContent = celebreties[random_number];
	}

	// Change names in comments
	var temp_names = document.querySelectorAll('span');
	friend_names = [];
	var comments_pattern = new RegExp("\\$author");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if(comments_pattern.test(temp_names[i].getAttribute('data-reactid'))) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		var random_number = Math.floor(Math.random() * celebreties.length);
		friend_names[index].textContent = celebreties[random_number];
	}

	// Change names in posts
	temp_names = document.querySelectorAll('a');
	friend_names = [];
	var posts_pattern = new RegExp("user.php");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if((posts_pattern.test(temp_names[i].getAttribute('data-hovercard')))
		&& !temp_names[i].hasAttribute('aria-hidden')) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		var random_number = Math.floor(Math.random() * celebreties.length);
		friend_names[index].textContent = celebreties[random_number];
	}
}

