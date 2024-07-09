#!/usr/bin/env node
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { randomBytes } from "crypto";
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DevelopmentTemplateStack } from "../lib/development-template-stack";

dotenv.config();
const app = new cdk.App();
new DevelopmentTemplateStack(app, `AppStack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    app: "tag",
  },
});
