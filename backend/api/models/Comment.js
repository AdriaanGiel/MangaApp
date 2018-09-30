/**
 * Comment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        content: {
            type: 'string',
            columnType: 'TEXT',
            required: true
        },
        parent: {
            type: 'number',
            columnName: 'parent_comment_id',
            allowNull: true
        },
        author: {
            model: 'user'
        },
        review: {
            model: 'review'
        }
    },

};

