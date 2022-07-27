let counter = document.querySelector('main');
let count = 1;

setInterval(() => {
	counter.innerText = count;
	count++;
	if (count > 5) location.replace('gallery.html');
}, 1000);
