import axios from 'axios';

export type FetchAssetsListProp = {
    offset: number;
};

export type FetchAssetsListParams = {
    format: 'json';
    owner: string;
    offset: number;
    limit: number;
};

export type FetchAssetsListRespData = {
    image_url: string;
    token_id: string;
    name: string;
    collection: {
        name: string;
    };
    asset_contract: {
        address: string;
    };
    description: string;
    permalink: string;
};

export type fetchAssetObjectProp = {
    token_id: string;
};

export const fetchAssetsList = async (props: FetchAssetsListProp) => {
    const { offset } = props;
    const params: FetchAssetsListParams = {
        format: 'json',
        limit: 20,
        offset,
        owner: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91',
    };

    const resp: FetchAssetsListRespData[] = await axios
        .get('https://api.opensea.io/api/v1/assets/', { params })
        .then((result) =>
            result.data.assets.map(
                ({
                    image_url,
                    name,
                    collection,
                    description,
                    permalink,
                    token_id,
                    asset_contract,
                }: any) => ({
                    image_url,
                    name,
                    collection: { name: collection.name },
                    asset_contract: { address: asset_contract.address },
                    description,
                    permalink,
                    token_id,
                })
            )
        );

    return resp;
};

export const fetchAssetObject = async (props: fetchAssetObjectProp) => {
    const { token_id } = props;
    const resp = await axios
        .get(
            `https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/${token_id}`
        )
        .then((result) => result.data);
    return resp;
};
