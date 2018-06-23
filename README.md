
# all-in-1

h w/all-in-1

nvm: 6.10
serverless: runtime: nodejs6.10
circleci: node:7.10

npm install -g serverless
serverless create -t aws-nodejs

handler.js
serverless.yml
.circleci/config.yml

In the aws console:
Name/My Security Credentials/Access keys

serverless config credentials --provider aws --key XXXXXXXX --secret xxxxxxxxu

/home/fab/.aws/credentials

serverless deploy
https://17lbza6vgc.execute-api.us-east-1.amazonaws.com/dev/users/create
https://17lbza6vgc.execute-api.us-east-1.amazonaws.com/dev/imageResize

serverless deploy --stage pre-prod
https://2ev3a68oql.execute-api.us-east-1.amazonaws.com/pre-prod/users/create


