/**
 * Role.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        user: {
            collection: 'user',
            via: 'role'
        }
    },
};

