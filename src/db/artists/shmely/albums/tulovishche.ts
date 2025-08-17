import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.tulovishche,
  name: 'Туловище',
  year: 1998,
  folder: '/artist/shmely/albums/1998_tulovishe.jpg',
  songs: [
    EnumSongs.neboStikh,
    {
      name: 'Железный бог',
    },
    EnumSongs.laiIllyuzii,
    EnumSongs.travi,
    EnumSongs.pervayaLyubovStikh,
    EnumSongs.tulovishchej,
    {
      name: 'Экзотика',
    },
    {
      name: 'Гнилое озеро',
    },
    EnumSongs.zhaloBeiSavalyai,
    EnumSongs.lahidno,
    EnumSongs.raspyatie,
    {
      name: 'Кораблики',
    },
    {
      name: 'Ветер и гром',
    },
    EnumSongs.neputyoviiAvtobus,
    {
      name: 'Мясной вопрос',
    },
    {
      name: 'Гимноподобная',
    },
  ],
};

export default album;
