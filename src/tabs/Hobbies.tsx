import Card from '../components/Card'
import ledzeppelin from '../assets/ledzeppelin.jpg'
import surfing from '../assets/surfing.jpeg'
import merienda from '../assets/merienda.jpg'
import shrek2 from '../assets/shrek2.jpg'

const Hobbies = () => {
  return (
    <div className="container-fluid hobbies-section">
      <div className="row g-4 px-5">

        <div className="col-lg-3">
          <Card
            title="🎵 Music"
            text={
              <>
                <p>
                  I love listening to rock music from the 70's. My favorite band is <b>Led Zeppelin</b>.
                </p>

                <img
                  src={ledzeppelin}
                  className="hobby-img"
                  alt="Led Zeppelin"
                />

                <p className="mt-3">My favorite song:</p>

                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/FTQbiNvZqaY"
                  title="Africa"
                  allowFullScreen
                ></iframe>
              </>
            }
          />
        </div>

        <div className="col-lg-3">
          <Card
            title="🌊 Surfing"
            text={
              <>
                <p>
                  I really enjoy surfing whenever I can. Being in the ocean helps me disconnect and recharge.
                </p>

                <img
                  src={surfing}
                  className="hobby-img"
                  alt="Surfing"
                />
              </>
            }
          />
        </div>

        <div className="col-lg-3">
          <Card
            title="🍪 Coffee & Merienda"
            text={
              <>
                <p>
                  One of my favorite moments of the day is having merienda with a coffee and something sweet.
                </p>

                <img
                  src={merienda}
                  className="hobby-img"
                  alt="Coffee"
                />
              </>
            }
          />
        </div>

        <div className="col-lg-3">
          <Card
            title="🎬 Movies"
            text={
              <>
                <p>
                  My favorite movie is <b>Shrek 2</b> — I've watched it so many times that I know all the dialogues by heart.
                </p>

                <img
                  src={shrek2}
                  className="hobby-img"
                  alt="Shrek 2"
                />
              </>
            }
          />
        </div>

      </div>
    </div>
  )
}

export default Hobbies