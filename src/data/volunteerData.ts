import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.jpg";
import volunteerThumb_3 from "@/assets/img/valunteer/valunteer4.jpg";

import volunteer2Thumb_4 from "@/assets/img/valunteer/volunteer-two3.jpg";
import volunteer2Thumb_5 from "@/assets/img/valunteer/volunteer-two4.jpg";
import volunteer2Thumb_8 from "@/assets/img/valunteer/volunteer-two8.jpg";

import volunteer3Thumb_4 from "@/assets/img/valunteer/volunteer-three4.jpg";
import volunteer3Thumb_6 from "@/assets/img/valunteer/volunteer-three6.jpg";

import volunteer1Thumb_9 from "@/assets/img/valunteer/volunteer/vounter9.png";
import volunteer1Thumb_10 from "@/assets/img/valunteer/volunteer/vounter10.png";
import volunteer1Thumb_11 from "@/assets/img/valunteer/volunteer/vounter11.png";
import volunteer1Thumb_12 from "@/assets/img/valunteer/volunteer/vounter12.png";
import volunteer1Thumb_13 from "@/assets/img/valunteer/volunteer/vounter13.png";
import volunteer1Thumb_14 from "@/assets/img/valunteer/volunteer/vounter14.png";
import volunteer1Thumb_15 from "@/assets/img/valunteer/volunteer/vounter15.png";
import volunteer1Thumb_16 from "@/assets/img/valunteer/volunteer/vounter16.png";
import volunteer1Thumb_17 from "@/assets/img/valunteer/volunteer/vounter17.png";
import volunteer1Thumb_18 from "@/assets/img/valunteer/volunteer/vounter18.png";
import volunteer1Thumb_19 from "@/assets/img/valunteer/volunteer/vounter19.png";


interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   item_bg: string;
   epithet: string;
}
 // @ts-ignore 
const volunteer_data: DataType[] = [  // eslint-disable-line
   {
      id: 1,
      page: "home_1",
      thumb: volunteer2Thumb_8,
      name: "Hasil Murad",
      item_bg: "valunteer-item--green",
      epithet: "Founding Chairman"
   },
   {
      id: 2,
      page: "home_1",
      thumb: volunteerThumb_3,
      name: "Mehar Ali",
      epithet: 'Vice Chairman',
      item_bg: "valunteer-item--green",
   },
   {
      id: 3,
      page: "home_1",
      thumb: volunteerThumb_1,
      name: "Ehsan Karim",
      item_bg: "valunteer-item--yellow",
      epithet:"General Secretary"
   },
   {
      id: 4,
      page: "home_1",
      thumb: volunteerThumb_2,
      name: "Muhammad Aslam",
      item_bg: "valunteer-item--green",
      epithet:'Finance secretary'
   },
   {
      id: 5,
      page: "home_1",
      thumb: volunteer3Thumb_6,
      name: "Ali Nazar",
      epithet:'Volnteer',
      item_bg: "valunteer-item--green",

   },
   {
      id: 6,
      page: "home_1",
      thumb: volunteer2Thumb_4,
      name: "Kristin Watson",
      epithet:'Volnteer',
      item_bg: "valunteer-item--green",
   },
   {
      id: 7,
      page: "home_1",
      thumb: volunteer2Thumb_5,
      name: "Fida Hussain",
      item_bg: "valunteer-two-item__des--green",
      epithet:'Volnteer',
   },
   {
      id: 8,
      page: "home_1",
      thumb: volunteer3Thumb_4,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 9,
      page: "home_1",
      thumb: volunteer1Thumb_9,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },,
   {
      id: 10,
      page: "home_1",
      thumb: volunteer1Thumb_10,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },,
   {
      id: 11,
      page: "home_1",
      thumb: volunteer1Thumb_11,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },,
   {
      id: 12,
      page: "home_1",
      thumb: volunteer1Thumb_12,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },

   {
      id: 13,
      page: "home_1",
      thumb: volunteer1Thumb_13,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 14,
      page: "home_1",
      thumb: volunteer1Thumb_14,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 15,
      page: "home_1",
      thumb: volunteer1Thumb_15,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 16,
      page: "home_1",
      thumb: volunteer1Thumb_16,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 17,
      page: "home_1",
      thumb: volunteer1Thumb_17,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 18,
      page: "home_1",
      thumb: volunteer1Thumb_18,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   {
      id: 19,
      page: "home_1",
      thumb: volunteer1Thumb_19,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Volnteer'
   },
   
   // // home two

   // {
   //    id: 1,
   //    page: "home_2",
   //    thumb: volunteer2Thumb_8,
   //    name: "Hasil Murad",
   // },
   // {
   //    id: 2,
   //    page: "home_2",
   //    thumb: volunteerThumb_2,
   //    name: "Muhammad Aslam",
   //    item_bg: "valunteer-two-item__des--yellow",
   // },
   // {
   //    id: 3,
   //    page: "home_2",
   //    thumb: volunteer2Thumb_4,
   //    name: "Fida Hussain",
   //    item_bg: "valunteer-two-item__des--green",
   // },
   // {
   //    id: 4,
   //    page: "home_2",
   //    thumb: volunteerThumb_1,
   //    name: "Ehsan Karim"
   // },
   // {
   //    id: 5,
   //    page: "home_2",
   //    thumb: volunteer2Thumb_7,
   //    name: "Zafar Iqbal",
   // },
   // {
   //    id: 6,
   //    page: "home_2",
   //    thumb: volunteerThumb_3,
   //    name: "Didar Baqir",
   //    item_bg: "valunteer-two-item__des--yellow",
   // },
   // {
   //    id: 7,
   //    page: "home_2",
   //    thumb: volunteer2Thumb_5,
   //    name: "Gari Khan",
   //    item_bg: "valunteer-two-item__des--green",
   // },
   // {
   //    id: 8,
   //    page: "home_2",
   //    thumb: volunteer2Thumb_6,
   //    name: "Aziz Karim",
      
   // },

   // // home three

   // {
   //    id: 1,
   //    page: "home_3",
   //    thumb: volunteerThumb_4,
   //    name: "Guy Hawkins",
   // },
   // {
   //    id: 2,
   //    page: "home_3",      
   //    thumb: volunteer3Thumb_7,
   //    name: "Aziz Ahmed Khan"
  
   // },
   // {
   //    id: 3,
   //    page: "home_3",
   //    thumb: volunteer3Thumb_3,
   //    name: "Kaleem-ullah"
   // },
   // {
   //    id: 4,
   //    page: "home_3",
   //    thumb: volunteerThumb_6,
   //    name: "Brooklyn Simmons",
   // },
   // {
   //    id: 5,
   //    page: "home_3",
   //    thumb: volunteerThumb_5,
   //    name: "Theresa Webb"
   // },
//    {
//       id: 6,
//       page: "home_3",
//       thumb: volunteer3Thumb_5,
//       name: "Ghulam Hussain"
//    },
//    {
//       id: 7,
//       page: "home_3",
//       thumb: volunteer3Thumb_8,
//       name: "Leslie Alexander"

//    },
//    {
//       // id: 8,
//       // page: "home_3",
//       // thumb: volunteer3Thumb_2,
//       // name: "Sana Khan"

//    },
]

export default volunteer_data;