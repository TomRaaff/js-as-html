import { button, div, input } from './util/HTMLElements';

export default function calculator() {
	return div({class: 'calculator'},
			   input({class: 'equationInput', type: 'text'}),
			   button({class: 'equationItem'}, '('),
			   button({class: 'equationItem'}, ')'),
			   button({class: 'equationItem'}, '%'),
			   button({class: 'clearEquation'}, 'clear'),
			   button({class: 'number'}, '7'),
			   button({class: 'number'}, '8'),
			   button({class: 'number'}, '9'),
			   button({class: 'equationItem'}, '/'),
			   button({class: 'number'}, '4'),
			   button({class: 'number'}, '5'),
			   button({class: 'number'}, '6'),
			   button({class: 'equationItem'}, '*'),
			   button({class: 'number'}, '1'),
			   button({class: 'number'}, '2'),
			   button({class: 'number'}, '3'),
			   button({class: 'equationItem'}, '+'),
			   button({class: 'number'}, '0'),
			   button({class: 'equationItem'}, '.'),
			   button({type: 'solveEquation'}, '='),
			   button({class: 'equationItem'}, '-'),
			   )
}
