(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlinx-coroutines-core', 'kotlin-react', 'kotlin-react-dom'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlinx-coroutines-core'), require('kotlin-react'), require('kotlin-react-dom'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Luskin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Luskin'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Luskin'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'Luskin'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Luskin'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Luskin'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'Luskin'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'Luskin'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'Luskin'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'Luskin'.");
    }root.Luskin = factory(typeof Luskin === 'undefined' ? {} : Luskin, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlinx-coroutines-core'], this['kotlin-react'], this['kotlin-react-dom']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlinx_coroutines_core, $module$kotlin_react, $module$kotlin_react_dom) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var equals = Kotlin.equals;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var Unit = Kotlin.kotlin.Unit;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var Account$Companion_instance = null;
  function Account$$serializer() {
    this.descriptor_qg9vfy$_0 = new PluginGeneratedSerialDescriptor('Account', this, 4);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('id', true);
    Account$$serializer_instance = this;
  }
  var Account$$serializer_instance = null;
  var Session$Companion_instance = null;
  function Session$$serializer() {
    this.descriptor_nfgw79$_0 = new PluginGeneratedSerialDescriptor('Session', this, 3);
    this.descriptor.addElement_ivxn3r$('session', false);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('id', true);
    Session$$serializer_instance = this;
  }
  var Session$$serializer_instance = null;
  var scope;
  function App$lambda($receiver, f) {
    return Unit;
  }
  var App;
  function main$lambda($receiver) {
    $receiver.child_1mw94g$(App);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  _.main = main;
  Account$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Session$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  scope = MainScope();
  App = fc(App$lambda);
  main();
  return _;
}));

//# sourceMappingURL=Luskin.js.map
