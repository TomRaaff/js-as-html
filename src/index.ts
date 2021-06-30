import './styles.sass';
import { render } from './util/Render';
import calculator from './Calculator';

(function () {
	// todo: add logic to determine what component to render
	render('section.item-content', calculator());
}());
