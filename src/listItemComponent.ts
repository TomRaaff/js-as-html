import { li } from './html-elements/li';
import { div } from './html-elements/div';
import { p } from './html-elements/p';

export const listItemComponent = (letter: string) => {
	return li(
		div({ class: 'listItem' },
			p(letter)
		)
	);
};
