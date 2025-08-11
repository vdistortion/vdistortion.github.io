import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.princessaBezTrusov,
  name: 'Принцесса без трусов',
  year: 2000,
  folder: '/artist/shmely/albums/2000_prinzessa.jpg',
  songs: [
    { name: 'Принцесса без трусов' },
    { name: 'Извращение и разврат' },
    EnumSongs.kronos,
    { name: 'Ива (стишок)' },
    { name: 'Я обернусь огнём' },
    { name: 'Ржавый киборг' },
    { name: 'Шуловье' },
    { name: 'Поебень-трава' },
    { name: 'Ещё стишок' },
    { name: 'Зомби-буги' },
    { name: 'По маслу' },
    { name: 'Молодильный сок' },
    EnumSongs.tsveti,
    { name: 'Стишочек' },
    { name: 'Патология' },
    { name: 'Зарево' },
    { name: 'Панк-диктатура' },
    { name: 'Крах и гибель' },
    { name: 'Грузовик-убийца (сказка)' },
  ],
};

export default album;
