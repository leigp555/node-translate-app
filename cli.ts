#!/usr/bin/env node
import {Command} from "commander";
import {translate} from "./main";

const program = new Command();
program
    .version('0.0.1')
    .name("fy")
    .usage("<word>")
    .arguments('<word>')
    .action(function (word) {
      translate(word)
    });
program.parse(process.argv);
