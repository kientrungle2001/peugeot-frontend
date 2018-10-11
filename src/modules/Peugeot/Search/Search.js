import React, { Component } from 'react';

class ModulePeugeotSearch extends Component {
    render() {
        return (
            <form className="form-inline carousel-frm container">
                <div className="row">
                    <div className="form-group col-md-3">
                        <a href="#" className="btn btn-search cl-frm-search"><img src="/img/icon_search_peugeot.png" alt="search" />PHỤ TÙNG PEUGEOT</a>
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control" id="exampleInputEmail3" placeholder="MÃ PHỤ TÙNG" />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control" id="exampleInputEmail3" placeholder="TÊN PHỤ TÙNG" />
                    </div>
                    <div className="form-group col-md-3">
                        <button type="submit" className="btn btn-search cl-frm-search">Tìm kiếm</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ModulePeugeotSearch;