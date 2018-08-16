import React from "react";
import { connect } from 'react-redux';
import { fetchCategory } from '../actions/categoryActions';
import Loader from './Loader';
import Products from './Products';

//http://m2.opensource.3.local04.xpdev.nl/graphql

@connect((store) => {
    return {
        category: store.category.category
    }
})

class Category extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCategory(this.props.match.params.id));
    }

    render() {
        if (this.props.category[this.props.match.params.id]) {
            
            return (
                <div>
                    <h1>{this.props.category[this.props.match.params.id].name}</h1>
                    <Products categoryId={this.props.match.params.id}/>
                </div>
                
            )
        } else {
            return (
                <Loader/>
            )
        }
        
    }
}

export default Category;