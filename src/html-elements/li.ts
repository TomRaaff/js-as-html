import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const li: HTMLElementFunction = (attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const elementType = 'li';
	return createElement(elementType, attributes, innerText, childElements);
}
