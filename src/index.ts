import express from 'express'
import cors from 'cors'

import prisma from './external/db'

import { routerDiaT } from './routers/DiaTrabalhado'

const port = process.env.PORT || 8182
const app = express()


app.use(express.json())
app.use(cors())

app.use('/diaTrabalhado', routerDiaT)
app.get('/', async (req, res) => {
  res.send(await prisma.diaTrabalhado.findMany())
})


app.listen(port, () => {
  console.log('api rodando')
})