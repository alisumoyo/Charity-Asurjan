import Image from "next/image"
import Link from "next/link"
import counter_data from "@/data/counterData"
import Count from "@/components/common/Count"

import aboutImg_1 from "@/assets/img/about/about1.jpg"
import aboutImg_2 from "@/assets/img/about/about2.jpg"
import aboutImg_3 from "@/assets/img/about/about3.jpg"

const About = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="about-image-part">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="About" />
                           </div>
                           <div className="project-complete mb-30">
                              <div className="project-complete__icon">
                                 <i className="flaticon-charity"></i>
                              </div>
                              <div className="project-complete__content">
                                 <h5>We Complate 2000+ Project</h5>
                                 <span>Donet for charity</span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="image mt-65 rmt-15 rel">
                              <Image src={aboutImg_2} alt="About" />
                              <div className="experiences-years">
                                 <span className="experiences-years__number">5</span>
                                 <span className="experiences-years__text">Years Experiences</span>
                              </div>
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">About us</span>
                        <h2>Compassion unites us for brighter  <span>futures.</span></h2>
                     </div>
                     <p>&quot;Ashur Jan Welfare Organization which has been registered on 16th August 2021 under the voluntary social welfare Agency with Government of Gilgit-Baltistan.  The objective of this Organization is to focus primarily on Health & Education within the Ashur Jan Community, and beyond, on self-help basis through donations and contributions by the Ashur Jan Family. &quot;</p>
                     {counter_data.filter((item) => item.page === "home_1").map((item) => (
                        <div key={item.id} className="counter-item counter-text-wrap">
                           <div className={`counter-item__icon ${item.icon_bg}`}><i className={item.icon}></i></div>
                           <div className="counter-item__content">
                           <span className="count-text" data-speed="3000">
                                       {/* Concatenating the number and string */}
                                       {/* <Count number={typeof item.counter_number === 'string' ? parseInt(item.counter_number) : item.counter_number} /> */}
                                       {typeof item.counter_number === 'string' ? item.counter_number : ''}
                                    </span>
                                    <p className="counter-title">{item.title}</p>
                           </div>
                        </div>
                     ))}
                     <Link className="cr-btn ml-5 mt-25" href="#">Didcover more</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
