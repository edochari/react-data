import react from 'react';


const OutputComponent=(props)=>{
    let data=Array.from(props.items);
    var totalamount=0;
    console.log(props.items);
    return <div><table>
    <tr>
      <th>S NO</th>
      <th>NAME OF MATERIAL</th>
      <th>PRICE</th>
      <th>UOM</th>
      <th>QTY</th>
      <th>TOTAL</th>
    </tr>
  
    {data.map((dt)=>{
        console.log(dt.sno);
      
        totalamount=totalamount+dt.price*dt.qty;
        return  <tr>
        <td key={dt.sno}>{dt.sno}</td>
        <td key={dt.sno}>{dt.name}</td>
        <td key={dt.sno}>{dt.price}</td>
        <td key={dt.sno}>{dt.uom}</td>
        <td key={dt.sno}>{dt.qty}</td>
        
        <td key={dt.sno}>{dt.price*dt.qty}</td>
      
        
      </tr>
    })}

    <tr>
        <td>

        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
        {totalamount}</td></tr>
     </table>
  </div>
}

export default OutputComponent;