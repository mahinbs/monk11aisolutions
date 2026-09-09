import React, { useContext } from "react";
import img from "../assets/images/contact-form.webp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../data/constant";
import { sendContactEmail } from "../utils/sendContactEmail";

const ContactForm = ({ headline, id, variant = "default", kicker, intro }) => {
  const isPanel = variant === "dark" || variant === "light";
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    setSpinner(true);

    let emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    values.company && (emailBody += "Company: " + values.company + "\n\n");
    values.phone && (emailBody += "Phone: " + values.phone + "\n\n");
    emailBody += "Message:\n" + values.message;

    try {
      await sendContactEmail({
        subject: `Contact Form Submission - ${companyDetails.name}`,
        body: emailBody,
        replyTo: values.email,
      });
      toast.success("Email sent successfully");
      reset();
      navigate("/thank-you");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };
  const fieldClass = isPanel
    ? "placeholder:text-ink/35 outline-none p-2 bg-transparent border-b border-black/15 w-full text-ink"
    : "placeholder:text-white/70 outline-none p-2 bg-transparent border-b border-white/30 w-full text-white";

  return (
    <div
      id={id}
      className={`rounded-2xl grid md:grid-cols-2 gap-3 scroll-mt-28 ${
        isPanel ? "py-0" : "wrapper py-[4rem]"
      }`}
    >
      <div
        data-aos="fade-right"
        className={`${
          isPanel
            ? "bg-white border border-black/10 text-ink"
            : "bg-purpleColor text-white"
        } p-8 sm:p-10 rounded-2xl`}
      >
        {kicker && (
          <p className={`section-kicker mb-3 ${isPanel ? "" : "!text-white/80"}`}>
            {kicker}
          </p>
        )}
        <h3 className={`section-heading ${isPanel ? "text-ink" : "!text-white"}`}>
          {headline ? headline : "Tell us what you need to ship."}
        </h3>
        {intro && (
          <p
            className={`mt-4 leading-relaxed ${
              isPanel ? "text-ink/60" : "text-white/70"
            }`}
          >
            {intro}
          </p>
        )}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-4 mt-7"
        >
          <div>
            <input
              type="text"
              className={fieldClass}
              placeholder="Full Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) =>
                  val.trim() !== "" || "Full name is required",
              })}
            />
            <small className="text-brandRed">{errors.name?.message}</small>
          </div>
          <div>
            <input
              type="email"
              className={fieldClass}
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="text-brandRed">{errors.email?.message}</small>
          </div>
          <div>
            <textarea
              className={fieldClass}
              placeholder="Message"
              rows={4}
              {...register("message", {
                required: "Message is required",
                validate: (val) =>
                  val.trim() !== "" || "Message is required",
              })}
            />
            <small className="text-brandRed">{errors.message?.message}</small>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                className={fieldClass}
                placeholder="Company (optional)"
                {...register("company")}
              />
            </div>
            <div>
              <input
                type="tel"
                className={fieldClass}
                placeholder="Phone (optional)"
                {...register("phone", {
                  validate: (val) =>
                    !val ||
                    /^\+?[0-9]{10,15}$/.test(val) ||
                    "Entered phone number is invalid",
                })}
              />
              <small className="text-brandRed">{errors.phone?.message}</small>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="agency-btn-fill w-fit"
            >
              Send briefing
              <span className="agency-btn-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#F7F7F9] rounded-2xl md:block hidden overflow-hidden"
      >
        <img src={img} alt="Contact" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactForm;
