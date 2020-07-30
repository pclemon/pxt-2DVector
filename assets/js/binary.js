// meta={"simUrl":"https://trg-arcade.userpxt.io/v1.0.16/---simulator","cdnUrl":"https://pxt.azureedge.net","version":"1.2.0","target":"arcade","targetVersion":"1.0.16","repo":"pclemon/pxt-2dvector"}
// total=55251 new=43.23% cached=50.40% other=6.37%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("2D Vector");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "_x",
 "_y",
 "magnitude",
 "scale",
 "toString",
 "x",
 "y"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P47479(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___44302 = (undefined);
    globals._pollEventQueue___44311 = (undefined);
    globals.minPriority___43013 = (1);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, inline__P44314);
    globals.listeners___44315 = (s.tmp_0);
    s.tmp_0 = Vector_create__P47224_mk(s);
    s.tmp_0.arg0 = -1.4;
    s.tmp_0.arg1 = 5;
    s.callLocIdx = 0; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals.vector___44253 = (r0);
    s.tmp_0 = Vector_create__P47224_mk(s);
    s.tmp_0.arg0 = 4.6;
    s.tmp_0.arg1 = 8;
    s.callLocIdx = 1; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.vector2___44254 = (r0);
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_Vector_toString__P47225_mk(s);
    s.tmp_2 = Vector_add__P47226_mk(s);
    s.tmp_2.arg0 = globals.vector___44253;
    s.tmp_2.arg1 = globals.vector2___44254;
    s.callLocIdx = 2; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 3; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 4; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_Vector_toString__P47225_mk(s);
    s.tmp_2 = Vector_sub__P47227_mk(s);
    s.tmp_2.arg0 = globals.vector___44253;
    s.tmp_2.arg1 = globals.vector2___44254;
    s.callLocIdx = 5; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 6; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 7; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_Vector_toString__P47225_mk(s);
    s.tmp_2 = Vector_multiplication__P47228_mk(s);
    s.tmp_2.arg0 = globals.vector___44253;
    s.tmp_2.arg1 = globals.vector2___44254;
    s.callLocIdx = 8; s.pc = 11; return s.tmp_2;
  case 11:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 9; s.pc = 10; return s.tmp_1;
  case 10:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 10; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_dotProduct__P47229_mk(s);
    s.tmp_1.arg0 = globals.vector___44253;
    s.tmp_1.arg1 = globals.vector2___44254;
    s.callLocIdx = 11; s.pc = 13; return s.tmp_1;
  case 13:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 12; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_euclideanDistance__P47230_mk(s);
    s.tmp_1.arg0 = globals.vector___44253;
    s.tmp_1.arg1 = globals.vector2___44254;
    s.callLocIdx = 13; s.pc = 15; return s.tmp_1;
  case 15:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 14; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_Vector_magnitude__P47231_mk(s);
    s.tmp_1.arg0 = globals.vector___44253;
    s.callLocIdx = 15; s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 16; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.tmp_0 = Vector_Vector_scale__P47232_mk(s);
    s.tmp_0.arg0 = globals.vector___44253;
    s.tmp_0.arg1 = 5;
    s.callLocIdx = 17; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.tmp_0 = console_log__P43018_mk(s);
    s.tmp_1 = Vector_Vector_toString__P47225_mk(s);
    s.tmp_1.arg0 = globals.vector___44253;
    s.callLocIdx = 18; s.pc = 20; return s.tmp_1;
  case 20:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 19; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P47479.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"main.ts","functionName":"<main>","argumentNames":[]}
_main___P47479.continuations = [  ]

function _main___P47479_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P47479, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function Vector_Vector_scale__P47232(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg0.fields["_x"];
    s.tmp_2 = r0;
    r0 = (s.arg1 * 256);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 | 0);
    s.tmp_3 = r0;
    r0 = pxsim.Math_.imul(s.tmp_2, s.tmp_3);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >> 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_x"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg0.fields["_y"];
    s.tmp_2 = r0;
    r0 = (s.arg1 * 256);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 | 0);
    s.tmp_3 = r0;
    r0 = pxsim.Math_.imul(s.tmp_2, s.tmp_3);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >> 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_y"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
Vector_Vector_scale__P47232.info = {"start":1050,"length":134,"line":44,"column":8,"endLine":47,"endColumn":9,"fileName":"main.ts","functionName":"scale","argumentNames":["this","num"]}

function Vector_Vector_scale__P47232_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_scale__P47232, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Fx8__P42793(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 * 256);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 | 0);
    return leave(s, r0)
  default: oops()
} } }
Fx8__P42793.info = {"start":42,"length":68,"line":4,"column":0,"endLine":6,"endColumn":1,"fileName":"pxt_modules/base/fixed.ts","functionName":"Fx8","argumentNames":["v"]}

function Fx8__P42793_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx8__P42793, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Fx_mul__P42804(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.Math_.imul(s.arg0, s.arg1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 8);
    return leave(s, r0)
  default: oops()
} } }
Fx_mul__P42804.info = {"start":872,"length":133,"line":29,"column":4,"endLine":31,"endColumn":5,"fileName":"pxt_modules/base/fixed.ts","functionName":"mul","argumentNames":["a","b"]}

function Fx_mul__P42804_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx_mul__P42804, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_Vector_magnitude__P47231(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    r0 = s.arg0.fields["_x"];
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_x"];
    s.tmp_4 = r0;
    r0 = pxsim.Math_.imul(s.tmp_3, s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >> 8);
    s.tmp_2 = r0;
    r0 = s.arg0.fields["_y"];
    s.tmp_7 = r0;
    r0 = s.arg0.fields["_y"];
    s.tmp_8 = r0;
    r0 = pxsim.Math_.imul(s.tmp_7, s.tmp_8);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 >> 8);
    s.tmp_6 = r0;
    r0 = (s.tmp_2 + s.tmp_6);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 / 256);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.sqrt(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
Vector_Vector_magnitude__P47231.info = {"start":1284,"length":140,"line":51,"column":8,"endLine":53,"endColumn":9,"fileName":"main.ts","functionName":"magnitude","argumentNames":["this"]}

function Vector_Vector_magnitude__P47231_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_magnitude__P47231, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  arg0: undefined,
} }





function Fx_add__P42801(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 + s.arg1);
    return leave(s, r0)
  default: oops()
} } }
Fx_add__P42801.info = {"start":511,"length":118,"line":20,"column":4,"endLine":22,"endColumn":5,"fileName":"pxt_modules/base/fixed.ts","functionName":"add","argumentNames":["a","b"]}

function Fx_add__P42801_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx_add__P42801, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function Fx_toFloat__P42815(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 / 256);
    return leave(s, r0)
  default: oops()
} } }
Fx_toFloat__P42815.info = {"start":2235,"length":81,"line":71,"column":4,"endLine":73,"endColumn":5,"fileName":"pxt_modules/base/fixed.ts","functionName":"toFloat","argumentNames":["v"]}

function Fx_toFloat__P42815_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx_toFloat__P42815, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function Vector_euclideanDistance__P47230(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tempVec___47377 = undefined;
    s.temp___47381 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Vector_sub__P47227_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 47; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tempVec___47377 = (r0);
    s.tmp_0 = Math_abs__P42772_mk(s);
    r0 = s.tempVec___47377.fields["_x"];
    s.tmp_3 = r0;
    r0 = s.tempVec___47377.fields["_x"];
    s.tmp_4 = r0;
    r0 = pxsim.Math_.imul(s.tmp_3, s.tmp_4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >> 8);
    s.tmp_2 = r0;
    r0 = s.tempVec___47377.fields["_y"];
    s.tmp_7 = r0;
    r0 = s.tempVec___47377.fields["_y"];
    s.tmp_8 = r0;
    r0 = pxsim.Math_.imul(s.tmp_7, s.tmp_8);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 >> 8);
    s.tmp_6 = r0;
    r0 = (s.tmp_2 + s.tmp_6);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 / 256);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 52; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.temp___47381 = (r0);
    r0 = s.temp___47381;
    return leave(s, r0)
  default: oops()
} } }
Vector_euclideanDistance__P47230.info = {"start":2812,"length":261,"line":92,"column":4,"endLine":96,"endColumn":5,"fileName":"main.ts","functionName":"euclideanDistance","argumentNames":["vector1","vector2"]}

function Vector_euclideanDistance__P47230_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_euclideanDistance__P47230, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tempVec___47377: undefined,
  temp___47381: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_abs__P42772(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (0 - s.arg0);
    { step = 2; continue; }
  case 1:
    r0 = s.arg0;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
Math_abs__P42772.info = {"start":15106,"length":77,"line":511,"column":4,"endLine":513,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"abs","argumentNames":["x"]}

function Math_abs__P42772_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_abs__P42772, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function Vector_dotProduct__P47229(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.mulVec___47365 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Vector_multiplication__P47228_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 44; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.mulVec___47365 = (r0);
    r0 = s.mulVec___47365.fields["_x"];
    s.tmp_1 = r0;
    r0 = s.mulVec___47365.fields["_y"];
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 / 256);
    return leave(s, r0)
  default: oops()
} } }
Vector_dotProduct__P47229.info = {"start":2514,"length":191,"line":85,"column":4,"endLine":88,"endColumn":5,"fileName":"main.ts","functionName":"dotProduct","argumentNames":["vector1","vector2"]}

function Vector_dotProduct__P47229_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_dotProduct__P47229, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  mulVec___47365: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_multiplication__P47228(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(Vector_Vector__C47233_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Vector_Vector_constructor__P47238_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    r0 = s.arg0.fields["_x"];
    s.tmp_2 = r0;
    r0 = s.arg1.fields["_x"];
    s.tmp_3 = r0;
    r0 = pxsim.Math_.imul(s.tmp_2, s.tmp_3);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 >> 8);
    s.tmp_1.arg1 = r0;
    r0 = s.arg0.fields["_y"];
    s.tmp_5 = r0;
    r0 = s.arg1.fields["_y"];
    s.tmp_6 = r0;
    r0 = pxsim.Math_.imul(s.tmp_5, s.tmp_6);
    s.tmp_7 = r0;
    r0 = (s.tmp_7 >> 8);
    s.tmp_1.arg2 = r0;
    s.callLocIdx = 43; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Vector_multiplication__P47228.info = {"start":2237,"length":170,"line":78,"column":4,"endLine":80,"endColumn":5,"fileName":"main.ts","functionName":"multiplication","argumentNames":["vector1","vector2"]}

function Vector_multiplication__P47228_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_multiplication__P47228, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_Vector_constructor__P47238(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_x"] = (s.arg1);
    r0 = (s.arg0).fields["_y"] = (s.arg2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
Vector_Vector_constructor__P47238.info = {"start":219,"length":93,"line":10,"column":8,"endLine":13,"endColumn":9,"fileName":"main.ts","functionName":"inline","argumentNames":["this","_x","_y"]}

function Vector_Vector_constructor__P47238_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_constructor__P47238, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Vector_sub__P47227(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(Vector_Vector__C47233_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Vector_Vector_constructor__P47238_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    r0 = s.arg0.fields["_x"];
    s.tmp_2 = r0;
    r0 = s.arg1.fields["_x"];
    s.tmp_3 = r0;
    r0 = (s.tmp_2 - s.tmp_3);
    s.tmp_1.arg1 = r0;
    r0 = s.arg0.fields["_y"];
    s.tmp_4 = r0;
    r0 = s.arg1.fields["_y"];
    s.tmp_5 = r0;
    r0 = (s.tmp_4 - s.tmp_5);
    s.tmp_1.arg2 = r0;
    s.callLocIdx = 40; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Vector_sub__P47227.info = {"start":1986,"length":159,"line":72,"column":4,"endLine":74,"endColumn":5,"fileName":"main.ts","functionName":"sub","argumentNames":["vector1","vector2"]}

function Vector_sub__P47227_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_sub__P47227, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Fx_sub__P42803(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 - s.arg1);
    return leave(s, r0)
  default: oops()
} } }
Fx_sub__P42803.info = {"start":749,"length":118,"line":26,"column":4,"endLine":28,"endColumn":5,"fileName":"pxt_modules/base/fixed.ts","functionName":"sub","argumentNames":["a","b"]}

function Fx_sub__P42803_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Fx_sub__P42803, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_add__P47226(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(Vector_Vector__C47233_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Vector_Vector_constructor__P47238_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    r0 = s.arg0.fields["_x"];
    s.tmp_2 = r0;
    r0 = s.arg1.fields["_x"];
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.tmp_1.arg1 = r0;
    r0 = s.arg0.fields["_y"];
    s.tmp_4 = r0;
    r0 = s.arg1.fields["_y"];
    s.tmp_5 = r0;
    r0 = (s.tmp_4 + s.tmp_5);
    s.tmp_1.arg2 = r0;
    s.callLocIdx = 37; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Vector_add__P47226.info = {"start":1736,"length":158,"line":66,"column":4,"endLine":68,"endColumn":5,"fileName":"main.ts","functionName":"add","argumentNames":["vector1","vector2"]}

function Vector_add__P47226_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_add__P47226, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_Vector_toString__P47225(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.str___47271 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    s.tmp_4 = Vector_Vector_x__P47234_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.callLocIdx = 22; s.pc = 1; return s.tmp_4;
  case 1:
    r0 = s.retval;
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, ", ");
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.tmp_7 = Vector_Vector_y__P47235_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.callLocIdx = 23; s.pc = 4; return s.tmp_7;
  case 4:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_5);
    s.str___47271 = (r0);
    r0 = s.str___47271;
    return leave(s, r0)
  default: oops()
} } }
Vector_Vector_toString__P47225.info = {"start":843,"length":106,"line":37,"column":8,"endLine":40,"endColumn":9,"fileName":"main.ts","functionName":"toString","argumentNames":["this"]}

function Vector_Vector_toString__P47225_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_toString__P47225, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  str___47271: undefined,
  arg0: undefined,
} }





function Vector_Vector_y__P47235(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    r0 = s.arg0.fields["_y"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 / 256);
    return leaveAccessor(s, r0)
  default: oops()
} } }
Vector_Vector_y__P47235.info = {"start":456,"length":74,"line":21,"column":8,"endLine":24,"endColumn":9,"fileName":"main.ts","functionName":"y","argumentNames":["this"]}
Vector_Vector_y__P47235.isGetter = true;

function Vector_Vector_y__P47235_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_y__P47235, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Vector_Vector_x__P47234(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Vector_Vector__C47233_VT)) failedCast(r0);
    r0 = s.arg0.fields["_x"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 / 256);
    return leaveAccessor(s, r0)
  default: oops()
} } }
Vector_Vector_x__P47234.info = {"start":372,"length":74,"line":16,"column":8,"endLine":19,"endColumn":9,"fileName":"main.ts","functionName":"x","argumentNames":["this"]}
Vector_Vector_x__P47234.isGetter = true;

function Vector_Vector_x__P47234_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_Vector_x__P47234, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function console_log__P43018(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = console_add__P43014_mk(s);
    s.tmp_0.arg0 = 1;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 4; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_log__P43018.info = {"start":1450,"length":86,"line":58,"column":4,"endLine":60,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"log","argumentNames":["value"]}

function console_log__P43018_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_log__P43018, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function console_add__P43014(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.text___44599 = undefined;
    s.i___44608 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < globals.minPriority___43013);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.tmp_1 = console_inspect__P43020_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = 20;
    s.callLocIdx = 2; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.text___44599 = (r0);
    if ((s.text___44599) && (s.text___44599).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.text___44599);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.text___44599) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.text___44599 = (r0);
    s.i___44608 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___44608;
    r0 = pxsim_Array__length(globals.listeners___44315);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = lambda_3_mk(s);
    r0 = pxsim_Array__getAt(globals.listeners___44315, s.i___44608);
    s.tmp_3.argL = r0;
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.text___44599;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 3; s.pc = 8; return s.tmp_3;
  case 8:
    r0 = s.retval;
    r0 = (s.i___44608 + 1);
    s.i___44608 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_add__P43014.info = {"start":632,"length":317,"line":28,"column":4,"endLine":36,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"add","argumentNames":["priority","message"]}

function console_add__P43014_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_add__P43014, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  text___44599: undefined,
  i___44608: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P44314(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.__log(s.arg0, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P44314.info = {"start":534,"length":85,"line":25,"column":8,"endLine":25,"endColumn":93,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["priority","text"]}

function inline__P44314_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P44314, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect__P43020(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.asArr___44646 = undefined;
    s.asString___44664 = undefined;
    s.keys___44676 = undefined;
    s.snipped___44680 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 17; continue; }
    { step = 16; continue; }
  case 1:
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == "number");
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    { step = 17; continue; }
    { step = 15; continue; }
  case 2:
    r0 = pxsim_Array_.isArray(s.arg0);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 5; continue; }
    s.asArr___44646 = (s.arg0);
    r0 = pxsim_Array__length(s.asArr___44646);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = helpers_arrayJoin__P42750_mk(s);
    s.tmp_2.arg0 = s.asArr___44646;
    s.tmp_2.arg1 = ",";
    s.callLocIdx = 5; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    { step = 17; continue; }
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    s.tmp_7 = helpers_arrayJoin__P42750_mk(s);
    s.tmp_8 = helpers_arraySlice__P42761_mk(s);
    s.tmp_8.arg0 = s.asArr___44646;
    s.tmp_8.arg1 = 0;
    s.tmp_8.arg2 = s.arg1;
    s.callLocIdx = 6; s.pc = 21; return s.tmp_8;
  case 21:
    r0 = s.retval;
    s.tmp_7.arg0 = r0;
    s.tmp_7.arg1 = ",";
    s.callLocIdx = 7; s.pc = 20; return s.tmp_7;
  case 20:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "...");
    { step = 17; continue; }
  case 4:
    { step = 14; continue; }
  case 5:
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
    s.asString___44664 = (r0);
    r0 = (s.asString___44664 != "[object Object]");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.asString___44664 != "[Object]");
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.asString___44664;
    { step = 17; continue; }
  case 8:
  case 9:
    r0 = pxsim_pxtrt.keysOf(s.arg0);
    s.keys___44676 = (r0);
    r0 = pxsim_Array__length(s.keys___44676);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > s.arg1);
    s.snipped___44680 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___44680);
    if (!r0) { step = 10; continue; }
    s.tmp_0 = helpers_arraySlice__P42761_mk(s);
    s.tmp_0.arg0 = s.keys___44676;
    s.tmp_0.arg1 = 0;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 8; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.keys___44676 = (r0);
  case 10:
  case 11:
    r0 = pxsim_pxtcore_mkAction(1, inline__P44697);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___44680);
    if (!r0) { step = 12; continue; }
    r0 = "\n    ...";
    { step = 13; continue; }
  case 12:
    r0 = pxsim_String_.mkEmpty();
  case 13:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_7 = helpers_arrayReduce__P42759_mk(s);
    s.tmp_7.arg0 = s.keys___44676;
    s.tmp_7.arg1 = s.tmp_0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7.arg2 = r0;
    s.callLocIdx = 9; s.pc = 25; return s.tmp_7;
  case 25:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 26);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 26:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 27);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 27:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_8);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("{", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "\n}");
    { step = 17; continue; }
  case 14:
  case 15:
  case 16:
    r0 = undefined;
  case 17:
    return leave(s, r0)
  default: oops()
} } }
console_inspect__P43020.info = {"start":2271,"length":1190,"line":81,"column":4,"endLine":114,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"inspect","argumentNames":["obj","maxElements"]}

function console_inspect__P43020_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect__P43020, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  asArr___44646: undefined,
  asString___44664: undefined,
  keys___44676: undefined,
  snipped___44680: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P44697(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("\n    ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ": ");
    s.tmp_3 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.caps[0], s.arg1);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_6);
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
inline__P44697.info = {"start":3293,"length":61,"line":108,"column":20,"endLine":108,"endColumn":81,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["prev","currKey"]}

function inline__P44697_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P44697, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arraySlice__P42761(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___44745 = undefined;
    s.len___44747 = undefined;
    s.i___44781 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___44745 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___44747 = (r0);
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg1 = (0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = Math_max__P42774_mk(s);
    r0 = (s.len___44747 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 1; s.pc = 16; return s.tmp_1;
  case 16:
    r0 = s.retval;
    s.arg1 = (r0);
  case 2:
  case 3:
  case 4:
    r0 = (s.arg1 > s.len___44747);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.res___44745;
    { step = 15; continue; }
  case 5:
  case 6:
    r0 = (s.arg2 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.arg2 = (s.len___44747);
    { step = 10; continue; }
  case 7:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = (s.len___44747 + s.arg2);
    s.arg2 = (r0);
  case 8:
  case 9:
  case 10:
    r0 = (s.arg2 > s.len___44747);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.arg2 = (s.len___44747);
  case 11:
  case 12:
    s.i___44781 = (s.arg1);
  case 13:
    r0 = (s.i___44781 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.res___44745;
    r0 = pxsim_Array__getAt(s.arg0, s.i___44781);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___44781 + 1);
    s.i___44781 = (r0);
    { step = 13; continue; }
  case 14:
    r0 = s.res___44745;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySlice__P42761.info = {"start":8909,"length":690,"line":299,"column":4,"endLine":324,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySlice","argumentNames":["arr","start","end"]}

function helpers_arraySlice__P42761_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySlice__P42761, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  res___44745: undefined,
  len___44747: undefined,
  i___44781: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P42774(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P42774.info = {"start":15575,"length":105,"line":529,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P42774_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P42774, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayReduce__P42759(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___44724 = undefined;
    s.i___44727 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___44724 = (r0);
    s.i___44727 = (0);
  case 1:
    r0 = (s.i___44727 < s.len___44724);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_4_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.arg2;
    r0 = pxsim_Array__getAt(s.arg0, s.i___44727);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = s.i___44727;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 0; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.arg2 = (r0);
    r0 = (s.i___44727 + 1);
    s.i___44727 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.arg2;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayReduce__P42759.info = {"start":8316,"length":317,"line":280,"column":4,"endLine":286,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayReduce","argumentNames":["arr","callbackfn","initialValue"]}

function helpers_arrayReduce__P42759_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayReduce__P42759, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___44724: undefined,
  i___44727: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayJoin__P42750(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___44813 = undefined;
    s.len___44814 = undefined;
    s.i___44817 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg1 === null);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    s.arg1 = (",");
  case 3:
  case 4:
    r0 = pxsim_String_.mkEmpty();
    s.r___44813 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___44814 = (r0);
    s.i___44817 = (0);
  case 5:
    r0 = (s.i___44817 < s.len___44814);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.i___44817 > 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_1;
    { step = 7; continue; }
  case 6:
    r0 = s.arg1;
  case 7:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 8; continue; }
    if ((s.r___44813) && (s.r___44813).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.r___44813);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___44813) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_3 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.r___44813 = (r0);
  case 8:
  case 9:
    r0 = pxsim_Array__getAt(s.arg0, s.i___44817);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    r0 = pxsim_Array__getAt(s.arg0, s.i___44817);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === null);
  case 11:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_String_.mkEmpty();
    { step = 13; continue; }
  case 12:
    r0 = pxsim_Array__getAt(s.arg0, s.i___44817);
  case 13:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    if ((s.r___44813) && (s.r___44813).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.r___44813);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___44813) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_6);
    s.r___44813 = (r0);
    r0 = (s.i___44817 + 1);
    s.i___44817 = (r0);
    { step = 5; continue; }
  case 14:
    r0 = s.r___44813;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayJoin__P42750.info = {"start":4133,"length":432,"line":157,"column":4,"endLine":170,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayJoin","argumentNames":["arr","sep"]}

function helpers_arrayJoin__P42750_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayJoin__P42750, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  r___44813: undefined,
  len___44814: undefined,
  i___44817: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Vector_create__P47224(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(Vector_Vector__C47233_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Vector_Vector_constructor__P47238_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    r0 = (s.arg0 * 256);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 | 0);
    s.tmp_1.arg1 = r0;
    r0 = (s.arg1 * 256);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 | 0);
    s.tmp_1.arg2 = r0;
    s.callLocIdx = 34; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
Vector_create__P47224.info = {"start":1551,"length":94,"line":60,"column":4,"endLine":62,"endColumn":5,"fileName":"main.ts","functionName":"create","argumentNames":["x","y"]}

function Vector_create__P47224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Vector_create__P47224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function lambda_3_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }


function lambda_4_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }

const Vector_Vector__C47233_VT = mkVTable({
  name: "Vector",
  numFields: 2,
  classNo: 16,
  lastSubtypeNo: 16,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "_x": null,
    "set/_x": null,
    "_y": null,
    "set/_y": null,
    "x": Vector_Vector_x__P47234,
    "y": Vector_Vector_y__P47235,
    "toString": Vector_Vector_toString__P47225,
    "scale": Vector_Vector_scale__P47232,
    "magnitude": Vector_Vector_magnitude__P47231,
  },
  toStringMethod: Vector_Vector_toString__P47225,
});

const breakpoints = setupDebugger(1, ["vector___44253","vector2___44254"])

return _main___P47479
})
