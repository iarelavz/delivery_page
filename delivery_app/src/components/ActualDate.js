import moment from "moment";


function ActualDate(){  //Outputs the Actual date
    const dateString = moment().format('YYYY. MM. DD.' );
     
    return <div className="date-container">{dateString}</div>
 }
 
 export default ActualDate; 