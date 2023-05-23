import './Nvabar.css';

const Navbar = () => {

    return (
        <>

            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIxTajLGNvJYkn41Ts26729qowvdc2eo52g&usqp=CAU" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                            The Bookman's
                    </a>


                    <ul class="nav justify-content-end">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://www.researchgate.net/publication/319947124_The_Importance_of_Physics_Text_Book_in_Connecting_Concepts_and_Principles_with_Character_Values_and_Social_Attitude_as_well_as_Spiritual_Attitude">Why a new book on Physics?</a>
                        </li>

                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Navbar;