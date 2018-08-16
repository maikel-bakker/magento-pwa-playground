import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import styles from './Categories.scss';
import Loader from './Loader';

//http://m2.opensource.3.local04.xpdev.nl/graphql

class Categories extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        if (this.props.categories.length) {
            
            return (
                <ul className={styles['category-list']}>
                    {this.props.categories.map(category => {
                        return (
                            <li key={category.id} className={styles['category-list__item']}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            )
        } else {
            return (
                <Loader/>
            )
        }
        
    }
}

export default connect((store) => {
    return {
        categories: store.categories.categories
    }
})(Categories);