import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const h4: HTMLElementFunction = (attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const elementType = 'h4';
	return createElement(elementType, attributes, innerText, childElements);
}
