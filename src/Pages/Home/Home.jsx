import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Introduce Myself</h1>

      <div className="content-container">
        <div className="img-container"></div>
        
        <footer className="footer-text">
            <h3>king ketsaraporn.</h3>
          I am a Computer Science student (CSI) at Sripatum University ,
          developing a web application using Vite and React. The app features
          ball animation, image swapping, a calculator, a cart system, and
          components like Counter, Timer, and a Todo list. I'm focused on
          enhancing user experience and learning new technologies.
        </footer>
      </div>
    </div>
  );
}

export default Home;
