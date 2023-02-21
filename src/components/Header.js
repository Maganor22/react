import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/pendu"><button>Pendu</button></Link></li>
                    <li><Link to="/background"><button>Background</button></Link></li>
                </ul>
            </nav>
                <Outlet />
        </div>
    )
}

export default Header;