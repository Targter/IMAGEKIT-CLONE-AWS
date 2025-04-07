#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';

// simply run the stack which is in lib/image-optimization-stack.ts
// this is the entry point for the CDK app
const app = new cdk.App();
new ImageOptimizationStack(app, 'ImgTransformationStack', {

});

