import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNawItem";
import TabContent from "./AllTabs/TabContent"; 

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
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
        <select name="curier">
            <option value={Curier.ALL}>Futárszolgálat</option>
            <option value={Curier.ALL}>ALL</option>
            <option value={Curier.FOX}>Foxpost</option>
            <option value={Curier.ROYAL}>Royal</option>
            <option value={Curier.DPD}>DPD</option>
            <option value={Curier.MPL}>MPL</option>
        </select> 
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        <select name="curier">
            <option value={Curier.ALL}>Futárszolgálat</option>
            <option value={Curier.ALL}>ALL</option>
            <option value={Curier.FOX}>Foxpost</option>
            <option value={Curier.ROYAL}>Royal</option>
            <option value={Curier.DPD}>DPD</option>
            <option value={Curier.MPL}>MPL</option>
        </select> 
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;