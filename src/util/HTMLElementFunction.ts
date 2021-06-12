import { GlobalAttributes } from './GlobalAttributes';

export interface HTMLElementFunction {
	(attributes: GlobalAttributes, innerContent?: Array<string|HTMLElement>): HTMLElement
}
