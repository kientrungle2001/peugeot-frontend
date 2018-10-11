import React, { Component } from 'react';
import ModulePeugeotTopbar from 'modules/Peugeot/Topbar/Topbar';
import ModulePeugeotMenu from 'modules/Peugeot/Menu/Menu';
import ModulePeugeotSearch from 'modules/Peugeot/Search/Search';
import ModulePeugeotBreadcrumb from 'modules/Peugeot/Breadcrumb/Breadcrumb';
import './Inner.css';

class ModulePeugeotHeaderInner extends Component {

    render() {
        return (
            <div>
                <header id="inner-header">
                    <ModulePeugeotTopbar />
                    <ModulePeugeotMenu />
                    <ModulePeugeotBreadcrumb />
                </header>
                <div className="mt-3 mb-3">
                    <ModulePeugeotSearch />
                </div>
            </div>
        );
    }
}

export default ModulePeugeotHeaderInner;