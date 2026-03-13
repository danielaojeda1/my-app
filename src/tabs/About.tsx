import Card from "../components/Card"
import Progress from "../components/Progress"
import myphoto from "../assets/myphoto.jpeg"

const About = () => {
  return (
    <div className="container about-section">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <img
            src={myphoto}
            alt="Daniela Ojeda"
            className="about-photo"
          />
        </div>

        <div className="col-lg-7">
          <Card
            title="Hi! I'm Daniela Ojeda 👋"
            text={
              <ul className="about-list">
                <li>💻 Fifth-year Software Engineering student at the University of Buenos Aires (UBA)</li>
                <li>🇦🇷 From Argentina</li>
                <li>💼 Software Engineer Fellow at GoFundMe</li>
                <li>🤖 Interested in Backend Development and Data Science</li>
                <li>🚀 Love building projects and learning new technologies</li>
              </ul>
            }
          />
        </div>
      </div>

      <div className="career-section">
        <div className="career-box">
          <h2 className="career-title">Career progress</h2>
          <Progress percentage={87}/>
        </div>
      </div>
    </div>
  )
}

export default About