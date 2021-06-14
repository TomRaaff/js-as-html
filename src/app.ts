import { main } from './html-elements/main';
import { section } from './html-elements/section';
import { h1 } from './html-elements/h1';
import { p } from './html-elements/p';
import { button } from './html-elements/button';
import { div } from './html-elements/div';
import { strong } from './html-elements/strong';
import { component } from './component';

function logEvent(event: Event) {
	console.log(event);
}

function fromParent(input: string) {
	console.log('fromParent', input);
}

export default function start() {
	console.log('Go build something pretty!');
	const app =
		main({ onclick: logEvent },
			 section(
				 h1('Here\'s an app starter for you'),
				 p('Enjoy coding!'),
				 button({ class: 'btn btn-wide', onclick: logEvent }, 'Click here!')
			 ),
			 section(
				 div(
					 p(
						 'Here is a ',
						 strong('bold'),
						 ' statement.'
					 )
				 )
			 ),
			 component([0, 1, 2, 3, 4], fromParent)
		);
	document.body.append(app);
}

start();
