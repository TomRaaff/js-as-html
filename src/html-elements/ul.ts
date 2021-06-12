import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const ul: HTMLElementFunction = (attributes: GlobalAttributes, innerContent?: Array<string|HTMLElement>) => {
	const elementType = 'ul';
	return createElement(elementType, attributes, innerContent);
}
