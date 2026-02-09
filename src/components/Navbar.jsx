import { Link, useLocation } from 'react-router';

function Navbar() {
	const location = useLocation();

	return (
		<>
			<div className='navbar'>
				<div className='navbar-brand'>
					<Link className='brand-link' to='/'>
						🎵 Music Player
					</Link>
				</div>
				<div className='navbar-links'>
					<Link className={`nav-link ${location.pathname == '/' ? 'active' : ''}`} to='/'>
						All Songs
					</Link>
					<Link className={`nav-link ${location.pathname == '/playlists' ? 'active' : ''}`} to='/playlists'>
						PlayLists
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
