import React, { Component } from 'react';
import ModulePeugeotEcommerceProductAuto from './Product/Auto';
import './Product.css';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import peugeot_cart from 'cart';
class ModulePeugeotEcommerceProduct extends Component {
    componentDidMount() {
        var that = this;
        var productIds = window.localStorage.getItem('productIds') || '';
        if(productIds == '') {
            productIds = ',' + this.props.productId + ',';
        } else {
            if (productIds.indexOf(',' + this.props.productId + ',') === -1) {
                productIds += this.props.productId + ',';
            }
        }
        window.localStorage.setItem('productIds', productIds);
        Axios.get(peugeot_api_url + '/ecommerce_products/' + this.props.productId).then(function (resp) {
            that.state = {
                item: resp.data
            };
            that.setState(that.state);
        });
    }
    addToCart(item) {
        peugeot_cart.add({
            product_id: item.id,
            image: item.image,
            title: item.title,
            sku: item.sku,
            price: item.price,
            quantity: 1
        });
        window.location.href="/cart";
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><svg className="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg> {this.state && this.state.item.title} - {this.state && this.state.item.sku}</h1>
                </div>

                <div className="container content-detail-product">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="img-product">
                                <img src={this.state && this.state.item.image} alt={this.state && this.state.item.title} className="img-fluid" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3"><img src="/img/product-2.png" alt="product 1" className="img-fluid" /></div>
                                        <div className="col-3"><img src="/img/product-2.png" alt="product 1" className="img-fluid" /></div>
                                        <div className="col-3"><img src="/img/product-2.png" alt="product 1" className="img-fluid" /></div>
                                        <div className="col-3"><img src="/img/product-2.png" alt="product 1" className="img-fluid" /></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 tit-content-dt-product text-center">
                                        <h4 className="tit-dt-product">{this.state && this.state.item.title}</h4>
                                        <h4 className="ma-dt-product">{this.state && this.state.item.sku}</h4>
                                    </div>
                                    <div className="col-6 price-dt-prduct text-right">Giá: {this.state && (this.state.item.price ? formatCurrency(this.state.item.price) + (this.state.item.unit ? 'đ / ' + this.state.item.unit : '') : 'Liên hệ')}</div>
                                    <div className="col-6 add-to-cart text-left"><button className="btn site-button" onClick={this.state && this.state.item && (() => this.addToCart(this.state.item))}>Đặt mua</button></div>
                                </div>
                                <div className="des-add-to-cart">
                                    <ul>
                                        <li>Vận chuyển miễn phí ra các đơn hàng &gt; 3,000,000 đ</li>
                                        <li>Giá trên chưa bao gồm VAT</li>
                                        <li>Cam kết sản phẩm 100% chính hãng</li>
                                    </ul>
                                    <h5>Điện thoại bán hàng</h5>
                                    <a href="tel:+84985118368" title="Online 27/4">
                                        <img src="/img/hotline_banhang.png" alt="Điện thoại bán hàng online" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 main-ds-content-product">
                            <h2 className="tit-category tit-product">{this.state && this.state.item.title} - {this.state && this.state.item.sku}</h2>
                            <p className="m-tb20"><strong>VHP Auto</strong> is simply dummy text of the print ing and in type setting industry. Lorem Ipsum has bee the industry's standard...</p>
                            <div className="row">
                                <div className="col-md-7 col-12">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td>Mã sản phẩm</td>
                                                <th>{this.state && this.state.item.sku}</th>
                                            </tr>
                                            <tr>
                                                <td>Tên sảm phẩm</td>
                                                <td><h3>{this.state && this.state.item.title}</h3></td>
                                            </tr>
                                            <tr>
                                                <td>Thương hiệu</td>
                                                <td>{this.state && this.state.item.branding}</td>
                                            </tr>
                                            <tr>
                                                <td>Xuất xứ</td>
                                                <th>{this.state && this.state.item.origin}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <img src="/img/btn-facebook.png" alt="Like Facebook" className="img-fluid" />
                                </div>
                                <div className="col-md-5 col-12 text-center">
                                    <h5>Điện thoại bán hàng</h5>
                                    <a href="tel:+84985118368" title="Online 27/4">
                                        <img src="/img/hotline_banhang.png" alt="Điện thoại bán hàng online" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="row comment-facebook">
                                <img src="/img/comment-facebook.png" className="img-fluid" alt="Comment Facebook" />
                            </div>
                            <div className="row car-use">
                                <div className="col-12">
                                    <h3 className="tit-category tit-product"><svg className="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg> {this.state && this.state.item.title} - {this.state && this.state.item.sku}</h3>
                                    <ModulePeugeotEcommerceProductAuto productId={this.props.productId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceProduct;