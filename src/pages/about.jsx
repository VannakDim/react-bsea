import React from 'react'
import Navbar from '../components/partial/navbar'
import FullTitle from '../components/partial/fullTitle'
import Footer from '../components/footer'
import aboutImg from '../img/about.png'

const about = () => {
  return (
    <div>
        <Navbar />
        <FullTitle />
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-4 pt-5">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        
                        <div className="row g-3 mb-4">
                            <div className='col-lg-6'>
                                <img className="img-fluid" src={aboutImg}/>
                            </div>    

                            <div className='col-md-6 wow fadeInUp' data-wow-delay='0.15s'>
                                <h2 className="mb-4">អំពីសមាគមន៍</h2>
                                <p className="mb-4">សមាគមកាបូប ស្បែកជើង និងអេឡិចត្រូនិចកម្ពុជា (ស.ក.ស.អ) ជាអង្គការសមាជិកភាពដ៏លេចធ្លោមួយក្នុងព្រះរាជាណាចក្រកម្ពុជាក្នុងវិស័យដែលបានកំណត់។  ស.ក.ស.អ ជាអង្គភាពមិនស្វែងរកប្រាក់ចំណេញ មិនមែនអង្គការសាសនា និងមិនមែនបម្រើនិន្នាការនយោបាយនៃបក្សនយោបាយណាមួយឡើយ។  ស.ក.ស.អ លើកកម្ពស់ឲ្យមានការចូលរួមរវាងដៃគូសន្ទនាសង្គមនានាដូចជារាជរដ្ឋាភិបាល និយោជក សហជីព និងដៃគូដទៃទៀតផងដែរ។ ស.ក.ស.អ ត្រូវបានចុះបញ្ជិកាជាមួយក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ តាមរយៈលិខិតទទួលស្គាល់លេខ ៣២២/២២ ក.ប./វ.ប.វ.ក ចុះថ្ងៃទី ១៩ ខែសីហា ឆ្នាំ២០២២។ បច្ចុប្បន្ននេះ BSEA មានសមាជិកពេញសិទ្ធិចំនួន១៥ សហគ្រាស/គ្រឹះស្ថាន ក្នុងវិស័យផលិតកាបូប ស្បែកជើង ឧបករណ៍អេឡិចត្រូនិច និងវិស័យប្រហាក់ប្រហែល ដែលគាំទ្រក្នុងសង្វាក់ផលិតកម្មផងដែរ ដែលមានកម្មករនិយោជិតកំពុងបម្រើការងារប្រមាណជា ១៥,០០០នាក់ ក្នុងនោះភាគច្រើនលើសលុបជាស្ត្រី ដែលអញ្ជើញមកពីបណ្តាខេត្ត ក្រុងនានានៅទូទាំងប្រទេសកម្ពុជា។ BSEA គ្រោងនឹងពង្រីកសមាជិករបស់ខ្លួនយ៉ាងហោចចំនួន១៥០ សហគ្រាសគ្រឹះស្ថាន ក្រុមហ៊ុនបន្ថែមទៀតនៅឆ្នាំ២០២៣ខាងមុខ។ </p>
                            </div>
                        </div>

                        <div className="row g-3 mb-4">
                            <div className="col-md-6 d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fas fa-eye text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h6>ចក្ខុវិស័យ</h6>
                                    <span>ចក្ខុវិស័យរបស់យើងគឺដើម្បីធានាពីសុខដុមរមនានៃទំនាក់ទំនងវិជ្ជាជីវៈក្នុងប្រទេសកម្ពុជា។
                                        បេសកកម្មរបស់យើងគឺបង្កើតឲ្យមានយន្តការសម្របសម្រួលមួយដ៏មានប្រសិទ្ធភាព ដែលអាចទាក់ទាញវិនិយោគិនបរទេស និងជួយលើកកម្ពស់វិនិយោគិនក្នុងស្រុក ដើម្បីបង្កើតការងារ និងទប់ស្តាត់ទេសន្តរប្រវេសន៍ដោយប្រថុយប្រថាន។ 
                                        </span>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fas fa-bullseye text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h6>គោលបំណង</h6>
                                    <span>គោលបំណងរបស់យើងគឺការពារ និងគោរពសិទ្ធិសេរីភាព និងផលប្រយោជន៍របស់សមាជិក, ផ្ដល់ប្រឹក្សាយោបល់ផ្នែកច្បាប់ ពាណិជ្ជកម្ម និងការបណ្តុះបណ្តាលដល់សមាជិក, ចូលរួមចំណែកធ្វើឱ្យមានសុខដុមរមនាក្នុងទំនាក់ទំនងវិជ្ជាជីវៈ និងមិនចូលរួមធ្វើសកម្មភាពនយោបាយ ឬបម្រើនិន្នាការនយោបាយណាមួយ។</span>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-crown text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h6>គុណតម្លៃ</h6>
                                    <span>គុណតម្លៃរបស់យើងគឺកើតឡើងដើម្បីគាំទ្រសមាជិករបស់យើង។ សមាជិករបស់យើងត្រូវបានចាត់ទុកជាអាទិភាពមុនអ្វីៗទាំងអស់។ ប្រតិបត្តិការការងាររបស់យើងដោយសុចរិតភាព សុក្រឹតភាព ភាតរភាព គណនេយ្យភាព ប្រសិទ្ធភាព និងតម្លាភាព។ យើងនឹងខិតខំឱ្យអស់ពីសមត្ថភាព កម្លាំងកាយចិត្តក្នុងបំពេញការងាររបស់ខ្លួនដើម្បីការពារសិទ្ធិ និងផលប្រយោជន៍របស់សមាជិក និងអភិវឌ្ឍ កែលម្អ ពង្រឹងនិងពង្រីកពិពិធកម្មសេវាកម្មបន្ថែម។ និងគោរពបុគ្គលិក សមាជិក និងដៃគូពាក់ព័ន្ធនានា ហើយចាត់ទុកជាធនធានរស់ដែលមិនអាចកាត់ថ្លៃបានរបស់យើង។</span>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-award text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h6>មហិច្ចតា</h6>
                                    <span>មហិច្ឆតារបស់យើងគឺការពង្រឹង និងពង្រីកសក្តានុពលនៃវិស័យតកាបូប ស្បែកជើង ឧបករណ៍អេឡិចត្រូនិច និងវិស័យប្រហាក់ប្រហែល ដើម្បីអនុញ្ញាតឲ្យពួកគេអាចប្រកួតប្រជែងបានដោយសេរីនៅក្នុងសេដ្ឋកិច្ចពិភពលោក តាមរយៈការសម្របសម្រួល និងការចូលរួមលើកកម្ពស់បរិយាកាសធុរកិច្ច សុខដុមនីយកម្មទំនាក់ទំនងវិជ្ជាជីវៈ ដើម្បីធានាឲ្យបាននូវបរិយាកាសធុរកិច្ច និងការវិនិយោគប្រកបដោយសុខដុមរមនានៅក្នុងប្រទេសកម្ពុជា។ យើងជឿជាក់ថាភាពរឹងមាំ និងការរួបរួមជាកម្លាំងដ៏មុតមាំមួយនៃវិស័យខាងលើគឺជាកត្តាមិនអាចខ្វះបាននៅក្នុងការអភិវឌ្ឍន៍ពិពិធកម្មសេដ្ឋកិច្ចរបស់ប្រទេសកម្ពុជា ដែលវាបានផ្តល់អត្ថប្រយោជន៍ និងសុខដុមនីយកម្មដល់គ្រប់ភាគីទាំងអស់។ យើងនឹងតំណាងឱ្យសមាជិករបស់ខ្លួននៅគ្រប់កាលៈទេសៈទាំងអស់តាមរយៈការប្រឹក្សាយោបល់ ការកសាងសមត្ថភាព និងផ្សព្វផ្សាយព័ត៌មានទាក់ទងទៅនឹងអាជីវកម្ម ឬពាណិជ្ជកម្មសំខាន់ៗជាដើម។</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Features</div>
                        <h2 className="mb-4">Why People Choose Us? We Are Trusted & Award Wining Agency</h2>
                        <p>បច្ចុប្បន្ននេះ BSEA មានក្រុមប្រឹក្សាប្រតិបត្តិដែលជាថ្នាក់ដឹកនាំកំពូលចំនួន ១៧រូប ដែលអញ្ជើញមក និងតំណាងពីវិស័យសំខាន់ដូច ដែលបានជម្រាបជូនខាងលើ។</p>
                        <p>ដើម្បីឲ្យការងារសម្រេចបានទៅតាមផែនការ និងការឆ្លើយតបតាមតម្រូវការរបស់សមាជិក, ស.ក.ស.អ បានបង្កើតផ្នែកចំនួន៥ដូចខាងក្រោម៖</p>
                       
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-5">
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa-solid fa-landmark text-white"></i>
                                    </div>
                                    <h6 className="mb-0">1.	ផ្នែកប្រតិបត្តិការ និងហិរញ្ញវត្ថុ</h6>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                            </div>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.2s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa-solid fa-handshake text-white"></i>
                                    </div>
                                    <h6 className="mb-0">2.	ផ្នែកសមាជិកភាព និងទំនាក់ទំនងសាធារណៈ</h6>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                            </div>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-gavel text-white"></i>
                                    </div>
                                    <h6 className="mb-0">3.	ផ្នែកច្បាប់ និងទំនាក់ទំនងវិជ្ជាជីវៈ</h6>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                            </div>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.4s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-chalkboard-teacher text-white"></i>
                                    </div>
                                    <h6 className="mb-0">4.	ផ្នែកបណ្តុះបណ្តាល និងអភិវឌ្ឍន៍</h6>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                            </div>
                            <div className="col-sm-12 wow fadeIn" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-user-tie text-white"></i>
                                    </div>
                                    <h6 className="mb-0">5.	ផ្នែកស្រាវជ្រាវ និងគោលនយោបាយ</h6>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
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

export default about