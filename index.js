const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'cms-university-reviews';
const mongoAtlasConnection = 'mongodb+srv://admin:123@university-reviews-clus.24v0h.gcp.mongodb.net/university-reviews-database?retryWrites=true&w=majority';
const mongoConnection = 'mongodb://127.0.0.1:27017/cms-university-reviews';
const adapterConfig = { mongoUri: `${mongoConnection}` };

//importing schema
const TopicSchema = require('./schema/Topic');
const UniversitySchema = require('./schema/University');
const GalerySchema = require('./schema/Galery');
const CommentSchema = require('./schema/Comment')


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

// keystone.createList('Todo', {
//   schemaDoc: 'A list of things which need to be done',
//   fields: {
//     name: { type: Text, schemaDoc: 'This is the thing you need to do' },
//   },
// });
keystone.createList('Topic', TopicSchema);
keystone.createList('University', UniversitySchema);
keystone.createList('Galery', GalerySchema);
keystone.createList("Comment", CommentSchema);


module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
