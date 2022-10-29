import React,{useState,useEffect} from 'react';
import Firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
let salad = [];
function Fsearch(props){
    const [loading,setLoading]=useState(false);
    const [value,setValue]=useState('');
    const [output,setOutput]=useState([]);
    const [result,setResult]=useState([]);
    useEffect(()=>{
      setLoading(true);
      Firebase.initializeApp(firebaseConfig);
        let ref = Firebase.database().ref('/').child('record');
        ref.on('value', snapshot => {
          console.log(snapshot);
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
             output.push(childData);
                      })
       setResult(output);
  setLoading(false);
        });},[])

// useEffect(()=>{
//     result=output;
// },[])
    useEffect(()=>{
        if(value.length>0){
          setLoading(true);
             setResult([]);
             let searchQuery=value.toLowerCase();
             for(const key of output){
                 let med=key.name.toLowerCase();
                 if(med.slice(0,searchQuery.length).indexOf(searchQuery) !== -1){
                     setResult(prevResult=>{
                         return [...prevResult,key]
                     })
                 }             
         }
         setLoading(false);
        }else{
         setResult(output.slice(0,100));
        }}
    ,[value])

     result.sort((a, b)=>{
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
     })
     

    return (
        
            <div className="container">
           <center> <h3><b><p className="text-success"></p></b></h3></center>
           <br></br><br></br>
           <div className="container-sm sticky-top">
          <center><input type="text" className="form-control" placeholder="Search Medicine here"
            onChange={(event)=> setValue(event.target.value)}
            value={value}
            /></center>  </div>
            <div className="SearchBack">
                <div className="SearchEntry">
                <table className="table table-striped mb-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Box</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {result?.map((salad,index) => (
                        <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{salad.name}</td>
      <td>{salad.box}</td>
      <td>{salad.price}</td>
    </tr>        
  ))}
  </tbody>
</table>
{loading ?
<div>
<br></br><br></br><br></br><br></br><br></br><br></br>
  <div align="center" >
  <div  class="spinner-border text-info" role="status">
  <span class="sr-only"></span>
  </div>
</div>      
</div>
:" "}
             
                </div>
            </div>
            <footer class="container fixed-bottom bg-white">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
            </div> 
            
        
    )
}

export default Fsearch;
