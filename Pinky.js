/* codded by rix
Remoded by - lisa 
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '+919778206654' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'ACHU' : process.env.DEPLOYER,    
};
