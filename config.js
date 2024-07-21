const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22389520946" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22389520946";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_58_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNixcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaU40VW9JNlJDQWZlSEdEbVdwbWk5SlZNQ2o1dVFlY2VmSTNIU2dMcDdndz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjM3MzEwNzU1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzdGRkU5Qjk3RUE3OUNDNkI3MDY4NzczRjA2NTlDOTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTcwMzI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzNzMxMDc1NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDMTIyRUIzMTMxQ0RFMjczQ0IzNDA1OTE5MkZENUJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU3MDMyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoVVozeF90SVRoLW8tQjRDTVJleUxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQzMzc1NmZiLWY2M2MtNDg1MC04MzkwLWNkM2E5YjA0ZWFmZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAzMyxcbiAgICAgIDIzNixcbiAgICAgIDE2MSxcbiAgICAgIDExMyxcbiAgICAgIDEyLFxuICAgICAgMTgsXG4gICAgICAxMTcsXG4gICAgICAyNDksXG4gICAgICAyNDEsXG4gICAgICAxOSxcbiAgICAgIDIzOCxcbiAgICAgIDM1LFxuICAgICAgMjA4LFxuICAgICAgMjQ0LFxuICAgICAgMjE1LFxuICAgICAgMjIxLFxuICAgICAgNixcbiAgICAgIDEwMixcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDE3OSxcbiAgICAgIDc5LFxuICAgICAgMTkyLFxuICAgICAgMTQzLFxuICAgICAgMjM2LFxuICAgICAgMjA1LFxuICAgICAgMTA0LFxuICAgICAgNTYsXG4gICAgICA3MCxcbiAgICAgIDEwNyxcbiAgICAgIDQ1LFxuICAgICAgMTkxLFxuICAgICAgMjUsXG4gICAgICA3MyxcbiAgICAgIDEzOSxcbiAgICAgIDE2NSxcbiAgICAgIDE4MyxcbiAgICAgIDQ5LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZDTURTUzlUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM3MzEwNzU1NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgwNDE0NDYzMzkzOTY5OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIu+9nuephuiQqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05mZ2t0b0ZFSkNvOUxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNXUyazJmaTFqNTI1WXlXaEhkQzNGMHFiRGxacHIzNERGZTJIOGZzZFBHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIycXYzUFpuRS9pYnNxMnBWZmJxYU9zV1d0THRhSm12ZEcwcUQrNnFzSTFYaGxzeWpBZjRZdWhvWmF0dDVpa0h3ckVveVE2dFE1ZW9IMnlXQllyZUdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoUEJhVmZiUUhISjhWYzY3QXVhOU55QXFPU001dTl3NmZmc0QzVXZyRzZXUDR2NEJwRjdVMkN4NVNSRHR5UnJ0Z3hwOFRrRkVmT2w5SktKekdUaThDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM3MzEwNzU1NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU3MDMyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhkZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRmLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzJPOXFDWUtvZ3ptdUZoSk5CYWh1b1JCWXNJeHlKbklKaGVaamk3TG80UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTMxMjI4MjQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDkwNTg1NzM4NDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Moussa",
  packname: process.env.PACK_NAME || "Fofana",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "FOFANA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
