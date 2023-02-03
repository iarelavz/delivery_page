

function BuildCards (props) {
    const  item = props.item; 
    
    function dateString(inputDate) {
            let outputDate = inputDate.getUTCFullYear() + "." +
                ("0" + (inputDate.getUTCMonth()+1)).slice(-2) + "." +
                ("0" + inputDate.getUTCDate()).slice(-2) + "."
        return outputDate;
    }
    
    
        const items = item.map(item => {
        console.log(item.size);
        return (
              <div className="card">
                  <div className="card-date">Megérkezés dátuma: {dateString(item.date)}</div>
                  <div>Csomag mérete: {item.size}</div>
                  <div>Szállítás móda: {item.deliveryMethod}</div>
                  <div>Futárszolgálat: {item.curier}</div>
                  <div>Készlet elérhetősége: {item.supply}</div>
              </div>
          )
    })  
    return items
}

export default BuildCards;