import volunteer_data from "@/data/volunteerData"
import Image from "next/image"

const Volunteer = ({ style }: any) => {

   const filteredVolunteers = volunteer_data
      .filter((item) => item.page === "home_1")
      .slice(0, style ? 4 : 0);

   return (
      <div className={`volunteer-area-two pb-90 rel z-1 ${style ? "pt-120" : ""}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     {/* <span className="section-title__subtitle mb-10">Our Team / Volunteers</span> */}
                     {style ? <h3>Meet <span>With Team / Volunteers</span></h3> : <h2></h2>}
                     <p>&quot;Promising , Passionate and dedicated team makes us unique who work on volunteer basis.&quot;</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {filteredVolunteers.map((item) => (
                  <div key={item.id} className="col-xl-3 col-sm-6">
                     <div className="valunteer-two-item">
                        <div className="valunteer-two-item__img">
                           <Image src={item.thumb} alt="Volunteer" />
                        </div>
                        <div className={`valunteer-two-item__des ${item.item_bg}`}>
                           <h5>{item.name}</h5>
                           <span>{item.epithet}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Volunteer
