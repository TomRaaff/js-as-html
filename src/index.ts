import './styles.sass';
import testContent from './TestContent';
import { render } from './util/Render';

(function () {
	// todo: add logic to determine what component to render
	render('section.item-content', testContent());
}());
