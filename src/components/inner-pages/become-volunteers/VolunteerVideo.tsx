import Image from "next/image";
import Link from "next/link";

import volunteerVideoThumb from "@/assets/img/valunteer/become-video.jpg";

interface ContentType {
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   list: string[];
   tags: string[];
   earning_doner: {
      title: string;
      earning: string;
   }[]
}

const content_data: ContentType = {
   desc_1: (<>Our mission is to make the world a better place for everyone. Everyone has their rights equally and we want to make sure that people can get food, education, treatment and accommodation for everyone who is living in poverty.</>),
   desc_2: (<>The great journey to end poverty for good begins with a child. Due to natural disasters and man made disasters so many people are suffering so help to recover them.</>),
   desc_3: (<>Our charity provides health insurance, shelters, women empowerment, and homeless support. Through volunteering and donations, we foster community solidarity and positive change.</>),
   list: [" Health Insurance", "Shelters for homeless", "Women-Empoverment", "Volenteer", "Donation,"],
   tags: ["Homeless", "Donation", "Education", "Insurence" , 'Charity'],
   earning_doner: [ { title: "Raised:", earning: "$100" }, { title: "Total Doner:", earning: "250+" },]
}

const { desc_1, desc_2, desc_3, list, tags, earning_doner } = content_data;

const VolunteerVideo = ({ style }: any) => {
   return (
      <div className="become-volunteer-video-area pb-65">
         <div className="container">
            <div className={`row ${style ? "" : "align-items-center"}`}>
               <div className="col-xl-5">
                  <div className="become-volunteer-video-content mb-45">
                     {!style && <>
                        <div className="section-title">
                           <span className="section-title__subtitle mb-10">Be Come Volunteer</span>
                           <h3>Member Benefit</h3>
                        </div>
                        <p>{desc_1}</p>
                        <p>{desc_2}</p>
                     </> }
                     
                     <ul className={`list-style-two ${style ? "" : "pt-20"}`}>
                        {list.map((li, i) => <li key={i}>{li}</li>)}
                     </ul>

                     {style ? <>
                        <p>{desc_3}</p>
                        <br />
                        <h6>Tags :</h6>
                        <div className="tags mb-20">
                           {tags.map((tag, index) => <Link key={index} href="#">{tag}</Link>)}
                        </div>
                        <ul className="earning-doner">
                           {earning_doner.map((item, i) => (
                              <li key={i}>
                                 <span>{item.title}</span>
                                 <b>{item.earning}</b>
                              </li>
                           ))}
                        </ul>
                     </> : ""}
                  </div>
               </div>

               <div className="col-xl-7">
                  <div className="become-volunteer-video overlay mb-55 image">
                     <Image src={volunteerVideoThumb} alt="Video" />
                     <a className="video-play video-play--four" href="https://youtu.be/BWuyvhr7tyM"
                        data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VolunteerVideo
