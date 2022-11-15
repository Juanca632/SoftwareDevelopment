import React from 'react';
import { ProductList } from '../../containers/ProductList/ProductList';
import { Banner } from '../../containers/Banner/Banner';
import { Footer } from '../../containers/Footer/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Banner/>
            <ProductList />
            <Footer/>
        </React.Fragment>
    );
}

export { Home };