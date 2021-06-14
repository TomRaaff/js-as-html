import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const button: HTMLElementFunction = (...args: Array<GlobalAttributes|string|HTMLElement>) => {
	const elementType = 'button';
	return createElement(elementType, ...args);
}
