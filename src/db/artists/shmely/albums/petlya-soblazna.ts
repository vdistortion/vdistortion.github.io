import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.petlyaSoblazna,
  name: 'Петля соблазна',
  year: 1998,
  folder: '/artist/shmely/albums/1998_ps_.jpg',
  songs: [
    EnumSongs.vyuga,
    EnumSongs.psikhoz,
    EnumSongs.solnishkoViidet,
    {
      name: 'Весна покойница',
    },
    EnumSongs.kakNaPlakheSvyatoi,
    {
      name: 'Ганьба',
    },
    EnumSongs.alliluia,
    EnumSongs.obessilenniiPrakh,
    {
      name: 'Бiсов гай',
    },
    EnumSongs.trahniNebo,
    EnumSongs.divchinaKulya,
    {
      name: 'Завiтай',
    },
    {
      name: 'Чёрная исповедь',
    },
    {
      name: 'Фашистский мотоцикл',
    },
    {
      name: 'Понедельник',
    },
  ],
};

export default album;
