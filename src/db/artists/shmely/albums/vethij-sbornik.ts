import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vethijSbornik,
  name: 'Ветхий сборник',
  year: 2005,
  folder: '/artist/shmely/albums/2005_vs.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79303' },
  songs: [
    EnumSongs.pomolis,
    { name: 'У Гаю' },
    EnumSongs.krizhanaVoda,
    { name: 'Диво' },
    { name: 'Веснянка' },
    { name: 'Мiсяцъ' },
    { name: 'О-О-О' },
    EnumSongs.kakNaPlakheSvyatoi,
    { name: 'Смерть' },
    EnumSongs.vyuga,
    { name: 'Дуня' },
    { name: 'Шуловье' },
    EnumSongs.psikhoz,
    { name: 'Спазмы рока' },
    { name: 'Завiтай' },
    EnumSongs.obessilenniiPrakh,
    EnumSongs.saprofag,
  ],
};

export default album;
