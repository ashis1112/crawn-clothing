import React from 'react'
import Shopdata from './shop.data.js'
import Previewcollection from '../../component/preview-collection/preview-collection'

class Shoppage extends React.Component{
    constructor(){
        super()

        this.state={
            collections:Shopdata
        }

    }
    render(){
        const {collections}=this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...othercollection})=>(
                        <Previewcollection key={id} {...othercollection} />
                    ))
                }
            </div>
        )
    }
}

export default Shoppage