import React from "react";
import CarouselListPath from "./carouselPhotos";
import defaultCarousel from "../../img/c01.jpg"


function CarouselPhoto(props){
    return(
          <div className="carousel-item">
            <img src={props.imgPath} className="d-block w-100" alt={props.description}/>
          </div>
      )
}

function Carousel (){
  return (
    <div className="container-xxl container-xxl position-relative p-0">
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
    </div>
  )
}

export default Carousel;