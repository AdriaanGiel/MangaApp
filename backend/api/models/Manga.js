/**
 * Manga.js
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
        manga_id: {
            type: 'number',
            unique: true,
            required: true
        },
        reviews:{
            collection: 'review',
            via: 'manga'
        }
    },

};

