import React from 'react';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { incr } from '../../redux/prac/action';


class Pratics extends React.Component{
  componentDidMount(){
  const {incr} = this.props;
  incr()
 
  }

    render(){
      
  console.log(this.props.val)
      return(
        
        <div>
 <h1 onClick={()=>this.props.history.push(`shop/hats`)}>hey,there</h1>
 <h1>{`value ${this.props.val}`}</h1>
 <button>click</button>
       </div>)
    };
  }

const mapStateToProps = ({user: { currentUser }, val:{val}, cart: { hidden } }) => {
    console.log('5!!')
    return({
      currentUser,
   val,
   hidden
  })};

  const mapDispatchToProps = dispatch => {
    console.log('1&')
    return({
 incr: al  => dispatch(incr())
  })};
  
 
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Pratics));



