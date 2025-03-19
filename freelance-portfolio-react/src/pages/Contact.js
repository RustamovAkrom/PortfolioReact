function Contact() {
    return (
        <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <h1 className="title pb-3 mb-5">Contact Me</h1>
        <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a></p>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control border-0 bg-secondary" id="name" placeholder="Your Name" />
                  <label for="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="email" className="form-control border-0 bg-secondary" id="email" placeholder="Your Email" />
                  <label for="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="text" className="form-control border-0 bg-secondary" id="subject" placeholder="Subject" />
                  <label for="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control border-0 bg-secondary" placeholder="Leave a message here" id="message" style={{height: '200px'}}></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </section>
    );
}

export default Contact;