import React from 'react'
import Collectionitem from '../collection-item/collection-item'
import './preview-collection.scss'

const Previewcollection=({title,items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((_,idx)=> idx < 4).map(({id,...otheritemprop})=>(
                        <Collectionitem key={id} {...otheritemprop} />
                    ))
                }
            </div>
        </div>
    )
}

export default Previewcollection