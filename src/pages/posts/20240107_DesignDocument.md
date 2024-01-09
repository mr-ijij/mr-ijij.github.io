---
layout: ../../layouts/MarkdownPostLayout.astro
title: デザインドキュメント(Design Docs)について
date: 2024-01-07
tags: ["Article", "DesignDocs"]
image: /ogp/default.png
---

### どこで知ったか
[世界一流エンジニアの思考法](https://amzn.asia/d/0GsIJem)で、実装前に「デザインドキュメント」を書くと生産性が高くなると紹介があった。

### 「デザインドキュメント」とは？
- 開発者のための形式ばらないドキュメント
- 背景と解決したい問題を明確化し、それをどう解決しようとしているかを示す
    - 結果だけではなく理由・背景を重視
- 形式張らないドキュメントであるため、具体的に「デザインドキュメントのフォーマット」は決められていない
- 継続的なドキュメントのメンテナンスはしない

### 何が良いのか
- コードを書く前に思考の整理ができ、仕様への理解を深めることができる
- 実装中や実装後の無駄な手戻りを減らせる
- 「デザインドキュメント」をレビューしてもらうことで、チームメンバーから早期フィードバックを得られる
- 実装や単体テスト作成の途中で、疑問ができたら都度確認をすると、それなりに作業が中断が発生してしまう
    - 実装をしながら思考するということは、単体テストの記述が後回しになる傾向がある。そうなると、単体テストを書くことがめんどくさく感じてしまう。
    - TDDと相性がいい
- チームメンバーがPRのレビューをよりはっきりとした粒度でできる

#### まとめ
- 「Be Lazy」（怠惰であれ）
    - テストを先に書きやすくなる
    - 実装中や実装後の手戻りが減る

### どういうときに書くか
- 不確実性が多いときに書く
    - あまりにも実装が明確なときは、ドキュメント作成の時間が無駄になるので書かない

### フォーマット
```md
Design Docs: 【内容】
### Story
チケット（ストーリー）のリンク

### Scope
このデザインの範囲を書く

### Background
なぜこの機能追加・改修が必要かという背景を書く

### Problem Statement
解決したい問題を書く

### Proposal
どういうデザインにするか、またその選択肢を選んだ理由をロジカルに書く

### Test
想定される振る舞い（テストケース）を記述する


---
##### Memo

```

### ADRとの違いは？
- アーキテクチャ決定記録（Architecture Decision Record、ADR）
    - 焦点: チーム内で議論をするために作成する
    - タイミング: タスク進行中に書く
- デザインドキュメント（Design Doc）
    - 焦点: 実装をするために作成する
    - タイミング: 実装前に書く

### 参考
- [デザインドキュメントを知るための参考リンク集](https://qiita.com/thaim/items/2c53f0b19f1f4cc549be)
- [残業も減らせる!? 上級エンジニアになるためのDesign Doc超入門](https://atmarkit.itmedia.co.jp/ait/articles/1606/21/news016.html)
- [【翻訳】Googleのエンジニアがソフトウェア開発する時に必ず書くドキュメント「Design Docs at Google」](https://tkybpp.hatenablog.com/entry/2020/08/03/090000)
    - [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [【メモ】良いDesign Docs(Software Design Document)を書くためのリソース集](https://r-kaga.com/blog/collection-of-resources-for-writing-a-good-design-docs)