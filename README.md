hive-ios
=======

Phonegapped version of [hive-js](https://github.com/hivewallet/hive-js/)

## Development

### Requirement

- git
- npm
- CouchDB. See https://github.com/hivewallet/hive-js#setup-couchdb for installation & configuration instructions
- XCode

### Grab the source

    git clone git@github.com:hivewallet/hive-ios.git
    cd hive-ios
    npm install

### Profit

Build the js app & start the local server:

    DB_HOST=127.0.0.1 DB_PORT=5984 DB_USER=admin DB_PASSWORD=password COOKIE_SALT=secret PROXY_URL=https://hive-proxy.herokuapp.com HOST=localhost:8080 npm run dev

Build & run the iOS app:

    npm install -g cordova
    cd ./cordova
    cordova run ios --emulator` (or `--device`)

## Release

Build the js app for release:

    DB_HOST=[prod db host] PROXY_URL=[prod proxy URL] HOST=web.hivewallet.com NODE_ENV=production npm run build

Build and sign the iOS app

## Contributing

### Instructions

1. Fork the repo
2. Push changes to your fork
3. Create a pull request

Pull requests are very welcome. If you want to send us any code, try your best to adhere to our coding guidelines:

- [JavaScript](https://github.com/hivewallet/hive-js/wiki/Hive-JS-coding-style-guide)
- [HTML](https://github.com/hivewallet/hive-js/wiki/Hive-HTML-coding-style-guide)
- [CSS](https://github.com/hivewallet/hive-js/wiki/Hive-CSS-coding-style-guide)
- [Git](https://github.com/hivewallet/hive-js/wiki/Hive-Git-guidelines)

### Donation

If you like Hive, you can also send us donations in BTC to 142m1MpXHhymF4aASiWwYohe1Y55v5BQwc

## License

Hive is released under GNU General Public License, version 2 or later.

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
