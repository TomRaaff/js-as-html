/**
 * @param location CssSelector string
 * @param item: HTMLElement | Array<HTMLElement>
 */
export function render(location: string, item: HTMLElement | Array<HTMLElement>) {
	if (Array.isArray(item)) {
		const locationElement = document.querySelector(location);
		if (locationElement) {
			locationElement.append(...item);
		}
	} else {
		const locationElement = document.querySelector(location);
		if (locationElement) {
			locationElement.append(item);
		}
	}
}
