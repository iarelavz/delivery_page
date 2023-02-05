import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNawItem";
import TabContent from "./AllTabs/TabContent";
import SearchBar from "./SearchBar";
import BuildCards from "./BuildCards";
import ActualDate from "./ActualDate";
import { DeliveryMethod, Size, Curier, data } from "./Const";

function Tabs() {
  //states for input and tabs
  const [activeTab, setActiveTab] = useState("tab1");
  const [sizeFilter, setSizeFilter] = useState(Size.ALL);
  const [curierFilter, setCurierFilter] = useState(Curier.ALL);
  const [deliveryMethodFilter, setDeliveryMethodFilter] = useState(
    DeliveryMethod.ALL
  );

  const [searchInput, setSearchInput] = useState("");

  //handles for inputs
  function handleOnChangeSize(event) {
    const { value } = event.target;
    setSizeFilter(value);
  }

  function handleOnChangeCurier(event) {
    const { value } = event.target;
    setCurierFilter(value);
  }

  function handleOnChangeDelyveryMethod(event) {
    const { value } = event.target;
    setDeliveryMethodFilter(value);
  }

  function handleSearchSubmit(term) {
    setSearchInput(term);
  }

  //filters the array with the states of each input
  function cardFilter(item) {
    const sizeMatch = item.size === sizeFilter || sizeFilter === Size.ALL;
    const curierMatch = item.curier === curierFilter || curierFilter === Curier.ALL;
    const deiveryMethodMatch = item.deliveryMethod === deliveryMethodFilter ||
      deliveryMethodFilter === DeliveryMethod.ALL;
    const fuzzySearchMatch =
      item.size.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
      item.curier.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
      item.deliveryMethod.toLowerCase().indexOf(searchInput.toLowerCase()) !==-1;

    return sizeMatch && curierMatch && deiveryMethodMatch && fuzzySearchMatch;
  }

  const filteredData = data.filter((item) => cardFilter(item));
  return (
    <div className="tabcard-container">
      <div className="Tabs">
        <ActualDate />
        <div className="search-container">
          <SearchBar onSubmit={handleSearchSubmit} />
        </div>
        <ul className="nav">
          <TabNavItem
            title="Szállítási mód"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Csomag mérete"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Futárszolgálat"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <div className="infotext">
              A választott csomagot kérheti házhoz, vagy csomagpontra, veheti át
              áruházaink egyikében. Sürgős esetben akár aznapi kiszállítást és 1
              órás áruházi átvételt is biztosítunk.
            </div>
            <select
              className="dropdown"
              name="method"
              onChange={handleOnChangeDelyveryMethod}
            >
              <option value={DeliveryMethod.ALL}>Kiszállítási mód</option>
              <option value={DeliveryMethod.ALL}>{DeliveryMethod.ALL}</option>
              <option value={DeliveryMethod.HOME}>{DeliveryMethod.HOME}</option>
              <option value={DeliveryMethod.PUP}>{DeliveryMethod.PUP}</option>
              <option value={DeliveryMethod.STORE}>
                {DeliveryMethod.STORE}
              </option>
              <option value={DeliveryMethod.ONEHOUR}>
                {DeliveryMethod.ONEHOUR}
              </option>
              <option value={DeliveryMethod.TODAY}>
                {DeliveryMethod.TODAY}
              </option>
              <option value={DeliveryMethod.ONEDAY}>
                {DeliveryMethod.ONEDAY}
              </option>
            </select>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <div className="infotext">
              Kisméretű csomag max. 61x60x36 cm és 25 kg súlyú, a közepes méretű
              csomag: max. 50x50x100 cm és 10-31.5 kg súlyú, a nagyméretű
              csomag: max. 50x50x100 cm és 31.5 kg feletti súlyú
            </div>
            <select name="size" onChange={handleOnChangeSize}>
              <option value={Size.ALL}>Csomagméret</option>
              <option value={Size.ALL}>{Size.ALL}</option>
              <option value={Size.SMALL}>{Size.SMALL}</option>
              <option value={Size.MEDIUM}>{Size.MEDIUM}</option>
              <option value={Size.BIG}>{Size.BIG}</option>
            </select>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <div className="infotext">
              Áruháznk több piacvezető futárszolgálattal áll szerződésben. A
              megrendelt terméket a Foxpost, Royal, DPD MPL futárszolgálatok
              viszik házhoz.
            </div>
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
        <BuildCards item={filteredData} />{" "}
        {/* loops throught the filtered items and return cards */}
      </div>
    </div>
  );
}

export default Tabs;
