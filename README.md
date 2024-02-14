# Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/4474

## How to use

- `npm ci`
- `npm run start`
- open http://localhost:8080/example
- open http://localhost:9464/metrics
  - output includes `http_route`
