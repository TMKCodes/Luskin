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
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var Unit = Kotlin.kotlin.Unit;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  function Account(username, password, email) {
    Account$Companion_getInstance();
    this.username = username;
    this.password = password;
    this.email = email;
    this.id = this.hashCode();
  }
  function Account$Companion() {
    Account$Companion_instance = this;
    this.path = '/account';
  }
  Account$Companion.prototype.serializer = function () {
    return Account$$serializer_getInstance();
  };
  Account$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Account$Companion_instance = null;
  function Account$Companion_getInstance() {
    if (Account$Companion_instance === null) {
      new Account$Companion();
    }return Account$Companion_instance;
  }
  function Account$$serializer() {
    this.descriptor_qg9vfy$_0 = new PluginGeneratedSerialDescriptor('Account', this, 4);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('id', true);
    Account$$serializer_instance = this;
  }
  Object.defineProperty(Account$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_qg9vfy$_0;
    }
  });
  Account$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.password);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.email);
    if (!equals(value.id, this.hashCode()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.id);
    output.endStructure_24f42q$(this.descriptor);
  };
  Account$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Account_init(bitMask0, local0, local1, local2, local3, null);
  };
  Account$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Account$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Account$$serializer_instance = null;
  function Account$$serializer_getInstance() {
    if (Account$$serializer_instance === null) {
      new Account$$serializer();
    }return Account$$serializer_instance;
  }
  function Account_init(seen1, username, password, email, id, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Account.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('email');
    else
      $this.email = email;
    if ((seen1 & 8) === 0)
      $this.id = $this.hashCode();
    else
      $this.id = id;
    return $this;
  }
  Account.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Account',
    interfaces: []
  };
  Account.prototype.component1 = function () {
    return this.username;
  };
  Account.prototype.component2 = function () {
    return this.password;
  };
  Account.prototype.component3 = function () {
    return this.email;
  };
  Account.prototype.copy_6hosri$ = function (username, password, email) {
    return new Account(username === void 0 ? this.username : username, password === void 0 ? this.password : password, email === void 0 ? this.email : email);
  };
  Account.prototype.toString = function () {
    return 'Account(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  Account.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  Account.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.email, other.email)))));
  };
  function Session(session, username) {
    Session$Companion_getInstance();
    this.session = session;
    this.username = username;
    this.id = this.hashCode();
  }
  function Session$Companion() {
    Session$Companion_instance = this;
    this.path = '/session';
  }
  Session$Companion.prototype.serializer = function () {
    return Session$$serializer_getInstance();
  };
  Session$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Session$Companion_instance = null;
  function Session$Companion_getInstance() {
    if (Session$Companion_instance === null) {
      new Session$Companion();
    }return Session$Companion_instance;
  }
  function Session$$serializer() {
    this.descriptor_nfgw79$_0 = new PluginGeneratedSerialDescriptor('Session', this, 3);
    this.descriptor.addElement_ivxn3r$('session', false);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('id', true);
    Session$$serializer_instance = this;
  }
  Object.defineProperty(Session$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nfgw79$_0;
    }
  });
  Session$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.session);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.username);
    if (!equals(value.id, this.hashCode()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.id);
    output.endStructure_24f42q$(this.descriptor);
  };
  Session$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Session_init(bitMask0, local0, local1, local2, null);
  };
  Session$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Session$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Session$$serializer_instance = null;
  function Session$$serializer_getInstance() {
    if (Session$$serializer_instance === null) {
      new Session$$serializer();
    }return Session$$serializer_instance;
  }
  function Session_init(seen1, session, username, id, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Session.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('session');
    else
      $this.session = session;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 4) === 0)
      $this.id = $this.hashCode();
    else
      $this.id = id;
    return $this;
  }
  Session.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Session',
    interfaces: []
  };
  Session.prototype.component1 = function () {
    return this.session;
  };
  Session.prototype.component2 = function () {
    return this.username;
  };
  Session.prototype.copy_puj7f4$ = function (session, username) {
    return new Session(session === void 0 ? this.session : session, username === void 0 ? this.username : username);
  };
  Session.prototype.toString = function () {
    return 'Session(session=' + Kotlin.toString(this.session) + (', username=' + Kotlin.toString(this.username)) + ')';
  };
  Session.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.session) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    return result;
  };
  Session.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.session, other.session) && Kotlin.equals(this.username, other.username)))));
  };
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
  Object.defineProperty(Account, 'Companion', {
    get: Account$Companion_getInstance
  });
  Object.defineProperty(Account, '$serializer', {
    get: Account$$serializer_getInstance
  });
  _.Account_init_v3350o$ = Account_init;
  _.Account = Account;
  Object.defineProperty(Session, 'Companion', {
    get: Session$Companion_getInstance
  });
  Object.defineProperty(Session, '$serializer', {
    get: Session$$serializer_getInstance
  });
  _.Session_init_bmpwe9$ = Session_init;
  _.Session = Session;
  Object.defineProperty(_, 'App', {
    get: function () {
      return App;
    }
  });
  _.main = main;
  Account$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Session$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  scope = MainScope();
  App = fc(App$lambda);
  main();
  Kotlin.defineModule('Luskin', _);
  return _;
}));

//# sourceMappingURL=Luskin.js.map
