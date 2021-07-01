export default function dispatch(eventName: string) {
	// console.log('dispatchEvent', eventName);
	document.dispatchEvent(new CustomEvent(eventName, {bubbles: false, cancelable: false}));
}
