import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.territoriyaNol,
  name: 'Территория ноль',
  year: 2018,
  folder: '/artist/shmely/albums/2018_territoriyaNol.jpg',
  songs: [
    { name: 'Без имён' },
    { name: 'Банит жизнь' },
    { name: 'Кукольный домик' },
    { name: 'Территория ноль' },
    { name: 'Солнечный чёртик' },
    { name: 'Хозяин не придёт' },
    EnumSongs.odinRazVZhizn,
    { name: 'Лють' },
    { name: 'Трансмиссия' },
    { name: 'Шкiра Є Лейба' },
    { name: 'В деле' },
    { name: 'Сэйшн Вуду' },
  ],
};

export default album;
