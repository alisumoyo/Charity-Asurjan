import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";
import eventThumb_4 from "@/assets/img/events/event4.jpg";
import eventThumb_5 from "@/assets/img/events/event5.jpg";
import eventThumb_6 from "@/assets/img/events/event6.jpg";

import event2Thumb_1 from "@/assets/img/events/event-two1.jpg";
import event2Thumb_2 from "@/assets/img/events/event-two2.jpg";
import event2Thumb_3 from "@/assets/img/events/event-two3.jpg";
import event2Thumb_4 from "@/assets/img/events/event-two4.jpg";

import event3Thumb_1 from "@/assets/img/events/event-three1.jpg";
import event3Thumb_2 from "@/assets/img/events/event-three2.jpg";
import event3Thumb_3 from "@/assets/img/events/event-three3.jpg";

import eventInnerThumb_1 from "@/assets/img/events/event-three1.jpg";
import eventInnerThumb_2 from "@/assets/img/events/event-three2.jpg";
import eventInnerThumb_3 from "@/assets/img/events/event-three3.jpg";
import eventInnerThumb_4 from "@/assets/img/events/event-three4.jpg";
import eventInnerThumb_5 from "@/assets/img/events/event-three5.jpg";
import eventInnerThumb_6 from "@/assets/img/events/event-three6.jpg";

import eventInnerThumb_7 from "@/assets/img/events/event-three7.jpg";
import eventInnerThumb_8 from "@/assets/img/events/event-three8.jpg";
import eventInnerThumb_9 from "@/assets/img/events/event-three9.jpg";

interface DataType {
   id: number;
   page:string;
   thumb: StaticImageData;
   title: string;
   date?: string | number;
   city: string;
   time?:string;
   item_bg?:string;
   desc?:string;
}

const event_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      thumb: eventThumb_1,
      title: "Free Medical Camping",
      date: "Jan 18, 2013",
      city: "melbourne City",
   },
   {
      id: 2,
      page:"home_1",
      thumb: eventThumb_2,
      title: "Free Medical Camping",
      date: "Jan 18, 2014",
      city: "melbourne City",
   },
   {
      id: 3,
      page:"home_1",
      thumb: eventThumb_3,
      title: "Free Medical Camping",
      date: "Jan 18, 2015",
      city: "melbourne City",
   },
   {
      id: 4,
      page:"home_1",
      thumb: eventThumb_4,
      title: "Free Medical Camping",
      date: "Jan 18, 2016",
      city: "melbourne City",
   },
   {
      id: 5,
      page:"home_1",
      thumb: eventThumb_5,
      title: "Free Medical Camping",
      date: "Jan 18, 2013",
      city: "melbourne City",
   },
   {
      id: 6,
      page:"home_1",
      thumb: eventThumb_6,
      title: "Free Medical Camping",
      date: "Jan 18, 2016",
      city: "melbourne City",
   },

   // home two

   {
      id: 1,
      page:"home_2",
      thumb: event2Thumb_1,
      title: "Food For Hunger",
      time: "Sunday, 08:00am",
      city: "Gilgit City",
      date:25,
   },
   {
      id: 2,
      page:"home_2",
      thumb: event2Thumb_4,
      title: "Education For Children",
      time: "Satday, 09:00pm",
      city: "Zulfiqarabad, Gilgit",
      date:31,

   },
   {
      id: 3,
      page:"home_2",
      thumb: event2Thumb_3,
      title: "Clean Water Event",
      time: "Monday, 02:00pm",
      city: "Aliabad, Hunza",
      date:30,
      item_bg:"event-two-item--yellow"
   },
   {
      id: 4,
      page:"home_2",
      thumb: event2Thumb_2,
      title: "Adopt a Orphan Child",
      time: "Friday, 10:00am",
      city: "Karimabad, Hunza",
      date:28,
      item_bg:"event-two-item--green"
   },

   // home three

   {
      id: 1,
      page:"home_3",
      thumb: event3Thumb_1,
      title: "Clean Water Event",
      time: "Jan 18, 2013",
      city: "Mownten City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 2,
      page:"home_3",
      thumb: event3Thumb_2,
      title: "Food For Hunger",
      time: "Jan 20, 2015",
      city: "Mownten City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 3,
      page:"home_3",
      thumb: event3Thumb_3,
      title: "Adopt a Orphan Child",
      time: "Jan 22, 2015",
      city: "Mownten City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 4,
      page:"home_3",
      thumb: event3Thumb_2,
      title: "Food For Hunger",
      time: "Jan 20, 2015",
      city: "Mownten City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },

   // inner page
   
   {
      id: 1,
      page:"inner_page",
      thumb: eventInnerThumb_1,
      title: "Family Health Insurance coverage for needy.",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc: "Extending family health insurance coverage to those in need, ensuring access to essential healthcare services and financial protection.",
      item_bg:"item--yellow",
   },
   {
      id: 2,
      page:"inner_page",
      thumb: eventInnerThumb_2,
      title: "Women Impoverment in the socity",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Women impoverishment refers to the systemic economic deprivation and marginalization experienced by women worldwide",
      item_bg:"item--green",
   },
   {
      id: 3,
      page:"inner_page",
      thumb: eventInnerThumb_3,
      title: "Financial support to flood affectees of Bubur Valley",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Providing financial aid to flood victims in the Bubur Valley to alleviate their hardships and facilitate recovery.",
      item_bg:"item--yellow",
   },
   {
      id: 4,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Financial support to flood affectees of Ishkomen valley",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Offering financial assistance to those affected by floods in the Ishkomen Valley, aiding in their recovery and rebuilding efforts."
    },
   {
      id: 5,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Financial support to flood affectees of Ishkomen valley",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Offering financial assistance to those affected by floods in the Ishkomen Valley, aiding in their recovery and rebuilding efforts.",
       item_bg:"item--green",
   },


   
   {
      id: 6,
      page:"inner_page",
      thumb: eventInnerThumb_6,
      title: "Winter Help Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 7,
      page:"inner_page",
      thumb: eventInnerThumb_7,
      title: "Volunteer Meetup",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 8,
      page:"inner_page",
      thumb: eventInnerThumb_8,
      title: "Giving Hand",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 9,
      page:"inner_page",
      thumb: eventInnerThumb_9,
      title: "Food Campain",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 10,
      page:"inner_page",
      thumb: eventInnerThumb_6,
      title: "Winter Help Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 11,
      page:"inner_page",
      thumb: eventInnerThumb_7,
      title: "Volunteer Meetup",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 12,
      page:"inner_page",
      thumb: eventInnerThumb_8,
      title: "Giving Hand",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 13,
      page:"inner_page",
      thumb: eventInnerThumb_9,
      title: "Food Campain",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   }, 
   {
      id: 14,
      page:"inner_page",
      thumb: eventInnerThumb_1,
      title: "Clean Water Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 15,
      page:"inner_page",
      thumb: eventInnerThumb_2,
      title: "Food For Hunger",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 16,
      page:"inner_page",
      thumb: eventInnerThumb_3,
      title: "Adopt a Orphan Child",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 17,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Happy Child Day Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 18,
      page:"inner_page",
      thumb: eventInnerThumb_5,
      title: "Big Project For Water",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },  
   {
      id: 19,
      page:"inner_page",
      thumb: eventInnerThumb_1,
      title: "Clean Water Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 20,
      page:"inner_page",
      thumb: eventInnerThumb_2,
      title: "Food For Hunger",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 21,
      page:"inner_page",
      thumb: eventInnerThumb_3,
      title: "Adopt a Orphan Child",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 22,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Happy Child Day Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 23,
      page:"inner_page",
      thumb: eventInnerThumb_5,
      title: "Big Project For Water",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 24,
      page:"inner_page",
      thumb: eventInnerThumb_6,
      title: "Winter Help Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 25,
      page:"inner_page",
      thumb: eventInnerThumb_7,
      title: "Volunteer Meetup",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 26,
      page:"inner_page",
      thumb: eventInnerThumb_8,
      title: "Giving Hand",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 27,
      page:"inner_page",
      thumb: eventInnerThumb_9,
      title: "Food Campain",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 28,
      page:"inner_page",
      thumb: eventInnerThumb_2,
      title: "Food For Hunger",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 29,
      page:"inner_page",
      thumb: eventInnerThumb_3,
      title: "Adopt a Orphan Child",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 30,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Happy Child Day Event",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 31,
      page:"inner_page",
      thumb: eventInnerThumb_5,
      title: "Big Project For Water",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
]

export default event_data;