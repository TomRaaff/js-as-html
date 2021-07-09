import './styles.sass';
// import calculator from './Calculator';
// import component from './util/Component';
// import testContent from './TestContent';
import { CalculatorComponent } from './CalculatorComponent';
import { render } from './util/Render';

(function () {
	render('section.item-content', new CalculatorComponent(0));
	// component('section.item-content', calculator(), ['calculator-solve-equation']);
	// component('section.item-content', testContent());
}());
