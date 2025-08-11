import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.avtomobilITi,
  name: ['Автомобиль и ты'],
  albums: [EnumAlbums.toplivo],
  authors: '',
  text: `
Хватит пить и плакать,
Лежа на матраце,
Лучше ехать лишь по знакам,
По безлюдной трассе...

Уедем, Уедем, За 666 миль...
Уедем, Уедем,
Только ты и автомобиль...
Автомобиль и Ты!

Хватит врать и верить,
Обвиняя всех!
Закрывай в машине двери,
Скука это грех!

Нас встречает утро
И грибные дали,
Дуб живой и ежик мудрый -
Славно мы удрали!
`,
};

export default song;
