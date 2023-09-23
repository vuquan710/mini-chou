(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"nsn2017_atlas_", frames: [[0,0,184,200],[131,202,103,78],[230,153,15,10],[186,0,64,66],[220,172,20,19],[186,150,42,20],[186,68,43,43],[231,68,11,12],[186,113,38,35],[230,113,17,38],[186,172,32,25],[0,202,129,88]]}
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
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap10 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap16 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap18 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap19 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap21 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap25 = function() {
        this.spriteSheet = ss["nsn2017_atlas_"];
        this.gotoAndStop(11);
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
    
    
    (lib.Tween46 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AAAAlQgQgCgIgFIgCgDQgIgKAAgQQgBgKADgWIACgGIAEADIANALQARAOAMAOIAJANQAGAJAEAJIgXACIgMgBg");
        this.shape.setTransform(-8.1,8.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2FB4E6").s().p("AguBtIgGgJQgSgdgjgYIgEgDIgDgDIABgMIABAAIgBgMIgDgKIgCgPIgBgHIABABQAFgrAegeQAigiAvAAQAxAAAhAiQAjAiAAAxQAAAvgjAjQgJAKgMAHIAAgBQgTAKgYAHIgbAGIAAAAIgeAFIgHgNg");
        this.shape_1.setTransform(0.2,-0.1);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AhTCAIgSgEIgGgEQAAgBgBABIgFgFQgJgMgBgSQAAgLAEgXIACgMIAAgLIAAgFQgCgKgBgMIAAgCIAAgFQAAgzAkgkQAjgjAzAAQAyAAAkAjQAjAkABAzQAAAygkAlQgdAcgmAGQgOAEgNACIgeAGIgNABIgOABIgUgBgAhxA0QgEAWACALQgBAQAJAKIACADQAHAFARACQAPACAVgDQgEgJgGgJIgKgNQgLgPgSgOIgNgLIgEgDgAhygKIACAPIACALIABALIgBABIgBAMIAEACIAEADQAjAZASAcIAGAJIAGAOIAfgFIAAgBIAbgGQAXgHATgJIABAAQALgHAKgKQAjgiAAgwQgBgxgigiQgigigwAAQgvABgiAiQgfAdgEArIgBgBIABAHg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.4,-12.8,24.8,25.8);
    
    
    (lib.Tween45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FDFDFE").s().p("AgXgPIACADIAGAMIgBAUIAAACgAgVgVIAtARIgPgDQgPgCgBAEQgBAFAEALg");
        this.shape.setTransform(-1.9,4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2FB4E6").s().p("AgWAeIAAgCIALgMIABACIAPADIgKANgAgaAJIABgSIgHgOIAAgCIATAmIgKALgAgHAPIgBgCIAagbIACAAIADAQIgPAQgAggghIAuARIAAABIgtgRIARAgQgEgLABgFQABgDAPABIAPADIgYAZgAAXgQIgCgBIAIgIIACAAIACASIgHAHgAgVggIAtAGIgHAIg");
        this.shape_1.setTransform(-0.9,5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AA5B9QAFgJAGgOQANgdAEgcQAOhYhHg5QgZgUgYgBQgZAAgTATQgQAQgEAXQgEAZAOASQALAOAMAJIAFAEIBLALIADAaIgrAvIgZgFIgNhIQgOgKgQgTQgQgVAEgbQAEgaASgSQASgTAagBQAcgCAeAYQBKA6gOBdQgHAugXAkgAggBOIABACIAQADIAMgMIgQgDIgBgCgAggBKIAKgLIgTgnIAAACIgCgDIAIAmIAAgCgAgRA/IAAABIARAEIAOgQIgEgRIgBAAgAgTA8IAXgaIABgBIgugRgAAMAgIACABIADAQIAHgHIgCgSIgCAAgAAIAfIAHgIIgtgGg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.4,-12.8,18.8,25.7);
    
    
    (lib.Tween44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AAAAgQgSgCgQgQQgLgKgSgXIgEgHIAHgBIAXgDQAegDAaADIAVAEQAQACAMAFQgSAVgQAOQgSAOgNACIgDAAg");
        this.shape.setTransform(0.9,15.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2FB4E6").s().p("ABBCbQgIgDgHAAQgtgKg4AJIgHABIgGACIgKgNIAAgBQgFgFgHgGIgNgIIgRgNIgIgGIADAAQgmgtAAg5QAAhCAvgvQAvgvBBAAQBBAAAwAvQAvAvAABCQAAATgEARIgBAAQgKAcgPAdIgVAiIgBABIgYAhIgTgGg");
        this.shape_1.setTransform(0,-3);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AAGDHQgUgDgRgQQgMgLgSgaIgJgPQgBABgKgLIgFgFQgMgHgMgKIgDgDIgFgFQgxgxAAhFQAAhFAxgxQAygxBEgBQBEAAAzAyQAxAxAABGQAAA3ggArQgJAQgMAQQgLATgMAPQgGAIgGAGQgQATgQANQgLAJgLAFIgKADIgBAAIgHABIgCAAgAgcB/IgXADIgHABIADAHQATAYALAKQAQAQAQACIAFAAQANgCASgOQAQgOASgWQgNgFgPgCIgVgEIgagCQgOAAgQACgAAyB6QAHAAAIADIATAGIAYghIABgBIAVgiQAPgdAKgcIABAAQAEgQAAgTQAAhDgvgvQgwgvhBAAQhBAAgvAvQgvAvAABCQAAA5AmAtIgDAAIAHAGIASANIANAIQAHAGAFAFIAAABIAKANIAGgCIAHgBQAcgEAYAAQAaAAAXAFg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.8,-19.8,33.6,39.8);
    
    
    (lib.Tween42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#292929").s().p("ABUBEQAjgPAaAQIAGAFIAAAAIgCAFIAGACIABABIACABIACAAIADAGgAi0gMIAHgDIAFABIABgCQAbgFATAPQANAIAEAMgACwgCIgDgCIgEgCIgJgDIgEAAIgFgBIgFAAIgSADIACgCIAFgEQAFgDAFgBIAFgBIAHgBIADABIADABQACAAAEACIAFAEIACAEIADADIACAEgAhVg8IgBgDIgCgDIgHgHIgXgOIADgBIAGABIAFAAIAFACIAFACIAFADIADAEIAEAGIACAFIABAEIAAAEIAAADIgBADIgFgJg");
        this.shape.setTransform(-2.1,18.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F26C36").s().p("Ag6gEQgMgWgIgVIABgBIAPAFQAaAKAaAUIAjgCQAjAAATAGIAAABQgWAXgjARQgVALgTAGQgVgRgTgkg");
        this.shape_1.setTransform(-5.6,34.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F7B5D1").s().p("ADNBPQgYgHgQgLQgQgKADgJQACgJATgCQATgCAYAHQAYAGAQALQAPALgCAJQgCAIgTACIgKAAQgPAAgSgEgAjXgiQgZgHgPgKQgPgLACgJQACgJATgBQATgDAYAHQAYAGAQALQAPAKgCAJQgCAJgTACIgIAAQgPAAgUgEg");
        this.shape_2.setTransform(-1.8,28.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D0EBFA").s().p("AhVBIQghgPgegUIgWgRQgrgagYgeQgRgUgIgWQgFgNgCgOIABAAQBcByB8AvIAIAHIACACIADgBIAEgCIAGACIAZAFQAgAGAjACQBvAHBfgcIABAAIgBAAIgQAIQgwAXhRAOQgdAFgdAAQhLAAhMgig");
        this.shape_3.setTransform(-3.4,33.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAgDHQgigDghgFIgZgFIgGgCIAigNQApgVAagcIABgCIAAgCQgCgHgKgKQgMgMgXgMIgCgBQALgrAWgtQAtheA6gSQAwgPAmAKQAkAKARAeQAUAxALAwQAJAsgBAYQgDArgXAcQgHAJgKAIQgIAHgLAGIgBAAQhMAXhXAAIgrgBgACeBkQgTACgCAJQgDAJAQAKQAQALAYAHQAYAGATgCQATgCACgIQACgJgPgLQgQgLgYgGQgTgFgPAAIgJAAgACQA7IgDgFIADABIAEAAIACAAIAEgBIAFgEQACgCABgEIgFAFIgEACIgCAAIgDAAIgDAAIgDgCIgCAAIgBAAIAAgBIAAAAIAAAAIAEgCIACgBIADgDIAAgCIACgEIAAgDIAAgEIgCAHIgEAFIgCABIgEACIgFABIAAAAIgHgFQgagQgiAOIBOAVIAAAAgACEgnIAFAAIAFABIAJADIADACIADACIAFADIgCgGIgCgDIgDgEIgFgDQgDgCgDAAIgDgCIgDAAIgGAAIgGABQgFABgFAEIgFAEIgCACIASgDIAFAAgAkrAQIgBgLIAAgSQAHhHBUhXQAcgYAagDQAVgDAWAKQA2AXABBqQAAAigGAoIgGArIAIADQgbgFgYAHQgLADgJAFIgIAFIgCACIABADIASArQATAlAVATQh7gvhdhygAkGgMQgTABgCAJQgCAIAPALQAPAKAZAHQAYAGATgCQATgCACgJQACgJgPgKQgQgKgYgGQgSgFgPAAIgKABgAjRg8IAAAEIABACIABACIABACIACABIADACIAEACIADABIABAAIACAAIgIACIBNAbQgFgMgMgJQgUgPgbAGIAAgCIAAAAIgGgHIgBgFIAAgCIAEgKIgDADIgCADIgBAEIgBACIABAEIAAACIACAEIAAAAIgBAAIAAAAIgFgBIgFgEIgCgDIgBgDIgBgEIgBgDIAAAHgAiJh1IAXAPIAHAGIACAEIACADIAEAIIABgCIAAgDIAAgEIgBgFIgCgFIgDgFIgEgEIgFgDIgFgDIgFgBIgEgBIgHAAg");
        this.shape_4.setTransform(-0.3,21.8);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#373535").s().p("AhmD7QgogQgjgXQgUgMgLgLQhig8gGhPQgFg1Ang9QAng+BWhKQBMhCBMgKQAugGAkAPIASAGQA4AXAvA6QAkAtAcA+QAYA3AOA5QAMAzgCAdQgEA7gqAiQgyAph6AVQgdAFgeAAQhEAAhHgcgAknBbQAIAWAQAUQAYAeArAbIAXARQAdAUAhAPQBqAwBngTQBRgOAwgXIARgIIAAAAQALgHAIgGQAKgIAHgJQAegfADgvQACgbgMgzQgOg3gYg3QhBiQhhgmIgMgFIgBAAIAAAAIgEgCQgjgOgrAGQhKAKhJBAQhUBJgmA7QgmA8AEAyIAAAEIABALIAAAAQABAOAGANgAhNDpIgJgHQgVgUgSglIgTgqIgBgDIACgCIAJgFQAJgGALgDQAXgHAbAGIAAAAQAKgBAIACQANADARANIACABQAXAMANANQAKAJACAHIAAACIgCACQgZAdgpAUIgiANIgFACIgCABgAiGB/QAIAWAMAWQATAkAWARQATgFAVgLQAigSAWgYIAAgBQgTgFghAAIgkABQgbgTgZgKIgQgFIgBAAgACRBoIgEgBIgCgBIgCAAIgCgBIgBgBIgGgCIACgFIAAAAIABAAIAFAAIAEgCIABgBIAEgGIACgHIABAEIgBAEIgBADIgBACIgDADIgCACIgDABIgBABIABAAIAAAAIABAAIABABIADABIADABIADAAIACgBIAFgCIAFgFQgCAFgCACIgFADIgEACgAjCADIgCAAIAAAAIgDgBIgEgBIgEgBIgBgCIgBgCIgBgBIgBgCIgBgEIABgHIAAADIABAEIABADIACACIAGAEIAEABIABABIAAAAIAAgBIgCgDIAAgDIAAgDIAAgCIACgEIACgDIACgDIgDAKIAAACIABAEIAFAGIABAAIgBACIAAACg");
        this.shape_5.setTransform(0,16.9);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#2FB4E6").s().p("AEqCiQABgYgJgtQgLgxgUgwQgRgegkgJQgmgLgwAQQg6ASgtBdQgWAugLAqQgRgNgOgDQgHgCgKABIAAAAIgIgDIAGgsQAGgpAAgiQgBhog2gYQgWgJgVACQgaAEgcAXQhUBXgHBHIAAASIgBgEQgEgzAmg7QAmg7BUhJQBKhABJgKQArgGAjAOIAEACIABAAIAAAAIANAFQBhAmBACQQAZA2ANA4QANAzgDAbQgCAvgeAfQAXgdADgqg");
        this.shape_6.setTransform(0,13.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.4,-10.9,62.8,55.8);
    
    
    (lib.Tween41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AhXAbQgygogLgMQgRgSAEgMQAEgLAUgEQARgDAzgBQAsgBA6AQQA8AQA5AdIANAGIgLAJQg8A3h0ATIgFABgAhFg2Qg+ABgKAFQAEAKA/AyIAzAqQBegPA4gqQg0gZg1gNQgygOgmAAIgDABg");
        this.shape.setTransform(-1.5,-9.3,0.453,0.453);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F2F2").s().p("AiTgrQgGgMATgEQAQgEA1gBQArgBA5ARQA6APA4AcQg8A1hvARQh4hkgFgIg");
        this.shape_1.setTransform(-1.6,-9.4,0.453,0.453);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("Ai3EIICehUQCshiBVhLQAqgkgSgvQgahCh4g8Qhyg7hcAAIgFAAQg/ACgKAEQAFAKA+AzQBXBIA1AxIANAMIlBBhIgGgTIEghXQgygthMg/QgygpgMgNQgRgRAEgMQAEgMAVgDQAQgEAzgBQBigCB6A+QCABBAdBJQAXA8g1AtQhWBMiuBjIifBVg");
        this.shape_2.setTransform(0,0,0.453,0.453);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#2FB4E6").s().p("Ag+AGIBFgUQgogigFgGQgEgFADgBQADgBAPAAQANgBARAGQASAHAPAKQAQAKAEALQAFAMgLAJQgUASgnAXIgkATg");
        this.shape_3.setTransform(-0.2,-0.1,1.972,1.972);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.8,-12.7,25.6,25.6);
    
    
    (lib.Tween40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2FB4E6").s().p("Ah4ACICRgrIgFgGIgfgbQArgJAYgVQA1AbAMAdQAIAVgTARQgnAhhNAsIhHAmgAh6gDIAAAAIABACg");
        this.shape.setTransform(-0.4,1.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AhSB3IAAAAIBHgmQBNgsAngiQATgQgIgVQgLgdg1gbQgZAVgqAIIAeAcIAGAGIiRArIAAAAIgBgEIgBgCIgBgCICCgnIgegbIgbgWIAAgBIgBAAIgBgBIgQgOIgKgJQgHgIACgFQABgFAKgCQAHgBAXgBIACAAIABAAIAKABQAhACAoASIANAGQA7AeAMAhQALAbgYAUQgnAihOAtIhJAngAhOhzQACAEAcAYIAXATQAqgHAagUQgYgLgXgGQgYgGgRAAQgdABgEACg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F1F2F2").s().p("AgeAGQgcgXgCgEQAFgCAcgBQARAAAXAGQAZAGAXALQgZATgqAHg");
        this.shape_2.setTransform(-1.8,-9.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.7,-12.7,25.5,25.6);
    
    
    (lib.Tween39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AhzBEQgcgIgFgRQgFgQAVgWQAVgUAzgeQAOgIAggQIAKgFIAEALQAUBIBcAqIAmARIg7ADQhRAEgmAAQg7AAgcgHgAgygcQgzAdgTAVQgKAMABAEQACAGAQAEQAaAHA5AAQAeAABEgDQhBgngVg7g");
        this.shape.setTransform(-9.9,2.8,0.453,0.453);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F2F2").s().p("AhcA5QhRgRCGhOQAXgNAVgLQAWBNBhArQhSAFg0AAQg7AAgXgGg");
        this.shape_1.setTransform(-10.7,2.9,0.453,0.453);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AlMCCQgfgHgFgRQgFgRAUgVQAVgVAzgfQCEhMDygtQB6gXBrgIIABAUQhjAIh6AWQj0AtiBBKQgzAfgTAUQgKAMACAEQAEAPBQABQArACBdgFIAfgBQBggFCRgcQBJgOA3gOIADgBIBfgBIABAUIhfABQjgA3iUAGIgfACQhbAEgeAAQg3AAgcgHg");
        this.shape_2.setTransform(0,0,0.453,0.453);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#2FB4E6").s().p("AhLAcQgUgEAfgSQAfgRA3gKQAdgGAWgBIALAqIgWAAQgMADgRADQghAHgXABIglABIgPgBg");
        this.shape_3.setTransform(0.2,-0.2,1.972,1.972);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.8,-6.2,33.6,12.5);
    
    
    (lib.Tween38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AgkAUQgHgCgBgDQgBgCAFgFQAIgIAYgOIAOgIQAKAaAeASIgtABQgZAAgMgDg");
        this.shape.setTransform(-11.3,3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AhyA+QgVAAgMgCIgBAAIgCgBQgOgDgCgIIgBgDIAAgBIABgCQABgFAGgGIAAgBQAKgJAXgOIAUgKIABAAQA5gbBagRQA4gLAwgDIAAADIABAGQgtADg4ALQhZAQg3AZQAKAeAnASIAGAAQArgDBBgMIA6gNIABAAIAqgBIACAAIAAAJIgrABQhmAYhCAEIgOAAIg3ACIgCAAgAh6APQgXAOgJAJQgEAFAAACQABADAHACQAMADAaAAIAtgBQgdgSgKgbg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#2FB4E6").s().p("AiEAHQA4gZBZgQQA3gLAtgDIAAgGIAUBQIgrABIgBAAIg5ANQhCAMgrADIgGAAQgmgSgLgeg");
        this.shape_2.setTransform(3.4,-0.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.7,-6.2,33.6,12.5);
    
    
    (lib.Tween37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AhMFBQgdgBgmAGIAAgIIAAgBIgCAAIgCAAIACAAQAigFAbAAQAyABAlATIgFAAIAAAEIAAAEQgggRgqgCgAkeC2IAAgFIAAgEIAAgFIgBAAQAQg5AagxQAWh0BVh9QArg/AogpIAGgLQAHgRAGgIQAMgOAQgEQAkgKBBAqQBWA5A6CdQAvCAAEBqQAAAPgBAQIgGAAIgDAAQABgPAAgPQgEhpguh+Qg4ibhVg3Qg9gpghAJQgOAEgJAMQgFAHgHAPIgIAPQgnAogqA+QhUB8gWByIgBABQgcA2gQA+IgBABg");
        this.shape.setTransform(0.9,-5.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2FB4E6").s().p("AAAFKIAGAAQglgTgygBQgaAAgjAEIiIiHQAQg/Adg1IAAgBQAWhyBUh8QArg+AngoIAIgPQAGgPAFgHQAKgMANgEQAhgJA+ApQBUA3A5CbQAuB+ADBpQABAOgCAQIADAAIiJBTIiTBOgAgBkkQgPAEgTAUQgSATgSAfQgoBGgVBOQgTBHADA6QAGBkA7AjQAoAXBCgEQBQgGAqgWQBHgngMhbQgUijgkhEQgTgkgOgTQgKgOgUgUQgYgZgfgBQgIgBgHABIgDgCIgDgBIgKACgAiNE7IABAAIAAABgAkbCuIABgDIAAAEg");
        this.shape_1.setTransform(0.6,-4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AhvDrQg8gkgFhjQgDg7AThHQAUhNAohGQASgfATgUQATgTAOgEQAMgEACACIADADQAIgCAHABQAfACAYAYQATAUALAOQANATATAlQAkBEAVCiQALBchHAmQgpAXhPAFIgVABQg1AAghgTg");
        this.shape_2.setTransform(3.4,-9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.8,-39.1,57.6,68);
    
    
    (lib.Tween36 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AjzBmQhrgggEgzQgEgtBLglQAMgGAPgGQBYglB8gKIAkgDQCSgIBqAgQBrAfAEA0QAEAyhlArQhmAsiTAIQgcABgbAAQhvAAhWgag");
        this.shape.setTransform(4.6,-1.6);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.8,-14.4,71,25.6);
    
    
    (lib.Tween35copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiRD+QgHgEgDgIQgEgIADgIIBjl5IAAABQAHgYAAgKQAAgeAfgVQAdgWArAAQAsAAAeAWQAfAVAAAeQAAAegfAWQgeAVgsAAQgmAAgbgRIhLEhQAVgRAdgSIABAAQAwggASgXIABAAQAdgpgVg1QgEgKAFgJQAEgJAJgEQAKgEAKAEQAJAFAEAJQAfBRgvA9IAAAAQgVAdg7AmIAAAAQgfATgUARIAAAAQgSAOgkAhQgGAGgJABIgCAAQgHAAgGgEg");
        this.shape.setTransform(5.3,0.5,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 4
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FF9900").ss(10,1,1).p("Agyi4QAAgeAfgVQAdgWArAAQAsAAAeAWQAfAVAAAeQAAAegfAWQgeAVgsAAQgmAAgbgRIhLEhQAVgRAdgSQABAAAAAAQAwggASgXIABAAQAdgpgVg1QgEgKAFgJQAEgJAJgEQAKgEAKAEQAJAFAEAJQAfBRgvA9IAAAAQgVAdg7AmQAAAAAAAAQgfATgUARIAAAAQgSAOgkAhQgGAGgJABQgIABgHgFQgHgEgDgIQgEgIADgIIBjl5IAAABQAHgYAAgKg");
        this.shape_1.setTransform(5.3,0.5,0.75,0.75);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF9900").s().p("AiRD+QgHgEgDgIQgEgIADgIIBjl5IAAABQAHgYAAgKQAAgeAfgVQAdgWArAAQAsAAAeAWQAfAVAAAeQAAAegfAWQgeAVgsAAQgmAAgbgRIhLEhQAVgRAdgSIABAAQAwggASgXIABAAQAdgpgVg1QgEgKAFgJQAEgJAJgEQAKgEAKAEQAJAFAEAJQAfBRgvA9IAAAAQgVAdg7AmIAAAAQgfATgUARIAAAAQgSAOgkAhQgGAGgJABIgCAAQgHAAgGgEg");
        this.shape_2.setTransform(5.3,0.5,0.75,0.75);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5,-23.8,33.8,48.7);
    
    
    (lib.Tween35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgtCxQgUgMAAgQQAAgQAUgLQASgMAbAAQAOAAAOAEQgSjyAQgVIAlgmQgYAaAYEqQADAHAAAFQAAAQgTAMQgTALgcAAQgbAAgSgLg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#66CC00").ss(10,1,1).p("AAaiVQgQAVASDyQgNgEgPAAQgaAAgTAMQgUALAAAQQAAAQAUAMQATALAaAAQAcAAATgLQATgMAAgQQAAgFgDgHQgYkqAYgag");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgtCxQgUgMAAgQQAAgQAUgLQASgMAbAAQAOAAAOAEQgSjyAQgVIAlgmQgYAaAYEqQADAHAAAFQAAAQgTAMQgTALgcAAQgbAAgSgLg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5,-23.8,23.2,47.7);
    
    
    (lib.Tween34copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiXDfQgegVAAgeQAAgeAegWQAfgVAsAAQAmAAAcAQIAKjpIABgDIAAgBIAMhoQABgHAEgEQAFgFAGgBQAGgCAGADQAGADADAFQAZArAMATIABABQAOAXAYAeIAAAAQAwA6AGAhIAAABQAPBBhVAwIgGAGIgNALQgGAFgIgCQgIgBgGgGQgEgHABgIQABgIAGgFIAJgIIACgBIAGgGIAAAAIABgBQANgPgDgPIAAgBQgDgMgNgQIAAABQgTgXgIgNIAAAAIgPgUIgLDbIAAACIABAJQAAAegeAVQgeAWgrAAQgsAAgfgWgAAph7IAsA+IABACQAGAKARAVIAAAAQAUAXAFASQAJgPgDgRIAAAAQgGgbgngvIABAAQgcgggPgaIABABIgIgNg");
        this.shape.setTransform(1.9,-2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#03CCFF").ss(10,1,1).p("AAbCsQAAAegeAVQgeAWgrAAQgsAAgfgWQgegVAAgeQAAgeAegWQAfgVAsAAQAmAAAcAQIAKjpQABgCAAgBQAAAAAAgBIAMhoQABgHAEgEQAFgFAGgBQAGgCAGADQAGADADAFQAZArAMATQAAABABAAQAOAXAYAeIAAAAQAwA6AGAhIAAABQAPBBhVAwQgDADgDADQgFAFgIAGQgGAFgIgCQgIgBgGgGQgEgHABgIQABgIAGgFQAFgEAEgEQABAAABgBQADgDADgDQAAAAAAAAQAAAAABgBQANgPgDgPQAAgBAAAAQgDgMgNgQIAAABQgTgXgIgNQAAAAAAAAQgEgGgLgOIgLDbQAAABAAABQABAEAAAFg");
        this.shape_1.setTransform(1.9,-2.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#00CCFF").s().p("AiXDfQgegVAAgeQAAgeAegWQAfgVAsAAQAmAAAcAQIAKjpIABgDIAAgBIAMhoQABgHAEgEQAFgFAGgBQAGgCAGADQAGADADAFQAZArAMATIABABQAOAXAYAeIAAAAQAwA6AGAhIAAABQAPBBhVAwIgGAGIgNALQgGAFgIgCQgIgBgGgGQgEgHABgIQABgIAGgFIAJgIIACgBIAGgGIAAAAIABgBQANgPgDgPIAAgBQgDgMgNgQIAAABQgTgXgIgNIAAAAIgPgUIgLDbIAAACIABAJQAAAegeAVQgeAWgrAAQgsAAgfgWgAAph7IAsA+IABACQAGAKARAVIAAAAQAUAXAFASQAJgPgDgRIAAAAQgGgbgngvIABAAQgcgggPgaIABABIgIgNg");
        this.shape_2.setTransform(1.9,-2.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.3,-32.2,46.5,59);
    
    
    (lib.Tween34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AicDMQgTgMAAgQQAAgQATgLQAUgMAbAAQAOAAALADQgShdACiBQAChCAFguQBEgSBrgBQBvgCgUAVQgYAZAXEsQAEAHAAAFQAAAQgUALQgTAMgbAAQgcAAgTgMQgTgLAAgQQAAgQATgMQATgLAcAAQAOAAAOAEQgSjyAQgVQgagKg6gBQg/gCgrAMQgTAaAJCAQAFBNAOBbQACAEAAAGIAAAGIgBgBQgDAPgTAJQgSAKgZAAQgbAAgUgLg");
        this.shape.setTransform(0.1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FF69B8").ss(10,1,1).p("ACIibQgQAVASDyQgOgEgOAAQgcAAgTALQgTAMAAAQQAAAQATALQATAMAcAAQAbAAATgMQAUgLAAgQQAAgFgEgHQgXksAYgZQAUgVhvACQhrABhEASQgFAugCBCQgCCBASBdQgLgDgOAAQgbAAgUAMQgTALAAAQQAAAQATAMQAUALAbAAQAZAAASgKQATgJADgPIABABIAAgGQAAgGgCgEQgOhbgFhNQgJiAATgaQArgMA/ACQA6ABAaAKg");
        this.shape_1.setTransform(0.1,0);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF69B8").s().p("AicDMQgTgMAAgQQAAgQATgLQAUgMAbAAQAOAAALADQgShdACiBQAChCAFguQBEgSBrgBQBvgCgUAVQgYAZAXEsQAEAHAAAFQAAAQgUALQgTAMgbAAQgcAAgTgMQgTgLAAgQQAAgQATgMQATgLAcAAQAOAAAOAEQgSjyAQgVQgagKg6gBQg/gCgrAMQgTAaAJCAQAFBNAOBbQACAEAAAGIAAAGIgBgBQgDAPgTAJQgSAKgZAAQgbAAgUgLg");
        this.shape_2.setTransform(0.1,0);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.5,-26.4,45.3,52.9);
    
    
    (lib.Tween26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap17();
        this.instance.parent = this;
        this.instance.setTransform(-21.1,1.3,2.203,2.203);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.1,1.3,24.3,26.5);
    
    
    (lib.Tween25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap19();
        this.instance.parent = this;
        this.instance.setTransform(-18.6,-41.8,2.203,2.203);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.6,-41.8,37.5,83.7);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap18();
        this.instance.parent = this;
        this.instance.setTransform(-42,-38.4,2.203,2.203);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42,-38.4,83.7,77.1);
    
    
    (lib.Tween22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#5285DD").s().p("AgSALQgHgFAAgGQgBgGAJgEQAHgFAKAAQALABAIAEQAHAFABAFQgBAHgHAEQgJAFgKAAQgKgBgIgEg");
        this.shape.setTransform(-0.2,-1.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2C2762").s().p("AAAAuQgVAAgQgOQgPgNAAgTQABgSAPgOQAQgNAVAAQAWAAAPAOQAPAOAAARQAAAUgQANQgPANgVAAIgBAAg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.2,-4.6,10.6,9.2);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap21();
        this.instance.parent = this;
        this.instance.setTransform(-33.5,-35.9,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-33.5,-35.9,66.4,51.9);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(-15.8,-10.3,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.8,-10.3,31.1,20.8);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCA57").s().p("AgrBHQgFgFgEgJIgBgCQgQgkASg1IABgBQASgmAvgEQAZgCAVAGQgBAMgCANQgGAfgRAeIgBACIgBABQgUAkgYAUIgEACQgHAFgGAAQgJAAgGgIg");
        this.shape.setTransform(-0.3,4.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FE8E07").s().p("AgTB1QAZgTAUgkQgLAUgNAQQgMAQgMAGIADgDgAgzgNQAQgyAagfQAZgeAUAGQAUAHACAoQACAfgJAlQACgMABgMQgVgGgZABQgvAEgTAmIAHgXg");
        this.shape_1.setTransform(0.5,-0.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.4,-12.2,12.8,24.4);
    
    
    (lib.Tween16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap10();
        this.instance.parent = this;
        this.instance.setTransform(-107,-80.8,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-107,-80.8,213.7,161.9);
    
    
    (lib.Tween15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap25();
        this.instance.parent = this;
        this.instance.setTransform(-137.3,-94.4,2.076,2.076);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-137.3,-94.4,267.8,182.7);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABvBSQgEgEgCgHQgGg2gWgjQgVgigegKQg5gQhOBdQgNACgDgHIAAgHIAmgmQAWgXATgLQAegRAjAFQAmAEAWAaQAPASAMAbQAGAPAKAiQAJAfgKAHQgDACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.6,-8.3,25.2,16.7);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABpBXQgEgDgBgIQABg2gSgmQgRgkgdgNQg2gXhZBUQgNABgCgHIABgHIAqgjQAZgUAUgJQAfgNAjAJQAlAJATAcQANATAIAdQAFAQAFAiQAGAggLAGQgDACgCAAQgDAAgCgDg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.2,-9,24.5,18);
    
    
    (lib.Tween12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABwBTQgFgZgNgeQgMgcgNgQQgSgYgegOQgdgNgeACQg8ADg6BDQgNAPgDgEQgFgHACgHQAFgNAbgZQBBg7BOAQQAbAGATANQASANASAXQAOARAKAUIAAgDQAfgPANABQAGABAAADQAEAMgZAJIgXAFQAIATAFAVIAsgFIAGAGQAEAHgKAFQgcAEgSAAg");
        this.shape.setTransform(1,-4.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F5FBFF").s().p("AhhC5QhYgvghhWQghhWAohNQAphNBbgVQBZgWBYAvQBXAuAiBXQAhBWgpBNQgoBMhbAWQgcAHgdAAQg8AAg8gggAAMgqQAeAOASAYQANAQAMAbQANAeAFAaIALAAQASAAAcgEQAKgFgEgHIgGgGIgsAFQgFgVgIgTIAXgFQAZgJgEgNQAAgEgGAAQgNgBgfAPIAAAEQgKgVgOgRQgSgWgSgNQgTgNgbgGQhOgQhBA6QgbAZgFANQgCAHAFAIQADAEANgPQA6hDA8gDIAIgBQAaAAAZAMg");
        this.shape_1.setTransform(1.9,-5.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#D9F0FC").s().p("AiAD1Qhmg2gihuQgihsA1hmQA2hlBugiQBtghBlA2QBmA2AiBtQAiBtg1BlQg2BlhuAiQgqANgoAAQhCAAg+ghgAhCjqQhbAVgoBNQgpBNAiBWQAhBXBXAuQBXAvBbgWQBagVAphNQAohNghhWQghhXhYguQg8ggg8AAQgcAAgdAHg");
        this.shape_2.setTransform(0.6,-3.1);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#C0E3FF").s().p("AiQESQhyg9gmh7IgHgXQgahtA2hnQA9hxB7gmQB6glByA8QByA9AmB6QAgBlgkBfQgHAUgLAUQg8Bxh7AmQgvAOgtAAQhKAAhGglgAhMkXQhuAig1BlQg2BmAiBsQAiBuBmA2QBmA1BtghQBugiA1hlQA2hlgihtQgihthmg2Qg/gihCAAQgnAAgrANg");
        this.shape_3.setTransform(0,-1.6);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#5F9ADD").s().p("AiHBnQhxg8glh5QgJgegDgdIAGAXQAmB6ByA9QByA8B7glQB7gmA8hwQAKgUAHgTQgJAjgQAkQgzBrh6AoQgzARgwAAQhGAAhCgjg");
        this.shape_4.setTransform(-0.5,18.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.2,-32.7,62.5,65.4);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ACcBOIgCgKQgUhWgzgfQgagQghgBQgggCgbAMQgWAKgVASQgYAUgSATQgKgEgngZQgGgJAHgEQAEgCAFgBIAjAZQAOgQAQgNIgRgPQgTgUAKgKIAIAAQALAFAVAcIgDAEQATgOAVgKQAbgMAVgCQAXgCAbAHQBNAXAeBQQANAjgDAPQgBAIgIADIgBAAQgDAAgDgHg");
        this.shape.setTransform(-1.3,-3.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F5FBFF").s().p("AioCUQhGg+AAhWQAAhWBGg9QBGg9BiAAQBkAABGA9QBFA9ABBWQgBBWhFA+QhGA+hkgBQhiABhGg+gAAJgqQAhACAbAPQAzAeATBXIADAKQADAJAEgCQAHgDABgIQADgOgNgkQgdhQhOgWQgbgIgWACQgWACgbANQgVAKgTANIADgEQgVgcgLgFIgIAAQgKAKATAVIARAPQgQANgNAPIgkgYQgFAAgDACQgIAEAHAIQAmAbAKADQASgUAZgTQAUgSAWgKQAYgKAbAAIAIAAg");
        this.shape_1.setTransform(0.2,-5.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#D9F0FC").s().p("AjEDDQhRhQAAhzQAAhxBRhSQBShRByAAQBzAABRBRQBSBSAABxQAABzhSBQQhRBRhzAAQhyAAhShRgAioiwQhGA+AABXQAABVBGA+QBGA9BiAAQBkAABGg9QBFg+ABhVQgBhXhFg+QhGg9hkAAQhiAAhGA9g");
        this.shape_2.setTransform(0.2,-2.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#C0E3FF").s().p("AjbDbQgsgrgXg1QgYg4AAhDQAAh/BbhbQBbhbCAAAQCBAABbBbQBcBbgBB/QAABjg2BNQgQAWgVAVQhbBbiBAAQiAAAhbhbgAjCjSQhSBRABBzQgBBxBSBRQBRBRBzAAQByAABShRQBShRAAhxQAAhzhShRQhShRhyAAQhzAAhRBRg");
        this.shape_3.setTransform(0,-1.4);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#5F9ADD").s().p("AjDAXQg5g4gThJQAXA0AsAsQBbBZCAAAQCBAABbhZQAVgVAQgXQgVAqgjAjQhWBUh4AAQh4AAhVhUg");
        this.shape_4.setTransform(-1.5,21.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.1,-32.4,62.3,64.8);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#81C1FA").s().p("Ag2BTQgfgVgIhQIAAgvIgBgdIC8BvIgEAJQgXAmgnATQgYAMgUAAQgUAAgSgMg");
        this.shape.setTransform(0.3,5.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#5EAAEF").s().p("AgoBbQgUgKgQgXIgMgVQgPgbgDg4IgBgzIARAJIABAvQAHBPAfAWQAkAYAugYQAngUAXglIAPAHQhBBYg1AAQgPAAgPgHg");
        this.shape_1.setTransform(0,7.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.8,-4.4,21.6,21.7);
    
    
    (lib.Tween8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap14();
        this.instance.parent = this;
        this.instance.setTransform(-21,-19.9,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21,-19.9,41.5,39.4);
    
    
    (lib.Tween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(-43.6,-20.9,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43.6,-20.9,87.2,41.5);
    
    
    (lib.sprite7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(-0.3,0,2.075,2.075);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.sprite7, new cjs.Rectangle(-0.3,0,132.8,137), null);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(-7.9,53.7,0.55,0.55);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 18
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#31C5FF").ss(10,1,1).p("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");
        this.shape_1.setTransform(-7.9,53.7,0.55,0.55);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
        // Layer 19
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#008AC1").ss(10,1,1).p("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");
        this.shape_2.setTransform(-7.5,50.1,0.55,0.55,0,0,0,-0.1,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-134.5,5,345.5,89.2);
    
    
    (lib.ClipGroup = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("AqQPOQgyg2g8gsIipAjIg6hRIhdgEQgRgngbgeQg6hEhEg8QAAgugFguQgGg1gLg0IAmguIDYCWQCBgmB5g4QA3gZAxgnQAYgTAbgQIBZDsQB/g6CBg2QCkhECog4IAygPIAZA2IGoBwIgqk1IBYiDIBKAnIBBB/IDjB7IANAQIDzhkIA2A9Ih0DNQg8Afg3AmQgcAUgcARQiSBYilgUIBgElIhgA6QiAhEiFgQQmIgomMAMIjNCSQgkg8gvgygAhQAhQhGgyhAg7Ih8AMQg/geg9ghQg7gegugsQhJhEhKhBQg/g3g7g5QhOhMgwhiQgPgggNghIBCgkQgqhagdhfQgSg4gDg8IAkg9IBLAAIFcDMQBWg6BcgxQBFgmBLgIQB9gHB4AkQBMAWA+A1QBNBCBGBMQBYhGBgg6QCBhNCFhHIBagGIAQCXIhhDIIAxBNIhACfQhnBHhcBTQhEA8hCA+Qg7A3hIAmQgwAagyAWIgSgBIhcgHIAfCZIhPAUQgygggxgkg");
        this.shape.setTransform(127.9,108.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,255.8,216.9), null);
    
    
    (lib.Tween43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AAAAdQgCAAgFgCIgFgBIgEgDIgDgDIgDgDIgFgIQgDgFgBgKIAEAGIAEAIIAFAFIAGAEIAHACIAGABIALgBIABgBIABAAIABAAIgBgBIgHgGIgCgDIgEgIIgBgEIAAgIQAAgEACgFIADgHIgBAQIACAGIABAEIAGAIIAMAIIAFABIABABIABAJIgOACIgCABIgHABIgEABIgFgBg");
        this.shape.setTransform(-20,15.8,0.453,0.453,21.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#292929").s().p("AAnAOIgHgGIgIgEIgSgHIgTgFIghgFIgGgCIAFgCQAIgEAGgCIAKgCIALgBQAGAAAGABIAMADIAMAFIAKAHIAJAJIAFAIIADAIIACAGIAAAGIgOgNg");
        this.shape_1.setTransform(-12.1,11.6,0.453,0.453,21.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#292929").s().p("AAmgPQAgAIAUATIizAIQA/g0BAARg");
        this.shape_2.setTransform(-16.2,18.2,0.453,0.453,21.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#373535").s().p("AgOAdIgCgBIgOgBIAAgKIABAAIACgBIAKgFIAEgFIACgCIADgDIABgDIABgDIABgIIAAgIIgBgIIADAHIADAJIAAAJIAAAEIgEAHIgCAFIgGAGIgBABIABAAIAAAAIACABIAEAAQADABADgBIAHgCIAEgBIACgCIAEgCIAHgIIAGgNQABAJgDAGIgEAIIgDAEIgHAFIgEACIgIADIgIABg");
        this.shape_3.setTransform(14.5,26,0.453,0.453,21.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#292929").s().p("Ag3ATQADgHAFgGQAHgKAJgGIALgHIANgFIAHgCIAGAAIAOAAIAMAEIAKAFIAHAFIAJAJIgMgCIgJgCIgJgBIgUABIgKACIgKADIgKAEIgRAKIgSALIACgGg");
        this.shape_4.setTransform(13.5,18,0.453,0.453,21.7);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#292929").s().p("AAjgVQAhAHAVAQIixAWQA7g5BAAMg");
        this.shape_5.setTransform(10.5,26.1,0.453,0.453,21.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F7B5D1").s().p("AhZAuQgogJgCgUQgDgTAlgTQAlgUA3gGQA1gHApAJQApAJACAUQADATglATQglAUg3AGQgXADgVAAQgbAAgYgFg");
        this.shape_6.setTransform(-22.9,23,0.453,0.453,21.7);
    
        this.instance = new lib.ClipGroup();
        this.instance.parent = this;
        this.instance.setTransform(-17.7,36,0.453,0.453,21.7);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#373535").s().p("AiMAtIgvADIA6gxQBEg0AvgHQAtgHBTAgQAqAQAgASQgtAAhRAfIhHAgQhGgSg9ABg");
        this.shape_7.setTransform(-5.2,30.6,0.453,0.453,21.7);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#373535").s().p("AAaCJQhEgUhShIIhJhHIgEgGIADgFIAMgRQAPgUAUgPQBBgwBhAAIACAAQBhAAA1AWQAcAMAJANIACAEIgCAFQgdBPhFBKIhDA/IgEADgAh8hSQgjAUgSAcQAjAmAqAjQBGA7A5ASQAigcAigmQA6hBAahDQgNgMgegJQgvgOhMAAIgCAAQhOAAg5Ajg");
        this.shape_8.setTransform(-6.6,34.1,0.453,0.453,21.7);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F26C36").s().p("Ah5AjIhFhDIAKgPQAPgRATgPQBAgwBeAAQBgABAzAVQAZAKAHALQgdBOhGBKIhAA8QhCgUhThJg");
        this.shape_9.setTransform(-6.6,34,0.453,0.453,21.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F7B5D1").s().p("AhYAuQgpgJgDgUQgCgTAlgUQAlgSA3gIQA2gHApAKQAoAJADAVQACASglATQglAUg3AGQgWADgVAAQgcAAgXgFg");
        this.shape_10.setTransform(19.3,34.4,0.453,0.453,21.7);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#D0EBFA").s().p("AhhChQhQgEhMgQIg8gQQjlgqhLiIQE3CvE+gWIA4gKQBHgPBJgYQDrhMCriIQhMBji5BxQi1BvjjAAIgugBg");
        this.shape_11.setTransform(-5.2,35.9,0.453,0.453,21.7);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AhsHQQhQgEhMgQIg8gQQkTgyg2i8QgsiXBkj3QAnhHAzgcQAngWA2ABQCCADBYDZQAcBFAWBYQAMAvAKAvICDAAQgLhiAHhyQASjlBnhVQBWhGBWgKQBRgJA8AvQBRBUA+BcQA4BSAQA0QAmB1g3BhQhDB3jfCIQi0BwjkAAIgtgCg");
        this.shape_12.setTransform(0.4,23.4,0.453,0.453,21.7);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#373535").s().p("Aj9JNQgxgJghgLQj5gthNicQg1hrAdidQAeicBzjeQBmjGCUhTQBagyBXAAIAqgBQCFAACPBRQBuA/BrBoQBhBeBKBqQBEBgATA9QAnB7g5BnQhGB9joCOQi8BzjvAAQheAAhcgSgAkaoZQiOBQhjDAQhwDZgdCYQgeCZAzBmQBICTDwArIABABIBMATQBdASBeAAQDqAAC2hwQDgiJBFh3QA4higlh1QgTg6hCheQhKhohehcQj6jyjlAAQgPAAgPABIgBAAIgBAAIgKAAQhTAAhWAwg");
        this.shape_13.setTransform(2.7,17.5,0.453,0.453,21.7);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#2FB4E6").s().p("AgZCJQgTgBgRgDIgPgEQhMgOgEg7QgDgsAmhJQAagyAngSQATgIAOABQA3gEA9A6QAXAVASAaQAQAWAEANQAJAcgNAXQgQAcg0AgQgrAag1AAIgLAAg");
        this.shape_14.setTransform(3,17.4,1.971,1.971,21.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.4,-10.9,62.8,55.8);
    
    
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 11
        this.instance = new lib.Tween17("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-38.6,69.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.54,scaleY:0.54,rotation:-15,x:-29.7,y:78.3},9).to({scaleX:1,scaleY:1,rotation:0,x:-38.6,y:69.5},10).wait(1));
    
        // Layer 5
        this.instance_1 = new lib.Tween10("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-40.5,70);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-28,y:75.3},9).to({x:-40.5,y:70},10).wait(1));
    
        // Layer 6
        this.instance_2 = new lib.Tween11("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-27.8,-39);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15,x:-34.8,y:-31.2},9).to({rotation:0,x:-27.8,y:-39},10).wait(1));
    
        // Layer 7
        this.instance_3 = new lib.Tween12("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(37.3,-16.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-15,x:35.5,y:-27.3},9).to({rotation:0,x:37.3,y:-16.3},10).wait(1));
    
        // Layer 8
        this.instance_4 = new lib.Tween13("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(49.8,-55.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15,x:38.8,y:-67.4},9).to({rotation:0,x:49.8,y:-55.7},10).wait(1));
    
        // Layer 9
        this.instance_5 = new lib.Tween14("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-15.9,-77.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-15,x:-30.4,y:-70.2},9).to({rotation:0,x:-15.9,y:-77.5},10).wait(1));
    
        // Layer 1
        this.instance_6 = new lib.Tween15("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-0.8,15.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.9},9).to({rotation:0},10).wait(1));
    
        // Layer 10
        this.instance_7 = new lib.Tween16("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(0,-7.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-12.9,x:-3},7).to({scaleX:1.02,scaleY:1.02,rotation:-12.8},2).to({scaleX:1,scaleY:1,rotation:-12.9},2).to({rotation:0,x:0},8).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-138.2,-88.4,267.8,192);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween6("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(0.1,0,1,1,0,0,0,-43.6,-21.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0.3,87.2,41.5);
    
    
    (lib.no = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween18("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(41.3,46.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:33.3,y:41.3},9).to({rotation:0,x:41.3,y:46.3},10).wait(1));
    
        // Layer 5
        this.instance_1 = new lib.Tween22("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(71.3,98.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:74.3,y:113.5},9).to({x:71.3,y:98.8},10).wait(1));
    
        // Layer 3
        this.instance_2 = new lib.Tween19("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(45,69);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15,x:34.9,y:71.8},9).to({rotation:0,x:45,y:69},10).wait(1));
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2051B8").s().p("ADOGVQkQhri3kJQg7hUgphbQgehCgCgQQgKh+B2guQBlgnChAaQCTAZBoA8QBsA/geA4Qg0BiAgCEQASBLA1CDQAjCJg4AmQgVAOgiAAQgkAAgzgPg");
        this.shape.setTransform(38.3,42);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2051B8").s().p("ADKGYQgagJgZgLQjxhtihj0IgHgMQg0hRgkhUQgbhAgCgUQgKh9B0guIADgBQBigmCdAYIAGABQCOAYBlA4IAJAFQBhA6gQAyQgBAGgDAGQg1BiAbCEIAFAWQAQBMArBtIAKAtQAQBjgsAgQgPAKgWAEQgJABgMAAQgjAAgxgOg");
        this.shape_1.setTransform(37.7,42.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#2051B8").s().p("ADHGbQgagJgagLQj0hsiaj3IgIgNQgyhRghhWQgZg9gBgYQgLh9B0guIADgBQBjglCdAYIAGABQCOAYBlA4IAJAFQBhA6gRAzIgFAMQgzBiAVCDIAEAWQANBRAnBqIAKAsQASBjgrAhQgOALgWAEQgLACgNAAQgiAAgvgNg");
        this.shape_2.setTransform(37,42.5);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#2051B8").s().p("ADDGfQgagJgagKQj3hsiVj7IgHgMQgwhUgehVQgXg8gBgaIAAgBQgLh9B1guIADgBQBjglCcAYIAGABQCPAYBlA5IAJAFQBiA6gTAzIgFAMQg0BiAQCDIADAXQAKBUAkBnIAKAtQATBigpAiQgOAMgWAEQgMADgPAAQghAAgtgMg");
        this.shape_3.setTransform(36.4,42.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#2051B8").s().p("AC/GiQgZgIgbgLQj6hriPj+IgHgNQguhUgchWQgUg6gBgeIAAAAQgLh9B1gvIADgBQBjglCcAZIAHABQCPAYBlA5IAJAFQBiA7gVAzIgFAMQgzBiALCDIACAWQAGBZAhBjIAKAtQAUBigoAkQgNAMgVAFQgNADgRAAQggAAgsgLg");
        this.shape_4.setTransform(35.8,42.9);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#2051B8").s().p("AC6GlQgagHgbgKQj9hriJkBIgHgNQgshWgZhXQgSg4gBghIAAAAQgKh+B1guIADgBQBjglCdAZIAGABQCQAYBlA6IAJAFQBhA7gWAzIgFAMQgzBiAFCCIABAXQADBeAeBgIALAsQAVBigmAkQgOAOgVAFQgNADgRAAQgfAAgsgKg");
        this.shape_5.setTransform(35.4,43.1);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#2051B8").s().p("ACwGoQgZgHgdgKQj/hpiDkFIgHgOQgqhXgWhXQgQg2gBgkIAAgBQgKh9B1guIADgBQBjgmCdAZIAHABQCQAZBlA6IAJAFQBhA7gXA0IgGAMQgyBiAACCIAAAXQgBBiAbBcIALAtQAWBiglAlQgNAOgUAGQgPAEgTAAQgeAAgqgKg");
        this.shape_6.setTransform(35.4,43.4);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#2051B8").s().p("ACmGrQgZgGgdgKQkChph9kIIgHgOQgohZgUhXQgNg0gBgnIAAgBQgKh+B2guIADgBQBjglCdAZIAHABQCQAZBlA6IAJAFQBiA8gaA0IgFALQgzBigFCCIgBAYQgEBmAYBZQAFAYAGAVQAXBhgjAmQgNAPgUAGQgQAFgUAAQgeAAgogJg");
        this.shape_7.setTransform(35.4,43.6);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#2051B8").s().p("ACcGuQgZgFgdgKQkGhoh2kLIgHgPQgmhagRhYQgLgygBgqIAAgBQgKh+B2guIADgBQBjglCeAZIAHABQCQAZBlA6IAJAFQBiA9gbA0IgGAMQgyBigLCBIgBAYQgIBqAUBWQAGAYAGAVQAYBhghAnQgNAPgUAHQgQAFgXAAQgcAAgngIg");
        this.shape_8.setTransform(35.4,43.8);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#2051B8").s().p("ABbGjQkPhqhwkbQg4iNgEiGQgKh+B2guQBlgmCgAaQCUAYBoA8QBsBAgeA3Qg7BvgPCXQgOCPAgBfQAiCGhJAbQgRAGgYAAQgvAAhJgWg");
        this.shape_9.setTransform(35.4,44.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#2051B8").s().p("ACbGuQgZgFgdgJQkGhph2kLIgGgPQgnhagQhYQgLgygBgrIAAgBQgKh+B2guIADgBQBjglCeAaIAHABQCQAYBlA7IAJAFQBiA8gbA1IgGALQgyBigLCCIgCAXQgIBrAUBWQAFAXAHAVQAYBighAnQgNAPgUAHQgQAGgXAAQgcAAgngJg");
        this.shape_10.setTransform(35.4,43.9);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#2051B8").s().p("ACkGsQgZgGgdgKQkDhph8kIIgGgOQgohagThXQgNgzgBgoIAAgBQgKh+B2guIADgCQBjgkCdAZIAHABQCQAZBlA5IAJAGQBiA7gaA1IgGAMQgyBigGCCIgBAXQgFBmAXBZQAFAXAHAWQAWBhgiAnQgNAOgUAGQgQAFgWAAQgdAAgngIg");
        this.shape_11.setTransform(35.4,43.6);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#2051B8").s().p("ACtGpQgZgGgdgKQkAhqiBkFIgHgOQgphYgWhXQgPg1gBgmIAAAAQgKh+B1guIADgBQBkglCdAZIAGABQCQAYBlA6IAJAFQBiA8gYA0IgGALQgyBigCCDIAAAXQgCBjAaBbIALAtQAWBigkAlQgNAOgUAGQgPAEgVAAQgdAAgpgJg");
        this.shape_12.setTransform(35.4,43.4);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#2051B8").s().p("AC2GmQgagHgbgKQj+hqiHkDIgGgNQgshXgYhXQgRg2gBgjIAAAAQgKh+B1guIADgBQBjglCdAZIAHABQCPAYBlA6IAJAFQBiA7gXA0IgFALQgzBiADCDIABAXQABBfAdBeIALAtQAVBigmAlQgNANgVAGQgOADgSAAQgfAAgqgKg");
        this.shape_13.setTransform(35.4,43.2);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#2051B8").s().p("AC9GjQgZgHgbgKQj8hriLkAIgHgNQguhVgahXQgTg4gBggIAAAAQgLh9B1gvIADgBQBjglCdAZIAHABQCPAYBlA5IAJAFQBhA7gVA0IgFALQgzBiAICDIABAXQAFBbAfBiIALAsQAUBignAkQgNANgVAFQgNADgRAAQggAAgsgLg");
        this.shape_14.setTransform(35.5,43);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#2051B8").s().p("ADAGgQgZgIgbgKQj5hriQj9IgIgNQgvhUgchWQgVg7gCgcIAAAAQgKh9B0gvIADgBQBjglCdAZIAGABQCPAYBlA5IAJAFQBiA6gUA0IgFALQgzBiAMCDIADAXQAHBXAjBlIAKAsQATBjgoAiQgOANgVAEQgMADgQAAQghAAgtgMg");
        this.shape_15.setTransform(36.1,42.8);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#2051B8").s().p("ADEGdQgagIgagLQj2hsiWj5IgIgNQgxhTgfhVQgXg9gBgZIAAAAQgLh9B1gvIADgBQBiglCdAZIAGABQCPAYBlA4IAJAFQBhA6gSAzIgFAMQg0BiASCDIADAXQALBTAlBoIAKAsQASBjgpAiQgOALgWAFQgLACgOAAQghAAgvgNg");
        this.shape_16.setTransform(36.6,42.6);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#2051B8").s().p("ADHGbQgZgJgagLQj0htibj2IgIgNQgyhRgihVQgZg/gCgWQgKh9B0guIADgBQBjgmCcAYIAGABQCPAYBlA5IAJAFQBhA6gRAyQgCAGgDAGQg0BiAXCDIADAXQAOBPAoBrIAKAtQASBigrAhQgPALgVAEQgLACgMAAQgiAAgxgNg");
        this.shape_17.setTransform(37.2,42.4);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#2051B8").s().p("ADKGYQgZgKgZgLQjyhtigj0IgIgMQg0hQgkhVQgchAgBgTQgLh9B0guIADgBQBjgmCcAYIAHABQCNAYBlA4IAJAFQBhA6gPAyIgFAMQg0BiAbCEIAFAWQARBLArBuIAKAtQAQBigtAgQgOALgWADQgKACgLAAQgjAAgygOg");
        this.shape_18.setTransform(37.7,42.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));
    
        // Layer 6
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#2A2761").ss(3,1,1).p("AgghHQA2AcAKAoQAJArg1Ag");
        this.shape_19.setTransform(75.8,90.5);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#2A2761").ss(3,1,1).p("AgehSQAuAnALAuQADAKAAAJQACAqgdAT");
        this.shape_20.setTransform(73.7,91.2);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#2A2761").ss(3,1,1).p("AgchcQAlAxAOA0QACALACALQAHAxgPAN");
        this.shape_21.setTransform(71.7,92);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#2A2761").ss(3,1,1).p("AgehnQAeA8AOA6QADANACALQANA7gBAF");
        this.shape_22.setTransform(70,92.7);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#2A2761").ss(3,1,1).p("AglhxQAWBGAPBBQAEANADANQASBDANgB");
        this.shape_23.setTransform(68.8,93.4);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#2A2761").ss(3,1,1).p("Agsh8QANBRATBHQAEAOAEAOQAWBLAbgH");
        this.shape_24.setTransform(67.6,94.1);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#2A2761").ss(3,1,1).p("AgziHQAEBbAVBNQAFAQAEAPQAbBTAqgO");
        this.shape_25.setTransform(66.5,94.9);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#2A2761").ss(3,1,1).p("Ag5iSQgEBmAWBTQAFARAFAQQAhBcA3gV");
        this.shape_26.setTransform(65.2,95.7);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#2A2761").ss(3,1,1).p("Ag/idQgMBwAZBZQAFASAGARQAmBlBFgc");
        this.shape_27.setTransform(63.9,96.5);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#2A2761").ss(3,1,1).p("AhDipQgZCTArBtQArBtBTgi");
        this.shape_28.setTransform(62.5,97.3);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#2A2761").ss(3,1,1).p("Ag/ieQgOBxAZBaQAFASAGARQAnBmBHgd");
        this.shape_29.setTransform(63.8,96.6);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#2A2761").ss(3,1,1).p("Ag7iUQgFBnAXBVQAFARAFAQQAhBeA7gW");
        this.shape_30.setTransform(65,95.9);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#2A2761").ss(3,1,1).p("Ag1iKQACBeAWBPQAEAQAFAPQAcBXAugR");
        this.shape_31.setTransform(66.1,95.1);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#2A2761").ss(3,1,1).p("AgviAQAKBVATBJQAFAPAEAOQAXBPAigK");
        this.shape_32.setTransform(67.2,94.4);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#2A2761").ss(3,1,1).p("Agoh2QARBLASBEQAEAOACANQAUBHAUgE");
        this.shape_33.setTransform(68.2,93.8);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#2A2761").ss(3,1,1).p("AgihtQAZBCAPA+QADANADANQAQA/AHAC");
        this.shape_34.setTransform(69.3,93.1);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#2A2761").ss(3,1,1).p("AgdhjQAgA4AOA4QADAMACAMQALA4gFAH");
        this.shape_35.setTransform(70.4,92.5);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#2A2761").ss(3,1,1).p("AgchaQAnAvANAzQACALABAKQAHAwgSAO");
        this.shape_36.setTransform(72.1,91.8);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#2A2761").ss(3,1,1).p("AgehRQAvAmALAtQACAKABAJQABApgfAU");
        this.shape_37.setTransform(73.9,91.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_19}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80.7,103.4);
    
    
    (lib.nghesi = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(107.1,88.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:79.2,startPosition:9},9).to({y:88.2,startPosition:0},10).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.no("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(111.9,245.9,1,1,0,0,0,39,101.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31.1,-0.2,267.8,248.2);
    
    
    (lib.sprite10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 7
        this.instance = new lib.sprite7();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1,rotation:0.5,x:0.4,y:0.4},0).to({scaleX:1,scaleY:0.98,rotation:0,skewX:5.1,skewY:6.3,x:3.1,y:4.9},2).wait(1).to({scaleX:1,scaleY:0.96,skewX:9.3,skewY:11.1,x:5.2,y:8.8},0).to({scaleX:1,scaleY:0.92,skewX:20.8,skewY:25.1,x:8.5,y:20.7},2).wait(1).to({scaleX:1.01,scaleY:0.88,skewX:28.4,skewY:34.3,x:8.7,y:28.6},0).wait(1).to({scaleX:1.01,scaleY:0.85,skewX:37.1,skewY:44.8,x:7.2,y:37.3},0).wait(1).to({scaleX:1.01,scaleY:0.81,skewX:47.1,skewY:56.6,x:3.6,y:46.4},0).wait(1).to({scaleX:1.01,scaleY:0.84,skewX:38.3,skewY:46.1,x:7.1,y:38.3},0).wait(1).to({scaleX:1.01,scaleY:0.88,skewX:30.3,skewY:36.6,x:8.6,y:30.5},0).wait(1).to({scaleX:1,scaleY:0.9,skewX:23.3,skewY:28.1,x:8.7,y:23.3},0).to({scaleX:1,scaleY:0.95,skewX:12.1,skewY:14.6,x:6.2,y:11.7},2).wait(1).to({scaleY:0.97,skewX:8,skewY:9.6,x:4.6,y:7.6},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:4.6,skewY:5.8,x:2.7,y:4.4},0).to({scaleX:1,scaleY:1,skewX:1,skewY:1.3,x:0.6,y:1},2).wait(1).to({scaleY:1,skewX:0.6,skewY:0.8,x:0.4,y:0.6},0).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.Symbol1("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-64.5,139.7,1,1,0,0,0,9.4,15.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9.3,regY:15.6,scaleX:0.79,rotation:24.7,x:-71.1,y:133.6},10).to({regX:9.4,regY:15.5,scaleX:1,rotation:0,x:-64.5,y:139.7},9).wait(1));
    
        // Layer 4
        this.instance_2 = new lib.Tween8("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-46,122,1,1,0,0,0,-19.5,-2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-1.9,rotation:-23.7,y:122.1},10).to({regY:-2,rotation:0,y:122},9).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-73.9,0,206.5,166);
    
    
    (lib.loa2copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween26("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(32.9,89,1.174,1.174,0,0,0,-9,14.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},8).to({regX:-9.1,scaleX:1.14,scaleY:1.14,x:32.8},3).to({regX:-9,scaleX:1.06,scaleY:1.06,x:32.9},3).to({scaleX:1.17,scaleY:1.17},5).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(18.7,73.6,28.5,31.1);
    
    
    (lib.loa2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween26("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(31.7,90.7,1.155,1.155,0,0,0,-9,14.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:14.5,scaleX:0.98,scaleY:0.98,y:90.8},9).to({regY:14.4,scaleX:1.16,scaleY:1.16,y:90.7},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(17.7,75.6,28,30.6);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-7.4,144.7,1,1,-12,0,0,-8.9,170.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-7.7,regY:51.8,rotation:-11.8,x:-30.4,y:28.1},0).wait(1).to({rotation:-11.1,x:-29,y:27.9},0).wait(1).to({rotation:-10.1,x:-27,y:27.5},0).wait(1).to({rotation:-8.8,x:-24.3,y:27.2},0).wait(1).to({rotation:-7.4,x:-21.3,y:26.8},0).wait(1).to({rotation:-5.8,x:-18.1,y:26.4},0).wait(1).to({rotation:-4.1,x:-14.7,y:26.1},0).wait(1).to({rotation:-2.5,x:-11.3,y:26},0).wait(1).to({rotation:-0.8,x:-7.9,y:25.9},0).wait(1).to({rotation:0.7,x:-4.9,y:26},0).wait(1).to({rotation:2,x:-2.1,y:26.1},0).wait(1).to({rotation:3,x:0,y:26.2},0).wait(1).to({rotation:3.7,x:1.6,y:26.3},0).wait(1).to({regX:-8.8,regY:170.7,rotation:4,x:-7.3,y:144.8},0).wait(1).to({regX:-7.7,regY:51.8,rotation:3.8,x:1.5,y:26.2},0).wait(1).to({rotation:3.1,x:0.1,y:26.1},0).wait(1).to({rotation:2.1,x:-2,y:25.9},0).wait(1).to({rotation:0.8,x:-4.6},0).wait(1).to({rotation:-0.6,x:-7.5},0).wait(1).to({rotation:-2.2,x:-10.8},0).wait(1).to({rotation:-3.9,x:-14.3,y:26},0).wait(1).to({rotation:-5.5,x:-17.7,y:26.3},0).wait(1).to({rotation:-7.2,x:-21,y:26.6},0).wait(1).to({rotation:-8.7,x:-24.1,y:27},0).wait(1).to({rotation:-10,x:-26.8,y:27.4},0).wait(1).to({rotation:-11,x:-28.9,y:27.8},0).wait(1).to({rotation:-11.7,x:-30.4,y:28},0).wait(1).to({regX:-8.9,regY:170.6,rotation:-12,x:-7.4,y:144.7},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-102.3,5.8,140.8,47.7);
    
    
    (lib.Tween24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.loa2copy();
        this.instance.parent = this;
        this.instance.setTransform(-39.5,-108.4);
    
        this.instance_1 = new lib.loa2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-25.9,12.9,1,1,0,0,0,31.7,90.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        // Layer 1
        this.instance_2 = new lib.Bitmap16();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-47.1,-47.3,2.203,2.203);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-47.1,-47.3,94.8,94.8);
    
    
    (lib.nghesinhi1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // flash0.ai copy
        this.instance = new lib.Tween35copy("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(139,167.3);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({skewY:180,x:27,y:180.3,alpha:0},32).wait(1));
    
        // Layer 2 copy
        this.instance_1 = new lib.Tween34copy("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(130.8,169.8,0.794,0.794);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({scaleX:0.82,scaleY:0.82,x:124.2,y:167.3,alpha:0.941},3).to({scaleX:1.24,scaleY:1.24,skewY:180,x:26.4,y:129.3,alpha:0},36).wait(1));
    
        // flash0.ai copy
        this.instance_2 = new lib.Tween35("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(139,167.3);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({rotation:55,x:26.9,y:180.3,alpha:0},33).to({_off:true},1).wait(40));
    
        // Layer 2 copy
        this.instance_3 = new lib.Tween34("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(130.8,169.8,0.794,0.794);
        this.instance_3.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.82,scaleY:0.82,x:124.2,y:167.3,alpha:0.941},3).to({scaleX:1.24,scaleY:1.24,rotation:35,x:26.3,y:129.3,alpha:0},36).to({_off:true},1).wait(40));
    
        // dau
        this.instance_4 = new lib.nghesi("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(174.8,136.7,1,1,0,0,0,101.7,124.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));
    
        // Layer 4
        this.instance_5 = new lib.sprite10("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(146.1,40.7,1.133,1,0,15,-165);
    
        this.instance_6 = new lib.sprite10("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(232,42.7,1.133,1,-15);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(80));
    
        // Layer 3
        this.instance_7 = new lib.sprite10("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(232,42.7,1.133,1,-15);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-34.4,1.8,446.9,258.2);
    
    
    (lib.loa = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Tween23("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(71.6,101.7,1,1,0,0,0,-35,21.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94,rotation:25.2,y:101.8},9).to({scaleX:1,scaleY:1,rotation:0,y:101.7},10).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween24("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(51.5,79.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:57,y:75.3},9).to({x:51.5,y:79.8},10).wait(1));
    
        // Layer 2
        this.instance_2 = new lib.Tween25("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(27.6,67.7,1,1,0,0,0,9,26);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:9.1,regY:26.1,scaleY:0.91,skewX:-18.5,skewY:-18.7,x:27.7,y:67.9},9).to({regX:9,regY:26,scaleY:1,skewX:0,skewY:0,x:27.6,y:67.7},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,148.4,127.3);
    
    
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
                this.parent.parent.icon_nsn_check_pausable();
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-15.5,regY:28.3,x:-0.7,y:54.5,alpha:0.306},0).wait(1).to({y:44.5,alpha:0.556},0).wait(1).to({y:36.8,alpha:0.75},0).wait(1).to({y:31.2,alpha:0.889},0).wait(1).to({y:27.9,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:-15.5,regY:28.3,x:-0.7,y:27.1,alpha:0.972},0).wait(1).to({y:27.9,alpha:0.889},0).wait(1).to({y:29.3,alpha:0.75},0).wait(1).to({y:31.2,alpha:0.556},0).wait(1).to({y:33.7,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
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
        this.tit = new lib.thapTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(141.6,262.1,1,1,0,180,0);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(135.4,108.4,1,1,0,0,0,127.9,108.4);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(7.5,0,255.8,216.9);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween45("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(142.5,144.6,0.482,0.482,0,0,0,6.4,12.5);
    
        this.instance_1 = new lib.Tween40("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(147.5,174.6,0.482,0.482,0,0,0,-12.8,12.8);
    
        this.instance_2 = new lib.Tween42("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(140.1,149,0.482,0.482);
    
        this.instance_3 = new lib.Tween37("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(139.3,163.3,0.482,0.482,0,0,0,0,-39.1);
    
        this.instance_4 = new lib.Tween38("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(135.3,169.3,0.482,0.482,0,0,0,16.8,-6.1);
    
        this.instance_5 = new lib.Tween46("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(131.5,189.8,0.482,0.482);
    
        this.instance_6 = new lib.Tween44("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(145.5,191.6,0.482,0.482);
    
        this.instance_7 = new lib.Tween36("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(137,197.5,0.482,0.482);
    
        this.instance_8 = new lib.loa();
        this.instance_8.parent = this;
        this.instance_8.setTransform(224.6,146.8,0.482,0.482,0,0,0,74.4,63.5);
    
        this.instance_9 = new lib.loa();
        this.instance_9.parent = this;
        this.instance_9.setTransform(41.5,160.4,0.454,0.454,0,15,-165,74.5,49.3);
    
        this.instance_10 = new lib.nghesinhi1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(128.8,62.6,0.482,0.482,0,0,0,193.9,132);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0.9,-0.1,259.3,203), null);
    
    
    (lib.mNghesinhi_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_nsn_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));
    
        // Layer 14
        this.instance = new lib.Symbol2();
        this.instance.parent = this;
        this.instance.setTransform(107.1,94.7,1,1,0,0,0,130.1,101.7);
        this.instance.cache(-1,-2,263,207);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(119));
    
        // Layer 11
        this.instance_1 = new lib.Tween45("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(119.5,137.6,0.482,0.482,0,0,0,6.4,12.5);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:12.3,scaleX:0.48,scaleY:0.48,rotation:58.3,x:131.6,y:137},14).to({regY:12.4,scaleX:0.48,scaleY:0.48,rotation:23.5,x:140.8,y:136.7},12).to({regY:12.3,rotation:0,skewY:180,x:135.7,y:137.6},2).to({regX:6.3,regY:12.5,scaleX:0.48,scaleY:0.48,skewX:-46,skewY:134,x:127.4},14).to({regY:12.4,scaleX:0.48,scaleY:0.48,skewX:-30,skewY:150,x:120,y:137.5},13).to({startPosition:0},2).to({regY:12.5,scaleX:0.48,scaleY:0.48,skewX:-53.7,skewY:126.3,x:111.7,y:137.6},13).to({regX:6.5,regY:12.3,scaleX:0.48,scaleY:0.48,skewX:-33.2,skewY:146.8,x:102.1},15).to({regX:6.4,regY:12.5,skewX:0,skewY:0,x:100.9},2).to({regX:6.3,regY:12.3,rotation:60,x:110.7},17).to({regX:6.4,regY:12.5,rotation:0,x:119.5},14).wait(1));
    
        // hand r
        this.instance_2 = new lib.Tween40("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(124.5,167.6,0.482,0.482,0,0,0,-12.8,12.8);
        this.instance_2._off = true;
    
        this.instance_3 = new lib.Tween41("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(145.9,167.6,0.482,0.482,0,0,0,-12.8,12.8);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regY:12.7,rotation:-25.2,x:134.7,y:167.5},6).to({startPosition:0},2).to({regY:12.8,rotation:0,x:136.8,y:167.6},6).to({startPosition:0},2).to({regX:-12.7,rotation:-20.7,x:146,y:167.7},6).to({_off:true,regX:-12.8,rotation:0,x:145.9,y:167.6},4).wait(86).to({_off:false,regX:-12.7,rotation:-6,x:124.5,y:167.7},6).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},4).wait(2).to({skewX:7.7,skewY:-172.3,x:129.3,y:167.7},0).to({skewX:0,skewY:-180,x:127,y:167.6},4).to({skewX:21.5,skewY:-158.5,x:118.7,y:167.7},6).to({startPosition:0},2).to({skewX:0,skewY:-180,x:117.6,y:167.6},6).to({startPosition:0},2).to({skewX:23,skewY:-157,x:108.8,y:167.2},7).to({startPosition:0},2).to({regX:-12.7,skewX:0,skewY:-180,x:108.2,y:167.6},5).to({startPosition:0},2).to({skewX:30.5,skewY:-149.5,x:99.5},6).to({startPosition:0},2).to({regX:-12.8,skewX:0,skewY:-180,x:98.8},6).to({startPosition:0},2).to({regX:-12.7,skewX:15,skewY:-165,x:92.3,y:166.6},5).wait(2).to({regX:-12.8,skewX:0,skewY:0,x:107.4,y:167.6},0).to({rotation:-36.5,x:115.1},7).to({startPosition:0},2).to({regX:-12.7,rotation:-9.5,x:115.9,y:167.7},7).to({startPosition:0},2).to({rotation:-30,x:123.7},5).to({startPosition:0},2).to({_off:true,rotation:-6,x:124.5},6).wait(1));
    
        // head
        this.instance_4 = new lib.Tween42("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(117.1,142,0.482,0.482);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.Tween43("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(138.5,141,0.482,0.482);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({rotation:-5,x:123.2,y:142.2},6).to({startPosition:0},2).to({rotation:0,x:129.3,y:142},6).to({startPosition:0},2).to({rotation:-2.7,x:135.4,y:142.2},6).to({_off:true,rotation:0,x:138.5,y:141},4).wait(86).to({_off:false,x:117.1,y:142},6).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},4).wait(2).to({skewY:180,y:142},0).to({x:133.7,y:141},4).to({skewX:4,skewY:184,x:129.1,y:141.3},6).to({startPosition:0},2).to({skewX:0,skewY:180,x:124.4,y:141},6).to({startPosition:0},2).to({skewX:5.7,skewY:185.7,x:119.7,y:141.3},7).to({startPosition:0},2).to({skewX:0,skewY:180,x:115,y:141},5).to({startPosition:0},2).to({skewX:4.7,skewY:184.7,x:110.3,y:141.3},6).to({startPosition:0},2).to({skewX:0,skewY:180,x:105.6,y:141},6).to({startPosition:0},2).to({skewX:4,skewY:184,x:103.3,y:141.3},5).wait(2).to({skewX:0,skewY:360,x:98.7,y:142},0).to({rotation:-3.7,x:103.4,y:142.2},7).to({startPosition:0},2).to({rotation:0,x:108.2,y:142},7).to({startPosition:0},2).to({rotation:-5.2,x:112.9,y:142.2},5).to({startPosition:0},2).to({_off:true,rotation:0,x:117.1,y:142},6).wait(1));
    
        // body
        this.instance_6 = new lib.Tween37("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(116.3,156.3,0.482,0.482,0,0,0,0,-39.1);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regX:0.1,rotation:-10.9,x:122.5},6).to({startPosition:0},2).to({regX:0,rotation:0,x:128.6},6).to({startPosition:0},2).to({regX:-0.1,rotation:-6.9,x:134.7},6).to({regX:0,rotation:0,x:137.8},4).wait(2).to({regX:0.1,skewX:3,skewY:-177,x:137.7},0).to({regX:0,skewX:4.7,skewY:-175.3,x:135.4,y:156.4},4).to({regX:-0.1,skewX:10.4,skewY:-169.6,x:130.8,y:156.3},6).to({startPosition:0},2).to({skewX:3.7,skewY:-176.3,x:126.1},6).to({startPosition:0},2).to({regX:0,skewX:13.6,skewY:-166.4,x:121.4},7).to({skewX:13.6},2).to({regX:-0.1,regY:-39.2,skewX:5,skewY:-175,x:116.7},5).to({startPosition:0},2).to({regY:-39.1,skewX:15.4,skewY:-164.6,x:112},6).to({startPosition:0},2).to({skewX:5,skewY:-175,x:107.3},6).to({startPosition:0},2).to({regX:0.1,skewX:8.5,skewY:-171.5,x:102.5},5).wait(2).to({regX:0,skewX:0,skewY:0,x:99.2},0).to({regX:-0.1,rotation:-11.7,x:103.6},7).to({startPosition:0},2).to({regX:0,rotation:0,x:108},7).to({startPosition:0},2).to({rotation:-10.2,x:112.4},5).to({startPosition:0},2).to({regX:0.1,rotation:0.3,x:116.3},6).wait(1));
    
        // hand l
        this.instance_7 = new lib.Tween38("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(112.3,162.3,0.482,0.482,0,0,0,16.8,-6.1);
        this.instance_7._off = true;
    
        this.instance_8 = new lib.Tween39("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(134.7,162.3,0.482,0.482,0,0,0,16.8,-6.1);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regY:-6.2,rotation:15,x:121},6).to({regX:16.7,rotation:8.5,x:126.9},8).to({_off:true,regX:16.8,regY:-6.1,rotation:0,x:134.7},12).wait(86).to({_off:false,regX:0,regY:0,x:103.3,y:165.2},6).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},12).wait(2).to({regX:0,regY:0,skewY:180,x:148.5,y:165.2},0).to({x:146.9},4).to({x:139.8},6).to({startPosition:0},2).to({x:137.5},6).to({startPosition:0},2).to({x:130.2},7).to({startPosition:0},2).to({x:128.1},5).to({startPosition:0},2).to({x:121},6).to({startPosition:0},2).to({x:118.5},6).to({startPosition:0},2).to({x:112.3},5).wait(2).to({skewY:0,x:85.3},0).to({x:93.6},7).to({startPosition:0},2).to({x:95.7},7).to({startPosition:0},2).to({x:103.1},5).to({startPosition:0},2).to({_off:true,x:103.3},6).wait(1));
    
        // Layer 12
        this.instance_9 = new lib.Tween46("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(108.5,182.8,0.482,0.482);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({rotation:-30,x:120,y:183.4},6).to({rotation:0,x:120.6,y:182.9},8).to({startPosition:0},2).to({x:130,y:183.9},6).to({rotation:15,y:182.8},4).wait(2).to({rotation:-98.5,x:144.2},0).to({rotation:-83.5,x:141.6,y:183.4},4).to({rotation:-103.2,x:133.6,y:183.5},6).to({startPosition:0},2).to({rotation:-83.5,x:132.4,y:183},6).to({startPosition:0},2).to({x:122.9,y:183.6},7).to({startPosition:0},2).to({startPosition:0},5).to({startPosition:0},2).to({x:112.5},6).to({startPosition:0},2).to({rotation:-98.5,x:113,y:183.1},6).to({startPosition:0},2).to({x:106.6,y:183.3},5).wait(2).to({rotation:6.5,x:91.5,y:183},0).to({x:101.4,y:183.9},7).to({startPosition:0},2).to({rotation:30.9,x:99.7,y:183.2},7).to({startPosition:0},2).to({rotation:5,x:109.2,y:184},5).to({startPosition:0},2).to({rotation:0,x:108.5,y:182.8},6).wait(1));
    
        // Layer 10
        this.instance_10 = new lib.Tween44("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(122.5,184.6,0.482,0.482);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({rotation:22.9,x:134.1,y:183.7},6).to({startPosition:0},2).to({rotation:-30,x:135.7,y:184.6},6).to({startPosition:0},2).to({rotation:26.2,x:144,y:184.1},6).to({rotation:0,x:144.2,y:184.6},4).wait(2).to({skewY:180,x:129.8},0).to({x:126.6},4).to({skewX:-15,skewY:165,x:119.3,y:184.2},6).to({startPosition:0},2).to({skewX:30,skewY:210,x:116.5,y:184.8},6).to({startPosition:0},2).to({skewX:-15,skewY:165,x:108.3,y:183.7},7).to({startPosition:0},2).to({skewX:37.7,skewY:217.7,x:106.6,y:184.6},5).to({startPosition:0},2).to({skewX:-15,skewY:165,x:98.8,y:182.5},6).to({startPosition:0},2).to({skewX:0,skewY:180,x:98.4,y:184.6},6).to({startPosition:0},2).to({skewX:-15,skewY:165,x:92.7,y:183.5},5).wait(2).to({skewX:0,skewY:0,x:105.6,y:184.6},0).to({rotation:15,x:115.2,y:182.7},7).to({startPosition:0},2).to({rotation:0,x:114.3,y:185},7).to({startPosition:0},2).to({rotation:15,x:123.5,y:183.5},5).to({startPosition:0},2).to({rotation:0,x:122.2,y:184.6},6).wait(1));
    
        // shadow
        this.instance_11 = new lib.Tween36("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(114,190.5,0.482,0.482);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({x:125.6},6).to({startPosition:0},2).to({x:126.7},6).to({startPosition:0},2).to({x:135.7},6).to({x:135.6},4).wait(2).to({skewY:180,x:137.3},0).to({x:127.8},10).to({startPosition:0},2).to({x:124.6},6).to({startPosition:0},2).to({x:117},7).to({startPosition:0},2).to({x:114.7},5).to({startPosition:0},2).to({x:105.4},6).to({startPosition:0},2).to({x:104.9},6).to({startPosition:0},2).to({x:100.2},5).wait(2).to({skewY:0,x:96.9},0).to({x:106.5},7).to({startPosition:0},2).to({x:105.4},7).to({startPosition:0},1).to({startPosition:0},1).to({x:114.7},5).to({startPosition:0},2).to({x:114},6).wait(1));
    
        // Layer 3
        this.instance_12 = new lib.loa();
        this.instance_12.parent = this;
        this.instance_12.setTransform(201.6,139.8,0.482,0.482,0,0,0,74.4,63.5);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({regX:74.5,scaleX:0.57,scaleY:0.57,rotation:-30,guide:{path:[201.6,139.7,201.6,139.8,201.6,139.8,212.9,152.3,199.2,175.6]}},27,cjs.Ease.get(1)).wait(31).to({regX:74.4,scaleX:0.48,scaleY:0.48,rotation:0,guide:{path:[199.2,175.6,212.9,152.3,201.6,139.8,201.6,139.8,201.6,139.7]}},43,cjs.Ease.get(1)).wait(18));
    
        // Layer 4
        this.instance_13 = new lib.loa();
        this.instance_13.parent = this;
        this.instance_13.setTransform(18.5,153.4,0.454,0.454,0,15,-165,74.5,49.3);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({regY:49.1,scaleX:0.31,scaleY:0.31,skewX:0,skewY:-180,guide:{path:[18.6,153.4,19.7,150.8,21.2,148.5,26.5,140.3,36.1,137.4,44.4,134.9,55.5,136.4]}},57,cjs.Ease.get(-1)).to({regY:49.3,scaleX:0.45,scaleY:0.45,skewX:15,skewY:-165,guide:{path:[55.5,136.4,44.4,134.9,36.1,137.4,26.5,140.3,21.2,148.5,19.7,150.8,18.6,153.4]}},61,cjs.Ease.get(-1)).wait(1));
    
        // Layer 5
        this.instance_14 = new lib.nghesinhi1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(105.8,55.6,0.482,0.482,0,0,0,193.9,132);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({regY:132.2,guide:{path:[105.8,55.6,99.9,49.7,95.9,43.8,92.6,38.9,90.7,34.2]}},23).to({guide:{path:[90.7,34.2,85.8,21.5,92,10.4,98,-0.6,114.6,-9.8]}},53).to({guide:{path:[114.6,-9.8,98,-0.6,92,10.4,83.5,25.7,95.8,43.8,99.2,48.8,104,53.8]}},36).to({regY:132,guide:{path:[104,53.7,105.6,55.5,107.5,57.3]}},6).wait(1));
    
        // Layer 13
        this.instance_15 = new lib.Bitmap1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(33.9,56);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.1,-7.1,259.3,263.1);
    
    
    // stage content:
    (lib.nsn2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_nsn.mp3", "voice_nsn"); 
            var icon_nsnSound, icon_nsnSoundTimeOut;
            root_nsn = this;
            htcv_icon_nsnOver = function() {cv_icon_nsnOver();}
            htcv_icon_nsnOut = function() {cv_icon_nsnOut();}
            
            function cv_icon_nsnOver() {
                root_nsn.ico.over = true;
                root_nsn.hit.tit.over = true;
                root_nsn.hit.tit.gotoAndPlay(1);
                icon_nsnSoundTimeOut = setTimeout(icon_nsnSoundTimeOutComplete, 500);
            }
            
            function cv_icon_nsnOut() {
                root_nsn.ico.over = false;
                root_nsn.hit.tit.over = false;
                if (root_nsn.hit.tit.currentFrame == 7) {
                    root_nsn.hit.tit.play();
                }
                clearTimeout(icon_nsnSoundTimeOut);
            }
            
            function icon_nsnSoundTimeOutComplete() {
                clearTimeout(icon_nsnSoundTimeOut);
                
                // if (root_nsn.ico.currentFrame == 0) {
                //     icon_nsnSound = createjs.Sound.play("voice_nsn");
                // }
                root_nsn.ico.play();
            }
            
            this.icon_nsn_check_pausable = function() {
                if (root_nsn.ico.over == false && root_nsn.hit.tit.over == false && root_nsn.ico.currentFrame == 0 && root_nsn.hit.tit.currentFrame == 0) {
                    cvht_icon_nsn_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // 24-17
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(101,158,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.mNghesinhi_resize();
        this.ico.parent = this;
        this.ico.setTransform(27.2,143.7,1,1,0,0,0,4.2,66.7);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(140.9,239.9,262.3,263.1);
    // library properties:
    lib.properties = {
        width: 280,
        height: 340,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/nsn2017_atlas_.png", id:"nsn2017_atlas_"}/*,
            {src:"sounds/voice_nsn.mp3", id:"voice_nsn"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_nsn = lib_nsn||{}, images_nsn = images_nsn||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_nsn, images_nsn, createjs, ss, AdobeAn;