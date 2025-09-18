import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.khaosZhelanii,
  name: 'Хаос желаний',
  year: 2022,
  folder: '/artist/shmely/albums/2022_khaosZhelanii.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/6BcUVkuIqoQh5j2ePVjJjo',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_lBZybdvlbfe7TC3-tkDwXvyeA6ROeVolw',
    amazonMusic: 'https://music.amazon.com/albums/B09V9M9KW7',
    soundcloud: 'https://soundcloud.com/shmieli/sets/xaos-zhelanij',
    yandexMusic: 'https://music.yandex.ru/album/21757370',
  },
  songs: [
    EnumSongs.ptitsegadanie,
    { name: 'Одноокий синий заяц' },
    { name: 'Найкраща сила' },
    { name: 'Ева Франки' },
    { name: 'Тринадцать' },
    { name: 'Женщина-река' },
    { name: 'Холод моря' },
    EnumSongs.chastushka,
    { name: 'Сон из меня вон' },
    { name: 'Хаос желаний' },
    { name: 'На Веселцi' },
    { name: 'С Днём рождения, Вова Иванов (bonus track)' },
    { name: 'Alcohol Is Part of Me (bonus track)' },
  ],
};

export default album;
