const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'cms-university-reviews';
const mongoAtlasConnection = 'mongodb+srv://admin:123@university-reviews-clus.24v0h.gcp.mongodb.net/university-reviews-database?retryWrites=true&w=majority';
const mongoConnection = 'mongodb://127.0.0.1:27017/cms-university-reviews';
const adapterConfig = { mongoUri: `${mongoAtlasConnection}` };

//importing schema
const TopicSchema = require('./schema/Topic');
const UniversitySchema = require('./schema/University');
const GalerySchema = require('./schema/Galery');
const CommentSchema = require('./schema/Comment');
const DetailUniversitySchema = require('./schema/DetailUniversity')
const AccountSchema = require('./schema/Account')


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
keystone.createList("DetailUniversity", DetailUniversitySchema);
keystone.createList("Account", AccountSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "Account",
  // config: {
  //   identityField: "username",
  //   secretField: "password",
  // },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true, authStrategy}),
  ],
};
