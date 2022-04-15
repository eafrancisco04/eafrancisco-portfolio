import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Header() {

    return(
        <header>
            <ul class="menu">
                <li><Link to="/" class="nav-link">Home</Link></li>
                <li><Link to="/portfolio" class="nav-link">Portfolio</Link></li>
                <li><Link to="/about-me" class="nav-link">About Me</Link></li>
                <li><Link to="/contacts" class="nav-link">Contact</Link></li>

                <small>
                    2022 Elizabeth Ann Francisco © All Rights Reserved.
                </small>

                {/* search bar
                <form class="d-flex justify-content-around w-25">
                    <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/contacts" element={<Contact />} />
            </Routes>
        </header>

    )

}

    export default Header;