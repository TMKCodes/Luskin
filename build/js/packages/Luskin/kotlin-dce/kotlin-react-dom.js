(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react', 'react', 'kotlinx-html-js', 'kotlin-extensions', 'react-dom', 'react-dom/server'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react'), require('react'), require('kotlinx-html-js'), require('kotlin-extensions'), require('react-dom'), require('react-dom/server'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom/server'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom/server' was not found. Please, check whether 'react-dom/server' is loaded prior to 'kotlin-react-dom'.");
    }root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], kotlin, this['kotlin-react'], react, this['kotlinx-html-js'], this['kotlin-extensions'], this['react-dom'], this['react-dom/server']);
  }
}(this, function (_, Kotlin, $module$kotlin_react, $module$react, $module$kotlinx_html_js, $module$kotlin_extensions, $module$react_dom, $module$react_dom_server) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var createElement = $module$react.createElement;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RBuilder = $module$kotlin_react.react.RBuilder;
  var RBuilderImpl = $module$kotlin_react.react.RBuilderImpl;
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var createElement_0 = $module$kotlin_react.react.createElement_zepujl$;
  var render = $module$react_dom.render;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var hashCode = Kotlin.hashCode;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  RDOMBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  var ReactHTML_instance = null;
  var ReactSVG_instance = null;
  function RDOMBuilder() {
    RDOMBuilder$Companion_getInstance();
  }
  var RDOMBuilder$Companion_instance = null;
  function RDOMBuilderImpl(factory) {
    RBuilderImpl.call(this);
    this.consumer_pncnru$_0 = new RDOMBuilderImpl$consumer$ObjectLiteral(this);
    this.attrs_45o9rq$_0 = factory(this.consumer);
    this.domProps_fsxk8i$_0 = {};
    var $receiver = this.attrs.attributesEntries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.key, jsStyleMarker))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      setProp(this, element_0.key, element_0.value);
    }
    var jsStyle = get_jsStyle(this.attrs);
    if (jsStyle != undefined) {
      setProp(this, 'style', jsStyle);
    }}
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(createElement_0(handler), container, callback);
  }
  var events;
  var attrsMap;
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringAttr', interfaces: []};
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  var value;
  var value_metadata = new PropertyMetadata('value');
  var jsStyleMarker;
  var FormEncType_instance = null;
  var FormMethod_instance = null;
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  package$dom.RDOMBuilder = RDOMBuilder;
  package$dom.RDOMBuilderImpl = RDOMBuilderImpl;
  package$dom.render_2955dm$ = render_0;
  Object.defineProperty(package$dom, 'StringAttr', {get: StringAttr_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  RDOMBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RDOMBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RDOMBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RDOMBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RDOMBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilder.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RDOMBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RDOMBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RDOMBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RDOMBuilderImpl.prototype.child_up9nw1$ = RDOMBuilder.prototype.child_up9nw1$;
  RDOMBuilderImpl.prototype.child_1mw94g$$default = RDOMBuilder.prototype.child_1mw94g$$default;
  RDOMBuilderImpl.prototype.child_30b5ua$ = RDOMBuilder.prototype.child_30b5ua$;
  RDOMBuilderImpl.prototype.children_w8hwhj$ = RDOMBuilder.prototype.children_w8hwhj$;
  RDOMBuilderImpl.prototype.invoke_c0v1gl$ = RDOMBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilderImpl.prototype.invoke_r7bapy$ = RDOMBuilder.prototype.invoke_r7bapy$;
  RDOMBuilderImpl.prototype.invoke_qk0v40$ = RDOMBuilder.prototype.invoke_qk0v40$;
  RDOMBuilderImpl.prototype.invoke_snhqu5$ = RDOMBuilder.prototype.invoke_snhqu5$;
  RDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilderImpl.prototype.unaryPlus_m8hz4t$ = RDOMBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilderImpl.prototype.child_1mw94g$ = RDOMBuilder.prototype.child_1mw94g$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.toLowerCase(), element);
  }
  var $receiver_0 = toMutableMap(destination);
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  jsStyleMarker = '$style$';
  return _;
}));

//# sourceMappingURL=kotlin-react-dom.js.map
