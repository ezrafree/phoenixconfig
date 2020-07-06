
/* GET SPACE NAME */

function getSpaceName ( space, index ) {

  // if ( space ) {
  //
  //   const vscode = space.windows ().find ( window => /Code/.test ( window.app ().name () ) );
  //
  //   if ( vscode ) {
  //
  //     const title = vscode.title ();
  //
  //     return _.trim ( _.last ( title.split ( ' — ' ) ).replace ( '(Workspace)', '' ).replace ( '[Unsupported]', '' ) );
  //
  //   }
  //
  // }

  if ( _.isNumber ( index ) ) {

    return `Desktop ${index + 1}`;

  }

  return 'Unnamed Space';

}
