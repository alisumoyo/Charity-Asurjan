interface DataType {
   id: number;
   page:string;
   icon: string;
  counter_number: string | number;
   title: string;
   icon_bg?:string;
 }[]
 
 const counter_data: DataType[] = [
   {
     id: 1,
     page:"home_1",
     icon: "flaticon-solidarity",
     counter_number: "3M (pkr) ",
     title: "Riased by Donors and Ashurjan Welfare Organization Members",
   },
   {
     id: 2,
     page:"home_1",
     icon: "flaticon-help",
     counter_number: "50+",
     title: "Volunteers available to support any cause",
     icon_bg:"counter-item__icon--green",
   },

  //  home two
   {
    id: 1,
    page:"home_2",
    icon: "flaticon-solidarity",
    icon_bg: "counter-item__icon--green",
    title: "Donation",
    counter_number: "2.5m",
 },
 {
  "id": 2,
  "page": "home_2",
  "icon": "flaticon-help",
  "title": "Volunteers",
  "counter_number": "20+",
 },
 {
    id: 3,
    page:"home_2",
    icon: "flaticon-heart",
    icon_bg: "counter-item__icon--yellow",
    title: "Campaigns",
    counter_number: "50",
 },
 ]

 export default counter_data;