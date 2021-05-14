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

const destDir = (type) => destDirs[type][process.env.NODE_ENV];

gulp.task("theme:copy", () => {
  return gulp
    .src([
      "src/theme/**/*",
      "!src/theme/assets/css/**/*",
      "!src/theme/assets/images/favicon.png",
    ])
    .pipe(gulp.dest(destDir("theme")));
});

gulp.task("dev", (done) => {
  process.env.NODE_ENV = "development";
  return gulp.series(["theme:copy"])(done);
});

gulp.task("build", (done) => {
  process.env.NODE_ENV = "production";
  return gulp.series(["theme:copy"])(done);
});
