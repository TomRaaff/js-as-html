import './styles.sass';
// import calculator from './Calculator';
import component from './util/Component';
import testContent from './TestContent';

(function () {
	// todo: add logic to determine what testComponent to render
	// component('section.item-content', calculator(), ['calculator-solve-equation']);
	component('section.item-content', testContent());
}());
