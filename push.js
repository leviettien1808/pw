var push = require('web-push');

let vapidKeys = {
  publicKey: 'BA8ciuYB_bKIONXvfABZLvif7JWZ6Zgn_PkGEKjK1lT1AN82sDzcofBQ-35sLs5A_bRKgA2X3Sg7lqKjlwsYsRc',
  privateKey: 'AzWHiaa3ais4XUfng5m6R52v815wuRdKtLG0XibqYWI'
}

push.setVapidDetails('mailto:leviettien1808@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')