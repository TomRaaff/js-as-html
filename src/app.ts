import { main } from './html-elements/main';
import { section } from './html-elements/section';
import { h1 } from './html-elements/h1';
import { p } from './html-elements/p';
import { button } from './html-elements/button';
import { div } from './html-elements/div';
import { strong } from './html-elements/strong';
import { component } from './component';

export default function start() {
	console.log('Go build something pretty!');
	const app =
		main({ onclick: (event) => console.warn('caught event', { event }) }, [
			section({}, [
				h1({}, ['Here\'s an app starter for you']),
				p({}, ['Enjoy coding!']),
				button({ onclick: (event) => console.log(event) }, ['Click here!'])
			]),
			section({}, [
				div({}, [
					p({}, [
						'Here is a ',
						strong({}, ['bold']),
						' statement.'
					])
				])
			]),
			component([0, 1, 2, 3, 4])
		]);
	document.body.append(app);
}

start();
