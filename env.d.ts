declare namespace NodeJS {
  interface ProcessEnv {
    readonly MONGO_URL: string
    readonly GOOGLE_ID: string
    readonly GOOGLE_SECRET: string
  }
}