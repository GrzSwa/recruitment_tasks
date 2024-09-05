const cars = {
  cars: [
    {
      passenger_cars: [
        {
          name: "BMW",
          model: "320 (E46)",
          img: "/cars/passenger/bmw.jpg",
        },
        {
          name: "Audi",
          model: "A4 (B8)",
          img: "/cars/passenger/audi.jpg",
        },
        {
          name: "Mercedes-Benz",
          model: "C-Class (W205)",
          img: "/cars/passenger/mercedes.jpg",
        },
        {
          name: "Volkswagen",
          model: "Passat (B7)",
          img: "/cars/passenger/passat.jpg",
        },
        {
          name: "Toyota",
          model: "Camry (XV70)",
          img: "/cars/passenger/toyota.jpg",
        },
        {
          name: "Honda",
          model: "Accord (10th Gen)",
          img: "/cars/passenger/honda.jpg",
        },
        {
          name: "Ford",
          model: "Mondeo (MK5)",
          img: "/cars/passenger/ford.jpg",
        },
      ],
    },
    {
      vans: [
        {
          name: "Mercedes-Benz",
          model: "Vito",
          img: "/cars/vans/mercedes.jpg",
        },
        {
          name: "Ford",
          model: "Transit",
          img: "/cars/vans/ford.jpg",
        },
        {
          name: "Volkswagen",
          model: "Transporter (T6)",
          img: "/cars/vans/volkswagen.jpg",
        },
        {
          name: "Renault",
          model: "Trafic",
          img: "/cars/vans/renault.jpg",
        },
        {
          name: "Opel",
          model: "Vivaro",
          img: "/cars/vans/opel.jpg",
        },
        {
          name: "Citroën",
          model: "Jumpy",
          img: "/cars/vans/citroen.jpg",
        },
        {
          name: "Peugeot",
          model: "Expert",
          img: "/cars/vans/peugeot.jpg",
        },
      ],
    },
  ],
  seo: [
    {
      header:
        "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nullacommodo.",
      content:
        "Cum accusam est aliquyam takimata voluptua sed in id. Veniam vel sed elitr veniam ut eos in velit nibh commodo. Ipsum dolore takimata amet aliquyam velit consetetur ut est facilisis ipsum erat magna sea eirmod dolor voluptua. Sit no autem est in laoreet ut ipsum dolor sed eu tempor lorem justo. Vero consequat eos. Erat aliquyam est amet feugait et.",
    },
    {
      header: "Duo dignissim commodo eu et aliquip tincidunt dolor nisl.",
      content:
        "Lorem ipsum dolor sit amet tempor exerci accusam sit eirmod ipsum molestie ipsum dolore sadipscing. Labore facilisis dolor ipsum sit dolores aliquam dolore amet et lorem at veniam dolor erat ipsum ut. Diam assum ut tincidunt ut amet erat accusam accusam tincidunt ipsum zzril sanctus amet eos ipsum. Vulputate eos nulla molestie iusto at takimata velit ipsum ea ipsum at. Sea dolore commodo facer elitr.",
    },
  ],
};

class API {
  get(path) {
    if (path === "/passengerCars") {
      return { status: 200, message: "OK", data: cars.cars[0].passenger_cars };
    } else if (path === "/vans") {
      return { status: 200, message: "OK", data: cars.cars[1].vans };
    } else if (path === "/seo") {
      return { status: 200, message: "OK", data: cars.seo };
    } else {
      return { status: 404, message: "Not Found" };
    }
  }
}

export default API;
