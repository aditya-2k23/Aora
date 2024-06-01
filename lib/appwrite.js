import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aditya.aora",
  projectId: "665b04e200373a9bd250",
  databaseId: "665b069a0004fc5b8c01",
  userCollectionId: "665b06b10017aef346e0",
  videoCollectionId: "665b06cc0012ed50b2c7",
  storageId: "665b08b3001bcfe8e0fc",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
