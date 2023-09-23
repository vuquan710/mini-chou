(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"bhn2017_atlas_", frames: [[72,173,66,58],[140,192,55,46],[56,233,54,46],[0,201,54,46],[197,192,55,46],[112,240,55,45],[179,0,70,96],[179,98,64,92],[107,0,70,103],[0,0,105,131],[0,133,70,66],[107,105,70,66],[169,240,50,42],[0,249,50,42],[245,98,8,3]]}
    ];
    
    
    
    lib.updateListCache = function (cacheList) {		
        for(var i = 0; i < cacheList.length; i++) {		
            if(cacheList[i].cacheCanvas)		
                cacheList[i].updateCache();		
        }		
    };		
    
    lib.addElementsToCache = function (textInst, cacheList) {		
        var cur = textInst;		
        while(cur != null && cur != exportRoot) {		
            if(cacheList.indexOf(cur) != -1)		
                break;		
            cur = cur.parent;		
        }		
        if(cur != exportRoot) {		
            var cur2 = textInst;		
            var index = cacheList.indexOf(cur);		
            while(cur2 != null && cur2 != cur) {		
                cacheList.splice(index, 0, cur2);		
                cur2 = cur2.parent;		
                index++;		
            }		
        }		
        else {		
            cur = textInst;		
            while(cur != null && cur != exportRoot) {		
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
    
    
    
    (lib.Bitmap10 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap11 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap16 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap18 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap2 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.fbBitmap1 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.fbBitmap2 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.fbBitmap3 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.fbBitmap4 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.homeovlBitmap14 = function() {
        this.spriteSheet = ss["bhn2017_atlas_"];
        this.gotoAndStop(14);
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
    
    
    (lib.Symbol25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#1C4B62").beginStroke().moveTo(4.6,2.4).curveTo(3.9,2.1,3.2,1.4).lineTo(-0.8,1.8).curveTo(-4.4,2.1,-6,1.1).curveTo(-6.4,-1.4,-3.2,-2.4).curveTo(0.2,-3.4,2.9,-0.6).curveTo(3.7,-1.5,4.8,-1.8).curveTo(5.9,-2.2,5.8,-1.9).lineTo(4.9,0.4).lineTo(6.1,2.6).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-6,-2.6,12.1,5.3), null);
    
    
    (lib.Symbol19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#32C269").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape.setTransform(18.9,15.3,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,37.9,30.6), null);
    
    
    (lib.Symbol18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#BBCAFF").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape.setTransform(18.9,15.3,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,37.9,30.6), null);
    
    
    (lib.Symbol17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#BBCA05").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape.setTransform(18.9,15.3,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,37.9,30.6), null);
    
    
    (lib.Symbol16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#BB2A05").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape.setTransform(18.9,15.3,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,37.9,30.6), null);
    
    
    (lib.Symbol15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(0.1,0,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,41.3,34.2), null);
    
    
    (lib.Symbol14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap14();
        this.instance.parent = this;
        this.instance.setTransform(0.1,0,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,41.6,34.9), null);
    
    
    (lib.Symbol13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(0.1,0,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,40.6,34.6), null);
    
    
    (lib.Symbol12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap11();
        this.instance.parent = this;
        this.instance.setTransform(0.1,0,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,41.6,34.9), null);
    
    
    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(0.2,0,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,40.7,34.6), null);
    
    
    (lib.Symbol10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap10();
        this.instance.parent = this;
        this.instance.setTransform(0.1,0.1,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,49.8,43.8), null);
    
    
    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 11 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().moveTo(-6.9,26.8).curveTo(-12.1,26.6,-17.1,25.2).lineTo(-18.9,24.7).lineTo(-22.5,23.4).lineTo(-23.3,23).lineTo(-24.1,22.7).curveTo(-26.6,21.5,-28.9,20).lineTo(-30.3,19).lineTo(-31.2,18.4).lineTo(-31.5,18.2).lineTo(-34,16.2).lineTo(-34.3,16).curveTo(-36.3,14.2,-38.1,12.1).lineTo(-38.3,11.9).lineTo(-19,-8.4).curveTo(-17.5,-7.8,-16.4,-7.1).curveTo(-14.8,-6.1,-13.7,-4.8).curveTo(-11.8,-2.5,-11.5,0.7).lineTo(-10.7,1.3).curveTo(-9.6,2,-8.5,2.3).curveTo(-6.2,2.8,-4.1,1.7).curveTo(-3.2,0.7,-2.2,-0.6).curveTo(0.4,-4.1,3.5,-5.3).curveTo(6.3,-6.4,9.4,-5.7).lineTo(10.3,-6.3).curveTo(11.2,-7.1,11.9,-8.1).curveTo(13.9,-11.4,11.5,-15.6).curveTo(9.1,-19.8,9.8,-21.8).curveTo(9.9,-22.2,10.3,-23).curveTo(10.3,-24.2,10.6,-25.9).lineTo(37.1,-26.8).lineTo(37.2,-26.4).lineTo(37.5,-24.9).lineTo(37.6,-24.5).lineTo(37.9,-22.5).lineTo(37.9,-22.2).lineTo(38.1,-20.8).lineTo(38.1,-20.8).lineTo(38.1,-20.6).lineTo(38.3,-17.8).lineTo(38.2,-15.6).lineTo(37.8,-10.9).curveTo(37.6,-9.1,37.2,-7.3).lineTo(37.1,-7).lineTo(36.1,-3.3).lineTo(34.8,0.1).lineTo(34.2,1.6).lineTo(34.1,1.9).curveTo(32.6,4.8,30.8,7.5).lineTo(28.5,10.7).lineTo(27.6,11.7).lineTo(27.3,12.1).lineTo(27,12.4).lineTo(25.4,14).lineTo(25,14.4).lineTo(24.7,14.8).lineTo(23.3,16).lineTo(21.8,17.3).curveTo(19.6,19,17.2,20.5).lineTo(14.3,22.1).lineTo(14.1,22.2).lineTo(12.8,22.8).lineTo(11.6,23.4).curveTo(7.7,25,3.7,25.9).lineTo(1.6,26.2).lineTo(-1.3,26.6).lineTo(-1.7,26.7).lineTo(-5.2,26.8).lineTo(-6.9,26.8).closePath();
        var mask_graphics_1 = new cjs.Graphics().moveTo(-9.7,25.2).curveTo(-14.8,24.6,-19.7,22.7).lineTo(-21.4,22).lineTo(-24.9,20.4).lineTo(-25.7,19.9).lineTo(-26.4,19.5).curveTo(-28.8,18.1,-31,16.4).lineTo(-32.2,15.3).lineTo(-33.1,14.7).lineTo(-33.3,14.4).lineTo(-35.7,12.1).lineTo(-35.9,11.9).curveTo(-37.8,9.9,-39.4,7.7).lineTo(-39.5,7.5).lineTo(-18.4,-10.9).curveTo(-17.1,-10.2,-16,-9.4).curveTo(-14.5,-8.3,-13.5,-6.8).curveTo(-11.8,-4.4,-11.8,-1.2).lineTo(-11.1,-0.4).curveTo(-10.1,0.3,-9,0.7).curveTo(-6.8,1.4,-4.6,0.5).lineTo(-2.4,-1.6).curveTo(0.5,-4.8,3.7,-5.8).curveTo(6.6,-6.6,9.6,-5.6).lineTo(10.5,-6.1).curveTo(11.5,-6.8,12.2,-7.8).curveTo(14.5,-10.8,12.6,-15.2).curveTo(10.6,-19.6,11.4,-21.6).curveTo(11.6,-22,12.1,-22.7).curveTo(12.2,-24,12.6,-25.6).lineTo(39.1,-24).lineTo(39.2,-23.6).lineTo(39.3,-22.2).lineTo(39.3,-21.7).lineTo(39.5,-19.7).lineTo(39.5,-19.3).lineTo(39.5,-18).lineTo(39.5,-17.9).lineTo(39.5,-17.8).lineTo(39.4,-15).lineTo(39.2,-12.8).lineTo(38.3,-8.1).curveTo(37.9,-6.3,37.4,-4.6).lineTo(37.3,-4.3).lineTo(35.9,-0.7).lineTo(34.3,2.6).lineTo(33.5,3.9).lineTo(33.4,4.2).curveTo(31.7,7,29.7,9.5).lineTo(27,12.5).lineTo(26,13.5).lineTo(25.7,13.8).lineTo(25.4,14).lineTo(23.7,15.5).lineTo(23.3,15.9).lineTo(22.9,16.2).lineTo(21.4,17.3).lineTo(19.8,18.4).curveTo(17.4,20,14.9,21.2).lineTo(11.8,22.5).lineTo(11.7,22.6).lineTo(10.3,23.1).lineTo(9,23.6).curveTo(5,24.8,1,25.3).lineTo(-1.2,25.5).lineTo(-4.1,25.6).lineTo(-4.5,25.6).curveTo(-7.1,25.6,-9.7,25.2).closePath();
        var mask_graphics_2 = new cjs.Graphics().moveTo(-4.1,24.8).lineTo(-7,24.6).lineTo(-7.4,24.6).curveTo(-10,24.3,-12.6,23.7).curveTo(-17.6,22.6,-22.3,20.3).lineTo(-23.9,19.5).lineTo(-27.2,17.5).lineTo(-28,17).lineTo(-28.6,16.5).curveTo(-30.9,14.9,-32.9,13).lineTo(-34.1,11.8).lineTo(-34.8,11).lineTo(-35.1,10.8).lineTo(-37.2,8.3).lineTo(-37.4,8).curveTo(-39.1,5.9,-40.5,3.6).lineTo(-40.6,3.4).lineTo(-17.9,-13).curveTo(-16.6,-12.2,-15.6,-11.3).curveTo(-14.2,-10,-13.4,-8.5).curveTo(-11.9,-5.9,-12.2,-2.7).lineTo(-11.5,-1.9).curveTo(-10.6,-1.1,-9.6,-0.6).curveTo(-7.4,0.3,-5.2,-0.4).curveTo(-4.1,-1.2,-2.8,-2.3).curveTo(0.3,-5.2,3.6,-5.9).curveTo(6.6,-6.5,9.5,-5.2).lineTo(10.4,-5.6).curveTo(11.5,-6.2,12.3,-7.1).curveTo(14.9,-9.9,13.3,-14.5).curveTo(11.8,-19.1,12.8,-20.9).curveTo(13,-21.3,13.5,-22).curveTo(13.8,-23.2,14.3,-24.8).lineTo(40.6,-20.8).lineTo(40.6,-20.4).lineTo(40.6,-18.9).lineTo(40.6,-18.4).lineTo(40.6,-16.4).lineTo(40.5,-16.1).lineTo(40.4,-14.7).lineTo(40.4,-14.7).lineTo(40.4,-14.5).lineTo(40.1,-11.8).lineTo(39.6,-9.5).lineTo(38.3,-5).curveTo(37.8,-3.2,37,-1.6).lineTo(36.9,-1.3).lineTo(35.3,2.1).lineTo(33.3,5.3).lineTo(32.5,6.5).lineTo(32.3,6.8).curveTo(30.3,9.5,28.1,11.7).lineTo(25.2,14.5).lineTo(24.1,15.3).lineTo(23.7,15.6).lineTo(23.4,15.8).lineTo(21.6,17.2).lineTo(21.1,17.5).lineTo(20.7,17.8).lineTo(19.2,18.8).lineTo(17.5,19.7).curveTo(14.9,21,12.3,22).lineTo(9.1,23).lineTo(8.9,23.1).lineTo(7.5,23.5).lineTo(6.2,23.8).curveTo(2.2,24.7,-1.9,24.8).closePath();
        var mask_graphics_3 = new cjs.Graphics().moveTo(-5,23.9).lineTo(-7.2,23.7).lineTo(-10,23.2).lineTo(-10.4,23.2).curveTo(-13,22.6,-15.5,21.8).curveTo(-20.4,20.3,-24.9,17.5).lineTo(-26.4,16.5).lineTo(-29.5,14.3).lineTo(-30.2,13.7).lineTo(-30.8,13.2).curveTo(-32.9,11.3,-34.7,9.2).lineTo(-35.8,8).lineTo(-36.5,7.1).lineTo(-36.7,6.8).lineTo(-38.6,4.2).lineTo(-38.8,3.9).curveTo(-40.3,1.6,-41.4,-0.8).lineTo(-41.5,-1).lineTo(-17.4,-15.3).curveTo(-16.2,-14.3,-15.3,-13.3).curveTo(-14,-11.9,-13.3,-10.4).curveTo(-12.1,-7.6,-12.7,-4.5).lineTo(-12.1,-3.6).curveTo(-11.3,-2.7,-10.2,-2.1).curveTo(-8.2,-1,-5.9,-1.5).curveTo(-4.7,-2.2,-3.4,-3.2).curveTo(0,-5.8,3.4,-6.1).curveTo(6.4,-6.4,9.1,-4.9).lineTo(10.1,-5.2).curveTo(11.2,-5.7,12.1,-6.5).curveTo(15,-9.1,13.8,-13.8).curveTo(12.7,-18.5,13.8,-20.2).curveTo(14.1,-20.6,14.7,-21.2).curveTo(15.1,-22.4,15.8,-24).lineTo(41.5,-17.6).lineTo(41.5,-17.1).lineTo(41.4,-15.7).lineTo(41.3,-15.2).lineTo(41.1,-13.2).lineTo(41,-12.9).lineTo(40.8,-11.5).lineTo(40.8,-11.5).lineTo(40.8,-11.3).lineTo(40.2,-8.6).lineTo(39.5,-6.5).lineTo(37.8,-2).curveTo(37.1,-0.4,36.2,1.3).lineTo(36.1,1.5).lineTo(34.1,4.8).lineTo(31.9,7.7).lineTo(30.9,8.9).lineTo(30.7,9.2).curveTo(28.5,11.6,26.1,13.7).lineTo(22.9,16.1).lineTo(21.8,16.9).lineTo(21.4,17.1).lineTo(21,17.3).lineTo(19.1,18.5).lineTo(18.6,18.7).lineTo(18.2,19).lineTo(16.5,19.8).lineTo(14.8,20.6).curveTo(12.1,21.7,9.4,22.5).lineTo(6.2,23.2).lineTo(6,23.2).lineTo(4.5,23.5).lineTo(3.2,23.7).curveTo(0.6,24,-2.1,24).lineTo(-5,23.9).closePath();
        var mask_graphics_4 = new cjs.Graphics().moveTo(-8.1,22.6).lineTo(-10.2,22.2).lineTo(-13,21.5).lineTo(-13.4,21.4).curveTo(-15.9,20.6,-18.3,19.6).curveTo(-23.1,17.5,-27.2,14.4).lineTo(-28.7,13.3).lineTo(-31.5,10.8).lineTo(-32.2,10.1).lineTo(-32.7,9.5).curveTo(-34.7,7.5,-36.3,5.3).lineTo(-37.2,3.9).lineTo(-37.8,3).lineTo(-38,2.7).lineTo(-39.7,-0.2).lineTo(-39.8,-0.4).curveTo(-41.1,-2.9,-42,-5.4).lineTo(-42.1,-5.6).lineTo(-16.8,-17.6).curveTo(-15.6,-16.5,-14.8,-15.4).curveTo(-13.7,-13.9,-13.2,-12.3).curveTo(-12.2,-9.4,-13.1,-6.4).lineTo(-12.6,-5.5).curveTo(-11.8,-4.5,-10.9,-3.8).curveTo(-8.9,-2.5,-6.6,-2.7).lineTo(-3.9,-4.2).curveTo(-0.3,-6.5,3,-6.5).curveTo(6.1,-6.6,8.6,-4.7).lineTo(9.7,-5).curveTo(10.9,-5.4,11.8,-6.1).curveTo(14.9,-8.4,14.2,-13.2).curveTo(13.5,-18,14.8,-19.6).curveTo(15.1,-20,15.7,-20.5).curveTo(16.2,-21.7,17.1,-23.1).lineTo(42.1,-14.4).lineTo(42,-13.9).lineTo(41.8,-12.5).lineTo(41.7,-12.1).lineTo(41.3,-10.1).lineTo(41.2,-9.7).lineTo(40.8,-8.4).lineTo(40.8,-8.4).lineTo(40.7,-8.2).lineTo(39.9,-5.6).lineTo(39.1,-3.5).lineTo(37,0.7).curveTo(36.1,2.4,35.1,3.9).lineTo(34.9,4.1).lineTo(32.7,7.2).lineTo(30.2,9.9).lineTo(29.1,11).lineTo(28.9,11.2).curveTo(26.5,13.5,23.8,15.3).lineTo(20.4,17.4).lineTo(19.3,18.1).lineTo(18.8,18.3).lineTo(18.5,18.5).lineTo(16.5,19.4).lineTo(15.9,19.6).lineTo(15.5,19.9).lineTo(13.8,20.5).lineTo(11.9,21.1).curveTo(9.2,22,6.4,22.5).lineTo(3.1,22.9).lineTo(2.9,22.9).lineTo(1.5,23).lineTo(0.1,23.1).lineTo(-1.1,23.1).curveTo(-4.6,23.1,-8.1,22.6).closePath();
        var mask_graphics_5 = new cjs.Graphics().moveTo(-1.6,22.2).lineTo(-2.9,22.2).curveTo(-7.1,21.9,-11,20.9).lineTo(-13.1,20.3).lineTo(-15.9,19.3).lineTo(-16.2,19.2).curveTo(-18.7,18.2,-20.9,17).curveTo(-25.5,14.5,-29.4,11).lineTo(-30.7,9.7).lineTo(-33.3,7).lineTo(-33.9,6.2).lineTo(-34.4,5.6).curveTo(-36.1,3.4,-37.5,1).lineTo(-38.3,-0.4).lineTo(-38.9,-1.3).lineTo(-39,-1.7).lineTo(-40.4,-4.7).lineTo(-40.5,-5).curveTo(-41.6,-7.5,-42.3,-10.1).lineTo(-42.3,-10.3).lineTo(-16,-19.9).curveTo(-15,-18.7,-14.3,-17.6).curveTo(-13.3,-15.9,-12.9,-14.3).curveTo(-12.2,-11.3,-13.4,-8.4).lineTo(-12.9,-7.4).curveTo(-12.3,-6.4,-11.4,-5.6).curveTo(-9.6,-4.1,-7.3,-4.2).curveTo(-6,-4.7,-4.5,-5.4).curveTo(-0.6,-7.3,2.7,-7).curveTo(5.7,-6.8,8.1,-4.7).lineTo(9.1,-4.9).curveTo(10.4,-5.2,11.4,-5.8).curveTo(14.7,-7.8,14.4,-12.6).curveTo(14.2,-17.5,15.6,-19).curveTo(15.9,-19.3,16.6,-19.8).curveTo(17.2,-20.9,18.2,-22.3).lineTo(42.3,-11.2).lineTo(42.2,-10.8).lineTo(41.8,-9.4).lineTo(41.7,-9).lineTo(41.1,-7).lineTo(40.9,-6.7).lineTo(40.5,-5.4).lineTo(40.5,-5.4).lineTo(40.4,-5.2).lineTo(39.3,-2.7).lineTo(38.3,-0.7).lineTo(35.8,3.3).curveTo(34.8,4.9,33.6,6.3).lineTo(33.5,6.5).lineTo(30.9,9.3).lineTo(28.2,11.8).lineTo(27,12.8).lineTo(26.8,13).curveTo(24.2,15,21.4,16.6).lineTo(17.8,18.4).lineTo(16.6,19).lineTo(16.1,19.1).lineTo(15.8,19.3).lineTo(13.7,20).lineTo(13.1,20.2).lineTo(12.6,20.4).lineTo(10.9,20.9).lineTo(9,21.3).curveTo(6.2,21.9,3.4,22.2).lineTo(0.1,22.3).lineTo(-0.1,22.3).closePath();
        var mask_graphics_6 = new cjs.Graphics().moveTo(0.3,21.8).lineTo(-3,21.6).lineTo(-3.2,21.6).lineTo(-4.7,21.4).lineTo(-6,21.3).curveTo(-10.1,20.6,-13.9,19.2).lineTo(-16,18.4).lineTo(-18.6,17.2).lineTo(-18.9,17.1).curveTo(-21.3,15.8,-23.4,14.4).curveTo(-27.7,11.5,-31.2,7.7).lineTo(-32.4,6.3).lineTo(-34.8,3.3).lineTo(-35.3,2.5).lineTo(-35.7,1.8).curveTo(-37.3,-0.5,-38.4,-3).lineTo(-39.1,-4.5).lineTo(-39.5,-5.5).lineTo(-39.7,-5.9).lineTo(-40.8,-8.9).lineTo(-40.9,-9.2).curveTo(-41.7,-11.9,-42.1,-14.5).lineTo(-42.1,-14.8).lineTo(-15.1,-21.8).curveTo(-14.2,-20.6,-13.6,-19.4).curveTo(-12.7,-17.7,-12.5,-16).curveTo(-12.1,-13,-13.5,-10.2).lineTo(-13.2,-9.2).curveTo(-12.7,-8.1,-11.8,-7.2).curveTo(-10.2,-5.6,-7.8,-5.4).curveTo(-6.5,-5.7,-4.9,-6.4).curveTo(-0.9,-7.9,2.3,-7.3).curveTo(5.3,-6.8,7.5,-4.5).lineTo(8.6,-4.6).curveTo(9.8,-4.8,10.9,-5.3).curveTo(14.3,-7,14.5,-11.8).curveTo(14.7,-16.6,16.3,-18).curveTo(16.6,-18.3,17.4,-18.7).curveTo(18.1,-19.8,19.2,-21.1).lineTo(42.1,-7.8).lineTo(42,-7.4).lineTo(41.5,-6).lineTo(41.3,-5.6).lineTo(40.5,-3.7).lineTo(40.4,-3.4).lineTo(39.8,-2.2).lineTo(39.8,-2.2).lineTo(39.7,-2).lineTo(38.4,0.4).lineTo(37.2,2.3).lineTo(34.3,6.1).curveTo(33.2,7.5,31.9,8.8).lineTo(31.7,9).lineTo(28.9,11.6).lineTo(26,13.8).lineTo(24.7,14.7).lineTo(24.4,14.9).curveTo(21.7,16.6,18.7,17.9).lineTo(15,19.4).lineTo(13.7,19.9).lineTo(13.3,20).lineTo(12.9,20.1).lineTo(10.7,20.6).lineTo(10.2,20.8).lineTo(9.7,20.9).lineTo(7.9,21.2).lineTo(6,21.5).curveTo(3.1,21.8,0.3,21.8).lineTo(0.3,21.8).closePath();
        var mask_graphics_7 = new cjs.Graphics().moveTo(-2.8,22.3).lineTo(-6,21.8).lineTo(-6.2,21.8).lineTo(-7.7,21.5).lineTo(-8.9,21.2).curveTo(-13,20.2,-16.7,18.4).lineTo(-18.6,17.4).lineTo(-21.1,16).lineTo(-21.5,15.8).curveTo(-23.7,14.4,-25.7,12.7).curveTo(-29.7,9.5,-32.8,5.3).lineTo(-33.9,3.8).lineTo(-36,0.6).lineTo(-36.4,-0.2).lineTo(-36.8,-0.9).curveTo(-38.1,-3.4,-39,-6).lineTo(-39.6,-7.6).lineTo(-39.9,-8.6).lineTo(-40,-8.9).lineTo(-40.8,-12.1).lineTo(-40.9,-12.4).curveTo(-41.4,-15.1,-41.6,-17.8).lineTo(-41.6,-18).lineTo(-14,-22.5).curveTo(-13.2,-21.2,-12.8,-20).curveTo(-12.1,-18.2,-12,-16.5).curveTo(-11.9,-13.5,-13.6,-10.8).lineTo(-13.3,-9.8).curveTo(-12.9,-8.6,-12.1,-7.7).curveTo(-10.6,-5.9,-8.3,-5.5).curveTo(-7,-5.8,-5.4,-6.2).curveTo(-1.2,-7.4,2,-6.5).curveTo(4.9,-5.7,6.9,-3.3).lineTo(7.9,-3.2).curveTo(9.2,-3.3,10.3,-3.7).curveTo(13.9,-5.1,14.5,-9.8).curveTo(15.1,-14.6,16.8,-15.8).curveTo(17.2,-16.1,18,-16.5).curveTo(18.8,-17.4,20,-18.6).lineTo(41.6,-3.3).lineTo(41.5,-2.9).lineTo(40.8,-1.6).lineTo(40.6,-1.2).lineTo(39.7,0.6).lineTo(39.5,0.9).lineTo(38.8,2).lineTo(38.8,2.1).lineTo(38.7,2.2).lineTo(37.1,4.5).lineTo(35.7,6.3).lineTo(32.6,9.8).curveTo(31.3,11.1,29.9,12.3).lineTo(29.7,12.5).lineTo(26.6,14.8).lineTo(23.5,16.7).lineTo(22.2,17.5).lineTo(21.9,17.7).curveTo(19,19.1,15.9,20.2).lineTo(12.1,21.3).lineTo(10.8,21.6).lineTo(10.3,21.7).lineTo(9.9,21.8).lineTo(7.7,22.1).lineTo(7.2,22.2).lineTo(6.6,22.3).lineTo(4.8,22.5).lineTo(2.9,22.5).lineTo(2.3,22.5).curveTo(-0.3,22.5,-2.8,22.3).closePath();
        var mask_graphics_8 = new cjs.Graphics().moveTo(1.8,23.3).lineTo(-0.2,23.2).curveTo(-3,22.9,-5.8,22.4).lineTo(-9,21.6).lineTo(-9.2,21.6).lineTo(-10.6,21.1).lineTo(-11.8,20.7).curveTo(-15.8,19.3,-19.3,17.3).lineTo(-21.1,16.1).lineTo(-23.5,14.4).lineTo(-23.8,14.2).curveTo(-25.9,12.6,-27.7,10.8).curveTo(-31.4,7.1,-34.2,2.7).lineTo(-35.1,1.1).lineTo(-36.8,-2.2).lineTo(-37.2,-3.1).lineTo(-37.5,-3.9).curveTo(-38.6,-6.4,-39.3,-9.1).lineTo(-39.6,-10.7).lineTo(-39.9,-11.8).lineTo(-40,-12.1).lineTo(-40.5,-15.4).lineTo(-40.5,-15.7).curveTo(-40.8,-18.4,-40.8,-21.1).lineTo(-40.7,-21.3).lineTo(-12.8,-23.3).curveTo(-12.2,-21.9,-11.8,-20.6).curveTo(-11.3,-18.8,-11.4,-17.1).curveTo(-11.6,-14.1,-13.5,-11.6).lineTo(-13.3,-10.5).curveTo(-13,-9.3,-12.3,-8.3).curveTo(-11,-6.4,-8.8,-5.8).curveTo(-7.4,-5.9,-5.8,-6.2).curveTo(-1.5,-7,1.6,-5.8).curveTo(4.4,-4.8,6.2,-2.1).lineTo(7.2,-2).curveTo(8.4,-2,9.6,-2.3).curveTo(13.3,-3.3,14.3,-8).curveTo(15.4,-12.7,17.3,-13.8).curveTo(17.7,-14,18.5,-14.3).curveTo(19.3,-15.2,20.7,-16.2).lineTo(40.8,1).lineTo(40.6,1.4).lineTo(39.8,2.6).lineTo(39.5,3).lineTo(38.4,4.7).lineTo(38.2,5).lineTo(37.4,6.1).lineTo(37.4,6.1).lineTo(37.3,6.2).lineTo(35.5,8.4).lineTo(34,10.1).lineTo(30.5,13.2).curveTo(29.1,14.4,27.6,15.5).lineTo(27.4,15.6).lineTo(24.2,17.7).lineTo(20.9,19.3).lineTo(19.5,19.9).lineTo(19.2,20.1).curveTo(16.1,21.3,13,22).lineTo(9.1,22.8).lineTo(7.8,23).lineTo(7.3,23).lineTo(6.9,23).lineTo(4.7,23.2).lineTo(4.1,23.2).lineTo(3.6,23.3).lineTo(1.8,23.3).closePath();
        var mask_graphics_9 = new cjs.Graphics().moveTo(4.3,24.3).lineTo(3.9,24.3).lineTo(1.7,24.2).lineTo(1.1,24.2).lineTo(0.6,24.2).lineTo(-1.2,24).lineTo(-3.1,23.8).curveTo(-6,23.3,-8.7,22.5).lineTo(-11.8,21.4).lineTo(-11.9,21.3).lineTo(-13.3,20.8).lineTo(-14.5,20.3).curveTo(-18.3,18.5,-21.6,16.1).lineTo(-23.3,14.8).lineTo(-25.5,12.9).lineTo(-25.8,12.7).curveTo(-27.7,10.8,-29.4,8.8).curveTo(-32.7,4.9,-35.1,0.3).lineTo(-35.8,-1.4).lineTo(-37.3,-4.9).lineTo(-37.6,-5.8).lineTo(-37.8,-6.6).curveTo(-38.6,-9.3,-39,-12).lineTo(-39.3,-13.6).lineTo(-39.4,-14.7).lineTo(-39.4,-15.1).lineTo(-39.6,-18.3).lineTo(-39.7,-18.7).curveTo(-39.7,-21.4,-39.4,-24.1).lineTo(-39.4,-24.3).lineTo(-11.4,-23.7).curveTo(-10.9,-22.2,-10.7,-20.9).curveTo(-10.3,-19,-10.6,-17.4).curveTo(-11,-14.4,-13.2,-12).lineTo(-13.1,-11).curveTo(-12.9,-9.8,-12.3,-8.7).curveTo(-11.2,-6.7,-9,-5.9).curveTo(-7.6,-5.9,-6,-6).curveTo(-1.7,-6.4,1.3,-4.9).curveTo(4,-3.6,5.5,-0.8).lineTo(6.5,-0.6).curveTo(7.8,-0.5,8.9,-0.6).curveTo(12.7,-1.4,14.2,-5.9).curveTo(15.7,-10.5,17.6,-11.4).curveTo(18.1,-11.6,18.9,-11.8).curveTo(19.8,-12.6,21.3,-13.5).lineTo(39.7,5.5).lineTo(39.4,5.9).lineTo(38.5,7).lineTo(38.3,7.4).lineTo(37,9).lineTo(36.8,9.2).lineTo(35.9,10.2).lineTo(35.9,10.3).lineTo(35.7,10.4).lineTo(33.8,12.4).lineTo(32.1,13.9).lineTo(28.4,16.7).curveTo(26.9,17.8,25.2,18.7).lineTo(25,18.8).lineTo(21.6,20.5).lineTo(18.2,21.9).lineTo(16.7,22.3).lineTo(16.4,22.5).curveTo(13.3,23.4,10.1,23.8).lineTo(6.1,24.3).lineTo(4.8,24.3).lineTo(4.3,24.3).closePath();
        var mask_graphics_10 = new cjs.Graphics().moveTo(3.3,26.3).lineTo(2,26.2).lineTo(1.5,26.1).lineTo(1.1,26.1).lineTo(-1.1,25.8).lineTo(-1.7,25.8).lineTo(-2.2,25.7).lineTo(-4,25.4).lineTo(-5.9,24.9).curveTo(-8.6,24.2,-11.3,23.1).lineTo(-14.2,21.8).lineTo(-14.4,21.7).lineTo(-15.7,21).lineTo(-16.9,20.4).curveTo(-20.5,18.3,-23.5,15.6).lineTo(-25.1,14.1).lineTo(-27.1,12).lineTo(-27.4,11.8).curveTo(-29.1,9.8,-30.6,7.7).curveTo(-33.6,3.4,-35.5,-1.4).lineTo(-36.1,-3.2).lineTo(-37.2,-6.8).lineTo(-37.4,-7.7).lineTo(-37.5,-8.5).curveTo(-38.1,-11.2,-38.3,-14).lineTo(-38.4,-15.6).lineTo(-38.4,-16.7).lineTo(-38.4,-17.1).lineTo(-38.3,-20.4).lineTo(-38.3,-20.7).curveTo(-38.1,-23.4,-37.5,-26.1).lineTo(-37.5,-26.3).lineTo(-9.7,-23).curveTo(-9.3,-21.6,-9.2,-20.2).curveTo(-9.1,-18.3,-9.5,-16.7).curveTo(-10.2,-13.8,-12.5,-11.6).lineTo(-12.6,-10.6).curveTo(-12.5,-9.4,-12,-8.3).curveTo(-11.1,-6.1,-9,-5.1).curveTo(-7.6,-5,-5.9,-5).curveTo(-1.6,-5,1.2,-3.2).curveTo(3.8,-1.7,5,1.2).lineTo(6,1.6).curveTo(7.2,1.8,8.4,1.7).curveTo(12.2,1.4,14.1,-3).curveTo(16.1,-7.4,18.1,-8.1).curveTo(18.5,-8.3,19.3,-8.4).curveTo(20.4,-9.1,21.9,-9.9).lineTo(38.4,10.7).lineTo(38.2,11).lineTo(37.1,12.1).lineTo(36.8,12.4).lineTo(35.5,13.9).lineTo(35.2,14.2).lineTo(34.2,15.1).lineTo(34.2,15.1).lineTo(34,15.2).lineTo(31.9,17).lineTo(30.1,18.3).lineTo(26.1,20.8).curveTo(24.5,21.7,22.8,22.5).lineTo(22.6,22.6).lineTo(19.1,24).lineTo(15.5,25).lineTo(14,25.4).lineTo(13.7,25.5).curveTo(10.5,26.1,7.3,26.2).lineTo(4.6,26.3).lineTo(3.3,26.3).closePath();
        var mask_graphics_11 = new cjs.Graphics().moveTo(4.6,28.2).lineTo(0.7,27.9).lineTo(-0.7,27.7).lineTo(-1.1,27.6).lineTo(-1.5,27.5).lineTo(-3.7,27).lineTo(-4.3,26.9).lineTo(-4.8,26.8).lineTo(-6.5,26.3).lineTo(-8.3,25.7).curveTo(-11,24.7,-13.6,23.4).lineTo(-16.4,21.8).lineTo(-16.6,21.7).lineTo(-17.8,20.9).lineTo(-18.9,20.1).curveTo(-22.3,17.7,-25.1,14.7).lineTo(-26.5,13.1).lineTo(-28.3,10.9).lineTo(-28.6,10.6).curveTo(-30.1,8.5,-31.4,6.2).curveTo(-34,1.7,-35.4,-3.3).lineTo(-35.8,-5.1).lineTo(-36.6,-8.8).lineTo(-36.7,-9.8).lineTo(-36.8,-10.5).curveTo(-37.1,-13.3,-37,-16.1).lineTo(-36.9,-17.7).lineTo(-36.9,-18.8).lineTo(-36.9,-19.2).lineTo(-36.4,-22.4).lineTo(-36.4,-22.7).curveTo(-35.9,-25.4,-35.2,-28).lineTo(-35.1,-28.2).lineTo(-7.8,-22.4).curveTo(-7.5,-20.9,-7.5,-19.6).curveTo(-7.5,-17.7,-8.1,-16.1).curveTo(-9.1,-13.2,-11.6,-11.4).lineTo(-11.7,-10.3).curveTo(-11.7,-9.1,-11.4,-7.9).curveTo(-10.6,-5.7,-8.6,-4.5).curveTo(-7.3,-4.3,-5.6,-4.1).curveTo(-1.4,-3.7,1.3,-1.7).curveTo(3.7,0.1,4.7,3.1).lineTo(5.6,3.5).curveTo(6.8,3.9,8,3.9).curveTo(11.8,3.9,14.2,-0.3).curveTo(16.5,-4.5,18.5,-5).curveTo(19,-5.2,19.8,-5.2).curveTo(20.9,-5.8,22.5,-6.5).lineTo(37,15.6).lineTo(36.8,15.9).lineTo(35.6,16.9).lineTo(35.3,17.2).lineTo(33.8,18.5).lineTo(33.5,18.7).lineTo(32.4,19.6).lineTo(32.4,19.6).lineTo(32.3,19.7).lineTo(30,21.3).lineTo(28.1,22.4).lineTo(23.9,24.6).curveTo(22.2,25.3,20.5,25.9).lineTo(20.2,26).lineTo(16.5,27.1).lineTo(12.9,27.7).lineTo(11.4,27.9).lineTo(11.1,28).curveTo(8.8,28.2,6.6,28.2).lineTo(4.6,28.2).closePath();
        var mask_graphics_12 = new cjs.Graphics().moveTo(2.1,29.7).lineTo(-1.8,29).lineTo(-3.1,28.7).lineTo(-3.6,28.6).lineTo(-4,28.4).lineTo(-6.1,27.8).lineTo(-6.6,27.6).lineTo(-7.1,27.5).lineTo(-8.8,26.8).lineTo(-10.6,26).curveTo(-13.2,24.8,-15.6,23.3).lineTo(-18.2,21.4).lineTo(-18.4,21.3).lineTo(-19.5,20.3).lineTo(-20.6,19.5).curveTo(-23.7,16.8,-26.2,13.6).lineTo(-27.5,11.8).lineTo(-29.1,9.4).lineTo(-29.3,9.1).curveTo(-30.6,6.9,-31.7,4.5).curveTo(-33.8,-0.2,-34.8,-5.3).lineTo(-35.1,-7.2).lineTo(-35.5,-10.9).lineTo(-35.5,-11.9).lineTo(-35.5,-12.7).curveTo(-35.6,-15.5,-35.3,-18.2).lineTo(-35,-19.8).lineTo(-34.9,-20.9).lineTo(-34.8,-21.3).lineTo(-34.1,-24.5).lineTo(-34,-24.8).curveTo(-33.3,-27.4,-32.3,-29.9).lineTo(-32.2,-30.1).lineTo(-5.5,-21.8).curveTo(-5.4,-20.3,-5.5,-19).curveTo(-5.7,-17.1,-6.4,-15.6).curveTo(-7.7,-12.8,-10.4,-11.2).lineTo(-10.6,-10.1).curveTo(-10.7,-8.9,-10.5,-7.7).curveTo(-10,-5.5,-8.1,-4.1).curveTo(-6.8,-3.7,-5.1,-3.4).curveTo(-0.9,-2.6,1.6,-0.4).curveTo(3.8,1.7,4.5,4.7).lineTo(5.4,5.2).curveTo(6.5,5.7,7.7,5.9).curveTo(11.5,6.2,14.2,2.2).curveTo(17,-1.8,19,-2.1).curveTo(19.5,-2.2,20.3,-2.1).curveTo(21.5,-2.6,23.1,-3.1).lineTo(35.5,20.2).lineTo(35.2,20.5).lineTo(34,21.3).lineTo(33.7,21.6).lineTo(32,22.8).lineTo(31.7,23).lineTo(30.6,23.7).lineTo(30.6,23.8).lineTo(30.4,23.8).lineTo(28,25.2).lineTo(26,26.2).lineTo(21.6,27.9).curveTo(19.9,28.5,18.1,28.9).lineTo(17.8,29).lineTo(14.1,29.7).lineTo(10.4,30).lineTo(8.9,30.1).lineTo(8.6,30.1).lineTo(8.3,30.1).curveTo(5.2,30.1,2.1,29.7).closePath();
        var mask_graphics_13 = new cjs.Graphics().moveTo(8,31.9).lineTo(6.5,31.8).lineTo(6.1,31.8).curveTo(2.9,31.5,-0.2,30.8).lineTo(-4.1,29.8).lineTo(-5.4,29.3).lineTo(-5.8,29.1).lineTo(-6.2,29).lineTo(-8.2,28.1).lineTo(-8.7,27.9).lineTo(-9.2,27.7).lineTo(-10.9,26.9).lineTo(-12.5,26).curveTo(-15,24.5,-17.2,22.8).lineTo(-19.7,20.6).lineTo(-19.9,20.5).lineTo(-20.9,19.5).lineTo(-21.9,18.6).curveTo(-24.7,15.6,-27,12.1).lineTo(-28.1,10.3).lineTo(-29.4,7.7).lineTo(-29.6,7.4).curveTo(-30.7,5,-31.6,2.6).curveTo(-33.3,-2.3,-33.7,-7.5).lineTo(-33.8,-9.3).lineTo(-33.9,-13.1).lineTo(-33.9,-14.1).lineTo(-33.8,-14.9).curveTo(-33.6,-17.6,-33,-20.3).lineTo(-32.6,-22).lineTo(-32.4,-23).lineTo(-32.2,-23.4).lineTo(-31.2,-26.5).lineTo(-31.1,-26.8).curveTo(-30.2,-29.3,-28.9,-31.7).lineTo(-28.8,-31.9).lineTo(-3.1,-21.2).curveTo(-3.1,-19.7,-3.4,-18.4).curveTo(-3.7,-16.5,-4.6,-15).curveTo(-6,-12.4,-8.9,-11).lineTo(-9.2,-10).curveTo(-9.5,-8.8,-9.3,-7.6).curveTo(-9,-5.3,-7.2,-3.8).curveTo(-6,-3.3,-4.4,-2.8).curveTo(-0.3,-1.6,2,0.8).curveTo(4.1,3,4.4,6.2).lineTo(5.3,6.8).curveTo(6.4,7.4,7.5,7.6).curveTo(11.3,8.3,14.4,4.6).curveTo(17.5,0.9,19.5,0.7).curveTo(20,0.7,20.8,0.8).curveTo(22,0.4,23.7,0).lineTo(33.9,24.4).lineTo(33.6,24.7).lineTo(32.3,25.4).lineTo(31.9,25.7).lineTo(30.2,26.7).lineTo(29.9,26.9).lineTo(28.7,27.5).lineTo(28.6,27.5).lineTo(28.5,27.6).lineTo(25.9,28.7).lineTo(23.8,29.5).lineTo(19.3,30.8).curveTo(17.5,31.2,15.7,31.5).lineTo(15.5,31.5).lineTo(11.7,31.9).lineTo(9.8,31.9).lineTo(8,31.9).closePath();
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:22.2,y:7.5}).wait(1).to({graphics:mask_graphics_1,x:20.9,y:8.7}).wait(1).to({graphics:mask_graphics_2,x:19.8,y:9.5}).wait(1).to({graphics:mask_graphics_3,x:18.8,y:10.3}).wait(1).to({graphics:mask_graphics_4,x:17.8,y:11.2}).wait(1).to({graphics:mask_graphics_5,x:16.8,y:12}).wait(1).to({graphics:mask_graphics_6,x:15.8,y:12.5}).wait(1).to({graphics:mask_graphics_7,x:14.8,y:11.7}).wait(1).to({graphics:mask_graphics_8,x:13.9,y:11}).wait(1).to({graphics:mask_graphics_9,x:12.8,y:9.9}).wait(1).to({graphics:mask_graphics_10,x:11.6,y:7.9}).wait(1).to({graphics:mask_graphics_11,x:10.2,y:6}).wait(1).to({graphics:mask_graphics_12,x:8.6,y:4.1}).wait(1).to({graphics:mask_graphics_13,x:7.1,y:2.2}).wait(1));
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#1A329B").beginStroke().moveTo(-17.2,13).curveTo(-24.4,6,-24.2,-3.9).curveTo(-23.9,-15.6,-16.9,-18.6).curveTo(-13.5,-20,-0,-20).lineTo(9.2,-20).curveTo(13.9,-19.9,16.6,-18.7).curveTo(23.3,-15.9,24.1,-3.9).curveTo(24.7,5.8,17.3,13).curveTo(10.1,20,-0,20).curveTo(-10.1,20,-17.2,13).closePath();
        this.shape.setTransform(15.7,13,0.65,0.65);
    
        var maskedShapeInstanceList = [this.shape];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,31.4,26);
    
    
    (lib.homeovlSymbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.homeovlBitmap14();
        this.instance.parent = this;
        this.instance.setTransform(-8,-3,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.homeovlSymbol1, new cjs.Rectangle(-8,-3,16,6), null);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("rgba(0,255,255,0)").beginStroke().moveTo(15.2,101.4).lineTo(7.7,93.9).curveTo(7.2,89.4,7.8,85.1).curveTo(9,76.7,11.2,68.4).lineTo(-0.8,65.4).lineTo(-1.8,45.9).lineTo(-26.8,42.2).lineTo(-30.5,46.9).curveTo(-36.8,46.9,-42.8,47.8).lineTo(-60,44.7).curveTo(-63.8,46.7,-67.6,48.5).curveTo(-73.3,51.2,-79.2,53).curveTo(-84.5,54.5,-90.1,54).curveTo(-97.6,54.9,-105.1,54.8).lineTo(-106.5,51.2).lineTo(-103.4,40.6).curveTo(-83.8,22.6,-74.1,10.6).curveTo(-68.9,4.1,-65,-3.5).curveTo(-59.5,-14.2,-53.6,-24.7).lineTo(-57.4,-35.2).lineTo(-57.4,-54).lineTo(-54.1,-61.3).curveTo(-60.9,-67.5,-66.3,-74.6).curveTo(-70,-79.3,-72.8,-84.6).lineTo(-60.7,-94.1).lineTo(-47.1,-80.1).lineTo(-18.6,-101.1).lineTo(85.7,-101.6).lineTo(100.3,-86.2).lineTo(65.3,-64.5).lineTo(67,-57).lineTo(97.1,-53.7).lineTo(97.1,-32.2).lineTo(74,-16.1).lineTo(68.6,-15).curveTo(69.9,-13.5,72.3,-8.5).lineTo(82.2,7.1).lineTo(82.6,12.1).curveTo(81.4,16.1,81,20.5).lineTo(86.3,22.9).lineTo(105.7,38.3).lineTo(106.5,47.1).curveTo(96.4,51.1,87.3,56.8).lineTo(67.1,69.2).curveTo(55.9,76.2,43.3,80.8).lineTo(31.3,99.7).lineTo(26.2,101.6).closePath();
        this.shape.setTransform(106.5,101.6);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,213,203.2), null);
    
    
    (lib.fbSymbol1ht = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 copy
        this.instance = new lib.fbBitmap3();
        this.instance.parent = this;
        this.instance.setTransform(-26.2,-21.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbSymbol1ht, new cjs.Rectangle(-26.2,-21.9,50,42), null);
    
    
    (lib.fbSymbol1ea = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 copy
        this.instance = new lib.fbBitmap4();
        this.instance.parent = this;
        this.instance.setTransform(-26.2,-21.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbSymbol1ea, new cjs.Rectangle(-26.2,-21.9,50,42), null);
    
    
    (lib.fbcrgl3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-16.6,13.6).lineTo(-16,-19.2).lineTo(16.6,-14).lineTo(15.9,19.2).closePath();
        this.shape.setTransform(-24.1,-3.2,1.516,1.516);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbcrgl3, new cjs.Rectangle(-49.3,-32.2,50.3,58.1), null);
    
    
    (lib.fbcrgl2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.8,-9).lineTo(7,-23.6).lineTo(6.8,6.9).lineTo(-7,23.6).closePath();
        this.shape.setTransform(27.4,31.4,1.516,1.516);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbcrgl2, new cjs.Rectangle(16.9,-4.3,21.2,71.4), null);
    
    
    (lib.fbcrgl1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23,4).lineTo(-8.8,-9.8).lineTo(22.9,-4.8).lineTo(9.2,9.8).closePath();
        this.shape.setTransform(-12.9,2.2,1.516,1.516);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbcrgl1, new cjs.Rectangle(-47.6,-12.6,69.6,29.6), null);
    
    
    (lib.fbbox2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.fbBitmap1();
        this.instance.parent = this;
        this.instance.setTransform(-46.5,-43.9,1.33,1.33);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbbox2, new cjs.Rectangle(-46.5,-43.9,93.1,87.8), null);
    
    
    (lib.fbbox1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.fbBitmap2();
        this.instance.parent = this;
        this.instance.setTransform(-46.5,-43.9,1.33,1.33);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbbox1, new cjs.Rectangle(-46.5,-43.9,93.1,87.8), null);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#020202").beginStroke().moveTo(-3.8,4.2).lineTo(-3.9,4.1).curveTo(-5.9,-1.9,-2.2,-3.7).curveTo(-0.8,-4.5,0.8,-4.2).curveTo(2.4,-4,3.1,-2.9).curveTo(3.7,-2.1,4,-1.2).curveTo(4.3,-0.4,4.6,1.3).lineTo(4.5,1.4).lineTo(4.4,1.5).lineTo(4.4,1.6).lineTo(4,1.8).curveTo(2.8,2.7,1.2,3.2).curveTo(-0.5,3.9,-3.1,4.2).lineTo(-3.6,4.3).lineTo(-3.8,4.2).closePath().moveTo(-2,-3.3).curveTo(-5.2,-1.6,-3.5,3.8).curveTo(-0.7,3.4,1,2.8).curveTo(2.7,2.1,4.1,1.2).lineTo(3.6,-1).curveTo(3.3,-1.9,2.7,-2.6).curveTo(2.1,-3.5,0.7,-3.7).lineTo(-0.2,-3.8).curveTo(-1.1,-3.8,-2,-3.3).closePath();
        this.shape.setTransform(-5.4,-4.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginLinearGradientFill(["#F2FFC4","#DCFF64"],[0,1],-0.7,3.5,-0.4,-3.8).beginStroke().moveTo(-2,-3.3).curveTo(-0.7,-4,0.7,-3.7).curveTo(2.1,-3.5,2.7,-2.6).curveTo(3.3,-1.9,3.6,-1).lineTo(4.1,1.2).curveTo(2.7,2.1,1,2.8).curveTo(-0.7,3.4,-3.5,3.8).curveTo(-5.2,-1.6,-2,-3.3).closePath();
        this.shape_1.setTransform(-5.4,-4.6);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginLinearGradientFill(["#B4D700","#8CA000"],[0,1],-1.2,8.1,-0.3,-12.7).beginStroke().moveTo(0.3,4.7).curveTo(-3.8,3.6,-5.9,1.8).curveTo(-7.8,0.1,-8.9,-3).curveTo(-6.2,-3.4,-4.6,-4).curveTo(-3,-4.6,-1.8,-5.4).lineTo(-1.5,-4.2).curveTo(-0.2,1.1,4.7,2).curveTo(6.9,2.5,8.8,2.1).lineTo(8.9,2.6).curveTo(9,3.5,8.6,4.1).curveTo(7.6,5.4,5.1,5.4).curveTo(3.2,5.4,0.3,4.7).closePath();
        this.shape_2.setTransform(0.4,2.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#050505").beginStroke().moveTo(0.5,8.2).curveTo(-3.9,7.1,-6.1,5.1).curveTo(-8.2,3.2,-9.4,-0.3).curveTo(-11.5,-6.5,-7.7,-8.4).curveTo(-6.3,-9.2,-4.5,-8.9).curveTo(-2.9,-8.6,-2.1,-7.5).curveTo(-1.6,-6.7,-1.2,-5.7).lineTo(-0.6,-3.3).lineTo(-0.3,-1.7).lineTo(-0.3,-1.7).curveTo(0.8,3,5.2,3.9).curveTo(7.4,4.3,9.4,3.8).lineTo(9.7,3.8).lineTo(9.9,3.9).lineTo(10,4.1).lineTo(10.1,5.1).curveTo(10.2,6.4,9.6,7.3).curveTo(8.6,8.9,5.5,8.9).curveTo(3.5,8.9,0.5,8.2).closePath().moveTo(-5.6,4.4).curveTo(-3.4,6.3,0.7,7.3).curveTo(7.3,9,8.9,6.8).curveTo(9.3,6.1,9.3,5.2).lineTo(9.2,4.7).curveTo(7.2,5.1,5,4.7).curveTo(0.1,3.8,-1.1,-1.5).lineTo(-1.4,-2.8).lineTo(-1,-3).lineTo(-1,-3.1).lineTo(-0.9,-3.2).lineTo(-0.8,-3.3).curveTo(-1.1,-5,-1.4,-5.8).curveTo(-1.7,-6.7,-2.3,-7.5).curveTo(-3,-8.6,-4.6,-8.8).curveTo(-6.2,-9.1,-7.6,-8.3).curveTo(-11.3,-6.5,-9.3,-0.5).lineTo(-9.2,-0.4).lineTo(-9,-0.3).lineTo(-8.5,-0.4).curveTo(-7.4,2.8,-5.6,4.4).closePath();
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.1,-8.9,20.3,17.9);
    
    
    (lib.Tween31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#020202").beginStroke().moveTo(0.1,5).lineTo(0,4.9).lineTo(-0,4.8).lineTo(-0.7,4.5).lineTo(-1.1,4.1).curveTo(-2.3,3.2,-3.1,2).curveTo(-3.9,0.7,-4,-1.4).lineTo(-3.9,-2.8).lineTo(-3.9,-3.3).lineTo(-3.9,-3.4).lineTo(-3.8,-3.4).curveTo(-0.8,-5.9,1.7,-4.5).curveTo(3.9,-3.4,4,-1).lineTo(4,-0.5).curveTo(3.8,2.5,0.3,4.9).lineTo(0.2,5).lineTo(0.1,5).closePath().moveTo(-3.4,-3.1).lineTo(-3.5,-1.4).curveTo(-3.4,0.6,-2.7,1.7).curveTo(-2,2.9,-0.8,3.7).lineTo(0.2,4.4).lineTo(0.2,4.4).curveTo(3.3,2.2,3.5,-0.5).curveTo(3.7,-3,1.5,-4.1).curveTo(0.7,-4.5,-0.1,-4.5).curveTo(-1.7,-4.5,-3.4,-3.1).closePath();
        this.shape.setTransform(7.6,6.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginLinearGradientFill(["#F2FFC4","#DCFF64"],[0,1],-3.7,0.1,3.8,0.1).beginStroke().moveTo(0.2,4.5).lineTo(-0.8,3.8).curveTo(-2,2.9,-2.7,1.8).curveTo(-3.4,0.6,-3.5,-1.4).lineTo(-3.4,-3.1).curveTo(-0.7,-5.2,1.5,-4).curveTo(3.7,-2.9,3.5,-0.5).curveTo(3.3,2.2,0.2,4.5).closePath();
        this.shape_1.setTransform(7.6,6);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginLinearGradientFill(["#B4D700","#8CA000"],[0,1],-11,-0.8,14.9,-0.8).beginStroke().moveTo(-10.6,4.1).curveTo(-10.7,3.2,-10.4,2.8).curveTo(-10,2.5,-9,2.7).curveTo(-7.6,3.1,-2.2,0.4).curveTo(3.1,-2.2,5.6,-4.5).lineTo(7.4,-6.1).lineTo(7.3,-4.7).curveTo(7.4,-2.5,8.2,-1.3).curveTo(9,-0.1,10.2,0.9).lineTo(10.6,1.2).lineTo(9.4,1.9).lineTo(8.8,2.2).curveTo(4,4.6,-3.4,5.6).lineTo(-10,6.1).curveTo(-10.5,5.1,-10.6,4.1).closePath();
        this.shape_2.setTransform(-3.7,9.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,7.8).lineTo(-2.1,7.8).curveTo(-2.7,7.4,-3.4,7.4).lineTo(-3.3,7.2).lineTo(-3.2,7.3).lineTo(-1.6,7.7).lineTo(-1.4,7.6).lineTo(-1.3,7.5).lineTo(-1.4,7.3).lineTo(-1.5,7.2).lineTo(-3.1,6.9).lineTo(-3.2,6.8).lineTo(-2.5,4.8).lineTo(-2.4,4.9).lineTo(-0.9,5.2).lineTo(-0.7,5.2).lineTo(-0.6,5.1).lineTo(-0.7,4.9).lineTo(-0.8,4.8).lineTo(-2.3,4.5).lineTo(-2.4,4.4).lineTo(-1.8,2.4).lineTo(-1.8,2.4).lineTo(-0.2,2.8).lineTo(-0,2.8).lineTo(0.1,2.6).lineTo(0,2.5).lineTo(-0.1,2.4).lineTo(-1.7,2).lineTo(-1.7,2).lineTo(-1.2,-0).lineTo(0.3,0.3).lineTo(0.4,0.3).lineTo(0.5,0.1).lineTo(0.5,-0).lineTo(0.4,-0.1).lineTo(-1.1,-0.5).lineTo(-0.9,-1.4).lineTo(-0.7,-2.6).lineTo(-0.6,-2.5).lineTo(0.9,-2.2).lineTo(1.1,-2.2).lineTo(1.2,-2.3).lineTo(1.2,-2.5).lineTo(1,-2.6).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.2,-5).lineTo(1.3,-4.6).lineTo(1.5,-4.7).lineTo(1.6,-4.8).lineTo(1.6,-5).lineTo(1.4,-5.1).lineTo(-0.1,-5.4).lineTo(0.4,-8.4).lineTo(2,-8.4).curveTo(3.4,-8.3,3.4,-7.4).curveTo(3.3,-6.6,3,-5.1).curveTo(2.5,-2.5,1.2,2).lineTo(0.6,3.6).curveTo(-0.4,6.6,-1.1,8.4).lineTo(-2.1,7.8).closePath();
        this.shape_3.setTransform(11.3,-6.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#BCBCBC").beginStroke().moveTo(-3.4,8.2).lineTo(-3.6,8.2).curveTo(-2.3,4.6,-1.1,-1).lineTo(0.2,-8.1).lineTo(2,-8.2).curveTo(3.2,-8.2,3.6,-7.6).curveTo(3.2,-7.9,2.5,-8).lineTo(0.7,-7.9).lineTo(0.6,-7.8).lineTo(0.5,-7.7).lineTo(-0.8,-0.6).curveTo(-2,4.8,-3.3,8.2).lineTo(-3.4,8.2).closePath();
        this.shape_4.setTransform(10.8,-7.6);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#050505").beginStroke().moveTo(-14.2,16.3).lineTo(-14.3,16.1).curveTo(-15,14.8,-15.2,13.5).curveTo(-15.3,12.1,-14.6,11.5).curveTo(-14,10.9,-12.6,11.2).curveTo(-11.3,11.5,-6.3,9).curveTo(-1.1,6.4,1.4,4.2).curveTo(3.7,2,4.5,1.5).lineTo(5.1,1.2).curveTo(5.9,0.8,6.7,0.7).curveTo(8.1,-2.9,9.3,-8.6).lineTo(10.6,-15.9).lineTo(10.7,-16).lineTo(10.8,-16.1).lineTo(12.7,-16.3).lineTo(12.8,-16.3).curveTo(15,-16.2,15.1,-14.7).curveTo(15.2,-14.2,15.1,-13.5).lineTo(14.9,-12.1).curveTo(14.4,-9.5,12.9,-4.6).curveTo(11.6,-0.3,10.6,2.1).curveTo(11.7,3.2,11.6,5).curveTo(11.5,2.7,9.3,1.5).curveTo(6.8,0.2,3.8,2.6).lineTo(3.7,2.7).lineTo(3.7,2.8).lineTo(3.7,3.2).lineTo(1.9,4.9).curveTo(-0.6,7.2,-5.9,9.7).curveTo(-11.3,12.4,-12.7,12.1).curveTo(-13.7,11.9,-14.1,12.1).curveTo(-14.4,12.5,-14.3,13.4).curveTo(-14.2,14.4,-13.7,15.5).lineTo(-7.1,14.9).curveTo(0.3,13.9,5.1,11.5).lineTo(5.7,11.2).lineTo(6.9,10.5).lineTo(7.6,10.9).lineTo(7.6,11).lineTo(7.7,11).lineTo(6.1,12).lineTo(5.1,12.5).curveTo(0.3,14.8,-7,15.8).lineTo(-13.9,16.3).lineTo(-14.2,16.3).closePath().moveTo(8,0.7).curveTo(8.6,0.8,9.2,1.1).lineTo(9.2,1.2).lineTo(10.2,1.8).curveTo(11,-0.1,11.9,-3).lineTo(12.5,-4.7).curveTo(13.8,-9.2,14.4,-11.8).curveTo(14.7,-13.2,14.7,-14).curveTo(14.7,-15,13.3,-15.1).lineTo(11.7,-15).lineTo(11.2,-12.1).lineTo(12.7,-11.8).lineTo(12.9,-11.6).lineTo(12.9,-11.5).lineTo(12.8,-11.3).lineTo(12.6,-11.3).lineTo(11.1,-11.6).lineTo(10.7,-9.6).lineTo(10.8,-9.6).lineTo(12.3,-9.3).lineTo(12.5,-9.2).lineTo(12.5,-9).lineTo(12.4,-8.8).lineTo(12.2,-8.8).lineTo(10.7,-9.2).lineTo(10.7,-9.2).lineTo(10.4,-8.1).lineTo(10.2,-7.1).lineTo(11.7,-6.8).lineTo(11.8,-6.7).lineTo(11.8,-6.6).lineTo(11.7,-6.4).lineTo(11.6,-6.4).lineTo(10.1,-6.7).lineTo(9.6,-4.7).lineTo(9.6,-4.7).lineTo(11.2,-4.3).lineTo(11.3,-4.2).lineTo(11.4,-4.1).lineTo(11.3,-3.9).lineTo(11.1,-3.9).lineTo(9.5,-4.2).lineTo(9.5,-4.2).lineTo(8.9,-2.2).lineTo(9,-2.2).lineTo(10.5,-1.9).lineTo(10.6,-1.7).lineTo(10.7,-1.6).lineTo(10.6,-1.5).lineTo(10.4,-1.4).lineTo(8.9,-1.8).lineTo(8.8,-1.8).lineTo(8.1,0.2).lineTo(8.2,0.2).lineTo(9.8,0.5).lineTo(9.9,0.6).lineTo(10,0.8).lineTo(9.9,1).lineTo(9.7,1).lineTo(8.1,0.6).lineTo(8,0.5).lineTo(8,0.7).closePath().moveTo(7.4,0.6).lineTo(7.5,0.6).curveTo(8.8,-2.8,10,-8.2).lineTo(11.3,-15.3).lineTo(11.4,-15.4).lineTo(11.5,-15.5).lineTo(13.3,-15.6).curveTo(14,-15.5,14.5,-15.2).curveTo(14,-15.8,12.8,-15.8).lineTo(11,-15.7).lineTo(9.7,-8.6).curveTo(8.5,-3,7.2,0.6).lineTo(7.3,0.6).lineTo(7.4,0.6).closePath();
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.2,-16.3,30.3,32.6);
    
    
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FECFE8").beginStroke().moveTo(-7.3,6).lineTo(-11.8,5.5).curveTo(-17.6,2.2,-12.1,-1).curveTo(-8,-3.4,-2.1,-4.2).curveTo(0.9,-4.6,4.9,-4).curveTo(6.8,-3.7,8.2,-3.4).curveTo(9.2,-4.4,10.2,-5).lineTo(11,-5.3).lineTo(11.3,-5.5).curveTo(14.5,-6.8,14.8,-5.7).curveTo(14.9,-5.2,14.5,-4.3).lineTo(14,-3.4).curveTo(13.4,-2.6,12.1,-2).lineTo(11,-1.6).curveTo(14.1,0.5,10.2,3.1).curveTo(6.7,5.3,1.6,6).curveTo(-0.3,6.2,-2.7,6.2).curveTo(-4.8,6.2,-7.3,6).closePath();
        this.shape.setTransform(2.9,-12.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FEADE1").beginStroke().moveTo(-12.2,7.9).curveTo(-14.7,7.2,-17.1,6.2).lineTo(-19,5.3).curveTo(-22,-2.2,-11.5,-6.3).curveTo(-4.2,-9.1,2.9,-9.1).curveTo(7.4,-9.1,9.9,-8.8).lineTo(12.6,-8.2).lineTo(12.2,-8.1).lineTo(11.4,-7.7).curveTo(10.4,-7.1,9.4,-6.1).curveTo(8,-6.5,6.1,-6.8).curveTo(2.1,-7.4,-0.9,-7).curveTo(-6.8,-6.2,-10.9,-3.7).curveTo(-16.4,-0.5,-10.6,2.8).lineTo(-6.1,3.3).curveTo(-0.8,3.7,2.8,3.2).curveTo(7.9,2.6,11.4,0.3).curveTo(15.3,-2.2,12.2,-4.4).lineTo(13.3,-4.8).curveTo(14.6,-5.3,15.2,-6.1).lineTo(15.7,-7).lineTo(16.6,-6.5).curveTo(19.5,-4.8,19.6,-2.1).curveTo(19.8,0.4,17.5,2.3).curveTo(15.2,4.3,13.8,5).curveTo(11.5,6,3.4,8.2).curveTo(-0,9.1,-3.6,9.1).curveTo(-7.8,9.1,-12.2,7.9).closePath();
        this.shape_1.setTransform(1.7,-9.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FA90D5").beginStroke().moveTo(-2.5,6.7).curveTo(-4.9,6.5,-7,6).curveTo(-9.6,5.5,-11.5,4.4).lineTo(-13.2,3.5).curveTo(-14.6,2.7,-15.8,1.8).lineTo(-17.1,0.8).curveTo(-18.9,-0.6,-19.8,-2.1).lineTo(-20.1,-2.5).curveTo(-21.2,-4.6,-19.6,-5.6).curveTo(-18.1,-6.7,-15.6,-3.6).lineTo(-11.6,-0.7).curveTo(-6.6,2.2,-2.2,1.9).curveTo(3.4,1.6,7,0.5).curveTo(11.5,-0.7,13.8,-3.2).curveTo(16.6,-6.2,19.3,-6.7).curveTo(21.9,-7.2,18.8,-3.3).curveTo(15.3,1.2,13.3,2.8).lineTo(13.1,3).lineTo(10.7,4.5).curveTo(9.1,5.3,7,5.8).curveTo(3.8,6.8,-0.1,6.8).lineTo(-2.5,6.7).closePath();
        this.shape_2.setTransform(0.2,12.8);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#D349BC").beginStroke().moveTo(-0.3,10.6).curveTo(-3.4,10.2,-6.4,9.3).curveTo(-4.3,9.8,-1.8,9.9).curveTo(3.5,10.3,7.7,9.1).curveTo(9.7,8.5,11.3,7.7).curveTo(8.3,9.5,6.7,10.1).curveTo(4.8,10.8,2.4,10.8).curveTo(1.1,10.8,-0.3,10.6).closePath().moveTo(13.9,6).curveTo(15.9,4.4,19.5,-0).curveTo(22.6,-4,19.9,-3.5).curveTo(17.3,-2.9,14.5,0.1).curveTo(12.2,2.5,7.7,3.8).curveTo(4,4.8,-1.5,5.2).curveTo(-6,5.4,-10.9,2.6).lineTo(-15,-0.4).curveTo(-17.4,-3.5,-19,-2.4).curveTo(-20.5,-1.3,-19.4,0.7).lineTo(-19.1,1.2).curveTo(-20.2,-0.1,-21.1,-1.6).curveTo(-22.8,-4.5,-22.9,-6.5).curveTo(-23,-9.2,-21.3,-10).curveTo(-18.9,-10.9,-13.5,-7.8).curveTo(-8.2,-6.3,-4.3,-5.8).curveTo(0.3,-5.3,5.8,-6).curveTo(11,-6.6,12.5,-7.2).lineTo(15.1,-8.8).curveTo(18,-10.6,20.3,-10.8).curveTo(23.4,-11,22.7,-7.4).curveTo(21.8,-2.8,20.1,-0).curveTo(18.1,3.4,13.8,6.1).lineTo(13.7,6.2).lineTo(13.9,6).closePath();
        this.shape_3.setTransform(-0.4,9.6);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#B8259E").beginStroke().moveTo(-18.2,14.6).curveTo(-25.8,6.7,-25.5,-4.4).curveTo(-25.2,-17.5,-17.9,-20.8).curveTo(-14.9,-22.2,-9.9,-22.4).lineTo(-0,-22.5).lineTo(9.7,-22.5).curveTo(14.6,-22.3,17.5,-21).curveTo(24.6,-17.9,25.4,-4.4).curveTo(26.1,6.6,18.3,14.6).curveTo(10.6,22.5,-0,22.5).curveTo(-10.6,22.5,-18.2,14.6).closePath().moveTo(-21.7,-1).curveTo(-23.4,-0.2,-23.3,2.5).curveTo(-23.3,4.5,-21.5,7.4).curveTo(-20.7,8.9,-19.6,10.2).curveTo(-18.7,11.6,-16.9,13.1).lineTo(-15.6,14.1).curveTo(-14.4,14.9,-13,15.7).lineTo(-11.3,16.7).curveTo(-9.4,17.7,-6.8,18.3).curveTo(-3.9,19.2,-0.8,19.6).curveTo(3.4,20.1,6.3,19.1).curveTo(7.8,18.5,10.9,16.7).lineTo(13.3,15.2).lineTo(13.4,15.1).curveTo(17.6,12.4,19.7,9).curveTo(21.4,6.2,22.3,1.6).curveTo(23,-2,19.8,-1.8).curveTo(17.5,-1.6,14.7,0.2).lineTo(12,1.8).curveTo(10.5,2.4,5.4,3).curveTo(-0.1,3.7,-4.8,3.2).curveTo(-8.6,2.7,-13.9,1.2).curveTo(-18.1,-1.2,-20.4,-1.2).curveTo(-21.2,-1.2,-21.7,-1).closePath().moveTo(-9.8,-16.6).curveTo(-20.3,-12.5,-17.3,-5).lineTo(-15.4,-4.1).curveTo(-13,-3.1,-10.5,-2.4).curveTo(-2.3,-0.1,5.1,-2.1).curveTo(13.2,-4.3,15.5,-5.3).curveTo(16.9,-6,19.2,-8).curveTo(21.5,-9.9,21.3,-12.4).curveTo(21.2,-15.1,18.3,-16.8).lineTo(17.4,-17.3).curveTo(17.9,-18.3,17.7,-18.8).curveTo(17.4,-19.8,14.3,-18.5).lineTo(11.6,-19.1).curveTo(9.1,-19.4,4.6,-19.4).curveTo(-2.5,-19.4,-9.8,-16.6).closePath();
        this.shape_4.setTransform(0,0.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Tween3, new cjs.Rectangle(-25.4,-21.9,51,45.1), null);
    
    
    (lib.shadow = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-28.1,6.3).curveTo(-37.6,4.2,-39.4,1.3).curveTo(-39.8,0.7,-39.8,-0).curveTo(-39.7,-3.7,-28.1,-6.4).curveTo(-16.5,-9,0,-9).curveTo(16.4,-9,28.1,-6.4).curveTo(39.8,-3.7,39.7,-0).curveTo(39.8,0.7,39.4,1.3).curveTo(37.6,4.2,28.1,6.3).curveTo(16.4,9,0,9.1).curveTo(-16.5,9,-28.1,6.3).closePath();
        this.shape.setTransform(39.8,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-9.1,79.5,18.1);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#F9CF92").beginStroke().moveTo(-3.6,3.7).lineTo(-3.9,2.2).curveTo(-4.9,-2,-5.3,-3.1).lineTo(-5.9,-4.6).curveTo(-6,-5.3,-5.3,-4.8).curveTo(-4.6,-4.3,-1.8,-4.1).curveTo(0.7,-3.9,1.8,-4.1).lineTo(4.4,-4.8).curveTo(6.1,-5.3,5.9,-5.1).curveTo(5.7,-4.8,4.9,-1.9).lineTo(3.6,2.7).curveTo(3,5.2,1.7,5.1).curveTo(0.7,4.9,-1.8,5.1).lineTo(-2.1,5.1).curveTo(-3.2,5.1,-3.6,3.7).closePath();
        this.shape.setTransform(0,1.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#DE9549").beginStroke().moveTo(-5.4,2.1).curveTo(-5.8,1.8,-5.9,1.2).curveTo(-6.1,0.1,-4.9,-1.5).curveTo(-4,-2.5,-0.7,-2.5).curveTo(2.5,-2.4,4.2,-1.3).curveTo(5.3,-0.6,5.7,0.4).curveTo(5.9,0.9,5.9,1.3).curveTo(4.6,1.7,2.5,2.1).curveTo(0.4,2.5,-1.6,2.5).curveTo(-3.6,2.5,-5.4,2.1).closePath();
        this.shape_1.setTransform(0,-4.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.9,-6.9,11.9,13.8);
    
    
    (lib.Tween22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#F9CF92").beginStroke().moveTo(-2.6,4.3).lineTo(-3.1,2.8).curveTo(-4.6,-1.2,-5.1,-2.2).lineTo(-5.8,-3.7).curveTo(-6,-4.4,-5.3,-4).curveTo(-4.5,-3.6,-1.7,-3.7).curveTo(0.8,-3.8,1.9,-4.1).lineTo(4.4,-5.1).curveTo(6,-5.8,5.9,-5.5).curveTo(5.7,-5.3,5.2,-2.2).lineTo(4.5,2.4).curveTo(4.2,5.1,2.9,5).curveTo(1.9,5,-0.7,5.5).lineTo(-1,5.6).curveTo(-2,5.6,-2.6,4.3).closePath();
        this.shape.setTransform(0,1.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#DE9549").beginStroke().moveTo(-5.2,2.6).curveTo(-5.6,2.3,-5.8,1.8).curveTo(-6.2,0.6,-5.1,-1).curveTo(-4.3,-2.2,-1.1,-2.5).curveTo(2,-2.8,3.9,-1.9).curveTo(5.1,-1.3,5.6,-0.4).curveTo(5.9,0.1,5.9,0.4).curveTo(4.7,1,2.7,1.6).curveTo(-0.7,2.6,-4.1,2.6).lineTo(-5.2,2.6).closePath();
        this.shape_1.setTransform(0,-4.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.9,-6.9,11.9,14);
    
    
    (lib.Tween21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#F9CF92").beginStroke().moveTo(-1,5.1).lineTo(-1.7,3.7).curveTo(-3.9,-0,-4.6,-1).lineTo(-5.5,-2.3).curveTo(-5.9,-2.9,-5.1,-2.6).curveTo(-4.2,-2.3,-1.5,-2.9).curveTo(1,-3.5,2,-4).lineTo(4.3,-5.4).curveTo(5.7,-6.3,5.7,-6).curveTo(5.5,-5.7,5.5,-2.7).lineTo(5.6,2).curveTo(5.8,4.7,4.5,4.9).curveTo(3.6,5,1.1,6).lineTo(0.5,6.1).curveTo(-0.3,6.1,-1,5.1).closePath();
        this.shape.setTransform(0.1,1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#DE9549").beginStroke().moveTo(-5.5,2.4).curveTo(-6.1,1.4,-5.3,-0.5).curveTo(-4.8,-1.7,-1.6,-2.6).curveTo(1.5,-3.4,3.4,-2.9).curveTo(4.7,-2.5,5.4,-1.6).curveTo(5.7,-1.2,5.8,-0.9).curveTo(4.7,-0.1,2.8,0.8).curveTo(-0.9,2.7,-4.8,3.1).curveTo(-5.3,3,-5.5,2.4).closePath();
        this.shape_1.setTransform(0,-4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.8,-7,11.6,14.2);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7DA439").beginStroke().moveTo(2.4,3.6).curveTo(-0.4,2.7,-2.4,1.1).curveTo(-4.5,-0.6,-4.8,-1.7).curveTo(-5.1,-2.5,-4.4,-3.4).curveTo(-3.7,-4.3,-2.7,-4.2).curveTo(-1.5,-4.1,0.6,-2.4).curveTo(2.5,-0.8,3.9,1.9).curveTo(4.6,3.2,4.9,4.2).curveTo(3.8,4.1,2.4,3.6).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.9,-4.2,9.8,8.5);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7DA439").beginStroke().moveTo(0.6,-2.8).curveTo(2.8,-4.5,3.8,-4.7).curveTo(4.7,-4.9,5.2,-4.2).curveTo(5.8,-3.6,5.4,-2.8).curveTo(5,-1.7,2.9,0).curveTo(-0.2,2.5,-5.5,4.7).curveTo(-2.4,-0.3,0.6,-2.8).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.5,-4.7,11.1,9.5);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7DA439").beginStroke().moveTo(2.5,3.7).curveTo(-0.5,2.8,-2.4,1.1).curveTo(-4.6,-0.7,-5,-1.8).curveTo(-5.3,-2.7,-4.5,-3.5).curveTo(-3.8,-4.4,-2.9,-4.3).curveTo(-1.6,-4.2,0.6,-2.5).curveTo(2.5,-0.8,4,1.9).curveTo(4.7,3.3,5,4.3).curveTo(4,4.2,2.5,3.7).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5,-4.3,10.1,8.6);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7DA439").beginStroke().moveTo(0.6,-2.9).curveTo(2.8,-4.7,3.9,-4.9).curveTo(4.8,-5.1,5.3,-4.4).curveTo(5.9,-3.7,5.6,-2.8).curveTo(5.1,-1.8,3,0).curveTo(-0.2,2.6,-5.7,4.9).curveTo(-2.5,-0.3,0.6,-2.9).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.7,-4.9,11.5,9.8);
    
    
    (lib.Tween16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#A5ABDA").beginStroke().moveTo(-0.1,-1.5).lineTo(0,-1.8).lineTo(0.1,1.7).lineTo(-0.1,1.8).closePath();
        this.shape.setTransform(-0.6,-4.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#75BFF2").beginStroke().moveTo(-0.7,4.7).curveTo(-1,4.5,-1.2,3.4).curveTo(-1.9,-1.1,-2.1,-3.3).curveTo(-2.1,-4,-1.7,-4.2).lineTo(-0.7,-4.6).curveTo(0.8,-5,1.2,-4.3).curveTo(1.6,-3.6,2,-0.1).curveTo(2.2,2.9,1.7,3.9).curveTo(1.4,4.5,0.4,4.7).lineTo(-0.3,4.7).lineTo(-0.7,4.7).closePath();
        this.shape_1.setTransform(0,1.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2,-6.3,4.1,12.7);
    
    
    (lib.Tween15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#75BFF2").beginStroke().moveTo(0.3,5.1).curveTo(-0.3,4.8,-0.8,3.5).lineTo(-1.6,1.4).lineTo(-2.5,-1.3).curveTo(-3.3,-3.2,-3,-4).curveTo(-2.7,-4.7,-1.4,-5.1).curveTo(-0.2,-5.4,0.7,-3.6).lineTo(2.5,1.5).curveTo(3.5,4.2,2.9,4.8).curveTo(2.8,4.9,1.5,5).lineTo(0.6,5.1).lineTo(0.3,5.1).closePath();
        this.shape.setTransform(-1.8,3,1,1,15);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#A5ABDA").beginStroke().moveTo(-0.3,-4.2).lineTo(0.2,-4.3).lineTo(0.3,4.2).lineTo(-0.1,4.3).closePath();
        this.shape_1.setTransform(-2,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4,-9.2,4.3,17.6);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#75BFF2").beginStroke().moveTo(-1.1,3.9).curveTo(-1.4,3.5,-1.6,2.3).curveTo(-1.8,1.2,-1.8,-0).lineTo(-1.7,-2.2).curveTo(-1.7,-3.6,-1.3,-3.9).curveTo(-1,-4.2,0.1,-4.1).curveTo(1.2,-4.1,1.4,-4).curveTo(1.7,-3.7,1.7,-2.7).lineTo(1.7,2.2).curveTo(1.8,3.5,1.2,3.9).curveTo(1,4.1,-0,4.2).lineTo(-0.2,4.2).curveTo(-0.8,4.2,-1.1,3.9).closePath();
        this.shape.setTransform(0,1.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#A5ABDA").beginStroke().moveTo(-0.2,-2).lineTo(0.2,-2).lineTo(0.2,2).lineTo(-0.2,2).closePath();
        this.shape_1.setTransform(0,-3.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.7,-5.8,3.5,11.6);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#4570B5").beginStroke().moveTo(-0.1,2).lineTo(-5.8,2).curveTo(-7.8,2,-7.9,-0.8).curveTo(-7.9,-1.6,-7.4,-1.9).curveTo(-7,-2.1,-5.7,-2.1).curveTo(3.2,-2.1,5.7,-1.9).lineTo(7.4,-1.7).curveTo(7.8,-1.5,7.9,-0.5).curveTo(7.9,0.4,7,1.2).curveTo(6.2,1.9,5.2,2).lineTo(2.6,2.1).lineTo(-0.1,2).closePath();
        this.shape.setTransform(0.5,5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#0A3180").beginStroke().moveTo(-9.9,1.4).curveTo(-10.3,1.1,-10.3,-0.2).curveTo(-10.2,-1.3,-9.7,-1.6).curveTo(-9.1,-2,-7.4,-2).lineTo(6.2,-2).curveTo(8.7,-1.9,9.5,-1.6).curveTo(10.3,-1.2,10.3,-0.2).curveTo(10.4,0.9,9.8,1.3).curveTo(9.1,1.9,6.8,1.9).lineTo(-6.6,2).lineTo(-7,2).curveTo(-9.3,2,-9.9,1.4).closePath();
        this.shape_1.setTransform(0,5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#A5ABDA").beginStroke().moveTo(-1.1,4.9).lineTo(-1.1,-4.1).curveTo(-0.2,-4.1,1,-5).lineTo(1.1,4.9).closePath();
        this.shape_2.setTransform(-0.5,-2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.3,-6.9,20.6,14);
    
    
    (lib.Tween9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#509ECF").beginStroke().moveTo(-0.6,1.2).curveTo(-1.3,1,-1.2,-0.1).lineTo(-1.1,-1.2).curveTo(-0.6,-1.4,0.3,-0.8).curveTo(1,-0.3,1.2,0.2).curveTo(1.3,0.7,0.8,1).curveTo(0.4,1.2,-0,1.2).lineTo(-0.6,1.2).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,2.4,2.5);
    
    
    (lib.Tween8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#509ECF").beginStroke().moveTo(-1.1,0).lineTo(-1.3,-1.4).lineTo(-0.4,-1.2).curveTo(0.6,-0.8,1,-0.4).curveTo(1.5,0.1,1.2,0.8).curveTo(0.8,1.4,-0,1.4).curveTo(-0.7,1.4,-1.1,0).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.3,-1.4,2.6,2.9);
    
    
    (lib.Tween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7F6D9D").beginStroke().moveTo(-0,3.2).curveTo(-0.7,3.1,-1.3,2.5).curveTo(-2.2,1.4,-1.3,-1.6).curveTo(-0.6,-3.6,0.5,-3.1).curveTo(1.6,-2.7,1.7,-1).lineTo(1.8,1).curveTo(1.7,1.5,1.2,2.5).curveTo(0.8,3.2,0.1,3.2).lineTo(-0,3.2).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.7,-3.2,3.6,6.5);
    
    
    (lib.Tween5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7F6D9D").beginStroke().moveTo(-0.9,0.7).lineTo(-1.2,-0.9).curveTo(-1.3,-1.7,-0.7,-1.8).curveTo(1.1,-2,1.2,-0.7).curveTo(1.3,0,1,0.8).curveTo(0.7,1.4,0.1,1.7).lineTo(-0.3,1.8).curveTo(-0.9,1.8,-0.9,0.7).closePath();
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2,-1.8,2.5,3.7);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FECFE8").beginStroke().moveTo(-11.3,9.3).lineTo(-18.2,8.5).curveTo(-27.1,3.4,-18.6,-1.5).curveTo(-12.3,-5.2,-3.2,-6.5).curveTo(1.3,-7.1,7.4,-6.2).curveTo(10.5,-5.7,12.6,-5.2).curveTo(14.1,-6.7,15.7,-7.6).lineTo(16.9,-8.2).curveTo(22.2,-10.5,22.7,-8.8).curveTo(23.1,-7.6,21.4,-5.2).curveTo(20.6,-3.9,18.6,-3.1).lineTo(16.8,-2.5).curveTo(21.6,0.8,15.6,4.7).curveTo(10.3,8.2,2.4,9.2).curveTo(-0.6,9.5,-4.3,9.5).curveTo(-7.5,9.5,-11.3,9.3).closePath();
        this.shape.setTransform(32.1,9.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FEADE1").beginStroke().moveTo(-18.7,12.2).curveTo(-22.7,11.1,-26.3,9.5).lineTo(-29.2,8.1).curveTo(-33.8,-3.3,-17.7,-9.6).curveTo(-6.5,-14,4.5,-14).curveTo(11.4,-14,15.2,-13.5).curveTo(21.3,-12.6,25.5,-10).curveTo(30,-7.3,30.2,-3.1).curveTo(30.4,0.7,27,3.6).curveTo(23.3,6.7,21.2,7.7).curveTo(17.7,9.3,5.2,12.6).curveTo(-0.1,14,-5.6,14).curveTo(-12,14,-18.7,12.2).closePath();
        this.shape_1.setTransform(30.2,14);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,60.4,28.1);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#79B9DA").beginStroke().moveTo(-5.6,4.9).lineTo(-9.9,4.4).curveTo(-15.3,1.3,-10.1,-1.8).curveTo(-6.2,-4.1,-0.6,-4.9).curveTo(2.2,-5.2,5.9,-4.7).curveTo(7.8,-4.4,9.1,-4).curveTo(11.3,-3.1,12.1,-2.3).curveTo(12.6,-1.8,12.7,-0.9).curveTo(13.3,3.5,2.9,4.8).curveTo(0.9,5,-1.5,5).lineTo(-5.6,4.9).closePath();
        this.shape.setTransform(16.8,5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#54A0D5").beginStroke().moveTo(-11.6,7.5).lineTo(-18,5).curveTo(-20.8,-2.1,-10.9,-6).curveTo(-4,-8.7,2.8,-8.7).curveTo(7,-8.7,9.4,-8.3).curveTo(13.1,-7.8,15.7,-6.2).curveTo(18.5,-4.5,18.6,-1.9).curveTo(18.7,0.4,16.6,2.2).curveTo(14.4,4.1,13.1,4.7).curveTo(10.9,5.7,3.2,7.8).curveTo(-0,8.7,-3.4,8.7).curveTo(-7.4,8.7,-11.6,7.5).closePath();
        this.shape_1.setTransform(18.6,8.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,37.3,17.4);
    
    
    (lib.shadow_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-28.1,6.3).curveTo(-37.6,4.2,-39.4,1.3).curveTo(-39.8,0.7,-39.8,-0).curveTo(-39.7,-3.7,-28.1,-6.4).curveTo(-16.5,-9,0,-9).curveTo(16.4,-9,28.1,-6.4).curveTo(39.8,-3.7,39.7,-0).curveTo(39.8,0.7,39.4,1.3).curveTo(37.6,4.2,28.1,6.3).curveTo(16.4,9,0,9.1).curveTo(-16.5,9,-28.1,6.3).closePath();
        this.shape_1.setTransform(39.8,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-9.1,79.5,18.1);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,18.9).curveTo(-1.3,17.7,-1.7,14.9).lineTo(-4.2,-0.3).curveTo(-4.7,-3,-4,-4.6).curveTo(-3.2,-6.1,-1.3,-6.4).curveTo(0.6,-6.7,1.7,-5.5).curveTo(2.9,-4.3,3.3,-1.5).lineTo(5.8,13.7).curveTo(6.2,16.6,5.6,18).curveTo(4.8,19.5,3,19.8).lineTo(2.2,19.9).curveTo(0.8,19.9,-0.1,18.9).closePath().moveTo(-4.9,-8.4).curveTo(-5.8,-9.1,-5.9,-10.2).curveTo(-6,-10.8,-5.9,-11.3).curveTo(-5.8,-11.8,-5.5,-12.5).lineTo(-2.7,-17.8).curveTo(-2.4,-18.7,-1.7,-19.2).curveTo(-1,-19.8,-0.3,-19.8).curveTo(1.1,-20,2,-19.4).curveTo(3.1,-18.6,3.2,-17.5).curveTo(3.3,-16.9,3.2,-16.1).curveTo(3,-15.4,2.4,-14.6).lineTo(-0.6,-9.9).curveTo(-0.9,-9.3,-1.7,-8.6).curveTo(-2.3,-8.1,-2.9,-8).lineTo(-3.5,-8).curveTo(-4.3,-8,-4.9,-8.4).closePath();
        this.shape.setTransform(58.4,-6.6,0.746,0.746,40.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.4,17.6).curveTo(-7.7,16.4,-8.3,13.7).lineTo(-14.6,-11.8).curveTo(-15.2,-14.5,-14.7,-16.2).curveTo(-14.1,-17.7,-12.2,-18.2).curveTo(-10.3,-18.7,-9,-17.5).curveTo(-7.7,-16.4,-7.1,-13.7).lineTo(-5.3,-6.3).curveTo(-4.4,-7.8,-3.1,-8.7).curveTo(-1.9,-9.6,0.5,-10.2).curveTo(4.9,-11.3,7.9,-9.3).curveTo(10.8,-7.4,12,-2.6).lineTo(14.6,8.1).curveTo(15.2,10.8,14.6,12.4).curveTo(14,14,12.2,14.4).curveTo(10.3,14.9,9,13.8).curveTo(7.8,12.7,7.1,9.9).lineTo(5,1.5).curveTo(4.3,-1.6,3,-2.7).curveTo(1.7,-3.8,-0.4,-3.3).curveTo(-2.4,-2.8,-3,-1.2).curveTo(-3.7,0.3,-3,3.4).lineTo(-0.9,11.9).curveTo(-0.2,14.6,-0.8,16.2).curveTo(-1.4,17.8,-3.3,18.2).lineTo(-4.4,18.3).curveTo(-5.6,18.3,-6.4,17.6).closePath();
        this.shape_1.setTransform(42.7,-12.8,0.746,0.746,40.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.1,14.3).curveTo(-7.5,13.3,-8.4,10.6).lineTo(-13.7,-3.9).curveTo(-14.7,-6.5,-14.2,-8.1).curveTo(-13.8,-9.7,-12,-10.4).curveTo(-10.9,-10.8,-9.8,-10.5).curveTo(-8.8,-10.2,-7.7,-9.3).curveTo(-7.1,-11,-5.7,-12.2).curveTo(-4.5,-13.2,-2.3,-14.1).curveTo(1.9,-15.6,5.1,-14).curveTo(8.3,-12.4,9.9,-7.7).lineTo(13.7,2.6).curveTo(14.7,5.3,14.2,6.9).curveTo(13.9,8.5,12,9.2).curveTo(10.1,9.9,8.8,8.9).curveTo(7.5,7.9,6.5,5.2).lineTo(3.5,-2.9).curveTo(2.4,-6,1,-6.9).curveTo(-0.3,-7.9,-2.4,-7.1).curveTo(-4.4,-6.4,-4.8,-4.7).curveTo(-5.3,-3.1,-4.3,-0.2).lineTo(-1.3,8).curveTo(-0.3,10.7,-0.7,12.3).curveTo(-1.2,13.9,-3,14.6).curveTo(-3.7,14.9,-4.4,14.9).curveTo(-5.4,14.9,-6.1,14.3).closePath();
        this.shape_2.setTransform(21.6,-18.7,0.746,0.746,40.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,13.2).curveTo(-7.8,11.6,-10.7,6.3).curveTo(-13.7,1,-12.3,-4).curveTo(-11,-9.1,-5.8,-12).curveTo(-2.5,-13.8,0.3,-13.8).curveTo(3,-13.8,4.1,-11.8).curveTo(4.7,-10.7,4.4,-9.4).curveTo(4.1,-8.1,2.9,-7.5).curveTo(2.3,-7.1,0.5,-6.8).curveTo(-1.1,-6.5,-2.4,-5.9).curveTo(-4.5,-4.7,-4.9,-2.4).curveTo(-5.3,-0.2,-3.9,2.4).curveTo(-2.4,5,-0.3,5.8).curveTo(1.8,6.6,4.1,5.3).curveTo(5.3,4.6,6.5,3.3).curveTo(7.7,2,8.2,1.7).curveTo(9.2,1.1,10.5,1.5).curveTo(11.7,2,12.4,3.2).curveTo(13.4,5,11.9,7.6).curveTo(10.3,10.2,7,12).curveTo(3.8,13.8,0.7,13.8).curveTo(-1.1,13.8,-2.9,13.2).closePath();
        this.shape_3.setTransform(-3.1,-24.4,0.746,0.746,40.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(9.9,16.2).curveTo(8.7,16.1,7.9,14.9).curveTo(7.2,13.9,7.4,12.6).curveTo(7.7,11.3,8.7,10.6).curveTo(9.8,9.9,11.1,10.1).curveTo(12.4,10.3,13.1,11.4).curveTo(13.9,12.5,13.6,13.7).curveTo(13.4,15,12.3,15.7).curveTo(11.4,16.2,10.5,16.2).lineTo(9.9,16.2).closePath().moveTo(-2.4,10.8).curveTo(-7.6,9.7,-11,4.8).curveTo(-14.4,-0.2,-13.5,-5.4).curveTo(-12.7,-10.7,-8,-13.8).curveTo(-3.4,-17.1,1.8,-15.9).curveTo(7,-14.8,10.4,-9.9).curveTo(13.8,-4.9,13,0.3).curveTo(12.2,5.5,7.5,8.7).curveTo(4,11.1,0.3,11.1).curveTo(-1,11.1,-2.4,10.8).closePath().moveTo(-4,-7.9).curveTo(-5.8,-6.6,-6,-4.4).curveTo(-6.1,-2.2,-4.5,0.2).curveTo(-2.8,2.7,-0.7,3.3).curveTo(1.5,4,3.4,2.7).curveTo(5.2,1.5,5.4,-0.8).curveTo(5.5,-3,3.8,-5.5).curveTo(2.2,-7.8,0,-8.5).curveTo(-0.7,-8.7,-1.4,-8.7).curveTo(-2.8,-8.7,-4,-7.9).closePath();
        this.shape_4.setTransform(-23.6,-25.9,0.746,0.746,40.9);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3,15.2).curveTo(1.3,14.7,-0.5,12.6).lineTo(-17.5,-7.5).curveTo(-19.3,-9.6,-19.5,-11.3).curveTo(-19.7,-12.9,-18.2,-14.2).curveTo(-16.8,-15.5,-15.1,-15).curveTo(-13.4,-14.6,-11.6,-12.4).lineTo(-6.7,-6.7).curveTo(-6.6,-8.5,-5.8,-9.8).curveTo(-4.9,-11.4,-3.3,-12.8).curveTo(0.2,-15.7,3.7,-15.3).curveTo(7.2,-14.8,10.4,-11.1).lineTo(17.5,-2.7).curveTo(19.3,-0.6,19.5,1.1).curveTo(19.7,2.8,18.2,4).curveTo(16.7,5.3,15.1,4.9).curveTo(13.5,4.4,11.6,2.3).lineTo(6,-4.3).curveTo(3.9,-6.8,2.3,-7.2).curveTo(0.8,-7.6,-1,-6.2).curveTo(-2.6,-4.8,-2.4,-3.1).curveTo(-2.3,-1.4,-0.3,0.9).lineTo(5.4,7.6).curveTo(7.2,9.8,7.4,11.4).curveTo(7.5,13.1,6.1,14.4).curveTo(4.9,15.3,3.8,15.3).lineTo(3,15.2).closePath();
        this.shape_5.setTransform(-46.4,-30,0.746,0.746,40.9);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.4,9.6).curveTo(-13,5.5,-13.4,0.3).curveTo(-13.8,-4.9,-9.9,-9.3).curveTo(-7.4,-12.3,-4.8,-13.1).curveTo(-2.2,-14,-0.6,-12.5).curveTo(0.5,-11.6,0.6,-10.3).curveTo(0.7,-9.1,-0.2,-8).curveTo(-0.5,-7.6,-2.2,-6.6).curveTo(-3.7,-5.7,-4.7,-4.7).curveTo(-6.2,-2.9,-5.9,-0.6).curveTo(-5.5,1.7,-3.3,3.5).curveTo(-1.1,5.5,1.2,5.6).curveTo(3.5,5.6,5.2,3.6).curveTo(6.2,2.5,6.8,1).curveTo(7.4,-0.5,7.8,-1.1).curveTo(8.7,-2.1,10,-2.1).curveTo(11.3,-2.1,12.3,-1.1).curveTo(13.9,0.2,13.3,3.2).curveTo(12.7,6.1,10.2,9).curveTo(6.4,13.2,1.3,13.4).lineTo(0.8,13.4).curveTo(-4,13.4,-8.4,9.6).closePath();
        this.shape_6.setTransform(-68.1,-26.4,0.746,0.746,40.9);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.2,13.7).curveTo(-10.8,10.3,-11.9,5.2).curveTo(-13,0.1,-10.1,-4).curveTo(-9,-5.5,-7.5,-6.4).curveTo(-6,-7.2,-4.2,-7.3).curveTo(-4.8,-8.6,-4.8,-9.7).curveTo(-4.7,-10.8,-4.1,-11.7).curveTo(-2.9,-13.2,-1.3,-13.2).curveTo(0.3,-13.2,2.7,-11.5).lineTo(15.1,-2.3).curveTo(17.4,-0.7,17.9,0.9).curveTo(18.5,2.5,17.4,4).curveTo(16.6,5.1,15.6,5.4).curveTo(14.5,5.7,13.1,5.4).curveTo(13.5,7.1,13.1,8.9).curveTo(12.9,10.6,11.6,12.3).curveTo(8.7,16.2,3.6,16.7).lineTo(2.5,16.7).curveTo(-2,16.7,-6.2,13.7).closePath().moveTo(-0.1,-2.2).curveTo(-2.3,-2.1,-3.6,-0.4).curveTo(-4.8,1.4,-4.3,3.5).curveTo(-3.8,5.5,-1.6,7.2).curveTo(0.8,8.9,2.9,8.8).curveTo(5.2,8.7,6.4,6.9).curveTo(7.7,5.2,7.1,3).curveTo(6.5,0.9,4.3,-0.8).curveTo(2.3,-2.2,0.3,-2.2).lineTo(-0.1,-2.2).closePath().moveTo(-14.9,-4.6).curveTo(-15.3,-4.9,-15.6,-5.4).curveTo(-15.9,-5.7,-16.1,-6.5).lineTo(-17.9,-12.2).curveTo(-18.3,-13.2,-18.1,-13.9).curveTo(-18.1,-14.7,-17.6,-15.4).curveTo(-16.9,-16.4,-15.6,-16.7).curveTo(-14.4,-16.8,-13.4,-16.2).curveTo(-12.8,-15.7,-12.5,-15.1).curveTo(-12.1,-14.4,-11.9,-13.5).lineTo(-10.8,-8.1).curveTo(-10.6,-7.2,-10.7,-6.4).curveTo(-10.8,-5.7,-11.2,-5.1).curveTo(-11.8,-4.2,-12.9,-4).lineTo(-13.2,-4).curveTo(-14.1,-4,-14.9,-4.6).closePath();
        this.shape_7.setTransform(-89.1,-25,0.746,0.746,40.9);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.4,15.2).lineTo(-15.4,3.1).curveTo(-18.1,1.4,-18.6,-0.2).curveTo(-19,-1.8,-17.5,-4.4).lineTo(-14.2,-10).curveTo(-11.5,-14.5,-8.2,-15.8).curveTo(-4.8,-17.1,-1.4,-15).curveTo(0.9,-13.7,1.8,-12).curveTo(2.7,-10.3,2.4,-7.9).curveTo(4.9,-10.4,7.7,-10.9).curveTo(10.6,-11.3,13.5,-9.6).curveTo(17.7,-7.1,18.5,-2.9).curveTo(19.2,1.3,16.3,6.3).lineTo(12.4,13).curveTo(10.8,15.7,9.4,16.1).lineTo(8.6,16.3).curveTo(7.3,16.3,5.4,15.2).closePath().moveTo(5.9,-2.9).curveTo(4.5,-2.2,3,0.2).lineTo(1.1,3.5).lineTo(7.8,7.4).lineTo(9.8,4).curveTo(11.1,1.7,10.9,0.1).curveTo(10.8,-1.6,9.1,-2.6).curveTo(8.1,-3.1,7.2,-3.1).curveTo(6.5,-3.1,5.9,-2.9).closePath().moveTo(-6.6,-8).curveTo(-8,-7.5,-8.8,-6).lineTo(-10.4,-3.2).lineTo(-4.6,0.2).lineTo(-2.9,-2.6).curveTo(-2,-4.1,-2.3,-5.5).curveTo(-2.5,-6.9,-3.9,-7.7).curveTo(-4.7,-8.2,-5.6,-8.2).curveTo(-6.1,-8.2,-6.6,-8).closePath();
        this.shape_8.setTransform(-113.1,-19.1,0.746,0.746,40.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 5
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill().beginStroke("#FF8C00").setStrokeStyle(8,1,1).moveTo(51.1,-3.8).curveTo(49.6,-4.2,48.5,-3.6).curveTo(47.5,-2.9,46.7,-0.8).lineTo(44.3,5.3).curveTo(43.6,7.3,42.5,8).curveTo(41.5,8.8,40.1,8.2).curveTo(38.7,7.7,38.5,6.5).curveTo(38.2,5.3,39,3.3).lineTo(43.1,-7.4).curveTo(43.8,-9.4,44.9,-10.1).curveTo(45.9,-10.8,47.3,-10.2).curveTo(48.1,-9.9,48.5,-9.3).curveTo(49,-8.6,49.2,-7.6).curveTo(50.3,-8.2,51.7,-8.2).curveTo(52.9,-8.2,54.5,-7.6).curveTo(57.7,-6.4,58.7,-3.9).curveTo(59.7,-1.5,58.3,1.9).lineTo(55.4,9.6).curveTo(54.6,11.6,53.6,12.2).curveTo(52.6,13,51.2,12.4).curveTo(49.8,11.9,49.6,10.8).curveTo(49.3,9.5,50.1,7.5).lineTo(52.4,1.6).curveTo(53.2,-0.8,52.9,-1.9).curveTo(52.6,-3.2,51.1,-3.8).closePath().moveTo(32.3,-8.9).curveTo(32.1,-7.9,31.3,-7.4).curveTo(30.5,-6.8,29.5,-7.1).curveTo(29,-7.2,27.8,-7.9).curveTo(26.8,-8.4,25.7,-8.8).curveTo(24,-9.1,22.6,-8).curveTo(21.3,-6.9,20.8,-4.9).curveTo(20.4,-2.6,21.2,-1.2).curveTo(22,0.3,23.9,0.8).curveTo(24.9,0.9,26.2,0.8).curveTo(27.6,0.6,27.9,0.8).curveTo(28.8,0.9,29.3,1.7).curveTo(29.9,2.6,29.6,3.6).curveTo(29.3,5,27.2,5.8).curveTo(25,6.5,22.3,5.9).curveTo(18.1,5,16.1,1.8).curveTo(14.1,-1.6,15,-5.9).curveTo(16,-10.4,19.2,-12.6).curveTo(22.5,-14.8,26.8,-13.8).curveTo(29.5,-13.3,31.1,-11.9).curveTo(32.6,-10.6,32.3,-8.9).closePath().moveTo(72.1,10.7).curveTo(73.2,8.6,73.1,7.3).curveTo(72.8,6.1,71.4,5.4).curveTo(70,4.6,68.9,5.3).curveTo(67.8,5.8,66.7,7.8).lineTo(63.7,13.7).curveTo(62.8,15.5,61.7,16.1).curveTo(60.6,16.8,59.2,16.1).curveTo(58,15.4,57.8,14.2).curveTo(57.7,12.9,58.7,11).lineTo(67.6,-6.4).curveTo(68.5,-8.2,69.6,-8.9).curveTo(70.7,-9.4,72.1,-8.8).curveTo(73.3,-8.2,73.5,-6.9).curveTo(73.7,-5.6,72.7,-3.8).lineTo(70.1,1.2).curveTo(71.4,0.8,72.6,1).curveTo(73.7,1.1,75.3,1.9).curveTo(78.3,3.4,79,6).curveTo(79.7,8.5,78,11.8).lineTo(74.3,19.1).curveTo(73.3,20.9,72.2,21.6).curveTo(71.1,22.1,69.8,21.5).curveTo(68.5,20.8,68.4,19.6).curveTo(68.2,18.4,69.2,16.4).closePath().moveTo(95.4,6.1).curveTo(94.9,6.4,94.2,6.6).lineTo(90.3,7.8).curveTo(89.8,7.9,89,8).curveTo(88.3,7.9,88,7.6).curveTo(87.3,7.2,87.1,6.5).curveTo(86.9,5.7,87.4,4.9).curveTo(87.6,4.6,87.9,4.4).curveTo(88.2,4.1,88.7,3.9).lineTo(92.9,2.2).curveTo(93.5,1.9,94.2,2).curveTo(94.9,2,95.2,2.3).curveTo(96.1,2.8,96.3,3.7).curveTo(96.6,4.6,96.1,5.3).curveTo(95.9,5.7,95.4,6.1).closePath().moveTo(89.4,11.3).curveTo(89.4,12.6,88.3,14.3).lineTo(82.3,24.1).curveTo(81.2,26,80,26.5).curveTo(78.9,27,77.7,26.2).curveTo(76.5,25.4,76.4,24.2).curveTo(76.4,23,77.5,21.2).lineTo(83.5,11.4).curveTo(84.6,9.6,85.7,9.1).curveTo(86.9,8.6,88.1,9.3).curveTo(89.4,10.1,89.4,11.3).closePath().moveTo(-76.2,-1.3).curveTo(-74.3,-0.1,-73.6,2.2).curveTo(-72.3,5.7,-74,8.4).curveTo(-75.6,11.1,-79.6,12.6).lineTo(-85.1,14.5).curveTo(-87.3,15.2,-88.4,14.8).curveTo(-89.5,14.3,-90.1,12.3).lineTo(-96,-4.8).curveTo(-96.7,-7,-96.2,-8.1).curveTo(-95.6,-9.2,-93.5,-9.9).lineTo(-88.9,-11.5).curveTo(-85.2,-12.8,-82.7,-11.8).curveTo(-80.1,-10.9,-79.2,-8.1).curveTo(-78.6,-6.2,-78.9,-4.9).curveTo(-79.3,-3.4,-80.6,-2.2).curveTo(-77.9,-2.4,-76.2,-1.3).closePath().moveTo(-61.4,-20.5).curveTo(-61.3,-19.9,-61.4,-19.4).curveTo(-61.5,-18.8,-61.8,-18.3).lineTo(-63.9,-14.7).curveTo(-64.2,-14.1,-64.7,-13.7).curveTo(-65,-13.3,-65.5,-13.2).curveTo(-66.4,-12.9,-67,-13.4).curveTo(-67.7,-13.8,-67.9,-14.7).curveTo(-68,-15.1,-67.9,-15.4).curveTo(-67.9,-15.8,-67.7,-16.3).lineTo(-65.9,-20.5).curveTo(-65.6,-21.2,-65.1,-21.6).curveTo(-64.7,-21.9,-64.1,-22.2).curveTo(-63.2,-22.3,-62.4,-21.8).curveTo(-61.6,-21.3,-61.4,-20.5).closePath().moveTo(-54.6,-10).lineTo(-52.1,1.2).curveTo(-51.6,3.3,-52.1,4.4).curveTo(-52.5,5.6,-53.9,5.9).curveTo(-54.9,6.1,-55.6,5.8).curveTo(-56.3,5.4,-57,4.6).curveTo(-57.6,5.8,-58.7,6.6).curveTo(-59.7,7.4,-61.2,7.8).curveTo(-64.8,8.5,-67.8,6.3).curveTo(-71,4.1,-71.9,-0.2).curveTo(-72.8,-4.2,-71,-7.7).curveTo(-69.2,-11.1,-65.5,-12).curveTo(-64.1,-12.3,-62.8,-12.1).curveTo(-61.6,-11.8,-60.6,-11).curveTo(-60.3,-12,-59.7,-12.6).curveTo(-59.1,-13.2,-58.3,-13.4).curveTo(-56.9,-13.7,-56,-12.8).curveTo(-55.2,-12.1,-54.6,-10).closePath().moveTo(-60.7,-6.2).curveTo(-62,-7.2,-63.5,-6.9).curveTo(-65.1,-6.4,-65.9,-5).curveTo(-66.6,-3.6,-66.2,-1.5).curveTo(-65.7,0.6,-64.4,1.6).curveTo(-63.1,2.6,-61.5,2.2).curveTo(-59.9,1.9,-59.2,0.3).curveTo(-58.5,-1.2,-59,-3.2).curveTo(-59.4,-5.2,-60.7,-6.2).closePath().moveTo(-87.9,-6.7).lineTo(-90.1,-5.8).lineTo(-88.5,-1.1).lineTo(-86.1,-1.9).curveTo(-84.9,-2.2,-84.4,-3.2).curveTo(-83.9,-4.1,-84.2,-5.2).curveTo(-84.6,-6.2,-85.6,-6.7).curveTo(-86.6,-7,-87.9,-6.7).closePath().moveTo(-84.2,2.6).lineTo(-86.9,3.6).lineTo(-85,9.1).lineTo(-82.2,8.1).curveTo(-80.4,7.4,-79.7,6.4).curveTo(-79,5.4,-79.4,4.1).curveTo(-79.9,2.7,-81.1,2.3).curveTo(-82.2,2,-84.2,2.6).closePath().moveTo(-19.7,-9.4).lineTo(-19.7,-2.9).curveTo(-19.7,-0.8,-20.5,0.2).curveTo(-21.2,1.2,-22.6,1.2).curveTo(-24.2,1.2,-24.8,0.2).curveTo(-25.5,-0.9,-25.5,-2.9).lineTo(-25.3,-22.6).curveTo(-25.2,-24.6,-24.6,-25.7).curveTo(-23.9,-26.7,-22.4,-26.7).curveTo(-21,-26.7,-20.2,-25.6).curveTo(-19.5,-24.6,-19.6,-22.5).lineTo(-19.6,-16.8).curveTo(-18.7,-17.8,-17.5,-18.2).curveTo(-16.2,-18.7,-14.7,-18.6).curveTo(-11.3,-18.6,-9.5,-16.6).curveTo(-7.7,-14.6,-7.8,-11).lineTo(-7.8,-2.8).curveTo(-7.9,-0.7,-8.6,0.4).curveTo(-9.4,1.4,-10.8,1.3).curveTo(-12.2,1.3,-13,0.3).curveTo(-13.6,-0.7,-13.6,-2.8).lineTo(-13.6,-9.3).curveTo(-13.5,-11.8,-14.3,-12.7).curveTo(-14.9,-13.7,-16.6,-13.8).curveTo(-18.2,-13.8,-18.9,-12.8).curveTo(-19.7,-11.7,-19.7,-9.4).closePath().moveTo(-34.9,2.1).curveTo(-36.7,3.5,-39.5,3.8).curveTo(-43.7,4.4,-46.7,2).curveTo(-49.6,-0.4,-50.2,-4.9).curveTo(-50.8,-9.4,-48.5,-12.5).curveTo(-46.2,-15.7,-41.9,-16.3).curveTo(-39,-16.7,-37.1,-15.8).curveTo(-35.3,-15.1,-35,-13.5).curveTo(-34.9,-12.4,-35.5,-11.7).curveTo(-36,-10.9,-37.1,-10.8).curveTo(-37.4,-10.8,-38.9,-10.9).curveTo(-40.1,-11.2,-41.2,-11.1).curveTo(-42.9,-10.9,-43.9,-9.4).curveTo(-44.7,-7.9,-44.4,-5.8).curveTo(-44.2,-3.6,-42.9,-2.4).curveTo(-41.6,-1.3,-39.7,-1.6).curveTo(-38.6,-1.8,-37.5,-2.3).curveTo(-36.4,-2.9,-35.9,-3).curveTo(-35,-3.1,-34.2,-2.4).curveTo(-33.5,-1.8,-33.3,-0.8).curveTo(-33.1,0.7,-34.9,2.1).closePath().moveTo(12.5,-13.8).curveTo(14.9,-10.6,14.4,-6.2).curveTo(13.9,-1.7,10.9,0.8).curveTo(7.9,3.4,3.7,2.9).curveTo(-0.5,2.4,-2.9,-0.7).curveTo(-5.4,-3.9,-4.8,-8.3).curveTo(-4.3,-12.8,-1.3,-15.3).curveTo(1.8,-17.8,6,-17.4).curveTo(10.1,-16.9,12.5,-13.8).closePath().moveTo(7.9,-10.4).curveTo(7,-11.8,5.3,-12.1).curveTo(3.7,-12.3,2.5,-11.1).curveTo(1.3,-9.9,1.1,-7.8).curveTo(0.8,-5.6,1.7,-4.2).curveTo(2.6,-2.7,4.3,-2.4).curveTo(5.9,-2.2,7.2,-3.5).curveTo(8.3,-4.7,8.5,-6.9).curveTo(8.8,-8.9,7.9,-10.4).closePath().moveTo(1.8,5).curveTo(2.5,4.4,3.5,4.5).curveTo(4.4,4.7,5,5.4).curveTo(5.7,6.2,5.5,7.1).curveTo(5.5,8.1,4.6,8.7).curveTo(3.9,9.3,3,9.2).curveTo(2,9,1.4,8.3).curveTo(0.7,7.6,0.9,6.6).curveTo(1,5.6,1.8,5).closePath();
        this.shape_9.setTransform(-27.3,-20.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));
    
        // Layer 6
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill().beginStroke("#C76B00").setStrokeStyle(9,1,1).moveTo(51.1,-3.8).curveTo(49.6,-4.2,48.5,-3.6).curveTo(47.5,-2.9,46.7,-0.8).lineTo(44.3,5.3).curveTo(43.6,7.3,42.5,8).curveTo(41.5,8.8,40.1,8.2).curveTo(38.7,7.7,38.5,6.5).curveTo(38.2,5.3,39,3.3).lineTo(43.1,-7.4).curveTo(43.8,-9.4,44.9,-10.1).curveTo(45.9,-10.8,47.3,-10.2).curveTo(48.1,-9.9,48.5,-9.3).curveTo(49,-8.6,49.2,-7.6).curveTo(50.3,-8.2,51.7,-8.2).curveTo(52.9,-8.2,54.5,-7.6).curveTo(57.7,-6.4,58.7,-3.9).curveTo(59.7,-1.5,58.3,1.9).lineTo(55.4,9.6).curveTo(54.6,11.6,53.6,12.2).curveTo(52.6,13,51.2,12.4).curveTo(49.8,11.9,49.6,10.8).curveTo(49.3,9.5,50.1,7.5).lineTo(52.4,1.6).curveTo(53.2,-0.8,52.9,-1.9).curveTo(52.6,-3.2,51.1,-3.8).closePath().moveTo(32.3,-8.9).curveTo(32.1,-7.9,31.3,-7.4).curveTo(30.5,-6.8,29.5,-7.1).curveTo(29,-7.2,27.8,-7.9).curveTo(26.8,-8.4,25.7,-8.8).curveTo(24,-9.1,22.6,-8).curveTo(21.3,-6.9,20.8,-4.9).curveTo(20.4,-2.6,21.2,-1.2).curveTo(22,0.3,23.9,0.8).curveTo(24.9,0.9,26.2,0.8).curveTo(27.6,0.6,27.9,0.8).curveTo(28.8,0.9,29.3,1.7).curveTo(29.9,2.6,29.6,3.6).curveTo(29.3,5,27.2,5.8).curveTo(25,6.5,22.3,5.9).curveTo(18.1,5,16.1,1.8).curveTo(14.1,-1.6,15,-5.9).curveTo(16,-10.4,19.2,-12.6).curveTo(22.5,-14.8,26.8,-13.8).curveTo(29.5,-13.3,31.1,-11.9).curveTo(32.6,-10.6,32.3,-8.9).closePath().moveTo(72.1,10.7).curveTo(73.2,8.6,73.1,7.3).curveTo(72.8,6.1,71.4,5.4).curveTo(70,4.6,68.9,5.3).curveTo(67.8,5.8,66.7,7.8).lineTo(63.7,13.7).curveTo(62.8,15.5,61.7,16.1).curveTo(60.6,16.8,59.2,16.1).curveTo(58,15.4,57.8,14.2).curveTo(57.7,12.9,58.7,11).lineTo(67.6,-6.4).curveTo(68.5,-8.2,69.6,-8.9).curveTo(70.7,-9.4,72.1,-8.8).curveTo(73.3,-8.2,73.5,-6.9).curveTo(73.7,-5.6,72.7,-3.8).lineTo(70.1,1.2).curveTo(71.4,0.8,72.6,1).curveTo(73.7,1.1,75.3,1.9).curveTo(78.3,3.4,79,6).curveTo(79.7,8.5,78,11.8).lineTo(74.3,19.1).curveTo(73.3,20.9,72.2,21.6).curveTo(71.1,22.1,69.8,21.5).curveTo(68.5,20.8,68.4,19.6).curveTo(68.2,18.4,69.2,16.4).closePath().moveTo(95.4,6.1).curveTo(94.9,6.4,94.2,6.6).lineTo(90.3,7.8).curveTo(89.8,7.9,89,8).curveTo(88.3,7.9,88,7.6).curveTo(87.3,7.2,87.1,6.5).curveTo(86.9,5.7,87.4,4.9).curveTo(87.6,4.6,87.9,4.4).curveTo(88.2,4.1,88.7,3.9).lineTo(92.9,2.2).curveTo(93.5,1.9,94.2,2).curveTo(94.9,2,95.2,2.3).curveTo(96.1,2.8,96.3,3.7).curveTo(96.6,4.6,96.1,5.3).curveTo(95.9,5.7,95.4,6.1).closePath().moveTo(89.4,11.3).curveTo(89.4,12.6,88.3,14.3).lineTo(82.3,24.1).curveTo(81.2,26,80,26.5).curveTo(78.9,27,77.7,26.2).curveTo(76.5,25.4,76.4,24.2).curveTo(76.4,23,77.5,21.2).lineTo(83.5,11.4).curveTo(84.6,9.6,85.7,9.1).curveTo(86.9,8.6,88.1,9.3).curveTo(89.4,10.1,89.4,11.3).closePath().moveTo(-76.2,-1.3).curveTo(-74.3,-0.1,-73.6,2.2).curveTo(-72.3,5.7,-74,8.4).curveTo(-75.6,11.1,-79.6,12.6).lineTo(-85.1,14.5).curveTo(-87.3,15.2,-88.4,14.8).curveTo(-89.5,14.3,-90.1,12.3).lineTo(-96,-4.8).curveTo(-96.7,-7,-96.2,-8.1).curveTo(-95.6,-9.2,-93.5,-9.9).lineTo(-88.9,-11.5).curveTo(-85.2,-12.8,-82.7,-11.8).curveTo(-80.1,-10.9,-79.2,-8.1).curveTo(-78.6,-6.2,-78.9,-4.9).curveTo(-79.3,-3.4,-80.6,-2.2).curveTo(-77.9,-2.4,-76.2,-1.3).closePath().moveTo(-61.4,-20.5).curveTo(-61.3,-19.9,-61.4,-19.4).curveTo(-61.5,-18.8,-61.8,-18.3).lineTo(-63.9,-14.7).curveTo(-64.2,-14.1,-64.7,-13.7).curveTo(-65,-13.3,-65.5,-13.2).curveTo(-66.4,-12.9,-67,-13.4).curveTo(-67.7,-13.8,-67.9,-14.7).curveTo(-68,-15.1,-67.9,-15.4).curveTo(-67.9,-15.8,-67.7,-16.3).lineTo(-65.9,-20.5).curveTo(-65.6,-21.2,-65.1,-21.6).curveTo(-64.7,-21.9,-64.1,-22.2).curveTo(-63.2,-22.3,-62.4,-21.8).curveTo(-61.6,-21.3,-61.4,-20.5).closePath().moveTo(-54.6,-10).lineTo(-52.1,1.2).curveTo(-51.6,3.3,-52.1,4.4).curveTo(-52.5,5.6,-53.9,5.9).curveTo(-54.9,6.1,-55.6,5.8).curveTo(-56.3,5.4,-57,4.6).curveTo(-57.6,5.8,-58.7,6.6).curveTo(-59.7,7.4,-61.2,7.8).curveTo(-64.8,8.5,-67.8,6.3).curveTo(-71,4.1,-71.9,-0.2).curveTo(-72.8,-4.2,-71,-7.7).curveTo(-69.2,-11.1,-65.5,-12).curveTo(-64.1,-12.3,-62.8,-12.1).curveTo(-61.6,-11.8,-60.6,-11).curveTo(-60.3,-12,-59.7,-12.6).curveTo(-59.1,-13.2,-58.3,-13.4).curveTo(-56.9,-13.7,-56,-12.8).curveTo(-55.2,-12.1,-54.6,-10).closePath().moveTo(-60.7,-6.2).curveTo(-62,-7.2,-63.5,-6.9).curveTo(-65.1,-6.4,-65.9,-5).curveTo(-66.6,-3.6,-66.2,-1.5).curveTo(-65.7,0.6,-64.4,1.6).curveTo(-63.1,2.6,-61.5,2.2).curveTo(-59.9,1.9,-59.2,0.3).curveTo(-58.5,-1.2,-59,-3.2).curveTo(-59.4,-5.2,-60.7,-6.2).closePath().moveTo(-87.9,-6.7).lineTo(-90.1,-5.8).lineTo(-88.5,-1.1).lineTo(-86.1,-1.9).curveTo(-84.9,-2.2,-84.4,-3.2).curveTo(-83.9,-4.1,-84.2,-5.2).curveTo(-84.6,-6.2,-85.6,-6.7).curveTo(-86.6,-7,-87.9,-6.7).closePath().moveTo(-84.2,2.6).lineTo(-86.9,3.6).lineTo(-85,9.1).lineTo(-82.2,8.1).curveTo(-80.4,7.4,-79.7,6.4).curveTo(-79,5.4,-79.4,4.1).curveTo(-79.9,2.7,-81.1,2.3).curveTo(-82.2,2,-84.2,2.6).closePath().moveTo(-19.7,-9.4).lineTo(-19.7,-2.9).curveTo(-19.7,-0.8,-20.5,0.2).curveTo(-21.2,1.2,-22.6,1.2).curveTo(-24.2,1.2,-24.8,0.2).curveTo(-25.5,-0.9,-25.5,-2.9).lineTo(-25.3,-22.6).curveTo(-25.2,-24.6,-24.6,-25.7).curveTo(-23.9,-26.7,-22.4,-26.7).curveTo(-21,-26.7,-20.2,-25.6).curveTo(-19.5,-24.6,-19.6,-22.5).lineTo(-19.6,-16.8).curveTo(-18.7,-17.8,-17.5,-18.2).curveTo(-16.2,-18.7,-14.7,-18.6).curveTo(-11.3,-18.6,-9.5,-16.6).curveTo(-7.7,-14.6,-7.8,-11).lineTo(-7.8,-2.8).curveTo(-7.9,-0.7,-8.6,0.4).curveTo(-9.4,1.4,-10.8,1.3).curveTo(-12.2,1.3,-13,0.3).curveTo(-13.6,-0.7,-13.6,-2.8).lineTo(-13.6,-9.3).curveTo(-13.5,-11.8,-14.3,-12.7).curveTo(-14.9,-13.7,-16.6,-13.8).curveTo(-18.2,-13.8,-18.9,-12.8).curveTo(-19.7,-11.7,-19.7,-9.4).closePath().moveTo(-34.9,2.1).curveTo(-36.7,3.5,-39.5,3.8).curveTo(-43.7,4.4,-46.7,2).curveTo(-49.6,-0.4,-50.2,-4.9).curveTo(-50.8,-9.4,-48.5,-12.5).curveTo(-46.2,-15.7,-41.9,-16.3).curveTo(-39,-16.7,-37.1,-15.8).curveTo(-35.3,-15.1,-35,-13.5).curveTo(-34.9,-12.4,-35.5,-11.7).curveTo(-36,-10.9,-37.1,-10.8).curveTo(-37.4,-10.8,-38.9,-10.9).curveTo(-40.1,-11.2,-41.2,-11.1).curveTo(-42.9,-10.9,-43.9,-9.4).curveTo(-44.7,-7.9,-44.4,-5.8).curveTo(-44.2,-3.6,-42.9,-2.4).curveTo(-41.6,-1.3,-39.7,-1.6).curveTo(-38.6,-1.8,-37.5,-2.3).curveTo(-36.4,-2.9,-35.9,-3).curveTo(-35,-3.1,-34.2,-2.4).curveTo(-33.5,-1.8,-33.3,-0.8).curveTo(-33.1,0.7,-34.9,2.1).closePath().moveTo(7.9,-10.4).curveTo(7,-11.8,5.3,-12.1).curveTo(3.7,-12.3,2.5,-11.1).curveTo(1.3,-9.9,1.1,-7.8).curveTo(0.8,-5.6,1.7,-4.2).curveTo(2.6,-2.7,4.3,-2.4).curveTo(5.9,-2.2,7.2,-3.5).curveTo(8.3,-4.7,8.5,-6.9).curveTo(8.8,-8.9,7.9,-10.4).closePath().moveTo(12.5,-13.8).curveTo(14.9,-10.6,14.4,-6.2).curveTo(13.9,-1.7,10.9,0.8).curveTo(7.9,3.4,3.7,2.9).curveTo(-0.5,2.4,-2.9,-0.7).curveTo(-5.4,-3.9,-4.8,-8.3).curveTo(-4.3,-12.8,-1.3,-15.3).curveTo(1.8,-17.8,6,-17.4).curveTo(10.1,-16.9,12.5,-13.8).closePath().moveTo(1.8,5).curveTo(2.5,4.4,3.5,4.5).curveTo(4.4,4.7,5,5.4).curveTo(5.7,6.2,5.5,7.1).curveTo(5.5,8.1,4.6,8.7).curveTo(3.9,9.3,3,9.2).curveTo(2,9,1.4,8.3).curveTo(0.7,7.6,0.9,6.6).curveTo(1,5.6,1.8,5).closePath();
        this.shape_10.setTransform(-26.3,-23.5);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-127.7,-54.7,202.4,65.3);
    
    
    (lib.Group_2_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#020202").beginStroke().moveTo(-0.3,4.8).curveTo(-3,3.9,-5.5,2.7).curveTo(-5.6,-1.6,-7,-4.8).curveTo(-1.5,-3,3.7,-4.6).lineTo(6.4,-5.5).curveTo(7.2,-5.8,7,-5.3).curveTo(6.7,-4.5,6.3,-0.7).curveTo(5.9,3.4,5.5,4.8).curveTo(5.2,5.6,3.7,5.6).curveTo(2.3,5.6,-0.3,4.8).closePath();
        this.shape.setTransform(7,5.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0.1,14,11.2), null);
    
    
    (lib.Group_2_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#020202").beginStroke().moveTo(0.8,5.4).curveTo(-1.9,4.9,-4.6,4).curveTo(-5.1,-0.4,-6.9,-3.3).curveTo(-1.2,-2.3,3.7,-4.4).lineTo(6.2,-5.6).curveTo(7,-6,6.9,-5.5).curveTo(6.7,-4.7,6.7,-0.8).curveTo(6.8,3.2,6.6,4.7).curveTo(6.4,5.8,4.1,5.8).curveTo(2.8,5.8,0.8,5.4).closePath();
        this.shape.setTransform(6.9,5.8);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0.1,13.8,11.5), null);
    
    
    (lib.Group_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#020202").beginStroke().moveTo(1.8,6).curveTo(-1,5.9,-3.8,5.5).curveTo(-5,1.3,-7.4,-1.3).curveTo(-1.6,-1.2,3,-4.1).lineTo(5.3,-5.8).curveTo(6,-6.3,5.9,-5.8).curveTo(5.9,-4.9,6.6,-1.1).curveTo(7.3,2.9,7.3,4.3).curveTo(7.4,6,2.6,6).lineTo(1.8,6).closePath();
        this.shape.setTransform(7.4,6.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0.1,14.7,12), null);
    
    
    (lib.Symbol21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 24
        this.instance = new lib.Tween14("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10.1,9.8,0.65,0.65,0,0,0,0,-5.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-6,rotation:-57.2,x:10.4,y:10},14).to({regX:0.1,rotation:-42.2,x:10.5,y:9.9},4).to({regX:0,regY:-5.9,rotation:-65.6,x:10.4,y:10},6).to({regX:0.1,regY:-6,rotation:-42.2,x:10.5,y:9.9},6).to({regX:0,regY:-5.9,rotation:-65.6,x:10.4,y:10},8).to({rotation:0},24).to({regY:-6,rotation:19.7},7).to({x:9.5},7).to({regX:-0.1,regY:-5.9,rotation:34.7,y:9.9},9).to({regX:0,rotation:24,y:10},7).to({regX:0.1,rotation:49.7,x:8.7,y:10.6},8).to({regX:0,rotation:0,x:10.4,y:10},31).wait(8));
    
        // Layer 25
        this.instance_1 = new lib.Tween15("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(7.6,9.9,0.65,0.65,0,0,0,0,-9.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-38.2,x:7.9,y:10.1},14).to({regY:-9.1,rotation:-27.5},4).to({regX:0.1,regY:-9.2,rotation:-43.2,x:8},6).to({regX:0,regY:-9.1,rotation:-27.5,x:7.9},6).to({regX:0.1,regY:-9.2,rotation:-43.2,x:8},8).to({regX:0,rotation:0,x:7.9},24).to({regX:0.1,rotation:-2.3},7).to({rotation:19.7,x:7.4},7).to({rotation:49.7,y:10.2},9).to({rotation:38.5,y:10.1},7).to({rotation:57.9,x:6.4,y:10.8},8).to({regX:0,rotation:0,x:7.9,y:10.1},31).wait(8));
    
        // Layer 23
        this.instance_2 = new lib.Tween16("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(3.2,9.8,0.65,0.65,0,0,0,0,-6.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:3.6,y:10},14).to({regX:-0.1,regY:-6.4,rotation:-21,x:3.5,y:9.9},4).to({regX:0.1,regY:-6.3,rotation:-34.7,x:3.6,y:10},6).to({regX:-0.1,regY:-6.4,rotation:-21,x:3.5,y:9.9},6).to({regX:0.1,regY:-6.3,rotation:-34.7,x:3.6,y:10},8).to({regX:0,rotation:0,x:3.5},24).to({regX:-0.1,regY:-6.4,rotation:21},7).to({regX:0,regY:-6.5,x:1.5,y:8.8},7).to({regY:-6.4,rotation:57.2},9).to({rotation:37.2,x:1.4},7).to({regX:0.1,regY:-6.5,rotation:64.4,x:0.6,y:9.4},8).to({regX:0,regY:-6.3,rotation:0,x:3.5,y:10},31).wait(8));
    
        // Layer 5
        this.instance_3 = new lib.Tween13("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(6.7,0.8,0.65,0.65,-7,0,0,0,-7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:7,y:1},14).to({startPosition:0},4).to({regX:-0.1,rotation:-13.7,x:6.9},6).to({regX:0,rotation:-7,x:7},6).to({regX:-0.1,rotation:-13.7,x:6.9},8).to({regX:0,rotation:-7,x:7},24).to({rotation:3},7).to({regX:0.1,rotation:10.5},7).to({startPosition:0},9).to({startPosition:0},7).to({regX:0,rotation:16.2},8).to({rotation:-7},31).wait(8));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1,0.8,13.4,20.5);
    
    
    (lib.Tween48 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.homeovlSymbol1();
        this.instance.parent = this;
        this.instance.setTransform(-0.1,0.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.9},44).to({x:-0.1},45).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.3,-2.8,16.7,6);
    
    
    (lib.ca2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol25();
        this.instance.parent = this;
        this.instance.setTransform(52.4,0.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-198.8,y:2.7},350).wait(110).to({regX:-0.4,scaleX:0.15},5).to({regX:-0.7,skewY:180,x:-197.9},1).to({regX:0,scaleX:1,x:-195.6},5).to({x:55.6,y:0.6},347).wait(64).to({regX:-0.7,scaleX:0.15,x:53.3},4).to({regX:-0.4,skewY:0,x:52.4},1).to({regX:0,scaleX:1},3).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(46.3,-2.1,12.2,5.5);
    
    
    (lib.ca = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol25();
        this.instance.parent = this;
        this.instance.setTransform(0,0.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-42.2,y:2.7},100).wait(58).to({regX:-0.4,scaleX:0.15},3).to({regX:-0.7,skewY:180,x:-41.3},1).to({regX:0,scaleX:1,x:-39},4).to({x:3.2,y:0.7},95).wait(40).to({regX:-0.7,scaleX:0.15,x:0.9},4).to({regX:-0.4,skewY:0,x:0},1).to({regX:0,scaleX:1},3).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6,-1.9,12.1,5.3);
    
    
    (lib.fbSymbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.fbSymbol1ht();
        this.instance.parent = this;
        this.instance.setTransform(-2.4,0.3,3.24,3.239);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbSymbol2, new cjs.Rectangle(-87.5,-70.7,162,136.1), null);
    
    
    (lib.fbcrglmc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_21 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));
    
        // Layer 3
        this.instance = new lib.fbcrgl3();
        this.instance.parent = this;
        this.instance.setTransform(7.3,13.4);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-0.96)).wait(1).to({regX:-24.1,regY:-3.2,x:-16.8,y:10.2,alpha:0.889},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.014},0).wait(1).to({regX:0,regY:0,x:7.3,y:13.4,alpha:0},0).to({_off:true},1).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.fbcrgl2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-9.5,-27.9);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).to({alpha:0},10).to({_off:true},1).wait(3));
    
        // Layer 1
        this.instance_2 = new lib.fbcrgl1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(6.6,-26.8);
        this.instance_2.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:6.7,alpha:1},4,cjs.Ease.get(-1)).to({alpha:0},10).to({_off:true},1).wait(7));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41,-39.4,69.6,29.6);
    
    
    (lib.fbbox = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // cg1
        this.cg1 = new lib.fbcrglmc();
        this.cg1.parent = this;
        this.cg1.setTransform(8.3,0.3);
    
        this.timeline.addTween(cjs.Tween.get(this.cg1).wait(1));
    
        // b1
        this.b1 = new lib.fbbox1();
        this.b1.parent = this;
        this.b1.setTransform(3,4.5);
    
        this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));
    
        // b2
        this.b2 = new lib.fbbox2();
        this.b2.parent = this;
        this.b2.setTransform(3,4.5);
        this.b2.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbbox, new cjs.Rectangle(-43.6,-58.6,247.3,684), null);
    
    
    (lib.fbbeam = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.fbSymbol2();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5,alpha:0},12,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-87.5,-70.7,162,136.1);
    
    
    (lib.uichacha = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 6
        this.instance = new lib.Symbol10();
        this.instance.parent = this;
        this.instance.setTransform(21,-63,1,1,0,0,0,24.9,21.9);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(3));
    
        // Layer 1
        this.instance_1 = new lib.Symbol12();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.9,-30.6,1,1,0,0,0,20.6,17.4);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(3));
    
        // Layer 5
        this.instance_2 = new lib.Symbol10();
        this.instance_2.parent = this;
        this.instance_2.setTransform(22.3,-62.6,1,1,9,0,0,24.9,21.9);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},9).wait(3));
    
        // Layer 1
        this.instance_3 = new lib.Symbol11();
        this.instance_3.parent = this;
        this.instance_3.setTransform(19.3,-30.6,1,1,0,0,0,20.2,17.2);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({_off:true},3).wait(3));
    
        // Layer 1
        this.instance_4 = new lib.Symbol13();
        this.instance_4.parent = this;
        this.instance_4.setTransform(19.3,-30.6,1,1,0,0,0,20.2,17.2);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({_off:true},3).wait(6));
    
        // Layer 1
        this.instance_5 = new lib.Symbol11();
        this.instance_5.parent = this;
        this.instance_5.setTransform(19.3,-30.6,1,1,0,0,0,20.2,17.2);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({_off:true},3).wait(9));
    
        // Layer 4
        this.instance_6 = new lib.Symbol10();
        this.instance_6.parent = this;
        this.instance_6.setTransform(21,-63,1,1,0,0,0,24.9,21.9);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},6).wait(12));
    
        // Layer 1
        this.instance_7 = new lib.Symbol14();
        this.instance_7.parent = this;
        this.instance_7.setTransform(19.9,-30.7,1,1,0,0,0,20.6,17.4);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},3).wait(12));
    
        // Layer 1
        this.instance_8 = new lib.Symbol12();
        this.instance_8.parent = this;
        this.instance_8.setTransform(19.9,-30.6,1,1,0,0,0,20.6,17.4);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},3).wait(15));
    
        // Layer 3
        this.instance_9 = new lib.Symbol10();
        this.instance_9.parent = this;
        this.instance_9.setTransform(21,-62.4,1,1,0,0,0,24.9,21.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},3).wait(18));
    
        // flash0.ai
        this.instance_10 = new lib.Symbol15();
        this.instance_10.parent = this;
        this.instance_10.setTransform(19.7,-30.1,1,1,0,0,0,20.4,17.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},3).wait(18));
    
        // Layer 2
        this.instance_11 = new lib.shadow("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(16,-12.8,0.413,0.615,0,0,0,39.9,4.5);
        this.instance_11.alpha = 0.699;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.8,-84.2,49.5,74.3);
    
    
    (lib.Symbol1copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 11 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().moveTo(3.6,56.2).lineTo(2.8,56.1).curveTo(-0.2,55.8,-3.3,55.3).lineTo(-7.8,54.5).curveTo(-16.3,52.7,-24.4,49.2).lineTo(-26.9,48.1).lineTo(-29.7,46.7).lineTo(-30.1,46.5).lineTo(-36.1,43.2).curveTo(-41.2,40.1,-46,36.4).lineTo(-49.1,33.7).lineTo(-52,31.2).lineTo(-52.7,30.3).curveTo(-53.1,29.9,-53.6,29.5).curveTo(-55.3,27.8,-56.8,26.1).lineTo(-57.4,25.4).lineTo(-58.1,24.7).lineTo(-59.9,22.6).curveTo(-62.5,19.2,-64.9,15.7).curveTo(-68.7,10.1,-71.7,3.9).lineTo(-71.9,3.3).lineTo(-73.3,0.3).curveTo(-74.8,-3.3,-76,-7).lineTo(-78.2,-14.7).lineTo(-78.3,-15.3).curveTo(-79.2,-19.1,-79.7,-22.9).lineTo(-80.5,-32.8).curveTo(-80.6,-35.2,-80.6,-37.5).lineTo(-80.2,-43.4).lineTo(-80.3,-43.7).lineTo(-80.2,-43.8).lineTo(-79.9,-46.7).lineTo(-79.8,-47.4).lineTo(-79.1,-51.6).curveTo(-79.1,-52.1,-78.9,-52.5).lineTo(-78.4,-55.6).lineTo(-78.2,-56.5).lineTo(-22.3,-54.5).curveTo(-21.7,-51,-21.7,-48.4).curveTo(-20.8,-46.8,-20.5,-45.9).curveTo(-19.2,-41.6,-24.2,-32.7).curveTo(-29.2,-24,-25,-17).curveTo(-23.6,-15,-21.6,-13.2).lineTo(-19.8,-12).curveTo(-13.3,-13.6,-7.4,-11.2).curveTo(-0.9,-8.6,4.6,-1.3).curveTo(6.7,1.5,8.7,3.6).curveTo(13,5.9,17.8,4.8).curveTo(20.3,4.2,22.5,2.8).lineTo(24.2,1.5).curveTo(24.8,-5.2,28.9,-10.1).curveTo(31.1,-12.9,34.5,-15).curveTo(36.9,-16.5,39.9,-17.7).lineTo(80.6,25.1).lineTo(80.3,25.5).curveTo(76.5,29.8,72.2,33.6).lineTo(71.6,34).lineTo(66.3,38.3).lineTo(65.6,38.8).lineTo(63.8,40.1).lineTo(60.9,42.1).curveTo(56,45.2,50.6,47.7).lineTo(49.2,48.4).lineTo(47.3,49.2).curveTo(43.6,50.7,39.8,52).lineTo(36,53.1).curveTo(25.5,56.1,14.6,56.4).lineTo(10.9,56.5).curveTo(7.2,56.5,3.6,56.2).closePath();
        var mask_graphics_1 = new cjs.Graphics().moveTo(8.6,53.9).curveTo(5.6,53.9,2.6,53.6).lineTo(-2,53.3).curveTo(-10.6,52.2,-19,49.6).lineTo(-21.6,48.7).lineTo(-24.5,47.6).lineTo(-24.9,47.4).lineTo(-31.3,44.7).curveTo(-36.6,42,-41.7,38.8).lineTo(-45.1,36.5).lineTo(-48.1,34.2).lineTo(-49,33.4).curveTo(-49.4,33,-49.9,32.6).curveTo(-51.7,31.1,-53.4,29.5).lineTo(-54.1,29).lineTo(-54.8,28.3).lineTo(-56.8,26.3).curveTo(-59.8,23.2,-62.5,20).curveTo(-66.8,14.8,-70.4,8.9).lineTo(-70.6,8.2).lineTo(-72.2,5.4).curveTo(-74.1,1.9,-75.7,-1.6).lineTo(-78.5,-9.1).lineTo(-78.7,-9.6).curveTo(-79.9,-13.3,-80.7,-17.1).lineTo(-82.5,-26.9).curveTo(-82.8,-29.2,-83,-31.6).lineTo(-83.2,-37.5).lineTo(-83.3,-37.8).lineTo(-83.2,-37.9).lineTo(-83.2,-40.7).lineTo(-83.2,-41.5).lineTo(-82.8,-45.7).curveTo(-82.9,-46.2,-82.7,-46.6).lineTo(-82.5,-49.8).lineTo(-82.4,-50.6).lineTo(-26.6,-53.9).curveTo(-25.7,-50.4,-25.4,-47.8).curveTo(-24.4,-46.4,-24,-45.4).curveTo(-22.3,-41.4,-26.4,-32).curveTo(-30.6,-22.8,-25.7,-16.3).curveTo(-24.2,-14.4,-22,-12.8).lineTo(-20.1,-11.8).curveTo(-13.8,-14,-7.7,-12.1).curveTo(-1,-10.1,5.1,-3.4).curveTo(7.5,-0.8,9.7,1.1).curveTo(14.2,3,18.9,1.5).curveTo(21.3,0.6,23.3,-0.9).lineTo(24.9,-2.5).curveTo(24.9,-9.2,28.5,-14.4).curveTo(30.5,-17.4,33.7,-19.8).curveTo(35.9,-21.5,38.8,-23).lineTo(83.3,15.9).lineTo(83,16.3).curveTo(79.6,20.9,75.7,25.1).lineTo(75.2,25.5).lineTo(70.2,30.3).lineTo(69.6,30.9).lineTo(67.9,32.3).lineTo(65.2,34.5).curveTo(60.6,38.1,55.5,41.1).lineTo(54.1,42).lineTo(52.3,43).curveTo(48.8,44.8,45.1,46.4).lineTo(41.5,47.9).curveTo(31.3,51.8,20.4,53.1).curveTo(15,53.8,9.4,53.9).lineTo(8.6,53.9).closePath();
        var mask_graphics_2 = new cjs.Graphics().moveTo(-13.1,50.1).lineTo(-15.8,49.5).lineTo(-18.8,48.7).lineTo(-19.2,48.5).lineTo(-25.8,46.4).curveTo(-31.3,44.2,-36.7,41.5).lineTo(-40.3,39.5).lineTo(-43.6,37.5).lineTo(-44.5,36.8).curveTo(-44.9,36.4,-45.5,36.1).curveTo(-47.4,34.8,-49.3,33.4).lineTo(-50,32.8).lineTo(-50.8,32.3).lineTo(-53,30.5).curveTo(-56.1,27.7,-59.1,24.7).curveTo(-63.9,19.9,-68,14.3).lineTo(-68.3,13.8).lineTo(-70.2,11.1).curveTo(-72.4,7.8,-74.3,4.5).lineTo(-77.8,-2.8).lineTo(-78,-3.3).curveTo(-79.6,-6.8,-80.8,-10.5).lineTo(-83.4,-20.1).curveTo(-84,-22.4,-84.4,-24.8).lineTo(-85.1,-30.6).lineTo(-85.2,-30.9).lineTo(-85.2,-31).lineTo(-85.4,-33.8).lineTo(-85.5,-34.6).lineTo(-85.5,-38.8).curveTo(-85.6,-39.3,-85.5,-39.8).lineTo(-85.6,-42.9).lineTo(-85.5,-43.8).lineTo(-30.2,-52.2).curveTo(-29.1,-48.8,-28.5,-46.2).curveTo(-27.3,-44.9,-26.9,-44).curveTo(-24.8,-40.1,-28.1,-30.4).curveTo(-31.4,-20.9,-25.9,-14.9).curveTo(-24.2,-13.1,-21.9,-11.7).lineTo(-19.9,-10.8).curveTo(-13.9,-13.6,-7.6,-12.3).curveTo(-0.7,-11,6,-4.9).curveTo(8.6,-2.5,10.9,-0.8).curveTo(15.6,0.7,20.1,-1.3).curveTo(22.4,-2.3,24.3,-4.1).lineTo(25.8,-5.8).curveTo(25.1,-12.4,28.2,-18).curveTo(29.9,-21.1,32.9,-23.8).curveTo(35,-25.8,37.7,-27.5).lineTo(85.6,7.1).lineTo(85.3,7.5).curveTo(82.4,12.4,78.8,16.9).curveTo(78.6,17.1,78.4,17.4).lineTo(73.9,22.7).lineTo(73.4,23.3).lineTo(71.8,24.9).lineTo(69.3,27.3).curveTo(65.1,31.3,60.3,34.8).lineTo(59,35.8).lineTo(57.3,36.9).curveTo(53.9,39.1,50.4,41).lineTo(47,42.8).curveTo(37.1,47.6,26.5,50).curveTo(21.1,51.2,15.6,51.8).lineTo(14.8,51.8).curveTo(11.8,52.1,8.7,52.2).lineTo(4.1,52.2).curveTo(-4.5,52,-13.1,50.1).closePath();
        var mask_graphics_3 = new cjs.Graphics().moveTo(-6.7,49.8).lineTo(-9.5,49.4).lineTo(-12.5,48.9).lineTo(-13,48.8).lineTo(-19.7,47.3).curveTo(-25.4,45.6,-31.1,43.4).lineTo(-34.8,41.7).lineTo(-38.2,40).lineTo(-39.2,39.4).curveTo(-39.7,39.1,-40.2,38.9).curveTo(-42.3,37.7,-44.3,36.5).lineTo(-45,36).lineTo(-45.9,35.5).lineTo(-48.2,33.9).curveTo(-51.7,31.4,-54.9,28.8).curveTo(-60.1,24.4,-64.7,19.3).lineTo(-65.1,18.7).lineTo(-67.2,16.2).curveTo(-69.7,13.2,-71.8,10).lineTo(-76,3.1).lineTo(-76.3,2.6).curveTo(-78.2,-0.7,-79.7,-4.3).lineTo(-83.3,-13.6).curveTo(-84,-15.9,-84.6,-18.1).lineTo(-85.9,-23.9).lineTo(-86,-24.2).lineTo(-86,-24.3).lineTo(-86.4,-27.1).lineTo(-86.6,-27.8).lineTo(-87,-32.1).curveTo(-87.2,-32.5,-87.1,-33).lineTo(-87.5,-36.1).lineTo(-87.5,-37).lineTo(-33.3,-50.5).curveTo(-31.8,-47.2,-31,-44.7).curveTo(-29.7,-43.5,-29.2,-42.6).curveTo(-26.8,-39,-29.1,-29).curveTo(-31.5,-19.2,-25.5,-13.7).curveTo(-23.7,-12.1,-21.2,-11).lineTo(-19.2,-10.3).curveTo(-13.4,-13.6,-7.1,-12.9).curveTo(-0,-12.2,7.2,-6.7).curveTo(10,-4.6,12.5,-3.1).curveTo(17.3,-2.1,21.6,-4.5).curveTo(23.8,-5.7,25.5,-7.7).lineTo(26.8,-9.5).curveTo(25.6,-16,28.1,-21.9).curveTo(29.5,-25.1,32.2,-28.1).curveTo(34.1,-30.2,36.6,-32.2).lineTo(87.5,-2.2).lineTo(87.3,-1.7).curveTo(84.8,3.4,81.7,8.2).curveTo(81.5,8.5,81.3,8.8).lineTo(77.4,14.4).lineTo(76.9,15).lineTo(75.4,16.8).lineTo(73.2,19.5).curveTo(69.4,23.8,64.9,27.7).lineTo(63.7,28.8).lineTo(62.1,30.1).curveTo(59,32.6,55.7,34.8).lineTo(52.4,36.9).curveTo(43.1,42.7,32.7,46).curveTo(27.4,47.7,22,48.8).lineTo(21.2,48.9).curveTo(18.3,49.5,15.2,49.8).lineTo(10.6,50.3).curveTo(7.5,50.5,4.4,50.5).curveTo(-1.1,50.5,-6.7,49.8).closePath();
        var mask_graphics_4 = new cjs.Graphics().moveTo(-0.3,48.7).lineTo(-3,48.5).lineTo(-6.1,48.3).lineTo(-6.6,48.2).lineTo(-13.4,47.4).curveTo(-19.3,46.3,-25.1,44.5).lineTo(-29,43.2).lineTo(-32.5,41.9).lineTo(-33.5,41.4).curveTo(-34,41,-34.6,40.9).curveTo(-36.8,40,-38.9,38.9).lineTo(-39.7,38.5).lineTo(-40.6,38.1).lineTo(-43,36.7).curveTo(-46.7,34.5,-50.2,32.2).curveTo(-55.7,28.4,-60.8,23.6).lineTo(-61.3,23.1).lineTo(-63.6,20.8).curveTo(-66.3,18,-68.8,15.1).lineTo(-73.6,8.6).lineTo(-73.9,8.2).curveTo(-76.1,5,-77.9,1.6).lineTo(-82.3,-7.3).curveTo(-83.3,-9.5,-84.1,-11.7).lineTo(-85.9,-17.3).lineTo(-86,-17.6).lineTo(-86,-17.7).lineTo(-86.8,-20.5).lineTo(-87,-21.2).lineTo(-87.8,-25.4).curveTo(-88,-25.8,-88,-26.3).lineTo(-88.6,-29.4).lineTo(-88.7,-30.2).lineTo(-36,-48.7).curveTo(-34.2,-45.6,-33.2,-43.2).curveTo(-31.8,-42.1,-31.2,-41.3).curveTo(-28.4,-37.8,-29.9,-27.7).curveTo(-31.3,-17.7,-24.9,-12.8).curveTo(-22.9,-11.4,-20.3,-10.5).lineTo(-18.2,-10).curveTo(-12.8,-13.8,-6.4,-13.7).curveTo(0.6,-13.7,8.3,-8.9).curveTo(11.3,-7,13.9,-5.8).curveTo(18.8,-5.2,22.9,-8).curveTo(25,-9.4,26.5,-11.5).lineTo(27.6,-13.5).curveTo(25.8,-19.9,27.8,-25.9).curveTo(28.9,-29.3,31.3,-32.5).curveTo(33,-34.8,35.3,-37).lineTo(88.7,-11.9).lineTo(88.6,-11.4).curveTo(86.6,-6,84,-0.9).curveTo(83.7,-0.7,83.6,-0.3).lineTo(80.2,5.6).lineTo(79.7,6.3).lineTo(78.5,8.2).lineTo(76.5,11.1).curveTo(73.1,15.8,69,20).lineTo(67.9,21.3).lineTo(66.5,22.7).curveTo(63.5,25.4,60.5,27.9).lineTo(57.4,30.4).curveTo(48.6,36.9,38.6,41.2).curveTo(33.6,43.4,28.2,45).lineTo(27.5,45.2).curveTo(24.6,46,21.6,46.6).lineTo(17.1,47.5).curveTo(9.8,48.7,2.3,48.7).lineTo(-0.3,48.7).closePath();
        var mask_graphics_5 = new cjs.Graphics().moveTo(-0.1,46.9).lineTo(-7,46.6).curveTo(-12.9,46.1,-18.9,44.9).lineTo(-22.9,44).lineTo(-26.5,43).lineTo(-27.6,42.5).curveTo(-28.1,42.3,-28.7,42.2).curveTo(-31,41.5,-33.2,40.6).lineTo(-34,40.3).lineTo(-34.9,40).lineTo(-37.5,38.8).curveTo(-41.3,37,-45,35).curveTo(-50.9,31.7,-56.4,27.4).lineTo(-56.9,27).lineTo(-59.4,24.9).curveTo(-62.4,22.4,-65.1,19.7).lineTo(-70.5,13.7).lineTo(-70.8,13.2).curveTo(-73.3,10.3,-75.5,7.1).lineTo(-80.7,-1.4).curveTo(-81.9,-3.5,-82.9,-5.6).lineTo(-85.2,-11).lineTo(-85.3,-11.3).lineTo(-85.3,-11.4).lineTo(-86.3,-14.1).lineTo(-86.6,-14.8).lineTo(-87.8,-18.9).curveTo(-88,-19.3,-88.1,-19.7).lineTo(-89,-22.7).lineTo(-89.2,-23.6).lineTo(-38.4,-46.9).curveTo(-36.3,-44,-35.1,-41.6).curveTo(-33.6,-40.7,-32.9,-39.9).curveTo(-29.9,-36.8,-30.4,-26.6).curveTo(-30.9,-16.5,-24,-12.2).curveTo(-21.9,-10.9,-19.3,-10.3).lineTo(-17.1,-10).curveTo(-12.1,-14.3,-5.7,-14.8).curveTo(1.3,-15.4,9.4,-11.4).curveTo(12.6,-9.8,15.3,-8.8).curveTo(20.2,-8.7,24,-11.8).curveTo(25.9,-13.5,27.3,-15.7).lineTo(28.2,-17.7).curveTo(25.8,-23.9,27.2,-30.1).curveTo(28,-33.6,30.1,-37).curveTo(31.5,-39.4,33.7,-41.8).lineTo(89.2,-21.8).lineTo(89.1,-21.3).curveTo(87.6,-15.8,85.4,-10.5).lineTo(85.2,-9.8).lineTo(82.3,-3.6).lineTo(81.9,-2.9).lineTo(80.8,-0.9).lineTo(79.1,2.2).curveTo(76.2,7.2,72.5,11.8).lineTo(71.5,13.1).lineTo(70.2,14.7).curveTo(67.6,17.7,64.7,20.5).lineTo(61.9,23.2).curveTo(53.8,30.5,44.2,35.7).curveTo(39.4,38.3,34.2,40.4).lineTo(33.5,40.7).curveTo(30.7,41.8,27.7,42.7).lineTo(23.3,44).curveTo(15,46.2,6.2,46.8).lineTo(3.4,46.8).lineTo(0.3,46.9).lineTo(-0.1,46.9).closePath();
        var mask_graphics_6 = new cjs.Graphics().moveTo(-12.5,45.3).lineTo(-16.6,44.7).lineTo(-20.3,44.1).lineTo(-21.4,43.7).lineTo(-22.6,43.5).curveTo(-24.9,43,-27.1,42.3).lineTo(-28,42.1).lineTo(-28.9,41.8).lineTo(-31.6,40.9).curveTo(-35.6,39.5,-39.5,37.8).curveTo(-45.6,35.1,-51.5,31.4).lineTo(-52,31).lineTo(-54.7,29.1).curveTo(-58,26.9,-60.9,24.4).lineTo(-66.8,19).lineTo(-67.2,18.6).curveTo(-70,15.9,-72.4,12.9).lineTo(-78.4,4.9).curveTo(-79.7,2.9,-80.9,0.9).lineTo(-83.7,-4.3).lineTo(-83.9,-4.5).lineTo(-83.9,-4.6).lineTo(-85.1,-7.2).lineTo(-85.5,-7.8).lineTo(-87.1,-11.8).curveTo(-87.3,-12.2,-87.4,-12.7).lineTo(-88.6,-15.6).lineTo(-88.9,-16.4).lineTo(-40.5,-44.3).curveTo(-38.2,-41.6,-36.7,-39.4).curveTo(-35.1,-38.5,-34.4,-37.9).curveTo(-31,-35,-30.6,-24.8).curveTo(-30.2,-14.7,-22.9,-11.1).curveTo(-20.7,-10,-18,-9.6).lineTo(-15.9,-9.5).curveTo(-11.2,-14.3,-4.9,-15.4).curveTo(2,-16.6,10.4,-13.4).curveTo(13.7,-12.1,16.5,-11.3).curveTo(21.4,-11.7,24.9,-15.2).curveTo(26.7,-17,27.8,-19.3).lineTo(28.6,-21.4).curveTo(25.5,-27.4,26.4,-33.7).curveTo(26.8,-37.2,28.6,-40.8).curveTo(29.8,-43.3,31.8,-45.9).lineTo(88.9,-31.1).lineTo(88.8,-30.6).curveTo(87.9,-25,86.2,-19.5).curveTo(86,-19.2,86,-18.9).lineTo(83.7,-12.4).lineTo(83.4,-11.6).lineTo(82.5,-9.5).lineTo(81.1,-6.4).curveTo(78.6,-1.1,75.4,3.8).lineTo(74.5,5.3).lineTo(73.4,6.9).curveTo(71,10.2,68.4,13.2).lineTo(65.9,16.2).curveTo(58.5,24.2,49.4,30.3).curveTo(44.9,33.4,39.9,35.9).lineTo(39.2,36.2).curveTo(36.5,37.6,33.7,38.8).lineTo(29.4,40.5).curveTo(21.3,43.4,12.6,44.8).lineTo(9.9,45.1).lineTo(6.8,45.5).lineTo(6.3,45.5).lineTo(-0.6,45.9).lineTo(-0.7,45.9).curveTo(-6.6,45.9,-12.5,45.3).closePath();
        var mask_graphics_7 = new cjs.Graphics().moveTo(-6.1,47.5).lineTo(-10.2,47.3).lineTo(-14,47).lineTo(-15.1,46.7).lineTo(-16.3,46.6).curveTo(-18.6,46.3,-20.9,45.8).lineTo(-21.8,45.7).lineTo(-22.7,45.5).lineTo(-25.5,44.9).curveTo(-29.6,43.8,-33.6,42.5).curveTo(-40,40.3,-46.2,37.2).lineTo(-46.7,36.8).lineTo(-49.6,35.3).curveTo(-53,33.3,-56.2,31.2).lineTo(-62.6,26.3).lineTo(-63,25.9).curveTo(-66,23.5,-68.7,20.7).lineTo(-75.4,13.3).curveTo(-76.9,11.5,-78.3,9.6).lineTo(-81.5,4.7).lineTo(-81.7,4.5).lineTo(-81.8,4.4).lineTo(-83.2,1.9).lineTo(-83.6,1.3).lineTo(-85.6,-2.5).curveTo(-85.9,-2.9,-86,-3.3).lineTo(-87.5,-6.1).lineTo(-87.8,-6.9).lineTo(-42.2,-39.2).curveTo(-39.6,-36.7,-38,-34.6).curveTo(-36.3,-33.9,-35.5,-33.3).curveTo(-31.9,-30.8,-30.5,-20.7).curveTo(-29.2,-10.7,-21.6,-7.7).curveTo(-19.3,-6.9,-16.6,-6.7).lineTo(-14.5,-6.8).curveTo(-10.3,-12,-4.1,-13.7).curveTo(2.6,-15.6,11.3,-13.1).curveTo(14.7,-12.1,17.6,-11.6).curveTo(22.5,-12.4,25.6,-16.2).curveTo(27.2,-18.2,28.1,-20.6).lineTo(28.7,-22.8).curveTo(25.1,-28.4,25.3,-34.8).curveTo(25.5,-38.3,26.9,-42.1).curveTo(27.9,-44.7,29.6,-47.5).lineTo(87.8,-38).lineTo(87.8,-37.5).curveTo(87.4,-31.8,86.2,-26.2).curveTo(86.1,-25.9,86,-25.6).lineTo(84.4,-18.9).lineTo(84.2,-18.1).lineTo(83.4,-16).lineTo(82.4,-12.6).curveTo(80.4,-7.2,77.6,-2).lineTo(76.9,-0.5).lineTo(75.9,1.3).curveTo(73.8,4.7,71.6,8).lineTo(69.3,11.2).curveTo(62.7,19.9,54.2,26.7).curveTo(50,30.2,45.3,33.2).lineTo(44.6,33.6).curveTo(42.1,35.2,39.3,36.7).lineTo(35.3,38.8).curveTo(27.4,42.4,18.9,44.6).lineTo(16.2,45.2).lineTo(13.2,45.9).lineTo(12.7,45.9).lineTo(5.9,47).curveTo(0.6,47.5,-4.8,47.5).lineTo(-6.1,47.5).closePath();
        var mask_graphics_8 = new cjs.Graphics().moveTo(-8.6,48.9).curveTo(-9.2,48.8,-9.8,48.8).curveTo(-12.2,48.8,-14.5,48.5).lineTo(-15.4,48.5).lineTo(-16.3,48.4).lineTo(-19.1,48).curveTo(-23.3,47.3,-27.4,46.4).curveTo(-34,44.8,-40.5,42.3).lineTo(-41,42).lineTo(-44,40.7).curveTo(-47.6,39.1,-51,37.2).lineTo(-57.8,32.9).lineTo(-58.2,32.6).curveTo(-61.5,30.5,-64.4,28).lineTo(-71.7,21.2).curveTo(-73.4,19.6,-75,17.8).lineTo(-78.7,13.2).lineTo(-78.9,13).lineTo(-78.9,12.9).lineTo(-80.6,10.6).lineTo(-81.1,10).lineTo(-83.4,6.4).curveTo(-83.7,6.1,-83.9,5.7).lineTo(-85.6,3).lineTo(-86,2.3).lineTo(-43.6,-34.1).curveTo(-40.8,-31.9,-39,-29.9).curveTo(-37.3,-29.4,-36.4,-28.9).curveTo(-32.6,-26.7,-30.3,-16.8).curveTo(-28,-6.9,-20.2,-4.7).curveTo(-17.8,-4.1,-15.1,-4.2).lineTo(-13,-4.5).curveTo(-9.3,-10,-3.3,-12.2).curveTo(3.2,-14.8,12.1,-13.1).curveTo(15.6,-12.5,18.5,-12.2).curveTo(23.3,-13.5,26,-17.6).curveTo(27.4,-19.6,28.1,-22.1).lineTo(28.5,-24.3).curveTo(24.4,-29.6,24.1,-36).curveTo(23.9,-39.5,24.9,-43.4).curveTo(25.7,-46.1,27.1,-49).lineTo(85.9,-45).lineTo(86,-44.5).curveTo(86.1,-38.8,85.5,-33.1).lineTo(85.4,-32.4).lineTo(84.3,-25.6).lineTo(84.2,-24.8).lineTo(83.7,-22.6).lineTo(82.9,-19.3).curveTo(81.4,-13.6,79.2,-8.2).lineTo(78.6,-6.6).lineTo(77.7,-4.8).curveTo(76,-1.2,74,2.3).lineTo(72.1,5.7).curveTo(66.3,15,58.5,22.6).curveTo(54.6,26.4,50.2,29.9).lineTo(49.6,30.3).curveTo(47.2,32.2,44.6,33.8).lineTo(40.7,36.3).curveTo(33.3,40.7,25,43.6).lineTo(22.4,44.5).lineTo(19.4,45.4).lineTo(19,45.5).lineTo(12.3,47.2).curveTo(6.5,48.3,0.4,48.8).lineTo(-3.7,49).lineTo(-7.5,49).closePath();
        var mask_graphics_9 = new cjs.Graphics().moveTo(-12.9,51.1).curveTo(-17.2,50.8,-21.3,50.3).curveTo(-28,49.3,-34.7,47.4).lineTo(-35.3,47.1).lineTo(-38.4,46.1).curveTo(-42.1,44.8,-45.6,43.3).lineTo(-52.8,39.7).lineTo(-53.3,39.4).curveTo(-56.7,37.6,-59.8,35.3).lineTo(-67.7,29.3).curveTo(-69.6,27.8,-71.3,26.2).lineTo(-75.4,22).lineTo(-75.7,21.8).lineTo(-75.7,21.7).lineTo(-77.6,19.6).lineTo(-78.1,19.1).lineTo(-80.7,15.7).curveTo(-81.1,15.4,-81.3,15).lineTo(-83.2,12.5).lineTo(-83.7,11.8).lineTo(-44.9,-28.4).curveTo(-41.9,-26.4,-39.9,-24.7).curveTo(-38.1,-24.3,-37.2,-23.9).curveTo(-33.2,-22,-30,-12.4).curveTo(-26.8,-2.8,-18.8,-1.3).curveTo(-16.4,-0.9,-13.8,-1.2).lineTo(-11.6,-1.7).curveTo(-8.5,-7.6,-2.8,-10.3).curveTo(3.6,-13.4,12.6,-12.6).curveTo(16.1,-12.3,19,-12.3).curveTo(23.6,-14,26,-18.4).curveTo(27.2,-20.6,27.6,-23.1).lineTo(27.8,-25.3).curveTo(23.2,-30.2,22.3,-36.5).curveTo(21.8,-40,22.5,-44).curveTo(23,-46.8,24.1,-49.8).lineTo(83.1,-51.3).lineTo(83.2,-50.7).curveTo(83.8,-45.1,83.7,-39.4).lineTo(83.7,-38.7).lineTo(83.2,-31.8).lineTo(83.2,-31).lineTo(82.9,-28.8).lineTo(82.4,-25.3).curveTo(81.5,-19.6,79.7,-14).lineTo(79.3,-12.3).lineTo(78.6,-10.4).curveTo(77.2,-6.7,75.6,-3).lineTo(74,0.5).curveTo(69.1,10.3,62,18.6).curveTo(58.5,22.8,54.5,26.6).lineTo(53.9,27.1).curveTo(51.7,29.2,49.2,31.1).lineTo(45.6,33.9).curveTo(38.6,39,30.7,42.7).lineTo(28.1,43.7).lineTo(25.2,44.9).lineTo(24.8,45.1).lineTo(18.3,47.4).curveTo(12.6,49,6.6,50.1).lineTo(2.6,50.6).lineTo(-1.2,51).lineTo(-2.3,51).curveTo(-2.9,51,-3.5,51.1).curveTo(-5.9,51.2,-8.2,51.2).lineTo(-9.1,51.2).lineTo(-10.1,51.3).lineTo(-12.9,51.1).closePath();
        var mask_graphics_10 = new cjs.Graphics().moveTo(-15.4,55.3).curveTo(-22.1,55,-29,53.7).lineTo(-29.6,53.5).lineTo(-32.8,52.8).curveTo(-36.6,51.9,-40.2,50.7).lineTo(-47.7,47.7).lineTo(-48.2,47.5).curveTo(-51.8,45.9,-55.1,44).lineTo(-63.6,38.8).curveTo(-65.5,37.4,-67.4,36).lineTo(-71.9,32.2).lineTo(-72.1,32.1).lineTo(-72.2,31.9).lineTo(-74.3,30).lineTo(-74.8,29.5).lineTo(-77.8,26.4).curveTo(-78.1,26.1,-78.4,25.7).lineTo(-80.5,23.5).lineTo(-81.1,22.8).lineTo(-46.1,-20.8).curveTo(-43,-19.1,-40.8,-17.6).curveTo(-39.1,-17.4,-38.1,-17).curveTo(-34,-15.5,-29.9,-6.2).curveTo(-25.8,3,-17.7,3.8).curveTo(-15.3,4,-12.7,3.4).lineTo(-10.6,2.7).curveTo(-8,-3.4,-2.6,-6.7).curveTo(3.4,-10.4,12.5,-10.4).curveTo(16,-10.4,18.9,-10.8).curveTo(23.3,-12.9,25.3,-17.4).curveTo(26.3,-19.7,26.5,-22.3).lineTo(26.5,-24.5).curveTo(21.5,-29,20,-35.1).curveTo(19.1,-38.6,19.5,-42.6).curveTo(19.7,-45.4,20.5,-48.5).lineTo(79.1,-55.4).lineTo(79.2,-54.9).curveTo(80.4,-49.4,80.8,-43.6).lineTo(80.8,-43).lineTo(81.1,-36.1).lineTo(81.1,-35.3).lineTo(81,-33).lineTo(80.8,-29.5).curveTo(80.4,-23.7,79.2,-18).lineTo(79,-16.3).lineTo(78.5,-14.4).curveTo(77.4,-10.5,76.2,-6.7).lineTo(74.9,-3.1).curveTo(70.9,7.1,64.6,16.1).curveTo(61.5,20.6,57.9,24.7).lineTo(57.3,25.3).curveTo(55.3,27.6,53.1,29.7).lineTo(49.7,32.8).curveTo(43.2,38.5,35.6,42.9).lineTo(33.2,44.2).lineTo(30.4,45.7).lineTo(30.1,45.9).lineTo(23.8,48.8).curveTo(18.2,50.9,12.4,52.5).lineTo(8.4,53.5).lineTo(4.7,54.2).lineTo(3.6,54.3).curveTo(3,54.3,2.4,54.5).curveTo(0,54.8,-2.3,55).lineTo(-3.2,55.1).lineTo(-4.1,55.3).lineTo(-7,55.4).lineTo(-9.9,55.4).lineTo(-15.4,55.3).closePath();
        var mask_graphics_11 = new cjs.Graphics().moveTo(-23.4,59.1).lineTo(-24.1,59).lineTo(-27.3,58.5).curveTo(-31.2,58,-34.9,57.1).lineTo(-42.7,54.9).lineTo(-43.2,54.7).curveTo(-46.9,53.5,-50.4,51.9).lineTo(-59.3,47.5).curveTo(-61.4,46.3,-63.3,45).lineTo(-68.1,41.7).lineTo(-68.4,41.6).lineTo(-68.5,41.5).lineTo(-70.7,39.7).lineTo(-71.3,39.3).lineTo(-74.5,36.4).curveTo(-74.9,36.2,-75.2,35.8).lineTo(-77.6,33.8).lineTo(-78.2,33.1).lineTo(-47.4,-13.5).curveTo(-44.2,-12.1,-41.9,-10.7).curveTo(-40.1,-10.7,-39.1,-10.4).curveTo(-34.8,-9.4,-29.9,-0.5).curveTo(-25,8.4,-16.9,8.4).curveTo(-14.4,8.3,-11.9,7.5).lineTo(-9.9,6.6).curveTo(-7.9,0.3,-2.8,-3.5).curveTo(2.9,-7.7,11.9,-8.6).curveTo(15.4,-8.9,18.2,-9.5).curveTo(22.5,-12,24,-16.7).curveTo(24.8,-19.1,24.8,-21.7).lineTo(24.5,-23.9).curveTo(19.1,-27.9,17.1,-33.9).curveTo(15.9,-37.2,15.9,-41.2).curveTo(15.8,-44.1,16.4,-47.2).lineTo(74,-59.6).lineTo(74.2,-59.1).curveTo(75.9,-53.6,76.8,-48).curveTo(76.8,-47.6,76.9,-47.3).lineTo(77.8,-40.5).lineTo(77.9,-39.7).lineTo(78,-37.4).lineTo(78.2,-34).curveTo(78.3,-28.1,77.7,-22.3).lineTo(77.5,-20.6).lineTo(77.2,-18.6).curveTo(76.5,-14.7,75.6,-10.8).lineTo(74.7,-7).curveTo(71.7,3.5,66.3,12.9).curveTo(63.6,17.7,60.3,22.2).lineTo(59.8,22.9).curveTo(58,25.3,56,27.6).lineTo(53,31).curveTo(47,37.3,39.9,42.4).lineTo(37.6,43.9).lineTo(35,45.6).lineTo(34.6,45.8).lineTo(28.6,49.3).curveTo(23.3,52,17.6,54.1).lineTo(13.8,55.4).lineTo(10.1,56.5).lineTo(9,56.7).lineTo(7.8,57).curveTo(5.5,57.6,3.2,58).lineTo(2.4,58.1).lineTo(1.4,58.3).lineTo(-1.4,58.8).curveTo(-5.6,59.2,-9.8,59.5).lineTo(-14.1,59.6).curveTo(-18.7,59.6,-23.4,59.1).closePath();
        var mask_graphics_12 = new cjs.Graphics().moveTo(-18.1,63.6).lineTo(-18.7,63.5).lineTo(-22,63.4).curveTo(-25.9,63.2,-29.7,62.7).lineTo(-37.6,61.2).lineTo(-38.1,61).curveTo(-41.9,60.2,-45.6,58.9).lineTo(-54.8,55.3).curveTo(-57,54.4,-59.1,53.3).lineTo(-64.2,50.4).lineTo(-64.5,50.3).lineTo(-64.6,50.2).lineTo(-67,48.7).lineTo(-67.6,48.3).lineTo(-71.1,45.8).curveTo(-71.5,45.6,-71.8,45.2).lineTo(-74.3,43.4).lineTo(-75,42.8).lineTo(-48.7,-6.4).curveTo(-45.3,-5.4,-42.9,-4.2).curveTo(-41.1,-4.4,-40.2,-4.2).curveTo(-35.8,-3.5,-30,4.9).curveTo(-24.4,13.2,-16.3,12.5).curveTo(-13.8,12.2,-11.4,11.1).lineTo(-9.5,10.1).curveTo(-8.1,3.6,-3.3,-0.7).curveTo(1.9,-5.4,10.8,-7.1).curveTo(14.3,-7.8,17,-8.6).curveTo(21,-11.5,22.1,-16.3).curveTo(22.7,-18.7,22.4,-21.3).lineTo(21.9,-23.5).curveTo(16.2,-26.9,13.6,-32.7).curveTo(12.1,-36,11.7,-39.9).curveTo(11.4,-42.8,11.7,-46).lineTo(67.9,-63.6).lineTo(68.2,-63.1).curveTo(70.3,-57.9,71.8,-52.3).lineTo(72,-51.7).lineTo(73.5,-44.9).lineTo(73.6,-44.2).lineTo(73.9,-41.9).lineTo(74.4,-38.5).curveTo(75.1,-32.7,75,-26.8).lineTo(75,-25.2).lineTo(74.9,-23.1).curveTo(74.6,-19.1,74,-15.2).lineTo(73.4,-11.4).curveTo(71.4,-0.6,66.9,9.3).curveTo(64.7,14.3,61.9,19.1).lineTo(61.4,19.8).curveTo(59.9,22.3,58.1,24.8).lineTo(55.4,28.5).curveTo(50,35.3,43.4,41.1).lineTo(41.2,42.8).lineTo(38.8,44.8).lineTo(38.4,45).lineTo(32.8,49).curveTo(27.8,52.1,22.3,54.8).lineTo(18.6,56.5).lineTo(15.1,57.9).lineTo(14,58.2).curveTo(13.4,58.3,12.8,58.6).curveTo(10.6,59.4,8.3,60).lineTo(7.5,60.2).lineTo(6.6,60.5).lineTo(3.8,61.2).curveTo(-0.3,62.1,-4.5,62.7).curveTo(-11,63.6,-17.8,63.6).lineTo(-18.1,63.6).closePath();
        var mask_graphics_13 = new cjs.Graphics().moveTo(-24.6,67.4).lineTo(-32.6,66.6).lineTo(-33.2,66.5).curveTo(-37,66,-40.8,65.1).lineTo(-50.3,62.4).curveTo(-52.6,61.6,-54.8,60.7).lineTo(-60.1,58.3).lineTo(-60.4,58.2).lineTo(-60.5,58.2).lineTo(-63,56.9).lineTo(-63.7,56.5).lineTo(-67.4,54.3).curveTo(-67.8,54.2,-68.2,53.9).lineTo(-70.9,52.3).lineTo(-71.6,51.8).lineTo(-50,0.3).curveTo(-46.5,1.1,-44,2).curveTo(-42.2,1.7,-41.2,1.8).curveTo(-36.8,2,-30.3,9.8).curveTo(-23.9,17.6,-15.9,16.1).curveTo(-13.5,15.6,-11.1,14.3).lineTo(-9.4,13.1).curveTo(-8.6,6.5,-4.2,1.8).curveTo(0.5,-3.4,9.2,-5.9).curveTo(12.6,-6.8,15.3,-7.9).curveTo(19,-11.2,19.6,-16.1).curveTo(20,-18.6,19.5,-21.1).lineTo(18.8,-23.2).curveTo(12.8,-26.1,9.6,-31.6).curveTo(7.9,-34.7,7.1,-38.6).curveTo(6.5,-41.4,6.5,-44.6).lineTo(60.9,-67.4).lineTo(61.1,-67).curveTo(63.8,-61.9,65.8,-56.6).curveTo(65.8,-56.2,66,-55.9).lineTo(68.1,-49.4).lineTo(68.3,-48.6).lineTo(68.8,-46.4).lineTo(69.7,-43).curveTo(70.9,-37.3,71.3,-31.5).lineTo(71.5,-29.8).lineTo(71.6,-27.8).curveTo(71.6,-23.8,71.4,-19.8).lineTo(71.2,-15.9).curveTo(70.2,-5,66.6,5.3).curveTo(64.9,10.5,62.5,15.5).lineTo(62.1,16.2).curveTo(60.8,18.9,59.2,21.5).lineTo(56.9,25.5).curveTo(52.2,32.7,46.1,39.1).lineTo(44.2,41).lineTo(41.9,43.1).lineTo(41.6,43.4).lineTo(36.3,47.9).curveTo(31.6,51.5,26.4,54.7).lineTo(22.9,56.7).lineTo(19.5,58.4).lineTo(18.4,58.8).curveTo(17.9,59,17.3,59.3).curveTo(15.2,60.3,13,61.1).lineTo(12.2,61.4).lineTo(11.3,61.8).lineTo(8.6,62.8).curveTo(4.6,64,0.5,65).curveTo(-6.1,66.6,-13,67.2).lineTo(-13.6,67.2).lineTo(-16.9,67.3).lineTo(-21,67.4).lineTo(-24.6,67.4).closePath();
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.2,y:14.7}).wait(1).to({graphics:mask_graphics_1,x:14.8,y:17.3}).wait(1).to({graphics:mask_graphics_2,x:17.2,y:18.9}).wait(1).to({graphics:mask_graphics_3,x:19.2,y:20.7}).wait(1).to({graphics:mask_graphics_4,x:21.3,y:22.4}).wait(1).to({graphics:mask_graphics_5,x:23.4,y:24.2}).wait(1).to({graphics:mask_graphics_6,x:25.5,y:25.2}).wait(1).to({graphics:mask_graphics_7,x:27.5,y:23.6}).wait(1).to({graphics:mask_graphics_8,x:29.6,y:22.1}).wait(1).to({graphics:mask_graphics_9,x:31.8,y:19.8}).wait(1).to({graphics:mask_graphics_10,x:34.4,y:15.5}).wait(1).to({graphics:mask_graphics_11,x:37.4,y:11.4}).wait(1).to({graphics:mask_graphics_12,x:40.5,y:7.4}).wait(1).to({graphics:mask_graphics_13,x:43.9,y:3.5}).wait(1));
    
        // Layer 1
        this.instance = new lib.Tween3("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(25.5,22.1);
    
        var maskedShapeInstanceList = [this.instance];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0.2,51,45.1);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-26.5,130.8,1,1,-8,0,0,-26.4,130.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-28.5,regY:-22.1,rotation:-7.8,x:-49.2,y:-20.4},0).wait(1).to({rotation:-7.1,x:-47.4,y:-20.7},0).wait(1).to({rotation:-6.1,x:-44.8,y:-21},0).wait(1).to({rotation:-4.8,x:-41.4,y:-21.4},0).wait(1).to({rotation:-3.4,x:-37.5,y:-21.7},0).wait(1).to({rotation:-1.8,x:-33.3,y:-22},0).wait(1).to({rotation:-0.1,x:-28.9,y:-22.1},0).wait(1).to({rotation:1.5,x:-24.5},0).wait(1).to({rotation:3.2,x:-20.2,y:-22},0).wait(1).to({rotation:4.7,x:-16.2,y:-21.8},0).wait(1).to({rotation:6,x:-12.7,y:-21.6},0).wait(1).to({rotation:7,x:-9.9,y:-21.3},0).wait(1).to({rotation:7.7,x:-8,y:-21.1},0).wait(1).to({regX:-26.5,regY:130.9,rotation:8,x:-26.5,y:130.8},0).wait(1).to({regX:-28.5,regY:-22.1,rotation:7.8,x:-7.9,y:-21},0).wait(1).to({rotation:7.1,x:-9.7,y:-21.2},0).wait(1).to({rotation:6.1,x:-12.4,y:-21.5},0).wait(1).to({rotation:4.8,x:-15.7,y:-21.8},0).wait(1).to({rotation:3.4,x:-19.6,y:-22},0).wait(1).to({rotation:1.8,x:-23.8,y:-22.2},0).wait(1).to({rotation:0.1,x:-28.3,y:-22.1},0).wait(1).to({rotation:-1.5,x:-32.7,y:-22},0).wait(1).to({rotation:-3.2,x:-36.9,y:-21.8},0).wait(1).to({rotation:-4.6,x:-40.9,y:-21.5},0).wait(1).to({rotation:-6,x:-44.4,y:-21.1},0).wait(1).to({rotation:-7,x:-47.2,y:-20.7},0).wait(1).to({rotation:-7.7,x:-49.1,y:-20.4},0).wait(1).to({regX:-26.4,regY:130.9,rotation:-8,x:-26.5,y:130.8},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-148.9,-50,201.6,62.3);
    
    
    (lib.co = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Tween17("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-0.6,-29.7,1,1,0,0,0,-5.7,4.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60,x:24.2,y:-28.5},14).to({startPosition:0},16).to({rotation:0,x:-0.6,y:-29.7},5).to({regY:5,rotation:-45,x:-13.5,y:-28.4},5).to({startPosition:0},9).to({regY:4.9,rotation:0,x:-0.6,y:-29.7},20).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.Tween18("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.8,-29.7,1,1,0,0,0,5,4.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:4.2,rotation:30,x:24.1,y:-28.6},14).to({startPosition:0},16).to({regY:4.3,rotation:0,x:-0.8,y:-29.7},5).to({regX:5.1,regY:4.2,rotation:-45,x:-13.6,y:-28.5},5).to({startPosition:0},9).to({regX:5,regY:4.3,rotation:0,x:-0.8,y:-29.7},20).wait(1));
    
        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(0,-34.4).lineTo(0,34.4);
        this.shape.setTransform(-0.8,4.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-0.8,34.4).curveTo(-1,24.3,-0.9,14).curveTo(-0.6,-10.4,1,-34.4);
        this.shape_1.setTransform(0,4.3);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-1.7,34.3).curveTo(-2,24.3,-1.8,13.8).curveTo(-1.2,-10.7,1.9,-34.3);
        this.shape_2.setTransform(0.9,4.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-2.5,34.2).curveTo(-3.1,24.3,-2.7,13.6).curveTo(-1.9,-11,2.8,-34.2);
        this.shape_3.setTransform(1.7,4.4);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-3.4,34.2).curveTo(-4.1,24.4,-3.6,13.4).curveTo(-2.5,-11.3,3.8,-34.2);
        this.shape_4.setTransform(2.6,4.4);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-4.2,34.1).curveTo(-5.1,24.4,-4.5,13.3).curveTo(-3.2,-11.6,4.7,-34.1);
        this.shape_5.setTransform(3.4,4.5);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-5,34).curveTo(-6.1,24.4,-5.3,13.1).curveTo(-3.7,-12,5.7,-34);
        this.shape_6.setTransform(4.2,4.6);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-5.9,34).curveTo(-7.1,24.4,-6.2,12.9).curveTo(-4.4,-12.2,6.6,-34);
        this.shape_7.setTransform(5.1,4.6);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-6.7,34).curveTo(-8.2,24.4,-7.1,12.7).curveTo(-5,-12.5,7.6,-34);
        this.shape_8.setTransform(5.9,4.7);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-7.5,33.9).curveTo(-9.2,24.4,-8,12.5).curveTo(-5.6,-12.8,8.5,-33.9);
        this.shape_9.setTransform(6.7,4.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-8.4,33.8).curveTo(-10.2,24.4,-8.9,12.3).curveTo(-6.3,-13.1,9.4,-33.8);
        this.shape_10.setTransform(7.6,4.8);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-9.2,33.8).curveTo(-11.2,24.5,-9.8,12.1).curveTo(-6.9,-13.4,10.4,-33.8);
        this.shape_11.setTransform(8.4,4.8);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-10.1,33.7).curveTo(-12.3,24.5,-10.7,11.9).curveTo(-7.5,-13.7,11.4,-33.7);
        this.shape_12.setTransform(9.3,4.9);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-10.9,33.6).curveTo(-13.3,24.5,-11.6,11.7).curveTo(-8.1,-14.1,12.3,-33.6);
        this.shape_13.setTransform(10.1,5);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(13.2,-33.6).curveTo(-8.8,-14.3,-12.5,11.6).curveTo(-14.3,24.5,-11.8,33.6);
        this.shape_14.setTransform(11,5);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-11.8,33.6).curveTo(-14.3,24.5,-12.5,11.6).curveTo(-8.8,-14.3,13.2,-33.6);
        this.shape_15.setTransform(11,5);
        this.shape_15._off = true;
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-9.4,33.8).curveTo(-11.5,24.4,-10,12).curveTo(-7,-13.5,10.6,-33.8);
        this.shape_16.setTransform(8.6,4.9);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-7.1,33.9).curveTo(-8.6,24.4,-7.5,12.6).curveTo(-5.3,-12.6,7.9,-33.9);
        this.shape_17.setTransform(6.3,4.7);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-4.7,34.1).curveTo(-5.7,24.4,-5,13.1).curveTo(-3.5,-11.8,5.3,-34.1);
        this.shape_18.setTransform(3.9,4.5);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-2.4,34.2).curveTo(-2.9,24.3,-2.5,13.7).curveTo(-1.8,-11,2.6,-34.2);
        this.shape_19.setTransform(1.6,4.4);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(0.8,34.2).curveTo(1.5,22.7,1.5,10.6).curveTo(1.6,-13,-1.6,-34.2);
        this.shape_20.setTransform(-1.6,4.4);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(1.7,34).curveTo(3,22.8,3.1,10.2).curveTo(3.2,-14.3,-3.1,-34);
        this.shape_21.setTransform(-2.5,4.6);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(2.6,33.9).curveTo(4.6,22.8,4.6,9.8).curveTo(4.8,-15.7,-4.6,-33.9);
        this.shape_22.setTransform(-3.4,4.8);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(3.4,33.7).curveTo(6.1,22.8,6.2,9.5).curveTo(6.4,-16.9,-6.2,-33.7);
        this.shape_23.setTransform(-4.2,4.9);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(-7.7,-33.5).curveTo(8,-18.2,7.7,9.2).curveTo(7.6,22.9,4.3,33.5);
        this.shape_24.setTransform(-5.1,5.1);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(4.3,33.5).curveTo(7.6,22.9,7.7,9.2).curveTo(8,-18.2,-7.7,-33.5);
        this.shape_25.setTransform(-5.1,5.1);
        this.shape_25._off = true;
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(4,33.5).curveTo(7.2,22.9,7.3,9.3).curveTo(7.6,-17.9,-7.4,-33.5);
        this.shape_26.setTransform(-4.8,5.1);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(3.8,33.6).curveTo(6.8,22.9,6.9,9.4).curveTo(7.2,-17.6,-7,-33.6);
        this.shape_27.setTransform(-4.6,5);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(3.6,33.6).curveTo(6.4,22.9,6.6,9.4).curveTo(6.8,-17.2,-6.6,-33.6);
        this.shape_28.setTransform(-4.4,5);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(3.2,33.7).curveTo(5.7,22.8,5.8,9.6).curveTo(6,-16.6,-5.8,-33.7);
        this.shape_29.setTransform(-4,4.9);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(3,33.8).curveTo(5.3,22.8,5.4,9.7).curveTo(5.6,-16.3,-5.4,-33.8);
        this.shape_30.setTransform(-3.8,4.8);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(2.8,33.8).curveTo(4.9,22.8,5,9.8).curveTo(5.2,-15.9,-5,-33.8);
        this.shape_31.setTransform(-3.6,4.8);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(2.3,33.9).curveTo(4.1,22.8,4.2,9.9).curveTo(4.4,-15.3,-4.3,-33.9);
        this.shape_32.setTransform(-3.1,4.7);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(2.1,34).curveTo(3.8,22.8,3.9,10).curveTo(4,-15,-3.9,-34);
        this.shape_33.setTransform(-2.9,4.7);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(1.9,34).curveTo(3.4,22.8,3.5,10.1).curveTo(3.6,-14.7,-3.5,-34);
        this.shape_34.setTransform(-2.7,4.6);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(1.5,34.1).curveTo(2.6,22.7,2.7,10.3).curveTo(2.8,-14,-2.7,-34.1);
        this.shape_35.setTransform(-2.3,4.5);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(1.3,34.1).curveTo(2.3,22.7,2.3,10.4).curveTo(2.4,-13.7,-2.3,-34.1);
        this.shape_36.setTransform(-2.1,4.5);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(1.1,34.2).curveTo(1.9,22.7,1.9,10.5).curveTo(2,-13.4,-1.9,-34.2);
        this.shape_37.setTransform(-1.9,4.4);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(0.6,34.3).curveTo(1.1,22.7,1.1,10.7).curveTo(1.2,-12.7,-1.2,-34.3);
        this.shape_38.setTransform(-1.4,4.3);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(0.4,34.3).curveTo(0.8,22.6,0.8,10.7).curveTo(0.8,-12.4,-0.8,-34.3);
        this.shape_39.setTransform(-1.2,4.3);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.beginFill().beginStroke("#7DA439").setStrokeStyle(1,1,1).moveTo(0.2,34.4).curveTo(0.4,22.6,0.4,10.8).curveTo(0.4,-12.1,-0.4,-34.4);
        this.shape_40.setTransform(-1,4.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape}]},1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(15).to({_off:false},0).wait(14).to({_off:true},1).wait(40));
        this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(41).to({_off:false},0).wait(7).to({_off:true},1).wait(21));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.8,-39.5,21.7,79.2);
    
    
    (lib.cay2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Tween19("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-0.6,-30.7,0.855,0.855,112.5,0,0,-4.9,4.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5512.5},139).wait(1));
    
        // Layer 3
        this.instance_1 = new lib.Tween19("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.7,-30.6,1,1,0,0,0,-4.9,4.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5400},139).wait(1));
    
        // Layer 2
        this.instance_2 = new lib.Tween20("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-0.7,-30.6,1,1,0,0,0,4.9,4.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5400},139).wait(1));
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#7DA439").beginStroke().moveTo(-0.5,36).lineTo(-0.5,-36).lineTo(0.5,-36).lineTo(0.5,36).closePath();
        this.shape.setTransform(-0.6,5.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.5,-39.5,20.2,80.7);
    
    
    (lib.Symbol20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.uichacha("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(44.9,187.5,1,1,0,0,0,-5.9,-23.1);
    
        this.instance_1 = new lib.co("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(218.8,103.7,0.375,0.375,0,0,180,7,-0.2);
    
        this.instance_2 = new lib.co("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(274.3,168,0.301,0.334,0,0,0,6.8,-0.3);
    
        this.instance_3 = new lib.co("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(133.1,187.7,0.415,0.415,0,0,180,7,-0.2);
    
        this.instance_4 = new lib.co("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(215.9,199.7,0.65,0.65,0,0,180,6.9,-0.2);
    
        this.instance_5 = new lib.co("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(25.7,170.6,0.65,0.65,0,0,0,6.9,-0.3);
    
        this.instance_6 = new lib.cay2("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(3.2,172.6,0.319,0.319,0,0,0,-0.5,0.7);
    
        this.instance_7 = new lib.cay2("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(18,132.2,0.319,0.319,0,0,0,-0.3,0.8);
    
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-6.9,2.9).curveTo(-6.9,2.4,-6.3,2.4).lineTo(-0.9,1.7).curveTo(4.8,0.3,5.8,-3).curveTo(6,-3.5,6.5,-3.3).curveTo(6.6,-3.3,6.6,-3.3).curveTo(6.6,-3.3,6.7,-3.2).curveTo(6.7,-3.2,6.7,-3.2).curveTo(6.8,-3.1,6.8,-3.1).curveTo(6.8,-3,6.8,-3).curveTo(6.9,-3,6.9,-2.9).curveTo(6.9,-2.9,6.8,-2.8).curveTo(6.8,-2.8,6.8,-2.7).curveTo(5.5,1.1,-0.4,2.6).lineTo(-6.3,3.4).curveTo(-6.9,3.4,-6.9,2.9).closePath();
        this.shape.setTransform(41,133.3,0.65,0.65);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-6.8,2.1).curveTo(-7.3,2,-7.2,1.5).curveTo(-7.1,1,-6.6,1.1).lineTo(-1.1,1.3).curveTo(4.6,0.9,6.3,-2.2).curveTo(6.5,-2.6,7,-2.4).curveTo(7.4,-2.1,7.2,-1.7).curveTo(4.9,2.4,-2.7,2.4).curveTo(-5.7,2.4,-6.8,2.1).closePath();
        this.shape_1.setTransform(58,128,0.65,0.65);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-4.9,1.5).lineTo(-7,1).curveTo(-7.5,0.8,-7.4,0.4).curveTo(-7.2,-0.2,-6.7,0).lineTo(-1.3,0.9).curveTo(4.5,1.2,6.5,-1.7).curveTo(6.8,-2.1,7.2,-1.8).curveTo(7.6,-1.6,7.3,-1.1).curveTo(5.2,1.9,-0.4,1.9).curveTo(-2.5,1.9,-4.9,1.5).closePath();
        this.shape_2.setTransform(75.8,123.1,0.65,0.65);
    
        this.instance_8 = new lib.Tween21("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(39.7,132.3,0.65,0.65);
    
        this.instance_9 = new lib.Tween22("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(57.3,126.8,0.65,0.65);
    
        this.instance_10 = new lib.Tween23("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(75.5,121.5,0.65,0.65);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFEBE4").beginStroke().moveTo(0.7,10.9).curveTo(0.3,10.9,0.2,10.4).lineTo(-1.2,-10.4).curveTo(-1.2,-10.4,-1.2,-10.5).curveTo(-1.2,-10.5,-1.2,-10.6).curveTo(-1.2,-10.6,-1.1,-10.6).curveTo(-1.1,-10.7,-1.1,-10.7).curveTo(-1,-10.8,-1,-10.8).curveTo(-1,-10.8,-0.9,-10.8).curveTo(-0.9,-10.8,-0.8,-10.9).curveTo(-0.8,-10.9,-0.7,-10.9).curveTo(-0.3,-11,-0.2,-10.4).lineTo(1.2,10.3).curveTo(1.3,10.9,0.7,10.9).closePath();
        this.shape_3.setTransform(79.3,132.1,0.65,0.65);
    
        this.instance_11 = new lib.Group_2_1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(75.7,126.8,0.65,0.65,0,0,0,7,5.7);
        this.instance_11.alpha = 0.199;
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#DAA54A").beginStroke().moveTo(-1.8,17.1).curveTo(-4.2,16.7,-5,14.8).lineTo(-5.3,13).lineTo(-5.9,-10.9).curveTo(-8,-13,-7.1,-14.8).lineTo(-5.9,-16.2).curveTo(-5.2,-17.5,0.4,-17.2).curveTo(5.7,-17,6.9,-16.3).curveTo(7.7,-15.8,7.2,-14.4).lineTo(6.3,-12).curveTo(5.5,-8.8,6.6,2.1).curveTo(7.2,7.8,7.1,10.6).curveTo(7.1,12.4,6.5,14.6).curveTo(6.1,16.3,3.6,17).curveTo(2.3,17.3,0.9,17.3).curveTo(-0.4,17.3,-1.8,17.1).closePath();
        this.shape_4.setTransform(75.8,132.2,0.65,0.65);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#FFEBE4").beginStroke().moveTo(1.9,10.7).curveTo(1.6,10.7,1.4,10.3).lineTo(-2.4,-10.1).curveTo(-2.5,-10.6,-2,-10.7).curveTo(-1.5,-10.8,-1.4,-10.3).lineTo(2.4,10.1).curveTo(2.5,10.6,2,10.7).closePath();
        this.shape_5.setTransform(62.6,136.7,0.65,0.65);
    
        this.instance_12 = new lib.Group_2_0();
        this.instance_12.parent = this;
        this.instance_12.setTransform(58,131.5,0.65,0.65,0,0,0,6.9,5.8);
        this.instance_12.alpha = 0.199;
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#4E81DE").beginStroke().moveTo(0.5,17.2).curveTo(-1.9,17.1,-2.9,15.4).lineTo(-3.4,13.6).lineTo(-6.8,-10.1).curveTo(-9.1,-11.9,-8.5,-13.8).lineTo(-7.4,-15.3).curveTo(-6.9,-16.7,-1.3,-17.1).curveTo(3.9,-17.5,5.3,-17).curveTo(6.1,-16.6,5.7,-15.1).lineTo(5.1,-12.6).curveTo(4.7,-9.5,7.1,1.4).curveTo(8.4,7,8.6,9.7).curveTo(8.8,11.6,8.5,13.8).curveTo(8.2,15.6,5.9,16.5).curveTo(4,17.3,1.4,17.3).lineTo(0.5,17.2).closePath();
        this.shape_6.setTransform(58.9,137.2,0.65,0.65);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#FFEBE4").beginStroke().moveTo(3.2,9.9).lineTo(-4,-9.6).curveTo(-4.2,-10.1,-3.8,-10.2).curveTo(-3.3,-10.4,-3.1,-9.9).lineTo(4.1,9.6).curveTo(4.3,10.1,3.8,10.2).lineTo(3.6,10.3).curveTo(3.3,10.3,3.2,9.9).closePath();
        this.shape_7.setTransform(47,141.2,0.65,0.65);
    
        this.instance_13 = new lib.Group_2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(41.5,136.3,0.65,0.65,0,0,0,7.3,6.1);
        this.instance_13.alpha = 0.199;
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#43CDD5").beginStroke().moveTo(-0.3,16).lineTo(-1,14.4).lineTo(-8.4,-8.5).curveTo(-11,-9.9,-10.7,-11.8).lineTo(-9.9,-13.5).curveTo(-9.6,-14.9,-4.1,-16.3).curveTo(0.9,-17.5,2.4,-17.2).curveTo(3.2,-17,3.2,-15.5).lineTo(3,-12.9).curveTo(3.1,-9.8,7.3,0.5).curveTo(9.5,5.8,10.2,8.5).curveTo(10.6,10.3,10.7,12.5).curveTo(10.8,14.3,8.6,15.7).curveTo(6.6,16.9,3.5,17.3).lineTo(2.7,17.3).curveTo(0.8,17.3,-0.3,16).closePath();
        this.shape_8.setTransform(43.4,142,0.65,0.65);
    
        this.instance_14 = new lib.Symbol2("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(104.8,42.5,0.65,0.65,0,0,0,30.2,14);
        this.instance_14.alpha = 0.34;
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#D2FCFF").beginStroke().moveTo(-10.7,9.3).curveTo(-11.9,8.9,-12,6.9).curveTo(-12.1,5.3,-11.3,2.7).curveTo(-10.5,0.2,-9.4,-2.2).curveTo(-8.4,-4.1,-4.6,-6.7).lineTo(-1,-8.9).lineTo(1.6,-9.4).curveTo(2.9,-9.5,7.7,-8.9).curveTo(12.5,-8.4,12,-6.4).curveTo(11.7,-5.4,8.2,-1.8).curveTo(2.4,4.1,-5.4,8).curveTo(-8.3,9.4,-9.9,9.4).lineTo(-10.7,9.3).closePath();
        this.shape_9.setTransform(143.7,81.8,0.65,0.65);
    
        this.instance_15 = new lib.Symbol1("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(150.1,80.3,0.65,0.65,0,0,0,18.6,8.7);
        this.instance_15.alpha = 0.672;
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#D2FCFF").beginStroke().moveTo(-3.9,1.8).curveTo(-6.7,1.6,-5.8,0.3).lineTo(-4.4,-1).curveTo(-1,-2.4,2.2,-2).curveTo(5,-1.7,5.7,-0.4).curveTo(6.3,0.6,5.7,1.2).curveTo(5.2,1.7,3.8,2).curveTo(3.1,2.1,1.6,2.1).curveTo(-0.4,2.1,-3.9,1.8).closePath();
        this.shape_10.setTransform(149.6,74,0.65,0.65);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#52A3D1").beginStroke().moveTo(-2.4,6.3).curveTo(-7.7,6,-10.9,4.2).curveTo(-17.5,0.6,-19,-2.4).curveTo(-20.1,-4.3,-18.6,-5.3).curveTo(-17.1,-6.3,-14.8,-3.4).lineTo(-11,-0.6).curveTo(-6.3,2.1,-2.1,1.8).curveTo(9.1,1.2,13.1,-3).curveTo(15.7,-5.8,18.3,-6.3).curveTo(20.8,-6.8,17.8,-3.1).curveTo(14.5,1.2,12.6,2.7).curveTo(10.3,4.5,6.6,5.5).curveTo(3.6,6.4,-0.1,6.4).lineTo(-2.4,6.3).closePath();
        this.shape_11.setTransform(150.6,97.5,0.65,0.65);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#2B4BAB").beginStroke().moveTo(-0.3,10).curveTo(-4.7,9.5,-8.7,7.9).curveTo(-13,6.2,-15.6,3.8).curveTo(-18.3,1.3,-20,-1.5).curveTo(-21.6,-4.2,-21.7,-6.2).curveTo(-21.8,-8.8,-20.1,-9.4).curveTo(-17.9,-10.4,-12.7,-7.4).curveTo(-7.7,-5.9,-4.1,-5.5).curveTo(0.3,-5,5.5,-5.7).curveTo(10.4,-6.3,11.8,-6.8).lineTo(14.4,-8.4).curveTo(17.1,-10,19.2,-10.2).curveTo(22.2,-10.5,21.6,-7).curveTo(20.7,-2.6,19.1,-0).curveTo(17.2,3.2,13.1,5.8).curveTo(8.4,8.9,6.4,9.6).curveTo(4.6,10.2,2.3,10.2).curveTo(1,10.2,-0.3,10).closePath();
        this.shape_12.setTransform(150.2,95.5,0.65,0.65);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#FFF0F9").beginStroke().moveTo(-17.4,15.1).curveTo(-19.4,14.4,-19.5,11.2).curveTo(-19.6,8.7,-18.3,4.4).curveTo(-17.1,0.3,-15.2,-3.5).curveTo(-13.7,-6.6,-7.5,-10.8).lineTo(-1.6,-14.4).lineTo(2.6,-15.3).curveTo(4.8,-15.4,12.5,-14.5).curveTo(20.3,-13.6,19.4,-10.4).curveTo(18.9,-8.7,13.3,-2.9).curveTo(3.9,6.7,-8.7,13).curveTo(-13.5,15.3,-16.1,15.3).curveTo(-16.9,15.3,-17.4,15.1).closePath();
        this.shape_13.setTransform(93.3,41.7,0.65,0.65);
    
        this.instance_16 = new lib.Symbol1copy();
        this.instance_16.parent = this;
        this.instance_16.setTransform(103,53.7,1,1,0,0,0,25.5,22.5);
    
        this.instance_17 = new lib.Symbol5();
        this.instance_17.parent = this;
        this.instance_17.setTransform(150.5,90.9,1,1,0,0,0,15.7,13);
    
        this.instance_18 = new lib.Tween6("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(150.7,128.3,0.65,0.65,-75);
        this.instance_18.filters = [new cjs.ColorFilter(1, 1, 1, 1, 80, 255, 143, 0)];
        this.instance_18.cache(-4,-5,8,11);
    
        this.instance_19 = new lib.Bitmap2();
        this.instance_19.parent = this;
        this.instance_19.setTransform(61.1,0);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#FFC44B").beginStroke().moveTo(0.3,4.4).lineTo(-1.1,3.5).curveTo(-2.3,1.6,-2.3,-3.7).curveTo(-2.3,-5.3,-1,-4.3).curveTo(-0,-3.5,1,-2).curveTo(1.6,-1,2,1.1).curveTo(2.5,3.3,2.1,4.2).curveTo(1.9,4.7,1.4,4.7).curveTo(0.9,4.7,0.3,4.4).closePath();
        this.shape_14.setTransform(202.3,147.3,0.65,0.65);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#E57E24").beginStroke().moveTo(2.6,11.6).curveTo(1.5,10.8,-2,4.4).curveTo(-4.5,-0.3,-6.2,-5.9).lineTo(-7.5,-10.6).curveTo(-7.7,-11.2,-6.4,-11.7).curveTo(-5.1,-12.2,-4.3,-11.6).curveTo(-2.5,-10.2,3,-1.6).curveTo(5.3,2.1,6.6,5).curveTo(7.7,7.9,7.4,9).curveTo(5.2,11.9,3.6,11.9).curveTo(3,11.9,2.6,11.6).closePath();
        this.shape_15.setTransform(204.1,151.5,0.65,0.65);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#B15C13").beginStroke().moveTo(0.8,13.6).curveTo(-3.4,9.9,-6.5,-2.3).lineTo(-8.7,-13.8).lineTo(-4.9,-13.7).curveTo(-2.4,-13.4,-0.9,-12).curveTo(0.8,-10.3,4.9,-2.3).curveTo(9,5.7,8.7,6.9).curveTo(7.8,9.6,5.1,12).curveTo(3,13.8,1.6,13.8).curveTo(1.2,13.8,0.8,13.6).closePath();
        this.shape_16.setTransform(203.9,152.5,0.65,0.65);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#FEC54B").beginStroke().moveTo(-0.3,4.8).curveTo(-1,3.8,-1.5,2.2).curveTo(-2.1,-0.3,-2.5,-3.2).lineTo(-2.8,-5.5).lineTo(-2.6,-5.6).lineTo(-0.6,-3.9).curveTo(1.6,-1.7,2.4,1.2).curveTo(3,3.4,2.6,4.3).curveTo(2.4,4.9,1.3,5.5).lineTo(0.8,5.6).curveTo(0.3,5.6,-0.3,4.8).closePath();
        this.shape_17.setTransform(190.8,148.6,0.65,0.65);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#E57E24").beginStroke().moveTo(-0.9,10.4).curveTo(-6.8,-2.9,-7.8,-11.4).curveTo(-8.1,-14,-7.9,-15.9).lineTo(-7.6,-17.2).curveTo(-4,-15.7,-0.6,-9.2).curveTo(1.9,-4.6,6.5,7.5).curveTo(9.6,15.8,6.1,17).curveTo(5.7,17.2,5.2,17.2).curveTo(2.1,17.2,-0.9,10.4).closePath();
        this.shape_18.setTransform(193.9,155.6,0.65,0.65);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#FFC44B").beginStroke().moveTo(-1.7,0.5).curveTo(-2.7,-5.3,-1.6,-4.8).curveTo(0.4,-3.9,1.6,0).curveTo(2.8,3.8,1.6,4.5).curveTo(1.1,4.8,0.6,4.8).curveTo(-1,4.8,-1.7,0.5).closePath();
        this.shape_19.setTransform(181.8,155.5,0.65,0.65);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#B15C13").beginStroke().moveTo(0.1,16.9).curveTo(-0.6,16,-1.6,13.4).lineTo(-3.6,7.9).curveTo(-4.8,4.7,-6.6,-1.9).curveTo(-8.5,-8.6,-9.1,-12).curveTo(-9.7,-14.8,-8.6,-16.9).lineTo(-7.5,-18.4).curveTo(-4.8,-18.6,-0.9,-10.9).curveTo(0.5,-8.2,4.8,2.3).lineTo(8.3,10.5).curveTo(9.5,13.5,9.2,14.6).curveTo(7.1,18.3,3.9,18.4).lineTo(3.8,18.4).curveTo(1.4,18.4,0.1,16.9).closePath();
        this.shape_20.setTransform(193.8,155.8,0.65,0.65);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#EA842D").beginStroke().moveTo(-0.8,9.9).curveTo(-1.8,8.2,-3,5.7).curveTo(-5.2,0.5,-5.5,-3.9).curveTo(-5.8,-8.2,-5.8,-11.5).lineTo(-5.7,-13.9).lineTo(-4.1,-13.3).curveTo(-2.3,-12.3,-1.7,-11.1).lineTo(0.3,-7.6).curveTo(1.9,-5,2.8,-2.2).curveTo(4.5,2.5,5.5,7.3).curveTo(6.3,10.8,4.4,13.1).curveTo(3.8,13.9,3.1,13.9).curveTo(1.4,13.9,-0.8,9.9).closePath();
        this.shape_21.setTransform(183.6,160.5,0.65,0.65);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.beginFill("#B15C13").beginStroke().moveTo(-0.4,15.6).curveTo(-1.6,14.1,-3.3,10.5).curveTo(-8.2,-0.9,-6.7,-10.2).curveTo(-6.2,-13.1,-5.2,-15.4).lineTo(-4.3,-17.1).curveTo(-1.5,-15.1,0.7,-10.8).curveTo(2.1,-8,4,-2.6).curveTo(5.3,1.2,6.2,6.7).curveTo(7,11.1,7.1,13.7).curveTo(7.1,15.6,5.4,16.5).curveTo(4.1,17.1,2.4,17.1).lineTo(2.3,17.1).curveTo(0.9,17.1,-0.4,15.6).closePath();
        this.shape_22.setTransform(183.5,161,0.65,0.65);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.beginFill("#E57E24").beginStroke().moveTo(-24.5,11).curveTo(-13.6,8.8,5.3,-3.2).lineTo(22.1,-14.8).curveTo(22.6,-14.9,23.8,-14.4).lineTo(24.9,-13.8).curveTo(18.7,-5.1,-3.7,5.8).curveTo(-10.7,9.2,-18.4,12.4).lineTo(-24.8,14.9).closePath();
        this.shape_23.setTransform(192.7,155.3,0.65,0.65);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.beginFill("#B4651E").beginStroke().moveTo(-25.7,9.2).curveTo(-14.2,5.8,4.9,-5.9).lineTo(21.7,-17).curveTo(24.2,-16.5,25.6,-14.9).curveTo(26.3,-14,26.5,-13.3).curveTo(21.6,-5,-2.9,6.8).curveTo(-10.6,10.5,-19.3,14.1).lineTo(-26.5,17).closePath();
        this.shape_24.setTransform(193.1,156.6,0.65,0.65);
    
        this.instance_20 = new lib.Symbol16();
        this.instance_20.parent = this;
        this.instance_20.setTransform(194.4,158.8,1,1,0,0,0,18.9,15.2);
        this.instance_20.alpha = 0;
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.beginFill("#442A05").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape_25.setTransform(194.4,158.9,0.65,0.65);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.beginFill().beginStroke("#2A2761").setStrokeStyle(1,1,1).moveTo(-18.7,-46.5).lineTo(-16.1,-47.7).curveTo(-13,-49,-10.3,-49.4).curveTo(-1.8,-50.8,-1.3,-43.1).curveTo(-1.1,-40.9,-0.9,-34.9).curveTo(-0.8,-30.7,-0.4,-28.8).curveTo(0.5,-23.7,5.4,-23.6).curveTo(7.3,-23.6,11.1,-23.7).curveTo(14.2,-23.8,15.8,-23.2).curveTo(20.2,-21.8,18,-14.1).curveTo(15.9,-6.8,14.8,-4.1).curveTo(14.2,-2.8,14.1,-2.9).lineTo(3.1,30.8).curveTo(0.7,38.1,7.4,44.6).curveTo(10.7,47.8,14.5,49.6);
        this.shape_26.setTransform(138,79.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.instance_20},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_15},{t:this.shape_9},{t:this.instance_14},{t:this.shape_8},{t:this.instance_13},{t:this.shape_7},{t:this.shape_6},{t:this.instance_12},{t:this.shape_5},{t:this.shape_4},{t:this.instance_11},{t:this.shape_3},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,-10.6,275.5,236.6), null);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween48();
        this.instance.parent = this;
        this.instance.setTransform(8.4,2.8,0.636,0.636);
        this.instance.alpha = 0.762;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.262},79).to({alpha:0.68},19).to({scaleX:0.64,scaleY:0.64,alpha:0.762},51).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(3.2,0.9,10.2,3.8);
    
    
    (lib.fbhovering = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 9
        this.instance = new lib.fbbeam();
        this.instance.parent = this;
        this.instance.setTransform(-256.6,-64.9,0.3,0.3,0,0,0,0,-0.1);
        this.instance.alpha = 0;
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({guide:{path:[-256.4,-64.8,-252.2,-59.2,-244.4,-54.4,-238.7,-50.9,-232.1,-48.6]},alpha:1},6).to({guide:{path:[-232.2,-48.6,-219.7,-44.1,-204.4,-43.9]},alpha:0},6).to({_off:true},1).wait(143));
    
        // Symbol 1 ht
        this.instance_1 = new lib.fbSymbol1ea();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-204.2,-71.4,0.086,0.3,0,0,180);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,skewY:0,x:-258.7,y:-91.7,alpha:1},9,cjs.Ease.get(1)).to({guide:{path:[-258.6,-91.6,-261.7,-86.1,-261.7,-79.9,-261.7,-65,-244.4,-54.4,-227.8,-44.4,-204.6,-44]}},18).to({guide:{path:[-204.6,-43.9,-203.7,-43.9,-202.7,-43.9,-178.2,-43.9,-161,-54.4,-145.2,-64,-143.8,-77.2]}},17).to({_off:true},1).wait(126));
    
        // Layer 6
        this.instance_2 = new lib.fbbeam();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-256.6,-64.9,0.3,0.3,0,0,0,0,-0.1);
        this.instance_2.alpha = 0;
        this.instance_2.compositeOperation = "lighter";
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({guide:{path:[-256.4,-64.8,-252.2,-59.2,-244.4,-54.4,-238.7,-50.9,-232.1,-48.6]},alpha:1},6).to({guide:{path:[-232.2,-48.6,-219.7,-44.1,-204.4,-43.9]},alpha:0},6).to({_off:true},1).wait(182));
    
        // Symbol 1 ht
        this.instance_3 = new lib.fbSymbol1ht();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-204.2,-71.4,0.086,0.3,0,0,180);
        this.instance_3.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,skewY:0,x:-258.7,y:-91.7,alpha:1},9,cjs.Ease.get(1)).to({guide:{path:[-258.6,-91.6,-261.7,-86.1,-261.7,-79.9,-261.7,-65,-244.4,-54.4,-227.8,-44.4,-204.6,-44]}},18).to({guide:{path:[-204.6,-43.9,-203.7,-43.9,-202.7,-43.9,-178.2,-43.9,-161,-54.4,-145.2,-64,-143.8,-77.2]}},17).to({_off:true},1).wait(165));
    
        // Symbol 1 ht copy
        this.instance_4 = new lib.fbSymbol1ea();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-143.9,-77.3);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off:false},0).to({guide:{path:[-143.9,-77.2,-143.7,-78.5,-143.7,-79.8,-143.7,-94.7,-161,-105.3,-177.2,-115.2,-199.7,-115.8]}},19).to({guide:{path:[-199.6,-115.8,-201.1,-115.8,-202.7,-115.8,-227.1,-115.8,-244.4,-105.3,-254.4,-99.2,-258.6,-91.6]}},17).to({scaleX:0.09,scaleY:0.3,skewY:180,x:-204.2,y:-71.4,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(78));
    
        // Symbol 1 ht copy
        this.instance_5 = new lib.fbSymbol1ht();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-143.9,-77.3);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({guide:{path:[-143.9,-77.2,-143.7,-78.5,-143.7,-79.8,-143.7,-94.7,-161,-105.3,-177.2,-115.2,-199.7,-115.8]}},19).to({guide:{path:[-199.6,-115.8,-201.1,-115.8,-202.7,-115.8,-227.1,-115.8,-244.4,-105.3,-254.4,-99.2,-258.6,-91.6]}},17).to({scaleX:0.09,scaleY:0.3,skewY:180,x:-204.2,y:-71.4,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(117));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-206.3,-78,4.3,12.6);
    
    
    (lib.fbfbico = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* import com.greensock.*;
            import com.greensock.easing.*;
            import com.greensock.plugins.*;
            
            
            TweenPlugin.activate([DropShadowFilterPlugin, FrameLabelPlugin, ScrollRectPlugin, SetSizePlugin, 
              FramePlugin, RoundPropsPlugin, GlowFilterPlugin, BezierThroughPlugin, 
              ShortRotationPlugin, ColorMatrixFilterPlugin, TintPlugin, BevelFilterPlugin, 
              ColorTransformPlugin, DynamicPropsPlugin, VolumePlugin, VisiblePlugin, 
              RemoveTintPlugin, BezierPlugin, TransformMatrixPlugin, AutoAlphaPlugin, 
              QuaternionsPlugin, EndArrayPlugin, BlurFilterPlugin, HexColorsPlugin,
              PhysicsPropsPlugin, ShortRotationPlugin, TransformAroundPointPlugin, TransformAroundCenterPlugin,
              ThrowPropsPlugin,
              ScalePlugin]);
            OverwriteManager.init(OverwriteManager.AUTO);
            
            //TweenLite.to(mc, 1, {colorTransform:{exposure:1.2}});
            
            
            buttonMode = true;
            mouseChildren = false;
            hitArea = hit;
            addEventListener(MouseEvent.ROLL_OVER, btOver, false, 0, true);
            addEventListener(MouseEvent.ROLL_OUT, btOut, false, 0, true);
            addEventListener(MouseEvent.CLICK, btClick, false, 0, true);
            addEventListener(MouseEvent.MIDDLE_CLICK, btRClick, false, 0, true);
            addEventListener(MouseEvent.RIGHT_CLICK, btRClick, false, 0, true);
            
            
            
            var tt;
            var tw;
            var scx = box.scaleX;
            var scy = box.scaleY;
            var cg1 = box.cg1;
            var pt = new Point(0,36);
            var cb:int = randInt(1, 2);
            
            function randInt(low:int=0, high:int=100):int {
                return Math.floor(Math.random()*(1+high-low))+low;
            }
            
            if (cb == 1) {
                TweenLite.to(box.b2, 0, {alpha:0});
                TweenLite.to(box.b1, 0, {alpha:1});
            } else if (cb == 2) {
                TweenLite.to(box.b1, 0, {alpha:0});
                TweenLite.to(box.b2, 0, {alpha:1});
            }
            
            
            function btOver(e:Event):void {
                TweenLite.killTweensOf(cg1);
                TweenMax.killTweensOf(box);
                
                TweenLite.to(box, 1, {glowFilter:{color:0xffffff, alpha:1, blurX:5, blurY:5}});
                
                if (cb == 1) {
                    cb = 2;
                    TweenLite.to(box.b1, .5, {alpha:0});
                    TweenLite.to(box.b2, .5, {alpha:1});
                } else if (cb == 2) {
                    cb = 1;
                    TweenLite.to(box.b2, .5, {alpha:0});
                    TweenLite.to(box.b1, .5, {alpha:1});
                }
                
                
                cg1.gotoAndPlay(1);
                crGlow();
                
                TweenMax.to(box, 0, {scaleX:scx, scaleY:scy,
                            transformAroundPoint:{point:pt}});
                TweenMax.to(box, .5, {scaleX:scx * 1.1, scaleY:scy * .9, yoyo:true, repeat:-1, ease:Sine.easeInOut,
                            transformAroundPoint:{point:pt}});
            }
            
            function crGlow():void {
                tt = randInt(5, 20) / 10;
                TweenLite.to(cg1, tt, {x:"0", onComplete:glow});
            }
            
            function glow():void {
                cg1.gotoAndPlay(1);
                TweenLite.killTweensOf(cg1);
                crGlow();
            }
            
            function btOut(e:Event):void {
                TweenMax.killTweensOf(box);
                TweenLite.killTweensOf(cg1);
                TweenLite.to(box, 1, {glowFilter:{color:0xffffff, alpha:0, blurX:0, blurY:0}});
                TweenMax.to(box, .3, {scaleX:scx, scaleY:scy, ease:Sine.easeInOut,
                            transformAroundPoint:{point:pt}});
            }
            
            function btClick(e:Event):void {
                navigateToURL(new URLRequest('https://www.facebook.com/socnhicom'), '_blank');
                btOut(null);
            }
            
            function btRClick(e:Event):void {
                navigateToURL(new URLRequest('https://www.facebook.com/socnhicom'), '_blank');
                btOut(null);
            }
            */
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 2
        this.instance = new lib.fbhovering();
        this.instance.parent = this;
        this.instance.setTransform(205.3,42.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // box
        this.box = new lib.fbbox();
        this.box.parent = this;
        this.box.setTransform(-1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.box).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fbfbico, new cjs.Rectangle(-44.6,-39.4,93.1,87.8), null);
    
    
    (lib.thapTit_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (inited === undefined) {
                this.over = new Boolean(false);
                var inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
            }
        }
        this.frame_7 = function() {
            if (this.over == true) {
                this.stop();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));
    
        // Layer 1
        this.instance = new lib.thapTit_ani();
        this.instance.parent = this;
        this.instance.setTransform(14.8,38.5);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-28.5,regY:-20.7,x:-13.7,y:5.5,alpha:0.306},0).wait(1).to({y:-4.5,alpha:0.556},0).wait(1).to({y:-12.2,alpha:0.75},0).wait(1).to({y:-17.8,alpha:0.889},0).wait(1).to({y:-21.1,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:-28.5,regY:-20.7,x:-13.7,y:-21.9,alpha:0.972},0).wait(1).to({y:-21.1,alpha:0.889},0).wait(1).to({y:-19.7,alpha:0.75},0).wait(1).to({y:-17.8,alpha:0.556},0).wait(1).to({y:-15.3,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
    (lib.bachocnhi_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(140));
    
        // Layer 40
        this.instance = new lib.Symbol21();
        this.instance.parent = this;
        this.instance.setTransform(118.1,316.7,1,1,0,0,0,7.2,10.7);
    
        this.instance_1 = new lib.cay2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(162.3,420,0.65,0.65,0,0,0,-0.4,0.7);
    
        this.instance_2 = new lib.cay2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-69.3,395.1,0.65,0.65,0,0,0,-0.4,0.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(139));
    
        // Layer 39
        this.instance_3 = new lib.Symbol20();
        this.instance_3.parent = this;
        this.instance_3.setTransform(42.8,393.2,1,1,0,0,0,139.8,107.2);
        this.instance_3.cache(-2,-13,280,241);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(139));
    
        // Layer 27
        this.instance_4 = new lib.Tween32("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(20,459.2,0.796,0.796);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.Tween31("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-14.7,457.7,0.796,0.796,0,0,0,-14.8,15.8);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:20.3,y:456.6},4).to({x:20,y:459.2},5).to({x:20.3,y:456.6},7).to({_off:true},1).wait(74));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(113).to({_off:false},0).to({regX:-14.7,rotation:-13.4},7).to({regX:-14.8,rotation:0},6).to({regX:-14.7,rotation:-13.4},7).to({regX:-14.8,rotation:0},6).wait(1));
    
        // Layer 3
        this.instance_6 = new lib.Bitmap16();
        this.instance_6.parent = this;
        this.instance_6.setTransform(10.6,418.5,0.75,0.75);
    
        this.instance_7 = new lib.Bitmap17();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-49.5,412.4,0.75,0.75);
    
        this.instance_8 = new lib.Bitmap18();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-51.8,405.7,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},49).to({state:[]},17).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_8}]},8).wait(27));
    
        // uichacha copy
        this.instance_9 = new lib.uichacha("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-52.1,473.5,1,1,0,0,0,-5.9,-23.1);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regX:-6,x:8,y:479.6,mode:"independent"},47,cjs.Ease.get(0.43)).to({_off:true},1).wait(17).to({_off:false,skewY:180,x:69,mode:"synched",startPosition:0},0).to({regX:-6.1,regY:-23,x:3.5,y:474.3,mode:"independent"},38).to({_off:true},1).wait(35));
    
        // Layer 7
        this.instance_10 = new lib.shadow_1("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(37.1,490,0.456,0.662,0,0,0,39.7,4.5);
        this.instance_10.alpha = 0.68;
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).to({_off:true},17).wait(39).to({_off:false,x:-21.9,y:481.5},0).wait(8).to({x:-23.1,y:482.5},0).wait(27));
    
        // Layer 32
        this.instance_11 = new lib.cay2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(162.3,420,0.65,0.65,0,0,0,-0.4,0.7);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({regY:0.8,x:162.6,y:378.9},51).to({y:381.6},65).to({regY:0.7,y:420.2},22).wait(1));
    
        // Layer 31
        this.instance_12 = new lib.co("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(121.8,389.7,0.375,0.375,0,0,180,7,-0.2);
    
        this.instance_13 = new lib.co("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(177.3,454,0.301,0.334,0,0,0,6.8,-0.3);
    
        this.instance_14 = new lib.co("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(36.1,473.7,0.415,0.415,0,0,180,7,-0.2);
    
        this.instance_15 = new lib.co("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(118.9,485.7,0.65,0.65,0,0,180,6.9,-0.2);
    
        this.instance_16 = new lib.co("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-71.3,456.6,0.65,0.65,0,0,0,6.9,-0.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},1).wait(139));
    
        // Layer 30
        this.instance_17 = new lib.cay2("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(-93.8,458.6,0.319,0.319,0,0,0,-0.5,0.7);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(139));
    
        // Layer 29
        this.instance_18 = new lib.cay2("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(-79,418.2,0.319,0.319,0,0,0,-0.3,0.8);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(139));
    
        // Layer 28
        this.instance_19 = new lib.cay2();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-69.3,395.1,0.65,0.65,0,0,0,-0.4,0.8);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({x:-69,y:361.7},68).to({y:395.3},70).wait(1));
    
        // Layer 33
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-6.9,2.9).curveTo(-6.9,2.4,-6.3,2.4).lineTo(-0.9,1.7).curveTo(4.8,0.3,5.8,-3).curveTo(6,-3.5,6.5,-3.3).curveTo(6.6,-3.3,6.6,-3.3).curveTo(6.6,-3.3,6.7,-3.2).curveTo(6.7,-3.2,6.7,-3.2).curveTo(6.8,-3.1,6.8,-3.1).curveTo(6.8,-3,6.8,-3).curveTo(6.9,-3,6.9,-2.9).curveTo(6.9,-2.9,6.8,-2.8).curveTo(6.8,-2.8,6.8,-2.7).curveTo(5.5,1.1,-0.4,2.6).lineTo(-6.3,3.4).curveTo(-6.9,3.4,-6.9,2.9).closePath();
        this.shape.setTransform(-56,419.3,0.65,0.65);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-6.8,2.1).curveTo(-7.3,2,-7.2,1.5).curveTo(-7.1,1,-6.6,1.1).lineTo(-1.1,1.3).curveTo(4.6,0.9,6.3,-2.2).curveTo(6.5,-2.6,7,-2.4).curveTo(7.4,-2.1,7.2,-1.7).curveTo(4.9,2.4,-2.7,2.4).curveTo(-5.7,2.4,-6.8,2.1).closePath();
        this.shape_1.setTransform(-39,414,0.65,0.65);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FFEBE4").beginStroke().moveTo(-4.9,1.5).lineTo(-7,1).curveTo(-7.5,0.8,-7.4,0.4).curveTo(-7.2,-0.2,-6.7,0).lineTo(-1.3,0.9).curveTo(4.5,1.2,6.5,-1.7).curveTo(6.8,-2.1,7.2,-1.8).curveTo(7.6,-1.6,7.3,-1.1).curveTo(5.2,1.9,-0.4,1.9).curveTo(-2.5,1.9,-4.9,1.5).closePath();
        this.shape_2.setTransform(-21.2,409.1,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(139));
    
        // Layer 34
        this.instance_20 = new lib.Tween21("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(-57.3,418.3,0.65,0.65);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(25).to({x:-57,y:418.5},0).to({x:-59.3,y:412.7},6).to({x:-57,y:418.5},6).to({startPosition:0},77).to({x:-59.3,y:412.7},6).to({x:-57,y:418.5},6).wait(13));
    
        // Layer 36
        this.instance_21 = new lib.Tween22("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(-39.7,412.8,0.65,0.65);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(28).to({x:-39.4,y:413},0).to({x:-40.7,y:406.7},9).to({x:-39.4,y:413},5).to({startPosition:0},75).to({x:-40.7,y:406.7},9).to({x:-39.4,y:413},5).wait(8));
    
        // Layer 38
        this.instance_22 = new lib.Tween23("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(-21.5,407.5,0.65,0.65);
        this.instance_22._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).wait(31).to({x:-21.2,y:407.7},0).to({y:401.7},9).to({y:407.7},5).to({startPosition:0},76).to({y:401.7},9).to({y:407.7},5).wait(4));
    
        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFEBE4").beginStroke().moveTo(0.7,10.9).curveTo(0.3,10.9,0.2,10.4).lineTo(-1.2,-10.4).curveTo(-1.2,-10.4,-1.2,-10.5).curveTo(-1.2,-10.5,-1.2,-10.6).curveTo(-1.2,-10.6,-1.1,-10.6).curveTo(-1.1,-10.7,-1.1,-10.7).curveTo(-1,-10.8,-1,-10.8).curveTo(-1,-10.8,-0.9,-10.8).curveTo(-0.9,-10.8,-0.8,-10.9).curveTo(-0.8,-10.9,-0.7,-10.9).curveTo(-0.3,-11,-0.2,-10.4).lineTo(1.2,10.3).curveTo(1.3,10.9,0.7,10.9).closePath();
        this.shape_3.setTransform(-17.7,418.1,0.65,0.65);
    
        this.instance_23 = new lib.Group_2_1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(-21.3,412.8,0.65,0.65,0,0,0,7,5.7);
        this.instance_23.alpha = 0.199;
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#DAA54A").beginStroke().moveTo(-1.8,17.1).curveTo(-4.2,16.7,-5,14.8).lineTo(-5.3,13).lineTo(-5.9,-10.9).curveTo(-8,-13,-7.1,-14.8).lineTo(-5.9,-16.2).curveTo(-5.2,-17.5,0.4,-17.2).curveTo(5.7,-17,6.9,-16.3).curveTo(7.7,-15.8,7.2,-14.4).lineTo(6.3,-12).curveTo(5.5,-8.8,6.6,2.1).curveTo(7.2,7.8,7.1,10.6).curveTo(7.1,12.4,6.5,14.6).curveTo(6.1,16.3,3.6,17).curveTo(2.3,17.3,0.9,17.3).curveTo(-0.4,17.3,-1.8,17.1).closePath();
        this.shape_4.setTransform(-21.2,418.2,0.65,0.65);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#FFEBE4").beginStroke().moveTo(1.9,10.7).curveTo(1.6,10.7,1.4,10.3).lineTo(-2.4,-10.1).curveTo(-2.5,-10.6,-2,-10.7).curveTo(-1.5,-10.8,-1.4,-10.3).lineTo(2.4,10.1).curveTo(2.5,10.6,2,10.7).closePath();
        this.shape_5.setTransform(-34.4,422.7,0.65,0.65);
    
        this.instance_24 = new lib.Group_2_0();
        this.instance_24.parent = this;
        this.instance_24.setTransform(-39,417.5,0.65,0.65,0,0,0,6.9,5.8);
        this.instance_24.alpha = 0.199;
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#4E81DE").beginStroke().moveTo(0.5,17.2).curveTo(-1.9,17.1,-2.9,15.4).lineTo(-3.4,13.6).lineTo(-6.8,-10.1).curveTo(-9.1,-11.9,-8.5,-13.8).lineTo(-7.4,-15.3).curveTo(-6.9,-16.7,-1.3,-17.1).curveTo(3.9,-17.5,5.3,-17).curveTo(6.1,-16.6,5.7,-15.1).lineTo(5.1,-12.6).curveTo(4.7,-9.5,7.1,1.4).curveTo(8.4,7,8.6,9.7).curveTo(8.8,11.6,8.5,13.8).curveTo(8.2,15.6,5.9,16.5).curveTo(4,17.3,1.4,17.3).lineTo(0.5,17.2).closePath();
        this.shape_6.setTransform(-38.1,423.2,0.65,0.65);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#FFEBE4").beginStroke().moveTo(3.2,9.9).lineTo(-4,-9.6).curveTo(-4.2,-10.1,-3.8,-10.2).curveTo(-3.3,-10.4,-3.1,-9.9).lineTo(4.1,9.6).curveTo(4.3,10.1,3.8,10.2).lineTo(3.6,10.3).curveTo(3.3,10.3,3.2,9.9).closePath();
        this.shape_7.setTransform(-50,427.2,0.65,0.65);
    
        this.instance_25 = new lib.Group_2();
        this.instance_25.parent = this;
        this.instance_25.setTransform(-55.5,422.3,0.65,0.65,0,0,0,7.3,6.1);
        this.instance_25.alpha = 0.199;
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#43CDD5").beginStroke().moveTo(-0.3,16).lineTo(-1,14.4).lineTo(-8.4,-8.5).curveTo(-11,-9.9,-10.7,-11.8).lineTo(-9.9,-13.5).curveTo(-9.6,-14.9,-4.1,-16.3).curveTo(0.9,-17.5,2.4,-17.2).curveTo(3.2,-17,3.2,-15.5).lineTo(3,-12.9).curveTo(3.1,-9.8,7.3,0.5).curveTo(9.5,5.8,10.2,8.5).curveTo(10.6,10.3,10.7,12.5).curveTo(10.8,14.3,8.6,15.7).curveTo(6.6,16.9,3.5,17.3).lineTo(2.7,17.3).curveTo(0.8,17.3,-0.3,16).closePath();
        this.shape_8.setTransform(-53.6,428,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.instance_25},{t:this.shape_7},{t:this.shape_6},{t:this.instance_24},{t:this.shape_5},{t:this.shape_4},{t:this.instance_23},{t:this.shape_3}]},1).wait(139));
    
        // flash0.ai
        this.instance_26 = new lib.Symbol2("synched",0);
        this.instance_26.parent = this;
        this.instance_26.setTransform(7.8,328.5,0.65,0.65,0,0,0,30.2,14);
        this.instance_26.alpha = 0.34;
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#D2FCFF").beginStroke().moveTo(-10.7,9.3).curveTo(-11.9,8.9,-12,6.9).curveTo(-12.1,5.3,-11.3,2.7).curveTo(-10.5,0.2,-9.4,-2.2).curveTo(-8.4,-4.1,-4.6,-6.7).lineTo(-1,-8.9).lineTo(1.6,-9.4).curveTo(2.9,-9.5,7.7,-8.9).curveTo(12.5,-8.4,12,-6.4).curveTo(11.7,-5.4,8.2,-1.8).curveTo(2.4,4.1,-5.4,8).curveTo(-8.3,9.4,-9.9,9.4).lineTo(-10.7,9.3).closePath();
        this.shape_9.setTransform(46.7,367.8,0.65,0.65);
    
        this.instance_27 = new lib.Symbol1("synched",0);
        this.instance_27.parent = this;
        this.instance_27.setTransform(53.1,366.3,0.65,0.65,0,0,0,18.6,8.7);
        this.instance_27.alpha = 0.672;
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#D2FCFF").beginStroke().moveTo(-3.9,1.8).curveTo(-6.7,1.6,-5.8,0.3).lineTo(-4.4,-1).curveTo(-1,-2.4,2.2,-2).curveTo(5,-1.7,5.7,-0.4).curveTo(6.3,0.6,5.7,1.2).curveTo(5.2,1.7,3.8,2).curveTo(3.1,2.1,1.6,2.1).curveTo(-0.4,2.1,-3.9,1.8).closePath();
        this.shape_10.setTransform(52.6,360,0.65,0.65);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#52A3D1").beginStroke().moveTo(-2.4,6.3).curveTo(-7.7,6,-10.9,4.2).curveTo(-17.5,0.6,-19,-2.4).curveTo(-20.1,-4.3,-18.6,-5.3).curveTo(-17.1,-6.3,-14.8,-3.4).lineTo(-11,-0.6).curveTo(-6.3,2.1,-2.1,1.8).curveTo(9.1,1.2,13.1,-3).curveTo(15.7,-5.8,18.3,-6.3).curveTo(20.8,-6.8,17.8,-3.1).curveTo(14.5,1.2,12.6,2.7).curveTo(10.3,4.5,6.6,5.5).curveTo(3.6,6.4,-0.1,6.4).lineTo(-2.4,6.3).closePath();
        this.shape_11.setTransform(53.6,383.5,0.65,0.65);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#2B4BAB").beginStroke().moveTo(-0.3,10).curveTo(-4.7,9.5,-8.7,7.9).curveTo(-13,6.2,-15.6,3.8).curveTo(-18.3,1.3,-20,-1.5).curveTo(-21.6,-4.2,-21.7,-6.2).curveTo(-21.8,-8.8,-20.1,-9.4).curveTo(-17.9,-10.4,-12.7,-7.4).curveTo(-7.7,-5.9,-4.1,-5.5).curveTo(0.3,-5,5.5,-5.7).curveTo(10.4,-6.3,11.8,-6.8).lineTo(14.4,-8.4).curveTo(17.1,-10,19.2,-10.2).curveTo(22.2,-10.5,21.6,-7).curveTo(20.7,-2.6,19.1,-0).curveTo(17.2,3.2,13.1,5.8).curveTo(8.4,8.9,6.4,9.6).curveTo(4.6,10.2,2.3,10.2).curveTo(1,10.2,-0.3,10).closePath();
        this.shape_12.setTransform(53.2,381.5,0.65,0.65);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#FFF0F9").beginStroke().moveTo(-17.4,15.1).curveTo(-19.4,14.4,-19.5,11.2).curveTo(-19.6,8.7,-18.3,4.4).curveTo(-17.1,0.3,-15.2,-3.5).curveTo(-13.7,-6.6,-7.5,-10.8).lineTo(-1.6,-14.4).lineTo(2.6,-15.3).curveTo(4.8,-15.4,12.5,-14.5).curveTo(20.3,-13.6,19.4,-10.4).curveTo(18.9,-8.7,13.3,-2.9).curveTo(3.9,6.7,-8.7,13).curveTo(-13.5,15.3,-16.1,15.3).curveTo(-16.9,15.3,-17.4,15.1).closePath();
        this.shape_13.setTransform(-3.7,327.7,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_27},{t:this.shape_9},{t:this.instance_26}]},1).wait(139));
    
        // Layer 4
        this.instance_28 = new lib.Symbol1copy();
        this.instance_28.parent = this;
        this.instance_28.setTransform(6,339.7,1,1,0,0,0,25.5,22.5);
        this.instance_28._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).wait(139));
    
        // Layer 14
        this.instance_29 = new lib.Symbol5();
        this.instance_29.parent = this;
        this.instance_29.setTransform(53.5,376.9,1,1,0,0,0,15.7,13);
        this.instance_29._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).wait(139));
    
        // Layer 16
        this.instance_30 = new lib.Tween8("synched",0);
        this.instance_30.parent = this;
        this.instance_30.setTransform(53.4,414.2,0.65,0.65);
        this.instance_30._off = true;
        this.instance_30.filters = [new cjs.ColorFilter(1, 1, 1, 1, 111, 37, 0, 0)];
        this.instance_30.cache(-3,-3,7,7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(11).to({_off:false},0).to({guide:{path:[53.4,414.1,50.7,412.5,48.3,410.1,41.6,403.6,44,396.4,49.5,379.5,55,362.6,55.1,362.7,55.3,362.4,55.5,362.1,55.7,361.4,56.9,358.8,59,351.4,61.1,343.8,56.8,342.3,55.2,341.8,52,341.8,48.3,341.9,46.4,341.9,41.4,341.8,40.5,336.7,40.1,334.9,40,330.7,39.9,324.7,39.7,322.4,39.2,314.7,30.6,316.1,28.1,316.6,24.9,317.9,23.6,318.5,22.3,319.1]}},109).wait(20));
    
        // Layer 17
        this.instance_31 = new lib.Tween9("synched",0);
        this.instance_31.parent = this;
        this.instance_31.setTransform(51.9,413.1,0.65,0.65);
        this.instance_31.alpha = 0.672;
        this.instance_31._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(6).to({_off:false},0).to({guide:{path:[51.9,413.1,50,411.8,48.3,410.1,41.6,403.6,44,396.4,49.5,379.5,55,362.6,55.1,362.7,55.3,362.4,55.5,362.1,55.7,361.4,56.9,358.8,59,351.4,61.1,343.8,56.8,342.3,55.2,341.8,52,341.8,48.3,341.9,46.4,341.9,41.4,341.8,40.5,336.7,40.1,334.9,40,330.7,39.9,324.7,39.7,322.4,39.2,314.7,30.6,316.1,28.2,316.6,25.2,317.8]},alpha:1},110).wait(24));
    
        // Layer 18
        this.instance_32 = new lib.Tween5("synched",0);
        this.instance_32.parent = this;
        this.instance_32.setTransform(50.7,412.3,0.65,0.65);
        this.instance_32._off = true;
        this.instance_32.filters = [new cjs.ColorFilter(1, 1, 1, 1, 131, 94, 255, 0)];
        this.instance_32.cache(-3,-4,7,8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(3).to({_off:false},0).to({rotation:360,guide:{path:[50.7,412.3,49.5,411.3,48.3,410.2,41.6,403.7,44,396.4,49.5,379.5,55,362.7,55.1,362.7,55.3,362.4,55.5,362.1,55.7,361.5,56.9,358.8,59,351.5,61.1,343.8,56.8,342.4,55.2,341.8,52,341.9,48.3,342,46.4,342,41.4,341.9,40.5,336.8,40.1,334.9,40,330.7,39.9,324.7,39.7,322.5,39.2,314.8,30.6,316.2,28.1,316.6,24.9,317.9,24,318.3,23,318.8]}},107).wait(30));
    
        // Layer 19
        this.instance_33 = new lib.Tween6("synched",0);
        this.instance_33.parent = this;
        this.instance_33.setTransform(53.7,414.3,0.65,0.65,-75);
        this.instance_33._off = true;
        this.instance_33.filters = [new cjs.ColorFilter(1, 1, 1, 1, 80, 255, 143, 0)];
        this.instance_33.cache(-4,-5,8,11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).to({rotation:0,guide:{path:[53.7,414.3,50.9,412.7,48.3,410.2,41.6,403.7,44,396.4,49.5,379.5,55,362.7,55.1,362.7,55.3,362.4,55.5,362.1,55.7,361.5,56.9,358.8,59,351.5,61.1,343.8,56.8,342.4,55.2,341.8,52,341.9,48.3,342,46.4,342,41.4,341.9,40.5,336.8,40.1,334.9,40,330.7,39.9,324.7,39.7,322.5,39.2,314.8,30.6,316.2,28.1,316.6,24.9,317.9,23.7,318.4,22.5,319], orient:'auto'}},103).wait(36));
    
        // Layer 20
        this.instance_34 = new lib.Bitmap2();
        this.instance_34.parent = this;
        this.instance_34.setTransform(-35.9,286);
        this.instance_34._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).wait(139));
    
        // Layer 41
        this.instance_35 = new lib.Symbol21();
        this.instance_35.parent = this;
        this.instance_35.setTransform(118.1,316.7,1,1,0,0,0,7.2,10.7);
        this.instance_35._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(139));
    
        // Layer 24
        this.instance_36 = new lib.Tween14("synched",0);
        this.instance_36.parent = this;
        this.instance_36.setTransform(121,315.8,0.65,0.65,0,0,0,0,-5.9);
        this.instance_36._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).to({regY:-6,rotation:-57.2,x:121.2,y:316},14).to({regX:0.1,rotation:-42.2,x:121.3,y:315.9},4).to({regX:0,regY:-5.9,rotation:-65.6,y:316},6).to({regX:0.1,regY:-6,rotation:-42.2,y:315.9},6).to({regX:0,regY:-5.9,rotation:-65.6,y:316},8).to({rotation:0},24).to({regY:-6,rotation:19.7},7).to({x:120.4},7).to({regX:-0.1,regY:-5.9,rotation:34.7,y:315.9},9).to({regX:0,rotation:24,x:120.3,y:316},7).to({regX:0.1,rotation:49.7,x:119.5,y:316.6},8).to({regX:0,rotation:0,x:121.3,y:316},31).wait(8));
    
        // Layer 25
        this.instance_37 = new lib.Tween15("synched",0);
        this.instance_37.parent = this;
        this.instance_37.setTransform(118.5,315.9,0.65,0.65,0,0,0,0,-9.2);
        this.instance_37._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({_off:false},0).to({rotation:-38.2,x:118.8,y:316.1},14).to({regY:-9.1,rotation:-27.5},4).to({regX:0.1,regY:-9.2,rotation:-43.2},6).to({regX:0,regY:-9.1,rotation:-27.5},6).to({regX:0.1,regY:-9.2,rotation:-43.2},8).to({regX:0,rotation:0},24).to({regX:0.1,rotation:-2.3},7).to({rotation:19.7,x:118.2},7).to({rotation:49.7,y:316.2},9).to({rotation:38.5,y:316.1},7).to({rotation:57.9,x:117.3,y:316.8},8).to({regX:0,rotation:0,x:118.8,y:316.1},31).wait(8));
    
        // Layer 23
        this.instance_38 = new lib.Tween16("synched",0);
        this.instance_38.parent = this;
        this.instance_38.setTransform(114.1,315.8,0.65,0.65,0,0,0,0,-6.3);
        this.instance_38._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).to({rotation:-30,x:114.4,y:316},14).to({regX:-0.1,regY:-6.4,rotation:-21,x:114.3,y:315.9},4).to({regX:0.1,regY:-6.3,rotation:-34.7,x:114.5,y:316},6).to({regX:-0.1,regY:-6.4,rotation:-21,x:114.3,y:315.9},6).to({regX:0.1,regY:-6.3,rotation:-34.7,x:114.5,y:316},8).to({regX:0,rotation:0,x:114.4},24).to({regX:-0.1,regY:-6.4,rotation:21},7).to({regX:0,regY:-6.5,x:112.3,y:314.8},7).to({regY:-6.4,rotation:57.2},9).to({rotation:37.2},7).to({regX:0.1,regY:-6.5,rotation:64.4,x:111.5,y:315.4},8).to({regX:0,regY:-6.3,rotation:0,x:114.4,y:316},31).wait(8));
    
        // Layer 5
        this.instance_39 = new lib.Tween13("synched",0);
        this.instance_39.parent = this;
        this.instance_39.setTransform(117.5,306.8,0.65,0.65,-7,0,0,0,-7);
        this.instance_39._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({x:117.8,y:307},14).to({startPosition:0},4).to({regX:-0.1,rotation:-13.7},6).to({regX:0,rotation:-7},6).to({regX:-0.1,rotation:-13.7},8).to({regX:0,rotation:-7},24).to({rotation:3},7).to({regX:0.1,rotation:10.5,x:117.9},7).to({startPosition:0},9).to({startPosition:0},7).to({regX:0,rotation:16.2,x:117.8},8).to({rotation:-7},31).wait(8));
    
        // Layer 9
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#FFC44B").beginStroke().moveTo(0.3,4.4).lineTo(-1.1,3.5).curveTo(-2.3,1.6,-2.3,-3.7).curveTo(-2.3,-5.3,-1,-4.3).curveTo(-0,-3.5,1,-2).curveTo(1.6,-1,2,1.1).curveTo(2.5,3.3,2.1,4.2).curveTo(1.9,4.7,1.4,4.7).curveTo(0.9,4.7,0.3,4.4).closePath();
        this.shape_14.setTransform(105.3,433.3,0.65,0.65);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#E57E24").beginStroke().moveTo(2.6,11.6).curveTo(1.5,10.8,-2,4.4).curveTo(-4.5,-0.3,-6.2,-5.9).lineTo(-7.5,-10.6).curveTo(-7.7,-11.2,-6.4,-11.7).curveTo(-5.1,-12.2,-4.3,-11.6).curveTo(-2.5,-10.2,3,-1.6).curveTo(5.3,2.1,6.6,5).curveTo(7.7,7.9,7.4,9).curveTo(5.2,11.9,3.6,11.9).curveTo(3,11.9,2.6,11.6).closePath();
        this.shape_15.setTransform(107.1,437.5,0.65,0.65);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#B15C13").beginStroke().moveTo(0.8,13.6).curveTo(-3.4,9.9,-6.5,-2.3).lineTo(-8.7,-13.8).lineTo(-4.9,-13.7).curveTo(-2.4,-13.4,-0.9,-12).curveTo(0.8,-10.3,4.9,-2.3).curveTo(9,5.7,8.7,6.9).curveTo(7.8,9.6,5.1,12).curveTo(3,13.8,1.6,13.8).curveTo(1.2,13.8,0.8,13.6).closePath();
        this.shape_16.setTransform(106.9,438.5,0.65,0.65);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#FEC54B").beginStroke().moveTo(-0.3,4.8).curveTo(-1,3.8,-1.5,2.2).curveTo(-2.1,-0.3,-2.5,-3.2).lineTo(-2.8,-5.5).lineTo(-2.6,-5.6).lineTo(-0.6,-3.9).curveTo(1.6,-1.7,2.4,1.2).curveTo(3,3.4,2.6,4.3).curveTo(2.4,4.9,1.3,5.5).lineTo(0.8,5.6).curveTo(0.3,5.6,-0.3,4.8).closePath();
        this.shape_17.setTransform(93.8,434.6,0.65,0.65);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#E57E24").beginStroke().moveTo(-0.9,10.4).curveTo(-6.8,-2.9,-7.8,-11.4).curveTo(-8.1,-14,-7.9,-15.9).lineTo(-7.6,-17.2).curveTo(-4,-15.7,-0.6,-9.2).curveTo(1.9,-4.6,6.5,7.5).curveTo(9.6,15.8,6.1,17).curveTo(5.7,17.2,5.2,17.2).curveTo(2.1,17.2,-0.9,10.4).closePath();
        this.shape_18.setTransform(96.9,441.6,0.65,0.65);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#FFC44B").beginStroke().moveTo(-1.7,0.5).curveTo(-2.7,-5.3,-1.6,-4.8).curveTo(0.4,-3.9,1.6,0).curveTo(2.8,3.8,1.6,4.5).curveTo(1.1,4.8,0.6,4.8).curveTo(-1,4.8,-1.7,0.5).closePath();
        this.shape_19.setTransform(84.8,441.5,0.65,0.65);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#B15C13").beginStroke().moveTo(0.1,16.9).curveTo(-0.6,16,-1.6,13.4).lineTo(-3.6,7.9).curveTo(-4.8,4.7,-6.6,-1.9).curveTo(-8.5,-8.6,-9.1,-12).curveTo(-9.7,-14.8,-8.6,-16.9).lineTo(-7.5,-18.4).curveTo(-4.8,-18.6,-0.9,-10.9).curveTo(0.5,-8.2,4.8,2.3).lineTo(8.3,10.5).curveTo(9.5,13.5,9.2,14.6).curveTo(7.1,18.3,3.9,18.4).lineTo(3.8,18.4).curveTo(1.4,18.4,0.1,16.9).closePath();
        this.shape_20.setTransform(96.8,441.8,0.65,0.65);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#EA842D").beginStroke().moveTo(-0.8,9.9).curveTo(-1.8,8.2,-3,5.7).curveTo(-5.2,0.5,-5.5,-3.9).curveTo(-5.8,-8.2,-5.8,-11.5).lineTo(-5.7,-13.9).lineTo(-4.1,-13.3).curveTo(-2.3,-12.3,-1.7,-11.1).lineTo(0.3,-7.6).curveTo(1.9,-5,2.8,-2.2).curveTo(4.5,2.5,5.5,7.3).curveTo(6.3,10.8,4.4,13.1).curveTo(3.8,13.9,3.1,13.9).curveTo(1.4,13.9,-0.8,9.9).closePath();
        this.shape_21.setTransform(86.6,446.5,0.65,0.65);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.beginFill("#B15C13").beginStroke().moveTo(-0.4,15.6).curveTo(-1.6,14.1,-3.3,10.5).curveTo(-8.2,-0.9,-6.7,-10.2).curveTo(-6.2,-13.1,-5.2,-15.4).lineTo(-4.3,-17.1).curveTo(-1.5,-15.1,0.7,-10.8).curveTo(2.1,-8,4,-2.6).curveTo(5.3,1.2,6.2,6.7).curveTo(7,11.1,7.1,13.7).curveTo(7.1,15.6,5.4,16.5).curveTo(4.1,17.1,2.4,17.1).lineTo(2.3,17.1).curveTo(0.9,17.1,-0.4,15.6).closePath();
        this.shape_22.setTransform(86.5,447,0.65,0.65);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.beginFill("#E57E24").beginStroke().moveTo(-24.5,11).curveTo(-13.6,8.8,5.3,-3.2).lineTo(22.1,-14.8).curveTo(22.6,-14.9,23.8,-14.4).lineTo(24.9,-13.8).curveTo(18.7,-5.1,-3.7,5.8).curveTo(-10.7,9.2,-18.4,12.4).lineTo(-24.8,14.9).closePath();
        this.shape_23.setTransform(95.7,441.3,0.65,0.65);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.beginFill("#B4651E").beginStroke().moveTo(-25.7,9.2).curveTo(-14.2,5.8,4.9,-5.9).lineTo(21.7,-17).curveTo(24.2,-16.5,25.6,-14.9).curveTo(26.3,-14,26.5,-13.3).curveTo(21.6,-5,-2.9,6.8).curveTo(-10.6,10.5,-19.3,14.1).lineTo(-26.5,17).closePath();
        this.shape_24.setTransform(96.1,442.6,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(139));
    
        // Layer 35
        this.instance_40 = new lib.Symbol19();
        this.instance_40.parent = this;
        this.instance_40.setTransform(97.7,445,1,1,0,0,0,18.9,15.2);
        this.instance_40.alpha = 0;
        this.instance_40._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(86).to({_off:false},0).to({alpha:1},17).to({alpha:0},3).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(27));
    
        // Layer 22
        this.instance_41 = new lib.Symbol18();
        this.instance_41.parent = this;
        this.instance_41.setTransform(97.7,445,1,1,0,0,0,18.9,15.2);
        this.instance_41.alpha = 0;
        this.instance_41._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(55).to({_off:false},0).to({alpha:1},21).to({alpha:0},3).to({alpha:1},4).to({alpha:0},3).to({_off:true},1).wait(53));
    
        // Layer 21
        this.instance_42 = new lib.Symbol17();
        this.instance_42.parent = this;
        this.instance_42.setTransform(97.7,445,1,1,0,0,0,18.9,15.2);
        this.instance_42.alpha = 0;
        this.instance_42._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(20).to({_off:false},0).to({alpha:1},27).to({alpha:0},2).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(84));
    
        // Layer 10
        this.instance_43 = new lib.Symbol16();
        this.instance_43.parent = this;
        this.instance_43.setTransform(97.4,444.8,1,1,0,0,0,18.9,15.2);
        this.instance_43.alpha = 0;
        this.instance_43._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({_off:false},0).to({x:97.7,y:445,alpha:1},11).to({alpha:0},2).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(119));
    
        // Layer 8
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.beginFill("#442A05").beginStroke().moveTo(-28.6,14.7).curveTo(-27.6,4.6,-25.5,-1.8).curveTo(-22.4,-11,-19,-15.7).curveTo(-14.5,-21.9,-8,-22.8).curveTo(1.6,-24.2,11.1,-22.9).curveTo(23.7,-21.1,29.1,-14.7).lineTo(29.1,-13.3).curveTo(29,-11.5,28.3,-9.6).curveTo(26.1,-3.4,19.3,1.9).lineTo(8.7,10.3).curveTo(5.5,12.7,0.4,14.7).curveTo(-3,16.1,-14.5,18.8).curveTo(-25,21.3,-29.1,23.5).curveTo(-29.1,19.7,-28.6,14.7).closePath();
        this.shape_25.setTransform(97.4,444.9,0.65,0.65);
        this.shape_25._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(139));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.6,-179.7,306,742);
    
    
    (lib.homeovlwaterfish = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Symbol 3
        this.instance = new lib.Symbol3();
        this.instance.parent = this;
        this.instance.setTransform(5.2,1.9,1,1,0,0,0,8.3,2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Symbol 3
        this.instance_1 = new lib.Symbol3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(280.9,72.4,1,1,0,0,0,8.3,2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // Symbol 3
        this.instance_2 = new lib.Symbol3();
        this.instance_2.parent = this;
        this.instance_2.setTransform(175.4,65,1,1,0,0,0,8.3,2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
        // ca2
        this.instance_3 = new lib.ca2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(219.9,89.6,0.879,0.879,0,0,0,-0.1,0.7);
        this.instance_3.alpha = 0.5;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
    
        // ca
        this.instance_4 = new lib.ca();
        this.instance_4.parent = this;
        this.instance_4.setTransform(206.2,98.2,1.241,1.241,0,0,0,-0.1,0.7);
        this.instance_4.alpha = 0.5;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.homeovlwaterfish, new cjs.Rectangle(0,0,285.9,101.5), null);
    
    
    (lib.hit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (inited === undefined) {
                this.over = new Boolean(false);
                var inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
            }
        }
        this.frame_9 = function() {
            if (this.over == false) {
                this.gotoAndStop(0);
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(96));
    
        // Layer 5
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#74FFFF").beginStroke().moveTo(-9.5,15).lineTo(-9.5,-15).lineTo(9.5,-15).lineTo(9.5,15).closePath();
        this.shape.setTransform(182.5,25);
        this.shape._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(96));
    
        // Layer 3
        this.tit = new lib.thapTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(122,35.5,0.65,0.65);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(140.8,114.5,1,1,0,0,0,106.5,101.5);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(34.3,13,213,203.2);
    
    
    // stage content:
    (lib.bhn2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_bhn.mp3", "voice_bhn"); 
            var icon_bhnSound, icon_bhnSoundTimeOut;
            root_bhn = this;
            // htcv_icon_bhnOver = function() {cv_icon_bhnOver();}
            // htcv_icon_bhnOut = function() {cv_icon_bhnOut();}
            
            // htcv_icon_fbOver = function() {cv_icon_fbOver();}
            // htcv_icon_fbOut = function() {cv_icon_fbOut();}
            
            
            function cv_icon_bhnOver() {
                root_bhn.ico.over = true;
                root_bhn.hit.tit.over = true;
                root_bhn.hit.tit.gotoAndPlay(1);
                icon_bhnSoundTimeOut = setTimeout(icon_bhnSoundTimeOutComplete, 500);
            }
            
            function cv_icon_bhnOut() {
                root_bhn.ico.over = false;
                root_bhn.hit.tit.over = false;
                if (root_bhn.hit.tit.currentFrame == 7) {
                    root_bhn.hit.tit.play();
                }
                // clearTimeout(icon_bhnSoundTimeOut);
            }
            
            function icon_bhnSoundTimeOutComplete() {
                clearTimeout(icon_bhnSoundTimeOut);
                
                if (root_bhn.ico.currentFrame == 0) {
                    icon_bhnSound = createjs.Sound.play("voice_bhn");
                }
                root_bhn.ico.play();
            }
            
            //
            var tt;
            var cb;
            var scx = root_bhn.fbi.box.scaleX;
            var scy = root_bhn.fbi.box.scaleY;
            var pt = "50% 50%";//new Point(0,36);
            
            icofbInit();
            
            function icofbInit() {
                if (Math.random() > 0.5) {
                    cb = 1;
                    root_bhn.fbi.box.b2.alpha = 0;
                    root_bhn.fbi.box.b1.alpha = 1;
                } else {
                    cb = 2;
                    root_bhn.fbi.box.b2.alpha = 1;
                    root_bhn.fbi.box.b1.alpha = 0;
                }
            }
            
            
            function cv_icon_fbOver() {
                TweenMax.killTweensOf(root_bhn.fbi.box.cg1);
                TweenMax.killTweensOf(root_bhn.fbi.box);
                
                //TweenMax.to(box, 1, {glowFilter:{color:0xffffff, alpha:1, blurX:5, blurY:5}});
                
                if (cb == 1) {
                    cb = 2;
                    TweenMax.to(root_bhn.fbi.box.b1, .5, {alpha:0});
                    TweenMax.to(root_bhn.fbi.box.b2, .5, {alpha:1});
                } else if (cb == 2) {
                    cb = 1;
                    TweenMax.to(root_bhn.fbi.box.b2, .5, {alpha:0});
                    TweenMax.to(root_bhn.fbi.box.b1, .5, {alpha:1});
                }
                
                
                root_bhn.fbi.box.cg1.gotoAndPlay(0);
                crGlow();
                
                TweenMax.to(root_bhn.fbi.box, 0, {scaleX:scx, scaleY:scy, transformOrigin:pt});
                TweenMax.to(root_bhn.fbi.box, .5, {scaleX:scx * 1.1, scaleY:scy * .9, yoyo:true, repeat:-1, ease:Sine.easeInOut,
                            transformOrigin:pt});
            }
            
            function crGlow() {
                tt = (Math.random()*15+5)/5;
                //randInt(5, 20) / 10;
                TweenMax.to(root_bhn.fbi.box.cg1, tt, {a:"0", onComplete:icofb_glow});
            }
            
            function icofb_glow() {
                root_bhn.fbi.box.cg1.gotoAndPlay(1);
                TweenMax.killTweensOf(root_bhn.fbi.box.cg1);
                crGlow();
            }
            
            function cv_icon_fbOut() {
                TweenMax.killTweensOf(root_bhn.fbi.box);
                TweenMax.killTweensOf(root_bhn.fbi.box.cg1);
                //TweenMax.to(root_bhn.fbi.box, 1, {glowFilter:{color:0xffffff, alpha:0, blurX:0, blurY:0}});
                TweenMax.to(root_bhn.fbi.box, .3, {scaleX:scx, scaleY:scy, ease:Sine.easeInOut, transformOrigin:pt});
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 5
        this.instance = new lib.homeovlwaterfish();
        this.instance.parent = this;
        this.instance.setTransform(148,261.7,1,1,0,0,0,143,51.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Layer 3
        this.fbi = new lib.fbfbico();
        this.fbi.parent = this;
        this.fbi.setTransform(265.1,227,0.67,0.67,0,0,0,0.1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.fbi).wait(1));
    
        // Layer 2
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(117,95,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.bachocnhi_resize();
        this.ico.parent = this;
        this.ico.setTransform(164.1,13.4,1,1,0,0,0,42.1,276.4);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(162.5,169.9,350.4,346.7);
    // library properties:
    lib.properties = {
        width: 315,
        height: 315,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/bhn2017_atlas_.png", id:"bhn2017_atlas_"}/*,
            {src:"sounds/voice_bhn.mp3", id:"voice_bhn"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_bhn = lib_bhn||{}, images_bhn = images_bhn||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_bhn, images_bhn, createjs, ss, AdobeAn;