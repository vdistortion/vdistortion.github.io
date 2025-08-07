import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.faktor,
  name: 'Фактор',
  year: 2022,
  folder: '/artist/shmely/albums/2022_faktor.jpg',
  streaming: { spotify: 'https://open.spotify.com/album/5EzM2ff6kmfEdNixIuhFJe' },
  songs: [
    { name: 'Фактор' },
  ],
};

export default album;
