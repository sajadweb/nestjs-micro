/**
 * Configuration Envirment
 * @returns Configuration
 */
export const Configuration = () => ({
  //Api Service
  api: {
    app: process.env.MICRO_API_APP || 'Api',
    port: parseInt(process.env.MICRO_API_PORT, 10) || 3000,
    url: process.env.MICRO_API_URL || 'http://localhost:3000',
  },
  // GraphQL Service
  graphql: {
    app: process.env.MICRO_GRAPHQL_APP || 'GRAPHQL',
    port: parseInt(process.env.MICRO_GRAPHQL_PORT, 10) || 3000,
    url: process.env.MICRO_GRAPHQL_URL || 'http://localhost:3000',
  },
  // GraphQL Service
  grpc: {
    app: process.env.MICRO_GRPC_APP || 'GRAPHQL',
    port: parseInt(process.env.MICRO_GRPC_PORT, 10) || 3000,
    url: process.env.MICRO_GRPC_URL || 'http://localhost:3000',
  },
  // GraphQL Service
  mqtt: {
    app: process.env.MICRO_MQTT_APP || 'GRAPHQL',
    port: parseInt(process.env.MICRO_MQTT_PORT, 10) || 3000,
    url: process.env.MICRO_MQTT_URL || 'http://localhost:3000',
  },
});
