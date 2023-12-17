import { Router } from "express";
import GetIdDiaDaSemana from "../../core/diaTrabalhado/service/GetIdDiaDaSemana";


export default class GetDiaController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: GetIdDiaDaSemana
  ) {
    server.get('/dia/:id', async (req, res, next) => {
      const id = req.params.id 
      try {
        res.send(await casoDeUso.handle(id))
      } catch (error) {
        next(error)
      }
    })
  }
}