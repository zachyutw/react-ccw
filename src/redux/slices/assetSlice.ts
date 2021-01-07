import { createSlice } from '@reduxjs/toolkit';
import thunkDispatcher from '../thunkDispatcher';
import { fetchAssetObject, Asset } from '../../apis/openseaApi';
import { BasicState } from './types';
const NAME = 'asset';

type AssetsState = {
    data: Asset;
    params: { contract_address?: string; token_id?: string };
};

const initialState: AssetsState & BasicState = {
    data: { collection: {}, asset_contract: {} },
    isLoading: false,
    error: {},
    params: {},
};

const slice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
            state.data = initialState.data;
        },
        receivedData(state, action) {
            state.data = action.payload;
            state.isLoading = false;
        },
        fail(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setQuery(state, action) {
            state.params = action.payload;
        },
    },
});

const { loading, fail, receivedData } = slice.actions;

export const { setQuery } = slice.actions;

export const loadAsset = (params: any) => (dispatch: () => void) => {
    thunkDispatcher({
        promise: fetchAssetObject(params),
        dispatch,
        success: receivedData,
        loading,
        fail,
    });
};

export default slice;
