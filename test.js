(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"test_atlas_", frames: [[0,579,2045,250],[979,258,60,60],[0,0,977,577],[979,0,256,256]]}
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



(lib.color = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nawahel = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sea2_01 = function() {
	this.spriteSheet = ss["test_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.color();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,60,60), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1,x:0.1,y:0.1},0).wait(1).to({rotation:12.2,x:0,y:0},0).wait(1).to({rotation:18.3,x:0.1},0).wait(1).to({rotation:24.4,x:0},0).wait(1).to({rotation:30.5,y:0.1},0).wait(1).to({rotation:36.6,x:0.1},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8,x:0},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1,y:0},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3,y:0.1},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6,y:0},0).wait(1).to({rotation:103.7,y:0.1},0).wait(1).to({rotation:109.8,y:0},0).wait(1).to({rotation:115.9,y:0.1},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1,y:0},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238,x:0.1},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2,x:0},0).wait(1).to({rotation:256.3,x:0.1},0).wait(1).to({rotation:262.4,x:0},0).wait(1).to({rotation:268.5,x:0.1},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8,x:0},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299,x:0.1},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3,y:0.1},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5,y:0},0).wait(1).to({rotation:335.6,x:0},0).wait(1).to({rotation:341.7,y:0.1},0).wait(1).to({rotation:347.8,y:0},0).wait(1).to({rotation:353.9,x:0.1,y:0.1},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(540.8,30);

	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(488.5,302.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.movieClip_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,977,591.3), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(617.5,388.4,1,1,0,0,0,488.5,295.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:289.4,x:618,y:381.6},0).wait(1).to({x:618.5,y:381.2},0).wait(1).to({x:619.1,y:380.7},0).wait(1).to({x:619.6,y:380.2},0).wait(1).to({x:620.1,y:379.8},0).wait(1).to({x:620.6,y:379.3},0).wait(1).to({x:621.1,y:378.8},0).wait(1).to({x:621.7,y:378.4},0).wait(1).to({x:622.2,y:377.9},0).wait(1).to({x:622.7,y:377.4},0).wait(1).to({x:623.2,y:376.9},0).wait(1).to({x:623.8,y:376.5},0).wait(1).to({x:624.3,y:376},0).wait(1).to({x:624.8,y:375.5},0).wait(1).to({x:625.3,y:375.1},0).wait(1).to({x:625.8,y:374.6},0).wait(1).to({x:626.4,y:374.1},0).wait(1).to({x:626.9,y:373.7},0).wait(1).to({x:627.4,y:373.2},0).wait(1).to({x:627.9,y:372.7},0).wait(1).to({x:628.4,y:372.3},0).wait(1).to({x:629,y:371.8},0).wait(1).to({x:629.5,y:371.3},0).wait(1).to({x:630,y:370.9},0).wait(1).to({x:630.5,y:370.4},0).wait(1).to({x:631,y:369.9},0).wait(1).to({x:631.6,y:369.5},0).wait(1).to({x:632.1,y:369},0).wait(1).to({x:632.6,y:368.5},0).wait(1).to({x:633.1,y:368},0).wait(1).to({x:633.7,y:367.6},0).wait(1).to({x:634.2,y:367.1},0).wait(1).to({x:634.7,y:366.6},0).wait(1).to({x:635.2,y:366.2},0).wait(1).to({x:635.7,y:365.7},0).wait(1).to({x:636.3,y:365.2},0).wait(1).to({x:636.8,y:364.8},0).wait(1).to({x:637.3,y:364.3},0).wait(1).to({x:637.1,y:364.5},0).wait(1).to({x:636.8,y:364.7},0).wait(1).to({x:636.6,y:364.9},0).wait(1).to({x:636.3,y:365.2},0).wait(1).to({x:636.1,y:365.4},0).wait(1).to({x:635.9,y:365.6},0).wait(1).to({x:635.6,y:365.8},0).wait(1).to({x:635.4,y:366},0).wait(1).to({x:635.2,y:366.2},0).wait(1).to({x:634.9,y:366.4},0).wait(1).to({x:634.7,y:366.7},0).wait(1).to({x:634.4,y:366.9},0).wait(1).to({x:634.2,y:367.1},0).wait(1).to({x:634,y:367.3},0).wait(1).to({x:633.7,y:367.5},0).wait(1).to({x:633.5,y:367.7},0).wait(1).to({x:633.2,y:367.9},0).wait(1).to({x:633,y:368.2},0).wait(1).to({x:632.8,y:368.4},0).wait(1).to({x:632.5,y:368.6},0).wait(1).to({x:632.3,y:368.8},0).wait(1).to({x:632.1,y:369},0).wait(1).to({x:631.8,y:369.2},0).wait(1).to({x:631.6,y:369.4},0).wait(1).to({x:631.3,y:369.7},0).wait(1).to({x:631.1,y:369.9},0).wait(1).to({x:630.9,y:370.1},0).wait(1).to({x:630.6,y:370.3},0).wait(1).to({x:630.4,y:370.5},0).wait(1).to({x:630.1,y:370.7},0).wait(1).to({x:629.9,y:370.9},0).wait(1).to({x:629.7,y:371.2},0).wait(1).to({x:629.4,y:371.4},0).wait(1).to({x:629.2,y:371.6},0).wait(1).to({x:629,y:371.8},0).wait(1).to({x:628.7,y:372},0).wait(1).to({x:628.5,y:372.2},0).wait(1).to({x:628.2,y:372.4},0).wait(1).to({x:628,y:372.7},0).wait(1).to({x:627.8,y:372.9},0).wait(1).to({x:627.5,y:373.1},0).wait(1).to({x:627.3,y:373.3},0).wait(1).to({x:627,y:373.5},0).wait(1).to({x:626.8,y:373.7},0).wait(1).to({x:626.6,y:374},0).wait(1).to({x:626.3,y:374.2},0).wait(1).to({x:626.1,y:374.4},0).wait(1).to({x:625.8,y:374.6},0).wait(1).to({x:625.6,y:374.8},0).wait(1).to({x:625.4,y:375},0).wait(1).to({x:625.1,y:375.2},0).wait(1).to({x:624.9,y:375.5},0).wait(1).to({x:624.7,y:375.7},0).wait(1).to({x:624.4,y:375.9},0).wait(1).to({x:624.2,y:376.1},0).wait(1).to({x:623.9,y:376.3},0).wait(1).to({x:623.7,y:376.5},0).wait(1).to({x:623.5,y:376.7},0).wait(1).to({x:623.2,y:377},0).wait(1).to({x:623,y:377.2},0).wait(1).to({x:622.7,y:377.4},0).wait(1).to({x:622.5,y:377.6},0).wait(1).to({x:622.3,y:377.8},0).wait(1).to({x:622,y:378},0).wait(1).to({x:621.8,y:378.2},0).wait(1).to({x:621.6,y:378.5},0).wait(1).to({x:621.3,y:378.7},0).wait(1).to({x:621.1,y:378.9},0).wait(1).to({x:620.8,y:379.1},0).wait(1).to({x:620.6,y:379.3},0).wait(1).to({x:620.4,y:379.5},0).wait(1).to({x:620.1,y:379.7},0).wait(1).to({x:619.9,y:380},0).wait(1).to({x:619.6,y:380.2},0).wait(1).to({x:619.4,y:380.4},0).wait(1).to({x:619.2,y:380.6},0).wait(1).to({x:618.9,y:380.8},0).wait(1).to({x:618.7,y:381},0).wait(1).to({x:618.5,y:381.2},0).wait(1).to({x:618.2,y:381.5},0).wait(1).to({x:618,y:381.7},0).wait(1).to({x:617.7,y:381.9},0).wait(1).to({x:617.5,y:382.1},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1020.5,651);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(827.7,651);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1020.5,651);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},74).to({state:[{t:this.instance_3}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:827.7},74).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},74).to({_off:true,x:1020.5},47).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(671.5,595);

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(671.5,623.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:623.8},60).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},60).to({y:595},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289,452.7,2392,686.3);
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