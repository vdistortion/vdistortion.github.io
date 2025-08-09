import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.purga,
  name: 'Пурга',
  year: 1998,
  folder: '/artist/shmely/albums/1998_purga.jpg',
  songs: [
    {
      name: 'Ай да!',
    },
    EnumSongs.groza,
    EnumSongs.toska,
    EnumSongs.lakaiOtravu,
    {
      name: 'Искушение',
    },
    EnumSongs.tenNeizvestnoiZvezdi,
    {
      name: 'Невесёлая сказка',
    },
    {
      name: 'Виртуальный самолёт',
    },
    {
      name: 'Барыня',
    },
    {
      name: 'Молодая',
    },
    EnumSongs.lyutijSnig,
    {
      name: 'Логово',
    },
    {
      name: 'Брага',
    },
    EnumSongs.zamokIzTuch,
    {
      name: 'Вода',
    },
    {
      name: 'Губы - яд',
    },
    {
      name: 'Будто сказка',
    },
  ],
};

export default album;
