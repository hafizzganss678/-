const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let senku = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const fetch = require('node-fetch')
const ms = require("parse-ms");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions')
const { color } = require('./lib/color')
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281804680327-1621430788@g.us"]
shp = 'â¬¡'
owner = "6285892842367@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

const left = JSON.parse(fs.readFileSync('./database/left.json'))	
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

require('./index.js')
nocache('./index.js', module => console.log(color(`Index.js is now updated!`)))
require('./lib/menu.js')
nocache('./lib/menu.js', module => console.log(color(`Menu.js is Now updated!`)))

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

const starts = async (senku = new WAConnection()) => {
senku.version = [2, 2140, 12]
senku.browserDescription = ['Whatsapp Botz','Desktop','3.0']
senku.logger.level = 'warn'
console.log(color(figlet.textSync(`Fizz\nSelfbot`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ â€¢ Bot By Fizzâ€¢ ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[â€¢]`, 'aqua'), color(`Nama        : ${fake}`, 'white'))
console.log(color(`${spc3}[â€¢]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[â€¢]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[â€¢]`, 'aqua'), color(`Owner       : ${ownerN}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))


senku.on('qr', () => {
console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Now This Qr!'))
})

fs.existsSync('./Fizz.json') && senku.loadAuthInfo('./Fizz.json')
senku.on('connecting', () => {
start('2', '[ ! ] Connecting..')
})

senku.on('open', () => {
success('2',`\n[ âœ“ ] Connected...`)
})
await senku.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./Fizz.json",JSON.stringify(senku.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/IlsN7Zoc7qx5u3Sr9KMsr2`
 senku.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Bergabung ke Grup', 'cyan'))
 senku.sendMessage(`6285892842367@s.whatsapp.net`, `*Hai Owner Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(senku.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/senku.jpg'),sourceUrl:"https://wa.me/6285892842367?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))

senku.on('chat-update', async (message) => {
require('./index.js')(senku, message)
})
ownerNumber = ["6285892842367@s.whatsapp.net"]
        dtod = "6285892842367@s.whatsapp.net"
       otod = `6285892842367@s.whatsapp.net`
   
    
senku.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
      try {
      
  const mdata = await senku.groupMetadata(anu.jid)
 const fakegroup = (teks) => {
            senku.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `WELCOME WOYYY`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./pathImage/emror.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true}
            })
        }
        
	 finvite = {
    "key": {
      "fromMe": false,
      "participant": "0@s.whatsapp.net",
      "remoteJid": "0@s.whatsapp.net"
           },
      "message": {
       "groupInviteMessage": {
       "groupJid": anu.jid,
       "inviteCode": "NgsCIU2lXKh3VHJT",
       "groupName": mdata.subject,
       "caption": fake,
       "height": 6080,
       "width": 6000
                               }
                   }
            }
            
if (anu.action == 'add') {
num = anu.participants[0]
let fakeg = fs.readFileSync('./pathImage/emror.jpg')
try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
}
ini_user = senku.contacts[num]
teks = `Halo @${num.split('@')[0]} ⚔️\nSelamat datang di Grup
*${mdata.subject}*

Sering nimbrung dan baca rules grup`
let	buff = await getBuffer(ppimg)
senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: { "externalAdReply": {
                    "title": `► Hi Saya Hafizz.`,
                    "body": `WELCOME TO GRUP ${mdata.subject}`,
                    "mediaType": "2",
                    "thumbnailUrl": "https://i.ibb.co/xHG25Yn/298d8b4b8877.jpg",
                    "mediaUrl": "https://youtu.be/kiqEEr7CK2g",
                    "thumbnail": fakeg,
                    "sourceUrl": "",
                },
							mentionedJid: [num],
							forwardingScore: 1e7,
							isForwarded: true
					
					}})
					
} else if (anu.action == 'remove') {
if(!left.includes(anu.jid)) return
num = anu.participants[0]
try {
ppimg = await senku.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
}
teks = `*@${num.split('@')[0]} Sayonaraa.*`
let buff = await getBuffer(ppimg)
//senku.sendMessage(mdata.id, teks,MessageType.text, {contextInfo: {"mentionedJid": [num]}})
		gbutsan = [
{ buttonId: 'HAHAH', buttonText: { displayText: 'Sayonara :)' }, type: 1 },
{ buttonId: 'HAHAH', buttonText: { displayText: 'Disable Welcome' }, type: 1 },
]
gbuttonan = {
contentText: `『 ${teks} 』\nMember Berkurang 1 :)`,
footerText: `Button Message`,
buttons: gbutsan,
headerType: 1
}
 senku.sendMessage(mdata.id, gbuttonan, MessageType.buttonsMessage,  {quoted: finvite, contextInfo: {"mentionedJid": [num]}})

} else if (anu.action == 'promote') {
//	const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
	//if(!gchange.includes(mdata.id)) return
var thu = await senku.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
//senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
} else if (anu.action == 'demote') {
//   const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
//	if(!gchange.includes(mdata.id)) return
thu = await senku.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
//senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

senku.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'</ Fizzzzz´Ì…â°Íâ´Ìµã€†â©',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:resku\nitem1.TEL;waid=62895349917040:+62 895-3499-17040\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await senku.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: finvite})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: finvite})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nâ€¢ Deskripsi Baru : ${anu.desc}`
senku.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: finvite})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ Group Setting Change ] \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: finvite})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: finvite})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

antidel = false
senku.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
//senku.sendMessage(m.key.remoteJid, `『 ANTI DELETE MESSAGE 』`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

gbutsan = [
{ buttonId: 'HAHAH', buttonText: { displayText: 'DISABLE ANTIDELETE' }, type: 1 },
{ buttonId: 'MENUU', buttonText: { displayText: 'MENUU' }, type: 1 },
]
gbuttonan = {

contentText: `『 ANTI DELETE MESSAGE 』`,
footerText: `${jam}`,
buttons: gbutsan,
headerType: 1
}
 senku.sendMessage(m.key.remoteJid, gbuttonan, MessageType.buttonsMessage, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
