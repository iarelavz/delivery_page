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
            title="Sz??ll??t??si m??d"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Csomag m??rete"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Fut??rszolg??lat"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <div className="infotext">
              A v??lasztott csomagot k??rheti h??zhoz, csomagpontra, vagy ??tveheti 
              ??ruh??zaink egyik??ben. S??rg??s esetben ak??r aznapi kisz??ll??t??st ??s 1
              ??r??s ??ruh??zi ??tv??telt is biztos??tunk.
            </div>
            <select
              className="dropdown"
              name="method"
              onChange={handleOnChangeDelyveryMethod}
            >
              <option value={DeliveryMethod.ALL}>Kisz??ll??t??si m??d</option>
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
              Kism??ret?? csomag max. 61x60x36 cm ??s 25 kg s??ly??, a k??zepes m??ret??
              csomag: max. 50x50x100 cm ??s 10-31.5 kg s??ly??, a nagym??ret??
              csomag: max. 50x50x100 cm ??s 31.5 kg feletti s??ly??
            </div>
            <select name="size" onChange={handleOnChangeSize}>
              <option value={Size.ALL}>Csomagm??ret</option>
              <option value={Size.ALL}>{Size.ALL}</option>
              <option value={Size.SMALL}>{Size.SMALL}</option>
              <option value={Size.MEDIUM}>{Size.MEDIUM}</option>
              <option value={Size.BIG}>{Size.BIG}</option>
            </select>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <div className="infotext">
              ??ruh??znk t??bb piacvezet?? fut??rszolg??lattal ??ll szerz??d??sben. A
              megrendelt term??ket a Foxpost, Royal, DPD, MPL fut??rszolg??latok
              viszik h??zhoz.
            </div>
            <select name="curier" onChange={handleOnChangeCurier}>
              <option value={Curier.ALL}>Fut??rszolg??lat</option>
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
