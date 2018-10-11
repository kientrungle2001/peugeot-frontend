import React, { Component } from 'react';

class ModulePeugeotCmsPostNewsCategory extends Component {
    render() {
        return (
            <div>
                <h1>
                    Danh sách tin tức của {this.props.categoryId}
                </h1>
            </div>
        )
    }
}

export default ModulePeugeotCmsPostNewsCategory;