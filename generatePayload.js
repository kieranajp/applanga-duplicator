const STATUS_APPROVED = 1;
const STATUS_NEEDS_REVIEW = 2;

const generatePayload = (lang, group, translations, onlyAsDraft = true) => {
    const payload = {
        options: {
            onlyAsDraft,
            setStatus: onlyAsDraft ? STATUS_NEEDS_REVIEW : STATUS_APPROVED,
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