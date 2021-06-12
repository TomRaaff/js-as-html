import { main } from './html-elements/main';
import { section } from './html-elements/section';
import { h1 } from './html-elements/h1';
import { p } from './html-elements/p';
import { button } from './html-elements/button';

export default function start() {
	console.log('Go build something pretty!');
	const app =
		main({onclick: (event) => console.warn('caught event', {event})}, '', [
			section({}, '', [
				h1({}, 'Here\'s an app starter for you'),
				p({}, 'Enjoy coding!'),
				button({ onclick: (event) => console.log(event) }, 'Click here!')
			])
		]);
	document.body.append(app);
}

start();
