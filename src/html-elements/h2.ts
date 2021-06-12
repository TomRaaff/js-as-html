import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const h2: HTMLElementFunction = (attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const elementType = 'h2';
	return createElement(elementType, attributes, innerText, childElements);
}
