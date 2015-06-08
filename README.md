# ADTECH.load

> A JavaScript module to load additional JavaScript files.

## Setup
Include the (compressed or uncompressed) JavaScript module script in your HTML markup:

```html
<script src="adtech.load.min.js"></script>
```

## Usage

##### Basic
In your code, use the **ADTECH.load()** function like this:

```javascript
ADTECH.load("foo.js");
```
##### Script Name
It is also possible to pass a second argument, asking the function to check if the script name already exists in DOM. Recommended if you plan on running loader more than once where the same document is required.

```javascript
ADTECH.load("foo.js", "foo");
```

##### Script Name and Callback
It is also possible to define a callback function, and the loader will call provided callback once the document has been loaded.

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
