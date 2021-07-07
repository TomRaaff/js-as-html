/**
 * @param parentCssSelector CssSelector string
 * @param content: HTMLElement | Array<HTMLElement>
 */
export function render(parentCssSelector: string, content: HTMLElement | Array<HTMLElement>) {
	const parent = document.querySelector(parentCssSelector);
	if (!parent) throw new Error('could not find parent-element by selector: ' + parentCssSelector);

	if (Array.isArray(content)) {
		parent.append(...content);
		//ts-ignore
	} else {
		parent.append(content);
	}

	return content;
}
