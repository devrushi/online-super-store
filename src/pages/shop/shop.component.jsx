import {React,Component} from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewProduct from '../../components/preview-product/preview-product.component';
class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            products :SHOP_DATA
        };
    }
    render(){
        const {products} = this.state; 
        return( <div>
            <h1>SHOP PAGE</h1>
            {
                 products.map(({id,...otherproducts}) => (
                    <PreviewProduct key={id}{...otherproducts}/>
                ))
            }
            </div>
        
        )

    }

}

export default Shop;