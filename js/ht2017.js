(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"ht2017_atlas_", frames: [[0,385,151,34],[0,327,220,56],[203,391,81,21],[496,121,10,3],[492,299,17,11],[222,327,88,62],[0,0,364,325],[366,97,128,101],[473,237,19,31],[473,200,34,35],[455,275,57,22],[153,385,48,84],[387,345,78,62],[366,0,143,95],[387,409,111,22],[366,200,105,73],[496,97,12,22],[455,299,35,12],[312,345,73,73],[366,275,87,68]]}
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
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap11 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap19 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap2 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap20 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap21 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap22 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap23 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap24 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap25 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap26 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap27 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap7 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.htspiral = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Untitled1 = function() {
        this.spriteSheet = ss["ht2017_atlas_"];
        this.gotoAndStop(19);
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
    
    
    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhPBPQghghAAguQAAguAhghQAighAtAAQAuAAAhAhQAiAhAAAuQAAAugiAhQghAiguAAQgtAAgigig");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-11.2,-11.2,22.6,22.6), null);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#540101").s().p("AgTAaQgEgDADgLQAEgJAHgJQAPgUAKAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAFADgEALQgEAJgHAJQgPAUgKAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAgGgFQgIAJgDAJQgDAJADACQACACAIgFQAHgFAHgKQAIgJADgJQADgIgDgDIgCAAQgJAAgNASg");
        this.shape.setTransform(5.7,-13.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF0043").s().p("AgSAZQgEgDADgJQAEgJAIgJQAHgLAIgFQAIgFADACQAEADgDAJQgEAJgIAKQgIAKgHAFQgFAEgDAAIgDgBg");
        this.shape_1.setTransform(5.7,-13.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
        // Layer 4
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#540101").s().p("AAAAoQgMgGgEgOQgDgLAFgJQAGgKAKgDQAJgDAIAFQAJAEACAIQADAIgEAHQgEAHgIACQgGACgGgDQgFgDgCgHQgBgFACgFQADgEAFgCQAEgBAFACQAEACABAEQABAEgDABQgEABgBgEIgCgCIgDAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAQgBACABADQABAEADABQADACADgBQAFgBACgFQACgEgBgFQgCgFgFgDQgGgDgGACQgHACgEAHQgEAHACAIQADAKAJAGQAJAFALgDQANgEAHgMQAHgNgEgMQgFgRgQgJQgQgIgQAFQgWAGgLAUQgLATAHAWQABADgEACQgDABgCgEQgHgZANgWQAMgWAZgIQATgGATAKQASALAGAUQAFAPgIAPQgJAPgQAFQgFACgFAAQgIAAgHgFg");
        this.shape_2.setTransform(13.1,-24.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
        // Layer 5
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF0043").s().p("AABAlQgKgGgEgMIgjAPQgHgYAMgUQAMgVAXgHQASgGARAKQARAJAFATQAFAOgIAOQgHANgPAFIgJABQgHAAgHgEg");
        this.shape_3.setTransform(13.1,-24.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
        // Layer 6
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#540101").s().p("Ag0AsQgUgXADgdQACgeAWgSQATgOAYAAQAiAAAWAbQATAXgCAcQgCAegXASQgSAPgYAAQgiAAgWgbgAgogyQgTAQgDAaQgBAbARAUQATAZAfAAQAUAAASgOQATgQACgaQACgagRgUQgUgZgeAAQgWAAgQANg");
        this.shape_4.setTransform(13.8,-24.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    
        // Layer 7
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FF0043").s().p("AgEBDQgcgDgSgXQgSgVACgbQACgdAWgQQAUgRAbADQAbAEATAVQASAXgCAbQgCAcgVARQgRAOgWAAIgJgBg");
        this.shape_5.setTransform(13.8,-24.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));
    
        // Layer 8
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#540101").s().p("AgxAMQgEgFAAgHQAAgEAIgDQALgFAggDQAXgCAYAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAHANgCADQgCADgDAAQg2APgXAAQgPAAgGgGgAgOgGQgcADgDADQAAAFACACQAEADALAAQAWABA0gPIgDgFQggABgZACg");
        this.shape_6.setTransform(7,-23,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));
    
        // Layer 9
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FF0043").s().p("AgyAAQAAgHAwgEQAXgCAYAAQAJANgGAAQg1AOgWAAIgCAAQgVAAAAgOg");
        this.shape_7.setTransform(7,-23,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));
    
        // Layer 10
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#020202").s().p("AADAmQgMAAgEglQgCglAMgBIABAAQAGAAAFANQADAKABAOQADAagHAJQgDADgDAAgAgFAAQABANADAIQACAIACABQAFgFgCgZQgDgagFgDQgFAHACAWg");
        this.shape_8.setTransform(-14.4,-4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));
    
        // Layer 11
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#9CADB7").s().p("AgEAZQgDgJgCgPQgBgNACgLQACgJAEgBQADAAADAJQAEAKACAOQABANgCALQgCAJgEABIAAAAQgDAAgEgJg");
        this.shape_9.setTransform(-14.4,-4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));
    
        // Layer 12
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#020202").s().p("AgeAZQgCgSAIgQQAIgRANgBQAMgBALAPQAKANACATQABAEgEAAQgEABgBgFQgBgPgIgLQgJgNgIABQgJABgHAOQgGANABAPQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgCABQgEAAAAgDg");
        this.shape_10.setTransform(-14.4,-6.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));
    
        // Layer 13
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#CEE3EA").s().p("AgVgGQAHgQALgBQAKgBAKAOQAJANACAQIg3AFQgBgQAHgOg");
        this.shape_11.setTransform(-14.4,-6.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));
    
        // Layer 14
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#020202").s().p("AgkAJQgCgGAMgGQAIgFAQgEQAQgDAGAAQAPAAACAHQADAMglAJQgLADgLAAQgPAAgCgHgAAAgFQgYAFgEAHQADACAGAAQAKAAAKgDQAMgDAJgDQAGgEABgCQgDgBgGAAQgJAAgLACg");
        this.shape_12.setTransform(1.6,7.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));
    
        // Layer 15
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#9CADB7").s().p("AgVAMQgKAAgBgEQgBgEAJgEQAJgFAOgDQANgEAKABQALAAAAAEQABAEgJAEQgJAFgOAEQgLACgJAAIgDAAg");
        this.shape_13.setTransform(1.6,7.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));
    
        // Layer 16
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#020202").s().p("AgMAgQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgBgDAEgBQAPgEAKgLQAMgKgCgIQgCgJgQgEQgOgEgOAEQgEABAAgEQgBgEADgBQATgEAQAFQARAGADAMQADAMgOANQgMANgRAEg");
        this.shape_14.setTransform(3.6,7.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));
    
        // Layer 17
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#CEE3EA").s().p("AgZgZQARgEAOAEQARAEADALQACAKgMAMQgNAMgPAEg");
        this.shape_15.setTransform(3.6,7.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));
    
        // Layer 18
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#020202").s().p("ACLD1QgjgHgegYQgUgQgjgmQgwg0gjgaQgggXhAgcQgsgTgSgMQgdgSgNgaQgfg+Aig5QATggAhgWQApgcAzAAQBbAACCBdQBnBKAuBYQAuBbgiBFQgSAkgiAVQgeATgeAAQgHAAgHgBgAjNjTQghAWgSAgQgeA0AdA5QAMAZAcASQARAKArATQA/AcAiAYQAkAZAwA2QAjAlATAPQAeAYAgAGQAGACAHAAQAcAAAdgSQAfgVARghQAghBgshYQgshWhnhKQiAhchYAAQgwAAgoAbg");
        this.shape_16.setTransform(-9.3,6.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));
    
        // Layer 19
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#CEE3EA").s().p("ACMDxQgwgKg0g2QhKhOgcgUQgbgUhbgpQg/gcgSgkQgcg6Acg0QASgjAkgYQA5gmBLAQQBLAPBmBJQBnBKAtBXQAtBZgiBDQgTAmglAVQgaAQgYAAQgIAAgHgCg");
        this.shape_17.setTransform(-9.4,6.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));
    
        // Layer 20
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#020202").s().p("AAMAwQgUgHgQgMQgVgQgDgQQgDgYAggUQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABIA+AuQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAABQgBALgHAPQgKAVgNAAgAgogEQACANATAOQAPALASAHIAEAAQAIAAAHgOQAFgLADgNIg6grQgZATACARg");
        this.shape_18.setTransform(-5.2,20.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));
    
        // Layer 21
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AANAtQghgMgQgVQgXgdAqgbIA+AuIgHAYQgJATgLAAIgFAAg");
        this.shape_19.setTransform(-5.2,20.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));
    
        // Layer 22
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#020202").s().p("AAMAwQgUgHgQgMQgVgQgDgQQgDgYAggUQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABIA/AuQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAABQgJAvgWAAgAgogEQACANATAOQAPALASAHIAEAAQAOAAAJgmIg6grQgZATACARg");
        this.shape_20.setTransform(-22.8,7.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));
    
        // Layer 23
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AANAsQghgLgQgVQgXgcAqgcIA+AuIgHAYQgJATgLAAIgFgBg");
        this.shape_21.setTransform(-22.8,7.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));
    
        // Layer 24
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#020202").s().p("AgKAeQgEgBABgEQABgDADAAQAIABAJAAQANgBAFgFQADgDgCgGQgBgHgFgBQgHgDgQAJIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAJgRgKgFQgIgFgFAIQgJAKAKAQQACADgDACQgDACgCgDQgEgGgBgGQgEgOAIgJQAFgGAGgBQAHgBAFADQAKAHgEARQAQgGAJAEQAIAEACAJQACAJgGAHQgIAIgTAAg");
        this.shape_22.setTransform(-15.2,14.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));
    
        // Layer 25
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FF0000").s().p("AgJAbIgQgQQgDgFgCgGQgDgMAHgIQAJgLAKAIQAJAIgHATIAQgGQARgEADAPQAEAQgWACg");
        this.shape_23.setTransform(-15.2,14.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));
    
        // Layer 26
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#020202").s().p("AhABVQgMgBgFgHQgJgMACgZQABgPAHgcIABgHQAEgTgBgaIgBgWQgBgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAEgDAIAAQAcAAA4AtQAzAnAPAYQAEAIgDADQgBAEgFAAIgDAAIgGgBQgMAAgVAHIgmARQgwAXgQAAgAhFhLQAEAngGAcIgCAGQgOA8AMAOQADAEAJABQAOABAwgWQA2gaAUAAIAIABIAAAAQgCgHgTgTQgcgdgjgYQgogdgUABg");
        this.shape_24.setTransform(-13.2,13.7,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));
    
        // Layer 27
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FF0000").s().p("AhABRQgWAAABghQAAgQAJgpQAFgUgBgaIgCgXQAZgPBPBCQAeAZAQATQARAUgNgCQgTgEg2AZQg3AZgPAAIgBAAg");
        this.shape_25.setTransform(-13.2,13.6,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));
    
        // Layer 28
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#020760").s().p("AApAsIhMgKQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGhGQAAgEADAAQAEAAABAEIAFBCIBJAJQAEAAgBAEQAAABAAABQgBAAAAABQAAAAgBABQgBAAgBAAg");
        this.shape_26.setTransform(23,-35.7,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));
    
        // Layer 29
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#020760").s().p("AAsA/IhZgVQgDgBAAgDIAOhhQABgEAEABQADAAAAAEIgOBeIBWATQAEABgBAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAg");
        this.shape_27.setTransform(26,-39.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));
    
        // Layer 30
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#020760").s().p("AghAjIgBgDIAKhAQAAgEAEAAQADABAAAEIgJA8IA5gBQAEAAAAAEQAAADgEAAIg9ABIAAABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
        this.shape_28.setTransform(19.5,-32.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));
    
        // Layer 31
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#02005B").s().p("AgOBeQhagWgDgNQgEgMAihiIACgCQAngZApgJQAggGATAAQAsAAAHAaQAJAegqA0QgmAvgvAfIgCABgAAGhPQgnAIglAYQghBbADANQAFAJBRAUQAwggAkguQAmgvgIgaQgGgUgmAAQgUAAgeAGg");
        this.shape_29.setTransform(32.7,-42.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));
    
        // Layer 32
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#3945D8").s().p("Ag6BPQgsgOgCgHQgCgIAQgyIAQgxQAngZAogJQB8gageBMQgbBEhWA4IgsgMg");
        this.shape_30.setTransform(32.7,-42.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));
    
        // Layer 33
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#020760").s().p("AhXBlQgEgCADgDQATgaA5hEQBLhaAVgMQAEgCABADQACAEgDABQgUAMhMBcIhKBaIgDACIgCgBg");
        this.shape_31.setTransform(20.3,-32.7,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));
    
        // Layer 34
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFFFF").s().p("AgMAHQBNhcAVgMIirDDg");
        this.shape_32.setTransform(20.3,-32.7,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));
    
        // Layer 35
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#020760").s().p("Ai/CpIAAgCQAQg2AhhAQBBh+BUg3QAngaAqgIQAegHAVAAQAsABAIAZQAIAegqA1QgmAwgwAeIhcA/QhHAwggATQguAegNAAQgGAAgCgFgABaifQgqAKglAXQhNA0g/ByQgjBCgTA8QAMAAAwgfIBihBIBcg/QAwgeAlguQAngygIgaQgGgUgmAAQgVAAgcAGg");
        this.shape_33.setTransform(27,-37.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));
    
        // Layer 36
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#00E1FF").s().p("Ai8CoQAQg0AghAQBCh+BTg3QAngZApgIQB8gageBMQgbBDhXA4IilBwQhJAvgPAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
        this.shape_34.setTransform(27,-37.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));
    
        // Layer 113
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FFFFFF").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_35.setTransform(3.2,-0.8,0.5,0.5,7);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#FFFFFF").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_36.setTransform(-5.6,-7.5,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));
    
        // Layer 40
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_37.setTransform(3.7,-1.8,1,1,7);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_38.setTransform(-5.4,-8.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));
    
        // Layer 41
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#020202").s().p("AAcAtQgEAAAAgEQADhBgVgKQgIgEgMAGQgLAFAAACQgDACgCgDQgDgCADgDQAFgFAJgEQAPgGAKAFQAaAMgDBGQAAABAAABQgBAAAAABQAAAAgBAAQgBABgBAAg");
        this.shape_39.setTransform(11.6,-10.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));
    
        // Layer 42
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#9CADB7").s().p("AgbgcIAJgHQAMgGAIACQAdAEgDBMg");
        this.shape_40.setTransform(11.6,-10.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));
    
        // Layer 43
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#020202").s().p("AAnAaQgEgBACgEQAIgVgKgLQgRgQg8AXQgDABgCgDQgBgEADgBQBBgZAUAUQAOAOgKAaQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
        this.shape_41.setTransform(0.4,-18.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1));
    
        // Layer 44
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#9CADB7").s().p("AgrgHQBGgcAOAaQAHANgIASg");
        this.shape_42.setTransform(0.5,-18.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));
    
        // Layer 45
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#020202").s().p("AgMBpQgFgEgKgNQgNgRgHgEIgOgJQgOgJgFgFQgJgHgCgLQgEgUAZgiQA8hUAxAAQATAAARANQAaAUgMA6QgLA3gjAxQgVAegRAAQgIAAgJgIgAhAgXQgXAeADASQACAHAIAIIARALIAPAJQAJAIAMAQQARAVAJAAQANAAATgbQAjgwAKg0QAKg2gWgRQgOgLgRAAQgtAAg6BRg");
        this.shape_43.setTransform(4.3,-0.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));
    
        // Layer 46
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#FFFFFF").s().p("AgIBoQgXgegOgKIgngdQgNgUAdgoQAlg0AhgUQAngXAfAYQAYATgLA4QgLA1giAxQgUAcgQAAQgGAAgGgFg");
        this.shape_44.setTransform(4.4,-0.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));
    
        // Layer 47
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#020202").s().p("AgLBhIgRgNIgNgKQgHgFgUgHQgPgFgGgEQgKgGgDgIQgFgQAVgdQAdgoAogcQAogcAeAAQAOAAAJAHQAWAOAEAYQAJAug3BMQgbAmgWAAQgIAAgKgGgAgNhDQgnAagcAnQgSAaADAMQADAKAbAJQAVAHAIAGIANAKQATARALAAQATAAAYgiQA0hJgHgrQgEgVgTgNQgJgFgKAAQgdAAglAbg");
        this.shape_45.setTransform(-6.6,-8.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));
    
        // Layer 48
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#FFFFFF").s().p("AABBjQgCgBgmgbQglgOgNgIQgWgPAcgmQAjgwAwgcQAwgdAaARQAgAVgIAtQgIAlglA0QgaAkgVAAIgFAAg");
        this.shape_46.setTransform(-6.6,-8.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1));
    
        // Layer 49
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#020202").s().p("AiHDPQkwjYB6iqQAxhEBWgpQBWgpBfAAQB0AABYA/QA7AqAmBBQAlBBALBQQAKBJgPBHQgPBIgmA0Qg3BMhYAAQhvAAirh7gAiykZQhVAogwBCQg/BYA5BmQAyBYCJBiQCqB6BrAAQBVAAA0hJQBNhtgUiYQgViih5hXQhWg9hyAAQhdAAhUAog");
        this.shape_47.setTransform(-5,0.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));
    
        // Layer 50
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#9CADB7").s().p("ABnFDQhhgTiLhjQksjXB3inQBPhuCageQChggB5BXQB4BWAXCjQAWCbhPBvQg2BKhWAAQgVAAgXgEg");
        this.shape_48.setTransform(-5,0.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));
    
        // Layer 51
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#020202").s().p("AgUAlQgFgCgBgFQgFgPAMgXQAHgNAKgIQAIgIAJAAIAFABQAHAEABAOQAAANgHAOQgGAMgMAJQgKAIgIAAgAACgXQgIAHgGALQgKAVADALQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAIACABQAGAAAJgHQAJgIAFgLQAHgKAAgNQgBgKgEgBIgBgBQgGAAgHAHg");
        this.shape_49.setTransform(26.6,2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));
    
        // Layer 52
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#79858C").s().p("AgTAiQgFgDABgMQABgMAHgNQAHgOAKgIQAKgIAGADQAGADAAAMQABAMgHANQgHANgMAJQgIAGgGAAIgEgBg");
        this.shape_50.setTransform(26.6,2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));
    
        // Layer 53
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#020202").s().p("AgaAfQgngcgPgXQgOgaAFgJQADgFAEAAIABAAICZAgQAQADADAVQACAPgJARQgKAUgUAJQgFAEgIAAQgbAAgogegAhTg0QgDAHANAUQAOAZAmAaQAmAbAYAAQAGAAAEgCQARgJAJgRQAIgPgCgNQgCgQgLgCIiYgfg");
        this.shape_51.setTransform(22.5,0.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1));
    
        // Layer 54
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#9CADB7").s().p("AgPAiQgtgdgQgcQgNgVADgIIAEgEICZAfQAUAFgEAcQgFAfgdAPQgGADgHAAQgVAAgigXg");
        this.shape_52.setTransform(22.5,0.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));
    
        // Layer 55
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#020202").s().p("AghAZQgDgDABgIQABgIAHgIQAGgKAKgHQAOgLAQAAQAKAAAFAGQAFAIgHANQgHALgOAJQgSAOgOAAQgJAAgDgGgAgHgMQgRAMgDAPQgBAEABADQABABAFAAQAMAAAQgLQALgJAHgJQAFgKgDgEQgBgCgHAAQgNgBgNALg");
        this.shape_53.setTransform(-14.4,-28.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(1));
    
        // Layer 56
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#79858C").s().p("AgeAYQgEgGAHgNQAGgMANgJQALgIAMgCQAMgBAEAGQAEAFgGALQgHALgMAJQgMAJgMACIgHABQgGAAgDgDg");
        this.shape_54.setTransform(-14.5,-28.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));
    
        // Layer 57
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#020202").s().p("AAeBQQgegMgkgqQgngsAJgYQAIgVARgMQAQgLARAAQATAAAGAOQAJAXArB9IAAAAQABAEgDADQgDAEgHAAQgJAAgSgHgAglhEQgPAKgHATQgHAUAkApQAhAnAeALQAQAHAIAAIAEgBIAAgBQgrh8gIgVQgEgKgOAAQgPAAgOAKg");
        this.shape_55.setTransform(-12.5,-25.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(1));
    
        // Layer 58
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#9CADB7").s().p("AAgBNQgfgMgigpQglgqAHgWQAMgfAdgJQAcgIAHATQAJAWArB9QABADgEACIgFABQgJAAgQgHg");
        this.shape_56.setTransform(-12.5,-25.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));
    
        // Layer 59
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#000000").s().p("AEBBfQh8hujQgvQhAgPhCgGIg2gFQgEAAAAgEQAAgDAEAAIA2AEQBDAGBBAPQBXAVBNAgQBlAsBGA+QADADgDADQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
        this.shape_57.setTransform(8.8,-21.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));
    
        // Layer 60
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#FFEFD2").s().p("AkDhbIA1AEQBDAGBBAPQDRAwB9Bug");
        this.shape_58.setTransform(8.8,-21.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));
    
        // Layer 61
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("ACIAlQgfgXgygRQhhglheARQgEABgBgEQgBgEAEgBQBggRBkAmQAyASAhAXQADADgDACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
        this.shape_59.setTransform(22.4,-30.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));
    
        // Layer 62
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#FFEFD2").s().p("AiJgbQBggRBjAmQAyASAeAWg");
        this.shape_60.setTransform(22.4,-30.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(1));
    
        // Layer 63
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#000000").s().p("ACuD3QAAhpg6hnQgshMhKhIQg2g0hDguIg3gkQgEgBACgEQACgCADABIA5AjQBCAuA3A1QBLBJAtBOQA7BpAABqQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQgEgBAAgDg");
        this.shape_61.setTransform(16,-22.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));
    
        // Layer 64
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#FFEFD2").s().p("Aixj2IA3AjQBDAtA3A2QCyCrAAC8g");
        this.shape_62.setTransform(16,-22.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(1));
    
        // Layer 65
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#000000").s().p("AiADDQh4hVgphNQgwhaA7hTQAWgfAlgdQAmgdAtgXQBjgxBfAAQBVAAA8AqQA7ArAcBPQATA4ACBBQADBGgRBFQgSBEgfAsQgwBDhPAAQhlAAiUhrgAiIjzQhcAvgsA9Qg4BPAuBWQAnBKB3BVQCSBpBjABQBMAAAthAQBDhfgGiYQgGimhjhGQg4gphUAAQhfAAhjAyg");
        this.shape_63.setTransform(11.9,-22,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));
    
        // Layer 66
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#FFEFD2").s().p("Ah/DBQh3hVgohMQgvhYA6hRQBEhgCTgtQCfgxBlBIQBlBIAGCoQAGCZhFBgQguBBhOAAQhiAAiVhqg");
        this.shape_64.setTransform(11.9,-22,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1));
    
        // Layer 67
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#020202").s().p("AAAAPQgHAAgEgFQgEgFAAgGQABgGAFgEQAFgEAGAAQAGABAEAFQAFAFgBAFQgBAGgEAFQgFAEgGAAgAgHAAQgBAHAIABQADAAACgCQADgCAAgDQABgDgDgCQgCgDgDAAIgBAAQgHAAAAAHg");
        this.shape_65.setTransform(-4.1,29.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(1));
    
        // Layer 68
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgDQgDgEAAgEQABgFAEgDQADgDAEAAQAFAAADAFQADADAAAEQAAAFgEADQgEADgEAAIAAAAg");
        this.shape_66.setTransform(-4.1,29.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(1));
    
        // Layer 69
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#020202").s().p("AgBAQQgGgBgEgFQgEgFAAgFQABgHAFgEQAFgEAFAAQAHABAEAFQAEAFAAAGQgBAGgEAEQgFAEgGAAgAgHAAQgBADADACQACADADAAQADABACgDQADgCAAgDQAAgHgHgBIgBAAQgGAAgBAHg");
        this.shape_67.setTransform(-9.2,32,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(1));
    
        // Layer 70
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#FFFFFF").s().p("AAAAMQgFgBgDgDQgDgEAAgEQABgFAEgDQADgDAEAAQAFABADAEQADADAAAEQgBAFgDADQgDADgEAAIgBAAg");
        this.shape_68.setTransform(-9.2,32,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(1));
    
        // Layer 71
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#020202").s().p("AgBASQgHAAgFgGQgFgGABgHQABgHAFgFQAGgFAHABQAHABAFAFQAFAGgBAHQAAAHgGAFQgFAEgHAAgAgKAAQAAADADAEQACADAFABQADAAAEgDQADgDAAgEQABgDgDgEQgDgDgEgBIgBAAQgJAAgBAKg");
        this.shape_69.setTransform(-16.3,32.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));
    
        // Layer 72
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#FFFFFF").s().p("AgBAOQgGAAgDgFQgEgEAAgFQABgGAFgEQAEgEAFABQAGAAAEAFQAEAEgBAFQAAAGgFAEQgEADgEAAIgCAAg");
        this.shape_70.setTransform(-16.3,32.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));
    
        // Layer 73
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#020202").s().p("AAXA0QgSgBgMgMQgNgMgCgPQgBgMAIgIQAKgJAPABQALABAJAIQAJAHABAKQABAIgGAGQgHAHgKgBQgJAAgFgGQgFgFgBgIQAAgGADgEQAEgDAIAAQAGABAEACQAEAEAAAFQABAEgEABQgEAAAAgEQgBgFgHgBQgEAAgCACQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAEAEADQAEAEAFAAQAIAAAEgDQADgEgBgEQAAgIgHgFQgHgFgJgBQgMgBgGAHQgGAFABAIQABANAMAJQAKAKAOABQAUACAMgMQAKgKgCgOQgCgUgSgPQgSgQgXgCQgggCgTATQgQAQADAWQAAAEgEABQgEAAAAgEQgDgaASgSQAWgWAjACQAaACAVASQAUASACAWQACASgMAMQgNANgVAAg");
        this.shape_71.setTransform(-25.4,29.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(1));
    
        // Layer 74
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#FFFFFF").s().p("AAXAwQgQgBgLgLQgNgKgBgOIgwABQgDgbAUgRQAVgSAeACQAZACATARQATARACAVQACARgNALQgMAKgRAAIgEAAg");
        this.shape_72.setTransform(-25.4,29.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));
    
        // Layer 75
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#020202").s().p("AglBCQgagPgOgaQgTghAMggQAMgbAfgKQAOgDALAAQAcAAAaAPQAaAQAOAZQATAigMAeQgLAcgfAKQgLAEgPAAQgbAAgbgQgAgnhFQgbAIgKAYQgLAdARAdQANAYAYAOQAZAPAZAAQALAAAMgEQAcgIAJgYQAMgcgSgeQgMgXgZgPQgZgPgZAAQgNAAgKAEg");
        this.shape_73.setTransform(-24.4,29.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));
    
        // Layer 76
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFFFF").s().p("AgWBFQgigQgSgeQgRgeAKgcQAKgdAfgJQAfgKAhAPQAiAPARAfQARAegKAcQgKAdgfAJQgMAEgMAAQgTAAgUgJg");
        this.shape_74.setTransform(-24.4,29.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));
    
        // Layer 77
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#020202").s().p("Ag2BVQhvgUgng5QgMgRgEgUIgBgRQABgNALgYIACgFQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAHAQQALASARAQQA7AzBqABQBqACAwgZQAOgIAIgKIAEgJIACgDQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIALAGQANAHALAJQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgLAQQgPAUgVAQQhBAzhfABQgigBgjgGgAjWgtIACAPQADASALAQQAnA3BqASQAiAHAiAAQBVAAA9grQAigYASgdQgMgLgOgGQgJATgeANQgzAWhhgCQhsgCg9g0QgYgWgKgYQgKAVgBALg");
        this.shape_75.setTransform(-15.8,28.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(1));
    
        // Layer 78
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFFFF").s().p("Ag2BRQhtgTgmg5QgMgQgDgTIgBgQQABgLANgeIAHARQALATASARQA7AzBsACQBuACAwgbQAPgJAIgLIAEgJIAKAGQANAHAKAJIgOATQgTAYgaARQg9AphSAAQghAAglgHg");
        this.shape_76.setTransform(-15.8,28.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(1));
    
        // Layer 79
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#020202").s().p("AgyAIQgEgCABgDQABgDAEAAQAlAGAhgGQARgDAJgGQAEgCACADQABAEgDACQgaAMgoAAQgQAAgUgCg");
        this.shape_77.setTransform(-10.7,43.6,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));
    
        // Layer 80
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#020202").s().p("AgYArQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgDAEgCQAJgDAKgLQAUgVAIgmQABgEADABQAEABgBADQgJAqgVAXQgLALgLAEg");
        this.shape_78.setTransform(-0.6,36.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(1));
    
        // Layer 81
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#020202").s().p("ABfC1QgMgLgJgRQgIgPgJgFQgPgIgngCQg3gDg9gXQhPgegng1QgyhEAbhjQAFgSAKgYQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIAHAQQALATASAQQA4AzBsACIANAAQBhAAAtgaQAOgIAHgJIAEgJQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADAAIALAFQAMAHALAKQAbAXAJAdQANArgaAyQAJAKgBAQQgBAYgZAfQgXAdAHAPQAEALAVAAQAXAAAjgQQABgBAAAAQABAAAAAAQABAAABABQAAAAABABQACADgDACIgoAYQguAZgjAAQgeAAgRgRgAj2iXQgaBfAvBBQAlA0BOAdQA6AWA3ADQApACAQAJQAMAGAJARQAJARAKAJQAQAPAaAAQAjAAAygbQgOADgMAAQgZAAgHgOQgJgUAaghQAYgeABgVQAAgNgIgIQgCgCAAgDIABgBQAshShAg4QgMgKgQgJQgJAUgfANQgyAWhggBQhvgCg7g2QgYgVgKgYQgHARgDAPg");
        this.shape_79.setTransform(-13.7,35.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1));
    
        // Layer 82
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#1F00FF").s().p("AgiA0Qghg9AXhUQAFgSAJgXIAOAcQAVAfAmAUIgMAZQgMAeAAAeQAAAcASAqQAJAUAIAPQg9ghgbgyg");
        this.shape_80.setTransform(-27.4,32,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(1));
    
        // Layer 83
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#1F00FF").s().p("AAEABQgTgegQgSIgNgMQAKgHAFgJIADgGIALAEQAMAIAKAJQAbAXAIAeQALAogaAxQgHg3gQgag");
        this.shape_81.setTransform(-1.7,32,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(1));
    
        // Layer 84
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#1F00FF").s().p("AgGCBQgTgegJgLQgOgQg0gCQgLgJgNgSQgZglgFgsQgEgeALglIALgeQA/AAArgJIAcAyQAYA7gQApQgLAfAKAdQAKAcAcANQAXALAwgJQAXgFATgHQgdAVgiAOQggANgYAAQgbAAgQgQg");
        this.shape_82.setTransform(-6.7,39.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(1));
    
        // Layer 85
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#020202").s().p("AgyAIQgEgBABgEQABgDAEAAQAlAHAhgHQARgEAJgFQAEgCACAEQABADgDACQgaANgoAAQgQAAgUgDg");
        this.shape_83.setTransform(-10.7,43.6,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(1));
    
        // Layer 86
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#FFFFFF").s().p("AgxADIBjgJQgJAFgSADQgTAFgSAAQgRAAgSgEg");
        this.shape_84.setTransform(-10.7,43.6,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(1));
    
        // Layer 87
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#020202").s().p("AgYArQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBgEAEgBQAJgDAKgLQAUgVAIgnQABgDADAAQAEABgBAEQgJApgVAYQgLALgLAEg");
        this.shape_85.setTransform(-0.6,37,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(1));
    
        // Layer 88
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#FFFFFF").s().p("AAZgmQgIApgVAWQgLALgJADg");
        this.shape_86.setTransform(-0.6,37,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));
    
        // Layer 89
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#020202").s().p("ABfC1QgMgMgJgRQgIgPgJgFQgPgHgngCQg4gDg8gXQhQgfgmg1QgyhDAbhjQAFgSAKgYQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIAHAQQALATARAQQA7AzBqACIANAAQBiAAAsgaQAOgIAHgJIAEgJQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBIALAGQAMAHALAKQAbAWAJAeQAMArgaAxQAKALgBAQQgBAXgZAgQgXAdAHAPQAFALAUAAQAYAAAigRQADgBACADQACADgDACIgoAYQgvAZgjAAQgcAAgSgRgAj3iXQgZBfAvBBQAlA0BOAdQA6AWA3ADQApACAQAJQAMAGAJARQAJARAKAJQAPAPAaAAQAjAAAzgbQgRADgJAAQgZAAgHgPQgJgTAaghQAYgeABgVQAAgOgIgIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgBQAYgugJgnQgIgegbgXQgKgJgSgKQgJAUgfANQgyAWhggBQhugCg8g2QgXgVgLgYQgGAPgFARg");
        this.shape_87.setTransform(-13.7,36,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(1));
    
        // Layer 90
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#FFFFFF").s().p("ABiCyQgUgegJgKQgNgQg1gDQhkgFhOg1QhxhLAmiKQAEgRAKgYIAIAQQAKAUATAQQA6A1BtACQBtACAwgdQAPgIAHgLIAEgJIALAFQAMAHALAJQAbAYAIAeQALApgaAwIAJARQAEAZgdAlQgjArAbANQAaAOA2gaQgeAVgiAOQgfANgYAAQgbAAgRgQg");
        this.shape_88.setTransform(-13.7,35.9,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(1));
    
        // Layer 91
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#020202").s().p("AijCwIgDgBQgEgFgEgJQgIgSACgXQADgrAmg1QAxhEBphOQBuhTAkABQANgBAEAKQAPAZg3BXIgBAAIgZAqQgWAxAKAnQAlCJgTASQgEAEgTAAQhBAAjBgegAATh0QhnBOgwBCQgmAzgDApQgCAeAOATIBwAPQBpAOAnAAQASAAAAgCQAQgOgkiFQgLgpAWgxQAMgaAPgUQARgaANgcQARgmgGgNQgDgEgIAAQgigBhsBRg");
        this.shape_89.setTransform(-17.1,19,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(1));
    
        // Layer 92
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#CEE3EA").s().p("AgcC/QhEgIhCgKQgWgXALgwQAXhgCnh9QCph+gJBEQgEAhgmA7IgaArQgXAyALAoQAkCIgRAPQgDADgSAAQgiAAhZgLg");
        this.shape_90.setTransform(-17.1,19,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(1));
    
        // Layer 93
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#020202").s().p("AhbDPQh+gMgKg5QgNhMBFhRQAzg8ArgTQARgIAugvIApgvQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABABQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgEAEABIA7AUQA7AaARAjQANAbgPAeQgeBAAaA4QANAcAUAQIABABQAEAGAMAZQAQAfABANQABAIgfAIQgaAGguAHQhMALhMAAQgiAAghgDgAAhjIQAAAAABABQAAAAAAABQAAAAAAABQgBABAAABQhNBbgeANQgqASgxA7QhDBNANBKQAHAlBBAQQBSAVCPgOQCBgMAQgPQgDgQgdg2QgXgUgOgfQgYg6AfhAQAMgbgLgXQgQghg6gZIg4gUg");
        this.shape_91.setTransform(-15.7,20.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(1));
    
        // Layer 94
        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#9CADB7").s().p("AjfCJQgNhLBFhQQAyg6AqgTQAdgNBMhaIADgHIAbAIQAfALAYANQBNAsgcA5QggBCAcA6QAOAdAUAQIAPAdQAQAfABANQABAIhDALQhIANhOADIgmABQi3AAgMhFg");
        this.shape_92.setTransform(-15.7,20.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(1));
    
        // Layer 95
        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#020202").s().p("AgGAWQgHgCgDgIQgDgJADgIQACgHAFgEQAGgGAFAAIAFABQAIACADAJQACAIgCAHQgDAIgFAFQgGAEgFAAgAgJgCQgCAFACAFQABAFAEABIADABQAIAAADgMQADgFgDgFQgBgGgEgBIgDAAQgHAAgEAMg");
        this.shape_93.setTransform(-30.4,24.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(1));
    
        // Layer 96
        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#FFFFFF").s().p("AgFASQgFgCgDgGQgCgHACgHQACgHAGgEQAFgEAGABQAFACADAHQACAHgCAGQgCAIgGAEQgFADgCAAIgEgBg");
        this.shape_94.setTransform(-30.4,24.3,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(1));
    
        // Layer 97
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#020202").s().p("AgzAyQgBgEADgCQAugRAbgnIAUgkQABgEAEABQAEACgBADIgVAoQgeAoguASIgCABQgDAAgBgDg");
        this.shape_95.setTransform(10.1,33.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(1));
    
        // Layer 98
        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#9CADB7").s().p("AAwgvIgUAlQgcAogvASg");
        this.shape_96.setTransform(10.1,33.1,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(1));
    
        // Layer 99
        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#020202").s().p("AgGA7QgKgCgIgIQgHgHgCgHQgBgFACgOQAEgigIgEQgEgDACgDQACgEAEACQAIAEACAPQAAAJgCATIAAAQQAAAEAGAGQAGAGAIACQAOADAQgVQAMgTgQgiIgUggQgCgDADgDQAEgDACADIAWAkQARAmgPAVQgQAXgRAAg");
        this.shape_97.setTransform(10.9,37.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(1));
    
        // Layer 100
        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#9CADB7").s().p("AgJA2QgRgGgDgOIACggQACgXgJgFIAogdIAUAiQARAkgOAUQgOAVgPAAQgEAAgFgCg");
        this.shape_98.setTransform(10.9,37.4,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(1));
    
        // Layer 101
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#020202").s().p("AhNCWQgRgBgHgRQgJgUASgYQAKgNgFgNQgDgJgMgMIgFgFQgIgMADgMQAHgVAqgTQAEgBACAEQACAEgFABQgmARgFARQgCAIAFAJIAEAEQAMAMAFAKQAHATgNARQgPATAHARQAFALAMACQAJABAJgJQAIgJAFgQQAFgNgBgGIAAgDQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAQgDAggoIAMgOQAEgDADABQADACAFALQAQAoAOADQAGABAHgHQAOgOgGgVQgEgMgQgYIgJgMQgNgWAHgYIABgCQABgDADAAQAlgCAHgQQAEgIgDgLQgDgKgHgIQgHgHgGgBQgFAAgIAIIgEADQgEAFgGgDQgDgCgGgHQgRgSgPgEQgHgBgFADQgKAHgJAWQgEAMgCAKQgBAEgEgBQgEgBABgEQAJgrAUgNQAIgGAKADQASAEASAUIAIAHIADgDQALgLAJAAQAKABAIALQAJAKADALQAEAOgFAKQgJAVgoACQgFAVALASIAIAMQARAYAEAOQAIAagSARQgKAKgLgCQgRgDgTgtIgDgFIgJAKQggAogSAGQAAAKgHARQgNAfgWAAg");
        this.shape_99.setTransform(10.5,30.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(1));
    
        // Layer 102
        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#9CADB7").s().p("AhMCSQgQgCgGgQQgGgSAPgTQAOgSgLgTIgSgVQgTgdA+gcIAhhAQADgQAHgPQAOgeASAFQAQAEAQARQAMANAEgEQAMgLACAAQAKgEALANQAQATgFASQgGAXgrABQgDALAAAEQAAAQAIAOIAaApQANAdgTASQgTATgTgfQgPgkgCgBQgBAAgYAbQgZAegQACQgIA6gcAAIgDAAg");
        this.shape_100.setTransform(10.5,30.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(1));
    
        // Layer 103
        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#020202").s().p("AA0B9QgDAAgBgDQgVg8hPhJIhNg+IgCgEIADgEIBFgqQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAGADIABAAIBDAyQBLA4AkAlQADACgDAEQgDACgDgCQgjgkhIg3IhGgyIgDgCIg+AmQAuAiAoAmQBEBDAUA5QACAEgEACg");
        this.shape_101.setTransform(1.5,23.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));
    
        // Layer 104
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#9CADB7").s().p("AgxgPIhNg+IBGgrIAFADIBDAwQBKA4AlAmIhLBgQgVg+hQhKg");
        this.shape_102.setTransform(1.5,23.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));
    
        // Layer 105
        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#020202").s().p("AANA8QgbgjgFgrIACgnQABgEADABQAEABgBADIgBAlQAEApAaAhQACAEgCACIgDABQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
        this.shape_103.setTransform(-33.8,16.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));
    
        // Layer 106
        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#9CADB7").s().p("AgPgUIABglIAeBzQgbgjgEgrg");
        this.shape_104.setTransform(-33.8,16.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(1));
    
        // Layer 107
        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#020202").s().p("AgUAwQgTgGgCgcQgCgWAegWIAfgSQAEgBABADQACADgEACIgcAQQgcAUACASQABAXAOAFQAHACAHgCQAGgCACgDIAHgNQAHgPAEgGQAIgKAIAAIABAAQADAAAAAEQAAADgEAAQgIAAgMAbIgIAPQgIAJgNAAIgJgCg");
        this.shape_105.setTransform(-36.2,19.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_105).wait(1));
    
        // Layer 108
        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#9CADB7").s().p("AgQAtQgTgEgCgcQgCgUAegVIAdgRIASAoQgJgBgJATIgNAZQgGAIgKAAIgHgBg");
        this.shape_106.setTransform(-36.2,19.2,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_106).wait(1));
    
        // Layer 109
        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#020202").s().p("AAECOQgSgHAEghQADgQAEgIQgLgMgIgtIgCgMIgFADQghAagPgGQgKgDgDgLQgGgVARgQQAJgJAYgLIAMgGQAQgKAFgRQgcgTABgUQABgLAKgIQAHgHALgEQALgFAHAEQAHAEADANIABAEIAJgCQAYgHAOAEQAJACAFAJQAJATgMAlQgBADgEgBQgDgBABgEQALgigIgPQgDgGgGgBQgOgFgTAHQgQAFgDgIIgBgEQgDgKgEgCQgEgCgIADQgJADgGAGQgHAHgBAIQgCAQAcARQAAAAABABQAAAAABABQAAAAAAABQAAABgBAAIAAACQgGAWgTAKIgMAGQgXAMgIAHQgOANAFARQACAIAFABQALAEAfgXQAIgGADAAQADAAABAEIAEAQQAIAuAJAJQABAAAAAAQAAABAAAAQAAABABAAQAAABAAABIgCACQgDADgBANQgDAPACAKQACAKAHADQAKAFAJgHQANgJgDgVQgEgeAmgKIAFgCQAIgDABgIQAEgPgWgeQgBgEACgBQADgCADACQAXAhgEATQgCALgMAFIgGACQgOAEgHAGQgJAIABAOQADAZgPAMQgHAGgJAAQgFAAgGgDg");
        this.shape_107.setTransform(-33.8,14.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(1));
    
        // Layer 110
        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#9CADB7").s().p("AAGCLQgPgHADgbQADgaAEgBQgKgJgGgiQgHgggBAAQgPANgOAHQgcAQgGgWQgGgWAWgQIAmgVQANgIAGgLIAFgNQgggUAFgUQAEgQAVgIQANgFAGAHQACADAEANQABAEAPgEQATgGAOAEQARAEgDAeQgBAOgEAOIgEA+QAkAxgdAOIgWAIQgRAKADATQADAWgNALQgHAGgIAAQgEAAgFgCg");
        this.shape_108.setTransform(-33.8,14.8,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(1));
    
        // Layer 111
        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#020202").s().p("AhrBHQgBgDACgCQAogkBSgUQAugLAzgFIgeg5IgDgBQiAAKhFAVQgEAAgBgDQgBgDAEgCQBHgUCAgKIAAAAIAGABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIAiA/QAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgnADgvAKQhcAVgrAlIgDABg");
        this.shape_109.setTransform(-22,12.5,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(1));
    
        // Layer 112
        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#9CADB7").s().p("Ah3glQAtgNBRgKIBIgHIAGAAIAjBAQgnADgwAJQhdAVgsAmg");
        this.shape_110.setTransform(-22,12.6,0.669,0.669);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-39.9,-49.1,79.9,98.4), null);
    
    
    (lib.splashTween66 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgTAqQgRgIAegmQAOgUATgSQgFAYgJAWQgNAngOAAIgFgBg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.6,-4.3,5.3,8.6);
    
    
    (lib.splashTween65 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgJANQgmgNgigUQAvgGAqABQBXACgQAgQgIARgZAAQgWAAghgNg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.1,-2.6,16.4,5.2);
    
    
    (lib.splashTween64 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag6CVQgJgaACgbQgIAbgSAWQgkAsgtgcQgugcAqghQAVgQAegLQg+AKgmgKQg0gMgPgwQgOgqA2gDIA5AGIgPgSQgRgWgHgTQgWg7BRgCQBSgBAcAnQAJAMADAPIABANIADg+QANg+AwgBQAwgCAXA6IAOA7IAzgtQA2gqAMAJQANAKgkA9IgnA7QAbgSAggLQA+gWATAkQATAkg+AYQgOAFgPAEIABAAQAjACgJArQgKAshSgRQgpgJgogSQADAbgGAdQgOA4gyAIIgMABQgnAAgOgtg");
        this.shape.setTransform(-0.1,-3,0.695,0.695);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-29.3,-22.2,50,33);
    
    
    (lib.splashSymbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2FA0D7").s().p("AgCAlQgKh9gaiaQgNhNgLgzQB7FiACDfQABBHgLAwIgMAjIhHAKQAthagRj0g");
        this.shape.setTransform(4.8,-2.5,0.484,0.397,0,-48.6,-42);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2FA0D7").s().p("AgGhCQgKijgPiOQA+FjABDfQABBHgGAxIgGAiIgkALQAchvgTlHg");
        this.shape_1.setTransform(-4.8,-0.1,0.484,0.397,0,-48.6,-42);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.splashSymbol1, new cjs.Rectangle(-17,-10.2,34.1,20.4), null);
    
    
    (lib.Tween47 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#54CFED").s().p("Ay8LhQovg9mwhvQmvhujtiQQj1iUAAijQAAiiD1iUQDtiQGvhuQGwhvIvg9QJDg/J5AAQJ6AAJDA/QIwA9GvBvQGvBuDtCQQD1CUAACiQAACjj1CUQjtCQmvBuQmwBvovA9QpDA/p6AAQp5AApDg/g");
        this.shape.setTransform(0,0,0.409,0.409);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-127.5,-32.7,255,65.5);
    
    
    (lib.Tween46 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap11();
        this.instance.parent = this;
        this.instance.setTransform(-109.9,-28.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-109.9,-28.1,220,56.4);
    
    
    (lib.Tween45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap10();
        this.instance.parent = this;
        this.instance.setTransform(-75.3,-16.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.3,-16.7,151,34);
    
    
    (lib.Tween43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(-79.2,-28.4,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-79.2,-28.4,162,42);
    
    
    (lib.Tween42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap23();
        this.instance.parent = this;
        this.instance.setTransform(-40.5,-15.7,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-40.5,-15.7,81.4,31.6);
    
    
    (lib.Tween39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap9();
        this.instance.parent = this;
        this.instance.setTransform(-17.4,-6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17.4,-6,35,12.1);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.htspiral();
        this.instance.parent = this;
        this.instance.setTransform(36.5,-36.5,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Isolation Mode
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A7F4FD").s().p("Ag4FRQgWgEgegIQg3gPgngXQgngWgkgpQglgqgUgnQgZgygIg5QgGg1AKg1QAFgbAIgZQAJgbANgVQAMgUAUgWQANgPAYgWIATgSIAVgQIAVgLIAWgLIAZgMQAPgHALgDQAbgKAggCQAsgEA2ANQA1AMAoAXQAqAZAiArQAdAnASAzQAJAaAEAXQAFAbgCAWQgCAZgHAaQgHAXgLAbIgHATQgFALgFAHQgMARgPAQQgdAegjAXQgjAXgoAOQgVAHgTAAQgRAAgagEQgogHglgNIgQgGIgPgIQgTgKgUgUQgRgQgRgYQgRgWgIgPQgTgkgGgoQgGgmAIgoQAHgkATghQAUghAdgWQAjgbAlgKQAVgGAWgBQAWgCAWADQAYADAUAGQAYAHATAMQAUAOARARQASATAKAVQALAXAFAZQAFAagCAZIgDAZQgDANgEAKQgLAbgRAVQgcAkguAOQgsAOgsgOQgagIgTgOQgWgQgMgVQgMgWgDgYQgDgYAGgYQAIgaARgTQASgTAYgJQAYgIAYACQAbACARANQAMAJAHAIQAKALAFALQAPAjgPAWQgIALgKAGQgMAIgMACQgQACgOgFQgPgGgJgNQgGgLADgMQADgMALgHQALgGAMADIADABIgBgBIgGgFIgDgCIgGgDIAAAAIgFAAIgPAAIgBAAIgGABIgIADIgDABIgFADIgFAEIgDAFIAAAAIgDAFIgDAEIAAABQgDAHgBAIIAAAAIAAABIAAACIAAAJIAAAHIAAABIABACQABAGACAEIABACIAAABIAFAJIACADIAIAIIACACIAAAAIASAKIABAAIAEACIAKADIAJACIAEABIATAAIAFAAIABAAIAFgBIAKgDIAGgCIABgBIAMgGIAGgFQACgBgCABIAFgEIANgOIABgBIADgEIAFgJIAFgIIABgDIABAAIAAgBQAEgLACgLIAAgDIAAgBIABgLIgBgYIgBgEIgCgLIgGgTIAAgBIgDgGIgFgJIgEgFIAAgBIgHgHIgOgPIgFgEIgHgFIgQgJIgEgBIgBgBIgJgDIgSgEIgGgBIgJgBIgWgBIgUABIgDAAIgJACIgSAEIgIADIgCABQgQAHgNAKIgCABIgBABIgGAFIgLAMIgGAHIgBABIgBAAIgJAOIgIAPIgEAJQgGARgDAPIgBAGIgBAFIgBARIABASIAAADIABAGQAEASAGAPIABAEIAEAIIAIAPIAOAVIAHAJIABABIABABIAAAAIABACQAQAUARANIAEADIADACIAGAFIAKAFIACABIAIACIAQAGQAVAGATAEIAVAEIACAAIABAAIAIABIARABIADAAIAHgCIATgGIAEgCIAJgEQATgKASgLIAQgKIADgCIADgCQANgLAPgPIAOgPIAGgHIABgCIADgFIADgFIADgGIAAgBIADgHQALgbAGgTIAGgZIABgGIABgDIAAAAIAAgJIAAgUIgBgJIgCgLQgGgYgIgVIgCgFIgBgBIAAgBIgFgKIgKgVIgOgVIgFgGIgCgDIgDgEIgRgSIgIgHIgEgDQgRgNgVgKIgIgEIgCgBIgHgCIgVgIQgYgHgVgDIgHgBIgKgCIgUgBQgQAAgNABIAAABIgHABIgMACIgYAIIgTAJIgWAKIgWALIgSALIgBABIgFAFIgIAHIgRAQIgRAQIgSAVIgFAFIgBACIgGAJQgHALgFALIgBADIgCADIgEAMQgJAbgEAVIgBAJIgBAEIgBAGIgBAYQAAAOABAMIABAMIAAAGIABAEIAAAAQAEAZAHAUIAEANIACAEIAAAAIABADIALAWQAMAVAOASIAAAAIABABIAAABIAEAEIAHAIIANAPIAQAQIAIAIIAFAEIADACQASAOAUAJIAMAGIAGACIAVAIQAWAHAXAGIAZAFIAKACIADAAIAGABQAMABAOgBIAZgCIAXgDIACAAIADAAIAMgCIAXgGIAEgCIABAAIALgGIAZgLQANgHAKgGIAHgFIADgDIAJgGIAUgSIAlgjIASgTIAIgJIACgDIgBACIABgCIAAAAIABgCIALgRIABgEIADgGIAHgRIALgYIADgGIAAgBIAEgLQAEgMACgKIAAgDIABgIIAEgmIADgnQABgNAIgIQAJgJAMAAQAMAAAKAJQAKAJgBAMIgDAdIgCAdIgEAgQgCASgEAOQgFARgMAZIgJATIgCAEIgDAIQgHASgNASQgLAQgQAQQgqArgkAcQgYATgbANIgZAMQgOAGgMADQgLAEgPACIgbAEIgYADIgYACIgFAAQgWAAgZgEgAACgqIgBgBIgBgBIABACIABAAg");
        this.shape.setTransform(1.9,3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,75.4,73.6);
    
    
    (lib.Tween26copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00FDFF").s().p("Ak2InQA2jgBNjfQAUg3AUg1IAAAAQgihTgqhEIgjgzIADgLQAcAZAuBaQAWAtARAnIAhhTQgohMgng6IghgqIAEgMQAWASAwBQQAXApAUAkIASgrIAVgrQgTgzgohEIgkg5IAFgGQARAMAqBSQAUAoARAlQAVgpAXgoQgBgngZhIIgbhIIAHgGQAMATAYBQQALAlAIAjIAJgQIAuhNQAFgLgFhDQgCgggEgfIAIgGQAIA+AEBHQA9glBcghQAugQAigJIAFANQgwAJhNAdQhUAhgaAXQgXAWgsBSIBzglQCAgmA9gGIAAAKIhDAPQhPASg/ASIhlAeIgJASIggBAIAHgBQANgCATgIQAjgNA1gMQBTgQBngFIgCAJQhJADguAIIhXASQg7ANgWAIIgeALIAAAAIgmBTIB3gaQCGgZAvAKIgEAHQgbgCgzAEQhlAJh6AiIgcBCIgJAVIAfgMQAngOAmgLQB4giA6APIgFAHQgOgDgbAAQg2AAg9ATQg/AUgqAQIgZAKQg3CFg6DSQggB3gVBbg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31,-55.1,62.2,110.2);
    
    
    (lib.Tween26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00FDFF").s().p("Ak8IvQgCgCgBgCQgBgDAAgDQA2jhBOjfQASg2AUgzQghhQgohBIgjgzIgCgEIABgFIADgKQABgEACgCQADgCAEABQADAAADACQAdAaAvBcQAQAgANAeIAXg4QgmhKgng3IgggqIgCgFIAAgFIAEgLQABgDADgCQADgCADABQADAAADACQAXARAxBUIAAAAIAiA6IAKgYIAAgBIATgmQgTgygmhAIAAAAIgkg5QgBgCAAgDQAAgEACgCIAFgGQACgEAEAAQAEgBAEADQATANArBVIAdA6IAhg9QgCglgXhEIAAAAIgchHQgBgDABgDQABgDACgCIAHgGQACgCADgBQADAAADABQACABACADQANATAYBSIANAxIArhIQAEgKgFg+QgCgggEgfQgBgDACgDQABgCACgCIAJgFQADgCADAAQAEAAACADQADACAAAEQAHA3AEA/QA6giBTgdIAAAAQAugRAjgJQAEgBADACQADACACAEIAEAMQABADgBADQAAADgCACQgCACgEAAQgvAJhLAeIAAAAQhSAfgaAXIAAAAQgTASgiA9IBcgdIABAAQCBgnA9gGQACgBADACQADABABACQACADAAADIAAALQAAADgDADQgCADgEAAIhCAOQhOAShAATIhgAcIgIAPIgWAtIARgGIAAAAQAkgOA2gLQBUgRBngFQADAAADACQADABABADQABADgBADIgCAJQAAAEgDACQgCACgEAAQhHACguAJIhXASQg6ANgVAIIgbAJIgcA9IBkgWIAAAAQCJgZAwAKQADABACACQACADABADQAAADgCADIgEAHQgBADgDABQgCACgDAAQgagDgyAFQhjAIh2AhIgaA8IAJgDIAAAAQAogPAmgLIAAABQB8gkA8AQQADABACADQACACAAAEQAAADgCADIgFAHQgBADgDABQgDABgDgBQgOgDgZAAQg1ABg8ASQg9ATgqAQIgWAIQg1CEg5DPQggB3gWBaQAAAEgDACQgDACgDAAIgNAAIAAAAQgDAAgDgCg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-32,-56.1,64.2,112.2);
    
    
    (lib.Tween24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 copy
        this.instance = new lib.Bitmap26();
        this.instance.parent = this;
        this.instance.setTransform(-102.1,-35.6,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-102.1,-35.6,204.4,136.5);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(-4.7,-1.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.7,-1.4,10,3);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap7();
        this.instance.parent = this;
        this.instance.setTransform(-5.8,-10.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.8,-10.8,12,22);
    
    
    (lib.Tween16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgWATQgBgNAHgQQAFgNAMgGIAMgEQAIgBACAIQABAGgCATQgCAQgJAKQgJAJgMAAQgLAAgBgPg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.3,-3.4,4.7,6.9);
    
    
    (lib.Tween15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap19();
        this.instance.parent = this;
        this.instance.setTransform(-50.9,-46.4,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9,-46.4,125.7,88.9);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap17();
        this.instance.parent = this;
        this.instance.setTransform(-12.2,-7.8,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.3,-7.8,24.7,15.7);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap20();
        this.instance.parent = this;
        this.instance.setTransform(-91.6,-72,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-91.6,-72,182.9,144.3);
    
    
    (lib.Tween9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap22();
        this.instance.parent = this;
        this.instance.setTransform(-16.7,-17.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.7,-17.5,34,35);
    
    
    (lib.Tween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap27();
        this.instance.parent = this;
        this.instance.setTransform(-79,-15.7,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-79,-15.7,158.6,31.5);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 6 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ABjD0QghgGgLgaQgMgZAIgvIAaiPQAJg1gMgaQgLgZglgHQgigGgVAVQgUAUgJAyIgaCRQgIAugUAVQgUAUgggGQghgGgLgaQgLgZAIgvIAtj/QAJgvATgUQAUgUAgAGQATADAOANQANAOAHAVQAZgSAcgGQAegFAkAHQBLAMAhAzQAgAygOBSIghC2QgJAwgTASQgQAQgWAAIgOgBg");
        this.shape.setTransform(146.5,127.6,0.289,0.289,31.7,0,0,-0.6,0.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgxGPQgWgDgOgRQgNgRADgWQADgWASgNQARgNAWADQAWADANARQAMASgDAVQgCAVgRAOQgOAKgRAAIgIAAgAgVEBQhfgNg2hJQg3hJANhiQANhhBGg5QBHg5BbAMQBZAMA0BGQAzBGgMBXQgEAdgOAKQgOAJgmgEIjkgfQAAAmAWAWQAWAYApAGQAlAEAvgPQAugOALABQAWADANAQQAMAPgCAWQgGAqg+AZQgsASg0AAQgVAAgWgDgAgmhRQgaARgMAiICpAXQABgigUgYQgVgZghgFIgNgBQgYAAgVAPgACOjYQgIAAgJgFIgTgMIhBg0IhLAhQgKAEgLADQgLABgHgBQgRgCgJgNQgKgNADgSQACgMAGgLQAHgIAPgKIBhg5QAJgFAJgCQAJgDAIABQAJACAIAEQAIAFAHAHIBPBRQANANADAKQAFAMgCAMQgCASgNALQgKAHgNAAIgGAAg");
        this.shape_1.setTransform(138.1,118.6,0.289,0.289,31.7,0,0,1.6,-0.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("Ah0E7QgcgCgRgTQgPgSACgdQACgLADgLQADgIAHgNIBAhuIhlk6QgCgHgBgJQgBgKABgLQACgbAUgQQAVgRAZADQAYACANAOQANAOAKAmIA2DJIBhjFQANgaAPgLQAOgMAVADQAdACAPATQAQASgDAcQgBAJgEALQgEAMgGAMIjwG+QgPAdgOAJQgLAJgOAAIgHgBg");
        this.shape_2.setTransform(126.7,111.8,0.289,0.289,31.7,0,0,-3.1,-6);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgODnQhfgFgvg0Qgwg0AFhbIAKirQADgwARgWQARgWAhACQAhACAOAYQAOAYgCAvIgICRQgDA0AOAVQAOAXAkACQAiABARgUQAQgVADgzIAIiRQADgwARgVQARgWAhABQAhADAOAXQAOAXgCAxIgKCqQgFBcg1AuQgvAphQAAIgTAAg");
        this.shape_3.setTransform(117.6,103.5,0.289,0.289,31.7,0,0,0.4,-2.5);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AhPDgQghgBgPgYQgPgWAAgxIAFkDQACgwAQgWQAQgWAhAAQATAAAPALQAQALALAVQASgVAYgLQAXgLAWABQAbABATATQATATAAAaQgBAnhIAYIgnAPQgYALgIAOQgIAOgBAlIgCCGQgCAwgQAWQgQAXgfAAIgCAAg");
        this.shape_4.setTransform(108.4,96.9,0.289,0.289,31.7,0,0,-1.9,-3.4);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgvEQQgQgWgBgwIgBl0IgyAAQgvABgYgPQgXgQAAgfQAAggAXgPQAWgOAxgCIDmgBQAwAAAXAQQAYAPAAAfQAAAggXAPQgYAPgvAAIgyAAIACF0QAAAxgQAWQgQAXgiABQggAAgRgYg");
        this.shape_5.setTransform(103.8,90.6,0.289,0.289,31.7,0,0,3.6,-6.5);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AiBEtQg2gYgDgoQgCgYAPgRQAPgSAYgBQALgBAtAOQAuAOAlgCQAwgDAYgeQAZgegDg0IgCgQQgUAhgcAQQgbARglACQhPAFg6g8Qg7g+gGhdQgGhiA2hFQA2hFBUgGQAggCAaAKQAaAJAVAWQAJgUAPgMQANgLARgCQAhgCASAWQARAWADAwIARECQAFBKgEAmQgFAogOAcQgaAxgwAcQgwAchEAFIgeABQg/AAgsgTgAgGi/QglACgWAfQgVAfADAvQADAxAZAbQAaAcAkgDQAlgCAWgfQAWgggDgvQgDgugagdQgYgZghAAIgFAAg");
        this.shape_6.setTransform(82.1,85.5,0.289,0.289,31.7,0,0,0.9,-0.4);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AifDYQgSgWgFgvIgdkBQgFgvANgZQAOgZAggDQAUgDAQAJQARAJANATQATgaAZgMQAagOAmgEQBLgIAuAnQAtAnAJBSIAUC4QAFAvgNAZQgOAZggADQggAEgTgWQgSgUgGgwIgQiRQgGg1gSgVQgTgWgkAFQgjAEgOAZQgPAaAGAyIAQCSQAGAwgOAYQgNAZghAEIgIAAQgcAAgPgSg");
        this.shape_7.setTransform(70.4,77.1,0.289,0.289,31.7,0,0,-1,0.2);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AiMDBQhCg4gPhgQgPheAwhLQAvhKBTgNQAfgFAcAHQAcAIAVATQAJgWANgMQAOgOATgCQAggFATAUQATAUAHAwIApD/QAHAvgMAaQgMAZggAFQgVADgQgIQgRgIgNgWQgQAbgaARQgaARggAFQgOACgPAAQhAAAg2gtgAgWhfQgkAFgTAgQgTAgAHAtQAHAtAcAbQAcAZAjgGQAkgGASggQATgggHguQgIgugbgYQgXgVgaAAIgNACg");
        this.shape_8.setTransform(58,71.8,0.289,0.289,31.7,0,0,2,1.4);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AitFAQgVgTgKgvIhYmOQgKgvALgaQALgbAhgHQAhgHAVATQAVAUAKAuIAeCHIDtg1IgdiGQgKguAKgbQALgaAhgIQAhgHAVAUQAWATAJAuIBYGPQAKAvgLAaQgLAaghAHQghAIgVgUQgUgSgLgvIggiSIjtA1IAgCRQAKAvgLAaQgLAaghAHQgJACgIAAQgWAAgPgOg");
        this.shape_9.setTransform(43.4,63.5,0.289,0.289,31.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#B562D5").s().p("AHqHsQg2gIgfgoQgggqAHg1QAEgZAKgTQgrgbgggrQgegogPguIh9DoQgYAsgbAUQggAXgnAAIgMgBQg7gFgjgqQgkgrAFg8QADgUAGgUQAGgQAKgSIAvhRIgWhHQgVBLg0AuQhEA7htAAIgYgBQh9gHhEhKQhFhKAHh7IAEhDIgEABIgdALIgDCQQgCBGgeArQgnA1hFABIgEgBQgiAAgcgPQgcgPgSgbIgCADQgSAagdAOQgdAOgjABIgBAAQgigBgdgOQgdgOgSgaQgegqgBhIIgBkpQg1gEgigWQgcgSgOgcQgPgcAAgjQAAgjAOgcQAPgcAbgTQArgcBGAAIDogBQBEAAArAbQAcASAPAdQAPAcAAAjIgBAPQALAFAIAFIADgCQAkgRAnAAIAEAAQAxACAlAeQAjgXArgBIAJAAQBIAFAiA5QANAUAFAZQAKgYANgTQATgXAbgNQAbgNAgAAIAJAAQA3ADAjAlQAqgfAzAFQAzAEAiAlQAaAcAOA3IADAJIAKgUQAUgqAdgVQAggZAqAAIANABQAuAEAiAdQgBgPACgOQAEghASgYQAQgWAdgRIBhg5QATgLAUgFQAUgFAYADQAWACAVAMQARAKAQAPIBPBRQAXAXAJAaQAMAdgFAfQgFAqgdAcIACADIANgPQAXgXAegJQAfgJAiAGQAmAGAcAYIAOgDQAsgIAyAKQBrASAyBOQAxBLgVBtIggC4QgMBFglAlQglAmg2AAQgQAAgLgDQgjgGgZgTQgagTgNgeQgMgagCghQgMAdgVAWQgXAXgeAJQgfAKgigHQhAgLgdg0IgPAHQgdAMgiAHQABARgCARQgHA0gqAgQgiAagqAAg");
        this.shape_10.setTransform(125.2,108.7,0.289,0.289,31.7,0,0,0.8,-4.5);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B562D5").s().p("Au2GKQgmgjgQhGIhXmPQgQhFAUgxQANgeAZgUQAZgUAigIQAjgHAfAIQAfAIAYAWQAnAjAPBFIANA+IBcgUIgNg+QgPhFAUgxQANgeAZgTQAZgVAigIQAigHAgAIQAfAIAYAWQAmAjAPBGIATBUIALgTQBChmB0gTQAxgIApAMIAKADQAdgXAjgFQAigFAfAJQAdAKAWAYIAIAIIAEgKQAgg6BIgJQAngEAgAPIANgHQAmgTA1gHQBsgLBGA8QAYAVAQAbQAKgQAMgRQAlguAxgbQAxgaA5gEQAxgEApAPIAJAEQAegTAggDIALAAQBCAAAlAxQAgAoAFBHIAREDQAFBNgFAvQgGA4gVAnQgjBEhDAoQhBAlhVAFIgjABQhOAAg7gZQg4gYgagpQgSgdgDgiIABgTQgZAMgaADQgiAEgegMQgfgLgVgZQgTgWgKgeQgEAggOAaQgPAcgbASQgbASgiADIgSABQg4AAglgmQgeA2hBALQgmAFgigNIgHAFQgnAagwAHQgUAEgWgBQhcAAhKg/IgCgBQgCARgHARQgNAegZAVQgZAUgiAHQgiAIgfgIQgggIgXgWQgngjgPhFIgQhIIhcAUIAQBIQAPBFgUAxQgNAdgZAVQgZAUgiAHQgQADgSABQgygBglghg");
        this.shape_11.setTransform(62.5,73.9,0.289,0.289,31.7,0,0,2.7,-2.2);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#642E93").s().p("AHqHsQg1gHgggqQgggpAHg2QADgXAKgTQgrgcgggrQgdgngPgvIh9DoQgWAqgdAWQggAXgnAAIgMgBQg7gFgkgqQgkgrAGg8QACgTAHgUQAIgVAIgOIAvhRIgXhHQgTBLg1AtQhEA8huAAIgXgBQh9gHhEhJQhFhLAHh7IAEhDIgEABQgUAGgJAFIgECQQgBBIgeApQgTAagcANQgbAOgiAAIgEAAQhIgBglg4IgBACQgTAbgcAOQgdAPgjAAIgBAAQgjAAgcgOQgdgOgTgbQgegqAAhIIgCkpQg0gEgigWQgcgSgOgcQgPgcAAgjQgBgiAPgdQAPgcAbgTQAqgcBGAAIDpgBQBFAAApAbQAcASAPAdQAPAcABAjIgBAPIATAKIADgCQAmgRAlAAIAEAAQAwACAmAeQAhgXAsAAIAJAAQAjACAcAQQAbAPARAcQAMAVAGAZQAIgZAPgSQAmgyBDAAIAJAAQA3ADAjAlQApgfA0AFQA0AFAhAkQAZAcAPA3IACAKIALgVQAUgpAdgWQAggYAqAAIANAAQAwAFAgAcQgBgQACgOQAEgfASgZQARgXAcgQIBhg5QARgKAWgGQAXgFAVADQAXADATALQATAKAPAQIBPBQQAWAYAKAZQALAcgEAgQgGArgcAcIACACQAHgJAGgGQAWgXAfgJQAegJAjAGQAmAHAbAXIAOgDQAqgIA1AJQBrAUAyBNQAwBLgUBuIggC2QgNBGgkAlQglAmg3AAQgLAAgQgDQgigGgagTQgZgTgOgeQgMgagBghQgOAggTATQgXAXgfAJQgeAKgjgHQg/gLgegzIgPAGQghAOgeAEQACARgCARQgHA1gqAgQgiAagrAAIgRgBg");
        this.shape_12.setTransform(125.2,110.8,0.289,0.289,31.7,0,0,0.8,-4.6);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#642E93").s().p("Au2GKQgngjgPhGIhYmPQgPhGAUgwQANgeAZgUQAZgUAigHQAjgIAfAIQAfAIAYAWQAmAjAQBGIANA9IBcgUIgNg9QgPhGAUgwQAMgfAZgUQAZgUAjgHQAigIAfAIQAgAIAXAWQAnAjAPBGIATBUIALgTQBBhnB1gSQAvgIArAMQAFAAAFADQAdgXAjgFQAigFAeAJQAeAKAWAYIAHAJIAFgKQAQgdAagSQAbgRAjgEQAlgEAiAPIANgHQAmgUA0gFQBtgMBGA8QAXAVARAbQAKgQAMgQQBLhhB1gHQAxgEApAPIAJAEQAdgTAhgCIALgBQBAAAAnAxQAgAoAEBHIASEDQAEBRgEArQgGA3gVAoQgjBFhEAmQg+AlhXAGIgkABQhPAAg5gZQg4gYgagpQgTgdgCgiIAAgTQgWAMgcADQgjAEgegMQgegLgVgYQgSgVgMggQgDAfgOAbQgQAdgaARQgbASgjADIgRABQg4AAglgmQgeA2hCAKQgkAHgjgOIgHAFQgnAagxAHQgVADgUAAQhcAAhKg+IgCgCQgDAUgGAPQgNAegZAUQgZAUgiAHQgiAIgggIQgfgIgYgWQgmgigQhHIgPhIIhcAVIAPBHQAQBHgVAvQgaA+hHAQQgRAEgQAAQgzAAgkgig");
        this.shape_13.setTransform(62.5,76,0.289,0.289,31.7,0,0,2.7,-2.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5.4,32.4,177.2,126.4);
    
    
    (lib.shape10Hit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap2();
        this.instance.parent = this;
        this.instance.setTransform(-183.9,-163.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-183.9,-163.5,364,325);
    
    
    (lib.shape8Hit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap3();
        this.instance.parent = this;
        this.instance.setTransform(-52.5,-36.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.5,-36.5,105,73);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0.008)").s().p("AjLSGQjIgNjEguQiBgeh9gvIg0hiIBChUIDshXIAAhtIiRhIIgZiSIA5g6IBGBCIDziOIALhxIBIhBQgrgogogrQhJhPhFhUQACg+ANg7QAZh1A7hmQAuhRBQg3QBKg0BWgmQAWhZAkhTQAyhzBNhgQAKgNAMgKIgaAKQATgMASgJQAhgeAogSQBdABARADQAiADAhAPIAcAyQgXBJgjBDQg+B4hIByQBNAJBKAQQCDAeB7AyQBHAcBCAqQASA0AXAyQALAXAQAUQA8BHArBQQAiA/gDBIQgDBLgVBKIidB/IArAvQiaA6iYA/QgfANgdATQgEA/AFA/QAEA5ANA4IgzAEIALBxQBeAKBdAWQCKAfCBA6QAvAVAqAhIAABAIgJAdQhoA4huAfQjWA6jfAVQh6AJh6AAQhlAAhngGg");
        this.shape.setTransform(90.6,116.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,181.1,232.8), null);
    
    
    (lib.dieuTween7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1A9D99").s().p("AhfAlQA2ACBJg+IAsgmQARgOADAHQAFAQhWA/QgpAggsAdg");
        this.shape.setTransform(1.5,-5.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1A9D99").s().p("AhvBJQA4ADBXhjIA3hAQAWgaADAIQAFAPhlBkQgyAzgzAvg");
        this.shape_1.setTransform(0,1.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.2,-12.3,22.4,25);
    
    
    (lib.dieuTween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6543CE").s().p("Ag7BXIAZghIAoAbQgOAHgeALgAhjBCIABglIABgBIAtATIgWAfgAgLAdIAXglIBMAtQgMALgaAOgAhhgJQACgaADgSIBRAtIgfAbgABigIIhKgkIAigrIAGAFQAaApAJAhgAgvhZQAYgFA2gEIgZAvg");
        this.shape.setTransform(-0.2,-0.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1A9D99").s().p("AgWgPIg2guIBBAfIArg/IgPBGIBCA0IhPgjIhWBkg");
        this.shape_1.setTransform(1.2,-1.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1FEBE6").s().p("AhkAVQAChaALgOQALgOBBgHQAggDAfgBIAYAoQAYAtACAbQABAchmApQgxAVg0APQgBgrABgtg");
        this.shape_2.setTransform(0,0.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.1,-11,20.3,22.1);
    
    
    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Symbol6();
        this.instance.parent = this;
        this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
        this.instance.cache(-13,-13,27,27);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-13.2,-13.2,30,30), null);
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween26();
        this.instance.parent = this;
        this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,5);
        this.instance.filters = [new cjs.ColorFilter(0, 1, 0.859375, 1, 255, 233, 255, 0)];
        this.instance.cache(-34,-58,68,116);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-38,-62.1,80,128), null);
    
    
    (lib.vongnuoccopy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween23("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(7.3,1.6,1.828,1.828);
        this.instance.alpha = 0.18;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.5,scaleY:0.5,y:1.1,alpha:1},0).to({scaleX:1.13,scaleY:1.13,y:1.6},21).to({scaleX:2.16,scaleY:2.16,y:1.7,alpha:0.18},23).wait(1).to({scaleX:0.5,scaleY:0.5,y:1.4,alpha:1},0).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween23("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(7.3,1.4,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.5,scaleY:1.5,y:1.6},22).to({scaleX:2.16,scaleY:2.16,y:1.7,alpha:0.18},17).to({scaleX:0.5,scaleY:0.5,y:1.4,alpha:1},1).to({scaleX:1.83,scaleY:1.83,y:1.6,alpha:0.18},19).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.4,-0.9,18.3,5.5);
    
    
    (lib.vongnuoc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween23("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(7.3,1.6,1.828,1.828);
        this.instance.alpha = 0.18;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:0.5,scaleY:0.5,y:1.1,alpha:1},0).to({scaleX:1.13,scaleY:1.13,y:1.6},22).to({scaleX:2.16,scaleY:2.16,y:1.7,alpha:0.18},27).wait(1).to({scaleX:0.5,scaleY:0.5,y:1.4,alpha:1},0).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween23("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(7.3,1.4,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.5,scaleY:1.5,y:1.6},17).to({scaleX:0.5,scaleY:0.5,y:1.4},28).to({scaleX:1.83,scaleY:1.83,y:1.6,alpha:0.18},14).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.4,-0.9,18.3,5.5);
    
    
    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.shape10Hit("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(274.7,67.5,0.152,0.152);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:0.23,scaleY:0.23,x:288.9,y:74.8},12).to({scaleX:0.26,scaleY:0.26,x:289.6,y:74.7,alpha:0.648},2).to({scaleX:0.28,scaleY:0.28,x:289.9,y:74.6,alpha:0.488},1).to({scaleX:0.29,scaleY:0.29,x:290.1,alpha:0.359},1).to({scaleX:0.31,scaleY:0.31,x:290.5,y:74.5,alpha:0.16},2).to({scaleX:0.32,scaleY:0.32,x:290.6,alpha:0.078},7).to({scaleX:0.32,scaleY:0.32,x:290.7,alpha:0.07},1).to({scaleX:0.32,scaleY:0.32,alpha:0.059},1).to({scaleX:0.32,scaleY:0.32,alpha:0.051},1).to({scaleX:0.33,scaleY:0.33,alpha:0.039},1).to({scaleX:0.33,scaleY:0.33,x:290.8,alpha:0},4).to({_off:true},1).wait(67));
    
        // Layer 3
        this.instance_1 = new lib.shape8Hit("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(297.3,76.3,0.788,0.788,125.7);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,rotation:125.6,x:299.5,y:77.5},1).to({scaleX:0.81,scaleY:0.81,x:301.8,y:78.7},1).to({scaleX:0.94,scaleY:0.94,x:328.4,y:93},10).to({scaleX:0.94,scaleY:0.94,x:330.2,y:95.4,alpha:0.809},1).to({scaleX:0.95,scaleY:0.95,x:331.7,y:97.3,alpha:0.648},1).to({scaleX:0.95,scaleY:0.95,x:333.2,y:99.3,alpha:0.488},1).to({scaleX:0.95,scaleY:0.95,x:334.3,y:100.7,alpha:0.371},1).to({scaleX:0.96,scaleY:0.96,x:335.5,y:102.3,alpha:0.25},1).to({x:335.9,y:102.9,alpha:0.199},2).to({scaleX:0.96,scaleY:0.96,x:336.2,y:103.1,alpha:0.18},1).to({scaleX:0.96,scaleY:0.96,x:336.3,y:103.4,alpha:0.16},1).to({scaleX:0.96,scaleY:0.96,x:336.9,y:103.9,alpha:0.109},2).to({scaleX:0.96,scaleY:0.96,x:337,y:104.2,alpha:0.09},1).to({scaleX:0.96,scaleY:0.96,x:337.1,y:104.4,alpha:0.07},1).to({x:337.2,y:104.6,alpha:0.059},1).to({scaleX:0.96,scaleY:0.96,x:337.5,y:104.8,alpha:0.039},1).to({scaleX:0.96,scaleY:0.96,x:337.8,y:105.2,alpha:0.012},2).to({y:105.3},2).to({alpha:0},1).to({scaleX:0.97,scaleY:0.97,rotation:125.7},1).to({_off:true},1).wait(67));
    
        // Layer 4
        this.instance_2 = new lib.shape8Hit("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(286.1,50.2,0.788,0.788,28.2);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,rotation:28.1,x:287.8,y:49.8},1).to({scaleX:0.81,scaleY:0.81,x:289.4,y:49.4},1).to({scaleX:0.93,scaleY:0.93,x:308.9,y:43.7},10).to({scaleX:0.94,scaleY:0.94,x:312.8,y:38.9,alpha:0.809},1).to({scaleX:0.95,scaleY:0.95,x:316.1,y:35.1,alpha:0.648},1).to({scaleX:0.96,scaleY:0.96,x:319.4,y:31.1,alpha:0.488},1).to({scaleX:0.97,scaleY:0.97,x:324.3,y:25.1,alpha:0.25},2).to({x:324.8,y:24.6,alpha:0.23},1).to({scaleX:0.98,scaleY:0.98,x:326.1,y:22.8,alpha:0.16},3).to({scaleX:0.98,scaleY:0.98,x:327.1,y:21.7,alpha:0.109},2).to({scaleX:0.98,scaleY:0.98,x:327.5,y:21.1,alpha:0.09},1).to({x:327.9,y:20.6,alpha:0.07},2).to({scaleX:0.98,scaleY:0.98,x:328.2,y:20.4,alpha:0.059},1).to({scaleX:0.98,scaleY:0.98,x:328.6,y:19.9,alpha:0.039},2).to({x:328.7,y:19.7,alpha:0.031},1).to({scaleX:0.99,scaleY:0.99,x:329,y:19.5,alpha:0.02},1).to({scaleX:0.99,scaleY:0.99,rotation:28.2,x:329.4,y:18.9,alpha:0},2).to({_off:true},1).wait(67));
    
        // Layer 5
        this.instance_3 = new lib.shape8Hit("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(259.1,51.7,0.788,0.788,-56.3);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.82,scaleY:0.82,rotation:-56.4,x:258.1},2).to({scaleX:0.89,scaleY:0.89,x:256.3,y:52},3).to({scaleX:0.92,scaleY:0.92,x:255.4,y:52.2},2).to({scaleX:0.94,scaleY:0.94,x:255},1).to({scaleX:0.95,scaleY:0.95,x:254.6,y:52.3},1).to({scaleX:1,scaleY:1,x:253.3,y:52.5},2).to({scaleX:1.02,scaleY:1.02,x:252.8},1).to({scaleX:1.01,scaleY:1.01,x:249,y:49.5,alpha:0.809},1).to({scaleX:1,scaleY:1,x:245.7,y:46.8,alpha:0.641},1).to({scaleX:0.99,scaleY:0.99,x:242.7,y:44.4,alpha:0.488},1).to({scaleX:0.99,scaleY:0.99,x:240.1,y:42.3,alpha:0.359},1).to({scaleX:0.97,scaleY:0.97,x:236.2,y:39.1,alpha:0.16},2).to({scaleX:0.97,scaleY:0.97,x:236,y:39,alpha:0.148},1).to({scaleX:0.97,scaleY:0.97,x:235.2,y:38.4,alpha:0.109},3).to({x:234.8,y:38,alpha:0.09},2).to({scaleX:0.97,scaleY:0.97,x:234.5,y:37.8,alpha:0.07},1).to({scaleX:0.97,scaleY:0.97,x:234.2,y:37.5,alpha:0.059},1).to({scaleX:0.97,scaleY:0.97,x:233.2,y:36.7,alpha:0.012},3).to({scaleX:0.97,scaleY:0.97,x:233.1},1).to({scaleX:0.97,scaleY:0.97,rotation:-56.3,x:233,y:36.6,alpha:0},3).to({_off:true},1).wait(67));
    
        // Layer 6
        this.instance_4 = new lib.shape8Hit("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(262,83.8,0.788,0.788,-137);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,rotation:-137.1,x:262.3,y:85.3},1).to({scaleX:0.81,scaleY:0.81,x:262.6,y:86.8},1).to({scaleX:0.97,scaleY:0.97,x:266.1,y:104.4},10).to({scaleX:0.98,scaleY:0.98,x:262.9,y:107.1,alpha:0.809},1).to({scaleX:0.99,scaleY:0.99,x:260.3,y:109.5,alpha:0.648},1).to({scaleX:0.99,scaleY:0.99,x:257.6,y:111.7,alpha:0.488},1).to({scaleX:1,scaleY:1,x:253.6,y:115,alpha:0.25},2).to({scaleX:1,scaleY:1,x:253.2,y:115.3,alpha:0.23},1).to({scaleX:1,scaleY:1,x:252.9,y:115.7,alpha:0.199},1).to({scaleX:1,scaleY:1,x:252.5,y:116,alpha:0.18},1).to({scaleX:1.01,scaleY:1.01,x:252.1,y:116.4,alpha:0.16},1).to({scaleX:1.01,scaleY:1.01,x:251.7,y:116.6,alpha:0.141},1).to({scaleX:1.01,scaleY:1.01,x:251.4,y:117,alpha:0.109},1).to({scaleX:1.01,scaleY:1.01,x:251,y:117.3,alpha:0.09},1).to({scaleX:1.01,scaleY:1.01,x:250.6,y:117.6,alpha:0.07},2).to({x:250.4,y:117.7,alpha:0.059},1).to({scaleX:1.01,scaleY:1.01,x:250.3,y:117.9,alpha:0.051},1).to({scaleX:1.01,scaleY:1.01,x:250.1,y:118,alpha:0.039},1).to({scaleX:1.01,scaleY:1.01,x:249.9,y:118.2,alpha:0.031},1).to({scaleX:1.01,scaleY:1.01,x:249.8,y:118.3,alpha:0.02},1).to({scaleX:1.01,scaleY:1.01,x:249.6,y:118.5,alpha:0.012},1).to({scaleX:1.02,scaleY:1.02,rotation:-137,x:249.4,y:118.6,alpha:0},1).to({_off:true},1).wait(67));
    
        // Layer 7
        this.instance_5 = new lib.Symbol1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(268.8,71.6,1.09,1.09,0,0,180,0.2,-0.1);
        this.instance_5.cache(-42,-51,84,102);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},19).wait(101));
    
        // Layer 10
        this.instance_6 = new lib.Symbol1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(261.4,115.4,1.09,1.09,0,0,180,7,40.1);
        this.instance_6._off = true;
        this.instance_6.cache(-42,-51,84,102);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({regX:0.4,regY:47,scaleX:0.36,scaleY:0.36,guide:{path:[261.3,115.5,302.1,143.6,325.7,129.2,357.6,109.8,367.7,99.9,377.8,89.9,385.3,89.9,389.5,89.8,399.3,91.3,408.3,92.6,412.5,92.4,417.5,92,420.5,89.8]},alpha:0},29).to({_off:true},1).wait(33).to({_off:false,regY:47.1,skewY:0,x:422.3,y:88.1},0).to({regX:-3,regY:46.9,scaleX:1.09,scaleY:1.09,guide:{path:[422.3,88.1,419.1,91.9,412.6,92.4,408.4,92.6,399.3,91.3,389.6,89.8,385.3,89.9,377.9,89.9,367.7,99.9,357.6,109.8,325.8,129.2,304.2,142.3,268.3,120]},alpha:1},33).wait(4).to({regX:0.2,regY:-0.1,skewY:180,x:268.8,y:71.6},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(223.6,16.1,95,114);
    
    
    (lib.Symbol1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AB4B6Qg3hbh1hjQg6gxhdhBQgIgFACgDQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQBCAZCvBeQBYAvBKApQAUBpgMAzQgGAYgOAAQgWAAgshIg");
        var mask_graphics_1 = new cjs.Graphics().p("AB4B8Qg4hchzhjQg8gzhchBQgIgGACgDQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQBCAYCvBeQBYAvBLApQAUBqgMA1QgGAYgNAAQgXAAgshHg");
        var mask_graphics_2 = new cjs.Graphics().p("AB5B9Qg5hehzhjQg8g0hchBQgIgGACgDQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQBCAYCvBeQBYAvBLApQAUBqgMA3QgFAagOAAQgXAAgrhIg");
        var mask_graphics_3 = new cjs.Graphics().p("AB5B/Qg6hfhxhjQg9g3hchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQBCAZCvBeQBYAvBLApQAUBpgLA6QgGAbgOAAQgWAAgshIg");
        var mask_graphics_4 = new cjs.Graphics().p("AB6CAQg7hghwhkQg+g4hchBQgIgFACgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQBCAZCvBeQBYAvBLApQAUBpgLA8QgGAdgNAAQgXAAgrhJg");
        var mask_graphics_5 = new cjs.Graphics().p("AB6CCQg7hihvhjQg/g6hchBQgIgGACgDQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQBCAYCvBeQBYAvBLApQAUBqgLA+QgFAdgOAAQgWAAgshIg");
        var mask_graphics_6 = new cjs.Graphics().p("AB7CEQg9hkhthjQhAg8hchBQgIgFACgDQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQBCAZCvBeQBYAvBLApQAUBpgKBBQgGAegOAAQgWAAgrhIg");
        var mask_graphics_7 = new cjs.Graphics().p("AB7CGQg+hmhshjQhAg+hdhBQgIgFACgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBKApQAUBpgJBDQgFAggOAAQgWAAgshIg");
        var mask_graphics_8 = new cjs.Graphics().p("AB7CIQg+hnhrhkQhBg/hdhBQgIgGACgDQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKApQAUBqgJBFQgFAggOAAQgWAAgshHg");
        var mask_graphics_9 = new cjs.Graphics().p("AB8CJQhAhohphkQhChBhdhBQgIgGACgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgIBIQgFAhgPAAQgWAAgrhIg");
        var mask_graphics_10 = new cjs.Graphics().p("AB8CLQhAhqhphkQhChDhdhBQgIgFACgDQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQBCAZCvBeQBYAvBKAqQAUBogIBKQgEAjgQAAQgVAAgshIg");
        var mask_graphics_11 = new cjs.Graphics().p("AB9CNQhChshnhjQhDhFhdhBQgIgGACgDQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQBCAYCvBeQBYAvBKAqQAUBpgIBMQgEAjgPAAQgWAAgrhHg");
        var mask_graphics_12 = new cjs.Graphics().p("AB9COQhDhthmhkQhEhGhchBQgIgGACgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQBCAYCvBeQBYAvBLAqQAUBpgIBPQgEAkgPAAQgVAAgshIg");
        var mask_graphics_13 = new cjs.Graphics().p("AB9CQQhDhvhlhjQhFhJhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogHBRQgEAmgQAAQgVAAgshIg");
        var mask_graphics_14 = new cjs.Graphics().p("AB+CSQhFhxhjhjQhGhLhchBQgIgFACgDQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogHBUQgDAngQAAQgWAAgrhIg");
        var mask_graphics_15 = new cjs.Graphics().p("AB/CUQhGhyhihkQhHhMhchBQgIgGACgDQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBLAqQAUBpgGBWQgEAngQAAQgVAAgrhHg");
        var mask_graphics_16 = new cjs.Graphics().p("AB/CVQhHhzhhhkQhHhOhdhBQgIgGACgDQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgFBYQgDApgQAAQgWAAgrhIg");
        var mask_graphics_17 = new cjs.Graphics().p("AB/CXQhHh1hghkQhIhQhdhBQgIgFACgDQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQBCAZCvBeQBYAvBKAqQAUBogFBbQgDAqgQAAQgVAAgshIg");
        var mask_graphics_18 = new cjs.Graphics().p("ACACZQhJh3hehkQhJhShdhBQgIgFACgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABgBQBCAZCvBeQBYAvBKAqQAUBogEBdQgDAsgRAAQgVAAgrhIg");
        var mask_graphics_19 = new cjs.Graphics().p("ACACaQhJh4hdhkQhKhThdhBQgIgGACgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQBCAYCvBeQBYAvBKAqQAUBpgEBfQgDAsgQAAQgVAAgshIg");
        var mask_graphics_20 = new cjs.Graphics().p("ACACcQhKh6hchkQhLhVhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQBCAZCvBeQBYAvBLAqQAUBogEBiQgCAtgRAAQgVAAgshIg");
        var mask_graphics_21 = new cjs.Graphics().p("ACBCeQhMh8hahkQhMhXhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogEBkQgCAvgRAAQgVAAgrhIg");
        var mask_graphics_22 = new cjs.Graphics().p("ACBCfQhMh9hZhkQhNhZhchBQgIgFACgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBLAqQAUBogDBnQgCAwgRAAQgVAAgshJg");
        var mask_graphics_23 = new cjs.Graphics().p("ACBChQhNh+hYhlQhNhahdhBQgIgGACgDQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgCBpQgCAwgRAAQgVAAgshIg");
        var mask_graphics_24 = new cjs.Graphics().p("ACCCjQhPiAhWhlQhOhchdhBQgIgFACgDQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQBCAZCvBeQBYAuBKArQAUBogCBrQgBAygSAAQgUAAgshIg");
        var mask_graphics_25 = new cjs.Graphics().p("ACCClQhPiChWhkQhPhfhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogCBuQgBAzgRAAQgVAAgshIg");
        var mask_graphics_26 = new cjs.Graphics().p("ACCCmQhQiDhUhlQhQhghchBQgIgFACgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQBCAZCvBeQBYAvBLAqQAUBogCBwQAAA1gSAAQgUAAgthJg");
        var mask_graphics_27 = new cjs.Graphics().p("ACDCoQhRiFhThkQhRhihchBQgIgGACgDQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQBCAYCvBeQBYAvBLAqQAUBpgBByQgBA1gRAAQgVAAgshIg");
        var mask_graphics_28 = new cjs.Graphics().p("ACDCpQhSiGhShlQhRhjhdhBQgIgGACgDQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpAAB0QAAA3gSAAQgVAAgshJg");
        var mask_graphics_29 = new cjs.Graphics().p("ACUC2QhSiIhRhkQhShlhchCQgIgFACgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBKAqQAUBoAAB3QAAA4gSAAQgUAAgthJg");
        var mask_graphics_30 = new cjs.Graphics().p("ACDCpQhSiGhShlQhRhjhdhBQgIgGACgDQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpAAB0QAAA3gSAAQgVAAgshJg");
        var mask_graphics_31 = new cjs.Graphics().p("ACDCoQhRiFhThkQhRhihchBQgIgGACgDQAAAAAAgBQABAAAAgBQAAAAABAAQABAAAAAAQBCAYCvBeQBYAvBLAqQAUBpgBByQgBA1gSAAQgUAAgshIg");
        var mask_graphics_32 = new cjs.Graphics().p("ACCCmQhQiDhUhlQhQhghchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogCBwQAAA1gSAAQgVAAgshJg");
        var mask_graphics_33 = new cjs.Graphics().p("ACCClQhQiChVhkQhPhfhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQBCAZCvBeQBYAvBLAqQAUBogCBuQgBAzgRAAQgVAAgshIg");
        var mask_graphics_34 = new cjs.Graphics().p("ACCCjQhPiAhWhlQhOhchdhBQgIgGACgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQBCAYCvBeQBYAvBKAqQAUBpgCBrQgBAygSAAQgUAAgshIg");
        var mask_graphics_35 = new cjs.Graphics().p("ACBChQhNh/hYhkQhNhbhdhBQgIgFACgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBKAqQAUBogCBqQgCAxgRAAQgVAAgshJg");
        var mask_graphics_36 = new cjs.Graphics().p("ACBCgQhMh9hZhlQhNhZhchBQgIgFACgDQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQBCAZCvBeQBYAvBLAqQAUBogDBnQgCAwgRAAQgVAAgshIg");
        var mask_graphics_37 = new cjs.Graphics().p("ACBCeQhMh8hahkQhMhXhchBQgIgGACgDQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQBCAYCvBeQBYAvBLAqQAUBpgEBkQgCAvgQAAQgVAAgshIg");
        var mask_graphics_38 = new cjs.Graphics().p("ACACcQhKh6hchkQhLhWhchBQgIgFACgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQBCAZCvBeQBYAvBLAqQAUBogEBjQgCAugRAAQgVAAgshJg");
        var mask_graphics_39 = new cjs.Graphics().p("ACACbQhKh5hdhkQhKhUhchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQBCAZCvBeQBYAvBLAqQAUBogEBgQgDAtgQAAQgVAAgshIg");
        var mask_graphics_40 = new cjs.Graphics().p("ACACZQhJh3hehkQhJhShdhBQgIgGACgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQBCAYCvBeQBYAvBKAqQAUBpgEBeQgDArgQAAQgWAAgrhIg");
        var mask_graphics_41 = new cjs.Graphics().p("AB/CYQhIh2hfhkQhIhQhdhBQgIgGACgDQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgFBbQgDAqgQAAQgVAAgshHg");
        var mask_graphics_42 = new cjs.Graphics().p("AB/CWQhHh0hghkQhIhPhdhBQgIgFACgDQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQBCAZCvBeQBYAvBKAqQAUBogFBaQgDApgQAAQgVAAgshIg");
        var mask_graphics_43 = new cjs.Graphics().p("AB/CUQhGhyhihkQhHhNhchBQgIgGACgDQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBLAqQAUBpgGBXQgEAogQAAQgVAAgrhIg");
        var mask_graphics_44 = new cjs.Graphics().p("AB+CTQhFhyhihjQhHhMhchBQgIgFACgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBLAqQAUBogGBVQgEAogQAAQgVAAgshIg");
        var mask_graphics_45 = new cjs.Graphics().p("AB+CRQhEhwhkhjQhGhKhchBQgIgFACgDQAAgBAAAAQABgBAAAAQAAAAABAAQABgBAAAAQBCAZCvBeQBYAvBLAqQAUBogHBTQgEAmgPAAQgWAAgrhIg");
        var mask_graphics_46 = new cjs.Graphics().p("AB9CPQhDhuhlhjQhFhIhchBQgIgGACgDQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQBCAYCvBeQBYAvBLAqQAUBpgHBQQgEAlgQAAQgVAAgshIg");
        var mask_graphics_47 = new cjs.Graphics().p("AB9COQhChthnhkQhEhGhchBQgIgFACgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAgBQBCAZCvBeQBYAvBLAqQAUBogIBOQgEAlgPAAQgWAAgrhIg");
        var mask_graphics_48 = new cjs.Graphics().p("AB9CMQhChrhnhjQhDhFhdhBQgIgFACgDQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQBCAZCvBeQBYAvBKAqQAUBogIBMQgEAjgPAAQgWAAgrhIg");
        var mask_graphics_49 = new cjs.Graphics().p("AB8CKQhAhphphkQhChChdhBQgIgGACgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgIBJQgFAigPAAQgVAAgshIg");
        var mask_graphics_50 = new cjs.Graphics().p("AB8CJQhAhohqhjQhBhBhdhBQgIgGACgDQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQBCAYCvBeQBYAvBKAqQAUBpgIBHQgFAggPAAQgWAAgrhHg");
        var mask_graphics_51 = new cjs.Graphics().p("AB7CHQg+hmhrhkQhBg/hdhBQgIgFACgDQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQBCAZCvBeQBYAvBKApQAUBpgJBFQgFAggOAAQgWAAgshIg");
        var mask_graphics_52 = new cjs.Graphics().p("AB7CFQg+hlhshjQhAg9hdhBQgIgGACgDQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQBCAYCvBeQBYAvBKApQAUBqgJBCQgFAfgOAAQgWAAgshIg");
        var mask_graphics_53 = new cjs.Graphics().p("AB7CEQg9hkhuhjQg/g8hchBQgIgFACgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQBCAZCvBeQBYAvBLApQAUBpgKBAQgGAfgOAAQgWAAgrhIg");
        var mask_graphics_54 = new cjs.Graphics().p("AB6CCQg7hihvhjQg/g6hchBQgIgFACgDQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQBCAZCvBeQBYAvBLApQAUBpgLA+QgFAdgOAAQgWAAgshIg");
        var mask_graphics_55 = new cjs.Graphics().p("AB6CBQg7hhhwhjQg+g4hchBQgIgGACgDQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQBCAYCvBeQBYAvBLApQAUBqgLA7QgGAcgNAAQgXAAgrhHg");
        var mask_graphics_56 = new cjs.Graphics().p("AB5B/Qg6hfhxhjQg9g3hchBQgIgFACgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQBCAZCvBeQBYAvBLApQAUBpgLA6QgGAbgOAAQgWAAgshIg");
        var mask_graphics_57 = new cjs.Graphics().p("AB5B9Qg5hdhzhjQg8g1hchBQgIgFACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQBCAZCvBeQBYAvBLApQAUBpgMA3QgFAagOAAQgWAAgshIg");
        var mask_graphics_58 = new cjs.Graphics().p("AB4B8Qg4hchzhjQg8gzhchBQgIgGACgDQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQBCAYCvBeQBYAvBLApQAUBqgMA1QgGAYgNAAQgXAAgshHg");
        var mask_graphics_59 = new cjs.Graphics().p("AB4B6Qg3hbh1hjQg6gxhdhBQgIgFACgDQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQBCAZCvBeQBYAvBKApQAUBpgMAzQgGAYgOAAQgWAAgshIg");
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:24.5,y:21.6}).wait(1).to({graphics:mask_graphics_1,x:24.5,y:21.8}).wait(1).to({graphics:mask_graphics_2,x:24.5,y:22}).wait(1).to({graphics:mask_graphics_3,x:24.5,y:22.1}).wait(1).to({graphics:mask_graphics_4,x:24.5,y:22.3}).wait(1).to({graphics:mask_graphics_5,x:24.5,y:22.5}).wait(1).to({graphics:mask_graphics_6,x:24.5,y:22.6}).wait(1).to({graphics:mask_graphics_7,x:24.6,y:22.8}).wait(1).to({graphics:mask_graphics_8,x:24.6,y:23}).wait(1).to({graphics:mask_graphics_9,x:24.6,y:23.2}).wait(1).to({graphics:mask_graphics_10,x:24.6,y:23.3}).wait(1).to({graphics:mask_graphics_11,x:24.6,y:23.5}).wait(1).to({graphics:mask_graphics_12,x:24.6,y:23.7}).wait(1).to({graphics:mask_graphics_13,x:24.6,y:23.8}).wait(1).to({graphics:mask_graphics_14,x:24.6,y:24}).wait(1).to({graphics:mask_graphics_15,x:24.6,y:24.2}).wait(1).to({graphics:mask_graphics_16,x:24.7,y:24.4}).wait(1).to({graphics:mask_graphics_17,x:24.7,y:24.5}).wait(1).to({graphics:mask_graphics_18,x:24.7,y:24.7}).wait(1).to({graphics:mask_graphics_19,x:24.7,y:24.9}).wait(1).to({graphics:mask_graphics_20,x:24.7,y:25}).wait(1).to({graphics:mask_graphics_21,x:24.7,y:25.2}).wait(1).to({graphics:mask_graphics_22,x:24.7,y:25.4}).wait(1).to({graphics:mask_graphics_23,x:24.8,y:25.6}).wait(1).to({graphics:mask_graphics_24,x:24.8,y:25.8}).wait(1).to({graphics:mask_graphics_25,x:24.8,y:25.9}).wait(1).to({graphics:mask_graphics_26,x:24.8,y:26.1}).wait(1).to({graphics:mask_graphics_27,x:24.8,y:26.3}).wait(1).to({graphics:mask_graphics_28,x:24.9,y:26.5}).wait(1).to({graphics:mask_graphics_29,x:23.2,y:25.5}).wait(1).to({graphics:mask_graphics_30,x:24.9,y:26.5}).wait(1).to({graphics:mask_graphics_31,x:24.8,y:26.3}).wait(1).to({graphics:mask_graphics_32,x:24.8,y:26.1}).wait(1).to({graphics:mask_graphics_33,x:24.8,y:25.9}).wait(1).to({graphics:mask_graphics_34,x:24.8,y:25.8}).wait(1).to({graphics:mask_graphics_35,x:24.8,y:25.6}).wait(1).to({graphics:mask_graphics_36,x:24.7,y:25.4}).wait(1).to({graphics:mask_graphics_37,x:24.7,y:25.3}).wait(1).to({graphics:mask_graphics_38,x:24.7,y:25.1}).wait(1).to({graphics:mask_graphics_39,x:24.7,y:24.9}).wait(1).to({graphics:mask_graphics_40,x:24.7,y:24.8}).wait(1).to({graphics:mask_graphics_41,x:24.7,y:24.6}).wait(1).to({graphics:mask_graphics_42,x:24.7,y:24.4}).wait(1).to({graphics:mask_graphics_43,x:24.6,y:24.3}).wait(1).to({graphics:mask_graphics_44,x:24.6,y:24.1}).wait(1).to({graphics:mask_graphics_45,x:24.6,y:23.9}).wait(1).to({graphics:mask_graphics_46,x:24.6,y:23.8}).wait(1).to({graphics:mask_graphics_47,x:24.6,y:23.6}).wait(1).to({graphics:mask_graphics_48,x:24.6,y:23.4}).wait(1).to({graphics:mask_graphics_49,x:24.6,y:23.3}).wait(1).to({graphics:mask_graphics_50,x:24.6,y:23.1}).wait(1).to({graphics:mask_graphics_51,x:24.6,y:22.9}).wait(1).to({graphics:mask_graphics_52,x:24.6,y:22.8}).wait(1).to({graphics:mask_graphics_53,x:24.5,y:22.6}).wait(1).to({graphics:mask_graphics_54,x:24.5,y:22.4}).wait(1).to({graphics:mask_graphics_55,x:24.5,y:22.3}).wait(1).to({graphics:mask_graphics_56,x:24.5,y:22.1}).wait(1).to({graphics:mask_graphics_57,x:24.5,y:21.9}).wait(1).to({graphics:mask_graphics_58,x:24.5,y:21.8}).wait(1).to({graphics:mask_graphics_59,x:24.5,y:21.6}).wait(1));
    
        // Layer 3
        this.instance = new lib.Tween11("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(77.9,47.1);
    
        var maskedShapeInstanceList = [this.instance];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5.9,y:-14.6},59).wait(1));
    
        // Layer 5
        this.instance_1 = new lib.Bitmap21();
        this.instance_1.parent = this;
        this.instance_1.setTransform(2.3,3,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));
    
        // Layer 4
        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#A8F3FD").s().p("AAcDVQgrgYhZg0QhFgpgQgHQgngQgOgKIgGgIQATg7ABiSQABhIgDg9QBvAgBvAqQDcBTgDAuQgEAtAOCEQAHBCAHA5QADAYALAPQADAEgBADQAAADgGAGQgJAJgUAAQg1AAiFhHg");
        this.shape_111.setTransform(25.8,29.2);
    
        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#A8F3FD").s().p("AAaDSIiIhQQhDgogQgHQgkgPgOgKQgDgDgCgMQASg/ACiPIANh3QB2AkBmAoQDPBOgDAtQgCAsANCEQAGBHAIA2QADAXAKAOQADAFgBACQgDAGgIAHQgJAIgSAAQg1AAiEhJg");
        this.shape_112.setTransform(25.8,29.6);
    
        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#A8F3FD").s().p("AAYDPIiLhUQhBgmgQgIQgigOgNgJQgDgEgCgTQARhDADiMIAchpQB+AnBeAmQDABLgBAsQgCArAMCEQAHBMAIAzQADAVAJAOQACAEgBADQgFAHgKAIQgJAIgRAAQg0AAiEhLg");
        this.shape_113.setTransform(25.8,30);
    
        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#A8F3FD").s().p("AAVDMQg/gphPgvQg/glgPgHQgggOgMgJQgEgDgBgbQAQhHAEiIQAXg0AUgoQCFAqBXAlQCxBGgBArQAAAqALCFQAGBQAIAxQADAUAJAMQACAEgCAEQgHAJgMAJQgIAHgQAAQg0AAiEhNg");
        this.shape_114.setTransform(25.8,30.4);
    
        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#A8F3FD").s().p("AATDKQhGgwhLgsQg9gkgPgIQgdgMgMgJQgEgDgBgjQAPhKAGiGQAegsAbgiQCNAuBPAkQCiBCABApQAAApALCFQAGBVAIAuQADASAHAMQACAEgBAEQgKALgOAKQgIAGgPAAQgzAAiEhOg");
        this.shape_115.setTransform(25.7,30.8);
    
        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#A8F3FD").s().p("AARDHQhNg1hIgrQg6gigQgIQgbgMgKgIQgFgEAAgpQAOhPAGiDQAmglAjgbQCUAxBIAiQCSA+ACAoIAMCtQAFBaAJArQADASAHALQABAEgCADQgMAOgQAKQgIAGgOAAQgyAAiDhQg");
        this.shape_116.setTransform(25.7,31.2);
    
        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#A8F3FD").s().p("AAODEQhTg7hEgoIhIgqQgZgLgKgIQgFgDAAgxQAOhTAHiAQAtgeArgUQCaA1BBAgQCEA6ADAnIAMCsQAFBfAJAoQADAQAGAKQABAEgCAEQgOAQgTALQgHAFgNAAQgxAAiEhSg");
        this.shape_117.setTransform(25.7,31.6);
    
        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#A8F3FD").s().p("AAMDCQhahChBgmIhFgpQgWgKgKgHQgFgEABg4QAMhXAJh9QA0gXAygNQCiA4A5AfQB1A1AEAmQAEAlAICGQAFBkAJAlQADAPAFAKQACADgDAFQgRASgUALQgHAFgMAAQgxAAiDhTg");
        this.shape_118.setTransform(25.7,32);
    
        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#A8F3FD").s().p("AAKC/QhhhIg9gkIhEgoQgUgJgIgHQgGgDABhAQAMhbAJh5QA8gRA6gGQCpA7AyAeQBmAxAFAkQAFAlAICGQAEBoAJAjQADAOAFAIQABAEgEAEQgSAUgXAMQgHAFgLAAQgxAAiBhVg");
        this.shape_119.setTransform(25.7,32.4);
    
        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#A8F3FD").s().p("AAHC8QhnhOg6giIhCgmQgRgJgHgGQgHgEAChHQALhfAKh2QBDgKBBABQCxA+ArAdQBWAsAHAkQAGAjAHCHQAEBtAJAgQADAMAEAHQABAEgEAFQgVAWgYANQgHAEgLAAQgwAAiBhXg");
        this.shape_120.setTransform(25.7,32.8);
    
        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#A8F3FD").s().p("AAFC8QhuhUg2gfIhAgmQgOgIgHgGQgHgDAChPIAWjWQBKgDBJAIQC4BCAjAbQBIAoAHAiQAHAiAGCHQAEByAJAdIAGASQABADgEAGQgXAYgbANQgGAEgKAAQgvAAiBhZg");
        this.shape_121.setTransform(25.6,32.9);
    
        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#A8F3FD").s().p("AADDAQh1hagzgeIg9gkQgNgHgGgGQgHgDADhWQAJhnAMhxQBSAFBRAOQC/BGAbAZQA5AkAJAhQAIAhAFCHQADB3AKAaIAGAQQAAADgFAGQgZAagcAOQgGAEgKAAQguAAiAhbg");
        this.shape_122.setTransform(25.6,32.6);
    
        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#A8F3FD").s().p("AAADEQh7hggwgbIg7gkQgKgGgFgFQgHgEADheQAHhqAOhuQBaAMBXAVQDHBJAUAYQAqAgAKAgQAJAfAECIQADB8AKAXIAFANQAAAEgFAFQgcAdgeAPQgGADgIAAQguAAiAhdg");
        this.shape_123.setTransform(25.6,32.3);
    
        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#A8F3FD").s().p("AgBDIQiDhmgsgaIg5giQgHgFgFgFQgIgEAEhlQAHhuAPhrQBgATBgAbQDNBNANAWQAbAcALAeQAKAfAECIQACCAAKAVIAEALQAAAEgFAFQgeAfggAQQgGADgIAAQgtAAh+hfg");
        this.shape_124.setTransform(25.6,32.1);
    
        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#A8F3FD").s().p("AgDDMQiKhsgpgXQgogYgOgKQgGgEgDgFQgIgDAEhtQAFhyAQhoQBpAaBmAiQDWBQAFAVQAMAXAMAeQALAdADCJQACCFAKASQADAFABAEQgBADgFAGQghAhgiAQQgFADgHAAQgtAAh9hhg");
        this.shape_125.setTransform(25.6,31.8);
    
        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#A8F3FD").s().p("AgGDQQiQhygmgWQglgVgPgLIgGgHQgIgEAFh1QAFh1AQhlQBwAhBuApQDdBTgDATQgCAUAMAcQANAcACCJQACCKAKAPQADAFAAACQgBADgGAHQgiAjglARQgEACgHAAQgsAAh9hjg");
        this.shape_126.setTransform(25.6,31.5);
    
        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#A8F3FD").s().p("AAADPQiNhugogYIg3gjQgGgEgDgFQgIgDAEhtQAGhxAPhoQBoAZBmAiQDVBPAGAVQANAYAJAeQAJAdAFCGQAFCHAKARQADAHABAEQgBADgFAGQggAhgkASQgGACgHAAQgsAAh5heg");
        this.shape_127.setTransform(25.6,31.9);
    
        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#A8F3FD").s().p("AAGDOQiLhqgqgbIg5glQgIgFgFgFQgIgEAEhkQAHhuAPhrQBfASBfAbQDMBLAOAXQAdAcAGAfQAGAfAHCDQAICFAKASIAEAOQAAADgFAGQgdAfgkATQgFADgIAAQgrAAh3hag");
        this.shape_128.setTransform(25.6,32.3);
    
        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#A8F3FD").s().p("AAMDNQiIhmgtgeIg8gnQgLgGgFgGQgHgDADhcQAIhqANhuQBYAKBWATQDFBJAWAYQAtAhADAgIAMCgQAKCCAKAUIAGASQAAADgFAGQgbAcgjAUQgFADgJAAQgrAAhzhVg");
        this.shape_129.setTransform(25.6,32.7);
    
        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#A8F3FD").s().p("AATDMQiGhjgwggIg+gqQgNgHgHgGQgGgDAChUQAJhmAMhxQBQACBOANQC9BEAeAaQA9AlAAAiQgBAhAMB+QANB/AKAWQAEAPADAGQAAADgEAGQgZAZgiAWQgHAEgJAAQgrAAhuhRg");
        this.shape_130.setTransform(25.6,33.1);
    
        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#A8F3FD").s().p("AAZDNIi2iCQgygjgPgJQgPgIgIgHQgGgDAChMIAVjWQBIgFBGAFQC2BBAlAbQBOAqgFAjQgEAiAPB7QAPB8AKAYQAEASAEAHQABADgEAFQgWAYgiAXQgGAEgKAAQgrAAhrhMg");
        this.shape_131.setTransform(25.7,33.4);
    
        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#A8F3FD").s().p("AAfDRIi1iAQg1gmgPgJQgSgJgIgHQgGgDABhEQALhdAKh4QBAgNA+gCQCtA9AuAdQBeAvgIAkQgIAjASB5QASB5AKAaQAEAUAFAIQABADgEAFQgUAVghAYQgGAGgMAAQgpAAhohJg");
        this.shape_132.setTransform(25.7,33.2);
    
        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#A8F3FD").s().p("AAmDYQiAhYg2goQg3gogQgJQgUgJgJgHQgGgEABg8QAMhZAJh7QA4gUA2gKQClA6A2AfQBuAzgLAlQgMAlAVB1QAVB3AJAcQAFAWAFAJQABAEgDAEQgRATggAZQgHAGgMAAQgpAAhkhEg");
        this.shape_133.setTransform(25.7,32.9);
    
        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#A8F3FD").s().p("AAtDeQh9hTg6grQg5grgPgIQgYgLgJgHQgGgEABg0QANhUAIh/QAwgbAtgSQCeA3A+AgQB9A3gOAnQgPAmAYBzQAXBzAJAeQAGAZAFAKQACAEgDAEQgPARgfAaQgIAGgNAAQgpAAhfhAg");
        this.shape_134.setTransform(25.7,32.5);
    
        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#A8F3FD").s().p("AAzDkQh7hQg8gtQg8gtgPgJQgagLgKgIQgFgDgBgsQAPhRAGiBQApgjAlgZQCWAzBGAhQCNA9gSAnQgSAoAbBwQAZBxAJAfQAGAcAHAKQABAEgCAEQgNAPgeAbQgIAHgOAAQgoAAhcg8g");
        this.shape_135.setTransform(25.7,32.2);
    
        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#A8F3FD").s().p("AA5DqQh4hMg+gwQg/gwgPgIQgdgMgLgIQgFgEAAgjQAPhNAGiFQAggqAdggQCPAvBNAjQCeBBgWApQgVAoAdBuIAlCPQAGAeAHAMQACAEgCADQgKANgeAcQgIAIgPAAQgnAAhZg4g");
        this.shape_136.setTransform(25.7,31.9);
    
        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#A8F3FD").s().p("AA/DxQh2hJhAgyQhBgzgQgIQgfgNgMgJQgEgDgBgdQAQhHAEiIQAYgyAWgnQCHArBVAlQCuBFgZAqQgZAqAfBrQAgBrAIAjQAHAhAIAMQACAEgCAEQgHAKgeAdQgIAJgQAAQgoAAhUgzg");
        this.shape_137.setTransform(25.8,31.6);
    
        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#A8F3FD").s().p("ABGD3Qh0hEhDg2QhEg1gPgHQgigOgNgKQgDgDgCgVQARhDADiLIAehoQB/AoBeAmQC9BKgcArQgcArAiBoQAhBpAJAlQAHAjAJANQACAFgBADQgGAHgcAfQgJAJgSAAQgmAAhQgvg");
        this.shape_138.setTransform(25.8,31.3);
    
        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#A8F3FD").s().p("ABMD9QhyhBhFg3QhGg4gQgIQgkgOgOgKQgDgEgCgMQASg/ACiPIAOh2QB3AkBlAoQDOBOggAtQgfAsAkBlQAlBmAIAnQAHAmAKAOQADAEgBADQgDAFgcAgQgJAKgTAAQgmAAhMgrg");
        this.shape_139.setTransform(25.8,31);
    
        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#A8F3FD").s().p("ABSEDQhvg9hIg6QhIg7gQgHQgngPgOgLIgGgHQATg7ABiSQABhJgDg9QBvAhBvApQDcBTgjAuQgjAuAnBiQAoBjAHApQAIAoALAPQADAFgBACQAAADgcAhQgJAMgUAAQglAAhJgog");
        this.shape_140.setTransform(25.8,30.7);
    
        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#A8F3FD").s().p("ABND+QhxhAhGg4QhHg5gQgHQgkgPgOgKQgDgDgCgLQASg/ACiPQAIhCAEg3QB2AkBmAoQDQBPggAtQggAsAlBlQAlBmAIAnQAHAmAKAOQADAFgBACQgDAFgcAgQgJALgTAAQglAAhMgrg");
        this.shape_141.setTransform(25.8,30.9);
    
        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#A8F3FD").s().p("ABHD4QhzhDhDg2QhFg2gPgHQgigOgNgKQgEgEgCgSQARhCADiMIAahsQB9AnBgAnQDBBLgdArQgdAsAjBnQAiBoAJAlQAGAkAKAOQACAEgBADQgFAHgcAfQgJAKgSAAQgnAAhPgvg");
        this.shape_142.setTransform(25.8,31.2);
    
        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#A8F3FD").s().p("ABCDzQh1hHhCgzQhCg0gQgIQgggNgMgJQgEgEgBgZQAQhGAEiJIAohfQCEAqBYAlQC0BHgaArQgaAqAgBqQAgBqAJAkQAGAiAJANQACAEgBADQgHAJgeAeQgIAJgRAAQgnAAhSgyg");
        this.shape_143.setTransform(25.8,31.5);
    
        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#A8F3FD").s().p("AA8DuQh3hLg/gxQhAgxgPgIQgegNgMgJQgEgDgBggQAQhKAFiHQAcguAZgjQCLAtBSAkQClBDgXAqQgXApAeBsIAmCPQAHAfAHAMQADAEgCAEQgJALgeAdQgJAIgPAAQgoAAhWg1g");
        this.shape_144.setTransform(25.7,31.8);
    
        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#A8F3FD").s().p("AA3DoQh5hNg+gvQg9gvgQgIQgbgMgLgJQgFgDAAgnQAOhOAGiDQAkgoAggdQCSAwBKAjQCYA/gUAoQgVAoAcBvIAkCQQAGAdAIALQABAEgCAEQgLANgeAcQgIAHgPAAQgoAAhZg5g");
        this.shape_145.setTransform(25.7,32);
    
        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#A8F3FD").s().p("AAxDjQh7hRg7gtQg8gtgPgIQgZgLgKgIQgGgEAAgtQAOhSAHiBQAqghAogWQCYAzBEAhQCJA7gRAoQgRAnAZBxQAaBxAJAfQAFAbAHAKQABAEgCAEQgNAPgfAbQgIAHgNAAQgpAAhdg8g");
        this.shape_146.setTransform(25.7,32.3);
    
        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#A8F3FD").s().p("AAsDdQh9hUg5gqQg6grgPgIQgXgKgJgIQgGgEABg0QANhWAIh+QAxgaAugQQCfA2A9AgQB7A3gOAmQgOAmAXB0QAXB0AJAdQAGAZAFAJQACAEgDAEQgPARggAaQgHAGgNAAQgpAAhghAg");
        this.shape_147.setTransform(25.7,32.6);
    
        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#A8F3FD").s().p("AAgDSIi2iAQg0gmgQgJQgSgJgIgHQgGgDABhDQALhdAKh4QA/gOA9gDQCtA9AuAdQBgAvgIAkQgJAkATB4QASB5AJAaQAFAUAFAIQABAEgEAFQgUAVggAYQgHAFgLAAQgqAAhnhIg");
        this.shape_148.setTransform(25.7,33.2);
    
        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#A8F3FD").s().p("AAbDNIi2iBQgzgkgPgJQgQgIgHgGQgHgEAChKIAVjWQBGgHBEAEQCzBAAoAbQBRArgFAjQgFAjAQB7QAQB7AKAYQAEASAEAIQABADgEAFQgWAXghAXQgHAFgKAAQgqAAhqhMg");
        this.shape_149.setTransform(25.7,33.4);
    
        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#A8F3FD").s().p("AAVDMQiFhigwghIhAgrQgOgHgGgGQgHgDAChRIAWjXQBMAABLAJQC7BDAgAbQBDAngCAiQgCAhAOB9QANB+AKAXIAHAWQABAEgEAFQgYAZgiAWQgGAEgKAAQgqAAhuhPg");
        this.shape_150.setTransform(25.6,33.3);
    
        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#A8F3FD").s().p("AAQDNQiIhlgugfIg9gpQgMgGgGgGQgHgDADhYQAIhoANhwQBUAGBSAQQDBBHAaAZQA1AjABAhQABAgALB/QALCBAKAVIAHATQAAADgFAGQgaAbgiAVQgGAEgJAAQgrAAhwhTg");
        this.shape_151.setTransform(25.6,32.9);
    
        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#A8F3FD").s().p("AAKDOQiJhogsgdIg7gmQgJgGgGgFQgHgEADhfQAIhrAOhtQBaANBaAWQDIBJASAYQAnAfAEAgQAEAfAJCCQAJCDAKATIAFAQQAAAEgFAFQgcAdgiAUQgGADgIAAQgsAAh0hWg");
        this.shape_152.setTransform(25.6,32.5);
    
        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#A8F3FD").s().p("AAFDPQiMhsgqgaIg4gkQgIgFgEgFQgIgEAEhmQAHhvAPhqQBhATBhAdQDOBNAMAWQAZAbAHAfQAHAeAGCEQAHCFAKASIAEANQAAAEgFAGQgeAfgkATQgFACgIAAQgrAAh3hag");
        this.shape_153.setTransform(25.6,32.2);
    
        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#A8F3FD").s().p("AAADPQiOhvgogYQgogYgOgKQgGgEgDgFQgJgDAFhuQAFhyAQhnQBpAaBnAjQDWBPAFAVQALAXAKAeQAJAdAECHQAFCHAKARIAEAKQgBADgFAGQghAhgkASQgFADgHAAQgsAAh5hfg");
        this.shape_154.setTransform(25.6,31.9);
    
        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#A8F3FD").s().p("AgDDMQiJhsgqgXQgngYgPgKQgGgEgDgFQgIgDAEhtQAGhxAPhoQBoAZBmAiQDVBPAGAVQANAYALAeQAMAdADCJQACCEAKASIAEAKQgBADgFAGQggAhgjAQQgFACgHAAQgtAAh9hgg");
        this.shape_155.setTransform(25.6,31.8);
    
        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#A8F3FD").s().p("AAADIQiDhlgsgaIg5gjQgIgFgFgFQgIgEAEhkQAHhuAPhrQBfASBfAbQDMBLAOAXQAdAcALAfQAKAfAECIQACCAAKAVIAEALQAAADgFAGQgdAfghAPQgFADgIAAQgtAAh+heg");
        this.shape_156.setTransform(25.6,32.1);
    
        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f("#A8F3FD").s().p("AABDDQh6hfgxgcQgsgagPgKQgLgGgFgFQgHgEADhcQAIhpANhvQBYAKBWAUQDFBIAWAYQAtAhAJAgQAJAgAFCIQADB6AKAYIAFAOQAAAEgFAFQgbAcgeAPQgGAEgIAAQguAAiAhdg");
        this.shape_157.setTransform(25.6,32.4);
    
        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f("#A8F3FD").s().p("AADC/QhyhZg1geIg9glQgNgHgHgGQgGgDAChUQAJhmAMhxQBQACBOANQC9BEAeAaQA9AlAJAiQAIAhAFCHQADB2AKAbIAGAQQAAADgEAGQgZAZgcAOQgGAEgKAAQguAAiBhag");
        this.shape_158.setTransform(25.6,32.7);
    
        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f("#A8F3FD").s().p("AAGC7QhshRg4ghIhAgmQgPgIgIgGQgGgEAChMIAVjWQBIgFBGAFQC2BBAlAcQBNApAIAjQAGAiAGCIQAEBwAKAeQADALADAHQABAEgEAFQgXAXgZAOQgGAEgLAAQgvAAiBhZg");
        this.shape_159.setTransform(25.7,32.9);
    
        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f("#A8F3FD").s().p("AAIC9QhkhLg8gjIhCgnQgSgJgIgHQgGgDABhEQALhdAKh4QBAgNA+gCQCtA9AuAdQBeAvAGAkQAFAjAHCHQAEBrAJAhQADANAFAIQABADgEAFQgUAVgXANQgHAFgLAAQgwAAiChXg");
        this.shape_160.setTransform(25.7,32.6);
    
        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f("#A8F3FD").s().p("AALDAQhehEg/glIhFgpQgUgJgJgHQgGgEABg8QAMhZAJh7QA4gUA2gKQClA6A2AfQBuAzAEAlQAFAlAICGQAEBmAJAkQADAOAFAJQABAEgDAEQgRATgWAMQgHAFgMAAQgwAAiChVg");
        this.shape_161.setTransform(25.7,32.2);
    
        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f("#A8F3FD").s().p("AAODDQhXg+hCgoIhHgpQgYgKgJgIQgGgDABg0QANhVAIh+QAwgcAtgRQCeA2A+AgQB9A4AEAmQADAmAJCGQAFBhAJAnQADAQAFAJQACAEgDAEQgPARgTALQgIAGgMAAQgyAAiChTg");
        this.shape_162.setTransform(25.7,31.8);
    
        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f("#A8F3FD").s().p("AAQDGQhPg4hHgpIhJgrQgagLgKgIQgFgDgBgsQAPhRAGiBQApgjAlgZQCWAzBGAhQCNA9ADAnIALCtQAGBcAIAqQADARAHAKQABAEgCAEQgNAPgRAKQgHAGgOAAQgyAAiDhRg");
        this.shape_163.setTransform(25.7,31.3);
    
        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f("#A8F3FD").s().p("AATDJQhJgxhJgsQg9gkgPgIQgdgMgLgIQgFgEAAgkQAPhMAGiFQAggqAdggQCPAvBNAjQCeBBABApQABAoAKCFQAGBXAIAtQADASAHAMQACAEgCADQgKANgPAJQgIAHgOAAQgzAAiDhPg");
        this.shape_164.setTransform(25.7,30.9);
    
        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f("#A8F3FD").s().p("AAVDMQhBgrhOguQg+glgQgHQgfgNgMgJQgEgEgBgcQAQhIAEiIQAYgyAWgnQCHArBVAlQCuBFAAArQAAApALCFQAFBSAJAwQADATAIANQACAEgCADQgHAKgNAJQgIAHgQAAQg0AAiDhNg");
        this.shape_165.setTransform(25.8,30.5);
    
        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f("#A8F3FD").s().p("AAXDPQg5glhSgwQhBgmgPgHQgigOgNgKQgDgDgCgVQARhDADiLIAehoQB/AoBeAmQC9BKgBArQgBArALCFQAHBMAIAzQADAVAJANQACAFgBADQgGAHgKAIQgIAIgRAAQg1AAiEhLg");
        this.shape_166.setTransform(25.8,30.1);
    
        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f("#A8F3FD").s().p("AAaDSIiIhRQhDgngQgIQgkgOgOgKQgDgEgCgMQASg/ACiPIAOh2QB3AkBlAoQDOBOgCAtQgDAsANCEQAGBHAIA2QADAXAKAOQADAEgBADQgDAFgIAHQgJAJgSAAQg1AAiEhJg");
        this.shape_167.setTransform(25.8,29.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111}]}).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_111}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,50.8,57.7);
    
    
    (lib.nuoc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween45("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(125.1,39.5,1.223,1.223);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.38,scaleY:1.38},14).to({scaleX:1.22,scaleY:1.22},15).wait(1));
    
        // Layer 3
        this.instance_1 = new lib.Tween46("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(123.9,34.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},14).to({scaleX:1,scaleY:1},15).wait(1));
    
        // Layer 1
        this.instance_2 = new lib.Tween47("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(127.5,32.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,scaleY:1.04},14).to({scaleX:1,scaleY:1},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,255,65.5);
    
    
    (lib.mu = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol5();
        this.instance.parent = this;
        this.instance.setTransform(60.6,128.9);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},14).to({scaleX:1.89,scaleY:1.89,alpha:0},15).to({_off:true},1).wait(15));
    
        // Layer 9 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhPBPQghghAAguQAAguAhghQAighAtAAQAuAAAhAhQAiAhAAAuQAAAugiAhQghAiguAAQgtAAgigig");
        mask.setTransform(60.6,128.9);
    
        // Layer 10
        this.instance_1 = new lib.Symbol5();
        this.instance_1.parent = this;
        this.instance_1.setTransform(50.2,163.9);
    
        var maskedShapeInstanceList = [this.instance_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71.7,y:95.3},59).wait(1));
    
        // Layer 5 copy
        this.instance_2 = new lib.Symbol4();
        this.instance_2.parent = this;
        this.instance_2.setTransform(90.3,57.7);
        this.instance_2.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},29).to({alpha:0},30).wait(1));
    
        // Layer 5
        this.instance_3 = new lib.Tween26copy();
        this.instance_3.parent = this;
        this.instance_3.setTransform(90.3,57.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));
    
        // Layer 3
        this.instance_4 = new lib.Bitmap25();
        this.instance_4.parent = this;
        this.instance_4.setTransform(24.5,113.1,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));
    
        // Layer 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AkWJTQgQgHgPgQIgNgOQgQhDgFhvQgJjdA+jXQAhhoAkhQIAOgdIABgCIAVgnIgCgBQAHgOAVggIAigzIACADIABgBIgBgBIAVgYQAWgaAYgXIAFgFIAHgHIAEgDIAXgTQAUgTAkgVQAYgNATgJIAAABIAHgDIAUgIIAFgBIAMgFIAIgBQAugKAyAFQA6AHAcAaQAPAPACAOIgCABIABACIABAAQAMATAAAuQgBAkgGAbIgCAAIAAABIADgBQgBAPgNAmQgMAngPAcIAAAAIgGALIgkBGIgRAeQgRAegiAyIgBAAIgMASQlTIAgqBxQgSA0ggAAQgKAAgMgGg");
        mask_1.setTransform(87.5,60.5);
    
        // Layer 7
        this.instance_5 = new lib.Tween42();
        this.instance_5.parent = this;
        this.instance_5.setTransform(62.6,132.6);
        this.instance_5.alpha = 0.461;
        this.instance_5.compositeOperation = "lighter";
        this.instance_5.filters = [new cjs.BlurFilter(5, 5, 1)];
        this.instance_5.cache(-42,-18,85,36);
    
        var maskedShapeInstanceList = [this.instance_5];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.54,x:112.2,y:-9.9,alpha:1},32,cjs.Ease.get(-1)).wait(28));
    
        // Layer 6
        this.instance_6 = new lib.Bitmap24();
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.1,0.5,1.429,1.429);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));
    
        // Layer 4 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        var mask_2_graphics_0 = new cjs.Graphics().p("ACBPmQgWgDgKgIIhUhDQhIg6AHigQAHigBThVQBUhTB3AAQB3AABTBTQBUBVAeCCQAeCCAGB1QACArgaAfIgEAFg");
        var mask_2_graphics_1 = new cjs.Graphics().p("ACCPlQgWgCgKgIIhUhDQhHg6AHigQAHifBShVQBUhSB2AAQB3AABTBSQBUBVAeCBQAeCCAGB1QACAqgaAfIgFAFg");
        var mask_2_graphics_2 = new cjs.Graphics().p("ACDPlQgWgCgKgJIhUhCQhHg6AHifQAHifBThUQBThTB2AAQB2AABTBTQBUBUAdCBQAeCBAGB1QACAqgaAfIgEAFg");
        var mask_2_graphics_3 = new cjs.Graphics().p("ACEPlQgWgDgLgIIhShCQhHg6AHifQAHieBShUQBThSB1AAQB2AABTBSQBTBUAeCBQAeCAAFB1QADAqgaAfIgFAFg");
        var mask_2_graphics_4 = new cjs.Graphics().p("ACFPkQgWgCgLgIIhShCQhHg6AHieQAHieBShUQBShSB2AAQB2AABSBSQBTBUAeCAQAdCAAGB1QACAqgZAeIgFAFg");
        var mask_2_graphics_5 = new cjs.Graphics().p("ACGPkQgWgDgLgIIhShCQhHg5AHieQAHidBShUQBShRB2AAQB1AABSBRQBTBUAdCAQAeCAAFBzQADAqgaAfIgEAFg");
        var mask_2_graphics_6 = new cjs.Graphics().p("ACHPjQgWgCgLgIIhShCQhGg5AHidQAHidBRhTQBShSB1AAQB1AABSBSQBSBTAeB/QAdCAAGBzQACAqgZAeIgFAFg");
        var mask_2_graphics_7 = new cjs.Graphics().p("ACHPjQgVgCgLgJIhShBQhGg5AHidQAHicBRhTQBShRB1AAQB0AABSBRQBSBTAdB/QAeB/AFBzQACAqgZAeIgEAFg");
        var mask_2_graphics_8 = new cjs.Graphics().p("ACIPjQgVgDgLgIIhRhBQhGg5AHicQAHicBRhTQBRhRB0AAQB0AABSBRQBSBTAdB+QAdB/AGBzQACApgZAfIgFAFg");
        var mask_2_graphics_9 = new cjs.Graphics().p("ACJPiQgVgCgLgIIhRhBQhGg5AHicQAHibBRhTQBRhQB0AAQBzAABSBQQBRBTAeB+QAdB+AFBzQACApgZAeIgEAFg");
        var mask_2_graphics_10 = new cjs.Graphics().p("ACKPiQgVgDgLgIIhRhAQhFg5AHibQAGibBRhSQBRhRBzAAQB0AABRBRQBRBSAdB+QAdB+AGByQACApgZAeIgFAFg");
        var mask_2_graphics_11 = new cjs.Graphics().p("ACLPhQgVgCgLgIIhRhBQhFg4AHibQAHiaBQhSQBRhQBzAAQBzAABRBQQBRBSAdB9QAdB+AFByQACApgZAeIgEAEg");
        var mask_2_graphics_12 = new cjs.Graphics().p("ACMPhQgVgCgLgIIhQhBQhFg4AHiaQAGiaBQhSQBRhQByAAQBzAABRBQQBQBSAdB9QAdB9AGBxQACApgZAeIgEAFg");
        var mask_2_graphics_13 = new cjs.Graphics().p("ACNPhQgVgDgLgIIhQhAQhFg4AHiaQAHiZBPhSQBRhPByAAQByAABQBPQBRBSAdB8QAdB9AFBxQACApgZAeIgEAFg");
        var mask_2_graphics_14 = new cjs.Graphics().p("ACOPgQgVgCgLgIIhQhAQhEg4AGiZQAHiZBQhRQBQhQBxAAQByAABQBQQBRBRAdB8QAcB8AGBxQACApgZAdIgEAFg");
        var mask_2_graphics_15 = new cjs.Graphics().p("ACPPgQgVgDgLgHIhQhAQhEg4AHiZQAHiZBPhQQBPhPByAAQByAABPBPQBRBRAcB8QAdB8AFBwQACAogYAeIgFAFg");
        var mask_2_graphics_16 = new cjs.Graphics().p("ACPPfQgUgCgLgIIhPg/QhEg4AGiYQAHiZBPhQQBPhPByAAQBxAABPBPQBQBRAdB7QAcB8AGBwQACAogZAeIgEAEg");
        var mask_2_graphics_17 = new cjs.Graphics().p("ACQPfQgUgCgLgIIhPhAQhEg3AHiYQAGiYBPhQQBPhOBxAAQBxAABPBOQBQBQAcB8QAdB7AFBwQACAogYAdIgFAFg");
        var mask_2_graphics_18 = new cjs.Graphics().p("ACRPfQgUgDgLgIIhPg/QhEg3AHiXQAHiYBOhPQBPhPBxAAQBwAABPBPQBQBPAcB7QAcB7AGBvQACApgZAdIgEAFg");
        var mask_2_graphics_19 = new cjs.Graphics().p("ACSPeQgVgCgKgIIhPg/QhDg3AHiXQAGiXBOhPQBPhOBwAAQBwAABPBOQBPBPAdB7QAcB6AFBvQACAogYAeIgEAEg");
        var mask_2_graphics_20 = new cjs.Graphics().p("ACTPeQgVgCgKgIIhOg/QhEg3AHiWQAHiXBOhPQBOhOBwAAQBwAABOBOQBPBPAcB7QAcB6AGBuQACAogZAdIgEAFg");
        var mask_2_graphics_21 = new cjs.Graphics().p("ACUPdQgVgCgKgIIhOg+QhDg3AGiWQAHiWBOhPQBOhNBvAAQBwAABOBNQBPBPAcB6QAcB6AFBuQACAogYAdIgEAEg");
        var mask_2_graphics_22 = new cjs.Graphics().p("ACVPdQgVgCgKgIIhOg+QhDg3AHiVQAGiWBOhOQBOhOBvAAQBvAABOBOQBOBOAcB6QAcB5AGBuQACAngZAdIgEAFg");
        var mask_2_graphics_23 = new cjs.Graphics().p("ACWPdQgVgDgKgHIhOg+QhCg3AGiVQAHiVBNhOQBOhNBuAAQBvAABOBNQBOBOAcB5QAcB5AFBuQACAngYAdIgEAFg");
        var mask_2_graphics_24 = new cjs.Graphics().p("ACXPcQgVgCgKgIIhNg+QhDg2AHiUQAGiVBNhOQBOhNBuAAQBuAABOBNQBOBOAbB5QAcB4AGBtQACAogYAdIgFAEg");
        var mask_2_graphics_25 = new cjs.Graphics().p("ACXPcQgUgCgKgIIhNg+QhCg2AGiUQAHiUBMhOQBOhMBtAAQBuAABOBMQBNBOAcB5QAcB4AFBsQACAogYAcIgEAFg");
        var mask_2_graphics_26 = new cjs.Graphics().p("ACYPbQgUgCgKgHIhNg+QhCg2AHiTQAGiUBMhOQBNhMBuAAQBuAABNBMQBNBOAcB4QAbB4AGBsQABAngXAdIgEAEg");
        var mask_2_graphics_27 = new cjs.Graphics().p("ACZPbQgUgCgKgIIhNg9QhBg2AGiTQAHiTBMhNQBMhMBuAAQBtAABNBMQBNBNAbB4QAcB3AFBsQACAngYAcIgEAFg");
        var mask_2_graphics_28 = new cjs.Graphics().p("ACaPbQgUgDgKgHIhNg9QhBg2AHiSQAGiTBMhNQBMhMBtAAQBtAABMBMQBNBNAcB3QAbB3AGBsQABAngXAcIgEAFg");
        var mask_2_graphics_29 = new cjs.Graphics().p("ACbPaQgUgCgKgIIhMg8QhCg2AHiSQAGiSBMhNQBMhLBtAAQBsAABMBLQBNBNAbB3QAcB2AFBsQACAmgYAdIgEAEg");
        var mask_2_graphics_30 = new cjs.Graphics().p("ACcPaQgUgCgKgIIhMg9QhBg1AGiRQAHiSBLhNQBMhLBsAAQBsAABMBLQBNBNAbB2QAbB3AFBqQACAngXAcIgEAFg");
        var mask_2_graphics_31 = new cjs.Graphics().p("ACdPZQgUgCgKgHIhMg9QhBg1AHiRQAGiRBLhMQBMhMBsAAQBsAABLBMQBMBMAcB2QAbB2AFBqQACAngYAcIgEAEg");
        var mask_2_graphics_32 = new cjs.Graphics().p("ACePZQgUgCgKgIIhMg8QhAg1AGiQQAGiRBLhMQBMhLBrAAQBsAABLBLQBMBMAbB2QAbB1AFBqQACAngXAcIgEAEg");
        var mask_2_graphics_33 = new cjs.Graphics().p("ACdPaQgUgDgKgHIhMg9QhBg1AHiRQAGiRBLhNQBMhLBsAAQBsAABLBLQBMBNAcB2QAbB2AFBqQACAngXAcIgFAFg");
        var mask_2_graphics_34 = new cjs.Graphics().p("ACcPaQgUgCgKgIIhNg9QhBg1AHiRQAGiSBMhNQBMhMBsAAQBsAABMBMQBNBNAbB2QAbB3AGBrQACAmgYAcIgEAFg");
        var mask_2_graphics_35 = new cjs.Graphics().p("ACaPaQgUgCgJgHIhNg9QhBg2AGiSQAHiSBLhNQBNhMBsAAQBtAABMBMQBNBNAcB3QAbB2AFBsQACAngXAcIgFAEg");
        var mask_2_graphics_36 = new cjs.Graphics().p("ACZPbQgUgCgKgIIhMg9QhCg2AGiTQAHiSBMhOQBNhMBtAAQBtAABNBMQBNBOAbB3QAcB3AFBsQACAngYAcIgEAFg");
        var mask_2_graphics_37 = new cjs.Graphics().p("ACYPbQgUgCgKgHIhNg+QhCg2AHiTQAGiUBNhNQBMhNBuAAQBuAABNBNQBNBNAcB4QAbB4AGBsQABAngXAdIgFAEg");
        var mask_2_graphics_38 = new cjs.Graphics().p("ACXPcQgUgCgKgIIhNg+QhDg2AHiUQAHiUBMhOQBNhNBuAAQBuAABOBNQBNBOAcB4QAcB5AFBsQACAogYAcIgEAFg");
        var mask_2_graphics_39 = new cjs.Graphics().p("ACWPcQgUgCgKgIIhOg+QhCg2AGiUQAHiVBNhOQBNhNBvAAQBuAABOBNQBOBOAcB5QAbB4AGBtQACAogYAdIgEAEg");
        var mask_2_graphics_40 = new cjs.Graphics().p("ACVPdQgUgCgKgIIhOg+QhDg3AHiVQAGiVBNhPQBOhNBvAAQBvAABOBNQBOBPAcB5QAcB5AFBuQACAngYAdIgEAFg");
        var mask_2_graphics_41 = new cjs.Graphics().p("ACUPdQgUgCgKgIIhPg+QhDg3AHiWQAHiVBNhPQBOhOBvAAQBwAABOBOQBPBPAcB5QAcB6AFBuQACAogYAdIgEAEg");
        var mask_2_graphics_42 = new cjs.Graphics().p("ACTPeQgUgDgLgHIhOg/QhDg3AGiWQAHiWBOhQQBOhOBwAAQBwAABOBOQBPBQAcB6QAcB6AGBuQACAogZAdIgEAFg");
        var mask_2_graphics_43 = new cjs.Graphics().p("ACSPeQgVgCgKgIIhPg/QhDg3AHiXQAGiXBOhPQBPhOBwAAQBwAABPBOQBPBPAdB7QAcB6AFBvQACAogYAeIgEAEg");
        var mask_2_graphics_44 = new cjs.Graphics().p("ACRPfQgVgDgKgHIhPhAQhEg3AHiXQAGiYBPhQQBPhOBxAAQBwAABPBOQBQBQAcB7QAcB7AGBvQACApgZAdIgEAFg");
        var mask_2_graphics_45 = new cjs.Graphics().p("ACQPfQgVgCgKgIIhQg/QhEg4AHiYQAHiYBPhQQBPhPBxAAQBxAABPBPQBQBQAcB8QAdB7AFBwQACAogYAdIgEAFg");
        var mask_2_graphics_46 = new cjs.Graphics().p("ACPPgQgVgDgKgIIhQg/QhEg4AGiZQAHiYBPhRQBQhPBxAAQByAABPBPQBQBRAdB8QAcB8AGBwQACAogZAeIgEAFg");
        var mask_2_graphics_47 = new cjs.Graphics().p("ACOPgQgVgCgKgIIhRhAQhEg4AHiZQAGiZBQhRQBQhQByAAQBxAABQBQQBRBRAcB8QAdB8AGBxQACApgZAdIgEAFg");
        var mask_2_graphics_48 = new cjs.Graphics().p("ACNPhQgVgDgLgIIhQhAQhFg4AHiaQAHiZBPhSQBRhPByAAQByAABQBPQBRBSAdB8QAdB9AFBxQACApgZAeIgEAFg");
        var mask_2_graphics_49 = new cjs.Graphics().p("ACMPhQgVgCgLgIIhRhBQhFg4AHiaQAHibBQhRQBRhQByAAQBzAABRBQQBRBRAcB+QAdB9AGBxQACApgZAeIgEAFg");
        var mask_2_graphics_50 = new cjs.Graphics().p("ACLPiQgVgDgLgIIhRhAQhFg5AHibQAGibBRhSQBQhQB0AAQBzAABRBQQBRBSAdB+QAdB+AGByQACApgZAeIgFAFg");
        var mask_2_graphics_51 = new cjs.Graphics().p("ACKPiQgWgCgKgIIhRhBQhGg5AHicQAHibBQhSQBRhRB0AAQB0AABRBRQBRBSAdB+QAdB/AGByQACApgZAeIgEAFg");
        var mask_2_graphics_52 = new cjs.Graphics().p("ACJPiQgWgCgKgIIhShBQhGg5AHicQAHicBRhSQBRhRB0AAQB0AABSBRQBSBSAdB/QAdB+AGBzQACApgZAfIgFAEg");
        var mask_2_graphics_53 = new cjs.Graphics().p("ACIPjQgWgCgKgJIhShBQhGg5AHidQAGicBShTQBRhRB1AAQB0AABSBRQBSBTAdB/QAeB/AFBzQACAqgZAeIgEAFg");
        var mask_2_graphics_54 = new cjs.Graphics().p("ACHPjQgWgCgLgIIhShCQhGg5AHidQAHidBRhTQBShSB1AAQB1AABSBSQBSBTAeB/QAdCAAGBzQACAqgZAeIgFAFg");
        var mask_2_graphics_55 = new cjs.Graphics().p("ACFPkQgVgDgLgIIhShCQhHg5AHieQAHieBShTQBShSB1AAQB2AABSBSQBTBTAdCBQAeCAAGBzQACAqgaAfIgEAFg");
        var mask_2_graphics_56 = new cjs.Graphics().p("ACEPkQgVgCgLgIIhThCQhHg6AHieQAHifBShTQBThSB2AAQB1AABTBSQBTBTAeCBQAdCAAGB1QACAqgZAeIgFAFg");
        var mask_2_graphics_57 = new cjs.Graphics().p("ACDPlQgVgDgLgIIhThCQhHg6AHifQAHifBShUQBThSB2AAQB2AABTBSQBUBUAdCBQAeCBAGB1QACAqgaAfIgEAFg");
        var mask_2_graphics_58 = new cjs.Graphics().p("ACCPlQgVgCgLgIIhUhDQhHg6AHigQAHifBThUQBThTB2AAQB3AABTBTQBUBUAeCBQAeCCAFB1QADAqgaAfIgFAFg");
        var mask_2_graphics_59 = new cjs.Graphics().p("ACBPmQgWgDgKgIIhUhDQhIg6AHigQAHigBThVQBUhTB3AAQB3AABTBTQBUBVAeCCQAeCCAGB1QACArgaAfIgEAFg");
    
        this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:59.3,y:99.8}).wait(1).to({graphics:mask_2_graphics_1,x:59.3,y:99.7}).wait(1).to({graphics:mask_2_graphics_2,x:59.2,y:99.7}).wait(1).to({graphics:mask_2_graphics_3,x:59.2,y:99.7}).wait(1).to({graphics:mask_2_graphics_4,x:59.1,y:99.6}).wait(1).to({graphics:mask_2_graphics_5,x:59.1,y:99.6}).wait(1).to({graphics:mask_2_graphics_6,x:59,y:99.5}).wait(1).to({graphics:mask_2_graphics_7,x:59,y:99.5}).wait(1).to({graphics:mask_2_graphics_8,x:58.9,y:99.5}).wait(1).to({graphics:mask_2_graphics_9,x:58.9,y:99.4}).wait(1).to({graphics:mask_2_graphics_10,x:58.8,y:99.4}).wait(1).to({graphics:mask_2_graphics_11,x:58.7,y:99.3}).wait(1).to({graphics:mask_2_graphics_12,x:58.7,y:99.3}).wait(1).to({graphics:mask_2_graphics_13,x:58.6,y:99.3}).wait(1).to({graphics:mask_2_graphics_14,x:58.6,y:99.2}).wait(1).to({graphics:mask_2_graphics_15,x:58.5,y:99.2}).wait(1).to({graphics:mask_2_graphics_16,x:58.5,y:99.1}).wait(1).to({graphics:mask_2_graphics_17,x:58.4,y:99.1}).wait(1).to({graphics:mask_2_graphics_18,x:58.4,y:99.1}).wait(1).to({graphics:mask_2_graphics_19,x:58.3,y:99}).wait(1).to({graphics:mask_2_graphics_20,x:58.3,y:99}).wait(1).to({graphics:mask_2_graphics_21,x:58.2,y:98.9}).wait(1).to({graphics:mask_2_graphics_22,x:58.2,y:98.9}).wait(1).to({graphics:mask_2_graphics_23,x:58.1,y:98.9}).wait(1).to({graphics:mask_2_graphics_24,x:58.1,y:98.8}).wait(1).to({graphics:mask_2_graphics_25,x:58,y:98.8}).wait(1).to({graphics:mask_2_graphics_26,x:58,y:98.7}).wait(1).to({graphics:mask_2_graphics_27,x:57.9,y:98.7}).wait(1).to({graphics:mask_2_graphics_28,x:57.9,y:98.7}).wait(1).to({graphics:mask_2_graphics_29,x:57.8,y:98.6}).wait(1).to({graphics:mask_2_graphics_30,x:57.8,y:98.6}).wait(1).to({graphics:mask_2_graphics_31,x:57.7,y:98.5}).wait(1).to({graphics:mask_2_graphics_32,x:57.7,y:98.5}).wait(1).to({graphics:mask_2_graphics_33,x:57.7,y:98.6}).wait(1).to({graphics:mask_2_graphics_34,x:57.8,y:98.6}).wait(1).to({graphics:mask_2_graphics_35,x:57.8,y:98.6}).wait(1).to({graphics:mask_2_graphics_36,x:57.9,y:98.7}).wait(1).to({graphics:mask_2_graphics_37,x:58,y:98.7}).wait(1).to({graphics:mask_2_graphics_38,x:58,y:98.8}).wait(1).to({graphics:mask_2_graphics_39,x:58.1,y:98.8}).wait(1).to({graphics:mask_2_graphics_40,x:58.2,y:98.9}).wait(1).to({graphics:mask_2_graphics_41,x:58.2,y:98.9}).wait(1).to({graphics:mask_2_graphics_42,x:58.3,y:99}).wait(1).to({graphics:mask_2_graphics_43,x:58.3,y:99}).wait(1).to({graphics:mask_2_graphics_44,x:58.4,y:99.1}).wait(1).to({graphics:mask_2_graphics_45,x:58.5,y:99.1}).wait(1).to({graphics:mask_2_graphics_46,x:58.5,y:99.2}).wait(1).to({graphics:mask_2_graphics_47,x:58.6,y:99.2}).wait(1).to({graphics:mask_2_graphics_48,x:58.6,y:99.3}).wait(1).to({graphics:mask_2_graphics_49,x:58.7,y:99.3}).wait(1).to({graphics:mask_2_graphics_50,x:58.8,y:99.4}).wait(1).to({graphics:mask_2_graphics_51,x:58.8,y:99.4}).wait(1).to({graphics:mask_2_graphics_52,x:58.9,y:99.4}).wait(1).to({graphics:mask_2_graphics_53,x:59,y:99.5}).wait(1).to({graphics:mask_2_graphics_54,x:59,y:99.5}).wait(1).to({graphics:mask_2_graphics_55,x:59.1,y:99.6}).wait(1).to({graphics:mask_2_graphics_56,x:59.1,y:99.6}).wait(1).to({graphics:mask_2_graphics_57,x:59.2,y:99.7}).wait(1).to({graphics:mask_2_graphics_58,x:59.3,y:99.7}).wait(1).to({graphics:mask_2_graphics_59,x:59.3,y:99.8}).wait(1));
    
        // flash0.ai copy
        this.instance_7 = new lib.Tween29("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(85.3,173.3);
    
        var maskedShapeInstanceList = [this.instance_7];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:1.2,regY:0.3,scaleX:0.99,scaleY:0.99,rotation:-6.1,x:86.6,y:173.4,alpha:0.983},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-12.2,x:86.5,y:173.3,alpha:0.966},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-18.3,y:173.2,alpha:0.949},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-24.4,y:173.1,alpha:0.932},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-30.5,x:86.4,y:173,alpha:0.915},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-36.6,y:172.8,alpha:0.898},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-42.7,x:86.3,y:172.7,alpha:0.881},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-48.8,x:86.2,alpha:0.864},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-54.9,x:86.1,y:172.6,alpha:0.847},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-61,y:172.5,alpha:0.831},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-67.1,x:86,y:172.4,alpha:0.814},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-73.2,x:85.9,alpha:0.797},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-79.3,x:85.8,alpha:0.78},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-85.4,x:85.7,y:172.3,alpha:0.763},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-91.5,x:85.5,alpha:0.746},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-97.6,alpha:0.729},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-103.7,x:85.3,alpha:0.712},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-109.8,x:85.2,alpha:0.695},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-115.9,x:85.1,y:172.4,alpha:0.678},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-122,alpha:0.661},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-128.1,x:84.9,alpha:0.644},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-134.2,y:172.5,alpha:0.627},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-140.3,x:84.8,y:172.6,alpha:0.61},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-146.4,x:84.7,y:172.7,alpha:0.593},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-152.5,alpha:0.576},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-158.6,x:84.6,y:172.8,alpha:0.559},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-164.7,y:172.9,alpha:0.542},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-170.8,y:173,alpha:0.525},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-176.9,alpha:0.508},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-183.1,y:173.1,alpha:0.492},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-189.2,y:173.2,alpha:0.475},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-195.3,y:173.3,alpha:0.458},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-201.4,x:84.7,y:173.4,alpha:0.441},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-207.5,x:84.6,alpha:0.424},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-213.6,x:84.7,y:173.5,alpha:0.407},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-219.7,y:173.6,alpha:0.39},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-225.8,x:84.8,alpha:0.373},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-231.9,x:84.9,alpha:0.356},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-238,y:173.7,alpha:0.339},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-244.1,x:85,alpha:0.322},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-250.2,alpha:0.305},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-256.3,x:85.1,alpha:0.288},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:-262.4,y:173.8,alpha:0.271},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:-268.5,x:85.2,alpha:0.254},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-274.6,x:85.3,y:173.7,alpha:0.237},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:-280.7,alpha:0.22},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-286.8,x:85.4,alpha:0.203},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-292.9,alpha:0.186},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-299,alpha:0.169},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-305.1,x:85.5,y:173.6,alpha:0.153},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-311.2,alpha:0.136},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-317.3,alpha:0.119},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-323.4,x:85.6,y:173.5,alpha:0.102},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-329.5,alpha:0.085},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-335.6,alpha:0.068},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-341.7,y:173.4,alpha:0.051},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-347.8,alpha:0.034},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:-353.9,alpha:0.017},0).wait(1).to({regX:0,regY:0,scaleX:0.21,scaleY:0.21,rotation:-360,x:85.3,y:173.3,alpha:0},0).wait(1));
    
        // flash0.ai
        this.instance_8 = new lib.Tween29("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(85.3,173.3);
    
        var maskedShapeInstanceList = [this.instance_8];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:1.2,regY:0.3,rotation:-6.1,x:86.6,y:173.4},0).wait(1).to({rotation:-12.2,x:86.5,y:173.3},0).wait(1).to({rotation:-18.3,x:86.6,y:173.2},0).wait(1).to({rotation:-24.4,x:86.5,y:173},0).wait(1).to({rotation:-30.5,y:172.9},0).wait(1).to({rotation:-36.6,y:172.8},0).wait(1).to({rotation:-42.7,x:86.4,y:172.7},0).wait(1).to({rotation:-48.8,y:172.6},0).wait(1).to({rotation:-54.9,x:86.3,y:172.4},0).wait(1).to({rotation:-61,x:86.2},0).wait(1).to({rotation:-67.1,x:86.1,y:172.3},0).wait(1).to({rotation:-73.2,x:86,y:172.2},0).wait(1).to({rotation:-79.3,x:85.8,y:172.1},0).wait(1).to({rotation:-85.4,x:85.7},0).wait(1).to({rotation:-91.5,x:85.6},0).wait(1).to({rotation:-97.6,x:85.5,y:172},0).wait(1).to({rotation:-103.7,x:85.3,y:172.1},0).wait(1).to({rotation:-109.8,x:85.2,y:172},0).wait(1).to({rotation:-115.9,x:85.1},0).wait(1).to({rotation:-122,x:84.9,y:172.1},0).wait(1).to({rotation:-128.1,x:84.8},0).wait(1).to({rotation:-134.2,x:84.7,y:172.2},0).wait(1).to({rotation:-140.3,x:84.6,y:172.3},0).wait(1).to({rotation:-146.4,x:84.5,y:172.4},0).wait(1).to({rotation:-152.5,x:84.4,y:172.5},0).wait(1).to({rotation:-158.6,x:84.3},0).wait(1).to({rotation:-164.7,y:172.7},0).wait(1).to({rotation:-170.8,x:84.2,y:172.8},0).wait(1).to({rotation:-176.9,x:84.1,y:172.9},0).wait(1).to({rotation:-183.1,y:173},0).wait(1).to({rotation:-189.2,y:173.2},0).wait(1).to({rotation:-195.3,y:173.3},0).wait(1).to({rotation:-201.4,y:173.4},0).wait(1).to({rotation:-207.5,y:173.6},0).wait(1).to({rotation:-213.6,x:84.2,y:173.7},0).wait(1).to({rotation:-219.7,y:173.8},0).wait(1).to({rotation:-225.8,x:84.3,y:173.9},0).wait(1).to({rotation:-231.9,y:174},0).wait(1).to({rotation:-238,x:84.4,y:174.1},0).wait(1).to({rotation:-244.1,x:84.6,y:174.2},0).wait(1).to({rotation:-250.2,y:174.3},0).wait(1).to({rotation:-256.3,x:84.7,y:174.4},0).wait(1).to({rotation:-262.4,x:84.9},0).wait(1).to({rotation:-268.5,x:85,y:174.5},0).wait(1).to({rotation:-274.6,x:85.1},0).wait(1).to({rotation:-280.7,x:85.2},0).wait(1).to({rotation:-286.8,x:85.4},0).wait(1).to({rotation:-292.9,x:85.5},0).wait(1).to({rotation:-299,x:85.7},0).wait(1).to({rotation:-305.1,x:85.8,y:174.4},0).wait(1).to({rotation:-311.2,x:85.9},0).wait(1).to({rotation:-317.3,x:86,y:174.3},0).wait(1).to({rotation:-323.4,x:86.1,y:174.2},0).wait(1).to({rotation:-329.5,x:86.2,y:174.1},0).wait(1).to({rotation:-335.6,x:86.3,y:174},0).wait(1).to({rotation:-341.7,x:86.4},0).wait(1).to({rotation:-347.8,y:173.8},0).wait(1).to({rotation:-353.9,x:86.5,y:173.7},0).wait(1).to({regX:0,regY:0,rotation:-360,x:85.3,y:173.3},0).wait(1));
    
        // Layer 1
        this.instance_9 = new lib.Tween24("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(102.2,100.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-4.4,204.3,206.1);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 copy
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(28.2,136.2,1,1,-4,0,0,59.9,160.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:95.6,regY:95.1,rotation:-3.7,x:59.6,y:68.3},0).wait(1).to({rotation:-2.9,x:60.6,y:68.8},0).wait(1).to({rotation:-1.6,x:62.1,y:69.5},0).wait(1).to({rotation:0,x:63.9,y:70.5},0).wait(1).to({rotation:1.8,x:66,y:71.6},0).wait(1).to({rotation:3.8,x:68.2,y:73},0).wait(1).to({rotation:5.9,x:70.5,y:74.5},0).wait(1).to({rotation:7.9,x:72.7,y:76.1},0).wait(1).to({rotation:9.9,x:74.8,y:77.7},0).wait(1).to({rotation:11.8,x:76.6,y:79.2},0).wait(1).to({rotation:13.5,x:78.2,y:80.6},0).wait(1).to({rotation:14.8,x:79.5,y:81.8},0).wait(1).to({rotation:15.7,x:80.3,y:82.6},0).wait(1).to({regX:59.8,regY:160.9,rotation:16,x:28.2,y:136.3},0).wait(1).to({regX:95.6,regY:95.1,rotation:15.7,x:80.4,y:82.6},0).wait(1).to({rotation:14.9,x:79.6,y:81.9},0).wait(1).to({rotation:13.6,x:78.4,y:80.7},0).wait(1).to({rotation:12,x:76.8,y:79.4},0).wait(1).to({rotation:10.2,x:75,y:77.9},0).wait(1).to({rotation:8.2,x:73,y:76.3},0).wait(1).to({rotation:6.1,x:70.8,y:74.7},0).wait(1).to({rotation:4.1,x:68.5,y:73.2},0).wait(1).to({rotation:2.1,x:66.3,y:71.8},0).wait(1).to({rotation:0.2,x:64.2,y:70.6},0).wait(1).to({rotation:-1.5,x:62.3,y:69.6},0).wait(1).to({rotation:-2.8,x:60.8,y:68.8},0).wait(1).to({rotation:-3.7,x:59.7,y:68.3},0).wait(1).to({regX:59.9,regY:160.9,rotation:-4,x:28.2,y:136.2},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.1,28.2,166.2,93.4);
    
    
    (lib.giotnuoccopy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween16("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9,21);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.05,x:7.5,y:4.5},5,cjs.Ease.get(1)).to({scaleY:1.22,x:2.7,y:-49.6,alpha:1},13,cjs.Ease.get(1)).to({scaleX:0.36,scaleY:0.21,x:2.2,y:-43.2},14).to({scaleX:0.99,scaleY:0.57,x:6.3,y:-51.1},15,cjs.Ease.get(1)).to({scaleX:0.38,scaleY:0.22,x:3.2,y:-45.9},16,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:0.57,x:6.5,y:-53.1},17,cjs.Ease.get(1)).to({scaleX:0.36,scaleY:0.21,x:2.2,y:-43.2},17,cjs.Ease.get(1)).to({scaleX:0.74,scaleY:0.68,x:3.4,y:5.1,alpha:0},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:4.2,y:38.6},9).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween19("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(10.7,25.9);
        this.instance_1.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.07,x:9.7,y:9.1},5,cjs.Ease.get(1)).to({scaleY:1.31,x:6.4,y:-45.8,alpha:1},13,cjs.Ease.get(1)).to({scaleY:0.64,x:6.7,y:-41.4},14).to({rotation:30,y:-49},15).to({scaleX:1,scaleY:0.64,rotation:80.3,y:-43.6},16).to({scaleX:1,scaleY:0.64,rotation:203.1,x:6.9,y:-51},17).to({scaleX:1,scaleY:0.64,rotation:360,x:6.7,y:-41.4},17).to({scaleY:0.85,x:6.2,y:8.7,alpha:0},13,cjs.Ease.get(-1)).to({scaleY:1,x:5.9,y:43.4},9).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(4.8,15,12,22);
    
    
    (lib.cotnuoc1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween13("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(52.9,12.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.34,scaleY:1.34},14).to({scaleX:1,scaleY:1},15).wait(1).to({startPosition:0},0).to({scaleX:1.34,scaleY:1.34},14).to({scaleX:1,scaleY:1},15).wait(1));
    
        // Layer 4 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAkB7Qhmg7h/hNQgMgHg0gVQgggMgEgPQAuhAhOgxQgngYgxgMQD5gEDfgBQHBgCh3APQh6AQgYCcQgJA0AFBAQACAsAHAcQADAOAHAMIALAQQAEAHgCAFQgCAHgMAJQgCADgGAAQgmAAivhlg");
        mask.setTransform(41.4,22.3);
    
        // Layer 3
        this.instance_1 = new lib.Tween15("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(65.8,38.2);
    
        var maskedShapeInstanceList = [this.instance_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:16.8,y:-2},59).wait(1));
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A8F3FD").s().p("AAmB9Qhng8h+hNQgMgHg0gUQgagKgHgMIgDgGQAmhMhMgvQgngXgugIQD5gDDgAAQElABA0AGQAcAEgpAFQh6AQgYCdQgJA0AFA/QACAsAHAcQACAOAIAMIAKAQQAFAHgCAFQgCAHgMAJQgDADgFAAQgnAAiuhkg");
        this.shape.setTransform(41.7,22.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#54CFED").s().p("AA/gBQjgAAj6ACIgCgBQD5gDDfgBQGSgCg1ALQg1gFkkgBg");
        this.shape_1.setTransform(41.4,0.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#A8F3FD").s().p("ABmChIg8ghQhPgthYg3Ig+glQgNgIgzgUIgDgBQgWgKgHgKQgDgDAAgDIAEgMIACgGIACgLQALg5g7glQgXgOgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMQgXALgKADQhbAWgdB2QgEAOgCAPQgKA2AEA9IACASQADAbAEAUQAEASAFAJIADAGIAHALIADAFIADAGQABADgCADQgCAFgHAHIgFADQgDACgFAAQggAAh4hBg");
        this.shape_2.setTransform(41.4,22.6);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#A8F3FD").s().p("ABlCiIg8ggQhQguhWg2Ig9gmQgPgJgwgTIgDgBQgXgKgHgKQgDgDAAgCIADgNIABgGIADgLQAJg6g5gkQgXgPgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMIgBAAQgWAMgKADQhYAWgfB4IgHAcQgLA4AEA6IACASIAIAvQAEARAFAJIADAGQADAFAFAGIADAFIACAHIgBAFQgCAFgHAHIgFAEQgDACgGAAQggAAh4hBg");
        this.shape_3.setTransform(41.4,22.6);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#A8F3FD").s().p("ABlCjIg8ggQhSguhUg2Ig9gmQgQgKgugSIgDgCQgWgJgIgKIgDgFIACgMIABgGIACgLQAHg7g3gkQgWgQgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMIgBAAQgWANgKACQhVAXghB5QgEANgDAPQgNA5ADA4IACASIAKAuQAEASAFAJIADAGIAIALIADAFIACAGIgBAGQgDAFgHAGIgFAEQgDACgGAAQggAAh3hAg");
        this.shape_4.setTransform(41.4,22.6);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#54CFED").s().p("AGQAFIlSgGQjgAAj4ACIgBAAIgCgBQD5gDDfgBQGTgCg2ALIgIAAg");
        this.shape_5.setTransform(41.4,0.5);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#A8F3FD").s().p("ABnCiQgdgOgfgSQhUguhSg2Ig8gmQgSgLgsgSIgDgBQgWgKgHgJIgEgFIABgMIABgGIABgLQAGg8g1gjQgWgQgagKQgRgGgSgDQD5gDDgAAIFRAGIAHABQgVAOgKACQhTAXgjB6IgHAcQgPA7AEA1QAAALACAHIALAuQADARAGAJIADAGIAHALIAEAFIACAGIgCAGQgCAFgIAGIgFAEQgDACgFAAQggAAh4g/g");
        this.shape_6.setTransform(41.2,22.8);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#A8F3FD").s().p("ABmCjIg8gfQhVgvhQg1Ig8gnQgSgMgqgRIgEgBQgVgKgIgJIgEgFIgBgMIABgGIABgLQAEg8gygkQgWgQgagKQgRgGgSgDQD5gDDgAAIFRAGIAHABQgVAOgKADQhRAWgkB8IgHAcQgQA9ACAyQAAALADAHQAGAWAGAXQAEARAFAJIADAHIAHAKIAEAGIACAGQAAADgCADQgDAEgHAHIgFADQgDACgGAAQggAAh4g+g");
        this.shape_7.setTransform(41.2,22.8);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#A8F3FD").s().p("ABkCmIg8gfQhYgwhNg0Ig7gnQgVgOgngQIgDgBQgWgKgJgJIgDgEIgCgMIAAgGIABgLQADg9gxgjQgWgRgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgMgBIAKABQgTAPgLADQhOAWgnB9IgHAbQgSA/ADAwQAAALACAHQAIAVAGAXQAEARAFAJIADAHIAIAKIADAGIABAGIgCAGQgDAEgHAGIgFAEQgDACgGAAQggAAh3g9g");
        this.shape_8.setTransform(41.4,22.7);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#A8F3FD").s().p("ABjCnIg7gfQhagwhKg0Ig7gnQgWgPgmgPIgDgCQgVgJgJgJIgEgEQgDgGAAgFIAAgGIAAgMQABg9gugjQgWgSgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgMgBIAKABQgTAPgLAEQhMAWgoB+IgHAbQgTBAABAuQAAALADAHQAJAUAGAYQAEARAFAJIAEAGIAHALIADAFIABAGIgCAGQgDAFgHAGIgFADQgEACgFAAQgiAAh2g8g");
        this.shape_9.setTransform(41.4,22.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#A8F3FD").s().p("ABjCoIg7geQhcgxhIgzQgfgXgcgRQgXgQgkgPIgDgBQgVgJgJgJIgEgEQgEgGAAgFIgBgGQABgGgBgFQAAg/gsgjQgWgSgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgMgBIAKABQgTAQgLADQhJAWgqCAIgIAaQgUBDABArQAAAMADAFQAKATAGAZQAEARAFAJIAEAGIAHALIADAFQABAEAAACQAAADgDADQgDAFgGAGIgGADQgDACgFAAQgjAAh1g7g");
        this.shape_10.setTransform(41.4,22.7);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#A8F3FD").s().p("ABiCpIg6geQhegxhGgzQgfgXgbgRQgZgRgigOIgDgCQgVgJgJgIIgEgEQgEgGgBgFIgCgGIABgLQgDg/gqgjQgVgSgZgKQgRgHgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgRgCIAPACQgSARgLADQhHAWgsCBIgIAaQgWBEABAqQAAALADAFQALASAGAZQAEASAGAJIADAGIAHAKIADAGIABAGIgDAGQgDAFgHAFIgFAEIgJABQgiAAh2g6g");
        this.shape_11.setTransform(41.4,22.7);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#A8F3FD").s().p("ABiCqIg7gdQhggyhDgyQgfgYgagRQgbgSgggOIgDgBQgUgJgKgIIgEgEQgFgGgCgFIgBgGIAAgLQgEhAgogiQgVgTgZgKQgRgHgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgRgCIAPACQgSARgLAEQhFAWgtCCIgJAaQgXBGAAAnQAAALAEAFQAMARAGAaQAFARAFAJIADAGIAHAKIADAGIABAGQgBADgCADQgEAFgGAGIgGADIgIABQgjAAh1g5g");
        this.shape_12.setTransform(41.4,22.7);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#54CFED").s().p("AGHAEIlIgFIgCAAQjfAAj5ACIgCgBQD5gDDfgBQGTgCg2ALIgRgBg");
        this.shape_13.setTransform(41.4,0.5);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A8F3FD").s().p("ABlCpIg7gdQhigyhBgyQgfgYgZgRQgdgTgdgNIgDgBQgVgJgKgIIgEgEQgGgFgCgFIgCgGIAAgMQgFhAgmgiQgVgUgZgKQgRgHgTgEQD5gCDgAAIABAAIFIAFIAPACQgRASgLAEQhDAWgvCDIgJAaQgZBIABAkQgBAMAEAEQANAQAGAaQAFARAFAJIAEAHIAHAKIADAGIAAAGQgBADgCADIgKAKIgGADIgIABQgiAAh2g4g");
        this.shape_14.setTransform(41.1,22.9);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#A8F3FD").s().p("ABlCqQgfgOgcgPQhkgzg/gxQgegYgagRQgegUgbgMIgDgCQgUgJgKgHIgFgEQgHgFgCgFIgCgGIgBgLQgHhCgkghQgUgUgZgLQgRgGgTgFQD5gCDgAAIABAAIFIAFIAPACQgRATgLAEQhBAWgwCEIgJAZQgaBKgBAiQgBAMAFAEQAOAPAGAbQAFARAFAJIAEAGIAHAKIADAGQABADgBADQAAADgEADIgKAKIgFADIgIABQgjAAh1g3g");
        this.shape_15.setTransform(41.1,22.9);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#54CFED").s().p("AGBAEIlCgFIgCAAQjgAAj4ACIgCgBQD5gDDfgBQGTgCg2ALIgXgBg");
        this.shape_16.setTransform(41.4,0.5);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#A8F3FD").s().p("ABkCrQgegOgcgOQhmg0g8gwQgfgZgZgRQgfgVgZgMIgDgBQgUgJgLgHIgFgDQgHgGgDgFIgCgGIgBgLQgJhCghgiQgVgUgZgLQgRgGgSgFQD4gCDfAAIACAAIFDAFIATACQgPAUgMAEQg9AVgzCHIgJAYQgcBMgBAfQAAAMAEAEQAPAOAHAbQAFARAFAJIAEAHIAHAJIADAHQAAADgBACIgDAHIgKAJIgHAEIgHAAQgkAAh1g2g");
        this.shape_17.setTransform(41,22.9);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#A8F3FD").s().p("ABdCsQiShDhKg9QhKg7gogSQgngRgHgLIgDgGIgCgMQgKhEgfggQgUgVgZgLQgRgGgTgFQD6gCDgAAQElAAA0AHQAdADg7AVQg7AWg1CHQg0CHAQAMQARANAGAcQADAOAIAMIAKAQQAEAGgBAGQgDAGgLAKQgEADgKAAQgkAAh1g1g");
        this.shape_18.setTransform(41.7,22.9);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#A8F3FD").s().p("ABkCrQgegOgcgOQhmg0g8gwQgfgZgZgRQgfgVgZgMIgDgBQgUgJgLgHIgFgDQgHgGgDgEIgCgGIgBgMQgJhCghgiQgVgUgZgLQgRgGgSgFQD4gCDfAAIACAAIFDAFIATACQgPAUgMAEQg9AVgzCHIgJAYQgcBMgBAfQAAAMAEAEQAPAOAHAbQAFARAFAJIAEAHIAHAJIADAHQAAADgBACIgDAHIgKAJIgHAEIgHAAQgkAAh1g2g");
        this.shape_19.setTransform(41,22.9);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#A8F3FD").s().p("ABlCqQgfgOgcgOQhkgzg/gxQgegZgZgRQgfgUgbgMIgDgCQgUgJgKgHIgFgDQgHgGgCgFIgCgGIgBgLQgHhCgkghQgUgUgZgLQgRgGgTgFQD5gCDgAAIABAAIFIAFIAPACQgQATgMAEQhAAWgxCFIgJAYQgbBLAAAhQgBAMAFAEQAOAPAGAbQAFARAFAJIAEAGIAHAKIADAGQABADgBADQAAADgEADIgKAKIgFADIgIABQgkAAh0g3g");
        this.shape_20.setTransform(41.1,22.9);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#A8F3FD").s().p("ABlCpQgegOgdgPQhigyhBgyQgfgXgZgRQgdgUgdgNIgDgBQgUgJgKgIIgFgDQgGgGgCgFQgCgDAAgDIAAgLQgGhBglgiQgVgUgZgKQgRgHgTgEQD5gCDgAAIABAAIFIAFIAPACQgRASgLAEQhDAWgvCEIgJAZQgZBIAAAkQAAAMAEAFQANAPAGAaQAFASAFAJIAEAGIAHAKIADAGIAAAGQgBADgCADIgKAKIgGADIgIABQgjAAh1g4g");
        this.shape_21.setTransform(41.1,22.9);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#A8F3FD").s().p("ABiCqQgegOgdgPQhggyhDgyQgfgXgagSQgbgSgfgOIgDgBQgVgJgKgIIgEgEQgFgFgCgFIgBgGIgBgMQgEhAgngiQgVgTgZgKQgRgHgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgRgCIAPACQgSASgLADQhEAWguCDIgJAZQgXBHAAAmQAAAMADAFQANAQAGAaQAFARAFAJIADAHIAHAKIADAGIABAFQgBADgCAEIgKAKQgCACgEABIgJABQgiAAh1g5g");
        this.shape_22.setTransform(41.4,22.7);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#A8F3FD").s().p("ABiCpIg7gdQhegyhFgyQgfgXgbgRQgagSgggOIgDgBQgVgJgKgJIgEgEQgEgFgBgFIgCgGIAAgMQgDg/gpgjQgVgSgZgKQgRgHgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgRgCIAPACQgSARgLAEQhHAVgsCCIgIAaQgXBFABAoQAAALADAGQAMARAGAaQAEARAGAJIADAGIAHAKIADAGIABAGIgDAGIgKAKIgGAEIgIABQgiAAh2g6g");
        this.shape_23.setTransform(41.4,22.7);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#A8F3FD").s().p("ABjCoQgegOgdgQQhdgxhHgzQgfgWgbgRQgZgRgjgPIgDgBQgUgJgKgIIgEgFQgDgGgBgFIgBgGIAAgLQgBg/grgiQgWgTgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgRgCIAPACQgSAQgLAEQhJAWgrCAIgIAaQgVBDABArQAAALADAGQALASAGAZQAEARAGAJIADAHIAHAKIADAGIABAGQAAADgDADQgDAEgGAGIgGAEIgIABQgiAAh2g7g");
        this.shape_24.setTransform(41.4,22.7);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#A8F3FD").s().p("ABjCnQgdgOgegQQhbgxhJgzQgfgWgcgRQgXgQglgPIgDgBQgVgKgJgIIgEgFQgDgGAAgFIgBgGIABgLQAAg+gtgjQgWgSgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgMgBIAKABQgTAQgLADQhLAWgoB/IgIAaQgUBCACAtQAAALACAGQAKATAGAZQAEARAFAJIAEAGIAHALIADAFQABADAAADQAAADgCADQgDAFgHAGIgGADQgDACgFAAQgiAAh2g8g");
        this.shape_25.setTransform(41.4,22.7);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#A8F3FD").s().p("ABjCnIg7gfQhZgwhMg0Ig7goQgVgOgngQIgDgBQgVgJgJgJQgDgCgBgDQgCgGAAgFIAAgGIABgLQABg+gvgjQgWgRgZgKQgRgGgSgEIgBAAIgCAAQD5gFDfgBQGTgCg2ANIgMgBIAKABQgTAPgLADQhNAWgnB+IgIAbQgSBAACAvQAAALADAGQAIAVAGAXQAEASAFAJIADAGIAIAKIADAGIABAGIgCAGQgDAFgHAGIgFADQgEACgFAAQghAAh3g8g");
        this.shape_26.setTransform(41.4,22.7);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#54CFED").s().p("AGQAFIlRgGIgBAAQjgAAj4ACIgBAAIgCgBQD5gDDfgBQGTgCg2ALIgIAAg");
        this.shape_27.setTransform(41.4,0.5);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#A8F3FD").s().p("ABmCkIg8gfQhWgwhPg0Ig7gnQgUgNgogRIgEgBQgVgJgJgKIgDgEQgCgGAAgGIAAgGIACgLQADg9gygjQgVgRgagJQgRgHgSgDQD5gDDfAAIABAAIFRAGIAHABQgVAPgKADQhPAWglB8QgFAOgDAOQgRA+ACAxQAAALADAHQAIAVAFAXQAEASAFAJIADAGIAHALIAEAFIACAGIgCAGQgEAFgHAGIgEADQgEACgFAAQghAAh3g9g");
        this.shape_28.setTransform(41.2,22.8);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#A8F3FD").s().p("ABmCjIg7ggQhVgvhRg1Ig8gmQgSgMgrgRIgDgCQgWgJgIgJIgEgFIAAgMIABgGIACgLQAFg8g0gkQgWgQgagKQgRgGgSgDQD5gDDgAAIFRAGIAHABQgVAOgKADQhSAWgjB7IgHAcQgQA8ACA0QAAALADAHIAMAtQAEARAFAJIADAGIAHALIAEAFIACAHQAAADgCACQgDAFgHAHIgFADQgDACgGAAQggAAh4g+g");
        this.shape_29.setTransform(41.2,22.8);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#A8F3FD").s().p("ABnCiIg8ggQhTguhTg2Ig8gmQgSgLgsgSIgDgBQgWgKgIgJIgEgFIACgMIABgGIACgLQAFg8g0gkQgXgQgagJQgRgGgSgDQD5gDDgAAIFRAGIAHABQgVANgKADQhUAWgiB6IgHAcQgPA7AEA2QAAAKACAIIALAtQADASAGAJIADAGQADAFAEAGIAEAFIACAGQgBADgBADQgDAFgGAGIgFAEQgDACgGAAQggAAh4g/g");
        this.shape_30.setTransform(41.2,22.8);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#A8F3FD").s().p("ABlCjIg8ggQhSguhUg2Ig9gmQgQgKgugTIgDgBQgXgJgHgKQgDgDAAgDIACgMIABgGIACgLQAIg6g4gkQgWgQgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMIgBAAQgWANgKACQhWAXggB4IgHAdQgNA5AEA4QAAAKACAIIAJAuQAEARAFAJIADAHIAIALIADAFIACAGIgBAGQgCAEgIAHIgFAEQgDACgFAAQggAAh4hAg");
        this.shape_31.setTransform(41.4,22.6);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#A8F3FD").s().p("ABlCiIg8ghQhQgthWg3Ig+glQgOgJgwgTIgDgBQgXgKgHgKQgDgDAAgDIADgMIABgGIADgLQAJg6g5gkQgXgPgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMIgBAAQgWAMgKACQhYAXgfB3IgHAdQgLA3AEA7IACASIAIAvQAEARAFAJIADAGIAIALIADAFIACAGIgBAGQgCAFgHAHIgFAEQgDACgGAAQgfAAh5hBg");
        this.shape_32.setTransform(41.4,22.6);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#A8F3FD").s().p("ABmChIg8ghQhPgthYg3Ig+glQgNgIgzgUIgDgBQgWgKgHgKQgDgDAAgDIAEgMIACgGIACgLQALg5g7glQgXgOgZgJQgRgGgTgDIgBAAIgCgBQD5gEDfgBQGTgCg2AMQgXALgKADQhbAWgdB2QgEAOgCAPQgKA2AEA9QAAAKACAIQADAbAEAUQAEASAFAJIADAGIAHALIADAFIADAGQABADgCADQgCAFgHAHIgFADQgDACgFAAQggAAh4hBg");
        this.shape_33.setTransform(41.4,22.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_15},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_1}]},1).to({state:[{t:this.shape_19},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_13}]},1).to({state:[{t:this.shape_21},{t:this.shape_13}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_29},{t:this.shape_5}]},1).to({state:[{t:this.shape_30},{t:this.shape_5}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_15},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_1}]},1).to({state:[{t:this.shape_19},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_13}]},1).to({state:[{t:this.shape_21},{t:this.shape_13}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_29},{t:this.shape_5}]},1).to({state:[{t:this.shape_30},{t:this.shape_5}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,83.3,45.3);
    
    
    (lib.cotnc2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ABtBmIgohbQgFgLhAg+Ig/g8IDKBJQAKAeAFBfQAFBggIAEIgBAAQgIAAghhKg");
        mask.setTransform(15.6,17.6);
    
        // Layer 3
        this.instance = new lib.Tween11("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(64,62.4,1,1,26.2);
    
        var maskedShapeInstanceList = [this.instance];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.1,y:-29.9},59).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween9("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(16.8,17.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34,35.2);
    
    
    (lib.cot1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween6("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(78.9,13.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},34).to({scaleX:1,scaleY:1},35).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.1,-2,158.6,31.5);
    
    
    (lib.cotnuoccopy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Tween43("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(81.2,6.6,1,1,2.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,y:13.6},32).to({y:8.2},18).to({startPosition:0},15).to({rotation:2.2,y:6.6},14).wait(1));
    
        // Layer 7
        this.instance_1 = new lib.cot1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(79.6,13.1,1,1,0,0,0,78.9,15.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.11,y:19.8},32).to({y:16.3},18).to({scaleY:1,y:13.1},15).wait(15));
    
        // Layer 8
        this.instance_2 = new lib.cotnuoc1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(81.9,44,1,1,0,0,0,41.6,22.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.09,y:52},32).to({y:49},20).to({scaleY:1,y:44},13).wait(15));
    
        // Layer 9
        this.instance_3 = new lib.Symbol1_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(80.9,66.1,1,1,0,0,0,25.4,28.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:69.7},32).to({y:67.2},18).to({y:66.1},15).wait(15));
    
        // Layer 10
        this.instance_4 = new lib.cotnc2();
        this.instance_4.parent = this;
        this.instance_4.setTransform(81.4,92.8,1,1,0,0,0,16.8,17.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.88,y:95},32).to({y:93.5},18).to({scaleY:1,y:92.8},15).wait(15));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.6,-24.9,241.7,267.6);
    
    
    (lib.bacthang = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween39("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(17.5,6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({y:15.9},0).to({y:-2.9},10).to({y:6},4,cjs.Ease.get(1)).wait(100));
    
        // Layer 2
        this.instance_1 = new lib.Tween39("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-2.2,-7.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:-0.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-4.4},0).wait(1).to({y:-6.4},0).wait(1).to({y:-8.5},0).wait(1).to({y:-10.5},0).wait(1).to({y:-12.4},0).wait(1).to({y:-14},0).wait(1).to({y:-15.2},0).wait(1).to({y:-15.9},0).wait(1).to({y:-16.2},0).to({y:-7.3},7,cjs.Ease.get(-1)).wait(85));
    
        // Layer 3
        this.instance_2 = new lib.Tween39("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-18.1,-18.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({y:-11.1},0).to({y:-27.2},16,cjs.Ease.get(1)).to({y:-18.3},4,cjs.Ease.get(1)).wait(67));
    
        // Layer 4
        this.instance_3 = new lib.Tween39("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-33.2,-32.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({y:-25.2},0).to({y:-41.3},17,cjs.Ease.get(1)).to({y:-32.4},3,cjs.Ease.get(1)).wait(51));
    
        // Layer 5
        this.instance_4 = new lib.Tween39("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-49.4,-45.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({y:-38.3},0).to({y:-54.3},16,cjs.Ease.get(1)).to({y:-45.4},3,cjs.Ease.get(1)).wait(35));
    
        // Layer 6
        this.instance_5 = new lib.Tween39("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-85,-91.4,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({y:-84.2},0).to({y:-100.3},17,cjs.Ease.get(1)).to({y:-91.4},3,cjs.Ease.get(1)).wait(18));
    
        // Layer 8
        this.instance_6 = new lib.Tween39("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-71.4,-102.9,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({y:-95.8},0).to({y:-111.8},16,cjs.Ease.get(1)).to({y:-102.9},4,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-102.5,-108.9,137.6,121);
    
    
    (lib.nuoc_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance_3 = new lib.splashTween66("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-8,13.5,0.185,0.185);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-12.6,y:18.1,alpha:0},16).wait(1));
    
        // Layer 3
        this.instance_4 = new lib.splashTween65("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(11.8,9.3,0.115,0.115,30);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,x:19.5,y:13.8,alpha:0},16).wait(1));
    
        // Layer 1
        this.instance_5 = new lib.splashTween64("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.24,scaleY:1.24},8).to({scaleX:1,scaleY:1},8).wait(1));
    
        // Layer 5
        this.instance_6 = new lib.splashSymbol1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-14.3,-11.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:8.7,x:-16.8,y:-10,alpha:0.352},8).to({rotation:0,x:-14.3,y:-11.5,alpha:1},8).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.3,-21.7,52.3,36);
    
    
    (lib.dieu = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_131 = function() {
            /*kiteroot = this;
            this.stop();
            kiteTimeOut = setTimeout(kiteTimeOutComplete, Math.random() * 5000);
            function kiteTimeOutComplete() {
                clearTimeout(kiteTimeOutComplete);
                kiteroot.gotoAndPlay(0);
            }*/
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(131).call(this.frame_131).wait(1));
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhEjTQhKECDBCMQASANAUAM");
        this.shape.setTransform(17.9,22.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhIjTQhID9DBCNQASANAZAQ");
        this.shape_1.setTransform(17.6,22.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhMjUQhGD6DBCNQATAOAeAU");
        this.shape_2.setTransform(17.2,22.5);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhRjUQhDD2DACNQAUAPAjAY");
        this.shape_3.setTransform(16.9,22.4);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhVjVQhBDyDACOQAUAQAoAb");
        this.shape_4.setTransform(16.6,22.3);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhZjWQg/DvDACOQAVARAsAf");
        this.shape_5.setTransform(16.3,22.3);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhdjXQg9DsC/COQAWASAxAj");
        this.shape_6.setTransform(16,22.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhhjXQg7DoC/CPQAWASA3Am");
        this.shape_7.setTransform(15.6,22.2);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhljYQg4DkC+CQQAXASA7Ar");
        this.shape_8.setTransform(15.3,22.1);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhqjYQg1DgC9CQQAYATBAAu");
        this.shape_9.setTransform(15,22);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhujZQgzDdC9CQQAZAUBFAy");
        this.shape_10.setTransform(14.6,22);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhyjaQgxDaC9CQQAaAUBJA3");
        this.shape_11.setTransform(14.3,21.9);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ah2jbQgvDXC9CRQAaAVBOA6");
        this.shape_12.setTransform(13.9,21.9);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ah6jbQgtDSC9CSQAaAVBTA+");
        this.shape_13.setTransform(13.6,21.8);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ah+jcQgqDPC8CSQAbAWBYBC");
        this.shape_14.setTransform(13.3,21.7);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiCjcQgoDKC8CTQAcAXBcBF");
        this.shape_15.setTransform(12.9,21.7);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiGjdQgmDIC7CSQAdAYBhBJ");
        this.shape_16.setTransform(12.6,21.6);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiKjdQgkDDC7CTQAeAZBmBN");
        this.shape_17.setTransform(12.3,21.6);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiOjeQgiDAC7CTQAeAZBrBR");
        this.shape_18.setTransform(11.9,21.5);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiSjfQgfC8C6CUQAfAaBwBV");
        this.shape_19.setTransform(11.6,21.4);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiWjgQgdC5C6CVQAgAaB0BZ");
        this.shape_20.setTransform(11.2,21.4);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiajgQgbC1C6CVQAgAbB6Bc");
        this.shape_21.setTransform(10.9,21.3);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiejhQgYCxC5CVQAhAdB+Bf");
        this.shape_22.setTransform(10.5,21.3);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiijhQgWCtC5CWQAiAcCDBk");
        this.shape_23.setTransform(10.2,21.2);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AimjiQgUCpC6CXQAhAdCIBo");
        this.shape_24.setTransform(9.8,21.1);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiqjiQgSClC6CXQAiAeCNBs");
        this.shape_25.setTransform(9.5,21.1);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiujjQgPChC5CYQAjAfCRBv");
        this.shape_26.setTransform(9.1,21);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiyjkQgNCfC5CXQAjAgCXBz");
        this.shape_27.setTransform(8.8,20.9);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai2jkQgLCaC5CYQAkAgCbB3");
        this.shape_28.setTransform(8.4,20.9);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai6jlQgICXC4CZQAlAhCgB6");
        this.shape_29.setTransform(8.1,20.8);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai9jmQgGCTC3CaQAmAhClB+");
        this.shape_30.setTransform(7.7,20.8);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjBjmQgECPC3CaQAmAiCqCC");
        this.shape_31.setTransform(7.3,20.7);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjFjnQgBCLC3CbQAnAiCuCH");
        this.shape_32.setTransform(6.9,20.7);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjJjoQABCIC3CbQAoAjCzCL");
        this.shape_33.setTransform(6.6,20.6);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjMjoQADCEC2CbQAoAkC4CO");
        this.shape_34.setTransform(6.2,20.5);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjQjpQAFCBC2CcQAqAkC8CS");
        this.shape_35.setTransform(5.8,20.5);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjUjqQAIB9C1CcQAqAmDCCW");
        this.shape_36.setTransform(5.4,20.4);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjXjqQAJB5C1CdQArAmDGCZ");
        this.shape_37.setTransform(5.1,20.3);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjbjrQAMB2C1CdQArAmDLCe");
        this.shape_38.setTransform(4.7,20.3);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjfjsQAOByC1CeQAsAoDQCh");
        this.shape_39.setTransform(4.3,20.2);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjjjsQARBuC0CeQAtAoDVCl");
        this.shape_40.setTransform(4,20.2);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjmjtQASBrC0CeQAuApDZCp");
        this.shape_41.setTransform(3.6,20.1);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjqjtQAVBmC0CfQAuAqDeCs");
        this.shape_42.setTransform(3.2,20);
        this.shape_42._off = true;
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjqjtQAVBnCzCfQAvApDeCs");
        this.shape_43.setTransform(3.3,20);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjpjtQAUBnC0CfQAuApDdCs");
        this.shape_44.setTransform(3.3,20.1);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjojtQAUBoCzCfQAuApDcCr");
        this.shape_45.setTransform(3.4,20.1);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjojtQAUBpC0CfQAuApDbCq");
        this.shape_46.setTransform(3.5,20.1);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjmjtQATBqCzCfQAuApDZCp");
        this.shape_47.setTransform(3.6,20.1);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjljtQASBsC0CeQAtApDYCo");
        this.shape_48.setTransform(3.7,20.1);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjjjsQARBtC0CeQAsApDWCl");
        this.shape_49.setTransform(3.9,20.1);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjijsQARBvC0CeQAsAoDUCk");
        this.shape_50.setTransform(4.1,20.2);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjgjsQAPBxC0CeQAsAoDSCi");
        this.shape_51.setTransform(4.3,20.2);
    
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjejrQAOBzC1CdQAsAoDOCf");
        this.shape_52.setTransform(4.5,20.2);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjbjrQAMB2C1CdQArAnDLCd");
        this.shape_53.setTransform(4.7,20.3);
    
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjcjrQANB0C1CeQArAnDMCe");
        this.shape_54.setTransform(4.6,20.3);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjdjrQANBzC1CdQArAoDOCf");
        this.shape_55.setTransform(4.5,20.2);
    
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjfjrQAOByC2CdQArAoDQCg");
        this.shape_56.setTransform(4.4,20.2);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjhjsQAQBwC0CeQAsAoDTCj");
        this.shape_57.setTransform(4.1,20.2);
    
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjijsQAQBvC0CdQAtApDUCk");
        this.shape_58.setTransform(4,20.2);
    
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjjjsQAQBtC1CeQAsAoDWCm");
        this.shape_59.setTransform(3.9,20.2);
    
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjkjsQARBsC0CeQAtApDXCm");
        this.shape_60.setTransform(3.8,20.1);
    
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjljtQASBrC0CfQAtApDYCo");
        this.shape_61.setTransform(3.7,20.1);
    
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjnjtQATBqC0CfQAuApDaCp");
        this.shape_62.setTransform(3.6,20.1);
    
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjojtQAUBpC0CfQAtApDcCq");
        this.shape_63.setTransform(3.4,20.1);
    
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjpjtQAUBnC0CgQAuAoDdCs");
        this.shape_64.setTransform(3.3,20.1);
    
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjmjtQATBnCwCeQAuAsDcCq");
        this.shape_65.setTransform(3.6,20.1);
    
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjijsQASBoCsCcQAuAuDZCn");
        this.shape_66.setTransform(4,20.2);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjejrQAQBpCpCaQAtAvDXCl");
        this.shape_67.setTransform(4.4,20.2);
    
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjajrQAPBqClCZQAtAxDUCj");
        this.shape_68.setTransform(4.8,20.3);
    
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjWjqQANBrCiCXQAsAzDSCg");
        this.shape_69.setTransform(5.2,20.4);
    
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjSjpQAMBrCdCWQAtA1DPCd");
        this.shape_70.setTransform(5.6,20.4);
    
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjOjpQAKBsCaCVQAtA3DMCb");
        this.shape_71.setTransform(6,20.5);
    
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjKjoQAJBtCWCTQAsA5DKCY");
        this.shape_72.setTransform(6.4,20.6);
    
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjGjnQAHBuCSCSQAtA5DHCW");
        this.shape_73.setTransform(6.8,20.6);
    
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AjCjmQAFBuCPCRQAsA7DFCT");
        this.shape_74.setTransform(7.3,20.7);
    
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai+jmQAEBwCKCPQAtA9DCCR");
        this.shape_75.setTransform(7.7,20.7);
    
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai6jlQACBxCHCNQAsA/DACO");
        this.shape_76.setTransform(8.1,20.8);
    
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ai2jkQABBxCDCMQAsBBC9CL");
        this.shape_77.setTransform(8.5,20.9);
    
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiyjkQAABzB/CKQAsBDC6CJ");
        this.shape_78.setTransform(8.8,20.9);
    
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiujjQgCBzB8CJQArBFC4CG");
        this.shape_79.setTransform(9.2,21);
    
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiqjiQgDBzB4CIQArBGC1CE");
        this.shape_80.setTransform(9.6,21.1);
    
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AimjiQgFB1B1CGQAqBICzCC");
        this.shape_81.setTransform(10,21.1);
    
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiijhQgGB1BwCFQArBKCwB/");
        this.shape_82.setTransform(10.4,21.2);
    
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiejgQgIB2BtCDQAqBMCuB8");
        this.shape_83.setTransform(10.8,21.3);
    
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiajgQgJB4BpCBQAqBOCrB6");
        this.shape_84.setTransform(11.2,21.3);
    
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiVjfQgLB4BlCBQAqBPCpB3");
        this.shape_85.setTransform(11.6,21.4);
    
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiRjeQgNB4BiB/QAqBSCmB0");
        this.shape_86.setTransform(12,21.5);
    
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiNjeQgOB6BeB9QApBUCkBy");
        this.shape_87.setTransform(12.4,21.5);
    
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiJjdQgPB7BaB8QApBVChBv");
        this.shape_88.setTransform(12.7,21.6);
    
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiFjcQgRB7BXB6QApBXCeBt");
        this.shape_89.setTransform(13.1,21.7);
    
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AiAjcQgTB9BTB5QApBYCcBr");
        this.shape_90.setTransform(13.5,21.7);
    
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ah8jbQgUB9BPB4QApBaCZBo");
        this.shape_91.setTransform(13.8,21.8);
    
        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f().s("#0C4A63").ss(0.3,1,1).p("Ah4jaQgVB9BLB2QAoBdCXBl");
        this.shape_92.setTransform(14.2,21.9);
    
        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhzjaQgXB/BHB1QAoBeCVBj");
        this.shape_93.setTransform(14.6,21.9);
    
        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhvjZQgZCABEBzQAoBgCSBg");
        this.shape_94.setTransform(15,22);
    
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhqjYQgbCABAByQAoBhCQBe");
        this.shape_95.setTransform(15.3,22.1);
    
        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhmjYQgcCCA9BwQAnBjCNBc");
        this.shape_96.setTransform(15.7,22.1);
    
        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhhjXQgdCCA5BvQAnBlCKBZ");
        this.shape_97.setTransform(16,22.2);
    
        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhcjWQgfCCA1BuQAnBnCIBW");
        this.shape_98.setTransform(16.3,22.3);
    
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhYjWQggCEAxBsQAnBpCFBU");
        this.shape_99.setTransform(16.7,22.3);
    
        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhTjVQgiCFAuBqQAmBrCDBR");
        this.shape_100.setTransform(17,22.4);
    
        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhOjUQgjCFAqBpQAmBtCABO");
        this.shape_101.setTransform(17.3,22.5);
    
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhJjUQglCHAmBnQAmBvB+BM");
        this.shape_102.setTransform(17.6,22.5);
    
        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f().s("#0C4A63").ss(0.3,1,1).p("AhEjTQhQEaDtCN");
        this.shape_103.setTransform(17.9,22.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(42).to({_off:false},0).wait(1).to({_off:true},1).wait(23).to({_off:false},0).wait(1).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(39));
    
        // Layer 3
        this.instance = new lib.dieuTween6("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(11,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.1,y:1},0).wait(1).to({rotation:0.2,x:10.8},0).wait(1).to({rotation:0.5,x:10.6},0).wait(1).to({rotation:0.9,x:10.3},0).wait(1).to({rotation:1.4,x:9.9},0).wait(1).to({rotation:2,x:9.4},0).wait(1).to({rotation:2.6,x:8.9,y:0.9},0).wait(1).to({rotation:3.4,x:8.3},0).wait(1).to({rotation:4.3,x:7.6},0).wait(1).to({rotation:5.2,x:6.9,y:0.8},0).wait(1).to({rotation:6.2,x:6.1},0).wait(1).to({rotation:7.3,x:5.2,y:0.7},0).wait(1).to({rotation:8.4,x:4.3},0).wait(1).to({rotation:9.6,x:3.3,y:0.6},0).wait(1).to({rotation:10.9,x:2.3},0).wait(1).to({rotation:12.1,x:1.3,y:0.5},0).wait(1).to({rotation:13.5,x:0.3},0).wait(1).to({rotation:14.8,x:-0.8,y:0.4},0).wait(1).to({rotation:16.2,x:-1.9},0).wait(1).to({rotation:17.6,x:-3.1,y:0.3},0).wait(1).to({rotation:19.1,x:-4.2,y:0.2},0).wait(1).to({rotation:20.5,x:-5.3},0).wait(1).to({rotation:21.9,x:-6.5,y:0.1},0).wait(1).to({rotation:23.3,x:-7.6},0).wait(1).to({rotation:24.7,x:-8.7,y:0},0).wait(1).to({rotation:26.1,x:-9.8},0).wait(1).to({rotation:27.4,x:-10.9,y:-0.1},0).wait(1).to({rotation:28.8,x:-11.9,y:-0.2},0).wait(1).to({rotation:30,x:-12.9},0).wait(1).to({rotation:31.2,x:-13.9,y:-0.3},0).wait(1).to({rotation:32.4,x:-14.8},0).wait(1).to({rotation:33.5,x:-15.7,y:-0.4},0).wait(1).to({rotation:34.5,x:-16.5},0).wait(1).to({rotation:35.4,x:-17.2},0).wait(1).to({rotation:36.2,x:-17.9,y:-0.5},0).wait(1).to({rotation:37,x:-18.5},0).wait(1).to({rotation:37.7,x:-19},0).wait(1).to({rotation:38.2,x:-19.4,y:-0.6},0).wait(1).to({rotation:38.6,x:-19.8},0).wait(1).to({rotation:38.9,x:-20},0).wait(1).to({rotation:39.1,x:-20.2},0).wait(1).to({rotation:39.2},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:37.9,x:-20},0).wait(1).to({rotation:36.4,x:-19.8},0).wait(1).to({rotation:34.5,x:-19.4},0).wait(1).to({rotation:32.4,x:-19.1,y:-0.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.2,x:-18.7},0).wait(1).to({rotation:28.1,x:-18.3},0).wait(1).to({rotation:26,x:-17.9},0).wait(1).to({rotation:24.3,x:-17.6},0).wait(1).to({rotation:23,x:-17.4},0).wait(1).to({rotation:22.1,x:-17.2,y:-0.4},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:22.1,x:-17.3},0).wait(1).to({rotation:22.9,x:-17.5},0).wait(1).to({rotation:24.2,x:-17.7},0).wait(1).to({rotation:25.9,x:-18.1,y:-0.5},0).wait(1).to({rotation:27.7,x:-18.5},0).wait(1).to({rotation:29.8,x:-19},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.8,x:-19.4},0).wait(1).to({rotation:33.8,x:-19.9,y:-0.6},0).wait(1).to({rotation:35.5,x:-20.3},0).wait(1).to({rotation:37.1,x:-20.6},0).wait(1).to({rotation:38.2,x:-20.9},0).wait(1).to({rotation:39,x:-21,y:-0.7},0).wait(1).to({rotation:39.2},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:37.9,x:-20.8},0).wait(1).to({rotation:36.4,x:-20.4},0).wait(1).to({rotation:34.5,x:-20,y:-0.6},0).wait(1).to({rotation:32.4,x:-19.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.2,x:-19.1},0).wait(1).to({rotation:28.1,x:-18.6,y:-0.5},0).wait(1).to({rotation:26,x:-18.1},0).wait(1).to({rotation:24.3,x:-17.7},0).wait(1).to({rotation:23,x:-17.4},0).wait(1).to({rotation:22.1,x:-17.2},0).wait(1).to({rotation:21.8,y:-0.4},0).wait(1).to({rotation:22,x:-17.3},0).wait(1).to({rotation:22.7,x:-17.4},0).wait(1).to({rotation:23.6,x:-17.6},0).wait(1).to({rotation:24.9,x:-17.9},0).wait(1).to({rotation:26.3,x:-18.3,y:-0.5},0).wait(1).to({rotation:27.8,x:-18.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:29.4,x:-19},0).wait(1).to({rotation:30.8,x:-19.3},0).wait(1).to({rotation:32.2,x:-19.7},0).wait(1).to({rotation:33.3,x:-19.9,y:-0.6},0).wait(1).to({rotation:34.2,x:-20.1},0).wait(1).to({rotation:34.7,x:-20.3},0).wait(1).to({rotation:34.9,x:-20.2},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:34.7,x:-20},0).wait(1).to({rotation:34.4,x:-19.7},0).wait(1).to({rotation:33.9,x:-19.3},0).wait(1).to({rotation:33.4,x:-18.8,y:-0.5},0).wait(1).to({rotation:32.7,x:-18.3},0).wait(1).to({rotation:32,x:-17.6},0).wait(1).to({rotation:31.1,x:-16.8,y:-0.4},0).wait(1).to({rotation:30.2,x:-16},0).wait(1).to({rotation:29.2,x:-15.1,y:-0.3},0).wait(1).to({rotation:28.2,x:-14.2},0).wait(1).to({rotation:27.1,x:-13.2,y:-0.2},0).wait(1).to({rotation:25.9,x:-12.1},0).wait(1).to({rotation:24.7,x:-11,y:-0.1},0).wait(1).to({rotation:23.4,x:-9.9},0).wait(1).to({rotation:22.1,x:-8.8,y:0},0).wait(1).to({rotation:20.8,x:-7.6,y:0.1},0).wait(1).to({rotation:19.5,x:-6.4},0).wait(1).to({rotation:18.1,x:-5.2,y:0.2},0).wait(1).to({rotation:16.8,x:-4,y:0.3},0).wait(1).to({rotation:15.5,x:-2.8},0).wait(1).to({rotation:14.1,x:-1.6,y:0.4},0).wait(1).to({rotation:12.8,x:-0.4},0).wait(1).to({rotation:11.5,x:0.7,y:0.5},0).wait(1).to({rotation:10.3,x:1.8,y:0.6},0).wait(1).to({rotation:9.1,x:2.9},0).wait(1).to({rotation:7.9,x:4,y:0.7},0).wait(1).to({rotation:6.8,x:5},0).wait(1).to({rotation:5.7,x:5.9,y:0.8},0).wait(1).to({rotation:4.7,x:6.8},0).wait(1).to({rotation:3.8,x:7.6,y:0.9},0).wait(1).to({rotation:3,x:8.4},0).wait(1).to({rotation:2.2,x:9.1},0).wait(1).to({rotation:1.6,x:9.6,y:1},0).wait(1).to({rotation:1,x:10.1},0).wait(1).to({rotation:0.6,x:10.5},0).wait(1).to({rotation:0.3,x:10.8},0).wait(1).to({rotation:0.1,x:11},0).wait(1).to({rotation:0,y:1.1},0).wait(1));
    
        // flash0.ai
        this.instance_1 = new lib.dieuTween7("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-6.8,19.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.1,x:-6.9,y:19.6},0).wait(1).to({rotation:0.2,x:-7,y:19.5},0).wait(1).to({rotation:0.5,x:-7.3,y:19.4},0).wait(1).to({rotation:0.9,x:-7.7,y:19.3},0).wait(1).to({rotation:1.4,x:-8.1,y:19},0).wait(1).to({rotation:2,x:-8.7,y:18.8},0).wait(1).to({rotation:2.6,x:-9.4,y:18.5},0).wait(1).to({rotation:3.4,x:-10.1,y:18.1},0).wait(1).to({rotation:4.3,x:-10.9,y:17.8},0).wait(1).to({rotation:5.2,x:-11.8,y:17.3},0).wait(1).to({rotation:6.2,x:-12.8,y:16.9},0).wait(1).to({rotation:7.3,x:-13.8,y:16.4},0).wait(1).to({rotation:8.4,x:-14.9,y:15.9},0).wait(1).to({rotation:9.6,x:-16.1,y:15.4},0).wait(1).to({rotation:10.9,x:-17.3,y:14.8},0).wait(1).to({rotation:12.1,x:-18.5,y:14.3},0).wait(1).to({rotation:13.5,x:-19.8,y:13.7},0).wait(1).to({rotation:14.8,x:-21.1,y:13.1},0).wait(1).to({rotation:16.2,x:-22.5,y:12.4},0).wait(1).to({rotation:17.6,x:-23.8,y:11.8},0).wait(1).to({rotation:19.1,x:-25.2,y:11.2},0).wait(1).to({rotation:20.5,x:-26.6,y:10.6},0).wait(1).to({rotation:21.9,x:-28,y:9.9},0).wait(1).to({rotation:23.3,x:-29.3,y:9.3},0).wait(1).to({rotation:24.7,x:-30.7,y:8.7},0).wait(1).to({rotation:26.1,x:-32,y:8.1},0).wait(1).to({rotation:27.4,x:-33.3,y:7.5},0).wait(1).to({rotation:28.8,x:-34.6,y:6.9},0).wait(1).to({rotation:30,x:-35.8,y:6.3},0).wait(1).to({rotation:31.2,x:-36.9,y:5.8},0).wait(1).to({rotation:32.4,x:-38.1,y:5.3},0).wait(1).to({rotation:33.5,x:-39.1,y:4.8},0).wait(1).to({rotation:34.5,x:-40.1,y:4.4},0).wait(1).to({rotation:35.4,x:-41,y:3.9},0).wait(1).to({rotation:36.2,x:-41.8,y:3.6},0).wait(1).to({rotation:37,x:-42.5,y:3.2},0).wait(1).to({rotation:37.7,x:-43.1,y:2.9},0).wait(1).to({rotation:38.2,x:-43.7,y:2.7},0).wait(1).to({rotation:38.6,x:-44.1,y:2.5},0).wait(1).to({rotation:38.9,x:-44.4,y:2.4},0).wait(1).to({rotation:39.1,x:-44.6,y:2.3},0).wait(1).to({rotation:39.2},0).wait(1).to({rotation:38.9,y:2.4},0).wait(1).to({rotation:37.9,x:-44.3,y:2.8},0).wait(1).to({rotation:36.4,x:-43.8,y:3.4},0).wait(1).to({rotation:34.5,x:-43.3,y:4.2},0).wait(1).to({rotation:32.4,x:-42.7,y:5.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.2,x:-42.1,y:6},0).wait(1).to({rotation:28.1,x:-41.4,y:6.9},0).wait(1).to({rotation:26,x:-40.9,y:7.8},0).wait(1).to({rotation:24.3,x:-40.4,y:8.5},0).wait(1).to({rotation:23,x:-40,y:9},0).wait(1).to({rotation:22.1,x:-39.7,y:9.4},0).wait(1).to({rotation:21.8,x:-39.6,y:9.6},0).wait(1).to({rotation:22.1,x:-39.7,y:9.4},0).wait(1).to({rotation:22.9,x:-40,y:9.1},0).wait(1).to({rotation:24.2,x:-40.4,y:8.5},0).wait(1).to({rotation:25.9,x:-41,y:7.8},0).wait(1).to({rotation:27.7,x:-41.6,y:7},0).wait(1).to({rotation:29.8,x:-42.3,y:6.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.8,x:-42.9,y:5.3},0).wait(1).to({rotation:33.8,x:-43.6,y:4.5},0).wait(1).to({rotation:35.5,x:-44.2,y:3.7},0).wait(1).to({rotation:37.1,x:-44.7,y:3.1},0).wait(1).to({rotation:38.2,x:-45.1,y:2.6},0).wait(1).to({rotation:39,x:-45.3,y:2.3},0).wait(1).to({rotation:39.2,x:-45.4,y:2.2},0).wait(1).to({rotation:38.9,x:-45.3,y:2.3},0).wait(1).to({rotation:37.9,x:-45,y:2.7},0).wait(1).to({rotation:36.4,x:-44.5,y:3.3},0).wait(1).to({rotation:34.5,x:-43.9,y:4.1},0).wait(1).to({rotation:32.4,x:-43.2,y:5},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.2,x:-42.5,y:6},0).wait(1).to({rotation:28.1,x:-41.7,y:6.9},0).wait(1).to({rotation:26,x:-41.1,y:7.7},0).wait(1).to({rotation:24.3,x:-40.5,y:8.5},0).wait(1).to({rotation:23,x:-40,y:9},0).wait(1).to({rotation:22.1,x:-39.7,y:9.4},0).wait(1).to({rotation:21.8,x:-39.6,y:9.6},0).wait(1).to({rotation:22,x:-39.7,y:9.5},0).wait(1).to({rotation:22.7,x:-39.9,y:9.2},0).wait(1).to({rotation:23.6,x:-40.3,y:8.8},0).wait(1).to({rotation:24.9,x:-40.7,y:8.3},0).wait(1).to({rotation:26.3,x:-41.2,y:7.7},0).wait(1).to({rotation:27.8,x:-41.8,y:7.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:29.4,x:-42.3,y:6.4},0).wait(1).to({rotation:30.8,x:-42.9,y:5.8},0).wait(1).to({rotation:32.2,x:-43.4,y:5.2},0).wait(1).to({rotation:33.3,x:-43.8,y:4.8},0).wait(1).to({rotation:34.2,x:-44.1,y:4.4},0).wait(1).to({rotation:34.7,x:-44.3,y:4.2},0).wait(1).to({rotation:34.9,y:4.1},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:34.7,x:-44.1,y:4.2},0).wait(1).to({rotation:34.4,x:-43.7,y:4.3},0).wait(1).to({rotation:33.9,x:-43.2,y:4.5},0).wait(1).to({rotation:33.4,x:-42.7,y:4.8},0).wait(1).to({rotation:32.7,x:-42,y:5},0).wait(1).to({rotation:32,x:-41.2,y:5.4},0).wait(1).to({rotation:31.1,x:-40.3,y:5.7},0).wait(1).to({rotation:30.2,x:-39.3,y:6.2},0).wait(1).to({rotation:29.2,x:-38.2,y:6.6},0).wait(1).to({rotation:28.2,x:-37.1,y:7.1},0).wait(1).to({rotation:27.1,x:-35.9,y:7.6},0).wait(1).to({rotation:25.9,x:-34.6,y:8.1},0).wait(1).to({rotation:24.7,x:-33.3,y:8.6},0).wait(1).to({rotation:23.4,x:-31.9,y:9.2},0).wait(1).to({rotation:22.1,x:-30.6,y:9.8},0).wait(1).to({rotation:20.8,x:-29.1,y:10.3},0).wait(1).to({rotation:19.5,x:-27.7,y:10.9},0).wait(1).to({rotation:18.1,x:-26.3,y:11.5},0).wait(1).to({rotation:16.8,x:-24.8,y:12.1},0).wait(1).to({rotation:15.5,x:-23.4,y:12.7},0).wait(1).to({rotation:14.1,x:-22,y:13.3},0).wait(1).to({rotation:12.8,x:-20.5,y:13.9},0).wait(1).to({rotation:11.5,x:-19.2,y:14.5},0).wait(1).to({rotation:10.3,x:-17.8,y:15},0).wait(1).to({rotation:9.1,x:-16.5,y:15.6},0).wait(1).to({rotation:7.9,x:-15.2,y:16.1},0).wait(1).to({rotation:6.8,x:-14,y:16.6},0).wait(1).to({rotation:5.7,x:-12.9,y:17.1},0).wait(1).to({rotation:4.7,x:-11.8,y:17.5},0).wait(1).to({rotation:3.8,x:-10.9,y:17.9},0).wait(1).to({rotation:3,x:-10,y:18.3},0).wait(1).to({rotation:2.2,x:-9.1,y:18.6},0).wait(1).to({rotation:1.6,x:-8.4,y:18.9},0).wait(1).to({rotation:1,x:-7.9,y:19.1},0).wait(1).to({rotation:0.6,x:-7.4,y:19.3},0).wait(1).to({rotation:0.3,x:-7,y:19.5},0).wait(1).to({rotation:0.1,x:-6.8,y:19.6},0).wait(1).to({rotation:0,y:19.7},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18,-10,45.8,54.8);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol1_1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(0.1,-16.5,1,1,0,0,0,25.4,28.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));
    
        // Layer 1
        this.instance_1 = new lib.Symbol1_1("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.1,16.5,1,1,0,0,0,25.4,28.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.4,-44.5,49.8,89.8);
    
    
    (lib.thapTit_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* if (inited == undefined) {
                var over:Boolean = false;
                var inited = 1;
            }
            
            if (!over) {
                stop();
            }*/
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:73.6,regY:81.6,x:88.4,y:107.8,alpha:0.306},0).wait(1).to({y:97.8,alpha:0.556},0).wait(1).to({y:90.1,alpha:0.75},0).wait(1).to({y:84.5,alpha:0.889},0).wait(1).to({y:81.2,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:73.6,regY:81.6,x:88.4,y:80.4,alpha:0.972},0).wait(1).to({y:81.2,alpha:0.889},0).wait(1).to({y:82.6,alpha:0.75},0).wait(1).to({y:84.5,alpha:0.556},0).wait(1).to({y:87,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
    (lib.cotnuoc2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.cotnuoccopy();
        this.instance.parent = this;
        this.instance.setTransform(50.5,40.6,0.443,0.712,0,0,180,78.2,54.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.cotnuoc2, new cjs.Rectangle(-22.2,-16.2,107,190.4), null);
    
    
    (lib.cotnuoc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 11
        this.instance = new lib.mu("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(79.9,-86.4,1,1,0,0,0,102.2,100.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-84.3,startPosition:48},48).to({y:-85.5,startPosition:15},27).to({y:-86.4,startPosition:0},44).wait(1));
    
        // Layer 7
        this.instance_1 = new lib.cot1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(79.6,13.1,1,1,0,0,0,78.9,15.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.11,y:19.8},48).to({y:16.3},27).to({scaleY:1,y:13.1},23).wait(22));
    
        // Layer 8
        this.instance_2 = new lib.cotnuoc1("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(81.9,44,1,1,0,0,0,41.6,22.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.09,y:52,startPosition:48},48).to({y:49,startPosition:18},30).to({scaleY:1,y:44,startPosition:38},20).to({startPosition:0},21).wait(1));
    
        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAhDZQgsgYhYg0IAAAAQhGgpgQgHIAAAAQgmgQgPgKIAAAAIgEgFIgEgDIAAAAIgHgIQAUg7ABiSIAAAAQABhJgEg8IAAAAQBwAgBuAqIAAAAQCiA9ApApIAAAAQAOANAAAMIAAAAQAAgMgOgNIAAAAQAYATgBAQIAAAAQgDAtANCEIAAAAQAHBCAIA5IAAAAQADAYAKAPIAAAAQADAEAAADIAAAAQgBADgGAGIAAAAQgJAJgTAAIAAAAQg2AAiEhHgADREYIgEAAIAAAAIAEAAgADREYQATAAAJgJIAAAAQgJAJgTAAgADXBdQAGBCAIA5IAAAAQADAXAKAQIAAAAQADADAAACIAAAAQAAgCgDgDIAAAAQgKgQgDgXIAAAAQgIg5gGhCIAAAAQgLhpAAgzIAAAAQAAAzALBpgABADmIAAgBIAAAAIAAABgAAxDeIgBAAIAAAAIABAAgAAkDXIgLgFIAAAAIALAFg");
        mask.setTransform(80.8,66.1);
    
        // Layer 9
        this.instance_3 = new lib.Tween10("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(80.8,82.6);
    
        var maskedShapeInstanceList = [this.instance_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:50.5},119).wait(1));
    
        // Layer 10
        this.instance_4 = new lib.cotnc2("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(81.4,92.8,1,1,0,0,0,16.8,17.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.1,y:91.1,startPosition:48},48).to({scaleY:0.96,y:92,startPosition:15},27).to({scaleY:1,y:92.8,startPosition:38},23).to({startPosition:0},21).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.3,-191.7,204.3,302.1);
    
    
    (lib.hit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* if (inited == undefined) {
                var over:Boolean = false;
                var inited = 1;
            }
            
            if (!over) {
                stop();
            }*/
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
        this.tit = new lib.thapTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(150.4,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(129.4,126.6,1,1,0,0,0,90.5,116.4);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(38.9,10.2,181.1,232.8);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.giotnuoccopy();
        this.instance.parent = this;
        this.instance.setTransform(191.8,156.6,1.243,1.099,0,0,180,5.7,-6.8);
    
        this.instance_1 = new lib.Symbol8();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-128.7,91,0.7,0.7,0,0,0,41.6,44.3);
    
        this.instance_2 = new lib.bacthang();
        this.instance_2.parent = this;
        this.instance_2.setTransform(159.6,227.1,0.7,0.7,0,0,0,17.4,6);
    
        this.instance_3 = new lib.cotnuoc();
        this.instance_3.parent = this;
        this.instance_3.setTransform(147.4,169.3,0.7,0.7,0,0,0,78.3,54.9);
    
        this.instance_4 = new lib.giotnuoccopy();
        this.instance_4.parent = this;
        this.instance_4.setTransform(52.3,129,0.537,0.479,0,0,0,5.8,-6.5);
    
        this.instance_5 = new lib.giotnuoccopy();
        this.instance_5.parent = this;
        this.instance_5.setTransform(74.3,138.9,0.21,0.186,0,0,180,5.7,-6.7);
    
        this.instance_6 = new lib.giotnuoccopy();
        this.instance_6.parent = this;
        this.instance_6.setTransform(92.9,135.6,0.479,0.479,0,0,0,5.8,-6.5);
    
        this.instance_7 = new lib.giotnuoccopy();
        this.instance_7.parent = this;
        this.instance_7.setTransform(65.8,115,0.114,0.101,0,0,180,5.7,-6.5);
    
        this.instance_8 = new lib.giotnuoccopy();
        this.instance_8.parent = this;
        this.instance_8.setTransform(205.1,175,0.789,0.776,0,1.8,-0.4,5.8,-6.4);
    
        this.instance_9 = new lib.giotnuoccopy();
        this.instance_9.parent = this;
        this.instance_9.setTransform(109.8,204.3,0.634,0.561,0,0,180,5.8,-6.7);
    
        this.instance_10 = new lib.giotnuoccopy();
        this.instance_10.parent = this;
        this.instance_10.setTransform(186.7,180.6,0.479,0.479,0,0,0,5.9,-6.5);
    
        this.instance_11 = new lib.giotnuoccopy();
        this.instance_11.parent = this;
        this.instance_11.setTransform(67.9,162,0.634,0.561,0,0,180,5.8,-6.7);
    
        this.instance_12 = new lib.giotnuoccopy();
        this.instance_12.parent = this;
        this.instance_12.setTransform(64.8,142.5,0.479,0.479,0,0,180,5.8,-6.5);
    
        this.instance_13 = new lib.vongnuoccopy();
        this.instance_13.parent = this;
        this.instance_13.setTransform(102.7,215.9,0.621,0.621,0,0,0,7.4,1.6);
    
        this.instance_14 = new lib.vongnuoccopy();
        this.instance_14.parent = this;
        this.instance_14.setTransform(114.5,229.7,0.621,0.621,0,0,0,7.4,1.6);
    
        this.instance_15 = new lib.vongnuoc();
        this.instance_15.parent = this;
        this.instance_15.setTransform(94.7,212.7,0.949,0.949,0,0,0,7.5,2.5);
    
        this.instance_16 = new lib.vongnuoc();
        this.instance_16.parent = this;
        this.instance_16.setTransform(188.7,214.5,1.517,1.517,0,0,0,7.5,2.5);
    
        this.instance_17 = new lib.vongnuoc();
        this.instance_17.parent = this;
        this.instance_17.setTransform(166.9,197.4,0.55,0.55,0,0,0,7.5,2.6);
    
        this.instance_18 = new lib.vongnuoc();
        this.instance_18.parent = this;
        this.instance_18.setTransform(97.7,198.9,0.55,0.55,0,0,0,7.5,2.5);
    
        this.instance_19 = new lib.vongnuoc();
        this.instance_19.parent = this;
        this.instance_19.setTransform(64.7,208.1,0.949,1.224,0,0,0,8,2.5);
    
        this.instance_20 = new lib.vongnuoccopy();
        this.instance_20.parent = this;
        this.instance_20.setTransform(195.7,206.9,0.621,0.621,0,0,0,7.4,1.6);
    
        this.instance_21 = new lib.vongnuoccopy();
        this.instance_21.parent = this;
        this.instance_21.setTransform(208.9,214.8,1.156,1.156,0,0,0,7.4,1.6);
    
        this.instance_22 = new lib.cotnuoc2();
        this.instance_22.parent = this;
        this.instance_22.setTransform(78.4,193.5,0.7,0.7,0,0,0,46,40);
    
        this.instance_23 = new lib.nuoc();
        this.instance_23.parent = this;
        this.instance_23.setTransform(132,211.2,0.7,0.7,0,0,0,127.5,32.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-5.1,262.2,305.8), null);
    
    
    (lib.mHangtruyen_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
                //console.log('1a');
            }
            
            if (this.over == false) {
                this.stop();
                //console.log('1b');
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));
    
        // Layer 10
        this.instance = new lib.Symbol2();
        this.instance.parent = this;
        this.instance.setTransform(-73.2,-31.7,1,1,0,0,0,66.8,150.3);
        this.instance.cache(-2,-7,266,310);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(119));
    
        // Layer 6
        this.instance_1 = new lib.giotnuoccopy();
        this.instance_1.parent = this;
        this.instance_1.setTransform(51.8,-25.4,1.243,1.099,0,0,180,5.7,-6.8);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(119));
    
        // Layer 9
        this.instance_2 = new lib.Symbol8();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-268.7,-91,0.7,0.7,0,0,0,41.6,44.3);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(119));
    
        // Layer 4
        this.instance_3 = new lib.bacthang();
        this.instance_3.parent = this;
        this.instance_3.setTransform(19.6,45.1,0.7,0.7,0,0,0,17.4,6);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(119));
    
        // Layer 2
        this.instance_4 = new lib.cotnuoc();
        this.instance_4.parent = this;
        this.instance_4.setTransform(7.4,-12.7,0.7,0.7,0,0,0,78.3,54.9);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(119));
    
        // Layer 5
        this.instance_5 = new lib.giotnuoccopy();
        this.instance_5.parent = this;
        this.instance_5.setTransform(65.1,-7,0.789,0.776,0,1.8,-0.4,5.8,-6.4);
    
        this.instance_6 = new lib.giotnuoccopy();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-30.2,22.3,0.634,0.561,0,0,180,5.8,-6.7);
    
        this.instance_7 = new lib.giotnuoccopy();
        this.instance_7.parent = this;
        this.instance_7.setTransform(46.7,-1.4,0.479,0.479,0,0,0,5.9,-6.5);
    
        this.instance_8 = new lib.giotnuoccopy();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-72.1,-20,0.634,0.561,0,0,180,5.8,-6.7);
    
        this.instance_9 = new lib.giotnuoccopy();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-75.2,-39.5,0.479,0.479,0,0,180,5.8,-6.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).wait(119));
    
        // Layer 7
        this.instance_10 = new lib.vongnuoc();
        this.instance_10.parent = this;
        this.instance_10.setTransform(26.9,15.4,0.55,0.55,0,0,0,7.5,2.6);
    
        this.instance_11 = new lib.vongnuoc();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-42.3,16.9,0.55,0.55,0,0,0,7.5,2.5);
    
        this.instance_12 = new lib.vongnuoc();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-75.3,26.1,0.949,1.224,0,0,0,8,2.5);
    
        this.instance_13 = new lib.vongnuoccopy();
        this.instance_13.parent = this;
        this.instance_13.setTransform(55.7,24.9,0.621,0.621,0,0,0,7.4,1.6);
    
        this.instance_14 = new lib.vongnuoccopy();
        this.instance_14.parent = this;
        this.instance_14.setTransform(68.9,32.8,1.156,1.156,0,0,0,7.4,1.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},1).wait(119));
    
        // flash0.ai
        this.instance_15 = new lib.cotnuoc2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-61.6,11.5,0.7,0.7,0,0,0,46,40);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(119));
    
        // Layer 8
        this.instance_16 = new lib.nuoc();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-8,29.2,0.7,0.7,0,0,0,127.5,32.7);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(119));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-140,-187.1,262.2,305.8);
    
    
    // stage content:
    (lib.ht2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_ht.mp3", "voice_ht"); 
            var iconSound, iconSoundTimeOut;
            root_ht = this;
            htcv_icon_htOver = function() {cv_icon_htOver();}
            htcv_icon_htOut = function() {cv_icon_htOut();}
            
            function cv_icon_htOver() {
                root_ht.ico.over = true;
                root_ht.hit.tit.over = true;
                root_ht.hit.tit.gotoAndPlay(1);
                iconSoundTimeOut = setTimeout(iconSoundTimeOutComplete, 500);
            }
            
            function cv_icon_htOut() {
                root_ht.ico.over = false;
                root_ht.hit.tit.over = false;
                if (root_ht.hit.tit.currentFrame == 7) {
                    root_ht.hit.tit.play();
                }
                clearTimeout(iconSoundTimeOut);
            }
            
            function iconSoundTimeOutComplete() {
                clearTimeout(iconSoundTimeOut);
                
                // if (root_ht.ico.currentFrame == 0) {
                //     iconSound = createjs.Sound.play("voice_ht");
                // }
                root_ht.ico.play();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 2
        this.instance = new lib.nuoc_1();
        this.instance.parent = this;
        this.instance.setTransform(180.5,309.4,1,1,0,0,0,0.5,-2.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // hit
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(115,89,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.dieu();
        this.instance_1.parent = this;
        this.instance_1.setTransform(64.6,210.7,1,1,0,0,0,3.6,16.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // ico
        this.ico = new lib.mHangtruyen_resize();
        this.ico.parent = this;
        this.ico.setTransform(146.6,138,1,1,0,0,0,-6.4,-54);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(168,168.6,262.2,325.2);
    // library properties:
    lib.properties = {
        width: 310,
        height: 335,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/ht2017_atlas_.png", id:"ht2017_atlas_"}/*,
            {src:"sounds/voice_ht.mp3", id:"voice_ht"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_ht = lib_ht||{}, images_ht = images_ht||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_ht, images_ht, createjs, ss, AdobeAn;