import { GlobalAttributes } from './GlobalAttributes';

// todo: try: ...spread all input params
// todo: try: currying: div(attributes?)(innerHTML?)
export interface HTMLElementFunction {
	(...args: Array<GlobalAttributes|string|HTMLElement>): HTMLElement
}
