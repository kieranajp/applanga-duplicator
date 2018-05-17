const axios = require('axios');
const qs = require('querystring');

const postTranslations = async payload =>
    axios({
        method: 'post',
        url: process.env.APPLANGA_BASE_URL + '?' + qs.stringify({
            app: process.env.APPLANGA_APP_ID,
        }),
        data: payload,
        headers: {
            Authorization: `Bearer ${process.env.APPLANGA_API_TOKEN}`,
        },
    }).then(response => response.data);

module.exports = postTranslations;