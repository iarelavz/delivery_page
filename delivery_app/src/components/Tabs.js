import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNawItem";
import TabContent from "./AllTabs/TabContent";
/* import SizeDrop from "./components/SizeDrop";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown"; */
import BuildCards from "./BuildCards";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const DeliveryMethod = {
    HOME: 'Házhozszállítás',
    STORE: 'Hagyományos áruházi átvétel',
    ONEHOUR: '1 órás áruházi átvétel',
    TODAY: 'Aznapi kiszállítás', //TODO BP területén
    ONEDAY: '1 munkanapos kiszállítás',
    ALL: 'all',
    PUP: 'Pick up Point'
   }
   const Size = {
       SMALL: 'Kisméretű csomag',
       MEDIUM: 'Közepes méretű csomag',
       BIG: 'Nagyméretű csomag',
       ALL: 'Bármilyen méretű csomag',
   }
   
   const Curier = {
       ROYAL: 'Royal',
       FOX: 'Foxpost',
       MPL: 'MPL',
       DPD: 'DPD',
       ALL: 'Mindegyik',
       NONE: 'Nincs hozzárdendelt futárszolgálat'
   }

   const Supply = {
      CAC: 'Külső raktáron',
      CAR: 'Raktáron',
      STORE: 'Bolti készleten',
      ALL: 'Mindegyik'

   }
   
   const data = [
       {
           date: new Date('2023-03-27'),
           deliveryMethod: DeliveryMethod.HOME,
           size: Size.BIG,
           curier: Curier.ROYAL,
           supply: Supply.CAC, 
       },
       {
           date: new Date('2023-03-30'),
           deliveryMethod: DeliveryMethod.HOME,
           size: Size.MEDIUM,
           curier: Curier.DPD,
           supply: Supply.CAC
       },
       {
           date: new Date('2023-03-31'),
           deliveryMethod: DeliveryMethod.PUP,
           size: Size.SMALL,
           curier: Curier.FOX,
           supply: Supply.CAC
       },
       {
          date: new Date('2023-03-29'),
          deliveryMethod: DeliveryMethod.HOME,
          size: Size.SMALL,
          curier: Curier.MPL,
          supply:Supply.CAC,

        },
        {
          date: new Date('2023-04-2'),
          deliveryMethod: DeliveryMethod.HOME,
          size: Size.BIG,
          curier: Curier.ROYAL,
          supply:Supply.CAR
        },
        {
          date: new Date('2023-04-3'),
          deliveryMethod: DeliveryMethod.HOME,
          size: Size.SMALL,
          curier: Curier.MPL,
          supply:Supply.CAR,
        },
        {
          date: new Date('2023-04-4'),
          deliveryMethod: DeliveryMethod.HOME,
          size: Size.MEDIUM,
          curier: Curier.DPD,
          supply:Supply.CAR,
        },
        {
          date: new Date('2023-04-5'),
          deliveryMethod: DeliveryMethod.PUP,
          size: Size.SMALL,
          curier: Curier.FOX,
          supply:Supply.CAR,
        },
        {
          date: new Date('2023-03-29'),
          deliveryMethod: DeliveryMethod.HOME,
          size: Size.MEDIUM,
          curier: Curier.MPL,
          supply: Supply.CAC,
      },
      {
          date: new Date('2023-03-31'),
          deliveryMethod: DeliveryMethod.STORE,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.CAC,
      },
      {
          date: new Date('2023-04-04'),
          deliveryMethod: DeliveryMethod.STORE,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.CAC,
      },
      {
          date: new Date('2023-04-06'), //TODO óra is
          deliveryMethod: DeliveryMethod.ONEHOUR,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
      {
          date: new Date('2023-04-05'),
          deliveryMethod: DeliveryMethod.TODAY,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
      {
          date: new Date('2023-04-03'), //TODO óra
          deliveryMethod: DeliveryMethod.ONEDAY,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
   ]

  const [sizeFilter, setSizeFilter] = useState(Size.ALL);
  const [curierFilter, setCurierFilter] = useState(Curier.ALL);
  const [deliveryMethodFilter, setDeliveryMethodFilter] = useState(DeliveryMethod.ALL);

  const [inputFilter, setInputFilter] = useState('');

  function handleOnChangeSize(event) {
    const { name, value } = event.target
    console.log(name, value);

    setSizeFilter(value);
  }

  function handleOnChangeCurier(event) {
    const { name, value } = event.target
    console.log(name, value);

    setCurierFilter(value);
  }

  function handleOnChangeDelyveryMethod(event) {
    const { name, value } = event.target
    console.log(name, value);

    setDeliveryMethodFilter(value);
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    console.log(name, value);

    setInputFilter(value);
  }


 /*    const handleSubmit = (term) =>{
         console.log(term);
         return term;
    }; */

/*     function MySelect() {
    return (
      <select name="size" onChange={handleOnChange}>
        <option value={Size.ALL}>ALL</option>
        <option value={Size.SMALL}>Small</option>
        <option value={Size.MEDIUM}>Medium</option>
        <option value={Size.BIG}>Big</option>
      </select>
    )
  } */

  function cardFilter(item) {
    const sizeMatch = item.size == sizeFilter || sizeFilter == Size.ALL;
    const curierMatch = item.curier == curierFilter || curierFilter == Curier.ALL;
    const deiveryMethodMatch = item.deliveryMethod == deliveryMethodFilter || deliveryMethodFilter == DeliveryMethod.ALL;
    console.log('cMatch ', curierMatch)
    //console.log('sizeMatch ', sizeMatch)
    const fuzzySearchMatch = item.curier.indexOf(inputFilter) !== -1;
    //return curierMatch;
    return sizeMatch && curierMatch && deiveryMethodMatch  && fuzzySearchMatch 
    //return sizeMatch && fuzzySearchMatch;
    // return sizeMatch;
  }

  const returnFilter = data.filter(item => cardFilter(item)) 
  return (
    <>
  
    <div className="Tabs">
    <input ClassId="searcbar" type='text' name='search' onChange={handleInputChange} />
      <ul className="nav">
        <TabNavItem title="Szállítási mód" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Csomag mérete" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Futárszolgálat" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
        <select name="method" onChange={handleOnChangeDelyveryMethod}>
         <option value={DeliveryMethod.ALL}>Kiszállítási mód</option>
          <option value={DeliveryMethod.ALL}>{DeliveryMethod.ALL}</option>
          <option value={DeliveryMethod.HOME}>{DeliveryMethod.HOME}</option>
          <option value={DeliveryMethod.PUP}>{DeliveryMethod.PUP}</option>
          <option value={DeliveryMethod.STORE}>{DeliveryMethod.PUP}</option>
          <option value={DeliveryMethod.ONEHOUR}>{DeliveryMethod.ONEHOUR}</option>
          <option value={DeliveryMethod.TODAY}>{DeliveryMethod.TODAY}</option>
          <option value={DeliveryMethod.ONEDAY}>{DeliveryMethod.ONEDAY}</option>
        </select>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet turpis diam. Phasellus consequat turpis nec ante elementum, in bibendum massa consectetur.</div>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        <select name="size" onChange={handleOnChangeSize}>
         <option value={Size.ALL}>Csomagméret</option>
          <option value={Size.ALL}>ALL</option>
          <option value={Size.SMALL}>Small</option>
          <option value={Size.MEDIUM}>Medium</option>
          <option value={Size.BIG}>Big</option>
        </select> 
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet turpis diam. Phasellus consequat turpis nec ante elementum, in bibendum massa consectetur.</div>
 
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        <select name="curier" onChange={handleOnChangeCurier}>
            <option value={Curier.ALL}>Futárszolgálat</option>
            <option value={Curier.ALL}>ALL</option>
            <option value={Curier.FOX}>Foxpost</option>
            <option value={Curier.ROYAL}>Royal</option>
            <option value={Curier.DPD}>DPD</option>
            <option value={Curier.MPL}>MPL</option>
        </select>  
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet turpis diam. Phasellus consequat turpis nec ante elementum, in bibendum massa consectetur.</div>

        </TabContent>
      </div>
    </div>
        <div className="card-container">
          <BuildCards item={ returnFilter } />
        </div>
    </>
  );
};
 
export default Tabs;