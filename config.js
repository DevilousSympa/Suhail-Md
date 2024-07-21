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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22373107557";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwd3R6NFJwNEVvTWt4OG1oSlIxR0hYZUJhLzRqYUFXNHdMcmpqenUyZVY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMzczMTA3NTU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMUU5RjkzM0VCQTE1NTg5N0QyMThENjBGRjk2MzlBOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NjI0NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjM3MzEwNzU1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTI1QTUxQTAzRDZEREVGNUFBQUZEQTZFNEZEMThCNUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTYyNDcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1pYVBMWkRoUlY2VDJaNnFlTDR4THdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTE3ZjliMDctZmQ3MS00MWQwLWI3YWEtNDhmODY1ZGEyNGZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDIyNCxcbiAgICAgIDE1MCxcbiAgICAgIDE0OCxcbiAgICAgIDE3LFxuICAgICAgNyxcbiAgICAgIDg1LFxuICAgICAgNzcsXG4gICAgICAyNTQsXG4gICAgICAxMTksXG4gICAgICAyMTAsXG4gICAgICAyMTksXG4gICAgICA4LFxuICAgICAgMzksXG4gICAgICA1LFxuICAgICAgNjEsXG4gICAgICAxMTYsXG4gICAgICAyNDIsXG4gICAgICAxOTksXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDI1LFxuICAgICAgMjAsXG4gICAgICAyMDksXG4gICAgICAyNDcsXG4gICAgICAyMTUsXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICA2MCxcbiAgICAgIDI0MCxcbiAgICAgIDY4LFxuICAgICAgMTEsXG4gICAgICAyMjIsXG4gICAgICAyMTEsXG4gICAgICAxNDAsXG4gICAgICAxOCxcbiAgICAgIDgzLFxuICAgICAgODQsXG4gICAgICAxMDMsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWldOWlJHWEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzczMTA3NTU3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODA0MTQ0NjMzOTM5Njk6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi772e56mG6JCoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZna3RvRkVPRHE4N1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1dTJrMmZpMWo1MjVZeVdoSGRDM0YwcWJEbFpwcjM0REZlMkg4ZnNkUEdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFXeDQvMzVWR2J6MlBsL0s5S0lFdjlCRldRQnQ4MlFPSzlIYkRrQmxqdWtXeXpUY0VBSFhHWklRM3RlYnAvbHFVR2h2TklZcE95czVWV3JjcHh6WkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF2VVZKcEFNdzVSUVE0VFpnWlFnbVQ4TE95N0I1UHpRdTBUbS9aR1ZxeEcrRlIreW5pMFdYcGlYUExEMzcrbGdURXlnbXpmekFCVmI1anR6MlpSdUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzczMTA3NTU3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTYyNDY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGRmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvMk85cUNZS29nem11RmhKTkJhaHVvUkJZc0l4eUpuSUpoZVpqaTdMbzRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzEyMjgyNDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTA1ODU3Mzg0OFwifSIKfQ=="  // PUT your SESSION_ID 


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
