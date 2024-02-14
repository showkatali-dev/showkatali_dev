import ContactDetails from "@/components/Contact/ContactDetails";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me to discuss collaboration opportunities or any inquiries.",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-8 py-12 mb-12 overflow-hidden relative">
      <h1
        className="font-bold text-4xl md:text-5xl text-center text-white mb-8 md:mb-12"
        data-aos="zoom-in"
      >
        Contact <span className="text-gradient-primary">Me</span>
      </h1>
      <div
        className="w-fit py-1 px-4 bg-white/5 mx-auto rounded-md mb-8"
        data-aos="zoom-in"
        data-aos-delay={300}
      >
        <span className="font-medium text-lg text-gradient-primary">
          Get in Touch
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
