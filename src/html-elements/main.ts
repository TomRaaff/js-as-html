import { GlobalAttributes } from '../util/GlobalAttributes';
import { HTMLElementFunction } from '../util/HTMLElementFunction';
import { createElement } from '../util/CreateElement';

export const main: HTMLElementFunction = (...args: Array<GlobalAttributes|string|HTMLElement>) => {
	const elementType = 'main';
	return createElement(elementType, ...args);
}
