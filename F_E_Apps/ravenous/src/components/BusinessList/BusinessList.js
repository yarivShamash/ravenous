import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'; 

class BusinessList extends React.Component{
    render () {
        return(
            <div class="BusinessList">
                {
                    this.props.businesses.map((business) => {
                        return <Business business = {business} key={business.id}/>
                    })
                    //we can use this.props because in Apps.js the <Businesses /> component has a matching attribute
                }
            </div>
        )
    }
};

export default BusinessList;