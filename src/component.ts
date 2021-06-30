import { listItemComponent } from './listItemComponent';
import { article, button, h2, ul } from './util/HTMLElements';

export const component = (numbers: number[], fromParent: (input: string) => void) => {
	const listItems = numbers.map((num) => 'hello'.substring(num))
							 .map((letter) => listItemComponent(letter));

	return article({ class: 'component' },
				   h2({ class: 'component-title' },
					  'This is a component'
				   ),
				   ul(...listItems),
				   button({ id: 'childButton', onclick: () => fromParent('from child') },
						  'click this childcomponent'
				   )
	);
};
