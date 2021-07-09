import { div, h3, } from './util/HTMLElements';
import Component2 from './util/Component2';

export class SubComponent extends Component2 {
    constructor(someField: number) {
        super();
        this.setState({someField});
    }

    render() {
        return div(
            h3(this.state.someField.toString())
        )
    }
}
