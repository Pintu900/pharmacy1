import React,{useState,useEffect} from 'react';

function Fsearch(props){
    const [value,setValue]=useState('');
    const [result,setResult]=useState(['']);
    useEffect(()=>{
        if(value.length>0){
        fetch('https://pharmacy-6bcb1.firebaseio.com/record.json')
         .then(response => response.json())
         .then(data => {
             setResult([]);
             let searchQuery=value.toLowerCase();
             for(const key in data){
                 let med=data[key].name.toLowerCase();
                 if(med.slice(0,searchQuery.length).indexOf(searchQuery) !== -1){
                     setResult(prevResult=>{
                         return [...prevResult,data[key]]
                     })
                 }
             }
             
         }).catch(error => {
             console.log(error);
         })
        }else{
            setResult([])
        }
    },[value])

    return (
        
            <div className="container">
                
           <center> <b><p className="titleText">New Shivam Medicos</p></b></center>
          <center><input type="text" className="searchBar" 
            onChange={(event)=> setValue(event.target.value)}
            value={value}
            /></center>  
            <div className="SearchBack">
                <div className="SearchEntry">
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Box</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {result.map((result,index) => (
                        <tr>
      <th scope="row">{index+1}</th>
      <td>{result.name}</td>
      <td>{result.box}</td>
      <td>{result.price}</td>
    </tr>        
                ))}
  </tbody>
</table>
                    
                </div>
            </div>
            </div> 
        
    )
}

export default Fsearch;
