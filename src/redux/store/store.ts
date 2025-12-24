import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counter";
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


// create store 
// provider wrap the app
// create slice or feature -> then register in the store
// useSelector -> to access the state
// useDispatch -> to dispatch the action
