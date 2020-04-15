/* eslint-disable react/no-multi-comp */
// import React from "react";
import { Reaction, registerPlugin, App } from "@reactioncommerce/admin-core";
import Products from "@reactioncommerce/admin-plugin-products";
import config from "./config";

// Register plugin
registerPlugin(Products);

// Configure and "start" the Reaction webapp
Reaction({
  AppComponent: App,
  title: "Reaction Products",
  config
});
