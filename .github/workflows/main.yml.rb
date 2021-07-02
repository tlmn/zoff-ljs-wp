name: Deployment

on:
  push:
    branches: [production]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-node@v2-beta
        with:
          version: 12.x

      - name: Install dependencies
        run: |
          npm install
      - name: Build
        run: gulp build

      - name: Set environment variables for theme
        run: |
          echo "desttheme=wp@b2sr2v1z.myraidbox.de:/home/wp/disk/wordpress/wp-content/themes/ljs-theme" >> $GITHUB_ENV

      - name: Sync LJS Theme with Raidboxes
        run: |
          cd dist/theme
          echo "${{secrets.DEPLOY_KEY}}" > deploy_key
          chmod 600 ./deploy_key
          rsync -chav --delete \
            -e 'ssh -p 22 -i ./deploy_key -o StrictHostKeyChecking=no' \
            ./ $desttheme

      - name: Set environment variables for plugin
        run: |
          echo "destplugin=wp@b2sr2v1z.myraidbox.de:/home/wp/disk/wordpress/wp-content/plugins/ljs-blocks" >> $GITHUB_ENV

      - name: Sync LJS Plugin with Raidboxes
        run: |
          cd dist/plugin
          echo "${{secrets.DEPLOY_KEY}}" > deploy_key
          chmod 600 ./deploy_key
          rsync -chav --delete \
            -e 'ssh -p 22 -i ./deploy_key -o StrictHostKeyChecking=no' \
            ./ $destplugin
