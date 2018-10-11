import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotCmsPostNewsCategory from 'modules/Peugeot/Cms/Post/News/Category';
import 'pages/Peugeot/Category/Category.css';
class PagePeugeotCategoryNews extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotCmsPostNewsCategory categoryId={this.props.categoryId} type={this.props.type} alias={this.props.alias} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotCategoryNews;
