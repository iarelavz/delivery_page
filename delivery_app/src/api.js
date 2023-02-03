/* 

   function cardFilter(item) {

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
              curier: Curier.ALL, 
              supply: Supply.CAC,
        }
       ]


    const sizeMatch = item.size == filter || filter == Size.ALL;
    const curierMatch = item.curier == filter || filter == Curier.ALL;
    const deiveryMethodMatch = item.deliveryMethod == filter || filter == DeliveryMethod.ALL;
    console.log('cMatch ', curierMatch)
    //console.log('sizeMatch ', sizeMatch)
    const fuzzySearchMatch = item.curier.indexOf(inputFilter) !== -1;
    //return curierMatch;
    return sizeMatch || curierMatch || deiveryMethodMatch
   };

export default cardFilter;   */