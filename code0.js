gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDkeyObjects1= [];
gdjs.New_32sceneCode.GDkeyObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].play();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects1[i].setString(gdjs.evtsExt__Gamepads__LastButtonString.func(runtimeScene, 1, "PS4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "SQUARE", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0, 10, 10, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].play();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].play();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("key"), gdjs.New_32sceneCode.GDkeyObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDkeyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDkeyObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getCurrentTime() > 3 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getCurrentTime() < 3.1 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects1[i].setString("3SEC");
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDkeyObjects1.length = 0;
gdjs.New_32sceneCode.GDkeyObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
