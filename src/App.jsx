import { BrowserRouter, Routes, Route } from 'react-router';
import { MusicProvider } from './contexts/MusicContext';
import MusicPlayer from './components/MusicPlayer';
import AllSongs from './components/AllSongs';
import PlayLists from './components/PlayLists';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<MusicProvider>
					<div className='app'>
						<Navbar />
						<main className='app-main'>
							<div className='player-section'>
								<MusicPlayer />
							</div>
							<div className='content-section'>
								<Routes>
									<Route path='/' element={<AllSongs />} />
									<Route path='/playlists' element={<PlayLists />} />
								</Routes>
							</div>
						</main>
					</div>
				</MusicProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
