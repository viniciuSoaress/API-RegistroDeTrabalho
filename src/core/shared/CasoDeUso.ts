export default interface CasoDeUso<E, S> {
  handle(dado: E): Promise<S>
}