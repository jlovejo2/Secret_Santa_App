import { MongoClient, Db } from "mongodb";
import { Database, User } from "../../lib/types";

const {DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env
let url: string = '';

if(!DB_USER) {
  throw new Error('Please define the DB_USER env variable')
} else if(!DB_PASSWORD) {
  throw new Error('Please define the DB_PASSWORD env variable')
} else if(!DB_CLUSTER) {
  throw new Error('Please define the DB_CLUSTER env variable')
} else {
url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/<dbname>?retryWrites=true&w=majority`;
}

export let client: MongoClient;
export let database: Db;

//Promise<> declares the type of the the whole return function as a promise that when resolved be an object of type database
//Database function is asynchronous.
export const connectDatabase = async (): Promise<Database> => {
  
  if(!database) {
    console.info(`Connecting to database ${url}`)
    
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database = client.db("main");

  }

  return {
    //could have declared type of collection individually
    //adding the user type as import and adding it as type for db.collection function it ensures data is returned as it should be
    users: database.collection<User>("users"),
  };
};
