import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import 'pages/Peugeot/Category/Category.css';
import './Checkout.css';
import peugeot_cart from 'cart';
import { Link } from 'react-router-dom';

class ModulePeugeotEcommerceCheckout extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if (!that.is_listened) {
            that.callback = function () {
                console.log('Checkout listen');
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

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.refs.fullName.value);
        console.log(this.refs.phone.value);
        console.log(this.refs.address.value);
        let formData = {
            fullName: this.refs.fullName.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            items: peugeot_cart.getItems()
        };
        var that = this;
        if(formData.items.length) {
            Axios.post(peugeot_api_url + '/ecommerce_checkout', formData).then(function (resp) {
                alert('Cám ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ lại với bạn');
                peugeot_cart.clear();
                that.refs.fullName.value = '';
                that.refs.phone.value = '';
                that.refs.address.value = '';
            }).catch(function (err) {
                console.log(err);
            });
        } else {
            alert('Không có sản phẩm nào trong giỏ hàng');
        }
        
        return false;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><svg className="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg> Thông tin đặt hàng!</h1>
                </div>

                <div className="container content-detail-cart">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input ref="fullName" name="fullName" type="text" className="form-control" placeholder="Họ tên (bắt buộc)" />
                                </div>
                                <div className="form-group">
                                    <input ref="address" name="address" type="text" className="form-control" placeholder="Địa chỉ nhận hàng (bắt buộc)" />
                                </div>
                                <div className="form-group">
                                    <input ref="phone" name="phone" type="text" className="form-control" placeholder="Điện thoại (bắt buộc)" />
                                </div>
                                <div className="form-group text-center"><img src="/img/capcha-icon.jpg" alt="Capcha Icon" className="img-responsive margin-0-auto" /></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Link to="/cart" title="Quay lại giở hàng!"> &lt; Quay lại giở hàng!</Link>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit" className="btn site-button"><img src="/img/icon_search_peugeot.png" alt="icon-peugeot" className="icon-gui-thong-tin" /> Gửi thông tin</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceCheckout;