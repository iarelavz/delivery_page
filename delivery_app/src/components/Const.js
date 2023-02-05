//ENUMS for easy data handle
export const DeliveryMethod = {
  HOME: "Házhozszállítás",
  STORE: "Hagyományos áruházi átvétel",
  ONEHOUR: "1 órás áruházi átvétel",
  TODAY: "Aznapi kiszállítás Budapesten", //TODO BP területén
  ONEDAY: "1 munkanapos kiszállítás",
  ALL: "Mindegyik",
  PUP: "Pick up Point",
};

export const Size = {
  SMALL: "Kisméretű csomag",
  MEDIUM: "Közepes méretű csomag",
  BIG: "Nagyméretű csomag",
  ALL: "Bármilyen méretű csomag",
};

export const Curier = {
  ROYAL: "Royal",
  FOX: "Foxpost",
  MPL: "MPL",
  DPD: "DPD",
  ALL: "Mindegyik",
  NONE: "Nincs hozzárdendelt futárszolgálat",
};

export const Supply = {
  CAC: "Külső raktáron",
  CAR: "Raktáron",
  STORE: "Bolti készleten",
  ALL: "Mindegyik",
};

export const data = [
  {
    date: new Date("2023-03-27"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.BIG,
    curier: Curier.ROYAL,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-03-30"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.MEDIUM,
    curier: Curier.DPD,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-03-31"),
    deliveryMethod: DeliveryMethod.PUP,
    size: Size.SMALL,
    curier: Curier.FOX,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-03-29"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.SMALL,
    curier: Curier.MPL,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-04-2"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.BIG,
    curier: Curier.ROYAL,
    supply: Supply.CAR,
  },
  {
    date: new Date("2023-04-3"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.SMALL,
    curier: Curier.MPL,
    supply: Supply.CAR,
  },
  {
    date: new Date("2023-04-4"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.MEDIUM,
    curier: Curier.DPD,
    supply: Supply.CAR,
  },
  {
    date: new Date("2023-04-5"),
    deliveryMethod: DeliveryMethod.PUP,
    size: Size.SMALL,
    curier: Curier.FOX,
    supply: Supply.CAR,
  },
  {
    date: new Date("2023-03-29"),
    deliveryMethod: DeliveryMethod.HOME,
    size: Size.MEDIUM,
    curier: Curier.MPL,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-03-31"),
    deliveryMethod: DeliveryMethod.STORE,
    size: Size.ALL,
    curier: Curier.NONE,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-04-04"),
    deliveryMethod: DeliveryMethod.STORE,
    size: Size.ALL,
    curier: Curier.NONE,
    supply: Supply.CAC,
  },
  {
    date: new Date("2023-04-06T10:00"),
    deliveryMethod: DeliveryMethod.ONEHOUR,
    size: Size.ALL,
    curier: Curier.NONE,
    supply: Supply.STORE,
  },
  {
    date: new Date("2023-04-05"),
    deliveryMethod: DeliveryMethod.TODAY,
    size: Size.SMALL,
    curier: Curier.NONE,
    supply: Supply.STORE,
  },
  {
    date: new Date("2023-04-03T15:00"),
    deliveryMethod: DeliveryMethod.ONEDAY,
    size: Size.MEDIUM,
    curier: Curier.NONE,
    supply: Supply.STORE,
  },
];
