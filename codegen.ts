// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: {
    'http://localhost:8080/index.php?p=actions/graphql/api': {
      headers: {
        Authorization: 'Bearer JppbuSM5YuODPTSPU8BJKdFc7wbBQLAm',
      },
    },
  },
  documents: ["app/**/*.{ts,tsx,gql,graphql}", "src/**/*.{ts,tsx,gql,graphql}"],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
  ignoreNoDocuments: true,
}

export default config