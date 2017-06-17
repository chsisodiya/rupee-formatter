# rupee-formatter

Indian Currency formatter.

Installing package:

npm install rupee-formatter

Usage Example:
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
|        "1400"      |    "₹ 1,400"      |
|        1400        |    "₹ 1,400"      |
|        -54980      |    "₹ -54,980"      |
|        "-54980"    |    "₹ -54,980"      |
|     -54980.6789 |    "₹ -54,980.6789"|
|    "-54980.1234"|    "₹ -54,980.1234"      |
|        "1400.67"  |    "₹ 1,400.67"      |
|        "14000.67"  |    "₹ 14,000.67"      |
|        14000.67        |   "₹ 14,000.67"    |
|        14000        |    "₹ 14,000"      |
| "1753676545643.345434" |"₹ 17,53,67,65,45,643.345434"      |
|        ""        |    "₹ -"      |
