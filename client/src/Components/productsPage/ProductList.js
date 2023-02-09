import React from 'react';
import { useFilterContext } from '../../Context/Filter_Context';
import GridView from './GridView';

const ProductList = () => {
    const {filter_products, setGridView} = useFilterContext();

    if ( setGridView)
    {
        return <GridView products={filter_products}/>;
    }
};

export default ProductList