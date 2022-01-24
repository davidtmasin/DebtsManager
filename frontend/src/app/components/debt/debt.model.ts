// Classe de modelo para meus débitos

export interface Debt {
  //para tornar um atributo como opcional use o símbolo ?
  id: number
  name: string
  price?: number
  numberOfParc?: number
}
