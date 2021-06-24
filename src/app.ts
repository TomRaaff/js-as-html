import { component } from './component';
import { a, audio, br, button, div, form, h1, input, label, main, p, section, source, span, strong } from './util/HTMLElements';

function logEvent(event: Event) {
	console.log(event);
}

function fromParent(text: string) {
	console.log('fromParent', text);
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
					form(
						label({ for: 'nameInput' },
							  'Name: '
						),
						input({ type: 'text', id: 'nameInput', placeholder: 'enter your name' }),
						br(),
						label({ for: 'numInput' },
							  'Age: '
						),
						input({ type: 'number', id: 'numInput', placeholder: 'enter a number' })
					)
				)
			),
			section(
				audio({controls: true},
					  // todo: can't load audio file because of webpack configuration
					  source({src:'resources/All Purple.mp3', type: 'audio/mp3'})
					  )
			),
			component([0, 1, 2, 3, 4], fromParent)
		);
	document.body.append(app);
}
