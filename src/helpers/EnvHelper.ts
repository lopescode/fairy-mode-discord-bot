export abstract class EnvHelper {
  static readonly TOKEN = String(process.env.TOKEN)
  static readonly PREFIX = String(process.env.PREFIX)
  static readonly GIPHYTOKEN = String(process.env.GIPHYTOKEN)
}
