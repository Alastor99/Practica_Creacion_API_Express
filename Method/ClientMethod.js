/*___________________________________________________________________________
1. Diseñe un modelo de datos de la información que va a manipular, POR
LO MENOS UNA INSTANCIA (ejemplo: usuarios, clientes, registros;
aunque sea para la práctica, y cada uno no debe tener menos de cuatro
campos o propiedades)
______________________________________________________
Datos de Clientes:                                  
______________________________________________________ 
______________________________________________________
=> Codigo de identificacion del cliente: Id_Cliente
=> Nombre y Apellido del cliente: NA_Cliente
=> Telefono del cliente: Telefono
______________________________________________________
4. Aplique MVC a la estructura de las carpetas, definiendo las rutas en la
carpeta `controllers`, luego importe esos controladores en su
aplicación.
____________________________________________________________________________*/

const { Router } = require("express");
const ClientMethod = Router();

const Clientes = [
    {id_Cliente:1, NA_Cliente:'Yader Centeno', Telefono:89262853}
];

/*
5. Defina los métodos para manejar las diferentes solicitudes HTTP GET,
POST, PUT, PATCH y DELETE en cada archivo de ruta (controlador).

6. Practique con las diferentes funciones que ofrece Express para
manipular los objetos REQUEST y RESPONSE, según convenga el caso
de su modelo de datos.*/

/*Mostrar todos los datos del array (Get)*/
ClientMethod.get("/MonstrarTodosLosClientes", (req, res) => {
  res.status(200).json(Clientes);
});

/*Mostrar datos de un cliente (Get)*/
ClientMethod.get("/Clientes/:id_Cliente", (req, res) => {
  const Cliente = Clientes.find((c) => c.id_Cliente === parseInt(req.params.id_Cliente));
  if (!Cliente) {
    res.status(404).json({ message: "Datos del cliente no encontrados!" });
  } 
  else {
    res.status(200).json(Cliente);
  }
});

/*Agregar nuevo cliente (Post)*/ 
productosCont.post("/Add_Clientes", (req, res) => {
  const NuevoCliente = { 
    id: Clientes.length + 1,
    NA_Cliente:req.body.NA_Cliente,
    Telefono:req.body.Telefono
    };
  PRODUCTOS.push(NuevoCliente);
  res.status(201).json(NuevoCliente);
});

// * Modificar datos de un cliente (Put)
productosController.put("/Clientes/:id_Cliente", (req, res) => {
  const index = Clientes.findIndex((c) => c.id_Cliente === parseInt(req.params.id_Cliente));
  if (index !== -1) {
    Clientes[index].NA_Cliente = NA_Cliente;
    Clientes[index].Telefono = Telefono;;
    res.status(200).json(Clientes[index]);
  } else {
    res.status(404).json({ message: "Cliente no encontrado." });
  }
});

// * Eliminar un producto (Delete)
productosController.delete("/Clientes/:id_Cliente", (req, res) => {
  const index = Clientes.findIndex((c) => c.id_Cliente === parseInt(req.params.id_Cliente));
  if (index !== -1) {
    Clientes.splice(index, 1);
    res.status(204).end({message:"Cliente eliminado"});
  } else {
    res.status(404).json({ message: "No se encontro el producto" });
  }
});

module.exports = ClientMethod;