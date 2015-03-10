# font-store

Base64 encodes web fonts to cache in LocalStorage for high performance.

This is a fork of [CrocoDillon/font-store](https://github.com/CrocoDillon/font-store), where I just added the option to specify output filename.

## Quick Start

Place this module in a folder accesible to your automation/deploying scripts.

```bash
$ npm run-script font-store font-store "http://fonts.googleapis.com/css?family=Dosis"
```

If all goes right, a JSON file will be created for you named something like `fonts.<MD5>.woff.json` or `fonts.<MD5>.woff2.json` or the filename
specified in the --output option

## Advanced Usage

To see a list of available options type:

```bash
$ npm run-script font-store --help
```

Currently it supports two options: format (either woff or woff2) and output filename (including path, defaults to current path and name fonts.<md5hash>.<format>.json).

## More information
You can read original author's article [“Non-blocking web fonts using LocalStorage”](http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage) or check out a [demo on CodePen](http://codepen.io/CrocoDillon/pen/dkcbs/left/?editors=001).
