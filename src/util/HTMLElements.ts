import { GlobalAttributes } from './GlobalAttributes';
import { HTMLElementFunction } from './HTMLElementFunction';
import { createElement } from './CreateElement';

/*
	These elements are not implemented:
	dbi, bdo
	dd, dl, dt, dfn,
	rb, rp, rt, rtc, ruby
	samp, var
 */
export type ElementDefinition = GlobalAttributes | string | HTMLElement;

export const a: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'a';
	return createElement(elementType, ...args);
};

export const abbr: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'abbr';
	return createElement(elementType, ...args);
};

export const address: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'address';
	return createElement(elementType, ...args);
};

export const area: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'area';
	return createElement(elementType, ...args);
};

export const article: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'article';
	return createElement(elementType, ...args);
};

export const aside: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'aside';
	return createElement(elementType, ...args);
};

export const audio: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'audio';
	return createElement(elementType, ...args);
};

export const b: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'b';
	return createElement(elementType, ...args);
};

export const blockquote: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'blockquote';
	return createElement(elementType, ...args);
};

export const br: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'br';
	return createElement(elementType, ...args);
};

export const button: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'button';
	return createElement(elementType, ...args);
};

export const cite: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'cite';
	return createElement(elementType, ...args);
};

export const code: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'code';
	return createElement(elementType, ...args);
};

export const data: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'data';
	return createElement(elementType, ...args);
};

export const del: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'del';
	return createElement(elementType, ...args);
};

export const div: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'div';
	return createElement(elementType, ...args);
};

export const em: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'em';
	return createElement(elementType, ...args);
};

export const figcaption: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'figcaption';
	return createElement(elementType, ...args);
};

export const figure: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'figure';
	return createElement(elementType, ...args);
};

export const footer: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'footer';
	return createElement(elementType, ...args);
};

export const h1: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h1';
	return createElement(elementType, ...args);
};

export const h2: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h2';
	return createElement(elementType, ...args);
};

export const h3: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h3';
	return createElement(elementType, ...args);
};

export const h4: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h4';
	return createElement(elementType, ...args);
};

export const h5: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h5';
	return createElement(elementType, ...args);
};

export const h6: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'h6';
	return createElement(elementType, ...args);
};

export const header: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'header';
	return createElement(elementType, ...args);
};

export const hr: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'hr';
	return createElement(elementType, ...args);
};

export const i: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'i';
	return createElement(elementType, ...args);
};

export const ins: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'ins';
	return createElement(elementType, ...args);
};

export const img: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'img';
	return createElement(elementType, ...args);
};

export const kbd: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'kbd';
	return createElement(elementType, ...args);
};

export const li: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'li';
	return createElement(elementType, ...args);
};

export const main: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'main';
	return createElement(elementType, ...args);
};

export const map: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'map';
	return createElement(elementType, ...args);
};

export const mark: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'mark';
	return createElement(elementType, ...args);
};

export const nav: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'nav';
	return createElement(elementType, ...args);
};

export const ol: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'ol';
	return createElement(elementType, ...args);
};

export const p: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'p';
	return createElement(elementType, ...args);
};

export const pre: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'pre';
	return createElement(elementType, ...args);
};

export const q: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'q';
	return createElement(elementType, ...args);
};

export const s: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 's';
	return createElement(elementType, ...args);
};

export const section: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'section';
	return createElement(elementType, ...args);
};

export const small: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'small';
	return createElement(elementType, ...args);
};

export const sub: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'sub';
	return createElement(elementType, ...args);
};

export const sup: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'sup';
	return createElement(elementType, ...args);
};

export const span: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'span';
	return createElement(elementType, ...args);
};

export const strong: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'strong';
	return createElement(elementType, ...args);
};

export const time: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'time';
	return createElement(elementType, ...args);
};

export const track: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'track';
	return createElement(elementType, ...args);
};

export const u: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'u';
	return createElement(elementType, ...args);
};

export const ul: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'ul';
	return createElement(elementType, ...args);
};

export const video: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'video';
	return createElement(elementType, ...args);
};

export const wbr: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'wbr';
	return createElement(elementType, ...args);
};
