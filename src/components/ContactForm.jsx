import React, { useContext } from "react";
import img from "../assets/images/contact-form.webp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../data/constant";
import { sendContactEmail } from "../utils/sendContactEmail";

const ContactForm = ({ headline, id, variant = "default", kicker, intro }) => {
  const isDark = variant === "dark";
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
  const fieldClass = isDark
    ? "placeholder:text-white/40 outline-none p-2 bg-transparent border-b border-white/20 w-full text-white"
    : "placeholder:text-white outline-none p-2 bg-transparent border-b w-full";

  return (
    <div
      id={id}
      className={`rounded-2xl grid md:grid-cols-2 gap-3 scroll-mt-28 ${
        isDark ? "py-0" : "wrapper py-[4rem]"
      }`}
    >
      <div
        data-aos="fade-right"
        className={`${
          isDark
            ? "bg-white/[0.04] border border-white/10"
            : "bg-purpleColor"
        } text-white p-8 sm:p-10 rounded-2xl`}
      >
        {kicker && <p className="section-kicker mb-3">{kicker}</p>}
        <h3 className={`section-heading ${isDark ? "text-white" : "!text-white"}`}>
          {headline ? headline : "Tell us what you need to ship."}
        </h3>
        {intro && (
          <p className="text-white/70 mt-4 leading-relaxed">{intro}</p>
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
            <small className="text-white/80">{errors.name?.message}</small>
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
            <small className="text-primary">{errors.email?.message}</small>
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
            <small className="text-primary">{errors.message?.message}</small>
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
              <small className="text-primary">{errors.phone?.message}</small>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isDark
                  ? "agency-btn-fill w-fit"
                  : "btn rounded bg-white text-black w-full hover:bg-primary hover:text-white hover:shadow-primary/20"
              }
            >
              {isDark ? (
                <>
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
                </>
              ) : (
                "Send briefing"
              )}
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
