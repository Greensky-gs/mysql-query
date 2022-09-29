import { createConnection } from 'mysql';

const database = createConnection(/* Put your database informations here */);
database.connect((error) => {
  if (error) throw error;
});

export const query = (search: string) => {
  return new Promise<string | any[]>((resolve, reject) => {
    database.query(search, (error, request) => {
      if (error) reject(error)
      else resolve(request);
    });
  });
};
