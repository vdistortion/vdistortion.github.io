import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.trahniNebo,
  name: 'Трахни небо',
  year: 2000,
  folder: '/artist/shmely/albums/2000_nebo.jpg',
  songs: [
    EnumSongs.laiIllyuzii,
    EnumSongs.vyuga,
    EnumSongs.psikhoz,
    [EnumSongs.solnishkoViidet, { name: ['Солнышко'] }],
    EnumSongs.tulovishchej,
    EnumSongs.kakNaPlakheSvyatoi,
    { name: 'Ганьба' },
    EnumSongs.alliluia,
    EnumSongs.raspyatie,
    EnumSongs.trahniNebo,
    EnumSongs.divchinaKulya,
    { name: 'Завiтай зачiкай' },
    { name: 'Фашистский мотоцикл' },
    { name: 'Травы' },
  ],
};

export default album;
