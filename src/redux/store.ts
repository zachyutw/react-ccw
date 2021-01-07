import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
} from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import assets from './slices/assetsSlice';
import asset from './slices/assetSlice';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const reducer = combineReducers({
    assets: assets.reducer,
    asset: asset.reducer,
});
export type RootState = ReturnType<typeof reducer>;
const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware().concat(reduxLogger),
});

export default store;
