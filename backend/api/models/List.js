/**
 * List.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        author: {
            model: 'user'
        },
        subjects: {
            collection: 'listSubject',
            via: 'lists'
        },
        items: {
            collection: 'listItem',
            via: 'list'
        }
    },

};

