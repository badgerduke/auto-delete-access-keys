// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});
// Create the IAM service object
const iam = new AWS.IAM({apiVersion: '2010-05-08'});

exports.handler = async (event, context, callback) => {
    let keys;
    const users = await iam.listUsers().promise();
    for (let user of users.Users) {
        keys = await retreiveAccessKeys(user.UserName);
        for (let metadata of keys.AccessKeyMetadata) {
            await deleteAccessKey(metadata.AccessKeyId, user.UserName);
        };
    };
    console.log('SUCCESS');
    return 'SUCCESS';
};

const retreiveAccessKeys = async (user) => {
    return iam.listAccessKeys({UserName: user}).promise();
}

const deleteAccessKey = async (id, user) => {
    return iam.deleteAccessKey({AccessKeyId: id, UserName: user}).promise();
}

