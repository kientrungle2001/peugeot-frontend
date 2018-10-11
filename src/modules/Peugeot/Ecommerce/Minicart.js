import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import peugeot_cart from 'cart';
import {Link} from 'react-router-dom';
class ModulePeugeotEcommerceMinicart extends Component {
    componentDidMount() {
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if(!that.is_listened) {
            console.log('MiniCart listen');
            that.callback = function () {
                that.state = {
                    cart_items: peugeot_cart.getItems()
                };
                if (that._ismounted)
                    that.setState(that.state);
            };
            peugeot_cart.listen(that.callback);
            that.is_listened = true;
            peugeot_cart.notify();
        }
    }
    componentWillUnmount() {
        this._ismounted = false;
        peugeot_cart.removeHandler(this.callback);
    }
    removeItem(index) {
        peugeot_cart.remove('cart_items', index);
    }
    closeModal() {
        window.jQuery('#exampleModalLong').modal('hide');
        window.jQuery('.modal-backdrop').remove();
    }
    render() {
        return (
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sản phẩm của bạn</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="shopping-cart">
                                {this.state && this.state.cart_items && this.state.cart_items.map((item, key) => {
                                    return (
                                        <div className="product" key={key}>
                                            <div className="product-image">
                                                <img src={item.image} className="img-responsive" />
                                            </div>
                                            <div className="product-details text-center">
                                                <h4>{item.title}</h4>
                                                <h4>{item.sku}</h4>
                                            </div>
                                            <div className="product-removal">
                                                <button className="remove-product" onClick={() => this.removeItem(key)}>
                                                    X
                  </button>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="totals">
                                    <div className="totals-item">
                                        <label>Tổng tiền</label>
                                        <div className="totals-value">Liên hệ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link to="/cart" onClick={this.closeModal}>
                            <button type="button" className="btn btn-success">Chi tiết giỏ hàng</button>
                            </Link>
                            <Link to="/checkout" onClick={this.closeModal}>
                                <button type="button" className="btn site-button"><img src="/img/icon_search_peugeot.png" style={{ "width": "24px", "marginRight": "0.2rem" }} />Đặt mua</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceMinicart;