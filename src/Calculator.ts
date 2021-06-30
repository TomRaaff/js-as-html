import { button, div, input } from './util/HTMLElements';

const equationInput = input({class: 'equationInput', type: 'text'}) as HTMLInputElement;

function add(buttonEl: HTMLButtonElement, inputElement: HTMLInputElement) {
	const text = buttonEl.innerText;
	inputElement.value = inputElement.value + text;
}

function addToEquation(event: Event) {
	const button = event.currentTarget as HTMLButtonElement;
	add(button, equationInput);
}

function clearEquation(inputElement: HTMLInputElement) {
	inputElement.value = '';
}

export function solveEquation(inputElement: HTMLInputElement) {
	// regex matches the negation of all allowed characters
	const disallowedChars = /([^0-9()/+\-*%]+)/gmi;
	const sanitized = inputElement.value.replace(disallowedChars, '');
	inputElement.value = eval(sanitized);
}

/* todo: make a display for the answers.
		 build it separately from the input, so you can clear the input whenever '=' is pressed
		 also, it is nice to see all equations the user entered
		 just like linux does with it's default calculator
 */
export default function calculator() {
	return div({class: 'calculator'},
			   equationInput,
			   button({class: 'equationItem', onclick: addToEquation}, '('),
			   button({class: 'equationItem', onclick: addToEquation}, ')'),
			   button({class: 'equationItem', onclick: addToEquation}, '%'),
			   button({class: 'clearEquation', onclick: () => clearEquation(equationInput)}, 'clear'),
			   button({class: 'number', onclick: addToEquation}, '7'),
			   button({class: 'number', onclick: addToEquation}, '8'),
			   button({class: 'number', onclick: addToEquation}, '9'),
			   button({class: 'equationItem', onclick: addToEquation}, '/'),
			   button({class: 'number', onclick: addToEquation}, '4'),
			   button({class: 'number', onclick: addToEquation}, '5'),
			   button({class: 'number', onclick: addToEquation}, '6'),
			   button({class: 'equationItem', onclick: addToEquation}, '*'),
			   button({class: 'number', onclick: addToEquation}, '1'),
			   button({class: 'number', onclick: addToEquation}, '2'),
			   button({class: 'number', onclick: addToEquation}, '3'),
			   button({class: 'equationItem', onclick: addToEquation}, '+'),
			   button({class: 'number', onclick: addToEquation}, '0'),
			   button({class: 'equationItem', onclick: addToEquation}, '.'),
			   button({type: 'solveEquation', onclick: () => solveEquation(equationInput)}, '='),
			   button({class: 'equationItem', onclick: addToEquation}, '-'),
			   )
}
