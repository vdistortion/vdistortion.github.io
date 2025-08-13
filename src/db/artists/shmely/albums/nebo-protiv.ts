import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.neboProtiv,
  name: 'Небо против',
  year: 2009,
  folder: '/artist/shmely/albums/2009_nebo-protiv.jpg',
  songs: [
    { name: 'Жги' },
    EnumSongs.pryotTakPri,
    EnumSongs.koteikaNaTryokhNozhkakh,
    EnumSongs.snovaProLyubov,
    { name: 'Небо против' },
    EnumSongs.tsvetochniiMedved,
    EnumSongs.lisayaGora,
    [EnumSongs.kolibelnaya, { name: ['Колыбельная++'] }],
    { name: 'Аель-Ауа' },
    { name: 'В 2009 году' },
    EnumSongs.bisovKut,
    { name: 'Доители изнурённых жаб (кавер на песню А.Лаэртского' },
  ],
};

export default album;
