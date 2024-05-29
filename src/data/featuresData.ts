import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page:string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?:string;
}

const features_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      icon_name: "flaticon-help",
      title: "Become a volunteer!",
      desc: "Join our cause as volunteers and become an integral part of creating positive change in our community. By lending your time, skills, and passion, you'll play a vital role in supporting those in need, fostering empowerment, and building a brighter future for all. Together, we can make a meaningful difference and leave a lasting impact on the lives of others.",
   },
   {
      id: 2,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Quick Fuandraising",
      desc: "In times of urgent need, quick fundraising campaigns are essential for mobilizing immediate resources to support critical interventions. These initiatives swiftly gather funds to address pressing issues, providing timely assistance to those facing emergencies or hardships.",
   },
   {
      id: 3,
      page:"home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Start Donating",
      desc: "Start donating today and become a catalyst for transformation in our community. Your contributions fuel our efforts to uplift the empower individuals, and pave the way for a more equitable tomorrow. With each donation, you're offering hope and opportunity. Join us in making a tangible difference and leave a legacy of compassion and generosity. Together, let's build a better world.",
   },
   {
      id: 4,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Quick Fundraising",
      desc:"n times of urgent need, quick fundraising campaigns are essential for mobilizing immediate resources to support critical interventions. These initiatives swiftly gather funds to address pressing issues, providing timely assistance to those facing emergencies or hardships.",
   },

   // home one single features
   {
      id: 1,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile",
   },
   {
      id: 2,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile ",
      btn_bg: "btn--green",
   },

   // home two
   {
      id:1,
      page:"home_2",
      icon_name:"flaticon-help",
      title:"SUPPORT A STUDENT",
      desc:"'Join us in empowering the next generation! Your support helps provide quality education to deserving students, unlocking their potential and brightening their future. Together, we can make a lasting impact on the lives of those striving for a better tomorrow."
   },

   {
      id:2,
      page:"home_2",
      icon_name:"flaticon-donation",
      title:"Get Involved",
      desc:"Join us in making a difference by uplifting struggling families living below the poverty line. Your support can bring them into the mainstream of society. Alternatively, you can empower a woman who seeks to establish her own business, enabling her to meet her household's basic needs and build a brighter future.",
      item_bg:"feature-item--green",   
   },

   {
      id:3,
      page:"home_2",
      icon_name:"flaticon-solidarity",
      title:"SUPPORT A PATIENT",
      desc:"Your generosity can bring hope and relief to impoverished individuals battling illness. Join us in providing essential medical support to those in need, offering them a chance at healing and a brighter tomorrow.",
      item_bg:"feature-item--yellow",
   },
//    

// 
   // home three
   
   {
      id:1,
      page:"home_3",
      bg_img:features3Bg_1,
      icon_name:"flaticon-solidarity",
      title:"Get Inspire And Help",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   }, 
   {
      id:2,
      page:"home_3",
      bg_img:features3Bg_2,
      icon_name:"flaticon-heart",
      title:"Send Us Donations",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   }, 
   {
      id:3,
      page:"home_3",
      bg_img:features3Bg_3,
      icon_name:"flaticon-help",
      title:"Become a volunteer",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
]

export default features_data;