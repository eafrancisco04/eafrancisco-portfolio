import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import image from "../img/desk.jpg";

function Contact() {
    return(
        <main>
            <div className="contact">
                <div className="contact">
                    <div className="social"> 
                        <div className="profile">
                            <img src={image} className="img-contact" />
                        </div>

                        <div className="form">
                        <h1>Get in Touch</h1>
                            <div className="socials">
                                <AiFillGithub size={50}/>
                                <BsLinkedin size={50} />
                                <AiFillInstagram size={50} />
                                <AiFillBehanceCircle size={50} />
                            </div>
                            <div>
                                <div class="item name">
                                    <label for="register-firstName" class="form-label">Name: </label>
                                    <input type="text" class="form-control" />
                                </div>
                            
                                <div class="item email">
                                    <label for="register-email" class="form-label">Email: </label>
                                    <input type="email" class="form-control" />
                                </div>

                                <div class="item number">
                                    <label for="register-firstName" class="form-label">Contact Number: </label>
                                    <input type="text" class="form-control" />
                                </div>
                                
                                <div class="item message">
                                    <label for="register-email" class="form-label">Your Message:</label>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                                <div class="item button">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;