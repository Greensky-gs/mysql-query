## Typescript exemple
Use the following script to use the Greensky's-super-script-for-mysql-database

```ts
import { query } = from './query.ts';

await query(`SELECT * FROM github WHERE username="Greensky-gs"`);
// Returns:
// string if error
// any[] if successful
// Node: You can also add a .catch() block
```
