var push = require('web-push');

let vapidKeys = {
  publicKey: 'BA8ciuYB_bKIONXvfABZLvif7JWZ6Zgn_PkGEKjK1lT1AN82sDzcofBQ-35sLs5A_bRKgA2X3Sg7lqKjlwsYsRc',
  privateKey: 'AzWHiaa3ais4XUfng5m6R52v815wuRdKtLG0XibqYWI'
}

push.setVapidDetails('mailto:leviettien1808@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint: "https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAC80vXd4kjVej521FDUfN%2bO6DifU2vQxAQFDmC2hFLiYr3lZkKIQxUN%2btha8mJR6pNDSm8OHNcIN8Ae8V2WDU0hYx89P8BltfNSezEZpOckAsMXgjlSk9iLxDpG6s1JEH5NOXU7azS0xCw9gWtSDOSjIWwtrIaGOATsb3IiT%2fCe292F8i2uNJpxUoKAr%2b0ajNeeUj1Yuca2vdDDlnZuTUEG9u3Ba4XYO4zj2RfGcFk8foAPYEKDS161U8T7EdZNTpekNn%2b1t1jn9FfII3qbB43J%2fnO%2bxwjpmDQQZI4fala0HPmj5Pu3DWppZhgBBw%2byRLkWffx%2flPPiORKMYryeAg1z",
  expirationTime: null,
  keys: {
    p256dh: "BOeGs5m6XCaFycR9DW7VDtl60RZi1styCRci6PldBcPJdukb83n5L27ceLCrtSs6fpni48sccRl7bcN8Hx-HwMM",
    auth: "QGDWccidBhCKFnvc91tbzw"
  }
}

push.sendNotification(sub, 'test message')