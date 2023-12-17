import CasoDeUso from "../../shared/CasoDeUso";
import DiaTrabalhado from "../model/DiaTrabalhado";
import PrismaRepo from "./PrismaRepo";

export default class GetRegisters implements CasoDeUso<void, DiaTrabalhado[]>{
 
  constructor(private readonly prismRepo: PrismaRepo){}
 
  async handle(): Promise<DiaTrabalhado[]> {
    return await this.prismRepo.get()
  }
}