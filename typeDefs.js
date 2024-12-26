const typeDefs = `#graphql
type Material {
  _id: ID!
  materialName: String!
  rate: Float!
  unit: String!
  brandName: String
  modifiedTime: String
}

type Query {
  getMaterials: [Material]!
  getMaterialById(_id: ID!): Material
}

input MaterialInput {
  materialName: String!
  rate: Float
  unit: String
  brandName: String
}

type Mutation {
  addMaterials(input: [MaterialInput]!): [Material]!
  updateMaterials(input: [UpdateMaterialInput]!): [Material]!
  deleteMaterials(_id: [ID!]!): [Material]!
}

input UpdateMaterialInput {
  _id: ID!
  input: MaterialInput!
}
`;

export default typeDefs;
