import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.chornyiLis,
  name: 'Чорний Лiс',
  year: 2021,
  folder: '/artist/shmely/albums/2021_chornyiLis.jpg',
  streaming: { spotify: 'https://open.spotify.com/album/1AxIvEvramvGWsppStW84k' },
  songs: [
    EnumSongs.himnChornohoLisu,
    EnumSongs.lysheMene,
    EnumSongs.mavka,
    EnumSongs.vovkulaka,
    EnumSongs.vodianyk,
    EnumSongs.poterchata,
    EnumSongs.pisniaMavok,
    EnumSongs.myslyvets,
    EnumSongs.sameTa,
    EnumSongs.kolyskovaChu,
    EnumSongs.bisovKut,
    EnumSongs.chuhaisterYde,
  ],
};

export default album;
