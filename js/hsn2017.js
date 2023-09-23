(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"hsn2017_atlas_", frames: [[260,54,38,45],[260,0,40,52],[260,197,23,23],[260,101,32,37],[260,140,32,19],[0,0,258,293],[260,161,16,34]]}
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
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap4 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap5 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap7 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap8 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["hsn2017_atlas_"];
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
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C5E53C").s().p("Ak4FAQiYgYh3grQh3gshEg4QhGg6gEg/QgEhJA/hGQA+hDB0g1QB0g1CWgeQCcgeCpAAQClAACjAjQCWAgB8A6QB4A4BFBCQBGBEAAA/QAAA/hBA6Qg/A4h0ArQhzAriVAYQibAYipAAQioAAidgZg");
        this.shape.setTransform(3.1,-27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#71BA24").s().p("AkJGeQg4AAgtAYQgIgVgSgSQghghguAAIgMAAQgCgMgDgLQAyAMA1AJQCMAaCVAGIgDACQgZAZgTAdQg1gmhFAAgAFDGOIgVgTQAtgGArgIIAlgHQgQAJgNAOQgbAbgMAhQgQgXgUgUgAJsF9Qgogpg3gEQBhgaBUgjQCJg3BThIQBVhIAPhMQAVhhhFhXQAegHAYgXIADgEIAFAEQgJARAAAWQAAAmAbAbQAQAQATAGQgjAkAAAxQAAAzAlAlQASASAUAJQgUAkgiAiIgMgBQgeAAgVAVQgUAUgBAdQhGAwhiAoIgDACIgCgBQggghguABQgtgBghAhQgZAagGAhQgHgJgIgJgAv3DVQAOgfAAgmQAAhFgwgxQgkgjgwgKQADgVAGgVQAfALAkABQAgAAAdgKQgJAaAAAZQAABMBRBLQAwAtBIAnQgOAKgNAMQgaAbgOAeQhVgrg7gygAtzjhQABgjgMgeQAsgYA1gWIABAAQAGAJAIAIQALALAMAHQhIAog0AvIAAgLgALelfQiUhAjGgjIgFgBIBPANQDPAkCeBCIAUAJQgFAOAAAPQgwgcg8gZgApzl/IAAgLQBbgaBogSIBTgNIg0AMQh6AdhqAsQACgIAAgJg");
        this.shape_1.setTransform(1.3,-21.1);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#99DD37").s().p("AmOGYQg1gJgxgMQgNg0gpgpQg8g8hVAAQhDAAgzAlQhIgngwgsQhRhLAAhOQAAgZAJgZQAigNAdgcQAvgwAEhCQA0guBHgpQATAKAWgBQAmAAAbgaQAUgVAFgbQBpgsB6gdIA0gLQCkgiCrAAQDJAADBAiIADAAIABAAIAEABQDGAjCVBAQA7AZAwAcIAAAEQAAAvAhAgQAgAhAuAAQANAAANgDQBEBYgUBgQgQBNhUBHQhUBJiJA3QhUAjhhAZIgQgBQguAAgkAYIglAGQgrAIgtAGQhRhEhtAAQh6AAhWBVQiUgGiNgagAlPlHQiWAdh0A1Qh0A1g+BDQg/BGAEBJQAEA/BGA7QBEA4B3ArQB3ArCYAYQCdAaCoAAQCpgBCbgYQCVgYBzgrQB0grA/g3QBBg7AAg/QAAg+hGhEQhFhDh4g4Qh8g6iWggQijgjilAAQipAAicAfg");
        this.shape_2.setTransform(2.5,-25.6);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AhWJcQgNgNgMgOQg8A1hSAAQhaAAg/g/QhAhAAAhZQABgVADgUQgqgCgegeIgFgGQg4AvhKAAQhVAAg8g8Qg8g8AAhVQAAgwATgoQAPgeAagaQAMgNAOgKQA0gkBDAAQBUAAA8A7QApApANA0QADAMABAMIAMgBQAuAAAhAhQASASAIAWQAtgZA4AAQBFAAA2AmQASgcAagaIACgCQBWhVB6AAQBtAABRBEIAWATQAUAVAQAWQALghAbgbQAOgNAPgKQAkgXAuAAIAQABQA3AFApAoQAIAJAHAJQAGghAZgaQAgggAuAAQAtAAAgAgIACACIAGAHQArgeA4AAQBKAAA0A0QAzAzABBKQgBBJgzA0Qg0A0hKAAQhJAAg0g0QgogogJg2IgKABQguAAggggIAAgBQgCA/gsAuQgvAuhBAAQg4AAgqgiQgCB4hVBVQhYBYh8AAQh8AAhWhYgAQFBWQgVgVAAgeIAAgBQABgdAUgTQAVgVAdAAIANABQAVAEAQAQQAVAUAAAdQAAAegVAVQgVAUgdAAQgdAAgVgUgAz5AtQgxgwAAhFQAAhFAxgxQAxgxBFAAQASAAARAEQAvAJAkAkQAxAxAABFQAAAmgPAgQgMAZgWAWQgxAxhFAAQhFAAgxgxgAR6hoQgVgJgRgRQglglAAg0QAAgyAigkQgTgGgQgQQgbgbAAgmQAAgVAJgSQAHgPALgMQAbgbAnAAQAmAAAcAbQAaAbAAAnQABAbgNAVQAoAGAeAeQAlAlAAA0QAAA0glAlQglAlg0AAQgbAAgYgLgAxXkWQgggNgZgaQg0g0AAhIQAAhJA0gzQAygzBJAAQBIAAA0AzQAbAbAMAgQAMAeAAAjIAAAKQgEBCgvAwQgdAcgiANQgdAKggAAQgjAAgfgMgAN3mvQghghAAguIAAgFQABgPAEgOQAIgZAUgTQAgghAvAAQAtAAAiAhQAgAgAAAuQAAAsgdAgIgDADQgYAXgeAHQgMADgNAAQgvAAggghgArroGQgMgHgKgKQgJgIgGgKQgNgVABgaQAAglAbgbQAagbAlAAQAmAAAbAbQAWAXAEAeIAAALQABAJgCAIQgFAbgUAVQgbAagmAAQgWAAgTgJg");
        this.shape_3.setTransform(0,0.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-132.3,-69.6,264.6,139.4), null);
    
    
    (lib.Tween33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap4();
        this.instance.parent = this;
        this.instance.setTransform(-21,-21.3,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-152.1,-147.4,302,303);
    
    
    (lib.Tween31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF862C").s().p("AgnDpQhOAAhVgUQhWgUhYgmIgBgCIAEAAIAAABQBdARBHAAQBBAAAvgPQAtgPAdgeQAlgoAJhGQAFgqgFhbQgDhAABgcQAkgIAkAAQBjAABSA0QBIAuAgBBQgFAlgKAdQgJAZgQAYQgkA4hFAxIgKAHIAAABQhnBDiCAHIgdAAg");
        this.shape.setTransform(-3.9,11.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("Aj1FNQhWgUhZgnIgBgBQgFgHACgFQACgDAEAAIAHABQBdARBFAAQB+AAA2g5QAlgmAIhFQAFgqgEhZQgEhBACgeQADh0BLhBQAzgrBEgKQAVgEAYAAIADAAQAhAAAeAIQAfAGAcAPQA3AdAbAzIAAACIABABIgBABIgCABIgGAEQgeAQgNAUQgLAQgFAYIgGA3IAAAGIAAACIAAAnQAAAtgCAcQgEA2gPApQggBahvBLQhvBMibAAQhPAAhXgUgAmgEMQBYAmBWAUQBVAUBOAAIAdAAQCCgHBnhDIAAgBIAKgHQBFgxAkg4QAQgYAJgaQAKgdAFglQgghAhIguQhSg0hjAAQgkAAgjAIQgBAcADBAQAFBagFArQgJBGgmAoQgdAegtAPQgvAPhBAAQhHAAhdgRIAAgBIgEAAgADohMQBIAsAkA/IABgQQADgmgBhIQgBhGAZgmQAOgVAfgRIADgCQgagvg1gbQg0gbhAAAQhdAAhBA3QhJA+gHBtQAjgIAkAAQBhAABSAyg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFAEB","#FFDCC8"],[0,1],-22,0.3,22.3,0.3).s().p("AAiBQQhRgyhhAAQgkAAgkAIQAHhsBKg+QBBg3BcAAQBAAAA0AbQA1AbAaAvIgDACQgfARgOAVQgZAmABBFQABBIgDAnIgBAQQgkhAhIgsg");
        this.shape_2.setTransform(19.9,-15.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.5,-35.3,85.1,70.6);
    
    
    (lib.Tween30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap7();
        this.instance.parent = this;
        this.instance.setTransform(-26.6,-21.9,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.3,-21.9,74.8,43.8);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgXAEIgDgBIAAgDQAAAAAAAAQAAAAAAgBQABAAAAAAQABgBAAAAIADAAQAQADAOgDQAIgBAEgDIADAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAADIgCABQgLAHgSAAQgIAAgLgDg");
        this.shape.setTransform(-5.5,-2.8);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFAEB","#FFDCC8"],[0,1],-4.8,0,4.8,0).s().p("AAYAeQgMAAgNgMIgDgCIgEAAQgQgDgIgDQgLgGAAgJQAAgIAFgFQAKgLAYAAIAEABQAVABAMAGQALAHAAAMQAAAOgSASg");
        this.shape_1.setTransform(-5.8,-4.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AAYAlQgPAAgPgNIgDgBQgRgCgJgEQgPgIgBgOQAAgLAIgIQAMgMAbAAIAEAAQAeABANAMQAJAJAAAMQAAALgKAPIgMAMIgCABgAgmgSQgFAFAAAIQAAAJALAGQAIADAQADIAEAAIADACQANAMAMAAIACAAQASgSAAgOQAAgMgLgHQgMgGgVgBIgEgBQgYAAgKALg");
        this.shape_2.setTransform(-5.8,-4.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
        // Layer 4
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFA000","#FF6400"],[0,1],-7.9,6.9,17.8,6.9).s().p("AhNAbIAehBIAiARQAnAUAiATIASALQg4AAg4AHIgUADQgNgKgKgCg");
        this.shape_3.setTransform(-13.2,-12.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF1F7A").s().p("AgFARQgIAAgKgCQgTgEgGgLQgDgGADgKQAJAFALAAIAQgBQARgDAMAAQARABAJAMQAGAGACAJIgnADIgNABIgEAAg");
        this.shape_4.setTransform(-1.2,9.8);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#00AD25").s().p("AgpAMQgFgFgCgIIgBgNQAGADAFAAQAIAAAMgDQAPgDAHAAQANAAAKAGIAYAQQgJAFgMACIgYACQgUABgJACIgGABQgGAAgGgGg");
        this.shape_5.setTransform(10.7,4.4);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFE037").s().p("AgcAMQgKgDgFgHQgDgKADgOQAHAEAIADQAFABALgBIAFAAQAOAAANAEQANAFAGAKIAGAMQgBADgDACQgIABgJAAQgWABgegLg");
        this.shape_6.setTransform(-7.6,2.4);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B70000").s().p("AgkALQgJgIAAgSQAHAEAHAAIAPgCQANgDAHAAQAHAAAIACQAQADAMAaQgTgJgyAKIgCABQgIAAgEgGg");
        this.shape_7.setTransform(11.1,-4.2);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AAIAWQANgGAAgJQAAgIgNgHQgIgEgKgBQgBgIgEgGQARABANAHQAOAIAAALQAAAMgOAIQgPAIgUAAQAQgBAMgFgAgcAYIAIgJQAIgOACgKIAQAFQAMAEAAAHQAAAGgMAGQgMAFgUAAIgCAAg");
        this.shape_8.setTransform(0.5,-3.6);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#7C3623").s().p("AiYBYQgTgOADgXQACgOAOgeQAKgSACgIQAEgNgEgJQgGgLgVgDQglgEgVgJQgTgJAAgIQAAgJATgHQAVgJAlgEQA8gGA4AAQB2AABTAaQBJAXASAgQAJASgKAQQgdAuhCAkQhKAnhSAEIgSABQhNAAgughgAg/AuIgBABIgCAHQgBAIADAHQAGAMAVAFQAMACAIAAIARgBIApgDIABgBIABgBQgCgJgFgIQgLgRgVAAQgLgBgTADIgPABQgLAAgJgFIgBAAIgBAAgAA0gEQgBADACAJQACANAHAHQAGAGAJAAIAGAAQAJgCAUgBQASgBAJgCQAOgCAJgHIACgBIgCgCIgagRQgMgHgOAAQgJAAgNADQgOADgGAAQgHAAgGgDIgDgCgAh4giQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAIgCAKQgCALAEAIQAFAJALAEQAgAKAWAAQALAAAIgDQAGgCABgEIAAgBIgGgNQgIgNgOgFQgNgFgQAAIgMABQgIAAgEgCQgGgBgGgFIAAAAIgBAAgAhmhkQgIAIAAALQABAPAPAIQAHADANACIAIACIABAAIAEAEIAGAEQAQAJAXAAQAWAAAQgJQAQgKAAgNQAAgNgQgKQgPgJgVAAIgBgBQgNgMgegBIgFAAQgbAAgMAMgACkguIgCgGQgCgKgGgJQgKgSgOgCIgPgBQgJAAgMACQgJACgGAAQgIAAgIgFIgCgBIAAADQgBADABAKQACANAHAHQAHAHALgCQA4gLAPANIAFAFg");
        this.shape_9.setTransform(0.1,3.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#5B1A0B").s().p("AiZBMQgKgIgDgQIALAJQAvAhBPABIATAAQBYgGBKgnQA/gkAegsQgBAJgCADQgdAvhDAiQhKAnhUAEIgWABQhMgBgrgegAiohFQgggDgSgIQgRgFgGgLQgDgDAAgHQAFAGALAEQAWALAnAEQARADAEAHQACAFgBAFQgHgFgQgDg");
        this.shape_10.setTransform(0,6.5);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AieCPQgOgJgDgZIgBgRQgBgGABgHQACgQAPgfQAJgRACgHQgDgGgTgCQgigEgTgHQgTgIgHgLQgHgMAFgPQAAgNAWgKQANgFASgDQgIgGgGgBIgDgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgDQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABAAQAKACANAKIAUgDQA5gHA4AAIgSgLQgigUgogUIgigRIgBAAIgCgCIAAgDQACgDAEABIAlASQApAVAjAUIAaAQQBmABBPAXQBTAYAVAmQAFAJABAJIABALIgCAOQgCANgDAFQgeAwhEAkQhMAohWAEIgWABQhOAAgtghgAiaCJQArAfBMAAIAWgBQBUgEBKgmQBDgjAdgvQACgDABgKQgeAug/AjQhKAohYAFIgTAAQhPAAgvghIgLgKQADARAKAHgAinhWQglAEgVAJQgTAHAAAJQAAAIATAJQAVAJAlAEQAVADAGALQAEAJgEAMQgCAIgKATQgOAegCAOQgDAXATAOQAzAkBagEQBSgEBKgnQBCgkAdgvQAKgQgJgRQgSgghJgXQhTgah2AAQg4AAg8AGgAjygiQAGAKARAGQASAHAgAEQAQACAHAFQABgFgCgEQgEgIgRgCQgngFgWgKQgLgFgFgFQAAAGADAEgAglByQgVgFgGgMQgDgHABgIIACgHIABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAJAFALAAIAPgBQATgDALABQAVAAALARQAFAIACAJIgBABIgBABIgpADIgRABQgIAAgMgCgAg9BfQAGALATAEQAKACAIAAQAFABANgCIAmgDQgCgJgGgHQgJgMgRgBQgLAAgSADIgQABQgLAAgJgFQgDAKADAHgABNA+QgJAAgGgGQgHgHgCgNQgCgKABgDIAAgDIADACQAGADAHAAQAGAAAOgDQANgDAJAAQAOAAAMAHIAaASIACACIgCABQgJAHgOACQgJACgSABQgUABgJACIgGAAgAA5AnQADAJAEAFQAGAGAHAAIAFgBQAKgCAUgBIAYgCQANgCAIgFIgXgRQgLgGgNAAQgHAAgPADQgMADgIAAQgGAAgGgDIABANgAhqAlQgLgEgFgKQgEgIACgLIACgJQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAGAFAGABQAEABAIAAIAMgBQAQAAANAFQAOAFAIANIAGAOIAAABQgBAEgGACQgIADgLAAQgWAAgggKgAh3AWQAEAIAKADQAgAKAVAAQAKAAAHgCQAEgCABgCIgGgNQgHgLgMgEQgNgFgPAAIgGAAQgKABgGgBQgIgCgGgDQgEANAEAKgAg3gPIgGgEIgEgEIgBAAIgIgCQgNgCgHgDQgPgIgBgPQAAgLAIgIQAMgMAbAAIAFAAQAeABANAMIABABQAVAAAPAJQAQAKAAANQAAANgQAKQgQAJgWAAQgXAAgQgJgAgGg0QAKABAIAEQAOAHAAAJQAAAJgOAGQgMAFgQABQAUAAAPgIQAPgIAAgMQAAgMgPgIQgNgHgQgBQADAGABAIgAgQgXIgIAJIADAAQATAAAMgFQAMgGAAgGQAAgHgMgFIgQgFQgBALgJAOgACfgXQgPgNg4ALQgLACgHgHQgHgHgCgNQgBgKABgDIAAgDIACABQAIAFAIAAQAGAAAJgCQAMgCAJAAIAPABQAOACAKASQAGAJACAKIACAGgABJghQAFAGAKgBQAygKATAJQgLgbgRgDQgHgCgHAAQgJAAgMADIgPACQgIAAgHgEQABATAIAIg");
        this.shape_11.setTransform(0,0.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.3,-17.3,50.8,35.3);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFAEB","#FFDCC8"],[0,1],-13.9,0.1,14.1,0.1).s().p("AgYAqIgEgBQgQgFgNgFQgfgNgUgSQgMgJgHgMQgHgOgCgOIAAgMIEMB5IAFABQhhgChAgRg");
        this.shape.setTransform(-19.8,34.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFA000","#FF6400"],[0,1],-3.6,0.2,3.6,0.2).s().p("AAdBdQg7gogDgvQgCgeAVghQAMgUAQgPIAUC5IgFAAg");
        this.shape_1.setTransform(-8.5,-25.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFA000","#FF6400"],[0,1],-18.6,0.8,4,0.8).s().p("AglApIAWgXIAIgJQADgDABgGQAAgEgDgGQgCgHgGgFIgDgCIA3gdQgFAngVAfQgPAYgWANIgMgNg");
        this.shape_2.setTransform(39.4,-12.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF0000").s().p("AAAAsIgBAAQgLgCgMgOIgFgHIgCgDIgCgDQgHgNgHgPIABAAQAVgeAbAAQAVAAAZASIgGAIQgTAYgJAeQgGAHgHAAg");
        this.shape_3.setTransform(-16.2,48.1);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#B70000").s().p("AhOAFIgBgFQgDgQAAgTQBDASBiABIgKAFQgOAIgMAKQgKAJgIAKIgBAAQgZgTgWAAQgeAAgVAdQgFgPgDgQg");
        this.shape_4.setTransform(-14.1,42.6);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFF2E8").s().p("ACHDMQgogBgtgIIgfgIIgWgGIhEgXQANgVATgQQAMgLANgJIALgGIgBgHIgJAAIkNh5IAAgBIgEgBIAAAOQACAOAIAOQAIANANAMIgHAMQghgdgZgfQhHhaAPhgQAIAcAfAeQAjAlA8AiQgEACgDAEQgFAKAOAXQAPAYAPAIQASAHAaAAQAagBAGgKQADgFgDgIQDWBhCQAAQBAgBAtgSQAegNAQgSIAAgBQgHAbgIARQgeBCg6AhQgdARgjAJQgjAHgoABIgCAAgAi0BnIgCgCIgRgKIgFgDIABgZIAdAKQAAASACAQIAAABIgIgFg");
        this.shape_5.setTransform(-5.2,31.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#00AD25").s().p("AAzDQQgogZgWggQgQgXgVgoQgTgmgPgWQgZglgogqQghghgKgiQgJgaAGgYQAEgWAQgPQAMgPAQgGQATgIAhABQAmgBAmAKQApAKAYASQAfAYAYBEIABAFQgHAJgIASQgIAQgFATQgFgIgGgHIgNgJIgGgDIgDABQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAABABQAAAAAAAAIACACIAGADIALAJQAOAOADAXQgNgMgNgFQgHgBgGAAIgGABIgCABIgBACIACAEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAEAAQAGAAAGACQAUAHASAWQAAABABAAQAAABAAAAQABAAABAAQAAABABAAIACgDQAGgDAMAEQARAHAQAWIADABIACAAIACgEIgBgDQgPgUgQgHQgMgHgKACIgEABQAFgNAZgcQAkAjAUA6QATA3gDAwQgDAsgWASQgQALgYABQglAAgrgbg");
        this.shape_6.setTransform(22.9,-4.6);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#008C1A").s().p("AhCA8QgQhDgugWIgKgEIgMgTQgagngBgHQAAgFALgRQAMAaAZAbQAoApAZAkQAQAXASAlIASAfIAPAbQgfgZgmgrgAhVAkQgYgcgVgdQAjARASAyIgIgKgABugQIgDgEIAAgCQgBgQgGgNQAGgWAIgVQARgjARACQANABAHAHQAHAEABAGQACAFAAAFQAAAEgCADIgJAJQgVAVgJAMQgUAXgFANIgCgCg");
        this.shape_7.setTransform(20.7,-2.7);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FF7F1E").s().p("AB1EPIAJgnQAMg4ACgwQAEhQgUg2QgUg3gqgZQgYgPgaAAQhOAAhcB8QgPAWgOAWQAOgiALghQAziXgpgiQgSgPgdgBQgjABgnATQgoAUghAgIgNAPQArg6BJgrQAvgcAygOIAHADQAYASAKAnQAFATAAASIACACIACAAIADAAIABgCQAAgUgFgVQgLgpgbgRIgBgBQA2gQA5ABQAqgBAoAKIABABQgOATAAAHQABAIAbAoIAKAPQgdgHglALQgPAFgOAIIgMAHQgEACACACIADACIADgBIALgFQANgHAOgGQApgNAfANQAXAgAYAfIAQATQAGAWADAdQAAAEAEAAIADgCQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQgCgVgEgRQAdAfAaAXQAKAIAJAGQAXAdAmAXQAfAUAcAGIACAUQAGBDgPA6IAAADIgHAGQgLALgPAIQgwAbhMAAQgjABgogGg");
        this.shape_8.setTransform(-2,11.4);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("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");
        this.shape_9.setTransform(0,-0.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AiRDxQgUgMgCgFQAAgDAHgOIAFgKIABAAIABgDIABAAIAGgNQAGAFAHAEQgEACgDAIQgCAIAAAJQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABIACACIADgBIABgEIACgNQACgHACgBIACAAIABgBQAIAEAKAFIgBAWIAAAAIAAAFIAAAAIgBAIIgBANQgMABgWgMgAgiB2IgFgFQgNgPgZgNIgHgFIACgEIAJgRQAagwAegoQBZh6BLgBQAYABAWANQBPAugECWQgDBNgUBMQh5gUiehJgACEgnQAuAGAOAxQAIAcgDAvIAAAGIAAAIIACAEIADABIAagCIAAgIIgXADIAAgMQACgwgIgdQgQg2gygHQgogHgyAuQgZAXgSAbQgCACACACIADABQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIABgBQASgXAWgVQArgoAhAAIAKABgAhjBqQgHgDgHgLQgEgGgBgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIACgCQACgDAHAAQAHABAIAEIAFABIADACQAJAFAGAFQAGAGgCAGIgBABIgEACIgJABIgGABQgIAAgGgCgAh4BFIgKgBIgygdQgrgegYgeQgOgSgGgRQABgfAPgeQAPgkAfgdQAfggAngTQAmgSAhgBQAaABAQANQAjAfgtCJQgYBJgkBKQgPgGgNgCgAhlh4QASAKgGAtQgFAfgMAeIgBABQgBADADAAIACAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAMgcAFgcQAKg4gYgPQgkgWgqAWQgXAMgcAeIgFAEIgLgNIgGAEIANARIADABQABABAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFgFIADgDQAbgbAVgLQAUgLASAAQARAAAQAKg");
        this.shape_10.setTransform(-15.5,17.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43.8,-53,88,106);
    
    
    (lib.Tween21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(51,51,51,0.4)").s().p("AkzA8QgEgXBWghQBYghB/gYQB/gZBdgCQBegBAEAXQAEAWhXAiQhXAgiAAZQh/AYhdACIgHAAQhWAAgEgVg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.7,-8.1,61.6,16.2);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#8F5129").s().p("AiJCSQg6g8AAhWQAAhVA6g9QA5g8BQAAQBRAAA6A8QA5A9AABVQAABWg5A8Qg6A9hRAAQhQAAg5g9g");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.5,-20.7,39.2,41.5);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Bitmap8();
        this.instance.parent = this;
        this.instance.setTransform(-257.9,-292.9,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-257.9,-292.9,516,586);
    
    
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap9();
        this.instance.parent = this;
        this.instance.setTransform(-8.7,-20.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.7,-21.8,16.7,35.5);
    
    
    (lib.Symbol1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap3();
        this.instance.parent = this;
        this.instance.setTransform(0,-0.1,2.899,2.899);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,-0.1,116,150.8), null);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhuEuQgegJgJgaQgIgaAMgsIBFjvQANgtAVgRQAVgRAdAJQAeAJAJAZQAIAagNAsIhEDvQgMAsgVASQgOAMgSAAQgJAAgKgDgAgDiTQgTgFgHgPQgJgOAGgTQADgKAFgFQAGgIAJgHIBMg8QANgKAMgCQANgDAMADQAVAGAJARQAKASgFATQgDALgIAIQgHAIgOAKIhMAvQgPAJgLACIgLACQgGAAgEgCg");
        this.shape.setTransform(45.8,1.8,0.296,0.296,-1,0,0,-0.5,-0.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("ABXFFQgggIgJgYQgLgZAKgtIAfiJQALg0gLgZQgKgXgjgIQghgHgUASQgVATgKAvIgfCLQgKAtgUASQgUASgfgGQgegHgLgZQgKgZAKgtIBcmfQAKguAUgSQATgTAfAHQAfAGAJAbQALAYgKAuIgaB3QAXgPAagEQAagEAlAIQBIAQAdAyQAdAxgRBOIgnCtQgJAtgVATQgOAOgVAAQgHAAgIgCg");
        this.shape_1.setTransform(33.3,0.3,0.296,0.296,-1,0,0,-3.3,1.5);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("ABnDnQgggEgMgYQgMgZAGgtIAUiLQAHg0gNgXQgMgZgkgEQghgFgSAUQgTAVgHAxIgUCLQgGAvgTATQgSAUgfgEQgggFgMgYQgMgZAHgtIAij3QAGgsATgVQASgUAfAFQASACAOAMQANAMAJAVQAWgTAbgGQAcgGAkAFQBKAKAgAvQAhAvgLBPIgZCwQgGAtgTAVQgPAQgXAAIgLgBg");
        this.shape_2.setTransform(20.3,0.2,0.296,0.296,-1,0,0,-1,0.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgYEgQgggCgOgXQgOgXACguIANj5QADgvAQgUQAQgWAgACQAeACAOAXQAOAXgCAtIgND5QgDAvgQAVQgPAUgbAAIgEAAgAAoixQgNgBgagMQgbgMgLgBQgMAAgLALQgMALgJAAQgMgBgKgNQgKgNACgRQABgcAWgRQAWgSAbACQALAAAcAMQAZAMANABQALABAMgMQALgLALAAQALABAKANQAKANgBASQgBAbgXASQgVAQgYAAIgEAAg");
        this.shape_3.setTransform(4.9,-3.8,0.296,0.296,-1,0,0,1,-2.1);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgIDeQhCAAgsgcQgrgbAAgoQAAgWAPgRQAOgQATAAQAUAAAmATQAnATARAAQAQAAAJgHQAKgHAAgLQAAgSg6gZIgIgDQhDgdgZgcQgZgdABgqQABg6AsgmQAtglBDABQA8ABArAaQApAaAAAkQAAAWgPAPQgPAOgWAAQgOAAgigQQghgPgTAAQgLgBgIAGQgIAGAAAKQgBARAwAUIAlAPQA4AbAXAbQAXAcgBAoQAAA8gxApQgvAmhEAAIgFAAg");
        this.shape_4.setTransform(-4.5,-1.3,0.296,0.296,-1,0,0,-0.8,-0.2);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AiRCpQg7g7gGhdQgGhcAzhEQA0hDBRgGQAggBAYAIQAYAJAVAWQAKgUAOgMQAOgKATgCQAfgCARAVQAQAVADAuIASD5QADAugOAXQgOAXgeACQgWACgOgKQgOgIgNgXQgRAZgaAOQgZANgfADIgOAAQhHAAg2g2gAgIhiQgjADgVAdQgVAdAEArQADAuAYAaQAZAbAigDQAjgCAUgeQAVgegDgsQgDgsgZgaQgWgYgfAAIgFAAg");
        this.shape_5.setTransform(-23.8,-0.1,0.296,0.296,-1,0,0,0.9,0.8);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AAGEYQgPgNgDgVQgCgVANgQQAMgRAVgCQAWgDAPANQARANADAVQACAVgNAQQgNAQgVADIgHABQgRAAgOgLgAiBBuQhDg3gMhgQgMhfAzhHQA0hFBbgLQBagMBDA3QBCA2AMBiQAMBfgzBGQgzBGhbALQgQACgOAAQhIAAg3gugAgMirQgkAEgTAgQgTAfAGAuQAFAvAbAaQAaAaAjgFQAlgEASggQAUgfgGgvQgGgugbgaQgWgWgcAAIgLABg");
        this.shape_6.setTransform(-36.3,2.7,0.296,0.296,-1,0,0,1.7,-1.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AiwEvQgUgTgIgtIhJmCQgJgtAMgZQAMgaAfgGQAhgFATATQAUAUAIAsIAYCDIDngsIgZiCQgIgtALgZQALgZAggGQAggGAUATQATASAJAuIBJGDQAIAtgLAZQgMAZggAGQgfAGgUgTQgUgUgIgtIgbiMIjmArIAaCNQAJAtgMAZQgLAZggAGIgOABQgWAAgPgPg");
        this.shape_7.setTransform(-52.9,1.6,0.296,0.296,-1,0,0,-0.7,-0.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 4
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#71BA24").s().p("AFCGiQg/gRgWg6QghAagqAAQgRAAgOgDQhDgPgYg7QgMgdACgnQgOAjgXAWQgjAhgwAAQgNAAgRgEQg7gNgbgxQghAegwAAIgVgBQgggFgZgRQgZgRgOgcQgOgcgCgnQgLAkgWAYQgkAng2AAIgVgBQhEgJgcg6QgWgsAKhCIAij3QAJhDAhgkQAkgnA3AAIAUABQAlAGAbAVIAOgDQAZgGAYAAQAUAAAVADQBnAPAzBIQAIAMAJASIAXhpQAOhCAkghQAjghAvAAQAMAAATADQBDAQAYA7QASAtgOBCIgEAQQARABAUAFQBlAVAtBNQALASAHAZQAKgPALgMQgMgkALgkQAGgVAOgSQALgOAPgMIBNg8QAYgTAcgHQAQgDAMAAQASAAAPAFQAwAOAYApQAZAsgOAuQgHAagSAUQgOARgWAOIgBABIgyAfQADAGADAJQAPAtgTBBIhFDwQgSBCgmAeQghAcgrAAQgTAAgTgGg");
        this.shape_8.setTransform(33,1,0.296,0.296,-1,0,0,1.6,1.3);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#71BA24").s().p("ACSFmQhEgEgig2IgEgJIgKAIQhCA3hfAAIgFAAQhWgBg8gmQgsgcgTgoQgNgcAAgfQABgxAfgkQAIgJANgJQgngvABhCQABhZBGg7QA/g1BaAAIAFAAQA8ABAxAVIgBgWQADg8AugkQAoggAxAAIAHABQAbABAmASIABAAQAYgQAcAAIAFAAQArACAeAoQAaAhgDAsQgDA8gwAkIgRAMQAMAigDAvIgND5QgEBEgdAmQgkAwg/AAg");
        this.shape_9.setTransform(-0.1,-2,0.296,0.296,-1,0,0,1.6,4.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#71BA24").s().p("AAzF6QgogfgGgyQgCgVAEgTQgzgPgqgkIgMgKQgDASgIATQgbA6hDANQgOADgNAAQgyAAgkgjQgkgigMhDIgOhIIhdARIANBIQANBDgVAtQgNAcgYATQgZASggAGQgLACgQAAQgzAAgjgiQgkgigMhDIhJmDQgMhDAUgtQANgcAYgSQAZgTAggGQAMgCAPAAQAzAAAkAiQAjAkANBCIALA9IBegRIgMg+QgMhDAUgtQANgcAYgSQAZgTAggGQAQgCAMAAQAyAAAkAiQAjAjANBDIAQBYQAIgOALgPQBGheB4gPQAQgCAXAAQBiAABKA9QAKAIAMAMIANgSQBHhdBwgHIARgBQAmAAAeAMIALAEQAdgTAigDIALAAQAdAAAZAMQAZALARAWQAeAlAFBFIARD5QAFBDgZAqQgQAbgZAPQgaAQghACIgKABQgfAAgcgOIgIAEQgoAWguADIgSAAQhkAAhKhKIgDgDIgHAJQghAugvAbQAJATACATQAGAygfAnQgeAngyAHIgQAAQgpAAgggYg");
        this.shape_10.setTransform(-39.3,-0.1,0.296,0.296,-1,0,0,0.3,-6.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));
    
        // Layer 2
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#477F08").s().p("AFCGjQg/gTgWg5QggAagrAAQgNAAgSgDQgggHgYgUQgXgTgMgcQgMgeACgnQgOAkgXAXQgiAfgwAAQgRABgOgEQg7gNgbgxQghAegwAAIgVgCQgggEgZgRQgZgSgOgbQgOgdgBgmQgMAlgWAYQgkAmg2AAIgVgBQgggEgZgSQgZgRgOgcQgWgsAKhDIAij2QAKhDAgglQAkgmA3gBIAUACQAlAGAbAVIAPgDQAXgGAZAAQAUAAAVADQBnAPAzBHQAJAOAIASIAXhqQAPhCAjghQAighAwAAQARAAAOAEQAgAHAYATQAYAUALAcQASAtgOBCIgEAQIAlAGQBlAWAtBMQALAUAHAXQALgRALgLQgNggALgnQAGgWAOgRQAMgPAPgMIBMg7QAZgTAbgHQAOgDAOAAQASAAAPAFQAwANAYAqQAYArgNAvQgHAagSAUQgOAQgWAPIgBABIAAAAIgyAeIAGAQQAPAvgTA+IhFDyQgSBAgmAfQghAcgrAAQgSAAgUgFg");
        this.shape_11.setTransform(33.5,3.7,0.296,0.296,-1,0,0,1.3,1.4);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#477F08").s().p("ACSFlQghgBgagPQgagQgQgZIgFgJIgKAJQhBA2hgAAIgFAAQhVgBg9gmQgsgcgTgoQgNgcABgfQABgyAfgjQAJgLALgHQgngxABhBQAChZBFg6QA+g1BbAAIAFAAQA8ABAxAVIgBgWQADg7AvgmQAngfAxAAIAHAAQAZACAoARIABABQAagQAaAAIAFAAQArADAeAmQAaAigDAsQgDA8gwAkQgGAFgLAHQAMAigDAvIgND5QgDBDgeAnQgjAvhAAAg");
        this.shape_12.setTransform(0.6,0.6,0.296,0.296,-1,0,0,1.8,3.8);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#477F08").s().p("AAzF5QgngdgHg0QgDgUAFgTQgzgQgrgjIgLgKQgDAVgIAQQgNAdgYARQgZATggAGQgQADgMgBQgyABgjgjQgkgjgNhDIgNhHIheARIAOBIQAMBDgUAuQgbA5hDANQgQADgMAAQgyAAgkgjQgjghgNhEIhImDQgNhDAVgtQAag6BEgNQAQgDALABQAyAAAkAiQAjAjANBCIAMA/IBdgSIgLg+QgNhCAVguQAag5BEgOQAQgDALAAQAzABAjAiQAjAiANBEIARBYQAJgRAKgNQBGhdB3gPQAWgDASABQBhAABKA9QAMAKAKALIANgTQAjguAvgZQAvgZA3gEIARgBQAjAAAhAMIAKADQAdgSAjgDIAKAAQA9AAAkAtQAeAnAFBDIARD5QAFBDgZAqQggA3hEAFIgKAAQghAAgagNIgIAEQgnAWgvACIgSABQhjABhMhLIgDgEIgGAKQgiAuguAbQAIARADAVQAHAxggApQgfAmgxAHIgQABQgpAAgggag");
        this.shape_13.setTransform(-38.8,2.5,0.296,0.296,-1,0,0,0,-6.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-104.6,-73.3,269.4,116);
    
    
    (lib.shadow = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AkYA/QhfgVgSgdQgEgGAAgHQABgkB0gbQB0gaCkAAQCkAAB1AaQB1AbgBAkQABAHgEAGQgSAdhfAVQh1AbikABQikgBh0gbg");
        this.shape.setTransform(39.8,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-9.1,79.5,18.1);
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween20("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(19.6,20.7);
        this.instance.alpha = 0.98;
        this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 246, 111, -22, 0)];
        this.instance.cache(-21,-23,43,46);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,39.2,41.5), null);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween14("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(258,292.9);
        this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -43, -20, 7, 0)];
        this.instance.cache(-260,-295,520,590);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,516,586), null);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFAEB","#FFDCC8"],[0,1],-6.3,0.1,6.8,0.1).s().p("Ag3AAQgBgMgDgJQAJgEALAAQAPABARAFQAyAQARADQgRAMgVAGQgWAIgSgBQgjAAgCgZg");
        this.shape.setTransform(-6.1,27.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF1F7A").s().p("AgjAnQgGgTABgWQABgPADgOQADAEAEAAIAEgBIAGgBIgBACQgDAFABACQABADADAAQAFAAAQgNQAJgIALAAQAJAAAIAFIABAAQAAACgHADIgYAGQgRACgMANQgHAHgDAHQgDADABAFQABAJAJAKQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBACgKAAgAAAAeIgHgEIgDgCIAAgBQAAgBAFgBIADgBIAGAAQAKAAABAHQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAIgEABQgEAAgGgCgAALACQgBgCgDAAQgCAAgDABQgEADgEgCIgBgBIAHgCQAJgDACgDQAGgFAFAAQAEAAACAEQgDAIgEAFQgDAEgCAAQgCAAgDgHg");
        this.shape_1.setTransform(-19.6,4.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#005BB5").s().p("AgRAQIgDgHQgCgDABgGQABgHAHgIQAGgEAHgBIACAAQAKAAAFAFQAGAGgBAJQgBAIgIAIQgHAFgIABQgJgBgGgFg");
        this.shape_2.setTransform(-13.3,-14.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFAEB","#FFDCC8"],[0,1],-6.8,-0.3,6,-0.3).s().p("Ag4AfQAagHAfgTQAhgUAVgcQAHArgRAVQgSAXggAAQgYAAgbgNg");
        this.shape_3.setTransform(18.4,25.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#FFA000","#FF6400"],[0,1],-25.3,1.7,20.3,1.7).s().p("AjFBSIAAABIgBgBIAHgDIAEAEIgIABIgCgCgACMhCIgGgRQAbAEAcAJIACAAIAFAGIABAHIABAUIAAACIgwANQgFgYgFgUg");
        this.shape_4.setTransform(2.3,7.8);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#00AD25").s().p("AARA2IgFgNIgCgGQgCgDgGAAQgEAAgFADQgHADgGAHQgLAOgNgPIgDgFQAAgEACgDQACgFAEgCQADgBAFABQAMAFAGgHQAEgFgBgIQgBgEgFgFIgNgHIgMgJQgDgCACgEIADgEQADgDADAAQAFAAADAIQAGAOAJAFQAEACAEAAIACAAIAAgBQgBgKACgDIACgBQAEAAAGAEIADACIABAAIABgBIAAgBIABgHQACgCAEAAIABAAQAGAAAIAFIAHAFIADAGIAAABIgCACQgEACAAADIABAEIAFAEIAHAFQAEADABAEQACAEgBADQgCAGgKABQgIABgCADQgCADAAAEIgBAGQgCACgFABIgCAAQgIAAgEgFgAg5AUIgCgCIACgBQACgCADAAQADAAACACIACABIgCACIgFABIgFgBgAg1gpQgFgBgBgCQgCgDgBgFQgBgEABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAIAAABADIAEAIQABAGgBACQgDAAgEgCg");
        this.shape_5.setTransform(7.7,-3.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#00AAFF").s().p("AjGB4IgDgLQABABAFAAQANAAACgEQABgEgDgDQgJgJAAgIIABgGQADgFAGgHQAMgOAQgDQAQgCAJgCQAJgFABgDQABgDgEgDQgJgEgKAAQgMAAgKAIQgPANgFAAIAAgBQAAAAAAgBQAAAAAAAAQAAgBABgBQAAgBAAgBQACgDgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHABIgBABIgCAAQgDAAgDgIQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIAGgQQAYg4Aog6IgBAFQAAAKAEAIQAMASAUAAQAQABAOgMQAngtA5giIADADIAeAjQAbAjAOAOQAOAPANAJQgEACgCACIgCAEQgHgDgEAAQgDAAgCABQgEAEABALQgLgDgGgRQgEgJgIgBQgEAAgEADIgFAGQgCAHAEADIANAJQAQALABAEQABAHgDABQgEAGgKgEQgGgDgFADQgFACgDAGQgCAGABADQAAAGADACQAIAKAIgBQAIABAHgJQAGgIAIgDQAHgCACACIACAHQADAHADAEQAFAJAJAAIADAAQAIgCADgFIABgHQAAgEABAAQACgCAFAAQANgCADgHQABgGgCgEQgCgGgFgCIgHgGIgFgFIADgCIADgCQAIAHAGANIAEAHQAJAYAGAjIABAGQAEAZABAbQABAZgCAJIgUgEQhWgNhDAAQheAAhIAZIgEABIgGACQgFABgDACIgLAFQgTgagLgigAiyBaQgBACAGAFIAJAEQAGACAFAAQAFAAACgCQADgCgBgGQgBgJgOgBIgHABIgDAAQgIACgBAEgAibBIQAEAHAEABQAEAAAEgGQAEgFACgFIACgEIAAgDIgDgDQgDgDgEAAQgGAAgHAFQgCADgIADIgHACQgDABgBAEQAAACADACIAFAAQAEAAAEgBIADgCgAAwgEQgDADAAABQAAACADACQADADAFAAQAFAAADgDQADgCAAgCQAAgBgDgDQgDgCgFAAQgFAAgDACgAArhPIgBADQgBAEABADQABAGACACQACAEAGACQAFACAEAAIADgBIABgCQABgFgCgGQgBgFgCgEQgDgEgKAAIgGABgAhEizIABAAIgEACIADgCg");
        this.shape_6.setTransform(-3.2,-1.8);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#0097D3").s().p("AiIA9QgEgGABgIIAAgFIABABQAHAJANAAQAMAAAJgHQAKgKABgMQACgLgIgJQgGgHgJgBQAOgNAUgKIADgCIAGgCQBHgjB+gJIABAAQAFAAABAIQgrAMgwAYQgRAJgQAJIgHAEQg5AhgnArQgLALgNgBQgQABgJgQg");
        this.shape_7.setTransform(-1.7,-16.5);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FF862C").s().p("ABQEfQgXgMgXgVIgQgNIgCgDQghgbgdgLQgTgIgXAAQgZgBgagFQgigGgRgKIgIgFQBGgWBbAAQBCAABWANIAVACIAFgBQADgDAAgcQgBgcgBgBIgCghIAwgNIACAAIgDAjIgBAdQAAAPABAJQABAHAHATIALAoIgBABIgOASQgTAUgYAQQgZAPgXAIIgSAEgAgaEVIhKgXQgSgFgQAAQgKAAgJACIgDACQgHgXgMgUIgMgSQgHgLgKgJIgBgBIAIgBQAUANAjAHQAcAFAaABQAWAAAUAHQAbALAhAbQgRASgWASgAB5gEQgOgfgUgLQgTgJgYgZIgngvIgggmQAVgMAVgKQArgUAlgJQABAYAIAXQAJAdAYAwIALATQAUAoAHAXIADASQgdgIgcgEgAhGjoQAZgWARgNQAMgFAQgFQAggJAVAAQAXAAAJAKQAHAHgBANIABATQgDgCgEAAIgCAAQhwAIhHAcQAOgPAQgOg");
        this.shape_8.setTransform(3.3,-0.9);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AhvEoQgLgJgCgQQgBgMgDgLIgBgCIABgBQgGgVgMgVQgIgOgKgLIgTgPIgQAGIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQgSgVgMghQgZhCAZg5QAbhBAtg+IAAgGQABgMAKgJQAHgGAIgBQAcgjAIAAIACAAIAIADIADgBQAVgXAYgWQAZgWARgNIAAAAIAdgKQAhgKAXAAQAaAAAMANQAJAJAAARQgBAsANAoQAJAcAYAwIAKASQAWAqAGAXIAFAXQADADACAFIADAJIAAAVQAAAZgFAXIAAADQgCAaACANIAHAZQAHAVADAPIABgCIACAJQALA1gVAaQgUAZgkAAQgeAAghgRIgLgGIADAAQgVgMgUgTIgQgOQgQASgWASIACAAIgGAEQgPAMgYAJQgbAJgVAAQgUAAgLgIgAh5D5QADAKABALQACAbAjAAQASAAAXgHQAVgHARgLQgRgEgzgQQgRgGgPAAQgLAAgJADgAC4EBQggATgaAHQAbANAYAAQAhAAASgXQARgWgHgrQgVAcghAVgAilCcIAHAFQASAKAhAGQAbAFAZABQAWAAAUAIQAcALAhAbIADADIAQANQAWAVAYAMIACAAIASgEQAWgIAZgPQAZgQATgUIANgSIABgBIgLgoQgGgTgBgHQgCgJAAgPIABgdIAEgjIgCAAIAAgCIgBgUIgCgHIgEgGIgCAAQgdgIgbgEIAGAQQAGAUAEAYIADAhQABABABAcQAAAcgEADIgEABIgWgCQhWgNhBAAQhbAAhGAWgAhDD1IBJAXIABAAQAWgSARgSQghgbgbgLQgTgHgWAAQgagBgcgFQgkgHgTgNIgFgEIgGADIABABIAAgBIACACIABABQAJAJAIALIALASQANAUAGAXIAEgCQAJgCAKAAQAQAAASAFgAjmBmQALAhATAaIALgEQADgCAFgBIAGgDIAEgBQBIgYBfAAQBCAABWANIAUADQACgIgBgaQgBgbgEgYIgBgHQgGgjgJgWIgEgHQgGgOgIgIIgDADIgDACIAFAFIAHAFQAFAEACAFQACAFgBAFQgDAHgNABQgFAAgCACQgBABAAAEIgBAHQgDAEgIACIgDAAQgJAAgFgIQgDgEgDgIIgCgGQgCgCgHACQgIACgGAJQgHAIgIAAQgIAAgIgJQgDgDAAgFQgBgDACgFQADgGAFgCQAFgDAGADQAKADAEgFQADgDgBgGQgBgFgQgKIgNgJQgEgEACgGIAFgHQAEgCAEAAQAIAAAEAKQAGAQALADQgBgKAEgEQACgCADAAQAEAAAHAEIACgFQACgCAEgBQgNgKgOgPQgOgOgbgiIgegjIgCgDQg6AignAsQgOAMgQAAQgUAAgMgTQgEgHAAgKIABgFQgoA5gYA6IgGAPQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQADAHADAAIACAAIABgBIAHgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABgCAEQAAABAAABQgBABAAAAQAAABAAAAQAAAAAAAAIAAABQAFAAAPgNQAKgIAMAAQAKAAAJAFQAEACgBADQgBAEgJAEQgJADgQACQgQADgMANQgGAHgDAGIgBAGQAAAHAJAJQADAEgBADQgCAFgNAAQgFAAgBgBIADALgAjsAuQgBAXAGATIAEAAQAKAAABgCQABAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQgJgKgBgJQgBgFADgDQADgIAHgHQAMgNASgCIAYgGQAHgDAAgCIgBAAQgIgFgJAAQgLAAgJAIQgRANgFAAQgDAAgBgDQgBgCADgFIABgCIgGABIgEABQgEAAgDgEQgDAOgBAPgABXgBIACAFIAFANQAFAGAJgBQAFgBACgCIABgGQAAgEACgDQACgDAIgBQAKgBACgFQABgDgCgEQgBgEgEgDIgHgFIgFgEIgBgEQAAgDAEgDIACgCIAAgBIgDgGIgHgFQgIgFgGAAIgBAAQgEAAgCACIgBAHIAAABIgBABIgBAAIgDgCQgGgEgEAAIgCABQgDADABAKIAAACIgCAAQgEAAgEgDQgJgFgGgOQgDgIgFAAQgDAAgDADIgDAEQgCAEADACIAMAJIANAIQAFAFABAEQABAIgEAFQgGAHgMgFQgFgBgDABQgEACgCAFQgCADAAADIADAFQANAPALgOQAGgHAHgCQAFgDAFAAQAGAAACADgAAvjEQgWAKgUAMIAgAmIAoAvQAYAZASAJQAVALANAfQAcAEAeAJIgEgTQgGgXgVgoIgKgTQgZgwgJgdQgHgXgCgYQgkAJgsAUgAich2QgBAJAEAGQAJAPAQAAQANAAALgKQAngsA6ghIAHgEQAPgKARgIQAwgYArgMQgBgIgFAAIgBAAQh9AJhIAiIgGADIgDACQgUAKgOANQAJABAGAHQAIAJgCAMQgBAMgKAJQgJAIgMAAQgNAAgHgJIgBgBIAAAEgAiSidQgHAHgBAJQgBAFACAEIADAGQAGAGAJAAQAJAAAHgGQAIgHABgJQABgJgGgGQgFgGgKAAIgDAAQgHABgGAFgAhnjDIAEgCIgBAAIgDACgAAhkeQgSAFgMAFQgQANgYAWQgQAOgOAPQBGgcBxgIIABAAQAEAAAEACIgBgTQABgNgIgHQgJgKgXAAQgVAAgfAJgAjEBTIgJgFQgGgEABgDQABgEAIgBIADAAIAHgBQAOAAABAKQABAFgDADQgCACgFAAQgFAAgGgCgAjJBGQgFABAAABIAAABIADACIAIAEQAGACAEAAIAEgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAgBgBQgBgHgKAAIgHAAgAi7A1IgBgCIgDACQgEACgEAAIgFgBQgDgCAAgCQABgDADgBIAHgDQAIgDACgCQAHgGAGAAQAEAAADAEIADADIAAACIgCAEQgCAGgEAFQgEAFgEAAQgEAAgEgIgAi4AzQADAHACAAQACAAADgEQAEgGADgIQgCgEgEAAQgFAAgGAFQgCADgJADIgIADIABABQAEACAFgDQADgCACAAQADAAABADgAAQgNQgDgCAAgDQAAgCADgCQADgCAFAAQAFAAADACQADACAAACQAAADgDACQgDACgFAAQgFAAgDgCgAATgTIgCABIACACIAFABIAFgBIACgCIgCgBQgCgCgDAAQgDAAgCACgAAVhKQgGgCgCgDQgCgDgBgFQgBgEABgDIABgDIAGgBQAKAAADAEQACADABAGQACAGgBAEIgBACIgDABQgEAAgFgCgAAOheQgBABABAEQABAFACADQABACAFABQAEACADAAQABgCgBgGIgEgIQgBgDgIAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 2
        this.instance = new lib.shadow("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(6.1,31.8,0.748,1.146,0,0,0,39.8,4.5);
        this.instance.alpha = 0.398;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.7,-30.4,60.5,67.3);
    
    
    (lib.la2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 6
        this.instance = new lib.Tween4("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-1.1,3.4,0.191,0.191,0,0,0,0,10.5);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:10.6,scaleX:1.07,scaleY:1.07},7).to({scaleX:1,scaleY:1},3).to({startPosition:0},55).to({x:-58.5,y:-152.4,alpha:0},22).to({_off:true},1).wait(9));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2,1.3,0.9,4.8);
    
    
    (lib.la = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 6
        this.instance = new lib.Tween4("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-1.1,3.4,0.191,0.191,0,0,0,0,10.5);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regY:10.6,scaleX:1.07,scaleY:1.07},7).to({scaleX:1,scaleY:1},3).to({startPosition:0},55).to({x:-58.5,y:-152.4,alpha:0},22).to({_off:true},1).wait(15));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2,1.3,0.9,4.8);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-21.1,98.7,1,1,5,0,0,0.8,99.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-5,regY:1.4,rotation:5.3,x:-17.8,y:0.1},0).wait(1).to({rotation:6,x:-16.6,y:0.2},0).wait(1).to({rotation:7,x:-14.7,y:0.3},0).wait(1).to({rotation:8.4,x:-12.4,y:0.4},0).wait(1).to({rotation:9.9,x:-9.8,y:0.7},0).wait(1).to({rotation:11.6,x:-6.9,y:1},0).wait(1).to({rotation:13.4,x:-3.9,y:1.5},0).wait(1).to({rotation:15.1,x:-1,y:2.1},0).wait(1).to({rotation:16.9,x:1.9,y:2.7},0).wait(1).to({rotation:18.4,x:4.5,y:3.4},0).wait(1).to({rotation:19.8,x:6.8,y:4},0).wait(1).to({rotation:21,x:8.7,y:4.6},0).wait(1).to({rotation:21.7,x:9.9,y:5},0).wait(1).to({regX:0.8,regY:99.9,rotation:22,x:-21.1,y:98.7},0).wait(1).to({regX:-5,regY:1.4,rotation:21.7,x:10,y:5},0).wait(1).to({rotation:21,x:8.8,y:4.6},0).wait(1).to({rotation:20,x:7,y:4.1},0).wait(1).to({rotation:18.6,x:4.8,y:3.5},0).wait(1).to({rotation:17.1,x:2.2,y:2.8},0).wait(1).to({rotation:15.4,x:-0.6,y:2.1},0).wait(1).to({rotation:13.6,x:-3.6,y:1.6},0).wait(1).to({rotation:11.9,x:-6.5,y:1.1},0).wait(1).to({rotation:10.1,x:-9.4,y:0.7},0).wait(1).to({rotation:8.6,x:-12.1,y:0.5},0).wait(1).to({rotation:7.2,x:-14.5,y:0.3},0).wait(1).to({rotation:6,x:-16.4,y:0.2},0).wait(1).to({rotation:5.3,x:-17.8,y:0.1},0).wait(1).to({regX:0.8,regY:99.9,rotation:5,x:-21.1,y:98.7},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.8,-15.1,115.8,33.7);
    
    
    (lib.hoasinhi_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // flash0.ai
        this.instance = new lib.la2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(275.6,-103.2,1,1,0,0,0,-0.8,3.6);
    
        this.instance_1 = new lib.la2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(243.4,-74.2,1,1,0,0,0,-0.8,3.6);
    
        this.instance_2 = new lib.la2("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(136.1,-138.1,1,1,0,0,0,-0.8,3.6);
    
        this.instance_3 = new lib.la2("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(116.7,-176.7,1,1,0,0,0,-0.8,3.6);
    
        this.instance_4 = new lib.la2("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-14.8,-246.2,1,1,0,0,0,-0.8,3.6);
    
        this.instance_5 = new lib.la2("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-21.6,-269.6,1,1,0,0,0,-0.8,3.6);
    
        this.instance_6 = new lib.la2("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-100.4,-276.2,1,1,0,0,0,-0.8,3.6);
    
        this.instance_7 = new lib.la2("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-187,-270.6,1,1,0,0,0,-0.8,3.6);
    
        this.instance_8 = new lib.la2("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-143.2,-308.1,1.19,1.19,0,0,0,-0.8,3.6);
    
        this.instance_9 = new lib.la("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-199.4,-244.2,0.917,1,0,-15,165,-0.8,3.6);
    
        this.instance_10 = new lib.la("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-139.5,-269.9,1.222,1,30,0,0,-1,3.6);
    
        this.instance_11 = new lib.la("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(-89.5,-321.3,1.222,1.344,0,-15,165,-0.9,3.6);
    
        this.instance_12 = new lib.la("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(-99.8,-312.3,1,1.242,15,0,0,-0.9,3.6);
    
        this.instance_13 = new lib.la("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-88.5,-290.5,1,1,0,-7.2,172.8,-0.9,3.7);
    
        this.instance_14 = new lib.la("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(-4.3,-260.2,0.988,1,0,0,180,-0.8,3.6);
    
        this.instance_15 = new lib.la("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(-7.5,-275.4,0.889,1,-8,0,0,-0.8,3.6);
    
        this.instance_16 = new lib.la("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-48.2,-277.4,1,1,0,-8.5,171.5,-0.9,3.8);
    
        this.instance_17 = new lib.la("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(218.2,-61.8,1.185,1,0,0,180,-0.8,3.6);
    
        this.instance_18 = new lib.la("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(269.1,-88.8,0.889,1.004,0,4.8,180,-0.9,3.6);
    
        this.instance_19 = new lib.la("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(236.9,-108,0.889,0.821,0,0,180,-0.8,3.6);
    
        this.instance_20 = new lib.la("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(145.4,-154,1,0.8,0,0,0,-0.8,3.6);
    
        this.instance_21 = new lib.la("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(103,-161.5,1,1.126,0,0,0,-0.8,3.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(115));
    
        // Layer 9
        this.instance_22 = new lib.Bitmap5();
        this.instance_22.parent = this;
        this.instance_22.setTransform(31.3,71.2,2.81,2.81);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115));
    
        // Layer 4
        this.instance_23 = new lib.Symbol4();
        this.instance_23.parent = this;
        this.instance_23.setTransform(97.4,155.1,1,1,0,0,0,19.6,20.7);
        this.instance_23.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).to({alpha:1},42).to({alpha:0},21).to({alpha:1},36).to({alpha:0},15).wait(1));
    
        // Layer 3
        this.instance_24 = new lib.Tween20("synched",0);
        this.instance_24.parent = this;
        this.instance_24.setTransform(97.4,155.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(115));
    
        // Layer 5
        this.instance_25 = new lib.Tween20("synched",0);
        this.instance_25.parent = this;
        this.instance_25.setTransform(97.4,155.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_25).to({alpha:0.98},42).to({startPosition:0},21).to({startPosition:0},36).to({alpha:1},15).wait(1));
    
        // Layer 6
        this.instance_26 = new lib.Bitmap1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(35.8,90.6,2.82,2.82);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(115));
    
        // Layer 2
        this.instance_27 = new lib.Symbol3();
        this.instance_27.parent = this;
        this.instance_27.setTransform(20.5,-28.4,1,1,0,0,0,258,293);
        this.instance_27.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_27).to({alpha:1},42).wait(21).to({alpha:0},36).to({_off:true},1).wait(15));
    
        // Layer 7 copy
        this.instance_28 = new lib.Tween14("synched",0);
        this.instance_28.parent = this;
        this.instance_28.setTransform(20.5,-28.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(115));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-237.5,-321.4,516,586);
    
    
    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween27();
        this.instance.parent = this;
        this.instance.setTransform(114.5,96.7,0.5,0.5,0,0,0,-11.8,46.1);
    
        this.instance_1 = new lib.Tween28();
        this.instance_1.parent = this;
        this.instance_1.setTransform(124.5,105.3,0.5,0.5);
    
        this.instance_2 = new lib.Tween29();
        this.instance_2.parent = this;
        this.instance_2.setTransform(109.2,123.7,0.5,0.5,0,0,0,0,29.4);
    
        this.instance_3 = new lib.Tween30();
        this.instance_3.parent = this;
        this.instance_3.setTransform(109.9,95.4,0.5,0.5,0,0,0,35.4,-14.3);
    
        this.instance_4 = new lib.Tween31();
        this.instance_4.parent = this;
        this.instance_4.setTransform(118.7,107.5,0.5,0.5,0,0,0,-14.6,24.4);
    
        this.instance_5 = new lib.Tween33();
        this.instance_5.parent = this;
        this.instance_5.setTransform(71.1,95.3,0.5,0.5);
        this.instance_5.alpha = 0;
    
        this.instance_6 = new lib.Symbol1_1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(71,98.9,0.345,0.345,0,0,0,58,75.2);
    
        this.instance_7 = new lib.Tween21();
        this.instance_7.parent = this;
        this.instance_7.setTransform(74.7,120.5,0.5,0.5);
    
        this.instance_8 = new lib.hoasinhi_1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(84.4,115.7,0.355,0.355,0,0,0,0.4,0.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,183.1,209.4), null);
    
    
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
                this.parent.parent.icon_hsn_check_pausable();
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-3.7,regY:5.2,x:11.1,y:31.4,alpha:0.306},0).wait(1).to({y:21.4,alpha:0.556},0).wait(1).to({y:13.7,alpha:0.75},0).wait(1).to({y:8.1,alpha:0.889},0).wait(1).to({y:4.8,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:-3.7,regY:5.2,x:11.1,y:4,alpha:0.972},0).wait(1).to({y:4.8,alpha:0.889},0).wait(1).to({y:6.2,alpha:0.75},0).wait(1).to({y:8.1,alpha:0.556},0).wait(1).to({y:10.6,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
    (lib.hoasinhi_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_hsn_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(115));
    
        // Layer 2
        this.instance = new lib.Symbol6();
        this.instance.parent = this;
        this.instance.setTransform(6.5,93.7,1,1,0,0,0,91.5,104.7);
        this.instance.cache(-2,-2,187,213);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(114));
    
        // Layer 6
        this.instance_1 = new lib.Tween27();
        this.instance_1.parent = this;
        this.instance_1.setTransform(29.5,85.7,0.5,0.5,0,0,0,-11.8,46.1);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:46.2,rotation:-9.3,x:29.6,y:83.6},8,cjs.Ease.get(1)).to({regX:-11.9,regY:46.1,rotation:8.6,x:29.4,y:82.1},15).to({regX:-11.8,rotation:0,x:29.5,y:81.5},7).to({regX:-11.9,regY:46,rotation:-6.5,y:82.8},16).to({regY:46.1,rotation:4.1,x:29.4,y:84.4},17).to({regX:-11.8,rotation:0,x:29.5,y:85.6},15).to({y:80.1},3).to({y:83.6},4).to({regX:-11.7,regY:46.2,rotation:-7.7,y:84.5},11).to({regX:-11.8,regY:46.1,rotation:0,y:85.7},17).wait(1));
    
        // flash0.ai
        this.instance_2 = new lib.Tween28();
        this.instance_2.parent = this;
        this.instance_2.setTransform(39.5,94.3,0.5,0.5);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:90},30,cjs.Ease.get(1)).to({y:94.1},48).to({y:88.7},3).to({y:92.2},4).to({y:94.3},28).wait(1));
    
        // Layer 8
        this.instance_3 = new lib.Tween29();
        this.instance_3.parent = this;
        this.instance_3.setTransform(24.2,112.7,0.5,0.5,0,0,0,0,29.4);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regY:29.5,y:108.5},30,cjs.Ease.get(1)).to({y:112.6},48).to({regY:29.4,y:107.1},3).to({y:110.6},4).to({y:112.7},28).wait(1));
    
        // Layer 3
        this.instance_4 = new lib.Tween30();
        this.instance_4.parent = this;
        this.instance_4.setTransform(24.9,84.4,0.5,0.5,0,0,0,35.4,-14.3);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:35.3,regY:-14.2,rotation:15,y:82.3},8,cjs.Ease.get(1)).to({regX:35.4,regY:-14.3,rotation:4.6,y:81.3},11).to({regX:35.2,regY:-14.2,rotation:31.5,x:24.8,y:80.2},11).to({regX:35.5,scaleX:0.5,scaleY:0.5,rotation:15.9,x:25,y:81.4},13).to({regX:35.4,regY:-14.1,rotation:20.5,x:24.9,y:82.9},17).to({regY:-14.2,scaleX:0.5,scaleY:0.5,rotation:0,y:84.3},18).to({regY:-14.3,y:78.8},3).to({y:82.3},4).to({regY:-14.2,rotation:28,x:25,y:83.5},15).to({regY:-14.3,rotation:0,x:24.9,y:84.4},13).wait(1));
    
        // Layer 4
        this.instance_5 = new lib.Tween31();
        this.instance_5.parent = this;
        this.instance_5.setTransform(33.7,96.5,0.5,0.5,0,0,0,-14.6,24.4);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({regY:24.3,y:92.3},30,cjs.Ease.get(1)).to({y:96.4},48).to({regY:24.4,y:90.9},3).to({y:94.4},4).to({y:96.5},28).wait(1));
    
        // flash0.ai
        this.instance_6 = new lib.Tween33();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-13.9,84.3,0.5,0.5);
        this.instance_6.alpha = 0;
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:-13.7,y:82,alpha:0.5},8).to({x:-13.8,y:80.6,alpha:1},11).to({y:80.3},11).to({y:80.9},13).to({x:-13.9,y:82.1},17).to({y:84.3},18).to({x:-13.2,y:75.9},3).to({x:-13.9,y:84.3},4).wait(19).to({alpha:0},9).wait(1));
    
        // Layer 7
        this.instance_7 = new lib.Symbol1_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-14,87.9,0.345,0.345,0,0,0,58,75.2);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({y:83.9},30,cjs.Ease.get(1)).to({y:87.9},48,cjs.Ease.get(-1)).to({scaleY:0.35,y:79.4},3).to({scaleY:0.35,y:87.4},4).to({y:87.9},28).wait(1));
    
        // Layer 9
        this.instance_8 = new lib.Tween21();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-10.3,109.5,0.5,0.5);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:-11,y:105.7},30,cjs.Ease.get(1)).to({x:-10.4,y:109.5},48,cjs.Ease.get(-1)).to({scaleX:0.39,scaleY:0.39},3).to({scaleX:0.5,scaleY:0.5,y:109},4).to({x:-10.3,y:109.5},28).wait(1));
    
        // flash0.ai
        this.instance_9 = new lib.hoasinhi_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-0.6,104.7,0.355,0.355,0,0,0,0.4,0.4);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({scaleY:0.37,y:100.2},30,cjs.Ease.get(1)).to({scaleY:0.36,y:104.7},48,cjs.Ease.get(-1)).to({scaleY:0.36,y:102.2},3).to({scaleY:0.36,y:104.7},32).wait(1));
    
        // Layer 14
        this.instance_10 = new lib.Symbol1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(4,195);
        this.instance_10.cache(-134,-72,269,143);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(115));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-128.3,-10.9,264.6,275.7);
    
    
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
        this.tit.setTransform(182.3,36.4);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("AjnNxQhZAuhdAfQhCAUhHAEIAZiZIl3A8IAIjWIF7itIiBoTICllrIkqkSIAGjLIEAixIBrAAIA8AqQBNAyBOAvIARALIA8DmIggBgQgtAcgqAfQgiAYggAaIhBC+IDKg9IBIAYIBgEDQCTAaCTAbQB3AWBxAqQA5AVAyAmQAZg4AWg4IBig8IAui0IBHB/Qg+BbgzBgIhtDRQggA9gvA0QgsAvguAsIAIBRIBhBtIBpAMIAsA4IowCyIAMBUIjdAZg");
        this.shape.setTransform(133.3,104.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(43.2,0,180.3,209.4);
    
    
    // stage content:
    (lib.hsn2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_hsn.mp3", "voice_hsn"); 
            var icon_hsnSound, icon_hsnSoundTimeOut;
            root_hsn = this;
            htcv_icon_hsnOver = function() {cv_icon_hsnOver();}
            htcv_icon_hsnOut = function() {cv_icon_hsnOut();}
            
            function cv_icon_hsnOver() {
                root_hsn.ico.over = true;
                root_hsn.hit.tit.over = true;
                root_hsn.hit.tit.gotoAndPlay(1);
                icon_hsnSoundTimeOut = setTimeout(icon_hsnSoundTimeOutComplete, 500);
            }
            
            function cv_icon_hsnOut() {
                root_hsn.ico.over = false;
                root_hsn.hit.tit.over = false;
                if (root_hsn.hit.tit.currentFrame == 7) {
                    root_hsn.hit.tit.play();
                }
                clearTimeout(icon_hsnSoundTimeOut);
            }
            
            function icon_hsnSoundTimeOutComplete() {
                clearTimeout(icon_hsnSoundTimeOut);
                
                // if (root_hsn.ico.currentFrame == 0) {
                //     icon_hsnSound = createjs.Sound.play("voice_hsn");
                // }
                root_hsn.ico.play();
            }
            
            this.icon_hsn_check_pausable = function() {
                if (root_hsn.ico.over == false && root_hsn.hit.tit.over == false && root_hsn.ico.currentFrame == 0 && root_hsn.hit.tit.currentFrame == 0) {
                    cvht_icon_hsn_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 3
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(101,178,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.hoasinhi_resize();
        this.ico.parent = this;
        this.ico.setTransform(129,100);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(133.2,271.5,264.6,275.7);
    // library properties:
    lib.properties = {
        width: 265,
        height: 365,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/hsn2017_atlas_.png", id:"hsn2017_atlas_"}/*,
            {src:"sounds/voice_hsn.mp3", id:"voice_hsn"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_hsn = lib_hsn||{}, images_hsn = images_hsn||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_hsn, images_hsn, createjs, ss, AdobeAn;