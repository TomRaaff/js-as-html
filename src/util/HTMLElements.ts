import { GlobalAttributes } from './GlobalAttributes';
import { HTMLElementFunction } from './HTMLElementFunction';
import { createElement } from './CreateElement';

export type ElementDefinition = GlobalAttributes | string | HTMLElement;

export const button: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'button';
	return createElement(elementType, ...args);
};

export const div: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'div';
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

export const li: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'li';
	return createElement(elementType, ...args);
};

export const main: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'main';
	return createElement(elementType, ...args);
};

export const p: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'p';
	return createElement(elementType, ...args);
};

export const section: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'section';
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

export const ul: HTMLElementFunction = (...args: Array<ElementDefinition>) => {
	const elementType = 'ul';
	return createElement(elementType, ...args);
};
