koa-boilerplate
===============

SETUP
---
setx APP_DRIVER_TYPE "sqlite
setx APP_DRIVER_STORAGE "db.sqlite"

DEBUG
---
```
ts-node --inspect server
devtool -r ts-node/register server
npm run tsc:test && inspect node_modules/ava/profile.js lib/ping/pong.spec.js
```

TODO
---
* object validator
  - https://github.com/Kikobeats/osom
  - https://github.com/hapijs/joi
* eslint task
