const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av insurgente 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);
persona.saludar();

persona.telefono = "555-555-444";

console.log(persona.telefono);

persona.despedir = () => {
  console.log("Adios");
};

persona.despedir();

delete persona.telefono;

delete persona.despedir;
