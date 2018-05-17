const generatePayload = (lang, group, translations, onlyAsDraft = true) => {
    const payload = {
        options: {
            onlyAsDraft,
        },
        data: {
            [lang]: {
                [group]: {
                    entries: {}
                }
            }
        }
    };

    Object.entries(translations).forEach(([key, value]) =>
        payload.data[lang][group]['entries'][key] = value
    );

    return payload;
};

module.exports = generatePayload;