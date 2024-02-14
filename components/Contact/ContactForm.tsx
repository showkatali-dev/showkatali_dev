"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState, FormEvent } from "react"; // Imported FormEvent
import { BsSendFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false); // Added explicit type for loading state
  const form = useRef<HTMLFormElement>(null); // Added explicit type for form ref

  const handleSendMessage = (e: FormEvent) => {
    // Changed Event to FormEvent
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const { name, email, subject, message } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    if (
      ![name.value, email.value, subject.value, message.value].every((a) =>
        Boolean(a.trim())
      )
    ) {
      toast.error("Please input required fields"); // Corrected message
      return setLoading(false);
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        form.current as HTMLFormElement, // Added type assertion
        "YL2hPuepwOuSTEEUN"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message sent");
            if (form.current) form.current.reset(); // Check if form exists before reset
          }
        },
        (error) => {
          console.error(error);
          toast.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="md:col-span-2" data-aos="fade-left">
      <form ref={form} onSubmit={handleSendMessage} className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input input-bordered w-full focus:outline-none focus:border-primary bg-inherit"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full focus:outline-none focus:border-primary bg-inherit"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered w-full focus:outline-none focus:border-primary bg-inherit"
        />
        <textarea
          placeholder="Message"
          name="message"
          className="input input-bordered py-3 w-full focus:outline-none focus:border-primary bg-inherit min-h-[100px] resize-none"
        />
        <button disabled={loading} type="submit" className="my-btn">
          {loading ? "Sending..." : "Send Message"}
          <span>
            <BsSendFill />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
