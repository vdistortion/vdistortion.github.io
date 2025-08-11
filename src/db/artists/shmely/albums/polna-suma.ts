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
    EnumSongs.yaObernusOgnyom,
    EnumSongs.toska,
    EnumSongs.agoniya,
    { name: 'Клякса' },
    EnumSongs.polnaSuma,
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Вода' },
    EnumSongs.sadizm,
    { name: 'Радиактивные отходы' },
    EnumSongs.ivolga,
    { name: 'Виртуальный самолёт' },
    EnumSongs.bomLbom,
    { name: 'Тишина и покой' },
    EnumSongs.fabrikaFekalii,
    { name: 'Облака' },
    { name: 'Эпидемия Ха' },
    { name: 'Гори, костёр!' },
    { name: 'Крыша горит' },
    EnumSongs.trupniePyatna,
    { name: 'Сизоблюдов' },
    { name: 'Хули пули праху' },
    { name: 'Уа-у-уа' },
  ],
};

export default album;
