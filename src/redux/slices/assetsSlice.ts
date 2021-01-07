import { createSlice } from '@reduxjs/toolkit';
import thunkDispatcher from '../thunkDispatcher';
import {
    fetchAssetsList,
    FetchAssetsListRespData,
} from '../../apis/openseaApi';
const NAME = 'assets';

type BasicState = {
    isLoading: boolean;
    error: any;
};

type AssetsState = {
    data: FetchAssetsListRespData[];
    params: { offset: number };
};

const initialState: AssetsState & BasicState = {
    data: [],
    isLoading: false,
    error: {},
    params: { offset: 0 },
};

const slice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
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
        concatData(state, action) {
            state.data = state.data.concat(action.payload);
            state.isLoading = false;
        },
    },
});

const { loading, fail, receivedData, concatData } = slice.actions;

export const { setQuery } = slice.actions;

export const loadAssets = (params: any) => (dispatch: () => void) => {
    thunkDispatcher({
        promise: fetchAssetsList(params),
        dispatch,
        success: receivedData,
        loading,
        fail,
    });
};

export const loadMoreAssets = (params: any) => (dispatch: () => void) => {
    thunkDispatcher({
        promise: fetchAssetsList(params),
        dispatch,
        success: concatData,
        loading,
        fail,
    });
};

export default slice;
