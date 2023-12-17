import { Router } from "express";
import GetIdFuncionario from "../../core/diaTrabalhado/service/GetIdFuncionari";


export default class GetFuncionarioController{

  constructor(
    readonly server:Router,
    readonly casoDeUso: GetIdFuncionario
  ){
    server.get('/funcionario/:id', async (req, res, next) => {
      const id = Number(req.params.id)
      try{
        res.send(await casoDeUso.handle(id))
      }catch(error){
        next(error)
      }
    })
  }
}