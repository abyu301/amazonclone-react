import React from 'react';
import classes from './Category.module.css';

function CategoryCard({ data }) {
    return (
        <div className={classes.category}>
            <a href="">
                <span>
                    <h2>{data.title}</h2>
                    <img src={data.imgLink} alt="" />
                    <p>shop now</p>
                </span>
            </a>
        </div>
    );
}

export default CategoryCard;
