

function BuildCards (props) {
    console.log(props.item)
    let item = props.item; 
    const items = item.map(item => {
        console.log(item.size);
        return (
            <>
              <div>
                  <div>{item.date.toString()}</div>
                  <div>{item.deliveryMethod}</div>
                  <div>{item.size}</div>
                  <div>{item.curier}</div>
                  <div>{item.supply}</div>
              </div>
              <br></br>
              <br></br>
            </>
          )
    })  

return items}

export default BuildCards;