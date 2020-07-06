
/* IMPORT */

const path = './.config/phoenix'

require ( path + '/config/phoenix.js' );
require ( path + '/config/constants.js' );

require ( path + '/helpers/alert.js' );
require ( path + '/helpers/center_window.js' );
require ( path + '/helpers/detect_named_anchor.js' );
require ( path + '/helpers/find_window.js' );
require ( path + '/helpers/focus_window.js' );
require ( path + '/helpers/get_named_anchor.js' );
require ( path + '/helpers/get_named_frame.js' );
require ( path + '/helpers/get_space_index.js' );
require ( path + '/helpers/get_space_name.js' );
require ( path + '/helpers/grow_frame.js' );
require ( path + '/helpers/index2keycode.js' );
require ( path + '/helpers/is_anchored.js' );
require ( path + '/helpers/log.js' );
require ( path + '/helpers/modal.js' );
require ( path + '/helpers/modal_screen.js' );
require ( path + '/helpers/modal_window.js' );
require ( path + '/helpers/osascript.js' );
require ( path + '/helpers/read_file.js' );
require ( path + '/helpers/read_json.js' );
require ( path + '/helpers/set_anchor.js' );
require ( path + '/helpers/set_event_handler.js' );
require ( path + '/helpers/set_events_handler.js' );
require ( path + '/helpers/set_frame.js' );
require ( path + '/helpers/set_key_handler.js' );
require ( path + '/helpers/set_keys_handler.js' );
require ( path + '/helpers/shell.js' );
require ( path + '/helpers/switch_space.js' );
require ( path + '/helpers/write_file.js' );
require ( path + '/helpers/write_json.js' );

require ( path + '/shortcuts/center.js' );
require ( path + '/shortcuts/corners.js' );
require ( path + '/shortcuts/expand.js' );
require ( path + '/shortcuts/focus.js' );
require ( path + '/shortcuts/fullscreen.js' );
require ( path + '/shortcuts/info.js' );
require ( path + '/shortcuts/grow.js' );
require ( path + '/shortcuts/halves.js' );
require ( path + '/shortcuts/pause.js' );
require ( path + '/shortcuts/quads.js' );
require ( path + '/shortcuts/quit.js' );
require ( path + '/shortcuts/reload.js' );
require ( path + '/shortcuts/sides.js' );
require ( path + '/shortcuts/spaces.js' );
require ( path + '/shortcuts/split_view.js' );
require ( path + '/shortcuts/thirds.js' );

require ( path + '/mouse/snapping.js' );

require ( path + '/magic/chrome.js' );
require ( path + '/magic/developer_tools.js' );
require ( path + '/magic/finder.js' );
require ( path + '/magic/hyper.js' );
require ( path + '/magic/iterm.js' );
require ( path + '/magic/terminal.js' );
require ( path + '/magic/vscode.js' );

require ( path + '/spaces/alfred.js' );
require ( path + '/spaces/list.js' );
require ( path + '/spaces/overlay.js' );

/* LOADED */

modalScreen ({ icon: App.get ( 'Phoenix' ).icon () });
