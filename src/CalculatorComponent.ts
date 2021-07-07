import { button, div, h3, header, input } from './util/HTMLElements';
import dispatch from './util/Dispatch';
import { AnswersComponent } from './AnswersComponent';
import Component2 from './util/Component2';

export class CalculatorComponent extends Component2 {
	private answer = 0;
	private equationInput = input({ class: 'equationInput', type: 'text' }) as HTMLInputElement;

	add(buttonEl: HTMLButtonElement, inputElement: HTMLInputElement) {
		const text = buttonEl.innerText;
		inputElement.value = inputElement.value + text;
	}

	addToEquation(event: Event) {
		const button = event.currentTarget as HTMLButtonElement;
		this.add(button, this.equationInput);
	}

	clearEquation(inputElement: HTMLInputElement) {
		inputElement.value = '';
	}

	solveEquation(inputElement: HTMLInputElement) {
		// regex matches the negation of all allowed characters
		const disallowedChars = /([^0-9()/+\-*%]+)/gmi;
		const sanitized = inputElement.value.replace(disallowedChars, '');
		this.answer = eval(sanitized);
		inputElement.value = this.answer.toString();
		dispatch('calculator-solve-equation');
	}

	render(): HTMLElement | Array<HTMLElement> {
		return div({ class: 'calculator' },
				   header(
					   // @ts-ignore
					   {
						   onclick: function () {
							   console.log(this);
							   const that = this as HTMLHeadElement;
							   that.remove();
						   }
					   },
					   h3('Calculator')
				   ),
				   this.equationInput,
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '('),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, ')'),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '%'),
				   button({ class: 'clearEquation', onclick: () => this.clearEquation(this.equationInput) }, 'clear'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '7'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '8'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '9'),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '/'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '4'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '5'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '6'),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '*'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '1'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '2'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '3'),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '+'),
				   button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '0'),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '.'),
				   button({ type: 'solveEquation', onclick: () => this.solveEquation(this.equationInput) }, '='),
				   button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '-'),
				   // TODO: how do I update this component whenever the answer changes?
				   new AnswersComponent(this.answer)
		);
	}

}
