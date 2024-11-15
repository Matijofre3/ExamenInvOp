const calcularFrigorias = require('./frigoriasCalculator');

describe('calcularFrigorias', () => {
    test('Debería calcular correctamente las frigorías para una habitación de 2x3x4 m', () => {
        const resultado = calcularFrigorias(2, 3, 4);
        expect(resultado).toBe(1200); // Volumen = 24 m3 * 50 frigorías
    });

    test('Debería lanzar un error si alguna dimensión es 0', () => {
        expect(() => calcularFrigorias(0, 3, 4)).toThrow("Las dimensiones deben ser mayores a 0.");
    });

    test('Debería lanzar un error si alguna dimensión es negativa', () => {
        expect(() => calcularFrigorias(-2, 3, 4)).toThrow("Las dimensiones deben ser mayores a 0.");
    });

    test('Debería calcular correctamente las frigorías para una habitación de 5x5x5 m', () => {
        const resultado = calcularFrigorias(5, 5, 5);
        expect(resultado).toBe(6250); // Volumen = 125 m3 * 50 frigorías
    });

    test('Debería calcular correctamente las frigorías para una habitación de dimensiones pequeñas (1x1x1 m)', () => {
        const resultado = calcularFrigorias(1, 1, 1);
        expect(resultado).toBe(50); // Volumen = 1 m3 * 50 frigorías
    });
});
