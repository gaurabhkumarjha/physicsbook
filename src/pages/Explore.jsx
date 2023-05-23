import './Explore.css';
import Logout from '../component/Logout';
import Login from '../component/Login';
import { useAuth0 } from "@auth0/auth0-react";
const Explore = () => {
    const {isAuthenticated } = useAuth0();
    function redirecttobookspage(){
        window.location.href= "/explore/books";
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


                        <h4>
                            WHITE PAGES
                        </h4>
                        <p className="readingspace">No Books at your reading space...</p>
                        <button type="button" class="btn btn-outline-primary" onClick={redirecttobookspage}>Explore Books</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;