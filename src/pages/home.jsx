import React from 'react'
import Navbar from '../components/partial/navbar'
import FullTitle from '../components/partial/fullTitle'
import Carousel from '../components/partial/carousel'
import Footer from '../components/footer'
import aboutImg from '../img/about.png'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <FullTitle />
      <Carousel />
      <div className="container-xxl py-6">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                    <img className="img-fluid" src={aboutImg}/>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <h2 className="mb-4 h-about">អំពីសមាគមន៍</h2>
                  <p className="mb-4">សមាគមកាបូប ស្បែកជើង និងអេឡិចត្រូនិចកម្ពុជា (ស.ក.ស.អ) ជាអង្គការសមាជិកភាពដ៏លេចធ្លោមួយក្នុងព្រះរាជាណាចក្រកម្ពុជាក្នុងវិស័យដែលបានកំណត់។  
                      ស.ក.ស.អ ជាអង្គភាពមិនស្វែងរកប្រាក់ចំណេញ មិនមែនអង្គការសាសនា និងមិនមែនបម្រើនិន្នាការនយោបាយនៃបក្សនយោបាយណាមួយឡើយ។  ស.ក.ស.អ លើកកម្ពស់ឲ្យមានការចូលរួមរវាងដៃគូសន្ទនាសង្គមនានាដូចជារាជរដ្ឋាភិបាល និយោជក សហជីព និងដៃគូដទៃទៀតផងដែរ។ 
                      ស.ក.ស.អ ត្រូវបានចុះបញ្ជិកាជាមួយក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ តាមរយៈលិខិតទទួលស្គាល់លេខ ៣២២/២២ ក.ប./វ.ប.វ.ក ចុះថ្ងៃទី ១៩ ខែសីហា ឆ្នាំ២០២២។ បច្ចុប្បន្ននេះ BSEA មានសមាជិកពេញសិទ្ធិចំនួន១៥ សហគ្រាស/គ្រឹះស្ថាន ក្នុងវិស័យផលិតកាបូប ស្បែកជើង 
                      ឧបករណ៍អេឡិចត្រូនិច និងវិស័យប្រហាក់ប្រហែល ដែលគាំទ្រក្នុងសង្វាក់ផលិតកម្មផងដែរ ដែលមានកម្មករនិយោជិតកំពុងបម្រើការងារប្រមាណជា ១៥,០០០នាក់ ក្នុងនោះភាគច្រើនលើសលុបជាស្ត្រី ដែលអញ្ជើញមកពីបណ្តាខេត្ត ក្រុងនានានៅទូទាំងប្រទេសកម្ពុជា។ 
                      BSEA គ្រោងនឹងពង្រីកសមាជិករបស់ខ្លួនយ៉ាងហោចចំនួន១៥០ សហគ្រាសគ្រឹះស្ថាន ក្រុមហ៊ុនបន្ថែមទៀតនៅឆ្នាំ២០២៣ខាងមុខ។</p>
                  <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="/about">Read More</a>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3 mb-4">
                        <div className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa-solid fa-landmark text-white"></i>
                                </div>
                                <h6 className="mb-0">1.	ផ្នែកប្រតិបត្តិការ និងហិរញ្ញវត្ថុ</h6>
                            </div>
                        </div>
                        <div className="col-sm-12 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa-solid fa-handshake text-white"></i>
                                </div>
                                <h6 className="mb-0">2.	ផ្នែកសមាជិកភាព និងទំនាក់ទំនងសាធារណៈ</h6>
                            </div>
                        </div>
                        <div className="col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-gavel text-white"></i>
                                </div>
                                <h6 className="mb-0">3.	ផ្នែកច្បាប់ និងទំនាក់ទំនងវិជ្ជាជីវៈ</h6>
                            </div>
                        </div>
                        <div className="col-sm-12 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-chalkboard-teacher text-white"></i>
                                </div>
                                <h6 className="mb-0">4.	ផ្នែកបណ្តុះបណ្តាល និងអភិវឌ្ឍន៍</h6>
                            </div>
                        </div>
                        <div className="col-sm-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-user-tie text-white"></i>
                                </div>
                                <h6 className="mb-0">5.	ផ្នែកស្រាវជ្រាវ និងគោលនយោបាយ</h6>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Home;
