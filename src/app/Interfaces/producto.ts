export interface ProductoDTO {
    Codigo:string,
    Descripcion:string,
    ListaDePrecios: number[],
    Imagen:string,
    ProductoParaLaVenta: boolean,
    PorcentajeIva: number
}
