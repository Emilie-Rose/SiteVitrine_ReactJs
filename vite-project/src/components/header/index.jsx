import { Link, Outlet } from 'react-router-dom';

function Header() {

    return (
        <div>
            <header>
                <nav>
                    <Link to="/" style={{ color: '#6D214F', marginRight: '10px' }} ><strong>Accueil</strong></Link>
                    <Link to="/men" style={{ color: '#6D214F', marginRight: '10px' }} ><strong>Homme</strong></Link>
                    <Link to="/women" style={{ color: '#6D214F', marginRight: '10px' }}><strong>Femme</strong></Link>
                </nav>
            </header>
            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default Header;
