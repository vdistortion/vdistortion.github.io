import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vosstanoviteChelovechestvo,
  name: 'Восстановите человечество',
  year: 2011,
  folder: '/artist/shmely/albums/2011_vosstanovite.jpg',
  songs: [
    EnumSongs.aistNadInkubatorom,
    EnumSongs.vKlochya,
    { name: 'Прах, дух и страх' },
    EnumSongs.bioMotor,
    { name: 'Бог-телевизор' },
    EnumSongs.krasota,
    EnumSongs.khvor,
    EnumSongs.otkroveniya,
    { name: 'Без души и страсти' },
    EnumSongs.naMogileLyubvi,
    EnumSongs.prorvyomsya,
    { name: 'Сваи' },
    EnumSongs.netVibora,
    { name: 'Искусственный ад' },
    EnumSongs.yaVsyoNarushil,
    EnumSongs.golosPalach,
    { name: 'Дом строй' },
    { name: 'Фон' },
    EnumSongs.chuzhoi,
    EnumSongs.shans,
    { name: 'Восстановите человечество' },
  ],
  info: ``,
};

export default album;
