import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CurrencyCardGroup from "../../src/components/CurrencyCardGroup/CurrencyCardGroup";
import mockedStore from "../mocks/store";
import CurrencyCard from "../../src/components/CurrencyCard";
import {removeAllFavouriteCurrency, removeFavouriteCurrency, DATA_REMOVE_ALL, DATA_REMOVE} from "../../src/actions/favouriteCurrencies"
const mockStore = configureStore();

let store;
let wrapper;
let group;

beforeEach(() => {
    store = mockStore(mockedStore);
    wrapper = mount(<Provider store={store}>
        <CurrencyCardGroup/>
    </Provider>);
    group = wrapper.find('CurrencyCardGroup').instance();
    store.clearActions();
});

describe("Render CurrencyCardGroup", () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with given state from Redux store", () => {
        expect(wrapper.find(CurrencyCard)).toHaveLength(2);
    });
});

describe("CurrencyCardGroup interactions", () => {
    it("should call the handleDeleteAll function when \\'Remove all\\' button is clicked", () => {
        const mockedHandleClickRemoveAll = jest.fn();
        group.handleDeleteAll = mockedHandleClickRemoveAll;
        group.forceUpdate();
        wrapper.update();

        wrapper.find('button#remove-all').props().onClick();
        store.dispatch(removeAllFavouriteCurrency());
        const actions = store.getActions();
        const expectedPayload =  { type: DATA_REMOVE_ALL };

        expect(mockedHandleClickRemoveAll).toHaveBeenCalledTimes(1);
        expect(actions).toEqual([expectedPayload])
    });
});