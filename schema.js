import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import typeDefs from './typeDefs.js';
import resolvers from './resolver.js';
import { authMiddleware } from './middleware/requireAuth.js';
import { protectedQueries, protectedMutations } from './constants/protectedFields.js'; 

const schema = makeExecutableSchema({ typeDefs, resolvers });

const applyAuthMiddlewareToSpecific = (type, protectedFields) => {
  const protectedResolvers = {};
  protectedFields.forEach(field => {
    protectedResolvers[field] = authMiddleware;
  });
  return protectedResolvers;
};

export const protectedSchema = applyMiddleware(schema, {
  Query: applyAuthMiddlewareToSpecific('Query', protectedQueries),
  Mutation: applyAuthMiddlewareToSpecific('Mutation', protectedMutations),
});
