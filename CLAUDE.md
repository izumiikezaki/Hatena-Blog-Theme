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

## はてなブログテーマの制約と仕様

### 必須要件

- **レスポンシブ対応必須**: CSSヘッダーに`Responsive: yes`コメントを含める（システムが自動的にviewportメタタグを挿入）
- 最新ブラウザ（Windows/Mac）のサポート必須
- Android/iOSでのモバイルテスト必須

### スタイリングが必要な主要要素

- ブログタイトルと説明
- エントリーのメタデータ（日付、カテゴリ、編集リンク）
- はてなタグと関連エントリー
- コメントセクション
- サイドバーモジュール（プロフィール、最近のエントリー）
- ページャーナビゲーション（`.pager`, `.pager-prev`, `.pager-next`）
- フッターリンク
- アーカイブページ（`.page-archive .archive-entries`, `.archive-entry`）とパンくずリスト
- 「続きを読む」リンク（`.entry-see-more`）

### スタイル変更を避けるべき要素

以下の要素は既にスタイルが適用されているため、上書きを避ける：
- ヘッダーメニュー
- アーカイブ検索ボックス
- 購読ボタン
- はてなスター
- タグ

### はてなブログ特有の仕様

**背景画像**: `/* <system section="background"> */`ブロック内にインラインスタイルがシステムによって挿入される

**ヘッダー画像**: `div#blog-title-inner`に背景として適用され、以下のbodyクラスが付与される
- `header-image-enable`: ヘッダー画像が有効
- `header-image-only`: ヘッダー画像のみ表示

**ユーザー編集可能なHTMLゾーン**:
- `div#top-editarea` - 全ページ
- `div.entry-header-html` - エントリーページ
- `div.entry-footer-html` - エントリーページ
- `div#bottom-editarea` - 全ページ

**Proプラン**: グローバルヘッダー/フッターが非表示の場合、bodyに`globalheader-off`クラスが付与される

### 禁止事項

- ヘッダー/フッター要素を非表示にしたり移動したりしない
- 広告を隠さない
- カテゴリに「#」やタグのような装飾を付けない
- 画像ははてなフォトライフでホストする（外部ホスティング不可）
