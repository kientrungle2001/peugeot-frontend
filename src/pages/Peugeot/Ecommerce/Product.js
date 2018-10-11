import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotEcommerceProduct from 'modules/Peugeot/Ecommerce/Product';
import ModulePeugeotEcommerceProductRelated from 'modules/Peugeot/Ecommerce/Product/Related';
import 'pages/Peugeot/Category/Category.css';
class PagePeugeotEcommerceProduct extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceProduct productId={this.props.productId} type={this.props.type} />
                    <ModulePeugeotEcommerceProductRelated productId={this.props.productId} type={this.props.type} categoryId={this.props.categoryId} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceProduct;
