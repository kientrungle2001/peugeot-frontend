import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import ModulePeugeotEcommerceMinicart from 'modules/Peugeot/Ecommerce/Minicart';

class ModulePeugeotFooterFloatbar extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="btn-fixed-right fixed-top">
                    <button className="mini-cart" data-toggle="modal" data-target="#exampleModalLong">
                        <img src="/img/icon_shopping_cart.png" className="img-responsive" alt="Giở hàng" />
                    </button>
                    <div className="hotline">
                        <a href="tel:+84977454568" title="Hotline">
                            <img src="/img/calll.gif" className="img-responsive" alt="Hotline" />
                        </a>
                    </div>
                    <div className="language-icon">
                        <img src="/img/vietnam-icon.png" className="img-responsive" alt="Icon-Language" />
                    </div>
                </div>
                <ModulePeugeotEcommerceMinicart />
            </div>
        );
    }
}

export default ModulePeugeotFooterFloatbar;