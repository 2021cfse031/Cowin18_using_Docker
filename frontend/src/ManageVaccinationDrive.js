import React, { useEffect, useState } from "react";
import Data from './data/db.json';

const ManageVaccinationDrive = () => {

    const [drives, setDrives] = useState(null);
    const [dateofvaccine, setDateOfVaccine] = useState("");
    const [place, setPlace] = useState("");
    const [vaccinecount, setVaccineCount] = useState("");
    const [driveId,setDriveId]=useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
           getList();
       }, []);

    function getList() {
        fetch("http://127.0.0.1:8000/drivelist/ ")
           .then(res =>{
              return res.json();
            }).then(data => {
                setDrives(data);
                setDateOfVaccine(data[0].dateofvaccine);
                setPlace(data[0].place);
                setVaccineCount(data[0].vaccinecount);
                setDriveId(data[0].id); 
            })
    }   

    function selectDrive(drive) {
        let data = drive; 
        console.log(data);
        setDateOfVaccine(data.dateofvaccine);
        setPlace(data.place);
        setVaccineCount(data.vaccinecount);
        setDriveId(data.id);
        setId(data.id);
    }

    function updateDrive(){
        let dump = {
            "id": id,
            "dateofvaccine": dateofvaccine,  
            "place": place,  
            "vaccinecount":parseInt(vaccinecount)
        }
        fetch(`http://127.0.0.1:8000/drive-detail/${driveId}/`, {
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                 Authorization: 'Token token',
            },
            body:JSON.stringify(dump)
        }).then((res)=>{
            res.json().then((data)=>{
            console.log(data);
            getList();
           })
        })
    }

    return ( 
        <div className="home">
            <h2>Vaccination Drive Details</h2>
            <div className="container">
                <div className="DriveDetails">
                <div className="updatedrive">
                    <h3 className="update">Update Vaccination Drive</h3>
                <div className="uploaddriveform">
                        <input type="date" value={dateofvaccine} onChange={(e) => setDateOfVaccine(e.target.value)} /> <br/>
                        <select name="place" value={place} onChange={(e) => setPlace(e.target.value)} >
                            <option>Please Select</option>
                            <option>Gandhi Hall</option>
                            <option>Nehru Bhavan</option>
                        </select> 
                        <input type="number" value={vaccinecount}  onChange={(e) => setVaccineCount(e.target.value)} /> <br/>
                        <button onClick={updateDrive}>Update Drive</button><br/>
                    </div>
                    </div>
                    <table className="drivedetailstable">
                        <thead>
                            <tr>
                                <th><td>S.No</td></th>
                                <th><td>Date of Vaccination</td></th>
                                <th><td>Place of Vaccination</td></th>
                                <th><td>Number of Vaccines</td></th>
                                <th><td>Actions</td></th>
                            </tr>
                        </thead>
                        <tbody>  

                            {  
                               
                                drives && drives.map((drive) => 
                                <tr className="drive-preview" key={drive.id}>
                                    <td>{drive.id}</td>
                                    <td>{drive.dateofvaccine}</td>
                                    <td>{drive.place}</td>
                                    <td>{drive.vaccinecount}</td>
                                    {  (new Date(drive.dateofvaccine) > new Date()) ? (<td> <button id="updateDisable" onClick={(e) => selectDrive(drive)
                                }>Update</button></td>) : (<td> <button disabled> Update</button></td>)  }
                                
                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
     );
}
 
export default ManageVaccinationDrive;
