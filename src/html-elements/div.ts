import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const div: HTMLElementFunction = (attributes: GlobalAttributes, innerContent?: Array<string|HTMLElement>) => {
	const elementType = 'div';
	return createElement(elementType, attributes, innerContent);
}
