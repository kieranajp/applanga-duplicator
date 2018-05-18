require('dotenv').config()
const argv = require('minimist')(process.argv.slice(2));

const getTranslations = require('./getTranslations');
const generatePayload = require('./generatePayload');
const postTranslations = require('./postTranslations');

const groups = argv.groups.split(',');
const fromLang = argv.from;
const toLang = argv.to;
const approve = argv.approve ? true : false;
const dryRun = argv['dry-run'] ? true : false;

const run = async (fromLang, toLang, group, approve = false, dryRun = false) => {
    const translations = await getTranslations(fromLang, group);
    const payload = generatePayload(toLang, group, translations, approve);

    if (dryRun) {
        console.dir(payload, { depth: 5 });
        return;
    }

    const success = await postTranslations(payload);

    console.dir(success, { depth: 5 });
}

for (let group of groups) {
    run(fromLang, toLang, group, approve, dryRun);
}