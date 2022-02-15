import 'dotenv/config'
import { DiscordBot } from './Client/DiscordBot'
import { EnvHelper } from './helpers/EnvHelper'

const client: DiscordBot = new DiscordBot(
  { intents: ['GUILDS', 'GUILD_MESSAGES'] },
  EnvHelper.TOKEN
)

client.start()
