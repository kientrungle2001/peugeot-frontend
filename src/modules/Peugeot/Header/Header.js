import React, { Component } from 'react';
import ModulePeugeotTopbar from 'modules/Peugeot/Topbar/Topbar';
import ModulePeugeotMenu from 'modules/Peugeot/Menu/Menu';
import ModulePeugeotSlideshow from 'modules/Peugeot/Slideshow/Slideshow';
import ModulePeugeotSearch from 'modules/Peugeot/Search/Search';

class ModulePeugeotHeader extends Component {
    
    render() {
        return (
            <header>
                <ModulePeugeotTopbar />
                <ModulePeugeotMenu />
                <ModulePeugeotSlideshow />
                <ModulePeugeotSearch />
            </header>
        );
    }
}

export default ModulePeugeotHeader;