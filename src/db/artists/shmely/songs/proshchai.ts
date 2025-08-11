import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.proshchai,
  name: ['Прощай'],
  albums: [EnumAlbums.negativProstranstva],
  authors: 'Шмель',
  text: `
Я уйду, как уходит лето,
Ты не держи меня…
Мне нельзя дождаться рассвета,
Но знай, я люблю Тебя...

ПРОСТИ
ПРОЩАЙ!
ПРОСТИ
ПРОЩАЙ!

На ресницах ожили слёзы,
Умножая блеск глаз
В небе заиграют грозы,
Только лишь для нас...

ПРОСТИ
ПРОЩАЙ!
ПРОСТИ
ПРОЩАЙ!

Пусть не тает снег, как песни,
На моей судьбе,
Всё равно мы будем вместе,
В бешеной мечте...
`,
};

export default song;
