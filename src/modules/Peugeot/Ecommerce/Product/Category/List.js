import React, { Component } from 'react';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import chunk from 'chunk';
import {Link} from 'react-router-dom';
import formatCurrency from 'format-currency';

class ModulePeugeotEcommerceProductCategoryList extends Component {
    componentWillMount() {
        var that = this;

        Axios.get(peugeot_api_url + '/ecommerce_products?_start='+((this.props.page - 1) * 16) +'&_end='+(this.props.page * 16)+'&attributes[auto_id]=' + this.props.categoryId).then(function (resp) {
            that.state = {
                items: resp.data,
                chunks: chunk(resp.data, 4),
                total_items: parseInt(resp.headers['x-total-count']),
                total_pages: Math.ceil(parseInt(resp.headers['x-total-count']) / 16),
                pages: []
            }

            for( var i = 0; i < that.state.total_pages; i++) {
                that.state.pages.push(i+1);
            }
            that.setState(that.state);
        });
    }
    render() {
        return (
            <div>
                <div className="container list-products">
                    {this.state && this.state.chunks && this.state.chunks.map((chunk, key) => {
                        return (
                            <div className="row" key={key}>
                                {chunk.map((item, index) => {
                                    return (
                                        <div className={"col-md-3 col-6 text-center cate" + (index + 1)} key={index}>
                                            <img src={item.image} alt="{item.title}" className="img-fluid" />
                                            <div className="info-product">
                                                <p className="line-img-product"></p>
                                                <Link className="titleSP-product" to={"/product/" + item.type + "/" + this.props.categoryId + "/" + this.props.alias + "/" + item.id + "/" + item.alias}>{item.sku}<br />{item.title}</Link>
                                            </div>
                                            <p className="price">Giá: {item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit: '')  : 'Liên hệ'}</p>
                                        </div>
                                    );
                                })}
                                
                            </div>
                        );
                    })}
                    
                </div>
                <nav aria-label="Page navigation phutungpeugeot.com">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {this.state && this.state.pages.map(
                            (page, index) => {
                                return (
                                    <li className={"page-item " + (page == this.props.page ? 'active': '')} key={index}>
                                        <Link className="page-link" to={'/category/product/' + this.props.categoryId + '/' + this.props.alias + '/' + page}>{page}</Link>
                                    </li>
                                );
                            }
                        )}
                        
                        
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceProductCategoryList;