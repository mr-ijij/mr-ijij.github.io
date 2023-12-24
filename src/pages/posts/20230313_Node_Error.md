---
layout: ../../layouts/MarkdownPostLayout.astro
title: "node ./tmp.js [Error: `dyld[39984]: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.71.dylib`]"
date: 2023-03-13
tags: ["Node", "ErrorLog"]
---

### Error 内容
```
dyld[39984]: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.71.dylib
  Referenced from: /usr/local/Cellar/node/19.4.0/bin/node
  Reason: tried: '/usr/local/opt/icu4c/lib/libicui18n.71.dylib' (no such file), '/usr/local/lib/libicui18n.71.dylib' (no such file), '/usr/lib/libicui18n.71.dylib' (no such file), '/usr/local/Cellar/icu4c/72.1/lib/libicui18n.71.dylib' (no such file), '/usr/local/lib/libicui18n.71.dylib' (no such file), '/usr/lib/libicui18n.71.dylib' (no such file)
zsh: abort      node -v
```

### やったこと
```
$ brew upgrade
$ brew cleanup
```
参考:  [https://stackoverflow.com/questions/53828891/dyld-library-not-loaded-usr-local-opt-icu4c-lib-libicui18n-62-dylib-error-run]
