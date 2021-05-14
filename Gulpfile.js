"use strict";

const destDirs = {
  theme: {
    development: "./wp-content/themes/ljs-theme/",
    production: "./dist/theme/",
  },
  plugin: {
    development: "./wp-content/plugins/ljs-blocks/",
    production: "./dist/plugin/",
  },
};

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const favicons = require("gulp-favicons");
const postcss = require("gulp-postcss");
const cleancss = require("gulp-clean-css");
const run = require("gulp-run-command").default;

const destDir = (type, append = "") =>
  destDirs[type][process.env.NODE_ENV] + append;

gulp.task("distDir:clean", run("rm -rf ./dist"));

gulp.task("theme:copy", () => {
  return gulp
    .src([
      "src/theme/**/*",
      "!src/theme/assets/css/**/*",
      "!src/theme/assets/images/favicon.png",
    ])
    .pipe(gulp.dest(destDir("theme")));
});

gulp.task("theme:favicons", function () {
  return gulp
    .src("./src/theme/assets/images/favicon.png")
    .pipe(
      favicons({
        appName: "Linksjugend ['solid]",
        appShortName: "Linksjugend ['solid]",
        appDescription:
          "Linksjugend ['solid]: Die Jugendorganisation der Linkspartei",
        background: "#020307",
        lang: "de-DE",
        path: "favicons/",
        url: "https://www.linksjugend-solid.de",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        html: "index.html",
        pipeHTML: true,
        replace: true,
      })
    )
    .pipe(gulp.dest(destDir("theme", "manifest")));
});

gulp.task("theme:js:copy", function () {
  return gulp
    .src(["src/theme/assets/js/**/*.js"])
    .pipe(gulp.dest(destDir("theme", "assets/js")));
});

gulp.task("theme:postcss:compile", function () {
  const config = (file) => ({
    plugins: [
      require("postcss-import")({ root: file.dirname }),
      require("postcss-nesting"),
    ],
  });

  return gulp
    .src("src/theme/assets/css/style.css")
    .pipe(postcss(config))
    .pipe(
      postcss([
        require("tailwindcss"),
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ])
    )
    .pipe(cleancss())
    .pipe(gulp.dest(destDir("theme")));
});

gulp.task("watch", function () {
  browserSync.init({
    proxy: "localhost:8000",
    notify: false,
  });

  gulp
    .watch("src/theme/assets/js/**/*.js", gulp.series(["theme:js:copy"]))
    .on("change", browserSync.reload);

  gulp
    .watch(
      "src/theme/assets/css/**/*.css",
      gulp.series(["theme:postcss:compile"])
    )
    .on("change", browserSync.reload);

  gulp
    .watch("src/theme/**/*.php", gulp.series(["theme:copy"]))
    .on("change", browserSync.reload);
});

gulp.task("dev", (done) => {
  process.env.NODE_ENV = "development";
  return gulp.series([
    "theme:copy",
    "theme:postcss:compile",
    "theme:favicons",
    "watch",
  ])(done);
});

gulp.task("build", (done) => {
  process.env.NODE_ENV = "production";
  return gulp.series([
    "distDir:clean",
    "theme:copy",
    "theme:postcss:compile",
    "theme:favicons",
  ])(done);
});
