# WP Theme and Plugin for Linksjugend ['solid]

## Run project

**Important**: stick to the order of commands, otherwise files created by `wp-scripts` might not be copied to the plugin directory. From project root directory:

1. Bring up docker: `docker-compose up`
2. Install packages: `npm install`
3. Run dev watch task for plugin: `npm run dev:watch`
4. Start up gulp: `gulp dev`

## Build project

1. Install packages: `npm install`
2. Run `gulp build`
3. Theme and plugin are located in `./dist`
