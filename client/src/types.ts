export { }
declare global {

  interface ImportMetaEnv {
    VITE_APP_TITLE: string
    VITE_PORT: number
    VITE_PROXY: string
    VITE_ADMIN_VERSION: string
  }

}