import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.krizhanaVoda,
  name: ['Крижана вода'],
  albums: [EnumAlbums.vulkanizaciyaDushi, EnumAlbums.vethijSbornik],
  authors: 'Шмелёвы',
  clipYouTubeId: 'oOpbBIwgXRg',
  text: `
На білом рушникові
Танцювала люба долюшка
Закривала у хатині мати
І зло принесе тобі волюшка
Но повний Місяць двері відчинив

Крижана вода
Блукала, мене гукала,
Крижана вода
Співала мені, співала
Та до себе забрала

В безодню геть думки
Приходило Сонце - не впізнало
Заховала спрага помилки
На дні глибокому себе шукала
А повний Місяць не зрадів
`,
};

export default song;
