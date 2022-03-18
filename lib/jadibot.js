let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,pebz,id,mek) => {
conn = new WAConnection()
conn.logger.level = 'warn'
conn.version = [2, 2140, 12]
conn.browserDescription = [ '[ hanya numpang ] Jadibot ','Desktop','3.0']
conn.on('qr', async qr => {
let bot = await qrcode.toDataURL(qr, { scale: 8 })
let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
bot = await pebz.sendMessage(id,buffer,MessageType.image,{quoted : mek,caption:'Scan QR Untuk menjadi BOT Sementara!\n\n1.Klik titik tiga pojok kanan atas\n2.Ketuk Whatsapp Web\n3.Scan QR ini\n\nNote : QR Expired dalam 20detik!'})
setTimeout(() => {
pebz.deleteMessage(id, bot.key)
},30000)
})
fs.existsSync('./Hafizz.json') && pebz.loadAuthInfo('./Hafizz.json')
conn.on('connecting', () => {
})
conn.on('open', () => {
reply(`*Berhasil Tersambung Ke Whatsapp-BOT*\n\n*Note :* _Ini hanya Numpang_\n\n*mekice :*\n ${JSON.stringify(conn.user,null,2)}`)
})
await conn.connect({timeoutMs: 30 * 1000})
fs.writeFileSync("./Hafizz.json",JSON.stringify(pebz.base64EncodedAuthInfo(), null, "\t"));
listjadibot.push(conn.user)
conn.on('chat-update', async (message) => {
require('../jadi.js')(conn, message)
})
}

const stopjadibot = (reply) => {
conn = new WAConnection();
conn.close()
reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}
