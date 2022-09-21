const heading = document.querySelector('h1');
// heading.textContent = 'Hello World!';

if ( !localStorage.getItem('name') ) {
	greetUser();
} else {
	const name = localStorage.getItem('name');
	heading.textContent = `Hello ${name}`;
}

const img = document.querySelector('img');
img.onclick = () => {
	console.log('image clicked');
	const imgSrc = img.getAttribute('src');
	if ( imgSrc == 'images/sample-image.png') {
		img.setAttribute('src', 'images/sample-image-2.png');
	} else {
		img.setAttribute('src', 'images/sample-image.png');
	}
}


function greetUser() {
	const user = prompt('Whats your name?');
	if ( !user ) {
		greetUser();
	} else {
		localStorage.setItem('name', user);
		heading.textContent = `Hello ${user}`;
	}
}

const btn = document.querySelector('button');
btn.onclick = () => {
	greetUser();
}


