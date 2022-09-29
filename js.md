## Javascript exemple
Use the following script to use the Greensky's-super-script-for-mysql-database

```js
const { query } = require('./query.js');

await query(`SELECT * FROM github WHERE username="Greensky-gs"`);
// Returns:
// string if error
// any[] if successful
// Note: You can also add a .catch() block
```
