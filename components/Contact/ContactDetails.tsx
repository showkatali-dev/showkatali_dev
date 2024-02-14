import {
  BsFacebook,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactDetails = () => {
  return (
    <div data-aos="fade-right">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="border border-primary rounded-full p-3 text-4xl text-primary">
            <BsFillTelephoneFill />
          </div>
          <div>
            <h2 className="text-2xl text-secondary font-semibold mb-1">
              Phone
            </h2>
            <p className="font-medium">+8801749424840</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-primary rounded-full p-3 text-4xl text-primary">
            <HiMail />
          </div>
          <div>
            <h2 className="text-2xl text-secondary font-semibold mb-1">
              Email
            </h2>
            <a
              href="mailto:showkatali.dev@gmail.com"
              className="font-medium hover:text-green-500 hover:underline"
            >
              showkatali.dev@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-primary rounded-full p-3 text-4xl text-primary">
            <FaLocationArrow />
          </div>
          <div>
            <h2 className="text-2xl text-secondary font-semibold mb-1">
              Location
            </h2>
            <a href="mailto:showkatali.dev@gmail.com" className="font-medium">
              Dinajpur, Bangladesh
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-12">
        <a
          href="http://www.linkedin.com/in/md-showkat-ali"
          target="blank"
          className="btn btn-circle btn-primary"
        >
          <BsLinkedin />
        </a>
        <a
          href="http://www.facebook.com/its.showkatalisam"
          target="blank"
          className="btn btn-circle btn-primary"
        >
          <BsFacebook />
        </a>
        <a
          href="https://github.com/showkatali-dev"
          target="blank"
          className="btn btn-circle btn-primary"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
