import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.byuroVolshebnikhUslug,
  name: 'Бюро волшебных услуг',
  year: 2017,
  folder: '/artist/shmely/albums/2017_byuroVolshebnikhUslug.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/7yfioAU7ZaF5AmeOgSHOM9',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_nOT3PW8Sy9YftLRTCFVQX24HFo0lNVTKk',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_mZWtf9dzLwjMI-Zon4IpmdZhc47TtOQuY',
    yandexMusic: 'https://music.yandex.ru/album/4090273',
  },
  songs: [
    EnumSongs.agoniya,
    EnumSongs.bomLbom,
    { name: 'Всё' },
    EnumSongs.ivolga,
    { name: 'Иди' },
    EnumSongs.kronos,
    EnumSongs.lakaiOtravu,
    { name: 'Лёд' },
    { name: 'Молодая' },
    { name: 'Тишина и покой' },
    EnumSongs.sadizm,
    EnumSongs.trupniePyatna,
    { name: 'Хули пули праху' },
    { name: 'Бюро волшебных услуг' },
    { name: 'Игра голова' },
    { name: 'Кусай' },
    { name: 'Лафа' },
    { name: 'Я увольняюсь' },
  ],
};

export default album;
