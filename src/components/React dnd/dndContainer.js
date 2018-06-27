import React, {Component} from 'react';
import {DragDropContext} from "react-dnd";
import TargetContainer from './targetContainer';
import HTML5Backend from "react-dnd-html5-backend";

class dndContainer extends Component {

        constructor(props){
            super(props);
            this.state={
                listContainers: 
                    [
                        [
                            { id: 1, text: "Item 1" },
                            { id: 2, text: "Item 2" },
                            { id: 3, text: "Item 3" }
                        ], [
                            { id: 4, text: "Item 4" },
                            { id: 5, text: "Item 5" },
                            { id: 6, text: "Item 6" }
                        ], [
                            { id: 7, text: "Item 7" },
                            { id: 8, text: "Item 8" },
                            { id: 9, text: "Item 9" }
                        ]
                    ]
                }
            }
        

        render(){
            const {listContainers} = this.state;
            return (
            <div className = 'dndContainer' >
                {
                    listContainers.map((el,i) => 
                        <TargetContainer id={i}  list={el} />
                    )
                }

            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(dndContainer);