import App from '../src/App';
import {Button} from "semantic-ui-react";

function shallowSetup() {
    const wrapper = shallow(<App />);

    return {
        wrapper
    };
}

let wrapper;

beforeEach(() => {
    const setup = shallowSetup();
    wrapper = setup.wrapper;
});

describe('Render App', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

