import { render } from './Render';

function addRemoveEventListener(eventName: string, content: HTMLElement | Array<HTMLElement>) {
	document.addEventListener(eventName, () => {
		if (Array.isArray(content)) {
			content.forEach((el) => el.remove());
		} else {
			content.remove();
		}
	});
}

export default function component(parentCssSelector: string,
								  content: HTMLElement | Array<HTMLElement>,
								  destroyOn?: Array<string>): HTMLElement | Array<HTMLElement> {
	if (destroyOn) {
		destroyOn.forEach((eventName) => {
			addRemoveEventListener(eventName, content);
		});
	}

	return render(parentCssSelector, content);
}
