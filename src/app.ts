import { component } from './component';
import { button, div, h1, main, p, section, strong } from './util/HTMLElements';

function logEvent(event: Event) {
	console.log(event);
}

function fromParent(input: string) {
	console.log('fromParent', input);
}

export default function start() {
	console.log('Go build something pretty!');
	const app =
		main(
			 section(
				 h1('Here\'s an app starter for you'),
				 p(
					 'Here is a ',
					 strong('bold'),
					 ' statement.'
				 ),
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
