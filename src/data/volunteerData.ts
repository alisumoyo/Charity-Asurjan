import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.jpg";
import volunteerThumb_4 from "@/assets/img/valunteer/valunteer4.jpg";

// import volunteer2Thumb_1 from "@/assets/img/valunteer/volunteer-two1.jpg";
import volunteer2Thumb_3 from "@/assets/img/valunteer/volunteer-two3.jpg";
import volunteer2Thumb_4 from "@/assets/img/valunteer/volunteer-two4.jpg";
import volunteer2Thumb_8 from "@/assets/img/valunteer/volunteer-two8.jpg";

// import volunteer3Thumb_1 from "@/assets/img/valunteer/volunteer-three1.jpg";
// import volunteer3Thumb_2 from "@/assets/img/valunteer/volunteer-three2.jpg";
import volunteer3Thumb_3 from "@/assets/img/valunteer/volunteer-three3.jpg";
import volunteer3Thumb_4 from "@/assets/img/valunteer/volunteer-three4.jpg";
// import volunteer3Thumb_5 from "@/assets/img/valunteer/volunteer-three5.jpg";
import volunteer3Thumb_6 from "@/assets/img/valunteer/volunteer-three6.jpg";
import volunteer3Thumb_7 from "@/assets/img/valunteer/volunteer-three7.jpg";
// import volunteer3Thumb_8 from "@/assets/img/valunteer/volunteer-three8.jpg";

import v9 from "@/assets/img/valunteer/volunteer/vounter9.png";
import v10 from "@/assets/img/valunteer/volunteer/vounter10.png";
import v11 from "@/assets/img/valunteer/volunteer/vounter11.png";
import v12 from "@/assets/img/valunteer/volunteer/vounter12.png";
import v13 from "@/assets/img/valunteer/volunteer/vounter13.png";
import v14 from "@/assets/img/valunteer/volunteer/vounter14.png";
import v15 from "@/assets/img/valunteer/volunteer/vounter15.png";
import v16 from "@/assets/img/valunteer/volunteer/vounter16.png";
import v17 from "@/assets/img/valunteer/volunteer/vounter17.png";
import v18 from "@/assets/img/valunteer/volunteer/vounter18.png";
import v19 from "@/assets/img/valunteer/volunteer/vounter19.png";


interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   item_bg?: string;
   epithet: string;
}

const volunteer_data: DataType[] = [
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
      thumb: volunteerThumb_4,
      name: "Guy Hawkins",
      epithet: 'Vice Chairman'
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
      epithet:'Finance Secretary'
   },
   {
      id: 5,
      page: "home_1",
      thumb: volunteer3Thumb_6,
      name: "Ali Nazar",
      epithet:'Finance Secretary'

   },
   {
      id: 6,
      page: "home_1",
      thumb: volunteer2Thumb_3,
      name: "Kristin Watson",
      epithet:'Finance Secretary'
   },
   {
      id: 7,
      page: "home_1",
      thumb: volunteer2Thumb_4,
      name: "Fida Hussain",
      item_bg: "valunteer-two-item__des--green",
      epithet:'Finance Secretary',
   },
   {
      id: 8,
      page: "home_1",
      thumb: volunteer3Thumb_4,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 9,
      page: "home_1",
      thumb: v9,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },,
   {
      id: 10,
      page: "home_1",
      thumb: v10,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },,
   {
      id: 11,
      page: "home_1",
      thumb: v11,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },,
   {
      id: 12,
      page: "home_1",
      thumb: v12,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },

   {
      id: 13,
      page: "home_1",
      thumb: v13,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 14,
      page: "home_1",
      thumb: v14,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 15,
      page: "home_1",
      thumb: v15,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 16,
      page: "home_1",
      thumb: v16,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 17,
      page: "home_1",
      thumb: v17,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 18,
      page: "home_1",
      thumb: v18,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
   },
   {
      id: 19,
      page: "home_1",
      thumb: v19,
      name: "Sangul Khan",
      item_bg: "valunteer-item--yellow",
      epithet:'Finance Secretary'
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