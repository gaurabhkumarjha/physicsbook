import './ExploreBooks.css';
import Logout from '../component/Logout';
import Login from '../component/Login';
import { useAuth0 } from "@auth0/auth0-react";



const Explore = () => {
    const { isAuthenticated } = useAuth0();
    function gotoreadbook(){

        window.location.href="/explore/books/read";
    }
            return (
                <>
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIxTajLGNvJYkn41Ts26729qowvdc2eo52g&usqp=CAU" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                                The Bookman's
                            </a>


                            <ul class="nav justify-content-end">

                                <li class="nav-item">
                                    <a class="nav-link" href="/explore/books">Explore Books</a>
                                </li>

                                <li class="nav-item">
                                    {isAuthenticated ?
                                        <Logout></Logout> :
                                        <Login></Login>
                                    }
                                </li>


                            </ul>
                        </div>
                    </nav>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-12 mx-auto">

                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQ2ADG62jshL4fGoj4t9frJtSS9rs7xE1XQ&usqp=CAU" class="d-block w-50" alt="..." onClick={gotoreadbook}/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8T6zt3KXDtZE-fYxGP68IJqF2oeKrBVXc1A&usqp=CAU" class="d-block w-50" alt="..." onClick={gotoreadbook}/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TsbAb50mBHla38Rn5g2MlKQZ7t_13G1pEQ&usqp=CAU" class="d-block w-50" alt="..." onClick={gotoreadbook}/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

export default Explore;