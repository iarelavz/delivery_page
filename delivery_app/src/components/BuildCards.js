

function BuildCards (props) {
    const  filteredList = props.item; 
    
    function dateString(inputDate) { //transform to utc date and keeps only the date
            let outputDate = inputDate.getHours() > 2 ? inputDate.getFullYear() + "." +
                ("0" + (inputDate.getMonth()+1)).slice(-2) + "." +
                ("0" + inputDate.getDate()).slice(-2) + ". " +
                ("0" + inputDate.getHours()).slice(-2) + ":" +
                ("0" + inputDate.getMinutes()).slice(-2) 
                : inputDate.getFullYear() + "." +
                ("0" + (inputDate.getMonth()+1)).slice(-2) + "." +
                ("0" + inputDate.getDate()).slice(-2) + ". ";
        return outputDate;
    }
        //TODO ha ures visszadni infot
    
        
    
    let filteredCards ;
    if (filteredList.length == 0) {
        filteredCards = <div className="error-card" >Nincs a találat a keresési feltételekre!</div>; 
    } else {
         filteredCards = filteredList.map(item => { //loops throught the filtered items and return cards
            return (
                  <div key={Math.random()} className="card">
                      <div className="card-title" id="card-date">Megérkezés időpontja: <span className="card-info">{dateString(item.date)}</span></div>
                      <div className="card-title">Szállítás módja: <span className="card-info">{item.deliveryMethod}</span></div>
                      <div className="card-title">Csomag mérete: <span className="card-info">{item.size}</span></div>
                      <div className="card-title">Futárszolgálat: <span className="card-info">{item.curier}</span></div>
                      <div className="card-title">Készlet elérhetősége: <span className="card-info">{item.supply}</span></div>
                  </div>
              )
        }) 
    }
    return filteredCards;
}

export default BuildCards;