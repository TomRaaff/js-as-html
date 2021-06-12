import { EventHandlerAttributes } from './EventHandlerAttributes';

export interface GlobalAttributes extends EventHandlerAttributes {
	autofocus?: boolean;
	class?: string; // or Array<string>?
	draggable?: boolean;
	hidden?: boolean;
	id?: string;
	style?: string;
	tabindex?: number;
}
