import React, {Component} from 'react';
import update from 'immutability-helper';
import Card from './card';
import { DropTarget, DragSource } from 'react-dnd';

class TargetContainer extends Component {

        constructor(props){
            super(props);
            this.state = ({ 
                cards: props.list
            })
        }

        pushCard = (card) => {
            this.setState(update(this.state, {
                cards: {
                    $push: [card]
                }
            }))
        }

        removeCard (index){
            this.setState(update(this.state, {
                cards: {
                    $splice: [
                        [index, 1]
                    ]
                }
            }))
        }

        moveCard(dragIndex, hoverIndex){
            const { cards } = this.state; 
            const dragCard = cards[dragIndex];
             this.setState(update(this.state, {
                 cards: {
                     $splice: [
                         [dragIndex, 1],
                         [hoverIndex, 0, dragCard]
                     ]
                 }
             }))
        }

        render(){
            const {cards} = this.state;
            const { canDrop, isOver, connectDropTarget } = this.props;
            const isActive = canDrop && isOver;
            const backgroundColor = isActive ? 'lightgreen' : '#FFF';

            return connectDropTarget(
                <div className = 'TargetContainer' style={{backgroundColor}} >
                    {
                        cards.map((el, i) => 
                            <Card 
                                key={el.id}
                                listId={this.props.id}
                                index={i}
                                card={el}
                                removeCard={this.removeCard.bind(this)}
                                moveCard={this.moveCard.bind(this)}
                            />
                        )
                    }
                </div>
            )
    }
}

const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();		
		if ( id !== sourceObj.listId ) component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}
 
export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(TargetContainer);
