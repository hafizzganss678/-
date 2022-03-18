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
		WAMessageProto,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		relayWAMessage,
		device,
		Browsers,
		DataView,
        TypedArray,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const ytdl = require('ytdl-core');
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { y2mate } = require('./lib/y2mate');
const { servers, yta, ytv } = require('./lib/y2mate')
const { wikiSearch } = require('./lib/wiki.js')
const { color, bgcolor } = require('./lib/color')
const { cmdadd } = require('./lib/totalcmd.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { igdl, upload, formatDate } = require('./lib/ytdl')
gambar = fs.readFileSync('./pathImage/senku.jpg')
tamnel = fs.readFileSync('./pathImage/emror.jpg')
td = fs.readFileSync('./pathImage/emror.jpg')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const { Miminnya, BotName, fake, ownerNumber, targetpc, lolkey, Gopay, Dana, Pulsa} = require('./settings.json')
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const blocked =  JSON.parse(fs.readFileSync('./database/userblocked.json'))
const { smsg } = require('./lib/simple')
//const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, author, close,
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, FileSize, info, success, close } = require('./lib/functions')
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const { audios } = require('./lib/audio.js')
const { donasi } = require('./lib/donasi.js')

//******************** Stick WM ********************\\
const Exif = require('./lib/exif');
const exif = new Exif();

//******************** AUDIO ********************\\

audio1 = fs.readFileSync('./media/audio3/nyz1.m4a')
audio2 = fs.readFileSync('./media/audio3/nyz2.m4a')
audio3 = fs.readFileSync('./media/audio3/nyz3.m4a')
audio4 = fs.readFileSync('./media/audio3/nyz4.m4a')
audio5 = fs.readFileSync('./media/audio3/nyz5.m4a')
audio6 = fs.readFileSync('./media/audio3/nyz6.m4a')
audio7 = fs.readFileSync('./media/audio3/nyz7.m4a')
audio8 = fs.readFileSync('./media/audio3/nyz8.m4a')
audio9 = fs.readFileSync('./media/audio3/nyz9.m4a')
audio10 = fs.readFileSync('./media/audio3/nyz10.m4a')
audio11 = fs.readFileSync('./media/audio3/nyz11.m4a')
audio12 = fs.readFileSync('./media/audio3/nyz12.m4a')
audio13 = fs.readFileSync('./media/audio3/nyz13.m4a')
audio14 = fs.readFileSync('./media/audio3/nyz14.m4a')
audio15 = fs.readFileSync('./media/audio3/nyz15.m4a')
audio16 = fs.readFileSync('./media/audio3/nyz16.m4a')
audio17 = fs.readFileSync('./media/audio3/nyz17.m4a')
audio18 = fs.readFileSync('./media/audio3/nyz18.m4a')
audio19 = fs.readFileSync('./media/audio3/nyz19.m4a')
audio20 = fs.readFileSync('./media/audio3/nyz20.m4a')
audio22 = fs.readFileSync('./media/audio3/nyz22.m4a')
audio23 = fs.readFileSync('./media/audio3/nyz23.m4a')
audio24 = fs.readFileSync('./media/audio3/nyz24.m4a')
audio25 = fs.readFileSync('./media/audio3/nyz25.m4a')
audio26 = fs.readFileSync('./media/audio3/nyz26.m4a')
audio27 = fs.readFileSync('./media/audio3/nyz27.m4a')
audio28 = fs.readFileSync('./media/audio3/nyz28.m4a')
audio29 = fs.readFileSync('./media/audio3/nyz29.m4a')
audio30 = fs.readFileSync('./media/audio3/nyz30.m4a')
audio31 = fs.readFileSync('./media/audio3/nyz31.m4a')
audio32 = fs.readFileSync('./media/audio3/nyz32.m4a')
audio33 = fs.readFileSync('./media/audio3/nyz33.m4a')
audio34 = fs.readFileSync('./media/audio3/nyz34.m4a')
audio35 = fs.readFileSync('./media/audio3/nyz35.m4a')
sound1 = fs.readFileSync('./media/sound2/sound1.mp3')
sound2 = fs.readFileSync('./media/sound2/sound2.mp3')
sound3 = fs.readFileSync('./media/sound2/sound3.mp3')
sound4 = fs.readFileSync('./media/sound2/sound4.mp3')
sound5 = fs.readFileSync('./media/sound2/sound5.mp3')
sound6 = fs.readFileSync('./media/sound2/sound6.mp3')
sound7 = fs.readFileSync('./media/sound2/sound7.mp3')
sound8 = fs.readFileSync('./media/sound2/sound8.mp3')
sound9 = fs.readFileSync('./media/sound2/sound9.mp3')
sound10 = fs.readFileSync('./media/sound2/sound10.mp3')
sound11 = fs.readFileSync('./media/sound2/sound11.mp3')
sound12 = fs.readFileSync('./media/sound2/sound12.mp3')
sound13 = fs.readFileSync('./media/sound2/sound13.mp3')
sound14 = fs.readFileSync('./media/sound2/sound14.mp3')
sound15 = fs.readFileSync('./media/sound2/sound15.mp3')
sound16 = fs.readFileSync('./media/sound2/sound16.mp3')
sound17 = fs.readFileSync('./media/sound2/sound17.mp3')
sound18 = fs.readFileSync('./media/sound2/sound18.mp3')
sound19 = fs.readFileSync('./media/sound2/sound19.mp3')
sound20 = fs.readFileSync('./media/sound2/sound20.mp3')
sound22 = fs.readFileSync('./media/sound2/sound22.mp3')
sound23 = fs.readFileSync('./media/sound2/sound23.mp3')
sound24 = fs.readFileSync('./media/sound2/sound24.mp3')
sound25 = fs.readFileSync('./media/sound2/sound25.mp3')
sound26 = fs.readFileSync('./media/sound2/sound1.mp3')
sound27 = fs.readFileSync('./media/sound2/sound2.mp3')
sound28 = fs.readFileSync('./media/sound2/sound3.mp3')
sound29 = fs.readFileSync('./media/sound2/sound4.mp3')
sound30 = fs.readFileSync('./media/sound2/sound5.mp3')
sound31 = fs.readFileSync('./media/sound2/sound6.mp3')
sound32 = fs.readFileSync('./media/sound2/sound7.mp3')
sound33 = fs.readFileSync('./media/sound2/sound8.mp3')
sound34 = fs.readFileSync('./media/sound2/sound9.mp3')
sound35 = fs.readFileSync('./media/sound2/sound10.mp3')
sound36 = fs.readFileSync('./media/sound2/sound11.mp3')


///// BATAS DATABASE \\\\\\\
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
//================================================================================//

public = false
a = '```'
let multi = true
let nopref = false
let single = false
let prefa = 'F'
autovn = false
autoketik = false
autovn = false
ngetik = false

HardiApi = 'hardianto'
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
//================================================================================//
           
//******************** Path Image ********************\\
let gambar1 = fs.readFileSync('./pathImage/emror.jpg')
let gambar2 = fs.readFileSync('./pathImage/emror.jpg')
let gambar3 = fs.readFileSync('./pathImage/emror.jpg')
let gambar4 = fs.readFileSync('./pathImage/emror.jpg')
let fakeg = fs.readFileSync('./pathImage/emror.jpg')
let vid = fs.readFileSync('./media/button.mp4')
let docmen = fs.readFileSync('./media/mts.docx')

//******************** Vcard ********************\\
const vcard = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ 'FN: FizzXyzz\n'
	+ 'ORG:FizzXyzz;\n'
	+ 'TEL;type=CELL;type=VOICE;waid=6285892842367:+62 858-9284-2367\n'
	+ 'END:VCARD'


function monospace(string) {
			return '```' + string + '```'
		}
		function jsonformat(string) {
			return JSON.stringify(string, null, 2)
		}
		function randomNomor(angka) {
			return Math.floor(Math.random() * angka) + 1
		}
		const nebal = (angka) => {
			return Math.floor(angka)
		}
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'Gooomekening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'Goomekening🌇'
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


//================================================================================//
           
           //StickerCmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
            module.exports = pebz = async (pebz, mek, _welkom) => {
	        try {
	     //const { id } = message
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
m = smsg(pebz, mek)
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		
            if (multi) {
			var prefix = /^[���׶��F����=|~z+�_*!#%^&./\\�^]/.test(cmd) ? cmd.match(/^[���׶��F����=|~xz+�_*!#,|`�?;:%^&./\\�^]/gi) : '#'

		} else {
			if (nopref) {
				prefix = ''

			} else {
				if (single) {
					prefix = prefa
				}
			}
		}
		if (autovn) {
	if (autovn === false) return
await pebz.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await pebz.updatePresence(from, Presence.composing)
}
      var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
	if (isCmd) cmdadd()
	       	const q = args.join(' ')
		    const botNumber = pebz.user.jid
		    const botNumberss = pebz.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await pebz.chats.all()
		    const groupMetadata = isGroup ? await pebz.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
            const conts = mek.key.fromMe ? pebz.user.jid : pebz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? pebz.user.name : conts.notify || conts.vname || conts.name || '-'
            const p = 0
//================================================================================//
           
		mess = {
			wait: 'Please Waiting. . .',
			success: 'Successl!',
			wrongFormat: 'Wrong Format!! Please Read Menu!',
			error: {
				stick: 'This is not sticker',
				url: 'Url EROR',
			},
			only: {
				group: 'Only Group!!',
				owner: 'Onlt owner Bot!!',
				gcadmin: 'Only Group Admins',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))        }
        const reply = (teks) => {
			pebz.sendMessage(from, teks, text, {
				contextInfo: {
					text: 'hi',
					"forwardingScore": 1000000000,
					isForwarded: true,
					sendEphemeral: true,
					"externalAdReply": {
						"title": `Whatsapp-BOT\nF i z z. (@Fizz_Xyzz) �Instagram photos and Videos`,
						"body": `New Base Bot`, 
						"previewType": "PHOTO",
						"thumbnailUrl": "https://i.ibb.co/KzcqYCk/9518353dca01.jpg",
						"thumbnail": gambar3,
						"sourceUrl": ``
					}, mentionedJid: [sender]
				}, quoted: mek
			})
		}
		
        const sendMess = (hehe, teks) => {
            pebz.sendMessage(hehe, teks, text)
        }
        const sendVn = (teks) => {pebz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pebz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pebz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }            
            //******************** Date & Time ********************\\
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

//================================================================================//
           
        const fakestatus = (teks) => {
        pebz.sendMessage(from, teks, text, {
        quoted: {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        message: {
        "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": fake,
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediakey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediakeyTimestamp": "1610993486",
        "jpegThumbnail": gambar,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
        }
        }
        })
        }
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

//===============================================================================//
 //+++ || FAKE KONTAK           
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}} 
 //+++ || FAKE TROLI         
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: gambar, surface: 200, message: `➥ Made By ${Miminnya}\n➥ Hallo ${pushname}`, orderTitle: 'LordFizzz', sellerJid: '0@s.whatsapp.net'} } }                	

//=================================================//	
 const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	

if(docType === "pptx"){
var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} else if(docType === "xlsx"){
var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
} else if(docType === "zip"){
var AppType = "application/zip"
} else if(docType === "pdf"){
var AppType = "application/pdf"
} else if(docType === "docx"){
var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

pebz.sendMessage(id, { 
contentText: text1, 
footerText: desc1,
buttons: but, 
"headerType": "DOCUMENT", 
"documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
"mimetype": AppType, 
"title": "Footer text", 
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
"fileLength": 999999999999, 
"pageCount": 100, 
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
"fileName": namaDocument, 
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
"mediaKeyTimestamp": "1634472176", 
"jpegThumbnail": gam1}}, 
MessageType.buttonsMessage, options)
}


const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await pebz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
pebz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        pebz.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        pebz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await pebz.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        pebz.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return pebz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }          
        function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
        let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
const teks = `I'm User Bot`
    await pebz.setStatus(`${teks} ${Tanggal} | ${wib} ${waktoo}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
          
//===============================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                pebz.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
                } 
                const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       pebz.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       pebz.sendMessage(from, hasil, type, options).catch(e => {
	       pebz.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pebz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }                                 
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
         };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        pebz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        pebz.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        pebz.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        pebz.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        pebz.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        pebz.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        pebz.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        
//================================================================================//

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
      
      
//================================================================================/
//============================ A L L  C A S E  M E N U ==============================
//================================================================================/
switch (command) {  
//===== S e l e c t i o n  m e n u
      case 'menu': case 'help':
            listMsg = {
            buttonText: '_H a f i z z - J s_',
            footerText: fake,
            description: `_Hai ${pushname} Select This Menu!_\n\n*Note* - _Beberapa button masih eror :v_\n\n_${wib} ${waktoo}_ *${ucapi}*\n_${Tanggal}_`,
            sections: [
            {
            "title": `${wita} - ${ucapanWaktu} kak - Best Today`,
            rows: [
            {
              "title": "CATALOG MENU",
              "rowId": `${prefix}menucatalog`
            },
            {
              "title": "PRODUK MENU",
              "rowId": `${prefix}produkmenu`
            },
            {
              "title": "REPLY MENU",
              "rowId": `${prefix}rplymenu`
            },
            {
              "title": "BUTTON LOCATION MENU",
              "rowId": `${prefix}buttonmenu`
            },
            {
              "title": "VIDEO BUTTON MENU",
              "rowId": `${prefix}buttonvidio`
            },
            {
              "title": "TEXT BUTTON MENU",
              "rowId": `${prefix}buttontxt`
            },
            {
              "title": "IMAGE BUTTON MENU",
              "rowId": `${prefix}buttonimg`
            },
                  {
              "title": "LISTVN MENU",
              "rowId": `${prefix}listvn`
            },
            {
              "title": "CREATOR",
              "rowId": `${prefix}owner`
            },
            {
              "title": "MAU JADIBOT BANG",
              "rowId": `${prefix}owner`
            }
            
            ]
            }],
            listType: 1
            }
            pebz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]} })
            break
//====== C a t a l o g  m e n u
      case 'menucatalog':
      let p = 0
            menunya = `${ucapanWaktu} ${pushname}
            
*MEDIA MENU* 
${p += 1}. _${prefix}smeme <replyimg>_
${p += 1}. _${prefix}textstic <addtext>_
${p += 1}. _${prefix}toimg <replysticker>_
${p += 1}. _${prefix}take <replysticker>_
${p += 1}. _${prefix}sticker <send/replyimg>_
${p += 1}. _${prefix}pmeme <replyimg+text|txt>_
${p += 1}. _${prefix}tovn <reply audio/vidio>_
${p += 1}. _${prefix}tomp3 <vn/vidio>_
${p += 1}. _${prefix}img2url < image >_

*SOUNDMENU*
${p += 1}. _${prefix}addvn <nama vn>_
${p += 1}. _${prefix}listvn_

*GABUT MENU*
${p += 1}. _${prefix}darkjokes_
${p += 1}. _${prefix}truth_
${p += 1}. _${prefix}dare_

*DOWLOADER* 
${p += 1}. _${prefix}play <query>_
${p += 1}. _${prefix}play2 <query>_
${p += 1}. _${prefix}play3 <query>_
${p += 1}. _${prefix}ytmp3 <link>_
${p += 1}. _${prefix}ytaudio <link>_
${p += 1}. _${prefix}ytmp4 <link>_
${p += 1}. _${prefix}yts <query>_
${p += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${p += 1}. _${prefix}autovn < on / off >_
${p += 1}. _${prefix}autoketik < on / off >_
${p += 1}. _${prefix}hidetag query_
${p += 1}. _${prefix}rkick < reply kick >_
${p += 1}. _${prefix}bugtoggle_
${p += 1}. _${prefix}bugimage_
${p += 1}. _${prefix}belanja_
${p += 1}. _${prefix}+18 < Haram >_ 
`
            var imgs = await pebz.prepareMessage('0@c.us', gambar, image, { thumbnail: fakeg })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await pebz.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "445",
            "title": `THIS IS A MENU`,
            "description": menunya,
            "footerText": `Lord Fizz`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use prefix+command Example : ${prefix}sticker`,
            "url": "NO KOMEN"
            },
            "businessOwnerJid": `628974025129@s.whatsapp.net`,
            }
            }, { quoted: fkontak, mimetype: 'image/jpg' })
            pebz.relayWAMessage(ctlg)
            break
case 'produkmenu':
let u = 0
let prep8 = pebz.prepareMessageFromContent(from, {
                            listMessage: {
                                productListInfo: {
                                    businessOwnerJid: "6285892841267@s.whatsapp.net",
                                    headerImage: {
                                        jpegThumbnail: fs.readFileSync('./pathImage/emror.jpg', { encoding: "base64" }),
                                        productId: "5896288457111763"
                                    },
                                    productSections: [
                                        { products: [{productId: "5896288457111763"}], title: 'a' }
                                    ]
                                },
                                buttonText: "Hello",
                                description: `*PRODUK MENU*
${ucapanWaktu} ${pushname}
            
*MEDIA MENU* 
${u += 1}. _${prefix}smeme <replyimg>_
${u += 1}. _${prefix}textstic <addtext>_
${u += 1}. _${prefix}toimg <replysticker>_
${u += 1}. _${prefix}take <replysticker>_
${u += 1}. _${prefix}sticker <send/replyimg>_
${u += 1}. _${prefix}pmeme <replyimg+text|txt>_
${u += 1}. _${prefix}tovn <reply audio/vidio>_
${u += 1}. _${prefix}tomp3 <vn/vidio>_
${u += 1}. _${prefix}img2url < image >_

SOUNDMENU
${u += 1}. _${prefix}addvn <nama vn>_
${u += 1}. _${prefix}listvn_

*GABUT MENU*
${u += 1}. _${prefix}darkjokes_
${u += 1}. _${prefix}truth_
${u += 1}. _${prefix}dare_

*DOWLOADER* 
${u += 1}. _${prefix}play <query>_
${u += 1}. _${prefix}play2 <query>_
${u += 1}. _${prefix}play3 <query>_
${u += 1}. _${prefix}ytmp3 <link>_
${u += 1}. _${prefix}ytaudio <link>_
${u += 1}. _${prefix}ytmp4 <link>_
${u += 1}. _${prefix}yts <query>_
${u += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${u += 1}. _${prefix}autovn < on / off >_
${u += 1}. _${prefix}autoketik < on / off >_
${u += 1}. _${prefix}hidetag query_
${u += 1}. _${prefix}rkick < reply kick >_
${u += 1}. _${prefix}bugtoggle_
${u += 1}. _${prefix}bugimage_
${u += 1}. _${prefix}belanja_
${u += 1}. _${prefix}+18 < Haram >_ 
`,
                                footerText: "Created By Fizz",
                                listType: 2
                            }
                        }, {});
                        await pebz.relayWAMessage(prep8);
                        break
case 'buttonmenu':
let pp = 0
            menu = `Hallo ${pushname}
 ${ucapanWaktu}
            
*MEDIA MENU* 
${pp += 1}. _${prefix}smeme <replyimg>_
${pp += 1}. _${prefix}textstic <addtext>_
${pp += 1}. _${prefix}toimg <replysticker>_
${pp += 1}. _${prefix}take <replysticker>_
${pp += 1}. _${prefix}sticker <send/replyimg>_
${pp += 1}. _${prefix}pmeme <replyimg+text|txt>_
${pp += 1}. _${prefix}tovn <reply audio/vidio>_
${pp += 1}. _${prefix}tomp3 <vn/vidio>_
${pp += 1}. _${prefix}img2url < image >_

SOUNDMENU
${pp += 1}. _${prefix}addvn <nama vn>_
${pp += 1}. _${prefix}listvn_

*GABUT MENU*
${pp += 1}. _${prefix}darkjokes_
${pp += 1}. _${prefix}truth_
${pp += 1}. _${prefix}dare_

*DOWLOADER* 
${pp += 1}. _${prefix}play <query>_
${pp += 1}. _${prefix}play2 <query>_
${pp += 1}. _${prefix}play3 <query>_
${pp += 1}. _${prefix}ytmp3 <link>_
${pp += 1}. _${prefix}ytaudio <link>_
${pp += 1}. _${prefix}ytmp4 <link>_
${pp += 1}. _${prefix}yts <query>_
${pp += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${pp += 1}. _${prefix}autovn < on / off >_
${pp += 1}. _${prefix}autoketik < on / off >_
${pp += 1}. _${prefix}hidetag query_
${pp += 1}. _${prefix}rkick < reply kick >_
${pp += 1}. _${prefix}bugtoggle_
${pp += 1}. _${prefix}bugimage_
${pp += 1}. _${prefix}belanja_
${pp += 1}. _${prefix}+18 < Haram >_ `
            but = [
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'CREATOR' }, type: 1 },
            { buttonId: `${prefix}speed`, buttonText: { displayText: 'SPEED TEST'}, type: 1 }
                 ]
            sendButLocation(from, menu, fake, fakeg, but)
            break 
            case 'buttonvidio':
            ppp = 0
            fizztd = `Hallo ${pushname}
 ${ucapanWaktu}
            
*MEDIA MENU* 
${ppp += 1}. _${prefix}smeme <replyimg>_
${ppp += 1}. _${prefix}textstic <addtext>_
${ppp += 1}. _${prefix}toimg <replysticker>_
${ppp += 1}. _${prefix}take <replysticker>_
${ppp += 1}. _${prefix}sticker <send/replyimg>_
${ppp += 1}. _${prefix}pmeme <replyimg+text|txt>_
${ppp += 1}. _${prefix}tovn <reply audio/vidio>_
${ppp += 1}. _${prefix}tomp3 <vn/vidio>_
${ppp += 1}. _${prefix}img2url < image >_

SOUNDMENU
${ppp += 1}. _${prefix}addvn <nama vn>_
${ppp += 1}. _${prefix}listvn_

*GABUT MENU*
${ppp += 1}. _${prefix}darkjokes_
${ppp += 1}. _${prefix}truth_
${ppp += 1}. _${prefix}dare_

*DOWLOADER* 
${ppp += 1}. _${prefix}play <query>_
${ppp += 1}. _${prefix}play2 <query>_
${ppp += 1}. _${prefix}play3 <query>_
${ppp += 1}. _${prefix}ytmp3 <link>_
${ppp += 1}. _${prefix}ytaudio <link>_
${ppp += 1}. _${prefix}ytmp4 <link>_
${ppp += 1}. _${prefix}yts <query>_
${ppp += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${ppp += 1}. _${prefix}autovn < on / off >_
${ppp += 1}. _${prefix}autoketik < on / off >_
${ppp += 1}. _${prefix}hidetag query_
${ppp += 1}. _${prefix}rkick < reply kick >_
${ppp += 1}. _${prefix}bugtoggle_
${ppp += 1}. _${prefix}bugimage_
${ppp += 1}. _${prefix}belanja_
${ppp += 1}. _${prefix}+18 < Haram >_ `
            but = [
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'CREATOR' }, type: 1 },
            { buttonId: `${prefix}speed`, buttonText: { displayText: 'SPEED TEST'}, type: 1 }
                 ]
            sendButVideo(from, fizztd, fake, vid, but)
            break 
            case 'buttonimg':
            pppp = 0
            text = `Hallo ${pushname}
 ${ucapanWaktu}
            
*MEDIA MENU* 
${pppp += 1}. _${prefix}smeme <replyimg>_
${pppp += 1}. _${prefix}textstic <addtext>_
${pppp += 1}. _${prefix}toimg <replysticker>_
${pppp += 1}. _${prefix}take <replysticker>_
${pppp += 1}. _${prefix}sticker <send/replyimg>_
${pppp += 1}. _${prefix}pmeme <replyimg+text|txt>_
${pppp += 1}. _${prefix}tovn <reply audio/vidio>_
${pppp += 1}. _${prefix}tomp3 <vn/vidio>_
${pppp += 1}. _${prefix}img2url < image >_

SOUNDMENU
${pppp += 1}. _${prefix}addvn <nama vn>_
${pppp += 1}. _${prefix}listvn_

*GABUT MENU*
${pppp += 1}. _${prefix}darkjokes_
${pppp += 1}. _${prefix}truth_
${pppp += 1}. _${prefix}dare_

*DOWLOADER* 
${pppp += 1}. _${prefix}play <query>_
${pppp += 1}. _${prefix}play2 <query>_
${pppp += 1}. _${prefix}play3 <query>_
${pppp += 1}. _${prefix}ytmp3 <link>_
${pppp += 1}. _${prefix}ytaudio <link>_
${pppp += 1}. _${prefix}ytmp4 <link>_
${pppp += 1}. _${prefix}yts <query>_
${pppp += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${pppp += 1}. _${prefix}autovn < on / off >_
${pppp += 1}. _${prefix}autoketik < on / off >_
${pppp += 1}. _${prefix}hidetag query_
${pppp += 1}. _${prefix}rkick < reply kick >_
${pppp += 1}. _${prefix}bugtoggle_
${pppp += 1}. _${prefix}bugimage_
${pppp += 1}. _${prefix}belanja_
${pppp += 1}. _${prefix}+18 < Haram >_ `
let ler = await pebz.prepareMessage(from, fs.readFileSync('./pathImage/emror.jpg'), image)
but = [
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'CREATOR' }, type: 1 },
            { buttonId: `${prefix}speed`, buttonText: { displayText: 'SPEED TEST'}, type: 1 }
                 ]
gbuttonan = {
imageMessage: ler.message.imageMessage,
contentText: `${text}`,
footerText: `${fake}`,
buttons: but,
headerType: 2
}
await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
case 'buttontxt':

ppppp = 0
            txt = `Hallo ${pushname}
 ${ucapanWaktu}
            
*MEDIA MENU* 
${ppppp += 1}. _${prefix}smeme <replyimg>_
${ppppp += 1}. _${prefix}textstic <addtext>_
${ppppp += 1}. _${prefix}toimg <replysticker>_
${ppppp += 1}. _${prefix}take <replysticker>_
${ppppp += 1}. _${prefix}sticker <send/replyimg>_
${ppppp += 1}. _${prefix}pmeme <replyimg+text|txt>_
${ppppp += 1}. _${prefix}tovn <reply audio/vidio>_
${ppppp += 1}. _${prefix}tomp3 <vn/vidio>_
${ppppp += 1}. _${prefix}img2url < image >_

SOUNDMENU
${ppppp += 1}. _${prefix}addvn <nama vn>_
${ppppp += 1}. _${prefix}listvn_

*GABUT MENU*
${ppppp += 1}. _${prefix}darkjokes_
${ppppp += 1}. _${prefix}truth_
${ppppp += 1}. _${prefix}dare_

*DOWLOADER* 
${ppppp += 1}. _${prefix}play <query>_
${ppppp += 1}. _${prefix}play2 <query>_
${ppppp += 1}. _${prefix}play3 <query>_
${ppppp += 1}. _${prefix}ytmp3 <link>_
${ppppp += 1}. _${prefix}ytaudio <link>_
${ppppp += 1}. _${prefix}ytmp4 <link>_
${ppppp += 1}. _${prefix}yts <query>_
${ppppp += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${ppppp += 1}. _${prefix}autovn < on / off >_
${ppppp += 1}. _${prefix}autoketik < on / off >_
${ppppp += 1}. _${prefix}hidetag query_
${ppppp += 1}. _${prefix}rkick < reply kick >_
${ppppp += 1}. _${prefix}bugtoggle_
${ppppp += 1}. _${prefix}bugimage_
${ppppp += 1}. _${prefix}belanja_
${ppppp += 1}. _${prefix}+18 < Haram >_ `
but = [
            { buttonId: `${prefix}owner`, buttonText: { displayText: 'CREATOR' }, type: 1 },
            { buttonId: `${prefix}speed`, buttonText: { displayText: 'SPEED TEST'}, type: 1 }
                 ]
gbuttonan = {
contentText: `${txt}`,
footerText: `${fake}`,
buttons: but,
headerType: 1
}
await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
break
case 'rplymenu': 
pppppp = 0
            mess = `Hallo ${pushname}
 ${ucapanWaktu}
            
*MEDIA MENU* 
${pppppp += 1}. _${prefix}smeme <replyimg>_
${pppppp += 1}. _${prefix}textstic <addtext>_
${pppppp += 1}. _${prefix}toimg <replysticker>_
${pppppp += 1}. _${prefix}take <replysticker>_
${pppppp += 1}. _${prefix}sticker <send/replyimg>_
${pppppp += 1}. _${prefix}pmeme <replyimg+text|txt>_
${pppppp += 1}. _${prefix}tovn <reply audio/vidio>_
${pppppp += 1}. _${prefix}tomp3 <vn/vidio>_
${pppppp += 1}. _${prefix}img2url < image >_

SOUNDMENU
${pppppp += 1}. _${prefix}addvn <nama vn>_
${pppppp += 1}. _${prefix}listvn_

*GABUT MENU*
${pppppp += 1}. _${prefix}darkjokes_
${pppppp += 1}. _${prefix}truth_
${pppppp += 1}. _${prefix}dare_

*DOWLOADER* 
${pppppp += 1}. _${prefix}play <query>_
${pppppp += 1}. _${prefix}play2 <query>_
${pppppp += 1}. _${prefix}play3 <query>_
${pppppp += 1}. _${prefix}ytmp3 <link>_
${pppppp += 1}. _${prefix}ytaudio <link>_
${pppppp += 1}. _${prefix}ytmp4 <link>_
${pppppp += 1}. _${prefix}yts <query>_
${pppppp += 1}. _${prefix}tiktoknowm / wm <link>_

*MY MENU*
${pppppp += 1}. _${prefix}autovn < on / off >_
${pppppp += 1}. _${prefix}autoketik < on / off >_
${pppppp += 1}. _${prefix}hidetag query_
${pppppp += 1}. _${prefix}rkick < reply kick >_
${pppppp += 1}. _${prefix}bugtoggle_
${pppppp += 1}. _${prefix}bugimage_
${pppppp += 1}. _${prefix}belanja_
${pppppp += 1}. _${prefix}+18 < Haram >_ `
reply(mess)
break

//------------------< Cmd >-------------------
case 'jadibot':
			
				if (isGroup) return reply(`*Fitur Hanya dapat digunakan dalam Private Chat! => wa.me/6285892842367?text=${prefix}jadibot*`)
				jadibot(reply, pebz , from, mek)
				break

			case 'stopjadibot':
				if (!isOwner && !dev.key.fromMe) return reply("tidak bisa stopjadibot kecuali owner")
				stopjadibot(reply)
				break
	case 'listbot':
				let ts = 'L I S T B O T \n\n'
				let lbt = [];
				for (let i of listjadibot) {
					lbt.push(i.jid)
					ts += `N a m a : ${i.name}
T a g : @${i.jid.split('@')[0]}
D e v i c e: ${i.phone.device_manufacturer}
M o d e l : ${i.phone.device_model}\n\n`
				}
				mentions(monospace(ts), lbt, true)
				break
case 'totag':
    
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pebz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pebz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: stckntl
            }
            ini_buffer = fs.readFileSync(file)
            pebz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pebz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pebz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: stckntl
            }
            ini_buffer = fs.readFileSync(file)
            pebz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pebz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pebz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: stckntl
            }
            ini_buffer = fs.readFileSync(file)
            pebz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pebz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pebz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: stckntl
            }
            ini_buffer = fs.readFileSync(file)
            pebz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
	
case 'speed': case 'ping':
const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				p0 = ` Loaded Message
- [ Baileys ] *Libary*
- [ Speed ] *${latensiii}*`
reply (p0)
break
case 'owner': case 'creator':
				pebz.sendMessage(from, { displayname: "jeff", vcard: vcard }, MessageType.contact, {
					contextInfo: {
						text: 'hi',
						"forwardingScore": 1000000000,
						isForwarded: true,
						sendEphemeral: true,
						"externalAdReply": {
							"title": `F i z z. (@Fizz_Xyzz) �Instagram Story's`,
							"body": "",
							"previewType": "PHOTO",
							"thumbnailUrl": "https://telegra.ph/file/d5fc74e55a2efc3cb610b.jpg",
							"thumbnail": gambar3,
							"sourceUrl": ``
						}, mentionedJid: [sender]
					}, quoted: stckntl
				})
					
				
				break
case 'ttnowm': 
      case 'tiktoknowm':
                    
             if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)

 		if (!q) return reply('Linknya?')

 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)

    		.then(result => {

    		const { wm, nowm, audio } = result

    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)

    		.then(async (a) => {

    		mme = `*Link* : ${a.data}`

	pebz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',contextInfo: {"forwardingScore": 9, "isForwarded": false} ,quoted:stckntl,caption:mme})

		})

		})
		break
/*
case 'emojimix': {
	        if (!q) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await pebz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
*/
case 'take':
			
				if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
				
				if (!q) return reply('Reply Sticker')
				var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				var media = await pebz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				var packname = q.split('|')[0]
				var author = q.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					pebz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, { quoted: stckntl })
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
case 'bug':
try{
await pebz.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL ) 
} catch(err){
	console.log(err)
	}
break
case 'bug1':
try{
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
await pebz.toggleDisappearingMessages(from, 0)
} catch(err){
	console.log(err)
	}
break
       case 'addcmd': 
			case 'setcmd':{

                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return reply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            
       case 'delcmd':{
                  
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return reply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*�> ID :* ${i.id}\n*�> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
//====== B u t t o n. m e n u            

      
            break
case 'hidetag': case 'h':
			
				if (!q) return reply('Ingfonya apa?')
				var group = await pebz.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
					text: q,
					contextInfo: { mentionedJid: mem }
				}
				pebz.sendMessage(from, options, text)
				break
case 'q':
			
				if (!m.quoted) return reply('reply message!')
				let qse = pebz.serializeM(await m.getQuotedObj())
				if (!qse.quoted) return reply('the message you replied does not contain a reply!')
				await qse.quoted.copyNForward(m.chat, true)
				break
case 'autoketik':

if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':

if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'group': case 'grup':
				
				
				gbunan = [
{ buttonId: `${prefix}open`, buttonText: { displayText: 'OPEN GROUP' }, type: 1 },
{ buttonId: `${prefix}close`, buttonText: { displayText: 'CLOSE GROUP' }, type: 1 },
]
gbunan = {

contentText: 'OPEN : MEMBUKA GROUP\nCLOSE : MENUTUP GROUP',
footerText: 'Pilih Salah Satu Dibawah ini yah\n_____________________________________',
buttons: gbunan,
headerType: 1
}
pebz.sendMessage(from, gbunan, MessageType.buttonsMessage, {quoted: stckntl})
break
case 'open':
				
				pebz.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
				case 'close':
				
				pebz.groupSettingChange(from, GroupSettingChange.messageSend, true)
				break
case 'resetlink': case 'revokelink': case 'revoke':
			
				pebz.query({ json: ['action', 'inviteReset', from], expect200: true })
				linkgc = await pebz.groupInviteCode(from)
				reply('Succses Revoke!\n\nLink Group new:\nhttps://chat.whatsapp.com/' + linkgc)
				break
case 'kick':
			
				if (!q) return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
				
				y = q.split('@')[1] + '@s.whatsapp.net'
				pebz.groupRemove(from, [y])
				reply(`Succses kick target!`)
				break
			case 'rkick':
			
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		mentions(`Perintah di terima bye bye broo @${mentioned[0].split('@')[0]}`, mentioned, true)
				pebz.groupRemove(from, mentioned)
				break

case 'tovn': case 'getvn':
			
				if (!isQuotedAudio && !isQuotedVideo) return reply('Tag audio/vn/video nya!')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await pebz.downloadAndSaveMediaMessage(encmedia)
				hah = fs.readFileSync(media)
				pebz.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: stckntl })
				fs.unlinkSync(media)
				break

			case 'tomp3': case 'getmp3':
			
				pebz.updatePresence(from, Presence.composing)
				if (!isQuotedVideo && !isQuotedAudio) return reply(`Format salah!!\nExample : Reply video dengan caption ${prefix + command}`)
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await pebz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(mess.eror)
					buffer = fs.readFileSync(ran)
					pebz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: stckntl })
					fs.unlinkSync(ran)
				})
				break
				

//================================================================================/
//============================== G A M E  M E N U ================================/
//================================================================================/

case 'img2url':
			
				case 'imgurl':
				var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				var media = await pebz.downloadAndSaveMediaMessage(encmedia)
				var imgbb = require('imgbb-uploader')
				imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
					.then(data => {
						var caps = `  *IMGBB TO URL* \n\n *ID :* ${data.id}\n  *MimeType :* ${data.image.mime}\n *Extension :* ${data.image.extension}\n *URL :* ${data.display_url}`
						ibb = fs.readFileSync(media)
						pebz.sendMessage(from, ibb, image, { quoted: stckntl, caption: caps })
					})
					.catch(err => {
						throw err
					})
				
				break


//================================================================================/
//============================ F U N  T I M E  M E N U =============================/
//================================================================================/



case 'ppcp':
				case 'couple':
				case 'ppcouple':
				
				anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=c516b5cf955deb382038625b`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `YYYYYYY`,buttonText:{displayText: `THANKS PP NYAA`},type:1}]
              imageMsg = (await pebz.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:`H a f i z z - J s`, imageMessage: imageMsg,
              contentText:`cowo`,buttons,headerType:4}
              prop = await pebz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pebz.relayWAMessage(prop)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `${prefix}ppcp`,buttonText:{displayText: `KURANG LAGI DONG`},type:1}]
              imageMsg = (await pebz.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:`H a f i z z - J s`, imageMessage: imageMsg,
              contentText:`cewe`,buttons,headerType:4}
              Pep = await pebz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
             setTimeout( async () => {
 pebz.relayWAMessage(Pep)
}, 5000)
				break
case 'self':
				
				if (!public) return reply('*_Fitur sudah diaktifkan sebelumnya!_*')
				public = false
				return reply(`Mode : Self`, text)
				break

			case 'public':
				
				if (public) return reply('*_Fitur sudah diaktifkan sebelumnya_*')
				public = true
				return reply(`Mode : Public`, text)
				break
      case 'trut':
      case 'truth':
            if (!isGroup) return reply('KhususGrup')
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
	    	const ttrth = trut[Math.floor(Math.random() * trut.length)]
		    //truteh = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
	     	break
      case 'dare':
	    	if (!isGroup) return reply('KhususGrup')
	    	const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
	    	const der = dare[Math.floor(Math.random() * dare.length)]
      		//todz = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
            break
      case 'darkjokes':
            if (!isGroup) return reply(mess.only.group)
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT⏩'}, type: 1}]
           pto =await pebz.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Kek Masa Depanlu`,
           footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break

//================================================================================/
//============================== D O W L O A D E R ================================/
//================================================================================/
case 'play2':

		 if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')

reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
//reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {mimetype :  'audio/mp4' , duration : 0, ptt : false,contextInfo: {"forwardingScore": 9, "isForwarded": true}, quoted : stckntl , filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
//reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
//sendFileFromUrl(res.all[0].image, image, {quoted: sen, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {mimetype :  'audio/mp4' , duration : 0, ptt : false ,contextInfo: {"forwardingScore": 9, "isForwarded": true},  quoted : stckntl, filename: res[0].output})
}
break
    case 'play3':
           if (args.length < 1) return reply(`Send command *${prefix}play query`)
           reply(mess.wait)
           let yut = await yts(q)
           yta(yut.videos[0].url)             
           .then(async(res) => {
           const { thumb, title, filesizeF, filesize } = res
           const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n\n•💬 Title : ${yut.all[0].title}\n•⏰️ Uploaded on : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Duration : ${yut.all[0].timestamp}\n•👑 Channel : ${yut.all[0].author.name}\n•🔗 Link : ${yut.all[0].url}`
           ya = await getBuffer(thumb)
           py =await pebz.prepareMessage(from, ya, image)
           gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
           gbuttonan = {
           imageMessage: py.message.imageMessage,
           contentText: capti,
           footerText: 'Please select type☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
           break         
           
case 'ytsearch':
			case 'yts':
				if (args.length < 1) return reply('Tolong masukan query!')
				var srch = args.join('');
				try {
					var aramas = await yts(srch);
				} catch {
					return await pebz.sendMessage(from, 'Error!', MessageType.text, dload)
				}
				aramat = aramas.all
				var tbuff = await getBuffer(aramat[0].image)
				var ytresult = '';
				ytresult += ' *YOUTUBE SEARCH* '
				ytresult += '\n________________________\n\n'
				aramas.all.map((video) => {
					ytresult += ' Title: ' + video.title + '\n'
					ytresult += ' Link: ' + video.url + '\n'
					ytresult += ` Use Dowbload Typing ${prefix}ytmp3 [Link] Or ${prefix}ytmp4 [Link]` + '\n'
					ytresult += ' Durasi: ' + video.timestamp + '\n'
					ytresult += ' Upload: ' + video.ago + '\n________________________\n\n'
				});
				ytresult += ' *BOT*'
				pebz.sendMessage(from, tbuff, image, { quoted: mek, caption: ytresult })
				
				break
case 'playloc':
case 'play':
	try{
if(!q) return setReply("Teksnya mana om")

res = await yts(q)
let info = await ytdl.getInfo(res.all[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = res.all[0].url.split("=")[1]
thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
teks =`
Judul : ${res.all[0].title}
Ditonton : ${h2k(res.all[0].views)} Kali
Durasi : ${res.all[0].timestamp}
Audio : ${FileSize(audio[2].contentLength)}
Video : ${FileSize(format.contentLength)}`

yamyam = await getBuffer(`${thumbnya}`)
let aklo = [{
										"buttonId": `${prefix}playmp3 ${res.all[0].url} `,
										"buttonText": {
											"displayText": `AUDIO ${FileSize(audio[2].contentLength)}`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}playmp4 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `VIDIO ${FileSize(format.contentLength)}`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from,`*YOUTUBE DOWNLOADER*\n${teks}`, `� H a f i z z - J s`, yamyam, aklo, {contextInfo: {"forwardingScore": 9999999, "isForwarded": true} })
  } catch (err){
  	reply(`${err}`)
  teks =`
Judul : ${res.all[0].title}
Ditonton : ${h2k(res.all[0].views)} Kali
Durasi : ${res.all[0].timestamp}
Audio : Error
Video : Error`

yamyam = await getBuffer(`${thumbnya}`)
let aklo = [{
										"buttonId": `${prefix}playmp3 ${res.all[0].url} `,
										"buttonText": {
											"displayText": `AUDIO Error`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}playmp4 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `VIDIO Error`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from,`*YOUTUBE DOWNLOADER*\n${teks}`, `� H a f i z z - J s`, yamyam, aklo, {contextInfo: {"forwardingScore": 9999999, "isForwarded": true} })
  }
  break
case 'playmp3':
	try{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
veryLow = audioFormats[3].contentLength
low = audioFormats[2].contentLength
medium = audioFormats[0].contentLength
if(Number(low) > 15000000 ) return reply(`Bjir sizenya ${FileSize(low)}`)
///reply("*Downloading...*")
sendFileFromUrl (audioFormats[2].url, audio, {quoted: mek}) 
} catch(err){
reply(`${err}`)
}
	break
case 'playmp4':
	try{
if(!isUrl) return setReply("Masukan link")
////setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return reply(`Bjir sizenya ${FileSize(format.contentLength)}`)
sendMediaURL (from, format.url, "Nih")
  } catch(err){
reply(`${err}`)
}
break
	
break
     case 'ytmp3':
           if (args.length < 1) return reply('Link?')
           if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
           reply("Please Waiting!! Downloading Media. . .")
           teks = args.join(' ')
           try {
		
		let yut = await yts(teks)
		yta(yut.videos[0].url)
		.then((res) => {
		const { dl_link, thumb, title, filesizeF, filesize } = res
		axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		.then((a) => {
		if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		sendMediaURL(from, dl_link, '')
		
		})
		})
		.catch((err) => reply(`${err}`))
		} catch (err) {
		sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
		console.log(color('[PlayMp3]', 'red'), err)
		reply(mess.error.api)
		}
		break
     case 'ytmp4':
           if(!q) return reply('linknya?')            
           res = await ytv(`${q}`).catch(e => {
           reply('```[ ! ] Error Saat Mengirim Video```')})
           sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
           break            
     case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':
 	       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		   if (!q) return reply('Link?')
 		   reply(mess.wait)
		   hx.ttdownloader(`${args[0]}`)
    	   .then(result => {
    	   const { wm, nowm, audio } = result
    	   axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    	   .then(async (a) => {
    	   me = `Nih Bang`
	       pebz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
    	   })
		   })
		   break
//================================================================================/
//============================= M E D I A  M E N U ================================/
//================================================================================/
     case 'potomeme': case 'pmeme':
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await pebz.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
           pebz.sendMessage(from, resu, image, {quoted: troli})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break   
     case 'smeme': case 'stickmeme': case 'sm': {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  pebz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendStickerFromUrl(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break      
           
      case 'textstic':
            if (args.length == 0) return reply(`Example: ${prefix + command} pebz`)
            buffer = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${q}&color=black&apikey=${HardiApi}`)
            pebz.sendMessage(from, buffer, sticker, { quoted: troli })
            break
      case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pebz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
			buffer = fs.readFileSync(ran)
			pebz.sendMessage(from, buffer, image, {quoted: fkontak})
			fs.unlinkSync(ran)
			})
			break            
      case 'sticker': case 'stiker': case 'sg': case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/ 

           //+++ WELCOME +++\\
                    case 'welcome':   
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
         if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
         if ((args[0]) === 'on') {
         if (isWelkom) return reply('welcome sudah aktif')
         _welkom.push(from)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else if ((args[0]) === 'off') {
         if (!isWelkom) return reply('welcome sudah off sebelumnya')
             _welkom.splice(from, 1)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else {
         reply('on untuk mengaktifkan, off untuk menonaktifkan')
         }
         break
           case 'block':
	
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return reply("Ga mau")
await pebz.blockUser(woke, "add")
await addBlock(woke, blocked)
await reply( `Sukses block ${woke.split("@")[0]}`);
    
} else if (mek.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return reply("Hanya bisa di group")
asu = mek.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return reply("Ga mau")
await pebz.blockUser(Nomer, "add")
await addBlock(Nomer, blocked)
await reply( `Berhasil block ${Nomer.split("@")[0]}`);
    
 } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await pebz.blockUser(ahah, "add")
await addBlock(ahah, blocked)
await reply(`${ahah.split("@")[0]} berhasil di block`);
   } else{
 reply(`Kirim perintah ${prefix}block @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    


case 'unblock':
	
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return reply("Ga mau")
await pebz.blockUser(woke, "remove")
await unBlock(woke, blocked)
await reply( `Sukses unblock ${woke.split("@")[0]}`);
    
} else if (mek.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return reply("Hanya bisa di group")
asu = mek.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return reply("Ga mau")
await pebz.blockUser(Nomer, "remove")
await unBlock(Nomer, blocked)
await reply( `Berhasil unblock ${Nomer.split("@")[0]}`);
    
 } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await pebz.blockUser(ahah, "remove")
await unBlock(ahah, blocked)
await reply(`${ahah.split("@")[0]} berhasil di unblock`);
   } else{
 reply(`Kirim perintah ${prefix}unblock @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    

//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/           
            
            case 'donasi':
	    	pebz.sendMessage(from, donasi(prefix, donasi), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                 
                    case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
break
                    case 'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					     svst = args.join(' ')
					
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await pebz.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.opus`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					reply( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
			teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					
					reply(teks)
					break

//================================================================================/
//============================ E N D   F U N C T I O N ==============================/
//================================================================================/ 

default:

for (let zeeonee of audionye){
	members_id = []
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
	const sendVnn = (result) => {pebz.sendMessage(from, result, audio, {mimetype: 'audio/mp4', duration: '0', ptt: true,contextInfo: {"forwardingScore": 9999999, "isForwarded": false} , quoted: { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) },
"message": {
"conversation":  `*${zeeonee}*`}}})}
    
				if (budy === zeeonee){
					console.log(color('[ CMD ]', 'aqua'), 'AUDIO MESSAGE', color(pushname))
		result = fs.readFileSync(`./media/audio/${zeeonee}.opus`)
	sendVnn(result)
}
}
	if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				   try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
			    	} catch (err) {
					reply(`${err}`)
				    }
		        	} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
			    	try {
					return pebz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				    } catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
