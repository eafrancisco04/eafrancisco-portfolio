import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";

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
          <SiAdobephotoshop size={70}/>
          <SiAdobeillustrator size={70} />
          <SiAdobeaftereffects size={70} />
          <SiAdobexd size={70} />
        </div>
      </div>

    </main>
  );
}

export default Home;
