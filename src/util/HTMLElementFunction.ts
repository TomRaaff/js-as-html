import { GlobalAttributes } from './GlobalAttributes';

export interface HTMLElementFunction {
	(attributes: GlobalAttributes, innerText?: string, childElements?: Array<HTMLElement>): HTMLElement
}
