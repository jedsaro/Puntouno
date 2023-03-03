import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
export const frontend_location = join(__dirname, '../client/landing_page/src/pages/')