# dom-create-element

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Create DOM elements.

## Usage

`npm install dom-create-element`

```javascript
var create = require('dom-create-element');

var el = create({
  selector: 'div',
  id: 'el-id',
  styles: 'el-classes',
  children: create({
  	selector: 'a',
  	link: 'http://google.com',
  	target: '_blank',
  	html: 'Link'
  })
});

document.body.appendChild(el);
```

### Available options:

- `selector`: the string type tag of the HTML element (*required*)
- `id`: unique ID selector of the element
- `styles`: CSS classes of the element (this is not inline styles)
- `attr`: custom attributes
- `link`: if `selector` is a `<a>` element, provide a `href` (*required*)
- `target`: if `selector` is a `<a>` element, you can define target
- `src`: if `selector` is an `<img>` element, provide a `src`
- `lazyload`: if `selector` is an `<img>` element, you can define `lazyload` (see below)
- `html`: the content of the element (basically innerHTML)
- `children`: the children of the element. could be another instance of `create` so you could chain element creation

For images, you can pass `lazyload: true`.
This will set the image to `opacity: 0`, then go back to `1` when it's loaded.

```javascript
var image = create({
  selector: 'img',
  src: '/path/to/img.jpg',
  lazyload: true
});
```

## TODOs

- [x] lazyload for images
- [ ] cleaner options: `opt` should first be the selector with more options as second parameter
- [ ] tests

## License

MIT, see [LICENSE.md](http://github.com/BaptisteBriel/dom-create-element/blob/master/LICENSE.md) for details.
