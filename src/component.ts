import { section } from './html-elements/section';
import { ul } from './html-elements/ul';
import { li } from './html-elements/li';
import { button } from './html-elements/button';
import { h4 } from './html-elements/h4';

export const component = (numbers: number[], fromParent: (input: string) => void) => {
	const str = 'hello';
	const listItems = numbers.map((num) => str.substring(num))
							 .map((letter) => li(letter));

	return section({ class: 'component' },
				   h4({ class: 'component-title' },
					  'This is a component'
				   ),
				   ul(...listItems),
				   button({ id: 'childButton', onclick: () => fromParent('from child') },
						  'click this childcomponent'
				   )
	);
};
