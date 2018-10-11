import React, { Component } from 'react';
import chunk from 'chunk';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import formatCurrency from 'format-currency';
import {Link} from 'react-router-dom';
class ModulePeugeotEcommerceProductRelatedCategory extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/ecommerce_products/relateds?productId=' + this.props.productId).then(function(resp) {
            that.state = {
                items: resp.data,
                chunks: chunk(resp.data, 4)
            };
            
            that.setState(that.state);
        });
    }
    render() {
        return (
            <div>
                {this.state && this.state.chunks.map(
                    (chunk, key) => {
                        return (
                            <div className="row" key={key}>
                                {chunk.map(
                                    (item, index) => {
                                        return (
                                            <div className={"col-md-3 col-6 text-center cate" + (index+1)} key={index}>
                                                <img src={item.image} alt={item.title} className="img-responsive" />
                                                <div className="info-product">
                                                    <p className="line-img-product"></p>
                                                    <Link className="titleSP-product" to={"/product/" + item.type + "/" + item.id + "/" + item.alias}>{item.sku}<br />{item.title}</Link>
                                                </div>
                                                <p className="price">Giá: {item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit : '') : 'Liên hệ'}</p>
                                            </div>
                                        );
                                    }
                                )}
                                
                            </div>
                        );
                    }
                )}
                
            </div>
        );
    }
}

export default ModulePeugeotEcommerceProductRelatedCategory;
