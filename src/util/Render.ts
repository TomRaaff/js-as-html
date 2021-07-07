/**
 * @param parentCssSelector CssSelector string
 * @param content: HTMLElement | Array<HTMLElement>
 */
import Component2 from './Component2';

export function render(parentCssSelector: string, content: HTMLElement | Array<HTMLElement> | Component2) {
	const parent = document.querySelector(parentCssSelector);
	if (!parent) throw new Error('could not find parent-element by selector: ' + parentCssSelector);

	if ('isComponent' in content) {
		const rendered = content.render();
		(Array.isArray(rendered)) ? parent.append(...rendered) : parent.append(rendered);
	} else if (Array.isArray(content)) {
		parent.append(...content);
	} else {
		parent.append(content);
	}

	return content;
}
