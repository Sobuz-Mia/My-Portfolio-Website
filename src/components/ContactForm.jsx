const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="text-4xl italic font-bold header-font">Contact Form </h1>
      {/* Contact form start here */}
      <form action="https://formspree.io/f/xvoepkgg" method="POST">
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">What is your Email?</span>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Example@gmail.com"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 resize-none"
            placeholder="Type your message"
            name="message"
          ></textarea>
        </label>
        <button type="submit" className="btn btn-ghost text-xl bg-[#6C757D] text-white mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
