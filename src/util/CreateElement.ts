import { GlobalAttributes } from './GlobalAttributes';
import { ElementDefinition } from './htmlElements';
import { EventHandlerAttributes } from './EventHandlerAttributes';

type Attribute = [keyof GlobalAttributes, any];
type EventAttribute = [keyof EventHandlerAttributes | string, Function];

function isStringOrHTMLElement(arg: ElementDefinition): boolean {
	return arg instanceof HTMLElement || typeof arg === 'string';
}

function assignAttributes(htmlElement: any, attr: Array<Attribute>) {
	attr.forEach(([key, val]) => {
		if (typeof val === 'boolean') {
			htmlElement[key] = val;
			return;
		}
		if (typeof val === 'string') {
			htmlElement.setAttribute(key, val);
		}
	});
}

function assignEventListeners(htmlElement: any, events: Array<EventAttribute>): void {
	events.forEach(([key, val]) => {
		htmlElement.addEventListener(key.slice(2), val);
	});
}

export function createElement(type: string, ...args: Array<ElementDefinition>) {
	const element = document.createElement(type);
	const attributes = args.find((arg) => !isStringOrHTMLElement(arg)) as GlobalAttributes;
	const innerContent = args.filter(isStringOrHTMLElement) as Array<string | HTMLElement>;

	if (attributes) {
		const attr = Object.entries(attributes)
						   .filter(([key]) => !key.startsWith('on')) as Array<Attribute>;
		const events = Object.entries(attributes)
							 .filter(([key]) => key.startsWith('on')) as Array<EventAttribute>;
		assignAttributes(element, attr);
		assignEventListeners(element, events);
	}

	if (innerContent) {
		innerContent.forEach((child) => {
			// element.append takes both strings and HTMLElements
			element.append(child);
		});
	}

	return element;
};
