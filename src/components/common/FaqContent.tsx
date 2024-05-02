import Image from "next/image"
import Count from "./Count"

import faqThumb from "@/assets/img/about/faq-left.png"

const FaqContent = () => {
   return (
      <>
         <Image src={faqThumb} alt="Man" />
         <div className="experiences-years">
            <span className="experiences-years__number">5</span>
            <span className="experiences-years__text">Years Experiences</span>
         </div>
         <div className="counter-item counter-text-wrap">
            <div className="counter-item__content">
               <span className="count-text" data-speed="3000" data-stop="80000"><Count number={8000} /></span>
               <h5 className="counter-title">Volunteers</h5>
            </div>
         </div>
         <div className="project-complete">
            <div className="project-complete__icon">
               <i className="flaticon-charity"></i>
            </div>
            <div className="project-complete__content">
               <h5>We Help 500 Needy Peoples</h5>
               <span>Donet for charity</span>
            </div>
         </div>
      </>
   )
}

export default FaqContent
