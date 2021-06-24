import { div, li, span } from './util/HTMLElements';


export const listItemComponent = (letter: string) => {
	return li(
		div({ class: 'listItem' },
			span('* '),
			span(letter)
		)
	);
};
