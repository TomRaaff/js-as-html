import { GlobalAttributes } from './GlobalAttributes';

export const createElement = (type: string, att: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>) => {
	const e = document.createElement(type);

	if (att.autofocus) e.autofocus = att.autofocus;
	if (att.class) e.setAttribute('class', att.class);
	if (att.draggable) e.draggable = att.draggable;
	if (att.hidden) e.hidden = att.hidden;
	if (att.id) e.setAttribute('id', att.id);
	if (att.style) e.setAttribute('style', att.style);
	if (att.tabindex) e.tabIndex = att.tabindex;

	Object.entries(att)
		  .filter(([key]) => key.startsWith('on'))
		  .map(([key,val]) => [key.slice(2), val])
		  .forEach(([key, val]) => {
			  e.addEventListener(key, val);
		  });

	if (innerText) e.innerText = innerText;

	childElements?.forEach((child) => e.append(child));
	return e;
};
