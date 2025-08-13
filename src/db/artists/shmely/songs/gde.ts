import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.gde,
  name: ['Где?'],
  albums: [EnumAlbums.moskovskayaYarmarkaUdovolstvij],
  authors: 'Шмель, Лёс - Шмель',
  text: `
Чёрная роса на твоей груди,
Острая коса - погоди!

Тук-тук - в двери бьётся - моя фея!
Тук-тук - сердце рвётся - где я?
Тук-тук - в двери бьётся - моя фея!
Тук-тук - сердце рвётся - где я?

Но ты заперт на жизнь снаружи
И богами с небес не обнаружена
Оглянись вокруг, рядом плачет бес -
Твой единственный друг.

Чёрная слеза на твоих губах
Жмет на тормоза - страх!
`,
};

export default song;
