( function ( root, factory ){

  if ( typeof define === 'function' && define.amd ) {

    define( [], factory(root) );

  }else if ( typeof exports === 'object' ) {

    module.exports = factory(root);

  }else {
    root.NightMode = factory(root);
  }

} )( typeof global !== 'undefined' ? global : this.window || this.global, ( function (root) {

    'use strict';

     /* Declaring the variables
      * 
      * 
      * 
      * 
      */ 
      const window = root;
      const document = root.document;
      const NightMode = {};
      let supports  = 'querySelector' in document && 'addEventListener' in window; // Testing features!
  
      
      
      
      
      //code ....
  
  
      
      
      // Public API
      NightMode.destroy = function() {
        alert('destroy the plugin')
      };    
  
      NightMode.init = function() {
        alert('init the plugin')
      };
  
      document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
    
            //NightMode.init();
        }
      }
  
      return NightMode;

}));
