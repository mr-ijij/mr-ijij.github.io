<?php

$start_number = 14;
$file_name = "./src/pages/posts/20231122_ReadingLog.md";
$current_number = $start_number;

// ファイルの内容を読み込む
$content = file_get_contents($file_name);

// pointXが見つからなくなるまでループ
while(strpos($content, "pointX") !== false) {
    // 最初に見つかったpointXを置換
    $content = preg_replace('/pointX/', 'point' . $current_number, $content, 1);
    $content = preg_replace('/pointX/', 'point' . $current_number, $content, 1);
    $current_number++;
}

// 変更された内容をファイルに書き戻す
file_put_contents($file_name, $content);
?>