# Exercício Gulp - Automação Front-end (EBAC)

Este repositório contém a solução para um exercício do curso **Engenheiro Front-end da EBAC**, focado em automação de tarefas com **Gulp.js**. O projeto envolve uma página de login simples, otimizada através de um pipeline de build.

---

## O que foi feito

Este exercício exigiu a configuração de um `Gulpfile.js` para automatizar as seguintes tarefas:

- **Compilação e minificação de SASS:** Transforma SASS em CSS otimizado.
- **Minificação de JavaScript:** Reduz o tamanho dos arquivos JS.
- **Compressão de Imagens:** Otimiza imagens para menor peso.

Todo o trabalho está contido na branch `exercicio_gulp`.

---

## Gulpfile.js

```javascript
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  images: {
    src: 'src/images/**',
    dest: 'dist/images'
  }
};

function compilarSass() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function minificarJs() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

function comprimirImagens() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function assistirArquivos() {
  gulp.watch(paths.styles.src, compilarSass);
  gulp.watch(paths.scripts.src, minificarJs);
  gulp.watch(paths.images.src, comprimirImagens);
}

exports.sass = compilarSass;
exports.js = minificarJs;
exports.images = comprimirImagens;
exports.watch = assistirArquivos;
exports.default = gulp.series(compilarSass, minificarJs, comprimirImagens);
