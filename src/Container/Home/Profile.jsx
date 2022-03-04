import "./Profile.css"

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <a href="#">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <br />
                    <a href="#">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <br />
                    <a href="#">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <br />
                    <a href="#">
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
            </div>
        </div>
    )
}

export default Profile

