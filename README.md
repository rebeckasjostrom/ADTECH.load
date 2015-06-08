# ADTECH.load
A simple module for loading additional JavaScript files

## Loading a document without check and callback
The following method will *not* check if any function is defined, and it does not include any callback.

```javascript
ADTECH.load("foo.js");
```

## Loading a document with check and without callback
The following method *will* check if string is defined as function, but it does not include any callback.

```javascript
ADTECH.load("foo.js", "foo");
```

## Loading a document with check and callback
The following method *will* check if string is defined as function *and* call provided callback.

```javascript
ADTECH.load("foo.js", "foo", function() {
    console.log("success!");
});
```
