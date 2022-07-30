import { MongoClient as mongoClient } from "mongodb";
const state = {
  db: null,
};

const dbConnect = (dbname,  done) => {
  const url = "mongodb://localhost:27017";
  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
  });

  done();
};
const data = () => {
  return state.db;
};

export { dbConnect, data };
