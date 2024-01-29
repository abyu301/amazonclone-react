import React from 'react'

function CategoryCard({data}) {
    return (
        <div>
            <a href="">
                <span>
                    <h2>{data.title}</h2>
                    <img src={data.imgLink} alt="" />
                    <p>shop now</p>
                </span>
            </a>
        </div>
    )
}

export default CategoryCard