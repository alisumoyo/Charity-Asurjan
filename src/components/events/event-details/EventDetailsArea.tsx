import Image from "next/image";

import eventDetailsThumb from "@/assets/img/events/event-details.jpg"
import EventDetailsForm from "@/components/forms/EventDetailsForm";
import EventDetailsSidebar from "./EventDetailsSidebar";

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   list: string[];
}

const content_data: ContentType = {
   title_1: "Clean Water Event",
   title_2: "Empowering Communities Through Clean Water Initiatives",
   desc_1: (<>&quot;Dive into our &quot;Clean Water Event&quot; and immerse yourself in a mission of profound impact. We invite you to join us as we embark on a journey to address one of the most pressing challenges of our time: ensuring clean and accessible water for all. Through innovative solutions, community partnerships, and unwavering dedication, we aim to alleviate water scarcity and uplift the lives of millions. By participating in this event, you become a catalyst for change, a beacon of hope in the face of adversity. Together, let&quot;s champion the right to clean water and pave the way for a future where every individual can thrive..</>),
   desc_2: (<>At our &quot;Clean Water Event&quot; you&quot;ll have the opportunity to engage with like-minded individuals, experts, and organizations dedicated to water sustainability. Through workshops, discussions, and hands-on activities, you&quot;ll gain insights into the complexities of water access and learn about practical solutions that make a difference. Whether you&quot;re passionate about environmental conservation, humanitarian aid, or social justice, there&quot;s a place for you in our movement. Join us as we work towards a world where every person, regardless of their circumstances, has the fundamental right to clean and safe water. Together, we can turn the tide on water insecurity and build a brighter future for generations to come.&quot;</>),
   desc_3: (<>In our ongoing commitment to fostering sustainable development and community well-being, were thrilled to announce our upcoming  Clean Water Event. This initiative serves as a pivotal platform for collaboration, education, and action in the realm of water sustainability. Through interactive workshops, expert-led discussions, and hands-on projects, participants will delve into the multifaceted challenges of water access and explore innovative solutions. By uniting passionate individuals, organizations, and stakeholders, we aim to catalyze positive change and make strides towards a future where clean water is a universal right. Join us as we embark on this transformative journey, empowering communities and leaving a lasting impact on generations to come.</>),
   list: ["Kam adipiscin estibulum", "Food help for african people", "Kam adipiscin estibulum", "Suport Homeless people", "Volenteer", "Donation"],
}

const { title_1, title_2, desc_1, desc_2, desc_3, list } = content_data;

const EventDetailsArea = ({ single_event }: any) => {
   return (
      <div className="event-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="event-details-content mb-65">
                     <div className="details-image mb-30">
                        {single_event?.thumb ? <Image src={single_event.thumb} alt="image" /> : <Image src={eventDetailsThumb} alt="image" />}
                     </div>
                     <h3 className="title">{single_event?.title ? single_event.title : title_1 }</h3>
                     <p>{desc_1}</p>
                     <p>{desc_2}</p>
                     <h5>{title_2}</h5>
                     <p>{desc_3}</p>
                     <ul className="list-style-two">
                        {list.map((li, index) => <li key={index}>{li}</li>)}
                     </ul>
                  </div>
                  <h4>Join With Us</h4>
                  <EventDetailsForm />
               </div>
               <EventDetailsSidebar />
            </div>
         </div>
      </div>
   )
}

export default EventDetailsArea
