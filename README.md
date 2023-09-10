# Reslug

A library for generating unique slugs from strings. It's useful for generating
URL slugs from titles, Markdown headings, etc. Zero dependencies, written in
TypeScript, and works in Node.js (also Bun!) and the browser.

## Installation

```sh
npm install reslug
```

## Usage

```js
import Reslug, { slug } from 'reslug';

const slugger = new Reslug();

slugger.slug('Hello, world!'); // hello-world
slugger.slug('Hello, world!'); // hello-world-1
slugger.slug('Hello, world!'); // hello-world-2
slugger.reset();
slugger.slug('Hello, world!'); // hello-world

// You can also use slug() function to generate
// slugs without context.
slug('Hello, world!'); // hello-world
slug('Hello, world!'); // hello-world
```

## Acknowledgements

This library is a rewrite of [github-slugger](https://github.com/Flet/github-slugger/), made by [Flet](https://github.com/Flet). You should check his project!