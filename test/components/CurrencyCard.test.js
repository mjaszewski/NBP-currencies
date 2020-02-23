import CurrencyCard from '../../src/components/CurrencyCard/CurrencyCard';
import {Button, Card} from "semantic-ui-react";

const handleDelete = jest.fn();

function mountSetup() {
    const props = {
        name: "bat (Tajlandia)",
        code: "THB",
        value: 0.1252,
        date: "2020-02-21",
        handleDelete: handleDelete,
    };

    const wrapper = mount(<CurrencyCard {...props} />);

    return {
        props,
        wrapper
    };
}

let wrapper;
let props;

beforeEach(() => {
    const setup = mountSetup();
    wrapper = setup.wrapper;
    props = setup.props;
});

describe('Render Currency Card', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render a card with the details', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Card.Header).text()).toBe(`${props.name} - ${props.date}`);
        expect(wrapper.find(Card.Meta).text()).toBe(props.code);
        expect(wrapper.find(Card.Description).text()).toBe(`${String(props.value)} zł`);
    });
});

describe('Currency Card interactions', () => {
    it('should call the onClick function when \'Remove\' button is clicked', () => {
        wrapper.find(Button).simulate('click');
        expect(handleDelete).toHaveBeenCalledTimes(1);
    });
});
