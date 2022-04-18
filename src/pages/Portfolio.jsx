import music from "../img/music-player.png";
import kanji from "../img/kanji-app.png";
import gallery from "../img/gallery-app.png";


function Portfolio() {
    return(
        <main>
            <div className="content">
                <section>
                <h2>My Portfolio</h2>
                <p>A brief summary of my background and past jobs.</p>
                </section>
                
                <div className="portfolio">
                    <div className="work">
                        <a href="https://github.com/eafrancisco04/music-player-project"><h3>Music App</h3></a>
                        <img src={music} alt="music app preview" className="sample" />
                    </div>

                    <div className="work">
                        <a href="https://github.com/eafrancisco04/kanji-api"><h3>Kanji App</h3></a>
                        <img src={kanji} alt="kanji app preview" className="sample" />
                    </div>

                    <div className="work">
                        <a href="https://wddm120-a2.github.io/PhotoGalleryApp/gallery.html"><h3>Gallery Website</h3></a>
                        <img src={gallery} alt="gallery app preview" className="sample" />
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default Portfolio;