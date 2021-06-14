import { section } from './html-elements/section';
import { ul } from './html-elements/ul';
import { button } from './html-elements/button';
import { h2 } from './html-elements/h2';
import { listItemComponent } from './listItemComponent';

export const component = (numbers: number[], fromParent: (input: string) => void) => {
	const listItems = numbers.map((num) => 'hello'.substring(num))
							 .map((letter) => listItemComponent(letter));

	return section({ class: 'component' },
				   h2({ class: 'component-title' },
					  'This is a component'
				   ),
				   ul(...listItems),
				   button({ id: 'childButton', onclick: () => fromParent('from child') },
						  'click this childcomponent'
				   )
	);
};
