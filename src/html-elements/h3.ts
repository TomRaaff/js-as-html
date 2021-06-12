import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const h3: HTMLElementFunction = (attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const elementType = 'h3';
	return createElement(elementType, attributes, innerText, childElements);
}
