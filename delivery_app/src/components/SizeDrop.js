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
       
        <select  placeholder="Keresés..." name="size" onChange={handleOnChangeSize}>
            <option value={Size.ALL}>ALL</option>
            <option value={Size.SMALL}>Small</option>
            <option value={Size.MEDIUM}>Medium</option>
            <option value={Size.BIG}>Big</option>
        </select>

        )
}

export default SizeDrop;