/*instrumentation.ts*/

import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { ExpressInstrumentation} from "@opentelemetry/instrumentation-express";
import { HttpInstrumentation} from "@opentelemetry/instrumentation-http";
import {PrometheusExporter} from "@opentelemetry/exporter-prometheus";

const prometheusExporter =  new PrometheusExporter({ port: 9464, preventServerStart: false });

const sdk = new NodeSDK({
    traceExporter: new ConsoleSpanExporter(),
    metricReader: prometheusExporter,
    instrumentations: [new HttpInstrumentation(), new ExpressInstrumentation()]
});

sdk.start();
