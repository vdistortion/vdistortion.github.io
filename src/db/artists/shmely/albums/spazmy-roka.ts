import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.spazmyRoka,
  name: 'Спазмы рока',
  year: 2001,
  folder: '/artist/shmely/albums/2001_spazmi.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg',
    yandexMusic: 'https://music.yandex.ru/album/3444133',
  },
  songs: [
    EnumSongs.yaVselennaya,
    EnumSongs.maketMiraSchastya,
    EnumSongs.naLadoniPlaneta,
    EnumSongs.ogonNashSvet,
    EnumSongs.chyornayaVoda,
    [EnumSongs.patologoanatom, { name: ['Патологоанатом (Клочья)'] }],
    EnumSongs.novayaReligiya,
    EnumSongs.zhdat,
    EnumSongs.moyaLyubimaya,
    { name: 'Невесёлая сказка' },
    EnumSongs.saprofag,
    EnumSongs.spazmiRoka,
    [EnumSongs.volosy, { name: ['На солнце волосы'] }],
    [EnumSongs.zavtraNaVipisku, { name: ['Завтра на выписку в ад (Клочья)'] }],
    EnumSongs.vsyoVoImyaCheloveka,
    { name: 'Бой' },
  ],
};

export default album;
