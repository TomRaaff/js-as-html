import './styles.sass';
// import calculator from './Calculator';
// import component from './util/Component';
// import testContent from './TestContent';
import { CalculatorComponent } from './CalculatorComponent';
import { render } from './util/Render';

(function () {
	// todo: add logic to determine what component to render
	render('section.item-content', new CalculatorComponent().render());
	// component('section.item-content', calculator(), ['calculator-solve-equation']);
	// component('section.item-content', testContent());
}());
