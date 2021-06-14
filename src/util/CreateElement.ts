import { GlobalAttributes } from './GlobalAttributes';

function isObject(input: unknown): boolean {
	return typeof input === 'object';
}

function isStringOrHTMLElement(arg: GlobalAttributes|string|HTMLElement): boolean {
	return arg instanceof HTMLElement || typeof arg === 'string';
}

function assignEventListeners(element: HTMLElement, attributes: GlobalAttributes): void {
	Object.entries(attributes)
		  .filter(([key]) => key.startsWith('on'))
		  .map(([key, val]) => [key.slice(2), val])
		  .forEach(([key, val]) => {
			  element.addEventListener(key, val);
		  });
}

export const createElement = (type: string, ...args: Array<GlobalAttributes|string|HTMLElement>) => {
	const e = document.createElement(type);
	const att = args.find(isObject) as GlobalAttributes;
	const innerContent = args.filter(isStringOrHTMLElement) as Array<string|HTMLElement>;

	if (att) {
		if (att.autofocus) e.autofocus = att.autofocus;
		if (att.class) e.setAttribute('class', att.class);
		if (att.draggable) e.draggable = att.draggable;
		if (att.hidden) e.hidden = att.hidden;
		if (att.id) e.setAttribute('id', att.id);
		if (att.style) e.setAttribute('style', att.style);
		if (att.tabindex) e.tabIndex = att.tabindex;

		assignEventListeners(e, att);
	}

	if (innerContent) {
		innerContent.forEach((child) => {
			// element.append takes both strings and HTMLElements
			e.append(child);
		});
	}
	return e;
};
