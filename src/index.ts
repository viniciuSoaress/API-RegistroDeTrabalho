import express from 'express'
import cors from 'cors'

import { routerDiaT } from './routers/DiaTrabalhado'

const port = process.env.PORT || 8182
const app = express()


app.use(express.json())
app.use(cors())

app.use('/diaTrabalhado', routerDiaT)


app.listen(port, () => {
  console.log('api rodando')
})