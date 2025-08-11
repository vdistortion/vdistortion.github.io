import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.posledniiReis,
  name: ['Последний рейс'],
  albums: [EnumAlbums.negativProstranstva],
  authors: 'Шмель',
  text: `
Большое небо
Моё большое небо в огне
Мечтал на небо
Но вот железо тянет к земле

Последний рейс
Затмение

Огромное небо
Огромное небо во мне
По железным склепам
Вместе с небом к горячей земле

Последний рейс
Затмение
Это я возвращаюсь к тебе!
`,
};

export default song;
