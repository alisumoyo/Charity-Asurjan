import Image from "next/image";
import Link from "next/link";

import ppcomingEventImg_1 from "@/assets/img/widgets/event1.jpg";
import ppcomingEventImg_2 from "@/assets/img/widgets/event2.jpg";

const EventDetailsSidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="main-sidebar event-sidebar rmt-75">
        <div className="widget widget-event-info">
          <h5 className="widget-title">Event Info</h5>
          <ul>
            <li>
              <div className="icon">
                <i className="fa fa-calendar-alt"></i>
              </div>{" "}
              <div className="content">
                <h6>Event Date & Time</h6>
                <span>31 december,2022 11:00am - 3:00pm</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>{" "}
              <div className="content">
                <h6>Event Venue</h6>
                <span>2715 Ash Dr. San Jose, South Dakota</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-phone-alt"></i>
              </div>{" "}
              <div className="content">
                <h6>Cantact Number</h6>
                <span>(406) 555-0120 , (603) 555 - 010</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="widget widget-upcoming-event">
          <h5 className="widget-title">Upcoming Event</h5>
          <ul>
            <li>
              <div className="image">
                <Image src={ppcomingEventImg_1} alt="Event" />
              </div>
              <div className="content">
                <h6>
                  <Link href="/event">Winter Help Event for Ghizer Child</Link>
                </h6>
                <ul className="blog-meta">
                  <li>
                    <i className="flaticon-map"></i> London
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> 12 Dec, 2022
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="image">
                <Image src={ppcomingEventImg_2} alt="Event" />
              </div>
              <div className="content">
                <h6>
                  <Link href="/event-details">
                    Event for Importent of Vaccines
                  </Link>
                </h6>
                <ul className="blog-meta">
                  <li>
                    <i className="flaticon-map"></i> Old Town
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> 20 Dec, 2022
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="widget widget_location">
          <h5 className="widget-title">Event Location</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12926.695670153931!2d74.36095328859766!3d35.90600117923125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1714661127513!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="widget widget_cta">
          <div
            className="cta-widget-inner"
            style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}
          >
            <h5>We have provided financial help to 5 million people</h5>
            <Link className="cr-btn ml-5" href="donate">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSidebar;
