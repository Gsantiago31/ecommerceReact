
export const randomMap = (items, n) => {
    console.log(items)
    return items
        .sort(() => Math.random() - 0.5)  // Ordenar aleatoriamente los elementos
        .slice(0, n)  // Obtener solo los primeros n elementos
        .map(x => x ** 2);  // Mapear cada elemento al cuadrado
};