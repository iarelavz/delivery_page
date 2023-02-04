import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNawItem";
import TabContent from "./AllTabs/TabContent";
/* import SizeDrop from "./components/SizeDrop";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown"; */
import BuildCards from "./BuildCards";
import ActualDate from "./ActualDate"

function Tabs() {
  
  const DeliveryMethod = {
    HOME: 'Házhozszállítás',
    STORE: 'Hagyományos áruházi átvétel',
    ONEHOUR: '1 órás áruházi átvétel',
    TODAY: 'Aznapi kiszállítás Budapesten', //TODO BP területén
    ONEDAY: '1 munkanapos kiszállítás',
    ALL: 'Mindegyik',
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
          size: Size.ALL,
          curier: Curier.NONE, 
          supply: Supply.CAC,
      },
      {
          date: new Date('2023-04-04'),
          deliveryMethod: DeliveryMethod.STORE,
          size: Size.ALL,
          curier: Curier.NONE, 
          supply: Supply.CAC,
      },
      {
          date: new Date('2023-04-06T10:00'), 
          deliveryMethod: DeliveryMethod.ONEHOUR,
          size: Size.All,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
      {
          date: new Date('2023-04-05'),
          deliveryMethod: DeliveryMethod.TODAY,
          size: Size.SMALL,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
      {
          date: new Date('2023-04-03T15:00'), 
          deliveryMethod: DeliveryMethod.ONEDAY,
          size: Size.MEDIUM,
          curier: Curier.NONE, 
          supply: Supply.STORE,
      },
   ]
   //states for input and tabs
    const [activeTab, setActiveTab] = useState("tab1");
    const [sizeFilter, setSizeFilter] = useState(Size.ALL);
    const [curierFilter, setCurierFilter] = useState(Curier.ALL);
    const [deliveryMethodFilter, setDeliveryMethodFilter] = useState(DeliveryMethod.ALL);
    const [inputFilter, setInputFilter] = useState('');

    //handles for inputs
    function handleOnChangeSize(event) {
        const { name, value } = event.target
        setSizeFilter(value);
    }

    function handleOnChangeCurier(event) {
        const { name, value } = event.target
        setCurierFilter(value);
    }

    function handleOnChangeDelyveryMethod(event) {
        const { name, value } = event.target
        setDeliveryMethodFilter(value);
    }

    function handleInputChange(event) {
        const { name, value } = event.target
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
    const fuzzySearchMatch = item.curier.indexOf(inputFilter) !== -1 ; 
    return sizeMatch && curierMatch && deiveryMethodMatch  && fuzzySearchMatch 
  }

  const returnFilter = data.filter(item => cardFilter(item)) 
  return (
    
    <div className="tabcard-container">
       
        <div className="Tabs">
        < ActualDate />
            <div className="search-container">
                <input className="searcbar" id="search" type='text' name='search' onChange={handleInputChange} />
            </div>
            
            <ul className="nav">
                <TabNavItem title="Szállítási mód" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Csomag mérete" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Futárszolgálat" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>
            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <div className="infotext">A választott csomagot kérheti házhoz, vagy csomagpontra, veheti át áruházaink egyikében. Sürgős esetben akár aznapi kiszállítást és 1 órás áruházi átvételt is biztosítunk.</div>
                    <select className="dropdown" name="method" onChange={handleOnChangeDelyveryMethod}>
                        <option value={DeliveryMethod.ALL}>Kiszállítási mód</option>
                        <option value={DeliveryMethod.ALL}>{DeliveryMethod.ALL}</option>
                        <option value={DeliveryMethod.HOME}>{DeliveryMethod.HOME}</option>
                        <option value={DeliveryMethod.PUP}>{DeliveryMethod.PUP}</option>
                        <option value={DeliveryMethod.STORE}>{DeliveryMethod.STORE}</option>
                        <option value={DeliveryMethod.ONEHOUR}>{DeliveryMethod.ONEHOUR}</option>
                        <option value={DeliveryMethod.TODAY}>{DeliveryMethod.TODAY}</option>
                        <option value={DeliveryMethod.ONEDAY}>{DeliveryMethod.ONEDAY}</option>
                    </select>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <div className="infotext">Kisméretű csomag max. 61x60x36 cm és 25 kg súlyú, a közepes méretű csomag: max. 50x50x100 cm és 10-31.5 kg súlyú, a nagyméretű csomag: max. 50x50x100 cm és 31.5 kg feletti súlyú</div>
                    <select name="size" onChange={handleOnChangeSize}>
                        <option value={Size.ALL}>Csomagméret</option> 
                        <option value={Size.ALL}>{Size.ALL}</option>
                        <option value={Size.SMALL}>{Size.SMALL}</option>
                        <option value={Size.MEDIUM}>{Size.MEDIUM}</option>
                        <option value={Size.BIG}>{Size.BIG}</option>
                    </select>    
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <div className="infotext">Áruháznk több piacvezető futárszolgálattal áll szerződésben. A megrendelt terméket a Foxpost, Royal, DPD MPL futárszolgálatok viszik házhoz.</div>
                    <select name="curier" onChange={handleOnChangeCurier}>
                        <option value={Curier.ALL}>Futárszolgálat</option> 
                        <option value={Curier.ALL}>{Curier.ALL}</option>
                        <option value={Curier.FOX}>{Curier.FOX}</option>
                        <option value={Curier.ROYAL}>{Curier.ROYAL}</option>
                        <option value={Curier.DPD}>{Curier.DPD}</option>
                        <option value={Curier.MPL}>{Curier.MPL}</option>
                    </select>  
                </TabContent>
            </div>
        </div>
        <div className="card-container">
            <BuildCards item={ returnFilter } /> {/* loops throught the filtered items and return cards */}
        </div>
    </div>
  );
};
 
export default Tabs;