import React, {Component} from 'react';
import {compose} from 'recompose';
import {withLoading, withInfinityScroll} from './LoadingPaginated';

const applyUpdateResult = (result) => (prevState) => ({
    hits: [...prevState.hits, ...result.hits],
    page: result.page,
    isLoading: false
})

const applySetResult = (result) => (prevState) => ({
    hits: result.hits,
    page: result.page,
    isLoading: false
})

const getHackerNewsUrl = (val, page) => 
    `https://hn.algolia.com/api/v1/search?query=${val}&page=${page}&hitsPerPage=20`

class EnterInfinityScroll extends Component {

        constructor(props){
            super(props);
            this.state = ({
                hits: [],
                page: null,
                isLoading: false
            })
        }

        onInitialSearch = (e) => {
            e.preventDefault();          
            
            if(this.input.value === ''){
                return
            }

            this.fetchStories(this.input.value, 0)
        }

        onPaginatedSearch = (e) => 
            this.fetchStories(this.input.value, this.state.page + 1)

        fetchStories = (value, page) => {
            this.setState({ isLoading: true })
            fetch(getHackerNewsUrl(value, page))
                .then(resp => resp.json())
                .then(result => this.onSetResult(result, page))
        }

        onSetResult = (result, page) => 
            page === 0 ?
            this.setState(applySetResult(result))
            : this.setState(applyUpdateResult(result))

        render(){
            return (
            <div className = 'EnterInfinityScroll' >
                <form type="submit" onSubmit={this.onInitialSearch}>
                    <input type="text" ref={nod => this.input = nod}/>
                    <button type="submit">Search</button>
                </form>
                <ListHOC 
                    isLoading={this.state.isLoading}
                    items={this.state.hits}
                    page={this.state.page}
                    onPaginatedSearch={this.onPaginatedSearch}
                    />
            </div>
        )
    }
}
const List = ({ items }) => 
        <div className="list">
            {
                items.map((el, i) => {
                    return el.title && el._highlightResult.title.matchLevel !== 'none' ?
                        <div className="list__item" key={el.objectID}>
                            <div className="list__countCont">
                                <img src="./play-button.png" className="list__countBtn up" alt=""/>
                                    <h2 className="list__number">{el.points}</h2>
                                    <img src="./play-button.png" className="list__countBtn down" alt=""/>
                                </div>
                                <div className="list__post">
                                    <a target="_blank" href={el.url}>
                                        <span>{el.title}</span>
                                        <img className="list__img" href={el.url} src={`https://picsum.photos/700/400/?random=${el.objectID}`} alt=""/>
                                    </a>
                            </div>
                        </div>
                    : null
            })
            }
        </div>

const ListHOC = compose(
    withLoading,
    withInfinityScroll,
    
)(List)

export default EnterInfinityScroll;