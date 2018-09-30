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
        reviews: {
            collection: 'review',
            via: 'author'
        },
        comments: {
            collection: 'comment',
            via: 'author'
        },
        lists: {
            collection: 'list',
            via: 'author'
        },
        role: {
            model: 'role'
        }
    },

};

