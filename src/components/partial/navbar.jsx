import React from "react";
import CarouselPhoto from "./carousel";
import CarouselListPath from "./carouselPhotos";
import defaultCarousel from "../../img/c01.jpg"


function Navbar(props){
    return (
            <div className="container-xxl bg-white p-0">
                
                <div className="container-xxl position-relative p-0 hero-header">
                    <nav className="navbar navbar-expand-lg navbar-primary px-2 px-lg-5 py-3 py-lg-0 mb-3">
                        <a href="/" className="navbar-brand p-0">
                            <img src={props.brandImg} width="50" height="50" className="d-inline-block align-middle" alt="bsea logo"/>
                            <h1 className="d-inline-block align-middle m-0 brand-title">{props.brandTitle}</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className="nav-item nav-link active">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/error" className="nav-item nav-link">Service</a>
                                <div className="nav-item dropdown">
                                    <a id="dropdown-page" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 page">
                                        <a href="/team" className="dropdown-item">Our Team</a>
                                    </div>
                                </div>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                                
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle lang" data-bs-toggle="dropdown">EN</a>
                                    <div className="dropdown-menu m-0">
                                        <a className="dropdown-item lang-kh">ភាសាខ្មែរ</a>
                                        <a className="dropdown-item lang-en">English</a>
                                        <a className="dropdown-item lang-cn">中文</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </nav>

                    {/* Full Title */}

                    <div className="container-xxl bg-primary hero-header">
                        <div className="container-xxl bg-primary py-4">
                            <div className="row g-3 align-items-center">
                                <div className="col-lg-12 text-center full-title">
                                    <h1 className="text-white mb-4 animated zoomIn kh">សមាគមន៍កាបូប ស្បែកជើង និងអេឡិចត្រូនិចកម្ពុជា</h1>
                                    <h1 className="text-white mb-4 animated zoomIn ch">柬 埔 寨 箱 包 、鞋 业 和 电 子 商 会</h1>
                                    <h1 className="text-white mb-4 animated zoomIn en">Cambodia’s Bag, Shoe and Electronic Association</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel part */}

                <div className="col-lg">
                    <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={defaultCarousel} class="d-block w-100" alt="carousel photos"/>
                            </div>
                            {CarouselListPath.map((CarouselListPath)=><CarouselPhoto key={CarouselListPath.id} imgPath={CarouselListPath.path} description={CarouselListPath.description} />)}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* End Carousel */}
            </div>
    )
}

export default Navbar;