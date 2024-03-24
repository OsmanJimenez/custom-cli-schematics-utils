import { Rule, SchematicContext, Tree, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';

export function generateStructure(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    return mergeWith(
      apply(sourceTemplates, [
        template({ ...options }), // Puedes pasar opciones al template si es necesario
        move('/') // Mueve los archivos generados a la raíz del proyecto
      ])
    )(tree, _context);
  };
}
