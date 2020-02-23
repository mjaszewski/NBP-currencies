import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CurrencyTable from "../../src/components/CurrencyTable";
import mockedStore from "../mocks/store";
import TableGroup from "../../src/components/TableGroup";
import {} from "../../src/actions/favouriteCurrencies"
const mockStore = configureStore();

let store;
let wrapper;
let group;

beforeEach(() => {
    store = mockStore(mockedStore);
    wrapper = mount(<Provider store={store}>
        <TableGroup />
    </Provider>);
    group = wrapper.find(TableGroup).first().instance();
    store.clearActions();
});

describe("Render TableGroup", () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with given state from Redux store", () => {
        expect(wrapper.find(CurrencyTable)).toHaveLength(2);
    });
});
