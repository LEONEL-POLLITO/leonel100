let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /S\  /m\  /3\  /3\  /0\ 
<___><___><___><___><___>

COMO CREAR ESTE BOT:

##############

๐๐ฎ ๐พ๐๐๐ฃ๐๐ก:

###$รท%_โฌโฌโฌ&&&&โฌ&&
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
