"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

import videoBg from "@/assets/img/video/video-bg.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const tab_title: string[] = ["Mission", "Vission", "Velu",]

const tab_content: JSX.Element[] = [
   (<> &quot;Welcome to our trusted nonprofit donation center, your gateway to making a difference. With transparency and integrity at our core, we ensure your contributions support impactful causes worldwide. Join us in empowering communities and changing lives through your generosity today.&quot;</>),
   (<>&quot;Our vision is to create a world where every act of kindness ignites lasting change. Join us in building a brighter future through compassion, collaboration, and unwavering dedication to making a difference.&quot;</>),
   (<>&quot;At our core, integrity, compassion, and inclusivity guide our actions. We believe in transparency, accountability, and the transformative power of collective action. Join us as we uphold these values and work towards a more equitable and sustainable world for all.&quot;</>),
]

const ChooseArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <>
         <div className="why-choose-area overlay py-120">
            <div className="container">
               <div className="row gap-100 align-items-center">
                  <div className="col-lg-6">
                     <div className="why-choose-content text-white rmb-65">
                        <div className="section-title mb-60">
                           <span className="section-title__subtitle mb-10">Why Choose Us</span>
                           <h2>Trusted non profit donation <span>center</span></h2>
                        </div>

                        <div className="vission-mission-tab">
                           <ul className="nav mb-25" role="tablist">
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                       {tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>

                           <div className="tab-content">
                              {tab_content.map((content, index) => (
                                 <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}  >
                                    {content}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="why-choose-video">
                        <div className="video rel">
                           <Image src={videoBg} alt="Video" />
                           <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--one" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                        </div>
                        <Image className="leaf-shape top_image_bounce" src={leafShape} alt="Shape" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default ChooseArea
