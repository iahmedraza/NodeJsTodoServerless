Run **npm i**
Rename **.envExample** with **.env**

# Running Locally 
- In **.env** add STAGE=local
- Run **npm start**

# Running Commands Irrespective of Cloud
- Run **npm install -g serverless**
- Add mongodb atlas URI in **.env** file


# Deploying App as Cloud Function on ***Google Cloud***
- Rename **googleServerless.yml** to **serverless.yaml**
- Run **npm install --save serverless-google-cloudfunctions**
- Setup google account
  - If Project is not created. Create a new Google Cloud Project
  - Enable the following necessary APIs
      - Cloud Functions API
      - Cloud Deployment Manager V2 API
      - Cloud Build API
      - Cloud Storage
      - Cloud Logging API
   - Your google account / service account must have following roles
      - Deployment Manager Editor
      - Storage Admin
      - Logging Admin
      - Cloud Functions Developer 
-  authenticate with a Google Account use [gcloud](https://cloud.google.com/sdk/docs/install) cli login
  - Run **gcloud auth application-default login**
- After that you fill have credential path on your cmd replace that path with your serverless.yaml crendential path.
  - Run **serverless deploy**
 
   **Wohoo Congrates You Have Deployed your todo app on Cloud Function** 😀



