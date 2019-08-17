import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
    
    state = {
        data: ''
      }
    
      componentDidMount() {
        
        fetch('/special')
                .then(res => {
                    console.log(res);
                    return res.text()
                 })
                .then(dataz => { 
                    console.log(dataz); 
                    this.setState({ data: dataz })
                 });
             
      
      }
    
    render() {
        return (
            <div>
                <h1>Which MacBook ?</h1>
  <p>Fill info below for a reccomended MacBook</p>
 <form>
  <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select> 

<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
</form>
  <h5> wowerz   {this.state.data}</h5>  
 <Button variant="contained" color="primary" >Submit</Button>
 
            </div>
        )
    }
}