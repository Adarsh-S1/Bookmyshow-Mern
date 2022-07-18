import { MongoClient as mongoClient } from "mongodb";
const state = {
  db: null,
};

const dbConnect = (dbname, dburl, done) => {
  const url = dburl;
  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
  });

  done();
};
const dbGet = () => {
  return state.db;
};

export { dbConnect, dbGet };
