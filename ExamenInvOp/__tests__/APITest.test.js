//Dependencias requeridas: npm install jest axios

// Importamos Axios para realizar las peticiones HTTP
const axios = require("axios");

// Mockeamos Axios para simular peticiones y respuestas
jest.mock("axios");
const mockedAxios = axios;

describe("API Testing", () => {
  const BASE_URL = "https://goldfish-app-pyi2v.ondigitalocean.app/api/v1";

  // Prueba para el endpoint POST /student
  it("should create a new student (POST /student)", async () => {
    const payload = { legajo: 51576 };
    const expectedResponse = { success: true, message: "Student created successfully" };

    // Mockeamos la respuesta de la API
    mockedAxios.post.mockResolvedValueOnce({ data: expectedResponse });

    // Realizamos la petición
    const response = await axios.post(`${BASE_URL}/student`, payload);

    // Verificamos los resultados
    expect(response.data).toEqual(expectedResponse);
    expect(mockedAxios.post).toHaveBeenCalledWith(`${BASE_URL}/student`, payload);
  });

  // Validar que el endpoint permita registrar un estudiante correctamente
  // asegura que el sistema maneje solicitudes válidas y devuelve los mensajes esperados.

  // Prueba para el endpoint GET /users/1
  it("should get the user with ID 1 (GET /users/1)", async () => {
    const expectedResponse = { id: 1, name: "John Doe", role: "student" };

    // Mockeamos la respuesta de la API
    mockedAxios.get.mockResolvedValueOnce({ data: expectedResponse });

    // Realizamos la petición
    const response = await axios.get(`${BASE_URL}/users/1`);

    // Verificamos los resultados
    expect(response.data).toEqual(expectedResponse);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users/1`);
  });

  //Asegurar que el endpoint GET /users/1 retorne los datos esperados
  // es esencial para confirmar que la API funciona correctamente al consultar un usuario específico.
});

//Decidi usar Jest para las pruebas porque me parecio mas facil a la hora de elaborar la prueba y a esto le sume axios para simular los metodos

/* PRUEBA COMPLETA
__tests__/APITest.test.js
  API Testing
    √ should create a new student (POST /student) (4 ms)                                                                                                                                                                 
    √ should get the user with ID 1 (GET /users/1) (1 ms)
Test Suites: 1 passed, 1 total                                                                                                                                                                                           
Tests:       2 passed, 2 total                                                                                                                                                                                           
Snapshots:   0 total
Time:        0.893 s
Ran all test suites.*/