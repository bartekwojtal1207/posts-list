import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    posts: null,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
