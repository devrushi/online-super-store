import React from 'react';
import './preview-product.styles.scss';
import ProductItem from '../product-item/product-item.component';

const PreviewProduct = ({title,items}) =>(
<div className="product-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">{
        items
        .filter((item,index) => index < 4 )
        .map(({id,...otherItemprops}) => (
            <ProductItem key={id}{...otherItemprops}/>
        ))
    }</div>

</div>
);

export default PreviewProduct;