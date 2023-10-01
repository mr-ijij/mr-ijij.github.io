<?php
declare(strict_types=1);


require __DIR__ . '/vendor/autoload.php';

use Symfony\Component\BrowserKit\HttpBrowser;

$url = $argv[1];
$client = new HttpBrowser();
$crawler = $client->request('GET', $url);

$imageUrl = $crawler->filter('#landingImage')->attr('src');

$imageData = file_get_contents($imageUrl);

$fileName = basename(parse_url($imageUrl, PHP_URL_PATH));
$extension = pathinfo($fileName, PATHINFO_EXTENSION);
$toSaveFileName = uniqid('', true) . uniqid('', true) . "." . $extension;
$savePath = "./public/ogp/" . $toSaveFileName;

file_put_contents($savePath, $imageData);

echo "Image saved to: " . "/ogp/" . $toSaveFileName . PHP_EOL;

?>