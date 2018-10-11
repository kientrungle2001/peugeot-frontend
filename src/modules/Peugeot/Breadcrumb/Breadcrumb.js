import React, { Component } from 'react';

class ModulePeugeotBreadcrumb extends Component {

    render() {
        return (
            <div className="top-bar" style={{'marginBottom':'20px'}}>
                <div className="container">
                    <ul className="top-bar breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Sản phẩm</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotBreadcrumb;