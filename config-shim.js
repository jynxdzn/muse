module.exports = function() {

    var config_override = {};

    config_override.smtp = {
        host: 'smtp.mandrillapp.com',
        secureConnection: false,
        port: 587,
        auth: {
            user: 'umi.mcguckin@me.com',
            pass: 'fBFAesL7tJbK46QkDyCHcw'
        }
    };

    return config_override;

}

