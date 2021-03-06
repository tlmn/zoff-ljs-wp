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
const header = require("gulp-header");

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
    .pipe(
      header(`/* Theme Name: LJS Theme
    Author: Zoff Kollektiv
    Author URI: https://www.zoff-kollektiv.net/
    Description: WP Theme for Linksjugend ['solid]
    Version: 1.1
    Requires at least: 5.0
    Tested up to: 5.4
    Requires PHP: 7.0
    Text Domain: LJS Theme
    */`)
    )
    .pipe(gulp.dest(destDir("theme")));
});

gulp.task("plugin:copy", function () {
  return gulp
    .src([
      "src/plugin/index.php",
      "src/plugin/assets/**/*",
      "!src/plugin/assets/**/*.js",
      "!src/plugin/assets/images/**/*",
      "!src/plugin/assets/colorThemes/**/*",
    ])
    .pipe(gulp.dest(destDir("plugin")));
});

gulp.task(
  "plugin:compile",
  run("wp-scripts build ./src/plugin/index.js --output ./dist/plugin/index.js")
);

gulp.task("watch", function () {
  browserSync.init({
    proxy: "localhost:8000",
    notify: false,
  });

  gulp
    .watch(
      "src/theme/assets/js/**/*.js",
      { interval: 750 },
      gulp.series(["theme:js:copy"])
    )
    .on("change", browserSync.reload);

  gulp
    .watch(
      "src/theme/assets/css/**/*.css",
      { interval: 750 },
      gulp.series(["theme:postcss:compile"])
    )
    .on("change", browserSync.reload);

  gulp
    .watch("src/theme/**/*.php", { interval: 750 }, gulp.series(["theme:copy"]))
    .on("change", browserSync.reload);

  gulp
    .watch("src/theme/**/*.svg", { interval: 750 }, gulp.series(["theme:copy"]))
    .on("change", browserSync.reload);

  gulp
    .watch(
      ["src/plugin/**/*.php", "src/plugin/**/*.png"],
      { interval: 750 },
      gulp.series(["plugin:copy"])
    )
    .on("change", browserSync.reload);
});

gulp.task("dev", (done) => {
  process.env.NODE_ENV = "development";
  return gulp.series([
    "theme:copy",
    "theme:postcss:compile",
    "plugin:copy",
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
    "plugin:compile",
    "plugin:copy",
  ])(done);
});
