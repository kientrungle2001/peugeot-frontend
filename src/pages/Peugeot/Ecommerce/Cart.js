import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotEcommerceCart from 'modules/Peugeot/Ecommerce/Cart';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import 'pages/Peugeot/Category/Category.css';
class PagePeugeotEcommerceCart extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceCart />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceCart;
