import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DOMPurify from "dompurify"
import FullTitle from '../components/partial/fullTitle'
import Carousel from '../components/partial/carousel'
import Team from '../components/partial/team'

export const Home = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/about/`)
                setAbouts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    })
    // console.log(sections);
  return (
    <div>
      <FullTitle />
      <Carousel />
      <div className="container-xxl py-6">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  
                  {abouts.map((post)=>(post.class === "about" &&
                  <div key={post.id}>
                  <h2 className="mb-4 h-about">{post.about}</h2>
                  <p 
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(post.description),
                            }}
                        ></p></div>))}
                  <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="/about">Read More</a>
                </div>
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3 mb-4">
                        {abouts.map((post)=>( post.class === "section" &&
                            <div key={post.id} className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className={post.icon}></i>
                                    </div>
                                    <h6 className="mb-0">{post.about}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div ><Team /></div>
    </div>
  )
}

export default Home;
