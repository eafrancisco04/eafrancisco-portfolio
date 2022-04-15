import { SiAdobephotoshop } from "react-icons/si";

function Home() {
  return (
    <main>
      <div className="banner">
        <h1>Ea Francisco</h1>
        <h3>Freelancer Web Designer and Content Manager</h3>
        <button>View My Portfolio</button>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-icons">
          <SiAdobePhotoshop />
        </div>
      </div>

    </main>
  );
}

export default Home;
