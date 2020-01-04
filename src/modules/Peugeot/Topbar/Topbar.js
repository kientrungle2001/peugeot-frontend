import React, { Component } from 'react';

class ModulePeugeotTopbar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href={null}>Báo giá số lượng lớn!</a>
                            <a href={null}>Hình thức đặt hàng!</a>
                        </div>
                        <div className="col-md-6 text-right">
                            <a href={null}><i className="fas fa-envelope"></i> vhp-auto@website.com</a>
                            <a href={null}><i className="fab fa-facebook-f"></i></a>
                            <a href={null}><i className="fab fa-google-plus-g"></i></a>
                            <a href={null}><i className="fab fa-twitter"></i></a>
                            <a href={null}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotTopbar;