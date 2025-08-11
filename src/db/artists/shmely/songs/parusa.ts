import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.parusa,
  name: ['Паруса'],
  albums: [EnumAlbums.toplivo],
  authors: '',
  text: `
Год за годом в царстве морей,
Всем материкам чужды мы,
Нет нигде открытых дверей,
Для разгадавших тайны судьбы.

Парус а расправит
Ковчег, с ветром споря,
Но все же небеса направят,
Туда где солнце падает в море!

Век за веком тенью планет,
Без тепла живых и любви,
А иного выхода нет,
Лишь плыть в себя от сути земли...
`,
};

export default song;
