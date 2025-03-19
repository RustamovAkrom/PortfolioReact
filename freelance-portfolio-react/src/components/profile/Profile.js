import profile from "./../../img/profile.jpg";


function Profile() {
    return (
        <div className="col-lg-4 sticky-lg-top vh-100">
        <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
          <img className="w-100 img-fluid mb-4" src={profile} alt="John Doe profile" />
            <h1 className="text-primary mt-2">Akrom Rustamov</h1>
            <div className="mb-4" style={{ height: '22px' }}>
              <h4 className="typed-text-output d-inline-block text-light">Fullstack Developer</h4>
              <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
            </div>
            <div className="d-flex justify-content-center mt-auto mb-3">
              <a className="btn btn-secondary btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-secondary btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-secondary btn-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-secondary btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="d-flex align-items-end justify-content-between border-top">
              <a href="/" className="btn w-50 border-end">Download CV</a>
              <a href="#contact" className="btn w-50 btn-scroll">Contact Me</a>
            </div>
        </div>
      </div>
    )
}

export default Profile;