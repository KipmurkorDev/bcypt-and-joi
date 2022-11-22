const bcrypt = require("bcrypt");

module.exports = {
      encryptpass: async (plain_password)=>{
            //Method: 1
            // const saltrounds = await bcrypt.genSalt(8);
            // const hashedpass = await bcrypt.hash(plain_password, saltrounds)

            //Method: 2
            const hashedpass =  await bcrypt.hash(plain_password, 8)

            return hashedpass
      },

      comparePass : async(plain_password, hashed_pass)=>{
            let loggedin = await bcrypt.compare(plain_password, hashed_pass)
            console.log(loggedin)
            return loggedin;
      }
}