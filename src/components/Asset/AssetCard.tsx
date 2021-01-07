import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FetchAssetsListRespData } from '../../apis/openseaApi';

const StyledAssetCard = styled.div`
    border: 1px solid #000;
    padding: 14px;
    a {
        text-decoration: none;
        color: #000;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 100%;
        height: 20vh;
        object-fit: cover;
    }
`;

type AssetCardProps = {
    item: FetchAssetsListRespData;
};

const AssetCard = (props: AssetCardProps) => {
    const {
        item: {
            image_url,
            name,
            token_id,
            asset_contract: { address },
        },
    } = props;
    return (
        <StyledAssetCard>
            <Link to={`/asset/${address}/${token_id}`}>
                <img src={image_url} alt='asset' />
                <p>{name}</p>
            </Link>
        </StyledAssetCard>
    );
};

export default AssetCard;
