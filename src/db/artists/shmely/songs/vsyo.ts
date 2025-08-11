import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.vsyo,
  name: ['Всё'],
  albums: [EnumAlbums.negativProstranstva, EnumAlbums.byuroVolshebnikhUslug],
  authors: 'Шмель',
  text: `
Вот ничего не осталось у Принца Всего,
Накинул дырявую тучку на горб,
Пошел по извилинам дымным стихом,
На запах судьбы, как беспамятный вздор,
Скупыми полями запретных пространств,
Запястьями бога прикрыв протяженность,
Космических вёсен статический транс,
Снимая молитвой с петли напряженность.
Был Принцем Всего, а стал Ничего,
Но тему всем мясом души он просек,
Быть тенью живого всего на земле -
Вот это и есть - иметь все...
`,
};

export default song;
