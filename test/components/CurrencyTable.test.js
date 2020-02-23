import CurrencyTable from "../../src/components/CurrencyTable";
import mockedStore from "../mocks/store"
import {Button} from "semantic-ui-react";

const handleAddFavourite = jest.fn();

function mountSetup() {
    const props = {
        tableName: "A",
        data: mockedStore.currencies[0].data.rates,
        date: "20-02-2020",
        handleAddFavourite,
        isLoading: false,
        favourites: ["THB"]
    };

    const wrapper = mount(<CurrencyTable {...props} />);

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

describe("Render Currency Table", () => {
    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render first currency of with given props", () => {
        expect(wrapper.find(".currency-name").first().text()).toBe("bat (Tajlandia)");
        expect(wrapper.find(".currency-code").first().text()).toBe("THB");
        expect(wrapper.find(".currency-value").first().text()).toBe("0.1252 zł");
    });

    it("should render the first currency with disabled button", () => {
        expect(wrapper.find(Button).first().prop("disabled")).toBe(true);
    });

    it("should render the second currency with enabled button", () => {
        expect(wrapper.find(Button).at(2).prop("disabled")).toBe(false);
    });
});