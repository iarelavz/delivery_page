import React from "react";
  //renders active tab content
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;