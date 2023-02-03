import { useState } from "react";

function SizeDrop({ onSubmit }){
    const Size = {
        SMALL: 'small',
        MEDIUM: 'medium',
        BIG: 'big',
        ALL: 'all',
    }

    const [sizeFilter, setSizeFilter] = useState(Size.ALL);

    
    function handleOnChangeSize(event) {
        const { name, value } = event.target
        console.log(name, value);
        const out = value;
        console.log(out)
        
        
        setSizeFilter(out);
        console.log(sizeFilter);
        onSubmit("all")
      }
     

    return (
        <select name="size" onChange={handleOnChangeSize}>
            <option value={Size.ALL}>ALL</option>
            <option value={Size.SMALL}>Small</option>
            <option value={Size.MEDIUM}>Medium</option>
            <option value={Size.BIG}>Big</option>
        </select>)
}

export default SizeDrop;