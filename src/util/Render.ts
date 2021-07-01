/**
 * @param location CssSelector string
 * @param content: HTMLElement | Array<HTMLElement>
 */
export function render(location: string, content: HTMLElement | Array<HTMLElement>) {
	if (Array.isArray(content)) {
		const locationElement = document.querySelector(location);
		if (locationElement) {
			locationElement.append(...content);
		}
	} else {
		const locationElement = document.querySelector(location);
		if (locationElement) {
			locationElement.append(content);
		}
	}
	return content;
}
