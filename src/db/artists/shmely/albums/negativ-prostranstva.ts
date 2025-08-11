import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.negativProstranstva,
  name: 'Негатив пространства',
  year: 2002,
  folder: '/artist/shmely/albums/2002_negativ.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79306' },
  songs: [
    EnumSongs.reanimator,
    EnumSongs.veraILyubov,
    EnumSongs.volchitsa,
    EnumSongs.nezhnost,
    EnumSongs.slyoznaya,
    EnumSongs.pervorodniiGrekh,
    EnumSongs.likhoraditMenyaNoch,
    EnumSongs.negativProstranstva,
    [EnumSongs.posledniiReis, { name: ['Последний рейс (Клочья)'] }],
    EnumSongs.visota,
    EnumSongs.proshchai,
    EnumSongs.cherezKrai,
    EnumSongs.braga,
    EnumSongs.vsyo,
    [EnumSongs.reanimator, { name: ['Реаниматор (Club MIX)'] }],
  ],
};

export default album;
