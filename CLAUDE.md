# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

izumi_ikezakiによるはてなブログ用カスタムテーマ「Nocturne」。Vite、TailwindCSS v4、CSSを使用したモジュラーアーキテクチャで構築されています。

## 開発コマンド

### 開発サーバーの起動
```bash
npm start -- BLOG_DOMAIN_NAME
```
例: `npm start -- example.hatenablog.com`

指定したブログドメイン用にCORSが設定されたVite開発サーバーを起動します。テーマの変更はライブブログにホットリロードされます。

### 本番ビルド
```bash
npm run build
```
`build/nocturne.css`に出力されます。CSSは意図的にミニファイされません（vite.config.jsで`cssMinify: false`に設定）。

## アーキテクチャ

### CSS構造

エントリーポイントは`src/style.css`で、以下の順序で各CSSモジュールをインポートします：

1. `tailwindcss` - ベースフレームワーク
2. `_variable.css` - カスタムCSS変数とテーマ設定
3. `_animations.css` - キーフレームアニメーション（例: fadeInUp）
4. `_core.css` - コアスタイル（html、body、アーカイブページ）
5. `container.css` - レイアウトコンテナ
6. `header/` - ブログタイトル、パンくずリスト
7. `main/` - エントリーページ、コメント、記事コンテンツ、ページャー
8. `side/` - はてなモジュール（サイドバー）
9. `footer/` - フッタースタイル

`_`で始まるファイルは基礎的なスタイルを含みます。その他のファイルはページセクションごとに整理されています。

### 重要な規約

- スタイリングにはTailwindの`@apply`ディレクティブを使用
- 明示的に要求されない限り、コードに絵文字を使用しない
- 常に新規ファイル作成よりも既存ファイルの編集を優先
- アニメーション定義は`src/lib/_animations.css`に配置
- ページ固有のスタイルはディレクトリ構造に従う：`header/`、`main/`、`side/`、`footer/`
- **ユーザーとのコミュニケーションは日本語で行う**

### ビルドシステム

- ViteとTailwindCSS v4プラグインを使用
- カスタムPostCSSプラグインで出力に`@charset "utf-8"`を保持
- エントリーファイル: `src/style.css` → 出力: `build/nocturne.css`
- 開発サーバー（server.js）ははてなブログからのクロスオリジン読み込み用にCORSを設定

## はてなブログとの連携

ライブ開発のため、ブログ側で以下の設定が必要：
1. デザインCSSを`/* Responsive: yes */`に設定
2. `<head>`メタデータで`http://localhost:5173/src/nocturne.css`とViteクライアントを指定

開発サーバーにより、実際のはてなブログインスタンス上でテーマ変更をリアルタイムプレビューできます。
