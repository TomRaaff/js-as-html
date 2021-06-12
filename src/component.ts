import { section } from './html-elements/section';
import { ul } from './html-elements/ul';
import { li } from './html-elements/li';

export const component = (numbers: number[]) => {
	const str = 'hello';
	const listItems = numbers
		.map((num) => str.substring(num))
		.map((letter) => li({}, [letter]));

	return section({ class: 'component' }, [
		ul({}, listItems)
	]);
};
