import { listItemComponent } from './listItemComponent';
import { button, h2, section, ul } from './util/HTMLElements';

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
