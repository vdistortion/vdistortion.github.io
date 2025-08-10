import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.golosPalach,
  name: ['Голос-палач'],
  albums: [EnumAlbums.ostanoviteChelovechestvo, EnumAlbums.vosstanoviteChelovechestvo],
  authors: 'Шмель',
  text: `
Вскармливая свою ненависть нештихами неудач
Утешая свою гордость жижой из-под ног.
Двух старушек голос - это твой палач,
Выходи из кожи, здравствуй, рядом Бог!

Палач, палач, палач - старушек голос!
Палач, палач, палач!
`,
};

export default song;
