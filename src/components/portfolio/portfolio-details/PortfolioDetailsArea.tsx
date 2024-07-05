import Image from "next/image"

import portfolioDetailsThumb from "@/assets/img/portfolio/portfolio-details.jpg"

interface ContentData {
   title_1: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   blockquote: JSX.Element;
   list: string[];
}

const details_content: ContentData = {
   title_1: "Helping Homeless People",
   desc_1: (<>&quot;Join us in our commitment to aiding homeless individuals, providing vital support and resources to those in need. Through collaborative efforts and compassionate outreach, we strive to address the complex challenges faced by homeless communities. From shelter provisions to access to healthcare and employment assistance, our multifaceted approach aims to restore dignity and empower individuals towards sustainable independence.&quot;</>),
   desc_2: (<>Together&quot; lets extend a helping hand and make a tangible difference in the lives of homeless people. By fostering a culture of empathy and solidarity, we can create a brighter future where every individual has the opportunity to thrive, regardless of their circumstances. Join our cause and become part of a compassionate movement dedicated to transforming lives and building stronger, more inclusive communities.&quot;</>),
   desc_3: (<>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model words which don&apos;t look even slightly believable. If you are going to use a passage vitae turpis eu ante blandit</>),
   blockquote: (<>&quot;Explore our groundbreaking campaign in Hunza or Gilgit, starting this January. Learn about our unique strategies, from community engagement and investment projects to building partnerships and implementing impactful programs. Join us as we work towards creating positive change and transforming lives in Needy regions.&quot;</>),
   list: ["Health Insurance", "Shelters for natural disaster effecties", "Health-Insurences", "Suport Homeless people", "Volenteer", "Donation"],
}

const { title_1, desc_1, desc_2, blockquote, desc_3, list } = details_content;

const PortfolioDetailsArea = () => {
   return (
      <div className="portfolio-details-area pt-120 pb-105">
         <div className="container">
            <div className="portfolio-details-content">
               <div className="details-image mb-50">
                  <Image src={portfolioDetailsThumb} alt="Portfolio details" />
               </div>
               <h3 className="title mb-20">{title_1}</h3>
               <p>{desc_1}</p>
               <p>{desc_2}</p>
               <blockquote className="mt-70">
                  <div className="quote-icon"><i className="flaticon-quote"></i></div>
                  {blockquote}
               </blockquote>
            </div>
         </div>
      </div>
   )
}

export default PortfolioDetailsArea
