koa-boilerplate
===============

SETUP
---
```
setx APP_DRIVER_TYPE "sqlite"
setx APP_DRIVER_STORAGE "db.sqlite"
# seed script
ts-node -F app/scripts/seed
```

DEBUG
---
```
ts-node --inspect -F app/server
devtool -r ts-node/register app/server
inspect node_modules\ts-node\dist\_bin.js -F app\ping\pong.test.ts
```

TODO
---
* koa superagent
* object validator
  - https://github.com/Kikobeats/osom
  - https://github.com/hapijs/joi
* eslint task
