require('dotenv').config()
const argv = require('minimist')(process.argv.slice(2));

const getTranslations = require('./getTranslations');
const generatePayload = require('./generatePayload');
const postTranslations = require('./postTranslations');

const group = argv.group;
const fromLang = argv.from;
const toLang = argv.to;
const approve = argv.approve ? true : false;

const run = async (fromLang, toLang, group, approve) => {
    const translations = await getTranslations(fromLang, group);
    const payload = generatePayload(toLang, group, translations, approve);
    const success = await postTranslations(payload);
    // console.dir(payload, { depth: 5 });
    console.dir(success, { depth: 5 });
}

run(fromLang, toLang, group, approve);
