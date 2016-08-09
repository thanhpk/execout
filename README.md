[![npm version](https://badge.fury.io/js/execout.svg)](https://badge.fury.io/js/execout) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000?style=flat-square)]()

# Execout
***Exe***cute the shell command and print the output lively to the std***out***.
Execout allow you to
Execout build on top of `child_process.spawn` function but it looks like `child_process.exec`. Execout allows you to.

* Print colored output **lively**, without waiting until script finished.
* Execute the script easily, just paste your shell script to exec. There is no need to split script's arguments into javascript array.
* Execute binary file using releative path without changing the working directory. 

# Installing
```sh
npm install execout
```

# Usage
Just paste the shell command you want to run in the first parameter, it can take both absoule path and relative path.

_Note that the current working directory will *stay unchange* after the function is called_

```js
var execout = require('execout').execout;

// calling a system shell command
execout("ls");

execout("ls -la", function(err, output, retcode)
{
	if(err) {
		console.log("stderr length: " + output.length);
		return;
	}
	
	console.log("Done. The command print " + output.length + "characters, and return code " + retcode);
});

// execute a binary file using relative path
execout('./node_module/.bin/mocha test --color --recursive');
```

The second parameter is optional, if a function is passed, it will be call after the command finished execute. The callback should accept 3 parameters. The first one is err (if have one), the second one is the content was printed on stdout (or stderr if there is error), the last one is the return code of the command.

# Test

```
npm test
```

# License

This software is licensed under the terms of [the MIT license](https://opensource.org/licenses/mit-license.php). See the LICENSE.md files.

# Questions?

If you have any questions, please feel free to send me an email at `thanhpk@live.com`.
