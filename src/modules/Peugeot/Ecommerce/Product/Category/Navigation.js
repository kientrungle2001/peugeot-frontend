import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import { Link } from 'react-router-dom';

class ModulePeugeotEcommerceProductCategoryNavigation extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/catalog_categories?_start=0&_end=100&type=auto&parent_id=12').then(function (resp) {
            that.state = {
                items: resp.data
            };
            that.setState(that.state);
        });
    }
    render() {
        return (
            <div className="container search-by-cate">
                <h2 className="tit-category"><i className="fas fa-car"></i> Tìm phụ tùng theo xe</h2>
                <div className="row">
                    <div className="col">
                        <Link className={"btn button-cate " + (this.props.categoryId===1 ? 'active': '')} to={"/category/product/1/san-pham"}>Tất cả</Link>
                        {this.state && this.state.items.map(
                            function(item, key) {
                                return (
                                    <Link className={"btn button-cate " + (item.id === this.props.categoryId ? 'active': '') } to={"/category/product/" + item.id + "/" + item.alias} key={key}>{item.title}</Link>
                                );
                            }.bind(this)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceProductCategoryNavigation;