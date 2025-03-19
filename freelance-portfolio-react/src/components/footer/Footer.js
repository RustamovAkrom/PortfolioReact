function Footer() {
    return (

        <section className="wow fadeIn" data-wow-delay="0.1s">
        <div className="bg-secondary text-light text-center p-5">
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-dark btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-dark btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark btn-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-dark btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-light px-3 border-end" href="/">Privacy</a>
            <a className="text-light px-3 border-end" href="/">Terms</a>
            <a className="text-light px-3 border-end" href="/">FAQs</a>
            <a className="text-light px-3" href="/">Help</a>
          </div>


          <p className="m-0">&copy; All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
      </section>
    );
}
export default Footer;