(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"test_atlas_", frames: [[0,579,2045,250],[0,0,977,577],[979,0,256,256]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nawahel = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sea2_01 = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nawahel();
	this.instance.parent = this;
	this.instance.setTransform(-488.5,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.5,-288.5,977,577);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nawahel();
	this.instance.parent = this;
	this.instance.setTransform(-488.5,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.5,-288.5,977,577);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nawahel();
	this.instance.parent = this;
	this.instance.setTransform(-488.5,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.5,-288.5,977,577);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nawahel();
	this.instance.parent = this;
	this.instance.setTransform(-488.5,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.5,-288.5,977,577);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sea2_01();
	this.instance.parent = this;
	this.instance.setTransform(764.5,-128);

	this.instance_1 = new lib.sea2_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(509.5,-128);

	this.instance_2 = new lib.sea2_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.5,-128);

	this.instance_3 = new lib.sea2_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-128);

	this.instance_4 = new lib.sea2_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-255.5,-128);

	this.instance_5 = new lib.sea2_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-510.5,-128);

	this.instance_6 = new lib.sea2_01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-765.5,-128);

	this.instance_7 = new lib.sea2_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1020.5,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1020.5,-128,2041,256);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sea2_01();
	this.instance.parent = this;
	this.instance.setTransform(764.5,-128);

	this.instance_1 = new lib.sea2_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(509.5,-128);

	this.instance_2 = new lib.sea2_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.5,-128);

	this.instance_3 = new lib.sea2_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-128);

	this.instance_4 = new lib.sea2_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-255.5,-128);

	this.instance_5 = new lib.sea2_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-510.5,-128);

	this.instance_6 = new lib.sea2_01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-765.5,-128);

	this.instance_7 = new lib.sea2_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1020.5,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1020.5,-128,2041,256);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sea2_01();
	this.instance.parent = this;
	this.instance.setTransform(764.5,-128);

	this.instance_1 = new lib.sea2_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(509.5,-128);

	this.instance_2 = new lib.sea2_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.5,-128);

	this.instance_3 = new lib.sea2_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-128);

	this.instance_4 = new lib.sea2_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-255.5,-128);

	this.instance_5 = new lib.sea2_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-510.5,-128);

	this.instance_6 = new lib.sea2_01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-765.5,-128);

	this.instance_7 = new lib.sea2_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1020.5,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1020.5,-128,2041,256);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1022.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1022.5,-125,2045,250);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1022.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1022.5,-125,2045,250);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(617.5,395.5);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(619.5,386.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(617.5,395.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(617.5,395.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_2}]},46).to({state:[{t:this.instance_3}]},41).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:619.5,y:386.5},34).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},34).to({_off:true,x:617.5,y:395.5},46).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},46).to({_off:true},41).wait(1));

	// Layer 2
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1020.5,651);

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(827.7,651);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1020.5,651);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},74).to({state:[{t:this.instance_6}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:827.7},74).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},74).to({_off:true,x:1020.5},47).wait(1));

	// Layer 1
	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(671.5,595);

	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(671.5,623.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,y:623.8},60).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},60).to({y:595},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289,467,2392,672);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 60,
	color: "#00CCFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/test_atlas_.png", id:"test_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;