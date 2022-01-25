// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchTodo":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/filterTodo":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priorityTodo":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default filtersReducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchTodo: (state, action) => {
      // viet la mutation thuc chat la inmutation || IMMER
      state.search = action.payload;
    },
    filterTodo: (state, action) => {
      state.status = action.payload;
    },
    priorityTodo: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
