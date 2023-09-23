(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"rtv2017_atlas_", frames: [[191,128,19,17],[212,128,19,17],[0,121,122,99],[0,0,138,119],[124,128,31,74],[140,0,103,126],[157,128,32,24]]}
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
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap11 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap5 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap6 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap7 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap8 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["rtv2017_atlas_"];
        this.gotoAndStop(6);
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
    
    
    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F792B5").s().p("AiPAhQg7gMgBgSQAAgRA8gOQA8gOBTgBQBTgBA9AMQA7AMABASQAAARg8AOQg7AOhVABIgLAAQhMAAg4gLg");
        this.shape.setTransform(87.6,9.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F792B5").s().p("AgHArQhTgOg4gXQg5gVAEgSQACgSA+gCQA8gDBTAOQBTAOA4AWQA4AWgDASQgCASg+ACIgWABQg1AAhEgMg");
        this.shape_1.setTransform(-87.9,-8.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-107.9,-14,215.9,28.1);
    
    
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F792B5").s().p("ALdCBQg8gMAAgSQAAgSA7gNQA8gOBUgBQBUgBA8ALQA7AMABASQAAATg8ANQg7AOhUABIgNABQhMAAg3gMgAt1gqQhTgOg5gXQg4gWADgSQADgSA9gCQA8gDBUAOQBTAOA4AWQA5AXgDASQgDASg9ACIgWABQg2AAhEgMg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-107.9,-14,215.9,28.1);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B5DC4").s().p("AhOA+Qh9gUhvhRQgIgHABgQIABgIQACAEADACQBuBRB9AVQBfAPCigPQBEgGAegLQAngOAFgXQAOAqg4AUQgcALhGAGQhPAIg/AAQhCAAgxgJg");
        this.shape.setTransform(0.1,8.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DBCFE").s().p("AhOCIQh9gVhuhRQgDgDgCgDQgEgHABgKQACgeAvgnQAlggA0gUIgbANQgVAKgUAQQgmAfAKAYQAMAfBbAhQBfAiBVAAQEkAAgghkQhihliLgWQAtAFAqAQQAkAOAgATQAlAWAWAXIAqArQAZAaAJAXQAHARgDAOQgFAZgnAOQgeALhEAGQhQAHg/AAQhBAAgxgIgAgpiOQAdgCAbACQglgCgiADIAPgBg");
        this.shape_1.setTransform(-0.1,-1.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#B5E9FF").s().p("AioBPQhbghgNggQgKgXAngfQATgQAVgKIAbgNQAegOAjgHIA+gKQAigDAmACIAGAAIAGABQCKAWBiBkQAgBlkjAAQhWAAhegig");
        this.shape_2.setTransform(-0.8,-4.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-32.3,-15.6,64.7,31.4), null);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 13
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],1.7,11.4,-1.2,-7).s().p("AgVA5QgUgUgHgcQgHgZAGgVQAFgRAKgDQAPgDATArQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQAagBAMANQAJAIACAOIABAMIAAABIhKAZIAAgBg");
        this.shape.setTransform(5.6,-5.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],-7.5,17.1,8.6,-14.8).s().p("Ag6BTIgPgNIAAAAIBJgZQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgHgCgHQgCgPgJgKQgNgOgbABQgKgVgJgLIABgCQAGgRALgRQAVghAYAAQANAAAPALQAYASANAnQAJAZACAcQADAdgEAZQgEAYgIAKQgYAIgXAAQgnAAgggag");
        this.shape_1.setTransform(10.9,-6.6);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiPCEQgSgOgOgRIgLgQIgBgBIAIhUQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAbANQAhANAgAAQA3AAAqgmQgIgNgDgPQgGgcAFgXQAGgTAMgDQAJgCAJAIIABAAQAGgSALgSQAWghAbAAQAQAAAQAMQAZASAOAoQAJAbACAdQADAegFAZQgDAVgIALQgMAdgYAeQg3BHhNAMQgNACgOAAQhDABg3gwgAi1BTQAQAaAdAXQA0ArA/AAQAMAAAOgCQBHgLA1g/QAXgcAOgfQgWAIgWAAQgqAAghgaQgJgIgHgIQgIgGgGgKQgsAng4AAQgdAAgdgKQgSgGgPgJgAAVhvQgKADgFARQgFAVAGAaQAHAdAUASIABABIAAAAIAPANQAgAaAoAAQAXAAAYgIQAIgKAEgYQAEgYgDgcQgCgdgJgaQgNgngYgSQgPgLgOAAQgYAAgVAiQgLAQgGARIgBADQAJAKAKAVQAbAAANAPQAKAJACAPQACAIgBAGQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIAAgBIAAgMQgDgNgIgKQgNgNgZABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgSgogPAAIgCAAg");
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#B08AFF","#5500A0"],[0,1],-17.7,-0.8,18.4,-0.8).s().p("AiAAyQgdgXgQgaIAHhOQAPAJASAGQAdAKAdAAQA4AAAsgoQAGAKAIAHQAHAIAJAIQAhAaAqAAQAWAAAWgIQgOAfgXAbQg1A/hHALQgOACgMAAQg/AAg0grg");
        this.shape_3.setTransform(-0.8,8.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 2
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AAjAEIAAAAQAGAHAJAHQAgAZAoAAQAXAAAYgIQAIgJAEgZQAEgYgDgdQgCgdgJgZQgNgngYgSQgPgLgOAAQgYAAgVAhQgLARgGARQAAABgBABQAJALAKAVQAbgBANAPQAKAKACAPQACAHgBAHQAAACgCAAQgDAAAAgCQAAAAAAgBQABgFgBgHQgDgOgIgJQgNgNgZABQgCAAgCgDQgTgrgQADQgKADgFARQgFAVAGAaQAHAcAUATQAAAAABABgACJinQAZATAOAoQAJAaACAeQADAegFAZQgDAVgIALQgMAdgYAfQg3BHhNAMQgNACgOAAQhDAAg3gvQgSgPgOgRQgLgQAAAAIgBgBIAIhUQAAgBACgBQABgBABABIAbANQAhANAgAAQA3AAAqgmQgHgNgEgQQgGgbAFgXQAGgTAMgDQAJgCAJAIIABAAQAGgTALgRQAWgiAbAAQAQAAAQAMgACmApQgWAHgWAAQgqAAghgaQgJgIgHgHQgIgHgGgKQgsAng4AAQgdAAgdgKQgSgGgPgJIgHBPQAQAaAdAXQA0ArA/AAQAMAAAOgCQBHgLA1g/QAXgcAOgegABtgUIhKAY");
    
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.8,-18.9,39.6,37.9);
    
    
    (lib.Tween31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#B08AFF","#5500A0"],[0,1],-10.9,0,11,0).s().p("AhqCzQAEgZAKgcQAQgyAYgkQANgZAUg2IASgyIAQhcQAOgHARgFQAggJAdgBQgGCFgZBHQgYBFgPBEQgHAngEAbQhOgEg2gVg");
        this.shape.setTransform(-9.7,0);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AhCDRIgCAAIgHgBIgUgBQhCgGgugTIgCAAIAAgCQADgVAJgbQARg3AagnQAMgZAVg1IASgyIAQhfIABAAIAegLIACgBIAigIQASgDAQAAIACAAQAzAAAiAaQAiAaAQAxQAlB3AMA1QALA2gBAxIAAABIgBABQgTANhGAMQhOAOhOAAIgeAAgAgQACQgaBKgOBHQgHAigDAXIAeAAQBNAABMgNIAJgCIAAAAQAggHAjgKIAAAAIAMgGQABgwgLg1QgMg1glh1QgfhihjAAIgCAAQgGCFgYBIgAgyjBQgSAFgOAHIgRBcIgSAyQgUA2gMAZQgZAkgQAyQgJAcgFAZQA2AVBPAEQAEgcAIgmQAOhEAYhGQAYhGAGiFQgbABggAJg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],-27.6,0,13.9,0).s().p("AiHDMQACgXAHgiQAPhHAZhKQAahIAGiFIACAAQBiAAAeBiQAmB1ALA1QAMA1gBAwIgMAGIgBAAQgiAKggAHIAAAAIgKACQhLANhNAAIgeAAg");
        this.shape_2.setTransform(7,0);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21,-20.9,42.1,41.8);
    
    
    (lib.Tween30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],-6.6,0,6.7,0).s().p("AgpAtQgYgWADgZQABgVATgWQAMgNANgKIBRBoQgIAKgLAJQgTAOgTAAQgYAAgYgYg");
        this.shape.setTransform(-5.5,10.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AhkCdQgZgYACgcQACgZAYgZIASgQIAAgBIABgBQAOgNBNhQIBRhVQANgoAJAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAHAHgEA+QgGBTg0BeQgZAvgZAgIgCABIAAAAIgPARQgWASgXAAQgbAAgZgZgAhhA+QgTAWgCAVQgCAaAXAXQAZAXAYAAQAUAAASgOQAKgIAIgLIhQhpQgOAKgLANgABsilIgJAaIgBABIhNBRIhaBcIBRBpQAcglAZgwQAuhYAGhOQAEg9gFgEQgCAAgGALg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#B08AFF","#5500A0"],[0,1],-10.1,0.1,9.7,0.1).s().p("AhdA2IBahdIBNhQIABgBIAJgaQAFgLACgBQAGAEgFA+QgFBOguBYQgZAwgcAlg");
        this.shape_2.setTransform(2.5,-1.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("ABsilQgEAMgFAOIgBABQAAABhNBQQhFBHgVAWIBRBoQAcglAZgwQAuhYAGhOQAEg9gFgEQgCAAgGALgAB3izQAHAHgEA+QgGBTg0BeQgZAvgZAgIgCABIAAAAQgDAEgMANQgWASgXAAQgbAAgZgZQgZgYACgcQACgZAYgZQAMgLAGgFIAAgBIABgBQAOgNBNhQQBChEAPgRQANgoAJAAQACAAABACgAhhA+QgTAWgCAVQgCAaAXAXQAZAXAYAAQAUAAASgOQAKgIAIgLIhQhpQgOAKgLANg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.3,-19.2,26.8,38.5);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAlhWQgBAAgBgCQgEgOgBgQQAAggAYgUQAdgRBAAZQAMAEAEACQACABgBACQgBADgCgCQgCgBgKgDQg9gYgcANQgIAEgCACQgQAOABAeQABAPADAMAgBhDQgCACgCgCQgUgTgcgQQg5ghguAMQhCAQgjBtQgBACgCAAQgBgBgBAAQAAgBAAgBQAkhwBFgRQAwgMA6AiQAdAQAVAUQABACgBABgAEFgEQghALgRA7QgIAdgCAbQgBADgCAAQgBAAAAgBQgBgBAAgBQACgeAJgeQASg7AigMQACAAABACQABACgCABgAACCYQhjgQg4ApQgBABgBAAQgBAAAAgBQgCgCACgCQA6gqBkAQQAzAJApARQACABgBACQAAACgCAAQgpgRgygJg");
        this.shape.setTransform(5.5,0.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#520080","#000000"],[0,1],-3.1,2.9,0.8,0.3).s().p("AgUAwIAAgBQABgLgFgOQgFgPgHgCIABgDIADgGIAKgVQAOgbAIAAIAAAAQAIADAEAUIABAGIAAAFIABAYIAAALIABACIAOAPQAIAJAAADQAAACgGACQgIADgMAAQgPAAgQgFg");
        this.shape_1.setTransform(23.2,46);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#520080","#000000"],[0,1],-0.3,-1.4,0.3,1.2).s().p("AgGAWQgDgEgEgPQgEgQADgEIAGgDQAGgCAEAAQAGABAEAOQAEAMAAAJQAAAEgGADQgGACgFAAg");
        this.shape_2.setTransform(19,49.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#520080","#000000"],[0,1],3.8,-1.8,-0.4,-0.5).s().p("AgDA4QgCgDAAgNIABgXIAAgCIgIgJIgLgMIgDgEIgMgPQgMgUAFgIQACgDAGAAQAQAAAjARIASAIIAGADIABABQgCAGAEAQQADANADAFQgJARgOAMQgQAPgIAAg");
        this.shape_3.setTransform(13.1,50.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF0000").s().p("AgsgJIAEgBQAMgCAMAAQAjACAaAXg");
        this.shape_4.setTransform(1.3,47);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#FF73D4","#FF29A3"],[0,1],-8.4,-0.3,7.8,-0.3).s().p("AgOAnQgDgTgJgUIACgBIBZAWIACACQgJArgSAOQgMAJgKAAQgVAAgLgygAAEgJQgMAAgMACIgHADIgGgOQgRglgYghQATAKAbAGQAmAJAxAAIAQAAQAAAkgEAgIgCAMQgcgYglgCg");
        this.shape_5.setTransform(-0.7,46.2);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],-0.2,0.8,6.5,25.7).s().p("AkXC0IgSgIQgpgUgdggQAPgHAMgHQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgIg8IACgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAIgQgJQAlACAqAAIAMAAIAFAAQBzgBBkgTQB7gWBbgwQAJAIARACQAYACATgNQAUgOAHgWQADgNgBgJIAigcQAigdAcgeIAAABQAAABAAAAQAAABAAAAQAAABAAAAQABAAABABIAAAAIAJBOQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIABAAIgBAKQgFAzgbAwQgjBAhAAvQgQAMgSAKIgBgHQgDgVgMgDIgCAAQgMAAgRAjIgJAUIgXAKIgagMQgjgPgPAAQgJAAgDAEQgHALAMAUIAMARIglAIIACgMIAFgXIABgFIABgSIACgnIAAgGQAkgDAkgHQAugIAagNQATgIAOgKIAUgPIAMgKQAGgEAIgCQAvgKAagaQAQgPAFgSQACgGgDgDQgCgCgFABIgLAEQgQAFgJACQgPACgKgFQgGgDgBgDQgBgBAAAAQgBAAAAgBQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAJAIQAMAHASgDQAIgCAQgGIAOgDIAAABIAAADQgGARgOAPQgZAYgvAJQgHACgIAFIgMAKIgUAPQgNAKgSAIQg2AZhaAFIAAAAIAAAAIAAAAIgUAAQg+AAgugPQgOgFgLgGIgGgEIANgFIAKgBQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgCIgCAAQgTABgSAKQgMAGgEAEQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAAAIABABIACgBIAMgHIAKgEIADAFQAXAfARAjIACAFIAJATIAAAAQAJAWAEATIAAACIADALQgdADgdAAQhXAAhAgbg");
        this.shape_6.setTransform(4.8,31);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#020202").s().p("AAGBbQgIgHgMgTIAAgBQgLAJgNAAIgGAAIgCgBIABgCQAEgQAKgLQAHgGAIgCQgEgPgBgTQgDgfAGgVQAHgYATgMQAKgFAIgBIACAAIABAAIABABIABABIAKARQAKAXgHAYQgHAZgTAaQgKANgHAGQANAUgEAZIAAAGg");
        this.shape_7.setTransform(-7.1,-36.4);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AmpEYQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgFAOgNQALgMAQgKQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgNAFgRABQggACgOgRQgEgDABgDQAEgHAcgEQAYgDAbAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQgLAAgMgFQgagJgMgXQgDgHACgCQAGgGAkAPQAdANAgASIABAAIAJA8IgBABQgOAIgSAIQgbAMgSAAIgLgBgAiNDQIAGgCIAAAAIgJAEIADgCgAiDDMIAOgFIgMAFgAkJBGQAIh6A0hEQAxg/BVgJIAQAAQBgAABZB3QAlAyAcA3QgUAOgKAOQgKAQAGAJIABACQhZAvh6AXQhkAShzABQgFgzAEg3gAAPgBQAyAHAoARIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgpgSgzgHQhkgRg6AqQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIABABIACAAQAogdA/AAQAZAAAbAFgACahKQg6iQAagvQAIgPARAAQAiAAA4AwQA0AtAoA6QAVAeAJAXIAEALQgZAbghAdQgWATgVAQIgDgHQgFgIgTAEQgRACgRALQgagzgVgzgAEQijQgiANgSA7QgJAegCAeQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIABABIABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQACgbAIgeQARg6AhgNQABAAAAAAQAAAAAAgBQABAAAAAAQgBgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAgAFzAbIgJhNIACgBQANgaAOgUQARgXAGABQAEABABAJQADAagOAYIgPAUQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAWgPAUgKQAZgNAHAEQACACgBAEQgDAVgdARIgeAMQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQATAAAQACQATACACAEQAAABAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQgOAQgpAGIgnADg");
        this.shape_8.setTransform(4.2,15.9);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.lf(["#B08AFF","#5500A0"],[0,1],-30.1,9.1,50,9.1).s().p("AibEFQgxAAgogCIgegOIgUgIQgLg8AShJQAThMAwhNQAthJA6g3QA7g4A1gSQAYgJAkAAQA0AABCAUIANAEIgCACQgRAPABAfQAAAQAEAOQABABAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAAAAIACgBIAAgCQgEgNAAgPQgBgeAPgOIAFgDQApAOAnAUIAAAAQgUAAgKARQgcAzA/CWIAWAzQgPgbgTgaQheiAhnAAIgQAAQhWAKgyBAQg4BHgGCFQgCAzAEAsIgLAAgAgTjFQhGARgjBwIAAACIABABIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAjhuBDgRQAsgLA5AgQAdARAUATQAAAAABABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQgUgUgdgRQgrgYglAAQgNAAgMADg");
        this.shape_9.setTransform(-8.3,7.4);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],9.2,-5.6,-5.1,14.8).s().p("ABHBtQgrgXgsgQQAbgNA9AYIAKAfIgLgDgAgXBEIgQgGQgWgGgUgFQAHg2AKgtQAOg/AMAAIACAAQAKAFAWAiQAWAjAWAsQASAlAMAfQhAgYgdARg");
        this.shape_10.setTransform(13.2,-23.4);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.lf(["#B08AFF","#5500A0"],[0,1],-6.6,7.4,20,7.4).s().p("Ag2BLIgFAAQAWgsAYgmQAthKAagBIACAAQgOALgOBFIgBACIAAABQgIAogFAqQgmgIgiAAg");
        this.shape_11.setTransform(2.7,-26.7);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#050505").s().p("AB6FxIAAACIgBAGIABgIgAB4FvIAAAAIABAAIgBAAgAHJA/IABABIgBABIgDABgAnHABIgCgGIAFARIgDgLgACPl4IACAAIABAAIgDAAg");
        this.shape_12.setTransform(-4.9,2.6);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.lf(["#FFF0FF","#FF9CB0"],[0,1],-14.1,0.7,16.9,0.7).s().p("AhfA9QgshpAChUQAAgXAFgOQAFgOAKgEQAKgEARAAQAxAABkAfQAoANAoAOQgoAsghA1QgzBSgRBSQgHAdgBAbQgugjgnhcg");
        this.shape_13.setTransform(-37.5,5.4);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("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");
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.lf(["#B08AFF","#5500A0"],[0,1],-19.3,16.8,16.3,16.8).s().p("AARAGQhigeg1gDQAVgCAcAAQBAAACDAOIAZACIgRAOIgdAdQghgMgngMg");
        this.shape_15.setTransform(-32.2,-11);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
        // Layer 2
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("ABhldIAAAAQADABAEAEQABAAAAABQAGAEAFAHQAoAuAnBeQAIAUAGARQAFACAEACQACABgBACQgBACgCgBQgCgBgDgBQAGAQAEAPQAaAMAiAdQAOALANANQA7AzAcA8QAKASAEAOQAJgPAHgLQAVggALACQAHACACANQAEAfgUAdQAUgNAPgHQAWgKAHAFQAFADgBAIQgDARgSAPQgMAKgTAHQAqACAFAJQACAFgFAEQgOARgqAHQgYACgKABQAAAEgBAEQgGA2gaAxQgkBChBAwQgRAMgTALIgBABQABAKAAARIABAKQAXAVAAAJQgBAFgJADQgJADgMAAQgSAAgQgFQgCACgEACQgHADgIAAQgDAAgDgBQgJARgOANQgSAPgLAAQgEAAgCgCQgHgHAFgjIgIgIQgHgIgFgHQgWAFgVAFQgJAbgOALQgNALgMAAQAAAAgBAAQAAAAAAAAQgUgCgLgjQgeADgdAAQh3AAhMgxQgbgRgVgYQgdANgTAAQgIAAgFgCQgGgBgBgFQgCgMAigaQgTAEgQgCQgXgCgMgNQgFgGACgGQAGgNA6gDQgdgKgNgaQgFgKAFgFQAGgFAWAHQgFgcACgfQgogagmhUQgOgegKgdQgCgEgBgFQgGgRgFgRQgBgFgCgGQAAgDgBgDQACAIACAJAgrnJQAAgGgBgGQgFgtgrgdQgRgMgkgCQgqgEgjAQQhBAcgLBSQgRBzBvBQQA4AoA8ASQAWgIAdgBQAVgqAWgnQAzhRAbAAQAGAAAGADQABAAAAABQgBgBgCAAQABAAABAAABVldQgZABgvBLQgXAmgWAsQADAAACAAQAhAAAnAIQAFgqAIgoQAAgBABgBQAAgBAAgBQAOhFAOgLQgBAAgBAAgABdlZQgMAAgOA/QgKAtgHA3QAUAFAWAGQAIADAIADQAegSBAAZQgMgfgSglQgWgtgXgjQgWgigKgFQgBAAgBAAgABpidQgQAOABAeQABAPADANQABABgBABQAAABgBAAIgBAAQgBAAgBgCQgEgOgBgQQAAgfARgPQABgBAAgBQgGgCgGgCQhCgUg0AAQgjAAgZAJQg2ASg7A4Qg6A3gtBIQgwBOgTBMQgSBJALA8QAJADAMAFQANAGAQAIQAoACAxAAQAGAAAFAAQgEgsADgzQAGiFA3hIQAyg/BXgKQAJAAAIAAQBmAABdCAQATAaAQAbQgMgagKgZQg/iWAcgzQAJgRAUAAIAAAAQgngUgpgOQgCABgCACgAA1g+QgCACgCgCQgUgTgcgRQg4ggguALQhCARgjBtQgBABgCAAIAAAAQgBAAgBgBQAAgBAAgBQAkhvBFgRQAwgMA5AhQAdARAVAUQABACgBABgACkhqQgaAvA6CPQAVAzAaA0QARgLARgCQATgEAFAIQACADABADQAVgPAWgUQAhgeAZgaQgBgFgDgGQgJgXgVgeQgog5g0gtQg4gwgiAAQgRAAgIAPgAE8AAQghAMgRA6QgIAegCAbQgBACgBAAIgBAAQgBAAAAgBQgBAAAAgBQACgeAJgeQASg7AigMQACgBABACQABADgCAAgADMiYQg9gYgcANQAtAQArAXQAFABAGACQgEgPgGgQgAGdC6IAAAAQABAAAmgDQApgGAOgQQACgCgBgCQgCgEgTgCQgQgCgTAAQgCAAAAgCQgBgCACgBQABAAAdgMQAdgRADgVQABgEgCgCQgHgEgZANQgUAKgWAPQgCACgCgCQgBgCACgBQAAgBAPgTQAOgYgDgaQgBgJgEgBQgGgBgRAXQgOAUgNAaQgBABgBAAQAAAAgBAAQgCgBABgDQAAAAAAgBQgcAegiAdQgSAPgRANQACAJgEANQgHAWgTAOQgUANgXgCQgRgCgKgIQhaAwh7AXQhkAThzABQgDAAgCAAQgGAAgGAAQgqAAglgCQAIAEAIAFQACABgBACQgBABgCAAQAAAAgBAAQgggSgdgNQgkgPgGAGQgCACADAHQAMAXAaAJQAMAFALAAQADAAAAACQAAADgDAAQgbAAgYADQgcAEgEAHQgBADAEADQAOARAggCQARgBANgFQADAAAAABQABACgBACQgQAKgLAMQgOANABAFQAAACADABQAVAFAjgQQASgIAOgIQAAgBABAAQABAAABABQACACgCACQgMAHgPAHQAdAgApAUQAIAEAJAEQBBAbBXAAQAcAAAegDQgCgFgBgGQAAgBAAgBQgEgTgKgWIAAAAQgEgKgEgJQgBgDgCgCQgQgjgXgfQgCgDgCgCQAAAAAAgBQgDACgDABQgCABgBABQgHAEgFADQAAABgCAAQgBAAAAgBQgCgCACgBQAEgEAMgGQASgKASgBQABAAABAAQABABAAABQAAACgCABQgFAAgGABIgMAFQACABAEADQALAGAOAFQAuAPA+AAIATAAIAAAAIABAAIAAAAQBagFA2gZQARgIAOgKQAIgFALgKQAKgIADgCQAHgFAIgCQAvgKAYgYQAPgPAFgRQABgCAAgBIgBgBQAAgBgNAEQgQAGgJACQgRADgMgHQgJgHAAgBQgBgCACgBQACgBABACQABADAHADQAKAFAPgCQAJgCAQgFQAIgDADgBQAFgBACACQACADgBAGQgFASgQAPQgaAagwALQgHACgGAEQgEADgIAHQgMAJgIAGQgOAKgTAIQgaANguAIQglAHgjADQAAACAAAEIgDAnQAAAIgBAKQAAACgBADIgEAXQgBAHgCAFQATgEASgEQgHgLgEgGQgMgUAHgLQADgEAJAAQAPAAAjAPQANAGAMAGIAXgKQAFgKAFgKQARgjAMAAIACAAQALADAEAVQAAADABAEQARgKARgMQBAgvAjhBQAagwAGgzQABgFAAgFQgBAAgBAAQgCAAAAgCQAAgDACAAgAGYBcQABgBAAgBIAAAAIgDACQABAAABAAgADtC/Qgcg5glgxQhZh2hgAAQgIAAgIAAQhVAJgxA+Qg0BEgIB7QgEA3AFAzQBzgBBkgSQB6gXBZgvQAAgBgBgBQgGgJAKgQQAKgOAUgOgAA5CdQhjgRg4AqQgBAAgBAAQgBAAAAgBQgCgCACgBQA6grBkARQAzAIApASQACAAgBADQAAABgCAAIgBAAQgogRgygIgABJGUQAAgIAAgBQAAAAAAADAA0GOQgxAAgmgJQgbgHgTgJQAYAhARAlQADAHACAGQADgBAFgBQAMgCANAAQAkABAbAaQACgGABgHQAEggAAgkgABHGJQABAAAAABIAAgBABWHAQgGAJANATQAEAGAHAJQACACABADQAFAFAGAHIAIAKQABABAAABQgCALAAALQAAAOADADIACAAQAJAAARgOQAOgNAJgQQgDgGgEgOQgEgPACgHQAAAAgBAAQgDgCgDgBQgIgFgJgEQglgQgPAAQgHAAgBACgAgfHMQgBAAgBAAQAJAWADASQALAzAVAAQAKAAAMgJQASgPAJgrQgBgBgBAAQgagZgjgBQgMAAgLACQgDAAgCABgADEHOQgBACAAABQAHADAFAPQAFAOgBAKQAAAAAAABQAQAFAQAAQAMAAAIgCQAGgDAAgCQAAgDgIgJQgGgHgIgHQgBgBAAgBIAAgLQgBgPAAgKQAAgDgBgDQAAgDAAgDQgEgUgIgCIgBAAQgIAAgOAbQgFAKgFALQgCADgBADgAC2HYQgFABgCACQgCAEAEAQQAEAPADAEIAEABQAGAAAGgCQAGgCAAgEQABgKgEgNQgFgNgFgBQgGgBgFADgAC+HRIAAAAIAAAAgAGUBsIAJBOAn5AVQgCgKgCgJQgDgPgCgPQgBgHgBgIQAAgDAAgDQAAgEgBgDQAAgCAAgDQgCg9AZgLQAZgLA/AAQBAAACEAOQASACAMABQAsglAogPQg5gTg2gmQhxhSARh1QAGgqAUgdQAUgdAhgPQAkgQAsAEQAlADASAMQAsAeAFAwQABAHAAAHQADAEAIANQAKAXgHAYQgHAZgUAbQgJANgHAGQANATgFAaIAAAGIgEgDQgJgHgLgTIgBgBQgKAJgNAAIgGAAIgDgBIABgCQAEgQALgLQAHgGAHgCQgDgPgCgTQgDggAHgVQAGgYAVgMQAJgFAJgBQAAAAABAAIABAAIABABIABABAnsiBQgJAEgFAOQgFAOgBAXQgBBTAsBqQAmBcAuAjQACgbAHgdQARhSA0hTQAgg0AogsQgogPgogMQhkgfgyAAQgRAAgKAEgAnIiJQA1ACBkAgQAmAMAiAMQAOgPAPgOQAIgIAIgHQgKgBgOgBQiFgOg/AAQgdAAgVACgAkvFfIAJA8AhLFmQgGACgIACIACABAhdFtIgJAEAA6HjIhZgX");
    
        this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.8,-57.4,105.6,114.8);
    
    
    (lib.Tween24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap11();
        this.instance.parent = this;
        this.instance.setTransform(-27.7,-25,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.7,-25,55.9,50);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E5E0E2").p("AjWGkIgCACAEHD4Ikog4IgBAAIgOkXAgkDDIADAHIgBgKIgCADIjeppAjQGcICsjZ");
        this.shape.setTransform(-20.1,-55);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FD4992").s().p("AiJBxQiYkIgMgsQgahbAbgzQAohKCQBoQCKBkCgCuQBRBVA0BDIk/iwIAOGqQhIh7hLiFg");
        this.shape_1.setTransform(13.2,60.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FC4590").s().p("AjyBtQgKgagBgFIAAgCIAAgBQAAgGAGgCIAAAAQBogdByglIBAgUQCrg6ArghIAFA/QhDAshfApQilBJiDAAQgTAAgTgCg");
        this.shape_2.setTransform(-16.2,-20.5);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#C6006D").s().p("AiDDWQkHnXgsjIIACAAIAAABQABAGAKAaQCQANC/hUQBegqBDgtIgFg+IAUB5QAcCWAlCLQB3HACpC/QhRgoiGhOIh2hGIFACyQg0hDhRhWQigiuiKhkQiQhngoBJQgbA0AaBaQAMAsCYEJQBKCFBJB7Qh5jDiDjsgAgapYQArgSAYgMQARgIAIgGQgrAhiqA5QBEgYA1gWg");
        this.shape_3.setTransform(2.1,32.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-47,-98.3,93,195.8);
    
    
    (lib.Tween22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap10();
        this.instance.parent = this;
        this.instance.setTransform(-27.7,-25,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.7,-25,55.9,50);
    
    
    (lib.Tween21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap9();
        this.instance.parent = this;
        this.instance.setTransform(-47.2,-35.3,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-47.2,-35.3,94.1,70.6);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("AoxgGIIVjSIJPDuIoxDCg");
        this.shape.setTransform(2,-5.5);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-54.3,-27.1,112.5,43.3);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F6FE8F").s().p("AhwAqQgMgyAsgtQAngpBGALQAkAFAcANQAYATgBAVQgBASgVAbQgRAZgzAUQgtASgpADIgFAAQglAAgKgsg");
        this.shape.setTransform(0.7,-1.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FCDF65").s().p("Ah9BlQgTgRgGgcQgQhDA7g9QAzg2BfAOQAwAHAlASQAhAZgCAdQgCAXgbAlQgXAhhEAbQg8AYg4AFIgFAAQgVAAgSgPg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.4,-11.5,30.9,23.2);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap6();
        this.instance.parent = this;
        this.instance.setTransform(-203,-174.8,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-203.4,-174.8,406.8,349.9);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap5();
        this.instance.parent = this;
        this.instance.setTransform(-179.3,-145.6,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-179.4,-145.6,358.8,291.4);
    
    
    (lib.Tween16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB1961").s().p("AieCvQgMgvAAgzQAAh9BAhaQBAhaBaAAQA+AAA2AvQAHAtAAAoQAACGg/BgQg+BfhXAAQhBAAg0g2g");
        this.shape.setTransform(2.4,5.5,0.561,0.561);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A11140").s().p("AiWDnQg+hgAAiHQAAiGA+hfQA/hgBXAAQBYAAA/BgQA+BfAACGQAACHg+BgQg/BfhYAAQhXAAg/hfg");
        this.shape_1.setTransform(0,0,0.561,0.561);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.9,-18.2,24,36.6);
    
    
    (lib.Tween15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EB1961").s().p("Ag8A1IgdgCQgdgFgagNIgMgGIgXgQIAygcQBBgdBKgFQBLgEA3ALQAbAGANAHIgNAQIgJAIIgBABQgPAMgSAKQgkAUguAJIg3AHIgaABIgVAAg");
        this.shape.setTransform(5.2,3.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A11140").s().p("AgJBXQAYABAWgCIgaABIgUAAgAjEAAQgdgagXghIgRgbIITA3IgOASQgSAVgYASIAJgIIAMgPQgMgHgcgGQg3gLhLAFQhKAEhBAcIgyAdIAYAQIALAHQg3gWgwgug");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.6,-8.7,53.3,17.5);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2B3C72").s().p("AjmA5IA9gfQBJgkBAgbQDOhWAoApQAaAZgOApQgOAqgzAeQhFAohhAAQhiAAh/gng");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23,-9.6,46.2,19.3);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAgBsQgIgIAAgLQAAgLAIgIQAIgJALABQAMgBAIAJQAIAIAAALQAAALgIAIQgIAIgMAAQgLAAgIgIgAg/AtQgPgcAAgmQAAgnAPgcQAOgbAVgBQAUABAOAbQAOAcAAAnQAAAmgOAcQgOAcgUgBQgVABgOgcg");
        this.shape.setTransform(0.2,1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2B3C72").s().p("AhUBvQgjguAAhBQAAhAAjgvQAjgtAxgBQAxABAkAtQAjAvAABAQAABBgjAuQgkAvgxAAQgxAAgjgvg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12,-15.7,24,31.5);
    
    
    (lib.Tween12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2B3C72").s().p("ABvBgQhbgThTgfQhigkgjggQgqgpA/gdQBwg1CVB5QBLA8A1BHQgFACgLAAQgaAAg9gNg");
        this.shape.setTransform(-80.3,-8.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-101.7,-19,42.8,21.9);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAIBoQgGgHAAgIQAAgJAGgFQAGgHAJAAQAIAAAGAHQAGAFAAAJQAAAIgGAHQgGAFgIABQgJgBgGgFgAgiAnQgOgZAAgjQAAglAOgZQAOgZAUgBQAUABAPAZQAPAZAAAlQAAAjgPAZQgPAagUAAQgUAAgOgag");
        this.shape.setTransform(-72.5,-2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#2B3C72").s().p("AhUBvQgjguAAhBQAAhAAjgvQAjgtAxgBQAxABAkAtQAjAvAABAQAABBgjAuQgkAvgxAAQgxAAgjgvg");
        this.shape_1.setTransform(-74.9,-4.5);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-86.9,-20.2,24,31.5);
    
    
    (lib.Tween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B5E9FF").s().p("AhUA9QgjgZAAgkQAAgiAjgaQAjgZAxAAQAxAAAkAZQAjAaAAAiQAAAkgjAZQgkAZgxAAQgxAAgjgZg");
        this.shape.setTransform(-0.8,-8.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7BBCFE").s().p("AiMCIQg6g4AAhQQAAhPA6g4QA7g4BRgBQBSABA7A4QA6A4AABPQAABQg6A4Qg7A4hSABQhRgBg7g4gAhdiSQgjAaAAAjQAAAjAjAaQAjAYAyAAQAxAAAjgYQAjgaAAgjQAAgjgjgaQgjgagxAAQgyAAgjAag");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.8,-19.2,39.8,38.5);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AROHvQgcgPgDgaQgDgeAUgnIBxjeQATgnAagPQAXgNAdAOQAcAPADAbQAEAZgWAqIhxDfQgUApgZANQgKAHgNAAQgNAAgPgIgANQF9QgYgMgLgRQgKgUACgoIAIknIAIgiQAKgXAXgKQAXgJAXAJQAVAKAJATQAIAQgDAjIgYDiICYi1QAQgTAUgHQATgGASAJQAZAJAIAWQAIAWgLAaIgKAQIjaDiQgbAcgTAEQgHADgJAAQgNAAgPgHgAJJEQQgfgKgHgZQgHgaAPgsIBUjrQAPgqAWgSQATgPAhAKQAdALAHAaQAHAZgPArIhUDsQgPAqgVARQgNAKgQAAQgKAAgMgFgAnZDaQgggFgNgWQgMgXAFgvIAumfQAGgwARgSQASgUAeADQAUADANALQALAJALAYQATgSAegKQAdgIAdAEQBQAKAvBDQAwBFgLBcQgKBeg/A5QhCA7hLgKQgcgDgXgMQgZgNgSgTIgMBpQgEAtgSAXQgQAQgYAAIgJAAgAlVjiQgbAbgDAtQgHAtAUAiQAUAfAkAEQAjAFAbgcQAbgaAFgvQAEgugTggQgUgegkgFIgJgBQgdAAgYAYgAE3C9QgegJgLgZQgIgaAMgsIBglZIgugNQgsgLgTgWQgSgRAIgfQAJgcAZgKQAagHAtAMIDWA6QArAMATAVQASAVgJAdQgHAegaAGQgZAKgsgNIgugMIhgFYQgLArgWASQgOAMgTAAQgKAAgKgDgAr5CrQgOgPAAgVQAAgVAPgOQAOgQAWAAQAVABAOAOQAPARAAATQgBAWgOAOQgRAOgTABQgVgBgPgOgAUhBSQgcgPgJgcQgIgbANgaQAPgcAbgIQAcgKAbAPQAcAMAHAcQAJAbgNAbQgOAbgdAKQgKADgKAAQgQAAgRgHgA1EA+QgRgUgGguIgsmCQgFg0AQgTQASgWAxgGIBjgKQBkgMA9AqQA+AoAJBQQAFA9gdArQgfAtg9ARIBwBjQAUASANAUQAMAQABAPQADAagOASQgSAUgZACQgRABgQgIQgQgIgXgXIiqioIAPCJQAFAsgNAZQgMAWghAFIgMABQgXAAgPgRgAzJl/Ig7AHIAPCIIA6gHQAmgDAUgWQASgUgDghQgEghgVgOQgUgMgbAAIgPABgArwAtQhQAAg2g/Qg1g9gBhfQAAheA6g/QA4g/BRAAQAdAAAbALQAcAOAPAUQAJgQAQgOQAPgJATgBQAfAAAQAXQAOAXAAAtIAAD7QgBAugPATQgQAXgfAAQgSABgQgMQgPgLgJgUQgUAYgaAKQgcAMgdAAIgCAAgAsUj4QgXAeAAAqQAAAvAXAbQAUAcAmAAQAhABAXgdQAXgbAAguQAAgrgWgdQgWgbgjgBQglABgVAagALiikQgcgLgNgaQgNgaAKgcQAJgcAcgOQAbgMAcAJQAbAKANAaQAMAbgIAcQgKAcgbAOQgOAHgQAAQgMAAgNgEg");
        this.shape.setTransform(0,0.9,0.35,0.35);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 4
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FE6300").s().p("AGDDKQgHgBgHgFQgWgLgDgXQgCgKAEgNIgEADQgOAOgNAEQgLADgKgCQgHgBgFgCQgRgHgIgQQgHgNABgVIgBgHQgHAOgJAHQgOALgUgDIgJgCQgXgIgHgXQgEgSAIgXIAiheQgFABgHgCIgbBfQgGAYgOALQgPANgWgEIgGgBQgYgHgIgWQgGgRAHgXIAahfQgPgGgKgKQgQgSAHgYQAHgYAXgHQAMgEARADIBVAXQAUAFALALIAHgEQAOgHARADIAIACQAVAHAJATQAJAUgHAUIgGALIAFABIALADQASAHAGARQAFAKAAAOQAKgLAMgDQAJgDAMACIALADIAMAHQABgGADgFQAKgUAUgGQANgEAMACQAIABAHAEQATAKAGAVQAHASgKAUQgIAQgRAIQABAOgKAVIgnBOQgMAVgPAJQgKAFgLAAIgIAAgAinBnIgEgBQgWgEgLgTQgFgJgBgMQgDAMgIAJQgOANgSAAIgIgBQgNgCgKgKQgNgNAAgTQAAgFACgGQgNgFgJgIIgDAEQgMAPgUADIgNgBIgOgEQgJgGgLgLIgJgIQgCAJgEAHQgLAUgZADQgIABgHgBQgPgDgKgMQgMgMgDgaIgPiFQgEgdANgQQAOgQAbgDIAjgEQAWgDAQADQAUAEAQAKQAcATAHAhQAbgeAnAAIAOACQAKABAHAEIACABQAKgGANAAIAJABQAOACAJAKQAOgKATACIADAAQAMACAHAGIAEgBQAPgEAPACIAHAAQAjAGAWAgQAVAfgEArQgEAqgdAbQgfAdgogFIgHAAQgDAWgMANQgNAPgUAAIgGAAgAhngyQgBAHACADQACgCABgHIgBgKQgDADAAAGgAkAg9IABAIIACgIQgBgEgBgDg");
        this.shape_1.setTransform(0,0.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
        // Layer 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#B74200").s().p("AGDDJQgGgBgIgDQgWgMgEgXQgBgLAEgNIgEAEQgNAPgOADQgKADgLgCIgNgDQgQgIgJgPQgGgOABgUIgBgHQgHAOgJAHQgPALgTgDIgJgDQgXgIgGgXQgFgRAIgXIAiheIgMgBIgaBfQgHAXgOALQgPAOgWgEIgGgCQgYgGgIgWQgGgRAHgYIAaheQgQgGgJgKQgQgSAHgYQAHgYAXgIQANgEAQADIBVAXQATAFANAMIAGgEQAPgHAQACIAIADQAUAHAKATQAJAUgHAUIgGALIAFAAIALADQASAIAGAQQAFAKAAAPQAKgKALgEQALgEALACIALADIAMAIQABgHADgFQAKgTAUgGQANgEALACQAIABAIAEQATAKAGAUQAGATgJATQgIARgRAHQABAPgKAVIgoBOQgLAVgPAJQgJAFgLAAIgJgBgAioBnIgDgBQgXgEgKgTQgFgJAAgMQgDAMgJAJQgOAMgSAAIgIAAQgOgDgJgJQgNgNAAgTQAAgGABgFQgKgEgLgJIgDAEQgMAPgUACIgNAAQgIgCgGgDQgKgGgLgKIgIgJQgDAKgDAGQgLAVgZADQgIABgHgBQgPgDgKgMQgMgNgDgZIgPiGQgEgcAOgRQANgQAbgCIAjgEQAUgDASADQAUAEAQAKQAbASAIAhQAbgdAnAAQAHAAAHABQAIACAJADIACACQAKgGANAAIAJABQAOACAJAJQAPgJASABIADABQALACAJAGIADgBQAPgEAQACIAFAAQAkAHAWAfQAVAfgEArQgEApgdAcQgfAcgogEIgHgBQgEAWgLAOQgNAPgVAAIgGAAgAhngyQgBAHACADQACgDABgHQABgGgCgDQgDADAAAGgAkAg9QAAAHABABIABgIIgBgHg");
        this.shape_2.setTransform(0,3.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-141.9,-40.1,300.8,125.1);
    
    
    (lib.Path_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhOBPQggghgBguQABgtAgghQAhggAtgBQAuABAhAgQAgAhABAtQgBAuggAhQghAgguABQgtgBghggg");
        this.shape.setTransform(11.2,11.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,22.3,22.3), null);
    
    
    (lib.Path_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhDBEQgcgcAAgoQAAgnAcgcQAcgcAngBQAoABAcAcQAcAcAAAnQAAAogcAcQgcAcgoAAQgnAAgcgcg");
        this.shape.setTransform(9.6,9.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.3,19.3), null);
    
    
    (lib.Path_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhGBIQgegeAAgqQAAgpAegdQAdgeApAAQApAAAfAeQAdAdAAApQAAAqgdAeQgfAdgpAAQgpAAgdgdg");
        this.shape.setTransform(10.1,10.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,20.2,20.2), null);
    
    
    (lib.Path_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgYBDQgcgLgMgbQgNgbALgbQALgbAbgMQAbgNAbALQAbALAMAbQANAbgLAbQgKAbgcAMQgOAHgPAAQgLAAgNgFg");
        this.shape.setTransform(7.2,7.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,14.4,14.4), null);
    
    
    (lib.Path_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
        this.shape.setTransform(8.4,8.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,16.8,16.8), null);
    
    
    (lib.Path = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgeBDIhGg+QAeg+AdgxQA5higKBEQgHBEAxBmQAaA0AbAnIgkAoQgVgdhKhFg");
        this.shape.setTransform(10.1,16.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,20.2,32.9), null);
    
    
    (lib.duoi = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap7();
        this.instance.parent = this;
        this.instance.setTransform(376.9,157.8,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.duoi, new cjs.Rectangle(376.8,157.8,91.8,217.7), null);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("AkkQVQiagRicAMIiql8IAThYIhRi+IhthIIAAhsIBphEQBZAYBZACQBVABBVgSQgjhDgvg3IhEhRQgXgcgWgcQgXhBgIhBQgLhfgBhhQALgwANgvQAchnAhhlQAZgoAcgoQBQhxBxhPQAzglA5gaIAtgFQCngNCogDQBtApBqAzQBsA0BVBWQBHBHA9BRIAAAAIAAAAIALAPQA0gwA5gqQAsghAvgdIBmgGQgBAxgHAxQgYA8gTA+QgcBZgIBeQgIBpATBnQAKA9ATA7IhLAlIi/i1QhHBjgvBpIhnBGQhkGQhwGNQgjB/gvB8IjQAnQhignhmgKg");
        this.shape.setTransform(94.4,109.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,188.8,218.8), null);
    
    
    (lib.Tween28copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF6401").s().p("Ag6DlQgTAAgRgHQgbgMgMgeQgbAFgggPIAAAAQgjgQgRgeQgPgZADgbQAEglAmgjQgIgYgBgaQgCgvAYgZIAAAAQAkgoBYAWQANgkAVgXIAAAAQAXgXAcgFQAcgFAdANQAbANAWAZQASgNAZADQAbAEAZAXIAAAAQAmAhAIAxQAJAzgeAqQAHAEAEAJQAFAKgCANQgEAXgYAQQgcASgsgHQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgKIABgDIACgBIADgBQAjAFAWgNQARgKADgPIAAgBQABgGgDgFQgDgFgHgCIgJgBIgDgCIgBgDIABgDIAFgHIABAAQAigpgKgxQgIgpgegbQgUgRgUgEQgWgEgOAOIgEAEIgCACIgDAAIgCgCIgEgFQgUgagagMQgYgMgYADQgWAFgTAVQgTAVgMAjIgCAFIgCADIgEABIgEgBIAAAAQhTgWgeAgIAAAAQgUAWAFAsQACAXAGATIABACIAAADIgCADIgCACIAAAAQgeAagIAbIAAAAQgHAbAPAYQAOAZAeAOQAeANAWgHIABAAIAGgCIACAAIADACIABACIABAFIAAgBQAIAdAWAKQAXAKAkgJIAAAAQATgFANgHQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIAFAJQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgkASgkAAIAAAAgAAhDaIgDAAIgBgCIgFgGIgBgEIACgDIAEgBQBZADA6hjIABgBIADgBIAPAAIADABIACADIgBADQhABrhgABIgGgBgAAbB1IgDAAQgPgBgJgMQgJgKAAgFIABgCIACgCIAIgEIAEAAIACACIAGAIIAAgBQAFAGAHABIAAAAQASAAAZgkQAAgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAIAGQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgeAtgcAAIgBAAgAhwBdQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgFgOgBgRIAAAAQgDggAOgTIABAAQATgXAtAFIACABIACACIAAADIgBAJQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgggEgOAPIAAABQgJANACAZQABANAEALQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgJADIgCAAIgCgBgACGAZIgCgCIgBgCQgDgWgKgEIAAgBQgHgCgLAGIgBAAQgIADgHAGQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgHgGIgCgDIABgDIACgCIARgLIABgBQAVgKAPAGQAVAHAFAjQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgKABIgBAAIgCAAg");
        this.shape.setTransform(-0.8,-6.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 2
        this.instance = new lib.Path_2();
        this.instance.parent = this;
        this.instance.setTransform(4.8,-5.8,1,1,0,0,0,7.2,7.2);
        this.instance.alpha = 0.75;
    
        this.instance_1 = new lib.Path_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.5,2.5,1,1,0,0,0,8.3,8.3);
        this.instance_1.alpha = 0.75;
    
        this.instance_2 = new lib.Path_3();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-6.1,-11.9,1,1,0,0,0,10.1,10.1);
        this.instance_2.alpha = 0.75;
    
        this.instance_3 = new lib.Path_4();
        this.instance_3.parent = this;
        this.instance_3.setTransform(8.9,-11.4,1,1,0,0,0,9.6,9.7);
        this.instance_3.alpha = 0.75;
    
        this.instance_4 = new lib.Path_5();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-13.5,-1.8,1,1,0,0,0,11.2,11.2);
        this.instance_4.alpha = 0.75;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.5,-29,51.5,45.9);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Path();
        this.instance.parent = this;
        this.instance.setTransform(10.6,4.9,1,1,0,0,0,10.1,16.4);
        this.instance.alpha = 0.398;
    
        this.instance_1 = new lib.Path_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.5,2.5,1,1,0,0,0,8.3,8.3);
        this.instance_1.alpha = 0.5;
    
        this.instance_2 = new lib.Path_2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(4.8,-5.8,1,1,0,0,0,7.2,7.2);
        this.instance_2.alpha = 0.5;
    
        this.instance_3 = new lib.Path_3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-6.1,-11.9,1,1,0,0,0,10.1,10.1);
        this.instance_3.alpha = 0.5;
    
        this.instance_4 = new lib.Path_4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(8.9,-11.4,1,1,0,0,0,9.6,9.7);
        this.instance_4.alpha = 0.5;
    
        this.instance_5 = new lib.Path_5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-13.5,-1.8,1,1,0,0,0,11.2,11.2);
        this.instance_5.alpha = 0.5;
    
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF6401").s().p("AgMAYQgNgBgJgKQgHgJAAgCIAJgEIAFAHQAHAJAJAAQASABAbgmIAIAGQgcApgYAAg");
        this.shape.setTransform(3,2.7,1.018,1.018);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF6401").s().p("AAKgJQgJgDgMAGQgKAEgHAGIgGgHIAQgLQATgJAMAFQASAHAEAeIgKACQgDgZgMgFg");
        this.shape_1.setTransform(10.1,-6.2,1.018,1.018);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF6401").s().p("AghASQgDgdANgRQASgVAoAEIgBAKQgigEgPARQgLAPADAaQABAOAEALIgKADQgEgNgBgQg");
        this.shape_2.setTransform(-9,-1.9,1.018,1.018);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF6401").s().p("AhbDWQgagMgKgfQgbAHghgPQgggQgRgbQgNgXADgZQAEglAlgiQgIgYgBgbQgCgrAWgYQAjglBWAWQANglAWgXQAVgWAagEQAagFAbANQAbAMAXAbQARgPAZAEQAZADAXAVQAkAgAIAuQAIAzggApQAKAEAEAJQAFAJgCALQgEAVgVAOQgbARgpgGIABgKQAlAFAXgOQATgLADgRQABgIgDgHQgEgHgKgCIgJgCIAGgGQAjgqgKgzQgIgpgggcQgUgSgVgEQgYgEgPAQIgEAEIgEgFQgVgagagNQgZgNgZAEQgXAFgUAWQgUAVgMAkIgBAFIgFgBQhUgXgfAiQgVAXAEAuQACAXAHATIABADIgDACQgeAbgIAcQgIAcAPAaQAPAZAgAPQAfAOAXgJIAGgBIABAFQAJAeAXALQAYAKAmgJQATgFANgHIAEAJQgiARgiAAQgSAAgQgGg");
        this.shape_3.setTransform(-0.8,-6.1,1.018,1.018);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF6401").s().p("AgTABIg7hwIAJgEQAfBEAmA8QAzBXAcAHIgCAJQgjgIg9hrg");
        this.shape_4.setTransform(18.1,14.3,1.018,1.018);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FF6401").s().p("AhphdIAHgIIDMDDIgHAIg");
        this.shape_5.setTransform(10.5,18.2,1.018,1.018);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26,-28.5,52.2,57.1);
    
    
    (lib.sao2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween24("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(27.2,25.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:30.8,y:2},28).to({rotation:0,x:27.2,y:25.1},31).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.5,0.1,55.9,50);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-19.8,97.6,1,1,5,0,0,1,84.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:2.3,rotation:5.3,x:-13.1,y:15.6},0).wait(1).to({rotation:6.1,x:-11.9,y:15.7},0).wait(1).to({rotation:7.4,x:-10.1,y:15.9},0).wait(1).to({rotation:9,x:-7.8,y:16.2},0).wait(1).to({rotation:10.8,x:-5.3,y:16.6},0).wait(1).to({rotation:12.8,x:-2.4,y:17.2},0).wait(1).to({rotation:14.9,x:0.4,y:17.9},0).wait(1).to({rotation:16.9,x:3.4,y:18.7},0).wait(1).to({rotation:18.9,x:6.2,y:19.6},0).wait(1).to({rotation:20.8,x:8.7,y:20.5},0).wait(1).to({rotation:22.5,x:10.9,y:21.4},0).wait(1).to({rotation:23.8,x:12.7,y:22.1},0).wait(1).to({rotation:24.7,x:13.9,y:22.6},0).wait(1).to({regX:1.4,regY:84.9,rotation:25,x:-19.5,y:97.7},0).wait(1).to({regX:0,regY:2.3,rotation:24.7,x:13.8,y:22.1},0).wait(1).to({rotation:23.9,x:12.6,y:21.6},0).wait(1).to({rotation:22.6,x:11,y:20.9},0).wait(1).to({rotation:21,x:8.9,y:20.1},0).wait(1).to({rotation:19.2,x:6.4,y:19.2},0).wait(1).to({rotation:17.2,x:3.6,y:18.4},0).wait(1).to({rotation:15.1,x:0.8,y:17.6},0).wait(1).to({rotation:13.1,x:-2.1,y:17},0).wait(1).to({rotation:11.1,x:-4.9,y:16.5},0).wait(1).to({rotation:9.2,x:-7.6,y:16},0).wait(1).to({rotation:7.5,x:-9.9,y:15.8},0).wait(1).to({rotation:6.2,x:-11.8,y:15.6},0).wait(1).to({rotation:5.3,x:-13.1,y:15.5},0).wait(1).to({regX:1.3,regY:84.8,rotation:5,x:-19.4,y:97.9},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-64.6,-9.7,103,50.4);
    
    
    (lib.duoui = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.duoi();
        this.instance.parent = this;
        this.instance.setTransform(388.1,259,1,1,0,0,0,388.6,262.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:422.5,regY:266.6,x:422,y:263},0).wait(39));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(376.4,154.2,91.1,217.6);
    
    
    (lib.bongbong = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween21("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(47.6,35.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},14).to({rotation:0},15).to({rotation:-15},15).to({rotation:0},15).wait(1));
    
        // Layer 3
        this.instance_1 = new lib.Tween22("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(81.9,87.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,y:83},14).to({rotation:0,y:87.5},15).to({rotation:15,y:83},15).to({rotation:0,y:87.5},15).wait(1));
    
        // Layer 1
        this.instance_2 = new lib.Tween23("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(53,60.4,1,1,0,0,0,-46,-97.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-46.1,rotation:-10.2,x:52.9},31).to({regX:-46,rotation:0,x:53},28).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.4,0,144.6,255.2);
    
    
    (lib.raptivi1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 22
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00B8BF").s().p("AgsKIIAwz3QgDgfAVAFQALADAMAIIhCUJg");
        this.shape.setTransform(185.7,501,0.681,0.971,0,-10,25.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));
    
        // Layer 21 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AyKLyQgNgMgLgNIgFAAQg8AAgpglQgqglAAg0QAAg0AqglQAWgUAcgJQgmgIgdgaQgMgKgJgMIgFgIIAAgBQgQgaAAggIABgNQAFgsAkggIAHgGQAXgSAcgHQgbggAAgqQABg0AqgkQAWgUAcgJQgmgIgdgaQgMgLgJgLIgFgIIgBgBQgQgaAAggIABgNQAFgsAlgfIAHgGQAcgXAkgGIAKgBIgGgHIgFgIIAAgBQgQgaAAggIABgNQAFgsAkgfIAHgGQAdgXAjgGQAPgCAPAAIACAAQAKgUATgQIAHgGIgRgNQgIgHgIgJIgEgGIgGgIIgBgBIgBgCQgEgJgEgJQgGgSAAgUIABgNIAAAAQAEgsAlggIAIgGQAOgLAPgHIAQgGQAJgDAJgBQAOgDAPAAIACAAIAFgHQAKgPAPgOQAYgUAdgKQAagKAgAAIARABQArADAjAXIABgBQAKgJAMgHQAjgWAuAAQAwAAAmAZQAegNAkAAQA2AAApAbIABgBQAKgJAMgHQAjgWAuAAQAtAAAkAWQAbgKAgAAIAQABIALgLQAugoBAAAQA2AAApAbIABgBQAKgKAMgGQAjgWAuAAQA1AAAnAcIADADQANgCAOAAQApAAAiAOIACABQAjgRAqAAQA1AAApAbIABgBQALgJAMgHQAkgWAtAAQA0AAAoAdIADACQANgCANAAQApAAAjAPQAcALAWAVQARAOAMARIAIAPQAyAAAjAfQAbAZAHAhQARADAPAHQAbALAYAVQAQAOALARIAJAPQAyAAAiAfQAkAfAAAsIAAAAIAAACQAAAZgMAWQgJAOgPANIgHAHIABANIAAABIAAABQgBAagMAVQgIAPgOANQgYAVgeAHQgKATgRAQIgDACQAHAPgBASQAAAggSAZQAvABAiAeQAjAfABArIAAABIAAABQgBAagMAVQgJAPgOANIgIAGIABAOIAAAAIAAACQAAAZgMAWQgIAOgPANQgYAVgeAHQgJATgSAQIgCACQAGAQAAASQAAAsgjAgQgYAVgeAHQgKATgRAQQgJAHgJAGQAIAKAGAMQAxAAAkAfQAjAgAAAsQAAAsgjAgQgYAVgeAHQgKATgRAQQgkAfgyAAQgyAAgjgfQgOgMgHgNIgGgBQgYAHgcAAQgcAAgZgHQgJAMgNALQg5AzhQAAQglAAgfgKQgagJgYgQIgVgQQgNgMgJgMIgGAAQg7AAgqglQgMgLgJgMQgwAfg/AAQgkAAgggKQgQAJgTAFQgJATgSAQQgiAfgzAAQgxAAgkgfQgNgMgIgNIgFgBQgZAHgbAAQgcAAgZgHQgJAMgNALQg6AzhQAAQhDAAgzgjQgHAKgKAIQgjAfgyAAQgyAAgkgfQgNgLgIgNIgFgBQgZAGgaAAQgcAAgZgHQgKAMgNAMQg5AyhRAAQhQAAg5gyg");
        mask.setTransform(205.7,447.7);
    
        // Layer 12
        this.instance = new lib.Tween29("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(235.4,517.2,1,1,0,0,0,14.1,48.6);
    
        var maskedShapeInstanceList = [this.instance];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.7,y:498.4},12).to({regX:14,rotation:5,x:235.3,y:508.6},11).to({regX:14.1,rotation:21,y:498.5},14).to({rotation:0,x:235.4,y:508.7},12).to({rotation:10.5,x:231.9,y:588.8},5).to({y:607.7},21).to({y:481.7},9).to({y:509},9).to({rotation:0,x:235.4,y:517.2},26).wait(1));
    
        // Layer 20
        this.instance_1 = new lib.Tween30("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(221.9,521.2,1,1,0,0,0,10.2,-12.3);
    
        var maskedShapeInstanceList = [this.instance_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:10.3,y:502.4},12).to({regX:10.2,y:512.6},11).to({rotation:82.5,y:502.4},14).to({rotation:0,y:512.6},12).to({rotation:30,x:218.4,y:592.7},5).to({y:611.6},21).to({y:485.7},9).to({y:512.9},9).to({rotation:0,x:221.9,y:521.2},26).wait(1));
    
        // Layer 19
        this.instance_2 = new lib.Tween31("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(232.2,537.2);
    
        var maskedShapeInstanceList = [this.instance_2];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:518.5},12).to({y:528.7},11).to({rotation:15,x:228.5,y:515.9},14).to({rotation:0,x:232.2,y:528.7},12).to({x:228.8,y:608.8},5).to({y:627.7},21).to({y:501.7},9).to({y:529},9).to({x:232.2,y:537.2},26).wait(1));
    
        // Layer 14
        this.instance_3 = new lib.Tween32("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(241.9,517.7,1,1,0,0,0,-19.2,4.7);
    
        var maskedShapeInstanceList = [this.instance_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:21.5,y:498.9},12).to({regY:4.8,rotation:45,x:241.8,y:509.2},11).to({regY:4.7,rotation:-8.5,y:498.9},14).to({rotation:0,x:241.9,y:509.1},12).to({rotation:21.5,x:238.5,y:589.2},5).to({y:608.1},21).to({rotation:-32,x:238.4,y:482.3},9).to({rotation:21.5,x:238.5,y:509.4},9).to({rotation:0,x:241.9,y:517.7},26).wait(1));
    
        // flash0.ai
        this.instance_4 = new lib.Tween28("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(137.6,255.9);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.Tween28copy("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(130.7,246.5,1.577,1.577);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({_off:false},0).to({scaleX:1.38,scaleY:1.38,x:130.7,y:246.5},2).to({_off:true,scaleX:1.58,scaleY:1.58},1).wait(40));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},1).to({scaleX:1.95,scaleY:1.95,rotation:30,x:91.9,y:156.2,alpha:0},13,cjs.Ease.get(0.6)).wait(27));
    
        // Layer 7
        this.instance_6 = new lib.Tween6("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(189.3,22.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:218,y:-18.5},16).to({x:97.9,y:119.6},11).to({x:169.7,y:169.6},10).to({y:131.8},5).to({y:169.6},5).to({x:173.2,y:152.7},4).to({x:173.7,y:155.6},3).to({startPosition:0},15).to({x:172.6,y:148.5},8).to({x:163.7,y:91.6},8).to({y:86.6},1).to({x:191.9,y:10.9},6).to({x:189.3,y:22.8},27).wait(1));
    
        // Layer 2
        this.instance_7 = new lib.Symbol1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(221.9,105.5);
        this.instance_7.cache(-34,-18,69,35);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));
    
        // flash0.ai
        this.instance_8 = new lib.Tween15("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(154.7,339.8);
    
        this.instance_9 = new lib.Tween16("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(161.7,332.8);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9}]},17).to({state:[{t:this.instance_9}]},17).to({state:[{t:this.instance_9}]},14).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},16).wait(25));
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({startPosition:0},17).to({scaleX:1.15,scaleY:1.15,y:312.8},17).to({scaleX:0.61,scaleY:0.54,y:280.6},14).to({scaleX:1.84,scaleY:1.39,y:306.1},10).to({scaleX:2.05,scaleY:1.54},5).to({scaleX:0.41,scaleY:0.41,y:285.3},9).to({y:282.3},1).to({_off:true,scaleX:1,scaleY:1,x:154.7,y:339.8},16).wait(25));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#000000").ss(2).p("Ai+mEQFaBwAaFaQAMCtg5CX");
        this.shape_1.setTransform(210,68.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#000000").ss(2).p("AB/GZQAziJgEifQAAgRgBgSQgWlglLiA");
        this.shape_2.setTransform(211,67.4);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#000000").ss(2).p("AB1GoQAyiKgCikQAAgSgBgSQgTlmk7iR");
        this.shape_3.setTransform(212,65.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#000000").ss(2).p("ABrG3QAxiMAAipQAAgSgBgTQgQlskrih");
        this.shape_4.setTransform(213,64.5);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#000000").ss(2).p("ABhHGQAxiNAAiuQABgTgBgSQgMlzkciy");
        this.shape_5.setTransform(214,63);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#000000").ss(2).p("ABXHUQAviOADizQAAgTgBgTQgIl4kMjD");
        this.shape_6.setTransform(215.1,61.5);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#000000").ss(2).p("ABNHjQAuiPAEi4QABgTgBgUQgFl+j8jU");
        this.shape_7.setTransform(216.1,60);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#000000").ss(2).p("ABCHyQAuiRAFi9QABgUAAgTQgCmFjsjk");
        this.shape_8.setTransform(217.1,58.6);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f().s("#000000").ss(2).p("AA4IAQAtiRAHjDQABgUAAgUQABmKjcj1");
        this.shape_9.setTransform(218.1,57.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#000000").ss(2).p("AAuIPQAsiTAIjIQABgUAAgUQAFmRjNkG");
        this.shape_10.setTransform(219.2,55.7);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#000000").ss(2).p("AAjIdQAsiUAJjNQABgUABgVQAImWi9kX");
        this.shape_11.setTransform(220.2,54.2);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#000000").ss(2).p("AAZIsQAqiVALjSQACgVAAgVQAMmcitko");
        this.shape_12.setTransform(221.3,52.7);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#000000").ss(2).p("AAOI7QAqiXANjXQABgVABgVQAPmjiek4");
        this.shape_13.setTransform(222.3,51.3);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#000000").ss(2).p("AADJJQApiYAOjbQACgWABgVQASmpiOlJ");
        this.shape_14.setTransform(223.4,49.8);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#000000").ss(2).p("AgHJYQAniZAQjhQACgWABgWQAWmvh+lZ");
        this.shape_15.setTransform(224.5,48.4);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#000000").ss(2).p("AgSJnQAmibARjlQACgXABgWQAZm1hulq");
        this.shape_16.setTransform(225.7,46.9);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#000000").ss(2).p("Agkp0QBkGOglHVQgTDrglCb");
        this.shape_17.setTransform(226.8,45.4);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#000000").ss(2).p("AAvI1QAMg8AGhHQAJh4gCiJQgEiZgVh3QgdkLhajP");
        this.shape_18.setTransform(219,51.9);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#000000").ss(2).p("ABvH4QAIg9ABhJQgBh+gNiEQgXiUgohjQgzjlhyiP");
        this.shape_19.setTransform(212.6,57.9);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#000000").ss(2).p("ACqG8QAFg+gEhLQgLiEgah/QgoiRg7hOQhLi+iJhO");
        this.shape_20.setTransform(206.7,63.9);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#000000").ss(2).p("ADiF/QAChAgKhNQgViKgmh5Qg5iOhOg5QhjiYiggN");
        this.shape_21.setTransform(201.1,70.1);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#000000").ss(2).p("AEcFJQgBhCgPhPQgfiQgzhzQhKiLhhgjQh8hzi1A0");
        this.shape_22.setTransform(195.3,75.5);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#000000").ss(2).p("AFWEnQgFhDgThRQgqiWg/hvQhbiGh0gPQiUhMjMB0");
        this.shape_23.setTransform(189.5,78.9);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#000000").ss(2).p("AGQERQgIhEgZhTQg0ichLhqQhtiDiGAGQitgmjiC1");
        this.shape_24.setTransform(183.8,81.1);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#000000").ss(2).p("AHJEFQgLhFgehVQg+iihXhlQh/h/iZAbQjEAAj6D2");
        this.shape_25.setTransform(178,82.2);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#000000").ss(2).p("AICEAQgOhHgkhXQhHiohkhgQiQh8isAxQjcAnkRE1");
        this.shape_26.setTransform(172.3,82.8);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#000000").ss(2).p("AI7D7QgShIgohZQhSiuhwhaQihh5i/BGQj1BNkmF2");
        this.shape_27.setTransform(166.6,83.2);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#000000").ss(2).p("Ap1EsQE9m3ENhzQDWhdCuB3QB9BVBbC0QAuBbAVBK");
        this.shape_28.setTransform(160.9,88.2);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#000000").ss(2).p("ApQFWQEvnqD+iIQDKhuCjB5QB0BXBUDAQArBgATBQ");
        this.shape_29.setTransform(164.6,89.5);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#000000").ss(2).p("AorGAQEgodDvidQC+h/CXB8QBsBZBNDMQAnBlARBV");
        this.shape_30.setTransform(168.3,90.9);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#000000").ss(2).p("AoFGrQERpQDgizQCyiPCMB+QBkBaBGDYQAjBrAPBa");
        this.shape_31.setTransform(172,92.2);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#000000").ss(2).p("AngHWQECqDDRjIQCmihCBCBQBbBcA/DjQAgBxANBg");
        this.shape_32.setTransform(175.7,93.5);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#000000").ss(2).p("Am7IAQDzq1DCjeQCbixB0CDQBUBeA3DvQAcB3ALBk");
        this.shape_33.setTransform(179.4,94.8);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#000000").ss(2).p("AmWIrQDlroCyjzQCQjCBpCGQBLBgAwD6QAZB9AJBp");
        this.shape_34.setTransform(183.1,96);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#000000").ss(2).p("AlxJWQDXsbCjkJQCDjTBeCJQBCBiAqEFQAVCDAHBv");
        this.shape_35.setTransform(186.8,97.3);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#000000").ss(2).p("AlMKBQDItOCUkeQB4jkBSCMQA6BjAjERQARCJAFB0");
        this.shape_36.setTransform(190.5,98.6);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#000000").ss(2).p("AknKsQC5uBCFkzQBsj1BGCOQAyBlAcEcQANCPADB5");
        this.shape_37.setTransform(194.2,99.9);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#000000").ss(2).p("AkCLXQCqu0B3lIQBfkGA7CQQAqBnAUEoQAKCVABB+");
        this.shape_38.setTransform(197.9,101.1);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#000000").ss(2).p("AkCKyQCquUB3kyQBfj0A7CcQAqBvAUErQAKCXABB/");
        this.shape_39.setTransform(197.9,95.1);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#000000").ss(2).p("AkCKNQCqt0B3kbQBfjiA7CnQAqB3AUEvQAKCYABCA");
        this.shape_40.setTransform(197.9,89);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("#000000").ss(2).p("AkCJpQCqtUB3kFQBfjPA7CyQAqB/AUEyQAKCaABCA");
        this.shape_41.setTransform(197.9,82.8);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#000000").ss(2).p("AkCJFQCqs0B3juQBfi9A7C9QAqCHAUE2QAKCcABCA");
        this.shape_42.setTransform(197.9,76.6);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f().s("#000000").ss(2).p("AkCIhQCqsTB3jXQBfisA7DJQAqCOAUE6QAKCeABCB");
        this.shape_43.setTransform(197.9,70.4);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#000000").ss(2).p("AkCLJQCquoB3k/QBfj/A7CVQAqBqAUEpQAKCWABB+");
        this.shape_44.setTransform(197.9,98.7);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f().s("#000000").ss(2).p("AkCK6QCqubB3k3QBfj3A7CZQAqBtAUErQAKCWABB/");
        this.shape_45.setTransform(197.9,96.4);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#000000").ss(2).p("AkCKrQCquOB3kuQBfjwA7CeQAqBwAUEsQAKCXABB/");
        this.shape_46.setTransform(197.9,94);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f().s("#000000").ss(2).p("AkCKdQCquCB3klQBfjpA7CiQAqBzAUEuQAKCYABB/");
        this.shape_47.setTransform(197.9,91.6);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#000000").ss(2).p("AkIKRQCktvB2khQBgjmBACdQAtBwAaElQAMCUADB7");
        this.shape_48.setTransform(197.3,91.8);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f().s("#000000").ss(2).p("AkNKFQCctdB3kcQBgjiBFCWQAwBsAfEeQAPCPAFB5");
        this.shape_49.setTransform(196.7,92);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#000000").ss(2).p("AkTJ5QCVtKB5kYQBfjfBJCRQA0BpAkEVQASCLAHB1");
        this.shape_50.setTransform(196.1,92.2);
        this.shape_50._off = true;
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f().s("#000000").ss(2).p("AkTJ2QCVtIB5kVQBfjdBJCSQA0BpAkEWQASCMAHB1");
        this.shape_51.setTransform(196.1,91.6);
    
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#000000").ss(2).p("AkTJzQCVtFB5kUQBfjbBJCTQA0BqAkEXQASCMAHB1");
        this.shape_52.setTransform(196.1,91);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f().s("#000000").ss(2).p("AkTJvQCVtCB5kSQBfjaBJCVQA0BrAkEXQASCMAHB2");
        this.shape_53.setTransform(196.1,90.4);
    
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#000000").ss(2).p("AkTJsQCVtAB5kQQBfjYBJCWQA0BsAkEYQASCMAHB2");
        this.shape_54.setTransform(196.1,89.8);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f().s("#000000").ss(2).p("AkTJpQCVs9B5kOQBfjWBJCXQA0BtAkEYQASCNAHB1");
        this.shape_55.setTransform(196.1,89.1);
    
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#000000").ss(2).p("AkTJmQCVs7B5kMQBfjUBJCYQA0BuAkEZQASCNAHB1");
        this.shape_56.setTransform(196.1,88.5);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f().s("#000000").ss(2).p("AkTJjQCVs5B5kJQBfjUBJCaQA0BvAkEZQASCNAHB2");
        this.shape_57.setTransform(196.1,87.9);
    
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#000000").ss(2).p("AkTJgQCVs2B5kIQBfjRBJCaQA0BwAkEaQASCNAHB3");
        this.shape_58.setTransform(196.1,87.3);
    
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f().s("#000000").ss(2).p("AkTJHQCVsiB5j3QBfjFBJClQA0B3AkEeQASCPAHB4");
        this.shape_59.setTransform(196.1,82.3);
    
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#000000").ss(2).p("AkTIuQCVsNB5jnQBfi4BJCuQA0B+AkEkQASCRAHB5");
        this.shape_60.setTransform(196.1,77.3);
    
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f().s("#000000").ss(2).p("AkTIWQCVr6B5jXQBfiqBJC4QA0CFAkEoQASCUAHB6");
        this.shape_61.setTransform(196.1,72.3);
    
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#000000").ss(2).p("AkTH+QCVrlB5jHQBfieBJDCQA0CMAkEtQASCXAHB7");
        this.shape_62.setTransform(196.1,67.3);
    
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f().s("#000000").ss(2).p("AkTHmQCVrRB5i2QBfiRBJDMQA0CTAkExQASCaAHB8");
        this.shape_63.setTransform(196.1,62.2);
    
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#000000").ss(2).p("AkTHPQCVq9B5imQBfiEBJDWQA0CaAkE3QASCbAHB9");
        this.shape_64.setTransform(196.1,57);
    
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f().s("#000000").ss(2).p("AkTGoQCVqoB5iXQBfh3BJDhQA0ChAkE7QASCeAHB+");
        this.shape_65.setTransform(196.1,53.5);
    
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#000000").ss(2).p("AkTFsQCVqUB5iGQBfhqBJDqQA0CoAkFAQASCgAHB/");
        this.shape_66.setTransform(196.1,52);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f().s("#000000").ss(2).p("AkDDZQCqo7BvhAQBKhHA7CdQAIAWAHAaQAtCmAcEoQAOCWADB6");
        this.shape_67.setTransform(197.7,55.8);
    
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#000000").ss(2).p("Aj0BGQDAniBmAIQBAgxAxCPQAHAVAGAZQAnCjAUEQQAJCMAAB0");
        this.shape_68.setTransform(199.4,59.6);
    
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f().s("#000000").ss(2).p("AjlhHQDVmJBeBOQA1gbAoCCQAGAUAFAXQAgCgAMD5QAFCBgEBw");
        this.shape_69.setTransform(201.1,62.8);
    
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("#000000").ss(2).p("AjYjDQDokwBYCVQAqgEAfB0QAFATAEAVQAYCeAFDgQABB4gIBq");
        this.shape_70.setTransform(203,64.3);
    
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f().s("#000000").ss(2).p("AjNkzQD9jWBPDbQAgATAWBmQAEASACAUQASCagDDKQgDBtgMBl");
        this.shape_71.setTransform(205.1,64.5);
    
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("#000000").ss(2).p("AjFmXQESh9BHEiQAVApANBZQACARACASQALCYgLCxQgIBjgPBf");
        this.shape_72.setTransform(207.5,63.6);
    
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f().s("#000000").ss(2).p("Ai/njQFagpAaH5QAMD9g5EF");
        this.shape_73.setTransform(210.1,60.2);
    
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f().s("#000000").ss(2).p("Ai/ngQFZgkAaHxQADA1AAA2QgBDHguDM");
        this.shape_74.setTransform(210.1,60.6);
    
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f().s("#000000").ss(2).p("Ai/ncQFXggAcHpQADA0AAA3QgBDGguDJ");
        this.shape_75.setTransform(210.1,60.9);
    
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f().s("#000000").ss(2).p("Ai/nZQFVgaAdHgQAEA0AAA2QAADFgvDH");
        this.shape_76.setTransform(210.1,61.2);
    
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f().s("#000000").ss(2).p("Ai/nWQFUgVAeHXQAEA0AAA2QABDEgvDF");
        this.shape_77.setTransform(210.1,61.6);
    
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f().s("#000000").ss(2).p("Ai/nSQFSgQAfHOQAEAzAAA2QABDDgvDD");
        this.shape_78.setTransform(210.1,61.9);
    
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f().s("#000000").ss(2).p("Ai/nPQFQgLAhHHQAEAyAAA1QACDCgwDC");
        this.shape_79.setTransform(210.1,62.2);
    
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f().s("#000000").ss(2).p("Ai/nLQFOgGAjG9QAEAzAAA0QACDBgwDA");
        this.shape_80.setTransform(210.1,62.6);
    
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f().s("#000000").ss(2).p("Ai/nIQFNAAAjG1QAEAxABA1QADDAgxC9");
        this.shape_81.setTransform(210.1,62.9);
    
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("#000000").ss(2).p("Ai/nEQFLAEAlGsQAEAyABA0QADC/gxC7");
        this.shape_82.setTransform(210.1,63.2);
    
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f().s("#000000").ss(2).p("Ai/nBQFJAKAmGkQAFAxABAzQAEC+gyC6");
        this.shape_83.setTransform(210.1,63.5);
    
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f().s("#000000").ss(2).p("Ai/m9QFIAPAnGbQAFAwABA0QAFC9gyC3");
        this.shape_84.setTransform(210.1,63.8);
    
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f().s("#000000").ss(2).p("Ai/m5QFGAUApGSQAFAwABAzQAFC8gyC2");
        this.shape_85.setTransform(210.1,64.1);
    
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f().s("#000000").ss(2).p("Ai/m2QFFAZApGKQAGAwABAyQAGC7gzC0");
        this.shape_86.setTransform(210.1,64.5);
    
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f().s("#000000").ss(2).p("Ai/myQFDAeArGBQAGAvABAzQAGC6gzCx");
        this.shape_87.setTransform(210.1,64.8);
    
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f().s("#000000").ss(2).p("Ai/muQFBAjAsF5QAGAuACAyQAGC6gzCv");
        this.shape_88.setTransform(210.1,65.1);
    
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f().s("#000000").ss(2).p("Ai/mrQE/ApAuFwQAGAuACAyQAHC4g0Ct");
        this.shape_89.setTransform(210.1,65.4);
    
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f().s("#000000").ss(2).p("Ai/mnQE+AtAuFoQAHAtACAyQAHC3g0Cr");
        this.shape_90.setTransform(210.1,65.7);
    
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f().s("#000000").ss(2).p("Ai+mkQE8AzAvFfQAHAtACAxQAIC3g1Cp");
        this.shape_91.setTransform(210,66);
    
        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f().s("#000000").ss(2).p("Ai+mgQE6A3AxFXQAHAtACAwQAJC2g2Cn");
        this.shape_92.setTransform(210,66.4);
    
        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f().s("#000000").ss(2).p("Ai+mdQE4A9AyFOQAIAsACAxQAJC0g2Cl");
        this.shape_93.setTransform(210,66.7);
    
        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f().s("#000000").ss(2).p("Ai+mZQE2BCA0FFQAIAsACAwQAKC0g3Cj");
        this.shape_94.setTransform(210,67);
    
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f().s("#000000").ss(2).p("Ai+mVQE1BHA1E9QAHArADAwQAKCyg3Ch");
        this.shape_95.setTransform(210,67.3);
    
        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f().s("#000000").ss(2).p("Ai+mSQEzBMA2E1QAIAqADAwQAKCxg3Cf");
        this.shape_96.setTransform(210,67.6);
    
        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f().s("#000000").ss(2).p("Ai+mOQExBRA4EsQAIAqADAvQALCxg4Cd");
        this.shape_97.setTransform(210,67.9);
    
        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f().s("#000000").ss(2).p("Ai+mKQEwBWA4EjQAJAqADAvQALCvg4Cb");
        this.shape_98.setTransform(210,68.2);
    
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f().s("#000000").ss(2).p("Ai+mHQEuBcA6EaQAIAqAEAuQAMCvg5CZ");
        this.shape_99.setTransform(210,68.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(54).to({_off:false},0).wait(15).to({_off:true},1).wait(50));
    
        // Layer 16
        this.instance_10 = new lib.Tween14("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(231.5,208.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},23).to({y:203.1},12).to({y:198.6},7).to({y:203.1},5).to({y:199.5},4).to({y:200.1},3).to({startPosition:0},15).to({scaleX:1.31,x:238.8},9).to({startPosition:0},7).to({scaleX:1,x:231.5,y:208.5},18).wait(17));
    
        // Layer 13
        this.instance_11 = new lib.Tween12("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(196.3,213.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},6).to({startPosition:0},17).to({y:208},12).to({y:203.5},7).to({y:208},5).to({y:204.4},4).to({y:204.5},3).to({startPosition:0},15).to({scaleX:1.16,x:206},9).to({startPosition:0},7).to({scaleX:1,x:196.3,y:213.4},18).wait(17));
    
        // Layer 15
        this.instance_12 = new lib.Tween13("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(217.2,287);
        this.instance_12._off = true;
    
        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#344C82").s().p("AgHBbQhxgfgageQgageCGg6QBDgdBIgXQAfgKAPALQAQAMgtAbQguAbhWAfQgsAOgiAKQALAJAZAKQAxAVA/AEQBBAFgEAcQgCAOgPANQgzgJg4gQg");
        this.shape_100.setTransform(124.5,231.5,0.969,1,0,0,180);
        this.shape_100._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({startPosition:0},17).to({x:204.2,y:249.3},12).to({y:234.9},7).to({y:242.1},5).to({scaleY:0.17,y:236.7},4).to({scaleY:1,y:236.1},3).to({startPosition:0},15).to({_off:true,scaleX:0.97,skewY:180,x:124.5,y:231.5},1).wait(16).to({_off:false,scaleX:1,skewY:0,x:217.2,y:233.5,mode:"synched",startPosition:0,visible:true},0).to({y:287},11).wait(23));
        this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(69).to({_off:false},1).wait(2).to({y:230},0).wait(13).to({_off:true},1).wait(34));
    
        // flash0.ai
        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#344C82").s().p("AkzBRQgNgNAWgYQAxg1BVgqQB6g8BeAlIAxAYQA4AhAgArIBZhJIAXADQAUAIgPAcIhoBZIhVhLQgegYg2gOQg8gQgzAKQgsAIhAAnQgfATgXASIgxArQgLgCgHgGg");
        this.shape_101.setTransform(237.6,285.9);
    
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#344C82").s().p("AD+BAQgWgXgfgbQg/gzgvgQQg1gRhBAJQg9AJgjAYIhkBIIhkhyQgMghAWgHQAMgDANADIBVBfQApguBAgdQAggPAXgFQBqgdB7BUQBVA5AtBDQAVAdgQAOQgIAGgMABg");
        this.shape_102.setTransform(102.4,276.7);
    
        this.instance_13 = new lib.Tween11("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(198.8,285.6);
        this.instance_13._off = true;
    
        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#344C82").s().p("AgHBbQhxgfgageQgageCGg6QBDgdBIgXQAfgKAPALQAQAMgtAbQguAbhWAfQgsAOgiAKQALAJAZAKQAxAVA/AEQBBAFgEAcQgCAOgPANQgzgJg4gQg");
        this.shape_103.setTransform(214.6,235.8);
        this.shape_103._off = true;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101}]}).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},17).to({state:[{t:this.instance_13}]},12).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},15).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},13).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},11).wait(23));
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({startPosition:0},17).to({x:204.2,y:249.3},12).to({y:237.6},7).to({y:244.8},5).to({scaleY:0.16,y:239.4},4).to({scaleY:1,y:238.8},3).to({startPosition:0},15).to({_off:true,x:214.6,y:235.8},1).wait(16).to({_off:false,x:198.8,y:232.1,mode:"synched",startPosition:0,visible:true},0).to({y:285.6},11).wait(23));
        this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(69).to({_off:false},1).wait(2).to({y:235.3},0).wait(13).to({_off:true},1).wait(34));
    
        // Layer 11
        this.instance_14 = new lib.Tween1("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(166.1,321.5);
    
        this.instance_15 = new lib.Tween2("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(170.5,308.3);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({startPosition:0},0).to({_off:true,x:170.5,y:308.3},12).wait(50).to({_off:false,x:166.1,y:321.5},11).wait(24));
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({_off:false},12).to({x:172.7,y:295.1},7).to({y:284.1},5).to({x:170.5,y:277.5},4).to({x:168.3,y:275.3},3).to({x:170.5,y:279.7},15).to({y:270.9},9).to({y:284.1},7).to({_off:true,x:166.1,y:321.5},11).wait(24));
    
        // Layer 9
        this.instance_16 = new lib.Tween17("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(180.9,266.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:0.95,scaleY:0.95},54).to({scaleX:1.05,scaleY:1.05},15).to({scaleX:0.93,scaleY:0.93,y:265.6},9).to({y:266.6},1).to({y:265.6},1).to({startPosition:0},5).to({scaleX:1,scaleY:1,y:266.6},11).wait(24));
    
        // Layer 3
        this.instance_17 = new lib.Tween18("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(203.4,265.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:0.94,scaleY:0.94},54).to({scaleX:1.04,scaleY:1.04},15).to({scaleX:0.91,scaleY:0.91},9).to({scaleX:1,scaleY:1},18).wait(24));
    
        // Layer 6
        this.instance_18 = new lib.duoui("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(433.6,261.9,1,1,0,0,0,421.4,264.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:423.6,startPosition:14},54).to({x:455.6,startPosition:29},15).to({x:422.6,startPosition:38},9).to({x:433.6,startPosition:16},18).wait(24));
    
        // Layer 10
        this.instance_19 = new lib.Tween19("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(255,509.5,1,1,180);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(82).to({_off:false},0).to({x:327.5,y:459.9,alpha:0},7).wait(31));
    
        // Layer 8
        this.instance_20 = new lib.Tween19("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(145,517.5);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(82).to({_off:false},0).to({x:42.5,y:481,alpha:0},7).wait(31));
    
        // Layer 5
        this.instance_21 = new lib.Tween19("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(284.9,541.6);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(82).to({_off:false},0).to({x:366.1,y:489.2,alpha:0},8).wait(30));
    
        // Layer 18
        this.instance_22 = new lib.Tween19("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(262,554.6);
        this.instance_22._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(82).to({_off:false},0).to({rotation:720,guide:{path:[262,554.5,266.1,548.4,278.4,543.7,296.4,537,322.8,537,341.2,537,354.2,553.3,358.2,558.3,364,568,369.1,576.6,371.9,580.5]},alpha:0},9).wait(29));
    
        // flash0.ai
        this.instance_23 = new lib.Bitmap8();
        this.instance_23.parent = this;
        this.instance_23.setTransform(45.2,356.3,2.94,2.94);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(120));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.4,3.6,479.3,723.2);
    
    
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
                this.parent.parent.icon_rtv_check_pausable();
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:1.5,regY:22.3,x:16.3,y:48.5,alpha:0.306},0).wait(1).to({y:38.5,alpha:0.556},0).wait(1).to({y:30.8,alpha:0.75},0).wait(1).to({y:25.2,alpha:0.889},0).wait(1).to({y:21.9,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:1.5,regY:22.3,x:16.3,y:21.1,alpha:0.972},0).wait(1).to({y:21.9,alpha:0.889},0).wait(1).to({y:23.3,alpha:0.75},0).wait(1).to({y:25.2,alpha:0.556},0).wait(1).to({y:27.7,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
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
        this.tit.setTransform(112.3,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(94.4,137.8,1,1,0,0,0,94.4,109.4);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,28.4,188.8,218.8);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.raptivi1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(99.6,123.8,0.34,0.34,0,0,0,232.1,367.7);
    
        this.instance_1 = new lib.sao2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(133.7,220,0.34,0.34,0,0,0,27.2,25);
    
        this.instance_2 = new lib.bongbong("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(24.6,197.2,0.34,0.34,0,0,0,72.5,127.5);
    
        this.instance_3 = new lib.Tween20("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(86.6,248.9,0.34,0.34);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,183.7,254.4), null);
    
    
    (lib.mRaptivi_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_rtv_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));
    
        // Layer 4
        this.instance = new lib.Symbol3();
        this.instance.parent = this;
        this.instance.setTransform(-12.1,-14.6,1,1,0,0,0,91.9,123.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(119));
    
        // body
        this.instance_1 = new lib.raptivi1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-4.2,-14.3,0.34,0.34,0,0,0,232.1,367.7);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:367.5,y:-18.7},52).to({regY:367.7,y:-14.3},66).wait(1));
    
        // sao
        this.instance_2 = new lib.sao2("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(29.9,81.9,0.34,0.34,0,0,0,27.2,25);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(119));
    
        // ca
        this.instance_3 = new lib.bongbong("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-79.2,59.1,0.34,0.34,0,0,0,72.5,127.5);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(119));
    
        // shadow
        this.instance_4 = new lib.Tween20();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-17.2,110.8,0.34,0.34);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({scaleX:0.29,scaleY:0.29},52).to({scaleX:0.34,scaleY:0.34},66).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-103.9,-153,195.1,269.4);
    
    
    // stage content:
    (lib.rtv2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_rtv.mp3", "voice_rtv"); 
            var icon_rtvSound, icon_rtvSoundTimeOut;
            root_rtv = this;
            htcv_icon_rtvOver = function() {cv_icon_rtvOver();}
            htcv_icon_rtvOut = function() {cv_icon_rtvOut();}
            
            function cv_icon_rtvOver() {
                root_rtv.ico.over = true;
                root_rtv.hit.tit.over = true;
                root_rtv.hit.tit.gotoAndPlay(1);
                icon_rtvSoundTimeOut = setTimeout(icon_rtvSoundTimeOutComplete, 500);
            }
            
            function cv_icon_rtvOut() {
                root_rtv.ico.over = false;
                root_rtv.hit.tit.over = false;
                if (root_rtv.hit.tit.currentFrame == 7) {
                    root_rtv.hit.tit.play();
                }
                clearTimeout(icon_rtvSoundTimeOut);
            }
            
            function icon_rtvSoundTimeOutComplete() {
                clearTimeout(icon_rtvSoundTimeOut);
                
                // if (root_rtv.ico.currentFrame == 0) {
                //     icon_rtvSound = createjs.Sound.play("voice_rtv");
                // }
                root_rtv.ico.play();
            }
            
            this.icon_rtv_check_pausable = function() {
                if (root_rtv.ico.over == false && root_rtv.hit.tit.over == false && root_rtv.ico.currentFrame == 0 && root_rtv.hit.tit.currentFrame == 0) {
                    cvht_icon_rtv_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // 5-3
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(103,112,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.mRaptivi_resize();
        this.ico.parent = this;
        this.ico.setTransform(119.3,109.6,1,1,0,0,0,13.3,-53.4);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(99.5,164.1,188.8,255.3);
    // library properties:
    lib.properties = {
        width: 195,
        height: 280,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/rtv2017_atlas_.png", id:"rtv2017_atlas_"}/*,
            {src:"sounds/voice_rtv.mp3", id:"voice_rtv"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_rtv = lib_rtv||{}, images_rtv = images_rtv||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_rtv, images_rtv, createjs, ss, AdobeAn;