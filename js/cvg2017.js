(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"cvg2017_atlas_", frames: [[0,0,337,177],[0,296,99,89],[232,387,75,24],[460,216,46,14],[244,245,93,94],[152,245,90,105],[411,320,76,76],[0,179,150,115],[0,387,83,29],[161,352,69,37],[244,341,69,44],[152,179,160,64],[470,64,32,63],[101,352,58,50],[470,129,13,26],[339,0,129,157],[339,159,119,159],[460,191,44,23],[460,159,48,30],[470,0,37,62],[339,320,70,101],[161,391,53,21]]}
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
    
    
    
    (lib.Bitmap11 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap2 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap20 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap24 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap25 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap26 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap28 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap29 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap32 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap33 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap35 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap36 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap37 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap38 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap40 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap41 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap6 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap7 = function() {
        this.spriteSheet = ss["cvg2017_atlas_"];
        this.gotoAndStop(21);
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
    
    
    (lib.Symbol7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B64500").s().p("ABhAtIi7gBIgDAAIgEAAQAUhEAxgQQAKgDALAAQAMgCAOADQARACARAHQAYAJAMAaIAEAKQAGASgBAPgABTAVQgDgKgHgKQgPgUgZgGIgMgCQgOgCgMACQgLABgKAEQgTAHgOAPQgIAIgFANIAWAAICFAAIAAAAg");
        this.shape.setTransform(-0.2,-4.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F451D2").s().p("Ag8AsQgegWgDghIAAgFIC7AAQgBAagVAWQgaAbgnADIgJAAQghAAgZgSgAg+g9QgIAKgFALIAWAAIgXAAQAGgMAIgJg");
        this.shape_1.setTransform(0.1,1.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BC179D").s().p("Ag/AuQgegWgEgjIAAgLIADAAIAAAFQADAiAeAVQAeAWAmgDQAngEAZgbQAVgWACgZIAAAAQABgPgGgSIgEgLQALAQABAUQAEAigbAcQgaAdgoADIgLABQghAAgbgUg");
        this.shape_2.setTransform(0.2,2.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-10,-8.8,20,17.8), null);
    
    
    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B64500").s().p("ABhAtIi7gBIgDAAIgEAAQAUhEAxgQQAKgDALAAQAMgCAPADQAQACARAHQAYAJAMAaIAEAKQAGASgBAPgABTAVQgDgKgHgKQgPgUgZgGIgLgCQgPgCgMACQgLABgKAEQgTAHgOAPQgIAIgFANIAWAAICFAAIAAAAg");
        this.shape.setTransform(-0.2,-4.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F451D2").s().p("Ag8AsQgegWgDghIAAgFIC7AAQgBAagVAWQgZAbgnADIgKAAQghAAgZgSgAg+g9QgIAKgEALIAVAAIgWAAQAFgMAIgJg");
        this.shape_1.setTransform(0.1,1.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BC179D").s().p("Ag/AuQgegWgEgjIAAgLIADAAIAAAFQADAiAeAVQAeAWAmgDQAngEAZgbQAVgWACgZIAAAAQABgPgGgSIgEgLQALAQABAUQAEAigbAcQgaAdgoADIgLABQghAAgbgUg");
        this.shape_2.setTransform(0.2,2.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-10,-8.8,20,17.8), null);
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy
        this.instance = new lib.Bitmap2();
        this.instance.parent = this;
        this.instance.setTransform(-93.2,-93.8,2,2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-93.2,-93.8,186,188), null);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AAWBYIgCgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAVgfAOgjQAbhBgcgTQgfgSgvAcIAAgBIgsAhQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgCgiQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIACAXIAlgbIABAAQA1gfAkAWQAkAWgfBLQgPAkgVAgIgDADIgFgBg");
        this.shape.setTransform(45.2,37.6);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ag4gdIAcgcQAugkAjAQQAjAPgTBKQgJAlgRAigAhLgzIATAWIgMALgAg4gdg");
        this.shape_1.setTransform(44.6,37.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
        // Layer 4
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgTAoQgagLgNgZQgMgWAIgRQAFgMAXABQAVAAAaAMQAaAMAQARQAPAQgFAKQgHARgaAHQgKACgKAAQgPAAgQgHg");
        this.shape_2.setTransform(51.8,57,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
        // Layer 5
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgcA9QghghABgmIABgBIAHgfQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgHAdQAAAiAdAdQAgAiAlgOIAAAAQAigNAAgnQABhChbgdIAAAAQgfgJgZAbIgUAeQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAVgfIAAgBQAeggAlAMIABAAQBkAfgDBKQAAAugpAQIAAABQgNAFgMAAQgdAAgbgcg");
        this.shape_3.setTransform(108,37,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
        // Layer 6
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CFC4B7").s().p("AgYA5QgfgfABgkIAHgfIgpAMIAVgfQAcgeAiALQBfAegBBGQgBAqglAPQgMAFgLAAQgbAAgZgag");
        this.shape_4.setTransform(108,37,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    
        // Layer 7
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("ACBEWQg0gXhGiTQgohZgJgRQgPgcgNgRIgBgBIgJgLQgGgGgFgEQgYgSgWgGIgMgCIgCAAIABAAQgOgBgOAEQgeALgiAqIAAAAQglA0gSAVIgBABQghAlgegDIAAAAQgRgCgTgJIABAAQgWgLgQgQQhhhiBNiOIAAAAQAQgdAmgjQASgQAQgMQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIApAyIABAAQA3A7BAAxQAZATAZARQAeADAgAZIAAAAQALAIALAOQCOBICYACQB1ABBOgTQAmgIAPgLIAEgBIADACIACADQANC2h/BVQg3AkhCAGIgZABQg0AAgvgVgAgggCQAJAQAoBZQBDCPAyAWQA3AZA/gGQA/gFA1gjQB2hQgJioQgRAIggAIQhPATh2gBQiRgBiIhBIASAfgAmIkFQglAhgPAcIAAABQhJCFBbBeQAOAOAUAKIAAAAQARAIAQACQAYABAdggIAAAAQASgVAlgzIABgBQAkgtAhgLQAHgDAIgBIgmgbQhBgzg4g7IAAAAIgmguQgOAKgPAOg");
        this.shape_5.setTransform(64.2,63.6);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("ACGELQgygXhDiOQgohZgJgQIgSgfQCIBBCRABQB2ABBPgTQAggIARgIQAJCoh2BQQg1Ajg/AFIgYABQgyAAgsgUgAlnA9QgQgCgRgIIAAAAQgUgKgOgOQhbheBJiFIAAgBQAPgcAlghQAPgOAOgKIAmAuIAAAAQA4A7BBAzIAmAbQgIABgHADQghALgkAtIgBABQglAzgSAVIAAAAQgcAfgXAAIgCAAgAiJhaQAWAGAYASQAFAEAGAGQgcgPgdgTg");
        this.shape_6.setTransform(64.2,63.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));
    
        // Layer 8
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AAfAvQgegMgUgPQgKgHgIgIQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAEgBASgVIAAAAQAWgaALAGIAAAAQAOAEACAsQACAUgBATIgBADIgDACIgCAAIgCAAgAgDgSIAAABQgNAOgHAFIAKAJQARANAYAKQAAgPgBgQIAAAAQgBgigIgEIAAAAQgHAAgOARg");
        this.shape_7.setTransform(58.7,73.6,1,1,7.9);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgPAMIgKgJQAHgFANgOIAAgBQAPgRAGAAQAIAEABAiIAAAAQACAQgBAPQgYgKgRgNg");
        this.shape_8.setTransform(58.9,73.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));
    
        // Layer 9
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("ACaA/IAAABQhFgPgygoQg8gxgigMQgogOgzARQgdAQgWgJIgBgBIgNgKQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAMAJQASAHAYgNIABAAQA3gTArAPQAkANA+AyQAwAnBCAOIABAAQAhAHAXgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgGAAQgXAAgfgHg");
        this.shape_9.setTransform(51.8,72.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));
    
        // Layer 10
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("ACbA6Qg0gLgqgaICYAsIgGAAQgWAAgegHgAitguQAKgCALgGQA1gSApAPQAjAMA+AyIAWAQgAjHgvIgNgKIAnALIgLABQgIAAgHgCg");
        this.shape_10.setTransform(51.8,72.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));
    
        // Layer 11
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#000000").ss(1.1,1,1).p("AAUARQgIgXABgOQAAgQgNAMQgNANgGAp");
        this.shape_11.setTransform(41,63,1,1,7.9);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AAAgYQANgMgBAQQAAAOAIAXIgnANQAGgpANgNg");
        this.shape_12.setTransform(41,63,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));
    
        // Layer 64
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_13.setTransform(72.2,57.4,1.074,1.249,0,0.7,-5.1,0.1,0.2);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_14.setTransform(72.7,55,2.148,2.498,0,0.7,-5.1,0.1,0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));
    
        // Layer 13
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#000000").s().p("AiuAkIgCgDIAAgEIAQgeIAAAAQAWgnAdgiQBchuB8gZQA3gLAMA1QAMAxgcBsIAAAAQgcBqguBxIgBACIgBAAQgSAAjuivgAikAeQDtCvABgBQAuhwAbhpQAbhogLgvQgKgqgsAIQh4AZhaBqQgcAigVAkIAAAAg");
        this.shape_15.setTransform(45,35.2,1,1,7.9);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AilAcIAOgbIAAAAQAVgkAdgiQBZhqB4gYQAsgJALAqQAKAvgaBoQgcBpgtBwIAAAAQgCAAjtiug");
        this.shape_16.setTransform(45.1,35.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));
    
        // Layer 14
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AhKC5Qg+gPg0gXQgXgKgLgGIgIgGQgGgGAEgEQAtioBnhcQBoheBaA0QBCAmAkCkIAAAAQASBSAFBKIgBADIgDACQhCAehVAAQhHAAhTgVgAhNiJQhkBbgtCkIAGADQAKAGAWAKQA0AWA8AQQCxAsB2gzQgEhIgShOIAAAAQgiifg/gkQgdgRgfAAQg5AAhAA5g");
        this.shape_17.setTransform(75.6,46.4,1,1,7.9);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AhICuQg8gPg0gWQgWgKgKgGIgGgEQAsikBlhaQBhhYBUAvQA+AlAjCeIAAAAQARBPAFBIQhAAbhQAAQhGAAhRgVg");
        this.shape_18.setTransform(75.6,46.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));
    
        // Layer 15
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AAvAqQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAHgWgIgSQgRglhLARQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQBVgUATAuQAKAVgIAaQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABIgDAAIgBAAg");
        this.shape_19.setTransform(63.5,17.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));
    
        // Layer 16
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#CFC4B7").s().p("AgzgeQBQgTASAqQAJATgHAZg");
        this.shape_20.setTransform(63.5,17.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));
    
        // Layer 17
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("ABqApQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQgQgkgigSQhDgmhYBOQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQBehVBJArQAlAWASAlQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABIgDAAIgBAAg");
        this.shape_21.setTransform(84.8,25.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));
    
        // Layer 18
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#CFC4B7").s().p("AhrATQBchRBFApQAkAUARAkg");
        this.shape_22.setTransform(84.8,25.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));
    
        // Layer 19
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("ACZGIQg4gPhYiJIhAhiQgigwgYgNIAAAAQhYgxhABEIAAABQghAogRARQgeAfgcABIAAAAIgbAAQgOgCgQgPQgqgngEgeQgFgeAVhRQAQg1AagwQBXibCihSQCUhLB1AbQCQAhBYBkQBhBuAsDOQAmCzhzBlIAAABQgxAqhBAPQgdAHgdAAQgiAAghgJgAguCIIBABiQBVCEA1APQA6ARA9gOQA/gPAugpIABAAQBthigkisQgrjKhfhsIAAgBQhWhiiMgfQhygaiQBJQifBQhVCYQgaAvgPA0QgVBOAFAcIAAABQAEAbAmAjQANAMALACIABAAIAYAAQAZgBAagbQARgSAggoIABAAQBGhLBfA2IAAAAQAaANAkAzg");
        this.shape_23.setTransform(67.3,50.7,1,1,7.9);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#CFC4B7").s().p("ACcF9Qg1gPhViEIhAhiQgkgzgagNIABAAQhgg2hGBLIAAAAQghAogRASQgaAbgYABIgZAAIAAAAQgLgCgNgMQgngkgEgaIAAgBQgFgcAVhOQAPg0AagvQBViYCfhQQCQhJByAaQCMAfBWBiIAAABQBfBsArDKQAlCshuBiIAAAAQgvApg+APQgcAGgcAAQggAAgggJg");
        this.shape_24.setTransform(67.3,50.7,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));
    
        // Layer 20
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("ABVCtQhqgFhIglQhkg0glhHIAAAAQgMgVgEgVIAAAAIgBgRIAAgDQAphvB9gHQBWgFBcAoQA/AcA4ByIAAAAQA5B4grAaQgkAXhQAAIgdgBgAhYB5QBGAkBnAFQBjAEAogZQAigXg0hsIAAAAQg2hug7gbQhagnhTAFQh1AGgnBoIABAPQAEAUALATIgBAAQAkBEBhAyg");
        this.shape_25.setTransform(54.5,69,1,1,7.9);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FFFFFF").s().p("ABVCiQhngFhGgkQhhgygkhEIABAAQgLgTgEgUIgBgPQAnhoB1gGQBTgFBaAnQA7AbA2BuIAAAAQA0BsgiAXQgiAWhNAAIgcgBg");
        this.shape_26.setTransform(54.5,69,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));
    
        // Layer 21
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AgZAxQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgbAYgkQALgRALgNQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgLAMgLAQQgUAgAAAZQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
        this.shape_27.setTransform(55.7,14.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));
    
        // Layer 22
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#CFC4B7").s().p("AAAgPQALgRALgMIgrBZQgBgaAWgig");
        this.shape_28.setTransform(55.7,14.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));
    
        // Layer 23
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AgvA0QghgcgFgXQgGgYAagUQAUgQA1gQQAPgFAiAcQAPANANAOIACACIAAACQgHAngTAcQgVAegcABIgDAAQgYAAgggZgAALhBQgyAPgTAPQgUAQAEATQAFATAdAYQAeAYAWgBQAXgBARgZQARgaAGgiQgMgMgNgMQgagVgLAAIgCAAg");
        this.shape_29.setTransform(57.9,14.1,1,1,7.9);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#CFC4B7").s().p("AgnArQgegYgFgUQgEgSAUgQQATgPAzgPQAKgCAcAXQAOAMAMAMQgHAigRAaQgRAZgXABIgBAAQgWAAgcgXg");
        this.shape_30.setTransform(57.9,14.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));
    
        // Layer 24
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AiCBKQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAEgNAIgTQAQgkAWgYIAAAAQBHhTBmA4IAVAHIABAAQAYANAAAeQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgXgTgKIABAAIgVgGIgBgBQhfg0hBBMIAAAAQgVAXgQAjQgIARgDANQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABIgCAAIgCAAg");
        this.shape_31.setTransform(96.8,10.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));
    
        // Layer 25
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AgsBfIAAgBIgOgXQgTABgMgQIgBAAQgNgSAHgaQAHgWAZABIABAAQAJAAAJADIAlgvIgCgLIAAgBQgBgRAFgIQAIgQALgBQALgCAMAMIAAABQAKAKAHAOIASAAIACABQAaAGAAAfQABAkghACIgCAAIgZgEIgaAkIAEAUIAAABQACAcgSAOQgKAJgLAAQgNAAgMgNgAg1A8IACABIAQAaQAOARARgNQAMgLgBgWIgEgWQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAdgpIACgCIADAAIAdAFQAWgCgBgaIAAAAQAAgVgRgGIgWAAIgDgBIgCgCQgGgPgKgKIAAAAQgHgIgHABQgGABgGAKQgCAGAAANIAAAAIADAOIAAACIgBACIgoAzIgDACIgEgBQgJgDgKAAIAAAAQgRgBgEAPQgGAUAKAOIAAAAQAKANAQgCIABAAIABAAg");
        this.shape_32.setTransform(108,10.6,1,1,7.9);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("AgjBXIgQgZIgCgCIgCAAQgQACgKgNIAAAAQgKgOAGgUQAEgOARAAIAAAAQAKAAAJAEIAEAAIADgCIAogyIABgDIAAgCIgDgNIAAgBQAAgNACgGQAGgJAGgCQAHAAAHAIIAAgBQAKAKAGAPIACACIADABIAWABQARAFAAAVIAAAAQABAagWACIgdgFIgDABIgCABIgdApQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIAEAXQABAVgMALQgHAGgHAAQgJAAgIgKg");
        this.shape_33.setTransform(108,10.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).wait(1));
    
        // Layer 26
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#FFFFFF").s().p("AgBAFQgUgFABgFQABgFAUAGIAPAEQAGAEgBACQgBACgGAAIgPgDg");
        this.shape_34.setTransform(27.1,84.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));
    
        // Layer 27
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FFFFFF").s().p("AgHAuQgDAAAAgOQAAgOADgSQACgTAFgNQAEgOAEABQADABAAAOQABAOgDASQgDATgFANQgEAMgDAAIgBAAg");
        this.shape_35.setTransform(19,102,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));
    
        // Layer 28
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AgqBUIABAAQgtgagCg4QgBg3AsgbQAfgSAaABIABAAIAxAKIACABIACACIAMAcIABABQAMAigDAbQgEAsgXAnQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgZAGgVAAQgeAAgXgOgAgnhGQgnAXABAxQABAyAoAXIAAAAQAjAUA1gNQAVgkAEgpQADgZgMggIgLgZIgugJIgCAAQgWAAgaAQg");
        this.shape_36.setTransform(42.7,98.4,1,1,7.9);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#FFFFFF").s().p("AgkBLIAAAAQgogXgBgyQgBgxAngXQAbgRAXABIAuAJIALAZQAMAggDAZQgEApgVAkQgVAFgTAAQgbAAgVgMg");
        this.shape_37.setTransform(42.7,98.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));
    
        // Layer 29
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AiIBsQgtgagCg5QAAg3AsgaQAfgTAbABIAAAAIAxAKIAAABQAMACANACQAkADBDgfQAigQAagRQABAAAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgaARgjAQQhHAhgmgEQgOgCgMgDIAAAAIgwgKQgYAAgcAQQgnAYABAwQABAyAoAYQAkAUA4gOQA0gNA1goQA8gtAvhEQABgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQgxBGg9AuQg3Apg2AOQgYAGgVAAQgfAAgXgOg");
        this.shape_38.setTransform(52.4,97.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));
    
        // Layer 30
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#CFC4B7").s().p("AiFBnQgrgZgBg1QgBg0AqgZQAdgRAaABIAwAKQAMADAOABQAlAEBFggQAigQAbgRIASA5QgwBFg9AtQg2Apg1ANQgYAGgUAAQgdAAgWgNg");
        this.shape_39.setTransform(52.4,97.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));
    
        // Layer 31
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AgMAQIAAAAQgDgHAAgJIAAAAQABgJAEgHIAAAAQAFgJAGABIABAAQAGAAAFAJIAAABQADAGgBAIIAAABQAAAJgDAHIAAAAQgGAJgGgBIgBAAQgGAAgFgJgAAAAOIACgDIAAAAQACgEAAgHIAAAAQABgFgCgFIAAAAIgDgDIgBADIAAAAQgCAEgBAGIAAAAQAAAHACAEIAAAAIACADg");
        this.shape_40.setTransform(12.3,151.2,1,1,7.9);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FFFFFF").s().p("AgCALIAAAAQgCgEAAgHIAAAAQABgGACgEIAAAAIABgDIADADIAAAAQACAFgBAFIAAAAQABAHgDAEIAAAAIgCADIgCgDg");
        this.shape_41.setTransform(12.3,151.2,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));
    
        // Layer 32
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AAAAaIgBAAQgGAAgFgJQgEgIABgJQABgJADgHIAAgBQAGgKAGACQAHAAAFAJIAAABQADAGAAAKIAAAAQgBAKgDAGQgFAJgHAAIAAAAgAgEAAQAAAHACAFIACADIACgDQADgFAAgGIAAgBQAAgGgCgFIAAAAIgCgDIgBAAIgBADIAAAAQgCAFgBAGg");
        this.shape_42.setTransform(11.7,151.1,1,1,7.9);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFFFFF").s().p("AgCAMQgCgFAAgHQAAgGADgFIAAAAIABgDIABAAIACADIAAAAQACAFAAAGIAAABQAAAGgDAFIgCADIgCgDg");
        this.shape_43.setTransform(11.7,151.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).wait(1));
    
        // Layer 33
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AgiBwQgWgDgCggQgCgcAPgLIAAAAQAJgHAMgWIAMgRQgUgPgTAGQgPAFgBADIAAADIgDADIgEAAIgCgCQgQgRAMgpIAAgBIAKgZIADgGIAAgBIAAgBIAAABIAAABIAAAAIAEgBIgDgDIACgCQAPgPAvAFIAAAAQAmAEAUAKIgBAAQAOAGAKAgIAAAAQAFAPACAOIAAABIgDBVIgCADQgfAlgmALQgRAGgQAAIgNgBgAgvBNQABAVAOADQASADAWgHQAjgLAdghIADhRQgCgNgEgPIAAAAQgIgagKgFIAAAAQgTgJgjgEIAAAAQgngFgOAMQAAgBABgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAABIAAACIgBAAIAAABIAAABIgDAHIgKAZQgHAaAFAPQAGgFALgEQAbgIAbAWIABADIAAAEIgCADIgMATQgOAYgKAHIAAAAQgLAJACAWg");
        this.shape_44.setTransform(13.9,144.9,1,1,7.9);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#FF1213").s().p("AggBlQgOgDgBgVQgCgWALgJIAAAAQAKgHAOgYIAMgTIACgDIAAgEIgBgDQgbgWgbAIQgLAEgGAFQgFgPAHgaIAKgZIADgHIAAgBIAAgBIABAAIAAgCIAAgBQAAAAABABQAAAAAAAAQAAABAAABQgBAAAAABQANgMAoAFIAAAAQAjAEATAJIAAAAQAJAGAIAZIAAAAQAFAPACANIgDBRQgdAhgjALQgPAFgOAAIgLgBg");
        this.shape_45.setTransform(13.9,144.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44}]}).wait(1));
    
        // Layer 34
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#000000").s().p("AAEAlQg5AAgEgGIAAAAQgGgIAAgSQAAgUALgNQAKgNAqAGQAhAFARAGIAAAAQAMAFACAbQAAANgBALQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgbABIgbgBgAgsgVQgIAKAAAQQAAANAEAGQAEACAwAAIAwAAIABgRQgBgTgGgEIAAABQgQgHgegEIgWgCQgQAAgGAFg");
        this.shape_46.setTransform(15.5,133.6,1,1,7.9);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#B60C0D").s().p("AAEAaQgwAAgEgCQgEgGAAgNQAAgQAIgKQAJgIAjAFQAeAEAQAHIAAgBQAGAEABATIgBARIgYABIgYgBg");
        this.shape_47.setTransform(15.5,133.6,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));
    
        // Layer 35
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#000000").s().p("AANA2IgBAAQgOgIgKgDQgPgEgGAGIgDACIgDAAQgGgBgCgJIAAABQgDgIAAgJQABgPAHgUQAKgdAQgJIAAAAQAIgEAWAEQAdAFAHASIABADIgBACIgPATQgKATAJASIABACIgBACIgEAKIAAAAQgFAJgHAAIgFgBgAgJAhQAKADAQAIQABAAAAgBQABAAAAAAQAAgBABAAQAAgBABgBIgBABIADgHQgKgWANgXIAAgBIANgPQgHgLgUgDQgRgDgGACIABAAQgNAHgIAZQgHASgBANQAAAHACAGQAFgEAIAAQAHAAAIADg");
        this.shape_48.setTransform(25.8,87.7,1,1,7.9);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#B60C0D").s().p("AgIAhQgTgFgJAGQgDgGABgGQAAgOAHgSQAIgYANgIIAAAAQAFgCASADQATADAHALIgMAQIAAAAQgOAYALAWIgDAGIAAAAQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgQgIgKgDg");
        this.shape_49.setTransform(25.8,87.6,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).wait(1));
    
        // Layer 36
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#000000").s().p("AB1A/IgCgBQgrgVg9gRQgsgMgwgIQgigEgJAAIAAAAQgPAAgFgOIAAAAQgEgMAGgMQADgIAKgGIAJgFIABAAQBGgSBnAlQA0ASAmAWIACADIAAADIgQAqIgEAKIgDADIgEABIgCgBgAh8gLIAAAAQAKAAAiAFQAxAHAtANQA8AQAsAVIACgFIAOglQgjgTgxgRQhjglhEARIABAAIgHAEQgHAEgCAFQgEAJACAHIAAAAQADAHAHAAg");
        this.shape_50.setTransform(26.3,89,1,1,7.9);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FF1213").s().p("AAPAPQgtgNgxgHQgigFgKAAIAAAAQgHAAgDgHIAAAAQgCgHADgJQADgFAGgEIAHgEIAAAAQBDgRBkAlQAwAQAkAUIgOAlIgDAFQgrgVg8gQg");
        this.shape_51.setTransform(26.3,88.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).wait(1));
    
        // Layer 37
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#000000").s().p("Ag2DrIAAABQgEgDAAg9QAAhDAFhFQAPjMAshHQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIADgBIAFABIAQAEIAAAAIAWAGQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgLAmQgLAwgHA0QgYCnAbCTQADAFgGAEIgIADQgJACgSACIgRABQgbAAgFgJgAgqAlQgFBEAABDQAAA1ABADIABABQAFAGAigDQARgCAIgCIADAAQgaiUAXioQAHg1AMgxIAAAAIAJghIgRgFIgPgDIgBAAQgqBGgODGg");
        this.shape_52.setTransform(19.6,110.8,1,1,7.9);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#FF1213").s().p("AgtDkIAAgBQgBgCAAg2QAAhCAFhFQAOjFAqhHIAAAAIAQAEIAQAEIgJAhIAAAAQgLAygIA0QgXCoAbCUIgDABQgJACgRACIgSABQgRAAgEgFg");
        this.shape_53.setTransform(19.5,110.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).wait(1));
    
        // Layer 38
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#000000").s().p("AgYAkQgygUggg2IAAgDIABgDIADgCIADAAIAUAHIAAAAQAaAIAkAEQA5AFA+gEIADABIACADIAAADQgLAvgoAOQgPAFgQAAQgXAAgagLgAgUAaQAoARAhgMQAfgLALgiQg7ADg2gFQglgEgbgIIgBAAIgEgCQAbAnAoARg");
        this.shape_54.setTransform(28.6,142,1,1,7.9);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#FFFFFF").s().p("AgXAXQgogQgcgoIAFACIAAAAQAcAIAkAEQA3AFA7gDQgLAjgfALQgOAFgPAAQgVAAgXgLg");
        this.shape_55.setTransform(28.9,142.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54}]}).wait(1));
    
        // Layer 39
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#000000").s().p("AgbA4IABAAQgqgNg8gzIgCgDIAAgDIACgDIAEgBIAwAEIAAAAQA2ADAcgEQAugHBHgnQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgDAZgKAWQgTAsgqASQgVAIgXAAQgTAAgVgGgAgXAtIAAAAQAoANAkgOQAmgQARgoQAHgRADgRQhCAjgsAHIAAAAQgdAEg4gDIAAAAIgfgCQAyAnAjALg");
        this.shape_56.setTransform(57.4,146.6,1,1,7.9);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FFFFFF").s().p("AgcArIAAAAQgjgLgygoIAgADIAAAAQA3ADAdgEIAAAAQAsgHBDgjQgDARgHARQgSAogmAPQgTAIgUAAQgSAAgTgGg");
        this.shape_57.setTransform(57.8,146.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).wait(1));
    
        // Layer 40
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#000000").s().p("AgCBqIAAAAQgqgNg8g0IgkggIAAAAIgOgNQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIAOANIAAAAIAjAgQA6AyAnAMIAAAAQApANAkgOQAmgQARgpQAJgVADgWIAAgBQADgbgDgiIgEgmQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAEAlQADAkgDAcQgDAYgKAWQgTAtgqASQgVAIgXAAQgUAAgTgGg");
        this.shape_58.setTransform(55.5,141.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));
    
        // Layer 41
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#000000").s().p("AgSCZQg2gEg1gNIAAAAQhtghg4hTQg3hQAWhXIABgDIADgCIADABIBgArQBtAmBIgVQBqggCKgLQBEgFAwACIADABIACADQAHAggEAnQgHBMgsA0QAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAqgyAGhIQADgigFgdQgugBhAAEQiIALhqAgQhKAWhxgnIgBgBIhagoQgRBPAyBJQA2BQBpAfQA0ANA1AEQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIAAAAg");
        this.shape_59.setTransform(45.2,125.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));
    
        // Layer 42
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#FFFFFF").s().p("AARCHQAChCgag/QgYg1AChIIAGg/IASgEIgIA8QgEBIAXA4QAZA5AAA9QAAAmgGAOQgLANgEACQAFgUACggg");
        this.shape_60.setTransform(63.6,133.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(1));
    
        // Layer 43
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#FFFFFF").s().p("AAQB9QADg+gbg7QgXgxABhDIAGg5IASgFIgIA4QgEBDAYAzQAZA1AAA4QAAAlgGAMQgLAQgFABQAGgTABgfg");
        this.shape_61.setTransform(66.5,133,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));
    
        // Layer 44
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#2C1CFB").s().p("AgBBlQgpgNg7gzIgjggIgOgNIEnhiIAEAmQAEAjgEAbQgCAXgKAWQgSArgoARQgUAIgWAAQgTAAgTgGg");
        this.shape_62.setTransform(55.5,141.5,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(1));
    
        // Layer 45
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#2C1CFB").s().p("Ah8CBQhrggg3hSQg1hOAVhVIBhAsQBvAnBJgWQBqggCJgLQBEgFAvACQAGAfgDAmQgPCiisAnQg2AMg5AAQhIAAhOgUg");
        this.shape_63.setTransform(45.2,125.7,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));
    
        // Layer 46
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#000000").s().p("AAAB8QgxgUghg3QgdgwgPhFIAAAAIgIg8QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAIA8IAAAAQAPBEAcAuQAfAzAsATQApARAhgLQAigNAKgpQAIgigLgaIAAAAQgOgfAAgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIANAdIAAAAQAMAdgIAlQgMAwgoAOQgPAGgQAAQgYAAgZgMg");
        this.shape_64.setTransform(27.3,133.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1));
    
        // Layer 47
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#2C1CFB").s().p("AABB3QgugTggg2QgdgugOhFIgJg8IDvBmIANAfQALAbgIAkQgKAtgmANQgOAFgPAAQgXAAgZgLg");
        this.shape_65.setTransform(27.3,133.1,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(1));
    
        // Layer 48
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#000000").s().p("AgKEbQihgGgrhvQgTgwANg1IAAAAQAOg2ArgpQBjhiAdghQAqgvAKgfQAJgfBlgJQAwgEAuACIADABIACADIAAADIgjBKQgfBZAOBKQAXCGgXBJQgjBxiKAAIgLAAgACAkMQhbAIgKAZQgKAggsAyQgdAhhjBiQgpAngNAzQgNAxASAtQAqBoCYAGQCLAEAihtQAWhIgWiCQgOhNAghbIAAgBIAfhDIgQAAQgiAAgiADg");
        this.shape_66.setTransform(39.2,102.5,1,1,7.9);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFFFFF").s().p("AgIEQQiZgGgphoQgSgtAMgxQAOgzAognQBjhiAeghQArgyALggQAKgZBagIQArgEAqABIgfBDIgBABQggBbAOBNQAXCCgWBIQghBpiCAAIgKAAg");
        this.shape_67.setTransform(39.1,102.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66}]}).wait(1));
    
        // Layer 49
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#000000").ss(1.1,1,1).p("AiWgIIAOANQARAQASAQQA8AzAoANQAqANAmgPQAogRASgrQAKgWADgXQADgbgEgjQgDgkAAgC");
        this.shape_68.setTransform(55.6,140.7,1,1,7.9);
    
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#CFC4B7").s().p("AgBBlQgogNg8gzIgjggIgOgNIEohiIADAmQAEAjgDAbQgDAXgKAWQgSArgoARQgUAIgWAAQgTAAgTgGg");
        this.shape_69.setTransform(55.6,140.7,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68}]}).wait(1));
    
        // Layer 50
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#000000").s().p("Ah9E8IgBAAQiagtgoiEQgSg8ASg6IAAAAQATg8A2guQBchLA0hAQAageAHgRIACgCIACgBIA8gVQBHgXA5gKQBegQAmATQApAUgTA6QgXBHAEAxQADAjAVAnQAfA4AFAMQARAtgFA5QgPCniwAoQg2AMg5AAQhJAAhPgUgACIE6QCognAOifQAFg2gQgrQgFgMgeg3QgXgpgDglQgFgzAYhJQAQgwgggRQgkgShZAQQg4AKhGAXIg7AUQgIARgZAeQg1BBhdBMQg0ArgSA5IAAAAQgQA3ARA5QAmB+CUAsIAAAAQCJAjB6gbg");
        this.shape_70.setTransform(47.8,106.9,1,1,7.9);
    
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#CFC4B7").s().p("Ah7ExIAAAAQiUgrgmh+QgRg5AQg3IAAAAQASg5A0gsQBdhLA1hBQAZgeAIgRIA7gVQBGgWA4gKQBZgQAkASQAgARgQAvQgYBKAFAzQADAlAXApQAeA3AFAMQAQArgFA2QgOCfioAmQg1AMg4AAQhIAAhOgUg");
        this.shape_71.setTransform(47.8,106.9,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70}]}).wait(1));
    
        // Layer 51
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("#000000").ss(1.1,1,1).p("AiBiBIAJA8QAOBFAdAvQAgA1AuAUQArARAigMQAmgNAKgtQAIgjgLgcQgNgdAAgB");
        this.shape_72.setTransform(27.4,132.3,1,1,7.9);
    
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#CFC4B7").s().p("AABB4QgugUggg1QgdgvgOhFIgJg8IDvBnIANAeQALAcgIAjQgKAtgmANQgOAFgPAAQgXAAgZgKg");
        this.shape_73.setTransform(27.4,132.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72}]}).wait(1));
    
        // Layer 52
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFFFF").s().p("AgKAVQgEgCABgHQAAgIAFgHQAFgJAEgFQAGgFAEACQADACAAAHQgBAIgEAHQgFAJgFAFQgDAEgEAAIgCgBg");
        this.shape_74.setTransform(3.8,147.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));
    
        // Layer 53
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("Ag6BKQgbgdgBgqQgCgpAZgeQAYggAlgBQAjgBAbAdQAaAdABAqQACApgYAfQgZAfgkABIgDAAQgiAAgZgcgAgChaQggABgVAbQgWAcACAlQABAmAYAaQAWAZAfgBQAggBAVgbQAWgcgCglQgBglgXgaQgXgZgdAAIgCAAg");
        this.shape_75.setTransform(8.8,152.3,1,1,7.9);
    
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFEB33").s().p("AgyBDQgYgagBgmQgCglAWgcQAVgbAggBQAfgBAXAaQAXAaABAlQACAlgWAcQgVAbggABIgCAAQgdAAgWgYg");
        this.shape_76.setTransform(8.8,152.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75}]}).wait(1));
    
        // Layer 54
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AjGAgQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIGHg2QABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAImHA2IgBAAIgDgBg");
        this.shape_77.setTransform(124.8,159.2,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));
    
        // Layer 55
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#000000").s().p("Ai8AoQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIFzhGQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIlzBGIgBAAIgDgBg");
        this.shape_78.setTransform(124.4,153.7,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(1));
    
        // Layer 56
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AgDBcQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAegqgVhCIgcg8QAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAcA9IAAAAQAXBIgiAuQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAAAIgDgBg");
        this.shape_79.setTransform(122.4,155.7,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1));
    
        // Layer 57
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#000000").s().p("AADA0QAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQARglgPgcIgUgXQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAUAXIAAABQATAggUAsQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAIgDgBg");
        this.shape_80.setTransform(115.7,156.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(1));
    
        // Layer 58
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AjhA7QgVgEgqgVIgkgTIgCgCIgBgCIgGhFIABgEIADgCIAEAAIAUAKIAAgBQAeAMAyAIQCgAcEmgKQAmgBAmAQQATAHAGAFQAGAFgDAEQAAAFgIABQiOAjjTAEIhXABQhYAAgWgGgAk8AHIAhARQAoAUAUAFQAfAICkgEQDPgECMghIgSgJQgkgOgjABQkoAJihgbQgzgIgfgMIAAAAIgMgGg");
        this.shape_81.setTransform(52.7,148.3,1,1,7.9);
    
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#FF1213").s().p("AjdAvQgUgFgogUIgigRIgFg5IAMAGIAAAAQAgAMAzAIQChAbEngJQAkgBAjAOIATAJQiMAhjQAEIhZACQhUAAgVgGg");
        this.shape_82.setTransform(52.5,148.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81}]}).wait(1));
    
        // Layer 59
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#000000").s().p("AjgAyIhighIgCgBIgBgDIgIhHIABgDIACgCIADgBQJbAeA0gGIADAAIADADIAAADIgOA2IgBADQgdAbjiALQhKAEg5AAQhyAAgrgPgAk7AIIBfAfQA+AWDegLQDYgLAegXIAMgtQhPAEo0gcg");
        this.shape_83.setTransform(51.5,153.7,1,1,7.9);
    
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#B60C0D").s().p("AjcAnIhegfIgHg9QI0AcBPgEIgLAtQgfAXjYALQhJAEg5AAQhwAAgqgPg");
        this.shape_84.setTransform(51.4,153.8,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83}]}).wait(1));
    
        // Layer 60
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#000000").s().p("AAAASIAAAAQgHAAgFgGQgFgGABgGQAAgHAFgFIAAAAQAFgFAHAAIAAAAQAHABAFAEIAAABQAFAGgBAFIAAABQAAAHgFAFQgFAFgGAAIgBAAgAAAAHQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDIAAAAQABgCgCgCIAAAAQgCgCgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgBAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABABAAIAAAAQgBADACACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAg");
        this.shape_85.setTransform(86.8,163.4,1,1,7.9);
    
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#FFFFFF").s().p("AAAAHIAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgCABgDIAAAAQgBAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACIAAAAQACACgBACIAAAAQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAg");
        this.shape_86.setTransform(86.8,163.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85}]}).wait(1));
    
        // Layer 61
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#000000").s().p("AgnAgQgmgVgEgRQgGgUAggPQAdgNApgFIACAAIACABIAYAVIAAAAQAbAZAIAOQAHAKgDAPQgCAQgMAJQgMAIgQAAQgfAAgwgcgAgygfQgWAKACAMQAEANAgATQBDAmAcgSQAJgGABgMQACgKgEgHQgIgNgZgXIAAgBIgWgTQgmAFgaAMg");
        this.shape_87.setTransform(82.5,160.4,1,1,7.9);
    
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#FF1213").s().p("AgiAXQgggTgEgNQgCgMAWgKQAagMAlgFIAXATIAAABQAZAXAIANQAEAHgCAKQgCAMgIAGQgJAGgNAAQgcAAgtgag");
        this.shape_88.setTransform(82.5,160.4,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87}]}).wait(1));
    
        // Layer 62
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#FFFFFF").s().p("AAAAOQgDgEgEgHQgDgGgBgGQABgGADgBQAEgBADAEQAEAEAEAHQAEAGAAAGQAAAGgEABIgBAAQgDAAgEgDg");
        this.shape_89.setTransform(92.5,161.2,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(1));
    
        // Layer 63
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#000000").s().p("AgJBQIAAAAQgfgEgUgaIgBAAQgTgaAEgfQAEgiAZgUQAagVAeADQAgAEAUAaQAUAZgEAgQgEAhgaAVQgVASgaAAIgJAAgAgHBFQAaACAVgRQAXgSADgdIAAAAQAEgcgRgWQgRgWgcgDIAAAAQgagDgWASQgVASgEAdQgDAbAQAXIAAAAQARAWAcADg");
        this.shape_90.setTransform(86.9,163.3,1,1,7.9);
    
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#FFEB33").s().p("AgHBFQgcgDgRgWIAAAAQgQgXADgbQAEgdAVgSQAWgSAaADIAAAAQAcADARAWQARAWgEAcIAAAAQgDAdgXASQgSAPgWAAIgHAAg");
        this.shape_91.setTransform(86.9,163.3,1,1,7.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,145.2,171.4), null);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgIAAgMQAAgKAIgIQAIgJALAAQALAAAIAJQAJAIgBAKQABAMgJAIQgIAIgLAAQgLAAgIgIg");
        this.shape.setTransform(-0.1,-6.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F34732").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_1.setTransform(0,-0.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgTASQgIgIAAgLQAAgLAIgIQAegJAIAJQAJAIgBALQABALgJAIQgIAIgLAAQgLAAgIgIg");
        this.shape_2.setTransform(-0.1,-6.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F4522F").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_3.setTransform(0,-0.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#F55D2C").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_4.setTransform(0,-0.2);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F56829").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_5.setTransform(0,-0.2);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F67327").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_6.setTransform(0,-0.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F77E24").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_7.setTransform(0,-0.2);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F88921").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_8.setTransform(0,-0.2);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F9951E").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_9.setTransform(0,-0.2);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F9A01B").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_10.setTransform(0,-0.2);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FAAB18").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_11.setTransform(0,-0.2);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FBB615").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_12.setTransform(0,-0.2);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FCC113").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_13.setTransform(0,-0.2);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FCCC10").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_14.setTransform(0,-0.2);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FDD70D").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_15.setTransform(0,-0.2);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FEE20A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_16.setTransform(0,-0.2);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#F5E10A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_17.setTransform(0,-0.2);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#EBE10A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_18.setTransform(0,-0.2);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#E2E00A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_19.setTransform(0,-0.2);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#D9E00A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_20.setTransform(0,-0.2);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#D0DF0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_21.setTransform(0,-0.2);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#C7DF0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_22.setTransform(0,-0.2);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#BDDE0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_23.setTransform(0,-0.2);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#B4DD0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_24.setTransform(0,-0.2);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#ABDD0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_25.setTransform(0,-0.2);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#A2DC0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_26.setTransform(0,-0.2);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#98DC0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_27.setTransform(0,-0.2);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#8FDB0A").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_28.setTransform(0,-0.2);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#6EDB47").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_29.setTransform(0,-0.2);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#4CDB84").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_30.setTransform(0,-0.2);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#2BDBC1").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_31.setTransform(0,-0.2);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#09DBFE").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_32.setTransform(0,-0.2);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#28B6FD").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_33.setTransform(0,-0.2);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#4792FD").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_34.setTransform(0,-0.2);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#656DFC").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_35.setTransform(0,-0.2);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#8448FB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_36.setTransform(0,-0.2);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#9951FB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_37.setTransform(0,-0.2);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#AD5AFB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_38.setTransform(0,-0.2);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#C264FB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_39.setTransform(0,-0.2);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#D66DFB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_40.setTransform(0,-0.2);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#EA76FB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgEgEgKAAQgJAAgPAEg");
        this.shape_41.setTransform(0,-0.2);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#FF7FFB").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_42.setTransform(0,-0.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_2}]},1).to({state:[{t:this.shape_9},{t:this.shape_2}]},1).to({state:[{t:this.shape_10},{t:this.shape_2}]},1).to({state:[{t:this.shape_11},{t:this.shape_2}]},1).to({state:[{t:this.shape_12},{t:this.shape_2}]},1).to({state:[{t:this.shape_13},{t:this.shape_2}]},1).to({state:[{t:this.shape_14},{t:this.shape_2}]},1).to({state:[{t:this.shape_15},{t:this.shape_2}]},1).to({state:[{t:this.shape_16},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape_2}]},1).to({state:[{t:this.shape_18},{t:this.shape_2}]},1).to({state:[{t:this.shape_19},{t:this.shape_2}]},1).to({state:[{t:this.shape_20},{t:this.shape_2}]},1).to({state:[{t:this.shape_21},{t:this.shape_2}]},1).to({state:[{t:this.shape_22},{t:this.shape_2}]},1).to({state:[{t:this.shape_23},{t:this.shape_2}]},1).to({state:[{t:this.shape_24},{t:this.shape_2}]},1).to({state:[{t:this.shape_25},{t:this.shape_2}]},1).to({state:[{t:this.shape_26},{t:this.shape_2}]},1).to({state:[{t:this.shape_27},{t:this.shape_2}]},1).to({state:[{t:this.shape_28},{t:this.shape}]},1).to({state:[{t:this.shape_29},{t:this.shape_2}]},1).to({state:[{t:this.shape_30},{t:this.shape_2}]},1).to({state:[{t:this.shape_31},{t:this.shape_2}]},1).to({state:[{t:this.shape_32},{t:this.shape}]},1).to({state:[{t:this.shape_33},{t:this.shape_2}]},1).to({state:[{t:this.shape_34},{t:this.shape_2}]},1).to({state:[{t:this.shape_35},{t:this.shape_2}]},1).to({state:[{t:this.shape_36},{t:this.shape}]},1).to({state:[{t:this.shape_37},{t:this.shape_2}]},1).to({state:[{t:this.shape_38},{t:this.shape_2}]},1).to({state:[{t:this.shape_39},{t:this.shape_2}]},1).to({state:[{t:this.shape_40},{t:this.shape_2}]},1).to({state:[{t:this.shape_41},{t:this.shape_2}]},1).to({state:[{t:this.shape_42},{t:this.shape}]},1).wait(10));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4,-11.1,8,22);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("ALBQ9QiVgeiQg2IhPBBQhkAQhigHQhdgJhaggIgyhGIAGhAIAHgZIgFgDIAAgGQgjgcgngSQhNgjhRgaQiTAxiLBAQhEAfg8AvQhnAHhlgIQhBABhAgGIhDhOQAAgsgIgrQgJgygQgxIhGg8IiWgGIgRgkIADgVQAxgrAsgxQAdggAYglQgfgjgXgmQgcgwgVgzQAXgCAWAGQA3AMA2AVIAhgJIAlhUIjIkIIASh9IDSDDQABivAyilICsgbIAfjeIAighIATgRIATAAIDRB2QAOgcAKgdQAPgrAMgrIABgCIBIgyIEPgzIAhh1IglgOIgxgzIgYiHIDzAAQDcB5DaB9IAlB1Ig8BwIBvBBIFugsQBSAqBTApQAmBVAWBZQAaBnAKBsQguBggpBhQAcAsAnAdQCJBmCVBWIhvBPIhZglIhhBwIiMCsICiCaIAJCEIhBB4IiaBHQhugGhrgUg");
        this.shape.setTransform(140.7,111.1);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,281.5,222.2), null);
    
    
    (lib.Tween52 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(-69.4,-62.5,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.4,-62.5,139.2,125.1);
    
    
    (lib.Tween51 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap41();
        this.instance.parent = this;
        this.instance.setTransform(-18.5,-31.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.5,-31.1,37.1,62.4);
    
    
    (lib.Tween49 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap40();
        this.instance.parent = this;
        this.instance.setTransform(-23.8,-14.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23.8,-14.8,48,30);
    
    
    (lib.Tween37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap33();
        this.instance.parent = this;
        this.instance.setTransform(-28.7,-25.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-28.7,-25.1,58,50);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap32();
        this.instance.parent = this;
        this.instance.setTransform(-22.4,-44.1,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.4,-44.1,45,88.6);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap38();
        this.instance.parent = this;
        this.instance.setTransform(-22,-11.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22,-11.7,44,23.5);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D1DFE6").s().p("AAJA+QgQgFgWgXQgIAHgRgBQgTgCgIgKIAbAGQAdgBAIgjQAGA4AkgEQAwgMgCg0QgdgGg+gQIg5gPIAEgMICbAhIgCArQgMAsgqAHIgRgCg");
        this.shape.setTransform(-1.9,-2.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AADA5QgVgMgFgNQgTAMgUgIQgUgIgHgWQgGgPALgXQAOggAEABIBEAOQBHAOAQAFQAIAZgMAZQgKAWgVAPQgLAHgNAAQgNAAgOgHg");
        this.shape_1.setTransform(-2.6,-2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FC415A").s().p("AgoAyQgpgNgMgGQgcgOgbghIgIgMIAAgCQAggPAtgHQApgGAoADQAhADAUAFQAdAGAUAOQAWAPAfAjQgWANglAKQgnALgnAAQgeAAgegHg");
        this.shape_2.setTransform(-3.1,5.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D30225").s().p("Ag0BvQgigDgjgSQgugXgagvQgPgbgGgmQgCgLgBgaQgBggAHABIGgBYIALAEQAIAJgSATQgrAxgkAWQg8AkhNAAQgUAAgWgDg");
        this.shape_3.setTransform(0.1,0.4);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#31B5E2").s().p("AjPgnIgCABQgCACgBADQgEgEABgDQAAgHAUACQAtADCoAiQC/AlAIASQgbgEmNhSg");
        this.shape_4.setTransform(-0.3,-7);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7AE1FA").s().p("AgkgJIipglICcAQQCsAZBTAzQg9gQi1gng");
        this.shape_5.setTransform(0.7,-7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22,-11.7,44,23.5);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap24();
        this.instance.parent = this;
        this.instance.setTransform(-53.5,-53.4,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-53.5,-53.4,107,107);
    
    
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Bitmap20();
        this.instance.parent = this;
        this.instance.setTransform(-63.3,-73.8,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63.3,-73.9,126.7,147.8);
    
    
    (lib.Symbol12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap28();
        this.instance.parent = this;
        this.instance.setTransform(-0.4,-0.9,1.406,1.406);
    
        this.instance_1 = new lib.Bitmap29();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.3,-11,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(4));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.4,-0.9,97,52);
    
    
    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0483AF").s().p("AHfBuIhwgYQhngVhbgOQkcgrjOAbQj8A7hWjNIASASQAZAWAhARQBqA3CYgHQFNgRDHAnQBZARBMASQBAAPASADQA5AJAfgIQA7gQAyhIQguBYgTASQgcAYgzAAQgPAAgRgCg");
        this.shape.setTransform(68.3,55.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0488B6").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_1.setTransform(68.3,55.3);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#048DBC").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_2.setTransform(68.3,55.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0492C3").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_3.setTransform(68.3,55.3);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0497CA").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_4.setTransform(68.3,55.3);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#049CD0").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_5.setTransform(68.3,55.3);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#04A1D7").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_6.setTransform(68.3,55.3);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#04A6DE").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_7.setTransform(68.3,55.3);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#04ABE4").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_8.setTransform(68.3,55.3);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#04B0EB").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_9.setTransform(68.3,55.3);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#04B5F2").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_10.setTransform(68.3,55.3);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#04BAF8").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_11.setTransform(68.3,55.3);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#04BFFF").s().p("AHfBuIhwgYQhngVhbgOQkcgrjOAbQj8A7hWjNIASASQAZAWAhARQBqA3CYgHQFNgRDHAnQBZARBMASQBAAPASADQA5AJAfgIQA7gQAyhIQguBYgTASQgcAYgzAAQgPAAgRgCg");
        this.shape_12.setTransform(68.3,55.3);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#04BBFA").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_13.setTransform(68.3,55.3);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#04B7F4").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_14.setTransform(68.3,55.3);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#04B3EF").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_15.setTransform(68.3,55.3);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#04AFEA").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_16.setTransform(68.3,55.3);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#04A7DF").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_17.setTransform(68.3,55.3);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#04A3DA").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_18.setTransform(68.3,55.3);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#049FD4").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_19.setTransform(68.3,55.3);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#049BCF").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_20.setTransform(68.3,55.3);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#0493C4").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_21.setTransform(68.3,55.3);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#048FBF").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_22.setTransform(68.3,55.3);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#048BBA").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_23.setTransform(68.3,55.3);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#0487B4").s().p("AHfBuIhxgYQhlgWhcgNQkcgrjOAbQj8A7hVjOIASATQAYAWAhASQBqA3CZgIQFMgRDHAnQBaARBLASQBAAOASAEQA5AJAfgIQA6gRAzhHQgvBZgSARQgcAYgzAAQgPABgRgDg");
        this.shape_24.setTransform(68.3,55.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));
    
        // Layer 4
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#92E2F7").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_25.setTransform(70.1,16.8);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#92E4F8").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_26.setTransform(70.1,16.8);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#92E7F8").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_27.setTransform(70.1,16.8);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#92E9F9").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_28.setTransform(70.1,16.8);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#92ECFA").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_29.setTransform(70.1,16.8);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#92EEFA").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_30.setTransform(70.1,16.8);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#92F1FB").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_31.setTransform(70.1,16.8);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#92F3FC").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_32.setTransform(70.1,16.8);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#92F5FC").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_33.setTransform(70.1,16.8);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#92F8FD").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_34.setTransform(70.1,16.8);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#92FAFE").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_35.setTransform(70.1,16.8);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#92FDFE").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_36.setTransform(70.1,16.8);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#92FFFF").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_37.setTransform(70.1,16.8);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#92FBFE").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_38.setTransform(70.1,16.8);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#92F9FD").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_39.setTransform(70.1,16.8);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#92F7FD").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_40.setTransform(70.1,16.8);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#92F0FB").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_41.setTransform(70.1,16.8);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#92EAF9").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_42.setTransform(70.1,16.8);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#92E8F9").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_43.setTransform(70.1,16.8);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#92E6F8").s().p("AJbCVQg4gqhEghQhxg3ixgyQhEgUhWgHQjEgTjyApIhGAMQgoAJgdAKQglATgXAJQgrAQgDggQgFg0BGgmQAjgTAjgJQGQhxF7B4QC+A8BuBRIAbAVQAeAbAOAdQASAkgIAMQgDAFgGAAQgLAAgYgSg");
        this.shape_44.setTransform(70.1,16.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).wait(1));
    
        // Layer 5
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#00AED6").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_45.setTransform(69.2,33.2);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#00B3D9").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_46.setTransform(69.2,33.2);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#00B8DD").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_47.setTransform(69.2,33.2);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#01BDE0").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_48.setTransform(69.2,33.2);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#01C2E4").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_49.setTransform(69.2,33.2);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#01C7E7").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_50.setTransform(69.2,33.2);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#01CCEB").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_51.setTransform(69.2,33.2);
    
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#01D1EE").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_52.setTransform(69.2,33.2);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#01D6F1").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_53.setTransform(69.2,33.2);
    
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#02DBF5").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_54.setTransform(69.2,33.2);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#02E0F8").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_55.setTransform(69.2,33.2);
    
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#02E5FC").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_56.setTransform(69.2,33.2);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#02EAFF").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_57.setTransform(69.2,33.2);
    
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#02E6FC").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_58.setTransform(69.2,33.2);
    
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#02E2FA").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_59.setTransform(69.2,33.2);
    
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#02DEF7").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_60.setTransform(69.2,33.2);
    
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#01DAF4").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_61.setTransform(69.2,33.2);
    
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#01D2EF").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_62.setTransform(69.2,33.2);
    
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#01CEEC").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_63.setTransform(69.2,33.2);
    
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#01CAE9").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_64.setTransform(69.2,33.2);
    
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#01C6E6").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_65.setTransform(69.2,33.2);
    
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#01BEE1").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_66.setTransform(69.2,33.2);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#00BADE").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_67.setTransform(69.2,33.2);
    
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#00B6DB").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_68.setTransform(69.2,33.2);
    
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#00B2D9").s().p("AGqFCQibgoh/gSQivgaikAFQg0AChAAGIhOAMQgsAGgjgGQhMgNg0guQg2gvgUhJQgliKAehXQAhhgB1gmQC8g8D0AEQFaAGEJCbIBZA6QArAdATAcQAuBAgoCLQgeBAgNAaQgWArgVAUQggAfg4AAQggAAgpgKg");
        this.shape_69.setTransform(69.2,33.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,138.4,66.6);
    
    
    (lib.sprite2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgHgIAAgMQAAgKAHgIQAIgJALAAQALAAAIAJQAJAIAAAKQAAAMgJAIQgIAIgLAAQgLAAgIgIg");
        this.shape.setTransform(-0.1,-5.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F34732").s().p("AgSAxQgKhEgIggQgIgfANgNQANgOASAAQASAAAOAOQANANgIAZQgHAZgOBBQgOBCgEAKIgBABQgGAAgJg9gAgUhSQgIAJAAALQAAALAIAIQAIAIAMAAQAKAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgKAAQgMAAgIAIg");
        this.shape_1.setTransform(0,0.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.sprite2, new cjs.Rectangle(-4,-10.2,8.1,22), null);
    
    
    (lib.cvgTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgNBKQgegHgQgaQgQgZAHgfQAGgfAagSQAZgQAcAGQAdAHAPAYQAPAYgGAcQgCAJgGADQgEADgNgDIhJgQQgBAMAHAIQAHAJANADQAMACAOgDQAQgEAEABQAHABAEAGQADAFgBAIQgDANgVAHQgLADgNAAQgKAAgMgCgAgJglQgJAFgEALIA1AMQACgLgGgJQgGgJgLgCIgHAAQgGAAgGADg");
        this.shape.setTransform(90.9,6.8,0.893,0.893,0.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("ABIBXQgLgDgEgHQgDgIACgQIAIgwQADgOgEgKQgEgIgJgCQgLgCgGAHQgHAHgCAQIgIAvQgDAQgGAGQgHAHgJgCQgLgCgEgIQgEgJADgPIAHguQADgSgDgHQgDgJgKgBQgLgCgGAGQgHAHgCAQIgIAvQgDAQgGAHQgHAGgKgBQgLgCgEgJQgEgIADgPIAOhUQACgPAHgHQAGgHALACQAFAAAFAFQAFAFACAHQAIgGAJgCQAIgCALABQANACAJAHQAKAHAGALQALgJALgDQALgDAMACQAXAEAKARQAKARgEAZIgKA8QgDAPgGAHQgFAFgIAAIgEAAg");
        this.shape_1.setTransform(73.3,3.2,0.893,0.893,0.3,0,0,-0.3,-0.1);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AAnBNQgGAAgFgFQgFgFgCgHQgIAIgJACQgKAEgKgCQgbgDgQgXQgQgXAEggQADgfAWgUQAVgTAbADQALABAHAFQAIAEAGAJQAEgGAGgDQAFgDAHABQALABADAIQAFAIgCAQIgKBUQgBAQgGAGQgGAHgIAAIgDgBgAgRgcQgIAIgDAQQgBAPAGAKQAHAKAMABQALACAIgJQAJgIACgQQACgNgHgLQgGgLgMgBIgDAAQgJAAgIAHg");
        this.shape_2.setTransform(55.7,0.8,0.893,0.893,0.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgFBlQgogCgYgeQgXgfADgrQADguAcgbQAcgZAsADQAcACAVAOQAUAOgCAPQAAAIgGAGQgGAGgIgBQgEAAgRgLQgRgLgOAAQgVgCgOAPQgOAPgCAbQgCAaAMASQAMARAVACQARABALgKQAMgKABgRIgPgBQgQgBgHgFQgGgGABgKQABgKAGgEQAHgFARABIAgADQAPAAAIAIQAGAGgBAQQgDApgaAXQgXAWgjAAIgIgBg");
        this.shape_3.setTransform(39.7,-3,0.893,0.893,0.3,0,0,-0.4,-0.1);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAbBCQgFgHAAgQIABgvQAAgSgFgIQgFgHgNAAQgKgBgGAIQgGAIAAARIAAAvQAAAQgGAIQgFAHgLAAQgLgBgFgHQgFgIAAgPIABhVQAAgPAGgIQAFgHALAAQAGAAAFADQAFADAEAHQAIgHAIgDQAKgEALABQAZAAANAOQANAPAAAbIgBA8QgBARgFAHQgFAHgLAAQgKAAgGgIg");
        this.shape_4.setTransform(16.3,-2,0.893,0.893,0.3,0,0,-0.3,-0.2);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgvBYQgWgVAAggQgBggAUgWQAUgWAegBQAdAAAUAUQAVATAAAdQAAAKgEAEQgFAEgLAAIhMABQACAMAJAHQAIAGANAAQANgBAOgGQAOgIAEAAQAHAAAFAFQAEAEABAIQAAANgTAMQgSALgaABQggAAgUgVgAgRAAQgHAGgDAMIA4gCQgCgLgHgFQgIgHgLAAQgKAAgIAHgAgrg3QgDgEAAgGQAAgFABgDQACgDAEgEIAdgXIAGgEIAEgBIAGABIAGADIAdAXQAFADACADQACAEAAAEQAAAHgEADQgDAEgGAAIgFgBIgHgDIgYgNIgWAOQgDADgEAAIgFACQgGAAgEgEg");
        this.shape_5.setTransform(2.1,-4.8,0.893,0.893,0.3,0,0,-0.6,0);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgJBhQgGgHgBgQIgDhUQgBgRAFgHQAEgIALgBQALAAAFAIQAGAGAAAQIAEBVQABAQgGAIQgEAHgLABQgKAAgFgHgAgRg8QgHgGgBgLQgBgKAHgIQAHgHAKgBQAKAAAHAGQAHAIABAKQAAAKgHAHQgGAIgKABQgKgBgHgGg");
        this.shape_6.setTransform(-7.7,-4.5,0.893,0.893,0.3,0,0,0.1,-0.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgFBIQgGgFgGgMIgrhbIgCgGIgBgGQAAgJAFgGQAGgHAIAAQAIAAAGAEQAFAFAEALIAbBHIAShNQADgJAEgFQAEgEAIgBQAJAAAGAFQAFAFABAKIAAAGIgCAIIgeBeQgEAMgFAFQgFAEgJABIgCABQgHAAgFgEg");
        this.shape_7.setTransform(-16.3,-1.6,0.893,0.893,0.3,0,0,0.4,-0.4);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgnBlQgSgHgBgNQgBgIAFgGQAEgGAJgBQAFAAAOAEQAOAEAMgBQAQgCAHgKQAIgKgCgRIgBgFQgGALgJAFQgIAGgMACQgZACgVgTQgUgTgDgfQgDgfARgYQARgXAcgDQAIgBAKACQAIADAIAHQACgGAGgEQADgEAHgBQAKgBAGAHQAGAHABAPIAJBUQACAYAAANQgBANgFAKQgHAQgQAKQgPAKgXACIgOABQgRAAgOgFgAgEg+QgMACgGAKQgIALACAPQADARAHAHQAKAJALgBQAMgCAHgJQAGgMgBgPQgCgQgJgIQgIgIgKAAIgCAAg");
        this.shape_8.setTransform(-37,2.6,0.893,0.893,0.3,0,0,-0.1,-0.2);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgyBIQgHgHgCgQIgLhTQgBgPADgJQAFgIALgCQAGgBAFADQAFACAFAHQAFgIAKgFQAJgFAKgBQAZgDAQAMQAOAMAFAcIAIA7QACAPgFAJQgEAIgKACQgMABgFgHQgHgHgCgPIgGgvQgDgSgGgGQgHgHgLACQgMABgDAJQgEAIABARIAHAvQACAPgEAJQgEAIgLABIgEABQgIAAgFgGg");
        this.shape_9.setTransform(-51.2,1.7,0.893,0.893,0.3,0,0,-0.2,-0.4);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgpBeQgYgSgFggQgGgiARgWQARgZAfgFQAegFAXASQAYASAFAgQAFAhgQAYQgRAZgfAEIgMABQgXAAgSgOgAgFgCQgMABgGALQgHALADAPQADAQAJAJQAJAIAMgCQALgBAHgMQAGgLgCgQQgDgPgJgJQgIgGgIAAIgFABgAg6gxQgFgDAAgGQgBgEABgEQACgEADgEIAagbIAFgEQACgCADAAQADgBADABIAGADIAfARQAGADACADIADAHQABAHgDAEQgDAFgGAAIgGAAIgHgCIgYgKIgVASIgGAEIgFACIgDAAQgEAAgDgDg");
        this.shape_10.setTransform(-65.7,0.8,0.893,0.893,0.3,0,0,-0.7,-0.2);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgpBVQgfgXgIgsQgJgrAVghQAVghAogIQAYgEARAFQASAGACAMQACAIgFAHQgDAHgIABQgFABgNgBQgLgCgLACQgTAEgKATQgKASAFAaQAGAaAPANQAQANAVgFQAKgBAMgIQANgIADAAQAIgBAFAEQAHAFABAHQADANgPAOQgQANgZAEQgLADgLAAQgbAAgWgRg");
        this.shape_11.setTransform(-79.3,3.8,0.893,0.893,0.3,0,0,-0.6,-0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 4
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#19A9FF").s().p("AESCoQgogJgWggIgCACQgNAPgVAAIgJgBQgagEgLgXIgBgBIgBABQgNAOgVAAIgJAAQgagFgLgWIgBgCIgBABQgNAPgVAAIgJgBQgUgEgLgOQgMAKgRAAIgGAAQgNgCgKgGIAAAAQgLADgNAAIgJAAQgogFgZgiIgEgHIgFAFQggAdguAAIgLAAQg1gEgggoQgfgnAEg4QAEg7AlghQAhgfAyAAIAMAAQAmADAaASQAhAXgCAhIgCAMQAbgYAhAAIALABQAQACAPAIIAAAAQAJgDAIAAIAGABQAYACAMATQANgNATAAIAJABQALACALAHIAAAAQAIgBAJAAIAOABQATADARALIAFAEIAHgDQAKgDALAAQAIAAAHACQAlAGARAcQADAFADAIIAGgFQAagRAdAAQAKAAANACQApAJAWAjQAVAigJApQgDAQgJAJQACAIgDALQgGAegmAMQgRAFgQAAQgPAAgOgEg");
        this.shape_12.setTransform(64.3,0.8,0.893,0.893,0.3,0,0,-0.3,0);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#19A9FF").s().p("AizCPQgSAAgNgKQgNgJgIgTIgrhcIAAgBIgEgKIgCgJIAAgBQgBgVANgQQAOgQAVgBIAEgBQASAAANAMQAGAEAFAJQAFgKAGgFQAMgNATgBIAEAAIgBgHQgBgWAPgRQAPgRAXgBIACAAQAWAAAPAPQAKAJADAKIALgKIAbgXQAHgGAGgCQAIgEAJAAIABAAQAHAAAIADQAIADAGAEIAeAXQAKAIAEAHQAGALAAALIgBAJQANgMAUAAIABAAQAMAAALAGIACgBQAQgFAPAAIABAAQAnAAAWAZQAVAXgBAmIgBA9QAAAagLAOQgOAVgaAAIgBAAQgagBgOgVIgDgFIgEAFQgOAUgaAAIgBAAQgYAAgOgSIgHAFQgaAQgiAAIgCAAQgoAAgdgaIgDAGQgNAVgbABIgCAAQgZAAgOgTIgHgNQgHARgJAIQgNANgUABgAgqguIAAACIACgCIgBgCg");
        this.shape_13.setTransform(0,-3.8,0.893,0.893,0.3,0,0,0,0.8);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#19A9FF").s().p("AkgCBQgogegLg4QgLg2AbgsQAcgrA1gLQAOgCAMAAQAPAAAQAEQALAEAKAHIAJgMIAZgbIAMgJQAIgFAIgBIAHgBIAJABQAHACAIAEIAgASQALAGAGAIQAHAIACANQACAMgFAMIABAAIADgHQAKgXAagDIAHgBQAJAAAIADIACgBQAMgHAUgDIANAAQAeAAAUAQIAJAKIACgEQAZgjApgEIAJgBQANABAKADIABAAQAJgGALgBIAGAAQAXAAAOAQQAMAPACAZIAJBTQADAbgBAQQgCASgHAPQgLAZgXAOQgVAOgeADIgSABQgXAAgSgIQgjgNgEggQgGADgGAAIgHABQgWAAgOgPIgEgGIgDAHQgLAVgbAFIgHAAQgVAAgPgQIgCgDQgXAfgpAHIgSABQgbAAgXgNQgFAHgHAFQgWASggAHQgOACgNAAQgmABgfgXgAjegIQgHABgDAGQgEAIADARQADAPAHAGQADADAGAAIAEgBQAEABAJgGQAOgIAHgCQgDgYAFgSQgFACgEAAIgKABIgPgBIgIAAg");
        this.shape_14.setTransform(-58.6,2.6,0.893,0.893,0.3,0,0,-0.3,0.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));
    
        // Layer 5
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#1071AB").s().p("AESCoQgngIgXghIgCADQgOAOgUAAIgJgBQgbgEgKgXIgBgBIgBABQgOAOgUAAIgJAAQgagFgLgWIgBgCIgBABQgNAPgVAAIgJgBQgUgEgKgOQgNAKgRAAIgGAAQgNgCgKgGIAAAAQgMAEgMAAIgJgBQgogEgZgjIgEgHIgFAFQghAdgtAAIgLAAQg1gEgggoQgfgnAEg4QAEg7AlghQAhgfAyAAIAMABQAlACAbASQAhAXgCAhQAAAFgCAHQAbgYAhAAIALABQAQACAPAIIAAAAQAJgDAIAAIAGABQAYADAMASQANgNATAAIAJABQAMACAKAIIAAgBQAIgBAJAAIAOABQAUADAQALIAFAEIAHgDQAKgDALAAIAPACQAkAGASAcQADAFADAIIAGgFQAagRAdAAQAKAAANACQApAJAWAjQAVAigJApQgDAQgJAJQACAHgCAMQgIAfglALQgPAFgSAAQgPAAgOgEg");
        this.shape_15.setTransform(64.4,3.1,0.893,0.893,0.3,0,0,-0.2,0.1);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#1071AB").s().p("AizCPQgSAAgNgKQgLgHgKgVIgrhcIAAgBIgEgKIgCgJIAAgBQgBgVANgQQAOgQAVgBIAEAAQASAAANALQAHAFAEAIQAFgJAGgGQAMgNATgBIAEAAIgBgHQgBgXAPgQQAQgRAWgBIADAAQAVAAAPAPQAJAJAFAKIAKgKIAbgXQAGgFAIgDQAHgEAJAAIABAAQAIAAAHADQAHACAHAFIAeAXQAKAIAEAIQAGAKAAALIgBAJQANgMAUAAIABAAQAMAAALAGIACgBQANgFASAAIACAAQAlAAAXAZQAVAXgBAmIAAA9QgBAagKAOQgPAVgaAAIgBAAQgagBgOgVIgDgFIgEAFQgOAVgaAAIgBAAQgYgBgOgSIgHAFQgaAQgiABIgCAAQgnAAgegbIgDAGQgNAVgbABIgCAAQgZAAgOgTQgDgEgEgJQgHARgJAIQgNANgTABgAgqguIAAACIACgCIgBgCg");
        this.shape_16.setTransform(0,-1.5,0.893,0.893,0.3,0,0,0,0.8);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#1071AB").s().p("AkgCBQgogegLg4QgKg2AbgsQAbgsA1gKQAMgCAOAAQAQAAAPAFQALADAKAIIAJgMIAZgbQAGgGAGgEQAIgEAIgCIAHAAIAJABQAHABAIAEIAhASQAKAGAGAIQAHAIACAMQACANgFALIABABIADgIQALgWAZgDIAHgBQAIAAAJADIACgBQAMgHAUgDIAOgBQAdAAAUARIAJAJIACgDQAagjAogEIAJgBQAKAAANAEIABABQAKgHAKgBIAGAAQAXAAAOARQAMAOACAYIAJBVQADAagBAPQgCATgHAPQgLAYgXAPQgVAOgeACIgSABQgXAAgSgGQgjgOgEgfIgTAEQgVgBgPgQIgEgEIgDAFQgLAXgaADIgIABQgWAAgOgQIgCgDQgYAggoAFIgSACQgaAAgYgOQgFAIgHAFQgWATggAFQgOADgNAAQgmAAgfgWgAjegHQgGAAgEAGQgEAIADARQAEAQAGAGQADACAGAAIAFAAQACAAAKgGQAOgIAHgDQgDgXAFgSIgIADIgLABIgPgBIgIgBg");
        this.shape_17.setTransform(-58.6,4.8,0.893,0.893,0.3,0,0,-0.3,0.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-200.1,-39.9,338.4,88.4);
    
    
    (lib.Path_39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgiAYQgPgKAAgOQAAgMAPgKQAPgKATAAQAVAAAOAKQAPAKAAAMQAAAOgPAKQgOAJgVAAQgTAAgPgJg");
        this.shape.setTransform(5,3.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,10,6.6), null);
    
    
    (lib.Path_37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgiAXQgPgJAAgOQAAgNAPgJQAOgKAUAAQAUAAAPAKQAPAJAAANQAAAOgPAJQgPAKgUAAQgUAAgOgKg");
        this.shape.setTransform(5,3.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,10,6.6), null);
    
    
    (lib.Path_35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgkAYQgPgKAAgOQAAgMAPgKQAPgKAVAAQAVAAAPAKQAQAKAAAMQAAAOgQAKQgPAJgVAAQgVAAgPgJg");
        this.shape.setTransform(5.2,3.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,10.4,6.6), null);
    
    
    (lib.Path_9_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#134202").s().p("ADJBjQg3gshIACQhjALhTAAQhnAAgigYQgSgMAEgMIGmiIQAFAAAWAbQAbAjAPANQALALAKAgQAJAigBAeQAAAzgYAAQgOAAgWgSg");
        this.shape.setTransform(26,11.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,52.2,23.5), null);
    
    
    (lib.Path_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#72D8F3").s().p("AFuDNQgNgVgLgoQgIgdgVgkQgMgWgbglQgdgogVgYQgegigegUQgWgOgXgNQgugZgpgNQiFgsiOAmQgpAMgtATIgTAKQgNAGgHAAQgPAAACgJIAGgKQA4gpBdgUQBLgPBEADQC+AaBrBZQAlAeAcAnQAQAWAUAfQAbAoAVA6QAVA6gCAZQgBAMgFAAQgEAAgGgLg");
        this.shape.setTransform(38.2,21.6);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,76.5,43.2), null);
    
    
    (lib.Path_4_9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#134202").s().p("Ag1AQQgYgHAAgJQAAgIAYgHQAWgGAfAAQAgAAAXAGQAWAHAAAIQAAAJgWAHQgXAGggAAQgfAAgWgGg");
        this.shape.setTransform(7.8,2.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0,0,15.5,4.4), null);
    
    
    (lib.Path_3_8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#134202").s().p("Ag2AQQgWgHAAgJQAAgIAWgHQAXgGAfAAQAgAAAXAGQAWAHAAAIQAAAJgWAHQgXAGggAAQgfAAgXgGg");
        this.shape.setTransform(7.7,2.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,15.5,4.4), null);
    
    
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgfBBQgagRgJgPQgVghAXgrQAWgqAogCQAcgBATAKIAAAAIAgAaIAAAXQgCAdgKAdIAAAAQgMAfgSARIgBABIgPAKIgBAAQgXgGgagRg");
        this.shape.setTransform(-19.6,-4.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("ABbCFQhpgUhxgmQgZgJgbgMQgagHgcgSQgdgSgKgQQgZgoAagwQAagwAugDQAggBAWAMIABAAQAGAEAcAZIACACIATAPIAWARQBxBICBApQBAAUApAGQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgCAEIgEABIgBAAQgqgGhBgVQiBgphzhJQgJgGgNgLIgMgKIAAAOQgCAhgLAeQgNAhgVATIgBAAIgKAHQAVAJAVAHQBvAmBpAUQCDAXAugVIADAAIACAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAFIgDADQgXAKgrAAQgvAAhHgMgAjGiEQgpACgWAqQgWArAVAiQAIAOAbARQAaARAYAGIAAAAIAPgKIABgBQATgRAMgeIgBAAQALgdACgeIgBgXIgfgaIAAAAQgSgKgZAAIgFABg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CFC4B7").s().p("AAlBjQhpgUhvgmQgVgHgVgJIAKgHIABAAQAVgSANgiQALgeACghIgBgNIANAJQANALAJAGQB0BKCAAoQBBAVAqAGIAAAAIgFAsIgDAAQgWAKgoAAQguAAhFgMg");
        this.shape_2.setTransform(5.6,2.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-28.5,-14.5,57,29);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // <Path>_37
        this.instance = new lib.Path_37();
        this.instance.parent = this;
        this.instance.setTransform(1.5,-3.7,1,1,0,0,0,5,3.2);
        this.instance.alpha = 0.75;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E80263").s().p("Ag3A1QgXgWAAgfQAAgeAXgWQAXgWAgAAQAhAAAYAWQAWAWAAAeQAAAfgWAWQgYAWghAAQggAAgXgWg");
        this.shape.setTransform(0.2,-0.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#EE1876").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_1.setTransform(0.2,-0.2);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F42E89").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_2.setTransform(0.2,-0.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F9439B").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_3.setTransform(0.2,-0.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF59AE").s().p("Ag3A1QgXgWAAgfQAAgeAXgWQAXgWAgAAQAhAAAYAWQAWAWAAAeQAAAfgWAWQgYAWghAAQggAAgXgWg");
        this.shape_4.setTransform(0.2,-0.2);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FB4AA1").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_5.setTransform(0.2,-0.2);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F73C95").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_6.setTransform(0.2,-0.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F01F7C").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_7.setTransform(0.2,-0.2);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#EC1170").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_8.setTransform(0.2,-0.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(21));
    
        // <Path>_4_9
        this.instance_1 = new lib.Path_4_9();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.3,5.5,1,1,0,0,0,7.8,2.2);
        this.instance_1.alpha = 0.43;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.1,-7.7,16.3,15.4);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // <Path>_35
        this.instance = new lib.Path_35();
        this.instance.parent = this;
        this.instance.setTransform(1.5,-4,1,1,0,0,0,5.2,3.3);
        this.instance.alpha = 0.75;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0B8FE0").s().p("Ag3A0QgXgVgBgfQABgeAXgVQAXgVAgAAQAhAAAXAVQAXAVAAAeQAAAfgXAVQgXAWghAAQggAAgXgWg");
        this.shape.setTransform(0.1,-0.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#17A9E8").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_1.setTransform(0.1,-0.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#23C4F0").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_2.setTransform(0.1,-0.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#2EDEF7").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_3.setTransform(0.1,-0.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#3AF8FF").s().p("Ag3A0QgXgVgBgfQABgeAXgVQAXgVAgAAQAhAAAXAVQAXAVAAAeQAAAfgXAVQgXAWghAAQggAAgXgWg");
        this.shape_4.setTransform(0.1,-0.7);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#32E6FA").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_5.setTransform(0.1,-0.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#2AD5F5").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_6.setTransform(0.1,-0.7);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1BB2EA").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_7.setTransform(0.1,-0.7);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#13A1E5").s().p("Ag3A0QgXgWgBgeQABgdAXgWQAXgVAgAAQAhAAAXAVQAYAWAAAdQAAAegYAWQgXAWghAAQggAAgXgWg");
        this.shape_8.setTransform(0.1,-0.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},35).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));
    
        // Layer 5
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("rgba(19,66,2,0.431)").s().p("Ag2AQQgWgHAAgJQAAgIAWgGQAXgHAfAAQAgAAAXAHQAWAGAAAIQAAAJgWAHQgXAGggAAQgfAAgXgGg");
        this.shape_9.setTransform(-0.3,5.9);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8,-8,16,16.2);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Path_39();
        this.instance.parent = this;
        this.instance.setTransform(0.9,-4.2,1,1,0,0,0,5,3.3);
        this.instance.alpha = 0.75;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF9E0A").s().p("Ag3A1QgYgWAAgfQAAgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape.setTransform(-0.3,-0.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFAC0A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_1.setTransform(-0.3,-0.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFBA0A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_2.setTransform(-0.3,-0.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFC90A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_3.setTransform(-0.3,-0.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFD70A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_4.setTransform(-0.3,-0.7);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFE50A").s().p("Ag3A1QgYgWAAgfQAAgeAYgWQAXgWAgAAQAhAAAXAWQAYAWAAAeQAAAfgYAWQgXAWghAAQggAAgXgWg");
        this.shape_5.setTransform(-0.3,-0.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFD90A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_6.setTransform(-0.3,-0.7);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFCD0A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_7.setTransform(-0.3,-0.7);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFC20A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_8.setTransform(-0.3,-0.7);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFB60A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_9.setTransform(-0.3,-0.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFAA0A").s().p("Ag3A1QgYgWABgfQgBgeAYgWQAXgWAgAAQAhAAAYAWQAXAWgBAeQABAfgXAWQgYAWghAAQggAAgXgWg");
        this.shape_10.setTransform(-0.3,-0.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).wait(39));
    
        // <Path>_3_8
        this.instance_1 = new lib.Path_3_8();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0.6,6.1,1,1,0,0,0,7.7,2.2);
        this.instance_1.alpha = 0.43;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.3,-8.2,17,17);
    
    
    (lib.Symbol20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween52("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(69.4,62.8,1,0.996);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.06,skewX:1.3,x:71.1,y:59.1},12).to({scaleY:1.03,skewX:3.1,x:72.9,y:61},14).to({scaleY:1.11,x:73.2,y:55.9},5).to({scaleY:1.11,skewX:2.1,x:72.2,y:56},9).to({scaleY:1,skewX:0,x:69.4,y:62.8},14).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0.5,139.2,124.6);
    
    
    (lib.Symbol19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween49("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(52.8,17.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.74,x:49.6,y:17.7},12).to({scaleX:0.82,x:51.3,y:18.2},2).to({scaleX:0.82,x:51.6},2).to({scaleX:0.93,x:54.1,y:18.7},4).to({scaleX:1,x:56,y:19},2).to({scaleX:0.74,x:51.1,y:18.5},2).to({scaleX:0.84,x:52.4},5).to({scaleX:0.82,x:51.6},2).to({scaleX:0.93,x:53.3,y:18.2},4).to({scaleX:1,x:54.3,y:17.7},2).to({scaleX:0.74,x:49.6},2).to({scaleX:0.84,x:50.9},4).to({scaleX:0.82,x:49.8,y:17.2},2).to({scaleX:0.93,x:51.3},2).to({scaleX:1,x:52.8},6).wait(2));
    
        // Layer 1
        this.instance_1 = new lib.Tween51("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(18.5,31.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3,x:20.1,y:32.2},22).to({rotation:0,x:18.5,y:31.2},31).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,77,62);
    
    
    (lib.Symbol18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Symbol20("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(69.4,68.6,1,1,0,0,0,69.4,62.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 1
        this.instance_1 = new lib.Bitmap13();
        this.instance_1.parent = this;
        this.instance_1.setTransform(17.7,101.6,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));
    
        // Layer 2
        this.instance_2 = new lib.Symbol19("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(135.4,31.2,1,1,0,0,0,38.2,31.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,174.2,135.4);
    
    
    (lib.Symbol15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 10
        this.instance = new lib.Bitmap37();
        this.instance.parent = this;
        this.instance.setTransform(19.4,0,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 3
        this.instance_1 = new lib.Tween32("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(23.3,61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.07,scaleY:1.07,rotation:15,x:34.8,y:62},14).to({startPosition:0},6).to({scaleX:1,scaleY:1,rotation:0,x:23.3,y:61},9).to({scaleX:1.07,scaleY:1.07,rotation:15,x:34.8,y:62},7).to({scaleX:1,scaleY:1,rotation:0,x:23.3,y:61},6).to({scaleX:1.07,scaleY:1.07,rotation:15,x:34.8,y:62},6).to({scaleX:1,scaleY:1,rotation:0,x:23.3,y:61},6).wait(1));
    
        // Layer 6
        this.instance_2 = new lib.Tween37("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(171.6,96.5,1.218,1.196,13.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-31.3,x:162.8,y:90.2},14).to({startPosition:0},6).to({rotation:13.7,x:171.6,y:96.5},9).to({rotation:-31.3,x:162.8,y:90.2},7).to({rotation:13.7,x:171.6,y:96.5},6).to({rotation:-31.3,x:162.8,y:90.2},6).to({rotation:13.7,x:171.6,y:96.5},6).wait(1));
    
        // Layer 9
        this.instance_3 = new lib.Bitmap36();
        this.instance_3.parent = this;
        this.instance_3.setTransform(4.9,0.8,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.9,0,212.5,223.5);
    
    
    (lib.Symbol14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Tween27("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(87.6,119.2);
    
        this.instance_1 = new lib.Tween28("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(87.6,119.2,1.342,1.342);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.34,scaleY:1.34},12).wait(43));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).to({scaleX:1.18,scaleY:1.18,y:121.4},4).to({scaleX:1.34,scaleY:1.34,y:119.2},4).to({scaleX:1.18,scaleY:1.18,y:121.4},4).to({scaleX:1.34,scaleY:1.34,y:119.2},4).to({scaleX:1.18,scaleY:1.18,y:121.4},4).to({scaleX:1.34,scaleY:1.34,y:119.2},4).to({scaleX:1.18,scaleY:1.18,y:121.4},4).to({scaleX:1.34,scaleY:1.34,y:119.2},6).to({scaleX:1,scaleY:1},8).wait(1));
    
        // Layer 11
        this.instance_2 = new lib.Symbol12("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(134.3,35.9,1,1,0,0,0,48,25.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));
    
        // Layer 9
        this.instance_3 = new lib.Bitmap35();
        this.instance_3.parent = this;
        this.instance_3.setTransform(119.9,37.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));
    
        // Layer 5
        this.instance_4 = new lib.Symbol15();
        this.instance_4.parent = this;
        this.instance_4.setTransform(102,166.4,1,1,0,0,0,102,110.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.9,9.6,212.5,269.6);
    
    
    (lib.Symbol13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Symbol14("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(102,139.3,1,1,0,0,0,102,139.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:139.2,scaleY:0.98,skewX:0.5,x:103.8,y:147.2,startPosition:2},2).to({regY:139.3,scaleY:1.06,skewX:2.7,x:111.3,y:117.2,startPosition:10},8).to({regX:102.4,regY:139.4,scaleY:1.04,skewX:2.6,x:111.6,y:120.4,startPosition:12},2).to({regX:102,regY:139.3,scaleY:1.04,skewX:2.7,x:111.2,y:121.8,startPosition:13},1).to({scaleY:1.02,skewX:2,x:108.9,y:127.2,startPosition:15},2).to({regY:139.2,scaleY:0.95,skewX:0,x:102,y:146.4,startPosition:18},3).to({regY:139.3,scaleY:1,y:139.3,startPosition:24},6).wait(31));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.9,9.6,212.5,269.6);
    
    
    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3 copy
        this.instance = new lib.Tween18("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(36.3,6.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // Layer 4 copy
        this.instance_1 = new lib.Tween19("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.4,19.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));
    
        // Layer 5 copy
        this.instance_2 = new lib.Tween17("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(5.7,31.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.6,-1.7,46.9,41.7);
    
    
    (lib.Symbol2_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#036177").s().p("AAeBHIgigvIhKAuQgZAEgBgQIADgRIABAAQAEALAUgEIBKgtIAiAvQAmAtALgGIAAAAQAGARgJAEIgDABQgNAAgggogAAkgOIA7gtIAHgHIACAGQAEAJgQAOIgvAkIgJgNgAhShfQACgKAFgFIAyBPIgLAIg");
        this.shape_43.setTransform(109.7,40.2);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#03B3E2").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIALgHIgzhPIgEgGQAGgXAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgIAHIg6AsIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_44.setTransform(109.9,37.8);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#147288").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_45.setTransform(109.4,40.2);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#14C0E7").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_46.setTransform(109.9,37.8);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#248298").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_47.setTransform(109.4,40.2);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#24CCEC").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_48.setTransform(109.9,37.8);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#3593A9").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_49.setTransform(109.4,40.2);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#35D9F1").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_50.setTransform(109.9,37.8);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#46A4BA").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_51.setTransform(109.4,40.2);
    
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#46E6F5").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_52.setTransform(109.9,37.8);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#56B4CA").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_53.setTransform(109.4,40.2);
    
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#56F2FA").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_54.setTransform(109.9,37.8);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#67C5DB").s().p("AAeBHIgigvIhKAuQgZAEgBgQIADgRIABAAQAEALAUgEIBKgtIAiAvQAmAtALgGIAAAAQAGARgJAEIgDABQgNAAgggogAAkgOIA7gtIAHgHIACAGQAEAJgQAOIgvAkIgJgNgAhShfQACgKAFgFIAyBPIgLAIg");
        this.shape_55.setTransform(109.7,40.2);
    
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#67FFFF").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIALgHIgzhPIgEgGQAGgXAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgIAHIg6AsIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_56.setTransform(109.9,37.8);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#5BB9CF").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_57.setTransform(109.4,40.2);
    
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#5BF6FB").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_58.setTransform(109.9,37.8);
    
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#4EACC2").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_59.setTransform(109.4,40.2);
    
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#4EECF8").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_60.setTransform(109.9,37.8);
    
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#42A0B6").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_61.setTransform(109.4,40.2);
    
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#42E3F4").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_62.setTransform(109.9,37.8);
    
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#29879D").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_63.setTransform(109.4,40.2);
    
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#29D0ED").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_64.setTransform(109.9,37.8);
    
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#1C7A90").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_65.setTransform(109.4,40.2);
    
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#1CC6E9").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_66.setTransform(109.9,37.8);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#106E84").s().p("AAgBHIgigvIhKAuQgYAEgCgQIADgRIABAAQAFALAUgEIBJgtIAjAvQAlAtALgGIABAAQAFARgIAEIgEABQgNAAgggogAAngOIAAgBIACgBIABgBIAogeIAPgMQANAIgPAOIgwAkIgIgNgAg0hAIgcgfQADgKAEgFIAzBPg");
        this.shape_67.setTransform(109.4,40.2);
    
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#10BDE6").s().p("AAeBKIgigvIhKAtQgUAEgFgLIgBgFIADgQIA/gsIgTgoIAeAhIgzhPQACgdAPADQAIABAGAGIA5BQIAdgWQAggWALgDQANgDADADQACABAEANQADAHgHAJIgXATIgnAdIgCABIgBABIgBABIAIANQAXAiAJASQAQAggLAHIgBAAIgDABQgMAAghgog");
        this.shape_68.setTransform(109.9,37.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_44},{t:this.shape_43}]},9).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).wait(5));
    
        // Layer 4 copy 2
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#496602").s().p("AgnBjQg+gIgKgvIABgLIACAGQAMAXAhALQAaAIAhgBQAYgBAjgHQAkgOAMg1QAIgdgBgoQACAHAAAJQADB3g5AWQgnAIgeAAQgPAAgNgCgAhKAPQAAgGABgNQACgNgBgHQgBgTABgJQABgQAIgLQALgQAagEQAfgFAnASQAOAGAFAKQAEAKAAARIgCgFQgEgKgPgHQgQgHgbgEQgggEgTAHQgXAIAAAUIAABGQgCgFgBgFg");
        this.shape_69.setTransform(85.5,33.5);
    
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#9FCD43").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKACASQAAAHgBANQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_70.setTransform(85.3,31);
    
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#A6D44A").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_71.setTransform(85.3,31);
    
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#ADDB51").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_72.setTransform(85.3,31);
    
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#B4E258").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_73.setTransform(85.3,31);
    
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#BCEA60").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_74.setTransform(85.3,31);
    
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#C3F167").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_75.setTransform(85.3,31);
    
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#CAF86E").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_76.setTransform(85.3,31);
    
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#D1FF75").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKACASQAAAHgBANQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_77.setTransform(85.3,31);
    
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#C9F76D").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_78.setTransform(85.3,31);
    
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#C0EE64").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_79.setTransform(85.3,31);
    
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#B8E65C").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_80.setTransform(85.3,31);
    
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#B0DE54").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_81.setTransform(85.3,31);
    
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#A7D54B").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKABAmQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_82.setTransform(85.3,31);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_70}]},6).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_70}]},1).wait(9));
    
        // Layer 4
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#496602").s().p("AgnBjQg+gIgKgvIABgLIACAGQAMAXAhALQAaAIAhgBQAYgBAjgHQAkgOAMg1QAIgdgBgoQACAHAAAJQADB3g5AWQgnAIgeAAQgPAAgNgCgAhKAPQAAgGABgNQACgNgBgHQgBgTABgJQABgQAIgLQALgQAagEQAfgFAnASQAOAGAFAKQAEAKAAARIgCgFQgEgKgPgHQgQgHgbgEQgggEgTAHQgXAIAAAUIAABGQgCgFgBgFg");
        this.shape_83.setTransform(85.5,33.5);
    
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#9FCD43").s().p("Ag9BiQgggLgMgWIgDgHQgEgLABgNIADggIADgkIAEgYIAHgXQANgWAcgCIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQAAAogHAeQgNA1gjANQgjAHgYABIgIABQgdAAgXgIgAgXhKQgaAFgMAQQgHAKgCAQQgBAKACASQAAAHgBANQgCANABAHQAAAFACAEQAEAIAKAHQAMAIARACQAsAHAOgFQAbgLAHg1QADgRAAgOQAAgRgEgJQgEgKgPgHQgegOgZAAIgOABg");
        this.shape_84.setTransform(85.3,31);
    
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#496602").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNIgBgFQgFgKgOgHQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_85.setTransform(85.4,32);
    
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#526F0A").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_86.setTransform(85.4,32);
    
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#5A7713").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_87.setTransform(85.4,32);
    
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#63801B").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_88.setTransform(85.4,32);
    
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#6B8824").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_89.setTransform(85.4,32);
    
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#74912C").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_90.setTransform(85.4,32);
    
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#7C9935").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_91.setTransform(85.4,32);
    
        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#85A23D").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNIgBgFQgFgKgOgHQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_92.setTransform(85.4,32);
    
        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#7B9833").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_93.setTransform(85.4,32);
    
        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#718E29").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_94.setTransform(85.4,32);
    
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#678420").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_95.setTransform(85.4,32);
    
        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#5D7A16").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_96.setTransform(85.4,32);
    
        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#53700C").s().p("AgmByQg9gIgLgvIABgLQgEgMABgNIADgeIADgmIAEgYIAHgWQANgXAcgBIBAAIQBCAJAIADQAOAGAEAEQAIAJABAWIABAFQABAHAAAJQAEB3g6AWQgnAIgeAAQgPAAgNgCgAgvg6QgWAIAAAUIgBBGQAEAIAKAGQAMAIARACQAsAHAOgFQAbgKAHg1QADgSAAgNQAAgDgUgTQgRgHgbgEIgWgBQgRAAgMAEg");
        this.shape_97.setTransform(85.4,32);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83}]}).to({state:[{t:this.shape_85}]},6).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_85}]},1).wait(9));
    
        // Layer 3 copy
        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#84033E").s().p("AAABaQgvgBgggeQghgeAAgqIABgIQADAjAdAbQAhAeAuABQAuABAigeQAdgaAEgjIAAAHQgBAqghAdQggAeguAAIgBAAgAhFgVQAAgcAUgUQAUgUAcAAQAbABAUAUQAUAUgBAcIAAAIQgDgWgQgQQgUgUgbgBQgcAAgUAUQgRARgDAWIAAgJg");
        this.shape_98.setTransform(59.9,33.4);
    
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#E83D5E").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXIABgIQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_99.setTransform(59.9,30.3);
    
        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#EC5274").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRAEgfQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_100.setTransform(59.9,30.3);
    
        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#F0668A").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRAEgfQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_101.setTransform(59.9,30.3);
    
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#F47BA1").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRAEgfQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_102.setTransform(59.9,30.3);
    
        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#F790B7").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRAEgfQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_103.setTransform(59.9,30.3);
    
        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#FBA4CD").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRAEgfQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_104.setTransform(59.9,30.3);
    
        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#FFB9E3").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXIABgIQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_105.setTransform(59.9,30.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98}]}).to({state:[{t:this.shape_99}]},3).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).wait(13));
    
        // Layer 3
        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#84033E").s().p("AAABaQgvgBgggeQghgeAAgqIABgIQADAjAdAbQAhAeAuABQAuABAigeQAdgaAEgjIAAAHQgBAqghAdQggAeguAAIgBAAgAhFgVQAAgcAUgUQAUgUAcAAQAbABAUAUQAUAUgBAcIAAAIQgDgWgQgQQgUgUgbgBQgcAAgUAUQgRARgDAWIAAgJg");
        this.shape_106.setTransform(59.9,33.4);
    
        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#E83D5E").s().p("AAABnQgugBgigeQgdgbgCgkIgBgJQAAgqAigeQAhgeAuAAQAuABAhAeQAhAeAAAqIAAALQgFAkgdAaQggAdgtAAIgCAAgAgxgmQgUAUgBAbIABAJQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXIABgIQAAgbgUgUQgTgUgbgBQgcAAgUAUg");
        this.shape_107.setTransform(59.9,30.3);
    
        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#84033E").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_108.setTransform(59.9,31.2);
    
        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#991553").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_109.setTransform(59.9,31.2);
    
        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#AD2868").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_110.setTransform(59.9,31.2);
    
        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#C23A7D").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_111.setTransform(59.9,31.2);
    
        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#D64C91").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_112.setTransform(59.9,31.2);
    
        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#EA5FA6").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_113.setTransform(59.9,31.2);
    
        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#FF71BB").s().p("AAABwQgvgBghgeQgggeAAgrIABgIIgBgJQAAgqAigeQAhgeAuAAQAvABAgAeQAhAeAAArIAAAKIAAAHQgBArghAdQggAeguAAIgBAAgAgxgdQgRARgDAVQADAWAQARQAUAUAcAAQAbAAATgTQARgRADgXQgDgVgQgQQgTgUgbgBQgcAAgUAUg");
        this.shape_114.setTransform(59.9,31.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106}]}).to({state:[{t:this.shape_108}]},3).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_108}]},1).wait(13));
    
        // Layer 2
        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#952405").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAMABARAQIARARQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_115.setTransform(33.4,32.6);
    
        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#FFA852").s().p("AhqBpQgRgEgIgMQAAgJACgLQAGgfAagvIAvhMQALgTAMgBIAHABQAPAEAVARQAWAPAXAXQAyAwAQAgIAEALQAEATgUANQgRAMgYADIgzADQgrABgfAFQgXAEgQAAIgQgBgAgehJQgMAIgKAUIgPAhQgKAUgEAMQgDALAAAJQAAAIACAIIACADQAMAWA5gCQArgCAdgLQATgGACgNQACgOgPgWQgKgPgbgdIgHgJIgRgRQgRgQgMgBQgFAAgEADg");
        this.shape_116.setTransform(33.3,30.1);
    
        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#A63516").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAFABAKAGQALAIAUATQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_117.setTransform(33.4,32.6);
    
        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FFB660").s().p("AhqBoQgRgDgIgMQAAgJACgMQAGgfAagvIAvhLQAcgUACABQAPAEAVAQQAWAQAXAXQAyAvAQAhIAEAKQAEATgUAOQgRAMgYADIgzACQgrACgfAFQgXADgQAAIgQgBgAgehJQgMAHgKAUIgPAhQgKAVgEAMQgDAKAAAJQAAAJAEAKQAMAXA5gDQArgCAdgKQATgHACgNQACgNgPgXQgKgPgiglIgRgRQgHgHgHgEQgKgGgFAAQgFAAgEADg");
        this.shape_118.setTransform(33.3,30.1);
    
        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#B64526").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAFABAKAGQALAIAUATQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_119.setTransform(33.4,32.6);
    
        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FFC46E").s().p("AhqBoQgRgDgIgMQAAgJACgMQAGgfAagvIAvhLQAcgUACABQAPAEAVAQQAWAQAXAXQAyAvAQAhIAEAKQAEATgUAOQgRAMgYADIgzACQgrACgfAFQgXADgQAAIgQgBgAgehJQgMAHgKAUIgPAhQgKAVgEAMQgDAKAAAJQAAAJAEAKQAMAXA5gDQArgCAdgKQATgHACgNQACgNgPgXQgKgPgiglIgRgRQgHgHgHgEQgKgGgFAAQgFAAgEADg");
        this.shape_120.setTransform(33.3,30.1);
    
        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#C75637").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAFABAKAGQALAIAUATQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_121.setTransform(33.4,32.6);
    
        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FFD27C").s().p("AhqBoQgRgDgIgMQAAgJACgMQAGgfAagvIAvhLQAcgUACABQAPAEAVAQQAWAQAXAXQAyAvAQAhIAEAKQAEATgUAOQgRAMgYADIgzACQgrACgfAFQgXADgQAAIgQgBgAgehJQgMAHgKAUIgPAhQgKAVgEAMQgDAKAAAJQAAAJAEAKQAMAXA5gDQArgCAdgKQATgHACgNQACgNgPgXQgKgPgiglIgRgRQgHgHgHgEQgKgGgFAAQgFAAgEADg");
        this.shape_122.setTransform(33.3,30.1);
    
        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#D86748").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAFABAKAGQALAIAUATQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_123.setTransform(33.4,32.6);
    
        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FFDF89").s().p("AhqBoQgRgDgIgMQAAgJACgMQAGgfAagvIAvhLQAcgUACABQAPAEAVAQQAWAQAXAXQAyAvAQAhIAEAKQAEATgUAOQgRAMgYADIgzACQgrACgfAFQgXADgQAAIgQgBgAgehJQgMAHgKAUIgPAhQgKAVgEAMQgDAKAAAJQAAAJAEAKQAMAXA5gDQArgCAdgKQATgHACgNQACgNgPgXQgKgPgiglIgRgRQgHgHgHgEQgKgGgFAAQgFAAgEADg");
        this.shape_124.setTransform(33.3,30.1);
    
        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#E87758").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAFABAKAGQALAIAUATQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_125.setTransform(33.4,32.6);
    
        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FFED97").s().p("AhqBoQgRgDgIgMQAAgJACgMQAGgfAagvIAvhLQAcgUACABQAPAEAVAQQAWAQAXAXQAyAvAQAhIAEAKQAEATgUAOQgRAMgYADIgzACQgrACgfAFQgXADgQAAIgQgBgAgehJQgMAHgKAUIgPAhQgKAVgEAMQgDAKAAAJQAAAJAEAKQAMAXA5gDQArgCAdgKQATgHACgNQACgNgPgXQgKgPgiglIgRgRQgHgHgHgEQgKgGgFAAQgFAAgEADg");
        this.shape_126.setTransform(33.3,30.1);
    
        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#F98869").s().p("AhtBjQgUgFgIgVQgDgIAKgVQgCALAAAJQAIAMARAEQATADAkgGQAfgFArgBIAzgDQAYgDARgMQAUgNgEgTQASAhgVATQgRARgegDQgUgBgWACIhIAKQgcAEgUAAQgQAAgLgDgAhSgEQAEgMAKgVIAPghQAKgUAMgIQAEgDAFAAQAMABARAQIARARQgogagLAOQgUAVgRAaQgRAbgEAUQAAgJADgKg");
        this.shape_127.setTransform(33.4,32.6);
    
        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FFFBA5").s().p("AhqBpQgRgEgIgMQAAgJACgLQAGgfAagvIAvhMQALgTAMgBIAHABQAPAEAVARQAWAPAXAXQAyAwAQAgIAEALQAEATgUANQgRAMgYADIgzADQgrABgfAFQgXAEgQAAIgQgBgAgehJQgMAIgKAUIgPAhQgKAUgEAMQgDALAAAJQAAAIACAIIACADQAMAWA5gCQArgCAdgLQATgGACgNQACgOgPgWQgKgPgbgdIgHgJIgRgRQgRgQgMgBQgFAAgEADg");
        this.shape_128.setTransform(33.3,30.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115}]}).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).wait(16));
    
        // Layer 7
        this.instance = new lib.Bitmap26();
        this.instance.parent = this;
        this.instance.setTransform(10.9,12.4,1.406,1.406);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));
    
        // Layer 1
        this.instance_1 = new lib.Symbol8();
        this.instance_1.parent = this;
        this.instance_1.setTransform(69.2,33.2,1,1,0,0,0,69.2,33.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,138.4,66.6);
    
    
    (lib.sprite3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 6
        this.instance = new lib.Symbol2();
        this.instance.parent = this;
        this.instance.setTransform(0,0.8,1.35,1.35,0,0,0,0,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.sprite3, new cjs.Rectangle(-22.1,-30.7,50,58.2), null);
    
    
    (lib.cvgTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.cvgTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-3.9,135.8,1,1,-5,0,0,1.5,137);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.5,regY:0.6,rotation:-4.7,x:-11.1,y:-0.4},0).wait(1).to({rotation:-4,x:-9.4,y:-0.5},0).wait(1).to({rotation:-3,x:-6.9},0).wait(1).to({rotation:-1.6,x:-3.7,y:-0.6},0).wait(1).to({rotation:-0.1,x:0,y:-0.5},0).wait(1).to({rotation:1.6,x:4,y:-0.4},0).wait(1).to({rotation:3.4,x:8.1,y:-0.1},0).wait(1).to({rotation:5.1,x:12.3,y:0.4},0).wait(1).to({rotation:6.9,x:16.3,y:0.9},0).wait(1).to({rotation:8.4,x:20.1,y:1.5},0).wait(1).to({rotation:9.8,x:23.3,y:2.1},0).wait(1).to({rotation:11,x:26,y:2.7},0).wait(1).to({rotation:11.7,x:27.7,y:3.1},0).wait(1).to({regX:1.6,regY:137,rotation:12,x:-3.9,y:135.9},0).wait(1).to({regX:5.5,regY:0.6,rotation:11.7,x:27.7,y:3.1},0).wait(1).to({rotation:11,x:26.1,y:2.7},0).wait(1).to({rotation:10,x:23.5,y:2.2},0).wait(1).to({rotation:8.6,x:20.4,y:1.5},0).wait(1).to({rotation:7.1,x:16.8,y:1},0).wait(1).to({rotation:5.4,x:12.8,y:0.4},0).wait(1).to({rotation:3.6,x:8.6,y:0},0).wait(1).to({rotation:1.9,x:4.5,y:-0.3},0).wait(1).to({rotation:0.1,x:0.4,y:-0.5},0).wait(1).to({rotation:-1.4,x:-3.4,y:-0.6},0).wait(1).to({rotation:-2.8,x:-6.6,y:-0.5},0).wait(1).to({rotation:-4,x:-9.3},0).wait(1).to({rotation:-4.7,x:-11.1,y:-0.4},0).wait(1).to({regX:1.4,regY:137,rotation:-5,x:-3.9,y:135.9},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.8,-18.7,188.8,43);
    
    
    (lib.ClipGroup_5copy5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.filters = [new cjs.ColorFilter(1, 1, 0, 1, 57, 85, 0, 0)];
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5copy5, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.ClipGroup_5copy4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -255, 155, -96, 0)];
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5copy4, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.ClipGroup_5copy3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.filters = [new cjs.ColorFilter(0.140625, 1, 0, 1, -255, 111, 237, 0)];
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5copy3, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.ClipGroup_5copy2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 170, 0, 0)];
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5copy2, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.ClipGroup_5copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol6();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 170, 0, 0)];
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5copy, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.ClipGroup_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 5
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(13.5,13);
        this.instance.cache(-12,-11,24,22);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(3.5,4.1,20,18.1), null);
    
    
    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Symbol3();
        this.instance.parent = this;
        this.instance.setTransform(4.8,0.1,1,1,0,0,0,72.5,85.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));
    
        // Layer 2
        this.instance_1 = new lib.Tween3("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-16.8,-4,1,1,0,0,0,25.8,12.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-24.7},5).to({rotation:0},4).wait(1));
    
        // Layer 3
        this.instance_2 = new lib.Bitmap17();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-66,59.3,2.183,2.183);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-71.1,-85.6,148.9,175.5);
    
    
    (lib.chobun = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Symbol4();
        this.instance.parent = this;
        this.instance.setTransform(-191,98.2);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},3).to({_off:true},1).wait(43).to({_off:false,skewY:180,x:23.7,alpha:0},0).to({alpha:1},3).wait(1).to({skewY:0,x:77.8},0).to({_off:true},1).wait(9));
    
        // Layer 1
        this.instance_1 = new lib.Tween2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.9,88.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.1,regY:1.3,y:90.2,startPosition:1},0).wait(1).to({x:20.6,startPosition:2},0).wait(1).to({x:20.1,startPosition:3},0).wait(1).to({x:19.5,startPosition:4},0).wait(1).to({x:18.7,startPosition:5},0).wait(1).to({x:17.7,y:90.3,startPosition:6},0).wait(1).to({x:16.6,startPosition:7},0).wait(1).to({x:15.2,startPosition:8},0).wait(1).to({x:13.7,y:90.4,startPosition:9},0).wait(1).to({x:12,y:90.5,startPosition:0},0).wait(1).to({x:10.1,startPosition:1},0).wait(1).to({x:8,y:90.6,startPosition:2},0).wait(1).to({x:5.8,y:90.7,startPosition:3},0).wait(1).to({x:3.4,startPosition:4},0).wait(1).to({x:0.8,y:90.8,startPosition:5},0).wait(1).to({x:-1.9,y:90.9,startPosition:6},0).wait(1).to({x:-4.9,y:91,startPosition:7},0).wait(1).to({x:-8,y:91.1,startPosition:8},0).wait(1).to({x:-11.3,y:91.2,startPosition:9},0).wait(1).to({x:-14.8,y:91.4,startPosition:0},0).wait(1).to({x:-18.5,y:91.5,startPosition:1},0).wait(1).to({x:-22.4,y:91.6,startPosition:2},0).wait(1).to({x:-26.4,y:91.8,startPosition:3},0).wait(1).to({x:-30.6,y:91.9,startPosition:4},0).wait(1).to({x:-35,y:92.1,startPosition:5},0).wait(1).to({x:-39.6,y:92.2,startPosition:6},0).wait(1).to({x:-44.3,y:92.4,startPosition:7},0).wait(1).to({x:-49.2,y:92.5,startPosition:8},0).wait(1).to({x:-54.3,y:92.7,startPosition:9},0).wait(1).to({x:-59.6,y:92.9,startPosition:0},0).wait(1).to({x:-65.1,y:93.1,startPosition:1},0).wait(1).to({x:-70.7,y:93.3,startPosition:2},0).wait(1).to({x:-76.6,y:93.5,startPosition:3},0).wait(1).to({x:-82.6,y:93.7,startPosition:4},0).wait(1).to({x:-88.7,y:93.9,startPosition:5},0).wait(1).to({x:-95.1,y:94.1,startPosition:6},0).wait(1).to({x:-101.6,y:94.3,startPosition:7},0).wait(1).to({x:-108.4,y:94.5,startPosition:8},0).wait(1).to({x:-115.3,y:94.8,startPosition:9},0).wait(1).to({x:-122.3,y:95,startPosition:0},0).wait(1).to({x:-129.6,y:95.3,startPosition:1},0).wait(1).to({x:-137,y:95.5,startPosition:2},0).wait(1).to({x:-144.6,y:95.8,startPosition:3},0).wait(1).to({x:-152.4,y:96,startPosition:4},0).wait(1).to({x:-160.4,y:96.3,startPosition:5},0).wait(1).to({x:-168.6,y:96.6,startPosition:6},0).wait(1).to({x:-176.9,y:96.9,startPosition:7},0).wait(1).to({x:-185.4,y:97.2,startPosition:8},0).wait(1).to({regX:0,regY:0,x:-194.2,y:96.2,startPosition:0},0).wait(4).to({skewY:180},0).wait(1).to({regX:0.1,regY:1.3,y:97.5,startPosition:1},0).wait(1).to({x:-193.8,startPosition:2},0).wait(1).to({x:-193.2,startPosition:3},0).wait(1).to({x:-192.4,startPosition:4},0).wait(1).to({x:-191.3,startPosition:5},0).wait(1).to({x:-190,startPosition:6},0).wait(1).to({x:-188.4,startPosition:7},0).wait(1).to({x:-186.6,startPosition:8},0).wait(1).to({x:-184.6,startPosition:9},0).wait(1).to({x:-182.3,startPosition:0},0).wait(1).to({x:-179.7,startPosition:1},0).wait(1).to({x:-177,startPosition:2},0).wait(1).to({x:-174,startPosition:3},0).wait(1).to({x:-170.7,startPosition:4},0).wait(1).to({x:-167.2,startPosition:5},0).wait(1).to({x:-163.5,startPosition:6},0).wait(1).to({x:-159.5,startPosition:7},0).wait(1).to({x:-155.3,startPosition:8},0).wait(1).to({x:-150.9,startPosition:9},0).wait(1).to({x:-146.2,startPosition:0},0).wait(1).to({x:-141.3,startPosition:1},0).wait(1).to({x:-136.1,startPosition:2},0).wait(1).to({x:-130.7,startPosition:3},0).wait(1).to({x:-125,startPosition:4},0).wait(1).to({x:-119.1,startPosition:5},0).wait(1).to({x:-113,startPosition:6},0).wait(1).to({x:-106.6,startPosition:7},0).wait(1).to({x:-100,startPosition:8},0).wait(1).to({x:-93.1,startPosition:9},0).wait(1).to({x:-86,startPosition:0},0).wait(1).to({x:-78.7,startPosition:1},0).wait(1).to({x:-71.1,startPosition:2},0).wait(1).to({x:-63.3,startPosition:3},0).wait(1).to({x:-55.3,startPosition:4},0).wait(1).to({x:-47,startPosition:5},0).wait(1).to({x:-38.4,startPosition:6},0).wait(1).to({x:-29.6,startPosition:7},0).wait(1).to({x:-20.6,startPosition:8},0).wait(1).to({x:-11.4,startPosition:9},0).wait(1).to({x:-1.9,startPosition:0},0).wait(1).to({x:7.8,startPosition:1},0).wait(1).to({x:17.8,startPosition:2},0).wait(1).to({regX:0,regY:0,x:28.2,y:96.2,startPosition:0},0).to({startPosition:0},3).to({skewY:0,x:76.9},1).to({x:70.7,y:95.4},1).to({x:20.9,y:88.9},8).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.2,3.2,148.6,175.5);
    
    
    (lib.Symbol21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Symbol9("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(27.1,24.1,1,1,0,7.8,-172.2,19.8,19.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(4.3,1.1,43.5,45.6);
    
    
    (lib.Symbol11copy5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5copy5();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol11copy4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5copy4();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol11copy3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5copy3();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol11copy2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5copy2();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol11copy = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5copy();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.ClipGroup_5();
        this.instance.parent = this;
        this.instance.setTransform(9.9,0,0.998,0.998,7.5,0,0,13.3,4.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.4,rotation:-17.5,x:10,y:0.1},25).to({regX:13.3,rotation:7.5,x:9.9,y:0},29).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2,-1.3,22.1,20.2);
    
    
    (lib.Symbol10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 18
        this.instance = new lib.Symbol11copy5();
        this.instance.parent = this;
        this.instance.setTransform(88.2,93.1,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[88.2,93,80.2,99.5,69.4,102.5,49.2,108.2,30.8,97.7,12.4,87.6,6.9,67.2,1.2,46.9,11.5,28.5,21.9,10.2,42.2,4.5,62.4,-1.1,80.8,9.3,99.1,19.6,104.8,39.9,107,47.8,106.8,55.3,106.5,65.4,102,75,101.2,76.7,100.2,78.5,96.1,85.6,90.4,91]}},109).wait(1));
    
        // Layer 15
        this.instance_1 = new lib.Symbol11copy4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(54.3,104.3,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[54.3,104.5,44.1,104.2,33.9,99.4,14.9,90.3,7.9,70.3,0.8,50.7,10,31.7,19.1,12.6,39,5.5,58.7,-1.5,77.8,7.6,96.8,16.7,103.8,36.6,110.8,56.4,101.7,75.4,98.2,82.8,93.1,88.4,86.2,95.8,76.5,100,74.7,100.8,72.8,101.5,65.3,104.1,57.9,104.5]}},109).wait(1));
    
        // Layer 14
        this.instance_2 = new lib.Symbol11copy3();
        this.instance_2.parent = this;
        this.instance_2.setTransform(10.6,77.2,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[10.6,77.2,6,68.2,5.1,57.4,3.5,36.4,17.2,20.4,30.8,4.4,51.8,2.8,72.8,1.2,88.9,14.9,104.9,28.5,106.5,49.6,108.2,70.5,94.4,86.5,80.8,102.5,59.7,104.2,38.7,105.8,22.7,92.1,16.6,86.7,12.4,80.3]}},109).wait(1));
    
        // Layer 12
        this.instance_3 = new lib.Symbol11copy2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(14.4,23.7,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[14.4,23.8,20.6,15.2,30.5,9.4,48.8,-1.1,69.1,4.4,89.4,9.7,99.9,28,110.5,46.4,105,66.6,99.6,87,81.3,97.5,63,108.1,42.8,102.6,22.5,97.2,11.9,78.9,1.3,60.6,6.8,40.4,9,32.4,13.1,25.8]}},109).wait(1));
    
        // Layer 10
        this.instance_4 = new lib.Symbol11copy();
        this.instance_4.parent = this;
        this.instance_4.setTransform(66.1,3.4,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[66,3.5,75.9,5.6,84.9,11.9,102.2,24,105.9,44.7,109.6,65.3,97.5,82.6,85.4,99.9,64.6,103.6,44,107.3,26.7,95.2,9.3,83.1,5.7,62.4,2,41.7,14.1,24.4,26.2,7.1,46.9,3.4,55,2,62.8,3.1]}},109).wait(1));
    
        // Layer 4
        this.instance_5 = new lib.Symbol11();
        this.instance_5.parent = this;
        this.instance_5.setTransform(102.7,33.1,1,1,0,0,0,11.1,1.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:11,regY:0.4,guide:{path:[102.6,33.2,106.7,42.6,106.7,53.5,106.7,74.6,91.8,89.6,76.9,104.5,55.8,104.5,34.8,104.5,19.9,89.6,5,74.6,5,53.5,5,32.5,19.9,17.6,34.8,2.7,55.8,2.7,76.9,2.7,91.8,17.6,96.6,22.5,99.9,28]}},109).wait(1));
    
        // Layer 2
        this.instance_6 = new lib.Path_5();
        this.instance_6.parent = this;
        this.instance_6.setTransform(68,22.3,0.998,0.998,0,0,0,38,21.8);
        this.instance_6.alpha = 0.859;
        this.instance_6.cache(-2,-2,81,47);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));
    
        // Layer 1
        this.instance_7 = new lib.Tween20("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(56.3,53.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:360},109).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.7,0.1,114.2,122);
    
    
    (lib.sprite4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1 copy 2
        this.instance = new lib.sprite3();
        this.instance.parent = this;
        this.instance.setTransform(-3.9,-4.8,0.839,0.8,64.2);
        this.instance.alpha = 0.73;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.8,rotation:65.5,x:-0.7,y:-5.7,alpha:0.762},1).to({rotation:66.9,x:2.3,y:-6.7,alpha:0.789},1).to({rotation:75.9,x:21.5,y:-10.8,alpha:0.969},6).to({scaleX:0.84,rotation:77.4,x:25,y:-11.3,alpha:1},1).to({scaleX:0.84,rotation:79,x:28.1,y:-11.6},1).to({rotation:83.2,x:37.6,y:-12},3).to({rotation:85.5,x:40.9,y:-12.1},1).to({rotation:98.5,x:78.4,y:-6.9},12).to({scaleY:0.8,rotation:99.8,x:81.3,y:-6.2},1).to({scaleX:0.84,rotation:102,x:87.1,y:-4.4},2).to({rotation:102.3,x:90,y:-3.4},1).to({rotation:103.1,x:95.8,y:-1.4},2).to({rotation:103.5,x:98.7,y:-0.4},1).to({rotation:103.8,x:101.1,y:0.4,alpha:0.941},1).to({rotation:105.3,x:115.2,y:5.7,alpha:0.559},6).to({rotation:105.5,x:117.5,y:6.6,alpha:0.5},1).to({rotation:106.8,x:133.8,y:13.1,alpha:0},7).to({_off:true},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-38.8,-35.9,75,68);
    
    
    (lib.phaohoa2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 69
        this.instance = new lib.sprite4("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(25.3,-71.4,0.707,0.707,0,155.5,-24.5);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 67
        this.instance_1 = new lib.sprite4("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(19,-52,0.708,0.708,0,-169.6,10.4);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 65
        this.instance_2 = new lib.sprite4("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-15.2,-32.1,0.708,0.708,0,-82.6,97.4);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 63
        this.instance_3 = new lib.sprite4("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(2.6,-32.2,0.71,0.71,0,-119.3,60.7);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 61
        this.instance_4 = new lib.sprite4("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(10.8,-54,0.997,0.997,35.4);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 59
        this.instance_5 = new lib.sprite4("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-1.8,-42.1,0.99,0.99,0,-100.2,79.8);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 57
        this.instance_6 = new lib.sprite4("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(9,-51.2,0.991,0.991,0,-139.9,40.1);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 55
        this.instance_7 = new lib.sprite4("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-13.3,-83.2,0.993,0.993,-122.8);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 53
        this.instance_8 = new lib.sprite4("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-28.6,-85,0.658,0.658,0,24.3,-155.7);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 51
        this.instance_9 = new lib.sprite4("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-34,-64.3,0.659,0.659,0,-15,165);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 49
        this.instance_10 = new lib.sprite4("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-29.7,-43.3,0.711,0.711,0,-44.3,135.7);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 47
        this.instance_11 = new lib.sprite4("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.9,-95.5,0.886,0.886,-61.7);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 45
        this.instance_12 = new lib.sprite4("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(19.8,-82.6,0.887,0.887,-33.6);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 43
        this.instance_13 = new lib.sprite4("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-12.2,-46.4,0.992,0.992,0,-58.6,121.4);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 41
        this.instance_14 = new lib.sprite4("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(-18.6,-52.4,0.994,0.994,0,-48.7,131.3);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 39
        this.instance_15 = new lib.sprite4("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(-20.6,-62.3,0.996,0.996,0,-13,167);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 37
        this.instance_16 = new lib.sprite4("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-0.8,-80,0.995,0.995,-71.9);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 35
        this.instance_17 = new lib.sprite4("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(9.8,-73.1,0.997,0.997,-27.6);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 33
        this.instance_18 = new lib.sprite4("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(15.3,-67.2,0.999,0.999,-17.3);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(18).to({_off:false},0).to({_off:true},45).wait(1).to({_off:false,startPosition:46},0).to({_off:true},4).wait(1));
    
        // Layer 31
        this.instance_19 = new lib.sprite4("synched",5,false);
        this.instance_19.parent = this;
        this.instance_19.setTransform(24.3,-62.5,0.708,0.708,0,169.2,-10.8);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 29
        this.instance_20 = new lib.sprite4("synched",5,false);
        this.instance_20.parent = this;
        this.instance_20.setTransform(12.4,-38.5,0.709,0.709,0,-141.4,38.6);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 27
        this.instance_21 = new lib.sprite4("synched",5,false);
        this.instance_21.parent = this;
        this.instance_21.setTransform(-10.2,-34.9,0.711,0.711,0,-92.3,87.7);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 25
        this.instance_22 = new lib.sprite4("synched",5,false);
        this.instance_22.parent = this;
        this.instance_22.setTransform(11.9,-57.7,0.989,0.989,0,-166.9,13.1);
        this.instance_22._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 23
        this.instance_23 = new lib.sprite4("synched",5,false);
        this.instance_23.parent = this;
        this.instance_23.setTransform(2.7,-47.2,0.992,0.992,0,-110.3,69.7);
        this.instance_23._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 21
        this.instance_24 = new lib.sprite4("synched",5,false);
        this.instance_24.parent = this;
        this.instance_24.setTransform(-29.3,-83.6,0.659,0.659,0,11,-169);
        this.instance_24._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 19
        this.instance_25 = new lib.sprite4("synched",5,false);
        this.instance_25.parent = this;
        this.instance_25.setTransform(-33.5,-66.4,0.659,0.659,0,-3.5,176.5);
        this.instance_25._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 17
        this.instance_26 = new lib.sprite4("synched",5,false);
        this.instance_26.parent = this;
        this.instance_26.setTransform(-28.8,-43.8,0.712,0.712,0,-55.7,124.3);
        this.instance_26._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 15
        this.instance_27 = new lib.sprite4("synched",5,false);
        this.instance_27.parent = this;
        this.instance_27.setTransform(-1.2,-95.7,0.887,0.887,-75);
        this.instance_27._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 13
        this.instance_28 = new lib.sprite4("synched",5,false);
        this.instance_28.parent = this;
        this.instance_28.setTransform(21.6,-80.1,0.888,0.888,-17.8);
        this.instance_28._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 11
        this.instance_29 = new lib.sprite4("synched",5,false);
        this.instance_29.parent = this;
        this.instance_29.setTransform(-10.5,-47.8,0.993,0.993,0,-77.7,102.3);
        this.instance_29._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 9
        this.instance_30 = new lib.sprite4("synched",5,false);
        this.instance_30.parent = this;
        this.instance_30.setTransform(-20.4,-54.2,0.995,0.995,0,-35.1,144.9);
        this.instance_30._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 7
        this.instance_31 = new lib.sprite4("synched",5,false);
        this.instance_31.parent = this;
        this.instance_31.setTransform(-20.9,-65.7,0.997,0.997,0,7.5,-172.5);
        this.instance_31._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 5
        this.instance_32 = new lib.sprite4("synched",5,false);
        this.instance_32.parent = this;
        this.instance_32.setTransform(-5.1,-81.4,0.997,0.997,-94.7);
        this.instance_32._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 3
        this.instance_33 = new lib.sprite4("synched",5,false);
        this.instance_33.parent = this;
        this.instance_33.setTransform(8.4,-76.7,0.998,0.998,-46.4);
        this.instance_33._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 1
        this.instance_34 = new lib.sprite4("synched",5,false);
        this.instance_34.parent = this;
        this.instance_34.setTransform(15,-63.4);
        this.instance_34._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15).to({_off:false},0).to({_off:true},48).wait(1).to({_off:false,startPosition:49},0).to({_off:true},1).wait(4));
    
        // Layer 10
        this.instance_35 = new lib.sprite2();
        this.instance_35.parent = this;
        this.instance_35.setTransform(-5.5,82,0.999,0.999,-13.5);
        this.instance_35.alpha = 0.922;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_35).to({scaleX:1,scaleY:1,rotation:0,x:-3.2,y:-47,alpha:0.648},10).to({_off:true},1).wait(58));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.8,71.3,12.9,23.2);
    
    
    (lib.cvgTit_mc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (inited === undefined) {
                this.over = new Boolean(false);
                var inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.parent.icon_cvg_check_pausable();
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
        this.instance = new lib.cvgTit_ani();
        this.instance.parent = this;
        this.instance.setTransform(4.8,47.6);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:8.4,regY:3.2,x:13.2,y:41.7,alpha:0.306},0).wait(1).to({y:34.2,alpha:0.556},0).wait(1).to({y:28.4,alpha:0.75},0).wait(1).to({y:24.2,alpha:0.889},0).wait(1).to({y:21.7,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:4.8,y:17.7,alpha:1},0).wait(1).to({regX:8.4,regY:3.2,x:13.2,y:21.1,alpha:0.972},0).wait(1).to({y:21.7,alpha:0.889},0).wait(1).to({y:22.8,alpha:0.75},0).wait(1).to({y:24.2,alpha:0.556},0).wait(1).to({y:26.1,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:4.8,y:25.2,alpha:0},0).wait(1));
    
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
        this.tit = new lib.cvgTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(161.3,-28.1);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(185.8,111,1,1,0,0,0,140.7,111);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(45.1,0,281.5,222.2);
    
    
    (lib.Symbol17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // fw
        this.instance = new lib.phaohoa2("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(93.1,-48.8,0.77,0.77,18.8);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(63).to({startPosition:64},0).to({alpha:0},10).wait(1));
    
        // Layer 1
        this.instance_1 = new lib.Tween4("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(63.3,73.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.92,y:79.7},30).to({scaleY:0.96,y:76.7},3).to({scaleY:1.06,y:69.2},3).to({scaleY:1,y:73.9},6).wait(68));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0.1,126.5,147.6);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.chobun();
        this.instance.parent = this;
        this.instance.setTransform(109.1,183.4,0.458,0.458,0,0,0,24,-12.8);
    
        this.instance_1 = new lib.Symbol21();
        this.instance_1.parent = this;
        this.instance_1.setTransform(49.7,226.3,0.711,0.711,0,6.8,-173.2,25.9,23.9);
    
        this.instance_2 = new lib.Symbol21();
        this.instance_2.parent = this;
        this.instance_2.setTransform(147.9,235,0.711,0.711,0,0,0,26.1,23.9);
    
        this.instance_3 = new lib.Symbol2_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(104.3,149.8,0.711,0.711,0,0,0,69.2,33.2);
    
        this.instance_4 = new lib.Bitmap3();
        this.instance_4.parent = this;
        this.instance_4.setTransform(24.1,154.2);
    
        this.instance_5 = new lib.Bitmap25();
        this.instance_5.parent = this;
        this.instance_5.setTransform(30.1,105.2);
    
        this.instance_6 = new lib.Symbol13();
        this.instance_6.parent = this;
        this.instance_6.setTransform(125.6,92.3,0.711,0.711,0,0,0,102,139.3);
    
        this.instance_7 = new lib.Symbol17();
        this.instance_7.parent = this;
        this.instance_7.setTransform(45,126.9,0.711,0.711,0,0,0,63.2,74);
    
        this.instance_8 = new lib.Path_9_0();
        this.instance_8.parent = this;
        this.instance_8.setTransform(18.7,169.4,0.711,0.711,0,0,0,26.1,11.8);
        this.instance_8.alpha = 0.57;
    
        this.instance_9 = new lib.Symbol18();
        this.instance_9.parent = this;
        this.instance_9.setTransform(216.9,175.2,0.711,0.711,0,0,0,86.9,67.5);
    
        this.instance_10 = new lib.Bitmap6();
        this.instance_10.parent = this;
        this.instance_10.setTransform(155.1,69.2);
    
        this.instance_11 = new lib.Symbol10();
        this.instance_11.parent = this;
        this.instance_11.setTransform(215.8,93.6,0.711,0.711,0,0,0,58.6,61);
    
        this.instance_12 = new lib.Bitmap7();
        this.instance_12.parent = this;
        this.instance_12.setTransform(213.1,70.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,278.9,271.1), null);
    
    
    (lib.congviengame_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_cvg_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(111));
    
        // Layer 7
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(7.5,-2.5,1,1,0,0,0,139.5,135.5);
        this.instance.cache(-2,-2,283,275);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(110));
    
        // Layer 2
        this.instance_1 = new lib.chobun();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-22.9,45.4,0.458,0.458,0,0,0,24,-12.8);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(110));
    
        // bong vang2
        this.instance_2 = new lib.Symbol21();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-82.3,88.3,0.711,0.711,0,6.8,-173.2,25.9,23.9);
    
        this.instance_3 = new lib.Symbol21();
        this.instance_3.parent = this;
        this.instance_3.setTransform(15.9,97,0.711,0.711,0,0,0,26.1,23.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(110));
    
        // bang
        this.instance_4 = new lib.Symbol2_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-27.7,11.8,0.711,0.711,0,0,0,69.2,33.1);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(110));
    
        // nam1
        this.instance_5 = new lib.Bitmap3();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-107.9,16.2);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(110));
    
        // Layer 4
        this.instance_6 = new lib.Bitmap25();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-101.9,-32.8);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(110));
    
        // ngoi sao
        this.instance_7 = new lib.Symbol13();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-6.4,-45.7,0.711,0.711,0,0,0,102,139.3);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(110));
    
        // than cay 1 fw
        this.instance_8 = new lib.Symbol17();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-87,-11.1,0.711,0.711,0,0,0,63.2,74);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(110));
    
        // than cay 1
        this.instance_9 = new lib.Path_9_0();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-113.3,31.4,0.711,0.711,0,0,0,26.1,11.8);
        this.instance_9.alpha = 0.57;
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(110));
    
        // rap xiec
        this.instance_10 = new lib.Symbol18();
        this.instance_10.parent = this;
        this.instance_10.setTransform(84.9,37.2,0.711,0.711,0,0,0,86.9,67.5);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(110));
    
        // Layer 3
        this.instance_11 = new lib.Bitmap6();
        this.instance_11.parent = this;
        this.instance_11.setTransform(23.1,-68.8);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(110));
    
        // banh xe quay
        this.instance_12 = new lib.Symbol10();
        this.instance_12.parent = this;
        this.instance_12.setTransform(83.8,-44.4,0.711,0.711,0,0,0,58.6,61);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(110));
    
        // than cay 2
        this.instance_13 = new lib.Bitmap7();
        this.instance_13.parent = this;
        this.instance_13.setTransform(81.1,-67.8);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(110));
    
        // Layer 6
        this.instance_14 = new lib.Bitmap11();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-178,3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(111));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-178,-138,337,318);
    
    
    // stage content:
    (lib.cvg2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_cvg.mp3", "voice_cvg"); 
            var icon_cvgSound, icon_cvgSoundTimeOut;
            root_cvg = this;
            htcv_icon_cvgOver = function() {cv_icon_cvgOver();}
            htcv_icon_cvgOut = function() {cv_icon_cvgOut();}
            
            function cv_icon_cvgOver() {
                root_cvg.ico.over = true;
                root_cvg.hit.tit.over = true;
                root_cvg.hit.tit.gotoAndPlay(1);
                icon_cvgSoundTimeOut = setTimeout(icon_cvgSoundTimeOutComplete, 500);
            }
            
            function cv_icon_cvgOut() {
                root_cvg.ico.over = false;
                root_cvg.hit.tit.over = false;
                if (root_cvg.hit.tit.currentFrame == 7) {
                    root_cvg.hit.tit.play();
                }
                clearTimeout(icon_cvgSoundTimeOut);
            }
            
            function icon_cvgSoundTimeOutComplete() {
                clearTimeout(icon_cvgSoundTimeOut);
                
                // if (root_cvg.ico.currentFrame == 0) {
                //     icon_cvgSound = createjs.Sound.play("voice_cvg");
                // }
                root_cvg.ico.play();
            }
            
            this.icon_cvg_check_pausable = function() {
                if (root_cvg.ico.over == false && root_cvg.hit.tit.over == false && root_cvg.ico.currentFrame == 0 && root_cvg.hit.tit.currentFrame == 0) {
                    cvht_icon_cvg_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 3
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(101,218,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.congviengame_resize();
        this.ico.parent = this;
        this.ico.setTransform(173.6,268.5,1,1,0,0,0,-4.4,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(168.5,326.9,337,346.2);
    // library properties:
    lib.properties = {
        width: 337,
        height: 450,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/cvg2017_atlas_.png", id:"cvg2017_atlas_"}/*,
            {src:"sounds/voice_cvg.mp3", id:"voice_cvg"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_cvg = lib_cvg||{}, images_cvg = images_cvg||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_cvg, images_cvg, createjs, ss, AdobeAn;