import React, {Component } from 'react';
import { connect } from 'react-redux';
import {changeTitle, incrementOne, decrementOne, magic} from '../actions/titleAction'

class TitleComponent extends Component{

    constructor(props){
        super(props);
        this.state=({
            data: '',
            inp: '',

        })   
      }
    
      handleChange = (e) => {
        this.setState({
          inp: e.target.value
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.changeTitle(this.state.inp)

      }
    
      render() {
        console.log(this.props)
        const { data, inp } = this.state;
        return (
          <div className={this.props.class}>
            <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} value={inp}/>
              <button>Submit</button>
              
            </form>
            <p>{
                this.props.title
              }</p>
            </div>
            <hr/>
            
            <div className="count__num">
              {
                this.props.count
              }
            </div>
            <div className="count">
              <button onClick={this.props.incrementOne} className="count__btn">
                Increment One 
              </button>
              <button onClick={this.props.decrementOne} className="count__btn">
                Decrement One
              </button>
              <button onClick={this.props.magic} className="count__btn">
                magic
              </button>
            </div>
            <div className="log">
            {
              this.props.log.map((e,i) =>
              <h4 key={i}>{e}</h4>
            )}
            </div>
          </div>
        );
      }
}

// const mapStateToProps = state => console.log(state)
const mapStateToProps = state => ({ title: state.items.title, count: state.items.count, class: state.items.class, log: state.items.log})
export default connect(mapStateToProps, {changeTitle, incrementOne, decrementOne, magic})(TitleComponent)



