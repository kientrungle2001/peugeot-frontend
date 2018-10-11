import React, { Component } from 'react';

class ModulePeugeotSlideshow extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active bg-transparent">
                        <div className="container text-center">
                            <a href="#">
                                <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item bg-transparent">
                        <div className="container text-center">
                            <a href="#">
                                <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item bg-transparent">
                        <div className="container text-center">
                            <a href="#">
                                <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                            </a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default ModulePeugeotSlideshow;