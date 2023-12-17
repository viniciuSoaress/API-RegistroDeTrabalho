import { Router } from "express";
import GetRegisters from "../../core/diaTrabalhado/service/GetRegisters";


export default class GetController {
  constructor(
    readonly server: Router,
    readonly casoDeUso: GetRegisters
  ) {
    server.get('/', async (req, res, next) => {
      try {
        res.send(await casoDeUso.handle())
      } catch (error) {
        next(error)  
      }
    })
  }
}