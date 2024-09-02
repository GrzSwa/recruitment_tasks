const cars = {
  cars: [
    {
      passenger_cars: [
        {
          name: "BMW",
          model: "320 (E46)",
          img: "/task_1/cars/passenger/bmw.jpg",
        },
        {
          name: "Audi",
          model: "A4 (B8)",
          img: "/task_1/cars/passenger/audi.jpg",
        },
        {
          name: "Mercedes-Benz",
          model: "C-Class (W205)",
          img: "/task_1/cars/passenger/mercedes.jpg",
        },
        {
          name: "Volkswagen",
          model: "Passat (B7)",
          img: "/task_1/cars/passenger/passat.jpg",
        },
        {
          name: "Toyota",
          model: "Camry (XV70)",
          img: "/task_1/cars/passenger/toyota.jpg",
        },
        {
          name: "Honda",
          model: "Accord (10th Gen)",
          img: "/task_1/cars/passenger/honda.jpg",
        },
        {
          name: "Ford",
          model: "Mondeo (MK5)",
          img: "/task_1/cars/passenger/ford.jpg",
        },
      ],
    },
    {
      vans: [
        {
          name: "Mercedes-Benz",
          model: "Vito",
          img: "/task_1/cars/passenger/ford.jpg",
        },
        {
          name: "Ford",
          model: "Transit",
          img: "/task_1/cars/passenger/ford.jpg",
        },
        {
          name: "Volkswagen",
          model: "Transporter (T6)",
          img: "/task_1/cars/passenger/volkswagen.jpg",
        },
        {
          name: "Renault",
          model: "Trafic",
          img: "/task_1/cars/passenger/renault.jpg",
        },
        {
          name: "Opel",
          model: "Vivaro",
          img: "/task_1/cars/passenger/opel.jpg",
        },
        {
          name: "Citroën",
          model: "Jumpy",
          img: "/task_1/cars/passenger/citroen.jpg",
        },
        {
          name: "Peugeot",
          model: "Expert",
          img: "/task_1/cars/passenger/peugeot.jpg",
        },
      ],
    },
  ],
};

class API {
  constructor() {}

  get(path) {
    if (path == "/passengerCars") {
      return { status: 200, message: "OK", data: cars.cars[0].passenger_cars };
    } else if (path == "/vans") {
      return { status: 200, message: "OK", data: cars.cars[1].vans };
    } else {
      return { status: 404, message: "Not Found" };
    }
  }
}

export default API;
