import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotEcommerceProductCategory from 'modules/Peugeot/Ecommerce/Product/Category';
import './Category.css';
class PagePeugeotCategoryProduct extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceProductCategory categoryId={this.props.categoryId} type={this.props.type} alias={this.props.alias} page={this.props.page} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotCategoryProduct;
