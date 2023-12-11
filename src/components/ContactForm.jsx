const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="text-4xl italic font-bold header-font">Contact Form </h1>
      <form>
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">What is your Email?</span>
          </div>
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-9/12 mx-auto">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 resize-none"
            placeholder="Type your message"
          ></textarea>
        </label>
        <button className="btn btn-ghost text-xl bg-[#6C757D] text-white mt-2">
            Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
