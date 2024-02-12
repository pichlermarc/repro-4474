# Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/4324

## How to use

- `npm ci`
- `npm run start`
- open http://localhost:8080/rolldice
- open http://localhost:8080/metrics
  - metrics output includes server histogram for `/rolldice`
