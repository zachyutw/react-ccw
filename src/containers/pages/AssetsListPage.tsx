import { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
    loadAssets,
    loadMoreAssets,
    setQuery,
} from '../../redux/slices/assetsSlice';
import AssetCard from '../../components/Asset/AssetCard';
import useScrollToBottom from '../../utils/useScrollToBottom';
// import { fetchAssetsList } from '../../apis/openseaApi';

const AssetsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & > div {
        width: 50%;
        box-sizing: border-box;
        padding: 24px;
        /* flex: 1 1 50%; */
    }
`;

const Page = (props: RouteComponentProps) => {
    const isWindowBottom = useScrollToBottom(150);
    const dispatch = useAppDispatch();
    const assets = useAppSelector((state) => state.assets.data);
    const params = useAppSelector((state) => state.assets.params);

    useEffect(() => {
        dispatch<any>(loadAssets({ offset: 0 }));
        // fetchAssetsList({ offset: 0 }).then((data) => console.log(data));
    }, []);

    useEffect(() => {
        if (isWindowBottom) {
            dispatch<any>(loadMoreAssets({ offset: params.offset + 1 }));
            dispatch<any>(setQuery({ offset: params.offset + 1 }));
        }
    }, [isWindowBottom, params.offset, dispatch]);
    return (
        <div>
            <AssetsList>
                {assets.map((asset, index) => (
                    <div key={index}>
                        <AssetCard item={asset} />
                    </div>
                ))}
            </AssetsList>
        </div>
    );
};

export default Page;
