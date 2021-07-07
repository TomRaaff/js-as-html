import { div, h2 } from './util/HTMLElements';
import Component2 from './util/Component2';

export class AnswersComponent extends Component2 {
	constructor(private readonly answer: number) {
		super();
		console.log('answers component created. answer: ', answer);
	}

	render(): HTMLElement | Array<HTMLElement> {
		return div(
			{ class: 'answers-component' },
			h2(`here is the answer: ${this.answer}`)
		);
	}

}
