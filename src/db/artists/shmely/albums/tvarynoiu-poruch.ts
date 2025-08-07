import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.tvarynoiuPoruch,
  name: 'Твариною поруч',
  year: 2019,
  folder: '/artist/shmely/albums/2019_tvarynoiuPoruch.jpg',
  songs: [
    { name: 'Незвіданий острів бажань' },
    { name: 'Твариною поруч' },
    { name: 'Мрія зрада' },
    { name: 'Чорт пузар' },
    { name: 'Троянди' },
    { name: 'Щоденник' },
    { name: 'Ліхомане мене ніч' },
    { name: 'За край' },
    { name: 'Очі ворогів' },
    { name: 'Крига палас' },
    EnumSongs.lyutijSnig,
    { name: 'Наливай' },
    { name: 'Стогне янголятко' },
  ],
};

export default album;
