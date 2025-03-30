import '../layout/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <ul>
            <li><Link className="active" to="#home">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>

            {/* <li><a href="">About</a></li> */}
        </ul>

    )
}

export default Header