import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonials/author1.jpg";
import authorImg_2 from "@/assets/img/testimonials/author2.jpg";
import authorImg_3 from "@/assets/img/testimonials/author3.jpg";

import quoteIcon_1 from "@/assets/img/testimonials/quote-icon1.png";
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import quoteIcon_3 from "@/assets/img/testimonials/quote-icon3.png";

interface DataType {
   id: number;
   page:string;
   desc: string;
   name: string;
   designation: string;
   rating?:string[];
   img?:StaticImageData | undefined;
   item_bg?:string;
   quote_icon?:StaticImageData;
}

const testimonial_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      desc: "Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable. you are going to use.",
      name: "Rort Jonson",
      designation: "Doner, Canada",
   },
   {
      id: 2,
      page:"home_1",
      desc: "You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable.",
      name: "Jesse Rayford",
      designation: "Doner, Canada",
   },
   {
      id: 3,
      page:"home_1",
      desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, or you are going to use.",
      name: "Ralph Ared",
      designation: "Doner, Canada",
   },
   {
      id: 4,
      page:"home_1",
      desc: "You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly believable.",
      name: "Jesse Rayford",
      designation: "Doner, Canada",
   },
   {
      id: 5,
      page:"home_1",
      desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, or you are going to use.",
      name: "Ralph Alfred",
      designation: "Doner, Canada",
   },

   // home two
   
   {
      "id": 1,
      "page": "home_2",
      "desc": "As Founding chairman of Ashurjan Welfare Organization, I feel proud to lead this promising organization. Together with our donors we have achieved very much in supporting underprivileged in Education and Health sectors in our inception years.",
      "name": "Lal Khan",
      "designation": "Chairman Ashurjan Welfare Organization.",
      "rating": ["flaticon-star", "flaticon-star", "flaticon-star", "flaticon-star", "flaticon-star"],
    },
   {
      id: 2,
      page:"home_2",
      desc: "2nd Person Reviews according to this I feel proud to lead this promising organization. Together with our donors we have achieved very much in supporting under privileged in Education and Health sectors in our inception years. ",
      name: "2nd Person",
      designation: "Chairman Ashurjan Welfare Organization.",
      rating:["flaticon-star","flaticon-star","flaticon-star","flaticon-star","flaticon-star",],
   }, 
   {
      id: 3,
      page:"home_2",
      desc: "3rd Person Review on this, I feel proud to lead this promising organization. Together with our donors we have achieved very much in supporting under privileged in Education and Health sectors in our inception years. ",
      name: "3rd Person",
      designation: "Chairman Ashurjan Welfare Organization.",
      rating:["flaticon-star","flaticon-star","flaticon-star","flaticon-star","flaticon-star",],
   },

   // home three
   
   {
      id: 1,
      page:"home_3",
      desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
      name: "Jenny Wilson",
      designation: "Doner, Canada",
      img:authorImg_1,
      quote_icon:quoteIcon_1,
   }, 
   {
      id: 2,
      page:"home_3",
      desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
      name: "Wade Warren",
      designation: "Doner, Canada",
      img:authorImg_2,
      item_bg:"item--green",
      quote_icon:quoteIcon_2,
   }, 
   {
      id: 3,
      page:"home_3",
      desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
      name: "Jenny Wilson",
      designation: "Doner, Canada",
      img:authorImg_3,
      item_bg:"item--yellow",
      quote_icon:quoteIcon_3,
   },
]

export default testimonial_data;