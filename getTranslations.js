const axios = require('axios');
const qs = require('querystring');

const getTranslations = (lang, group) =>
    axios({
        method: 'get',
        url: process.env.APPLANGA_BASE_URL + '?' + qs.stringify({
            app: process.env.APPLANGA_APP_ID,
            requestedGroups: `["${group}"]`,
            requestedLanguages: `["${lang}"]`,
        }),
        headers: {
            Authorization: `Bearer ${process.env.APPLANGA_API_TOKEN}`,
        },
    }).then(response => response.data.data[lang][group]['entries']);

module.exports = getTranslations;