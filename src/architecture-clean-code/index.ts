import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function architectureCleanCode(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Running the architecture-clean-code schematic!');
    return tree;
  };
}
