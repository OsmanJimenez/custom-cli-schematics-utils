import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  move,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function architectureCleanCode(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    // Verificar si la ruta proporcionada es válida o no
    const path = _options.path ? _options.path : 'src/app'; // Usa la ruta proporcionada o el valor predeterminado

    const sourceTemplates = url('./files'); // La ruta a tus plantillas
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings, // Funciones de strings para manipulación
      }),
      move(path), // Usa la ruta del usuario o el valor predeterminado
    ]);

    return chain([
      branchAndMerge(chain([
        mergeWith(sourceParametrizedTemplates),
      ])),
    ]);
  };
}
