(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"thtt2017_atlas_", frames: [[135,269,28,13],[149,247,93,20],[54,269,25,33],[110,269,23,30],[203,216,34,25],[54,234,25,9],[224,148,30,32],[125,104,97,50],[81,269,27,28],[224,64,30,43],[224,109,28,37],[125,208,76,37],[224,182,30,32],[0,104,123,128],[125,156,97,50],[202,0,39,62],[54,247,93,20],[0,0,200,102],[0,234,52,43]]}
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
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap16 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap17 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap18 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap19 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap2 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap20 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap21 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap22 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap23 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap24 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap26 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap28 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap5 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap6 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["thtt2017_atlas_"];
        this.gotoAndStop(18);
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
    
    
    (lib.Tween35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#53A22C").s().p("ABKBGQgHgGAAgJQAAgJAHgGQAGgGAJAAQAIAAAHAGQAGAGAAAJQAAAJgGAGQgHAGgIAAQgJAAgGgGgAgfAzQgFgGAAgJQAAgIAFgHQAHgFAIAAQAIAAAHAFQAEAHAAAIQAAAJgEAGQgHAFgIAAQgIAAgHgFgAAUAcQgGgEAAgIQAAgHAGgGQAFgEAHAAQAIAAAFAEQAGAGgBAHQABAIgGAEQgFAGgIAAQgHAAgFgGgAg1ABQgHgFAAgLQAAgKAHgHQAHgGAKAAQAKAAAHAGQAHAHAAAKQAAALgHAFQgHAIgKAAQgKAAgHgIgAhogpQgFgGAAgIQAAgIAFgGQAHgGAIAAQAIAAAFAGQAHAGgBAIQABAIgHAGQgFAGgIAAQgIAAgHgGgAg8g0QgDgEAAgGQAAgFADgEQAEgDAEgBIACAAQAGAAAEAEQAEAEAAAFIAAABQAAAGgEADQgEAEgGABQgGgBgEgEg");
        this.shape.setTransform(1.2,2.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7CBB1B").s().p("AkJAkQgfgOABgUQABghBegxQAxgbA8gXQAYAbAbAZQgEABgEADQgEAFAAAFQAAAGAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgFIAcAYQBiBOBGAGIArACQAbAAAPgFQAKgDALgIQAEgEAFABQAGgBACAFQABAEgCAGQgFALgPAOQgXAXgwASQhAAXhOAAQiaAAishfgABWAmQgHAFAAAKQAAAIAHAGQAGAHAIAAQAJAAAHgHQAGgGAAgIQAAgKgGgFQgHgHgJAAQgIAAgGAHgAgTATQgFAGAAAJQAAAIAFAGQAGAGAJAAQAHAAAGgGQAGgGAAgIQAAgJgGgGQgGgFgHgBQgJABgGAFgAAgABQgGAFAAAHQAAAIAGAFQAFAGAHgBQAIABAFgGQAFgFAAgIQAAgHgFgFQgFgEgIgBQgHABgFAEgAgqgiQgGAHAAAKQAAAKAGAHQAIAHAKgBQAKABAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgIAHgAhchHQgFAGAAAHQAAAIAFAHQAGAFAIAAQAJAAAFgFQAGgHAAgIQAAgHgGgGQgFgHgJAAQgIAAgGAHg");
        this.shape_1.setTransform(0,2.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AkMBFQghgPABgXQABglBlg0QArgYAvgSQgFgXABgSIAEgXIACgBIADAAQALAAAMADQASAGAKAOQARAWgMAsQALgFAKAAQALAAAIAIQALAOgBAgQAOgHANAAQAOAAAHAKQAKALgGAWQAJgEAHgBQAJAAAHAKQAGAJACARQAQgJAMAAQAWAAACAdQAJgJAJAAQAJAAAHAHQAGAFAEAHIADAAQAHgXAOAAQANAAARAVQAAgfAJgLQAEgEAFABQAOgBARAbIABABIgBADQAEACACAEQAGAPgcAbQgYAWgxASQhBAZhPAAQidAAishhgAjIgzQheAxgBAhQgBAUAfAOQCsBfCaAAQBOAABAgXQAwgSAXgXQAPgOAFgLQACgGgBgEQgCgFgGABQgFgBgEAEQgLAIgKADQgPAFgbAAIgrgCQhGgGhihOIgcgYIAAgBQAAgFgEgFQgEgEgGAAIgCAAQgbgZgYgbQg8AXgxAbgADEBGIATAAQARABALgCQgQgUgMAAQgMAAgHAVgACTBAQANADAMABIAQABIgGgHQgIgIgJAAQgJAAgJAKgAD7AlQgDALAAAUIAIgCQAJgDAJgHQAGgFAHAAIAFAAIAAgBQgQgZgNAAQgIAAgEAMgABeArQAbAOAYAHQgBgfgVAAQgMAAgRAKgABdAqQgEgjgSAAQgJAAgLAIQAHgVgGgOQgHgMgPAAQgOAAgQAKQACgbgHgPQgGgOgPAAQgLAAgOAHQARg3gcgXQgQgNgZAAIgDAAIgEAVQAAASAFAWIANgFQABgBAAAAQABAAAAABQABAAAAAAQAAAAAAABIAaAaQAfAfAgAbQAyApArAWIAAAAg");
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0F7720").s().p("ABqB0QAHgUALAAQAMAAARATQgMACgQAAIgTgBgABSBzQgMgBgOgEQAJgKAKAAQAJAAAIAJIAGAHIgQgBgAChBTQAEgMAIAAQANAAAPAZIAAACIgFgBQgHAAgFAFQgJAHgJADIgIACQgBgTAEgMgAAEBaQARgKALAAQAVAAABAeQgXgHgbgNgAhaAYQgggZggggIgZgaQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgOAFQgFgWABgSIAEgVIACAAQAZAAAQANQAcAXgQA3QANgHALAAQAPAAAHAOQAHAPgCAbQARgLANAAQAQAAAGANQAHANgHAXQAKgJAJAAQASAAADAjQgpgWgzgqg");
        this.shape_3.setTransform(9.1,-4.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.1,-16.5,60.2,33.1);
    
    
    (lib.Tween33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7CBB1B").s().p("AAlBVIADABIACAAQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAQgFABgCgEQgHgHAKgaQAJgZAdgJQAPgEAMAAIADgBQAOAIgCAaQgCAcgPARQgIAHgKAFQgLAFgJAAQgTAAgGgQgAAMA4IAAAAIAAAAQgHgPAEgKIAGgHQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABIgIAJQgEAKAFAPQgngNgegLQhAgYgOgXIArhTIA4AtQAwAlAVAGQgGAHgEATQAAABAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIADgMQAEgIADgEIABgBIADAAIADgBQAXgHALgJQAPgLgCgVQAAgJAFgFQAFgEAJAAQAMAAALAHQAMAHACAKQAEAVgIAPQgJARgXADQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgOgBgQAFQgfAJgKAcQgLAcAJAKIAEAEIgFABQgUgBADgcg");
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AAiBZIgFABQgKAAgGgHQgHgIABgQIgWgHQgygQgZgLQgtgUgLgUQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAqhTQABgDADAAIABAAIADABQAmAgAkAZQArAfAOAAIABAAQAYgIAKgIQALgKgBgRQAAgKAFgGQAHgHAMAAQAOAAAMAHQAOAJACAMQAGAZgNATQgJALgQAFQAEAFACAHQAFAQgFAUQgFAUgMANQgIAJgLAFQgLAFgLAAQgVAAgHgRgAA+BlQAJAAALgFQAKgFAIgIQAPgQACgcQACgbgOgHIgDABQgMgBgPAFQgdAIgJAaQgKAZAHAIQACAEAFgBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAIgDAAQAFAQAUAAgAAQAVQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgGAHQgEAKAHAOIAAABIAAAAQgDAcAUAAIAFAAIgEgEQgJgKALgcQAKgcAfgJQAQgFAOABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAWgDAKgRQAIgQgEgUQgCgKgMgHQgLgHgMAAQgJAAgFAEQgFAFAAAJQACAUgPAMQgLAJgXAHIgDABIgDgBIgBACQgDADgEAIIgDANQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAEgTAGgHQgVgHgwgkIg4gtIgrBTQAOAXBAAYQAeALAnANQgFgPAEgLIAIgJIABAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.8,-10.6,29.6,21.3);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#53A22C").s().p("ACJBUQgKgIAAgKQAAgKAKgHQALgHAOAAQAOAAALAHQALAHAAAKQAAAKgLAIQgLAHgOAAQgOAAgLgHgAi+BPQgGgGAAgJQAAgKAGgGQAHgGAIAAQAKAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgKAAQgIAAgHgHgACWATQgFgGAAgIQAAgHAFgGQAGgFAIAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAGgIAAQgIAAgGgGgAhlgjQgJgKAAgNQAAgNAJgJQAKgKAMAAQAHAAAFACQBMgIAnAbQAWAOAEARQgsgbgbgHIg9gKIACACQAKAJAAANQAAANgKAKQgJAJgOAAQgMAAgKgJg");
        this.shape.setTransform(0.3,-2.9);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("Ah0DoIgBAAIAAgBQgvgcgegtQgKgPgHgOIgFgNIAAgBQgRhuA5hGQAUgYAcgTQAPgKAXgLIAHgDQAWgMBchTQALgIAOgJQAbgOASAAQAigBACAtQACAyAdBFQAPAjAPAZQAZAvgCA3QgBAdgKAoIgBADQgIAdAJAUIACAEIgDACQhOBBhpAAQhDAAhLgbgAA5juQgNAIgJAHQhdBTgXAMIgiASQgdARgVAYQg/BFARByIAUAoQAeAtAvAcQBJAbBDABQBnAABMhBQgJgXAIgdQALgpABgbQACg3gZgvQgOgZgPgkQgehFgCg0QgCgogdAAQgRAAgbAQg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#69B11E").s().p("AhyDjQgvgcgegtIgUgoQgRhyA/hFQAVgYAdgRIAigSQAXgMBdhTQAJgHANgIQAbgQARAAQAdAAACAoQACA0AeBFQAPAkAOAZQAZAvgCA3QgBAbgLApQgIAdAJAXQhMBBhnAAQhDgBhJgbgACMAUQgKAHAAAKQAAAKAKAIQAKAGAPAAQAOAAALgGQAKgIAAgKQAAgKgKgHQgLgIgOABQgPgBgKAIgAi7ATQgHAGAAAJQAAAJAHAHQAGAGAJABQAKgBAGgGQAGgHAAgJQAAgIgGgHQgGgGgKAAQgJAAgGAGgACZglQgGAGAAAIQAAAIAGAFQAGAHAIgBQAIABAFgHQAGgFAAgIQAAgIgGgGQgFgGgIABQgIgBgGAGgAhihuQgJAKAAANQAAANAJAJQAJAKANgBQAOABAJgKQAJgJAAgNQAAgNgJgKIgCgCIA9ALQAbAGAsAcQgEgSgWgOQgngahNAIQgFgCgGAAQgNAAgJAJg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22,-25.9,44.2,51.9);
    
    
    (lib.Tween31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 10
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E5F3EB").s().p("AhnAnQAfg+BPggIASgCQAHAAAKAHIgNAEQgQAGgOAJQgvAcgNAuIAFABQANgsAsgbQAOgIAPgGIAOgEIgBgEQAMAJAPATQAiAnAAAoQhcgDhzgQg");
        this.shape.setTransform(-7.1,6.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#69B11E").s().p("AAAB4IAAAAQAAgpgjgqQgNgQgOgLIgJgGQAZABAZAIQg9gaghg1QgLgRgGgQIgDgJIgEgDIAAgCIgBgHIAEADQAqAVA+AMQA2AKAzAAQAoAAAZgGIADgBIAAADIAAAGIgDgCQAAARgMAtIgOAuIAGATQAIAYAMAYQgSAUhgAAIgYgBgACGhOIgBABIABAAIABAAIgBgBg");
        this.shape_1.setTransform(3.9,0);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AAgB4QhYgDh3gRIgIgBIAFgHQAkhGBWgbQAKgBAKAAIATABQgrgdgZgrQgJgOgFgOIgEgNIAAgBIADACIAEADIADAJQAHAQAKARQAhA1A8AaQgYgHgYgBIAIAFQAOALAMAQQAjAqAAApIAAABIAaAAQBgAAARgUQgMgYgIgYIgGgTIAOguQAMgtAAgRIADACIACACQgCAdgXBLQAKAhAPAgIACADIgCACQgUAWhiAAIggAAgAhAABQhQAggeA+QBzARBbACQABgnghgpQgQgTgLgJIAAAEIgNAEQgPAGgOAJQguAbgNAtIgEgCQANguAugdQAPgJARgGIANgDQgKgHgHAAIgTACgACthTIAAgBIABABIAAAAIgCABg");
        this.shape_2.setTransform(0,0.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.3,-12.1,36.7,24.7);
    
    
    (lib.Tween30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#020202").s().p("AAsBKQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgBQgCgHgEgLQgKgVgRgSQgJgJgdgOIgRgKIAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABABQABAAAAAAIAAAAIARAJQAdAPAJAKQASASAKAWQAFALACAJIAAACIgCABgABhBFIAAgBQgHgagOgeQgeg5grgPIgBgBIAAgDQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIADABQArAQAdA4QAPAeAHAdIAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAhjgIQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAJgTASgQQAhgdApACIAIABIACAAIACACIAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgIgBQgngDggAcQgSAPgIASQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
        this.shape.setTransform(1,5.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E5F3EB").s().p("AATBFQgCgJgFgLQgKgXgRgSQgJgIgegRIgQgIQASgVAcgRIABAAQAqAQAeA5QAOAeAHAaIAAAAQgRACgbABIgHAAgAgnBBIg+gDQgCgiAQgdQAGgKAHgKIAAAAIARAKQAdAOAKAJQARASAJAVQAFAKABAIIg1gEgABLBBQgHgdgPgeQgdg4gqgQIABgCQAeAMAsAnQAxAsgEAYQgCAKgZAEg");
        this.shape_1.setTransform(3.7,5.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgyBoIgygEIgIABQgQAAgIgcQgGgSgBgYIgBAAIAAgEIgDiHIADAAIADAAIACCHIABAAIAEAiQAIAjAOAAIAIgBIAeACQgCgjAQgeQAVgmAtgcIAJABQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgCQAfANAsAmQA0AvgGAbQgCALgTAFQgUAFgnAAQgmAAhLgFgAgmAKQgBABAAAAQAAABAAAAQABABAAAAQAAAAAAABQgHAJgGALQgPAdABAiIA+AEIA1ADIABABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIABAAIACgBIAAgCIAHAAQAaAAARgCQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBQAYgEACgKQAFgYgxgtQgtgmgegMIgCABIgCgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIAAADQgbAQgSAVIAAgBIgCAAIgCABgAAJgnQgJgMgGgZQgEgSgBgOIADAAIACAAQABAOAEARQAHAfAMAHIgJAAg");
        this.shape_2.setTransform(0,2.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#69B11E").s().p("AgjB7IgIABQgOAAgIgjIgEgiIgBAAIgCiHIgDAAIAAgBIABgBQALgSAdgMQAagMAYAAQAQAAALAFQAKAGAEAJIAAACQgCAKABAMIgDAAQABAOAEASQAGAZAKAMQgqgDggAcQgRARgJASQAAABgBAAQAAABABAAQAAABAAAAQABAAAAABIABAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAgBQAJgRAQgQQAggbApADQgvAbgVAnQgPAeACAjIgegCg");
        this.shape_3.setTransform(-6.5,-0.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.3,-12.9,28.8,26.2);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.instance = new lib.Bitmap11();
        this.instance.parent = this;
        this.instance.setTransform(-22.3,-10.6,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.3,-10.6,45.1,21.3);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Isolation Mode
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(-0.4,3.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("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");
        this.shape_1.setTransform(-0.2,30.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 12
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FF6FBE").ss(5,1,1).p("ABni9QADgFAEgDQAFgEAFABQAKAAAEAHQAEAHAAANIgBBMQgBAUgCANQgCALgFAIQgIANgQAHQgOAHgUgBQgYAAgPgIQgQgIABgMQAAgHAEgFQAFgEAHAAQADAAANAFQANAFALABQAOAAAIgIQAIgIAAgPIAAgFQgGAJgJAEQgIAFgLgBQgXAAgQgUQgQgSABgdQABgcASgTQARgSAYAAQAKAAAHAEQAIAEAFAGgAE6i/QAWACAKAOQALANgBAYIgEA2QgBAOgFAGQgGAHgJgBQgJAAgFgHQgEgHABgOIADgrQABgQgEgHQgEgHgLgBQgKAAgGAGQgFAHgBAOIgDAsQgBANgGAHQgEAGgKgBQgKgBgEgGQgEgIACgNIAJiBQACgOAEgGQAFgHAKABQAJABAEAHQAFAHgBAOIgEAlQAHgGAIgCQAIgCALAAgAI6iAQgLgCgIAIQgJAHgCAPQgCAOAHAKQAFAJANABQAHABAIgBQAJgCACABQAHAAADAGQAEAFgBAHQgBAKgOAGQgOAFgSgDQgcgDgOgVQgPgVAEgdQAEgdAUgQQAVgQAcADQATAEALAIQAKAIgBAKQgBAHgFAEQgFAEgHgBQgDgBgIgDQgIgEgHgBgAHzhqQgEAegTAQQgUARgcgDQgbgCgPgWQgRgVADgdQADgcAUgSQAUgQAcACQAcADAQAVQAPAVgDAdgAG3iRQgLAAgHAHQgIAIgBAOQgCAPAGAJQAFAJAMABQALACAHgIQAIgIACgOQABgOgGgKQgGgJgLgCgAG5gSQgBAGgFAEQgEAEgHAAQgHgBgEgFQgEgFABgGQABgHAFgEQAFgEAGABQAHABADAFQAEAEAAAHgAHGAGQAHAAADAFQAFAEgBAGQgBADgBADQgCADgEAEIgUASQgFADgCABQgDACgDAAQgGgBgDgEQgDgEABgGQAAgCABgCQAAgCAEgDIAUgWQACgDADgCQAEgBAEAAgAGlBDQABAEAAADQgBAFgDADQgEADgFgBQgDAAgCgBIgFgDIgTgPIgWALQgDABgDAAQgDABgCAAQgFAAgDgEQgDgDABgGQABgEABgDQACgCAEgDIAcgRIAFgCQADgBACAAQACABADABIAEACIAYAXQAEADABAEgAImB9QAKAOgDAYIgHA1QgCAOgGAGQgFAGgJgCQgJgBgEgHQgEgHACgOIAFgpQACgQgDgHQgEgHgKgCQgLgBgFAGQgGAGgCAPIgGAqQgCAOgFAFQgGAHgJgCQgKgBgDgHQgDgHABgOIAKhKQACgOAGgGQAFgFAKAAQAEABAFAEQAEADACAHQAHgGAIgCQAIgCAMACQAVADAKANgAGsCpQgEADgLgBIhCgHQAAALAHAGQAHAHALABQALACANgFQANgFAEAAQAHABADAEQADAFAAAGQgBAMgSAIQgSAIgWgCQgbgDgRgVQgRgUAEgcQACgdAVgRQATgRAbACQAZADAQAUQAPAUgDAZQAAAIgEADgABOinQgLAAgHAIQgHAJgBAOQAAAOAHAIQAHAJALABQAKgBAIgIQAHgIAAgPQAAgNgHgJQgHgJgKAAgAAcAmQAEAIAAANIAAAQIADAAQALAAAHAFQAGAEgBAIQABAIgGAEQgGAEgMAAIgDAAIgBBBQAAAOgFAHQgEAHgKgBQgJAAgEgGQgEgHAAgOIAAhCIgBAAQgKAAgFgEQgGgFAAgHQAAgIAGgDQAGgFALAAIAAgRQAAgOAEgGQAEgGAKgBQAJABAFAGgABXBJQAJABAEAGQAEAGgBAPIgBApQAAAQAEAGQAEAGAKAAQALAAAEgFQAFgHAAgOIACgqQABgNAEgHQAFgHAKABQAJABAEAGQAFAHgBANIgCAyQgBAagPAOQgPAOgbgCQgbgBgOgPQgOgOABgaIABgyQABgNAFgHQAFgGAKAAgADCBmIAAgGQABgIAFgFQAGgFAHABQAHAAAEAEQAEAEADALIARA5IAag5QAEgIAEgDQAEgDAGAAQAJABAEAFQAFAFgBAIQAAACgBAEIgDAHIhCCCQgDAIgFADQgEADgFAAQgJAAgFgGQgEgFABgIIAAgGIAVgnIgfhaQgBgBAAgDgAF4B5QgKgBgHAFQgIAFgCAKIAxAFQAAgJgGgIQgHgGgJgBgApgi6QAGgGANgCIBDgMQANgCAIAEQAHADACAJQABAJgFAFQgHAGgNACIgOADIASBqQACAOgDAHQgEAIgJACQgLABgFgGQgGgFgCgOIgThrIgOACQgOADgHgEQgHgDgCgIQgBgKAGgFgAmnitQAGAFABAHQACAMgUAKIgLAFQgGAFgCAFQgCAFACAKIAFAmQACAOgDAIQgFAHgJABQgJABgGgGQgFgGgCgNIgKhMQgCgOAEgGQADgIAJgBQAGgBAFADQAGACACAFQAGgGAGgEQAGgFAGgBQAIAAAHAEgAl1ixQAFAHABAOIAEAqQACAPAFAGQAFAFALgBQAKgBAEgGQAEgGgCgQIgEgqQgBgOAEgHQADgHAKgBQAKgBAFAGQADAEACAHIAAgBQAGgEADgFQABgEABgHIgJADQgIAAgFgEQgFgEgBgIQgBgIAGgGQAEgGAJgBQAKgBAIAHQAHAIABAMQACARgKAOQgIAKgJAEIAEArQADAbgNAPQgOAQgcADQgbACgQgNQgPgMgDgbIgFgyQgBgOAEgHQAEgHAKAAQAIgCAGAGgAjWkDQAEADADADIATAXIADAFQABADAAACQABAGgEADQgDAFgGAAQgDAAgDgBQgEgDgDgDIgTgSQgEgEgBgDQgCgDAAgDQgBgHAEgEQAEgEAHAAQAEgBADABgAjKjHQAdgBASASIAAAAQAHgEABgEQADgFAAgGIgEABIgEAAQgIABgFgEQgFgFgBgIQAAgIAFgGQAGgGAIAAQAKgBAIAIQAHAIAAAMQABAQgKAOQgFAGgEAEQAJAOABAUQACAegRATQgQAUgcACQgcABgTgSQgTgSgCgdQgCgdASgUQAQgUAcgCgAhmjJQAGAAAEADQAFADADAGQAGgHAIgDQAHgDANAAQAVgBANANQALAMABAYIABA2QAAAOgFAHQgEAHgKAAQgJAAgFgGQgFgHAAgOIgBgrQAAgPgEgHQgFgGgLAAQgLAAgFAHQgEAHAAAPIABAqQAAAPgEAGQgFAHgKAAQgJABgEgHQgGgGAAgPIgBhLQgBgOAFgHQAEgGAKgBgAizhuQAGgJAAgPQgBgOgHgIQgIgIgLABQgLAAgHAJQgGAKABANQABAPAHAIQAHAJAMgBQAKgBAHgJgAhyBOQALAGABAKQAAAHgEAFQgFAFgGgBQgEABgIgDQgJgCgGgBQgLACgHAIQgHAJABAOQAAAPAIAIQAIAIAMgBQAGAAAIgDQAIgDAEAAQAFAAAFAEQAEAFABAGQAAALgNAHQgMAIgSABQgcABgSgSQgRgRgCgeQAAgdAQgTQARgTAdgBQASgBANAHgAj7A9QgBgIAFgGQAGgGAIgBQAKAAAHAHQAIAIABAMQAAAQgJAOQgIAKgKADIADArQACAbgNAPQgNAPgbACQgcACgPgNQgPgNgDgaIgDgyQgBgNAEgHQAEgHAJAAQAKgBAFAGQAFAGABANIADArQACAPAEAFQAFAGAKgBQALgBADgGQAEgGgBgPIgDgqQgBgOAEgHQAEgGAKgBQAJgBAFAGQADAEABAHIABgBQAGgEADgFQABgEAAgGIgIACQgIAAgEgDQgGgFAAgIgAmDCDQgGAEgCAFQgCAFABAJIAFAnQABAOgEAHQgEAHgJABQgJABgFgGQgGgGgBgOIgJhKQgBgOADgHQAEgHAKgBQAFgBAFADQAFACADAFQAGgGAFgEQAHgEAGgBQAIAAAGAEQAGAGABAHQACALgUAJgAkZDfQAGAAAFADQAFAFAAAGQABAGgEAFQgEAEgHABQgGABgFgFQgFgEAAgGQgBgGAFgFQAEgFAGAAgAoQBEIBCgKQANgCAIADQAHAEABAJQACAJgGAFQgGAFgOACIgOADIAQBpQACAOgEAHQgEAHgJACQgKABgFgGQgGgFgCgOIgQhqIgOACQgNACgIgDQgHgDgBgJQgBgKAGgFQAFgFAOgCg");
        this.shape_2.setTransform(-0.4,16.8);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    
        // Layer 11
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#CE429D").ss(5,1,1).p("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");
        this.shape_3.setTransform(-0.8,19.6);
    
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-113.2,-42,314.5,130.5);
    
    
    (lib.Tween26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(-20.4,-26.3,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.4,-26.3,40.3,53.2);
    
    
    (lib.Tween25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap16();
        this.instance.parent = this;
        this.instance.setTransform(-18.5,-24,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.5,-24,37.1,48.3);
    
    
    (lib.Tween24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap21();
        this.instance.parent = this;
        this.instance.setTransform(-24.3,-34.4,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.3,-34.4,48.3,69.3);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap19();
        this.instance.parent = this;
        this.instance.setTransform(-24.3,-26,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.3,-26,48.3,51.5);
    
    
    (lib.Tween22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // flash0.ai
        this.instance = new lib.Bitmap17();
        this.instance.parent = this;
        this.instance.setTransform(-27.1,3.5,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.1,3.5,54.8,40.3);
    
    
    (lib.Tween21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap22();
        this.instance.parent = this;
        this.instance.setTransform(-22.3,-29.9,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.3,-29.9,45.1,59.6);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap20();
        this.instance.parent = this;
        this.instance.setTransform(-21.9,-22.6,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.9,-22.6,43.5,45.1);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Bitmap17();
        this.instance.parent = this;
        this.instance.setTransform(-27.2,3.9,1.485,1.437,-5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.2,-0.5,53.5,40.2);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap18();
        this.instance.parent = this;
        this.instance.setTransform(-20,-7.1,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20,-7.1,40.3,14.5);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap14();
        this.instance.parent = this;
        this.instance.setTransform(-74.9,-16.2,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-74.9,-16.2,149.8,32.2);
    
    
    (lib.Tween13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgaDJQhCgEghgfQg4g2gGiPQgCgsADgxIAEgnQA4hCBrAyQBqAyBQCCQAlA9gZAzQgWArg/AZQgzAVg1AAIgQgBg");
        this.shape.setTransform(19.9,-3.8,0.396,0.396);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AAEFrQiEgajUhzQiWhRAWh6QAGgmAYgmQALgSAKgMQECj9ESgcQBsgLBaAcQBQAaAnAwQBHBXg4DAQg1C5hzBwQhKBJh0AAQgoAAgtgJg");
        this.shape_1.setTransform(-8.8,0,0.396,0.396);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.4,-14.7,54.9,29.5);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EE3384").s().p("AgDAiQgpgCgegDQAagtARgRIBoAMQAGATgMAkIgaAAIgsAAg");
        this.shape.setTransform(19.6,-20.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D5419E").s().p("AiHANQAggjAdgZIDSAZIgqBGQhjgOiCgVg");
        this.shape_1.setTransform(8.2,-23.7,0.396,0.396);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#D63E9E").s().p("AgrAeQAfgtAYgYIgLgCIArAFIAABOIhXgMg");
        this.shape_2.setTransform(15.4,-22.8,0.396,0.396);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D2419D").s().p("AhlAHIAvgpQBBAFBbALQgWAUgbAhQhLgMhPgQg");
        this.shape_3.setTransform(-1.4,-24.9,0.396,0.396);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF5FB3").s().p("AipAeQA+g9BpgKQAhgDCLAJIgmAlQiEgUh8A9g");
        this.shape_4.setTransform(-12.1,-25,0.396,0.396);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D64B9E").s().p("AAcgwIAaAIQg6AlgxA0QAog1Apgsg");
        this.shape_5.setTransform(-21.2,-20.6,0.396,0.396);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#EE3384").s().p("AigAuQAihFAhgxQBzAQCLARQggA6gaA2Qh6gGiNgVg");
        this.shape_6.setTransform(3.3,-15.8,0.396,0.396);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#EE3384").s().p("AiQAtQBBhDBEg7QBBAGBbAKQg6A3g3BcQhTgQhdgVg");
        this.shape_7.setTransform(-3.1,-23.1,0.396,0.396);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#A81668").s().p("AhCAWQAcgmAXgUIBTAKIglA/QgtgGg0gJg");
        this.shape_8.setTransform(6.9,-21.8);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#A81668").s().p("AipAHQA+g9BpgJQAhgDCLAIQg/A/gyA8QiEgehegcg");
        this.shape_9.setTransform(-12.1,-24.1,0.396,0.396);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#A81668").s().p("AinBPQAhhjAphZQCOASB3AMQg5B3gSBGQhxgMiTgTg");
        this.shape_10.setTransform(0.3,-9,0.396,0.396);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#EE3384").s().p("AjRBTQAohiAqhaQBRAJENAlIhkCkIgfABQhYAAjVgXgAjeBSIANABIAAABgAjRBTIAAAAg");
        this.shape_11.setTransform(13.7,-7.8,0.396,0.396);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#A81668").s().p("AiMAlQAqg5Ayg3QBoASBVANQgcAxghBHQhkgQh4gXg");
        this.shape_12.setTransform(-7.9,-17.2,0.396,0.396);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#EE3384").s().p("AihBLQAZhWBFhjQBSANCTATQgoBbgiBiQirgXhOgNg");
        this.shape_13.setTransform(-11.4,-10.5,0.396,0.396);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A81668").s().p("AgoA3QiRgMgSAAQAfhCAYgsQCgATDAAOQgSAvgcA3Qg0gCiSgLg");
        this.shape_14.setTransform(17.1,-14.6,0.396,0.396);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#EE3384").s().p("AiiAdQApg3Azg4QBWAaCTAbQgtA1gqA7QhxgXh9gfg");
        this.shape_15.setTransform(-17.3,-19.2,0.396,0.396);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#A81668").s().p("AhLBaQhEgQgFgMQgUg6BNh0QBlAVCPAYQhBBcguBYQhPgPgmgIg");
        this.shape_16.setTransform(-21,-12.3,0.396,0.396);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27,-26.6,54.1,23);
    
    
    (lib.Tween9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#910954").s().p("AgcAdQhDgSgFgMQgIgXAHghQA6AvCUApIgQAbQhPgSgmgLg");
        this.shape.setTransform(-22.8,-8,0.396,0.396);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#910954").s().p("AiAgKIAJgbQBoAcCQAYIgIAXQi5gihAgOg");
        this.shape_1.setTransform(-12.6,-4.9,0.396,0.396);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#910954").s().p("AiGgJIAIgYQBzAUCSAQIgJAfQh/gViFgWg");
        this.shape_2.setTransform(-0.8,-2.7,0.396,0.396);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D5419E").s().p("AiHAGQAjglAagUIDSAjIgpBEQhygWh0gYg");
        this.shape_3.setTransform(8.4,-20.1,0.396,0.396);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D63E9E").s().p("AijAGQAggsAZgXIEOAtIAABNQkQgsg3gLg");
        this.shape_4.setTransform(20.3,-18,0.396,0.396);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D2419D").s().p("AhmACIAwgnICdAYQgYATgaAgg");
        this.shape_5.setTransform(-1.2,-21.9,0.396,0.396);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FF5FB3").s().p("AipAYQA+g5BpgFQAigBCKAQIglAkQiEgch9A2g");
        this.shape_6.setTransform(-12,-22.6,0.396,0.396);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D64B9E").s().p("AAcguIAaAJQg8AkgvAwQAkgvAtgug");
        this.shape_7.setTransform(-21,-18.6,0.396,0.396);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#EE3384").s().p("AigAmQAghBAjgzQCKAbB0AUQggA5gaA1QhygMiVgdg");
        this.shape_8.setTransform(3.5,-12.5,0.396,0.396);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#EE3384").s().p("AiRAlQBGhFBAgyICdAYQg6Azg4BaQhXgVhagZg");
        this.shape_9.setTransform(-2.9,-20.1,0.396,0.396);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#EE3384").s().p("AgQBOQiCgOgtgKIAyhNQAig1AcgWIEPAwQgIANgCAxQgCAygVAmQgigHiNgPg");
        this.shape_10.setTransform(19.2,-16.4,0.396,0.396);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#A81668").s().p("AipAuQBGheA7gwIDTAkQg5BdgjBAQhzgViFgeg");
        this.shape_11.setTransform(7,-18.4,0.396,0.396);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#A81668").s().p("AipgCQA+g7BpgEQAigCCKAQQg9A6g1A7QiJgmhYgeg");
        this.shape_12.setTransform(-12,-21.5,0.396,0.396);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#A81668").s().p("AioBHQAlhpAmhQQB6AWCMAWQg7B2gSBDQh+gUiGgYg");
        this.shape_13.setTransform(0.5,-5.9,0.396,0.396);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#EE3384").s().p("AioBHQAlhpAmhQQB6AWCMAWQg7B2gSBDQh+gUiGgYg");
        this.shape_14.setTransform(0.5,-5.9,0.396,0.396);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#EE3384").s().p("AjYBJQAkhYAuhgQBXAOEIAyIhkCfIgGAAQhQAAj3gng");
        this.shape_15.setTransform(14.2,-4,0.396,0.396);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#A81668").s().p("AiMAdQArg3Axg0QBlAXBYARQgcAwggBFQh0gYhpgag");
        this.shape_16.setTransform(-7.8,-14.5,0.396,0.396);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#EE3384").s().p("AiiBCQAbhUBEhgQB1AYBwAUQgmBVglBkQi5gihAgPg");
        this.shape_17.setTransform(-11.3,-7.9,0.396,0.396);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#A81668").s().p("AgoA0QiSgTgSgBQAfhBAYgqQCnAcC7AXQgSAtgcA3Qg1gEiSgUg");
        this.shape_18.setTransform(17.3,-10.5,0.396,0.396);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#EE3384").s().p("AiiAVQApg2A0g1QBRAdCYAkQgtAzgrA5QiAghhughg");
        this.shape_19.setTransform(-17.2,-17,0.396,0.396);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#A81668").s().p("AhMBXQhDgSgFgNQgUg7BNhwQBeAZCWAgQhDBbgtBUQhOgTgngLg");
        this.shape_20.setTransform(-20.9,-10.3,0.396,0.396);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.9,-24.1,53.8,24.6);
    
    
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D5419E").s().p("AhRBoQAlhjBNhwIAxANIiQDKg");
        this.shape.setTransform(-19.1,-14.4,0.396,0.396);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D5419E").s().p("AiIAVIAwhIQBkAIB9ASIguBNQh8gXhngIg");
        this.shape_1.setTransform(1.7,-23.3,0.396,0.396);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FA67B1").s().p("AiEAOIAxhQQCDATBVAPIgrBjQhsgfhygWg");
        this.shape_2.setTransform(11.8,-21.6,0.396,0.396);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D5419E").s().p("AheAeIAqhmQA/AMBTASQgZADgdBwg");
        this.shape_3.setTransform(20.1,-19.8,0.396,0.396);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FA67B1").s().p("AixBLQApg6Atg1IAmgqQAsgOC7APIgsBKQgpgCgfAAQhhAAhWBbg");
        this.shape_4.setTransform(-10.3,-22.4,0.396,0.396);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#900C56").s().p("AhjAsIAZhjQBkALBKAKQgPBBgOAZQhMAAhegMg");
        this.shape_5.setTransform(13.5,5.4,0.396,0.396);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#DF2D79").s().p("AihAHIAUhEQCYAJCXAPIgVBjQiMgTiigkg");
        this.shape_6.setTransform(3.1,4.6,0.396,0.396);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#900C56").s().p("AiAgKIANgmQBlAZCPAKIgSA+Qhygah9ghg");
        this.shape_7.setTransform(-9.3,2.6,0.396,0.396);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#DF2D79").s().p("AgtAsIg0gQQgOgyAFg8QA3BTCfAuIgSAkIiHgng");
        this.shape_8.setTransform(-19.5,-1.5,0.396,0.396);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#A91468").s().p("AhzCAIBCkLIClAdQgmDNgXAtQhMAAhegMg");
        this.shape_9.setTransform(14.1,2.1,0.396,0.396);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#EF3486").s().p("AizBlIBJkAIEeArIg6EMQiKgTijgkg");
        this.shape_10.setTransform(3.8,0.9,0.396,0.396);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#A91468").s().p("AhwBYIBOjEQBAAMBTASQggADgoC4g");
        this.shape_11.setTransform(19.4,-18.4,0.396,0.396);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#EF3486").s().p("AipBVIB8jLQCDASBUAQIhXDLg");
        this.shape_12.setTransform(10.3,-19.5,0.396,0.396);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#EF3486").s().p("AhpBcIBDjWICQAcIgoDZg");
        this.shape_13.setTransform(16.4,-8.3,0.396,0.396);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A91468").s().p("AiqBLIBLjHIEKAlIg7DUg");
        this.shape_14.setTransform(6.8,-9.8,0.396,0.396);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#A91468").s().p("AibBVIBMjkIDrAoIhJD3Qhxgah9ghg");
        this.shape_15.setTransform(-8.2,-1.2,0.396,0.396);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#EF3486").s().p("AhRBqIgzgQQgdhiAwiHID3AvIAKAAQgSBOgaBBQgRArgcA2IiIgmg");
        this.shape_16.setTransform(-18.1,-4,0.396,0.396);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#A91468").s().p("AimBRQAlhiBOhxIDaA7IhTDKg");
        this.shape_17.setTransform(-15.7,-13.5,0.396,0.396);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#A91468").s().p("AiyBVICDjGQBkAIB9ASIh4DJg");
        this.shape_18.setTransform(0,-20.9,0.396,0.396);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#EF3486").s().p("AixA4QApg5Atg2IAmgqQAsgOC7APIh4DJg");
        this.shape_19.setTransform(-10.3,-21.7,0.396,0.396);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#EF3486").s().p("AifBTIBgjKIDfAoIhCDHg");
        this.shape_20.setTransform(-5,-11.6,0.396,0.396);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23.8,-25.8,47.7,33.5);
    
    
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(51,51,51,0.302)").s().p("AkfCCQh3g2AAhMQAAhLB3g2QB3g3CoAAQCpAAB3A3QB3A2AABLQAABMh3A2Qh3A3ipAAQioAAh3g3g");
        this.shape.setTransform(43.2,7.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.4,-11.1,81.5,37);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B73789").s().p("AgkBjQgjgXgbggQghgmgGghQgIgpAggcQAHgGAHgEIAcgKIAGAAQAJAAAIADQAJADAJAGIADACQgggDgYAMQgfAQACAiQAEAuAiAoQApAwBHAOIgQAHIgNAFIgEAAQgNAAgcgSgAAJhLIAOgLQARgNAQgHQAPgHAOgBQAegEAUAXIAFAGQgsgdgjAWQgLAGgJALIgHAJg");
        this.shape.setTransform(14,11.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7E245D").s().p("AAOBqQhHgNgpgxQgigogEguQgCgiAfgPQAYgMAgACIgDgCQAKAGAQAPQAMALACgCIAYAFIAHgKQAJgKALgHQAjgVAsAcIAAAAQAHAKAGANQAcBBhHA9QgZAVgiASQgQAJgMAFIAPgIgAABhXQAUgOATgHQALgEAKgBQgOACgPAGQgQAHgQANg");
        this.shape_1.setTransform(16.4,11.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,30.1,23.5), null);
    
    
    (lib.f6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1A891E").s().p("AB9FqQgsgUh/gUIh3gQQgeABgpgIQhSgOgzgnQhJg4CZkZQBMiNBaiCIIFB6QgyCeg7CaQhuEjgtAAIgFgBg");
        this.shape.setTransform(-6.2,0);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-45.5,-36.2,78.8,72.6);
    
    
    (lib.f5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1A891E").s().p("AB+FqQgvgVjAgiQingdhygMQADhbCHkVQBEiLBDh5IIEB6QgyCeg6CaQhuEjgtAAIgGgBg");
        this.shape.setTransform(-6.3,-0.7);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-45.8,-36.9,79.1,72.6);
    
    
    (lib.f4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1A891E").s().p("AhKCjIhxgTQAFh0AxhWQAqhLBDgoQA7glA5AFQA5AFAYArQAnBIg5CZQgcBMgkA/QgrgVh6gXg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8,-20.6,37.7,41.3);
    
    
    (lib.f1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1A891E").s().p("AhKCjIhxgTQAFh0AxhWQAqhLBDgoQA7glA5AFQA5AFAYArQAnBIg5CZQgcBMgkA/QgrgVh6gXg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8,-20.6,37.7,41.3);
    
    
    (lib.baybay_dino = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E2203B").s().p("AECCCQghgyhGgjQiMhHi1BEQiMA0hmg5QgUgMg1gnQgmgdgYgHQCxAyBpgQQBOgLBCg4IAzgeQA+ghA3gPQC0gxA3CNIAOAaQARAfAaAYQBRBQB5gKQgsArg6AbQgwAXgoAAQg4AAgpgtg");
        this.shape.setTransform(49.8,4.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E2203B").s().p("AEKB6IgLgGQghgZg6gWIgUgIQiJgzimAPIgKABQhpARhlghQgPgFgPgGQgcgKgvgcQgngUgZgEIAbABIBPAFQBeAKBPgDQBKgDBGgdIAagHIAXgGIADgBIBGgRIAwgLQCVggBUA9IALAKIAEAEIAOAMQAOANAQAMIAWARQBRA/BlAfIgBACQgdARgpAQIgjANQg2AVgvAAQgnAAghgOg");
        this.shape_1.setTransform(49.7,6.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E2203B").s().p("AEIBrIgMgCQgkgMg9gPIgUgFQiJgkifgXIgKgCQhdgGhtgdIgdgKQgjgKgqgRQgogOgZgBIAZgEQAlgEAqgBQBWACBVAEQBIADBJgHIAagBIAYAAIACAAQAigCAmgDIAvgGQCGgUBoALIAOAFIAFABIAQAHIAjAQIAXAOQBSAzBVA/IAAACQgdAIgtALIgjAJQhTAYhJAAIgQgBg");
        this.shape_2.setTransform(49.6,8.6);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E2203B").s().p("ACUBdIgUgDQiKgYiag2IgJgEQhTgWhzgdIgdgIIhOgTQgpgIgaABIAZgIQAjgJAqgEQBRgEBZAJQBGAIBMAKIAaAEIAZAFIACAAQAhAFAngBQAXAAAZgCQB5gLB3gaIAQgBIAHAAIASACQATAEATAGIAaALQBRAoBJBaIAAACQgcABgwAHIgkAGIirAjIgNABQgngBg+gJg");
        this.shape_3.setTransform(49.6,9.3);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#E2203B").s().p("ACOBrQiUgLifhSQhPgnh+gdQh4gbg3AGIAYgLQAhgNAsgFQCNgRDIA+IAaAJQAhAJApACQCDAHCghBIAXgFQAegEAgAIQBjAZBKB/QgdgEgxAEQhlAIhrAoQgcAHgqAAQgWAAgagCg");
        this.shape_4.setTransform(49.6,9.5);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E2203B").s().p("ACTBfIgUgDQiKgXiZg5IgJgEQhTgYhzgdIgdgHIhOgTQgpgHgaABIAZgJQAigJArgEQBQgFBaAKQBGAIBMAMIAaAEIAZAGIACAAQAhAFAnAAIAwgBQB4gLB5geIAQgBIAGAAIATABQATADATAHQANAEANAHQBSAnBHBcIAAACQgcAAgwAHIgkAGQhWAQhVAUIgNABIgEAAQgmAAg8gIg");
        this.shape_5.setTransform(49.6,9.4);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#E2203B").s().p("AD7BnIhigVIgUgFIknhBIgKgCQhagLhugeIgdgJQglgKgogPQgpgMgZAAIAZgFQAkgGAqgCQBUAABXAGQBHAEBKgBIAaABIAYACIADgBQAhABAmgCIAwgFQCBgRBtgBIAPACIAFACIASAFIAjAOIAZANQBRAvBRBIIAAACIhKAPIgkAIQhbAYhRADIgMgBg");
        this.shape_6.setTransform(49.6,9);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E2203B").s().p("AEJByIgMgEQgigRg8gTIgUgGQiKgrihgGIgKAAQhjAEhpgfIgdgKQgggKgsgWQgogRgZgCIAagCIBOAAQBbAFBRABQBKAABHgRIAagDIAYgDIACgBIBHgKIAwgIQCMgaBgAiIAMAHIAFADIAPAJIAhAUIAWAPQBRA4BdAxIAAACQgdANgrAMIgjAMQhAAUg4AAQgcAAgZgFg");
        this.shape_7.setTransform(49.7,7.8);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#E2203B").s().p("AELB+IgLgHQgggdg5gZIgUgIQiJg3ioAaIgKABQhtAYhjgiQgPgFgOgHQgbgKgwgeQgngXgZgFIAbADIBQAIQBgAMBNgEQBLgGBGgjIAZgIIAXgIIADgBQAjgMAjgJIAwgLQCZgkBOBKIALAMIAEAFIANAOQANAOAPANIAVASQBRBCBqAWIgBACQgdAUgoARQgRAIgSAGQg0AWgtAAQgpAAgjgTg");
        this.shape_8.setTransform(49.7,6.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));
    
        // Layer 2
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#A3001E").s().p("AnGEgQgjgXg2hMQhChcgchYQhQkAEchFIA6ASQBIATBJALQDqAhCehGQA/gcAzAQQAdAKA9AsQA/AuAwASQBOAcBkgMQgDAXgZAYQgyAxiEAXIhoAPQg7AKgkANQhgAjgPBnQgEAcgQAXQgfAwg5gRQiQgsg4AMQgsAJgiA/QgfA8ggASQgUAMgYAAQgqAAg2gkg");
        this.shape_9.setTransform(38.7,31.3);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#A3001E").s().p("Al/E3QglgIgsgiQgfgZgshAIgIgNQg9hfgShXQghiSBbhOQAygpBUgXIAogJIA6AQQBJATBHAMQAnAGAlAFQCrASCQgyIAOgFQA4gSAtANQAZAFAmAYIAcAQQA2AhAqASIALAFQAWAJAXAFQAiAIAtgBQgGAVgYAZIgFAFQgdAbg4AaQgjARgrALIgIACQg6AOgjAFQg4AJgnAJIgSAEQgQAFgPAKQgtAfgRA+IgEATQgGAagRAWQgdAmgxgIIgMgDQhKgWg2gLQgsgJgdAHQgOADgOAIQgdASgXAnQgPAbgPATQgQAVgTAFQgOAFgPAAQgLAAgLgCg");
        this.shape_10.setTransform(37.7,31.3);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#A3001E").s().p("AmTEnQgjgPgmgjQgfgfgkg+IgIgNQg1hlgFhVQgNiJBrhDQA4geBSgRIAngFIA6AOQBKARBGAOIBJAOQCbAaCignIAOgDQA5gOArAJQAfADAgASIAdAMQA5AaArARIADADIAQALQAKAHAWAIQgKAUgWAYIgEAGQgaAbgyAkQgfAZgkAPIgIADQgzATgnAFQg1AIgqADIgTACQgQABgRAJQgsAagUBBIgFASQgIAagUASQgeAhgygJIgLgCQhIgTg6gSQgogKghAIQgOADgOAIQggARgYAjIgfAsQgPAVgWgDIgIAAQgSAAgVgJg");
        this.shape_11.setTransform(36.1,31);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#A3001E").s().p("AmYEmQgTgFgYgSQgggYggglQgcgngcg7IgGgOQgthqANhWQAMh8CAg2QBAgQBPgIIAmgBIA7ALQBKAPBEARIBHATQCGAjC4gYIAOgCQA6gJAqAFQAlABAbAKIAeAHQA8AQArARIgGAAQgKABgMAFQgWAIgGATIgiAqIgEAGIg/BLQgcAjgbATIgHAFQgqAcgtAFQgvAHgwgGIgUgCQgQgDgSAIQgsAUgYBEIgGARQgLAYgWAQQggAYg0gIIgLgCQhDgQg/gZQgkgMgmAJQgOADgPAHQgiAQgZAeQgTAWgPAVQgIALgMAAQgIAAgKgEg");
        this.shape_12.setTransform(36.2,31.2);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#A3001E").s().p("AoXDzQhAhNgghmQgnh7AjhZQAshvCZglICVAEQCvAPCBA3QBwAwDfgIQCBgFAiAAQBWACA2ATQgmgIgwAGQhfANgvBJQgRAageBAQgaA4gUAYQg9BJiKgwQgQgIgVAHQgqAMgdBHQgdBKhrgQQhCgKhLgmQgogUhAAaQhDAaghA0QgFAIgJAAQgVAAgsg2g");
        this.shape_13.setTransform(38.9,31.2);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A3001E").s().p("AmtEiQgSgGgYgUQgfgbgdgmQgdgpgZg6IgGgPQgqhrAShVQATh6CGgyQBDgLBNgGIAmAAIA7ALQBKAOBEASIBGAUQCAAmC/gUIAOgCQA6gHApADQAoABAYAHIAfAHQA9ANArAQIgJgBQgPAAgRAFQgfAIgOAWIgjAqIgEAGQgVAagmA1QgbAlgZAUIgHAGQgnAegvAGQguAGgxgIIgUgDQgQgEgTAHQgrASgZBFIgHAQQgMAZgWAOQghAWg0gIIgLgCQhCgOhBgcQgigMgnAJQgPADgOAHQgkAQgZAdQgTAUgPAVQgHALgMAAQgJAAgLgHg");
        this.shape_14.setTransform(36.9,31.3);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#A3001E").s().p("AlwErQgUAAgZgPQgigTgjgkQgegjggg8IgHgOQgxhnADhVQgCiDB1g+QA8gXBQgNIAngDIA6ANICPAfIBIARQCSAeCsghIANgCQA6gMArAHQAiACAdAPIAeAKQA6AVArARIgBACIgCAIQgEAIAJAMQgMAUgVAYIgEAFQgYAbguAqQgeAeggAQIgHAEQgvAYgqAFQgyAHgtgBIgTAAQgQAAgSAIQgsAXgVBCIgGASQgKAZgUARQgfAdg0gIIgKgDQhGgRg8gVQgmgLgjAIQgPADgOAIQghAQgYAhIghAsQgKAOgPAAQgGAAgGgCg");
        this.shape_15.setTransform(35,31.1);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#A3001E").s().p("AmNEtQgkgNgogjQgegdgng+IgIgOQg4higJhXQgUiLBmhHQA3giBSgSIAogHIA5APQBKARBGAOIBLANQCgAYCcgrIANgEQA5gPAsAKQAdAEAiAUQAOAGAPAIQA4AcAqARIAGAEIAZALQASAIAeAFQgJAUgWAZIgFAFQgbAbg0AhQggAWgnAOIgHADQg2ARglAFIhfANIgTADQgQADgQAIQgtAcgTBAIgFASQgHAagSAUQgeAigygIIgMgDIiBgjQgpgKggAHQgOAEgOAIQgeARgYAlIgfAsQgQAVgVgBQgHACgIAAQgPAAgSgGg");
        this.shape_16.setTransform(36.6,31.1);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#A3001E").s().p("Al9E4QglgIgtghQgfgYgshAIgJgNQg9hfgUhXQgjiTBahPQAygqBUgYIAogJIA5ARQBJASBIAMQAnAGAlAEQCtASCOgzIANgFQA5gSAtAMQAZAGAmAZIAbAQQA2AiArASIAMAFQAWAJAZAFQAlAIAugCQgFAWgYAYIgFAFQgeAcg5AZQgjAQgrALIgIACQg7ANgiAFQg5AJgmAKIgSAFQgRAFgOAJQguAggQA9IgEATQgGAbgRAWQgdAngwgJIgMgDQhLgWg2gLQgsgIgcAGQgPAEgNAIQgdASgXAoQgPAagPAUQgRAVgSAFQgOAGgRAAQgJAAgLgCg");
        this.shape_17.setTransform(37.8,31.3);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_9}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-91.9,-41.8,350.7,122);
    
    
    (lib.Symbol21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF80C3").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F260AF").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF8BD2").s().p("Ag5C1QhjgFgniEQgUhHAvg9QArg2BOgYQBMgZBBATQBHAUAUBDIAGAXQAIAcACAaQAHBSgtAaQAHgbgCgjQgBgmgOghQgihWhbgIQgwgEgmASQgiAQgWAgQgUAdgFAkQgFAkAJAiQAKAfAgATQAfATAmgBQAngBAdgWQAggYAJgtQAAg0gugPQgPgFgTABIgMABQgMAIgFAJQgOAUAmALQAXgCAJAOQADAFABAGQABAFgCADQgIAQgQAMQgeAXgqgYQgYgPgIggQgHgfAMgdQAMghAegQQAigSAvAKQAwALAZAfQAWAbACAmQACAjgPAgQgOAggXAOQhIArg7AAIgIAAg");
        this.shape_2.setTransform(26.2,25.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CE208C").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_3.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BD96FF").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D0BAFF").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATgAhACoQhkgFgmiEQgVhHAwg9QAqg2BOgYQBMgZBBATQBIAUATBDIAHAXQAHAcACAaQAHBSgtAaQAIgbgCgjQgCgmgNghQgihWhcgIQgwgEgmASQgiAQgVAgQgUAdgGAlQgFAjAKAiQAJAfAhATQAfATAlgBQAngBAdgWQAhgYAJgtQgBg0gugPQgPgFgRABIgNABQgMAIgGAJQgNAUAnALQAVgCAKAOQADAFAAAGQABAFgBADQgIAQgQAMQgfAXgpgYQgZgPgHggQgIgeAMgeQANghAegQQAigSAvAKQAvALAaAfQAWAbACAmQACAjgPAgQgPAggXAOQhIArg7AAIgHAAg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#AD5FFF").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_2.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A3D9FF").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#96B9FF").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#A3E4FF").s().p("Ag5C1QhjgFgniEQgUhHAvg9QArg2BOgYQBMgZBBATQBHAUAUBDIAGAXQAIAcACAaQAHBSgtAaQAHgbgCgjQgBgmgOghQgihWhbgIQgwgEgmASQgiAQgWAgQgUAdgFAkQgFAkAJAiQAKAfAgATQAfATAmgBQAngBAdgWQAggYAJgtQAAg0gugPQgPgFgTABIgMABQgMAIgFAJQgOAUAmALQAXgCAJAOQADAFABAGQABAFgCADQgIAQgQAMQgeAXgqgYQgYgPgIggQgHgfAMgdQAMghAegQQAigSAvAKQAwALAZAfQAWAbACAmQACAjgPAgQgOAggXAOQhIArg7AAIgIAAg");
        this.shape_2.setTransform(26.2,25.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7279FF").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_3.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A3FF80").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#96F16C").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#A3FF8F").s().p("Ag5C1QhjgFgniEQgUhHAvg9QArg2BOgYQBMgZBBATQBHAUAUBDIAGAXQAIAcACAaQAHBSgtAaQAHgbgCgjQgBgmgOghQgihWhbgIQgwgEgmASQgiAQgWAgQgUAdgFAkQgFAkAJAiQAKAfAgATQAfATAmgBQAngBAdgWQAggYAJgtQAAg0gugPQgPgFgTABIgMABQgMAIgFAJQgOAUAmALQAXgCAJAOQADAFABAGQABAFgCADQgIAQgQAMQgeAXgqgYQgYgPgIggQgHgfAMgdQAMghAegQQAigSAvAKQAwALAZAfQAWAbACAmQACAjgPAgQgOAggXAOQhIArg7AAIgIAAg");
        this.shape_2.setTransform(26.2,25.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#72B149").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_3.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF8E").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F7E27A").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFF9D").s().p("Ag5C1QhjgFgniEQgUhHAvg9QArg2BOgYQBMgZBBATQBHAUAUBDIAGAXQAIAcACAaQAHBSgtAaQAHgbgCgjQgBgmgOghQgihWhbgIQgwgEgmASQgiAQgWAgQgUAdgFAkQgFAkAJAiQAKAfAgATQAfATAmgBQAngBAdgWQAggYAJgtQAAg0gugPQgPgFgTABIgMABQgMAIgFAJQgOAUAmALQAXgCAJAOQADAFABAGQABAFgCADQgIAQgQAMQgeAXgqgYQgYgPgIggQgHgfAMgdQAMghAegQQAigSAvAKQAwALAZAfQAWAbACAmQACAjgPAgQgOAggXAOQhIArg7AAIgIAAg");
        this.shape_2.setTransform(26.2,25.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E5BE56").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_3.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFEC3").s().p("AhgDnQgtgTgjgjQgigjgTgsQgUgvAAgzQAAgyAUguQATgtAigjQAjgjAtgTQAugTAyAAQAzAAAvATQAsATAjAjQAjAjATAtQATAuAAAyQAAAzgTAvQgTAsgjAjQgjAjgsATQgvATgzAAQgyAAgugTgAhcjcQgsASghAhQghAhgSAsQgTAsAAAwQAAAxATAtQASArAhAhQAhAhAsATQAsATAwAAQAxAAAtgTQArgTAhghQAhghATgrQATgtAAgxQAAgwgTgsQgTgsghghQghghgrgSQgtgTgxAAQgwAAgsATg");
        this.shape.setTransform(27,27);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFDEAF").s().p("AhoD4QgwgUgmglQglgmgVgwQgVgyAAg3QAAg2AVgyQAVgwAlgmQAmglAwgVQAygVA2AAQA3AAAyAVQAwAVAmAlQAlAmAUAwQAWAyAAA2QAAA3gWAyQgUAwglAmQgmAlgwAUQgyAWg3AAQg2AAgygWgAhgjmQguATgiAjQgjAigSAuQgVAuABAyQgBAzAVAuQASAtAjAjQAiAiAuATQAuAUAyAAQAzAAAugUQAtgTAjgiQAigjATgtQAUguAAgzQAAgygUguQgTgugigiQgjgjgtgTQgugTgzAAQgyAAguATg");
        this.shape_1.setTransform(27,27);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFD2").s().p("Ag5C1QhjgFgniEQgUhHAvg9QArg2BOgYQBMgZBBATQBHAUAUBDIAGAXQAIAcACAaQAHBSgtAaQAHgbgCgjQgBgmgOghQgihWhbgIQgwgEgmASQgiAQgWAgQgUAdgFAkQgFAkAJAiQAKAfAgATQAfATAmgBQAngBAdgWQAggYAJgtQAAg0gugPQgPgFgTABIgMABQgMAIgFAJQgOAUAmALQAXgCAJAOQADAFABAGQABAFgCADQgIAQgQAMQgeAXgqgYQgYgPgIggQgHgfAMgdQAMghAegQQAigSAvAKQAwALAZAfQAWAbACAmQACAjgPAgQgOAggXAOQhIArg7AAIgIAAg");
        this.shape_2.setTransform(26.2,25.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF9E8C").s().p("AhdDdQgrgSghghQghgigSgqQgUgtABgxQgBgwAUgtQASgrAhghQAhghArgSQAtgUAwABQAxgBAtAUQAqASAiAhQAhAhASArQAUAtgBAwQABAxgUAtQgSAqghAiQgiAhgqASQgtAUgxgBQgwABgtgUgAg3i0QhOAZgqA2QgwA9AVBHQAmCEBjAFQA/ADBMguQAXgOAPggQAOghgCgiQgCgmgVgbQgagfgvgLQgvgKgjASQgeAQgMAgQgMAfAHAeQAIAgAZAOQApAZAfgXQAPgMAJgRQABgCgBgGQgBgGgDgEQgJgOgVACQgogLAOgUQAGgJAMgJIAMgBQASAAAPAFQAuAPAAA0QgJAtggAYQgdAWgnABQglAAgggSQgggTgJgfQgKgiAFgjQAFglAVgdQAVggAigRQAmgRAwAEQBbAIAjBVQANAiABAmQACAjgHAbQAtgagHhSQgCgagHgcIgHgYQgUhChHgUQgcgJgeAAQgnAAgsAOg");
        this.shape_3.setTransform(27,27);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,54,54), null);
    
    
    (lib.Symbol11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap5();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,93,20), null);
    
    
    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap2();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,97,50), null);
    
    
    (lib.Symbol3_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFA0F7").s().p("AgXA9QgVgOgRgUQgUgXgEgUQgFgaAUgRIAJgHIARgFIAEgBQAFAAAGACIAKAGIACABQgUgCgPAIQgTAJACAWQACAcAVAZQAaAeArAIIgKAFIgIADIgCAAQgHAAgTgMgAAFguIAJgHIABgBIARgKIADgCIABAAIADgCQAHgCAGgBQATgCANAOIADAEQgcgSgWAOQgHAEgFAGIgEAGg");
        this.shape_1.setTransform(8.7,7.3);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#D38DCB").s().p("AAJA/QgsgIgageQgVgZgCgcQgBgWATgJQAPgIAUACQAGADAIAJQAHAGACgBIAOADIAEgGQAGgGAHgEQAWgOAbASQAFAGADAIQASApgtAlQgPANgVALIgRAJIAJgFg");
        this.shape_2.setTransform(10.2,7.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,18.7,14.6), null);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("Aj6O+QgigHh/gkIigjKIgrgTIhAlNIAtgiQgghsgHhsQgEg/AWg+QAziRA1iRIAWgLIAjArICEg3IBah1IBWBSIBRhSIhniBIgViUIAiiDICThtIChgUIC7BtIA2DaIh9DXICkDCIBOAYICIFeIg2DxIB9BxIg7F6QhqAyhvAWIgggSIjmArQiBAYhkAAQg+AAhkgYg");
        this.shape.setTransform(67.9,98.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,135.8,196.4), null);
    
    
    (lib.round_l = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiVCWIAAkrIErAAIAAErg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.round_l, new cjs.Rectangle(-44.2,-18.7,88.4,41.8), null);
    
    
    (lib.fxstar1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0.106,0.439,0.839],0.5,0.2,0,0.5,0.2,29.7).s().p("AgMDDQgFhJgBhkIivgGQhSgGgBgJQABgJBSgGICvgGQABhmAFhKQAGhQAIABQAJgBAGBQQAFBKABBmICuAGIA3AFQAZAFAAAFQAAAFgZAEIg3AGIiuAGQgBBkgFBJQgGBSgJAAQgIAAgGhSg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.62,0.839],0,0,0,0,0,15.7).s().p("AhkBlQgqgrAAg6QAAg6AqgqQApgqA7AAQA6AAArAqQAqAqAAA6QAAA6gqArQgrAqg6AAQg7AAgpgqg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.fxstar1, new cjs.Rectangle(-27.6,-27.6,55.4,55.3), null);
    
    
    (lib.Tween34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween33();
        this.instance.parent = this;
        this.instance.setTransform(17.6,0.1,1,1,0,26.8,-153.2,-14.7,-10.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.3,-13,36,32.3);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* //stop();*/
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107));
    
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ABMB9QgYgGgVAAIgLABQgSgZgJglQgUhFAahFIAEgJQAGgLAJgKQAageAlgCQASgCASAJQASAJAOASQAaAgAHAwQAIAugMA3IgEAEIghAfQgVAVgIAOQgLgLgZgHgAhSAfQgLgHgRgFQgcgIgiAAIgMAAIAAgBQAGghANgfQAag+AqgCQAHAAAGAIQAKAMADAbQAEAngNA/IAAABg");
        mask.setTransform(-0.6,-4.4);
    
        // Layer 3
        this.instance = new lib.f5("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(18.2,-33.2,0.471,0.471);
        this.instance._off = true;
    
        this.instance_1 = new lib.f6("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(9.8,-4.7,0.471,0.471);
        this.instance_1._off = true;
    
        var maskedShapeInstanceList = [this.instance,this.instance_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({_off:true,x:9.8,y:-4.7},4).wait(1).to({_off:false,x:18.2,y:-33.2},2).wait(4).to({startPosition:0},0).to({_off:true,x:9.8,y:-4.7},4).wait(1).to({_off:false,x:18.2,y:-33.2},2).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},4).wait(1).to({startPosition:0},0).to({_off:true,x:18.2,y:-33.2},2).wait(4).to({_off:false,x:9.8,y:-4.7},4).wait(1).to({startPosition:0},0).to({_off:true,x:18.2,y:-33.2},2).wait(1));
    
        // Layer 4
        this.instance_2 = new lib.f1("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-7.1,-25.2,0.471,0.471);
        this.instance_2._off = true;
    
        this.instance_3 = new lib.f4("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-13.2,-11,0.471,0.471);
        this.instance_3._off = true;
    
        var maskedShapeInstanceList = [this.instance_2,this.instance_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).to({_off:true,x:-13.2,y:-11},4).wait(1).to({_off:false,x:-7.1,y:-25.2},2).wait(4).to({startPosition:0},0).to({_off:true,x:-13.2,y:-11},4).wait(1).to({_off:false,x:-7.1,y:-25.2},2).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({_off:false},4).wait(1).to({startPosition:0},0).to({_off:true,x:-7.1,y:-25.2},2).wait(4).to({_off:false,x:-13.2,y:-11},4).wait(1).to({startPosition:0},0).to({_off:true,x:-7.1,y:-25.2},2).wait(1));
    
        // Layer 1
        this.instance_4 = new lib.Bitmap9();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-39.2,-32.2,1.5,1.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-39.3,-32.2,78.6,64.5);
    
    
    (lib.Tween12col2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 8
        this.instance = new lib.Symbol21();
        this.instance.parent = this;
        this.instance.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({alpha:1},30).wait(1));
    
        // Layer 7
        this.instance_1 = new lib.Symbol20();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},30).wait(31));
    
        // Layer 6
        this.instance_2 = new lib.Symbol19();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},30).to({_off:true},31).wait(30));
    
        // Layer 5
        this.instance_3 = new lib.Symbol18();
        this.instance_3.parent = this;
        this.instance_3.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},30).to({_off:true},31).wait(60));
    
        // Layer 4
        this.instance_4 = new lib.Symbol17();
        this.instance_4.parent = this;
        this.instance_4.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance_4.alpha = 0;
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({alpha:1},30).to({_off:true},31).wait(90));
    
        // Layer 3
        this.instance_5 = new lib.Symbol16();
        this.instance_5.parent = this;
        this.instance_5.setTransform(0,0,1,1,0,0,0,27,27);
        this.instance_5.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},29).to({_off:true},31).wait(120));
    
        // Layer 2
        this.instance_6 = new lib.Symbol21();
        this.instance_6.parent = this;
        this.instance_6.setTransform(0,0,1,1,0,0,0,27,27);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(150));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);
    
    
    (lib.mai2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.instance = new lib.Tween9("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(96,35.6);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({startPosition:0},12).to({alpha:0},3).to({_off:true},1).wait(20));
    
        // Layer 1
        this.instance_1 = new lib.Tween10("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(27.1,26.8);
        this.instance_1.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({startPosition:0},12).to({alpha:0},3).to({_off:true},1).wait(20));
    
        // Layer 4
        this.instance_2 = new lib.Bitmap23();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0.1,0,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,122.8,59.6);
    
    
    (lib.mai1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween4("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(23.8,25.9);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(9).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(7));
    
        // Layer 3
        this.instance_1 = new lib.Bitmap24();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.1,0.1,1.61,1.61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.1,0,48.3,51.6);
    
    
    (lib.keocol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween12col2();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},39).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Tween27("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-10.9,-11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-87.1,-33.9,175.5,72.7);
    
    
    (lib.khanbay_dino = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.baybay_dino();
        this.instance.parent = this;
        this.instance.setTransform(-1.5,29.6,1,1,0,0,0,-2.2,18.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:38.7,regY:25.5,rotation:1.8,x:39.2,y:37.9},0).wait(1).to({rotation:3.5,x:38.9,y:39.1},0).wait(1).to({rotation:5.1,x:38.6,y:40.1},0).wait(1).to({rotation:6.4,x:38.4,y:41.1},0).wait(1).to({rotation:7.6,x:38.1,y:41.9},0).wait(1).to({rotation:8.7,x:37.9,y:42.6},0).wait(1).to({rotation:9.6,x:37.7,y:43.2},0).wait(1).to({regX:-2.2,regY:18.2,rotation:10.3,x:-1.4,y:29.4},0).wait(1).to({regX:38.7,regY:25.5,rotation:8.1,x:38,y:42.4},0).wait(1).to({rotation:5.8,x:38.5,y:40.7},0).wait(1).to({rotation:3.4,x:38.9,y:39},0).wait(1).to({rotation:0.8,x:39.3,y:37.3},0).wait(1).to({rotation:-1.9,x:39.6,y:35.4},0).wait(1).to({rotation:-4.6,x:39.8,y:33.3},0).wait(1).to({rotation:-7.6,x:40,y:31.2},0).wait(1).to({rotation:-10.6,y:29},0).wait(1).to({regX:-2.4,regY:18.1,rotation:-13.7,x:-1.7,y:29.4},0).wait(1).to({regX:38.7,regY:25.5,rotation:-11.5,x:40.1,y:28.4},0).wait(1).to({rotation:-9.5,y:29.9},0).wait(1).to({rotation:-7.6,y:31.3},0).wait(1).to({rotation:-5.9,y:32.5},0).wait(1).to({rotation:-4.4,x:40,y:33.7},0).wait(1).to({rotation:-3,x:39.9,y:34.7},0).wait(1).to({rotation:-1.9,x:39.7,y:35.6},0).wait(1).to({rotation:-0.8,x:39.6,y:36.3},0).wait(1).to({regX:-2.2,regY:18.4,rotation:0,x:-1.5,y:29.6},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.1,-1.6,131.1,76.4);
    
    
    (lib.dino = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.dB = new lib.Tween28();
        this.dB.parent = this;
        this.dB.setTransform(273.6,283.2);
    
        this.timeline.addTween(cjs.Tween.get(this.dB).wait(34).to({x:276.6,y:268.2},6).to({x:289.1,y:267.2},9).to({rotation:15,x:291.1,y:211.2},16).to({rotation:0,x:305.7,y:212.7},12).to({y:232.7},15).to({rotation:-15,x:302.7,y:223},15).to({rotation:0,x:309.2,y:214},18).to({skewY:180,x:313.7,y:213.2},1).to({y:235.5},20).to({skewX:-20,skewY:160,x:310.7,y:213.7},13).to({skewX:0,skewY:180,x:301.9,y:220.7},15).to({skewY:0,x:290.2},1).to({x:273.6,y:288.7},19,cjs.Ease.get(0.65)).to({y:283.2},5).wait(1));
    
        // Layer 2
        this.instance = new lib.Tween29();
        this.instance.parent = this;
        this.instance.setTransform(267,340.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({x:270,y:329,mode:"synched",startPosition:0},6).to({x:282.5,y:324.1},9).to({x:284.6,y:264.1},16).to({x:299.1,y:269.6},12).to({scaleY:1.21,y:288.8},15).to({scaleY:1.12,x:302.6,y:278.2},15).to({scaleY:1.08,y:268.7},18).to({scaleY:1,x:305.6,y:289.4},21).to({x:302.6,y:267.9},13).to({x:289.6,y:272.9},16).to({x:267,y:340.1,mode:"independent"},19,cjs.Ease.get(0.65)).wait(6));
    
        // Layer 3
        this.instance_1 = new lib.Tween30();
        this.instance_1.parent = this;
        this.instance_1.setTransform(273.6,336.6,1,1,0,0,0,-14.3,-13.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({regY:-13.3,scaleX:1.04,skewX:10.2,skewY:26.1,x:274.6,y:334.7},2).to({regX:-14.4,scaleX:1,rotation:-15,skewX:0,skewY:0,x:275.5,y:330.1,mode:"synched",startPosition:0},4).to({regX:-14.3,regY:-13.2,rotation:0,x:289.1,y:320.6},9).to({scaleX:1,scaleY:1,rotation:-12.3,x:290.8,y:263.1},16).to({regY:-13.3,scaleX:1,scaleY:1,rotation:-32.3,x:305,y:268.8},12).to({regY:-13.2,scaleX:1,scaleY:1,rotation:-54.7,x:305.8,y:293.4},15).to({regX:-14.2,regY:-13.1,rotation:-64.2,x:309.3,y:283.6},15).to({regX:-14.3,regY:-13.2,rotation:-28.8,y:274.7},18).to({rotation:-67.2,x:312.3,y:296.2},21).to({rotation:-24.7,x:309.3,y:274.7},13).to({rotation:-32.8,x:296.4,y:279.7},16).to({rotation:0,x:273.6,y:336.6,mode:"independent"},19,cjs.Ease.get(0.65)).wait(6));
    
        // Layer 4
        this.instance_2 = new lib.Tween31();
        this.instance_2.parent = this;
        this.instance_2.setTransform(275,338,1,1,0,0,0,18.4,-12.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({mode:"synched",startPosition:0},34,cjs.Ease.get(0.54)).to({scaleX:1.03,skewX:3.3,skewY:-9.8,x:278,y:336.2},2).to({regY:-12.5,scaleX:1,rotation:10.5,skewX:0,skewY:0,x:277,y:331.5},4).to({regY:-12.6,rotation:4.2,x:290.6,y:321.9},9).to({scaleX:1,scaleY:1,rotation:18.6,x:290.2,y:266.5},16).to({scaleX:1,scaleY:1,rotation:34.3,x:303.4,y:271.6},12).to({regY:-12.5,scaleX:1,scaleY:1,rotation:52.1,x:299.6,y:294.3},15).to({rotation:56.8,x:303.1,y:284.6},15).to({regY:-12.6,rotation:2.4,x:313.4,y:272.7},18).to({regY:-12.5,rotation:60.3,x:306.1,y:297.1},21).to({rotation:22.1,x:308.6,y:275.5},13).to({regY:-12.6,rotation:24.6,x:294.7,y:280.4},16).to({rotation:0,x:275,y:338,mode:"independent"},19,cjs.Ease.get(0.65)).wait(6));
    
        // flash0.ai
        this.instance_3 = new lib.Tween32();
        this.instance_3.parent = this;
        this.instance_3.setTransform(267,327.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({x:270,y:312.2,mode:"synched",startPosition:0},6).to({x:282.5,y:311.6},9).to({x:284.6,y:251.7},16).to({x:299.1,y:257.2},12).to({y:275.7},15).to({x:302.6,y:265.9},15).to({y:256.9},18).to({x:305.6,y:278.4},21).to({x:302.6,y:256.9},13).to({x:289.6,y:261.9},16).to({x:267,y:330.7,mode:"independent"},19,cjs.Ease.get(0.65)).to({y:327.7},5).wait(1));
    
        // Layer 6
        this.instance_4 = new lib.Tween33();
        this.instance_4.parent = this;
        this.instance_4.setTransform(275.8,310.9,1,1,0,0,0,-14.8,-10.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-10.7,rotation:-30},8,cjs.Ease.get(1)).wait(24).to({rotation:-8.8,x:283.1,y:294.5},8).to({regY:-10.6,rotation:15,x:291.3,y:293.1},9).to({rotation:0,x:293.3,y:234.9,mode:"synched",startPosition:0},16).to({x:307.9,y:240.4},12).to({rotation:-15,y:257.4},15).to({rotation:0,x:311.4,y:247.7},15).to({rotation:-15,y:238.7},18).to({rotation:0,x:314.4,y:260.2},21).to({rotation:-15,x:311.4,y:238.7},13).to({x:298.4,y:243.7},16).to({rotation:0,x:275.8,y:313.4,mode:"independent"},19,cjs.Ease.get(0.65)).to({y:310.9},5).wait(1));
    
        // Layer 7
        this.instance_5 = new lib.Tween34();
        this.instance_5.parent = this;
        this.instance_5.setTransform(263.8,314.8,1,1,0,0,0,13.5,0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:13.4,rotation:30},8,cjs.Ease.get(1)).wait(24).to({rotation:1.8,x:271.1,y:298.5},8).to({rotation:-30,x:279.3,y:297.1},9).to({regX:13.5,rotation:0,x:281.4,y:238.8,mode:"synched",startPosition:0},16).to({x:295.9,y:244.3},12).to({rotation:10.5,y:261.3},15).to({regY:-0.1,rotation:-12.5,x:299.4,y:251.5},15).to({regY:0,rotation:10.5,y:242.6},18).to({regX:13.4,regY:0.1,rotation:-19.5,x:302.4,y:264.1},21).to({regX:13.5,regY:0,rotation:10.5,x:299.4,y:242.6},13).to({x:286.4,y:247.6},16).to({rotation:0,x:263.8,y:317.3,mode:"independent"},19,cjs.Ease.get(0.65)).to({y:314.8},5).wait(1));
    
        // Layer 8
        this.instance_6 = new lib.Tween35();
        this.instance_6.parent = this;
        this.instance_6.setTransform(280.9,337.4,1,1,0,0,0,-14.3,-7.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-14.2,rotation:-57.4,mode:"synched",startPosition:0},29,cjs.Ease.get(1)).to({regX:-14.3,regY:-7.9,rotation:2.6},7,cjs.Ease.get(1)).to({regX:22.6,regY:12.2,rotation:6,x:315.3,y:360.3},1).to({startPosition:0},5).to({scaleX:0.96,scaleY:1,rotation:47.1,x:302.2,y:354.3},9).to({regY:12.3,scaleX:0.91,rotation:33.6,x:311.2,y:307.2},14).to({scaleX:0.82,scaleY:1,rotation:77.2,x:303.3,y:306.8},12).to({regY:12.2,scaleX:0.76,rotation:0,skewX:47.2,skewY:43.6,x:315.4,y:323.9},15).to({regX:22.7,scaleX:0.67,scaleY:0.94,x:315.1,y:300.8},15).to({regX:22.6,regY:12.3,scaleX:0.75,scaleY:1,skewX:-47.2,skewY:136.4,x:290.7,y:293},18).to({skewX:-2.2,skewY:181.4,x:272.8,y:309.5},21).to({regY:12.2,scaleX:0.76,scaleY:1,skewX:47.2,skewY:43.6,x:315.4,y:290.4},13).to({regX:22.5,skewX:28.5,skewY:24.9,y:306.8},16).to({regX:24.1,regY:12,scaleX:1,skewX:0,skewY:0,x:319.3,y:357.7,mode:"independent"},19,cjs.Ease.get(0.65)).to({y:357.2},5).wait(1));
    
        // Layer 5
        this.instance_7 = new lib.khanbay_dino();
        this.instance_7.parent = this;
        this.instance_7.setTransform(311.3,321,0.504,0.504,0,0,0,39.4,36.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({x:318.6,y:302.7},18).to({x:326.4,y:245.5},14).to({x:331.4,y:257},12).to({x:335.6,y:272.7},15).to({x:340.4,y:261.5},15).to({x:342.9,y:255.8},18).to({x:344.9,y:274.8},21).to({x:346.6,y:255},13).to({x:330.6,y:257.3},16).to({x:311.3,y:321},19).wait(6));
    
        // Layer 9
        this.instance_8 = new lib.Symbol3("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(282.2,356.8,1,1,0,0,0,45.8,8.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},33).to({scaleX:0.77,scaleY:0.77},18).to({regY:8.6,scaleX:0.54,scaleY:0.54,x:284.5},14).to({regY:8.5,scaleX:0.65,scaleY:0.65,x:298.2,y:356.7},27).to({regY:8.6,scaleX:0.46,scaleY:0.46},15).to({scaleX:0.53,scaleY:0.53},18).to({scaleX:0.66,scaleY:0.66,x:307,y:354.5},21).to({regY:8.5,scaleX:0.45,scaleY:0.45},13).to({x:287.7},16).to({scaleX:1,scaleY:1,x:282.2,y:356.8},19).to({startPosition:0},5).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(232,251,112.4,123.1);
    
    
    (lib.Symbol15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B7EE8D").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape.setTransform(74.2,9.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E8F395").s().p("AiPAjIgOgEQgJgIAAgJQAAgTAxgPQAxgPBEAAQBFAAAxAPQAxAPAAATQAAAIgHAHIgUAGIAAAAQAAgTgpgMQgpgLg6AAQg5AAgpALQgqAMAAATIABABIgEgBg");
        this.shape_1.setTransform(74.5,10.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E8FFB8").s().p("AiLATIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAqAMAAASIAAAAIgCAAIgcAHQgMgJgZgFQgggIgqAAQgqAAgiAIQgXAGgMAIIgcgGg");
        this.shape_2.setTransform(74.5,12.4);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E8FFCA").s().p("AhvAHQAMgHAYgGQAhgIAqAAQAqAAAgAHQAZAGANAHQgyAJg/AAQg9AAgxgIg");
        this.shape_3.setTransform(74.4,14.3);
    
        this.instance = new lib.Symbol11();
        this.instance.parent = this;
        this.instance.setTransform(57.7,94.8,1,1,0,0,0,46.5,10);
        this.instance.alpha = 0;
    
        this.instance_1 = new lib.Tween14("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(57.8,94.9,0.621,0.621);
        this.instance_1.filters = [new cjs.ColorFilter(0.94, 0.94, 0.94, 1, 0, 0, 0, 0)];
        this.instance_1.cache(-77,-18,154,36);
    
        this.instance_2 = new lib.Symbol9();
        this.instance_2.parent = this;
        this.instance_2.setTransform(58.3,113.2,1,1,0,0,0,48.5,25);
    
        this.instance_3 = new lib.Bitmap28();
        this.instance_3.parent = this;
        this.instance_3.setTransform(9.8,88.2);
    
        this.instance_4 = new lib.Tween26("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(111.1,45,0.621,0.621,0,0,0,0,13.8);
    
        this.instance_5 = new lib.Tween22("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(110,68.7,0.621,0.621,0,0,0,0,39.6);
    
        this.instance_6 = new lib.Tween23("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(109.7,96.3,0.621,0.621,0,0,0,0,26.1);
    
        this.instance_7 = new lib.Tween24("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(109.4,133.7,0.621,0.621,0,0,0,0,34.3);
    
        this.instance_8 = new lib.Tween17("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(111.1,76.9,0.621,0.621);
    
        this.instance_9 = new lib.Tween25("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(16.8,27.5,0.621,0.621);
    
        this.instance_10 = new lib.Tween19("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(16.9,59.6,0.621,0.621,0,0,0,0,38.5);
    
        this.instance_11 = new lib.Tween20("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(15.9,80.5,0.621,0.621,0,0,0,0,22.7);
    
        this.instance_12 = new lib.Tween21("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(15.4,111.6,0.621,0.621,0,0,0,0,29.9);
    
        this.instance_13 = new lib.Tween18("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(60.6,70.1,0.621,0.621);
    
        this.instance_14 = new lib.Bitmap3();
        this.instance_14.parent = this;
        this.instance_14.setTransform(41.1,55.3);
    
        this.instance_15 = new lib.mai2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(63.9,92.7,0.621,0.621,0,0,0,61.4,29.9);
    
        this.instance_16 = new lib.mai1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(92.6,71.5,0.621,0.621,0,0,0,23.8,25.9);
    
        this.instance_17 = new lib.Symbol3_1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(69.3,46.8,1,1,0,0,0,9.3,7.3);
        this.instance_17.alpha = 0;
    
        this.instance_18 = new lib.Symbol2();
        this.instance_18.parent = this;
        this.instance_18.setTransform(69.4,46.7,0.621,0.621,0,0,0,15.1,11.7);
    
        this.instance_19 = new lib.Bitmap26();
        this.instance_19.parent = this;
        this.instance_19.setTransform(9.7,0);
    
        this.instance_20 = new lib.mai1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(44.5,63.3,0.621,0.621,0,0,0,23.8,25.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,132.7,138.2), null);
    
    
    (lib.Symbol4col2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Symbol 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AlUGHQilhgg3h7Qg0h3A8hzQA9h2ChhVQCthbD7ggQGyg4AzDyQAQBMgYBgQgMAwgPAhQgbBYhyBNQhlBDiYAwQiKAsiKARQhCAIg1AAQg3AAgogJg");
        this.shape.setTransform(4.9,14.5,0.246,0.246);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        // keo
        this.instance = new lib.keocol2();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4col2, new cjs.Rectangle(-102,-78.5,129,105.8), null);
    
    
    (lib.FxSprink3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 3
        this.r5 = new lib.round_l();
        this.r5.parent = this;
        this.r5.setTransform(0,0,0.2,0.2);
        this.r5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
        this.r5.cache(-46,-21,92,46);
    
        this.r4 = new lib.round_l();
        this.r4.parent = this;
        this.r4.setTransform(0,0,0.2,0.2);
        this.r4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
        this.r4.cache(-46,-21,92,46);
    
        this.r3 = new lib.round_l();
        this.r3.parent = this;
        this.r3.setTransform(0,0,0.2,0.2);
        this.r3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 0, 0)];
        this.r3.cache(-46,-21,92,46);
    
        this.r2 = new lib.round_l();
        this.r2.parent = this;
        this.r2.setTransform(0,0,0.2,0.2);
        this.r2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 255, 0)];
        this.r2.cache(-46,-21,92,46);
    
        this.r1 = new lib.round_l();
        this.r1.parent = this;
        this.r1.setTransform(0,0,0.2,0.2);
        this.r1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 255, 0)];
        this.r1.cache(-46,-21,92,46);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.r4},{t:this.r5}]}).wait(1));
    
        // Layer 2
        this.s8 = new lib.fxstar1();
        this.s8.parent = this;
        this.s8.setTransform(-5.5,12.4);
    
        this.s7 = new lib.fxstar1();
        this.s7.parent = this;
        this.s7.setTransform(-30,25.9);
    
        this.s6 = new lib.fxstar1();
        this.s6.parent = this;
        this.s6.setTransform(-49.7,0.9);
    
        this.s5 = new lib.fxstar1();
        this.s5.parent = this;
        this.s5.setTransform(18.3,29.4);
    
        this.s4 = new lib.fxstar1();
        this.s4.parent = this;
        this.s4.setTransform(41.3,-9.6);
    
        this.s3 = new lib.fxstar1();
        this.s3.parent = this;
        this.s3.setTransform(31,-44.1);
    
        this.s2 = new lib.fxstar1();
        this.s2.parent = this;
        this.s2.setTransform(-16,-47.1);
    
        this.s1 = new lib.fxstar1();
        this.s1.parent = this;
        this.s1.setTransform(-59,-44.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.s6},{t:this.s7},{t:this.s8}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.FxSprink3, new cjs.Rectangle(-86.6,-74.8,155.6,131.8), null);
    
    
    (lib.mThkm_resize = function(mode,startPosition,loop) {
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
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79));
    
        // Layer 6
        this.instance = new lib.Symbol15();
        this.instance.parent = this;
        this.instance.setTransform(122.3,194,1,1,0,0,0,66.3,69);
        this.instance.cache(-2,-2,137,142);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(78));
    
        // Layer 7
        this.instance_1 = new lib.Symbol11();
        this.instance_1.parent = this;
        this.instance_1.setTransform(113.7,219.8,1,1,0,0,0,46.5,10);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},16).to({alpha:0},21).to({alpha:1},20).to({alpha:0},20).wait(1));
    
        // Layer 12 copy
        this.instance_2 = new lib.Tween14("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(113.8,219.9,0.621,0.621);
        this.instance_2._off = true;
        this.instance_2.filters = [new cjs.ColorFilter(0.94, 0.94, 0.94, 1, 0, 0, 0, 0)];
        this.instance_2.cache(-77,-18,154,36);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(78));
    
        // Layer 2
        this.instance_3 = new lib.Symbol9();
        this.instance_3.parent = this;
        this.instance_3.setTransform(114.3,238.2,1,1,0,0,0,48.5,25);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:0},16).wait(41).to({alpha:1},20).wait(1));
    
        // Layer 25 copy opt
        this.instance_4 = new lib.Bitmap28();
        this.instance_4.parent = this;
        this.instance_4.setTransform(65.8,213.2);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(78));
    
        // Layer 17
        this.instance_5 = new lib.Tween26("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(167.1,170,0.621,0.621,0,0,0,0,13.8);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleY:0.58,y:178.7},11).to({y:133.6},11).to({y:177.4},14).to({y:169.7},17).to({scaleY:0.62,y:170},24).wait(1));
    
        // Layer 22
        this.instance_6 = new lib.Tween22("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(166,193.7,0.621,0.621,0,0,0,0,39.6);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleY:0.57,y:201.9},11).to({scaleY:0.66,y:168.5},11).to({y:192.5},6).to({y:199.8},3).to({scaleY:0.65,y:202},1).to({scaleY:0.57,y:201.9},7).to({scaleY:0.62,y:193.7},14).to({startPosition:0},24).wait(1));
    
        // Layer 23
        this.instance_7 = new lib.Tween23("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(165.7,221.3,0.621,0.621,0,0,0,0,26.1);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regY:26.2,scaleY:0.54,y:226},11).to({regY:26.1,y:217},9).to({regY:26.2,y:224.6},5).to({scaleY:0.51,y:226.6},3).to({scaleY:0.54},3).to({y:226.7},1).to({y:226},7).to({regY:26.1,scaleY:0.62,y:221.3},14).to({startPosition:0},24).wait(1));
    
        // flash0.ai
        this.instance_8 = new lib.Tween24("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(165.4,258.7,0.621,0.621,0,0,0,0,34.3);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({regY:34.2,scaleY:0.55},11).to({scaleY:0.62},3).to({scaleY:0.54},18).to({scaleY:0.55},7).to({regY:34.3,scaleY:0.62},14).to({startPosition:0},24).wait(1));
    
        // Layer 15
        this.instance_9 = new lib.Tween17("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(167.1,201.9,0.621,0.621);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({startPosition:0},11).to({startPosition:0},18).to({scaleY:0.68,y:196.4},10).to({scaleY:0.64,y:199.9},3).to({scaleY:0.64,y:200.7},11).to({scaleY:0.62,y:201.9},24).wait(1));
    
        // Layer 9
        this.instance_10 = new lib.Tween25("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(72.8,152.5,0.621,0.621);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({x:72.6,y:157.6},11).to({y:125.6},8).to({y:117.6},3).to({y:154.5},10).to({y:154.1},4).to({y:152.1},12).wait(30));
    
        // Layer 19
        this.instance_11 = new lib.Tween19("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(72.9,184.6,0.621,0.621,0,0,0,0,38.5);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({scaleY:0.61,y:189.4},11).to({regY:38.4,scaleY:0.69,y:168.4},8).to({scaleY:0.71,y:160.6},3).to({regY:38.5,scaleY:0.61,y:189.4},6).to({regY:38.4,scaleY:0.61,y:188.7},2).to({startPosition:0},2).to({regY:38.5,scaleY:0.62,y:184.6},16).wait(30));
    
        // Layer 20
        this.instance_12 = new lib.Tween20("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(71.9,205.5,0.621,0.621,0,0,0,0,22.7);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({scaleY:0.55,y:209.2},11).to({regY:22.8,scaleY:0.57,y:194.9},10).to({regY:22.7,scaleY:0.55,y:209.2},5).to({y:210},2).to({scaleY:0.57,y:209.1},2).to({startPosition:0},2).to({scaleY:0.62,y:205.5},16).wait(30));
    
        // Layer 21
        this.instance_13 = new lib.Tween21("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(71.4,236.6,0.621,0.621,0,0,0,0,29.9);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({scaleY:0.5},11).to({scaleY:0.59},3).to({scaleY:0.56},7).to({startPosition:0},5).to({scaleY:0.53},2).to({startPosition:0},4).to({scaleY:0.62},16).wait(30));
    
        // Layer 16
        this.instance_14 = new lib.Tween18("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(116.6,195.1,0.621,0.621);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({scaleX:0.71,scaleY:0.71},12).to({scaleX:0.62,scaleY:0.62},14).to({scaleX:0.71,scaleY:0.71},12).to({scaleX:0.62,scaleY:0.62},12).to({scaleX:0.71,scaleY:0.71},10).to({scaleX:0.62,scaleY:0.62},17).wait(1));
    
        // flash0.ai
        this.instance_15 = new lib.Bitmap3();
        this.instance_15.parent = this;
        this.instance_15.setTransform(97.1,180.3);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(78));
    
        // Layer 1
        this.instance_16 = new lib.mai2();
        this.instance_16.parent = this;
        this.instance_16.setTransform(119.9,217.7,0.621,0.621,0,0,0,61.4,29.9);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(78));
    
        // Layer 4
        this.instance_17 = new lib.mai1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(148.6,196.5,0.621,0.621,0,0,0,23.8,25.9);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(78));
    
        // Layer 13 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E8FFCA").s().p("AhvAHQAMgHAYgGQAhgIAqAAQAqAAAgAHQAZAGANAHQgyAJg/AAQg9AAgxgIg");
        this.shape.setTransform(130.4,139.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E8FFB8").s().p("AiLATIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAqAMAAASIAAAAIgCAAIgcAHQgMgJgZgFQgggIgqAAQgqAAgiAIQgXAGgMAIIgcgGg");
        this.shape_1.setTransform(130.5,137.4);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E8F395").s().p("AiPAjIgOgEQgJgIAAgJQAAgTAxgPQAxgPBEAAQBFAAAxAPQAxAPAAATQAAAIgHAHIgUAGIAAAAQAAgTgpgMQgpgLg6AAQg5AAgpALQgqAMAAATIABABIgEgBg");
        this.shape_2.setTransform(130.5,135.8);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B7EE8D").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_3.setTransform(130.2,134.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#BBEE92").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_4.setTransform(130.2,134.7);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E9F39A").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_5.setTransform(130.5,135.7);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#E9FFCD").s().p("AhZALIgUgEIgCAAIgBAAQAKgIAZgGQAmgIAnAAQAsABAfAGQAcAHAKAHIgCABIgFAAIgWAEQgnAFgtAAQgyAAgngFg");
        this.shape_6.setTransform(130.4,139.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E9FFBC").s().p("AiKATIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMIACABIACABIACAAQAjALABARIgeAHIgBgBIADAAQgLgIgbgHQgfgHgsAAQgnAAgmAIQgZAGgLAJIACAAIACAAIgBAAIgcgGg");
        this.shape_7.setTransform(130.5,137.4);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BFEF98").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_8.setTransform(130.2,134.7);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#EBF4A0").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_9.setTransform(130.5,135.7);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#EBFFD0").s().p("AhaALIgUgDIgCAAIgCAAQALgJAZgGQAlgJApAAQAtABAgAHQAbAHALAHIgEABIgDABIgWADQgnAGgvAAQgzAAgngGg");
        this.shape_10.setTransform(130.4,139.1);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#EBFFC0").s().p("AiKATIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMIACABIACABIACAAQAjALABARIgeAHIgBgBIAFgBQgLgIgcgHQgfgIgtAAQgpAAgmAJQgZAGgLAJIACABIADAAIgcgGg");
        this.shape_11.setTransform(130.5,137.4);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#C4EF9D").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_12.setTransform(130.2,134.7);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#ECF4A5").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_13.setTransform(130.5,135.7);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#ECFFD3").s().p("AhcAMIgRgDIgBAAIgFgBIgBAAIAAAAQAKgJAagHQAngJApAAQAuABAfAHQAdAHAKAIIgFACIAAAAIgYAEQgnAGgwAAQg0AAgogGg");
        this.shape_14.setTransform(130.4,139);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#ECFFC5").s().p("ABuAZIAGgDQgKgJgdgGQgggHgtgBQgqAAgmAIQgbAIgJAJIAAABIgWgGIgBAAIgBgBQAAgSAqgLQApgNA5AAQA7AAAoANQAhAKAHAMIACAHIgeAHIgBAAg");
        this.shape_15.setTransform(130.5,137.4);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C8EFA2").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_16.setTransform(130.2,134.7);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#EDF4AA").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_17.setTransform(130.5,135.7);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#EDFFD6").s().p("Ah0ANIgBAAIAAgBQAIgKAbgGQAngJArAAQAuAAAgAIQAdAGALAJIgFADIgCAAQgOgFgWgEQgigEgpAAQgqAAghAFQgWAEgMAFIgHgBg");
        this.shape_18.setTransform(130.4,138.5);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#EDFFC9").s().p("AheAYIgQgDQANgGAWgEQAggFArAAQApAAAhAFQAWADAOAGIACgBIAFgDQgKgIgdgIQghgGgtgBQgrAAgnAJQgbAHgIAKIAAAAIABAAIAGACIAAAAIgcgGIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAhAKAHANIACAHIgeAGIgBAAIgVAEQgpAFgwAAQg1AAgpgFg");
        this.shape_19.setTransform(130.5,137.9);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#CCEFA8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_20.setTransform(130.2,134.7);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#EFFFDA").s().p("Ah1ANIgCAAQAIgKAcgHQAngKAsAAQAvAAAhAIQAeAHAKAJIgFADIgEABQgPgEgVgEQghgEgpAAQgrABggAEQgWADgNAFIgIgCg");
        this.shape_21.setTransform(130.4,138.4);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#EFFFCD").s().p("AhfAlIgPgDQANgEAWgEQAggEArAAQApAAAhAEQAVADAPAFIgUADQgpAGgxAAQg2AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAEgBIAFgEQgKgJgegHQghgIgvgBQgsABgnAJQgcAIgIALIACAAIAIABIgBABIgcgGgAhuAiIAAAAg");
        this.shape_22.setTransform(130.5,136.5);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#D0F0AD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_23.setTransform(130.2,134.7);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#F0FFDD").s().p("AhuAQIgJgCIgBgBQAHgLAcgHQAogKAsAAQAwAAAiAJQAeAGAKAKIgEADIgGACQgPgEgVgDQghgDgpAAQgrAAggAEQgWADgOAEg");
        this.shape_24.setTransform(130.4,138.4);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#F0FFD1").s().p("AhgAlIgPgCQAOgEAWgEQAggDArAAQApAAAhADQAVADAPADIgSAEQgqAGgyAAQg3AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCgBIAGgBIAEgEQgKgJgegIQgigIgwAAQgsAAgoAKQgcAIgHALIABABIAJACIgcgGg");
        this.shape_25.setTransform(130.5,136.5);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#D5F0B2").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_26.setTransform(130.2,134.7);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#F1FFE0").s().p("Ah5AOIgBAAQAHgMAdgHQAogLAtAAQAxAAAiAJQAfAHAKAJIgEAFIgJACQgPgEgUgCQghgDgpAAQgqABghADQgVACgOAEIgMgDg");
        this.shape_27.setTransform(130.4,138.3);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#F1FFD5").s().p("AhiAlIgMgDQAOgDAVgCQAhgDAqgBQApAAAhADQAUACAPADIgPAEQgrAGgzAAQg3AAgrgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgDgBIAJgBIAEgFQgKgJgfgIQgigJgxAAQgtAAgoALQgdAIgHAMIABAAIAMACIgBABIgcgGgAhuAiIAAAAg");
        this.shape_28.setTransform(130.5,136.5);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#D9F0B8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_29.setTransform(130.2,134.7);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#F3FFE3").s().p("AhtASIgNgDIgBgBQAFgMAegIQAogKAvgBQAxABAjAIQAfAIALAJIgDAFIgMADQgOgDgVgCQghgCgpAAQgqAAghADQgVACgOADg");
        this.shape_30.setTransform(130.4,138.2);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#F3FFD9").s().p("AhjAlIgMgCQAPgDAVgCQAhgDAqAAQApAAAhACQAUACAPADIgNACQgrAHg1AAQg4AAgrgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgDAAIAMgDIACgFQgKgJgfgJQgjgIgyAAQguAAgoAKQgeAJgGAMIACABIAMADIgcgGg");
        this.shape_31.setTransform(130.5,136.5);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#DDF1BD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_32.setTransform(130.2,134.7);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#F4FFE6").s().p("Ah8AQIgBgBIAAAAQAGgNAegIQApgLAvAAQAyAAAjAIQAgAJAKAJQAAADgCADIgNADIgjgEQgigCgoAAIhLADIgkADIgPgCg");
        this.shape_33.setTransform(130.3,138.1);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#F4F6C5").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_34.setTransform(130.5,135.7);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#F4FFDE").s().p("AhkAXIgKgCIAkgEIBLgCQAoAAAhABIAjAEIAOgDQACgDAAgDQgKgKghgIQgigIgyAAQgwAAgoAMQgeAHgGANIAAAAIABABIAPADIAAAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgLADQgsAGg1AAQg6AAgrgGg");
        this.shape_35.setTransform(130.5,137.9);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#E1F1C3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_36.setTransform(130.2,134.7);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#F6FFE9").s().p("Ah9AQIgCAAIAAgBQAFgNAfgJQApgLAwAAQA0AAAjAJQAhAJAJAJQABADgBAEIgQADIgjgDIhKAAIhLABIgkACIgQgDg");
        this.shape_37.setTransform(130.3,138);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#F6F6CB").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_38.setTransform(130.5,135.7);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#F6FFE2").s().p("AhlAXIgJgCIAkgDIBLgBIBJAAIAjADIARgDQABgEgBgDQgJgKgigIQgigIg0gBQgwABgpALQgfAJgFAMIAAABIACAAIAQAEIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgKACQgrAHg3AAQg6AAgsgGg");
        this.shape_39.setTransform(130.5,137.9);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#E6F1C8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_40.setTransform(130.2,134.7);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#F7FFEC").s().p("Ah/AQIgBAAIAAgBQAEgNAfgJQAqgMAxAAQA0AAAkAJQAhAJAKAJQABAEgBAEIgSAEIgjgCIhKAAIhLABIgjABIgTgEg");
        this.shape_41.setTransform(130.3,137.9);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#F7F6D0").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_42.setTransform(130.5,135.7);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#F7FFE6").s().p("AhnAWIgGgBIAjgCIBLgBIBJABIAjABIASgEQACgDgCgEQgJgJgigJQgjgKg1AAQgwABgqAMQgfAJgFANIAAAAIACABIATAEIgBAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgIACQgtAHg3AAQg7ABgtgIg");
        this.shape_43.setTransform(130.5,137.9);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#EAF2CD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_44.setTransform(130.2,134.7);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#F8FFEF").s().p("Ah4ATIgJgCIgBgBIAAAAQADgOAggKQAqgMAyAAQA1AAAkAJQAiAKAKAJQACAEgCAEIgVAEIgiAAIhKAAIhLAAIgkABg");
        this.shape_45.setTransform(130.4,137.9);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F8F7D5").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_46.setTransform(130.5,135.7);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F8FFEA").s().p("AhoAWIgGgBIAkgBIBLAAIBJAAIAjAAIAUgEQACgEgCgEQgJgJgjgKQgjgJg2AAQgyAAgqAMQgfAKgEAOIAAAAIABABIAJACIgSgEIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgGACQgtAHg5AAQg8ABgtgIg");
        this.shape_47.setTransform(130.5,137.9);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#EEF2D3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_48.setTransform(130.2,134.7);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FAFFF3").s().p("AhKAWIgkgBIgVgEIgBgBQADgPAggKQArgMAygBQA3ABAkAJQAjAKAJAJQACAEAAAEIAAABIgEABIgTAEIgjAAQgiACgnAAIhMgBg");
        this.shape_49.setTransform(130.4,137.8);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#FAF7DB").s().p("ACMAiQAAgKgOgIIgMgGIgPgFIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_50.setTransform(130.5,135.7);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FAFFEE").s().p("AhqAWIgFgBIAlABIBLABQAnAAAigCIAjgBIgEACQguAHg6AAQg8ABgvgIgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFIAPAFIAMAGQAOAHABALIgJACQAAgEgCgEQgIgKgjgJQglgKg3AAQgxABgsAMQggAKgDAPIABAAIAVAFIgcgGgABtAUIATgEIgQAEIgBABIgCgBg");
        this.shape_51.setTransform(130.5,137.9);
    
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#F2F2D8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_52.setTransform(130.2,134.7);
    
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#FBFFF6").s().p("AhKAXIgjgCIgYgFIgBgBQACgPAigKQArgNAzAAQA3AAAlAJQAkALAJAJQACAFAAAEIAAAAIgEABIgXAFIghABQgiACgnAAQgqAAgigBg");
        this.shape_53.setTransform(130.4,137.8);
    
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#FBF7E0").s().p("ACMAiQAAgKgOgIIgMgGIgPgFIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_54.setTransform(130.5,135.7);
    
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#FBFFF2").s().p("AhrAWIgDgBIAkACQAhABAqAAQAnAAAigCIAigBIgBAAQgvAIg7AAQg+AAgugHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFIAPAFIAMAGQAOAHABALIgHACQAAgFgCgEQgJgJgjgLQgmgKg3AAQgzABgrANQghAKgCAPIABABIAXAFIAAAAIgBAAgACCAQIgSAEIgEABIAWgFg");
        this.shape_55.setTransform(130.5,137.9);
    
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F7F2DD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_56.setTransform(130.2,134.7);
    
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FCFFF9").s().p("AhKAYIglgDIgGgBIgSgEIgBgBIAAAAQABgPAjgLQArgNA0gBQA4AAAmAJQAkALAJAKQADAEgBAFIAAABIgGABIgVAFIgiADQgjACgnAAQgpAAgigCg");
        this.shape_57.setTransform(130.4,137.9);
    
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#FCF7E5").s().p("ACMAiQAAgGgFgFIgOgKQgIgEgOgEIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_58.setTransform(130.5,135.7);
    
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#FCFFF7").s().p("AhsAWIgDgBIAlADQAhACAqAAQAnAAAigCIAjgDIgBAAQgvAIg7AAQg/AAgvgHgACBAQIgRAEIgDABIAUgFgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFQAOAEAJAFIAOAJQAEAFABAGIgFABQAAgFgCgEQgKgKgjgLQgmgJg4AAQg0ABgrANQgjALgBAPIAAAAIABABIASAEIgWgFg");
        this.shape_59.setTransform(130.5,137.9);
    
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#FBF3E3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_60.setTransform(130.2,134.7);
    
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#FEFFFC").s().p("AhKAZIgdgDIgIgBIgIgBIgIgCIgKgCIgBgBIAAgBQABgPAjgLQAsgOA1gBIAgABIAbADQAUACAQAEQAkALAJAKQADAFABAFIAAAAIgOAEIgPADIgHABIgcADQgjADgnAAQgpAAgigDg");
        this.shape_61.setTransform(130.4,137.8);
    
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#FEFFFB").s().p("AhnAWIAdADQAiADApgBQAnAAAigCIAcgDIAIgCIAPgDIgNADIgKACQgsAHg4AAQg8ABgtgIgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIAbACIghgBQg0ABgtAOQgiALgBAPIAAABIABABIgCgBgACHAEQgJgKgkgLQgRgEgTgDIAYADIAVAFQAOAEAJAFIAOAJQAEAFABAGIgDAAQAAgEgDgFg");
        this.shape_62.setTransform(130.5,137.9);
    
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#FEF8EB").s().p("ACMAiQAAgGgFgFIgOgKQgIgEgOgEIgVgFIgYgCIgbgCIgbgDIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_63.setTransform(130.5,135.7);
    
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#FFF3E8").s().p("AieApQgegKgIgMIAAAAIgBgCIgBgBIgBgBIAAgGQAAgTA7gQQA6gPBSAAQBTAAA7APQA6AQAAATQAAARglAOQAHgHAAgHQAAgWgxgNQgxgPhGAAQhEAAgxAPQgxANAAAWQAAAIAKAIIgEgBg");
        this.shape_64.setTransform(130.2,134.7);
    
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#FFFFFF").s().p("AhvAVIgcgGIAAgBQAAgRApgNQApgNA5AAQA6AAApANQApANABARIAAAAIgBAAIgcAHQgyAIg/ABQg9AAgxgJg");
        this.shape_65.setTransform(130.5,137.9);
    
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#FFF8F0").s().p("AiPAjIgOgEQgJgIAAgIQAAgVAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAVQAAAHgHAHIgUAGIAAAAQAAgSgpgNQgpgMg6AAQg5AAgpAMQgqANAAASIABABIgEgBg");
        this.shape_66.setTransform(130.5,135.8);
    
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFF3E3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_67.setTransform(130.2,134.7);
    
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#FFFFFC").s().p("AhKAZIgfgDIgGgBIgYgFIgCAAIgBgBIAAAAIAAgBQABgPAjgMQAsgNA1gBQA5AAAmAKQAkAKAJALQAEAEAAAFIAAABIgPAEIgOACIgHACIgcADQgjADgnAAQgpAAgigDg");
        this.shape_68.setTransform(130.4,137.9);
    
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#FFF8EB").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_69.setTransform(130.5,135.7);
    
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#FFFFFB").s().p("AhqAWIAgADQAiADApAAQAnAAAigDIAdgDQgtAHg4AAQg9AAgvgHgABuAUIAOgCIgMACIgJACIAHgCgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgDAAQABgFgEgEQgJgLgkgKQgmgKg6AAQg0ABgtANQgiAMgBAPIAAABIAAAAIgBAAg");
        this.shape_70.setTransform(130.5,137.9);
    
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#FFF3DD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_71.setTransform(130.2,134.7);
    
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#FFFFF8").s().p("AhKAYIglgDIgNgDIgMgCIAAgBQABgPAigMQAsgNA0gBQA4AAAmAKQAkALAJAKQADAEAAAFIAAABIgKACIgSAEIgiADQgjACgnAAQgpABgigDg");
        this.shape_72.setTransform(130.4,137.9);
    
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#FFF8E5").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_73.setTransform(130.5,135.7);
    
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFFF6").s().p("AhsAWIgDgBIAlADQAhADAqgBQAnAAAigCIAjgDIAAAAQgvAIg8AAQg/AAgvgHgAB/ARIgPADIgDABIASgEgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgEABQAAgFgDgEQgJgKgkgLQgmgKg5AAQg0ABgrANQgiAMgBAPIAAABIAMACIgPgDg");
        this.shape_74.setTransform(130.5,137.9);
    
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#FFF3D8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_75.setTransform(130.2,134.7);
    
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFFF5").s().p("AhKAXIgjgCIgZgFIgBgBIAAAAQACgPAigKQArgOAzAAQA4AAAlAJQAkAKAJALQADAEgBAFIgbAGIgBAAIggACQgjACgnAAQgpAAgigCg");
        this.shape_76.setTransform(130.4,137.9);
    
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#FFF8E0").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_77.setTransform(130.5,135.7);
    
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#FFFFF2").s().p("AhrAWIgCgBIAjACQAhACAqAAQAnAAAigCIAhgCQguAIg7AAQg/AAgugHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgGACQAAgFgCgEQgJgLgkgKQgmgJg3AAQg0AAgqAOQgjAKgBAPIAAAAIABABIAZAFIgBAAIgBAAgACHAPIgXAFIgEABIAbgGg");
        this.shape_78.setTransform(130.5,137.9);
    
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#FFF3D3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_79.setTransform(130.2,134.7);
    
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#FFFFF2").s().p("AhKAWIgigBIgYgFIgBAAIAAgBQACgPAhgJQArgNAzgBQA3ABAlAJQAjAKAJAKQADAEgBAEIgXAGIgkABQgiACgnAAQgqAAgigCg");
        this.shape_80.setTransform(130.4,137.8);
    
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#FFF8DB").s().p("ACMAiQAAgKgOgIIgMgGIgPgFIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_81.setTransform(130.5,135.7);
    
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#FFFFEE").s().p("AhrAWIgCgBIAjABQAhABAqABQAnAAAigCIAkgCIgEACQgvAHg6AAQg9AAgvgHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFIAPAFIAMAGQAOAHABALIgIACQABgFgCgDQgKgKgjgKQglgKg3AAQgyAAgrAOQghAJgDAPIAAABIABAAIAYAFIgBAAIgBAAgABuAUIAXgFIgVAFIgBABIgBgBg");
        this.shape_82.setTransform(130.5,137.9);
    
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#FFF3CE").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_83.setTransform(130.2,134.7);
    
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#FFFFEE").s().p("AhKAWIgkgBIgVgEIgBgBIAAAAQADgPAhgJQArgNAyAAQA2AAAkAJQAjAKAJAKQACAEgBAEIgWAFIgjAAIhJABIhMAAg");
        this.shape_84.setTransform(130.4,137.8);
    
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#FFF8D6").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_85.setTransform(130.5,135.7);
    
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#FFFFEA").s().p("AhpAWIgFgBIAkABIBLAAIBJgBIAjgBIAXgEQABgEgDgFQgJgJgigKQglgJg2AAQgyAAgrAMQghAKgDAPIAAAAIABAAIAWAFIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgFACQgtAHg6AAQg8ABgugIg");
        this.shape_86.setTransform(130.5,137.9);
    
        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#FFF3C8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_87.setTransform(130.2,134.7);
    
        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#FFFFEB").s().p("Ah3ATIgKgCIgBgBQAEgOAggKQAqgMAxAAQA2AAAkAKQAiAJAJAJQACAEgBAEIgWAEIghAAIhKAAIhLAAIgkABg");
        this.shape_88.setTransform(130.3,137.9);
    
        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#FFF8D0").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_89.setTransform(130.5,135.7);
    
        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#FFFFE5").s().p("AhoAWIgGgBIAkgBIBLAAIBJAAIAiAAIAVgEQABgEgBgEQgJgJgjgJQgjgKg2AAQgxAAgrAMQgfAKgEAOIABABIAJACIgSgEIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgEAAIgGACQgsAHg5AAQg8ABgtgIg");
        this.shape_90.setTransform(130.5,137.9);
    
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#FFF3C3").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_91.setTransform(130.2,134.7);
    
        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#FFFFE8").s().p("Ah/AQIgBAAIAAgBQAEgNAfgJQAqgMAxAAQA0AAAkAJQAhAJAKAJQABAEgBAEIgSAEIgjgCIhKAAIhLABIgjABIgTgEg");
        this.shape_92.setTransform(130.3,137.9);
    
        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#FFF8CB").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_93.setTransform(130.5,135.7);
    
        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#FFFFE1").s().p("AhnAWIgGgBIAjgCIBLAAIBJAAIAjABIASgEQACgDgCgEQgJgJgigJQgjgKg1AAQgwABgqALQgfAJgFAOIAAAAIACABIATAEIgBAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgIACQgtAHg3AAQg7ABgtgIg");
        this.shape_94.setTransform(130.5,137.9);
    
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#FFF3BE").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_95.setTransform(130.2,134.7);
    
        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#FFFFE4").s().p("AhxATIgNgDIgBAAIAAgBQAFgNAfgJQApgLAwAAQA0AAAjAJQAhAIAKAKQABADgCADIgRAEIgigCIhKgBIhLABIgkACIgEAAg");
        this.shape_96.setTransform(130.3,138);
    
        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#FFF8C6").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_97.setTransform(130.5,135.7);
    
        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#FFFFDD").s().p("AhmAXIgMgDIAEABIAkgDIBLgBIBJABIAjACIARgEQABgDgBgDQgJgKghgIQgkgJgzAAQgwAAgpAMQggAJgEAMIAAABIABAAIANADIgZgFIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgKACQgrAHg3AAQg6AAgtgGg");
        this.shape_98.setTransform(130.5,137.9);
    
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#FFF3B9").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_99.setTransform(130.2,134.7);
    
        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#FFFFE1").s().p("Ah8APIgBAAQAEgNAfgIQApgMAvAAQAzAAAjAJQAgAJALAJIgCAGIgPADIgjgDIhJgBQgqAAghABIgkAEIgPgEg");
        this.shape_100.setTransform(130.4,138.1);
    
        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#FFF8C1").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_101.setTransform(130.5,135.7);
    
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#FFFFD9").s().p("AhkAXIgKgCIAkgEQAhgBAqAAIBJABIAjADIAPgDIACgGQgLgKgggIQgjgJgzAAQgvAAgpAMQgfAIgEANIABAAIAPAEIAAAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgLADQgsAGg1AAQg6AAgrgGg");
        this.shape_102.setTransform(130.5,137.9);
    
        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#FFF3B4").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_103.setTransform(130.2,134.7);
    
        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#FFFFDE").s().p("Ah7APIgBgBQAGgMAegIQAogLAvAAQAyAAAiAIQAhAJAJAJQAAACgCADIgMADIgkgEQghgCgoABQgqAAghACIgkAEIgOgDg");
        this.shape_104.setTransform(130.4,138.2);
    
        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#FFFFD5").s().p("AhkAlIgLgCIgcgGIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAMgDQACgDAAgCQgKgKgggJQgigHgzAAQguAAgpAKQgeAJgFAMIABABIANADIAkgFQAhgCAqAAQApAAAhACIAkAEIgNACQgsAHg1AAQg4AAgsgGg");
        this.shape_105.setTransform(130.5,136.5);
    
        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#FFF3AE").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_106.setTransform(130.2,134.7);
    
        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#FFFFDA").s().p("AhtARIgMgCIgCAAIAAgBQAHgMAdgIQAogKAugBQAyABAiAIQAfAIAKAJQAAACgDAEIgKACQgPgEgVgCQghgCgoAAQgrABghACQgVACgOADg");
        this.shape_107.setTransform(130.3,138.2);
    
        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#FFFFD0").s().p("AhjAlIgMgCQAOgDAWgDQAhgCAqgBQApAAAhADQAVACAPADIgPACQgrAHg0AAQg4AAgrgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAKgCQACgDAAgDQgJgJgggIQgigJgxAAQguAAgpALQgdAJgGALIAAABIABAAIAMADIgcgGg");
        this.shape_108.setTransform(130.5,136.5);
    
        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#FFF3A9").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_109.setTransform(130.2,134.7);
    
        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#FFFFD7").s().p("Ah4AOIgCAAQAIgMAcgHQAogKAtgBQAxABAiAIQAfAHAJAJIgDAFIgIACQgPgEgVgCQghgDgoAAQgrAAghADQgVADgOAEIgLgDg");
        this.shape_110.setTransform(130.4,138.3);
    
        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#FFFFCC").s().p("AhhAlIgNgDQAOgDAVgDQAhgDAqAAQApAAAhADQAVACAPAEIgQADQgrAGgzAAQg3AAgqgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAIgCIADgFQgKgJgfgIQghgIgxgBQgtABgoAKQgdAIgHAMIACAAIALACIgBABIgcgGgAhuAiIAAAAg");
        this.shape_111.setTransform(130.5,136.5);
    
        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#FFF3A4").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_112.setTransform(130.2,134.7);
    
        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#FFFFD3").s().p("AhuAQIgJgCIgBgBQAHgLAcgHQAogKAsAAQAwAAAiAJQAeAGAKAKIgEADIgGACQgPgEgVgDQghgDgpgBQgrABggAEQgWADgOAEg");
        this.shape_113.setTransform(130.4,138.4);
    
        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#FFFFC8").s().p("AhgAlIgPgCQAOgEAWgEQAggDArgBQApAAAhAEQAVADAPADIgSAEQgqAGgyAAQg3AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCgBIAGgBIAEgEQgKgJgegIQgigIgwAAQgsAAgoAKQgcAIgHALIABABIAJACIgcgGg");
        this.shape_114.setTransform(130.5,136.5);
    
        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#FFF39F").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_115.setTransform(130.2,134.7);
    
        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#FFFFD0").s().p("Ah1ANIgCAAIAAAAQAIgLAcgGQAngKAsAAQAvAAAhAIQAeAHAKAIIgFAEIgEABQgPgEgVgEQghgEgpAAQgrABggAEQgWAEgNAEIgIgCg");
        this.shape_116.setTransform(130.4,138.4);
    
        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#FFFFC4").s().p("AhfAlIgPgDQANgEAWgEQAggEArAAQApAAAhAEQAVADAPAFIgTADQgqAGgxAAQg2AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAEgBIAFgEQgKgJgegIQghgHgvgBQgsAAgnAKQgcAIgIAKIAAABIACAAIAIABIgBABIgcgGgAhuAiIAAAAg");
        this.shape_117.setTransform(130.5,136.5);
    
        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FFF399").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_118.setTransform(130.2,134.7);
    
        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FFF8A1").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_119.setTransform(130.5,135.7);
    
        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FFFFCD").s().p("AhuAOIgGgBIgCAAIAAAAQAJgKAbgHQAngJArAAQAuAAAgAIQAeAGALAIIgGAEIgCABQgOgGgWgDQgigFgoAAQgrABghAFQgVADgNAFg");
        this.shape_120.setTransform(130.4,138.5);
    
        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FFFFBF").s().p("AheAYIgQgDQANgFAWgEQAggFAsAAQAoAAAhAEQAWAEAOAFIADgBIAFgDQgLgJgdgHQghgHgtAAQgrAAgnAIQgbAIgJAKIAAAAIACAAIAGACIgcgGIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAhAKAHANIACAHIgdAGIgCAAIgUAEQgpAFgxAAQg1AAgpgFg");
        this.shape_121.setTransform(130.5,137.9);
    
        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FFF394").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_122.setTransform(130.2,134.7);
    
        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#FFF89C").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_123.setTransform(130.5,135.7);
    
        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FFFFC9").s().p("AhyANIgCgBQAJgJAagHQAngJAqAAQAtAAAhAIQAdAGAKAJIgFADIgBAAQgOgGgWgEQgigEgpAAQgrAAggAFQgWAEgNAGIgEgBg");
        this.shape_124.setTransform(130.4,138.6);
    
        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#FFFFBB").s().p("AhcAYIgSgDQAMgGAXgEQAggGArAAQApAAAhAFQAXAEANAGIABAAIAGgDQgLgIgcgIQghgGgtgBQgqABgnAHQgaAIgJAJIABABIAFABIgcgGIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAhAKAHANIACAHIgeAGIgBAAIgWAEQgoAFgwAAQg1ABgngGg");
        this.shape_125.setTransform(130.5,137.9);
    
        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FFF38F").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_126.setTransform(130.2,134.7);
    
        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#FFF897").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_127.setTransform(130.5,135.7);
    
        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FFFFC6").s().p("AhbAMIgSgDIAAAAIgGgBQAKgJAagGQAmgJApAAQAuAAAfAHQAdAIAKAHIgFACIgBAAIgXAEQgoAGgvgBQgzABgogGg");
        this.shape_128.setTransform(130.4,139.1);
    
        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#FFFFB7").s().p("ABuAZIAFgCQgKgJgdgHQgfgHgtAAQgqAAgmAIQgZAHgLAKIgWgGIgBAAIgBgBQAAgSAqgLQApgNA5AAQA7AAAoANIACAAIACABIACAAQAjALABARIgeAHIgBAAg");
        this.shape_129.setTransform(130.5,137.4);
    
        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#FFF38A").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_130.setTransform(130.2,134.7);
    
        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#FFF892").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_131.setTransform(130.5,135.7);
    
        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#FFFFC3").s().p("AhaALIgTgDIgBAAIgCAAIgBAAIAAAAIAAgBQAKgHAZgHQAmgJAoAAQAtABAfAHQAcAHAKAHIgDABIgEABIgVADQgoAGguAAQgzAAgngGg");
        this.shape_132.setTransform(130.4,139.1);
    
        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#FFFFB3").s().p("ABuAYIAEgBQgLgHgcgIQgfgHgsgBQgoABgnAIQgZAHgKAJIAAAAIgYgGIgBAAIgBgBQAAgSAqgLQApgNA5AAQA7AAAoANIACAAIACABIACAAQAjALABARIgeAHIgBgBg");
        this.shape_133.setTransform(130.5,137.4);
    
        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#FFF384").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_134.setTransform(130.2,134.7);
    
        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#FFF88C").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_135.setTransform(130.5,135.7);
    
        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#FFFFBF").s().p("AhZALIgUgEIgBAAIgCAAQALgHAYgHQAmgIAnAAQAsABAfAGQAcAIAKAGIgCABIgFAAIgWAEQgnAFguAAQgxAAgngFg");
        this.shape_136.setTransform(130.4,139.2);
    
        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#FFFFAE").s().p("AiKATIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMIACABIACABIACAAQAjALABARIgeAHIAAgBIACAAQgLgIgbgHQgfgHgsAAQgnAAgmAIQgZAGgLAJIADAAIABAAIgBAAIgcgGg");
        this.shape_137.setTransform(130.5,137.4);
    
        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#FFF37F").s().p("AieApQgegKgIgMIAAAAIgBgCIgBgBIgBgBIAAgGQAAgTA7gQQA6gPBSAAQBTAAA7APQA6AQAAATQAAARglAOQAHgHAAgHQAAgWgxgNQgxgPhGAAQhEAAgxAPQgxANAAAWQAAAIAKAIIgEgBg");
        this.shape_138.setTransform(130.2,134.7);
    
        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#FFF887").s().p("AiPAjIgOgEQgJgIAAgIQAAgVAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAVQAAAHgHAHIgUAGIAAAAQAAgSgpgNQgpgMg6AAQg5AAgpAMQgqANAAASIABABIgEgBg");
        this.shape_139.setTransform(130.5,135.8);
    
        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#FFFFAA").s().p("AiLATIAAgBQAAgSApgMQApgMA5AAQA6AAApAMQApAMABASIAAAAIgBAAIgcAHQgNgJgZgFQghgIgpAAQgqAAghAIQgYAGgMAIIgcgGg");
        this.shape_140.setTransform(130.5,137.4);
    
        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#FFFFBC").s().p("AhvAHQAMgHAYgGQAhgIAqAAQAqAAAgAHQAZAGANAHQgyAJg/AAQg9AAgxgIg");
        this.shape_141.setTransform(130.4,139.3);
    
        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#FFF8DB").s().p("ACMAiQAAgKgOgIIgMgGIgPgFIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_142.setTransform(130.5,135.7);
    
        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#FFFFEE").s().p("AhrAWIgCgBIAjABQAhABAqABQAnAAAigCIAkgCIgEACQgvAHg6AAQg9AAgvgHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFIAPAFIAMAGQAOAHABALIgIACQABgFgCgDQgKgKgjgKQglgKg3AAQgyAAgrAOQghAJgDAPIAAABIABAAIAYAFIgBAAIgBAAgABuAUIAXgFIgVAFIgBABIgBgBg");
        this.shape_143.setTransform(130.5,137.9);
    
        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#FFF8E0").s().p("ACMAiQAAgGgFgFIgOgKQgIgEgOgEIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_144.setTransform(130.5,135.7);
    
        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#FFFFF2").s().p("AhrAWIgCgBIAjACQAhACAqAAQAnAAAigCIAhgCQguAIg7AAQg/AAgugHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFQAOAEAJAFIAOAJQAEAFABAGIgGACQAAgFgCgEQgJgLgkgKQgmgJg3AAQg0AAgqAOQgjAKgBAPIAAAAIABABIAZAFIgBAAIgBAAgACHAPIgXAFIgEABIAbgGg");
        this.shape_145.setTransform(130.5,137.9);
    
        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#FFF8E5").s().p("ACMAiQAAgGgFgFIgOgKQgIgEgOgEIgVgFIhOgHIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_146.setTransform(130.5,135.7);
    
        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#FFFFF6").s().p("AhsAWIgDgBIAlADQAhADAqgBQAnAAAigCIAjgDIAAAAQgvAIg8AAQg/AAgvgHgAB/ARIgPADIgDABIASgEgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIBOAHIAVAFQAOAEAJAFIAOAJQAEAFABAGIgEABQAAgFgDgEQgJgKgkgLQgmgKg5AAQg0ABgrANQgiAMgBAPIAAABIAMACIgPgDg");
        this.shape_147.setTransform(130.5,137.9);
    
        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#FFFFFC").s().p("AhKAZIgfgDIgGgBIgYgFIgCAAIgBgBIAAAAIAAgBQABgPAjgMQAsgNA1gBIAgABIAbACQAUADAQAEQAkAKAJALQAEAEAAAFIAAABIgPAEIgOACIgHACIgcADQgjADgnAAQgpAAgigDg");
        this.shape_148.setTransform(130.4,137.9);
    
        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#FFFFFB").s().p("AhqAWIAgADQAiADApAAQAnAAAigDIAdgDIAHgCIAOgCIgMACIgJACQgtAHg4AAQg9AAgvgHgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAIAbACIghgBQg0ABgtANQgiAMgBAPIAAABIAAAAIgBAAgACHAEQgJgLgkgKQgRgEgTgDIAYADIAVAFQAOAEAJAFIAOAJQAEAFABAGIgDAAQABgFgEgEg");
        this.shape_149.setTransform(130.5,137.9);
    
        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#FFF8EB").s().p("ACMAiQAAgGgFgFIgOgKQgIgEgOgEIgVgFIgYgCIgbgCIgbgDIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_150.setTransform(130.5,135.7);
    
        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FEFFFC").s().p("AhKAZIgfgDIgGgBIgYgFIgCAAIgBgBIAAAAIAAgBQABgPAjgMQAsgNA1gBQA5AAAmAKQAkAKAJALQAEAEAAAFIAAABIgPAEIgOACIgHACIgcADQgjADgnAAQgpAAgigDg");
        this.shape_151.setTransform(130.4,137.9);
    
        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FEF8EB").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_152.setTransform(130.5,135.7);
    
        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#FEFFFB").s().p("AhqAWIAgADQAiADApAAQAnAAAigDIAdgDQgtAHg4AAQg9AAgvgHgABuAUIAOgCIgMACIgJACIAHgCgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgDAAQABgFgEgEQgJgLgkgKQgmgKg6AAQg0ABgtANQgiAMgBAPIAAABIAAAAIgBAAg");
        this.shape_153.setTransform(130.5,137.9);
    
        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#F8F2DF").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_154.setTransform(130.2,134.7);
    
        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#FDFFFA").s().p("AhKAYIglgDIgNgDIgMgCIAAgBQABgPAigMQAsgNA0gBQA4AAAmAKQAkALAJAKQADAEAAAFIAAABIgKACIgSAEIgiADQgjACgnAAQgpABgigDg");
        this.shape_155.setTransform(130.4,137.9);
    
        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#FDF7E7").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_156.setTransform(130.5,135.7);
    
        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f("#FDFFF8").s().p("AhsAWIgDgBIAlADQAhADAqgBQAnAAAigCIAjgDIAAAAQgvAIg8AAQg/AAgvgHgAB/ARIgPADIgDABIASgEgAiLAPIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgEABQAAgFgDgEQgJgKgkgLQgmgKg5AAQg0ABgrANQgiAMgBAPIAAABIAMACIgPgDg");
        this.shape_157.setTransform(130.5,137.9);
    
        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f("#F4F2DA").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_158.setTransform(130.2,134.7);
    
        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f("#FCFFF7").s().p("AhKAXIgjgCIgZgFIgBgBIAAAAQACgPAigKQArgOAzAAQA4AAAlAJQAkAKAJALQADAEgBAFIgbAGIgBAAIggACQgjACgnAAQgpAAgigCg");
        this.shape_159.setTransform(130.4,137.9);
    
        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f("#FCF7E2").s().p("ACMAiQAAgGgFgFQgEgFgKgFQgIgEgOgEIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_160.setTransform(130.5,135.7);
    
        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f("#FCFFF4").s().p("AhrAWIgCgBIAjACQAhACAqAAQAnAAAigCIAhgCQguAIg7AAQg/AAgugHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFQAOAEAJAFQAJAEAFAFQAEAFABAGIgGACQAAgFgCgEQgJgLgkgKQgmgJg3AAQg0AAgqAOQgjAKgBAPIAAAAIABABIAZAFIgBAAIgBAAgACHAPIgXAFIgEABIAbgGg");
        this.shape_161.setTransform(130.5,137.9);
    
        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f("#F1F2D6").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_162.setTransform(130.2,134.7);
    
        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f("#FAFFF4").s().p("AhKAWIgigBIgYgFIgBAAIAAgBQACgPAhgJQArgNAzgBQA3ABAlAJQAjAKAJAKQADAEgBAEIgXAGIgkABQgiACgnAAQgqAAgigCg");
        this.shape_163.setTransform(130.4,137.8);
    
        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f("#FAF7DE").s().p("ACMAiQAAgKgOgIIgMgGIgPgFIgVgFQgigHgsAAIAAAAQg3AAgoALIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_164.setTransform(130.5,135.7);
    
        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f("#FAFFF1").s().p("AhrAWIgCgBIAjABQAhABAqABQAnAAAigCIAkgCIgEACQgvAHg6AAQg9AAgvgHgAhvAVIgcgGIgBgBQAAgSAqgMIACgBIACAAQAngLA3AAIAAAAQAsAAAiAHIAVAFIAPAFIAMAGQAOAHABALIgIACQABgFgCgDQgKgKgjgKQglgKg3AAQgyAAgrAOQghAJgDAPIAAABIABAAIAYAFIgBAAIgBAAgABuAUIAXgFIgVAFIgBABIgBgBg");
        this.shape_165.setTransform(130.5,137.9);
    
        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f("#EDF2D1").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_166.setTransform(130.2,134.7);
    
        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f("#F9FFF2").s().p("AhKAWIgkgBIgVgEIgBgBIAAAAQADgPAhgJQArgNAyAAQA2AAAkAJQAjAKAJAKQACAEgBAEIgWAFIgjAAIhJABIhMAAg");
        this.shape_167.setTransform(130.4,137.8);
    
        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f("#F9F7D9").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_168.setTransform(130.5,135.7);
    
        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f("#F9FFED").s().p("AhpAWIgFgBIAkABIBLAAIBJgBIAjgBIAXgEQABgEgDgFQgJgJgigKQglgJg2AAQgyAAgrAMQghAKgDAPIAAAAIABAAIAWAFIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgFACQgtAHg6AAQg8ABgugIg");
        this.shape_169.setTransform(130.5,137.9);
    
        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f("#E9F1CD").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_170.setTransform(130.2,134.7);
    
        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f("#F8FFEF").s().p("Ah3ATIgKgCIgBgBQAEgOAggKQAqgMAxAAQA2AAAkAKQAiAJAJAJQACAEgBAEIgWAEIghAAIhKAAIhLAAIgkABg");
        this.shape_171.setTransform(130.3,137.9);
    
        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f("#F8F6D5").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_172.setTransform(130.5,135.7);
    
        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f("#F8FFEA").s().p("AhoAWIgGgBIAkgBIBLAAIBJAAIAiAAIAVgEQABgEgBgEQgJgJgjgJQgjgKg2AAQgxAAgrAMQgfAKgEAOIABABIAJACIgSgEIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgEAAIgGACQgsAHg5AAQg8ABgtgIg");
        this.shape_173.setTransform(130.5,137.9);
    
        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f("#F7FFE6").s().p("AhnAWIgGgBIAjgCIBLAAIBJAAIAjABIASgEQACgDgCgEQgJgJgigJQgjgKg1AAQgwABgqALQgfAJgFAOIAAAAIACABIATAEIgBAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgIACQgtAHg3AAQg7ABgtgIg");
        this.shape_174.setTransform(130.5,137.9);
    
        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f("#E2F1C4").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_175.setTransform(130.2,134.7);
    
        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f("#F6FFEA").s().p("AhxATIgNgDIgBAAIAAgBQAFgNAfgJQApgLAwAAQA0AAAjAJQAhAIAKAKQABADgCADIgRAEIgigCIhKgBIhLABIgkACIgEAAg");
        this.shape_176.setTransform(130.3,138);
    
        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f("#F6F6CC").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_177.setTransform(130.5,135.7);
    
        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f("#F6FFE3").s().p("AhmAXIgMgDIAEABIAkgDIBLgBIBJABIAjACIARgEQABgDgBgDQgJgKghgIQgkgJgzAAQgwAAgpAMQggAJgEAMIAAABIABAAIANADIgZgFIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgKACQgrAHg3AAQg6AAgtgGg");
        this.shape_178.setTransform(130.5,137.9);
    
        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f("#DFF1BF").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_179.setTransform(130.2,134.7);
    
        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f("#F5FFE7").s().p("Ah8APIgBAAQAEgNAfgIQApgMAvAAQAzAAAjAJQAgAJALAJIgCAGIgPADIgjgDIhJgBQgqAAghABIgkAEIgPgEg");
        this.shape_180.setTransform(130.4,138.1);
    
        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f("#F5F6C7").s().p("ACMAiQAAgLgQgIIgRgIIgIgCIgKgDIhZgJIAAAAQg2AAgnAKIgCABIgBAAIgCABQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACIAAgBg");
        this.shape_181.setTransform(130.5,135.7);
    
        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f("#F5FFDF").s().p("AhkAXIgKgCIAkgEQAhgBAqAAIBJABIAjADIAPgDIACgGQgLgKgggIQgjgJgzAAQgvAAgpAMQgfAIgEANIABAAIAPAEIAAAAIgdgGIgBgBIAAAAQAAgSAqgMIACgBIACAAIABAAQAngLA2AAIAAAAIBZAJIAKADIAIADIARAHQAQAIABALIgdAHIgDAAIgLADQgsAGg1AAQg6AAgrgGg");
        this.shape_182.setTransform(130.5,137.9);
    
        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f("#DBF1BB").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_183.setTransform(130.2,134.7);
    
        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f("#F4FFE5").s().p("Ah7APIgBgBQAGgMAegIQAogLAvAAQAyAAAiAIQAhAJAJAJQAAACgCADIgMADIgkgEQghgCgoABQgqAAghACIgkAEIgOgDg");
        this.shape_184.setTransform(130.4,138.2);
    
        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f("#F4FFDC").s().p("AhkAlIgLgCIgcgGIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAMgDQACgDAAgCQgKgKgggJQgigHgzAAQguAAgpAKQgeAJgFAMIABABIANADIAkgFQAhgCAqAAQApAAAhACIAkAEIgNACQgsAHg1AAQg4AAgsgGg");
        this.shape_185.setTransform(130.5,136.5);
    
        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f("#D7F0B6").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_186.setTransform(130.2,134.7);
    
        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f("#F2FFE2").s().p("AhtARIgMgCIgCAAIAAgBQAHgMAdgIQAogKAugBQAyABAiAIQAfAIAKAJQAAACgDAEIgKACQgPgEgVgCQghgCgoAAQgrABghACQgVACgOADg");
        this.shape_187.setTransform(130.3,138.2);
    
        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f("#F2FFD8").s().p("AhjAlIgMgCQAOgDAWgDQAhgCAqgBQApAAAhADQAVACAPADIgPACQgrAHg0AAQg4AAgrgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAKgCQACgDAAgDQgJgJgggIQgigJgxAAQguAAgpALQgdAJgGALIAAABIABAAIAMADIgcgGg");
        this.shape_188.setTransform(130.5,136.5);
    
        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f("#D4F0B1").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_189.setTransform(130.2,134.7);
    
        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f("#F1FFDF").s().p("Ah4AOIgCAAQAIgMAcgHQAogKAtgBQAxABAiAIQAfAHAJAJIgDAFIgIACQgPgEgVgCQghgDgoAAQgrAAghADQgVADgOAEIgLgDg");
        this.shape_190.setTransform(130.4,138.3);
    
        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f("#F1FFD4").s().p("AhhAlIgNgDQAOgDAVgDQAhgDAqAAQApAAAhADQAVACAPAEIgQADQgrAGgzAAQg3AAgqgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAIgCIADgFQgKgJgfgIQghgIgxgBQgtABgoAKQgdAIgHAMIACAAIALACIgBABIgcgGgAhuAiIAAAAg");
        this.shape_191.setTransform(130.5,136.5);
    
        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f("#F0FFDD").s().p("AhuAQIgJgCIgBgBQAHgLAcgHQAogKAsAAQAwAAAiAJQAeAGAKAKIgEADIgGACQgPgEgVgDQghgDgpgBQgrABggAEQgWADgOAEg");
        this.shape_192.setTransform(130.4,138.4);
    
        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f("#F0FFD1").s().p("AhgAlIgPgCQAOgEAWgEQAggDArgBQApAAAhAEQAVADAPADIgSAEQgqAGgyAAQg3AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCgBIAGgBIAEgEQgKgJgegIQgigIgwAAQgsAAgoAKQgcAIgHALIABABIAJACIgcgGg");
        this.shape_193.setTransform(130.5,136.5);
    
        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f("#CDF0A8").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_194.setTransform(130.2,134.7);
    
        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f("#EFFFDA").s().p("Ah1ANIgCAAIAAAAQAIgLAcgGQAngKAsAAQAvAAAhAIQAeAHAKAIIgFAEIgEABQgPgEgVgEQghgEgpAAQgrABggAEQgWAEgNAEIgIgCg");
        this.shape_195.setTransform(130.4,138.4);
    
        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f("#EFFFCD").s().p("AhfAlIgPgDQANgEAWgEQAggEArAAQApAAAhAEQAVADAPAFIgTADQgqAGgxAAQg2AAgpgGgAiLAdIAAgBIgBgBQgKgBgHgCQgJgIAAgJQAAgUAxgOQAxgPBEAAQBFAAAxAPQAxAOAAAUQgQASgLADIAAgBIgcAHIgCAAIAEgBIAFgEQgKgJgegIQghgHgvgBQgsAAgnAKQgcAIgIAKIAAABIACAAIAIABIgBABIgcgGgAhuAiIAAAAg");
        this.shape_196.setTransform(130.5,136.5);
    
        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f("#C9EFA4").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_197.setTransform(130.2,134.7);
    
        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f("#EEF4AC").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_198.setTransform(130.5,135.7);
    
        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f("#EEFFD7").s().p("AhuAOIgGgBIgCAAIAAAAQAJgKAbgHQAngJArAAQAuAAAgAIQAeAGALAIIgGAEIgCABQgOgGgWgDQgigFgoAAQgrABghAFQgVADgNAFg");
        this.shape_199.setTransform(130.4,138.5);
    
        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f("#EEFFCA").s().p("AheAYIgQgDQANgFAWgEQAggFAsAAQAoAAAhAEQAWAEAOAFIADgBIAFgDQgLgJgdgHQghgHgtAAQgrAAgnAIQgbAIgJAKIAAAAIACAAIAGACIgcgGIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAhAKAHANIACAHIgdAGIgCAAIgUAEQgpAFgxAAQg1AAgpgFg");
        this.shape_200.setTransform(130.5,137.9);
    
        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f("#C5EF9F").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_201.setTransform(130.2,134.7);
    
        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f("#EDF4A7").s().p("ACMAjIgBgHQgHgNghgKQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_202.setTransform(130.5,135.7);
    
        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f("#EDFFD5").s().p("AhyANIgCgBQAJgJAagHQAngJAqAAQAtAAAhAIQAdAGAKAJIgFADIgBAAQgOgGgWgEQgigEgpAAQgrAAggAFQgWAEgNAGIgEgBg");
        this.shape_203.setTransform(130.4,138.6);
    
        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f("#EDFFC6").s().p("AhcAYIgSgDQAMgGAXgEQAggGArAAQApAAAhAFQAXAEANAGIABAAIAGgDQgLgIgcgIQghgGgtgBQgqABgnAHQgaAIgJAJIABABIAFABIgcgGIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMQAhAKAHANIACAHIgeAGIgBAAIgWAEQgoAFgwAAQg1ABgngGg");
        this.shape_204.setTransform(130.5,137.9);
    
        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f("#C2EF9B").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_205.setTransform(130.2,134.7);
    
        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f("#EBF4A3").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_206.setTransform(130.5,135.7);
    
        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f("#EBFFD2").s().p("AhbAMIgSgDIAAAAIgGgBQAKgJAagGQAmgJApAAQAuAAAfAHQAdAIAKAHIgFACIgBAAIgXAEQgoAGgvgBQgzABgogGg");
        this.shape_207.setTransform(130.4,139.1);
    
        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f("#EBFFC3").s().p("ABuAZIAFgCQgKgJgdgHQgfgHgtAAQgqAAgmAIQgZAHgLAKIgWgGIgBAAIgBgBQAAgSAqgLQApgNA5AAQA7AAAoANIACAAIACABIACAAQAjALABARIgeAHIgBAAg");
        this.shape_208.setTransform(130.5,137.4);
    
        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f("#BEEF96").s().p("AieApQgegJgIgMIAAgBIgBgCIgBgCIgBgBIAAgEQAAgVA7gPQA6gPBSAAQBTAAA7APQA6APAAAVQAAARglANQAHgHAAgIQAAgUgxgOQgxgPhGAAQhEAAgxAPQgxAOAAAUQAAAJAKAIIgEgBg");
        this.shape_209.setTransform(130.2,134.7);
    
        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f("#EAF49E").s().p("ACMAjQAAgRgkgMIgBAAIgCgBIgCAAQgpgMg6AAQg5AAgpAMQgqAMAAASQgKgBgHgCQgJgJAAgIQAAgUAxgPQAxgPBEAAQBFAAAxAPQAxAPAAAUQgQASgLACg");
        this.shape_210.setTransform(130.5,135.7);
    
        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f("#EAFFCF").s().p("AhaALIgTgDIgBAAIgCAAIgBAAIAAAAIAAgBQAKgHAZgHQAmgJAoAAQAtABAfAHQAcAHAKAHIgDABIgEABIgVADQgoAGguAAQgzAAgngGg");
        this.shape_211.setTransform(130.4,139.1);
    
        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f("#EAFFBF").s().p("ABuAYIAEgBQgLgHgcgIQgfgHgsgBQgoABgnAIQgZAHgKAJIAAAAIgYgGIgBAAIgBgBQAAgSAqgLQApgNA5AAQA7AAAoANIACAAIACABIACAAQAjALABARIgeAHIgBgBg");
        this.shape_212.setTransform(130.5,137.4);
    
        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f("#E9FFCD").s().p("AhZALIgUgEIgBAAIgCAAQALgHAYgHQAmgIAnAAQAsABAfAGQAcAIAKAGIgCABIgFAAIgWAEQgnAFguAAQgxAAgngFg");
        this.shape_213.setTransform(130.4,139.2);
    
        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f("#E9FFBC").s().p("AiKATIgBAAIgBgBQAAgSAqgMQApgMA5AAQA7AAAoAMIACABIACABIACAAQAjALABARIgeAHIAAgBIACAAQgLgIgbgHQgfgHgsAAQgnAAgmAIQgZAGgLAJIADAAIABAAIgBAAIgcgGg");
        this.shape_214.setTransform(130.5,137.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_67}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_60}]},1).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_174},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_23}]},1).to({state:[{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_214},{t:this.shape_213},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},1).wait(1));
    
        // Layer 18 copy
        this.instance_18 = new lib.Symbol3_1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(125.3,171.8,1,1,0,0,0,9.3,7.3);
        this.instance_18.alpha = 0;
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({alpha:1},17).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).wait(1));
    
        // Layer 18
        this.instance_19 = new lib.Symbol2();
        this.instance_19.parent = this;
        this.instance_19.setTransform(125.4,171.7,0.621,0.621,0,0,0,15.1,11.7);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(78));
    
        // Layer 2 copy
        this.instance_20 = new lib.Bitmap26();
        this.instance_20.parent = this;
        this.instance_20.setTransform(65.7,125);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(78));
    
        // Layer 3
        this.instance_21 = new lib.mai1();
        this.instance_21.parent = this;
        this.instance_21.setTransform(100.5,188.3,0.621,0.621,0,0,0,23.8,25.9);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(78));
    
        // Layer 24
        this.instance_22 = new lib.Bitmap6();
        this.instance_22.parent = this;
        this.instance_22.setTransform(21,215);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(79));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(21,125,200,192);
    
    
    (lib.mThkm_dino = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            /* if (inited == undefined) {
                var over:Boolean = false;
                var inited = 1;
            }
            
            if (!over) {
                stop();
                //dA.dB.dC.dD.gotoAndStop(1);
            }*/
            
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                //this.dA.dB.dC.dD.gotoAndStop(0);
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));
    
        // Layer 35
        this.instance = new lib.dino("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(17.9,228.7,0.621,0.621,0,0,180,280.2,306.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22,193.9,68.4,76.5);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(1.4,103.2,1,1,-8,0,0,-10.5,103.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-11.5,regY:7.1,rotation:-7.7,x:-12.4,y:8.2},0).wait(1).to({rotation:-7,x:-11.2,y:8},0).wait(1).to({rotation:-5.8,x:-9.4,y:7.7},0).wait(1).to({rotation:-4.4,x:-7,y:7.5},0).wait(1).to({rotation:-2.8,x:-4.2,y:7.3},0).wait(1).to({rotation:-1,x:-1.3,y:7.2},0).wait(1).to({rotation:0.9,x:1.9,y:7.1},0).wait(1).to({rotation:2.7,x:5,y:7.2},0).wait(1).to({rotation:4.5,x:8,y:7.3},0).wait(1).to({rotation:6.2,x:10.8,y:7.5},0).wait(1).to({rotation:7.7,x:13.3,y:7.8},0).wait(1).to({rotation:8.9,x:15.3,y:8},0).wait(1).to({rotation:9.7,x:16.6,y:8.3},0).wait(1).to({regX:-10.4,regY:103.2,rotation:10,x:1.4,y:103.2},0).wait(1).to({regX:-11.5,regY:7.1,rotation:9.7,x:16.5,y:8.3},0).wait(1).to({rotation:9,x:15.3,y:8.1},0).wait(1).to({rotation:7.8,x:13.4,y:7.9},0).wait(1).to({rotation:6.4,x:11,y:7.5},0).wait(1).to({rotation:4.8,x:8.3,y:7.4},0).wait(1).to({rotation:3,x:5.3,y:7.2},0).wait(1).to({rotation:1.1,x:2.2,y:7.1},0).wait(1).to({rotation:-0.7,x:-0.9,y:7.2},0).wait(1).to({rotation:-2.5,x:-4,y:7.3},0).wait(1).to({rotation:-4.2,x:-6.8,y:7.5},0).wait(1).to({rotation:-5.7,x:-9.3,y:7.7},0).wait(1).to({rotation:-6.9,x:-11.2,y:8},0).wait(1).to({rotation:-7.7,x:-12.5,y:8.2},0).wait(1).to({regX:-10.5,regY:103.2,rotation:-8,x:1.4,y:103.2},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-78.7,-23.9,127.3,65.6);
    
    
    (lib.Symbol5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150));
    
        // Layer 2
        this.instance = new lib.Tween13("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-2.6,-14.9,0.621,0.621);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));
    
        // Layer 3
        this.instance_1 = new lib.Symbol4col2();
        this.instance_1.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27,-27,54.1,54.1);
    
    
    (lib.Symbol6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Symbol5();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0.1},0).wait(1).to({y:0.3},0).wait(1).to({y:0.6},0).wait(1).to({y:1},0).wait(1).to({y:1.6},0).wait(1).to({y:2.2},0).wait(1).to({y:3},0).wait(1).to({y:3.8},0).wait(1).to({y:4.6},0).wait(1).to({y:5.6},0).wait(1).to({y:6.5},0).wait(1).to({y:7.5},0).wait(1).to({y:8.6},0).wait(1).to({y:9.6},0).wait(1).to({y:10.7},0).wait(1).to({y:11.7},0).wait(1).to({y:12.7},0).wait(1).to({y:13.7},0).wait(1).to({y:14.6},0).wait(1).to({y:15.5},0).wait(1).to({y:16.4},0).wait(1).to({y:17.2},0).wait(1).to({y:17.9},0).wait(1).to({y:18.5},0).wait(1).to({y:19},0).wait(1).to({y:19.4},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:19.9},0).wait(1).to({y:19.7},0).wait(1).to({y:19.4},0).wait(1).to({y:19},0).wait(1).to({y:18.5},0).wait(1).to({y:17.9},0).wait(1).to({y:17.2},0).wait(1).to({y:16.4},0).wait(1).to({y:15.5},0).wait(1).to({y:14.6},0).wait(1).to({y:13.7},0).wait(1).to({y:12.7},0).wait(1).to({y:11.7},0).wait(1).to({y:10.7},0).wait(1).to({y:9.7},0).wait(1).to({y:8.7},0).wait(1).to({y:7.7},0).wait(1).to({y:6.7},0).wait(1).to({y:5.7},0).wait(1).to({y:4.9},0).wait(1).to({y:4},0).wait(1).to({y:3.2},0).wait(1).to({y:2.5},0).wait(1).to({y:1.9},0).wait(1).to({y:1.3},0).wait(1).to({y:0.9},0).wait(1).to({y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(1).to({y:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);
    
    
    (lib.icontxtinactive = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.instance = new lib.Symbol6();
        this.instance.parent = this;
        this.instance.setTransform(6,-4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.icontxtinactive, new cjs.Rectangle(-113.9,-65.9,221,298), null);
    
    
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_14 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));
    
        // Layer 1
        this.instance = new lib.icontxtinactive();
        this.instance.parent = this;
        this.instance.setTransform(-16,-40);
        this.instance.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37,-71,54,54);
    
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:2.3,regY:8.4,x:17.1,y:34.6,alpha:0.306},0).wait(1).to({y:24.6,alpha:0.556},0).wait(1).to({y:16.9,alpha:0.75},0).wait(1).to({y:11.3,alpha:0.889},0).wait(1).to({y:8,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:2.3,regY:8.4,x:17.1,y:7.2,alpha:0.972},0).wait(1).to({y:8,alpha:0.889},0).wait(1).to({y:9.4,alpha:0.75},0).wait(1).to({y:11.3,alpha:0.556},0).wait(1).to({y:13.8,alpha:0.306},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
        // Layer 3
        this.instance_1 = new lib.Symbol4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(29,34);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8,-37,54,54);
    
    
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
    
        // tit
        this.tit = new lib.thapTit_mc();
        this.tit.parent = this;
        this.tit.setTransform(135,45);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // hit
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(147.6,115.8,1,1,0,0,0,67.8,98.2);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(46,8,169.6,206);
    
    
    // stage content:
    (lib.thtt2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_thtt.mp3", "voice_thtt"); 
            var icon_thttSound, icon_thttSoundTimeOut;
            root_thtt = this;
            htcv_icon_thttOver = function() {cv_icon_thttOver();}
            htcv_icon_thttOut = function() {cv_icon_thttOut();}
            
            function cv_icon_thttOver() {
                root_thtt.ico.over = true;
                root_thtt.hit.tit.over = true;
                root_thtt.hit.tit.gotoAndPlay(1);
                icon_thttSoundTimeOut = setTimeout(icon_thttSoundTimeOutComplete, 500);
                
                root_thtt.dino.over = true;
            }
            
            function cv_icon_thttOut() {
                root_thtt.ico.over = false;
                root_thtt.hit.tit.over = false;
                if (root_thtt.hit.tit.currentFrame == 7) {
                    root_thtt.hit.tit.play();
                }
                clearTimeout(icon_thttSoundTimeOut);
                
                root_thtt.dino.over = false;
            }
            
            function icon_thttSoundTimeOutComplete() {
                clearTimeout(icon_thttSoundTimeOut);
                
                // if (root_thtt.ico.currentFrame == 0) {
                //     icon_thttSound = createjs.Sound.play("voice_thtt");
                // }
                root_thtt.ico.play();
                
                root_thtt.dino.play();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 5
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(101,88,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // dino copy
        this.dino = new lib.mThkm_dino();
        this.dino.parent = this;
        this.dino.setTransform(217.1,244.5,0.75,0.75,0,0,0,129.4,186);
    
        this.timeline.addTween(cjs.Tween.get(this.dino).wait(1));
    
        // Layer 1
        this.ico = new lib.mThkm_resize();
        this.ico.parent = this;
        this.ico.setTransform(151.4,136,1,1,0,0,0,129.4,186);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(165,163,200,299.8);
    // library properties:
    lib.properties = {
        width: 244,
        height: 310,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/thtt2017_atlas_.png", id:"thtt2017_atlas_"},/*
            {src:"sounds/voice_thtt.mp3", id:"voice_thtt"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_thtt = lib_thtt||{}, images_thtt = images_thtt||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_thtt, images_thtt, createjs, ss, AdobeAn;