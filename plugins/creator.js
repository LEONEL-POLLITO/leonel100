let handler = function (m) {
  // this.sendContact(m.chat, '51917473908', 'Nurtuj', m)
  this.sendContact(m.chat, '51917473908', 'πle0π', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
