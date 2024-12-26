export const authMiddleware = async (resolve, parent, args, context, info) => {
  if (!context.user) {
    throw new Error('Unauthorized');
  }
  return resolve(parent, args, context, info);
};
