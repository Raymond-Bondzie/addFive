import React from "react";

class ClassCounter extends React.Component {
      constructor() {
          super();
          this.state = {
              count: 0
          }
      }

      addfive(){
          this.setState({
            count : this.state.count + 5,
          });
      }

      reset(){
          this.setState({
              count: 0,
          });
      }
      render() {
          return(
              <div>
              <h1 id="classnum">{this.state.count}</h1>
              
              <button onClick={()=>this.reset ()} className="classbtn">
                  Reset(0)
              </button>
              <button onClick={()=>this.addfive ()} className="classbtn">
                  Addfive(+5)

              </button>
              <h1>ClassCounter</h1>
              </div>
          )
      }
      
    }

    export default ClassCounter;