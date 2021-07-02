import { testComponent } from './TestComponent';
import { audio, br, button, div, form, h1, input, label, p, article, source, strong } from './util/HTMLElements';
import dispatch from './util/Dispatch';
import component from './util/Component';

function logEvent(event: Event) {
	console.log(event);
}

function fromParent(text: string) {
	console.log('fromParent', text);
	dispatch('from-parent');
}

export default function testContent(): Array<HTMLElement> {
	console.log('Go build something pretty!');
	return [
			article(
				h1('Here\'s an app starter for you'),
				p(
					'Here is a ',
					strong('bold'),
					' statement.'
				),
				button({ class: 'btn btn-wide', onclick: logEvent }, 'Click here!')
			),
			article(
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
			article(
				audio({controls: true},
					  // todo: can't load audio file because of webpack configuration
					  source({src:'resources/All Purple.mp3', type: 'audio/mp3'})
					  )
			),
		// todo: how do I add components to components without using a parentCssSelector?
			component('', testComponent([0, 1, 2, 3, 4], fromParent), ['from-parent'])
		];
}
