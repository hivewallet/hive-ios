#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var rootdir = process.argv[2];

function replace_string_in_file(filename, to_replace, replace_with) {
    var data = fs.readFileSync(filename, 'utf8');

    var result = data.replace(new RegExp(to_replace, "g"), replace_with);
    fs.writeFileSync(filename, result, 'utf8');
}

if (rootdir) {
    android_manifest =
        path.join(rootdir, "platforms/android/AndroidManifest.xml");
    replace_string_in_file(android_manifest,
            "com.hivewallet.Hive.iOS", "com.hivewallet.hive.cordova");
}
