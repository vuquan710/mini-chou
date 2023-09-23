(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"nhaava2017_atlas_", frames: [[98,223,46,35],[146,223,18,18],[229,0,17,17],[167,205,53,33],[167,148,60,32],[0,0,207,146],[0,148,96,116],[167,182,89,21],[98,148,67,73]]}
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
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap11 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap7 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap8 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["nhaava2017_atlas_"];
        this.gotoAndStop(8);
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
    
    
    (lib.Symbol14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap8();
        this.instance.parent = this;
        this.instance.setTransform(-73.8,-17.4,1.66,1.66);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-73.8,-17.4,147.8,34.8), null);
    
    
    (lib.Symbol12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0BB70B").s().p("EgXoBAUQiNg3ipiOQjojCiVlbQiflzAAmbQAAi3AxkjQAbigBQmHQBNl0AfjDQAxk0AAjUQAAnoiuoyQioodjrlBQjrk+kRifQkhiolfAAQnNAAkNEjQh4CCg/CsQg9CnAAC3QAAHkEmD+QEKDmHAAAQA4AACEgTQBugQAbgHQhiBDi7A3QjEA7iXAAQo3AAknmvQh4iug8jjQg2jGAAjLQAAkVBrj6QBmjvC7i4QC4i2DuhkQD0hmEHAAQGCAAFfDKQE4C0EIFFQDrEiCmFsQCYFQA5E8QA6FBANB5QgIBOAHBAQAKB/BKAqQA3AgBSAWQB5AcBlAcQEJBIDKAfQC/AeDAAAQE7AAFehwQFphzCsiiQDajNCYlYQCymYAAm4QAAkGgoipQgrivhzjNQhMiIhgg0Qh+hGkCAAQnmAAjhEfQhNBjglB7QgbBXAABCQAADZC/CgQCeCEFNB7QhCAdiCASQhqAPhQAAQj+AAi3iEQjminAAlDQAAnRFkkRQCih8DbhCQDVhAD0AAQE7AAEjCwQEtC3C1E8ICkmvQBOlXDWlBQDLkuEnjvQEfjpFCiDQFIiFEuAAQD0AAD7BhQD/BhDOCvQDaC6B5DuQCFEEgBEjQAADyh0DKQhmCyi4CFQihB2jEBBQi1A8ibAAQjkAAi0iGQi7iLhtkJQBgDFD+BuQDQBaDRAAQChAAB5g4QBug0A1hVQB4jDA5imQBAi6gBjEQAAiqhHiUQhGiQiChrQkQjgmlAAQp7AAn8HXQoRHrk4OmIiGGFQgSHCikGXQiTFrj3ElQjgEKkHClQj6CbjWAXQCLBIBdD7QBYDtAAEAQAAFXiwDnQjCD/lKAAQjQAAh/heQhzhVAAh3QAAgRADgWQA2A6B3AjQBgAcBOAAQDWAACcjZQBDhbAmhuQAkhrABheQgBiyhyihQhiiKirhxQiThhipg7QiZg2hlAAQjHAAjXB7QjrCFjDD5QigDKhPFfQhAEfAAFCQAADtAxDSQA3DsCSFZQAkBVBWCQQBYCSApAqIA7BFIBFBPQALAKAgAXQAWARAAAIQAAAug5AdQgrAXglAAQhdAAheglg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-514.3,-415.2,1028.7,830.6), null);
    
    
    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#09BECC").s().p("AArAjQgHg3gugeQgXgPgXgEQgJgCgCgCQgFgFAjgDQAzgDAgA3QAYApgCAfQgCAcgHAKQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgHAAgGgwg");
        this.shape.setTransform(1.6,-4.4,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#007688").s().p("ABAC9QiPhAgRACQADj+gBgFIAGAFQAMgUAUgRQAngiAkANQArAQATAoQARAlgBA+IgBCNQgEBOgaAAIgCAAg");
        this.shape_1.setTransform(-0.7,0.3,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#0092A6").s().p("AALC+QhagtgkgJIACkDQAKgbAXgXQAvgwBAARQAUAGAVAVQAoAqADBOQADBNgGBbQgDAtgEAeQgBAMgMAHQgIAEgMAAQgXAAgmgTg");
        this.shape_2.setTransform(0,0,0.356,0.356);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-4.1,-7.4,8.3,14.9), null);
    
    
    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#81DEEA").s().p("AAvBoQgFgDAAgDQAEgLACgRQAEgjgJgyQgIgygmgCQgrAGgNgGQgZgMAjgOQAggLAjgBQAcgBAKAfQAJAbAFBPQAEBAgPAKIgGABQgDAAgDgCg");
        this.shape.setTransform(1.7,-1.9,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3FAFF").s().p("AgBATQgNgEgBgNQgBgIAGgGQAIgKAHADIACABQABAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQAAACgJADQgIAEACAIQACAIAFACQAFACAFgEQAJgGgFALQgCAGgHAAIgGgCg");
        this.shape_1.setTransform(-1.8,0.6,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#81DEEA").s().p("AgOARQgGgHAAgKQAAgJAGgHQAGgHAIAAQAIAAAHAHQAGAHAAAJQAAAKgGAHQgHAHgIAAQgIAAgGgHg");
        this.shape_2.setTransform(-1.7,0.6,0.356,0.356);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgSAWQgIgJAAgNQAAgLAIgKQAIgJAKAAQALAAAIAJQAIAJAAAMQAAANgIAJQgIAJgLAAQgKAAgIgJg");
        this.shape_3.setTransform(-1.9,0.6,0.356,0.356);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0092A6").s().p("Ah6BOQACh9ALgwQAKgwBBgcQAggPAdgFIAZgDQAcACAXAaQAWAbgDCMQgCBFgGBBIjrA8QgBg1AAhAg");
        this.shape_4.setTransform(0.2,0.1,0.356,0.356);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#007688").s().p("Ah5BPQACh+AKgwQALgwBAgdQAhgOAdgEIAYgEQAdABAWAbQAWAbgDCLQgBBGgGBBIjsA8QgBg1ABg/g");
        this.shape_5.setTransform(-0.2,0.1,0.356,0.356);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFF1E1").s().p("Ag7AWQANgeAtgUQAVgKAUgEQATgBAGAEQAGAFgPAAQgOAAghANQgiAPgJAJIgZAiQgFAGgBAAQgDAAAJgVg");
        this.shape_6.setTransform(-1,-5.5,0.356,0.356);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgHBlQgDgIgCjCIAVAKQAFCvgCAGQgDAMgJAAQgCAAgFgBg");
        this.shape_7.setTransform(-0.1,1,0.356,0.356);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgOBGQACgKAHhHIAGhHIAPAJIgDBAQgEBCgEALQgFANgIABIgBABQgHAAACgNg");
        this.shape_8.setTransform(-2,2.4,0.356,0.356);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F45A31").s().p("AgSBRQgDhlAJg1IAggPIgDAvQgCAxgDAKQgFARgFA2g");
        this.shape_9.setTransform(-2.8,2.2,0.356,0.356);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#9E250D").s().p("AgTBYIARiwIADALIALAKIAHgDQADASgGA+QgEAzgEATQgIAJgQAAIgDgBg");
        this.shape_10.setTransform(-2.1,2.2,0.356,0.356);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFE266").s().p("AAqBvIhVghIASiaIADgEIAdgTQAfgSADAIQACAGgCBpQgDBnADAEIADAEIgCgCg");
        this.shape_11.setTransform(-2.1,0.9,0.356,0.356);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#E07719").s().p("AgVBnIAIjWIAFATIALADQACAKAGgJQAHgIgDAHQAFALABBQQABBMgCAPQgBAJgNAGIgNAEg");
        this.shape_12.setTransform(-0.3,0.9,0.356,0.356);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgKBtQgEgMgFjPIAfAPQAJCygCAKQgFASgOAAQgEAAgGgCg");
        this.shape_13.setTransform(1.7,0,0.356,0.356);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#37C8EF").s().p("AA+BxIh+gwIAZiUIAFgFQAWgLAWgHQAugQAEAMQAEAJgFBoQgEBlAFAGIAFAGIgDgDg");
        this.shape_14.setTransform(-1.2,0.2,0.356,0.356);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#1B6ADD").s().p("AgfBmIAMjYIAGAHIARAFIACAGQAEADAGgIQAKgMgFAKQAHARACBQQADBGgDAWQgBAOgUAJIgTAGg");
        this.shape_15.setTransform(1.5,0.2,0.356,0.356);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#016A75").s().p("AhjA6QABhkAbhGQAfgNAhgKQBCgTANASQAbAlABAfQABAUgGA2QgBAvgEAOQgDAIgLAGQgLAHigA6QgFglABgzg");
        this.shape_16.setTransform(0.1,0.5,0.356,0.356);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#007D8E").s().p("AhlAmQAHiCAZgaQAggiAzgJQA3gJAQAiIAUAwIgCCzIjPBIQgBg8AEhBg");
        this.shape_17.setTransform(0.3,0.1,0.356,0.356);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-4.5,-7,9.1,14.1), null);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#008DF7").s().p("AASBGQgJgEAAgIQAAgEADgDQADgCAEAAIAKACQAJAEAFAAQAIAAAGgGQAEgEAAgKIAAgDQgEAHgFABQgFADgHAAQgNAAgKgLQgKgLAAgRQAAgQAKgMQAKgMAQAAQAGAAAEACQAEABAEAFQABgDAEgCIAFgDQAGABADAEQADAFAAAHIgBBCQgCAGgDAFQgEAIgJAFQgJAEgMABQgPAAgKgGgAAjgJQgEAFAAAIQAAAJAEAEQAEAGAHAAQAGAAAFgGQAEgEAAgJQAAgIgEgFQgFgGgGABQgHgBgEAGgADlBIQgEgDAAgFIABgEIABgEIAKgVIgXg1IgBgDIgBgDQAAgEAEgEQADgEAFAAQAEAAACADQADACACAHIANAiIAOgkQADgFACgCQACgDAEAAQAFABADADQADACAAAGIgBADIgBAFIgjBSQgCAFgDACQgCACgDAAQgFAAgDgDgAicAgQgKgMAAgQQAAgQAKgMQAKgMAQAAQAGAAAEACQAFABADAFQACgFADAAQACgCAEgBQAGABACAEQADAEAAAIIAAAtQAAAKgDADQgCAEgGAAQgEAAgDgCIgEgGQgEAEgEADQgFACgGAAQgPAAgKgMgAiKgJQgEAFAAAHQAAAKAEAEQAEAFAGAAQAHAAAEgGQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFgAC4AqIgGgFIgXgfIAAAUQAAAJgCAFQgDADgGAAQgGAAgDgDQgDgFAAgJIAAhNQAAgIADgFQADgEAGAAQAGAAADAEQACAFAAAIIAAAqIAUgUIAGgFIAGgCQADAAAEADQACADAAADIgBAGIgEAGIgQANIAWAZIADAGQABACAAADQAAADgDAEQgEACgEAAQgDAAgDgBgAgXAnQgDgDAAgKIAAgZQAAgJgCgEQgDgFgHABQgGgBgDAFQgDAEAAAIIAAAaQAAAKgDADQgCAEgHAAQgGAAgCgEQgDgDAAgKIAAgtQAAgIADgEQACgEAGgBQAEABACACQADAAACAFQAEgDAFgDQAGgCAFAAQANAAAIAIQAHAHAAAQIAAAfQAAAKgCADQgDAEgGAAQgGAAgDgEgAj8AqQgJAAgEgDQgEgEAAgHIAAgcIgCAAQgFAAgEgDQgDgBAAgFQAAgEADgCQADgCAGAAIACAAIAAgbQAAgJAEgEQAFgEAIABIATAAQALAAAGACQAHABAHAEQAJAGAHAMQAGALAAAOQAAAYgOAOQgNAOgYAAgAj1AVIALAAQAOgBAHgHQAHgJAAgOQAAgOgHgHQgHgIgPAAIgKAAIAAAWIAJAAQAEAAAEADQADACAAADQAAAFgDABQgDADgGAAIgIAAgADugrQgCgCAAgEIAAgDIACgEIALgOIAEgEIAEgBQADABAEACQACACAAAEIgBAEIgCAEIgMAMIgEAEIgDABQgEAAgCgCgAiNgyQgHgFAAgIQAAgEACgBQACgCADAAQAEgBADAFIABABIADADIAGABIAFAAIADgEIABgBQADgFAEABQADAAADACQACABAAAEQAAAIgHAFQgHAGgKgBQgKABgHgGg");
        this.shape.setTransform(0,0,1.35,1.35);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 2
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAjgJQgEAFAAAIQAAAJAEAFQAEAFAHAAQAGAAAFgFQAEgFAAgJQAAgIgEgFQgFgGgGAAQgHAAgEAGgAArgkQAGAAAEACQAEABAEAFQABgDAEgDQAEgCABAAQAGAAADAEQADAFAAAIIgBBCQgCAHgDAEQgEAIgJAFQgJAFgMAAQgPAAgKgFQgJgFAAgHQAAgEADgDQADgDAEAAIAKADQAJADAFAAQAIAAAGgFQAEgFAAgJIAAgDQgEAGgFACQgFADgHAAQgNAAgKgMQgKgLAAgRQAAgQAKgNQAKgLAQAAgACQhEQAGAAADAEQACAFAAAIIAAAqIAUgUIAGgFQADgCADAAQADAAAEADQACADAAADIgBAGIgEAFIgQAOIAWAZQACAEABACQABACAAADQAAAEgDADQgEADgEAAQgDAAgDgCIgGgFIgXgfIAAAVQAAAIgCAFQgDAEgGAAQgGAAgDgEQgDgFAAgIIAAhOQAAgJADgEQADgEAGAAgAEIhIQACACAAAEQAAADgBABIgCAEIgMAMQgBACgDACIgDABQgEAAgCgCQgCgCAAgEIAAgDIACgEIALgOQABgCADgCIAEgBQADAAAEADgADggkQAEAAACADQADACACAGIANAjIAOgkQADgGACgBQACgDAEAAQAFAAADADQADADAAAFIgBAEIgBAEIgjBTQgCAFgDACQgCACgDAAQgFAAgDgDQgEgDAAgFIABgEIABgEIAKgUIgXg2IgBgDIgBgDQAAgFAEgDQADgEAFAAgAkJg5QAFgEAIAAIATAAQALAAAGACQAHACAHAEQAJAGAHAMQAGALAAAOQAAAYgOAOQgNAOgYAAIgVAAQgJAAgEgDQgEgDAAgIIAAgcIgCAAQgFAAgEgDQgDgCAAgEQAAgEADgCQADgCAGAAIACAAIAAgbQAAgJAEgEgAj1gnIAAAWIAJAAQAEAAAEACQADADAAADQAAAEgDACQgDADgGAAIgIAAIAAAVIALAAQAOAAAHgIQAHgIAAgPQAAgOgHgIQgHgHgPAAgAiShEQACgDADAAQAEAAADAFIABABQABACACABQACABAEAAIAFgBQACgCABgBIABgBQADgFAEAAQADAAADADQACABAAAEQAAAHgHAGQgHAFgKAAQgKAAgHgFQgHgGAAgHQAAgEACgBgAiKgJQgEAFAAAHQAAAKAEAEQAEAFAGAAQAHAAAEgFQAEgGAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFgAhlgkQAGAAACAEQADAFAAAIIAAAuQAAAJgDADQgCAEgGAAQgEAAgDgBIgEgGQgEAEgEACQgFACgGAAQgPAAgKgLQgKgNAAgQQAAgRAKgMQAKgLAQAAQAGAAAEACQAFABADAFQACgFADgBQACgCAEAAgAg4giQADABACAFQAEgEAFgCQAGgCAFAAQANAAAIAIQAHAHAAAPIAAAhQAAAJgCADQgDAEgGAAQgGAAgDgEQgDgDAAgJIAAgaQAAgJgCgEQgDgFgHAAQgGAAgDAFQgDAEAAAIIAAAbQAAAJgDADQgCAEgHAAQgGAAgCgEQgDgDAAgJIAAguQAAgIADgFQACgEAGAAQAEAAACACg");
        this.shape_1.setTransform(0,0,1.35,1.35);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-39.7,-11.7,79.6,23.4), null);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AASBGQgJgEAAgIQAAgEADgDQADgCAEAAIAKACQAJAEAFAAQAIAAAGgGQAEgEAAgKIAAgDQgEAHgFABQgFADgHAAQgNAAgKgLQgKgLAAgRQAAgQAKgMQAKgMAQAAQAGAAAEACQAEABAEAFQABgDAEgCIAFgDQAGABADAEQADAFAAAHIgBBCQgCAGgDAFQgEAIgJAFQgJAEgMABQgPAAgKgGgAAjgJQgEAFAAAIQAAAJAEAEQAEAGAHAAQAGAAAFgGQAEgEAAgJQAAgIgEgFQgFgGgGABQgHgBgEAGgADlBIQgEgDAAgFIABgEIABgEIAKgVIgXg1IgBgDIgBgDQAAgEAEgEQADgEAFAAQAEAAACADQADACACAHIANAiIAOgkQADgFACgCQACgDAEAAQAFABADADQADACAAAGIgBADIgBAFIgjBSQgCAFgDACQgCACgDAAQgFAAgDgDgAicAgQgKgMAAgQQAAgQAKgMQAKgMAQAAQAGAAAEACQAFABADAFQACgFADAAQACgCAEgBQAGABACAEQADAEAAAIIAAAtQAAAKgDADQgCAEgGAAQgEAAgDgCIgEgGQgEAEgEADQgFACgGAAQgPAAgKgMgAiKgJQgEAFAAAHQAAAKAEAEQAEAFAGAAQAHAAAEgGQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFgAC4AqIgGgFIgXgfIAAAUQAAAJgCAFQgDADgGAAQgGAAgDgDQgDgFAAgJIAAhNQAAgIADgFQADgEAGAAQAGAAADAEQACAFAAAIIAAAqIAUgUIAGgFIAGgCQADAAAEADQACADAAADIgBAGIgEAGIgQANIAWAZIADAGQABACAAADQAAADgDAEQgEACgEAAQgDAAgDgBgAgXAnQgDgDAAgKIAAgZQAAgJgCgEQgDgFgHABQgGgBgDAFQgDAEAAAIIAAAaQAAAKgDADQgCAEgHAAQgGAAgCgEQgDgDAAgKIAAgtQAAgIADgEQACgEAGgBQAEABACACQADAAACAFQAEgDAFgDQAGgCAFAAQANAAAIAIQAHAHAAAQIAAAfQAAAKgCADQgDAEgGAAQgGAAgDgEgAj8AqQgJAAgEgDQgEgEAAgHIAAgcIgCAAQgFAAgEgDQgDgBAAgFQAAgEADgCQADgCAGAAIACAAIAAgbQAAgJAEgEQAFgEAIABIATAAQALAAAGACQAHABAHAEQAJAGAHAMQAGALAAAOQAAAYgOAOQgNAOgYAAgAj1AVIALAAQAOgBAHgHQAHgJAAgOQAAgOgHgHQgHgIgPAAIgKAAIAAAWIAJAAQAEAAAEADQADACAAADQAAAFgDABQgDADgGAAIgIAAgADugrQgCgCAAgEIAAgDIACgEIALgOIAEgEIAEgBQADABAEACQACACAAAEIgBAEIgCAEIgMAMIgEAEIgDABQgEAAgCgCgAiNgyQgHgFAAgIQAAgEACgBQACgCADAAQAEgBADAFIABABIADADIAGABIAFAAIADgEIABgBQADgFAEABQADAAADACQACABAAAEQAAAIgHAFQgHAGgKgBQgKABgHgGg");
        this.shape.setTransform(0,0,1.35,1.35);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#008DF7").ss(3,1,1).p("AAjgJQgEAFAAAIQAAAJAEAFQAEAFAHAAQAGAAAFgFQAEgFAAgJQAAgIgEgFQgFgGgGAAQgHAAgEAGgAArgkQAGAAAEACQAEABAEAFQABgDAEgDQAEgCABAAQAGAAADAEQADAFAAAIIgBBCQgCAHgDAEQgEAIgJAFQgJAFgMAAQgPAAgKgFQgJgFAAgHQAAgEADgDQADgDAEAAIAKADQAJADAFAAQAIAAAGgFQAEgFAAgJIAAgDQgEAGgFACQgFADgHAAQgNAAgKgMQgKgLAAgRQAAgQAKgNQAKgLAQAAgACQhEQAGAAADAEQACAFAAAIIAAAqIAUgUIAGgFQADgCADAAQADAAAEADQACADAAADIgBAGIgEAFIgQAOIAWAZQACAEABACQABACAAADQAAAEgDADQgEADgEAAQgDAAgDgCIgGgFIgXgfIAAAVQAAAIgCAFQgDAEgGAAQgGAAgDgEQgDgFAAgIIAAhOQAAgJADgEQADgEAGAAgAEIhIQACACAAAEQAAADgBABIgCAEIgMAMQgBACgDACIgDABQgEAAgCgCQgCgCAAgEIAAgDIACgEIALgOQABgCADgCIAEgBQADAAAEADgADggkQAEAAACADQADACACAGIANAjIAOgkQADgGACgBQACgDAEAAQAFAAADADQADADAAAFIgBAEIgBAEIgjBTQgCAFgDACQgCACgDAAQgFAAgDgDQgEgDAAgFIABgEIABgEIAKgUIgXg2IgBgDIgBgDQAAgFAEgDQADgEAFAAgAkJg5QAFgEAIAAIATAAQALAAAGACQAHACAHAEQAJAGAHAMQAGALAAAOQAAAYgOAOQgNAOgYAAIgVAAQgJAAgEgDQgEgDAAgIIAAgcIgCAAQgFAAgEgDQgDgCAAgEQAAgEADgCQADgCAGAAIACAAIAAgbQAAgJAEgEgAj1gnIAAAWIAJAAQAEAAAEACQADADAAADQAAAEgDACQgDADgGAAIgIAAIAAAVIALAAQAOAAAHgIQAHgIAAgPQAAgOgHgIQgHgHgPAAgAiShEQACgDADAAQAEAAADAFIABABQABACACABQACABAEAAIAFgBQACgCABgBIABgBQADgFAEAAQADAAADADQACABAAAEQAAAHgHAGQgHAFgKAAQgKAAgHgFQgHgGAAgHQAAgEACgBgAhlgkQAGAAACAEQADAFAAAIIAAAuQAAAJgDADQgCAEgGAAQgEAAgDgBIgEgGQgEAEgEACQgFACgGAAQgPAAgKgLQgKgNAAgQQAAgRAKgMQAKgLAQAAQAGAAAEACQAFABADAFQACgFADgBQACgCAEAAgAiKgJQgEAFAAAHQAAAKAEAEQAEAFAGAAQAHAAAEgFQAEgGAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFgAg4giQADABACAFQAEgEAFgCQAGgCAFAAQANAAAIAIQAHAHAAAPIAAAhQAAAJgCADQgDAEgGAAQgGAAgDgEQgDgDAAgJIAAgaQAAgJgCgEQgDgFgHAAQgGAAgDAFQgDAEAAAIIAAAbQAAAJgDADQgCAEgHAAQgGAAgCgEQgDgDAAgJIAAguQAAgIADgFQACgEAGAAQAEAAACACg");
        this.shape_1.setTransform(0,0,1.35,1.35);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AASBGQgJgEAAgIQAAgEADgDQADgCAEAAIAKACQAJAEAFAAQAIAAAGgGQAEgEAAgKIAAgDQgEAHgFABQgFADgHAAQgNAAgKgLQgKgLAAgRQAAgQAKgMQAKgMAQAAQAGAAAEACQAEABAEAFQABgDAEgCIAFgDQAGABADAEQADAFAAAHIgBBCQgCAGgDAFQgEAIgJAFQgJAEgMABQgPAAgKgGgAAuAXQAGAAAFgGQAEgEAAgJQAAgIgEgFQgFgGgGABQgHgBgEAGQAEgGAHABQAGgBAFAGQAEAFAAAIQAAAJgEAEQgFAGgGAAQgHAAgEgGQgEgEAAgJQAAgIAEgFQgEAFAAAIQAAAJAEAEQAEAGAHAAIAAAAgADlBIQgEgDAAgFIABgEIABgEIAKgVIgXg1IgBgDIgBgDQAAgEAEgEQADgEAFAAQAEAAACADQADACACAHIANAiIAOgkQADgFACgCQACgDAEAAQAFABADADQADACAAAGIgBADIgBAFIgjBSQgCAFgDACQgCACgDAAQgFAAgDgDgAicAgQgKgMAAgQQAAgQAKgMQAKgMAQAAQAGAAAEACQAFABADAFQACgFADAAQACgCAEgBQAGABACAEQADAEAAAIIAAAtQAAAKgDADQgCAEgGAAQgEAAgDgCIgEgGQgEAEgEADQgFACgGAAQgPAAgKgMgAiAAWQAHAAAEgGQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFQAEgFAGAAQAHAAAEAFQAEAFAAAHQAAAIgEAFQgEAGgHAAQgGAAgEgFQgEgEAAgKQAAgHAEgFQgEAFAAAHQAAAKAEAEQAEAFAGAAIAAAAgAC4AqIgGgFIgXgfIAAAUQAAAJgCAFQgDADgGAAQgGAAgDgDQgDgFAAgJIAAhNQAAgIADgFQADgEAGAAQAGAAADAEQACAFAAAIIAAAqIAUgUIAGgFIAGgCQADAAAEADQACADAAADIgBAGIgEAGIgQANIAWAZIADAGQABACAAADQAAADgDAEQgEACgEAAQgDAAgDgBgAgXAnQgDgDAAgKIAAgZQAAgJgCgEQgDgFgHABQgGgBgDAFQgDAEAAAIIAAAaQAAAKgDADQgCAEgHAAQgGAAgCgEQgDgDAAgKIAAgtQAAgIADgEQACgEAGgBQAEABACACQADAAACAFQAEgDAFgDQAGgCAFAAQANAAAIAIQAHAHAAAQIAAAfQAAAKgCADQgDAEgGAAQgGAAgDgEgAj8AqQgJAAgEgDQgEgEAAgHIAAgcIgCAAQgFAAgEgDQgDgBAAgFQAAgEADgCQADgCAGAAIACAAIAAgbQAAgJAEgEQAFgEAIABIATAAQALAAAGACQAHABAHAEQAJAGAHAMQAGALAAAOQAAAYgOAOQgNAOgYAAgAj1AVIALAAQAOgBAHgHQAHgJAAgOQAAgOgHgHQgHgIgPAAIgKAAIAKAAQAPAAAHAIQAHAHAAAOQAAAOgHAJQgHAHgOABIgLAAIAAgVIAIAAQAGAAADgDQADgBAAgFQAAgDgDgCQgEgDgEAAIgJAAIAAgWIAAAWIAJAAQAEAAAEADQADACAAADQAAAFgDABQgDADgGAAIgIAAIAAAVgADugrQgCgCAAgEIAAgDIACgEIALgOIAEgEIAEgBQADABAEACQACACAAAEIgBAEIgCAEIgMAMIgEAEIgDABQgEAAgCgCgAiNgyQgHgFAAgIQAAgEACgBQACgCADAAQAEgBADAFIABABIADADIAGABIAFAAIADgEIABgBQADgFAEABQADAAADACQACABAAAEQAAAIgHAFQgHAGgKgBQgKABgHgGg");
        this.shape_2.setTransform(0,0,1.35,1.35);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-39.7,-11.7,79.6,23.4), null);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap9();
        this.instance.parent = this;
        this.instance.setTransform(-55.8,-60.7,1.66,1.66);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55.8,-60.7,111.2,121.2);
    
    
    (lib.Tween9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap7();
        this.instance.parent = this;
        this.instance.setTransform(-79.8,-96.3,1.66,1.66);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-79.8,-96.3,159.4,192.6);
    
    
    (lib.Tween8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#ADD2FF").s().p("Ag4EBQlHgJjIhxQjMh0DCiIQBDguBignQBSggAhgDIB/gMQB9gJByACQFkAJDKB7QAzAoASAzQAVA4gfAzQhNCBlqAoQhkAOh9AAIg+AAg");
        this.shape.setTransform(0,0,0.509,0.509);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-35,-13.1,70.1,26.2);
    
    
    (lib.Tween7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(-586.7,-365.3,22.14,22.14);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-586.7,-365.3,1173.4,730.6);
    
    
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(-14,-14.3,1.66,1.66);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14,-14.3,28.2,28.2);
    
    
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFF598").s().p("AhzBGQg3gRgEgfQgFgfAwgcQAwgeBJgIQBIgKA2AQQA3ARAEAgQAFAegwAdQgwAchJAKQgZADgYAAQgqAAgjgKg");
        this.shape.setTransform(0,0,0.619,0.619);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.9,-4.9,21.8,9.9);
    
    
    (lib.Symbol2_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF00").s().p("Ai9BIQhOgeAAgqQAAgpBOgdQBPgeBuAAQBvAABPAeQBOAdAAApQAAAqhOAeQhPAdhvAAQhuAAhPgdg");
        this.shape_2.setTransform(16.6,6.3,0.619,0.619);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33.2,12.6);
    
    
    (lib.ClipGroup_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhiDDIAAmFIDFAAIAAGFg");
        mask.setTransform(9.9,19.5);
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0092A6").s().p("AhiBPQABh+AJgwQAJgwA0gdQAagOAXgEIAFgCQAGgCAGAAQAZAAATAdQASAbgCCKQgBBGgFBBIi/A8QgBg1ABg/g");
        this.shape.setTransform(9.9,19.5);
    
        var maskedShapeInstanceList = [this.shape];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,19.8,39), null);
    
    
    (lib.ClipGroup = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhiDDIAAmFIDFAAIAAGFg");
        mask.setTransform(10,19.5);
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#007688").s().p("AhiBPQABh+AJgwQAJgwA0gdQAagOAXgEIAFgCQAGgCAGAAQAZAAATAcQASAbgCCLQgCBGgFBBIi+A8QgBg1ABg/g");
        this.shape.setTransform(10,19.5);
    
        var maskedShapeInstanceList = [this.shape];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,19.8,39.1), null);
    
    
    (lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AglDDIAAmFIBKAAIAAGFg");
        mask_1.setTransform(3.8,19.5);
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0092A6").s().p("AgiCHQgHkBALgrQAHgdAJAAQAEAAADAEQAIAEAKAOQAUAdADAwQAFBNgCDVg");
        this.shape_1.setTransform(3.7,19.5);
    
        var maskedShapeInstanceList = [this.shape_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,7.5,39.1), null);
    
    
    (lib.ClipGroup_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AguDDIAAmFIBdAAIAAGFg");
        mask_1.setTransform(4.8,19.5);
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#007688").s().p("AAUDCIhAg7QgChBgBhGQgBiKAJgbQAJgdAMAAQAFAAADAEQALAEAMAOQAZAdAFAwQAGBNgCDVg");
        this.shape_1.setTransform(4.8,19.5);
    
        var maskedShapeInstanceList = [this.shape_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.1,0,9.5,39), null);
    
    
    (lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        mask_2.graphics.p("AgMDDIAAmFIAZAAIAAGFg");
        mask_2.setTransform(1.3,19.5);
    
        // Layer 3
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#0092A6").s().p("AgLCHQgDkBAEgrQADgdADAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAABQACAEADAOQAHAdABAwQACBNAADVg");
        this.shape_2.setTransform(1.3,19.5);
    
        var maskedShapeInstanceList = [this.shape_2];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0.1,0,2.6,39), null);
    
    
    (lib.ClipGroup_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        mask_2.graphics.p("AgMDDIAAmFIAZAAIAAGFg");
        mask_2.setTransform(1.3,19.5);
    
        // Layer 3
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#007688").s().p("AgLCHQgCkBADgsQADgcADAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAABQACAEAEAOQAHAdABAwQABBNAADVg");
        this.shape_2.setTransform(1.3,19.5);
    
        var maskedShapeInstanceList = [this.shape_2];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,2.6,39.1), null);
    
    
    (lib.ClipGroup_0_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        mask_3.graphics.p("AgMDDIAAmFIAZAAIAAGFg");
        mask_3.setTransform(1.3,19.5);
    
        // Layer 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0092A6").s().p("AgKhfQABgwAHgdQACgOADgEIABgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQADAAADAdQAEArgDEBIgYA8QAAjVAChNg");
        this.shape_3.setTransform(1.3,19.5);
    
        var maskedShapeInstanceList = [this.shape_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,2.6,39), null);
    
    
    (lib.ClipGroup_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        mask_3.graphics.p("AgMDDIAAmFIAZAAIAAGFg");
        mask_3.setTransform(1.3,19.5);
    
        // Layer 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgLhfQACgwAGgdQADgOADgEIACgEQADAAADAcQADAsgCEBIgYA8QAAjVABhNg");
        this.shape_3.setTransform(1.3,19.5);
    
        var maskedShapeInstanceList = [this.shape_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,2.6,39.1), null);
    
    
    (lib.ClipGroup_0_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        mask_4.graphics.p("AglDDIAAmFIBKAAIAAGFg");
        mask_4.setTransform(3.8,19.5);
    
        // Layer 3
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0092A6").s().p("AghhfQADgwAUgdQAKgOAIgEIACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAJAAAHAdQALArgHEBIhHA8QgCjVAFhNg");
        this.shape_4.setTransform(3.8,19.5);
    
        var maskedShapeInstanceList = [this.shape_4];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,7.5,39), null);
    
    
    (lib.ClipGroup_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        mask_4.graphics.p("AgrDDIAAmFIBXAAIAAGFg");
        mask_4.setTransform(4.4,19.5);
    
        // Layer 3
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#007688").s().p("AgmhfQAEgwAXgdQALgOAKgEIACgCQACgCADAAQALAAAJAcQAIAbgCCLQAABGgCBBIhBA6IgSACQgCjVAGhNg");
        this.shape_4.setTransform(4.4,19.5);
    
        var maskedShapeInstanceList = [this.shape_4];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,8.7,39.1), null);
    
    
    (lib.shadow = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#558C00").s().p("AkYA/QhfgVgSgdQgEgGAAgHQABgkB0gbQB0gaCkAAQCkAAB1AaQB1AbgBAkQABAHgEAGQgSAdhfAVQh1AbikABQikgBh0gbg");
        this.shape.setTransform(39.8,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-9.1,79.5,18.1);
    
    
    (lib.Symbol15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Symbol14();
        this.instance.parent = this;
        this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance.cache(-76,-19,152,39);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Symbol14();
        this.instance_1.parent = this;
        this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance_1.cache(-76,-19,152,39);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-73.8,-17.4,147.8,34.8), null);
    
    
    (lib.Symbol10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_0_1();
        this.instance.parent = this;
        this.instance.setTransform(-0.3,0,0.356,0.356,0,0,0,4.1,19.4);
    
        this.instance_1 = new lib.ClipGroup_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.1,0,0.356,0.356,0,0,0,4.7,19.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.8,-6.9,3.7,13.9), null);
    
    
    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#007688").s().p("AAADCQAGk4gMggQgNggACgNIAOACQADADADAIQAIASADAeQAEAyAAEYg");
        this.shape.setTransform(0.2,0,0.356,0.356);
    
        this.instance = new lib.ClipGroup_0_2();
        this.instance.parent = this;
        this.instance.setTransform(-0.2,-0.1,0.356,0.356,0,0,0,1.4,19.1);
    
        this.instance_1 = new lib.ClipGroup_2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.2,-0.1,0.356,0.356,0,0,0,1.1,19.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-0.7,-6.9,1.6,14), null);
    
    
    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#007688").s().p("AgNDEQAAkYADgyQACgeAHgSQACgIADgDIAKgCIgKAgQgGAUgBCrIAACog");
        this.shape.setTransform(-0.1,0,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3FAFF").s().p("AAAATQgCgFAAgMQAAgKABgFQABgJABADIABAEIgCAFQgBAEABAIIAAAKQABABAAAAQAAAAABAAQAAgBAAAAQABgBAAgBQABALgCAAIgCgCg");
        this.shape_1.setTransform(0.2,0.9,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#81DEEA").s().p("AgFAAQAAgXAFAAQAGAAAAAXQAAAYgGAAQgFAAAAgYg");
        this.shape_2.setTransform(0.3,0.9,0.356,0.356);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgHAAQABgeAGAAQADAAADAJQACAKAAALQAAANgCAJQgDAJgDAAQgGAAgBgfg");
        this.shape_3.setTransform(0.1,0.9,0.356,0.356);
    
        this.instance = new lib.ClipGroup_0_3();
        this.instance.parent = this;
        this.instance.setTransform(0.3,-0.1,0.356,0.356,0,0,0,1.2,19.1);
    
        this.instance_1 = new lib.ClipGroup_3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.2,-0.1,0.356,0.356,0,0,0,1.2,19.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-0.6,-6.9,1.4,14), null);
    
    
    (lib.Symbol7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#81DEEA").s().p("AALBgQAHghgChQQgBgxgPgBQgQAJgEgGQgJgLAOgPQANgNAMgDQALgCADAfQACAZgBBQQgBA/gHALQgDAFgCAAQgCAAABgLg");
        this.shape.setTransform(0.5,-1.4,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3FAFF").s().p("AAAATQgHgEgBgNQAAgIADgGQAEgKAEADIABABIAAADQAAACgEADQgFAEABAIQABAIADACQADACADgEQAFgGgDALQgCAGgDAAIgDgCg");
        this.shape_1.setTransform(0.1,0.6,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#81DEEA").s().p("AgHARQgEgHAAgKQAAgIAEgIQADgHAEAAQAFAAADAHQAEAIAAAIQAAAKgEAHQgDAHgFAAQgEAAgDgHg");
        this.shape_2.setTransform(0.1,0.6,0.356,0.356);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgMAWQgGgJAAgNQAAgMAGgJQAFgJAHAAQAIAAAGAJQAFAJAAAMQAAANgFAJQgGAJgIAAQgHAAgFgJg");
        this.shape_3.setTransform(-0.1,0.6,0.356,0.356);
    
        this.instance = new lib.ClipGroup_0_4();
        this.instance.parent = this;
        this.instance.setTransform(0.5,-0.1,0.356,0.356,0,0,0,3.8,19.1);
    
        this.instance_1 = new lib.ClipGroup_4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,-0.1,0.356,0.356,0,0,0,4.8,19.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1.7,-6.9,3.6,13.9), null);
    
    
    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#81DEEA").s().p("AAgBoQgDgDAAgDQADgLACgSQADgigFgyQgFgygcgBQggAHgJgGQgSgMAagOQAXgMAagCQAUgBAIAfQAGAaACBPQABBAgLAKQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
        this.shape.setTransform(1.2,-1.8,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3FAFF").s().p("AgBATQgKgEgBgNQAAgIAEgGQAHgKAFADIACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBABgGADQgHAEACAIQABAIAEACQAEADAEgFQAHgGgEALQgBAGgFAAIgGgCg");
        this.shape_1.setTransform(-1.8,0.6,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#81DEEA").s().p("AgLARQgFgHAAgKQAAgJAFgHQAFgHAGAAQAHAAAFAHQAFAHAAAJQAAAKgFAHQgFAHgHAAQgGAAgFgHg");
        this.shape_2.setTransform(-1.7,0.6,0.356,0.356);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgPAWQgGgJAAgNQAAgMAGgJQAHgJAIAAQAJAAAHAJQAGAJAAAMQAAANgGAJQgHAJgJAAQgIAAgHgJg");
        this.shape_3.setTransform(-1.9,0.6,0.356,0.356);
    
        this.instance = new lib.ClipGroup_0();
        this.instance.parent = this;
        this.instance.setTransform(0.1,-0.1,0.356,0.356,0,0,0,9.3,19.1);
    
        this.instance_1 = new lib.ClipGroup();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.2,-0.1,0.356,0.356,0,0,0,10,19.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-3.8,-6.9,7.7,13.9), null);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Symbol15();
        this.instance.parent = this;
        this.instance.setTransform(0.1,-0.1);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},42).to({alpha:0},42).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.Symbol14();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.1,-0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-73.7,-17.6,147.8,34.9);
    
    
    (lib.thancay = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Tween7("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-137.2,386,1,1,0,0,0,-141.8,505.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12},28).to({rotation:0},27).wait(1));
    
        // Layer 2
        this.instance_1 = new lib.Symbol12();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-137.1,385.9,1,1,0,0,0,-138.2,384.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-138.1,regY:385.2,rotation:12,x:-137.4,y:386.1},28).to({regX:-138.2,regY:384.9,rotation:0,x:-137.1,y:385.9},27).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-582.1,-485,1173.4,901.3);
    
    
    (lib.guong = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween3("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16,15.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},169).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Bitmap11();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.2,-0.1,1.66,1.66);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.2,-0.1,30,29.9);
    
    
    (lib.ava = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.shadow("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(60,164.6,0.377,0.702,0,0,0,39.8,4.5);
        this.instance.alpha = 0.602;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ava, new cjs.Rectangle(23,77,80,100), null);
    
    
    (lib.dangky_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0079FF").s().p("AgtA5QgEgFAAgGIAAgIIAEgJIAOgdIgOgdIgEgJIAAgHQAAgHAEgEQADgFAHABQAEAAADACQAEACADAFIAVAmIAEAHIAAAGIAAAHIgEAGIgVAmQgDAGgFACQgCACgEAAQgHABgDgFgAAGAmQgCgEAAgDIAAgGQACgCAAgDIAMgUIgMgTQAAgDgCgCIAAgFQAAgFACgEQAEgCAFAAQADAAAEACQADABACADIATAZIAEAFIAAAEIAAAFIgEAEIgTAZQgCAEgFACQgCACgDgBQgFAAgEgDg");
        this.shape.setTransform(86.5,13.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0079FF").s().p("AgzA5QgFgFAAgGIABgIIAEgJIANgdIgNgdIgEgJIgBgHQAAgHAFgEQACgFAHABQAEAAAEACQADACADAFIAWAmIAEAHIAAAGIAAAHIgEAGIgWAmQgDAGgFACQgCACgEAAQgHABgCgFgAANAmQgDgEAAgDIAAgGQACgCABgDIAMgUIgMgTIgDgFIAAgFQAAgFADgEQAEgCAFAAQADAAAEACQACABADADIATAZIADAFIABAEIgBAFIgDAEIgTAZQgDAEgEACQgCACgDgBQgFAAgEgDg");
        this.shape_1.setTransform(89.8,13.1);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#0079FF").s().p("AghAqQgDgEAAgFIAAgFIADgGIAKgWIgKgVIgDgHIAAgFQAAgFADgDQACgDAFgBQADAAADACQACABADAEIAPAcIADAGIAAAEIAAAFIgDAFIgPAcQgDAEgDACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgFAAgCgEgAAFAcQgCgDAAgCIAAgEIACgFIAJgOIgJgOIgCgEIAAgDQAAgEACgDQACgCAEAAIAFACQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAOATIADADIAAADIAAAEIgDACIgOATQgCADgDACIgEABQgEgBgCgCg");
        this.shape_2.setTransform(86.5,13.1,1.35,1.35);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_1}]},10).wait(11));
    
        // Layer 1
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(36.9,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(9).to({_off:false},0).to({alpha:1},10).wait(11));
    
        // Layer 3
        this.instance_1 = new lib.Symbol2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(36.9,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.8,0.8,94.4,23.4);
    
    
    (lib.dangky = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    
        // Layer 1
        this.instance = new lib.dangky_1();
        this.instance.parent = this;
        this.instance.setTransform(41,10.4,1,1,0,0,0,38.1,11.6);
        this.instance.shadow = new cjs.Shadow("rgba(0,153,255,0.298)",0,0,5);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#81DEEA").s().p("AAvBoQgFgDAAgDQAEgLACgRQAEgjgJgyQgIgygmgCQgrAGgNgGQgZgMAjgOQAggLAjgBQAcgBAKAfQAJAbAFBPQAEBAgPAKIgGABQgDAAgDgCg");
        this.shape.setTransform(174,89,0.356,0.356);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3FAFF").s().p("AgBATQgNgEgBgNQgBgIAGgGQAIgKAHADIACABQABAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQAAACgJADQgIAEACAIQACAIAFACQAFACAFgEQAJgGgFALQgCAGgHAAIgGgCg");
        this.shape_1.setTransform(170.5,91.5,0.356,0.356);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#81DEEA").s().p("AgOARQgGgHAAgKQAAgJAGgHQAGgHAIAAQAIAAAHAHQAGAHAAAJQAAAKgGAHQgHAHgIAAQgIAAgGgHg");
        this.shape_2.setTransform(170.6,91.5,0.356,0.356);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#007688").s().p("AgSAWQgIgJAAgNQAAgLAIgKQAIgJAKAAQALAAAIAJQAIAJAAAMQAAANgIAJQgIAJgLAAQgKAAgIgJg");
        this.shape_3.setTransform(170.4,91.5,0.356,0.356);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0092A6").s().p("Ah6BOQACh9ALgwQAKgwBBgcQAggPAdgFIAZgDQAcACAXAaQAWAbgDCMQgCBFgGBBIjrA8QgBg1AAhAg");
        this.shape_4.setTransform(172.5,91,0.356,0.356);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#007688").s().p("Ah5BPQACh+AKgwQALgwBAgdQAhgOAdgEIAYgEQAdABAWAbQAWAbgDCLQgBBGgGBBIjsA8QgBg1ABg/g");
        this.shape_5.setTransform(172.1,91.1,0.356,0.356);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFF1E1").s().p("Ag7AWQANgeAtgUQAVgKAUgEQATgBAGAEQAGAFgPAAQgOAAghANQgiAPgJAJIgZAiQgFAGgBAAQgDAAAJgVg");
        this.shape_6.setTransform(171.3,85.4,0.356,0.356);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgHBlQgDgIgCjCIAVAKQAFCvgCAGQgDAMgJAAQgCAAgFgBg");
        this.shape_7.setTransform(172.2,92,0.356,0.356);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgOBGQACgKAHhHIAGhHIAPAJIgDBAQgEBCgEALQgFANgIABIgBABQgHAAACgNg");
        this.shape_8.setTransform(170.3,93.3,0.356,0.356);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F45A31").s().p("AgSBRQgDhlAJg1IAggPIgDAvQgCAxgDAKQgFARgFA2g");
        this.shape_9.setTransform(169.5,93.1,0.356,0.356);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#9E250D").s().p("AgTBYIARiwIADALIALAKIAHgDQADASgGA+QgEAzgEATQgIAJgQAAIgDgBg");
        this.shape_10.setTransform(170.2,93.1,0.356,0.356);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFE266").s().p("AAqBvIhVghIASiaIADgEIAdgTQAfgSADAIQACAGgCBpQgDBnADAEIADAEIgCgCg");
        this.shape_11.setTransform(170.2,91.9,0.356,0.356);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#E07719").s().p("AgVBnIAIjWIAFATIALADQACAKAGgJQAHgIgDAHQAFALABBQQABBMgCAPQgBAJgNAGIgNAEg");
        this.shape_12.setTransform(172,91.9,0.356,0.356);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgKBtQgEgMgFjPIAfAPQAJCygCAKQgFASgOAAQgEAAgGgCg");
        this.shape_13.setTransform(174,90.9,0.356,0.356);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#37C8EF").s().p("AA+BxIh+gwIAZiUIAFgFQAWgLAWgHQAugQAEAMQAEAJgFBoQgEBlAFAGIAFAGIgDgDg");
        this.shape_14.setTransform(171.1,91.2,0.356,0.356);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#1B6ADD").s().p("AgfBmIAMjYIAGAHIARAFIACAGQAEADAGgIQAKgMgFAKQAHARACBQQADBGgDAWQgBAOgUAJIgTAGg");
        this.shape_15.setTransform(173.8,91.2,0.356,0.356);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#016A75").s().p("AhjA6QABhkAbhGQAfgNAhgKQBCgTANASQAbAlABAfQABAUgGA2QgBAvgEAOQgDAIgLAGQgLAHigA6QgFglABgzg");
        this.shape_16.setTransform(172.4,91.5,0.356,0.356);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#007D8E").s().p("AhlAmQAHiCAZgaQAggiAzgJQA3gJAQAiIAUAwIgCCzIjPBIQgBg8AEhBg");
        this.shape_17.setTransform(172.6,91,0.356,0.356);
    
        this.instance = new lib.guong();
        this.instance.parent = this;
        this.instance.setTransform(126.1,87.2,0.601,0.601,0,0,0,15.2,15);
    
        this.instance_1 = new lib.Bitmap14();
        this.instance_1.parent = this;
        this.instance_1.setTransform(78,65);
    
        this.instance_2 = new lib.thancay();
        this.instance_2.parent = this;
        this.instance_2.setTransform(135.7,68.3,0.022,0.022,-120,0,0,2,1.2);
    
        this.instance_3 = new lib.thancay();
        this.instance_3.parent = this;
        this.instance_3.setTransform(88,91.7,0.045,0.045,0,0,0,1.1,1.1);
    
        this.instance_4 = new lib.Bitmap8();
        this.instance_4.parent = this;
        this.instance_4.setTransform(64.2,25.3,0.998,0.998);
    
        this.instance_5 = new lib.Tween9("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(108.6,57.9,0.601,0.601);
    
        this.instance_6 = new lib.Bitmap10();
        this.instance_6.parent = this;
        this.instance_6.setTransform(34,89);
    
        this.instance_7 = new lib.Tween10("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(33.6,82.8,0.601,0.601);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,176.9,124), null);
    
    
    (lib.nhanhanvat_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_nha_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(170));
    
        // dangky
        this.dangky = new lib.dangky();
        this.dangky.parent = this;
        this.dangky.setTransform(-28.4,83.5,1,1,0,0,0,45.6,11.5);
    
        this.timeline.addTween(cjs.Tween.get(this.dangky).wait(170));
    
        // Layer 15
        this.instance = new lib.Symbol4();
        this.instance.parent = this;
        this.instance.setTransform(-80.6,-23,1,1,0,0,0,88.4,62);
        this.instance.cache(-2,-2,181,128);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(169));
    
        // Layer 2
        this.instance_1 = new lib.Symbol5();
        this.instance_1.parent = this;
        this.instance_1.setTransform(3.3,6);
    
        this.instance_2 = new lib.Symbol6();
        this.instance_2.parent = this;
        this.instance_2.setTransform(4,6.3);
    
        this.instance_3 = new lib.Symbol7();
        this.instance_3.parent = this;
        this.instance_3.setTransform(5.8,6.3);
    
        this.instance_4 = new lib.Symbol8();
        this.instance_4.parent = this;
        this.instance_4.setTransform(6.9,6.3);
    
        this.instance_5 = new lib.Symbol9();
        this.instance_5.parent = this;
        this.instance_5.setTransform(8.3,6.3);
    
        this.instance_6 = new lib.Symbol10();
        this.instance_6.parent = this;
        this.instance_6.setTransform(9.4,6.6);
    
        this.instance_7 = new lib.Symbol11();
        this.instance_7.parent = this;
        this.instance_7.setTransform(12.6,6.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},25).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},47).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},23).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(31));
    
        // Layer 5
        this.instance_8 = new lib.Symbol2_1("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-128.8,-38.4,1.159,1.159,0,0,0,16.6,0);
        this.instance_8.alpha = 0;
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.4,y:-41.7,alpha:1},27).to({regX:16.6,scaleX:1.16,scaleY:1.16,x:-128.8,y:-38.4,alpha:0},29).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.4,y:-41.7,alpha:1},28).to({regX:16.6,scaleX:1.16,scaleY:1.16,x:-128.8,y:-38.4,alpha:0},31).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.4,y:-41.7,alpha:1},29).to({regX:16.6,scaleX:1.16,scaleY:1.16,x:-128.8,y:-38.4,alpha:0},24).wait(1));
    
        // Layer 3
        this.instance_9 = new lib.Symbol2_1("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-131.7,-38.4,0.261,0.261,0,0,0,16.7,0);
        this.instance_9.alpha = 0;
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regX:16.6,scaleX:0.36,scaleY:0.36,x:-131.5,y:-38.9,alpha:0.469},3).to({scaleX:1.16,scaleY:1.16,x:-129.8,y:-42.4,alpha:0},24).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.7,y:-38.4,alpha:0.531},29).to({regX:16.6,scaleX:1.16,scaleY:1.16,x:-129.8,y:-42.4,alpha:0},28).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.7,y:-38.4,alpha:0.531},31).to({regX:16.6,scaleX:1.16,scaleY:1.16,x:-129.8,y:-42.4,alpha:0},29).to({scaleX:0.37,scaleY:0.37,x:-131.5,y:-38.9,alpha:0.461},21).to({regX:16.7,scaleX:0.26,scaleY:0.26,x:-131.7,y:-38.4,alpha:0},3).wait(1));
    
        // Layer 7
        this.instance_10 = new lib.Tween1("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-148.4,-9.9,0.601,0.601,0,0,0,0,-5);
        this.instance_10.alpha = 0;
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regX:-0.1,scaleX:0.7,scaleY:0.7,x:-148.5,alpha:0.891},3).to({regX:0,scaleX:1.44,scaleY:1.44,x:-148.4,alpha:0},24).to({scaleX:0.6,scaleY:0.6,alpha:1},29).to({scaleX:1.44,scaleY:1.44,alpha:0},28).to({scaleX:0.6,scaleY:0.6,alpha:1},31).to({scaleX:1.44,scaleY:1.44,alpha:0},29).to({scaleX:0.71,scaleY:0.71,alpha:0.879},21).to({scaleX:0.6,scaleY:0.6,alpha:0},3).wait(1));
    
        // Layer 6
        this.instance_11 = new lib.Tween1("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(-148.4,-10,1.455,1.455,0,0,0,0,-5);
        this.instance_11.alpha = 0;
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({scaleX:0.44,scaleY:0.44,y:-9.9,alpha:0.949},27).to({scaleX:1.46,scaleY:1.46,y:-10,alpha:0},29).to({scaleX:0.44,scaleY:0.44,y:-9.9,alpha:0.949},28).to({scaleX:1.46,scaleY:1.46,y:-10,alpha:0},31).to({scaleX:0.44,scaleY:0.44,y:-9.9,alpha:0.949},29).to({scaleX:1.46,scaleY:1.46,y:-10,alpha:0},24).wait(1));
    
        // Layer 16
        this.instance_12 = new lib.Tween8("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(-59.1,-84.2,0.899,0.899,0,0,0,0,-13);
        this.instance_12.alpha = 0;
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({regY:-12.8,scaleX:0.18,scaleY:0.18,y:-81.2,alpha:0.461},27).to({regY:-13,scaleX:0.9,scaleY:0.9,y:-84.2,alpha:0},29).to({regY:-12.8,scaleX:0.18,scaleY:0.18,y:-81.2,alpha:0.461},28).to({regY:-13,scaleX:0.9,scaleY:0.9,y:-84.2,alpha:0},31).to({regY:-12.8,scaleX:0.18,scaleY:0.18,y:-81.2,alpha:0.461},29).to({regY:-13,scaleX:0.9,scaleY:0.9,y:-84.2,alpha:0},24).wait(1));
    
        // Layer 14
        this.instance_13 = new lib.Tween8("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-59.1,-84.2,0.155,0.155,0,0,0,0,-13.2);
        this.instance_13.alpha = 0;
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({regX:-0.2,regY:-13.3,scaleX:0.26,scaleY:0.26,y:-83.9,alpha:0.891},3).to({regX:0,regY:-13,scaleX:1.06,scaleY:1.06,y:-81.2,alpha:0},24).to({regY:-13.2,scaleX:0.16,scaleY:0.16,y:-84.2,alpha:1},29).to({regY:-13,scaleX:1.06,scaleY:1.06,y:-81.2,alpha:0},28).to({regY:-13.2,scaleX:0.16,scaleY:0.16,y:-84.2,alpha:1},31).to({regY:-13,scaleX:1.06,scaleY:1.06,y:-81.2,alpha:0},29).to({regY:-13.2,scaleX:0.27,scaleY:0.27,y:-83.9,alpha:0.879},21).to({scaleX:0.16,scaleY:0.16,y:-84.2,alpha:0},3).wait(1));
    
        // Layer 8
        this.instance_14 = new lib.guong();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-42.9,2.2,0.601,0.601,0,0,0,15.2,15);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(169));
    
        // Layer 10
        this.instance_15 = new lib.Bitmap14();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-91,-20);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(169));
    
        // Layer 9
        this.instance_16 = new lib.thancay();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-33.3,-16.7,0.022,0.022,-120,0,0,2,1.2);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(169));
    
        // Layer 4
        this.instance_17 = new lib.thancay();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-81,6.7,0.045,0.045,0,0,0,1.1,1.1);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(169));
    
        // Layer 20 copy
        this.instance_18 = new lib.Tween11();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-60.4,-49.1,0.601,0.601);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(169));
    
        // Layer 17
        this.instance_19 = new lib.Tween9("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(-60.4,-27.1,0.601,0.601);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({scaleY:0.58,y:-25.4},27).to({scaleY:0.6,y:-27.1},29).to({scaleY:0.58,y:-25.4},29).to({scaleY:0.6,y:-27.1},30).to({scaleY:0.58,y:-25.4},29).to({scaleY:0.6,y:-27.1},24).wait(1));
    
        // Layer 19
        this.instance_20 = new lib.Bitmap10();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-135,4);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(169));
    
        // Layer 18
        this.instance_21 = new lib.Tween10("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(-135.4,-2.2,0.601,0.601);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({scaleY:0.63,y:-4},27).to({scaleY:0.6,y:-2.2},29).to({scaleY:0.63,y:-4},29).to({scaleY:0.6,y:-2.2},30).to({scaleY:0.63,y:-4},29).to({scaleY:0.6,y:-2.2},24).wait(1));
    
        // Layer 1
        this.instance_22 = new lib.Bitmap3();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-180,-19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(170));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-180,-85.2,207,212.2);
    
    
    // stage content:
    (lib.nhaava2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            //createjs.Sound.registerSound("sounds/voice_nha.mp3", "voice_nha"); 
            var icon_nhaSound, icon_nhaSoundTimeOut;
            root_nha = this;
            htcv_icon_nhaOver = function() {cv_icon_nhaOver();}
            htcv_icon_nhaOut = function() {cv_icon_nhaOut();}
            
            htcv_icon_nha_ShowReg = function() {cv_icon_nha_ShowReg();}
            function cv_icon_nha_ShowReg() {
                //console.log('cv_icon_nha_ShowReg');
                root_nha.ico.dangky.gotoAndStop(1);
                root_nha.icon_nha_check_pausable();
            }
            
            htcv_icon_nha_ShowAvaShadow = function() {cv_icon_nha_ShowAvaShadow();}
            function cv_icon_nha_ShowAvaShadow() {
                //console.log('cv_icon_nha_ShowAvaShadow');
                root_nha.ava.alpha = 1;
                root_nha.icon_nha_check_pausable();
            }
            
            function cv_icon_nhaOver() {
                root_nha.ico.over = true;
                root_nha.ico.play();
                //root_nha.hit.tit.over = true;
                //root_nha.hit.tit.gotoAndPlay(1);
                //icon_nhaSoundTimeOut = setTimeout(icon_nhaSoundTimeOutComplete, 500);
            }
            
            function cv_icon_nhaOut() {
                root_nha.ico.over = false;
                //root_nha.hit.tit.over = false;
                /*if (root_nha.hit.tit.currentFrame == 7) {
                    root_nha.hit.tit.play();
                }*/
                //clearTimeout(icon_nhaSoundTimeOut);
            }
            
            /*function icon_nhaSoundTimeOutComplete() {
                clearTimeout(icon_nhaSoundTimeOut);
                
                if (root_nha.ico.currentFrame == 0) {
                    icon_nhaSound = createjs.Sound.play("voice_nha");
                }
                root_nha.ico.play();
            }*/
            
            this.icon_nha_check_pausable = function() {
                //console.log('icon_nha_check_pausable');
                if (root_nha.ico.over == false && root_nha.ico.currentFrame == 0 && root_nha.currentFrame == 1) {
                    cvht_icon_nha_pause();
                }
            }
        }
        this.frame_1 = function() {
            this.stop();
            // cvht_icon_nha_loaded();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
    
        // ava
        this.ava = new lib.ava();
        this.ava.parent = this;
        this.ava.setTransform(2,2);
        this.ava.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.ava).wait(2));
    
        // ico
        this.ico = new lib.nhanhanvat_resize();
        this.ico.parent = this;
        this.ico.setTransform(182.4,87.4,1,1,0,0,0,0.4,0.4);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(107,109.5,207,212);
    // library properties:
    lib.properties = {
        width: 210,
        height: 215,
        fps: 30,
        color: "#000000",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/nhaava2017_atlas_.png", id:"nhaava2017_atlas_"}
        ],
        preloads: []
    };
    
    
    
    
    })(lib_nha = lib_nha||{}, images_nha = images_nha||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_nha, images_nha, createjs, ss, AdobeAn;