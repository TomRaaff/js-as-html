import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const span: HTMLElementFunction = (attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const elementType = 'span';
	return createElement(elementType, attributes, innerText, childElements);
}
