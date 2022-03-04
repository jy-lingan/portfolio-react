import "./Profile.css"

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
                        <button className="btn btn-secondary btn-lg disabled">
                            {""}                        
                            CV {" "}
                        </button>
                        <a href="#" download={'Jimmy jimdev.pdf'}>
                            <button className="btn highlighted-btn">Descargar</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile

