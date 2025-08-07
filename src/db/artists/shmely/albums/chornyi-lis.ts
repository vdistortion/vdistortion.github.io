import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.chornyiLis,
  name: 'Чорний Лiс',
  year: 2021,
  folder: '/artist/shmely/albums/2021_chornyiLis.jpg',
  streaming: { spotify: 'https://open.spotify.com/album/1AxIvEvramvGWsppStW84k' },
  songs: [
    { name: 'Гімн Чорного Лісу' },
    { name: 'Лише Мене' },
    { name: 'Мавка' },
    { name: 'Вовкулака' },
    { name: 'Водяник' },
    { name: 'Потерчата' },
    { name: 'Пісня Мавок' },
    { name: 'Мисливець' },
    { name: 'Саме Та' },
    { name: 'Колискова Чу' },
    { name: 'БісОв Кут' },
    { name: 'Чугайстер Йде' },
  ],
};

export default album;
