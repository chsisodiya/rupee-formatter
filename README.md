# rupee-formatter

Indian Currency formatter.

Example:
```js
var rupeeFormatter = require('rupee-formatter');
var input = "12543.66";
var output = rupeeFormatter(input);
//output is "₹ 12,543.66"
```

|       Input         |       Output    |
| -------------------:| ---------------:|
|        "1"          |      "₹ 1"      |
|        "100"        |    "₹ 100"      |
