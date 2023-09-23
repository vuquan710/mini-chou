(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"cahq2017_atlas_", frames: [[0,210,59,52],[155,0,75,60],[215,247,33,39],[232,39,24,17],[203,62,48,37],[205,163,37,44],[155,62,46,40],[0,264,42,26],[179,247,34,42],[44,264,34,24],[80,264,26,21],[122,227,55,55],[179,227,21,13],[232,0,21,37],[236,101,17,17],[205,209,42,36],[0,104,129,104],[0,0,153,102],[61,210,59,52],[131,104,103,57],[131,163,72,62]]}
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
    
    
    
    (lib.Bitmap1 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap10 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap16 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap18 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap19 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap20 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap21 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap22 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap23 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap24 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap25 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap27 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap31 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap8 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["cahq2017_atlas_"];
        this.gotoAndStop(20);
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
    
    
    (lib.Tween43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABuBTQgEgBAAgFQABgwgJgjQgQg8gsgFQgygFgmA+QgUAegKAgQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgagPQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQACgFAFADIAVAMQANgpAYggQAng1AyAFQAxAGASBAQALAlgBA0QAAAFgFAAg");
        this.shape.setTransform(-12.3,0,0.658,0.658);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AhRAmQAJgdASgbQAohAA1AGQAqAFATA1QANAngCA5gAhuAgIAdAGIgDAJgAhRAmg");
        this.shape_1.setTransform(-12.3,0,0.658,0.658);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AhzBOQgCgzALgmQAShAAygGQAxgFAoA1QAXAfAOAqIAVgMQAEgDADAFQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgaAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgKgggTgeQgng+gxAFQgsAFgQA8QgKAlACAuQAAAFgFABQgFAAAAgFg");
        this.shape_2.setTransform(14.8,0,0.658,0.658);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AhigSQASg1AqgFQA1gGAoBAQASAbAJAdIjAAoQgCg4AOgogABSAmIAdgGIgaAPIgDgJgABSAmIAAAAg");
        this.shape_3.setTransform(14.8,0,0.658,0.658);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20,-5.4,42.5,10.9);
    
    
    (lib.Tween42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap21();
        this.instance.parent = this;
        this.instance.setTransform(-94.1,-88.5,3,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-94.1,-88.5,165,165);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABuBTQgEgBAAgFQABgwgJgjQgQg8gsgFQgygFgmA+QgUAegKAgQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgagPQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQACgFAFADIAVAMQANgpAYggQAng1AyAFQAxAGASBAQALAlgBA0QAAAFgFAAg");
        this.shape.setTransform(-13.5,0,0.658,0.658);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AhRAmQAJgdASgbQAohAA1AGQAqAFATA1QANAngCA5gAhuAgIAdAGIgDAJgAhRAmg");
        this.shape_1.setTransform(-13.5,0,0.658,0.658);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AhzBOQgCgzALgmQAShAAygGQAxgFAoA1QAXAfAOAqIAVgMQAEgDADAFQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgaAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgKgggTgeQgng+gxAFQgsAFgQA8QgKAlACAuQAAAFgFABQgFAAAAgFg");
        this.shape_2.setTransform(13.6,0,0.658,0.658);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AhigSQASg1AqgFQA1gGAoBAQASAbAJAdIjAAoQgCg4AOgogABSAmIAdgGIgaAPIgDgJgABSAmIAAAAg");
        this.shape_3.setTransform(13.6,0,0.658,0.658);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.2,-5.4,42.5,10.9);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap31();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,59,52), null);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgiA5QgSgCgHgmQgGgdADgVQACgMAygIQAYgDAYgCQAPAAAFASQAEANACAnQACAfgpALQgTAFgTAAQgLAAgKgCg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-6.4,-5.9,12.9,11.8), null);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("AE7MaIg0idIgogbIkJAAIg0hsIk/hGIg4hlIgMitIByhaIgxkKIiFAHIjcgqIg3hVIAAjLQAagnAbgmQAlg1A0gqIA/gwQBXgvBhgXQCCgfCGgOICJBBIBUD4QDDgUDCgbQBMgKBLgOIA4AOQBUB+BQB/QASBEgEBuQgFBuhJDNIiDBtIAXC1IBVBFIghA0QhUAUhUANQgkADgkgCQAZA8ANBAQAKAyAEA1IhYAmg");
        this.shape.setTransform(82.5,85.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,164.9,171.3), null);
    
    
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAAAOQgGgBgEgEQgDgFAAgEQABgGAEgDQAEgEAFAAQAGAAAEAFQAEAEgBAFQgBAGgEADQgEAEgFAAIAAAAg");
        this.shape.setTransform(-24.2,10.9,1.665,1.665);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgFBOQgWgCgNgYQgNgYACgfQADggARgWQARgVAUABQAWACANAYQANAYgCAfQgCAhgRAVQgQAUgTAAIgDAAg");
        this.shape_1.setTransform(-27.7,-4.7,1.665,1.665);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgIBuQgfgCgTgiQgSgiADgtQAEguAYgeQAYgfAdADQAfACATAiQATAigEAtQgDAugYAeQgXAcgaAAIgFAAg");
        this.shape_2.setTransform(-26.6,-2.4,1.665,1.665);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AAAAPQgGgBgEgFQgEgEAAgFQABgHAEgEQAFgDAFAAQAGABAEAEQAEAFAAAFQgBAGgEAEQgFAEgFAAIAAAAg");
        this.shape_3.setTransform(28.5,15.6,1.665,1.665);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgGBRQgWgCgOgZQgOgZADggQACgjASgWQASgXAVACQAXACAOAZQAOAagDAhQgCAhgSAXQgRAVgTAAIgEgBg");
        this.shape_4.setTransform(24.9,-0.7,1.665,1.665);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgIB0QgggDgUgkQgUgjAEgvQAEgwAZggQAZggAfADQAgACAUAjQAUAkgEAvQgEAwgZAfQgXAfgdAAIgEAAg");
        this.shape_5.setTransform(26,1.6,1.665,1.665);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-38.9,-20.8,77.9,41.8);
    
    
    (lib.Tween45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAwAsQgoAjgjgEQghgDgMgiQgIgWAQgdQANgXALgIQAQgSAGgIQANgMAFAbQACAGASgOQATgPADAEQAVAagBATQAAAJgEAEIASAO");
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F3469F").s().p("AgbBLQghgDgMgiQgIgWAQgdQANgXALgIIAWgaQANgMAFAbQACAGASgOQATgPADAEQAVAagBATQAAAJgEAEIASAOIgcAuQglAggfAAIgHgBg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17.2,17.2);
    
    
    (lib.Tween44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FDEAF5").s().p("AgGA1QgRgBgNgOQgOgOgCgXQgCgWANgLQAUgSAagCQAagDANAOQANAOgGAZQgGAYgUATQgNAMgPAAIgDAAg");
        this.shape.setTransform(0.1,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAFg0QgaACgUASQgNALACAWQABAOAGALQAEAHAFAFQANAOARABQAHABAHgCQAJgDAIgIQAUgTAGgYQAGgZgNgOQgNgOgaADg");
        this.shape_1.setTransform(0,-0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.4,-6.4,12.7,12.7);
    
    
    (lib.Tween40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap23();
        this.instance.parent = this;
        this.instance.setTransform(-49,-55.9,3,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49,-55.9,63,111);
    
    
    (lib.Tween39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap24();
        this.instance.parent = this;
        this.instance.setTransform(-21.8,-23.1,3,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.8,-23.1,51,51);
    
    
    (lib.Tween35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap25();
        this.instance.parent = this;
        this.instance.setTransform(-62.8,-54,3,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-62.8,-54,126,108);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap22();
        this.instance.parent = this;
        this.instance.setTransform(-31.6,-19.2,3,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-32,-19.2,64.1,39);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFDEC9").s().p("Ag7CVQg+gQgXg1QgPghAEglQAEgyACgIQALgwAlg2IBjAOQBqAXAmAsQAWAZgLApQgLAlgiAmQgiAngsAVQgjATgiAAQgKAAgKgCg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.6,-15,31.3,30.1);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABgAoQgeglgwgTIgEgBQghgNgmgBQglAFgFgGQgFgGAKgFQAIgEAIAAQAxgCAcAIQBEAUAjBFg");
        this.shape.setTransform(5.1,0.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFE3EE").s().p("AhrAUQAAgGANgIIATgIQAQgIAZgIQA4gQA3AMIAPAEQgbgIgxACQgIAAgIAEQgKAFAFAGQAFAGAkgFQAmABAjAMQgUgFgwgBQgSAAgXAEIgoALQgWAIgQAEQgLACgHAAQgMAAABgIg");
        this.shape_1.setTransform(-4.4,-2.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.2,-4.9,30.5,10);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AA1A/QgjgHg2gjQg+goACgeQABgIAKgDQAagKBBAWQBBAWALAWQAjBEgwAAIgQgBg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.7,-6.4,19.4,12.9);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DD3C7E").s().p("AgeAkQgGgDAOgJQAYgSAPgWQAIgMACgIQANAHgPAbQgPAYgQAIQgOAHgHAAIgDgBg");
        this.shape.setTransform(10.3,4.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFCFEC").s().p("AgCAoQgfgDgTgKQgWgLACgPQACgRARgMQATgPAcADQAdADAZARQAaAQgBAOQgCAQgWAIQgRAHgUAAIgOgBg");
        this.shape_1.setTransform(4.2,-4.6);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FA70BD").s().p("AgDA2QgugEgdgPQgggPACgUQADgWAZgRQAdgTApAEQArAFAnAWQAnAXgDATQgCAVggALQgYAIgdAAIgYgBg");
        this.shape_2.setTransform(2.6,-3.8);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#EB4699").s().p("AgGBCQg4gGgngXQgmgXADgbQACgbArgPQApgPA4AFQA5AGAnAXQAmAXgDAbQgDAbgqAPQgeALgnAAIgdgBg");
        this.shape_3.setTransform(0.2,-3.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#BA0F51").s().p("AAMBMQhCAAgvgeQgmgagBgyIAHguICGAOQCIAOACAIQALAyglAnQghAcg/AAIgFgBg");
        this.shape_4.setTransform(0,2.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.1,-9.9,28.3,19.9);
    
    
    (lib.Tween12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(-14.1,-10,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.1,-10,28.6,20.3);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap17();
        this.instance.parent = this;
        this.instance.setTransform(-24.9,-15.6,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.9,-15.6,50,31);
    
    
    (lib.Tween8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap10();
        this.instance.parent = this;
        this.instance.setTransform(-44.5,-35.9,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-44.5,-35.9,89.3,71.4);
    
    
    (lib.Tween7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Bitmap27();
        this.instance.parent = this;
        this.instance.setTransform(-76.2,-61.9,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-76.2,-61.9,153.5,123.8);
    
    
    (lib.Tween5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap19();
        this.instance.parent = this;
        this.instance.setTransform(-20.1,-14.3,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.1,-14.3,40.5,28.6);
    
    
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap18();
        this.instance.parent = this;
        this.instance.setTransform(-20.1,-25.2,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.1,-25.2,40.5,50);
    
    
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(-21.9,-26.1,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.9,-26.1,44.1,52.4);
    
    
    (lib.Tween1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap16();
        this.instance.parent = this;
        this.instance.setTransform(-27.5,-23.9,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.5,-23.9,54.8,47.6);
    
    
    (lib.thang = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(-33.9,-39,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-33.9,-39,66,78);
    
    
    (lib.cahqTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgcAqQgPgPgBgYQgBgYAOgQQAOgQAXgBQAPgBAKAFQAKAFABAJQAAAFgDAFQgEAEgGAAIgWgEQgJABgFAHQgGAHABAMQABANAGAGQAFAHALgBQAGAAAGgDIAJgDQAGAAADADQADADABAHQAAAJgKAGQgJAGgQABIgFAAQgSAAgPgNg");
        this.shape.setTransform(56.1,50.2,1.266,1.266,31);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgmBTQgQgOgCgZQgBgYANgRQAOgPAXgCQAWgCAQAPQAQAOACAYQABAYgNARQgOARgXABIgDAAQgVAAgOgNgAgFAOQgJABgFAHQgFAIABAMQABAMAGAHQAGAHAJgBQAIgBAFgIQAGgHgBgMQgBgLgGgIQgGgGgHAAIgCAAgAgpgWQgCgCgBgFIABgGQABgCAEgDIAUgTIAEgCIAEgBIAEAAIAEACIAWAQQADACACACIACAGQAAAFgDACQgCADgEABIgEgBIgFgCIgRgJIgRAMIgEACIgFABQgEAAgDgCgAAVgzQgEgDAAgEIABgFIACgEIANgVIAFgFQADgCADAAQAFAAAEADQAEADAAAFIgBAFIgDAGIgOASIgFAFIgFACQgGAAgCgDg");
        this.shape_1.setTransform(47.9,40.3,1.266,1.266,31);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgdAvQgNgKgCgWIgEgpQgBgLADgGQAEgGAIgBQAHAAAFAFQAEAEABAMIADAiQABAMAFAGQAEAFAHgBQAJgBADgGQADgFgBgMIgDgjQgBgKADgHQAEgGAIAAQAHgBAFAFQAEAEABANIAEAoQABAWgKANQgMANgWACIgGAAQgRAAgMgJg");
        this.shape_2.setTransform(31.7,37.8,1.266,1.266,31);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AA4BKIgIgEIgLgJQgJAGgGACQgIADgLACQgeADgVgSQgVgSgEgiQgEgfARgXQARgXAegDQAegEAVASQAVATAEAhQACAMgCALQgDAOgEAIIALAIQADADACADQADAEAAADQAAAGgDAEQgEAFgFABIgHgBgAgJgrQgRACgHANQgIAMADAUQACAUAKAKQALALAPgCIAFgBIAFgCIgIgHIgCgHQgBgFADgEQADgEAFgBIAHABIAKAGQACgHAAgEIAAgLQgCgUgLgLQgJgJgMAAIgEAAg");
        this.shape_3.setTransform(18.1,29.1,1.266,1.266,31);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgjA1QgFgGgCgKIgJg9QgCgLADgHQADgGAIgBQAGgBADACQAFADACAEQAFgHAGgDQAFgDAJgCQASgDAMAKQALAJADATIAGAsQACALgDAGQgDAHgIAAQgHACgFgFQgFgGgCgLIgFgiQgCgNgEgEQgFgFgIABQgJABgDAGQgDAHACAMIAFAiQACAMgDAGQgDAGgIABIgDAAQgFAAgEgEg");
        this.shape_4.setTransform(-6.1,21,1.266,1.266,31);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AggBFQgQgNgFgXQgEgXAMgRQALgTAUgDQAIgBAGABQAGADAFAEQADgGADgCQACgDAFgBQAIgCAFAFQAFAFABALIALA9QACANgDAFQgDAGgHABQgFABgEgCQgDgBgFgGQgEAHgGAEQgGAEgHABIgHABQgQAAgMgLgAgFAAQgIAAgFAIQgEAHABAMQADAMAGAFQAHAGAIgBQAJgCADgIQAFgIgCgLQgCgKgHgHQgFgDgGAAIgDAAgAgJgmIgHgDIgRgOIgFgFIgCgFQgBgFADgEQADgEAFgBQADgBAEACQACAAADADIAUAVIACAFQAAAEgCAEQgBADgFABIgFgBg");
        this.shape_5.setTransform(-18.5,12.7,1.266,1.266,31);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgrBNQgEgFgCgLIgUhgQgDgMAEgGQADgGAHgCQAIgBAFAFQAFAEADAMIAGAgIA5gLIgHghQgCgLADgHQACgGAJgCQAHgBAFAFQAFAEADAMIATBgQACALgDAGQgBAGgJACQgHACgGgFQgFgFgCgLIgHgjIg5ALIAHAjQACALgDAHQgDAGgHACIgEAAQgFAAgFgDg");
        this.shape_6.setTransform(-35.2,7.2,1.266,1.266,31);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgmBHQgEgGgBgLIgIhpQgBgMAEgFQADgGAIgBQAIgBAEAGQAFAGAAAKIACAgQAEgGAHgDQAGgCAIgCQATgBAKAKQALAKABATIAEAtQABAKgEAHQgDAGgIAAQgIAAgFgEQgEgHgBgKIgCgkQgBgMgFgFQgDgFgJAAQgJACgDAFQgDAFAAAMIADAkQABALgEAGQgDAGgIABIgBAAQgHAAgEgFg");
        this.shape_7.setTransform(34.4,7.8,1.266,1.266,31);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgmA0QgFgGAAgLIgHg+QgBgLADgGQADgGAIgBQAGAAADACQADACAEAFQAEgGAHgDQAGgDAIgBQATgCALAJQAKAKADAUIAEAsQABAMgDAFQgEAGgHABQgJAAgEgFQgEgFgBgLIgEgjQgBgMgEgGQgFgFgIABQgIABgEAGQgEAHACALIADAjQACAMgEAFQgDAHgIAAIgCAAQgHAAgDgEg");
        this.shape_8.setTransform(19.9,3.6,1.266,1.266,31);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgiBHQgPgNgDgYQgDgYAMgQQANgSATgCQAJgBAFACQAHADAEAEQACgEAEgEQAEgDAEAAQAIgCAEAGQAFAFABALIAIA+QABALgDAGQgDAGgIABQgFAAgEgCQgDgBgEgGQgEAGgGAEQgHAEgIABIgFAAQgQAAgNgMgAgDACQgJACgFAHQgFAIACALQABAMAHAFQAFAHAJgBQAJgCAEgHQAFgHgBgMQgCgMgGgFQgFgGgHAAIgCAAgAgNgkQgCgCgBgEQgBgEACgEQACgDADgDIAEgEIAAgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgEgBIgDACIgEAHIgFACQgCAAgDgCQgCgBgBgEQgBgHAGgGQAGgFAIgBQAIgCAHAFQAHAFABAJQABAGgDAEQgDAEgDACIgDADIgBAEIgCAFQgBACgDABIgGgCg");
        this.shape_9.setTransform(9.8,-5,1.266,1.266,31);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AABBIQgEgGgCgLIgJg9QgCgLADgGQADgGAIgCQAHAAAEAEQAEAEADANIAJA9QACALgDAGQgDAHgIAAIgDABQgGAAgDgEgAgRgqQgGgEgBgIQgBgHAEgGQAFgHAHAAQAIgCAFAFQAFAFACAHQABAIgFAFQgEAGgGABIgEABQgFAAgFgEg");
        this.shape_10.setTransform(-8.4,-12.1,1.266,1.266,31);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgeBGQgRgNgEgYQgEgZAMgQQALgSAYgEQAWgEARANQARANAEAXQAEAYgMASQgLASgYAEIgJABQgRAAgNgKgAgDgBQgJABgFAHQgEAJACALQABALAHAHQAIAGAHgBQAJgCAFgIQAFgIgDgMQgCgLgHgGQgFgFgGAAIgDABgAgKglIgGgEIgXgSIgCgFQAAgGACgEQADgDAFgCIAHABIAGAEIARARIACAEIACAEQABAFgDADQgBAEgFAAIgCAAIgDAAg");
        this.shape_11.setTransform(-17.7,-16,1.266,1.266,31);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgdBHQgEgEgDgMIgUhoQgCgLACgGQADgGAHgCQAIgBAFAEQAFAGACAKIAGAfQAEgHAGgDQAEgDAKgCQARgEAMAJQALAIAFAUIAJArQABAKgCAHQgDAHgIABQgIACgEgFQgFgFgDgLIgHgjQgCgLgEgFQgGgFgIACQgIABgCAHQgEAGADALIAHAjQACAMgCAGQgEAGgHACIgEAAQgFAAgEgEg");
        this.shape_12.setTransform(-32.5,-20.5,1.266,1.266,31);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgcBAQgXgQgIghQgHgeAPgZQAOgZAdgHQARgEANAEQAOAEABAJQACAGgDAFQgDAFgGABQgDABgJgBQgJAAgGABQgPADgHAOQgHANAFATQADAUANAJQAKAIARgDQAGgCAKgFQAHgGAEgBQAGAAAEACQAFAEABAFQACAKgLAKQgKAJgTAFQgJACgIAAQgTAAgQgLg");
        this.shape_13.setTransform(-45.6,-25.5,1.266,1.266,31);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 6
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAfgyQAKAFABAJQAAAFgDAFQgEAEgGAAIgWgEQgJABgFAHQgGAHABAMQABANAGAGQAFAHALgBQAGAAAGgDQAHgDACAAQAGAAADADQADADABAHQAAAJgKAGQgJAGgQABQgWACgQgPQgPgPgBgYQgBgYAOgQQAOgQAXgBQAPgBAKAFg");
        this.shape_14.setTransform(56.1,50.2,1.266,1.266,31);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#FF3BA2").ss(4,1,1).p("AA4hPIgDAGIgOASIgFAFQgEACgBAAQgGAAgCgDQgEgDAAgEQAAgCABgDIACgEIANgVIAFgFQADgCADAAQAFAAAEADQAEADAAAFQAAACgBADgAASgXIgEgBIgFgCIgRgJIgRAMIgEACIgFABQgEAAgDgCQgCgCgBgFQAAgEABgCQABgCAEgDIAUgTIAEgCIAEgBIAEAAIAEACIAWAQQADACACACIACAGQAAAFgDACQgCADgEABgAgXAqQABAMAGAHQAGAHAJgBQAIgBAFgIQAGgHgBgMQgBgLgGgIQgHgGgIAAQgJABgFAHQgFAIABAMgAgsADQAOgPAXgCQAWgCAQAPQAQAOACAYQABAYgNARQgOARgXABQgWACgQgPQgQgOgCgZQgBgYANgRg");
        this.shape_15.setTransform(47.9,40.3,1.266,1.266,31);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAoApQgMANgWACQgVACgOgLQgNgKgCgWIgEgpQgBgLADgGQAEgGAIgBQAHAAAFAFQAEAEABAMIADAiQABAMAFAGQAEAFAHgBQAJgBADgGQADgFgBgMIgDgjQgBgKADgHQAEgGAIAAQAHgBAFAFQAEAEABANIAEAoQABAWgKANg");
        this.shape_16.setTransform(31.7,37.8,1.266,1.266,31);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#FF3BA2").ss(4,1,1).p("AA/BLQgFAAgCgBIgIgEIgLgJQgJAGgGACQgIADgLACQgeADgVgSQgVgSgEgiQgEgfARgXQARgXAegDQAegEAVASQAVATAEAhQACAMgCALQgDAOgEAIIALAIQADADACADQADAEAAADQAAAGgDAEQgEAFgFABgAAQgiQgLgLgOACQgRACgHANQgIAMADAUQACAUAKAKQALALAPgCQAEgBABAAIAFgCQgGgEgCgDQgCgDAAgEQgBgFADgEQADgEAFgBIAHABQAFACAFAEQACgHAAgEQAAgGAAgFQgCgUgLgLg");
        this.shape_17.setTransform(18.1,29.1,1.266,1.266,31);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#FF3BA2").ss(4,1,1).p("AgegwQAFADACAEQAFgHAGgDQAFgDAJgCQASgDAMAKQALAJADATIAGAsQACALgDAGQgDAHgIAAQgHACgFgFQgFgGgCgLIgFgiQgCgNgEgEQgFgFgIABQgJABgDAGQgDAHACAMIAFAiQACAMgDAGQgDAGgIABQgHABgFgFQgFgGgCgKIgJg9QgCgLADgHQADgGAIgBQAGgBADACg");
        this.shape_18.setTransform(-6.1,21,1.266,1.266,31);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#FF3BA2").ss(4,1,1).p("AgEglQgEAAgBgBQgDgBgEgCIgRgOIgFgFIgCgFQgBgFADgEQADgEAFgBQADgBAEACQACAAADADIAUAVIACAFQAAAEgCAEQgBADgFABgAAJADQgGgEgIABQgIAAgFAIQgEAHABAMQADAMAGAFQAHAGAIgBQAJgCADgIQAFgIgCgLQgCgKgHgHgAARgeQACgDAFgBQAIgCAFAFQAFAFABALIALA9QACANgDAFQgDAGgHABQgFABgEgCQgDgBgFgGQgEAHgGAEQgGAEgHABQgUADgPgNQgQgNgFgXQgEgXAMgRQALgTAUgDQAIgBAGABQAGADAFAEQADgGADgCg");
        this.shape_19.setTransform(-18.5,12.7,1.266,1.266,31);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAzg7IATBgQADALgDAGQgCAGgJACQgHACgGgFQgFgFgDgLIgGgjIg5ALIAHAjQACALgCAHQgEAGgIACQgHABgFgEQgFgFgDgLIgThgQgDgMADgGQAEgGAHgCQAIgBAFAFQAFAEADAMIAGAgIA5gLIgHghQgCgLADgHQADgGAIgCQAHgBAFAFQAFAEADAMg");
        this.shape_20.setTransform(-35.2,7.2,1.266,1.266,31);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAmBHQgIAAgFgFQgEgGgBgKIgCgkQgBgMgFgFQgDgFgJAAQgJABgDAGQgDAFAAAMIADAkQABALgEAGQgDAGgIABQgIAAgEgFQgEgGgBgLIgIhpQgBgMAEgGQADgFAIgBQAIgBAEAGQAFAGAAAKIACAfQAEgFAHgDQAGgDAIgBQATgBAKAKQALAKABATIAEAsQABALgEAHQgDAFgIABg");
        this.shape_21.setTransform(34.4,7.8,1.266,1.266,31);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#FF3BA2").ss(4,1,1).p("AgOgVQgEAHACALIADAjQABAMgDAFQgDAHgIAAQgIABgEgFQgFgGgBgLIgGg+QgBgLADgGQADgGAIgBQAFAAAEACQADACAEAFQAEgGAHgDQAGgDAIgBQATgCALAJQAKAKACAUIAFAsQABAMgEAFQgDAGgIABQgIAAgEgFQgEgFgCgLIgDgjQgBgMgFgGQgEgFgIABQgJABgDAGg");
        this.shape_22.setTransform(19.9,3.6,1.266,1.266,31);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAJg3QgDAEgDACIgDADIgBAEQAAACgCADQgBACgDABQgDAAgDgCQgCgCgBgEQgBgEACgEQACgDADgDIAEgEQABgCgBgBQAAgCgBgBQgBgBgDAAIgDACIgEAHQgDACgCAAQgCAAgDgCQgCgBgBgEQgBgHAGgGQAGgFAIgBQAIgCAHAFQAHAFABAJQABAGgDAEgAgRALQgFAIACALQABAMAHAFQAFAHAJgBQAJgCAEgHQAFgHgBgMQgCgMgGgFQgGgHgIABQgJACgFAHgAADgZQAHADAEAEQACgEAEgEQAEgDAEAAQAIgCAEAGQAFAFABALIAIA+QABALgDAGQgDAGgIABQgFAAgEgCQgDgBgEgGQgEAGgGAEQgHAEgIABQgSADgQgPQgPgNgDgYQgDgYAMgQQANgSATgCQAJgBAFACg");
        this.shape_23.setTransform(9.8,-5,1.266,1.266,31);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAZAzQACALgDAGQgDAHgIAAQgHACgFgFQgEgGgCgLIgJg9QgCgLADgGQADgGAIgCQAHAAAEAEQAEAEADANgAAHguQgEAGgGABQgHACgHgFQgGgEgBgIQgBgHAEgGQAFgHAHAAQAIgCAFAFQAFAFACAHQABAIgFAFg");
        this.shape_24.setTransform(-8.4,-12.1,1.266,1.266,31);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#FF3BA2").ss(4,1,1).p("AgQgpIgXgSIgCgFQAAgGACgEQADgDAFgCQAFAAACABQACABAEADIARARIACAEIACAEQABAFgDADQgBAEgFAAQgCABgDgBgAgzAhQgEgZAMgQQALgSAYgEQAWgEARANQARANAEAXQAEAYgMASQgLASgYAEQgWAEgRgNQgRgNgEgYgAgDgBQgJABgFAHQgEAJACALQABALAHAHQAIAGAHgBQAJgCAFgIQAFgIgDgMQgCgLgHgGQgGgGgIACg");
        this.shape_25.setTransform(-17.7,-16,1.266,1.266,31);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#FF3BA2").ss(4,1,1).p("AAAgLQgJABgDAHQgDAGADALIAHAjQACAMgCAGQgDAGgIACQgIABgFgFQgEgEgDgMIgVhoQgBgLACgGQADgGAHgCQAIgBAFAEQAFAGACAKIAGAfQAEgHAGgDQAEgDAKgCQARgEAMAJQALAIAFAUIAJArQABAKgCAHQgDAHgIABQgHACgFgFQgFgFgDgLIgHgjQgBgLgFgFQgFgFgIACg");
        this.shape_26.setTransform(-32.5,-20.5,1.266,1.266,31);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#FF3BA2").ss(4,1,1).p("AgIAlQAKAIARgDQAGgCAKgFQAHgGAEgBQAGAAAEACQAFAEABAFQACAKgLAKQgKAJgTAFQgdAGgXgPQgXgQgIghQgHgeAPgZQAOgZAdgHQARgEANAEQAOAEABAJQACAGgDAFQgDAFgGABQgDABgJgBQgJAAgGABQgPADgHAOQgHANAFATQADAUANAJg");
        this.shape_27.setTransform(-45.6,-25.5,1.266,1.266,31);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));
    
        // Layer 7
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#BA0F51").ss(4,1,1).p("AAfgyQAKAFABAJQAAAFgDAFQgEAEgGAAIgWgEQgJABgFAHQgGAHABAMQABANAGAGQAFAHALgBQAGAAAGgDQAHgDACAAQAGAAADADQADADABAHQAAAJgKAGQgJAGgQABQgWACgQgPQgPgPgBgYQgBgYAOgQQAOgQAXgBQAPgBAKAFg");
        this.shape_28.setTransform(56,52.5,1.266,1.266,31);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#BA0F51").ss(4,1,1).p("AA4hPIgDAGIgOASIgFAFQgEACgBAAQgGAAgCgDQgEgDAAgEQAAgCABgDIACgEIANgVIAFgFQADgCADAAQAFAAAEADQAEADAAAFQAAACgBADgAASgXIgEgBIgFgCIgRgJIgRAMIgEACIgFABQgEAAgDgCQgCgCgBgFQAAgEABgCQABgCAEgDIAUgTIAEgCIAEgBIAEAAIAEACIAWAQQADACACACIACAGQAAAFgDACQgCADgEABgAgXAqQABAMAGAHQAGAHAJgBQAIgBAFgIQAGgHgBgMQgBgLgGgIQgHgGgIAAQgJABgFAHQgFAIABAMgAgsADQAOgPAXgCQAWgCAQAPQAQAOACAYQABAYgNARQgOARgXABQgWACgQgPQgQgOgCgZQgBgYANgRg");
        this.shape_29.setTransform(47.8,42.6,1.266,1.266,31);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#BA0F51").ss(4,1,1).p("AAoApQgMANgWACQgVACgOgLQgNgKgCgWIgEgpQgBgLADgGQAEgGAIgBQAHAAAFAFQAEAEABAMIADAiQABAMAFAGQAEAFAHgBQAJgBADgGQADgFgBgMIgDgjQgBgKADgHQAEgGAIAAQAHgBAFAFQAEAEABANIAEAoQABAWgKANg");
        this.shape_30.setTransform(31.6,40.1,1.266,1.266,31);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#BA0F51").ss(4,1,1).p("AA/BLQgFAAgCgBIgIgEIgLgJQgJAGgGACQgIADgLACQgeADgVgSQgVgSgEgiQgEgfARgXQARgXAegDQAegEAVASQAVATAEAhQACAMgCALQgDAOgEAIIALAIQADADACADQADAEAAADQAAAGgDAEQgEAFgFABgAAQgiQgLgLgOACQgRACgHANQgIAMADAUQACAUAKAKQALALAPgCQAEgBABAAIAFgCQgGgEgCgDQgCgDAAgEQgBgFADgEQADgEAFgBIAHABQAFACAFAEQACgHAAgEQAAgGAAgFQgCgUgLgLg");
        this.shape_31.setTransform(18,31.4,1.266,1.266,31);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#BA0F51").ss(4,1,1).p("AgegwQAFADACAEQAFgHAGgDQAFgDAJgCQASgDAMAKQALAJADATIAGAsQACALgDAGQgDAHgIAAQgHACgFgFQgFgGgCgLIgFgiQgCgNgEgEQgFgFgIABQgJABgDAGQgDAHACAMIAFAiQACAMgDAGQgDAGgIABQgHABgFgFQgFgGgCgKIgJg9QgCgLADgHQADgGAIgBQAGgBADACg");
        this.shape_32.setTransform(-6.2,23.3,1.266,1.266,31);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#BA0F51").ss(4,1,1).p("AgEglQgEAAgBgBQgDgBgEgCIgRgOIgFgFIgCgFQgBgFADgEQADgEAFgBQADgBAEACQACAAADADIAUAVIACAFQAAAEgCAEQgBADgFABgAARgeQACgDAFgBQAIgCAFAFQAFAFABALIALA9QACANgDAFQgDAGgHABQgFABgEgCQgDgBgFgGQgEAHgGAEQgGAEgHABQgUADgPgNQgQgNgFgXQgEgXAMgRQALgTAUgDQAIgBAGABQAGADAFAEQADgGADgCgAAJADQgGgEgIABQgIAAgFAIQgEAHABAMQADAMAGAFQAHAGAIgBQAJgCADgIQAFgIgCgLQgCgKgHgHg");
        this.shape_33.setTransform(-18.6,15,1.266,1.266,31);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#BA0F51").ss(4,1,1).p("AAzg7IATBgQADALgDAGQgCAGgJACQgHACgGgFQgFgFgDgLIgGgjIg5ALIAHAjQACALgCAHQgEAGgIACQgHABgFgEQgFgFgDgLIgThgQgDgMADgGQAEgGAHgCQAIgBAFAFQAFAEADAMIAGAgIA5gLIgHghQgCgLADgHQADgGAIgCQAHgBAFAFQAFAEADAMg");
        this.shape_34.setTransform(-35.3,9.5,1.266,1.266,31);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#BA0F51").ss(4,1,1).p("AAmBHQgIAAgFgFQgEgGgBgKIgCgkQgBgMgFgFQgDgFgJAAQgJABgDAGQgDAFAAAMIADAkQABALgEAGQgDAGgIABQgIAAgEgFQgEgGgBgLIgIhpQgBgMAEgGQADgFAIgBQAIgBAEAGQAFAGAAAKIACAfQAEgFAHgDQAGgDAIgBQATgBAKAKQALAKABATIAEAsQABALgEAHQgDAFgIABg");
        this.shape_35.setTransform(34.3,10.1,1.266,1.266,31);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#BA0F51").ss(4,1,1).p("AgOgVQgEAHACALIADAjQABAMgDAFQgDAHgIAAQgIABgEgFQgFgGgBgLIgGg+QgBgLADgGQADgGAIgBQAFAAAEACQADACAEAFQAEgGAHgDQAGgDAIgBQATgCALAJQAKAKACAUIAFAsQABAMgEAFQgDAGgIABQgIAAgEgFQgEgFgCgLIgDgjQgBgMgFgGQgEgFgIABQgJABgDAGg");
        this.shape_36.setTransform(19.8,5.9,1.266,1.266,31);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#BA0F51").ss(4,1,1).p("AAJg3QgDAEgDACIgDADIgBAEQAAACgCADQgBACgDABQgDAAgDgCQgCgCgBgEQgBgEACgEQACgDADgDIAEgEQABgCgBgBQAAgCgBgBQgBgBgDAAIgDACIgEAHQgDACgCAAQgCAAgDgCQgCgBgBgEQgBgHAGgGQAGgFAIgBQAIgCAHAFQAHAFABAJQABAGgDAEgAADgZQAHADAEAEQACgEAEgEQAEgDAEAAQAIgCAEAGQAFAFABALIAIA+QABALgDAGQgDAGgIABQgFAAgEgCQgDgBgEgGQgEAGgGAEQgHAEgIABQgSADgQgPQgPgNgDgYQgDgYAMgQQANgSATgCQAJgBAFACgAgRALQgFAIACALQABAMAHAFQAFAHAJgBQAJgCAEgHQAFgHgBgMQgCgMgGgFQgGgHgIABQgJACgFAHg");
        this.shape_37.setTransform(9.7,-2.7,1.266,1.266,31);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#BA0F51").ss(4,1,1).p("AAHguQgEAGgGABQgHACgHgFQgGgEgBgIQgBgHAEgGQAFgHAHAAQAIgCAFAFQAFAFACAHQABAIgFAFgAAZAzQACALgDAGQgDAHgIAAQgHACgFgFQgEgGgCgLIgJg9QgCgLADgGQADgGAIgCQAHAAAEAEQAEAEADANg");
        this.shape_38.setTransform(-8.5,-9.8,1.266,1.266,31);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#BA0F51").ss(4,1,1).p("AgQgpIgXgSIgCgFQAAgGACgEQADgDAFgCQAFAAACABQACABAEADIARARIACAEIACAEQABAFgDADQgBAEgFAAQgCABgDgBgAgzAhQgEgZAMgQQALgSAYgEQAWgEARANQARANAEAXQAEAYgMASQgLASgYAEQgWAEgRgNQgRgNgEgYgAgDgBQgJABgFAHQgEAJACALQABALAHAHQAIAGAHgBQAJgCAFgIQAFgIgDgMQgCgLgHgGQgGgGgIACg");
        this.shape_39.setTransform(-17.8,-13.7,1.266,1.266,31);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#BA0F51").ss(4,1,1).p("AAAgLQgJABgDAHQgDAGADALIAHAjQACAMgCAGQgDAGgIACQgIABgFgFQgEgEgDgMIgVhoQgBgLACgGQADgGAHgCQAIgBAFAEQAFAGACAKIAGAfQAEgHAGgDQAEgDAKgCQARgEAMAJQALAIAFAUIAJArQABAKgCAHQgDAHgIABQgHACgFgFQgFgFgDgLIgHgjQgBgLgFgFQgFgFgIACg");
        this.shape_40.setTransform(-32.6,-18.2,1.266,1.266,31);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("#BA0F51").ss(4,1,1).p("AgIAlQAKAIARgDQAGgCAKgFQAHgGAEgBQAGAAAEACQAFAEABAFQACAKgLAKQgKAJgTAFQgdAGgXgPQgXgQgIghQgHgeAPgZQAOgZAdgHQARgEANAEQAOAEABAJQACAGgDAFQgDAFgGABQgDABgJgBQgJAAgGABQgPADgHAOQgHANAFATQADAUANAJg");
        this.shape_41.setTransform(-45.7,-23.2,1.266,1.266,31);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.9,-37.6,225.5,132.2);
    
    
    (lib.Path_11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap14();
        this.instance.parent = this;
        this.instance.setTransform(-0.1,0,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(-0.1,0,57.1,44.1), null);
    
    
    (lib.Path_10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgqAsQgpgVgbgkQgPgUAAgVQAAgVAXAeQA5BfBYADQAtACAhgSIAFADQAAAEgUAIQgkAMghAAQgpAAgmgUg");
        this.shape.setTransform(12.6,6.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,25.2,12.7), null);
    
    
    (lib.Path_8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap8();
        this.instance.parent = this;
        this.instance.setTransform(-0.1,0.1,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(-0.1,0.1,122.6,67.9), null);
    
    
    (lib.Group_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap20();
        this.instance.parent = this;
        this.instance.setTransform(0,0.1,1.19,1.19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0.1,31,25), null);
    
    
    (lib.bong = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AiZA/Qg/gaAAglQAAgkA/gcQBAgaBZAAQBaAAA/AaQBAAcAAAlQAAAkhAAaQg/AchaAAQhZAAhAgcg");
        this.shape.setTransform(20.9,-1.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.8,-10.4,43.4,18.2);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3 copy
        this.instance = new lib.Symbol3();
        this.instance.parent = this;
        this.instance.setTransform(-2.9,-0.3,1,1,0,0,0,29.5,26);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).to({alpha:0},16).wait(1));
    
        // Layer 4
        this.instance_1 = new lib.Bitmap1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-32.3,-26.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-32.4,-26.5,59.4,52.4);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween3("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-5,-13.7,1.001,1.001,0,0,0,-4.8,-25.2);
    
        this.instance_1 = new lib.Tween1_1("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-2.4,-16.8,1.001,1.001,0,0,0,-25.9,-17.2);
    
        this.instance_2 = new lib.Tween4("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-10.7,-12.8,1.001,1.001,0,0,0,19.3,-24);
    
        this.instance_3 = new lib.Tween5("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-8.6,-15.4,1.001,1.001,0,0,0,16.8,-8.2);
    
        this.instance_4 = new lib.Tween10("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(17.5,-22.7,1.001,1.001);
    
        this.instance_5 = new lib.Group_5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-13.3,-20.4,1.001,1.001,0,0,0,15.2,12.5);
        this.instance_5.alpha = 0.621;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.5,-38.3,101.2,77.1);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween20();
        this.instance.parent = this;
        this.instance.setTransform(25.4,17.3,1.043,1,0,0,16.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.11,skewY:3,x:22.5,y:20.5},16).to({scaleX:1.04,scaleY:1,skewY:16.5,x:25.4,y:17.3},16).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7,-18.8,59.1,69.7);
    
    
    (lib.ongkinh = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween18("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(33.8,25.4,0.601,0.601);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21,scaleY:1.24,x:27.4,y:22.7},16).to({scaleX:0.6,scaleY:0.6,x:33.8,y:25.4},17).wait(1));
    
        // Layer 3
        this.instance_1 = new lib.Tween27("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(31.9,25.4,1,1,0,0,0,0,20.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,rotation:-21.2,x:32},16).to({regX:0,rotation:0,x:31.9},17).wait(1));
    
        // Layer 4
        this.instance_2 = new lib.Path_10();
        this.instance_2.parent = this;
        this.instance_2.setTransform(27,25.3,1,1,0,0,0,19.1,-10.8);
        this.instance_2.alpha = 0.699;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-52,x:26.9},16).to({rotation:0,x:27},17).wait(1));
    
        // Layer 5
        this.instance_3 = new lib.Tween29("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(25.6,31.4,1,0.875);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.98,scaleY:1.12,x:26,y:29.5},16).to({scaleX:1,scaleY:0.88,x:25.6,y:31.4},17).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,50,54.6);
    
    
    (lib.cahqTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.cahqTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-53.9,143.9,1,1,-20,0,0,-53.9,143.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:3.7,regY:11.9,rotation:-19.8,x:-44.2,y:0.4},0).wait(1).to({rotation:-19.1,x:-42.5,y:0.5},0).wait(1).to({rotation:-18.1,x:-40,y:0.7},0).wait(1).to({rotation:-16.8,x:-36.9,y:1.1},0).wait(1).to({rotation:-15.4,x:-33.3,y:1.5},0).wait(1).to({rotation:-13.8,x:-29.3,y:2.1},0).wait(1).to({rotation:-12.1,x:-25.3,y:2.9},0).wait(1).to({rotation:-10.5,x:-21.2,y:3.8},0).wait(1).to({rotation:-8.8,x:-17.2,y:4.8},0).wait(1).to({rotation:-7.3,x:-13.7,y:5.8},0).wait(1).to({rotation:-6,x:-10.4,y:6.8},0).wait(1).to({rotation:-5,x:-7.9,y:7.6},0).wait(1).to({rotation:-4.3,x:-6.2,y:8.1},0).wait(1).to({regX:-53.9,regY:143.8,rotation:-4,x:-53.9,y:143.9},0).wait(1).to({regX:3.7,regY:11.9,rotation:-4.2,x:-6.2,y:8.1},0).wait(1).to({rotation:-4.9,x:-7.8,y:7.6},0).wait(1).to({rotation:-5.9,x:-10.2,y:6.8},0).wait(1).to({rotation:-7.2,x:-13.3,y:5.8},0).wait(1).to({rotation:-8.6,x:-16.8,y:4.8},0).wait(1).to({rotation:-10.2,x:-20.6,y:3.9},0).wait(1).to({rotation:-11.9,x:-24.7,y:3},0).wait(1).to({rotation:-13.5,x:-28.8,y:2.2},0).wait(1).to({rotation:-15.2,x:-32.8,y:1.5},0).wait(1).to({rotation:-16.6,x:-36.5,y:1},0).wait(1).to({rotation:-18,x:-39.8,y:0.6},0).wait(1).to({rotation:-19,x:-42.4,y:0.4},0).wait(1).to({rotation:-19.7,x:-44.2,y:0.3},0).wait(1).to({regX:-53.9,regY:143.7,rotation:-20,x:-53.9,y:143.9},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-113.8,-31.3,140.1,61);
    
    
    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween11("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(213.3,161.5,0.629,0.629);
    
        this.instance_1 = new lib.Tween42("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(216.8,158.5,0.249,0.249);
    
        this.instance_2 = new lib.Tween39("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(218.3,178,0.249,0.249,37.5,0,0,-29.2,-29.8);
    
        this.instance_3 = new lib.Tween40("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(218.7,183.5,0.249,0.264,9.4);
    
        this.instance_4 = new lib.Tween32("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(217,175.7,0.249,0.249,0,0,0,-24.5,-5.6);
    
        this.instance_5 = new lib.Tween32("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(209.9,176,0.249,0.249,0,0,180,-24.5,-5.8);
    
        this.instance_6 = new lib.Tween35("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(221.7,187.4,0.249,0.249,0,0,0,-42.8,46.6);
    
        this.instance_7 = new lib.bong("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(216.7,195.3,0.629,0.629,0,0,0,20.9,-1.4);
        this.instance_7.alpha = 0.301;
    
        this.instance_8 = new lib.Tween3("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(38,20.7,0.84,0.84,0,0,0,-4.7,-25.3);
    
        this.instance_9 = new lib.Tween1_1("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(40.1,18.1,0.84,0.84,0,0,0,-25.8,-17.2);
    
        this.instance_10 = new lib.Tween4("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(33.1,21.5,0.84,0.84,0,0,0,19.2,-24);
    
        this.instance_11 = new lib.Tween5("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(34.9,19.2,0.84,0.84,0,0,0,16.8,-8.2);
    
        this.instance_12 = new lib.Tween10("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(56.8,13.2,0.84,0.84);
    
        this.instance_13 = new lib.Group_5();
        this.instance_13.parent = this;
        this.instance_13.setTransform(30.9,15,0.84,0.84,0,0,0,15.2,12.4);
        this.instance_13.alpha = 0.621;
    
        this.instance_14 = new lib.Path_11();
        this.instance_14.parent = this;
        this.instance_14.setTransform(65.7,53.4,0.84,0.84,0,0,0,28.2,21.8);
        this.instance_14.alpha = 0.359;
    
        this.instance_15 = new lib.Tween12("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(139.9,33.5,0.84,0.84);
    
        this.instance_16 = new lib.ongkinh();
        this.instance_16.parent = this;
        this.instance_16.setTransform(127.4,87,0.84,0.84,0,0,0,24.9,27.3);
    
        this.instance_17 = new lib.Tween7("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(100.4,80.8,0.84,0.84);
    
        this.instance_18 = new lib.thang("single",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(138.5,90.5,0.41,0.555,0,-5,3.6);
    
        this.instance_19 = new lib.Tween8("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(114.4,137.8,0.84,0.84);
    
        this.instance_20 = new lib.Bitmap9();
        this.instance_20.parent = this;
        this.instance_20.setTransform(91.4,106.8);
    
        this.instance_21 = new lib.Path_8();
        this.instance_21.parent = this;
        this.instance_21.setTransform(107.4,139.8,0.84,0.84,0,0,0,61,34.2);
        this.instance_21.alpha = 0.512;
    
        this.instance_22 = new lib.Symbol1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(192,130,0.944,0.944,0,0,180,22.6,24.6);
    
        this.instance_23 = new lib.Symbol1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(26.4,144.4,0.84,0.84,0,0,0,22.6,24.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,248.1,201.1), null);
    
    
    (lib.mChoianh_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_cahq_check_pausable();
            }
        }
        this.frame_26 = function() {
            // playSound("sfx_cahq");
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(74));
    
        // Layer 24
        this.instance = new lib.Symbol5();
        this.instance.parent = this;
        this.instance.setTransform(11,2.5,1,1,0,0,0,124,100.5);
        this.instance.cache(-2,-2,252,205);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(99));
    
        // Layer 8
        this.instance_1 = new lib.Tween11("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(100.3,63.5,0.629,0.629);
        this.instance_1._off = true;
    
        this.instance_2 = new lib.Tween1("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(101,64,0.193,0.193,-3);
        this.instance_2._off = true;
    
        this.instance_3 = new lib.Tween43("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(98.8,65.8,0.629,0.629);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:101.7},6).to({_off:true,scaleX:0.19,scaleY:0.19,rotation:-3,x:101,y:64},1).wait(48).to({_off:false,scaleX:0.63,scaleY:0.63,rotation:0,x:100.8},1).to({x:100.3,y:63.5},42).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},1).to({x:100.1,y:60},15).to({y:60.8},7).to({_off:true,scaleX:0.63,scaleY:0.63,rotation:0,x:98.8,y:65.8},1).wait(69));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},1).to({scaleX:0.58,scaleY:0.58,x:98.9,y:21.1},12,cjs.Ease.get(1)).to({x:98.1,y:55.1},8,cjs.Ease.get(-0.36)).to({scaleX:0.63,scaleY:0.63,y:65},5).to({_off:true,scaleX:0.63,scaleY:0.63,x:100.8,y:64},1).wait(43));
    
        // Layer 15
        this.instance_4 = new lib.Tween44("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(91.2,77.2,0.629,0.629);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:91.4,y:76.9},5).to({x:91.2,y:77.2},6).to({_off:true},5).wait(76));
    
        // Guide: Layer 9
        this.instance_5 = new lib.Tween42("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(103.8,60.5,0.249,0.249);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:105},6).to({x:105.7},4).to({x:103.8},13).to({y:61.9},7).to({y:19},12,cjs.Ease.get(0.99)).to({y:53},8,cjs.Ease.get(-0.36)).to({y:61.9},5).to({rotation:2.7,x:104.8,y:62.5},17).to({rotation:0,x:103.8,y:60.5},26).wait(1));
    
        // Layer 32
        this.instance_6 = new lib.Tween45("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(91.9,77.3,0.629,0.629);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({x:92.1,y:76.6},5).to({x:91.9,y:77.3},6).to({_off:true},5).wait(76));
    
        // Layer 33
        this.instance_7 = new lib.Tween39("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(105.3,80,0.249,0.249,37.5,0,0,-29.2,-29.8);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({startPosition:0},20).to({regY:-29.9,rotation:14.1,x:102.1,y:79.5},3).to({regX:-28.9,rotation:3.3,x:100.8,y:80.4},7).to({regY:-30.1,rotation:3.3,y:37.9},12,cjs.Ease.get(1)).to({regY:-29.9,y:73.7},8,cjs.Ease.get(-0.36)).to({y:80.4},5).to({regX:-28.8,rotation:7.7,y:79.9},17).to({regX:-29.2,regY:-29.8,rotation:37.5,x:105.2,y:80},26).wait(1));
    
        // Layer 34
        this.instance_8 = new lib.Tween40("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(105.7,85.5,0.249,0.264,9.4);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({scaleY:0.25,rotation:7.5,x:105.6,y:85.1},10).to({rotation:0},13).to({scaleY:0.21,y:87},7).to({scaleY:0.25,y:44.4},12,cjs.Ease.get(1)).to({y:80.2},8,cjs.Ease.get(-0.36)).to({scaleY:0.21,y:87},5).to({scaleY:0.23,y:86.4},17).to({scaleY:0.26,rotation:9.4,x:105.7,y:85.5},26).wait(1));
    
        // Layer 35
        this.instance_9 = new lib.Tween32("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(104,77.7,0.249,0.249,0,0,0,-24.5,-5.6);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regX:-24.4,regY:-6,rotation:-25.2,x:104.7,y:79.5},6).to({regX:-24.8,regY:-5.9,rotation:-7,x:103.9,y:77.7},6).to({regX:-24.5,regY:-5.6,rotation:0,x:104},11).to({regX:-24.7,regY:-5.9,rotation:-10.7,y:78},7).to({regY:-5.8,rotation:11.2,y:36.8},12,cjs.Ease.get(1)).to({y:72.6},8,cjs.Ease.get(-0.36)).to({regX:-24.4,regY:-5.6,rotation:4.3,y:78},5).to({regX:-24.6,regY:-5.8,rotation:-22.3},4).to({regX:-24.9,regY:-6.2,rotation:3,y:77.9},13).to({regX:-24.5,regY:-5.6,rotation:0,y:77.7},26).wait(1));
    
        // FlashAICB
        this.instance_10 = new lib.Tween32("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(96.9,78,0.249,0.249,0,0,180,-24.5,-5.8);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regX:-24.7,regY:-6,x:97.5},6).to({_off:true},1).wait(16).to({_off:false},0).to({regX:-24.5,regY:-5.7,skewX:21.2,skewY:201.2,x:97.1,y:78.8},7).to({regX:-24.3,regY:-6,skewX:-22,skewY:158,x:96.9,y:35.4},12,cjs.Ease.get(1)).to({regX:-24.4,regY:-6.2,skewX:-22,y:71.2},8,cjs.Ease.get(-0.36)).to({regY:-5.7,skewX:6.2,skewY:186.2,x:97.1,y:78.8},5).to({regX:-24.6,regY:-5.5,skewX:32.8,skewY:212.8,y:78.7},4).to({regX:-24.7,skewX:-7.9,skewY:172.1,y:78.5},13).to({regX:-24.5,regY:-5.8,skewX:0,skewY:180,x:96.9,y:78},26).wait(1));
    
        // Layer 37
        this.instance_11 = new lib.Tween35("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(108.7,89.4,0.249,0.249,0,0,0,-42.8,46.6);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({regY:46.5,rotation:19.7},9).to({regY:46.6,rotation:0},14).to({regX:-42.6,regY:46.4,rotation:4.4,x:108.2,y:87.8},5).to({regY:46.5,rotation:19.4},2,cjs.Ease.get(0.55)).to({regX:-42.7,regY:46.3,rotation:71.2,x:107.4,y:44.5},12,cjs.Ease.get(1)).to({regX:-42.5,regY:46.4,rotation:26.2,y:80.2},8,cjs.Ease.get(-0.36)).to({regX:-42.6,rotation:4.4,x:108.2,y:87.8},5).to({regY:46.5,rotation:27,y:88},6).to({regX:-42.8,regY:46.4,rotation:8,x:108.4,y:88.4},11).to({regY:46.6,rotation:0,x:108.7,y:89.4},26).wait(1));
    
        // bong
        this.instance_12 = new lib.bong("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(103.7,97.3,0.629,0.629,0,0,0,20.9,-1.4);
        this.instance_12.alpha = 0.301;
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({startPosition:0},30).to({regY:-1.2,scaleX:0.29,scaleY:0.29,skewX:180,x:104.6,y:100.6},12,cjs.Ease.get(1)).to({regY:-1.4,scaleX:0.63,scaleY:0.63,skewX:0,x:103.7,y:97.3},13).wait(44));
    
        // Layer 17
        this.instance_13 = new lib.Tween14("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-70.9,-105.8,1.011,1.011);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1,guide:{path:[-70.8,-105.7,-70.9,-105.2,-71,-104.8]}},3,cjs.Ease.get(-0.54)).wait(1).to({regX:0.3,regY:-0.3,x:-70.7,y:-105.1},0).wait(1).to({scaleX:1,scaleY:1,x:-70.8,y:-104.9},0).wait(1).to({scaleX:1,scaleY:1,x:-70.9,y:-104.5},0).wait(1).to({scaleX:1,scaleY:1,x:-71,y:-104},0).wait(1).to({scaleX:1,scaleY:1,x:-71.2,y:-103.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-71.4,y:-102.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-71.6,y:-101.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-71.9,y:-100.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-72.3,y:-99},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-72.8,y:-97.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-73.3,y:-96.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-74,y:-94.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-74.7,y:-92.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-75.1,y:-91.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-75.4,y:-90},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-75.5,y:-88.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-74.8,y:-87.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-73.1,y:-86},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-70.9,y:-84.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-69,y:-84.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-67.6,y:-83},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-67.1,y:-79.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-67.9,y:-74.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-68.5,y:-72.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-69,y:-70.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-69.4,y:-69.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-69.7,y:-68.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-69.9,y:-67.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-70.1,y:-67},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-70.3,y:-66.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-70.4,y:-66.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-70.5,y:-66.1},0).wait(1).to({regX:0,regY:0,x:-70.8,y:-65.8},0).wait(29));
    
        // Layer 20
        this.instance_14 = new lib.Symbol2();
        this.instance_14.parent = this;
        this.instance_14.setTransform(42.3,-32.3,1.078,1.078);
        this.instance_14.alpha = 0.781;
        this.instance_14.compositeOperation = "lighter";
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-42.3,alpha:0.672},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-53,alpha:0.551},0).wait(1).to({regY:-0.1,scaleX:1.19,scaleY:1.19,y:-51.8,alpha:0.449},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:-49.3,alpha:0.328},0).wait(1).to({regY:0,scaleX:1.27,scaleY:1.27,y:-48,alpha:0.219},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:-45.8,alpha:0.109},0).to({_off:true},1).wait(63));
    
        // flash
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AjGHIQCundoSDDQG2i/mtjRQHaDXjfm8QEHGOCXlGQhNENFrh0Qm8C2JRDDQojinEQHcQkWnRjIHRg");
        this.shape.setTransform(45,-38.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.706)").s().p("AjMHYQCznuolDKQHGjFm8jZQHrDejnnMQEQGdCclSQhPEXF4h4QnMC9JmDKQo2iuEaHtQkhnijOHig");
        this.shape_1.setTransform(44.9,-38.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AjSHnQC5n9o2DOQHTjJnJjgQH6DljunZQEYGoChlcQhSEfGDh7QnZDBJ4DRQpHizEjH9QkqnwjUHwg");
        this.shape_2.setTransform(44.9,-38.8);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AjYHyQC+oJpCDUQHdjOnUjmQIGDqj0nkQEgGzCklkQhUElGMh+QnkDHKGDUQpUi2EqIIQkyn8jZH8g");
        this.shape_3.setTransform(45,-38.8);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(255,255,255,0.157)").s().p("AkFJbQDlp3q9EBQJDj7o3kVQJzEbknpKQFcIODImvQhmFkHgiZQpLDxMQEBQrTjdFpJ2QlypnkHJng");
        this.shape_4.setTransform(44.9,-38.8,0.84,0.84);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(255,255,255,0.082)").s().p("AjeIBQDDoYpUDaQHtjVnjjsQIWDxj7nzQEnG/CqluQhWEvGYiCQnzDMKaDbQpmi8EyIZQk6oNjgIMg");
        this.shape_5.setTransform(44.9,-38.8);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(255,255,255,0.008)").s().p("AjgIFQDFodpZDcQHxjXnnjtQIaDzj9n3QEqHDCrlxQhXEwGciCQn4DOKgDcQpri9E1IcQk9oQjiIQg");
        this.shape_6.setTransform(44.9,-38.8);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("rgba(255,255,255,0)").s().p("AjhIGQDGoepaDdQHxjXnojuQIbDzj9n4QEqHFCslzQhXEyGciEQn4DPKhDdQpsi+E2IdQk+oQjjIQg");
        this.shape_7.setTransform(45,-38.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(63));
    
        // Layer 10
        this.instance_15 = new lib.Tween3("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(-75,-77.3,0.84,0.84,0,0,0,-4.7,-25.3);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(2).to({startPosition:0},0).to({regY:-25.2,scaleY:0.92,y:-77.2},3).to({regY:-25.3,scaleY:0.84,y:-77.3},2).to({y:-71},13).to({startPosition:0},9).to({regX:-4.8,regY:-25.2,scaleX:1.02,scaleY:1.07,x:-78.6,y:-123.2},4).to({_off:true},1).wait(65));
    
        // Layer 9
        this.instance_16 = new lib.Tween1_1("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-72.9,-79.9,0.84,0.84,0,0,0,-25.8,-17.2);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({scaleX:0.9,scaleY:0.9},2).to({scaleX:0.84,scaleY:0.84},2).to({y:-79.1},4).to({y:-74},12).to({startPosition:0},9).to({regX:-25.7,scaleX:1.02,scaleY:1.07,x:-75.8,y:-127.2},4).to({_off:true},1).wait(65));
    
        // Layer 11
        this.instance_17 = new lib.Tween4("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(-79.9,-76.5,0.84,0.84,0,0,0,19.2,-24);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(5).to({startPosition:0},0).to({regY:-23.9,scaleY:0.92,y:-76.3},3).to({regY:-24,scaleY:0.84,y:-76.5},2).to({regY:-24.1,y:-71.1},10).to({startPosition:0},9).to({regY:-24,scaleX:1.02,scaleY:1.07,x:-84.5,y:-123.3},4).to({_off:true},1).wait(65));
    
        // Layer 12
        this.instance_18 = new lib.Tween5("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(-78.1,-78.8,0.84,0.84,0,0,0,16.8,-8.2);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({y:-76.3},8).to({scaleX:0.96,x:-78.5,y:-75.8},3).to({scaleX:0.84,x:-78.1,y:-74.6},2).to({y:-72.1},7).to({startPosition:0},9).to({regX:16.7,scaleX:1.02,scaleY:1.07,x:-82.3,y:-124.7},4).to({_off:true},1).wait(65));
    
        // Layer 14
        this.instance_19 = new lib.Tween10("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(-56.2,-84.8,0.84,0.84);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({y:-80.6},14).to({scaleX:0.91,scaleY:0.89,x:-54.4,y:-78},3).to({scaleX:0.84,scaleY:0.84,x:-56.2,y:-76.4},2).to({startPosition:0},1).to({startPosition:0},9).to({scaleX:1.02,scaleY:1.07,x:-55.6,y:-130.2},4).to({_off:true},1).wait(65));
    
        // Layer 13
        this.instance_20 = new lib.Group_5();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-82.1,-83,0.84,0.84,0,0,0,15.2,12.4);
        this.instance_20.alpha = 0.621;
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({regX:18,regY:13.7,x:-79.7,y:-79.4},11).to({scaleY:0.98,y:-78},3).to({scaleY:0.84,y:-76.5},2).to({y:-74.4},4).wait(9).to({regX:17.9,regY:13.6,scaleX:1.02,scaleY:1.07,x:-84.3,y:-127.7},4).to({_off:true},1).wait(65));
    
        // Layer 19
        this.instance_21 = new lib.Path_11();
        this.instance_21.parent = this;
        this.instance_21.setTransform(-47.3,-44.6,0.84,0.84,0,0,0,28.2,21.8);
        this.instance_21.alpha = 0.359;
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(4).to({y:-41.7},16).wait(9).to({scaleX:0.74,scaleY:0.72,x:-50.2,y:-58.4},5).to({y:-54.2},3).wait(1).to({regX:28.5,regY:22,scaleX:0.74,scaleY:0.73,x:-49.9,y:-53.8},0).wait(1).to({scaleX:0.75,scaleY:0.73,x:-49.8,y:-53.5},0).wait(1).to({scaleX:0.75,scaleY:0.74,x:-49.7,y:-53.2},0).wait(1).to({scaleX:0.75,scaleY:0.74,x:-49.6,y:-52.9},0).wait(1).to({scaleX:0.76,scaleY:0.74,x:-49.5,y:-52.6},0).wait(1).to({scaleX:0.76,scaleY:0.75,x:-49.4,y:-52.3},0).wait(1).to({scaleX:0.76,scaleY:0.75,x:-49.3,y:-52},0).wait(1).to({scaleX:0.76,scaleY:0.75,y:-51.7},0).wait(1).to({scaleX:0.77,scaleY:0.76,x:-49.2,y:-51.4},0).wait(1).to({scaleX:0.77,scaleY:0.76,x:-49.1,y:-51.1},0).wait(1).to({scaleX:0.77,scaleY:0.76,x:-49,y:-50.8},0).wait(1).to({scaleX:0.78,scaleY:0.77,x:-48.9,y:-50.6},0).wait(1).to({scaleX:0.78,scaleY:0.77,x:-48.8,y:-50.2},0).wait(1).to({scaleX:0.78,scaleY:0.77,x:-48.7,y:-50},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:-48.6,y:-49.7},0).wait(1).to({scaleX:0.79,scaleY:0.78,y:-49.4},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:-48.5,y:-49.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-48.4,y:-48.8},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:-48.3,y:-48.5},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:-48.2,y:-48.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-48.1,y:-47.9},0).wait(1).to({scaleX:0.81,scaleY:0.8,x:-48,y:-47.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-47.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-47.9,y:-47},0).wait(1).to({scaleX:0.82,scaleY:0.81,x:-47.8,y:-46.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-47.7,y:-46.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-47.6,y:-46.2},0).wait(1).to({scaleX:0.83,scaleY:0.82,x:-47.5,y:-45.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-47.4,y:-45.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-47.3,y:-45.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-44.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-47.2,y:-44.7},0).wait(1).to({regX:28.2,regY:21.8,scaleX:0.84,scaleY:0.84,x:-47.3,y:-44.6},0).wait(29));
    
        // Layer 6
        this.instance_22 = new lib.Tween12("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(26.9,-64.5,0.84,0.84);
        this.instance_22._off = true;
    
        this.instance_23 = new lib.Tween13("synched",0);
        this.instance_23.parent = this;
        this.instance_23.setTransform(26.9,-59.9,0.84,0.84);
        this.instance_23._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).to({startPosition:0},4).to({x:27.3,y:-63.9},2).to({x:26.8,y:-63.3},2).to({x:27.3,y:-62.7},2).to({x:26.8,y:-62.1},2).to({x:27.2,y:-61.6},2).to({x:26.7,y:-61},2).to({x:27.2,y:-60.4},2).to({_off:true,x:26.9,y:-59.9},2).wait(20).to({_off:false,y:-64.5},30,cjs.Ease.get(-1)).wait(29));
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(19).to({_off:false},2).to({scaleY:0.63,y:-57.8},4).wait(5).to({scaleY:0.84,y:-59.9},0).to({scaleY:1.01,y:-79.6},2).to({scaleY:0.88,y:-72.4},6).to({scaleY:0.88,y:-69.2},3).to({_off:true,scaleY:0.84,y:-64.5},30,cjs.Ease.get(-1)).wait(29));
    
        // Layer 7
        this.instance_24 = new lib.ongkinh();
        this.instance_24.parent = this;
        this.instance_24.setTransform(14.4,-11,0.84,0.84,0,0,0,24.9,27.3);
        this.instance_24._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).wait(4).to({x:14.8,y:-10.1},2).to({x:14.4,y:-9.7},2).to({regY:27.2,x:14.8,y:-9.4},2).to({regY:27.3,x:14.4,y:-8.9},2).to({x:14.8,y:-8.5},2).to({x:14.4,y:-8},2).to({x:14.8,y:-7.6},2).to({regY:27.2,x:14.4,y:-7.3},2).wait(9).to({regY:27.4,scaleY:0.88,y:-23},2).to({regY:27.3,y:-17.2},6).to({scaleY:0.84,y:-11},33,cjs.Ease.get(-1)).wait(29));
    
        // Layer 1
        this.instance_25 = new lib.Tween7("synched",0);
        this.instance_25.parent = this;
        this.instance_25.setTransform(-12.6,-17.2,0.84,0.84);
        this.instance_25._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({x:-12.4,y:-17},4).to({x:-11.5,y:-16.2},2).to({x:-12.8,y:-15.8},2).to({x:-11.5,y:-15.4},2).to({x:-12.8,y:-14.9},2).to({x:-11.5,y:-14.5},2).to({x:-12.8,y:-14.1},2).to({x:-11.5,y:-13.7},2).to({x:-12.4},2).to({startPosition:0},9).to({scaleY:0.88,y:-32.8},2).to({y:-24},6).to({scaleY:0.85,y:-22.3},3).to({scaleY:0.84,y:-17},30,cjs.Ease.get(-1)).wait(29));
    
        // Layer 22
        this.instance_26 = new lib.thang("single",0);
        this.instance_26.parent = this;
        this.instance_26.setTransform(25.5,-7.5,0.41,0.555,0,-5,3.6);
        this.instance_26._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:31.6,y:17.9},20).wait(9).to({startPosition:0},0).to({x:25.5,y:-7.5},2).wait(68));
    
        // flash0.ai
        this.instance_27 = new lib.Tween8("synched",0);
        this.instance_27.parent = this;
        this.instance_27.setTransform(1.4,39.8,0.84,0.84);
        this.instance_27._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).wait(4).to({y:39.5},0).to({scaleY:0.78,y:41.6},16).wait(9).to({startPosition:0},0).to({scaleY:0.82,y:29.7},2).to({scaleY:0.84,y:39.5},6).to({scaleY:0.87,y:38.4},27).to({scaleY:0.84,y:39.5},6).wait(29));
    
        // Layer 3
        this.instance_28 = new lib.Bitmap9();
        this.instance_28.parent = this;
        this.instance_28.setTransform(-21.6,8.8);
        this.instance_28._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).wait(99));
    
        // Layer 23
        this.instance_29 = new lib.Path_8();
        this.instance_29.parent = this;
        this.instance_29.setTransform(-5.6,41.8,0.84,0.84,0,0,0,61,34.2);
        this.instance_29.alpha = 0.512;
        this.instance_29._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).wait(4).to({scaleX:0.92,scaleY:0.92,x:-6.5,y:40.5},16).wait(9).to({regY:34.1,scaleX:0.77,scaleY:0.77,x:-6.4,y:40.4},2).to({scaleX:0.91,scaleY:0.91,x:-6.5},6).to({regY:34.2,scaleX:0.84,scaleY:0.84,x:-5.6,y:41.8},26).wait(36));
    
        // Layer 16
        this.instance_30 = new lib.Symbol1();
        this.instance_30.parent = this;
        this.instance_30.setTransform(79,32,0.944,0.944,0,0,180,22.6,24.6);
    
        this.instance_31 = new lib.Symbol1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(-86.6,46.4,0.84,0.84,0,0,0,22.6,24.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31},{t:this.instance_30}]},1).wait(99));
    
        // Layer 5
        this.instance_32 = new lib.Bitmap3();
        this.instance_32.parent = this;
        this.instance_32.setTransform(-80.6,10.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(100));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-113,-98,248.1,211);
    
    
    (lib.cahqTit_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (inited === undefined) {
                this.over = new Boolean(false);
                var inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.parent.icon_cahq_check_pausable();
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
        this.instance = new lib.cahqTit_ani();
        this.instance.parent = this;
        this.instance.setTransform(14.8,38.5);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-30.7,regY:0.3,x:-15.9,y:26.5,alpha:0.306},0).wait(1).to({y:16.5,alpha:0.556},0).wait(1).to({y:8.8,alpha:0.75},0).wait(1).to({y:3.2,alpha:0.889},0).wait(1).to({y:-0.1,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:-30.7,regY:0.3,x:-15.9,y:-0.9,alpha:0.972},0).wait(1).to({y:-0.1,alpha:0.889},0).wait(1).to({y:1.3,alpha:0.75},0).wait(1).to({y:3.2,alpha:0.556},0).wait(1).to({y:5.7,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
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
    
        // Layer 3
        this.tit = new lib.cahqTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(165,0);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(82.5,86,1,1,0,0,0,82.5,85.7);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0.3,164.9,171.3);
    
    
    // stage content:
    (lib.cahq2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_cahq.mp3", "voice_cahq"); 
            var icon_cahqSound, icon_cahqSoundTimeOut;
            root_cahq = this;
            htcv_icon_cahqOver = function() {cv_icon_cahqOver();}
            htcv_icon_cahqOut = function() {cv_icon_cahqOut();}
            
            function cv_icon_cahqOver() {
                root_cahq.ico.over = true;
                root_cahq.hit.tit.over = true;
                root_cahq.hit.tit.gotoAndPlay(1);
                icon_cahqSoundTimeOut = setTimeout(icon_cahqSoundTimeOutComplete, 500);
            }
            
            function cv_icon_cahqOut() {
                root_cahq.ico.over = false;
                root_cahq.hit.tit.over = false;
                if (root_cahq.hit.tit.currentFrame == 7) {
                    root_cahq.hit.tit.play();
                }
                // clearTimeout(icon_cahqSoundTimeOut);
            }
            
            function icon_cahqSoundTimeOutComplete() {
                clearTimeout(icon_cahqSoundTimeOut);
                
                // if (root_cahq.ico.currentFrame == 0) {
                //     icon_cahqSound = createjs.Sound.play("voice_cahq");
                // }
                root_cahq.ico.play();
            }
            
            this.icon_cahq_check_pausable = function() {
                if (root_cahq.ico.over == false && root_cahq.hit.tit.over == false && root_cahq.ico.currentFrame == 0 && root_cahq.hit.tit.currentFrame == 0) {
                    cvht_icon_cahq_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 3
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(117.2,142,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.mChoianh_resize();
        this.ico.parent = this;
        this.ico.setTransform(130.8,151.9,1,1,0,0,0,0.8,-0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(151.2,189,248.9,210.9);
    // library properties:
    lib.properties = {
        width: 270,
        height: 270,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/cahq2017_atlas_.png", id:"cahq2017_atlas_"},
            /*{src:"sounds/voice_cahq.mp3", id:"voice_cahq"},*/
            // {src:HTML5_SOUND_ROOT+"sounds/sfx_cahq.mp3", id:"sfx_cahq"}
        ],
        preloads: []
    };
    
    
    
    
    })(lib_cahq = lib_cahq||{}, images_cahq = images_cahq||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_cahq, images_cahq, createjs, ss, AdobeAn;