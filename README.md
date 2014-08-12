hive-ios
=======

Phonegapped version of [hive-js](https://github.com/hivewallet/hive-js/)

## Development

### Requirement

- git
- npm
- CouchDB. See https://github.com/hivewallet/hive-js#setup-couchdb for installation & configuration instructions
- XCode

### Grab the source & install stuff

    git clone git@github.com:hivewallet/hive-ios.git
    cd hive-ios
    npm install

### Building for development

Step 1: Update configuration according to your development environment setup

    cp dev.config.sample dev.config
    # then modify accordingly

Step 2: Build the js app & start the local server:

    source dev.config && npm run dev

Step 3: Build & run the iOS app:

    # on simulator
    source dev.config && npm run ios-emulator

    # on device
    source dev.config && npm run ios-device

Or alternatively:

    source dev.config && npm run ios-build

and then use Xcode to run the simulator in a chosen mode (e.g. 3.5-inch iPhone or iPad).

### TestFlight distribution

Prepare a provisioning profile:

- gather testers on TestFlight - people can be invited manually from the Dashboard ("Invite people") and then they have to confirm and add a device, or they can sign up themselves through a public link (see "People" -> "Recruited" -> "Recruitment link") and then you confirm them on the "Recruited" page
- to add newly registered devices to a new build, check the checkboxes on the list and select "Actions" -> "Export iOS devices"
  - when exporting, select only new users, because Apple will reject the whole list if it includes devices it already has ಠ_ಠ
- take the exported file, go to the "Certificates, Identifiers & Profiles" site on [developer.apple.com](http://developer.apple.com), open "Devices" page and upload it there
- go to "Provisioning profiles" and create a new ad-hoc profile with all devices selected
- download the new profile and open it, or go to Preferences in Xcode, and under Accounts -> Apple ID -> Hive Labs click "View Details" and click the refresh button to download the profile from there

Build the js app for release:

    DB_HOST=[prod db host] PROXY_URL=[prod proxy URL] HOST=web.hivewallet.com NODE_ENV=production npm run build
    cd cordova
    cordova build ios --device --release

In Xcode, use "Archive" to bundle the app into an .ipa file ("Device" must be selected in the top bar) and then export it using "Distribute" -> "Save for Enterprise or Ad Hoc Deployment", sign it with the newest provisioning profile. Then go to TestFlight, upload the .ipa there and send it to testers.

Note: you can also upload a new provisioning profile with new devices to TestFlight to re-sign an existing build without rebuilding it in Xcode.

### App Store distribution

Prepare a provisioning profile - this time choose "App Store" when creating it on the "Certificates, Identifiers & Profiles" site (you don't need any devices).

Go to [iTunes Connect](https://itunesconnect.apple.com), log in as the team admin. Select the Hive app and add a new version. Edit metadata if necessary. Get to the state where it says "Ready for upload".

Build the app for release as above. Create an archive, and then use "Distribute" -> "Submit to the iOS App Store".


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
