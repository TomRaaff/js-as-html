import { render } from './Render';
import Component2 from './Component2';

function addDestroyEventListener(eventName: string, content: HTMLElement | Array<HTMLElement>) {
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
								  destroyOn?: Array<string>): HTMLElement | Array<HTMLElement> | Component2 {
	if (destroyOn) {
		destroyOn.forEach((eventName) => {
			addDestroyEventListener(eventName, content);
		});
	} else {
		/*
		// destroy when parent is destroyed
		// is this even necessary?
		const callback = function (mutations: MutationRecord[], obs: MutationObserver) {
			console.log({ obs, mutations });
			// destroy component
			// observer.disconnect();
		};
		const observer = new MutationObserver(callback);
		const parent = document.querySelector(parentCssSelector);
		if (parent) {
			observer.observe(parent, {childList: true});
		}
		*/
	}

	return render(parentCssSelector, content);
}
