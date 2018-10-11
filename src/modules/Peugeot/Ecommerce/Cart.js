import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import 'pages/Peugeot/Category/Category.css';
import peugeot_cart from 'cart';
import {Link} from 'react-router-dom';

class ModulePeugeotEcommerceCart extends Component {
    componentDidMount() {
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if (!that.is_listened) {
            console.log('Cart listen')
            that.callback = function() {
                console.log('fired');
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
        console.log('remove ' + index);
        peugeot_cart.remove('cart_items', index);
    }
    updateQuantity(key, evt) {
        peugeot_cart.update(key, {
            quantity: evt.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><svg className="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg> Giỏ hàng</h1>
                </div>

                <div className="container content-detail-cart">
                    <div className="row">
                        <div className="clearfix"></div>
                        <div className="shopping-cart">
                            <div className="column-labels">
                                <label className="product-image">Hình ảnh</label>
                                <label className="product-details">Tên - Mã Sản phẩm</label>
                                <label className="product-price">Giá</label>
                                <label className="product-quantity">Số lượng</label>
                                <label className="product-removal">Xóa</label>
                                <label className="product-line-price">Thành tiền</label>
                            </div>
                            {this.state && this.state.cart_items && this.state.cart_items.map((item, key) => {
                                return (
                                    <div className="product" key={key}>
                                        <div className="product-image">
                                            <img src={item.image} className="img-fluid" />
                                        </div>
                                        <div className="product-details text-center">
                                            <h4>{item.title}</h4>
                                            <h4>{item.sku}</h4>
                                        </div>
                                        <div className="product-price">Liên hệ</div>
                                        <div className="product-quantity">
                                            <input type="number" value={item.quantity} min="1" onChange={(evt)=> this.updateQuantity(key, evt)} />
                                        </div>
                                        <div className="product-removal">
                                            <button className="remove-product" onClick={() => this.removeItem(key)}>Remove</button>
                                        </div>
                                        <div className="product-line-price">Liên hệ</div>
                                    </div>
                                );
                            })}

                            <div className="totals">
                                <div className="totals-item">
                                    <label>Tổng tiền</label>
                                    <div className="totals-value">Liên hệ</div>
                                </div>
                            </div>
                            <Link to="/category/product/1/san-pham"><button type="button" className="btn btn-success float-right">Thêm sảm phẩm</button></Link>
                            <Link to="/checkout">
                                <button type="button" className="btn site-button float-right"><img src="/img/icon_search_peugeot.png" style={{ "width": "24px", "marginRight": "0.2rem" }} /> Đặt hàng</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ModulePeugeotEcommerceCart;