import homeimg from "../img/img1-home.jpg";

function Home() {
  return (
    <main>
      <div className="banner">
        <h1>Ea Francisco</h1>
        <h3>Freelance Web Designer and Content Manager</h3>
        <button onclick="location.href='https://eafrancisco.com/portfolio'" type="button"> View My Portfolio</button>
      </div>
      {/* <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-icons">
          <SiAdobephotoshop size={70}/>
          <SiAdobeillustrator size={70} />
          <SiAdobeaftereffects size={70} />
          <SiAdobexd size={70} />
          <AiFillHtml5 size={70} />
          <DiCss3 size={70} />
          <SiJavascript size ={70} />
        </div>
      </div> */}

      <div className="summary">
        <div className="home-img">
          <img src={homeimg} alt="design home" />
        </div>
        <div className="summary2">
          <h3>I'm a freelance web designer based in Toronto.</h3>
          <p>Need someone to help you create a functional yet creative website for your business? With my 5 years of experience in branding and client management, I guarantee excellent results. </p>
        </div>
      </div>

    </main>
  );
}

export default Home;
