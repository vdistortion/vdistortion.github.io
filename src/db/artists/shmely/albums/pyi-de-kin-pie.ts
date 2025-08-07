import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.pyiDeKinPie,
  name: 'Пий, де-кiнь п\'є',
  year: 2022,
  folder: '/artist/shmely/albums/2022_pyiDeKinPie.jpg',
  streaming: { spotify: 'https://open.spotify.com/album/2gWRH9oJlyhAhcqQhERU27' },
  songs: [
    { name: 'Пий, де-кiнь п\'є' },
  ],
};

export default album;
