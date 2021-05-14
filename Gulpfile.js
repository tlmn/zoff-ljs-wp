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
const favicons = require("gulp-favicons");

const destDir = (type, append = "") =>
  destDirs[type][process.env.NODE_ENV] + append;

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

gulp.task("dev", (done) => {
  process.env.NODE_ENV = "development";
  return gulp.series(["theme:copy", "theme:favicons"])(done);
});

gulp.task("build", (done) => {
  process.env.NODE_ENV = "production";
  return gulp.series(["theme:copy", "theme:favicons"])(done);
});
