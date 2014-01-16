grunt-jsdoc-sample
==================

A sample implementation of the Grunt JSDoc task (specifically, how it doesn't work with the template setup).

Steps to replicate the issue:
-----------------------------

1. Download the project files. Install the `grunt-cli` with `npm install grunt-cli -g`
2. Run `npm install` in the project directory
3. Run `grunt jsdoc` in the current directory.
4. Marvel as the task fails, with the error:

```
Running "jsdoc:dist" (jsdoc) task 
>> jsdoc config file path does not exist
Warning: Wrong configuration Use --force to continue.
```

... or something similar.

However, simply modifying the `Gruntfile.js` to remove the properties `template` and `configure` and it compiles correctly.
