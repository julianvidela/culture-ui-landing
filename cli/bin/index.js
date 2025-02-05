#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import install from "../commands/install.js";

const program = new Command();

program
  .version("1.0.0")
  .description("CLI para gestionar la biblioteca de componentes culture-i");

program
  .command("install <component>")
  .description("Instala un componente específico")
  .action((component) => {
    install(component);
  });

program.parse(process.argv);
