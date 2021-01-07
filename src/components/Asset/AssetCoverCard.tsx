import styled from 'styled-components';
import {
    Card,
    Button,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';

import { Asset } from '../../apis/openseaApi';

const StyledAssetCard = styled(Card)`
    .MuiCardMedia-root {
        height: 50vh;
        min-height: 50vh;
    }
`;

type AssetCardProps = {
    item: Asset;
};

const AssetCoverCard = (props: AssetCardProps) => {
    const {
        item: { image_url, name, description, permalink },
    } = props;
    return (
        <StyledAssetCard>
            <CardMedia title={name} image={image_url} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {name}
                </Typography>
                <Typography
                    title={description}
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component='a' href={permalink}>
                    Permalink
                </Button>
            </CardActions>
        </StyledAssetCard>
    );
};

export default AssetCoverCard;
