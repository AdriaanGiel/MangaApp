/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        email: {
            type: 'string',
            email: true,
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true,
        },
        role: {
            model: 'role'
        }
    },

};

