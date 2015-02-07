/* 
* @Author: zhanghan
* @Date:   2015-02-03 01:03:26
* @Last Modified by:   zhanghan
* @Last Modified time: 2015-02-07 16:44:19
*/

'use strict';

// This get my code runs every 10 ms. So that it can catch any changes happened on the uesr's page.
var myVar = setInterval(function () {myTimer()}, 10);

// This is a hash table to store all the names I have changed.
var changed_names = new Object();

function myTimer() {
	// Change names in chat list
	var friend_names = document.getElementsByClassName('_55lr');

	var index;
	for (index = 0; index < friend_names.length; ++index)  {
		// This makes sure I won't change names that are already on my celebreits list
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		// If I have changed target name before, it should be on the hash table. So a hash table lookup is necessary. If there is a match, I have to change target name to the same as the one in hash table. This is to guarentee consistency.
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}

		
	}

	/***********************************************************************/

	// Change names in chat window
	friend_names = document.getElementsByClassName('titlebarText');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

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

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

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

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

	// Change names in hovercard!!!!!!
	friend_names = document.getElementsByClassName('ellipsis');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}
}

// celebreties is actually the roster of New England Patriots, plus my name, plus some of my friends names.
var celebreties = ['Angel M. Perez Torres', 'Han Zhang', 'Matt Stewart',
'Danny Aiken',
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
