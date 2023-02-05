import { useState } from "react";

function SizeDrop({ onChange }){
     const Size = {
       SMALL: 'Kisméretű csomag',
       MEDIUM: 'Közepes méretű csomag',
       BIG: 'Nagyméretű csomag',
       ALL: 'Bármilyen méretű csomag',
   }

    const [filter, setFilter] = useState(Size.ALL);
    
    function handleOnChangeSize(event) {
        const { name, value } = event.target
        console.log(name, value);        
        console.log(filter);
        console.log("bvvv", value)
        setFilter(value);
        console.log(filter)
        onChange(filter)
      }


    return (
       
             <select name="size" onChange={handleOnChangeSize}>
                        <option value={Size.ALL}>Csomagméret</option> 
                        <option value={Size.ALL}>{Size.ALL}</option>
                        <option value={Size.SMALL}>{Size.SMALL}</option>
                        <option value={Size.MEDIUM}>{Size.MEDIUM}</option>
                        <option value={Size.BIG}>{Size.BIG}</option>
                    </select> 

        )
}

export default SizeDrop;