import { GlobalAttributes } from './GlobalAttributes';

// todo: try: ...spread all input params
// todo: try: currying: div(attributes?)(innerHTML?)
export interface HTMLElementFunction {
	(attributes: GlobalAttributes, innerContent?: Array<string|HTMLElement>): HTMLElement
}
