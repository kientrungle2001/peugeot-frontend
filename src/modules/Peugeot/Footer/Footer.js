import React, { Component } from 'react';
import ModulePeugeotFooterFloatbar from './Floatbar'
class ModulePeugeotFooter extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget widget_about">
                                        <div className="logo-footer"><img src="/img/logo_footer.png" alt="Logo VHP Auto" /></div>
                                        <p className="m-tb20"><strong>VHP Auto</strong> is simply dummy text of the print ing and in type setting industry. Lorem Ipsum has bee the industry's standard...</p>

                                        <ul className="dlab-contact-info">
                                            <li><i className="flaticon-placeholder"></i>Số 17/331 Trần Khát Chân, P.Thanh Nhàn, Q.Hai Bà Trưng, TP.Hà Nội</li>
                                            <li><i className="flaticon-customer-service"></i>Phone : 0800-123456 (24/7 Support Line)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget widget_services">
                                        <h4 className="m-b15 text-uppercase">Quy định - chính sách</h4>
                                        <div className="dlab-separator"></div>
                                        <ul>
                                            <li><a href="new-car-latest.html">Latest Cars</a></li>
                                            <li><a href="new-car-upcoming.html">Upcoming Cars</a></li>
                                            <li><a href="used-car-search.html">Search Used Car</a></li>
                                            <li><a href="used-car-sell.html">Car Sell</a></li>
                                            <li><a href="compare-car.html">Compare Car</a></li>
                                            <li><a href="car-review.html">Car Review</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="m-b15 text-uppercase">Tin tức Peugeot </h4>
                                        <div className="dlab-separator"></div>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic1.jpg" alt="" width="200" height="143" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic2.jpg" alt="" width="200" height="160" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic3.jpg" alt="" width="200" height="160" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget ">
                                        <h4 className="m-b15 text-uppercase">Đăng ký nhận thông tin</h4>
                                        <div className="dlab-separator"></div>
                                        <p className="m-tb20">Nếu bạn để lại email khi website cập nhật sản phẩm mới bạn sẽ nhận được thông báo ngay lập tức</p>
                                        <form className="dlab-subscribe-form">
                                            <div className="input-group m-b15">
                                                <input name="dzEmail" required="" className="form-control " type="email" placeholder="Enter Your Email" />
                                            </div>
                                            <div className="input-group">
                                                <button name="submit" type="submit" value="Submit" className="site-button btn-block">
                                                    Đăng ký <i className="fa fa-angle-right font-18 m-l10"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">
                                <ul className="full-social-icon clearfix">
                                    <li className="fb col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="#"><i className=""></i> Share On Facebook </a>
                                    </li>
                                    <li className="tw col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="#"><i className=""></i> Tweet About it </a>
                                    </li>
                                    <li className="gplus col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="#"><i className=""></i> Google Plus | 78+ </a>
                                    </li>
                                    <li className="linkd col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="#"><i className=""></i> Linkedin | 21k </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 text-left"> © Copyright 2018 - VHP Auto</div>
                                <div className="col-md-6 col-sm-6 text-right ">
                                    <a href="#"> Giới thiệu</a> | <a href="#"> Liên hệ</a> | <a href="#"> Tuyển dụng</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>
                <ModulePeugeotFooterFloatbar />
            </div>
        )
    }
}

export default ModulePeugeotFooter;