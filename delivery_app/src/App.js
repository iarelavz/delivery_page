import SizeDrop from "./components/SizeDrop";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";
import ActualDate from "./components/ActualDate";
import BuildCards from "./components/BuildCards";
import InfoBar from "./components/InfoBar";
import React, { useState } from 'react';

export default function App() {
    const DeliveryMethod = {
      HPUP: 'Hazhozszallitas+pickup point',
      STORE: 'Hagyományos áruházi átvétel',
      ONEHOUR: '1 órás áruházi átvétel',
      TODAY: 'Aznapi kiszállítás Budapest területén',
      ONEDAY: '1 munkanapos kiszállítás',
      ALL: 'all',
     }
     const Size = {
         SMALL: 'small',
         MEDIUM: 'medium',
         BIG: 'big',
         ALL: 'all',
     }
     
     const Curier = {
         ROYAL: 'Royal',
         FOX: 'Foxpost',
         MPL: 'MPL',
         DPD: 'PDP',
         ALL: 'all',
         NONE: 'nincs'
     }

     const Supply = {
        CAC: 'külső raktár',
        CAR: 'raktáron',
        STORE: 'boltban',
        ALL: 'all'

     }
     
     const data = [
         {
             date: new Date('2023.03.27'),
             deliveryMethod: DeliveryMethod.HPUP,
             size: Size.BIG,
             curier: Curier.ROYAL,
             supply: Supply.CAC, 
         },
         {
             date: new Date('2023.03.30'),
             deliveryMethod: DeliveryMethod.HPUP,
             size: Size.MEDIUM,
             curier: Curier.DPD,
             supply: Supply.CAC
         },
         {
             date: new Date('2023.03.31'),
             deliveryMethod: DeliveryMethod.HPUP,
             size: Size.SMALL,
             curier: Curier.FOX,
             supply: Supply.CAC
         },
         {
            date: new Date('2023.03.27'),
            deliveryMethod: DeliveryMethod.HPUP,
            size: Size.BIG,
            curier: Curier.FOX,
          },
          {
            date: new Date('2023.03.29'),
            deliveryMethod: DeliveryMethod.HPUP,
            size: Size.MEDIUM,
            curier: Curier.MPL,
            supply: Supply.CAC,
        },
        {
            date: new Date('2023.03.31'),
            deliveryMethod: DeliveryMethod.STORE,
            size: Size.All,
            curier: Curier.NONE, 
            supply: Supply.CAC,
      }
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
  
    const returnfilter = data.filter(item => cardFilter(item)) 
    return (
      <>
          < ActualDate />
      {/* //<SizeDrop onChange={handleSubmit}/> */}
          <select name="curier" onChange={handleOnChangeCurier}>
            <option value={Curier.ALL}>ALL</option>
            <option value={Curier.FOX}>Foxpost</option>
            <option value={Curier.ROYAL}>Royal</option>
            <option value={Curier.DPD}>DPD</option>
            <option value={Curier.MPL}>MPL</option>
        </select> 
        
         <select name="size" onChange={handleOnChangeSize}>
          <option value={Size.ALL}>ALL</option>
          <option value={Size.SMALL}>Small</option>
          <option value={Size.MEDIUM}>Medium</option>
          <option value={Size.BIG}>Big</option>
        </select> 

         <select name="method" onChange={handleOnChangeDelyveryMethod}>
        <option value={DeliveryMethod.ALL}>ALL</option>
          <option value={DeliveryMethod.HPUP}>HPUP</option>
          <option value={DeliveryMethod.STORE}>áruházi</option>
          <option value={DeliveryMethod.ONEHOUR}>1órás</option>
          <option value={DeliveryMethod.TODAY}>Aznap</option>
          <option value={DeliveryMethod.ONEDAY}>1nap</option>
        </select> 
  
        <input type='text' name='search' onChange={handleInputChange} />

      {/*   <SearchBar onSubmit={handleSubmit}/> */}
        <br></br>
        <br></br>
        <InfoBar />
        <br></br>
        <br></br>
        <div>
          <BuildCards item={ returnfilter } />
        </div>
      </>
    )
  }

