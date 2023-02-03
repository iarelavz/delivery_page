function ActualDate(){
    let m = new Date();
    let dateString =
        m.getUTCFullYear() + "." +
        ("0" + (m.getUTCMonth()+1)).slice(-2) + "." +
        ("0" + m.getUTCDate()).slice(-2) + "."
     return (
     <div>
         <div>{dateString}</div>
     </div>
     )
 }
 
 export default ActualDate;