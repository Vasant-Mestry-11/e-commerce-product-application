import Layout from "../components/Layout/Layout";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { MdHeadsetMic } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="left-panel">
          <img src="/images/contactus.jpeg" alt="contact us" />
        </div>
        <div className="right-panel">
          <button className="contact-button">Contact Us</button>
          <p className="contacts">
            <span>
              <HiOutlineMailOpen />
            </span>
            : <span>www.help@ecommerceapp.com</span>
          </p>
          <p className="contacts">
            <span>
              <FiPhoneCall />
            </span>{" "}
            : <span>012-3456789</span>
          </p>
          <p className="contacts">
            <span>
              <MdHeadsetMic />
            </span>{" "}
            :<span>1800-0000-0000 (toll-free)</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
