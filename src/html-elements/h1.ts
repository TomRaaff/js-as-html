import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const h1: HTMLElementFunction = (attributes: GlobalAttributes, innerContent?: Array<string|HTMLElement>) => {
	const elementType = 'h1';
	return createElement(elementType, attributes, innerContent);
}