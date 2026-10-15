# 青嶺高校バレーボール部 Webサイト

日本の高校公式サイトをイメージした、HTML / CSS / JavaScript の静的ウェブサイトです。

## ローカルで見る
1. ZIPを展開します。
2. `index.html` をブラウザで開きます。
3. `style.css` と `script.js` は `index.html` と同じフォルダに置いてください。

## GitHub Pagesで公開する
1. GitHubで新しいリポジトリを作成します（例：`seirei-volleyball-site`）。
2. リポジトリは **Public** にするのが、初回公開にはいちばん簡単です。
3. 展開したファイル `index.html`、`style.css`、`script.js`、`README.md` をリポジトリ直下にアップロードしてコミットします。
4. リポジトリの **Settings → Pages** を開きます。
5. **Build and deployment** で **Deploy from a branch** を選択します。
6. Branch を `main`、フォルダを `/(root)` にして **Save** を押します。
7. 数分待つと、Pages欄に公開URLが表示されます。URLは通常 `https://ユーザー名.github.io/リポジトリ名/` の形式です。

## 内容を編集する
- ページ本文・セクション：`index.html`
- 색상・레이아웃・모바일対応：`style.css`
- 프로필 모달・검색・월간 달력：`script.js`

## 먼저 확인할 점
- 달력 일정은 샘플이며, 실제 설정에 맞게 수정해야 합니다.
- 인물 일러스트는 아직 넣지 않았고, 현재는 이니셜 기반의 임시 카드입니다.
- 배경 이미지는 외부 Unsplash 이미지 URL을 사용합니다. 이미지를 직접 보유한 파일로 교체하려면 `style.css`의 `.hero-photo` 항목을 수정하세요.
