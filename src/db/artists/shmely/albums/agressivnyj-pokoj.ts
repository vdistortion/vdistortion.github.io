import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.agressivnyjPokoj,
  name: 'Агрессивный покой',
  year: 2002,
  folder: '/artist/shmely/albums/2002_pokoy.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79305' },
  songs: [
    EnumSongs.bol,
    { name: 'Ты снег в моей преисподней' },
    { name: 'Агрессивный покой' },
    { name: 'The First Love' },
    [EnumSongs.pogadai, { name: ['Погадай (new version)'] }],
    [EnumSongs.risunkiNaDushe, { name: ['Рисунки на душе (new version)'] }],
    [EnumSongs.iskushenie, { name: ['Искушение (1999)'] }],
    EnumSongs.blagodat,
    EnumSongs.maneken,
    [EnumSongs.laboratoriyaAltruizma, { name: ['Лаборатория альтруизма (new version)'] }],
    { name: 'День Святого Валентина' },
    [EnumSongs.bogi, { name: ['Отравленные боги'] }],
    [EnumSongs.slyoznaya, { name: ['Слёзная (remix)'] }],
    [EnumSongs.cherezKrai, { name: ['Либо (remix)'] }],
    [EnumSongs.groza, { name: ['Гроза (remix)'] }],
    [EnumSongs.zamokIzTuch, { name: ['Волшебный замок (live 1999)'] }],
    [EnumSongs.lakaiOtravu, { name: ['Лакай отраву (live 1999)'] }],
  ],
};

export default album;
