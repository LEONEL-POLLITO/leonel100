let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
**********£

MY GIT:

**********£
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

