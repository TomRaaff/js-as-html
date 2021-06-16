import { div, li, p } from './util/HTMLElements';


export const listItemComponent = (letter: string) => {
	return li(
		div({ class: 'listItem' },
			p(letter)
		)
	);
};
