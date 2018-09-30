/**
 * Role.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            unique: true
        },
        user: {
            collection: 'user',
            via: 'role'
        }
    },
};

