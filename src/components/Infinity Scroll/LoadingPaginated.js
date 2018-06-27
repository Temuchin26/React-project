import React, {Component} from 'react'

const withLoading = (Component) => (props) => 
    <div>
        <Component {...props} />
        { props.isLoading &&
        <div className="spiner">
             <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        }
    </div>

const withInfinityScroll = (Component) => 
    class WithInfinityScroll extends React.Component {
        componentWillMount(){
            window.addEventListener('scroll', this.onScroll, false)
        }
        
        componentWillUnmount(){
            window.removeEventListener('scroll', this.onScroll, false)
        }
        
        onScroll = () => {
            if(
                (window.scrollY) >= (document.body.scrollHeight - 1500) &&
                this.props.items.length && !this.props.isLoading
            ){
                this.props.onPaginatedSearch()
            }
        }

        render(){
            return <Component {...this.props} />
        }
    }

export {
    withLoading,
    withInfinityScroll,
}

