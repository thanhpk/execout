(function(){
	"use strict";
var spawn = require('child_process').spawn;
var path = require('path');

exports.execout = function (command, cb)
{
	// convert relative path comand to absoute path comamnd
	// since spawn function dont allow relative path
	if(isRelativePath(command)){
		command = path.join(path.resolve('./'), command);
	}

	var cmd = spawn(command, {std: 'inherit', shell:true});

	var output = "";
	
	cmd.stdout.on('data', function(data){
		output+=data;
		process.stdout.write(data.toString());
	});

	var isError = undefined;
	cmd.stderr.on('data', function(data){
		isError = true;
		output+=data;
		process.stdout.write('ERR: ' + data);
	});

	cmd.on('exit', function(code){
		if(cb) cb(isError, output, code);
	});
}

function isRelativePath(path)
{
	return path.startsWith('./') || path.startsWith('../');
}

})();
