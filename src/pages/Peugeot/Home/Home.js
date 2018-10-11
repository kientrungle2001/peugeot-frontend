import React, { Component } from 'react';
import ModulePeugeotHeader from 'modules/Peugeot/Header/Header';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotAccessariesCarousel from 'modules/Peugeot/Accessaries/Carousel';
class PagePeugeotHome extends Component {
    render() {
        return (
            <div>
                <ModulePeugeotHeader />
                <main role="main">
                    <ModulePeugeotAccessariesCarousel />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotHome;
