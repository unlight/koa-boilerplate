koa-boilerplate
===============

SETUP
---
```
setx APP_DRIVER_TYPE "sqlite
setx APP_DRIVER_STORAGE "db.sqlite"
```

DEBUG
---
```
ts-node --inspect -F app/server
devtool -r ts-node/register app/server
```

TODO
---
* object validator
  - https://github.com/Kikobeats/osom
  - https://github.com/hapijs/joi
* eslint task
