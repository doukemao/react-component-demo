// declare module 'slash2';
// declare module '*.css';
// declare module '*.less';
// declare module '*.scss';
// declare module '*.sass';
// declare module '*.svg';
declare module '*.svgr' {
  import React = require('react');
  
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.gif';
// declare module '*.bmp';
// declare module '*.tiff';
// declare module 'omit.js';
// declare module '*.json';

// declare module 'worker-loader!*' {
//   class WebpackWorker extends Worker {
//     constructor();
//   }
//   export default WebpackWorker;
// }
