import EventDetails from "@/components/events/event";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Event Charite - Charity & Donation React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default index