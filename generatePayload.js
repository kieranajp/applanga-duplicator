const STATUS_APPROVED = 1;
const STATUS_NEEDS_REVIEW = 2;

const generatePayload = (lang, group, translations, approve = false) => {
    const payload = {
        options: {
            onlyAsDraft: !approve,
            setStatus: approve ? STATUS_APPROVED : STATUS_NEEDS_REVIEW,
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
