import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: 'http://localhost:4000',
  schema: "./graphql/typeDefs/schema.graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["**/*.{ts,tsx}"], // not using src - using root directory
  generates: {
    "./graphql/__generated__/": {
      // store in graphql folder
      preset: "client",
      plugins: ["typescript"],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        useIndexSignature: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
