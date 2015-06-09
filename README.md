# ADTECH JavaScript Loader

> An ADTECH JavaScript module to load additional JavaScript files.

## Setup
Include the (compressed or uncompressed) JavaScript module script in your HTML markup:

```html
<script src="adtech.load.min.js"></script>
```

## Usage

##### Basic
In your code, use the `ADTECH.load()` function like this:

```javascript
ADTECH.load("foo.js");
```
##### Script Name
It is also possible to pass a second argument, asking the function to check if the script name already exists in DOM. Recommended if you plan on running loader more than once where the same document is required.

```javascript
ADTECH.load("foo.js", "foo");
```

##### Script Name and Callback
It is also possible to pass a third argument, asking the function to call provided function once the document is loaded.

```javascript
ADTECH.load("foo.js", "foo", function() {
    // code here...
});
```

##### Callback
It is also possible to define a callback function without a providing a script name. Not recommended unless you are absolute sure your document will be loaded once.

```javascript
ADTECH.load("foo.js", function() {
    // code here...
});
```

## Requirements
The JavaScript module has zero dependencies.

## License
Copyright (c) 2015 Fredrik Borggren

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
