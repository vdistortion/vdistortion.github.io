import CyrillicToTranslit from 'cyrillic-to-translit-js';

const artist = 'shmely';
const list = `
Твариною поруч
Чорний Лiс
Вiдьма
Пий, де-кiнь п'є
`;

const files = [];
const types = [];
const index = [];
const imports = [];
const albums = [];
const enums = [];
const songs = [];

list.trim().split('\n').forEach((item) => {
  const file = new CyrillicToTranslit({ preset: 'uk' }).transform(item, '-').replace(',', '').toLowerCase();
  const name = toCamelCase(file);
  files.push(`${file}.ts`);
  types.push(`${name} = '${file}',`);
  index.push(`[${name}.id]: ${name},`);
  imports.push(`import ${name} from './${file}';`);
  albums.push(`import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.${name},
  name: '${item}',
  year: 2000,
  folder: '/artist/${artist}/albums/.jpg',
  songs: [
    { name: '${item}' },
    { name: '' },
  ],
};

export default album;`);
  songs.push(`import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.${name},
  name: ['${item}'],
  albums: [],
  text: \`

\`,
};

export default song;`);
});

console.log('');
console.log(`touch ${files.join(' ')}`);
console.log('');
console.log(types.join('\n'));
console.log('');
console.log(index.join('\n'));
console.log('');
console.log(imports.join('\n'));
console.log('');
console.log(albums.join('\n'));
console.log('');
console.log(enums.join('\n'));
console.log('');
// console.log(songs.join('\n'));
console.log('');

function toCamelCase(file) {
  return file
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
