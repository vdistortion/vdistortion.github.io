import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.dorogaya,
  name: ['Дорогая'],
  albums: [EnumAlbums.durackiyeKnizhki, EnumAlbums.zhazhda],
  authors: 'Шмель',
  text: `
Я умираю, сегодня праздник мой
Я умираю, мне хорошо, но..
Я умираю, но не так как все, э...

Мне остается одно - смотреть в окно...
Мне остается одно - смотреть в окно...

О дорогая, ты не такая как все,
Дорогая, ты просто лучше всех
Дорогая моя ведь сестра, а...

Я умираю, сегодня праздник мой
Я умираю, мне хорошо, но..
Я умираю, но не так как все, э...
`,
};

export default song;
