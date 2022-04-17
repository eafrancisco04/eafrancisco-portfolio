import Data from "../components/Data";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

function Resume() {
    return(
        <main>
            <div className="content">
                <h1>My Resume</h1>

                <div className="history">
                    <div className="work-experience">
                        <h2>Work Experience</h2>
                        <Data subhead="Valher Media" head="Podmaster" date="April 2021 - Oct 2021" descr="Lead a team to successfully launch multiple podcasts."/>
                        <Data subhead="M Square Media" head="Content Writer" date="July 2019 - Oct 2020" descr="Rebranded clients' websites and created written content."/>
                        <Data head="Freelance Content Manager" subhead="Self-Employed" date="Feb 2018 - Present" descr="Assist clients in creating their brand and manage their online platforms."/>
                        <Data head="Editorial Assistant" subhead="Hinge Inquirer" date="March 2017 - March 2018" descr="Managed and created content for Multisport.ph"/>

                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <Data head="Humber College" subhead="Toronto" date="2021 - Present" descr="Web Design and Development  Certificate of Achievement"/>
                        <Data head="De La Salle University" subhead="Manila" date="2013 - 2016" descr="Bachelor of Arts in International Studies, Major in European Studies."/>
                    </div>
                </div>

                <div className="skill">
                    <div className="design">
                        <h2>Design</h2>
                        <SiAdobephotoshop size={50}/>
                        <SiAdobeillustrator size={50} />
                        <SiAdobeaftereffects size={50} />
                        <SiAdobexd size={50} />
                    </div>
                    <div className="coding">
                        <h2>Languages</h2>
                        <div className="icons">
                        <AiFillHtml5 size={50} />
                        <DiCss3 size={50} />
                        <SiJavascript size ={50} />
                        </div>
                    </div>
                    <div className="knowledge">
                        <h2>Other Skills</h2>
                        <ul>
                            <li>SEO</li>
                            <li>Social Media Management</li>
                            <li>Wordpress</li>
                            <li>Copywriting</li>
                            <li>Content Writing</li>
                        </ul>
                    </div>

                </div>

                <div className="testimonials">
                    <h2>Testimonials</h2>
                </div>

                </div>
        </main>
    )
}

export default Resume;