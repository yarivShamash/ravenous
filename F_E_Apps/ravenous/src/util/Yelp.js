/*This file is used to communicate with the Yelp API */

const apiKey = '2UivJ4cAt7NddEGNgjbTHq-_7pBuyGo3DDxmKI2SWA9Q2u5Ziwu-C34G9LgPxhAg1R7kFyVsN6yXt-2KPaTYh0gS852JEF-V0EJH1yCLPZhwMiE4b716jsAWvXV2XHYx';

/*This object will store the functionality needed to interact with the Yelp API */
const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1, 
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            } else {
                throw new Error('Request failed. Try different city.')
            }
        });
    },
};

export default Yelp;