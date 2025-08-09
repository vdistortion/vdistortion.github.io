import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.bogi,
  name: ['Боги'],
  albums: [EnumAlbums.vulkanizaciyaDushi, EnumAlbums.agressivnyjPokoj],
  authors: 'А.Шмелёв',
  text: `
Древний праздник вызываем,
Черная осень приходи.
Вместе с нею прилетали,
Все заветные грехи.

Открывай двери сладким снадобьям
Отдайся нам!
Открывай путь своим мечтам
И отдайся нам,
Отравленным Богам!
Нам, нам, нам...

Было счастье вместо горя,
Слились все в одной любви,
Словно ожило все поле
До нежданной до зари.

Вот пришел рассвет,
Назад дороги нет.
Это не игра,
Боги жалят навсегда.
`,
};

export default song;
