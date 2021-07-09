let id = 0;

export default abstract class Component2 {
	protected state: any;
	private componentId: string;

	constructor() {
		this.componentId = (id++).toString();
		this.render = new Proxy(this.render, this.renderHandler);
	}

	protected setState(state: object) {
		this.state = new Proxy(state, this.fieldHandler);
	}

	renderHandler: ProxyHandler<any> = {
		apply: (target, thisArg, argArray) => {
			const oldComponent = document.querySelector(`[data-component-id="${this.componentId}"]`);
			let parent;
			if (oldComponent) {
				parent = oldComponent.parentElement;
				oldComponent.remove();
			}
			const renderOutput = target.apply(thisArg, ...argArray) as HTMLElement;
			renderOutput.dataset.componentId = this.componentId;
			if (parent) {
				// todo: multi-element support
				parent.append(renderOutput);
			}
			console.log('render component', this.componentId);
			return renderOutput;
		}
	};

	fieldHandler: ProxyHandler<any> = {
		set: (target: any, prop: string | symbol, value: any): boolean => {
			target[prop] = value;
			this.render();
			return true;
		}
	};

	isComponent(): boolean {
		return true;
	}

	abstract render(): HTMLElement | Array<HTMLElement>;
}
