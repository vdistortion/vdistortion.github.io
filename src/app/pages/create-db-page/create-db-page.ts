import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import copy from 'copy-text-to-clipboard';

@Component({
  selector: 'app-create-db-page',
  imports: [ReactiveFormsModule],
  templateUrl: './create-db-page.html',
  styleUrl: './create-db-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDbPage {
  private formBuilder = inject(FormBuilder);
  private defaultValues = {
    type: 'songs',
    artist: 'shmely',
  };
  form = this.formBuilder.group({
    type: [this.defaultValues.type, Validators.required],
    artist: [this.defaultValues.artist],
    id: ['', Validators.required],
    authors: [''],
    languages: this.formBuilder.group({
      ru: [
        `

    `,
      ],
      uk: [''],
    }),
  });
  files: string[] = [];
  types: string[] = [];
  index: string[] = [];
  imports: string[] = [];
  albums: string[] = [];
  enums: string[] = [];
  songs: string[] = [];
  tracks: string[] = [];
  isResult = false;

  copy(event: Event, text: string) {
    copy(text);
    const el = event.target as HTMLPreElement;
    el.classList.add('copied');
    setTimeout(() => {
      el.classList.remove('copied');
    }, 1000);
  }

  clear() {
    this.files = [];
    this.types = [];
    this.index = [];
    this.imports = [];
    this.albums = [];
    this.enums = [];
    this.songs = [];
    this.tracks = [];
  }

  reset() {
    this.clear();
    this.form.reset();
    this.isResult = false;
  }

  generate() {
    if (this.form.invalid) return alert('Не заполнен тип или идентификатор');
    this.clear();
    const form = this.form.getRawValue();

    Object.entries(form.languages).forEach(([preset, list]) => {
      if (typeof list !== 'string') return;

      list
        .split('\n')
        .filter((item) => item.trim())
        .forEach((itemRaw) => {
          const item = itemRaw.trim();
          const file =
            preset === 'ru' || preset === 'uk'
              ? CyrillicToTranslit({ preset }).transform(item, '-')
              : item;
          const fileName = file
            .replaceAll(',', '')
            .replaceAll('.', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll('?', '')
            .replaceAll('!', '')
            .toLowerCase();
          const name = this.toCamelCase(fileName);
          this.files.push(`${fileName}.ts`);
          this.types.push(`${name} = '${fileName}',`);
          this.index.push(`[${name}.id]: ${name},`);
          this.imports.push(`import ${name} from './${fileName}';`);
          this.albums.push(`import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.${name},
  name: '${item}',
  year: 2000,
  folder: '/artist/${form.artist}/albums/.jpg',
  songs: [
    { name: '${item}' },
    { name: '' },
  ],
};

export default album;`);
          this.enums.push(`EnumAlbums.${name},`);
          this.tracks.push(`EnumSongs.${name},`);
          this.songs.push(`import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.${name},
  name: ['${item}'],
  albums: [EnumAlbums.${form.id}],
  authors: '${form.authors}',
  text: \`

\`,
};

export default song;`);
        });
    });

    this.isResult = true;
  }

  toCamelCase(file: string) {
    return file
      .split('-')
      .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join('');
  }
}
