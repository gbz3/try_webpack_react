# try_webpack_react

1. TypeScript の設定

```bash
$ npm init -y
$ npm install -D typescript
$ npx tsc --init
$ vi tsconfig.json
```

2. webpack の設定

```bash
$ npm install -D webpack webpack-cli ts-loader
$ vi webpack.config.js
$ npm install react react-dom
$ npm install -D @types/react @types/react-dom
$ mkdir src
$ vi src/index.tsx
$ npx webpack --mode development
```

3. `index.html` をビルド対象に追加

```bash
$ npm install -D html-webpack-plugin
$ vi src/index.html
$ npx webpack --mode development
```

URL: `file://wsl%24/Ubuntu-20.04/home/{ユーザ名}/{リポジトリルート}/try_webpack_react/dist/index.html`

4. `*.css` をビルド対象に追加

```bash
$ npm install -D css-loader style-loader
$ vi src/reset.css
```

5. 静的 asset をビルド対象に追加

```bash
$ npm install -D file-loader
$ vi webpack.config.js
$ wget https://placehold.jp/150x150.png -O src/150x150.png
$ vi src/index.tsx
$ vi import-file.d.ts
$ npx webpack --mode development
```
