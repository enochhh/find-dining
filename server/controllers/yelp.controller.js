import axios from 'axios';

export const search = (req, res) => {
    let locationQuery = req.params.location;
    let termQuery = req.params.term;

    const query = `search?term=${termQuery}&location=${locationQuery}`;
    axios.get(`https://api.yelp.com/v3/businesses/${query}` , {
        headers: {
            Authorization: `Bearer 1_QBgwym57lxZWK3UpSE-ozoEUVIaAJ0wdUfaRqZZn1G-PsRDaIcZOuG11ayT-y8Nm4PIHet6cnIngd1D-DdEL75GEX1uHQ-_FEmsBi1b4-fI7dCn4PKgPn-wv3IYHYx`
        }
    }).then(response => {
        res.send(response.data.businesses.map((business) => {
            return {
                name: business.name,
                url: business.url,
                rating: business.rating,
                id: business.id,
                price: business.price,
                is_closed: business.is_closed,
                categories: business.categories,
                image: business.image_url,
                location: business.location,
                distance: business.distance,
                transactions: business.transactions,
                coordinates: business.coordinates
            }
        }))
        console.log(req.params);
    }).catch(error => {
        console.log(error);
        console.log(req.params);
    })
}

export const getReviews = (req, res) => {
    let businessID = req.params.id;
    
    const query = `${businessID}/reviews`;
    axios.get(`https://api.yelp.com/v3/businesses/${query}`, {
        headers: {
            Authorization: `Bearer 1_QBgwym57lxZWK3UpSE-ozoEUVIaAJ0wdUfaRqZZn1G-PsRDaIcZOuG11ayT-y8Nm4PIHet6cnIngd1D-DdEL75GEX1uHQ-_FEmsBi1b4-fI7dCn4PKgPn-wv3IYHYx`
        }
    }).then(response => {
        res.send(response.data.reviews.map((review) => {
            return {
                review: review.text,
            }
        }))
        console.log(req.params);
    }).catch(error => {
        console.log(error);
        console.log(req.params);
    })
}





