import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotEcommerceCheckout from 'modules/Peugeot/Ecommerce/Checkout';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import 'pages/Peugeot/Category/Category.css';
class PagePeugeotEcommerceCheckout extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceCheckout />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceCheckout;
