import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '\nApa yg mau dicari kak?\n\nContoh: .yts mengharapkanmu'
  m.reply(global.wait)
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š *${v.title}* 
š _${v.url}_
ā° Duration: ${v.durationH}
š¤ Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš *${v.channelName}* 
āš _${v.url}_
āš _${v.subscriberH} Subscriber_
āš„ ${v.videoCount} video
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['ytsearch']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i

export default handler
