import Navbar from '../component/Navbar';
import './Home.css';
import '../NCERT Class 11 Physics Book (Part I).pdf';
import Login from '../component/Login.jsx';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    const {isAuthenticated } = useAuth0();
    return (
        <>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                         <h1>
                         WHITE PAGES 
                        </h1>
                        <p>Physics</p>
                        <div className='common'>
                        <h5>If you want to accesss book</h5>
                        {!isAuthenticated ?
                            <Login></Login> :
                          window.location.href= "/explore"
                        }
                        </div>
                       
            
                        <div className='previewlink'>
                            <li class="nav-item">
                                <a class="nav-link" href="../NCERT Class 11 Physics Book (Part I).pdf">Preview</a>
                                <li class="nav-item">
                                <a class="nav-link authorlink" href="/">Author</a>
    
                            </li>

                            </li>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;