import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import MyVerticallyCenteredModal from './Modal';
import pencil from '../pencil.png'
import logo11 from './logo11.jpeg'
import './Search.css';
import EditModal from './EditModal';

function Fsearch(props){
    const [loading,setLoading]=useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [key, setKey] = useState('');
    const [value,setValue]=useState('');
    var [output,setOutput]=useState([]);
    const [result,setResult]=useState([]);
    const [output1,setOutput1]=useState([]);
    useEffect(()=>{
      setLoading(true);
      // Firebase.initializeApp(firebaseConfig);
      console.log("1");
        let ref = Firebase.database().ref('/').child('record');
        ref.on('value', snapshot => {
          output=[];
          console.log("sss"+output);
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childData);
            childData['key']=childKey;
             output.push(childData);
                      })
       setResult(output);
       setOutput1(output);
  setLoading(false);
  console.log("sss"+output);
        });},[])

// useEffect(()=>{
//     result=output;
// },[])
// console.log("ppp"+output);
    useEffect(()=>{
      let ref = Firebase.database().ref('/').child('record');
        if(value.length>0){
          setLoading(true);
            output=[];
             setResult([]);
             console.log(value.slice(0,1));
             let value1=value.slice(0,1).toUpperCase() + value.slice(1,value.length);
             console.log(value1);
             let ref1 = Firebase.database().ref('/').child('record');
               ref1.orderByChild("name").startAt(value1).endAt(value1+"\uf8ff").once("value").then(function(snapshot) {
              // The snapshot contains the data that matches the query
              snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                childData['key']=childKey;
                 output.push(childData);
                          })
              // setResult(snapshot.val())
              setResult(output);
              // console.log(result);
             }
             );
        //      let searchQuery=value.toLowerCase();
        //      for(const key of output1){
        //          let med=key.name.toLowerCase();
        //          if(med.slice(0,searchQuery.length).indexOf(searchQuery) !== -1){
        //              setResult(prevResult=>{
        //                  return [...prevResult,key]
        //              })
        //          }             
        //  }
         setLoading(false);
        }else{
         setResult(output1.slice(0,100));
        }}
    ,[value])

     result.sort((a, b)=>{
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
     })
     function removeData(key,index) {
      console.log(key);
      if(window.confirm("Delete...? \n"+result[index].name)){
         Firebase.database().ref('/').child('record').child(key).remove();
      }
        }
    
        function updateData(key){
          setKey(key);
          setModalShow1(true)
        } 
        // console.log("ppps"+output);
    return (
            <div className="container">
       <center><img src={logo11} height="70"></img></center>
           <div className="container-sm sticky-top">
          <center><input type="text" className="form-control" placeholder="Search Medicine here"
            onChange={(event)=> setValue(event.target.value)}
            value={value}
            /></center>  </div>
      { modalShow &&  
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
}
   {  modalShow1 &&
   <EditModal info={key} show={modalShow1} onHide={() => setModalShow1(false)} setkey1={() => setKey('vsdfv')}/>
}

            <div className="SearchBack">
                <div className="SearchEntry">
                <table className="table table-striped mb-5">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Box</th>
      <th scope="col">Price</th>
      <th><button 
      type="button" className="btn btn-primary" onClick={()=>setModalShow(true)}>Add</button></th>
    </tr>
  </thead>
  <tbody>
  {result?.map((data,index) => (
      <tr key={index}>
      {/* <th scope="row" style={{padding: 15+"px"}}>{index+1}</th> */}
      <td style={{fontSize:16+'px', fontFamily:'sans-serif',  marginRight:15+'px', marginTop:5+'px'}}>{data.name}</td>
      <td style={{fontSize:15+'px', fontFamily:'sans-serif' }}>{data.box}</td>
      <td style={{fontSize:15+'px', fontFamily:'sans-serif'}}>{data.price}</td>
      <td><Dropdown>
      <Dropdown.Toggle  size="sm" id="dropdown-basic"><img src={pencil} height="20"></img>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>updateData(data.key)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={()=>removeData(data.key,index)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
             </td>

    </tr>        
  ))}
  </tbody>
</table>
{loading ?
<div>
<br></br><br></br><br></br><br></br><br></br><br></br>
  <div align="center" >
  <div  className="spinner-border text-info" role="status">
  <span className="sr-only"></span>
  </div>
</div>      
</div>
:" "}
                </div>
            <footer className="container fixed-bottom bg-white">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
            </div> 
            
        </div>
    )
}

export default Fsearch;
