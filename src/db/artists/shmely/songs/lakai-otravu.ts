import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.lakaiOtravu,
  name: ['Лакай отраву'],
  albums: [EnumAlbums.purga, EnumAlbums.agressivnyjPokoj, EnumAlbums.byuroVolshebnikhUslug],
  authors: 'Шмель',
  text: `
Колдовские камни, превращая в пар,
Приготовил солнцу ядерный отвар.

Лакай, лакай, лакай, лакай...
Отраву отраву, отраву, отраву...

Из плодов запретных, из волшебных чар,
Из любовных капель сделали отвар.

Лакай, лакай, лакай, лакай...
Отраву отраву, отраву, отраву...

Пускай плавятся мысли твои,
Тебе понравится,
Ты только не грусти...
`,
};

export default song;
