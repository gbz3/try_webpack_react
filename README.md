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
$ npm install -D webpack webpack-cli
$ npm install -D ts-loader
$ vi webpack.config.js
$ npm install react react-dom
$ npm install -D @types/react @types/react-dom
$ mkdir src
$ vi src/index.tsx
$ npx webpack --mode production
```

3. `index.html` をビルド対象に追加

```bash
$ npm install -D html-webpack-plugin
$ vi src/index.html
```

4. `*.css` をビルド対象に追加

```bash
$ npm install -D css-loader style-loader
$ vi src/reset.css
```
