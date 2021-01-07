import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
    loadAssets,
    loadMoreAssets,
    setQuery,
} from '../../redux/slices/assetsSlice';
import AssetCard from '../../components/Asset/AssetCard';
import useScrollToBottom from '../../utils/useScrollToBottom';

const AssetsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & > div {
        width: 50%;
        box-sizing: border-box;
        padding: 24px;
        @media only screen and (max-width: 480px) {
            width: 100%;
        }
        /* flex: 1 1 50%; */
    }
`;

const Page = () => {
    const isWindowBottom = useScrollToBottom(150);
    const dispatch = useAppDispatch();
    const assets = useAppSelector((state) => state.assets.data);
    const params = useAppSelector((state) => state.assets.params);

    useEffect(() => {
        dispatch<any>(loadAssets({ offset: 0 }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isWindowBottom) {
            dispatch<any>(loadMoreAssets({ offset: params.offset + 1 }));
            dispatch<any>(setQuery({ offset: params.offset + 1 }));
        }
    }, [isWindowBottom, params.offset, dispatch]);
    return (
        <div>
            <Container>
                <AssetsList>
                    {assets.map((asset, index) => (
                        <div key={index}>
                            <AssetCard item={asset} />
                        </div>
                    ))}
                </AssetsList>
            </Container>
        </div>
    );
};

export default Page;
