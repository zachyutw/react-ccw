import { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { loadAsset } from '../../redux/slices/assetSlice';
import GoBackHeader from '../../components/Header/GoBackHeader';
import AssetCoverCard from '../../components/Asset/AssetCoverCard';
import styled from 'styled-components';

const AssetCover = styled.div`
    margin: 2rem 0;
`;

const Page = (props: RouteComponentProps) => {
    const {
        match: { params },
    } = props;
    const { contract_address, token_id } = params as any;
    const dispatch = useAppDispatch();
    const asset = useAppSelector((state) => state.asset.data);
    useEffect(() => {
        if (contract_address && token_id) {
            dispatch<any>(loadAsset({ contract_address, token_id }));
        }
    }, [contract_address, token_id, dispatch]);
    return (
        <div>
            <GoBackHeader title={asset.collection.name} />
            <Container>
                <AssetCover>
                    <AssetCoverCard item={asset} />
                </AssetCover>
            </Container>
        </div>
    );
};

export default Page;
