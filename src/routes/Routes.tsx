import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const AssetsListPage = React.lazy(
    () => import('../containers/pages/AssetsListPage')
);
const AssetDetailPage = React.lazy(
    () => import('../containers/pages/AssetDetailPage')
);

export const homeRoute = { path: '/', name: 'home' };
export const navMainFields = [homeRoute];
export const assetRoute = {
    path: '/asset/:contract_address/:token_id',
    name: 'asset_object',
};
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route {...assetRoute} component={AssetDetailPage} />
                    <Route exact {...homeRoute} component={AssetsListPage} />
                </Suspense>
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
