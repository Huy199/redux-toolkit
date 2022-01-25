// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);
//  tham so thu hai neu co la 1 gia tri khoi tao cua store
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/FiltersSlide";
import todoListReducer from "../components/TodoList/TodosSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoListReducer.reducer,
  },
});
export default store;
