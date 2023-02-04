import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
  //navigates to clicked tab
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title } 
   </li>
 );
};
export default TabNavItem;