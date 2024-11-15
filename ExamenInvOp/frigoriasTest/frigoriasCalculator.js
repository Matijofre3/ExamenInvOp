/**
 * Calcula las frigorías necesarias para enfriar una habitación.
 * @param {number} alto - Altura de la habitación en metros.
 * @param {number} ancho - Ancho de la habitación en metros.
 * @param {number} profundidad - Profundidad de la habitación en metros.
 * @returns {number} - Frigorías necesarias.
 * @throws {Error} - Si alguno de los parámetros es inválido.
 */
function calcularFrigorias(alto, ancho, profundidad) {
    if (alto <= 0 || ancho <= 0 || profundidad <= 0) {
        throw new Error("Las dimensiones deben ser mayores a 0.");
    }
    const volumen = alto * ancho * profundidad;
    return volumen * 50;
}

module.exports = calcularFrigorias;
