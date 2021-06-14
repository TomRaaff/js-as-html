import { GlobalAttributes } from './GlobalAttributes';

type ElementDefinition = GlobalAttributes|string|HTMLElement;

function isStringOrHTMLElement(arg: ElementDefinition): boolean {
	return arg instanceof HTMLElement || typeof arg === 'string';
}

function assignAttributes(attr: GlobalAttributes, e: HTMLElement) {
	if (attr.autofocus) e.autofocus = attr.autofocus;
	if (attr.class) e.setAttribute('class', attr.class);
	if (attr.draggable) e.draggable = attr.draggable;
	if (attr.hidden) e.hidden = attr.hidden;
	if (attr.id) e.setAttribute('id', attr.id);
	if (attr.style) e.setAttribute('style', attr.style);
	if (attr.tabindex) e.tabIndex = attr.tabindex;
}

function assignEventListeners(element: HTMLElement, attributes: GlobalAttributes): void {
	Object.entries(attributes)
		  .filter(([key]) => key.startsWith('on'))
		  .map(([key, val]) => [key.slice(2), val])
		  .forEach(([key, val]) => {
			  element.addEventListener(key, val);
		  });
}

export function createElement(type: string, ...args: Array<ElementDefinition>) {
	const element = document.createElement(type);
	const attributes = args.find((arg) => !isStringOrHTMLElement(arg)) as GlobalAttributes;
	const innerContent = args.filter(isStringOrHTMLElement) as Array<string|HTMLElement>;

	if (attributes) {
		assignAttributes(attributes, element);
		assignEventListeners(element, attributes);
	}

	if (innerContent) {
		innerContent.forEach((child) => {
			// element.append takes both strings and HTMLElements
			element.append(child);
		});
	}

	return element;
};
