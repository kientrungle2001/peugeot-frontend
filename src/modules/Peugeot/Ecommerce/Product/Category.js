import React, { Component } from 'react';
import ModulePeugeotEcommerceProductCategoryNavigation from './Category/Navigation';
import ModulePeugeotEcommerceProductCategoryList from './Category/List';

class ModulePeugeotEcommerceProductCategory extends Component {
    render() {
        return (
            <div>
                <ModulePeugeotEcommerceProductCategoryNavigation categoryId={this.props.categoryId} alias={this.props.alias} page={this.props.page} />
                <ModulePeugeotEcommerceProductCategoryList categoryId={this.props.categoryId} alias={this.props.alias} page={this.props.page} />
            </div>
        )
    }
}

export default ModulePeugeotEcommerceProductCategory;