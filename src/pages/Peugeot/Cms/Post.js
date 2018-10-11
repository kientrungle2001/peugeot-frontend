import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotCmsPost from 'modules/Peugeot/Cms/Post';
import 'pages/Peugeot/Category/Category.css';

class PagePeugeotCmsPost extends Component {
    
    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotCmsPost itemId={this.props.itemId} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotCmsPost;
