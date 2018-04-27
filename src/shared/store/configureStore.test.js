import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from './configureStore';

Enzyme.configure({ adapter: new Adapter() });

// default state, created by initalizing store with given rootReducers
const preloadedState = {
  dataFetch: {},
  dataHasErrored: false,
  dataIsLoading: false,
  sortData: { artifacts: [] },
};

// resulting update to state from reducer (ie, simulate api call for data)
const initialState = {
  dataFetch: { foo: 'bar' },
  dataIsLoading: true,
  sortData: { artifacts: [1, 2, 3] },
};

// preloaded state and initial state (update) combine to create a new
// state, which will be rendered to string and sent to client
const combinedState = {
  dataFetch: { foo: 'bar' },
  dataHasErrored: false,
  dataIsLoading: true,
  sortData: { artifacts: [1, 2, 3] },
};

it('It configures the store with an empty state', () => {
  expect(configureStore({}).getState()).toEqual(preloadedState);
});

it('It configures the store with an initial state', () => {
  expect(configureStore(initialState).getState()).toEqual(combinedState);
});

it('It configures the store with an initial state', () => {
  process.env.NODE_ENV = 'development';
  process.env.RAZZLE_REDUX_LOGGER_ENABLED = 'true';
  configureStore();
});

it('It configures for production', () => {
  process.env.NODE_ENV = 'production';
  process.env.RAZZLE_REDUX_LOGGER_ENABLED = 'true';
  configureStore();
});
