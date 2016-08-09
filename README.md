# execout
_Exe_cute the shell command and print the output lively to the std_out_.

# How to use

```js
var execout = require('execout').execout;

// calling a system shell command
execout("ls", function(err, output, retcode){
	console.log('done');
});

// execute a binary file, print output lively and exit
execout('./node_module/.bin/mocha test --color --recursive');
```