import React from "react";

function CarouselPhoto(props){
    return(
          <div className="carousel-item">
            <img src={props.imgPath} className="d-block w-100" alt={props.description}/>
          </div>
      )
}

export default CarouselPhoto;