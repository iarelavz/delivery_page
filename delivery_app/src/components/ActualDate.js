function ActualDate(){
    let today = new Date();
    let dateString =
        today.getUTCFullYear() + "." +
        ("0" + (today.getUTCMonth()+1)).slice(-2) + "." +
        ("0" + today.getUTCDate()).slice(-2) + "."
     return (
     <div>
         <div>{dateString}</div>
     </div>
     )
 }
 
 export default ActualDate;