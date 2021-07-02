import { listItemComponent } from './listItemComponent';
import { article, button, h2, ul } from './util/HTMLElements';

export const testComponent = (numbers: number[], fromParent: (input: string) => void): HTMLElement => {
	const listItems = numbers.map((num) => 'hello'.substring(num))
							 .map((letter) => listItemComponent(letter));

	return article({ class: 'testComponent' },
				   h2({ class: 'testComponent-title' },
					  'This is a testComponent'
				   ),
				   ul(...listItems),
				   button({ id: 'childButton', onclick: () => fromParent('from child') },
						  'click this childcomponent'
				   )
	);
};
