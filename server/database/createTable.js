import client from './connectDb';

const createTable = () => {
  const table = `
  DROP TABLE IF EXISTS comments CASCADE;

  CREATE TABLE comments (
    id serial NOT NULL,
    comment_id UUID NOT NULL,
    comment character varying(150) NOT NULL,
    movie_title character varying(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );
  `;

  return client
    .query(table)
    .then(res => {
      console.log('All tables were created successfully!');
      return process.exit();
    })
    .catch(err => {
      console.log('Error occured while creating the tables: ', err);
      client.end();
      return process.exit();
    });
};

export default createTable();
