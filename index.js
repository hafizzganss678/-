const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let pebz = new WAConnection()
const fs = require('fs')
const { color } = require('./lib/color')
const {_wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
const { Miminnya, SesionName, ownerNumber} = require('./setting.json')
require('./Fizzz.js')
require('./index.js')
const moment = require("moment-timezone")
const welcome = require('./database/group.js')
nocache('./Fizzz.js', module => console.log(`${module} Im Coming 4you`))
nocache('./index.js', module => console.log(`${module} Im Coming 4you`))
const _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))


const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const datre = new Date().toLocaleDateString()
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
		const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
		const wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
		var date = new Date(dates);
		var tahun = date.getFullYear();
		var bulan1 = date.getMonth();
		var tanggal = date.getDate();
		var hari = date.getDay();
		var haris = date.getDay();
		var jam = date.getHours();
		var menit = date.getMinutes();
		var detik = date.getSeconds();
		var waktoo = date.getHours();
		var ucapi = date.getHours();

		switch (hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
		}
		switch (bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
		}
		switch (waktoo) {
			case 0: waktoo = "Malam"; break;
			case 1: waktoo = "Malam"; break;
			case 2: waktoo = "Malam"; break;
			case 3: waktoo = "Malam"; break;
			case 4: waktoo = "Pagi"; break;
			case 5: waktoo = "Pagi"; break;
			case 6: waktoo = "Pagi"; break;
			case 7: waktoo = "Pagi"; break;
			case 8: waktoo = "Pagi"; break;
			case 9: waktoo = "Pagi"; break;
			case 10: waktoo = "Pagi"; break;
			case 11: waktoo = "Siang"; break;
			case 12: waktoo = "Siang"; break;
			case 13: waktoo = "Siang"; break;
			case 14: waktoo = "Siang"; break;
			case 15: waktoo = "Sore"; break;
			case 16: waktoo = "Sore"; break;
			case 17: waktoo = "Sore"; break;
			case 18: waktoo = "Sore"; break;
			case 19: waktoo = "Malam"; break;
			case 20: waktoo = "Malam"; break;
			case 21: waktoo = "Malam"; break;
			case 22: waktoo = "Malam"; break;
			case 23: waktoo = "Malam"; break;
		}
		switch (ucapi) {
  case 0: ucapi = "Tidur sana jangan begadang"; break;
			case 1: ucapi = "Tidur sana jangan begadang"; break;
			case 2: ucapi = "Tidur sana jangan begadang"; break;
			case 3: ucapi = "Tidur sana jangan begadang"; break;
			case 4: ucapi = "Jangan lupa sholat subuh"; break;
			case 5: ucapi = "Jangan lupa sholat subuh"; break;
			case 6: ucapi = "Jangan lupa sarapan"; break;
			case 7: ucapi = "Skumlah sana"; break;
			case 8: ucapi = "Skumlah sana"; break;
			case 9: ucapi = "Jangan lupa olahraga"; break;
			case 10: ucapi = "Udah mandi belum?"; break;
			case 11: ucapi = "Udah mandi belum?"; break;
			case 12: ucapi = "Jangan lupa makan"; break;
			case 13: ucapi = "Lagi ngapain?"; break;
			case 14: ucapi = "Lagi ngapain?"; break;
			case 15: ucapi = "Jangan lupa sholat "; break;
			case 16: ucapi = "Mandi sana"; break;
			case 17: ucapi = "Jangan lupa sholat "; break;
			case 18: ucapi = "Lagi ngapain?"; break;
			case 19: ucapi = "Jangan lupa sholat "; break;
			case 20: ucapi = "Lagi ngapain?"; break;
			case 21: ucapi = "Tidur sana jangan begadang"; break;
			case 22: ucapi = "Tidur sana jangan begadang"; break;
			case 23: ucapi = "Tidur sana jangan begadang"; break;
		}
		var Tanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
		var tgal = "" + tanggal + " " + bulan1 + " " + tahun;
		var Hari = "" + waktoo;
		var jamm = "" + wib + " , " + wita + " , " + wit;
		var ucapkan = "" + wib + " , " + waktoo + " , " + ucapi;
		
		let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })

const starts = async (pebz = new WAConnection()) => {
    pebz.logger.level = 'warn'
    pebz.version = [2, 2140, 12]
    pebz.browserDescription = [ 'New Base Hafizz', 'Safari', '3.0' ]
    pebz.on('qr', () => {
    pebz.sendMessage(`6285892842367@s.whatsapp.net`, `「 BOT CONNECT 」\n\n${a}Hallo Kak!! Saya ${Miminnya} Izin Menggunakan Bot Ini!!${a}\n\n${a}BOT TERSAMBUNG PADA${a}\n${a}${time2}${a}\n\n${a}PROFILE${a}\n*Nama* : ${Miminnya}\n*Nomor* : ${ownerNumber}\n*Status* : Online\n\n${a}TERIMAKASIH KAK!!${a}`, MessageType.extendedText)
    console.log(color('[','white'), color('!','cyan'), color(']','white'), color(`Hayy ${Miminnya} Jangan Lupa di Scan yaa`))
    })

    fs.existsSync('./Hafizz.json') && pebz.loadAuthInfo('./Hafizz.json')
    pebz.on('connecting', () => {
    start('2','')
    })
    pebz.on('open', () => {
    success('2', 'Done Sudah Connect Kak Jangan Lupa Bahagia :) ')
     console.log(color('','aqua'), color(`||================================================||`, "cyan"))
     console.log(color(' ||> ','cyan'), color(`     Hallo Kak ${Miminnya} ${ucapanWaktu}`, 'cyan'))
     console.log(color(' ||> ','cyan'), color('    Jangan Lupa bahagia😝', 'cyan'))
     console.log(color(' ||> ','cyan'), color('   Script Ori By Muhammad Hafiz🛐', 'cyan'))
     console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    start('2','')
    })
    await pebz.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./Hafizz.json', JSON.stringify(pebz.base64EncodedAuthInfo(), null, '\t'))
    
    pebz.on('chat-update', async (message) => {
    require('./Fizzz.js')(pebz, message, _welkom)
    })
    
    

	 // if (!isWelcome) return
	  // const isWelkom = _welkom.includes(anu.jid)
	pebz.on('group-participants-update', async (anu) => {
	//const isWelkom = _welkom.includes(anu.jid)    
	  const isWelkom = _welkom.includes(anu.jid)
	  
		try {
			const stckntl = { key: { fromMe: false, "participant": `0@s.whatsapp.net`, "remoteJid": `6283141926935-1621036495@g.us` }, "message": { "stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApO--s9KxHGTV8iKFBnkB_VCMNVucML6lSPXMzVxmPn-.enc",
						"fileSha256": "b/ruAx0XVtg83ksTBXhm2txq8+OxS9mZPUH8wwLdsWQ=",
						"fileEncSha256": "QLIYlkwUlk1lNrxXm5SMnHCYS/3FqL2ZX6Sh8yEvweI=",
						"mediaKey": "GxOGcl8r2i9Q+euLEKqJ9Osq9Q2cyN+GI1laPmj2gsU=",
						"mimetype": "image/webp",
						"height": 64,
						"width": 64,
						"directPath": "/v/t62.15575-24/41268406_472960691072506_5470266215553697376_n.enc?ccb=11-4&oh=01_AVyopRi4z5Whjaw5Sy_AHCm7kRVa0UxRcS9UkVcfBQZriw&oe=6226388A",
						"fileLength": "18576",
						"mediaKeyTimestamp": "1644303830" , } }
						}
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await pebz.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await pebz.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
                  
            if (anu.action == 'add' && mem.includes(pebz.user.jid)) {
            	
           pebz.sendMessage(anu.jid, '_Halo! Semua Terima Kasih sudah Mengundang ku_\n _Untuk masuk ke dalam Group!_ _Ketik /menu untuk Melihat Fitur Bot!_', 'conversation',{quoted: stckntl})
            }

 
                 if (!isWelkom) return
             if (anu.action == 'add' && !mem.includes(pebz.user.jid)) {
        //  if (!welkom.includes(anu.jid)) return
       groupMet = await pebz.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                mdata = await pebz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = pebz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `${ucapanWaktu} *@${mem.split('@')[0]}*\nWelcome *@${mem.split('@')[0]}*\n*➸ Welcome in group  *${mdata.subject}*\n*➸ Please Intro*\n*➸ Name :*\n*➸ Your age :* \n*➸ Hobi :*\n*➸ Gender :*\n*➸ Numberr :* ${mem.replace('@s.whatsapp.net', '')}\n*Have a nice day~~*`
             // buff = await getBuffer(pic)
              
             const ara = fs.readFileSync('./media/well.webp');
pebz.sendMessage(mdata.id, ara, MessageType.sticker,  {contextInfo: {mentionedJid: [num], forwardingScore: 1e7, isForwarded: true}, quoted: { key: { fromMe: false, "participant": `0@s.whatsapp.net`, "remoteJid": "status@broadcast" }, "message": {
"conversation":  `_@${anu_user} Welcome to ${mdata.subject}_\n*Baca rules group ya dekk !!!*`}}})}

              //pebz.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `*Made With💞Febri*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		
		     if (!isWelkom) return
            if (anu.action == 'remove' && !mem.includes(pebz.user.jid)) {
          // if (!welkom.includes(anu.jid)) return
                mdata = await pebz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = pebz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `@${num.split('@')[0]} Leave In *${mdata.subject}*`
         //      buff = await getBuffer(pic)
                     const aa = fs.readFileSync('./media/leave.webp');
pebz.sendMessage(mdata.id, aa, MessageType.sticker,  {contextInfo: {mentionedJid: [num], forwardingScore: 1e7, isForwarded: true}, quoted: { key: { fromMe: false, "participant": `0@s.whatsapp.net`, "remoteJid": "status@broadcast" }, "message": {
"conversation":  `_@${anu_user} Leave from ${mdata.subject}_\n*Gpp lah menghilangkan beban atmin*`}}})}

               //pebz.sendMessage(mdata.id, { contentText: `${out}`, footerText: `*Made With💞Febri*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
     
       })
       }
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
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
