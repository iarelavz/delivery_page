

function BuildCards (props) {
    const  item = props.item; 
    
    function dateString(inputDate) {
            let outputDate = inputDate.getUTCHours() > 0 ? inputDate.getFullYear() + "." +
                ("0" + (inputDate.getMonth()+1)).slice(-2) + "." +
                ("0" + inputDate.getDate()).slice(-2) + ". " +
                ("0" + inputDate.getHours()).slice(-2) + ":" +
                ("0" + inputDate.getMinutes()).slice(-2) 
                : inputDate.getFullYear() + "." +
                ("0" + (inputDate.getMonth()+1)).slice(-2) + "." +
                ("0" + inputDate.getDate()).slice(-2) + ". ";
        return outputDate;
    }
    
    
        const items = item.map(item => {
        console.log(item.size);
        return (
              <div className="card">
                  <div className="card-title" id="card-date">Megérkezés időpontja: <span className="card-info">{dateString(item.date)}</span></div>
                  <div className="card-title">Szállítás móda: <span className="card-info">{item.deliveryMethod}</span></div>
                  <div className="card-title">Csomag mérete: <span className="card-info">{item.size}</span></div>
                  <div className="card-title">Futárszolgálat: <span className="card-info">{item.curier}</span></div>
                  <div className="card-title">Készlet elérhetősége: <span className="card-info">{item.supply}</span></div>
              </div>
          )
    })  
    return items
}

export default BuildCards;