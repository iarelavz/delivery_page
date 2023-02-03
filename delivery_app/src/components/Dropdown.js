import { useState } from "react";


function Dropdown() {
  const DeliveryMethod = {
    HPUP: 'Hazhozszallitas+pickup point',
   }
  const Size = {
    SMALL: 'small',
    MEDIUM: 'medium',
    BIG: 'big',
    ALL: 'all',
}

const Curier = {
    ROYAL: 'royal',
    FOX: 'fox',
}

const data = [
    {
        date: new Date('2023.03.27'),
        deliveryMethod: DeliveryMethod.HPUP,
        size: Size.SMALL,
        curier: Curier.ROYAL,
    },
    {
        date: new Date('2023.03.31'),
        deliveryMethod: DeliveryMethod.HPUP,
        size: Size.MEDIUM,
        curier: Curier.ROYAL,
    },
    {
        date: new Date('2023.03.27'),
        deliveryMethod: DeliveryMethod.HPUP,
        size: Size.SMALL,
        curier: Curier.FOX,
    },
    {
     date: new Date('2023.03.27'),
     deliveryMethod: DeliveryMethod.HPUP,
     size: Size.BIG,
     curier: Curier.FOX,
 }
]

  const [filter, setFilter] = useState(Size.ALL);

  function handleOnChange(event) {
    const { name, value } = event.target
    console.log(name, value);

    setFilter(value);
  }

    return (
      <select name="size" onChange={handleOnChange}>
        <option value={Size.ALL}>ALL</option>
        <option value={Size.SMALL}>Small</option>
        <option value={Size.MEDIUM}>Medium</option>
        <option value={Size.BIG}>Big</option>
      </select>
    )
  }

  export default Dropdown