import "./Profile.css"
import jimmys from "../../Assets/Home/jimmy.jpg"
const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="">

                        <a href="#" className="facebook">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="twitter">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="github">
                            <i class="bi bi-github"></i>
                        </a>
                    </div>

                    <div className="profile-img col-sm-4">
                        <span className="profile-img-container">
                            {" "}
                            Hola, soy <span className="jim-text">Jimmy</span>
                        </span>
                    </div>

                    <div className="profile-detalis-role">
                        <span className="primary-text">
                            {" "}
                            <h1 className="h1-jimmy">Desallador web </h1>
                            <h2 className="h2-jimmy">Front-end developer</h2>
                        </span>
                        <span className="secondary-text">
                            {" "}
                            <h3 className="h3-jimmy">
                                {" "}
                                Desarrollo de aplicaciones web y móviles
                            </h3>
                        </span>
                    </div>
                    <div className="profile-detalis-description">
                        {/* <button className="btn btn-secondary btn-lg disabled">
                            {""}                        
                            CV {" "}
                        </button> */}
                        <a href="#" download={'Jimmy jimdev.pdf'}>
                            <button className="btn btn-dark">Descargar CV</button>
                        </a>
                    </div>

                    <div className="profile-picture">
                        <div className="profile-picture-background">
                            <img className="jimmys" src={jimmys} alt="jimmy" />
                        </div>
                    </div>

                    <div className="profile-detalis-skills">
                        <span className="primary-text">
                            {" "}
                            <h1 className="h1-jimmy">Habilidades</h1>

                        </span>
                        <div className="skills">
                            <span className="html5">
                                <i class="bi bi-filetype-html"></i>
                            </span>
                            <span className="css3">
                                <i class="bi bi-filetype-css"></i>
                            </span>
                            <span className="javascript">
                                <i class="bi bi-js"></i>
                            </span>
                            <span className="reactjs">
                                <i class="bi bi-filetype-jsx"></i>
                            </span>
                            <span className="nodejs">
                                <i class="bi bi-filetype-js"></i>
                            </span>
                            <span className="python">
                                <i class="bi bi-filetype-py"></i>
                            </span>
                            <span className="bootstrap">
                                <i class="bi bi-bootstrap"></i>
                            </span>
                            <span className="git">
                                <i class="bi bi-git"></i>
                            </span>
                            <span className="github">
                                <i class="bi bi-github"></i>
                            </span>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile

