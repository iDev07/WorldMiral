import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReduser } from "redux-form";
import thunkMiddleware from "redux-thunk";
import SETContabyuter from "./Corparativ/Corparative-reduser";
import CarouselReduser from "./home/Carousel-reduser";
import StafReduser from "../_utils/Staf-reduser";
import langReducer from "./reducers/langReducer";
import homeReducer from "./reducers/homeReducer";
import NewsReduser from "./SingleNews-reduser";
import TenderReduser from "../components/_redux/Tender-reduser";
const rootReducers = combineReducers({
  form: formReduser,
  staf: StafReduser,
  carousel: CarouselReduser,
  contrabyuter: SETContabyuter,
  news:NewsReduser,
  tender:TenderReduser,
  langReducer,
  homeReducer,
});
const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  compoceEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
