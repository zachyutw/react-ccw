import { useEffect } from 'react';
import { fetchAssetObject } from '../../apis/openseaApi';
import { Link, RouteComponentProps } from 'react-router-dom';

const Page = (props: RouteComponentProps) => {
    useEffect(() => {
        fetchAssetObject({ token_id: '556324' }).then((data) =>
            console.log(data)
        );
    }, []);
    return (
        <div>
            <h1>Detail</h1>
        </div>
    );
};

export default Page;
