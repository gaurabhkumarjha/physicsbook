import './Read.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Read = () => {

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                    <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Index</button>
                        <LoremIpsum p={100} />
                       

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Index</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                               1 coordinate geometery
                            
                            <ul>

                                <li>
                                x chapter 1-15
                                </li>
                                <li>
                                y chapter 15-20 
                                </li>
                            </ul>
                               
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read;