/**
 * Review.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true
        },
        content: {
            type: 'string',
            columnType: 'TEXT',
            required: true
        },
        author: {
            model: 'user'
        },
        manga: {
            model: 'manga'
        },
        comments: {
            collection: 'comment',
            via: 'review'
        }

    },

};

