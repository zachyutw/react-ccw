import styled from 'styled-components';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Asset } from '../../apis/openseaApi';

const StyledAssetCard = styled(Card)`
    a {
        text-decoration: none;
        color: #000;
    }
    .MuiCardMedia-root {
        height: 20vh;
        min-height: 20vh;
    }
`;

type AssetCardProps = {
    item: Asset;
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
                <CardActionArea>
                    <CardMedia image={image_url} title={name} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </StyledAssetCard>
    );
};

export default AssetCard;
