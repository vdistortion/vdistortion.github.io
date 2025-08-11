import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.polnaSuma,
  name: 'Полна сума',
  year: 2003,
  folder: '/artist/shmely/albums/2003_suma.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79309' },
  songs: [
    { name: 'Зверь' },
    { name: 'Я обернусь огнём' },
    EnumSongs.toska,
    EnumSongs.agoniya,
    { name: 'Клякса' },
    EnumSongs.polnaSuma,
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Вода' },
    { name: 'Садизм' },
    { name: 'Радиактивные отходы' },
    EnumSongs.ivolga,
    { name: 'Виртуальный самолёт' },
    { name: 'Бом лбом' },
    { name: 'Тишина и покой' },
    EnumSongs.fabrikaFekalii,
    { name: 'Облака' },
    { name: 'Эпидемия Ха' },
    { name: 'Гори, костёр!' },
    { name: 'Крыша горит' },
    { name: 'Трупные пятна' },
    { name: 'Сизоблюдов' },
    { name: 'Хули пули праху' },
    { name: 'Уа-у-уа' },
  ],
};

export default album;
