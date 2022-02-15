import { Client as DiscordClient, ClientOptions } from 'discord.js'
import { EnvHelper } from '../helpers/EnvHelper'

export class DiscordBot extends DiscordClient {
  public constructor(options: ClientOptions, token: string) {
    super(options)

    this.login(token)
  }

  start() {
    this.on('ready', () => {
      console.log(`${this.user?.tag} is online!`)
    })

    this.on('messageCreate', message => {
      if (message.author.bot) return

      if (message.content.startsWith(`${EnvHelper.PREFIX}abracinho`)) {
        let member = message.mentions.members?.first()

        if (!member) {
          message.reply('Tá carente paizao?')
          return
        }

        member.kick().then(() => {
          message.reply(':boot: BICUDA NA POOOOOOOC!!! :boot:')
          message.reply('https://giphy.com/gifs/ruRWsEW0pgDNoNjmPm')
        })
      }

      if (message.content.startsWith(`${EnvHelper.PREFIX}carinho`)) {
        let member = message.mentions.members?.first()

        if (!member) {
          message.reply('Tá carente paizao?')
          return
        }

        message.reply(
          ':kissing_closed_eyes: carinho na poc :kissing_closed_eyes: '
        )
        message.reply(
          'https://pm1.narvii.com/6890/4b538e9e707ef2b5dceb67c6d6b4b7f3792bf827r1-540-525v2_hq.jpg'
        )
      }
    })
  }
}
