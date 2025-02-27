require('dotenv').config();


const currentPassword = process.env.PASSWORD
const encodedCurrentPassword = encodeURIComponent(currentPassword)

console.log('[]password', encodedCurrentPassword)
  