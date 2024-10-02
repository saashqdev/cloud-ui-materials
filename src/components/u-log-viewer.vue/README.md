<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# ULogViewer Log Viewer

- [Example](#Example)
    - [Basic Usage](#Basic Usage)
    - [Log Multiple Append](#Log multiple append)
    - [High-Frequency and Large-Volume Logs](#High-frequency and large-volume logs)
    - [Set Display Mode](#Set display mode)
    - [Set Initial Light and Dark Colors](#Set initial light and dark colors)
    - [Button Hook](#Button Hook)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

Used to view logs.

## Example
### Basic Usage

Pass logs directly into the `content` property.

If there are ANSI Color Codes, they will be colored automatically, such as the log output by `webpack-cli --colors`.

``` view
<template>
<u-log-viewer :content="content"></u-log-viewer>
</template>
<script>
export default {
    data() {
        return {
            content: `
[43m[30m WARNING [39m[49m [33mCompiled with 3 warnings[39m[90m 4:45:52 PM[39m

[43m[30m warning [39m[49m

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  media/music.b1818dba.mp3 (3.9 MiB)
  img/bg.51084630.jpg (672 KiB)
  js/chunk-vendors.19893bbc.js (575 KiB)

[43m[30m warning [39m[49m

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (695 KiB)
      css/chunk-vendors.e226ad28.css
      js/chunk-vendors.19893bbc.js
      css/index.f50b38e6.css
      js/index.00e713e9.js


[43m[30m warning [39m[49m

webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

  [36m[1mFile[22m[39m                                   [36m[1mSize[22m[39m              [36m[1mGzipped[22m[39m

  [32mdist/js/chunk-vendors.19893bbc.js[39m      575.12 KiB        167.44 KiB
  [32mdist/js/index.00e713e9.js[39m              11.10 KiB         4.29 KiB
  [34mdist/css/chunk-vendors.e226ad28.css[39m    81.18 KiB         15.98 KiB
  [34mdist/css/index.f50b38e6.css[39m            27.93 KiB         5.91 KiB

  [90mImages and other types of assets omitted.[39m

[42m[30m DONE [39m[49m Build complete. The [36mdist[39m directory is ready to be deployed.
[44m[30m INFO [39m[49m Check out deployment instructions at [36mhttps://cli.vuejs.org/guide/deployment.html[39m
` };
    },
};
</script>
```

### Log Multiple Appends

Use the `push` method to append logs.

If the log is at the bottom, it will continue to scroll; if it is in the middle, it will maintain the current position.

``` view
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-log-viewer ref="logViewer"></u-log-viewer>
    <u-linear-layout gap="small">
        <u-button @click="fetchLog">Single-step fetch</u-button>
        <u-button @click="autoFetchLog">Auto-fetch</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
const remoteLogs = [`[2020-01-10 10:14:55] [git] start to download source code
[2020-01-10 10:14:55] [git] fetch source code
[2020-01-10 10:14:58] [git] delete all untracked files and directories
[2020-01-10 10:14:59] [git] start to fetch new code
[2020-01-10 10:15:00] [git] successfully fetched new code
[2020-01-10 10:15:00] [git] start to checkout to branch master
[2020-01-10 10:15:01] [git] successfully downloaded source code
repo: The project module generate build xml success.`,
`deploy:
     [echo] begin auto deploy......
clean:
webapp:
     [exec]
     [exec] *****************| npm run init:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm install
     [exec]
     [exec] npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
     [exec] npm WARN deprecated @types/globby@9.1.0: This is a stub types definition. globby provides its own type definitions, so you do not need this installed.
     [exec] npm WARN deprecated @types/axios@0.14.0: This is a stub types definition for axios (https://github.com/mzabriskie/axios). axios provides its own type definitions, so you don't need @types/axios installed!
     [exec] npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
     [exec]
     [exec] > ((node-gyp configure && node-gyp build) > builderror.log) || (exit 0)
     [exec]
     [exec] g++: error: unrecognized command line option ‘-std=gnu++1y’`,
`     [exec] make: *** [Release/obj.target/addon/csrc/addon.o] Error 1
     [exec] gyp ERR! build error
     [exec] gyp ERR! stack Error: make failed with exit code: 2
     [exec] gyp ERR! stack     at ChildProcess.emit (events.js:193:13)
     [exec] gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:255:12)
     [exec] gyp ERR! System Linux 3.2.0-4-amd64
     [exec] gyp ERR! node -v v11.15.0
     [exec] gyp ERR! node-gyp -v v3.8.0
     [exec] gyp ERR! not ok`,
`     [exec]
     [exec] > node husky install
     [exec]
     [exec] husky > Setting up git hooks
     [exec] Husky requires Git >= 2.13.0, please upgrade Git
     [exec] husky > Failed to install
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
     [exec]
     [exec] The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
     [exec] > https://opencollective.com/core-js
     [exec] > https://www.patreon.com/zloirock`,
`     [exec]
     [exec] Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
     [exec]
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec]
     [exec] > node ./postinstall.js
     [exec]
     [exec] Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)
     [exec]
     [exec]
     [exec] > node scripts/postinstall
     [exec]
     [exec]
     [exec] > node bin/postinstall || exit 0
     [exec]
     [exec]
     [exec] > opencollective-postinstall || exit 0
     [exec]
     [exec] Thank you for using husky!
     [exec] If you rely on this package, please consider supporting our open collective:
     [exec] > https://opencollective.com/husky/donate
     [exec]`,
`     [exec] npm notice created a lockfile as package-lock.json. You should commit this file.
     [exec] npm WARN eslint-config-kubevue@3.0.3 requires a peer of eslint@^5.12.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN stylelint-config-kubevue@1.1.2 requires a peer of stylelint@^9.3.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN eslint-plugin-vue@5.2.3 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN vue-eslint-parser@5.0.0 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/kubevue-api/node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})`,
`     [exec]
     [exec] added 2900 packages from 2170 contributors in 89.77s
     [exec]
     [exec] *****************| npm run init:client end |*******************
     [exec]
     [exec]
     [exec] *****************| npm run init:server start |*******************
     [exec]
     [exec]
     [exec] > cd server && npm run initPro
     [exec]`,
`     [exec]
     [exec] > rm -rf node_modules && npm install
     [exec]
     [exec]
     [exec] > node-gyp rebuild || node suppress-error.js
     [exec]
     [exec]   TOUCH Release/obj.target/DTraceProviderStub.stamp
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] npm WARN kubevue-materials-platform@0.0.2 No repository field.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec]
     [exec] added 1272 packages from 1248 contributors in 20.74s
     [exec]
     [exec] *****************| npm run init:server end |*******************
     [exec]
     [exec]`,
`     [exec] *****************| npm run build:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm run build && npm run publish
     [exec]
     [exec]
     [exec] > vue-cli-service build --apply-theme
     [exec]
     [exec] -  Building for production...
     [exec]
     [exec]  WARNING  Compiled with 2 warnings10:17:34 AM
     [exec]
     [exec]  warning
     [exec]
     [exec] asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).`,
`     [exec] This can impact web performance.
     [exec] Assets:
     [exec]   img/vscode-init-block.8a496f0a.png (410 KiB)
     [exec]   img/vscode-init-component.90fa0a7e.png (402 KiB)
     [exec]   css/chunk-common.4ff942db.css (261 KiB)
     [exec]   js/chunk-common.1a66be39.js (650 KiB)
     [exec]   js/docs.2934dfaa.js (400 KiB)
     [exec]   vendor.79f2d5e6.js (291 KiB)
     [exec]
     [exec]  warning
     [exec]
     [exec] entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
     [exec] Entrypoints:
     [exec]   index (990 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css`,
`     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/index.42d05824.css
     [exec]       index.2fffbce0e0003a9a.js
     [exec]   vscode (974 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css
     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/vscode.ff148367.css
     [exec]       vscode.238e0ff67d270ef1.js
     [exec]
     [exec]
     [exec]   File                                     Size             Gzipped
     [exec]
     [exec]   public/js/chunk-common.1a66be39.js       650.24 KiB       161.93 KiB
     [exec]   public/js/docs.2934dfaa.js               399.51 KiB       42.87 KiB
     [exec]   public/vendor.79f2d5e6.js                290.98 KiB       102.23 KiB
     [exec]   public/chunk-2d0c15b8.f3f7b883.js        83.96 KiB        17.33 KiB
     [exec]   public/js/chunk-vendors.4c125764.js      50.88 KiB        15.59 KiB`,
`     [exec]   public/index.2fffbce0e0003a9a.js         21.56 KiB        10.00 KiB
     [exec]   public/js/component.d32a029d.js          21.04 KiB        6.63 KiB
     [exec]   public/js/block.b4ca5833.js              8.50 KiB         2.70 KiB
     [exec]   public/js/template.c96ca802.js           8.20 KiB         2.55 KiB
     [exec]   public/js/account.04fe2fc5.js            7.36 KiB         1.88 KiB
     [exec]   public/vscode.238e0ff67d270ef1.js        6.61 KiB         2.88 KiB
     [exec]   public/js/team.4f74c0c9.js               5.76 KiB         1.90 KiB
     [exec]   public/js/demo.16381d57.js               3.33 KiB         1.42 KiB
     [exec]   public/js/search.0640a254.js             2.98 KiB         1.22 KiB
     [exec]   public/css/chunk-common.4ff942db.css     260.83 KiB       57.26 KiB
     [exec]   public/css/index.42d05824.css            6.34 KiB         2.10 KiB
     [exec]   public/css/vscode.ff148367.css           4.91 KiB         1.70 KiB
     [exec]   public/css/block.7fb46ef8.css            1.58 KiB         0.63 KiB
     [exec]   public/css/template.841fdf1f.css         1.58 KiB         0.63 KiB
     [exec]   public/css/component.849d7e14.css        1.23 KiB         0.48 KiB
     [exec]   public/css/search.ebafb1cd.css           0.81 KiB         0.40 KiB
     [exec]   public/css/chunk-vendors.bb08a24d.css    0.37 KiB         0.16 KiB
     [exec]   public/css/account.f21933f1.css          0.37 KiB         0.26 KiB
     [exec]   public/css/docs.5f316a89.css             0.25 KiB         0.20 KiB
     [exec]   public/css/team.2cc09e17.css             0.09 KiB         0.09 KiB
     [exec]   public/css/demo.486d2fb0.css             0.05 KiB         0.07 KiB
     [exec]`,
`     [exec]   Images and other types of assets omitted.
     [exec]
     [exec]  DONE  Build complete. The public directory is ready to be deployed.
     [exec]  INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
     [exec]
     [exec]
     [exec] > node ./bin/publish
     [exec]
     [exec]
     [exec] *****************| npm run build:client end |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client start |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client end |*******************
     [exec]
compress-web:`,
`cp:
BUILD SUCCESSFUL

Total time: 2 minutes 38 seconds
start to upload package to nos
repo: Upload compressed file to nos success!
successfully uploaded package to nos
fetch source second:5
compile code second:159
upload file  second:4

build total  second:175
`];
let count = 0;
const fetchLog = () => Promise.resolve(count < remoteLogs.length ? remoteLogs[count++] : undefined);

export default {
    methods: {
        fetchLog() {
            return fetchLog().then((content) => {
                if (typeof content === 'string')
                    this.$refs.logViewer.push(content);
                return content;
            });
        },
        autoFetchLog() {
            setTimeout(() => this.fetchLog().then((content) => {
                if (typeof content === 'string')
                    this.autoFetchLog();
            }), 500);
        },
    },
}
</script>
```

### High Frequency and Large Amount of Logs

The component uses throttling functions and virtual lists to optimize high-frequency and large-scale logs.

Generally, no settings are required. If necessary, you can pay attention to the following two properties:
- `buffer-wait` property is used to set the shortest log buffering interval.
- The `virtual-count` attribute is used to set the number of DOM elements actually rendered.

``` view
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-log-viewer ref="logViewer" style="height: 476px"></u-log-viewer>
    <u-linear-layout gap="small">
        <u-button @click="fetchLog">Single-Step Fetch</u-button>
        <u-button @click="fetching ? (fetching = false) : startFetchLog()">{{ fetching ? 'Stop Fetching' : 'Automatically Fetch' }}</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
const remoteLogs = [`
[43m[30m WARNING [39m[49m [33mCompiled with 3 warnings[39m[90m 04:45:53[39m

[43m[30m warning [39m[49m

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  media/music.b1818dba.mp3 (3.9 MiB)
  img/bg.51084630.jpg (672 KiB)
  js/chunk-vendors.19893bbc.js (575 KiB)

[43m[30m warning [39m[49m

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (695 KiB)
      css/chunk-vendors.e226ad28.css
      js/chunk-vendors.19893bbc.js
      css/index.f50b38e6.css
      js/index.00e713e9.js


[43m[30m warning [39m[49m`,
` [39m [90m 40:46:23 [39m

webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

  [36m[1mFile[22m[39m                                   [36m[1mSize[22m[39m              [36m[1mGzipped[22m[39m

  [32mdist/js/chunk-vendors.19893bbc.js[39m      575.12 KiB        167.44 KiB
  [32mdist/js/index.00e713e9.js[39m              11.10 KiB         4.29 KiB
  [34mdist/css/chunk-vendors.e226ad28.css[39m    81.18 KiB         15.98 KiB
  [34mdist/css/index.f50b38e6.css[39m            27.93 KiB         5.91 KiB

  [90mImages and other types of assets omitted.[39m

[42m[30m DONE [39m[49m Build complete. The [36mdist[39m directory is ready to be deployed.
[44m[30m INFO [39m[49m Check out deployment instructions at [36mhttps://cli.vuejs.org/guide/deployment.html[39m
`];

let count = 0;
const fetchLog = () => {
    if (count++ < 2000)
        return Promise.resolve(remoteLogs[count%2].replace(/warning/g, 'Index: ' + count));
    else
        return Promise.resolve();
};

export default {
    data() {
        return {
            fetching: false,
        };
    },
    methods: {
        fetchLog() {
            return fetchLog().then((content) => {
                if (typeof content === 'string')
                    this.$refs.logViewer.push(content);
                return content;
            });
        },
        startFetchLog() {
            this.fetching = true;
            this.autoFetchLog();
        },
        autoFetchLog() {
            setTimeout(() => this.fetchLog().then((content) => {
                if (typeof content === 'string' && this.fetching)
                    this.autoFetchLog();
            }), 10);
        },
    },
}
</script>
```


### Set the Display Mode

Show/hide via `visible.sync` binding.

The default display mode is `'static'`, which is embedded in the document flow. `'fixed'` means fixed display, `'fullWindow'` means full window display, and `'fullScreen'` means full screen display.

Use `position` to set the position of the fixed mode.


``` view
<template>
<u-linear-layout direction="vertical" gap="small" layout="block">
    <u-form gap="small">
        <u-form-item label="Visibility">
            <u-capsules v-model="visible">
                <u-capsule :value="true">Display</u-capsule>
                <u-capsule :value="false">Hide</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="Normal display mode">
            <u-capsules v-model="display">
                <u-capsule value="static">Static</u-capsule>
                <u-capsule value="fixed">Fixed</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="Display Position" v-if="display === 'fixed'">
            <u-capsules v-model="position">
                <u-capsule value="top">Top</u-capsule>
                <u-capsule value="top-center">Top-Center</u-capsule>
                <u-capsule value="top-left">Top-Left</u-capsule>
                <u-capsule value="top-right">Top-Right</u-capsule>
                <u-capsule value="bottom">Bottom</u-capsule>
                <u-capsule value="bottom-center">Bottom-Center</u-capsule>
                <u-capsule value="bottom-left">Bottom-Left</u-capsule>
                <u-capsule value="bottom-right">Bottom-Right</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="Full Screen Display Mode">
            <u-capsules v-model="maximizedDisplay">
                <u-capsule value="fullWindow">Full Window</u-capsule>
                <u-capsule value="fullScreen">Full Screen</u-capsule>
            </u-capsules>
        </u-form-item>
    </u-form>
    <u-log-viewer :content="content" :visible.sync="visible" :position="position" :display="display" :normal-display="display" :maximized-display="maximizedDisplay"></u-log-viewer>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            visible: true,
            display: 'static',
            position: 'bottom-right',
            maximizedDisplay: 'fullWindow',
            content: `[2020-01-10 10:14:55] [git] start to download source code
[2020-01-10 10:14:55] [git] fetch source code
[2020-01-10 10:14:58] [git] delete all untracked files and directories
[2020-01-10 10:14:59] [git] start to fetch new code
[2020-01-10 10:15:00] [git] successfully fetched new code
[2020-01-10 10:15:00] [git] start to checkout to branch master
[2020-01-10 10:15:01] [git] successfully downloaded source code
repo: The project module generate build xml success.
deploy:
     [echo] begin auto deploy......
clean:
webapp:
     [exec]
     [exec] *****************| npm run init:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm install
     [exec]
     [exec] npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
     [exec] npm WARN deprecated @types/globby@9.1.0: This is a stub types definition. globby provides its own type definitions, so you do not need this installed.
     [exec] npm WARN deprecated @types/axios@0.14.0: This is a stub types definition for axios (https://github.com/mzabriskie/axios). axios provides its own type definitions, so you don't need @types/axios installed!
     [exec] npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
     [exec]
     [exec] > ((node-gyp configure && node-gyp build) > builderror.log) || (exit 0)
     [exec]
     [exec] g++: error: unrecognized command line option ‘-std=gnu++1y’
     [exec] make: *** [Release/obj.target/addon/csrc/addon.o] Error 1
     [exec] gyp ERR! build error
     [exec] gyp ERR! stack Error: make failed with exit code: 2
     [exec] gyp ERR! stack     at ChildProcess.emit (events.js:193:13)
     [exec] gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:255:12)
     [exec] gyp ERR! System Linux 3.2.0-4-amd64
     [exec] gyp ERR! node -v v11.15.0
     [exec] gyp ERR! node-gyp -v v3.8.0
     [exec] gyp ERR! not ok
     [exec]
     [exec] > node husky install
     [exec]
     [exec] husky > Setting up git hooks
     [exec] Husky requires Git >= 2.13.0, please upgrade Git
     [exec] husky > Failed to install
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
     [exec]
     [exec] The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
     [exec] > https://opencollective.com/core-js
     [exec] > https://www.patreon.com/zloirock
     [exec]
     [exec] Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
     [exec]
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec]
     [exec] > node ./postinstall.js
     [exec]
     [exec] Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)
     [exec]
     [exec]
     [exec] > node scripts/postinstall
     [exec]
     [exec]
     [exec] > node bin/postinstall || exit 0
     [exec]
     [exec]
     [exec] > opencollective-postinstall || exit 0
     [exec]
     [exec] Thank you for using husky!
     [exec] If you rely on this package, please consider supporting our open collective:
     [exec] > https://opencollective.com/husky/donate
     [exec]
     [exec] npm notice created a lockfile as package-lock.json. You should commit this file.
     [exec] npm WARN eslint-config-kubevue@3.0.3 requires a peer of eslint@^5.12.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN stylelint-config-kubevue@1.1.2 requires a peer of stylelint@^9.3.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN eslint-plugin-vue@5.2.3 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN vue-eslint-parser@5.0.0 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/kubevue-api/node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec]
     [exec] added 2900 packages from 2170 contributors in 89.77s
     [exec]
     [exec] *****************| npm run init:client end |*******************
     [exec]
     [exec]
     [exec] *****************| npm run init:server start |*******************
     [exec]
     [exec]
     [exec] > cd server && npm run initPro
     [exec]
     [exec]
     [exec] > rm -rf node_modules && npm install
     [exec]
     [exec]
     [exec] > node-gyp rebuild || node suppress-error.js
     [exec]
     [exec]   TOUCH Release/obj.target/DTraceProviderStub.stamp
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] npm WARN kubevue-materials-platform@0.0.2 No repository field.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec]
     [exec] added 1272 packages from 1248 contributors in 20.74s
     [exec]
     [exec] *****************| npm run init:server end |*******************
     [exec]
     [exec]
     [exec] *****************| npm run build:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm run build && npm run publish
     [exec]
     [exec]
     [exec] > vue-cli-service build --apply-theme
     [exec]
     [exec] -  Building for production...
     [exec]
     [exec]  WARNING  Compiled with 2 warnings10:17:34 AM
     [exec]
     [exec]  warning
     [exec]
     [exec] asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
     [exec] This can impact web performance.
     [exec] Assets:
     [exec]   img/vscode-init-block.8a496f0a.png (410 KiB)
     [exec]   img/vscode-init-component.90fa0a7e.png (402 KiB)
     [exec]   css/chunk-common.4ff942db.css (261 KiB)
     [exec]   js/chunk-common.1a66be39.js (650 KiB)
     [exec]   js/docs.2934dfaa.js (400 KiB)
     [exec]   vendor.79f2d5e6.js (291 KiB)
     [exec]
     [exec]  warning
     [exec]
     [exec] entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
     [exec] Entrypoints:
     [exec]   index (990 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css
     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/index.42d05824.css
     [exec]       index.2fffbce0e0003a9a.js
     [exec]   vscode (974 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css
     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/vscode.ff148367.css
     [exec]       vscode.238e0ff67d270ef1.js
     [exec]
     [exec]
     [exec]   File                                     Size             Gzipped
     [exec]
     [exec]   public/js/chunk-common.1a66be39.js       650.24 KiB       161.93 KiB
     [exec]   public/js/docs.2934dfaa.js               399.51 KiB       42.87 KiB
     [exec]   public/vendor.79f2d5e6.js                290.98 KiB       102.23 KiB
     [exec]   public/chunk-2d0c15b8.f3f7b883.js        83.96 KiB        17.33 KiB
     [exec]   public/js/chunk-vendors.4c125764.js      50.88 KiB        15.59 KiB
     [exec]   public/index.2fffbce0e0003a9a.js         21.56 KiB        10.00 KiB
     [exec]   public/js/component.d32a029d.js          21.04 KiB        6.63 KiB
     [exec]   public/js/block.b4ca5833.js              8.50 KiB         2.70 KiB
     [exec]   public/js/template.c96ca802.js           8.20 KiB         2.55 KiB
     [exec]   public/js/account.04fe2fc5.js            7.36 KiB         1.88 KiB
     [exec]   public/vscode.238e0ff67d270ef1.js        6.61 KiB         2.88 KiB
     [exec]   public/js/team.4f74c0c9.js               5.76 KiB         1.90 KiB
     [exec]   public/js/demo.16381d57.js               3.33 KiB         1.42 KiB
     [exec]   public/js/search.0640a254.js             2.98 KiB         1.22 KiB
     [exec]   public/css/chunk-common.4ff942db.css     260.83 KiB       57.26 KiB
     [exec]   public/css/index.42d05824.css            6.34 KiB         2.10 KiB
     [exec]   public/css/vscode.ff148367.css           4.91 KiB         1.70 KiB
     [exec]   public/css/block.7fb46ef8.css            1.58 KiB         0.63 KiB
     [exec]   public/css/template.841fdf1f.css         1.58 KiB         0.63 KiB
     [exec]   public/css/component.849d7e14.css        1.23 KiB         0.48 KiB
     [exec]   public/css/search.ebafb1cd.css           0.81 KiB         0.40 KiB
     [exec]   public/css/chunk-vendors.bb08a24d.css    0.37 KiB         0.16 KiB
     [exec]   public/css/account.f21933f1.css          0.37 KiB         0.26 KiB
     [exec]   public/css/docs.5f316a89.css             0.25 KiB         0.20 KiB
     [exec]   public/css/team.2cc09e17.css             0.09 KiB         0.09 KiB
     [exec]   public/css/demo.486d2fb0.css             0.05 KiB         0.07 KiB
     [exec]
     [exec]   Images and other types of assets omitted.
     [exec]
     [exec]  DONE  Build complete. The public directory is ready to be deployed.
     [exec]  INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
     [exec]
     [exec]
     [exec] > node ./bin/publish
     [exec]
     [exec]
     [exec] *****************| npm run build:client end |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client start |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client end |*******************
     [exec]
compress-web:
cp:
BUILD SUCCESSFUL

Total time: 2 minutes 38 seconds
start to upload package to nos
repo: Upload compressed file to nos success!
successfully uploaded package to nos
fetch source second:5
compile code second:159
upload file  second:4

build total  second:175
` };
    },
}
</script>
```

### Set the Initial Dark and Light Colors

Defaults to `color="dark"`. By setting `color="light"`, the initial display can be set to a light color.

``` view
<template>
<u-log-viewer :content="content" color="light"></u-log-viewer>
</template>
<script>
export default {
    data() {
        return {
            content: `[2020-01-10 10:14:55] [git] start to download source code
[2020-01-10 10:14:55] [git] fetch source code
[2020-01-10 10:14:58] [git] delete all untracked files and directories
[2020-01-10 10:14:59] [git] start to fetch new code
[2020-01-10 10:15:00] [git] successfully fetched new code
[2020-01-10 10:15:00] [git] start to checkout to branch master
[2020-01-10 10:15:01] [git] successfully downloaded source code
repo: The project module generate build xml success.
deploy:
     [echo] begin auto deploy......
clean:
webapp:
     [exec]
     [exec] *****************| npm run init:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm install
     [exec]
     [exec] npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
     [exec] npm WARN deprecated @types/globby@9.1.0: This is a stub types definition. globby provides its own type definitions, so you do not need this installed.
     [exec] npm WARN deprecated @types/axios@0.14.0: This is a stub types definition for axios (https://github.com/mzabriskie/axios). axios provides its own type definitions, so you don't need @types/axios installed!
     [exec] npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
     [exec]
     [exec] > ((node-gyp configure && node-gyp build) > builderror.log) || (exit 0)
     [exec]
     [exec] g++: error: unrecognized command line option ‘-std=gnu++1y’
     [exec] make: *** [Release/obj.target/addon/csrc/addon.o] Error 1
     [exec] gyp ERR! build error
     [exec] gyp ERR! stack Error: make failed with exit code: 2
     [exec] gyp ERR! stack     at ChildProcess.emit (events.js:193:13)
     [exec] gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:255:12)
     [exec] gyp ERR! System Linux 3.2.0-4-amd64
     [exec] gyp ERR! node -v v11.15.0
     [exec] gyp ERR! node-gyp -v v3.8.0
     [exec] gyp ERR! not ok
     [exec]
     [exec] > node husky install
     [exec]
     [exec] husky > Setting up git hooks
     [exec] Husky requires Git >= 2.13.0, please upgrade Git
     [exec] husky > Failed to install
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
     [exec]
     [exec] The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
     [exec] > https://opencollective.com/core-js
     [exec] > https://www.patreon.com/zloirock
     [exec]
     [exec] Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
     [exec]
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec]
     [exec] > node ./postinstall.js
     [exec]
     [exec] Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)
     [exec]
     [exec]
     [exec] > node scripts/postinstall
     [exec]
     [exec]
     [exec] > node bin/postinstall || exit 0
     [exec]
     [exec]
     [exec] > opencollective-postinstall || exit 0
     [exec]
     [exec] Thank you for using husky!
     [exec] If you rely on this package, please consider supporting our open collective:
     [exec] > https://opencollective.com/husky/donate
     [exec]
     [exec] npm notice created a lockfile as package-lock.json. You should commit this file.
     [exec] npm WARN eslint-config-kubevue@3.0.3 requires a peer of eslint@^5.12.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN stylelint-config-kubevue@1.1.2 requires a peer of stylelint@^9.3.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN eslint-plugin-vue@5.2.3 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN vue-eslint-parser@5.0.0 requires a peer of eslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/kubevue-api/node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec]
     [exec] added 2900 packages from 2170 contributors in 89.77s
     [exec]
     [exec] *****************| npm run init:client end |*******************
     [exec]
     [exec]
     [exec] *****************| npm run init:server start |*******************
     [exec]
     [exec]
     [exec] > cd server && npm run initPro
     [exec]
     [exec]
     [exec] > rm -rf node_modules && npm install
     [exec]
     [exec]
     [exec] > node-gyp rebuild || node suppress-error.js
     [exec]
     [exec]   TOUCH Release/obj.target/DTraceProviderStub.stamp
     [exec]
     [exec] > node -e "try{require('./postinstall')}catch(e){}"
     [exec]
     [exec] npm WARN kubevue-materials-platform@0.0.2 No repository field.
     [exec] npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
     [exec] npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
     [exec]
     [exec] added 1272 packages from 1248 contributors in 20.74s
     [exec]
     [exec] *****************| npm run init:server end |*******************
     [exec]
     [exec]
     [exec] *****************| npm run build:client start |*******************
     [exec]
     [exec]
     [exec] > cd client && npm run build && npm run publish
     [exec]
     [exec]
     [exec] > vue-cli-service build --apply-theme
     [exec]
     [exec] -  Building for production...
     [exec]
     [exec]  WARNING  Compiled with 2 warnings10:17:34 AM
     [exec]
     [exec]  warning
     [exec]
     [exec] asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
     [exec] This can impact web performance.
     [exec] Assets:
     [exec]   img/vscode-init-block.8a496f0a.png (410 KiB)
     [exec]   img/vscode-init-component.90fa0a7e.png (402 KiB)
     [exec]   css/chunk-common.4ff942db.css (261 KiB)
     [exec]   js/chunk-common.1a66be39.js (650 KiB)
     [exec]   js/docs.2934dfaa.js (400 KiB)
     [exec]   vendor.79f2d5e6.js (291 KiB)
     [exec]
     [exec]  warning
     [exec]
     [exec] entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
     [exec] Entrypoints:
     [exec]   index (990 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css
     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/index.42d05824.css
     [exec]       index.2fffbce0e0003a9a.js
     [exec]   vscode (974 KiB)
     [exec]       css/chunk-vendors.bb08a24d.css
     [exec]       js/chunk-vendors.4c125764.js
     [exec]       css/chunk-common.4ff942db.css
     [exec]       js/chunk-common.1a66be39.js
     [exec]       css/vscode.ff148367.css
     [exec]       vscode.238e0ff67d270ef1.js
     [exec]
     [exec]
     [exec]   File                                     Size             Gzipped
     [exec]
     [exec]   public/js/chunk-common.1a66be39.js       650.24 KiB       161.93 KiB
     [exec]   public/js/docs.2934dfaa.js               399.51 KiB       42.87 KiB
     [exec]   public/vendor.79f2d5e6.js                290.98 KiB       102.23 KiB
     [exec]   public/chunk-2d0c15b8.f3f7b883.js        83.96 KiB        17.33 KiB
     [exec]   public/js/chunk-vendors.4c125764.js      50.88 KiB        15.59 KiB
     [exec]   public/index.2fffbce0e0003a9a.js         21.56 KiB        10.00 KiB
     [exec]   public/js/component.d32a029d.js          21.04 KiB        6.63 KiB
     [exec]   public/js/block.b4ca5833.js              8.50 KiB         2.70 KiB
     [exec]   public/js/template.c96ca802.js           8.20 KiB         2.55 KiB
     [exec]   public/js/account.04fe2fc5.js            7.36 KiB         1.88 KiB
     [exec]   public/vscode.238e0ff67d270ef1.js        6.61 KiB         2.88 KiB
     [exec]   public/js/team.4f74c0c9.js               5.76 KiB         1.90 KiB
     [exec]   public/js/demo.16381d57.js               3.33 KiB         1.42 KiB
     [exec]   public/js/search.0640a254.js             2.98 KiB         1.22 KiB
     [exec]   public/css/chunk-common.4ff942db.css     260.83 KiB       57.26 KiB
     [exec]   public/css/index.42d05824.css            6.34 KiB         2.10 KiB
     [exec]   public/css/vscode.ff148367.css           4.91 KiB         1.70 KiB
     [exec]   public/css/block.7fb46ef8.css            1.58 KiB         0.63 KiB
     [exec]   public/css/template.841fdf1f.css         1.58 KiB         0.63 KiB
     [exec]   public/css/component.849d7e14.css        1.23 KiB         0.48 KiB
     [exec]   public/css/search.ebafb1cd.css           0.81 KiB         0.40 KiB
     [exec]   public/css/chunk-vendors.bb08a24d.css    0.37 KiB         0.16 KiB
     [exec]   public/css/account.f21933f1.css          0.37 KiB         0.26 KiB
     [exec]   public/css/docs.5f316a89.css             0.25 KiB         0.20 KiB
     [exec]   public/css/team.2cc09e17.css             0.09 KiB         0.09 KiB
     [exec]   public/css/demo.486d2fb0.css             0.05 KiB         0.07 KiB
     [exec]
     [exec]   Images and other types of assets omitted.
     [exec]
     [exec]  DONE  Build complete. The public directory is ready to be deployed.
     [exec]  INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
     [exec]
     [exec]
     [exec] > node ./bin/publish
     [exec]
     [exec]
     [exec] *****************| npm run build:client end |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client start |*******************
     [exec]
     [exec]
     [exec] *****************| rm -rf client end |*******************
     [exec]
compress-web:
cp:
BUILD SUCCESSFUL

Total time: 2 minutes 38 seconds
start to upload package to nos
repo: Upload compressed file to nos success!
successfully uploaded package to nos
fetch source second:5
compile code second:159
upload file  second:4

build total  second:175
` };
    },
}
</script>
```

### Button Hook

By setting the `fetchLogs` function, you can turn on the log fetching button.

By setting the `openInNewTab` property, you can enable the Open in New Tab button.

``` view
<template>
<u-log-viewer ref="logViewer" :fetchLogs="fetchLogs" openInNewTab="https://163yun.com/"></u-log-viewer>
</template>
<script>
export default {
    methods: {
        fetchLogs() {
            this.$refs.logViewer.push('[' + new Date().toJSON() + '] ' + Math.random());
        },
    },
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| content | string | | `''` | Log content |
| color | enum | `'dark'`, `'light'` | `'dark'` | Log viewer color scheme |
| visible.sync | boolean | | `true` | Controls whether the log viewer is displayed or hidden |
| display.sync | enum | `'block'`, `'static'`, `'fixed'`, `'fullWindow'`, `'fullScreen'` | `'static'` | Display mode |
| normal-display | enum | `'block'`, `'static'`, `'fixed'` | `'static'` | Related to the maximize toggle button. Display mode when not maximized |
| maximized-display | enum | `'fullWindow'`, `'fullScreen'` | `'fullWindow'` | Related to the maximize toggle button. Display mode when maximized |
| position | enum | `'top'`, `'top-center'`, `'top-left'`, `'top-right'`, `'bottom'`, `'bottom-center'`, `'bottom-left'`, `'bottom-right'` | `'bottom-right'` | Position in fixed mode |
| fetchLogs | Function | | | The "Pull Logs" button will only be displayed when this property has a value. Used for custom fetch method processing, because the component itself does not implement the fetch log logic. |
| openInNewTab | string, Function | | | The "Open in New Window" button will be displayed only when this property has a value. If it is a string, it will be opened as a string. If it is a function, it will be customized as a function. |
| buffer-wait | number | | `200` | Prevent high-frequency log appending. Set log throttling interval (ms) |
| view-count | number | | `100` | Prevent rendering lags due to a large number of logs. Set the actual number of DOMs rendered. |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @push

Triggered when a log is appended. Due to the high-frequency append performance mechanism, the log may not be updated (flushed) immediately after it is appended.

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.logs | Array | Current log |
| $event.incremental | string | Incremental log |

#### @flush

Triggered when a log is updated from the cache

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.logs | Array | Current log |
| $event.incremental | Array | Incremental log |

#### @clear

Triggered when the log is cleared

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.logs | Array | Empty log |

#### @display-change

Triggered when the display mode changes

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.display | enum | Display mode after change |
| $event.oldDisplay | enum | Old display mode |

Methods

#### push(content)

Append log

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| content | string | | Content to be appended |

#### clear()

Clear Logs
