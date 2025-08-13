import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.zloradostnayaOpuhol,
  name: 'Злорадостная опухоль',
  year: 1999,
  folder: '/artist/shmely/albums/1999_zo.jpg',
  songs: [
    EnumSongs.biliMi,
    { name: 'Лезвие' },
    { name: 'Песенка пластилина' },
    { name: 'Злорадостная опухоль' },
    { name: 'Глисты' },
    { name: 'Шейк шейк ча ча ча' },
    EnumSongs.lechebnitsa,
    { name: 'Смирительная рубаха' },
    { name: 'Мутанты' },
    { name: 'Джаги мертвее всех мёртвых' },
    { name: 'Апокалипсис' },
    { name: 'Печальная история' },
  ],
};

export default album;
