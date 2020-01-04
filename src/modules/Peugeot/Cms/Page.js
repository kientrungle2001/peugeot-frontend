import React, { Component } from 'react';
import axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
class ModulePeugeotCmsPage extends Component {
    componentDidMount() {
        var that = this;
        axios.get(peugeot_api_url + '/cms_posts/' + this.props.itemId).then(function (resp) {
            that.state = resp.data;
            that.setState(that.state);
        }).catch(function (err) {
            console.log(err);
        });
    }
    render() {
        return (
            <div className="page-content" dangerouslySetInnerHTML={{ __html: (this.state && this.state.content.replace(/\[\[/g, '<').replace(/\]\]/g, '>')) || '' }}></div>
        );
    }
}
export default ModulePeugeotCmsPage;