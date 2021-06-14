import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const h2: HTMLElementFunction = (...args: Array<GlobalAttributes|string|HTMLElement>) => {
	const elementType = 'h2';
	return createElement(elementType, ...args);
}
