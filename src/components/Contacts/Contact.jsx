import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      {/* Section Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <span className="label">communication</span>
          <h2 className="contact-title">Get In Touch</h2>
        </div>
      </div>

      <div className="contact-content">
        {/* Information Card */}
        <div className="contact-info">
          <h3>Let's build something together.</h3>

          <p>
            I am currently available for Frontend Developer roles, React
            project development, and collaborative web engineering work.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="email-icon">
                <MdOutlineEmail />
              </span>

              <span>ibram.a.nassif@gmail.com</span>
            </div>

            <div className="contact-detail">
              <span className="location-icon">
                <IoLocationOutline />
              </span>

              <span>Egypt // Remote Ready</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message / Opportunity Details
              </label>

              <textarea
                id="message"
                placeholder="Outline your message or project details..."
              />
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;