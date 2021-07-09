import { div, h2 } from './util/HTMLElements';
import Component2 from './util/Component2';
import { SubComponent } from './SubComponent';

export class AnswersComponent extends Component2 {
	constructor(answer: number) {
		super();
		this.setState({answer});
		console.log('answers component created. answer: ', this.state.answer);
		setInterval(() => {
			this.state.answer = new Date().getTime();
		}, 2000);
	}

	render(): HTMLElement | Array<HTMLElement> {
		return div(
			{ class: 'answers-component' },
			h2(`here is the answer: ${this.state.answer}`),
			new SubComponent(this.state.answer)
		);
	}

}
