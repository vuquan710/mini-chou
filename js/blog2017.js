(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    
    
    
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
    
    
    (lib.Symbol28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#8A0000").beginStroke().moveTo(11.4,9.9).curveTo(10,9.1,10.1,8.1).curveTo(10,7.5,10.4,7.1).curveTo(10.9,6.6,11.5,6.6).curveTo(11.8,6.6,12.9,7.1).curveTo(14.1,7.5,15.1,7.5).curveTo(16.3,7.5,17.1,6.8).curveTo(17.7,6,17.8,4.7).lineTo(17.7,4.3).curveTo(17.2,5.1,16.4,5.5).curveTo(15.6,5.9,14.6,5.8).curveTo(12.6,5.9,11.2,4.1).curveTo(9.8,2.5,9.8,-0).curveTo(9.8,-2.5,11.3,-4.2).curveTo(12.8,-5.9,15,-5.9).curveTo(15.9,-5.9,16.5,-5.6).curveTo(17.2,-5.3,17.7,-4.7).lineTo(18.3,-5.5).curveTo(18.8,-5.8,19.2,-5.8).curveTo(20,-5.8,20.5,-5.2).curveTo(20.8,-4.6,20.9,-3.4).lineTo(20.9,3.4).curveTo(20.8,5.3,20.7,6.3).curveTo(20.5,7.3,20.1,8.1).curveTo(19.3,9.3,18.1,9.9).curveTo(16.8,10.6,15,10.6).curveTo(12.8,10.5,11.4,9.9).closePath().moveTo(13.9,-1.9).curveTo(13.3,-1.2,13.3,-0).curveTo(13.3,1.3,13.9,2).curveTo(14.5,2.9,15.5,2.8).curveTo(16.4,2.9,17.1,2).curveTo(17.7,1.3,17.7,-0).curveTo(17.7,-1.2,17.1,-1.9).curveTo(16.4,-2.8,15.5,-2.7).curveTo(14.5,-2.8,13.9,-1.9).closePath().moveTo(-0.9,4.4).curveTo(-2.6,2.6,-2.6,-0).curveTo(-2.6,-2.6,-0.9,-4.3).curveTo(0.6,-6,3.1,-6).curveTo(5.6,-6,7.2,-4.3).curveTo(8.8,-2.7,8.8,-0).curveTo(8.8,2.6,7.2,4.4).curveTo(5.6,6.1,3.1,6.1).curveTo(0.6,6.1,-0.9,4.4).closePath().moveTo(1.6,-2).curveTo(0.9,-1.3,0.9,-0).curveTo(0.9,1.3,1.5,2).curveTo(2.2,2.9,3.1,2.8).curveTo(4.1,2.9,4.7,2).curveTo(5.3,1.3,5.4,-0).curveTo(5.3,-1.3,4.7,-2).curveTo(4.1,-2.8,3.1,-2.8).curveTo(2.2,-2.8,1.6,-2).closePath().moveTo(-7.2,5.3).curveTo(-7.7,4.6,-7.7,3.4).lineTo(-7.7,-8.1).curveTo(-7.7,-9.4,-7.2,-9.9).curveTo(-6.8,-10.6,-6,-10.6).curveTo(-5.2,-10.6,-4.7,-9.9).curveTo(-4.3,-9.4,-4.3,-8.1).lineTo(-4.3,3.4).curveTo(-4.3,4.6,-4.7,5.3).curveTo(-5.1,5.8,-6,5.8).curveTo(-6.8,5.8,-7.2,5.3).closePath().moveTo(-18.5,5.7).curveTo(-19.8,5.7,-20.3,5.3).curveTo(-20.9,4.7,-20.8,3.5).lineTo(-20.8,-7.1).curveTo(-20.9,-8.4,-20.3,-8.9).curveTo(-19.8,-9.5,-18.5,-9.5).lineTo(-15.6,-9.5).curveTo(-13.4,-9.5,-12.2,-8.5).curveTo(-10.9,-7.4,-10.9,-5.7).curveTo(-10.9,-4.6,-11.3,-3.8).curveTo(-11.8,-3.2,-12.7,-2.7).curveTo(-11.3,-2.3,-10.5,-1.4).curveTo(-9.7,-0.4,-9.7,1.1).curveTo(-9.7,3.3,-11.1,4.5).curveTo(-12.5,5.7,-15.1,5.7).closePath().moveTo(-17.4,2.8).lineTo(-15.7,2.8).curveTo(-14.5,2.7,-13.9,2.3).curveTo(-13.3,1.9,-13.3,1.1).curveTo(-13.3,0.1,-13.9,-0.2).curveTo(-14.5,-0.7,-15.7,-0.7).lineTo(-17.4,-0.7).closePath().moveTo(-17.4,-3.5).lineTo(-16,-3.5).curveTo(-15.1,-3.5,-14.6,-4).curveTo(-14.2,-4.3,-14.2,-5.1).curveTo(-14.2,-5.7,-14.7,-6.2).curveTo(-15.1,-6.5,-16,-6.5).lineTo(-17.4,-6.5).closePath();
        this.shape.setTransform(21.9,12);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FBFFBF").beginStroke().moveTo(10.5,11.7).curveTo(9.1,10.9,8.4,9.8).curveTo(8,9,8,8.1).curveTo(8,6.7,9,5.6).lineTo(9.4,5.2).lineTo(9.3,5).lineTo(8.7,5.7).curveTo(6.5,8.1,3.1,8.1).curveTo(-0.2,8.1,-2.5,5.7).lineTo(-2.6,5.6).lineTo(-3.1,6.4).curveTo(-3.5,7.1,-4.3,7.5).curveTo(-5,7.9,-6,7.9).curveTo(-6.9,7.9,-7.7,7.5).curveTo(-8.4,7.1,-8.9,6.4).lineTo(-9.3,5.6).lineTo(-9.8,6).curveTo(-11.8,7.7,-15.1,7.7).lineTo(-18.5,7.7).curveTo(-20.6,7.8,-21.7,6.8).curveTo(-22.9,5.7,-22.9,3.5).lineTo(-22.9,-7).curveTo(-22.9,-9.3,-21.8,-10.4).curveTo(-20.6,-11.5,-18.5,-11.5).lineTo(-15.6,-11.5).curveTo(-12.7,-11.5,-10.9,-10.1).curveTo(-10.2,-9.5,-9.7,-8.7).curveTo(-9.6,-10.2,-8.9,-11.2).curveTo(-8.4,-11.8,-7.7,-12.2).curveTo(-6.9,-12.6,-6,-12.6).curveTo(-5.1,-12.6,-4.3,-12.2).curveTo(-3.6,-11.9,-3.1,-11.1).curveTo(-2.3,-10,-2.3,-8.2).lineTo(-2.3,-5.9).curveTo(-0.1,-8,3.1,-8).curveTo(6.5,-8,8.7,-5.7).lineTo(9.3,-4.9).lineTo(9.8,-5.6).curveTo(10.8,-6.8,12.1,-7.4).curveTo(13.5,-7.9,15,-7.9).curveTo(16.3,-8,17.4,-7.5).lineTo(17.5,-7.4).curveTo(18.3,-7.8,19.2,-7.8).curveTo(20.1,-7.8,20.9,-7.5).curveTo(21.6,-7.1,22.1,-6.4).curveTo(22.9,-5.3,22.9,-3.3).lineTo(22.9,3.4).curveTo(22.9,5.4,22.7,6.7).curveTo(22.4,8.1,21.8,9.1).curveTo(20.8,10.8,18.9,11.7).curveTo(17.2,12.6,15,12.6).curveTo(12.3,12.6,10.5,11.7).closePath().moveTo(9.5,6.5).curveTo(9.1,6.9,9.1,7.5).curveTo(9.1,8.5,10.4,9.3).curveTo(11.8,9.9,14,10).curveTo(15.8,10,17.1,9.3).curveTo(18.4,8.7,19.1,7.5).curveTo(19.5,6.7,19.7,5.7).curveTo(19.9,4.7,19.9,2.8).lineTo(19.9,-4).curveTo(19.9,-5.2,19.5,-5.8).curveTo(19.1,-6.4,18.2,-6.4).curveTo(17.8,-6.4,17.4,-6.1).lineTo(16.7,-5.3).curveTo(16.2,-5.9,15.6,-6.2).curveTo(14.9,-6.5,14,-6.5).curveTo(11.9,-6.5,10.3,-4.8).curveTo(8.8,-3.1,8.8,-0.6).curveTo(8.8,1.9,10.2,3.5).curveTo(11.6,5.3,13.7,5.2).curveTo(14.6,5.3,15.4,4.9).curveTo(16.2,4.5,16.7,3.7).lineTo(16.8,4.1).curveTo(16.8,5.4,16.1,6.2).curveTo(15.4,6.9,14.1,6.9).curveTo(13.1,6.9,12,6.5).curveTo(10.8,6,10.5,6).curveTo(9.9,6,9.5,6.5).closePath().moveTo(-1.9,-4.9).curveTo(-3.6,-3.2,-3.6,-0.6).curveTo(-3.6,2,-1.9,3.8).curveTo(-0.3,5.5,2.2,5.5).curveTo(4.6,5.5,6.2,3.8).curveTo(7.8,2,7.8,-0.6).curveTo(7.8,-3.3,6.2,-4.9).curveTo(4.6,-6.6,2.2,-6.6).curveTo(-0.3,-6.6,-1.9,-4.9).closePath().moveTo(-8.2,-10.5).curveTo(-8.6,-10,-8.6,-8.7).lineTo(-8.6,2.8).curveTo(-8.6,4,-8.2,4.7).curveTo(-7.8,5.2,-6.9,5.2).curveTo(-6.1,5.2,-5.7,4.7).curveTo(-5.3,4,-5.3,2.8).lineTo(-5.3,-8.7).curveTo(-5.3,-10,-5.7,-10.5).curveTo(-6.1,-11.2,-6.9,-11.2).curveTo(-7.8,-11.2,-8.2,-10.5).closePath().moveTo(-21.3,-9.5).curveTo(-21.8,-9,-21.8,-7.7).lineTo(-21.8,2.9).curveTo(-21.8,4.1,-21.3,4.7).curveTo(-20.8,5.1,-19.5,5.1).lineTo(-16,5.1).curveTo(-13.5,5.1,-12.1,3.9).curveTo(-10.7,2.7,-10.7,0.5).curveTo(-10.7,-1,-11.5,-2).curveTo(-12.2,-2.9,-13.7,-3.3).curveTo(-12.8,-3.8,-12.3,-4.4).curveTo(-11.9,-5.2,-11.9,-6.3).curveTo(-11.9,-8,-13.1,-9.1).curveTo(-14.3,-10.1,-16.6,-10.1).lineTo(-19.4,-10.1).curveTo(-20.8,-10.1,-21.3,-9.5).closePath().moveTo(12.9,1.4).curveTo(12.3,0.7,12.3,-0.6).curveTo(12.3,-1.8,12.9,-2.5).curveTo(13.5,-3.4,14.5,-3.3).curveTo(15.5,-3.4,16.1,-2.5).curveTo(16.7,-1.8,16.7,-0.6).curveTo(16.7,0.7,16.1,1.4).curveTo(15.5,2.3,14.5,2.2).curveTo(13.5,2.3,12.9,1.4).closePath().moveTo(0.5,1.4).curveTo(-0.1,0.7,-0.1,-0.6).curveTo(-0.1,-1.9,0.6,-2.6).curveTo(1.2,-3.4,2.2,-3.4).curveTo(3.1,-3.4,3.7,-2.6).curveTo(4.4,-1.9,4.4,-0.6).curveTo(4.4,0.7,3.7,1.4).curveTo(3.1,2.3,2.2,2.2).curveTo(1.2,2.3,0.5,1.4).closePath().moveTo(-18.4,2.2).lineTo(-18.4,-1.3).lineTo(-16.7,-1.3).curveTo(-15.4,-1.3,-14.9,-0.8).curveTo(-14.3,-0.5,-14.3,0.5).curveTo(-14.3,1.3,-14.9,1.7).curveTo(-15.5,2.1,-16.6,2.2).closePath().moveTo(-18.4,-4.1).lineTo(-18.4,-7.1).lineTo(-17,-7.1).curveTo(-16.1,-7.1,-15.7,-6.8).curveTo(-15.2,-6.3,-15.2,-5.7).curveTo(-15.2,-4.9,-15.6,-4.6).curveTo(-16.1,-4.1,-16.9,-4.1).closePath();
        this.shape_1.setTransform(22.9,12.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,45.8,25.2), null);
    
    
    (lib.Symbol27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.4,9.9).curveTo(10,9.1,10.1,8.1).curveTo(10,7.5,10.4,7.1).curveTo(10.9,6.6,11.5,6.6).curveTo(11.8,6.6,12.9,7.1).curveTo(14.1,7.5,15.1,7.5).curveTo(16.3,7.5,17.1,6.8).curveTo(17.7,6,17.8,4.7).lineTo(17.7,4.3).curveTo(17.2,5.1,16.4,5.5).curveTo(15.6,5.9,14.6,5.8).curveTo(12.6,5.9,11.2,4.1).curveTo(9.8,2.5,9.8,-0).curveTo(9.8,-2.5,11.3,-4.2).curveTo(12.8,-5.9,15,-5.9).curveTo(15.9,-5.9,16.5,-5.6).curveTo(17.2,-5.3,17.7,-4.7).lineTo(18.3,-5.5).curveTo(18.8,-5.8,19.2,-5.8).curveTo(20,-5.8,20.5,-5.2).curveTo(20.8,-4.6,20.9,-3.4).lineTo(20.9,3.4).curveTo(20.8,5.3,20.7,6.3).curveTo(20.5,7.3,20.1,8.1).curveTo(19.3,9.3,18.1,9.9).curveTo(16.8,10.6,15,10.6).curveTo(12.8,10.5,11.4,9.9).closePath().moveTo(13.9,-1.9).curveTo(13.3,-1.2,13.3,-0).curveTo(13.3,1.3,13.9,2).curveTo(14.5,2.9,15.5,2.8).curveTo(16.4,2.9,17.1,2).curveTo(17.7,1.3,17.7,-0).curveTo(17.7,-1.2,17.1,-1.9).curveTo(16.4,-2.8,15.5,-2.7).curveTo(14.5,-2.8,13.9,-1.9).closePath().moveTo(-0.9,4.4).curveTo(-2.6,2.6,-2.6,-0).curveTo(-2.6,-2.6,-0.9,-4.3).curveTo(0.6,-6,3.1,-6).curveTo(5.6,-6,7.2,-4.3).curveTo(8.8,-2.7,8.8,-0).curveTo(8.8,2.6,7.2,4.4).curveTo(5.6,6.1,3.1,6.1).curveTo(0.6,6.1,-0.9,4.4).closePath().moveTo(1.6,-2).curveTo(0.9,-1.3,0.9,-0).curveTo(0.9,1.3,1.5,2).curveTo(2.2,2.9,3.1,2.8).curveTo(4.1,2.9,4.7,2).curveTo(5.3,1.3,5.4,-0).curveTo(5.3,-1.3,4.7,-2).curveTo(4.1,-2.8,3.1,-2.8).curveTo(2.2,-2.8,1.6,-2).closePath().moveTo(-7.2,5.3).curveTo(-7.7,4.6,-7.7,3.4).lineTo(-7.7,-8.1).curveTo(-7.7,-9.4,-7.2,-9.9).curveTo(-6.8,-10.6,-6,-10.6).curveTo(-5.2,-10.6,-4.7,-9.9).curveTo(-4.3,-9.4,-4.3,-8.1).lineTo(-4.3,3.4).curveTo(-4.3,4.6,-4.7,5.3).curveTo(-5.1,5.8,-6,5.8).curveTo(-6.8,5.8,-7.2,5.3).closePath().moveTo(-18.5,5.7).curveTo(-19.8,5.7,-20.3,5.3).curveTo(-20.9,4.7,-20.8,3.5).lineTo(-20.8,-7.1).curveTo(-20.9,-8.4,-20.3,-8.9).curveTo(-19.8,-9.5,-18.5,-9.5).lineTo(-15.6,-9.5).curveTo(-13.4,-9.5,-12.2,-8.5).curveTo(-10.9,-7.4,-10.9,-5.7).curveTo(-10.9,-4.6,-11.3,-3.8).curveTo(-11.8,-3.2,-12.7,-2.7).curveTo(-11.3,-2.3,-10.5,-1.4).curveTo(-9.7,-0.4,-9.7,1.1).curveTo(-9.7,3.3,-11.1,4.5).curveTo(-12.5,5.7,-15.1,5.7).closePath().moveTo(-17.4,2.8).lineTo(-15.7,2.8).curveTo(-14.5,2.7,-13.9,2.3).curveTo(-13.3,1.9,-13.3,1.1).curveTo(-13.3,0.1,-13.9,-0.2).curveTo(-14.5,-0.7,-15.7,-0.7).lineTo(-17.4,-0.7).closePath().moveTo(-17.4,-3.5).lineTo(-16,-3.5).curveTo(-15.1,-3.5,-14.6,-4).curveTo(-14.2,-4.3,-14.2,-5.1).curveTo(-14.2,-5.7,-14.7,-6.2).curveTo(-15.1,-6.5,-16,-6.5).lineTo(-17.4,-6.5).closePath();
        this.shape.setTransform(21.9,12);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#640000").beginStroke().moveTo(10.5,11.7).curveTo(9.1,10.9,8.4,9.8).curveTo(8,9,8,8.1).curveTo(8,6.7,9,5.6).lineTo(9.4,5.2).lineTo(9.3,5).lineTo(8.7,5.7).curveTo(6.5,8.1,3.1,8.1).curveTo(-0.2,8.1,-2.5,5.7).lineTo(-2.6,5.6).lineTo(-3.1,6.4).curveTo(-3.5,7.1,-4.3,7.5).curveTo(-5,7.9,-6,7.9).curveTo(-6.9,7.9,-7.7,7.5).curveTo(-8.4,7.1,-8.9,6.4).lineTo(-9.3,5.6).lineTo(-9.8,6).curveTo(-11.8,7.7,-15.1,7.7).lineTo(-18.5,7.7).curveTo(-20.6,7.8,-21.7,6.8).curveTo(-22.9,5.7,-22.9,3.5).lineTo(-22.9,-7).curveTo(-22.9,-9.3,-21.8,-10.4).curveTo(-20.6,-11.5,-18.5,-11.5).lineTo(-15.6,-11.5).curveTo(-12.7,-11.5,-10.9,-10.1).curveTo(-10.2,-9.5,-9.7,-8.7).curveTo(-9.6,-10.2,-8.9,-11.2).curveTo(-8.4,-11.8,-7.7,-12.2).curveTo(-6.9,-12.6,-6,-12.6).curveTo(-5.1,-12.6,-4.3,-12.2).curveTo(-3.6,-11.9,-3.1,-11.1).curveTo(-2.3,-10,-2.3,-8.2).lineTo(-2.3,-5.9).curveTo(-0.1,-8,3.1,-8).curveTo(6.5,-8,8.7,-5.7).lineTo(9.3,-4.9).lineTo(9.8,-5.6).curveTo(10.8,-6.8,12.1,-7.4).curveTo(13.5,-7.9,15,-7.9).curveTo(16.3,-8,17.4,-7.5).lineTo(17.5,-7.4).curveTo(18.3,-7.8,19.2,-7.8).curveTo(20.1,-7.8,20.9,-7.5).curveTo(21.6,-7.1,22.1,-6.4).curveTo(22.9,-5.3,22.9,-3.3).lineTo(22.9,3.4).curveTo(22.9,5.4,22.7,6.7).curveTo(22.4,8.1,21.8,9.1).curveTo(20.8,10.8,18.9,11.7).curveTo(17.2,12.6,15,12.6).curveTo(12.3,12.6,10.5,11.7).closePath().moveTo(9.5,6.5).curveTo(9.1,6.9,9.1,7.5).curveTo(9.1,8.5,10.4,9.3).curveTo(11.8,9.9,14,10).curveTo(15.8,10,17.1,9.3).curveTo(18.4,8.7,19.1,7.5).curveTo(19.5,6.7,19.7,5.7).curveTo(19.9,4.7,19.9,2.8).lineTo(19.9,-4).curveTo(19.9,-5.2,19.5,-5.8).curveTo(19.1,-6.4,18.2,-6.4).curveTo(17.8,-6.4,17.4,-6.1).lineTo(16.7,-5.3).curveTo(16.2,-5.9,15.6,-6.2).curveTo(14.9,-6.5,14,-6.5).curveTo(11.9,-6.5,10.3,-4.8).curveTo(8.8,-3.1,8.8,-0.6).curveTo(8.8,1.9,10.2,3.5).curveTo(11.6,5.3,13.7,5.2).curveTo(14.6,5.3,15.4,4.9).curveTo(16.2,4.5,16.7,3.7).lineTo(16.8,4.1).curveTo(16.8,5.4,16.1,6.2).curveTo(15.4,6.9,14.1,6.9).curveTo(13.1,6.9,12,6.5).curveTo(10.8,6,10.5,6).curveTo(9.9,6,9.5,6.5).closePath().moveTo(-1.9,-4.9).curveTo(-3.6,-3.2,-3.6,-0.6).curveTo(-3.6,2,-1.9,3.8).curveTo(-0.3,5.5,2.2,5.5).curveTo(4.6,5.5,6.2,3.8).curveTo(7.8,2,7.8,-0.6).curveTo(7.8,-3.3,6.2,-4.9).curveTo(4.6,-6.6,2.2,-6.6).curveTo(-0.3,-6.6,-1.9,-4.9).closePath().moveTo(-8.2,-10.5).curveTo(-8.6,-10,-8.6,-8.7).lineTo(-8.6,2.8).curveTo(-8.6,4,-8.2,4.7).curveTo(-7.8,5.2,-6.9,5.2).curveTo(-6.1,5.2,-5.7,4.7).curveTo(-5.3,4,-5.3,2.8).lineTo(-5.3,-8.7).curveTo(-5.3,-10,-5.7,-10.5).curveTo(-6.1,-11.2,-6.9,-11.2).curveTo(-7.8,-11.2,-8.2,-10.5).closePath().moveTo(-21.3,-9.5).curveTo(-21.8,-9,-21.8,-7.7).lineTo(-21.8,2.9).curveTo(-21.8,4.1,-21.3,4.7).curveTo(-20.8,5.1,-19.5,5.1).lineTo(-16,5.1).curveTo(-13.5,5.1,-12.1,3.9).curveTo(-10.7,2.7,-10.7,0.5).curveTo(-10.7,-1,-11.5,-2).curveTo(-12.2,-2.9,-13.7,-3.3).curveTo(-12.8,-3.8,-12.3,-4.4).curveTo(-11.9,-5.2,-11.9,-6.3).curveTo(-11.9,-8,-13.1,-9.1).curveTo(-14.3,-10.1,-16.6,-10.1).lineTo(-19.4,-10.1).curveTo(-20.8,-10.1,-21.3,-9.5).closePath().moveTo(12.9,1.4).curveTo(12.3,0.7,12.3,-0.6).curveTo(12.3,-1.8,12.9,-2.5).curveTo(13.5,-3.4,14.5,-3.3).curveTo(15.5,-3.4,16.1,-2.5).curveTo(16.7,-1.8,16.7,-0.6).curveTo(16.7,0.7,16.1,1.4).curveTo(15.5,2.3,14.5,2.2).curveTo(13.5,2.3,12.9,1.4).closePath().moveTo(0.5,1.4).curveTo(-0.1,0.7,-0.1,-0.6).curveTo(-0.1,-1.9,0.6,-2.6).curveTo(1.2,-3.4,2.2,-3.4).curveTo(3.1,-3.4,3.7,-2.6).curveTo(4.4,-1.9,4.4,-0.6).curveTo(4.4,0.7,3.7,1.4).curveTo(3.1,2.3,2.2,2.2).curveTo(1.2,2.3,0.5,1.4).closePath().moveTo(-18.4,2.2).lineTo(-18.4,-1.3).lineTo(-16.7,-1.3).curveTo(-15.4,-1.3,-14.9,-0.8).curveTo(-14.3,-0.5,-14.3,0.5).curveTo(-14.3,1.3,-14.9,1.7).curveTo(-15.5,2.1,-16.6,2.2).closePath().moveTo(-18.4,-4.1).lineTo(-18.4,-7.1).lineTo(-17,-7.1).curveTo(-16.1,-7.1,-15.7,-6.8).curveTo(-15.2,-6.3,-15.2,-5.7).curveTo(-15.2,-4.9,-15.6,-4.6).curveTo(-16.1,-4.1,-16.9,-4.1).closePath();
        this.shape_1.setTransform(22.9,12.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,45.8,25.2), null);
    
    
    (lib.hit_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("rgba(0,255,255,0)").beginStroke().moveTo(-85.7,78.5).lineTo(-85.2,-72.1).lineTo(13.8,-73.7).lineTo(25.6,-66.7).curveTo(41.8,-67.9,57,-72.2).curveTo(65.9,-74.8,74.7,-78.2).lineTo(82.7,-78.5).lineTo(85.7,-40).curveTo(85.5,-32.5,83.9,-25.2).curveTo(83,-21,80.7,-17).lineTo(47.2,-15.7).lineTo(44.4,-16.8).curveTo(41,-18.3,38,-21).lineTo(35.3,-46.3).lineTo(28.9,-45.2).lineTo(30,-34.5).curveTo(27.2,-30.1,24,-26.4).curveTo(16.2,-17.2,7.9,-8.6).lineTo(9,4.3).lineTo(36.4,5.4).lineTo(39.7,12.4).lineTo(34.3,14.6).lineTo(33.7,22.1).lineTo(40.1,25.1).curveTo(39.5,29,38.6,32.7).curveTo(36.1,43,33,53.2).lineTo(2.5,69.5).lineTo(2.8,78.5).closePath();
        this.shape.setTransform(85.7,78.5);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_2, new cjs.Rectangle(0,0,171.4,157), null);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-7.1,8.8).curveTo(-11.2,5.3,-9.7,-2.6).lineTo(-7.2,-10.2).lineTo(-7.1,-10.4).lineTo(-6.8,-10.4).lineTo(-5.5,-10.6).curveTo(-3.9,-10.7,-2.4,-10.7).curveTo(6,-10.7,8.8,-6.7).curveTo(11.2,-3.3,9.1,2.6).curveTo(8.1,5.2,5.2,7.7).curveTo(1.7,10.7,-1.9,10.7).curveTo(-4.7,10.7,-7.1,8.8).closePath().moveTo(-6.4,-9.5).curveTo(-8.1,-5.9,-8.8,-1.8).curveTo(-9.9,5.1,-6.4,8).curveTo(-4.4,9.7,-1.9,9.7).curveTo(1.3,9.7,4.5,6.9).curveTo(7.3,4.6,8.1,2.2).curveTo(10.1,-3.2,8,-6.2).curveTo(5.4,-9.7,-2.4,-9.7).curveTo(-5,-9.7,-6.4,-9.5).closePath();
        this.shape.setTransform(8.2,1.4,0.353,0.353,-4.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-6.7,8.3).curveTo(-10.7,5,-9.1,-2.8).lineTo(-6.7,-10).lineTo(-3.5,-10.3).curveTo(0.2,-10.4,3,-9.7).curveTo(12.1,-7.5,8.6,2.3).curveTo(7.2,6.2,2.8,8.8).curveTo(0.3,10.3,-1.9,10.3).curveTo(-4.5,10.3,-6.7,8.3).closePath();
        this.shape_1.setTransform(8.2,1.5,0.353,0.353,-4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(19.7,17.5).curveTo(-4.8,15.5,-12.1,13.6).curveTo(-17.6,12.1,-23,7.3).lineTo(-24,6.4).lineTo(-23.3,5.7).lineTo(-22.3,6.6).curveTo(-17.1,11.2,-11.7,12.7).curveTo(-4.5,14.5,19.6,16.5).curveTo(24.3,14.3,26.4,11.2).curveTo(28.5,8.1,27.6,4.6).curveTo(26.8,1.2,23.7,-1).curveTo(20.7,-3.2,17.4,-2.9).curveTo(3.7,-1.8,-13.9,-9.1).curveTo(-19.4,-11.3,-24.6,-14.3).lineTo(-28.9,-16.7).lineTo(-28.4,-17.6).lineTo(-24.2,-15.1).curveTo(-18.9,-12.2,-13.5,-10).curveTo(3.8,-2.8,17.3,-3.9).curveTo(21,-4.3,24.3,-1.8).curveTo(27.6,0.6,28.6,4.3).curveTo(29.4,7.2,28.2,10.1).curveTo(26.3,14.5,19.9,17.4).lineTo(19.8,17.5).closePath();
        this.shape_2.setTransform(-0.9,-0.1,0.353,0.353,-4.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FEE210").beginStroke().moveTo(-12.6,13).curveTo(-16.3,12,-18.8,10.2).curveTo(-19.9,9.4,-23.6,6.1).lineTo(-28.6,-17.1).lineTo(-24.5,-14.7).curveTo(-19.3,-11.8,-13.8,-9.5).curveTo(3.7,-2.3,17.4,-3.4).curveTo(20.8,-3.7,23.8,-1.5).curveTo(26.9,0.5,28,3.8).curveTo(30.8,12.1,19.8,17).curveTo(-5.5,15,-12.6,13).closePath();
        this.shape_3.setTransform(-1,-0.1,0.353,0.353,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.6,-5.4,23.3,10.9);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-9.6,-2.3).lineTo(-9.7,-3).lineTo(-9.1,-3.4).curveTo(-3.4,-6.4,1.4,-6.4).curveTo(5.6,-6.4,9,-4.1).lineTo(9.7,-3.6).lineTo(9.4,-2.9).curveTo(7,3.3,2.4,5.3).curveTo(0,6.4,-1.8,6.4).curveTo(-7.5,6.4,-9.6,-2.3).closePath().moveTo(-8.6,-2.5).curveTo(-6.8,5.4,-1.8,5.4).curveTo(-0.3,5.4,2,4.4).curveTo(6.2,2.5,8.5,-3.2).curveTo(5.3,-5.4,1.4,-5.4).curveTo(-3.2,-5.4,-8.6,-2.5).closePath();
        this.shape.setTransform(14.2,20,0.353,0.353,-4.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-9,-2.4).lineTo(-9.1,-2.8).lineTo(-8.8,-3).curveTo(-3.2,-5.9,1.4,-5.9).curveTo(5.5,-5.9,8.8,-3.7).lineTo(9.1,-3.4).lineTo(9,-3.1).curveTo(6.7,2.9,2.2,4.8).curveTo(0.1,5.9,-1.8,5.9).curveTo(-7.1,5.9,-9,-2.4).closePath();
        this.shape_1.setTransform(14.2,20,0.353,0.353,-4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,11.9).curveTo(-9.6,11,-10.9,6.5).curveTo(-12,2.8,-8.9,-2.5).curveTo(-6.2,-7.2,-1.3,-11.4).lineTo(-0.5,-12.1).lineTo(0.2,-11.3).curveTo(8.9,-0.1,11,8.2).lineTo(11.2,9).lineTo(10.4,9.4).curveTo(4.5,12.1,-0.5,12.1).closePath().moveTo(-10,2.5).curveTo(-11.6,9.7,-2.6,10.9).lineTo(-0.5,11.1).curveTo(4.2,11.1,10,8.5).curveTo(8,0.3,-0.6,-10.6).curveTo(-8.5,-3.9,-10,2.5).closePath();
        this.shape_2.setTransform(-14.1,19.6,0.353,0.353,-4.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-2.6,11.3).curveTo(-9.1,10.5,-10.4,6.3).curveTo(-11.4,2.7,-8.4,-2.5).curveTo(-5.6,-7.1,-0.8,-11.1).lineTo(-0.4,-11.5).lineTo(-0.1,-11).curveTo(8.6,-0,10.6,8.2).lineTo(10.7,8.6).lineTo(10.3,8.8).curveTo(4.4,11.5,-0.4,11.5).closePath();
        this.shape_3.setTransform(-14.2,19.6,0.353,0.353,-4.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(1.4,9.6).curveTo(-1.5,7.5,-3.9,4.3).curveTo(-8.6,-2.4,-5.9,-9.2).lineTo(-5.6,-10.1).lineTo(-4.6,-9.7).curveTo(-1.5,-8.3,1.1,-6.5).curveTo(5.1,-3.9,6.7,-1.6).lineTo(6.9,-1.2).lineTo(6.8,-0.9).curveTo(6,3.5,2.8,9.2).lineTo(2.3,10.1).closePath().moveTo(-3,3.8).curveTo(-0.8,6.9,2,8.7).curveTo(5,3.3,5.8,-1.1).curveTo(3.4,-4.8,-5,-8.8).curveTo(-7.5,-2.4,-3,3.8).closePath();
        this.shape_4.setTransform(8.7,7.3,0.353,0.353,-4.9);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#F8B334").beginStroke().moveTo(1.7,9.1).curveTo(-1.2,7.2,-3.5,4).curveTo(-8,-2.4,-5.5,-8.9).lineTo(-5.3,-9.4).lineTo(-4.8,-9.2).curveTo(3.8,-5.1,6.3,-1.3).lineTo(6.4,-1.1).lineTo(6.3,-0.9).curveTo(5.5,3.5,2.4,9).lineTo(2.1,9.4).closePath();
        this.shape_5.setTransform(8.7,7.3,0.353,0.353,-4.9);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(0.5,8.7).curveTo(-3.5,6,-5.9,1.6).lineTo(-6.2,1.1).lineTo(-5.9,0.7).curveTo(-2.7,-4.9,4.3,-8.7).lineTo(5.3,-9.3).lineTo(5.7,-8.1).curveTo(7.7,-1.9,1.9,8.3).lineTo(1.4,9.3).closePath().moveTo(-5,1.2).curveTo(-3.6,3.8,-1.1,6.1).curveTo(0.1,7.2,1.1,7.8).curveTo(6.6,-2.1,4.8,-7.8).curveTo(-2,-4.1,-5,1.2).closePath();
        this.shape_6.setTransform(9.1,7.5,0.353,0.353,-4.9);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#F38123").beginStroke().moveTo(0.7,8.3).curveTo(-0.3,7.5,-1.6,6.4).curveTo(-4,4.1,-5.5,1.4).lineTo(-5.7,1.2).lineTo(-5.5,1).curveTo(-2.5,-4.4,4.5,-8.3).lineTo(5,-8.6).lineTo(5.2,-7.9).curveTo(7.1,-1.9,1.4,8.1).lineTo(1.2,8.5).closePath();
        this.shape_7.setTransform(9.1,7.5,0.353,0.353,-4.9);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(1.3,11.5).curveTo(-0.5,10.3,-2.4,8.2).curveTo(-6,4.3,-6.8,-0.2).curveTo(-7.8,-6,-3.5,-11.7).lineTo(-3.2,-12.1).lineTo(-2.6,-12.1).lineTo(0.8,-11.2).curveTo(4.3,-9.8,5.9,-6.8).curveTo(9.3,-0.4,2.7,11.2).lineTo(2.2,12.1).closePath().moveTo(-4,4.5).curveTo(-1.6,8.4,1.9,10.7).curveTo(9.1,-2.1,3.9,-7.9).curveTo(2.3,-9.7,-0.3,-10.6).lineTo(-2.7,-11.1).curveTo(-8.6,-3.3,-4,4.5).closePath();
        this.shape_8.setTransform(8.7,6.6,0.353,0.353,-4.9);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#FCF200").beginStroke().moveTo(1.5,11.2).curveTo(-0.3,10,-2.1,8).curveTo(-5.6,4.1,-6.4,-0.1).curveTo(-7.3,-5.8,-3.1,-11.3).lineTo(-3,-11.5).lineTo(-2.7,-11.5).curveTo(-1.5,-11.5,0.5,-10.7).curveTo(3.9,-9.3,5.4,-6.5).curveTo(8.7,-0.4,2.2,11).lineTo(2,11.5).closePath();
        this.shape_9.setTransform(8.7,6.5,0.353,0.353,-4.9);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#070707").beginStroke().moveTo(-6.4,10).curveTo(-4.5,10,-1.7,8.2).curveTo(1.3,6.2,3.6,3.1).curveTo(8.3,-3.2,6.5,-9.9).curveTo(-3.3,-8.1,-6,1.1).curveTo(-7.4,5.7,-6.7,10.5).lineTo(-7.7,10.6).curveTo(-8.4,5.8,-6.9,0.8).curveTo(-3.9,-9.2,6.7,-11).lineTo(7.2,-11).lineTo(7.3,-10.6).curveTo(8.4,-7,7.6,-3.3).curveTo(6.9,0.4,4.4,3.7).curveTo(2,7,-1.3,9.1).curveTo(-4.3,11,-6.4,11).closePath();
        this.shape_10.setTransform(13.6,10.4,0.353,0.353,-4.9);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#4FDB00").beginStroke().moveTo(-7.2,10.5).curveTo(-7.9,5.9,-6.5,1.1).curveTo(-3.7,-8.8,6.8,-10.5).curveTo(9.1,-2.8,3.2,4.3).curveTo(-1.9,10.5,-6.5,10.5).closePath();
        this.shape_11.setTransform(13.6,10.4,0.353,0.353,-4.9);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#070707").beginStroke().moveTo(-1.6,5.5).curveTo(-5.9,3.7,-8.3,0.7).curveTo(-11.2,-2.9,-10.3,-6.9).lineTo(-10.2,-7.3).lineTo(-8.2,-7.3).curveTo(2.9,-7.3,7.7,-1.9).curveTo(9.8,0.5,10.4,3.9).curveTo(10.6,5.5,10.5,6.8).lineTo(10.4,7.2).lineTo(10,7.2).lineTo(7.7,7.3).curveTo(2.8,7.3,-1.6,5.5).closePath().moveTo(-9.4,-6.3).curveTo(-10,-2.9,-7.5,0.1).curveTo(-5.3,2.9,-1.1,4.6).curveTo(3,6.3,7.7,6.3).lineTo(9.5,6.3).curveTo(9.7,1.9,6.9,-1.3).curveTo(2.5,-6.3,-8.2,-6.3).closePath();
        this.shape_12.setTransform(6.3,12.4,0.353,0.353,-4.9);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#4FDB00").beginStroke().moveTo(-4.8,3.3).curveTo(-11.1,-1,-9.8,-6.8).curveTo(3.8,-7.2,8.2,-0.3).curveTo(10.4,3.2,9.9,6.7).lineTo(7.4,6.8).curveTo(0.5,6.8,-4.8,3.3).closePath();
        this.shape_13.setTransform(6.3,12.4,0.353,0.353,-4.9);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-23.5,22.2).lineTo(-23.6,22.1).lineTo(-23.7,21.9).curveTo(-25.4,15.4,-25.4,9.5).curveTo(-25.4,3.5,-23.6,0.1).curveTo(-22.8,-1.8,-23.3,-6.2).curveTo(-24,-11.6,-26.4,-16.1).curveTo(-31,-24.7,-39.7,-25.8).lineTo(-40.4,-25.9).lineTo(-40.2,-26.3).curveTo(-39.7,-28.4,-38.9,-30.7).lineTo(-38.8,-31.2).lineTo(-38.3,-31).curveTo(-29.1,-28.6,-23.5,-22.6).curveTo(-14.8,-13.5,-17.5,2).curveTo(-18.9,10.1,-18.9,14.5).curveTo(-18.8,19,-17.2,21.1).curveTo(-15.8,22.9,-12.7,23.6).curveTo(-10.7,24.1,-5.3,24.5).curveTo(3.1,25.2,8,26.2).curveTo(11.2,26.7,14.2,26.8).curveTo(22.1,26.8,29.5,22.6).curveTo(34.5,19.6,38.7,15.1).lineTo(40.4,13.3).lineTo(39.6,15.5).curveTo(38.3,19.2,35.1,22.1).curveTo(31.7,25.4,24.4,28).curveTo(15.6,31.1,6,31.1).curveTo(-10,31.2,-23.5,22.2).closePath().moveTo(-39.1,-26.7).curveTo(-30.2,-25.3,-25.5,-16.6).curveTo(-23,-12,-22.3,-6.5).curveTo(-21.7,-1.6,-22.7,0.5).curveTo(-24.2,3.4,-24.4,8.4).curveTo(-24.6,14.5,-22.8,21.5).curveTo(-9.5,30.2,6,30.1).curveTo(15.4,30.1,24.1,27.1).curveTo(31.1,24.5,34.4,21.5).curveTo(36.3,19.7,37.5,17.8).curveTo(33,21.9,28,24.4).curveTo(21.3,27.8,14.2,27.8).curveTo(10.9,27.8,7.9,27.1).curveTo(3.4,26.2,-5.3,25.5).curveTo(-10.8,25.1,-13,24.5).curveTo(-16.4,23.8,-18,21.7).curveTo(-19.7,19.5,-19.9,14.8).curveTo(-20,10.2,-18.6,1.9).curveTo(-16,-12.8,-24,-21.6).curveTo(-29.2,-27.5,-38.1,-29.9).lineTo(-39.1,-26.7).closePath();
        this.shape_14.setTransform(3.2,8.6,0.353,0.353,-4.9);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#00BEF3").beginStroke().moveTo(-22.9,21.7).curveTo(-24.7,14.9,-24.6,8.9).curveTo(-24.5,3.4,-22.9,0.2).curveTo(-22,-1.4,-22.4,-5.3).curveTo(-22.8,-9.7,-24.4,-13.8).curveTo(-28.9,-25,-39.4,-26.3).curveTo(-38.9,-28.3,-38.2,-30.6).curveTo(-28.8,-28.1,-23.3,-22.1).curveTo(-15.1,-13.1,-17.8,1.9).curveTo(-19.6,12.3,-18.9,17.1).curveTo(-18.2,21.6,-14.9,23.2).curveTo(-12.5,24.3,-5.8,24.9).curveTo(3.2,25.6,8.3,26.6).curveTo(18.3,28.6,27.6,24.2).curveTo(34.1,21.1,39.4,15.3).curveTo(38.2,18.9,35.1,21.7).curveTo(32.3,24.3,26.8,26.6).curveTo(20.4,29.3,13,30.2).curveTo(9.5,30.6,6.1,30.6).curveTo(-9.4,30.6,-22.9,21.7).closePath();
        this.shape_15.setTransform(3.1,8.6,0.353,0.353,-4.9);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(9.8,16.3).curveTo(4.3,12.6,-1.2,6.8).curveTo(-4.3,3.5,-9.7,-3.2).curveTo(-14.5,-9.1,-16.5,-11.1).curveTo(-19.8,-14.3,-22.3,-14.3).curveTo(-24.1,-14.3,-25.9,-12.7).lineTo(-27.4,-11.5).lineTo(-27.2,-12.8).lineTo(-26.3,-17.4).lineTo(-25.9,-19.5).lineTo(-25.5,-19.6).lineTo(-23.6,-19.6).curveTo(-18.7,-19.6,-14.5,-18.1).curveTo(-8.2,-15.8,-5.5,-10.3).curveTo(-1.9,-2.8,2.4,2.4).curveTo(9.1,10.3,16,10.3).lineTo(17.4,10.2).curveTo(19.6,9.9,20.6,8.2).curveTo(22.4,4.7,19.5,-4.4).lineTo(16.1,-12.8).lineTo(15.9,-13.2).lineTo(16.3,-13.5).lineTo(17.2,-13.9).curveTo(18.4,-14.3,19.5,-14.3).curveTo(22.6,-14.3,24.3,-11.1).curveTo(25.5,-8.6,27.3,-4.5).lineTo(27.4,-4.3).lineTo(26.5,-1.2).curveTo(27,2.4,26.6,6.7).curveTo(26.2,14.2,23.3,17.4).curveTo(21.3,19.6,18.3,19.6).curveTo(14.8,19.6,9.8,16.3).closePath().moveTo(-16,-12).curveTo(-13.9,-10,-8.9,-3.8).curveTo(-3.7,2.7,-0.5,6).curveTo(4.9,11.8,10.3,15.4).curveTo(18.7,21.1,22.5,16.8).curveTo(25.3,13.7,25.7,6).lineTo(25.5,-1.2).lineTo(25.5,-1.4).lineTo(26.3,-4.2).curveTo(24.8,-7.7,23.4,-10.6).curveTo(22,-13.3,19.5,-13.3).curveTo(18.4,-13.3,17.2,-12.8).curveTo(19.6,-7.7,20.9,-3.2).curveTo(23.3,5.1,21.5,8.7).curveTo(20.3,10.9,17.6,11.2).lineTo(16,11.3).curveTo(8.7,11.3,1.8,3.1).curveTo(-2.8,-2.2,-6.4,-9.8).curveTo(-9.2,-15.7,-16.6,-17.7).curveTo(-20.6,-18.8,-25.1,-18.6).curveTo(-25.5,-16.7,-26,-13.9).curveTo(-24.2,-15.3,-22.3,-15.3).curveTo(-19.6,-15.3,-16,-12).closePath();
        this.shape_16.setTransform(1.2,-16.1,0.353,0.353,-4.9);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#00BEF3").beginStroke().moveTo(10,15.8).curveTo(3.8,11.6,-2.6,4.6).lineTo(-11.9,-6.7).curveTo(-16.7,-12.4,-19.5,-14).curveTo(-23.1,-16,-26.4,-13.1).lineTo(-26.8,-12.8).curveTo(-26.4,-15.1,-25.9,-17.3).lineTo(-25.5,-19.1).lineTo(-23.2,-19.2).curveTo(-20.3,-19.1,-17.6,-18.5).curveTo(-9.1,-16.6,-6,-10.1).curveTo(-1.6,-0.7,3.8,4.7).curveTo(10.6,11.6,17.5,10.7).curveTo(23.8,9.8,20.7,-1.7).curveTo(19.8,-5.3,18,-9.6).lineTo(16.5,-13.1).lineTo(19.2,-13.8).curveTo(22.2,-14,23.8,-10.9).curveTo(25.1,-8.2,26.8,-4.3).lineTo(26,-1.3).lineTo(26.2,3.2).curveTo(26.2,8.5,25.2,12.2).curveTo(23.3,19.2,18.4,19.2).curveTo(14.9,19.2,10,15.8).closePath();
        this.shape_17.setTransform(1.2,-16.1,0.353,0.353,-4.9);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(-24.1,51.5).lineTo(-24.2,51.4).lineTo(-24.3,51.2).curveTo(-26,44.7,-26,38.8).curveTo(-26,32.8,-24.2,29.4).curveTo(-23.3,27.5,-23.9,23.1).curveTo(-24.5,17.7,-27,13.2).curveTo(-31.6,4.6,-40.3,3.5).lineTo(-40.9,3.4).lineTo(-40.8,3).curveTo(-39.5,-2.3,-37,-6.7).lineTo(-34.7,-10.2).lineTo(-34.1,-10.9).lineTo(-33.8,-10.1).lineTo(-32.2,-8.5).curveTo(-29.6,-7.1,-24.3,-7.4).curveTo(-22.5,-7.5,-21.5,-9.1).curveTo(-19.4,-12.5,-21.8,-22.4).curveTo(-23.7,-29.9,-26.7,-36.6).curveTo(-29,-41.4,-27.9,-50.9).lineTo(-26.3,-60).lineTo(-26.2,-60.4).lineTo(-25.8,-60.4).lineTo(-24,-60.5).curveTo(-19,-60.4,-14.9,-58.9).curveTo(-8.5,-56.6,-5.8,-51.1).curveTo(-2.3,-43.6,2.1,-38.4).curveTo(8.8,-30.5,15.6,-30.5).lineTo(17.1,-30.6).curveTo(19.3,-30.9,20.2,-32.6).curveTo(22.1,-36.2,19.2,-45.2).lineTo(15.8,-53.6).lineTo(15.6,-54.1).lineTo(16,-54.3).lineTo(16.9,-54.8).curveTo(18.1,-55.2,19.2,-55.2).curveTo(22.3,-55.1,24,-51.9).curveTo(32.2,-35.7,37.4,-12.1).curveTo(43.8,16.7,38.7,33.1).curveTo(40.2,38,39.7,41.8).curveTo(39.1,47.3,34.6,51.4).curveTo(31.1,54.7,23.9,57.3).curveTo(15,60.4,5.4,60.4).curveTo(-10.5,60.5,-24.1,51.5).closePath().moveTo(-36.8,-5).curveTo(-38.6,-1.5,-39.7,2.6).curveTo(-30.8,4,-26.1,12.7).curveTo(-23.6,17.3,-22.9,22.8).curveTo(-22.3,27.7,-23.3,29.8).curveTo(-24.8,32.7,-25,37.7).curveTo(-25.2,43.8,-23.4,50.8).curveTo(-10.1,59.5,5.4,59.4).curveTo(14.8,59.4,23.5,56.4).curveTo(30.5,53.8,33.9,50.8).curveTo(38.1,46.8,38.7,41.5).curveTo(39.1,38,37.7,33.2).lineTo(37.7,33.1).lineTo(37.7,33).curveTo(42.8,16.8,36.5,-11.9).curveTo(31.3,-35.3,23.1,-51.5).curveTo(21.7,-54.2,19.2,-54.2).curveTo(18.1,-54.2,16.9,-53.6).curveTo(19.3,-48.5,20.6,-44).curveTo(23,-35.7,21.1,-32.1).curveTo(19.9,-30,17.3,-29.7).lineTo(15.6,-29.5).curveTo(8.4,-29.5,1.4,-37.7).curveTo(-3.1,-43,-6.7,-50.7).curveTo(-9.5,-56.5,-16.9,-58.6).curveTo(-20.9,-59.7,-25.4,-59.5).curveTo(-26.5,-54.6,-27,-49.8).curveTo(-27.8,-41.3,-25.8,-37).curveTo(-22.8,-30.4,-20.9,-23).curveTo(-18.2,-12.5,-20.6,-8.5).curveTo(-21.8,-6.6,-24.3,-6.4).curveTo(-32,-6,-34.4,-9).curveTo(-35.6,-7.4,-36.8,-5).closePath();
        this.shape_18.setTransform(2.5,-1.7,0.353,0.353,-4.9);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#00BEF3").beginStroke().moveTo(-23.9,51.1).curveTo(-25.7,44.3,-25.6,38.3).curveTo(-25.5,32.8,-23.9,29.6).curveTo(-23,27.9,-23.4,24).curveTo(-23.7,19.7,-25.4,15.5).curveTo(-29.9,4.3,-40.4,3).curveTo(-39.1,-2.3,-36.6,-6.6).lineTo(-34.4,-9.9).lineTo(-32.7,-8.2).curveTo(-30,-6.6,-24.4,-6.9).curveTo(-18.5,-7.3,-20.7,-19.2).curveTo(-22.3,-28,-26.4,-36.8).curveTo(-28.6,-41.6,-27.4,-51.2).lineTo(-25.9,-59.9).lineTo(-23.5,-60).curveTo(-20.7,-59.9,-18,-59.3).curveTo(-9.5,-57.4,-6.4,-50.9).curveTo(-1.9,-41.5,3.5,-36.1).curveTo(10.2,-29.2,17.1,-30.1).curveTo(23.4,-31,20.4,-42.5).curveTo(19.5,-46.1,17.7,-50.4).lineTo(16.1,-53.9).lineTo(18.8,-54.6).curveTo(21.8,-54.8,23.4,-51.7).curveTo(31.6,-35.7,36.8,-12.4).curveTo(43.2,16.6,38.1,33.1).curveTo(39.6,37.9,39.1,41.7).curveTo(38.5,47.1,34.1,51.1).curveTo(31.3,53.6,25.8,55.9).curveTo(19.4,58.6,12.1,59.5).curveTo(8.5,60,5.1,60).curveTo(-10.4,60,-23.9,51.1).closePath();
        this.shape_19.setTransform(2.5,-1.7,0.353,0.353,-4.9);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(30.6,61.1).curveTo(29.1,56.5,29.1,49.3).curveTo(29.1,47.1,24.4,45.9).curveTo(19.7,44.7,11.1,44.7).curveTo(2.2,44.7,-7.5,45.7).curveTo(-12.8,51.5,-19.6,56.5).curveTo(-31.6,65.4,-40.9,65.4).lineTo(-43.1,65.3).curveTo(-50.4,64.3,-51.4,59.3).curveTo(-52.4,54.7,-47.5,48.2).curveTo(-43,42.2,-36.4,38.2).curveTo(-35.4,28.9,-33.7,20.4).curveTo(-30.5,4.6,-26.4,-1.2).curveTo(-24,-14.6,-14.6,-56.9).lineTo(-12.2,-67.8).lineTo(-11.1,-67.4).curveTo(-1.9,-64.5,15,-60.8).curveTo(23.5,-59,30.2,-57.7).lineTo(30.8,-57.6).lineTo(31,-57).lineTo(36.5,-39.2).curveTo(42.6,-17.9,46.4,0.2).curveTo(58.7,59.5,42,66.7).curveTo(39.6,67.8,37.8,67.8).curveTo(32.7,67.8,30.6,61.1).closePath().moveTo(30.1,49.3).curveTo(30.1,56.4,31.6,60.9).curveTo(33.6,66.8,37.8,66.8).curveTo(39.3,66.8,41.6,65.8).curveTo(57.5,58.9,45.4,0.4).curveTo(41.6,-17.9,35.5,-39.1).lineTo(30.1,-56.7).curveTo(23.5,-57.9,15,-59.8).curveTo(-2,-63.5,-11.4,-66.5).lineTo(-17.5,-39).curveTo(-23.6,-11.1,-25.4,-0.8).curveTo(-29.8,5.1,-33,22.5).curveTo(-34.7,31.2,-35.4,38.8).curveTo(-45.7,44.8,-49.5,53.4).curveTo(-53.7,62.9,-42.9,64.3).lineTo(-40.9,64.4).curveTo(-31.4,64.4,-18.7,54.6).curveTo(-14.8,51.5,-10.9,47.8).lineTo(-7.9,44.8).lineTo(-2,44.2).curveTo(5.1,43.7,11.1,43.7).curveTo(30.1,43.7,30.1,49.3).closePath();
        this.shape_20.setTransform(-1.6,-0.4,0.353,0.353,-4.9);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#FEE210").beginStroke().moveTo(31,60.7).curveTo(29.6,56.2,29.6,49.2).curveTo(29.6,46.7,24.8,45.4).curveTo(20,44.1,11.1,44.1).curveTo(5.5,44.1,-1,44.6).curveTo(-5.8,44.9,-7.7,45.2).curveTo(-13.3,51.1,-19.5,55.7).curveTo(-31.6,64.9,-40.9,64.9).lineTo(-43,64.7).curveTo(-50,63.8,-50.9,59.1).curveTo(-51.9,54.6,-47,48.2).curveTo(-42.5,42.4,-35.9,38.4).curveTo(-34.9,29,-33.3,20.9).curveTo(-30.2,4.7,-25.9,-1.1).curveTo(-23.7,-13.5,-14.1,-56.9).lineTo(-11.8,-67.2).lineTo(-11.3,-67.1).curveTo(3.5,-62.4,30.2,-57.2).lineTo(30.4,-57.2).lineTo(30.5,-57).curveTo(33.1,-49.3,36.5,-37.3).curveTo(42.7,-16,46.3,2.2).curveTo(57.8,59.2,41.8,66.1).curveTo(39.6,67.2,37.8,67.2).curveTo(33,67.2,31,60.7).closePath();
        this.shape_21.setTransform(-1.6,-0.3,0.353,0.353,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17.9,-23.8,35.9,47.8);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,10.9).curveTo(-7,9.3,-9.4,6.5).curveTo(-11.8,3.8,-11.2,0.4).curveTo(-10.5,-3.7,-5.5,-8.4).lineTo(-0.3,-12.3).lineTo(-0.2,-12.4).lineTo(0,-12.4).lineTo(3.3,-11.5).curveTo(6.7,-10.2,8.8,-7.5).curveTo(12.2,-3.1,11,4.2).curveTo(10.3,8,7.9,10.2).curveTo(5.4,12.4,1.9,12.4).curveTo(-1.1,12.4,-4.1,10.9).closePath().moveTo(-5.2,-7.3).curveTo(-9.7,-3,-10.2,0.6).curveTo(-10.7,3.4,-8.7,5.8).curveTo(-6.4,8.5,-3.6,10).curveTo(-0.9,11.4,1.9,11.4).curveTo(5.1,11.4,7.2,9.4).curveTo(9.4,7.5,10,4).curveTo(11.1,-2.9,8,-6.9).curveTo(5.2,-10.5,0.1,-11.4).curveTo(-2.9,-9.4,-5.2,-7.3).closePath();
        this.shape.setTransform(7.3,8.2,0.353,0.353,-4.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-9,6.1).curveTo(-13.4,1,-7.1,-6).curveTo(-5.2,-8.1,-2.4,-10.3).lineTo(-0,-11.9).lineTo(2,-11.5).curveTo(4.3,-10.8,6.1,-9.4).curveTo(12,-5.1,10.5,4.1).curveTo(9.3,11.3,2.7,11.9).lineTo(1.7,11.9).curveTo(-4.1,11.9,-9,6.1).closePath();
        this.shape_1.setTransform(7.3,8.2,0.353,0.353,-4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(15.6,35.2).curveTo(6.6,33.8,-3.4,25.9).curveTo(-13.4,17.9,-20.6,6.2).curveTo(-26.5,-3.5,-28.5,-12.7).curveTo(-30.6,-21.9,-28.3,-28.9).lineTo(-26,-35.7).lineTo(-25.5,-35.2).curveTo(-23.8,-34,-21,-30.8).curveTo(-16.6,-25.9,-15.3,-21.4).curveTo(-13.7,-15.7,-0.8,-1.5).curveTo(12.6,13.4,18.3,14.7).curveTo(22.4,15.7,26.1,20.6).curveTo(30,25.7,29.5,29.9).curveTo(29.2,32.2,27.6,33.6).curveTo(25.3,35.6,20.4,35.6).curveTo(18.4,35.6,15.6,35.2).closePath().moveTo(-27.3,-28.6).curveTo(-29.5,-21.8,-27.6,-12.8).curveTo(-25.6,-3.8,-19.7,5.6).curveTo(-12.7,17.2,-2.9,25).curveTo(6.9,32.9,15.8,34.3).curveTo(21.6,35.2,24.9,34).curveTo(28.1,32.8,28.5,29.8).curveTo(28.9,25.9,25.3,21.2).curveTo(21.8,16.6,18.1,15.7).curveTo(12,14.3,-1.6,-0.7).curveTo(-14.6,-15.2,-16.3,-21.1).curveTo(-18,-27.1,-25.5,-34).closePath();
        this.shape_2.setTransform(-0.3,-0.7,0.353,0.353,-4.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FEE210").beginStroke().moveTo(15.7,34.6).curveTo(7.3,33.3,-1.8,26.3).curveTo(-10.5,19.7,-17.4,9.9).curveTo(-24.4,-0,-27.3,-10).curveTo(-30.4,-20.8,-27.8,-28.9).lineTo(-25.8,-35).lineTo(-21.5,-30.8).curveTo(-17,-25.8,-15.8,-21.4).curveTo(-14.1,-15.7,-1.2,-1.3).curveTo(12.2,13.7,18.2,15.1).curveTo(21.4,15.8,24.7,19.5).curveTo(27.9,23.1,28.8,26.9).curveTo(29.8,31.2,27,33.3).curveTo(24.8,35,20.4,35).curveTo(18.3,35,15.7,34.6).closePath();
        this.shape_3.setTransform(-0.3,-0.7,0.353,0.353,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.3,-12.4,22.7,25);
    
    
    (lib.Tween26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,1.3).lineTo(-3.2,-0).curveTo(-1,0.9,0.9,-0.3).curveTo(2.2,-1.2,2.5,-1.8).lineTo(3.8,-1).curveTo(3.1,0.1,1.8,0.9).curveTo(0.3,1.9,-1.3,1.8).curveTo(-2.5,1.8,-3.8,1.3).closePath();
        this.shape.setTransform(19,3.3,0.321,0.321,-5.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(8.9,4).lineTo(8.8,3.9).curveTo(3.7,-3.5,-5,-3.3).curveTo(-7.7,-3.2,-10.4,-2.4).lineTo(-12.6,-1.5).lineTo(-13.4,-2.8).lineTo(-10.9,-3.8).curveTo(-7.9,-4.7,-5,-4.8).curveTo(4.4,-5,9.9,3).curveTo(10.8,3.8,12.7,2.8).lineTo(13.4,4.1).curveTo(11.9,4.8,10.9,4.8).curveTo(9.7,4.8,8.9,4).closePath();
        this.shape_1.setTransform(15.9,3.8,0.321,0.321,-5.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-2.5,0.2).curveTo(-3.4,-0.7,-3.7,-1.7).lineTo(-2.2,-2).curveTo(-2,-1.2,-1.1,-0.6).curveTo(0.5,0.8,3.5,0.5).lineTo(3.7,2).lineTo(2.5,2).curveTo(-0.7,2,-2.5,0.2).closePath();
        this.shape_2.setTransform(-5.7,2.3,0.321,0.321,-5.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(8.4,-0.9).curveTo(0.5,-4.1,-8.2,1).curveTo(-9,1.5,-10.4,1.5).curveTo(-13.1,1.6,-16,-0.8).lineTo(-15.1,-2).curveTo(-12.8,-0.1,-10.6,0).curveTo(-9.6,0.1,-8.9,-0.3).curveTo(0.4,-5.8,9.1,-2.2).curveTo(13.5,-0.4,16,2.6).lineTo(14.9,3.6).curveTo(12.4,0.7,8.4,-0.9).closePath();
        this.shape_3.setTransform(-2.5,2.7,0.321,0.321,-5.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,0.2).curveTo(-0.8,0.2,-7.5,0.8).curveTo(-2.8,-3.9,2.8,-1.3).curveTo(5.6,0,7.5,2.3).curveTo(0.5,0.3,-0.4,0.2).closePath();
        this.shape_4.setTransform(13.5,-8.9,0.353,0.353,-4.9);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-0.5,0.2).curveTo(-0.8,0.2,-7.5,0.8).curveTo(-2.8,-3.9,2.8,-1.3).curveTo(5.7,0,7.5,2.3).curveTo(0.4,0.3,-0.5,0.2).closePath();
        this.shape_5.setTransform(-3,-10.4,0.353,0.353,-4.9);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,2.9).curveTo(-3.4,2,-5.1,-2.7).lineTo(-3.6,-3.1).curveTo(-2.3,0.8,0.1,1.5).curveTo(1.4,1.9,2.9,1.3).lineTo(4.2,0.7).lineTo(5.1,1.8).curveTo(3.3,3.2,1.2,3.2).curveTo(0.3,3.2,-0.4,2.9).closePath();
        this.shape_6.setTransform(-21.1,10.1,0.353,0.353,-4.9);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#F5C538").beginStroke().moveTo(-4.5,-2.7).lineTo(4.5,1.5).curveTo(3,2.6,1.2,2.6).lineTo(1,2.7).curveTo(-2.6,2.7,-4.5,-2.7).closePath();
        this.shape_7.setTransform(-21,10,0.353,0.353,-4.9);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-1.9,6.9).curveTo(-0.8,4.3,0,1.4).curveTo(1.7,-4.5,0.4,-6.9).lineTo(1.3,-7.3).curveTo(2.7,-4.7,1.1,1.4).curveTo(0.2,4.4,-1,7.3).closePath();
        this.shape_8.setTransform(9.9,17.8,0.353,0.353,-4.9);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,-7.1).curveTo(2.2,-4.6,0.5,1.5).curveTo(-0.3,4.5,-1.5,7.1).closePath();
        this.shape_9.setTransform(9.9,17.8,0.353,0.353,-4.9);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-0.7,7.5).lineTo(-0.8,7.5).curveTo(-2.1,7.5,-4.5,6.6).curveTo(-7.5,5.5,-8.3,4).curveTo(-9,2.6,-8.8,-0.9).lineTo(-8.3,-4.4).lineTo(-8.2,-4.9).lineTo(-7.8,-4.9).curveTo(-4.6,-5,-2,-5.5).curveTo(1,-6.2,1.2,-7.2).lineTo(1.3,-8.3).lineTo(2.1,-7.5).curveTo(3.8,-5.4,8.6,-2.1).lineTo(8.8,-1.9).lineTo(8.8,-1.7).curveTo(9,-0.9,8.5,1.7).curveTo(7.9,5.2,6.2,7).curveTo(4.9,8.4,2.7,8.3).curveTo(1,8.3,-0.7,7.5).closePath().moveTo(-0.4,6.5).curveTo(3.4,8.3,5.5,6.3).curveTo(6.8,4.9,7.4,2).curveTo(7.8,0.3,7.8,-1.4).lineTo(5.2,-3.4).curveTo(3,-5.1,1.8,-6.3).curveTo(0.1,-4.3,-7.4,-3.8).curveTo(-7.7,-1.9,-7.8,-0).curveTo(-7.9,2.6,-7.4,3.6).curveTo(-6.8,4.7,-4.1,5.7).curveTo(-1.9,6.5,-0.8,6.5).lineTo(-0.6,6.5).closePath();
        this.shape_10.setTransform(9.6,17.8,0.353,0.353,-4.9);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,6.7).curveTo(-1.3,6.9,-4,6).curveTo(-7.1,4.9,-7.8,3.5).curveTo(-8.5,2.1,-8.3,-1.4).lineTo(-7.8,-4.7).lineTo(-3.2,-5.2).curveTo(1.5,-6,1.7,-7.5).curveTo(3.5,-5.3,8.3,-2).lineTo(8.2,-0.1).curveTo(8,2.2,7.3,3.9).curveTo(5.8,7.5,2.7,7.5).curveTo(1.2,7.5,-0.7,6.7).closePath();
        this.shape_11.setTransform(9.6,17.9,0.353,0.353,-4.9);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#B60103").beginStroke().moveTo(-10.3,1.7).curveTo(-11.5,-1.4,-12.6,-4.9).lineTo(-13.3,-7.8).curveTo(-6.4,-1.4,4.1,-2.1).curveTo(9.4,-2.4,13.3,-4).curveTo(12.4,2.4,9.7,7.8).curveTo(-0,1.8,-10.3,1.7).closePath();
        this.shape_12.setTransform(4.9,17.7,0.353,0.353,-4.9);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,-2.6).curveTo(2,-3.8,4.6,-4.2).lineTo(4.9,-2.7).curveTo(2.7,-2.4,0.6,-1.4).curveTo(-3.5,0.7,-3.3,4.1).lineTo(-4.8,4.2).curveTo(-5.1,-0.1,-0.4,-2.6).closePath();
        this.shape_13.setTransform(-0.1,15.3,0.353,0.353,-4.9);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-10.2,1).curveTo(-11.8,-2.7,-13.2,-7.2).lineTo(-14.3,-11.2).curveTo(-14.5,-11.9,-13.9,-12.3).lineTo(-13.4,-12.5).curveTo(-13,-12.5,-12.7,-12.2).curveTo(-6.7,-6.7,2.3,-6.7).curveTo(8,-6.7,12.9,-8.5).lineTo(13.3,-8.6).curveTo(13.7,-8.6,14,-8.4).curveTo(14.3,-8,14.3,-7.6).lineTo(14.3,-7.5).curveTo(13.6,-2.4,11.5,2.7).curveTo(7.7,11.9,1.6,12.4).lineTo(1,12.5).curveTo(-5,12.5,-10.2,1).closePath().moveTo(-9.5,0).curveTo(-4.5,11.5,1,11.5).lineTo(1.5,11.4).curveTo(7.2,11,10.8,1.6).curveTo(12,-1.3,12.8,-4.8).lineTo(13.3,-7.6).curveTo(12.1,-7.1,10.1,-6.7).curveTo(6.2,-5.7,2.3,-5.7).curveTo(-7.1,-5.7,-13.4,-11.5).closePath();
        this.shape_14.setTransform(5,19,0.353,0.353,-4.9);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#FC0201").beginStroke().moveTo(-9.8,0.7).curveTo(-11.4,-2.9,-12.7,-7.3).lineTo(-13.8,-11.3).curveTo(-13.9,-11.7,-13.6,-11.9).lineTo(-13.4,-12).curveTo(-13.3,-12,-13.3,-12).curveTo(-13.2,-12,-13.2,-12).curveTo(-13.1,-11.9,-13.1,-11.9).curveTo(-13.1,-11.9,-13,-11.9).curveTo(-6.9,-6.2,2.3,-6.2).curveTo(6.1,-6.2,10,-7.2).curveTo(11.9,-7.6,13.1,-8.1).lineTo(13.3,-8.2).lineTo(13.6,-8.1).curveTo(13.7,-8,13.7,-8).curveTo(13.8,-7.9,13.8,-7.9).curveTo(13.8,-7.8,13.8,-7.7).curveTo(13.8,-7.7,13.8,-7.6).lineTo(13.2,-4.3).curveTo(12.3,-0.8,11.2,2.2).curveTo(7.5,11.4,1.5,12).lineTo(1,12).curveTo(-4.8,12,-9.8,0.7).closePath();
        this.shape_15.setTransform(5,19,0.353,0.353,-4.9);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(4.5,0.2).curveTo(-2.8,4.1,-11.6,3.1).curveTo(-20.8,2,-25.3,-4.4).lineTo(-24.1,-5.2).curveTo(-19.8,0.8,-10.9,1.6).curveTo(-2.5,2.5,4.5,-1.4).lineTo(5.1,-1.8).lineTo(5.5,-1.1).curveTo(8.9,4.5,17.1,3.5).curveTo(21.2,3.1,24.6,1.4).lineTo(25.3,2.7).curveTo(24,3.3,22,4).curveTo(18.2,5.2,14.7,5.2).curveTo(8,5.2,4.5,0.2).closePath();
        this.shape_16.setTransform(8.6,15.8,0.353,0.353,-4.9);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,5.8).curveTo(-5.3,4.9,-5.2,1.4).curveTo(-5.1,-1.8,-0.7,-4.3).curveTo(1.4,-5.5,3.5,-6.1).curveTo(6.7,-5.3,3.9,-5.2).curveTo(-0.1,-5,-3.9,0.6).curveTo(-5.2,2.5,-1.5,4.2).curveTo(0.4,5,2.4,5.4).curveTo(0.6,6.1,-0.8,6.1).curveTo(-1.8,6.1,-2.7,5.8).closePath();
        this.shape_17.setTransform(-14.8,-0.3,0.353,0.353,-4.9);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(7.8,-0.4).curveTo(6.5,-1.9,4.1,-3.1).curveTo(1.7,-4.3,0.3,-4.3).curveTo(-1.8,-4.4,-5.7,-2.7).lineTo(-9.2,-1).lineTo(-10.1,-0.7).curveTo(-11,-0.5,-10.7,-1.2).curveTo(-6.9,-4.6,-0,-5.2).curveTo(7.9,-6,10.1,-0.7).curveTo(12.2,4.2,7.5,5.3).lineTo(2.3,5.3).curveTo(11.3,3.7,7.8,-0.4).closePath();
        this.shape_18.setTransform(3.6,-11.6,0.353,0.353,-4.9);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(-44.3,25.5).curveTo(-49.5,20.4,-50.5,14.1).curveTo(-51.5,8.2,-46.9,2.3).curveTo(-43,-2.7,-36.3,-6.1).curveTo(-29.6,-9.4,-21.8,-10.2).curveTo(-19.2,-17,-13.3,-21.7).curveTo(-6.7,-27,0.9,-27).curveTo(4.8,-27,8.4,-25.5).curveTo(16.2,-30.9,26.2,-30.9).curveTo(32.5,-30.9,37.8,-28.7).curveTo(43.2,-26.5,46.4,-22.5).curveTo(49.5,-18.8,50.4,-14.8).curveTo(51.3,-10.8,49.7,-7.6).curveTo(48.6,-5.1,46.1,-3.5).curveTo(42.5,-1.2,36.6,-1.2).curveTo(34,-1.2,31,-1.6).curveTo(18.9,-3.6,15.3,-9.5).curveTo(14,-11.4,13.9,-13.7).lineTo(13.4,-13.7).curveTo(11.6,-13.7,8.3,-14.4).curveTo(5.2,-15,4.5,-15).curveTo(3.6,-15,3.2,-14.6).curveTo(-0.3,-12.1,-10.3,-7.5).curveTo(-10.6,-1.6,-15.6,2.6).curveTo(-18.3,5,-23.9,7.7).lineTo(-24.2,7.8).curveTo(-22.2,8.6,-20.8,10.4).curveTo(-19.3,12.1,-18.7,14.4).curveTo(-17.6,18,-18.8,21.5).curveTo(-20.2,25.8,-24.6,28.6).curveTo(-28.2,30.9,-32.2,30.9).curveTo(-38.8,30.9,-44.3,25.5).closePath().moveTo(-12.5,-20.5).curveTo(-18.5,-15.7,-20.7,-8.8).curveTo(-33.1,-7.9,-41.8,-0.8).curveTo(-50.3,6.2,-49.1,13.8).curveTo(-48.1,19.8,-43.2,24.5).curveTo(-38.1,29.4,-32.2,29.4).curveTo(-28.6,29.4,-25.4,27.3).curveTo(-18.3,22.7,-20,15.5).curveTo(-20.6,12.5,-22.7,10.5).curveTo(-24.9,8.5,-27.7,8.5).curveTo(-28.1,7.5,-20,4).curveTo(-11.7,-1,-11.7,-8.5).curveTo(-8.8,-9.8,-4.6,-11.9).curveTo(0.5,-14.5,2.3,-15.8).curveTo(3.1,-16.5,4.5,-16.5).curveTo(5.7,-16.5,8.8,-15.8).curveTo(11.8,-15.2,13.4,-15.2).curveTo(14.7,-15.2,15.6,-15.5).lineTo(15.4,-14).curveTo(15.4,-12.1,16.4,-10.4).curveTo(19.6,-5,31.3,-3.1).curveTo(34.2,-2.7,36.6,-2.7).curveTo(46.5,-2.7,48.7,-9).curveTo(50.8,-14.9,45.3,-21.6).curveTo(42.1,-25.3,37,-27.4).curveTo(32,-29.4,26.2,-29.4).curveTo(21.5,-29.4,17,-28).curveTo(12.3,-26.6,8.6,-23.8).curveTo(4.8,-25.5,0.9,-25.5).curveTo(-6.3,-25.5,-12.5,-20.5).closePath();
        this.shape_19.setTransform(-4.6,-6,0.353,0.353,-4.9);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#F5C538").beginStroke().moveTo(-43.8,24.9).curveTo(-48.8,20,-49.8,13.9).curveTo(-50.7,8.4,-46.4,2.8).curveTo(-42.4,-2.2,-35.7,-5.5).curveTo(-28.9,-8.8,-21.3,-9.5).curveTo(-18.9,-16.2,-13,-21).curveTo(-6.6,-26.3,0.9,-26.3).curveTo(4.7,-26.3,8.5,-24.7).curveTo(16,-30.1,26.2,-30.1).curveTo(32.3,-30.1,37.5,-28).curveTo(42.7,-25.9,45.8,-22.1).curveTo(48.8,-18.5,49.6,-14.8).curveTo(50.5,-11,49.1,-7.9).curveTo(47.7,-5,44.5,-3.5).curveTo(41.3,-1.9,36.6,-1.9).curveTo(34.1,-1.9,31.1,-2.4).curveTo(19.3,-4.3,15.9,-9.8).curveTo(14.6,-12.1,14.7,-14.5).lineTo(13.4,-14.5).curveTo(11.9,-14.5,8.4,-15.1).curveTo(5.5,-15.7,4.5,-15.7).curveTo(3.3,-15.7,2.7,-15.2).curveTo(-0.4,-12.9,-11,-8).curveTo(-11.2,-2.2,-16,2).curveTo(-18.7,4.4,-24.2,7).lineTo(-26.1,7.9).curveTo(-23.8,8.4,-22,10.2).curveTo(-20.2,12,-19.4,14.6).curveTo(-18.4,18,-19.5,21.3).curveTo(-20.9,25.3,-25,27.9).curveTo(-28.4,30.1,-32.2,30.1).curveTo(-38.5,30.1,-43.8,24.9).closePath();
        this.shape_20.setTransform(-4.6,-6,0.353,0.353,-4.9);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#E0CEBF").beginStroke().moveTo(14.8,21.9).curveTo(-0.2,21.6,-15.2,15.9).curveTo(-29.5,10.5,-39.3,2.1).curveTo(-49.2,-6.5,-50.7,-15).lineTo(-51,-17.7).curveTo(-49.3,-18.5,-40.3,-22).curveTo(-33,-4.1,-20.1,4.5).curveTo(3,20,46.3,12.4).lineTo(51,11.6).curveTo(48.2,13.7,44.3,15.8).curveTo(32.1,22,16.5,22).lineTo(14.8,21.9).closePath();
        this.shape_21.setTransform(-0.3,20.3,0.353,0.353,-4.9);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(-15.1,25.3).curveTo(-26.7,22.1,-36.9,16.4).curveTo(-47,10.8,-53.1,4).curveTo(-59.3,-2.8,-60.4,-9.4).lineTo(-60.7,-12.2).lineTo(-60.7,-13).lineTo(-60.1,-13.2).curveTo(-49.3,-18.1,-35.9,-21.6).curveTo(-16.6,-26.7,5.2,-28.2).curveTo(8.4,-28.4,12.2,-28.4).curveTo(37.5,-28.4,60.2,-16.4).lineTo(60.8,-16).lineTo(60.7,-15.4).curveTo(59.7,-2.6,53.4,6.9).curveTo(47.1,16.4,36,22.1).curveTo(23.6,28.4,7.8,28.4).curveTo(-3.3,28.4,-15.1,25.3).closePath().moveTo(5.3,-27.2).curveTo(-16.5,-25.7,-36,-20.5).curveTo(-49.3,-17,-59.7,-12.3).lineTo(-59.4,-9.6).curveTo(-57.1,3.9,-36.4,15.6).curveTo(-15.3,27.4,7.8,27.4).curveTo(23.4,27.4,35.6,21.2).curveTo(47.7,15,53.9,4.3).curveTo(58.8,-4.2,59.7,-15.5).curveTo(37.3,-27.4,12.2,-27.4).curveTo(8.4,-27.4,5.3,-27.2).closePath();
        this.shape_22.setTransform(2.6,18.2,0.353,0.353,-4.9);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-36.2,16.1).curveTo(-57.5,4.4,-59.9,-9.5).lineTo(-60.2,-12.3).lineTo(-60.2,-12.7).lineTo(-59.9,-12.8).curveTo(-49.2,-17.6,-35.8,-21.2).curveTo(-16.4,-26.2,5.3,-27.7).curveTo(8.3,-27.9,12.2,-27.9).curveTo(37.4,-27.9,60,-15.9).lineTo(60.2,-15.8).lineTo(60.2,-15.4).curveTo(59.2,-2.8,53,6.7).curveTo(46.8,16,35.9,21.7).curveTo(23.5,27.9,7.8,27.9).curveTo(-14.9,27.9,-36.2,16.1).closePath();
        this.shape_23.setTransform(2.6,18.2,0.353,0.353,-4.9);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(13.3,36.4).curveTo(5.1,33.6,-7.1,20.6).lineTo(-18.4,7.4).lineTo(-18.5,7.2).lineTo(-18.5,7).curveTo(-19.9,-2.8,-19.5,-12.6).curveTo(-18.7,-31.8,-10.6,-35.7).curveTo(-8.1,-36.8,-5,-36.4).curveTo(-1.7,-36,1.7,-34).lineTo(1.9,-33.9).lineTo(2,-33.8).curveTo(10.2,-23,16.6,-8.1).lineTo(17.7,-3.9).curveTo(18.9,1.3,19.3,6.6).curveTo(20.7,23.6,14.2,36).lineTo(13.9,36.6).closePath().moveTo(-10,-34.3).curveTo(-17.2,-30.8,-17.9,-12.8).curveTo(-18.3,-3.6,-17.1,6.6).curveTo(-12.2,13,-5.9,19.7).curveTo(5.6,31.9,13.1,34.7).curveTo(19.2,22.8,17.8,6.5).curveTo(17.4,1.4,16.2,-3.6).lineTo(15.2,-7.6).curveTo(8.9,-22.2,0.9,-32.8).curveTo(-2.3,-34.5,-5.1,-34.9).lineTo(-6.6,-35.1).curveTo(-8.4,-35.1,-10,-34.3).closePath();
        this.shape_24.setTransform(16,5.5,0.353,0.353,-4.9);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7,19.7).lineTo(-17.8,7).curveTo(-19.1,-2,-18.8,-11.7).curveTo(-18.1,-31.2,-10.3,-34.9).curveTo(-5.5,-37.2,1.4,-33.3).curveTo(9.6,-22.5,15.9,-7.8).lineTo(17,-3.8).curveTo(18.1,1.3,18.6,6.6).curveTo(20,23.4,13.5,35.7).curveTo(5.4,33,-7,19.7).closePath();
        this.shape_25.setTransform(16,5.4,0.353,0.353,-4.9);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(-37,31.2).curveTo(-35.3,14.7,-30,-0.4).curveTo(-19.7,-30.5,-1.3,-32.1).lineTo(0.7,-32.2).curveTo(18.1,-32.2,29.1,-7.7).curveTo(34.7,4.6,36.9,18.2).lineTo(37.1,18.9).lineTo(-37.1,32.2).closePath().moveTo(-1.2,-30.6).curveTo(-17.8,-29.2,-27.7,-2.2).curveTo(-33.2,12.8,-35.4,30.4).lineTo(35.3,17.8).curveTo(32.6,3.3,26.9,-8.8).curveTo(16.3,-30.7,0.7,-30.7).lineTo(-1.2,-30.6).closePath();
        this.shape_26.setTransform(-3.3,2.5,0.353,0.353,-4.9);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-29.6,1).curveTo(-19.3,-29.7,-1.3,-31.3).curveTo(16.9,-32.8,28.4,-7.4).curveTo(34.1,5.4,36.3,18.4).lineTo(-36.3,31.4).curveTo(-34.8,16.3,-29.6,1).closePath();
        this.shape_27.setTransform(-3.4,2.5,0.353,0.353,-4.9);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.beginFill("#000000").beginStroke().moveTo(-0.1,5.4).curveTo(-3,3.9,-3.4,1.6).curveTo(-4.1,-2,2.6,-6.6).lineTo(3.5,-5.3).curveTo(-2.4,-1.3,-1.9,1.4).curveTo(-1.7,2.8,0.3,3.9).curveTo(1.7,4.8,3.2,5.1).lineTo(2.9,6.6).curveTo(1.3,6.2,-0.1,5.4).closePath();
        this.shape_28.setTransform(-19.9,4.4,0.353,0.353,-4.9);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.beginFill("#F5C538").beginStroke().moveTo(-2,3.3).curveTo(-5.2,-0.5,2.9,-5.9).lineTo(2.9,5.9).curveTo(-0.4,5.2,-2,3.3).closePath();
        this.shape_29.setTransform(-19.9,4.4,0.353,0.353,-4.9);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(-7.4,14.5).lineTo(-7.8,14.4).lineTo(-8,14.2).curveTo(-10.5,11.8,-12.4,8.5).curveTo(-16.2,2.2,-14.8,-3.3).curveTo(-12.6,-12.1,2.7,-16.2).lineTo(3.4,-16.4).lineTo(4,-16).lineTo(6.4,-14).curveTo(9,-11.6,10.9,-9.1).curveTo(16.9,-1.3,14.5,4.8).curveTo(15.1,9.8,12.5,12.9).curveTo(9.6,16.5,3.4,16.4).curveTo(-1.2,16.5,-7.4,14.5).closePath().moveTo(-13.4,2.2).curveTo(-12.1,8.2,-7,13.1).curveTo(-0.8,14.9,3.4,14.9).curveTo(10.6,15,12.5,9.9).curveTo(13.1,8.2,13.1,6.3).lineTo(13,4.7).curveTo(15.4,-1,9.5,-8.5).curveTo(7.6,-10.8,5.2,-13.1).lineTo(3.1,-14.8).curveTo(-16,-9.6,-13.4,2.2).closePath();
        this.shape_30.setTransform(-21.2,3.8,0.353,0.353,-4.9);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.beginFill("#F5C538").beginStroke().moveTo(-7.2,13.8).lineTo(-7.4,13.7).lineTo(-7.5,13.5).curveTo(-9.9,11.3,-11.7,8.2).curveTo(-15.4,2,-14.1,-3.1).curveTo(-12,-11.5,2.9,-15.6).lineTo(3.2,-15.7).lineTo(3.5,-15.5).lineTo(5.9,-13.5).curveTo(8.4,-11.1,10.3,-8.7).curveTo(16.1,-1.2,13.8,4.8).curveTo(14,6.2,13.8,7.8).curveTo(13.4,10.5,11.9,12.4).curveTo(9.2,15.6,3.4,15.7).curveTo(-1,15.6,-7.2,13.8).closePath();
        this.shape_31.setTransform(-21.2,3.8,0.353,0.353,-4.9);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-10.1,6.1).curveTo(-12.2,2.9,-11.3,-2.9).lineTo(-9.8,-8.4).lineTo(-9.3,-9.6).lineTo(11.6,-4.2).lineTo(11.6,-3).lineTo(11.3,-1).curveTo(10.9,1.4,9.8,3.3).curveTo(6.2,9.6,-2.4,9.6).curveTo(-7.7,9.6,-10.1,6.1).closePath().moveTo(-9.2,-5.3).curveTo(-10.1,-2.4,-10.1,0.1).curveTo(-10.2,8.1,-2.4,8.1).curveTo(5.4,8.1,8.5,2.5).curveTo(9.5,0.8,9.9,-1.3).lineTo(10.1,-3).lineTo(-8.4,-7.8).closePath();
        this.shape_32.setTransform(-20.7,9.7,0.353,0.353,-4.9);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.beginFill("#F5C538").beginStroke().moveTo(-9.5,5.7).curveTo(-11.5,2.6,-10.5,-2.9).lineTo(-9.1,-8.1).lineTo(-8.8,-8.8).lineTo(10.8,-3.6).lineTo(10.8,-3.1).lineTo(10.6,-1.2).curveTo(10.2,1.1,9.1,2.9).curveTo(5.8,8.8,-2.4,8.8).curveTo(-7.4,8.8,-9.5,5.7).closePath();
        this.shape_33.setTransform(-20.7,9.7,0.353,0.353,-4.9);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-15.3,57.8).curveTo(-27,54.6,-37.2,48.9).curveTo(-47.3,43.2,-53.6,36.4).curveTo(-59.8,29.5,-60.9,22.7).curveTo(-62.4,14.2,-58.6,1.1).curveTo(-55,-11.2,-47.9,-24.2).curveTo(-40.8,-37.2,-32.6,-46.4).curveTo(-23.8,-56.3,-16.3,-58.8).curveTo(-10,-60.9,-2.8,-60.9).curveTo(11.3,-60.9,24.7,-52.5).curveTo(45.3,-39.5,58.2,-9).lineTo(58.3,-8.9).lineTo(58.3,-8.8).lineTo(60.1,-1.4).curveTo(61.7,7.4,61.2,15.7).curveTo(60.4,28.9,54,38.9).curveTo(47.6,48.8,36.2,54.5).curveTo(23.7,61,7.7,60.9).curveTo(-3.5,60.9,-15.3,57.8).closePath().moveTo(-15.8,-57.4).curveTo(-22.9,-54.9,-31.5,-45.3).curveTo(-39.5,-36.3,-46.5,-23.7).curveTo(-53.6,-10.8,-57.1,1.2).curveTo(-60.9,14.1,-59.5,22.4).curveTo(-57.1,35.9,-36.5,47.6).curveTo(-15.4,59.5,7.7,59.4).curveTo(23.3,59.4,35.5,53.3).curveTo(58,41.8,59.7,15.6).curveTo(60.2,7.3,58.6,-1.3).lineTo(56.9,-8.4).curveTo(45.5,-35.2,28.1,-48.3).curveTo(13.4,-59.5,-2.8,-59.5).curveTo(-9.7,-59.4,-15.8,-57.4).closePath();
        this.shape_34.setTransform(1.7,6.9,0.353,0.353,-4.9);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.beginFill("#EEEC38").beginStroke().moveTo(-36.4,48.4).curveTo(-57.7,36.6,-60.2,22.6).curveTo(-61.6,14.2,-57.8,1.2).curveTo(-54.3,-11,-47.3,-23.8).curveTo(-40.2,-36.7,-32.1,-45.8).curveTo(-23.4,-55.6,-16,-58.1).curveTo(-9.8,-60.2,-2.8,-60.2).curveTo(11.2,-60.2,24.4,-51.9).curveTo(44.8,-39,57.6,-8.7).lineTo(59.4,-1.3).curveTo(61,7.6,60.4,15.9).curveTo(58.5,42.4,35.9,53.9).curveTo(23.5,60.2,7.8,60.2).curveTo(-15.1,60.2,-36.4,48.4).closePath();
        this.shape_35.setTransform(1.6,6.9,0.353,0.353,-4.9);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-1.6,15.3).curveTo(-3.6,15.3,-5,13.9).curveTo(-7,11.8,-7.4,6.5).curveTo(-7.7,3.5,-7.4,-4).curveTo(-7.2,-9.7,-7.3,-11.9).lineTo(-7.5,-15.3).lineTo(-4.9,-13.1).lineTo(2.1,-6.1).curveTo(8.4,1.7,7.4,7.3).curveTo(6.4,12.7,-0.9,15.2).lineTo(-1.1,15.3).closePath().moveTo(-6.1,4.2).curveTo(-5.8,13.8,-1.6,13.8).lineTo(-1.4,13.8).curveTo(10.5,9.7,3.5,-1.5).curveTo(1.3,-5.1,-2.5,-8.9).lineTo(-5.9,-12).curveTo(-5.6,-7.5,-6.1,4.2).closePath();
        this.shape_36.setTransform(23.8,6.9,0.353,0.353,-4.9);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.beginFill("#EEEC38").beginStroke().moveTo(-1.6,14.1).curveTo(-3.3,14.1,-4.5,12.9).curveTo(-6.3,11,-6.7,5.9).curveTo(-6.9,2.8,-6.7,-4.4).curveTo(-6.5,-10.2,-6.6,-12.4).lineTo(-6.7,-14.1).lineTo(-5.4,-13).lineTo(1.4,-6.1).curveTo(7.6,1.4,6.7,6.7).curveTo(5.8,11.7,-1.1,14).lineTo(-1.2,14.1).closePath();
        this.shape_37.setTransform(23.8,7.1,0.353,0.353,-4.9);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-17.3,-20.8).lineTo(-16.3,-21.1).lineTo(-15.1,-21.3).curveTo(-13.8,-21.5,-12.3,-21.5).curveTo(-6.5,-21.5,-1.1,-18.5).curveTo(6.7,-14.2,12.1,-4.2).curveTo(19.4,9.1,16.5,16.5).curveTo(15.5,18.9,13.5,20.4).lineTo(11.7,21.4).lineTo(11.1,21.5).closePath().moveTo(-14.8,-19.9).lineTo(11.7,19.7).curveTo(14.1,18.6,15.1,15.9).curveTo(17.8,9.3,10.8,-3.5).curveTo(4.7,-14.6,-4.2,-18.3).curveTo(-8.3,-20,-12.3,-20).curveTo(-13.6,-20,-14.8,-19.9).closePath();
        this.shape_38.setTransform(15.6,-4.6,0.353,0.353,-4.9);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.beginFill("#F5C538").beginStroke().moveTo(-16.3,-20.3).lineTo(-13.6,-20.7).curveTo(-10.3,-20.9,-6.9,-19.9).curveTo(4,-16.9,11.2,-3.8).curveTo(18.4,9.3,15.5,16.3).curveTo(14.1,19.8,11.2,20.7).closePath();
        this.shape_39.setTransform(15.7,-4.7,0.353,0.353,-4.9);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.beginFill("#000000").beginStroke().moveTo(7.3,20.5).lineTo(2.7,18.9).curveTo(2.6,18.9,2.6,18.9).curveTo(2.6,18.9,2.5,18.9).curveTo(2.5,18.8,2.5,18.8).curveTo(2.4,18.8,2.4,18.8).curveTo(-0.6,16.1,-3.3,12.2).curveTo(-8.6,4.4,-8.3,-3).curveTo(-7.9,-12.7,2.5,-20.4).curveTo(2.8,-20.6,3.2,-20.5).curveTo(3.6,-20.2,3.7,-19.8).curveTo(5.6,2.9,8.3,19.7).curveTo(8.4,20.1,8.1,20.4).curveTo(7.9,20.6,7.6,20.6).closePath().moveTo(-6.8,-3).curveTo(-7.1,3.7,-2.3,10.9).curveTo(0.2,14.8,3.3,17.6).lineTo(6.7,18.7).curveTo(4.1,1.9,2.3,-18.4).curveTo(-6.4,-11.5,-6.8,-3).closePath();
        this.shape_40.setTransform(-1.8,-20.9,0.353,0.353,-4.9);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.beginFill("#EEEC38").beginStroke().moveTo(3,18.2).curveTo(-2.9,13,-5.9,5.7).curveTo(-11.8,-9,3,-19.8).curveTo(5,3.2,7.6,19.8).closePath();
        this.shape_41.setTransform(-1.8,-20.9,0.353,0.353,-4.9);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.beginFill("#000000").beginStroke().moveTo(4.8,16.8).curveTo(-4.9,16.7,-9.9,10.6).curveTo(-14.8,4.6,-15,-6.1).curveTo(-15.1,-11.5,-14.2,-16.2).curveTo(-14.1,-16.7,-13.5,-16.8).curveTo(-12.9,-16.8,-12.7,-16.2).curveTo(-10.9,-8.7,2,4).curveTo(8.4,10.4,14.7,15.4).curveTo(15.1,15.8,14.9,16.2).curveTo(14.8,16.7,14.2,16.8).closePath().moveTo(-13.2,-2.1).curveTo(-12.3,5.3,-8.7,9.6).curveTo(-4,15.5,5.5,15.3).lineTo(12.1,15.3).curveTo(5.3,9.6,-0.7,3.5).curveTo(-10.1,-6.2,-13.1,-12.9).curveTo(-13.8,-7.2,-13.2,-2.1).closePath();
        this.shape_42.setTransform(-12.2,-17.1,0.353,0.353,-4.9);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.beginFill("#EEEC38").beginStroke().moveTo(-13.5,0.2).curveTo(-15.1,-7.9,-13.4,-16).curveTo(-11.5,-8.3,1.6,4.6).curveTo(8.1,11.1,14.3,16).lineTo(5.6,16).lineTo(4.8,16).curveTo(-10.5,16,-13.5,0.2).closePath();
        this.shape_43.setTransform(-12.2,-17.1,0.353,0.353,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.5,-28.2,53.2,56.4);
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill().beginStroke("#660000").setStrokeStyle(1,1,1).moveTo(-3.6,0).curveTo(-3.6,-1.5,-2.6,-2.6).curveTo(-1.5,-3.7,0,-3.7).curveTo(1.5,-3.7,2.6,-2.6).curveTo(3.7,-1.5,3.7,0).curveTo(3.7,1.5,2.6,2.5).curveTo(1.5,3.6,0,3.6).curveTo(-1.5,3.6,-2.6,2.5).curveTo(-3.6,1.5,-3.6,0).closePath();
        this.shape.setTransform(9.2,37.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FBFFBF").beginStroke().moveTo(-2.6,2.6).curveTo(-3.6,1.5,-3.6,-0).curveTo(-3.6,-1.5,-2.6,-2.6).curveTo(-1.5,-3.6,-0,-3.6).curveTo(1.5,-3.6,2.6,-2.6).curveTo(3.6,-1.5,3.7,-0).curveTo(3.6,1.5,2.6,2.6).curveTo(1.5,3.6,-0,3.7).curveTo(-1.5,3.6,-2.6,2.6).closePath();
        this.shape_1.setTransform(9.2,37.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill().beginStroke("#660000").setStrokeStyle(1,1,1).moveTo(0,-3.7).curveTo(1.5,-3.7,2.5,-2.6).curveTo(3.6,-1.5,3.6,0).curveTo(3.6,1.5,2.5,2.5).curveTo(1.5,3.6,0,3.6).curveTo(-1.5,3.6,-2.6,2.5).curveTo(-3.6,1.5,-3.6,0).curveTo(-3.6,-1.5,-2.6,-2.6).curveTo(-1.5,-3.7,0,-3.7).closePath();
        this.shape_2.setTransform(55.1,34.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FBFFBF").beginStroke().moveTo(-2.6,2.6).curveTo(-3.6,1.5,-3.6,0).curveTo(-3.6,-1.5,-2.6,-2.6).curveTo(-1.5,-3.6,-0,-3.7).curveTo(1.5,-3.6,2.6,-2.6).curveTo(3.6,-1.5,3.7,0).curveTo(3.6,1.5,2.6,2.6).curveTo(1.5,3.7,-0,3.6).curveTo(-1.5,3.7,-2.6,2.6).closePath();
        this.shape_3.setTransform(55.1,34.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));
    
        // Layer 1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#C58538").beginStroke().moveTo(-9.9,2).lineTo(-17.8,1.8).curveTo(-21.6,1.6,-21.7,1).curveTo(-21.8,-0,-14.2,-0.5).curveTo(-12.5,-0.7,2.4,-1.2).lineTo(15.7,-1.9).curveTo(21.7,-2.2,21.6,-1.5).curveTo(21.7,-1.1,21,-0.7).curveTo(19.7,0.2,16.1,0.5).curveTo(9.9,1.1,2.9,1.5).curveTo(-5.6,2,-9.3,2).lineTo(-9.9,2).closePath();
        this.shape_4.setTransform(36.5,32,1.171,0.957);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#C7823E").beginStroke().moveTo(-17.3,15.3).curveTo(-19.6,15.3,-21.8,12.8).curveTo(-24.2,10.1,-24.3,6.5).lineTo(-25.4,-7.2).curveTo(-25.3,-9.9,-22.9,-12.1).curveTo(-20.3,-14.3,-16.9,-14.3).lineTo(17,-15.9).curveTo(20.5,-15.9,23,-13.6).curveTo(25.4,-11.3,25.4,-8).lineTo(25.4,5.3).curveTo(25.4,8.6,21.1,12.2).curveTo(16.6,15.9,12,15.9).closePath();
        this.shape_5.setTransform(35.5,58.7,1.171,1.296);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#914327").beginStroke().moveTo(-20.4,19.3).curveTo(-23.2,19.3,-25.7,16.3).curveTo(-28.6,12.9,-28.6,8.2).lineTo(-30,-9.2).curveTo(-29.9,-12.6,-27,-15.3).curveTo(-24,-18.1,-20,-18.1).lineTo(20.1,-20.1).curveTo(24.1,-20.1,27.1,-17.1).curveTo(30,-14.2,30,-10.1).lineTo(30,6.7).curveTo(30,10.9,24.8,15.4).curveTo(19.5,20.1,14,20.1).closePath();
        this.shape_6.setTransform(35.1,55.5,1.171,1.296);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#722A15").beginStroke().moveTo(-20.6,19.3).curveTo(-23.4,19.3,-26.1,16.3).curveTo(-29,12.9,-29,8.2).lineTo(-30.3,-9.2).curveTo(-30.3,-12.6,-27.3,-15.3).curveTo(-24.3,-18.1,-20.3,-18.1).lineTo(20.3,-20.1).curveTo(24.5,-20.1,27.4,-17.1).curveTo(30.3,-14.2,30.3,-10.1).lineTo(30.3,6.7).curveTo(30.3,10.9,25.1,15.4).curveTo(19.8,20.1,14.2,20.1).closePath();
        this.shape_7.setTransform(35.5,49.5,1.171,0.957);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#82341D").beginStroke().moveTo(-3.8,-6.3).lineTo(3.7,-9.6).lineTo(3.2,9.3).lineTo(-3.7,9.6).closePath();
        this.shape_8.setTransform(55.4,22.7,1.171,1.603);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#82341D").beginStroke().moveTo(-4.2,-2.8).lineTo(4.1,-4.9).lineTo(4,4.2).lineTo(-3.7,5).closePath();
        this.shape_9.setTransform(9.6,30.5,1.171,0.957);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(40));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,7.3,71,74.3);
    
    
    (lib.Group_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#EDC90C").beginStroke().moveTo(10.4,44.1).curveTo(-2.3,28.2,5.3,8.5).curveTo(14.2,-14.4,6.1,-29.1).curveTo(-1.3,-42.6,-23.6,-49.7).curveTo(-32.2,-52.5,-33,-55.8).curveTo(-20.7,-56.8,-8.9,-52.9).curveTo(2.5,-49.2,10.6,-42).curveTo(18.8,-34.6,21.1,-25.6).curveTo(23.6,-16,18.5,-6.5).curveTo(8,13.2,16.8,32.1).curveTo(22.2,43.6,33,52.5).curveTo(29.2,55,24.5,56).curveTo(16.7,52,10.4,44.1).closePath();
        this.shape.setTransform(33,56);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,66.1,112), null);
    
    
    (lib.Group = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#E8D7C8").beginStroke().moveTo(14.1,15.6).curveTo(8.6,-2.1,-17.9,-10.5).curveTo(-26.5,-13.3,-27.4,-16.5).curveTo(-7.5,-18.1,9,-8.1).curveTo(25.4,2,27.4,16.8).curveTo(21.2,15.6,14.1,15.6).closePath();
        this.shape.setTransform(27.4,16.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,54.7,33.5), null);
    
    
    (lib.Symbol23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween26("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(31.6,53.4,1,1,0,0,0,5,25.2);
    
        this.instance_1 = new lib.Tween27("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(22.8,56.4,1,1,0,0,0,-8.8,-7.5);
    
        this.instance_2 = new lib.Tween28("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(27.7,73.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,53.2,97.8), null);
    
    
    (lib.hit2 = function(mode,startPosition,loop) {
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
    
        // Layer 1
        this.hit = new lib.hit_2();
        this.hit.parent = this;
        this.hit.setTransform(206.3,183,1,1,0,0,0,85.7,78.5);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(120.6,104.5,171.4,157);
    
    
    (lib.Tween30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Group();
        this.instance.parent = this;
        this.instance.setTransform(-3,-16.2,0.353,0.353,-4.9,0,0,27.6,16.4);
        this.instance.alpha = 0.5;
    
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#E8D7C8").beginStroke().moveTo(14.1,15.6).curveTo(8.6,-2.1,-17.9,-10.5).curveTo(-26.5,-13.3,-27.4,-16.5).curveTo(-7.5,-18.1,9,-8.1).curveTo(25.4,2,27.4,16.8).curveTo(21.2,15.6,14.1,15.6).closePath();
        this.shape.setTransform(-3.6,-16,0.353,0.353,-4.9);
    
        this.instance_1 = new lib.Group_2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.3,-2.9,0.353,0.353,-4.9,0,0,32.1,54.6);
        this.instance_1.alpha = 0.5;
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-26.7,33).curveTo(-26.4,14.5,-31.2,-0.3).curveTo(-36.5,-16.3,-45.1,-18.1).lineTo(-46.9,-18.5).lineTo(-45.6,-19.8).curveTo(-35.9,-29.4,-23.7,-33.6).curveTo(-14.4,-36.9,-4.2,-36.9).curveTo(5,-36.9,13.7,-34.3).curveTo(22.4,-31.7,29.7,-26.9).curveTo(37,-22,41.4,-15.7).curveTo(45.8,-9.4,46.7,-2.5).lineTo(46.8,-1.2).lineTo(45.5,-1.5).curveTo(39.1,-2.5,33.3,-2.5).curveTo(17.7,-2.5,4.5,4.3).curveTo(-13,13.3,-24.8,33.6).lineTo(-26.8,36.9).closePath().moveTo(-25.3,-31.9).curveTo(-36.2,-27.6,-44.9,-19.1).curveTo(-35.6,-17.1,-30.1,-0.3).curveTo(-25.3,14.7,-25.6,33.1).curveTo(-13.6,12.4,4.4,3.3).curveTo(17.8,-3.5,33.3,-3.5).curveTo(39.7,-3.5,45.7,-2.4).curveTo(43.9,-16.2,29.1,-26.1).curveTo(14.5,-35.9,-4.2,-35.9).curveTo(-15.2,-35.9,-25.3,-31.9).closePath();
        this.shape_1.setTransform(-9.5,-8.7,0.353,0.353,-4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FEF2DF").beginStroke().moveTo(-26.4,33.8).curveTo(-26.1,15.1,-31,0.1).curveTo(-36.3,-16.1,-45.2,-17.9).lineTo(-46.1,-18.1).lineTo(-45.4,-18.7).curveTo(-35.9,-28.2,-23.7,-32.4).curveTo(-14.5,-35.7,-4.4,-35.7).curveTo(14.7,-35.7,29.4,-25.7).curveTo(44.1,-15.8,45.9,-1.8).lineTo(46,-1.1).lineTo(45.4,-1.2).curveTo(39.2,-2.3,33.1,-2.3).curveTo(17.4,-2.3,4.1,4.6).curveTo(-13.5,13.6,-25.4,34).lineTo(-26.4,35.7).closePath();
        this.shape_2.setTransform(-9.4,-8.9,0.353,0.353,-4.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-20.2,58.8).curveTo(-35.5,52.7,-44,42.6).curveTo(-49,36.6,-51,30.2).curveTo(-53.1,23.7,-52,17.5).curveTo(-50.5,8.9,-50.9,-1.8).curveTo(-51.3,-12.6,-53.4,-22).curveTo(-55.9,-32.7,-60,-39.1).curveTo(-64.2,-45.6,-69.2,-46.7).lineTo(-71,-47.1).lineTo(-69.7,-48.3).curveTo(-60.1,-58,-47.8,-62.2).curveTo(-38.5,-65.5,-28.3,-65.4).curveTo(-13.5,-65.4,-0.6,-59).curveTo(12.4,-52.7,18.6,-42.3).curveTo(22.6,-35.5,22.8,-28.4).curveTo(22.9,-21.4,19.2,-14.6).curveTo(7.5,7.4,20.3,28.3).curveTo(24,34.3,29.5,39.6).curveTo(32.5,42.5,35.4,44.7).curveTo(42.7,45.5,52.7,47.4).curveTo(63.6,49.5,67.9,51.7).curveTo(71,53.3,71,55.1).curveTo(71,57.5,66.1,59.2).curveTo(59.3,61.7,41.8,63.9).curveTo(30.4,65.4,19.7,65.4).curveTo(-3.1,65.5,-20.2,58.8).closePath().moveTo(-49.4,-60.5).curveTo(-60.4,-56.2,-69,-47.7).curveTo(-57.8,-45.3,-52.5,-22.2).curveTo(-47.6,-1.2,-51,17.7).curveTo(-52.3,25.4,-48.7,33.4).curveTo(-44.9,41.8,-36.4,48.5).curveTo(-16.2,64.5,19.7,64.5).curveTo(30.3,64.5,41.7,63).curveTo(83.8,57.6,63.6,51.1).curveTo(57.3,49.1,45.5,47.2).lineTo(35,45.6).curveTo(26,39.5,19.4,28.8).curveTo(6.3,7.5,18.4,-15).curveTo(23.2,-24,21.2,-33.2).curveTo(19.3,-41.7,11.9,-49).curveTo(4.7,-56.1,-5.8,-60.2).curveTo(-16.6,-64.4,-28.3,-64.4).curveTo(-39.4,-64.4,-49.4,-60.5).closePath();
        this.shape_3.setTransform(-0.1,0.6,0.353,0.353,-4.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#F4DE23").beginStroke().moveTo(-18.2,59).curveTo(-34.8,53.1,-43.9,42.2).curveTo(-48.8,36.4,-50.8,30.1).curveTo(-52.8,23.7,-51.7,17.6).curveTo(-48.4,-1.5,-53.2,-22.3).curveTo(-58.4,-44.9,-69.3,-47.1).lineTo(-70.2,-47.3).lineTo(-69.6,-48).curveTo(-60.1,-57.5,-47.9,-61.7).curveTo(-38.7,-64.9,-28.5,-65).curveTo(-13.9,-65,-1.1,-58.6).curveTo(11.7,-52.3,17.9,-42).curveTo(21.8,-35.4,22,-28.4).curveTo(22.2,-21.6,18.6,-14.8).curveTo(7,6.7,19.1,27.5).curveTo(25.5,38.4,35,45.1).curveTo(46.4,46.6,54.9,48.3).curveTo(70.2,51.6,70.2,55.1).curveTo(70.2,57.1,65.5,58.8).curveTo(58.7,61.3,41.5,63.5).curveTo(29.8,64.9,19.4,64.9).curveTo(-1.6,65,-18.2,59).closePath();
        this.shape_4.setTransform(0,0.6,0.353,0.353,-4.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.5,-23.1,53,46.3);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol28();
        this.instance.parent = this;
        this.instance.setTransform(20.7,9.2,1,1,0,0,0,22.9,12.6);
    
        this.instance_1 = new lib.Symbol27();
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.7,9.2,1,1,0,0,0,22.9,12.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(10));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-3.4,45.8,25.2);
    
    
    (lib.socutcopy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5 copy
        this.instance = new lib.Symbol23();
        this.instance.parent = this;
        this.instance.setTransform(5.6,0,0.706,0.706,0,0,0,26.5,48.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.Tween29("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.1,4.5,0.706,0.706,0,0,0,-11.7,-2.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // Layer 6
        this.instance_2 = new lib.Tween30("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-1.1,21.9,0.706,0.706,0,0,0,12.7,17.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.socutcopy, new cjs.Rectangle(-28.7,-34.5,57.4,69), null);
    
    
    (lib.socut = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5 copy
        this.instance = new lib.Symbol23();
        this.instance.parent = this;
        this.instance.setTransform(5.6,0,0.706,0.706,0,0,0,26.5,48.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));
    
        // Layer 2
        this.instance_1 = new lib.Tween29("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(12.1,4.5,0.706,0.706,0,0,0,-11.7,-2.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-11.8,rotation:-30},6).to({regX:-11.7,rotation:0},7).wait(1));
    
        // Layer 6
        this.instance_2 = new lib.Tween30("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-1.1,21.9,0.706,0.706,0,0,0,12.7,17.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:12.6,rotation:-7.5},6).to({regX:12.7,rotation:0},7).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-28.7,-48.9,63.9,98);
    
    
    (lib.Symbol26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Symbol 3
        this.instance = new lib.Symbol28();
        this.instance.parent = this;
        this.instance.setTransform(105.9,33.8,0.761,0.761,0,0,0,22.9,12.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Symbol 4
        this.instance_1 = new lib.Symbol4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(105.2,21.7,0.65,0.65,0,0,0,35.6,40.7);
        this.instance_1.cache(-2,5,75,78);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(21,23.9).lineTo(8.3,20).curveTo(7,19.1,4.2,16.4).curveTo(1.8,14,1.2,13.8).curveTo(-1.8,14.7,-10.3,14).curveTo(-24.6,12.8,-27.3,12.7).lineTo(-27.4,12.2).curveTo(-27.7,5.2,-28,0.4).curveTo(-29,-13.8,-22.4,-24.3).curveTo(-12.5,-18.3,-0.1,-18.9).curveTo(10.1,-18.9,13.1,-20.1).curveTo(13.9,-20.4,14.6,-21.1).curveTo(15.2,-21.6,15.9,-21.7).curveTo(16.5,-21.8,17.8,-22.4).curveTo(29.3,-5.8,28.1,1.1).curveTo(26.8,7.9,27.4,10.4).curveTo(27.2,11.8,27.4,15.3).curveTo(27.6,18.8,27.4,20.4).curveTo(26.9,24.3,23.6,24.3).curveTo(22.4,24.3,21,23.9).closePath();
        mask.setTransform(31.6,81.3);
    
        // socut
        this.instance_2 = new lib.socutcopy("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(29.4,83.2,1,1,0,0,0,0.6,-0.1);
    
        var maskedShapeInstanceList = [this.instance_2];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(3.4,0,124.8,105.7), null);
    
    
    (lib.blog = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_blog_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(140));
    
        // Layer 2
        this.instance = new lib.Symbol26();
        this.instance.parent = this;
        this.instance.setTransform(119.7,145.9,1,1,0,0,0,64.1,58.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(139));
    
        // Layer 10
        this.instance_1 = new lib.Symbol3("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(161,121.5,0.761,0.761,0,0,0,20,10.1);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(139));
    
        // Layer 3
        this.instance_2 = new lib.Symbol4();
        this.instance_2.parent = this;
        this.instance_2.setTransform(160.8,108.7,0.65,0.65,0,0,0,35.6,40.7);
        this.instance_2._off = true;
        this.instance_2.cache(-2,5,75,78);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(139));
    
        // flash0.ai (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_1 = new cjs.Graphics().moveTo(21,23.9).lineTo(8.3,20).curveTo(7,19.1,4.2,16.4).curveTo(1.8,14,1.2,13.8).curveTo(-1.8,14.7,-10.3,14).curveTo(-24.6,12.8,-27.3,12.7).lineTo(-27.4,12.2).curveTo(-27.7,5.2,-28,0.4).curveTo(-29,-13.8,-22.4,-24.3).curveTo(-12.5,-18.3,-0.1,-18.9).curveTo(10.1,-18.9,13.1,-20.1).curveTo(13.9,-20.4,14.6,-21.1).curveTo(15.2,-21.6,15.9,-21.7).curveTo(16.5,-21.8,17.8,-22.4).curveTo(29.3,-5.8,28.1,1.1).curveTo(26.8,7.9,27.4,10.4).curveTo(27.2,11.8,27.4,15.3).curveTo(27.6,18.8,27.4,20.4).curveTo(26.9,24.3,23.6,24.3).curveTo(22.4,24.3,21,23.9).closePath();
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:87.2,y:168.3}).wait(139));
    
        // flash0.ai
        this.instance_3 = new lib.socut("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(85,170.2,1,1,0,0,0,0.6,-0.1);
        this.instance_3._off = true;
    
        var maskedShapeInstanceList = [this.instance_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(139));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(55.6,87,128.2,117.8);
    
    
    // stage content:
    (lib.blog2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_blog.mp3", "voice_blog"); 
            var icon_blogSound, icon_blogSoundTimeOut;
            root_blog = this;
            htcv_icon_blogOver = function() {cv_icon_blogOver();}
            htcv_icon_blogOut = function() {cv_icon_blogOut();}
            
            function cv_icon_blogOver() {
                root_blog.ico.over = true;
                /*root_blog.hit.tit.over = true;
                root_blog.hit.tit.gotoAndPlay(1);*/
                icon_blogSoundTimeOut = setTimeout(icon_blogSoundTimeOutComplete, 500);
            }
            
            function cv_icon_blogOut() {
                root_blog.ico.over = false;
                /*root_blog.hit.tit.over = false;
                if (root_blog.hit.tit.currentFrame == 7) {
                    root_blog.hit.tit.play();
                }*/
                clearTimeout(icon_blogSoundTimeOut);
            }
            
            function icon_blogSoundTimeOutComplete() {
                clearTimeout(icon_blogSoundTimeOut);
                
                // if (root_blog.ico.currentFrame == 0) {
                //     icon_blogSound = createjs.Sound.play("voice_blog");
                // }
                root_blog.ico.play();
            }
            
            this.icon_blog_check_pausable = function() {
                if (root_blog.ico.over == false && root_blog.ico.currentFrame == 0) {
                    cvht_icon_blog_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 3
        this.hit = new lib.hit2();
        this.hit.parent = this;
        this.hit.setTransform(-17.6,-14.5,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 4
        this.ico = new lib.blog();
        this.ico.parent = this;
        this.ico.setTransform(29.1,202.4,1,1,0,0,0,42.1,276.4);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.5,-174,306,742);
    // library properties:
    lib.properties = {
        width: 175,
        height: 160,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            /*{src:"sounds/voice_blog.mp3", id:"voice_blog"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_blog = lib_blog||{}, images_blog = images_blog||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_blog, images_blog, createjs, ss, AdobeAn;