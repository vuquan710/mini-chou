(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"ea2017_atlas_", frames: [[0,225,29,31],[170,184,34,34],[0,101,131,122],[168,0,29,32],[72,225,31,23],[133,184,35,40],[0,0,166,99],[105,225,16,14],[31,225,39,19],[170,220,43,23],[133,101,54,81]]}
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
    
    
    
    (lib.Bitmap12 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap13 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap14 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap15 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap16 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap18 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap19 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap2 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap3 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap4 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.Bitmap9 = function() {
        this.spriteSheet = ss["ea2017_atlas_"];
        this.gotoAndStop(10);
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
    
    
    (lib.Tween39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(204,255,0,0.988)").s().p("AghAiQgOgOAAgUQAAgTAOgOQAPgOASAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgSAAgPgOg");
        this.shape.setTransform(1.5,-1.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(204,204,0,0.988)").s().p("AgxAyQgVgVAAgdQAAgcAVgWQAVgUAcgBQAdABAVAUQAVAWAAAcQAAAdgVAVQgVAWgdAAQgcAAgVgWg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.1,-7.1,14.3,14.3);
    
    
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#EEF4FE").s().p("AihFoIgkgHIgBAAQiYgig1haQhliuAQiEQAPh3BphMQBehFCXgYIAMgCQBuAfB8AGQBYAEBIgHIACABQCVBFApC1IgrgCIAEAgQghhTg7g2Qhrhhi/gEQiMgEiAA7QiKBAgfBiQg+DCCCBxQBgBTCHAHQBfAEBRggQBPghA7hBQAxg3ALhAQALhCgggzQgjg5hDgcQhMgghTAYQhGATgwA2QguAzgHA3QgJBMBAAbQAhAPAhAFIBJgGQAvgRALggQAMghgqgRQgVgJgVgDQgegCgEASQgCALgOgQQgNgQADgIQAIgnA+ATQA3AQASAYQAfAngPAvQgRA0hHAJQiVASg0hnQgWgsAGg1QAGg0AhgtQAlgxA2gdQA7ggBCACQBCACA4AcQAyAaAgAsQBGBdgcBqQgcBth5BPQhcA8h8AAQgwAAg0gIgAHlBfIAGgBIgBAhQgCgQgDgQg");
        this.shape.setTransform(228.5,192.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D6E1FC").s().p("AIPK3Qh9gGhugfQg6gRg2gXQi9hRhiiZQg8hfgWh2QgUhsALiAQAOiSA/iHIALgWIAPgdQBJiEBqhPQBMg6BfgeQikByhaCCQgYAjgTAlQg7BwgZCwQgRB6BLCoQBCCVBHA6QB7BkCbAuQCcAvCigQQCkgRCdhJQCthRBWhyQBah4gfiWQgciLh0hnQhlhbiIgnQiMgpiFAbQihAhhTBxQhYB3AvCRQAUBAA6AtQA2AqBJAPQBJAQBGgRQBKgSAygyQBmhohKhPQgZgagmgRQg7gahYgDIgBAAQgWgBgZABQA2gEAuABQDNAGAaB4QAMA1gdA/QgaA4gmAcQg3AohVAPQgeAFgfABQg4ADg5gKQjRgkhDiiQg2iNBtiRQBmiIClgsQCUgmCWAVQCfAWBxBRQB6BYA9CnQBACug2CEQg7CNicByQiRBojDA7QgxAPg9AGQgtAFgzAAQgfAAghgCgAulB5QiHg/gLhnQgJhbBPhKQBPhJBcAMQBoANAzB/QANAjgbAiIgeAcQAOgfgCglQgEhMhPgiQg1gVg6AVQgPAFgPAJQhNAqAGBJQAHBdBWAqQBMAmBqgQQBqgRBIg7QBRhDgChcQgCitishHQiehBjDAzIgiAKQAtgUA1gRQiUARh4BTQjrClCNFCIgPAGIgFgKQgVgqgNgtQgbhdAMhVQAMhWA4hGQA1hABSgpQCuhWDBASIAXACQA/AIA0ATQBzAqA/BjQAnA8AGA8QAEAngKAoQgXBXhXBBIgYARQhJAvhZAOQgiAGggAAQhEAAg4gbg");
        this.shape_1.setTransform(188.1,89.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E0E9FD").s().p("Ag9SFQiSgjhfhiQhmhrACiOQhrAsiBgUQh8gThphHQhthKgzhpQg4hxAdh9QAkgDAngMQBFgUBFgrIABABQgWBxA1BNQAwBFBiAZQBdAYBogZQBugbBRhIQgwCpA+COQA3B/B6BFQB1BDB5gVQCBgWBGh1QEnBFCxiuQBMhKAhhoQAbhXgIhZIgFggIAsACQEMADDFi1QC2imAhjbIAGAfIADAeQADAdAAAdQABC6h+CbIgPARIgvAxQh+B1jHA8QhNAXhXAOIgGABQADAQABAQQARCzijB4QikB6kEAGQhJCGiRAzQhLAbhQAAQg9AAg/gQgA2uAEQgdhQgEheIABhPIgJgJIgHgIQi9jZAIj6QABgcADgaIABgIIABgDQAFgmAKgmIARg5IBii3IAhgrIANgPQhJBsgUCDQgTB5AfB3QAdB0BEBXQA/BSBUAlQgJAMgIANQghAegNBEQgTBfAjBjQAoBvBbA5QAxAeA7ALIgDgDICJAFIAMgCIAMgCQBXgPBEgnQCJhPAGiQQACg9gUhJIgBgDIAAgBIgEgNIgIgXQAPAYAJAYQAHAWABAVIAJgBIAHgBQATA5AAA4QgBDulkCGIgFgFQgzALgsgGQgIgBgJAEQj1gwhRjjg");
        this.shape_2.setTransform(176.9,151.8);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AA5SiQhrgNhPhmQhOhlgMiIQgNiSBHh6QiEA+jVgUQjWgWhMhiQAhgdAagjQA4hMAPhXQANhMgWhEQBkgNBugdQCYgoBZgxQBFgnAxg/QAXB1A8BeQBgCZC+BSQA2AXA7AQIgNACQiXAZheBEQhpBNgOB2QgQCGBlCtQA1BaCYAiQhlBhhpAAIgagBgAEhRCIAkAHQC+AgB/hTQB6hQAchtQAbhqhFhdQghgsgygaQg3gdhCgCQhDgCg8AgQg2AdgkAxQghAtgHA2QgGA0AWAtQA1BnCWgTQBGgIARg1QAPgugfgnQgSgYg3gRQg+gTgJAnQgCAJANAQQANAPACgKQAFgTAeADQAWACAVAKQApARgLAhQgLAggwAQIhJAGQgigFgggOQhBgbAKhNQAHg4AtgyQAxg2BGgUQBTgYBMAgQBDAcAjA6QAhA0gLBBQgLBAgyA4Qg7BBhPAgQhRAhhfgEQiIgIhfhTQiChxA+jCQAfhjCKg/QCAg7CMADQC/AEBrBhQAwCJgQB0QgWCTh5BcQhoBQiHANQgYACgWAAQhfAAgzgsgAMFGUIgCgBQA8gGAxgPQDDg6CRhpQCdhxA6iNQA2iEhAiuQg8ioh6hXQhyhSiegWQiXgViUAnQikAshmCIQhuCRA2COQBEChDRAlQA5AJA4gCQAzACAygJQBQgPA0gnQAjgcAYg4QAbg/gLg2QgaiFjoAHQgtgCg3AFQAZgBAXABIABAAQBYADA6AZQAaARALAcQAbA/gyBCQhEA5hQgOQhPgOg1hOQgdh8A8hTQA0hHBrgeQBfgaBnAOQBlANAvAtQBcBqAYBMQAjBxhOBvQhQBxhrAyQhYApidAQQiOAQiehFQiHg6h/htQgggdgkhAQgqhLgahZQg4jGAqi7QBbiDCjhxQheAehNA5QAvgoA3ghQCXhcDEgaQCPgTCUARQAsAGAtAIQDBAlCeBcQCmBfBhCJQBOBwAZB7QggiQhph9QBbD1gJCZQgMCmiFCSQASCbg8B0Qg4BthyA8QhvA5iNAAIgCAAQiKAAiIg2gAyhGXQhOgbg1hGQgKgNgJgOQAbAZAiASQA9AeBLgBQBMgBA5giQBEgpgEhRQgFhOg/gxQgvgjg+AEQhCAEghAuQghAtAiAwQAeAsA0AIQglgZgMglQgLgiAQgZQAog4A+AaQA5AYAXA3QARAvghAnQgnAvhfAAQhbgCg7g2Qg7g2gIhZQgIhdBOg+QBEg2BpgOQBQgLBbAlQBRAgBEA8QAbAWATAZQgHDLiUBuQhBAwhMAPQgdAFgbAAQgqAAglgNgArpAyIADAEIAEAOIAAAAIAAAEIABAAQAUBIgCA9QgEhJgWhSgAq0hHQiCgOhPgeQgSgJgSgHQhRgpgwhKQgyhNAYhcQAVhOBEhIQBUhRCDgIQB2gIBkAzQBmAzAQBMQASBXhqBQQhrBDhTgNQhFgLgjg+Qgfg4APg8QAIgeARgSQA6gWA0AVQBQAjADBLQACAmgOAeIAegbQAcgjgOgiQgyh/hogOQhcgMhPBKQhQBJAKBbQALBpCHA/QBSAnBsgSQBZgPBIgvQBdgtAlhWQAWg5gLg9QgGg7gng8QhAhjhygrQgXgJgZgGQgggIgjgDIgYgDQjBgRiuBVQhSApg0BBQg4BFgMBWQgNBVAbBeQAOAuAVApQj2iLgnkLQgPhrAWhpQAThbAkg1QBMhJBdg5QCWhaClgiQBUgRBSgCQBYgBBVARQF7BKDWGOQALAUAJAVIgLAWQgKgZgMgaQgVgrgYglQgVggAAAGQBBCxgtCwQgkCMhDA1QhtBXh1AuQhvAshmAAQgXAAgWgCgA6rnQIgBAHIgBAHIgDAiQABgYAEgYg");
        this.shape_3.setTransform(179.8,118.7);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#EFF5FE").s().p("Ah3QaQh6hFg3h/Qg+iOAwipQhRBIhuAbQhoAZhdgYQhigZgwhFQg1hNAWhxIgBgBQhFArhFAUQgnAMgkADQgnADgjgFQgRgCAMgHIAFgCQAJgEAIABQAsAGAzgLIAFAFQFkiGABjvQAAg3gTg5IgHABIgJABQgBgVgHgWQgJgYgPgYIAIAXIgDgFQAWBTAEBIQgGCRiJBPQhEAnhXAPIgMACIgMACIiJgFIADADQg7gLgxgeQhbg5gohwQgjhiAThfQANhEAhgeQAIgNAJgMQhUglg/hSQhEhXgdh0Qgfh3ATh5QAUiDBJhsIgNAPQAlgtAsgqIAAABQgkA0gTBcQgWBpAPBqQAnEMD2CLIAFAKIAPgGQiOlDDrilQB4hTCVgRQg2ARgsAUIAhgKQDEgzCdBBQCsBHACCtQACBchQBDQhIA8hqARQhrAQhMgmQhVgqgIheQgFhJBNgqQAPgJAPgFQgRATgIAdQgPA8AfA5QAjA+BFAKQBTANBrhDQBqhQgShWQgQhNhmgzQhkgzh2AIQiDAJhUBQQhEBIgVBPQgYBbAyBOQAwBJBRAqQASAHASAIQBPAfCCANQB6AMCIg1QB1guBthXQBDg2AkiLQAtixhBixQAAgGAVAhQAYAkAVAsQAMAaAKAZQhACHgNCSQgMCBAUBsQgxBAhFAmQhZAziYAnQhuAdhkAOQAWBEgNBKQgPBYg4BLQgaAjghAeQBMBhDWAWQDVAVCEg+QhHB6ANCSQAMCIBOBkQBPBnBrAMQB3AOBxhtIAAAAQA+A2CCgMQCHgOBohPQB5hcAWiUQAQhzgwiJQA7A2AiBTQAIBZgbBXQghBohMBKQixCuknhFQhGB1iBAWQgdAFgdAAQhbAAhZgzgA0qB8QA1BGBOAbQA9AVBKgOQBMgPBBgvQCUhuAHjLQgTgYgbgYQhEg7hRggQhbglhQAKQhpAOhEA3QhOA+AIBeQAIBYA7A2QA7A1BbADQBfAAAngwQAhgngRgtQgXg4g5gXQg+gbgoA4QgQAaALAiQAMAjAlAaQg0gIgegrQgigwAhgtQAhguBCgFQA+gEAvAkQA/AwAFBNQAEBRhEAqQg5AhhMACQhLABg9gfQgigRgbgaQAJAOAKAOgAO9HUQgqi1iUhFQCJA2CLAAQCNAABvg6QByg8A4hsQA8h0gSibQCFiTAMilQAJiZhbj2QBpB9AgCQQAHAjAEAlQATDLh8DUQAVA6AJA6IgGgfQghDai2CnQjBCykGAAIgKAAgAGpBMQicguh7hjQhHg6hDiVQhKioASh7QAYiwA7hwQATglAYgjQgqC8A4DGQAaBZAqBLQAkBAAgAcQB/BvCHA6QCeBECOgPQCdgRBYgpQBrgyBQhxQBOhwgjhxQgYhMhchpQgvgthlgOQhngOhfAaQhrAfg0BGQg8BTAdB8QA1BPBPANQBQAPBEg6QAyhBgbhAQgLgbgagRQAmARAZAaQBLBQhnBoQgxAyhLASQhFARhJgQQhJgPg2gqQg6gtgUhAQgviSBYh3QBThxCgghQCGgbCLApQCIAnBmBbQB0BnAcCMQAfCWhaB4QhXByisBQQieBJikARQgpAEgpAAQh3AAh0gjgArohyIAAgDIABADIgBAAgA3/h4IgCgCIAHAIIgFgGgA4Eh+QjBjfAPj9IADgiIABgHQgDAagBAcQgID6C9DZIgDgEgALejFQAegBAfgFQBVgPA3goQAmgcAag4QAcg/gLg1Qgah5jOgGQDogGAaCFQALA1gbA/QgYA4gjAcQg0AohQAPQgnAHgoAAIgWgBgAngmaQBXhCAXhXQALgogEgnQALA8gWA5QglBXhdAtIAYgRgAq9uiQAjADAgAIQAZAHAXAJQg1gTg+gIg");
        this.shape_4.setTransform(180.4,137.4);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#BFD1F5").s().p("AhjVzQiZglhjhnQhrhxABiUQhwAuiHgVQiDgThuhLQhyhOg1huQg7h5AfiEQlCgbhikPQgehWgFhjIAChRQkYkxBgliQAqicBwiJQBsiFCbheQCcheCtglQBtgWBpADQhSABhUASQilAhiVBbQheA5hMBJIABgBQgtAqgkAtIgiArIhhC3IgSA5QgKAmgFAmIAAADQgEAYgBAZQgQD9DBDfIAEAEIABACIAGAGIAIAJIgBBPQAFBdAcBRQBSDjD0AwIgEACQgNAHARACQAkAFAmgDQgcB9A3BxQAzBpBtBKQBpBHB8ATQCCAUBqgsQgBCOBmBrQBeBiCTAjQCTAjCEguQCRgzBJiGQEEgGCkh6QCih4gQizIABghQBYgOBNgXQDGg8B/h1IAvgxIAOgRQB+ibAAi6QAAgdgDgdIgEgeQgJg6gUg6QB7jUgTjLQgDglgIgjQgYh7hPhwQhgiIimhgQifhcjBgkQgsgJgsgFQBEAFBFAOQDKAnCnBgQCtBkBlCPQDqFMjfGpQAxCJgQCIQgRCNhRB3Qi5EKmtBDQAlDSi5CJQisCAkQAGQhNCOiZA1QhOAchVAAQg+AAhDgQg");
        this.shape_5.setTransform(180.2,141.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,360.5,282.2);
    
    
    (lib.hit_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,255,255,0)").s().p("ABCKhQhNgihMgmIhOAaIjvhoIAFhJQg9hUgshcQhAiFgviMIiWhOIAAjIIARh7IBChnIBPgfQAoABAogGQAmgCAlgPIAsASIBVhkQA/gUBBgPIA2AIIH5B1IBMAlIBEB2IAfgaIBSAaIAOAqIgaBVIg/ANIgCBJICcAxIAeA9IAgBfIgNCWIh/AKQAFA0ADA0IAFBfQkVCSkWCOQgFACgEAAQgFAAgEgBg");
        this.shape.setTransform(76.6,67.4);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.hit_1, new cjs.Rectangle(0,0,153.3,134.9), null);
    
    
    (lib.Tween42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA8AbQAAgRANgNQALgNALAAQATAAAKARQAJAPgBASAiDAKQAAgQAMgOQAMgNALAAQASAAALASQAJAPgBAR");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.2,-4.4,28.5,8.8);
    
    
    (lib.Tween41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABbAcQgWgJAAgDQAAgDAbgPQAagQAAAIQAAAEgmAUIgBABIAaAIQAWAFAAAFQAAAFgGAAQgKAAgYgKgAiCAcQAAgFAcgKQAbgIAFAAQgHgGgXgQIgVgQQAAgEAGAAQAJAAAwAsQAAAGgIAAQgRACgLAEQgaANgFAAQgFAAAAgEg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.1,-3.7,26.3,7.6);
    
    
    (lib.Tween40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AgGA+QgOAAgIgTQgIgUADgYQADgbAMgRQAMgSANABQAPACAHASQAIAUgDAZQgDAagLARQgMARgMAAIgCgBg");
        this.shape.setTransform(-8.6,-0.9,0.325,0.325);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AgGA+QgOAAgIgTQgIgUADgYQADgbAMgRQAMgSANABQAPACAHASQAIAUgDAZQgDAagLARQgMARgMAAIgCgBg");
        this.shape_1.setTransform(8.6,0.9,0.325,0.325);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.7,-2.9,19.6,5.9);
    
    
    (lib.Tween38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEF0BA").s().p("AhnC9QiYhIg6hIQhIhXA+heQAHgKAagfIAkgpIATAFIADABQBJAWAuALIAtAJQgDAIACAHIADAFQAEAGAGAGQASARAdAHIABALQABANgDAQIAGADQgBgIACgJQADgSAKgFQAZACAXgMQAPgIAIgJQAJgIACgFQgGAGgIACQgDABgYgIIgVgFIgEgBIgBAAIABAAIAEAAQBVAICYgEIADAAIAggBQAcBAALArQARA8gIAkQgKApgvAnQgvAnhCAYQhGAZhHABIgFAAQhLAAg+gegAg/iiQgCgDAAgEQAcAFAaAEQgVgBgPABIgNABIgDgDg");
        this.shape.setTransform(-0.3,26.3);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F89734").s().p("AFiA5IAGgCIAJgFQAHgEADgEQAFgHAAgIQAAgHgEgJQgEgJgFgGQgHgKgGgFQgHgIgIgEQgIgFgJAAQgJAAgIADQgHACgHAFQgJAHgIAJIgDAEIgDADIAGgHIADgEQAHgIAGgFQAHgFAHgDQAJgEAJAAQAKAAAJAFQAIAFAIAHQAGAHAGAJQAGAHAEAJQAEAJgBAIIgCAJIgEAHQgDAEgHAEIgKAFIgGABIgDABgAl1AOIgGgIQgEgGgBgFIAAgIIACgJQAEgHAIgHQAHgFAJgFQALgFAIgCQAKgEAJAAQALABAIAEQAIAEAGAHQAFAHAEAHIAEANIACAKIABAHIgCgGIAAgBQgCgMgFgKQgEgHgEgGQgHgHgHgEQgIgDgKAAQgIAAgKADQgKACgIAFQgJAEgHAGQgIAGgEAGQgDAHABAIQABAGADAGIAGAIIAGAGIgHgGg");
        this.shape_1.setTransform(0.9,-10.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AhsEoQAEgkASgiQAlhIBLAAIADAAQA1ABAgBfQAIAYAGAZIhjABQhSAAg3gEgAiOEjIgIAAQgagEgcgFIABgIIgEAHIAAABIgtgKQgugLhJgVQAjgoAbgXQAegYANgIQAWgMAWAAIAPABIAAAAIAQASIgDgGIgFgLQAxANAKBPQAFAggDAhIgEgBgAFwjjIgPgPIgNg5IAPAkIARAog");
        this.shape_2.setTransform(13.6,-18.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FBB24C").s().p("Ah2HBQichKg8hJQhJhbA/hgQA2hSB+hnIAUgRIACgBIAFgCIAGgBQAHAAAFABQAGABAGAEIAKAGIAJAIIAEAEIgMgBQgWAAgXANQgOAIgeAZQgcAWgjApIgSgGIgkApQgaAfgHAKQg/BeBIBYQA6BICZBIQA/AfBOgBQBHgBBGgZQBDgYAugnQAvgnAKgpQAJgkgRg9QgMgrgbhAIggABQgGgYgHgWQghhkg4gBIgEAAQhNAAgnBIQgSAkgEAjIgBAAIgVgDQADgmgGgjQgNhMgzgKIgBgBIgGgKIgJgJIgMgJQgGgDgIgCIgKgBQAygoAzgkIBaAOIBrARIAfA3QAlBFAeA9QBeDHgQBBQgJAngxAoQgwAohEAaQhJAbhJACIgKAAQhKAAg9gdgACrhqQAHAEAGAGQAKAKAIAPIAFAMIADAJIABAHIAAACIAAgCIABgHIgCgKIgDgNIgHgOQgEgIgGgGQgHgJgIgEQgJgGgLAAQgKAAgKAEQgHADgJAHQgGAFgGAIIgKAMIgGAMIgFAJIgEAIIAegkIAMgLIAHgFIAEgCIAEgBQAHgEAJAAQAIABAIAEgAFLgWQgQgCgSgEIgPgDQAAgKgDgOQAGgFgJgZIgJgZIAIgMIADgEQAIgJAJgHQAHgFAHgCQAIgDAJAAQAJAAAIAFQAIAEAHAIQAGAFAHAKQAFAHAEAJQAEAJAAAHQAAAIgFAHQgDAEgHAEIgJAFIgGACIgDABIADgBIAGgBIAKgFQAHgEADgEIAEgHIACgJQABgIgEgJQgEgJgGgIQgGgJgGgHQgIgHgIgFQgJgFgKAAQgJAAgJAEQgHADgHAFQgGAFgHAIQAIgLAIgHQAigfAjAeQAVASAEAnQACAPgDAIQgBADgCACIAFAAQATAAAQgLQgFAYgVATQgNALggAAIgZgBgAlsg2QgxgUgIgWQgKgbAHgXQAJARAQAJIAFADQgBgCABgEQABgJAJgMQAWggAcgGQAtgJAPArIAEATIgEgOQgEgHgFgHQgGgHgIgEQgIgEgLgBQgJAAgKAEQgIACgLAFQgJAFgHAFQgIAHgEAHIgCAJIAAAIQABAGAEAGIAGAIIAHAGIgGgGIgGgIQgDgHgBgGQgBgIADgHQAEgGAIgGQAHgGAJgEQAIgFAKgCQAKgDAIAAQAKAAAIADQAHAEAHAHQAEAGAEAHQAFAKACAMIABACIAAABIACAQIgUASQgUASADAHQgJALgFAJQgXgGgYgKgAF1nIQgCgGAVgIIAWgHQgYAIAFAqQACAWAHATIgfhGg");
        this.shape_3.setTransform(0.9,0.9);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FDD65C").s().p("AEzDwIgfgDIgdgFIgBgMIgCgMQgDgOgFgLQgFgMgHgKIgEgFIgFgEIABAAIgKgJIABgCIALgaQAIgPAJgMQAKgOALgHQAOgKAOgBQAOgBAPAHQAMAFAOALIAXAVQALAMAIAMQAJAOAEANQAEAQgCAOQgCAPgIANQgJANgLAJQgFAEgIADIgPACIgWABIgJAAgADoCVIAJAZQAKAZgHAFQADAOAAAKIAPADQASAEAQACQA1AFARgPQAWgTAFgYQgQALgTAAIgFAAQACgCABgDQADgIgCgPQgFgngVgSQgjgegiAfQgHAHgIALIgEAEIgFAHIADgDIgJAMgAl+DXQgOgFgOgHQgRgIgKgHIgLgKQgGgGgDgGQgGgOAAgPQgBgPAFgOQAFgOALgLQAKgKAOgIQAMgGARgGQAOgFAQgCQARgEANABQARABALAIQAMAIAIAPQAGAMACARQADAPgBAQQAAASgDANIgMADIgJAEIgDABQgMAFgKAIQgJAIgJAKIgIAKIgGAJIgdgJgAnHCjQAHAWAxAUQAYAKAXAGQAFgJAKgLQgEgHAVgSIATgSIgCgQIAAgCIABAHIgBgIIgBgKIgFgSQgPgrgtAJQgbAGgXAgQgJAMgBAJQAAAEABACIgFgDQgRgJgIgRQgHAXAKAbgAFQjBQgCgHADgEIAEgDIAvgTQAhgNAJAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACAFIALAgIgPgkIANA5IAPAPIAEANIghgSIgMApIglgYIgKAlQghhBgDgMgAFmjSQgWAIACAGIAgBGQgHgTgCgWQgFgqAYgIIgWAHg");
        this.shape_4.setTransform(4.4,-25.1);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#373535").s().p("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");
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F26C36").s().p("AibHNQghgCgLgSQgIgNADgTIAFgRIADgHIgHADIgiAIQgnAJgbAAQgqAAgCgWIAAgBIgDgPQgCgRADgLIACgGIgGACQgIADgMADQgYAFgWAAQgoAAgYgTQgfgYgBg3QgBhLAng7QAMgTAPgOIAMgMIARgMIgUAHIgWAGQgaAGgSAAQgXAAgHgJQgGgJAFgPQAMgoAygdQAPgJARgHIAPgFIAMgEIgMgCIgQgFQg+gSgJgjQgFgWARgaQAFgIAHgIIAGgHIAAAAQANgVAwgLQACANAEALQAGAMARAMQALAIAQAHIAdAMIAeAJIACAAIABgBIAGgLIAIgKQAIgKAJgIQAKgIALgGIAYgIQADgQABgPIAAgBIAVACIgUgIIAAAAQAAgOgCgLQgBgRgHgNQgHgQgNgJQgNgJgRgBQgPgCgRAEIgCAAQgRgZgBgTQAAgRAQgIQALgFAPAAQApAABAAmQAgAUAZAUIAZAUIgVgZQgPgSgMgXQgagrAJgVQAHgPAbAAIAEgBQA2AAA1AwQAaAXAPAZIAJAOIgDgRQgEgSAAgVQAAgqAQgTQAQgTAfAJQAlAKALAZQAIAUgHAdQgEAOgFAKIgNAZIASgVIANgNQAQgQAQgNQAygqAfAAQAHAAAGACQALAEADAKQAEAUgaAmIgcAjIAFAEIAhgWQAngWAaAAQAPAAAKAIQAQANgCALQgCAJgNAHIgKAFQgIgBgHABQgQACgNAKQgMAJgKAOQgJANgHAPQgHAOgEAPIAKAJIAHAJQAHAKAFANQAEAKACAOIACAMIABANIAAABIABABIAfAGQAQADAPABQASABAOgBIAQgDQAJgDAGgEQAMgKAIgNIAXAUQArAoARAgQADAFgDAFQgGALgfAHQgWAGgXABIgIABIAGAFQAtAlAhBXQAgBSgBA/QgBAhgLAJQgMAJgKAAQgOAAgNgQIgLgQIgGgNIgBAaQgBANgDAMQgJAngUAKQgFACgEAAQgKAAgFgRIgCgWIgCgJIgGgeIAAAeIAAALQABAMADAKQADAzgRATQgIAJgNAAQghACgogSQgNgGgMgIIgUgOIAGAMIAFAOQAEAPgEAJQgEAIgLACIgHAAQgYAAgsgSIgogTIgCgBIgIAKQgHAKgJAIQgaAZgZAAQgLAAgKgEQgegPgKgSQgEgFgBgGIAAgEIAEgPIgRAWQgLAKgNAJQgpAcgyAAgAibiqQh+Bpg2BQQg/BhBJBaQA8BKCcBKQBBAeBQgCQBJgCBJgbQBEgaAwgnQAxgoAJgoQAQhBhejGQgeg+glhEIgfg4IhrgQIhagOQgzAjgyAoIgFABQgFAAgJAEQgGACgFAFIgJAIIgGAHIgEAGIgDAGIARgPIAJgGIAJgFIgUARgAhVk9IARAIIAVAHIAXAHQAPADAKABQALACAQABIAcAAIAagEQAIgBAQgEIAVgHIARgIIAXgNIgLAFIgOAFIgIADIgJADIgVAFIgXAEIgaACIgaAAIgbgCIgYgEIgXgFIgVgGQgQgEgPgGIgLgFgAG7jSQgEgPgKgOQgIgMgMgMQgKgLgNgLQgJgHgJgFQAfAGAkAVQAwAcAQAcQAFAJgDAFQgEAGgQAEQgNADgVABQAAgMgEgMg");
        this.shape_6.setTransform(0,10.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-54.7,-57.5,109.5,115.2);
    
    
    (lib.Tween37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEF0BA").s().p("ABPAeQgFgBgkgKIgMgDIgBAAIgcgDIgNgBIgIAAIgfgCQgWAAgMgEIgCAAIgFgDQgHgDgCgEQgBgDACgEQAEgMAPgBQAHgBAHACIAAgBQgHgCgIABQgPABgEANIgBAFQgCgFACgFQAFgMAPgBQAHgBAHACQALAHAQAHQAQAHAMADQAFACgBACQAAADAFABQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAgBQAAgDAGgBQAIgCAdgCQAdgCAPABIAOACQAKAEACAIIgEgEQgEgEgJgBIgIAAIAAABIAIAAQAIABAFAEQADADABAEIgBAEQgCANgMADIgBAAIgGAAIgHAAg");
        this.shape.setTransform(0,-3.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F26C36").s().p("AATALQgTgKgMAIQgEACgGgCQgGgCgEgEQgEgDAEgEQAEgFAOgEIAGAAIANAAQAWABAFAIQADAEAAAFQAAAEgCADQgCACgEAAQgEAAgEgDg");
        this.shape_1.setTransform(-0.2,3.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E14F39").s().p("AgKAaQgWgDgRgKQgSgLgHgNQATgKAUgEQAigFAkAOQAUAHAVANQgLANgYAGQgQAEgRAAIgSgBgAAUAJQAFAEADAAQAEAAACgDQACgCAAgFQAAgDgDgFQgFgIgVgCIgOAAIgGABQgOADgEAFQgEAEAFAEQADAEAGACQAHABADgCQAGgDAGAAQAJAAAKAFg");
        this.shape_2.setTransform(-0.3,3.9);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#923237").s().p("AglAPIgCgNQAAgMAHgIIAcABQAFAFgBAFIgEAJQAAAFAEABQAIACABgFIgBgMQgBgDAJgFIATAEIACAEQADAEAAADQgBAGgEAMIgCAGQgkgOgiAFgAASgPIAIgDIABAAIABABIAGAEIgQgCgAgegTIAHgEIAIABIAEABIAFADIgYgBg");
        this.shape_3.setTransform(-0.1,-0.2);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#373535").s().p("AgIBCQgXgCgSgKQgRgKgLgPQgLgOgEgQQgDgOADgOQgKgDgDgGQgDgDABgFIABgFQAFgNAPgBQAIgBAGACIAAABQgGgCgIABQgOABgFAMQgCAEABADQAAADACADQADAFAJADIABgDIABAAIgBADQANAEAYABIAKABIANAAIAYACIAIAAIAPACIAQADIAGABIALADQASAGAJACQAJABAHgBIAAgEIABAAIAAAEIAHgCQAGgEABgJIAAgJQgBgEgDgDQgEgFgJgBIgHAAIgBgBIAJAAQAIABAFAFIADAEQACAGgBAHQgBAKgHAEIgHACIAAACQAAAcgXAUQgZAUgoAAIgNAAgAhbgDQADAQAKAOQAMAQASAKQASAKAWACIANAAQATAAARgFQAQgFAMgKQALgJAGgNQAGgMAAgNIAAgBIgFAAQgIAAgLgDIgUgGIgKgDIgFgBIgSgDIgOgCIgGAAIgcgBIgLgBIgKAAQgYgBgNgFQgCANACANg");
        this.shape_4.setTransform(0,0.2);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#C03539").s().p("AgHAxQgXgCgSgKQgSgJgLgRQgKgNgDgQQgDgOACgMQAOAEAXABIAKABIAMAAQgIAHAAAOIACANQgUAEgTAJQAIAOARALQASAKAWADQAaAEAYgHQAYgGALgNQgVgOgUgHIACgFQAFgMAAgGQABgEgDgEIgDgFIAFACIAKADIATAGQALACAIAAIAGAAIAAACQgBAOgGALQgGAMgLAJQgMAKgQAGQgQAFgUAAIgMgBgAAAgLQgFgBABgFIADgKQABgFgFgFIAHABIANABQgIAEAAAEIACANQgBAEgFAAIgDgBgABNgVQgJgBgTgGIgKgDIgGgCIgFgEIgCgBIAMACQAkALAFAAQAIABAFgBIABAFIgGAAIgKgBgAACglIgIgBIgGgDIgEgBIANAAIAcADIgIAEIgPgCgAgsgoIgKAAQgXgBgNgEIAAgEQANAEAWABIAfABIgHAEIgNgBg");
        this.shape_5.setTransform(0,1.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.8,-6.8,21.7,13.7);
    
    
    (lib.Tween36 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AhKAxQAIg4ARgbQARgcAbAAQAKAAANAFQAcALAPAdQAOAdAAArQgaAIggAAQgqAAgxgOg");
        this.shape.setTransform(6.8,-14.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("Ah7DUIgBgDIAVgEQAagGAZgKQBQgiA1hEQAlgvAQhCQAIgeABgbQgaAIggAAQgsAAgwgOQgEAZgCAfQgEBMhBA6QggAeggANIgBgDIgCgDQAfgNAggcQA+g4AFhLQACgfADgaIABgGIAJgsIAFgSIAMgaQAJgOAMgHIAFgDIALgEQARgEAWAIIAAABQAUAHANAQQAGAHAFAIIACAEIAEALQAGAPADASIABAYIAAALIAAACQgBAcgHAgQgRBEgmAwQg2BGhSAiQgaALgaAFIgVAEgAASi0QgRAcgHA5QAwANArAAQAgAAAagIQAAgrgOgeQgPgdgcgLQgNgFgLAAQgbAAgRAcg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FBB24C").s().p("AiRBQIABAAIABADQAggNAggeQBBg5AEhNQACgfADgZQAxAOAsAAQAgAAAagIQgBAbgIAeQgQBDglAuQg1BEhQAiQgZAKgaAGIgVAEIABADg");
        this.shape_2.setTransform(-0.3,6.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9,-21.5,29.9,43.1);
    
    
    (lib.Tween35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AggAaQAOgTARgPQAUgSASgeQAKgPAFgLQgCAXgTAdQgSAYggAeQgZAYgEAUQgBAKADAFQgPgTAdgmg");
        this.shape.setTransform(17.2,-5.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F26C36").s().p("AgcBrIgBAAQgIgDgIgGQgRgNgEgRQgHggAugrQBAg+AHgrQATA0AEAtQAGBEggAkIgQAMQgUAMgOAAQgLAAgIgGgAAcg/QgSAdgUATQgRAPgOASQgdAmAPATQgDgFABgKQAEgUAZgXQAggfASgYQATgdACgWQgFAKgKAQg");
        this.shape_1.setTransform(18.1,-4.3);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("Ai8ClIhAgPIgDgBIALgsIAEABIBLAQQBYARBIAAQBGAAAsgyQANgPAIgOIgBgCQgSgNgDgSQgIgkAxguQAwgvAQgkQAJgWgFgNIgBgDIAGgDIABAEQAVAwAIAxQANBVgmArQgIAHgKAGQgVANgRAAQgVAugvAaQg6AghcAAQhBAAhMgPgAj3CQQAfAJApAIQBFANA7AAQBaAAA4geQAtgYAUgsQgIgCgHgEQgHgDgGgEQgMAVgRARQgtAshDAAQhDAAhSgOQgugIgngKgACZgzQguAsAHAgQAEARARAMQAIAHAIADIABAAQAIAGALAAQAPAAAUgMIAQgNQAggkgGhDQgEgtgTg0QgHArhBA9g");
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FBB24C").s().p("AiFAqQgpgHgfgJIAIgeQAnAJAuAIQBSAOBCAAQBEAAAtgrQARgSALgUQAHAEAHACQAHAFAIABQgVArgsAYQg4AehaAAQg7AAhFgNg");
        this.shape_3.setTransform(-4.2,11.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.5,-18,51.2,36.1);
    
    
    (lib.Tween34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AiiCgQhdhQAPhfQAIg3A7hZQATgcAJgRIADgGIAGABQA/ABBDAmQAnAWBMA6QArAhATANQAhAYAcAOIALAFIgTAWQhWBhgrAiQhIA7g/AAQg9AAg9gzgAiciUQg6BXgHAxQgNBUBVBIQA3AvA2AAQA5AABEg5QApghBTheIACgDQgogUhKg6QhIg2gkgWQg/gkg5gEQgIAPgRAbg");
        this.shape.setTransform(12.9,7.4,0.284,0.284,-90);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F2F2").s().p("AiYCYQhohYAkhtQAMgkAfgxIAshGQBTADBqBOQAeAVA5AtQAzAlAkARQh8CNg6AiQgrAZgqAAQg6AAg5gxg");
        this.shape_1.setTransform(12.9,7.5,0.284,0.284,-90);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AmYJuQhAgrgOhTQgNhUAshTQBLiOE9mtQCejXCTjAIAQAMQiTDAieDXQk8GrhKCOQgpBMAMBMQALBMA6AmQA9ApBVgbQBkghBmh+QCxjYC8l2QBfi8A8iVIATAHQg9CWhfC+Qi+F4ixDaQhMBbhMAtQhEAng+AAQg0AAgpgbg");
        this.shape_2.setTransform(-0.5,-0.4,0.284,0.284,-90);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FBB24C").s().p("AmNJrQg+glgQhQQgQhTAshTQBMiPE+mvQCfjYCQi7IDmC0Qg7CRheC9Qi+F5izDbQhlB7hkAkQgnAOgiAAQgsAAglgXg");
        this.shape_3.setTransform(-0.5,-0.4,0.284,0.284,-90);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.9,-14.3,37.8,28.6);
    
    
    (lib.Tween33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgLA6IgcisIBPDlg");
        this.shape.setTransform(18.4,1.6,0.328,0.328);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FBB24C").s().p("Ag+hQQgFgRBBgUQAggKAhgHQhGATAGB+QABBAARA8QhGi7gJgcg");
        this.shape_1.setTransform(9.9,3.8,0.328,0.328);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AhyDEQhjjlgKgtQgIgfAQgVQAMgSATgFQA7gVBEgVQBzglAhAAIABAAQAlABAHArIAAAAIBbE6IiBhQIgwB7IhmhPIguCOgAghirQhHAVhHAZQgIADgGAHQgJAMAEASQAJAmBTDDIAjhrIBoBQIAuh4IBdA7IhFjzQgCgLgDgEQgEgDgHAAQgagBhiAfg");
        this.shape_2.setTransform(14,4.2,0.328,0.328);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FDD65C").s().p("AjMhEQgGgcARgRQAIgJAKgDIB2gnQB7gnAfAAQAQABAIAMQADAGACAOIBQEVIhvhFIguB4IhnhPIgpB9QhijjgLgtg");
        this.shape_3.setTransform(13.8,3.8,0.328,0.328);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#373535").s().p("AodFpQAGgrAPhAQAdh/AthsQBHirBjhgQBkhhB5gPQDxgdDKD1QBkB6A2CDIgTAIQg0iAhih3QjCjujoAcQjpAciNFSQhGCqgYCog");
        this.shape_4.setTransform(-3.6,0,0.328,0.328);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.4,-11.9,42.8,23.9);
    
    
    (lib.Tween32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#373535").s().p("AiiCgQhdhQAPhfQAIg3A7hZQATgcAJgRIADgGIAGABQA/ABBDAmQAnAWBMA6QArAhATANQAhAYAcAOIALAFIgTAWQhWBhgrAiQhIA7g/AAQg9AAg9gzgAiciUQg6BXgHAxQgNBUBVBIQA3AvA2AAQA5AABEg5QApghBTheIACgDQgogUhKg6QhIg2gkgWQg/gkg5gEQgIAPgRAbg");
        this.shape.setTransform(-7.4,12.9,0.284,0.284);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F2F2").s().p("AiYCYQhohYAkhtQAMgkAfgxIAshGQBTADBqBOQAeAVA5AtQAzAlAkARQh8CNg6AiQgrAZgqAAQg6AAg5gxg");
        this.shape_1.setTransform(-7.5,12.9,0.284,0.284);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#373535").s().p("AmYJuQhAgrgOhTQgNhUAshTQBLiOE9mtQCejXCTjAIAQAMQiTDAieDXQk8GrhKCOQgpBMAMBMQALBMA6AmQA9ApBVgbQBkghBmh+QCxjYC8l2QBfi8A8iVIATAHQg9CWhfC+Qi+F4ixDaQhMBbhMAtQhEAng+AAQg0AAgpgbg");
        this.shape_2.setTransform(0.4,-0.5,0.284,0.284);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FBB24C").s().p("AmNJrQg+glgQhQQgQhTAshTQBMiPE+mvQCfjYCQi7IDmC0Qg7CRheC9Qi+F5izDbQhlB7hkAkQgnAOgiAAQgsAAglgXg");
        this.shape_3.setTransform(0.4,-0.5,0.284,0.284);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.3,-18.9,28.6,37.8);
    
    
    (lib.Tween31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AgpAWQgRgcgDgsQBKAnAxAdQgeAagTAFIgMABQgYAAgSgcg");
        this.shape.setTransform(-4.1,8.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AgoCNIgBAAQgIAAgIgDQgLgEgKgLQgPgSgJgeQgKgkAFgrQAFg0AJgvIAHglIAGABIgBACIgGAjQgIAvgGA0QgBAOAAAPQBPApAwAeQAOgNARgRQARgSARgVIAOgSIAGAEIgQATQgSAWgRASIgcAcIgLAKIguAcQgHACgGAAIgBAAgAhSBqQASAcAZAAIAMgBQASgFAdgaQgvgehLgnQADAsARAdg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FBB24C").s().p("AhnAuQAAgOACgPQAFg0AIguIAHgkIC5CTIgOASQgSAVgRASQgQASgOANQgxgfhPgpg");
        this.shape_2.setTransform(0.1,-2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.9,-14.1,22,28.3);
    
    
    (lib.Tween30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AgVDxQgqgIggglQg/hKALipQAEg1AKg5IALgvIgDgBIADgBICIgkIgCADQBHAvAnCOQATBGAGA/IAAAAQAJAmgYAqQgZAqgsAWQgfAQgeAAQgLAAgMgCg");
        this.shape.setTransform(-5.8,2.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AiBElQgkgXgWgnQgRgdgIghIgEgeQgLhgAPhpQAGghAHggIAHgbQAMhOAogsQAnguA4ABQANAAANACQAsAJBGCEQAlBHA0B6IAJAWQATAsAGAjQAMBCgaAuQgpBJiBASQgbAEgWgBQhDAAgvgdgAjSCLIAFAcQAIAiAPAbQA0BYBzAAQAVAAAbgEQB+gSAnhFQAZgsgLhAQgHgjgSgqIgJgWQg0h6gkhGQhEiCgqgIQgNgDgMAAQg1AAgmArQgfAkgNA5IgDABIADABIgLAvQgKA5gEA1QgLCpA/BKQAgAlAqAIQAqAIAqgVQAsgXAZgpQAYgqgJgmIAAgBQgGg/gThGQgniOhGguIACgDIACgDQBHAwAnCLQAVBLAFBBQAKAogZAsQgZAqgvAYQgfARgiAAQgcAAgagMQgagNgVgYQglgrgMhMQgHgrABgyQgEA/AHA8g");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FBB24C").s().p("Ai2DkQgPgbgIgiIgFgcQgHg8AEg/QgBAyAHArQAMBMAlArQAVAYAaANQAaAMAcAAQAiAAAfgRQAvgYAZgqQAZgsgKgoQgFhBgVhLQgniLhHgwIgCADIiJAjQANg5AfgkQAmgrA1AAQAMAAANADQAqAIBECCQAkBGA0B6IAJAWQASAqAHAjQALBAgZAsQgnBFh+ASQgbAEgVAAQhzAAg0hYg");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.1,-32.2,44.3,64.5);
    
    
    (lib.Tween29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape.setTransform(3,3.9,0.75,0.75,-17,0,0,0.1,0.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_1.setTransform(-14.6,1.1,0.75,0.75,-16,0,0,-0.3,0);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_2.setTransform(4,3.3,1.5,1.5,-17);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgOAZQgIgEgBgKQgBgLAGgKQAHgKAJgFQAJgEAIAEQAIAFABALQABAJgGALQgGALgKAEQgDACgEAAQgFAAgFgDg");
        this.shape_3.setTransform(-15.1,0.4,1.5,1.5,-16);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#EE3338").s().p("AgwAkQgHgOgDgQIAUgHIARgHIAFgDQAYgMAQgQQALgKAGgKIACADQAFAGAGAOQAGALgCAPQgBAPgIAOQgIAQgOALQgOAKgPADIgJABQgXAAgOgYgAgFALQgUAFgVANQAGAOAJAIQAMAJASgDQAQgDAOgMQAMgLAHgQQgPgGgRAAQgLAAgKACg");
        this.shape_4.setTransform(3.4,24.8);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FEF0BA").s().p("AhoCgQiWhAg7hEQhJhSA5hdIAKgRIANgRQAZASAbAOIADACQBCAiBRASIADABQAYAFAaADIAtAGIAEAAQBYAHBmgKIADAAQA9gGBCgNQAXAwAIAbQAJAcgEATQgFAdgvAkQgwAkhEAaQhLAdhIAFIgeABQg+AAgzgWgAgMBoQACALAFAJQANAdAbAAIAJgBQASgDAOgLQAPgKAIgRQAIgQACgQQABgQgGgMQgJgTgGgEIAEgKIAJAEIAFACIAFADIAEADIAJAGIgDgGIgDgDIgEgEIgFgEIgGgDIgGgDIgNgDIgLgBIgIABIgDAAIAXAHQgCAMgPAPQgQAPgaAOQgcAPgaAFQgbAEgOgHQgYgNgBgvQgBgNABgQQAXAFAVgHIAHgDIAFgCQAPgHAIgJQAJgHABgFQgGAFgHADQgDAAgYgIQgcgJgYgCQgagCgRABIgMABIgDgDQgDgFACgKIgDAGQgEAIACAHIACAFQAEAHAGAFIAFAFIAGAFQAQALAWAEIAAAAQgCASABAPQABATAEANQgJAHgMAEQgPAFgQgBQgRgBgOgFQgOgGgJgJQgLgNACgJQABgEAGgDIAFgDIgCgGIgHADQgHAFgCAGQgEANAOAPQAKALAPAGQAPAGASABIAEAAQARAAAPgFQALgEAJgHQAHARAOAIQAKAFAPAAQAOAAASgFIACAIg");
        this.shape_5.setTransform(-1.3,15.8);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F89734").s().p("AFhBQIAJgEQAHgDADgFQAFgFABgIQABgHgEgJQgDgIgFgJIgLgPQgGgHgIgEQgIgFgIgBQgJgBgIADQgGABgHAFQgKAEgIAJIAAAAIgGAHIAFgHIAGgGIAMgIQAGgFAIgDQAIgDAJABQAKABAIAFQAIAFAHAHQAFAGAGAKQAFAIADAJQADAJgBAIQgBAJgFAGQgEAEgHADIgKAEIgGABIgCAAgAlxgPIgGgIQgEgHAAgGQgBgIAEgHQAEgHAIgGQAIgFAJgEIASgGQALgDAIABQAKABAIAEQAIAFAFAIQAFAGACAIQADAGABAIIABAIIAAAJIAAgJIAAAAQgCgMgEgKQgEgIgEgFQgFgHgHgEQgHgFgKAAQgIgBgKADIgSAGQgJADgHAFQgIAGgEAGQgEAHABAHQAAAFADAHIAFAJIAGAGIgGgGg");
        this.shape_6.setTransform(3.1,-20.4);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AAdBbIAKgXIAAAAQAGgfAQgeQAgg7A0AAIABAAQAUABAPAPQAbAdAKBMIACAUQg7AGg3AAQgoAAglgEgAjbAYQAWgqASgaQAQgYASgNQATgNASAAQAPAAANAIQAWANgFBOQgDAlgGAiQhRgRhCgjg");
        this.shape_7.setTransform(-4.5,-1.5);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FBB24C").s().p("AiWEqQiahCg8hFQhLhVA7hfQAxhRB2hqQBCg8BAgwIAIABIAOAFQALAFAPAEIAeAGQAKACATACIAfABIAegCIANgCIALABIAjA6QAqBHAiA/QBtDKgJAxQgFAegxAlQgxAlhGAbQhMAdhJAFIgeACQhBAAg1gXgAlqgfIgKARQg5BdBJBTQA7BDCWBBQA+AaBSgGQBHgFBLgcQBEgaAwglQAvgkAFgdQAEgSgJgdQgIgbgXgxQhCANg9AGIgCgPQgJhQgdgfQgQgRgVAAIgBAAQg1AAggA7QgQAegHAhIgLAYIgtgFQgagEgYgFQAIgoABgnQAEhJgWgOQgOgIgQAAQgTAAgTANQgTANgRAZQgRAagXAsQgbgPgZgSIgNARgACAhgIgCgFIgEgGIgFgIIgIgIIgJgIQgGgEgGgDQgHgDgGgBQgIgBgHABQgGABgHAEIgLAHIgIAIIgDADIgCAEIgEAGIgCAGIAEgFIAFgFIAPgMIAJgFIAMgCQAFgBAGABIALADIALAFIAJAHIAYAVgAh8iEIgCgGIgDgGIgEgIIgGgJIgIgKIgFgEIgGgEIgGgDIgHgCQgGgCgIABQgGAAgHACQgMAEgJAHQgGAFgFAHIgEAFIAFgEIANgIIAKgEIAKgDIALgCIAMACIAFABIAFADIAGADIAEADIAFAEIAEADIAGAIIAGAHIAIAKgAFEhwQgQgDgRgEIgOgEQAAgKgCgOQAHgEgIgZIgHgZIAKgNIACgCQAIgIAKgGQAHgFAGgBQAIgDAJABQAIABAIAFQAIAEAGAIIALAPQAFAJADAIQAEAJgBAHQgBAIgFAFQgDAFgHADIgJAEIgIACIACAAIAGgBIAKgEQAHgDAEgEQAFgGABgJQABgIgDgJQgDgJgFgIQgGgKgFgGQgHgIgIgFQgIgFgKgBQgJgBgIADQgIADgGAFIgMAJQAIgIAHgGQAigcAgAgQATATADAlQABAPgEAIIgDAEIAFABQASABAQgKQgGAWgWASQgLAIgXAAQgPAAgTgDgAlrjFQgugXgGgVQgIgbAIgWQAHARAQAKIAEADQgBgCABgEQACgIAJgMQAYgdAbgEQAsgHAMArQACAJABALQgBgIgDgGQgCgIgFgGQgFgIgIgFQgIgEgKgBQgIgBgLADIgSAGQgJAEgIAFQgIAGgEAHQgEAHABAIQAAAGAEAHIAGAIIAGAGIgGgGIgFgJQgDgHAAgFQgBgHAEgHQAEgGAIgGQAHgFAJgDIASgGQAKgDAIABQAKAAAHAFQAHAEAFAHQAEAFAEAIQAEALACALIAAAAIAAADIABAQIgUAQQgVAQADAHQgKAKgGAIQgVgHgXgLgAAokoIgPgBIgdgDIgagFIAiAEIAoAFIgEAAg");
        this.shape_8.setTransform(3,2.4);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FDD65C").s().p("AFNB4IgegFIgcgGIgBgLIgBgNQgCgMgDgMQgFgMgHgKIgDgFIgEgFIgBgBIgHgIIACgGIALgUQAJgOAJgKQAKgNAMgHQANgIAPAAQAOAAAOAHQAMAGALALIAVAWQAKAMAHAMQAIANADAOQADAPgDANQgDAPgIAMQgJAMgMAJQgJAGgTABIgEAAIgZgCgAEUAPIgKAMIAHAZQAHAZgGAEQACAOAAAKIANAEQARAFARACQAyAJARgOQAXgRAGgXQgQALgSgCIgFgBIADgEQADgIAAgPQgDglgTgSQgggfgjAbQgHAGgHAHIgGAHIgFAGIAGgGIAAgBIgCADgAldAqQgOgHgMgHQgPgIgKgIQgOgLgEgKQgEgNAAgQQgBgOAHgOQAGgNAKgKQALgJAOgGQANgGAPgEQAOgEAQgCQAQgCAOACQAPACALAIQAMAJAFAPQAFAMACARQABAOgCAQQgBAQgDANIgCAAIgEAAIgGABIgMAEQgLAEgKAIQgJAGgKAKIgIAJIgIAJIgbgLgAmggMQAGAUAtAXQAXAMAWAHQAFgJAKgJQgDgIAVgQIAUgPIgBgQIAAgCIABAJIAAgJIgBgIQgBgMgCgIQgMgrgtAHQgaAEgYAdQgJALgCAIQgBAEABACIgFgDQgQgJgGgSQgJAWAJAbg");
        this.shape_9.setTransform(3.1,-20.5);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F26C36").s().p("AC2HJQgLgEgLgHQgLgHgJgIIgDgDIgIgHIgBgCIgEAEIgSgLIgCgBIgIAKIgPAQQgbAYgXAAQgMAAgLgHQgcgQgJgTQgDgGAAgFIAAgEIAEgQIgKANIgHAIQgKAJgMAIQgmAZgtAAIgUgBQgggEgKgTQgHgNAFgTIAGgSIADgGIgHACIgdAGQghAGgZAAQg0AAAAgZIAAgBIgCgPQgBgSAEgKIACgGIgGABIgQAEQgUAEgSAAQgyAAgZgbQgZgaADg0QAEhMApg5QANgSAQgOIANgKIARgMIgUAGQggAJgaAAQgbAAgIgLQgGgJAGgQQAPgnAxgaQAQgIARgGIAPgFIALgDIgLgDIgPgFQg7gXgFgjQgEgWARgaQAGgIAHgHIAHgHQAMgRAjgIIADgBQABAQAEAPQAFAMAQAMQALAJAPAIQAMAGAPAHIAdAKIABABIABgCIAPgSQAIgJAKgIQALgIAKgEIAFgDIAMgDIAEAAIACgBQAEgMABgNIABgFIABgLIAIABIAVADIgTgJIgJgFIAAgJQgBgRgFgNQgGgQgMgKQgLgJgSgDQgHgBgIAAQgWgiAAgXQABgRARgHQAIgEAMAAQAnAAA+AsQAfAWAYAWIAXAWIgSgaQgNgUgLgXQgWguAKgTQAHgOAbAAQA2ACAwAzQAZAaAOAaIAIAPIgCgRQgCgSABgWQADgqAQgSQAKgLAQAAQAKAAALADQAhAMAKAZQAHAVgJAdQgEAPgHAKIgOAYIAUgUIANgNIAfgaQAygmAfAAQAIAAAHADQAKAFACAKQADATgcAlIgdAiIAEAFIAggUQAlgTAZAAQASAAAKAKQAOAOgDAKQgCAJgNAHIgMAFIgVAGIAVABQAoABAwAhQAsAeAPAdQAGALgEAFQgIALgpABIgBgDQgDgPgIgOQgIgNgKgMQgLgMgLgKQgMgMgNgGQgPgIgPABQgPAAgPAKQgLAHgLAOQgKAMgHANQgHAOgFAOIAHAIIgCgDIADAEIAHAKQAGAKADAMQAEALABANIABAMIAAAMIAAACIACAAQAPAFAOADIAeAGQAQACAPAAIAQgCQAIgCAHgEQAMgJAKgNIAEgHIAJAKQAoArAOAhQACAGgDAEQgHALgeAFQgWADgWABIgIAAIAGAFQAoApAbBZQAZBVgFA/QgDAigMAIQgKAIgKAAQgOAAgMgRIgJgSIgFgOIgDAaQgCAOgEAMQgMAmgTAJQgFACgDAAQgLAAgDgSIgBgWIgBgKIgEgfIgCAfIgBALQAAANACAJQAAAfgHATQgKAcgVAAQgcAAgggPQACgNgEgQIgIgXIgGADIAIAUQADAOgBALIgCAHIgCAGQgHAQgWAEQgKACgJAAQgRAAgSgHgAi3i0Qh2BqgxBQQg7BgBLBVQA8BFCaBCQBAAbBTgGQBKgFBMgdQBGgbAxglQAxglAFgeQAJgxhtjKQgig/gqhHIgjg6IgMgBIAPgDIAZgHIAKgEIAJgDIAcgNIgmAMIgLADIgYAFIgbADIgdABIgLAAIgogFIgigEIgDgBIgagHIgXgHIgjgNIgNgGIAMAHQAQAJARAIIAJAEIgHgBQhAAwhCA8gAACEqQgIgHgGgOQAUgOAUgEQAdgHAZALQgHAQgMALQgOAMgRADIgJAAQgMAAgJgHg");
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#373535").s().p("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");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.4,-47.1,104.9,94.2);
    
    
    (lib.Tween28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F1F2F2").s().p("AgZAiQgagRgUgZQAigCAkgKQAqgLAfgSQAABCgWAWQgLALgPAAQgXAAgagQg");
        this.shape.setTransform(2.3,9.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#373535").s().p("AAvCYQgOAAgNgEQgQgGgPgLQgWgPgVgZIgCgCQgQgVgPgYQgJgNgEgJIADgCIADgBIALAUQAOAXAPASQAjgBAlgKQAtgLAggTIgCgkQgHhRgZhGIAAgBIAGgCQAZBHAHBTIACAfQACBFgVAeIgFAGQgMANgRAAIgBAAgAAVBLQgjAJgjADQAUAaAbARQAZAQAYAAQAOAAALgLQAWgXABhCQggASgqALg");
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FBB24C").s().p("AhRBJIgMgUIgDABICfioQAZBGAGBRIADAkQggATguALQgkAKgjABQgPgSgOgXg");
        this.shape_2.setTransform(-0.1,-3.4);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.1,-15.2,20.3,30.4);
    
    
    (lib.Tween27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap18();
        this.instance.parent = this;
        this.instance.setTransform(-46.7,-53.8,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46.7,-53.8,93.8,107.2);
    
    
    (lib.Tween26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E022B1").s().p("AghAhQgOgOABgTQgBgSAOgNQAOgOATAAQAUAAAOAOQANANAAASQAAATgNAOQgOANgUAAQgTAAgOgNg");
        this.shape.setTransform(-0.9,-0.2,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#AB2486").s().p("Ag0AzQgVgVAAgeQAAgdAVgVQAWgVAeAAQAfAAAWAVQAVAVAAAdQAAAegVAVQgWAVgfAAQgeAAgWgVg");
        this.shape_1.setTransform(0,0,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.5,-3.4,7.1,6.9);
    
    
    (lib.Tween25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E022B1").s().p("AggAhQgPgOAAgTQAAgSAPgOQANgNATAAQAUAAANANQAOAOABASQgBATgOAOQgNANgUAAQgSAAgOgNg");
        this.shape.setTransform(-0.7,-0.4,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#AB2486").s().p("Ag0AzQgVgVAAgeQAAgdAVgVQAWgVAeAAQAfAAAWAVQAVAVAAAdQAAAegVAVQgWAVgfAAQgeAAgWgVg");
        this.shape_1.setTransform(0,0,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.5,-3.4,7.1,6.9);
    
    
    (lib.Tween24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E022B1").s().p("AghAgQgOgNAAgTQAAgSAOgOQAPgNASAAQAUAAANANQAOAOAAASQAAATgOANQgNAOgUAAQgSAAgPgOg");
        this.shape.setTransform(-0.8,0,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#AB2486").s().p("Ag0AzQgVgVAAgeQAAgdAVgVQAWgVAeAAQAfAAAVAVQAWAVAAAdQAAAegWAVQgWAVgeAAQgeAAgWgVg");
        this.shape_1.setTransform(0,0,0.478,0.478);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#AB2486").s().p("Ag0AzQgVgVAAgeQAAgdAVgVQAWgVAeAAQAfAAAVAVQAWAVAAAdQAAAegWAVQgWAVgeAAQgeAAgWgVg");
        this.shape_2.setTransform(0,0,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.6,-3.4,7.2,6.9);
    
    
    (lib.Tween23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#98622D").s().p("AinNnIgagRQDsq8BHo3QAWiyADiPIgBhsQAJgOAPgQIABgBQA3B6grFAQg/HckQM9g");
        this.shape.setTransform(-2.8,2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BE8144").s().p("AjPN6IAGAEQEQs9A/ncQArlBg3h5IgBABQAfgiAegMQBVF8jCLdQg8DmhRDtQgoB3gdBJIg4AZg");
        this.shape_1.setTransform(1.3,0);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.5,-89.9,45.6,179.9);
    
    
    (lib.Tween21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BF0117").s().p("AlhFVQg9gWgdgwQgdgwAIhAQAIg/AphGQBZiUC4hwQC2hwCsgLQBSgFA8AWQA9AWAdAwQAdAvgIBBQgIA/gpBGQhZCTi3BxQi3BwitALIgdABQg/AAgxgSg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46.6,-35.8,93.3,71.8);
    
    
    (lib.Tween20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap15();
        this.instance.parent = this;
        this.instance.setTransform(-38.6,-42.7,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-38.6,-42.7,77.7,85.8);
    
    
    (lib.Tween19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap9();
        this.instance.parent = this;
        this.instance.setTransform(-72.2,-108.3,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-72.2,-108.3,144.7,217.1);
    
    
    (lib.Tween18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#99622F").s().p("AxIDHQi3g+iMg/IgcgNIAAgKIAQAFQD5BNDhA6QF1BhCpAIQB9geDthDQEthUEOhUQMDjvCfiAIAAAAQABAmgFAXQkeCFl6COQrrEbnGA1IgJABQkHAAmTiKg");
        this.shape.setTransform(0,2.1);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#C7833E").s().p("Au8D7Qjig6j5hNIgQgIIAAhRQAEgBByAnICmA6IBjAhQD4BSCgAmQBrAaBEAGQgBgBDYgxQEehCDwhDQM7jkFlj8QAFApgBAmQieCAsEDvQkNBVkuBTQjsBDh+AfQipgJl0hhg");
        this.shape_1.setTransform(0,-3.9);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#9A765D").s().p("AgzBEQjlhHjThcQgEgXgDgZQCMA+C3A/QGSCJEGAAIAJgBIABABQgkAlheAAQiPAAkVhYgAiPh6IhjghIDqBGIEQBTQihgmj2hSg");
        this.shape_2.setTransform(-92.1,24);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-144.8,-39.9,289.7,80.4);
    
    
    (lib.Tween17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#925D29").s().p("AjukSQgziKgZh3QgHglgEgfIgDgYIA1A+IABABIAGAuQAbCkBpDZQA9CBBYCSIAgA1IAJAPQBKB2BOBvIA0BJIBHBeIgWANIgHAFQl1nKilm4g");
        this.shape.setTransform(2.1,1.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A5713C").s().p("AEMJoQlSmUinnLQg1iQgdiEQgJgpgGgjIgEgaIBcgSQgDAtAFA0Ig1g+IADAXQAEAfAHAlQAZB3AzCLQClG3F1HKIAIgEIgRAKgADtHFIAXAhIAdAoIg0hJg");
        this.shape_1.setTransform(-1,0);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-34.9,-64.4,69.9,128.8);
    
    
    (lib.Tween16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap16();
        this.instance.parent = this;
        this.instance.setTransform(-41.5,-30.9,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-41.5,-30.9,83.1,61.7);
    
    
    (lib.Tween15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC853F").s().p("AD3OiIAAAAIAHADIAGACIgOgUIgig4QhCiOhLi4Qh7lXiEohQgpirgliqIgWhmIgHgiIgFgFIgLgIQgIg2gFg4QAHAMAnAAIAmgBIAjDaQAwEMA6D8QC6MlDmFQQgVACgWAKIgSAJg");
        this.shape.setTransform(1.2,0.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A5713C").s().p("AEoN7IgGgDIAAABQgegMgXgGIgTgFQhskHh2lWQjuqrg1mKQgKhPAdADQAHABAJAEIAKAIIAGAFIAHAiIAWBmQAlCqApCrQCEIhB7FXQBLC4BCCOIAiA4IAOAUIgHgCg");
        this.shape_1.setTransform(-3.1,4.7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-33.4,-96.3,67,193);
    
    
    (lib.Tween14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap12();
        this.instance.parent = this;
        this.instance.setTransform(-39,-41.4,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-39,-41.4,77.7,83.1);
    
    
    (lib.Tween12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4A4647").s().p("AodFAQgUgFABglIAGgkQAAgtAFgpQAIhOAahCQBRjLDvhSQDzhUCvBIQA9AZA4AvQAMAKA/A8QBHBFA0BSQA4BahTg2Qh8hbiPgYQiegZjUAzQizAqh/CpQgaAjguBLQgbAsgJAAIgBAAg");
        this.shape.setTransform(0,0,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.8,-15.2,53.6,30.6);
    
    
    (lib.Tween11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap2();
        this.instance.parent = this;
        this.instance.setTransform(-21.3,-18.9,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.3,-18.9,42.9,37.5);
    
    
    (lib.Tween10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // flash0.ai
        this.instance = new lib.Bitmap14();
        this.instance.parent = this;
        this.instance.setTransform(-191.6,-194.5,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-191.6,-194.5,351.1,327);
    
    
    (lib.Tween9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAAAuQgqgBgdgPQgdgOABgSQABgTAdgNQAegMAoABQAqABAdAPQAdAOgBASQAAATgeANQgbALgkAAIgHAAg");
        this.shape.setTransform(12.9,-13.1,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#990066").s().p("AgbCNIgBgEIgEgbIAAgDIgBgGQgGguACg2IAAgDQAChiAZhQQAGgVAKgSQARgHAOgCQACAFAAAJQggA7AAASQAAAVgCAfQgCAeAAAbQAAAQgHA0QAAASATB4QAAAXAXAcQg0gXgNhBg");
        this.shape_1.setTransform(-18.6,12.6);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#C423A2").s().p("AgZDfQgXgcAAgYQgTh3AAgSQAHg1AAgQQAAgaADgfQACgeAAgWQAAgRAfg8QAAgIgBgGQAIgBAHAAQAYABAIAXQAGARgNA6IgaBzQghCbA5AlQAsAbAJAQQAIAPgTAJIgGAAQgsAAgegOg");
        this.shape_2.setTransform(-12.3,13.2);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#990066").s().p("AjGBDIADgJQAMgmAXgYQAhgXAlgRIANgFIAAgBIALgCIAdgBIAEgCIA6gIQAvgGAiABQBAADAdAYQgKAFgSAAIgTgDQgOgDgHAAIhfAEQgNAAh9AnQgIADgmAhQgkAggFAAQgFAAgEgCg");
        this.shape_3.setTransform(-0.2,-11.3);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#E022B1").s().p("AioDwQgkgagJgzQgNg/AChQQADhbAVhMQAEABAFAAQAFAAAkggQAmghAIgDQB9goANAAIBfgEQAHAAAOADIATADQASAAAKgEQASAPAEAXQALA/hEAeQgjAQhDAHQgdAEgBAWQAAAIAFAGQAFAGAHgBIBFgIQAggBAPAPQAMANgFAVQgEASgQAPQgQAPgUABQg5ACgRAeQgGAKACAKQABAJAGAAIBEgJQA7gHASAGQAmAPgBAlQgCAmgsAjQgVAQgsAKIhlAVQgvALgmAAQg8AAgkgagAhpkBQAOgFAMgDIgNAFQgkARghAXQAWgYAigNg");
        this.shape_4.setTransform(0,10.3);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#B52B8C").s().p("AAwBCQjFgWgEgHQgFgHgrghIgrggIAFgHQAIgKAPgIQAvgZBlgBIBogBQA9ACAdAHQAxANAoBNQAUAnAKAlIjFgWg");
        this.shape_5.setTransform(10.8,18.9,0.478,0.478);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#B52B8C").s().p("AhRAxQgDgFgjgbIgigZQABgDADgDQAGgIAMgGQAmgUBRgBQBRgBAzAZQAZAMAJANQjIAygeAAQgEAAgBgBg");
        this.shape_6.setTransform(8.5,4.8,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-22.5,-18.1,45,55.1);
    
    
    (lib.Tween8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgIA3QgLgCgEgRQgFgSAEgVQAEgXAKgPQAKgPAJACQALACAEARQAFARgEAWQgDAXgLAPQgJANgIAAIgCAAg");
        this.shape.setTransform(10.7,2.4,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FDFE9D").s().p("AA+BVQg3gCg3hUIgthUQBeAtA+A+QA9BAg5AAIgFgBg");
        this.shape_1.setTransform(5.9,-5.9,0.478,0.478);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#AB5815").s().p("AgoBkIhSgpIDOjYIAFB8QAJCGAZA5QhFgPhegrg");
        this.shape_2.setTransform(-4.5,-4.7,0.478,0.478);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E78227").s().p("AiaBuIAVkGIEgDGIj8Brg");
        this.shape_3.setTransform(5.9,-4.9,0.478,0.478);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D46CD1").s().p("AgBCiQiMgSgwiNQgPgrgEgzIgBgqIBegTQBxgSBiAJIByAmIg2AbQg+AhglAiQh3BsClBMQgfAKgkAAQgSAAgTgDg");
        this.shape_4.setTransform(1,4.7,0.478,0.478);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFA1D1").s().p("AgQCiQiMgSgwiNQgPgrgEgzIgBgqIApgKQA0gLA2gFQCqgSB6AsQANAmgEA0QgFA4gYAvQg2Bph2AAQgTAAgUgDg");
        this.shape_5.setTransform(1.8,4.7,0.478,0.478);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFDB1").s().p("AgSATQgIgIAAgLQAAgKAIgJQAHgIALAAQALAAAJAIQAHAJABAKQgBALgHAIQgJAJgLgBQgLABgHgJg");
        this.shape_6.setTransform(5.4,13.5,0.478,0.478);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E87919").s().p("AgaAkQgTgPAAgVQAAgTAQgPQAQgPAXgCQAkAWAAAkQAAAYgSAUIgKABQgZAAgTgQg");
        this.shape_7.setTransform(4.3,12.7,0.478,0.478);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#A3591B").s().p("Ag/A0QgagVAAgfQAAgeAagVQAagWAlAAQAlAAAbAWQAaAVABAeQgBAfgaAVQgbAVglAAQglAAgagVg");
        this.shape_8.setTransform(2.2,13,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.3,-12.2,23.7,28.8);
    
    
    (lib.Tween7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#ED801D").s().p("AA7AuQgcgBhngQQg8gJAYghIAkggQAlgDBIAbQBMAbADAXQACASgrAAIgQgBg");
        this.shape.setTransform(-6.2,-14.1,0.478,0.478);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#AB5815").s().p("AhRAuQhvgZA1goQARgNAfgOIAbgKQAagKBaAQQBhASAHAbQAKAkg6ATQgfALgrAAQgxAAhCgPg");
        this.shape_1.setTransform(-7.4,-13.4,0.478,0.478);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgIA3QgLgCgEgRQgFgRAEgWQAEgXAKgPQAKgPAJACQALACAEARQAFARgEAWQgEAXgKAPQgJANgIAAIgCAAg");
        this.shape_2.setTransform(10.7,2.5,0.478,0.478);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FDFE9D").s().p("AA+BVQg3gCg3hUIgthUQBeAtA+A+QA9BAg5AAIgFgBg");
        this.shape_3.setTransform(5.9,-5.9,0.478,0.478);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#AB5815").s().p("AgpBjIhRgoIDNjYIAGB7QAJCHAZA5QhFgPhfgsg");
        this.shape_4.setTransform(-4.5,-4.6,0.478,0.478);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E78227").s().p("AiaBvIAVkHIEgDHIj8Bqg");
        this.shape_5.setTransform(5.9,-4.9,0.478,0.478);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#D46CD1").s().p("AAACiQiNgSgwiNQgPgrgEgzIgBgqQAlgLA5gIQBygSBhAJIByAnIg2AaQg+AhglAiQh2BsCkBMQgfAKgkAAQgSAAgSgDg");
        this.shape_6.setTransform(1,4.7,0.478,0.478);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFA1D1").s().p("AgQCiQiMgSgwiNQgPgrgEgzIgBgqQA9gSBWgIQCrgSB6AsQANAmgFA0QgEA4gYAvQg3Bph2AAQgTAAgUgDg");
        this.shape_7.setTransform(1.7,4.7,0.478,0.478);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFDB1").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
        this.shape_8.setTransform(5.4,13.5,0.478,0.478);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#E87919").s().p("AgaAlQgTgPAAgWQAAgTAQgPQAQgPAXgCQARAKAJAPQAKAQAAARQAAAYgSAUIgKABQgaAAgSgPg");
        this.shape_9.setTransform(4.3,12.7,0.478,0.478);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#A3591B").s().p("Ag/A0QgagWgBgeQABgdAagWQAbgVAkgBQAmABAaAVQAaAWAAAdQAAAegaAWQgaAVgmABQgkgBgbgVg");
        this.shape_10.setTransform(2.2,13,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9,-16.3,28.3,32.9);
    
    
    (lib.Tween6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 16
        this.instance = new lib.Bitmap13();
        this.instance.parent = this;
        this.instance.setTransform(-27.9,-52.1,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.9,-52.1,91.1,91.1);
    
    
    (lib.Tween5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap4();
        this.instance.parent = this;
        this.instance.setTransform(-57.4,-30.8,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-57.4,-30.8,115.3,61.7);
    
    
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Bitmap3();
        this.instance.parent = this;
        this.instance.setTransform(-52.4,-25.2,2.68,2.68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.4,-25.2,104.5,50.9);
    
    
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFD7D7").s().p("AhHBAQgegaAAgmQAAglAegaQAdgbAqAAQAqAAAeAbQAeAaAAAlQAAAmgeAaQgeAbgqAAQgqAAgdgbg");
        this.shape.setTransform(3.6,-12.6);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FD1F30").s().p("AlAEJQiFhuAAibQAAiaCFhuQCFhtC7AAQC8AACFBtQCFBuAACaQAACbiFBuQiFBti8AAQi7AAiFhtg");
        this.shape_1.setTransform(-1.3,-2.5,0.478,0.478);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CD2A27").s().p("Al1E4QibiCAAi2QAAi2CbiBQCbiBDaAAQDcAACaCBQCbCBAAC2QAAC2ibCCQiaCBjcAAQjaAAibiBg");
        this.shape_2.setTransform(-1.3,-1.1,0.478,0.478);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#A02727").s().p("AmIFIQijiIAAjAQAAi/CjiIQCjiHDlAAQDmAACjCHQCjCIAAC/QAADAijCIQiiCHjnAAQjlAAijiHg");
        this.shape_3.setTransform(0,0,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.7,-22.5,53.6,45.6);
    
    
    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF4343").s().p("AjuErQgCgiBBiNQAmhOAZguQABADAfADIBSAHIApAEQgVADACAJQgcA9hiC/IgxALQgrAIgdAAIgPgBgAgTgbQg4gFgegKQAGgiBjh4QA5hBAkgmQAAADAeALIBOAcIAmAPQgVgDAAAJQgsAziQCgQgWAAgbgCg");
        this.shape.setTransform(-137.2,-29.7);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF4343").s().p("AjxALIAri5IG4C5IAACjg");
        this.shape_1.setTransform(-139,21.7,0.478,0.478);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF4343").s().p("AmbFBIFWssIHhEPIkwLIg");
        this.shape_2.setTransform(-127.7,-5,0.478,0.478);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF4343").s().p("AieEcQjeg/g9gWQANhHDQj5IC+jcQgCAHBEAaQBnAlA9AXQD0BcgCA5QhdBqkrFPg");
        this.shape_3.setTransform(-106.9,-38.2,0.478,0.478);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFF898").s().p("AE9DTQgRgHgEhQQgFhdgHglQgJgugWgWQgUgUgugOIh1ghQh8gih3BVQg8AqgjAwQhcAbgGgXQgFgUA/gwQBBgxBYgnQBmgtBUgKQCggSBKBBQAbAXAXAqQANAXAYAwQASAfgEA+QgDA3gQAuQgOAqgNAAIgDgBg");
        this.shape_4.setTransform(168,-20.6,0.478,0.478);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FF917A").s().p("AAaA9QhOgZkyhwQC0ARCZgPQB+gLBAgbQAzAgA1A/QBCBOAYAVQgQAOgYAKQgRAHgdAAQhQAAing0g");
        this.shape_5.setTransform(125.6,-49.8,0.478,0.478);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFF898").s().p("AtvEBQDPi9Djh6QEtijE9gkQDbgYDLCiQA/AzBbBdQBlBpAeAaQgRAPgYAKQhOAhlah7Ij8hdQh+gugjgFQhUgOkKBZQkHBbiYBfQhIAtgnAAIgFAAg");
        this.shape_6.setTransform(100.7,-53.5,0.478,0.478);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FAF296").s().p("AiGh7QFZg8GLCVQBeA/ADA2QABAUgNALQgMAKgQgEQgHgCgzgaQg2gbg6gUQjDg/k5AAQjLAAi+BjQisA0h6AIQEIjTEwg1g");
        this.shape_7.setTransform(4.9,-33.6,0.478,0.478);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FF917D").s().p("As+DrQEjlkFih7QGmiUH2C9QBeBAADA2QABAUgNALQgMAKgQgEQgHgCgzgaQg2gbg6gUQjDhAk6AAQkwAAkgDpQg0AriGB+QhYBSgjAKQgMADgJAAQgqAAARhLg");
        this.shape_8.setTransform(-1.4,-25.6,0.478,0.478);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#F98F78").s().p("AhCglQA0gOAdgCQBCgGAPALQAQANggAtQhkAFhRApQACglAhg4g");
        this.shape_9.setTransform(-70.7,57.1,0.478,0.478);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F98F78").s().p("AgWBfIgLgeQgMhYAIhMQAsgDAiATQgYBUgEBAQgNAjgMAAQgFAAgFgFg");
        this.shape_10.setTransform(-89.8,80.4,0.478,0.478);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFF2A1").s().p("Aj8E8IgLgeQgslCDUinQBIg4BeghQBBgWAygEQBCgGAOALQARANggAuQkQANh9EJQg+CEgICCQgOAjgMAAQgFAAgFgFg");
        this.shape_11.setTransform(-78.8,69.8,0.478,0.478);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FF4343").s().p("EgohAa0Qg6gcgegyIgTgtIjOgqQgLgggJgzQgQhnAShiQA6k4F8iRQByl0BGixQC5nSDwk8QFEmpGVh+QHviaJYEqQAqhOBbhjQBphwCJhmQBShVBvg+QBig2CRgyQDhhgD0gqQEig6ExESQCYCIBfCVIBJCOQBMCeARBPQBXhHB7gcQBwgaBxARQBvAQBIA0QBLA3AGBOQAHCzhCCRQhFCVh/A9QiTiTgyhyQhKiqCig9QBSAVATAtQAQAngRBmQBmiGgHhUQgHhVh0ALQjGAShOBZQh6CMDjEfQiHAQjlj3QjPjgjOleQh8jSjWhWIjMgzQiDgPiKAYQh7AVhpAuQiqBMkDEtQiBCXhgCHQg+gahmgeQjLg9i/gYQpjhKkHFJQkFFHjmKwQg/C7hmFbQhbE4goBwQAZhZgHhgQgMi+ibggQhYgRhHAlQhAAigdBDQgdBCATBBQAVBHBIApQgahAADg7QAGh2CSAbQBRAPACBeQABBQg3BzQgxBqhBBJQg3A/ghAAQgHAAgGgDg");
        this.shape_12.setTransform(46.4,13.4,0.478,0.478);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFD93").s().p("AAIA4QhlgVieguQg/gTANgwIJdCUQgnAJg2AAQhUAAh3gXg");
        this.shape_13.setTransform(78.2,-74.6,0.478,0.478);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FCF89A").s().p("AAbA6QjAgTg5gZQgvgUBTggQAqgQAygNQCrAcBfAnQBTAkgTAWQgHAKgzAAQg1AAhigKg");
        this.shape_14.setTransform(35.1,-82.4,0.478,0.478);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FCF89A").s().p("AjwAuIASgVQBGgsAkgQQBEgeAwAMQDOAoAgAcQAMALgYADQgXADgpgHQhHgNhcAMIiqAdQgdAFgRAAQgaAAADgMg");
        this.shape_15.setTransform(7.2,-88.7,0.478,0.478);
    
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FCF89A").s().p("AjFAuIAPgVQA6gsAdgQQA3geAoAMQCpAnAaAdQAKALgTADQgTADgigHQg7gNhLAMQgtAHheAWQgYAFgOAAQgVAAACgMg");
        this.shape_16.setTransform(-23.5,-70.9,0.478,0.478);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FCF89A").s().p("AjFAuIAPgWQA7gsAcgPQA4geAnALQCpAoAaAcQAKALgTAEQgTADgigIQg7gMhLAMIiLAdQgYAFgOAAQgVAAACgMg");
        this.shape_17.setTransform(16.2,-73.8,0.478,0.478);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FCF89A").s().p("Aj+A8QABgIAKgLIAJgJQBLg5AlgUQBHgnAzAPQDaAzAhAlQANAOgYAEQgZAEgsgJQhMgQhhAPIizAlQgfAGgSAAQgbAAADgOg");
        this.shape_18.setTransform(56.1,-70.3,0.478,0.478);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FCF89A").s().p("AAsAUQgzAAgkgQQgjgNAFgFQACgEAcgBQATgBAsAPIApANQAiAMgwAAIgDAAg");
        this.shape_19.setTransform(-102.1,-67.7,0.478,0.478);
    
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FCF89A").s().p("ACNA+QiigChwgwQhrgsANgQQAIgKBWgEQA6gCCMAtICBAtQAyARgUALQgRAJg2AAIgMgBg");
        this.shape_20.setTransform(-81.9,-60.5,0.478,0.478);
    
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FCF89A").s().p("AhEAWQhzgghZgmQgUgSAWgDQAPgCA5AGQBBAGCzAtQDLAxAiAdQgiAGgpAAQhvAAilgwg");
        this.shape_21.setTransform(-51.6,-52.6,0.478,0.478);
    
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FCF89A").s().p("ACOBCQh4gQilguQiFgjgFgYQgCgHALgGIAMgEQAOgIDYA4QCUAmCkAuQgIAOgtAAQghAAg2gIg");
        this.shape_22.setTransform(-13.8,-44.8,0.478,0.478);
    
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FF4343").s().p("AmsghQgXgdBNgbIBTgVQAYgFEpBJQD/A9CVApIjFAeQiEAVgIAAQnnhjgmgtg");
        this.shape_23.setTransform(-10.8,-45.7,0.478,0.478);
    
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#FF4343").s().p("AhOA4QhzgZhkgiQhagegOgPQgUgXB3gZQGhBnEZBEQhEAWhhAAQiEAAi1gpg");
        this.shape_24.setTransform(77.8,-73.8,0.478,0.478);
    
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FF4343").s().p("AmDBuQijgpgCggQAAgKAQgIIAQgGQBohOChhTICNhDIDBA6QDwBKDqBPQhoAUi/BmQhfA0hLAuQjVgqkGhAg");
        this.shape_25.setTransform(58.8,-64.8,0.478,0.478);
    
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FF4343").s().p("AlnCFQgRgXB1iDIB3iAIH2DNIhWBNQhzAKiJAEQhMADhAAAQijAAhQgRg");
        this.shape_26.setTransform(38.8,-52.4,0.478,0.478);
    
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FF4343").s().p("Ag5BTQjug4ikgPQAYg7EJhZIJ3CcQh1AihtAtIhWAmQhXgZh3gdg");
        this.shape_27.setTransform(38.2,-80.2,0.478,0.478);
    
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#FF4343").s().p("AnIBhQAEgtCyihICwiZIDlA+QD2BHBQAwQhAAEicCqQhOBVhCBVQk6hgjrhGg");
        this.shape_28.setTransform(18.4,-67.1,0.478,0.478);
    
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FF4343").s().p("AlYANIBsiaIJFCaIgxCBg");
        this.shape_29.setTransform(5.1,-52.8,0.478,0.478);
    
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#FF4343").s().p("AieC8QiAgZh0gUQA0hhBDhkQCGjIBMgPIHcDBIh7CEQh7CTAEBDQg/gekAg0g");
        this.shape_30.setTransform(-20.9,-65.1,0.478,0.478);
    
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FF4343").s().p("AhkC2QiTgnkZg6QARhQCmhYQB2hAC2g9II+COQiYAbjRB/QhoA/hKA6QgRgHhJgUg");
        this.shape_31.setTransform(4.2,-83.7,0.478,0.478);
    
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFD93").s().p("AhAAQQiRgYgbgcQgIgJAEgJIAGgGQB2gKC/BCQBfAgBIAjQhMgHjmgog");
        this.shape_32.setTransform(-13.2,-95.5,0.478,0.478);
    
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FF4343").s().p("AlpADQgYghC6hNIBHAFIHtB6Qg5AkhlAdQgyAPgnAIg");
        this.shape_33.setTransform(-16.2,-94.9,0.478,0.478);
    
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#FF4343").s().p("AnECpQgRhTDqi6QBJg6Bag+IBJgyIDNBTQDUBWAkAVQhVAAizCvQhaBYhIBYQifgglBhGg");
        this.shape_34.setTransform(-38,-81.8,0.478,0.478);
    
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FF4343").s().p("AkiAAIBmiLIHfCmIhABxg");
        this.shape_35.setTransform(-52.9,-65,0.478,0.478);
    
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#FF4343").s().p("AkICBQh9gchKghQDoiSE7gxQDDgfC4ALIhOARQhgAYhWAeQkTBghRCDg");
        this.shape_36.setTransform(-46.6,-92.9,0.478,0.478);
    
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#FF4343").s().p("AiZCaQhCgugwhJQBsiVCdhrIEOBwIg4BVQhLBwhdCGQhtgGhYg+g");
        this.shape_37.setTransform(-69.9,-78.1,0.478,0.478);
    
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#FF4343").s().p("AmfDlQgaiDAgiWQA/krEjhWQBwAeDFA6ICuAzIhAAvQhMA+g9BNQjDD2AaEwg");
        this.shape_38.setTransform(-100.1,65.4,0.478,0.478);
    
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FF4343").s().p("AjxALIAri5IG4C5IAACjg");
        this.shape_39.setTransform(-111,32.2,0.478,0.478);
    
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#FF4343").s().p("AkDA2IFRixIC2A4IlrC/g");
        this.shape_40.setTransform(-108.1,-64.2,0.478,0.478);
    
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FF4343").s().p("Aj+BwQjkhwBHhCQBIhDB2gtIBngfQEiBPEBBOQh0AOiuB9QhYA/g/A8QiAgqhyg4g");
        this.shape_41.setTransform(-84.5,-57.4,0.478,0.478);
    
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#FF4343").s().p("AnuAEQBiiUCggbQAygKAyAFIApAHQC/AxGPBdQhdAJjGBjQhjAyhQAwQjHhBlAhug");
        this.shape_42.setTransform(-53.9,-49.7,0.478,0.478);
    
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FF4343").s().p("AjgCJIhOhaQAIhsA2hpQBujSDwASQBLAaBDAkQAgASATAMIgxApQg6A2guBDQiWDTASD9QiJhvhphwg");
        this.shape_43.setTransform(-172.1,34.9,0.478,0.478);
    
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#FF4343").s().p("AmDDUQAjmCC6imQA5g0BCgXIA2gNIAOANQAUARAiAUQBtBADIBHQkCBMhEExQghCZARCKg");
        this.shape_44.setTransform(-151,44.4,0.478,0.478);
    
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#FF4343").s().p("AjhEkQheguhLggQgGh5AviPQBekgEDh1QCIBQCPBAIB1AwIg/AuQhJA8g6BLQi6DwAtEqQhhhHi9hdg");
        this.shape_45.setTransform(-126.2,54.5,0.478,0.478);
    
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#FF4343").s().p("AieEcQjeg/g9gWQANhHDQj5IC+jcQgCAHBEAaQBnAlA9AXQD0BcgCA5QhdBqkrFPg");
        this.shape_46.setTransform(-79.7,-31,0.478,0.478);
    
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#FF4343").s().p("AmbFBIFWssIHhEPIkwLIg");
        this.shape_47.setTransform(-100.8,3.8,0.478,0.478);
    
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#FF4343").s().p("AlTDdIDOpkIHZC5IjtJWg");
        this.shape_48.setTransform(-81.1,30,0.478,0.478);
    
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FF4343").s().p("AmnETQAvh/BJiSQCUkkCKhiIG5DIImWJAg");
        this.shape_49.setTransform(-64.8,-5.3,0.478,0.478);
    
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#FF4343").s().p("AnyCTQBrhwB7hsQD3jaBOASQBtAWBtAfQDbA+AFAxQhZAxjSCsQhpBWhYBNg");
        this.shape_50.setTransform(-40.1,-32.9,0.478,0.478);
    
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#CC001E").s().p("EgaBAgVQiQgFuZmPQtvl8kQidQhUoADbi0QBEg4BbgQIBNgFQAnotDYmgQCtlMEVjiQDGihDnhcQBIgdBDgTIA0gMQANACAxAPQBhAeC3BDQDan3JYiRQC8gtDLgDQBmgCBAAHUAjRAIyAHkAByQGNDBDeDBQEDDhA3D8QBXhIB7gcQBwgaBxARQBvARBIAzQBLA4AGBNQAIDAhMCVQhOCaiNA1QicA5jChVQjchfjwkMQlsmXkNiUQj4iHjLBDQiqA4i5DeQhSBkkIGDQtmngpDJqQjYDnihFzQh7EZhMFEQhwHXjMDbQiaCmizAAIgOAAg");
        this.shape_51.setTransform(0,1.2,0.478,0.478);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-186.7,-100.3,373.6,201);
    
    
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFA1E0").s().p("AC3DtQgVgOAShRIAHgaQAJgeAPgVIACgDQALgOAOgJQANgJAOgDIADAAIAIgBQAOAQAFAVQAFAcgLAjQgRA4glAhQgbAZgQAAQgFAAgEgDgAjyheQghgCgOgXQgNgXAOgeQANgdAfgTIADgCQAcgQAbgBIABAAIAKAAQAhADANAWQAOAYgOAeQgOAeghATQgdASgeAAIgHgBg");
        this.shape.setTransform(6.4,-16.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FC6BD6").s().p("ACJEMQgGgMAFgPQAFgQANgNQAXgYAXggIAYghQAPgXAMgVIgHAaQgRBRAUAOQAQALAlghQAlghAQg4QALgkgFgbQAHAVgGAbQgKAtgdAyIgKASQgsBFgyATIgKADQgWAGgPAAQgaAAgHgQgAEYATIAHgTIAIgGIAMgFQAPgGAKAIIgDAAQgOADgNAIQgOAJgLAOIADgGgAlqhZIACgFIATgmQAJgOALgNQAJgKAKgJIAEgEIAHgGQALgIAKgGIAMgGIAIgHIAogcQAOgIAQgGQgfATgNAdQgOAeAOAXQANAXAhACQAhADAhgUQAigTAOgeQANgegNgYQgOgWghgDIgKAAQAfgHAfAAQAYAWAQAUIALAKQAMANAHAQQAXAygoA6QgXAhgrAfQgxAigyANQgZAGgWAAQhfAAgxhwg");
        this.shape_1.setTransform(-0.1,-12.7);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#EF54C0").s().p("AizFWQgFgXALgTQAQgZArgRQAYgLAfgGIAZgFIAJgEQA5gbBLg/QAwgoAhgnQgYAggWAXQgNAOgFAPQgFAQAGALQAMAbA6gQIAKgEQg8A1hJA3QhOA6hGAWQgeAKgWAAQgqAAgJglgAFcgTQAGgbgHgUQgEgWgOgQIgJABQgKgHgPAFIgMAGQAQgZAPgNQAagXASAMQBVBEiGCcQAdgyAKgtgAkGBFQh5gRgGh8QgDhBAUgzIgCAGQA9CLCCghQAygMAxgjQArgfAXgiQAog5gWgyQgHgQgNgNIgLgKQgQgUgYgXQgfAAgfAHIgBAAIAFgBQBSgRAxAbQBTAYApAxQAmAugEA5QgEA4gpA0QgrA2hGAhQh+A+hiAAQgUAAgUgDgAEMhKIgDAHIgCADIAFgKgAi9lgIgDABQgQAHgOAIQAQgJARgHg");
        this.shape_2.setTransform(1.1,-3.4);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#96219F").s().p("AmKDeQAEgdAJgfQBRBHBmAGQCUAHCliJQB7hqA2hMQBMhsgOhlIAIAEQAJAHAGAMQAEAIACAHIABADIALADIgKApQgPA0gaA0QhTCminBoIgWANIgJAEIgZAFQgfAGgXALQgrASgQAYQg8AUg5AEIgfABQhsAAg/g9g");
        this.shape_3.setTransform(-8.7,0.8);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D500DB").s().p("Am4FHQgNgvAIg9QAGgtANghQgIgQgIgcQgQg3AAg6QACi8CsiVQBFg2BXgUQBQgSBTAMQBQAMBFAmQBFAnAqA6QALABAJAJIgIgEQAOBlhMBsQg2BMh7BqQilCJiUgHQhmgGhRhHQgJAfgEAdQBIBFCCgJQA6gFA8gTQgMATAFAXQAOA4BZgdQBFgWBPg6QBKg2A7g2QAygSAshFIALgSQCFichVhEQgSgMgaAXQgPAOgQAYIgIAGIgHATIgFAKQgOAUgKAeQgMAVgPAXIgYAhQghAngwAoQhLA/g6AbIAWgNQCnhoBTimQAag0APg0IAKgpIgLgDIAAgDIARAGQAZAJAUARQBBA1gGBmQgDA7g+BPQg8BNhhBKQhlBMhwA0Qh5A5huAPQghAFgdAAQiLAAgfhwgAhOmbIgEABQgcABgcARQgRAHgQAJIgoAcIgIAGIgMAGQgKAGgKAJIgIAGIgEADQgKAJgJALQgLAMgIAOIgUAmQgUA0ADBAQAGB8B5ARQBvAQCZhKQBGgiArg2QApg0AEg4QAEg5gmguQgpgxhTgYQgegQgqAAQgbAAggAGg");
        this.shape_4.setTransform(-4,0.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49.8,-43.4,91.8,88.5);
    
    
    (lib.thapTit = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 7 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAABGQgbgBgTgVQgTgUABgdQABgeAUgUQATgTAcABQAbABASATQASAVgCAaQAAAIgEADQgEAEgMgBIhFgCQABAMAHAFQAIAHAMAAQAKABAPgGQAOgGADAAQAHAAAEAFQAFAFgBAGQAAAMgTAKQgPAJgWAAIgFAAgAgOggQgHAGgDALIAzACQAAgKgHgHQgHgHgKAAIgCAAQgHAAgIAFg");
        this.shape.setTransform(99.8,-27.8,0.964,0.964,7.2);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgmA9QgFgIAAgOIAChOQABgPAFgHQAEgGALAAQAGAAAEADQAFADADAHQAFgGAHgEQAHgDAHAAQAIAAAGAGQAGAHAAAHQgBAMgWAHIgLAFQgIADgCAEQgCAFAAALIgBAoQAAAOgFAHQgGAHgKAAQgKgBgEgGg");
        this.shape_1.setTransform(89.5,-29.8,0.964,0.964,7.2,0,0,0,-0.4);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AAABFQgdAAgPgPQgPgPAAgcIABgzQAAgOAFgIQAFgHAKAAQAJAAAGAHQAEAIAAAOIAAArQAAAQAEAHQAFAGAKAAQALAAAEgGQAFgGAAgQIABgsQAAgOAFgHQAFgHAKAAQAKAAAEAHQAFAHAAAPIgBAzQAAAcgPAPQgQAPgbAAIgBgBg");
        this.shape_2.setTransform(77.3,-31.4,0.964,0.964,7.2,0,0,0.1,-0.3);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgQBSQgEgGAAgPIgBhFIgBAAQgLAAgGgEQgFgFAAgIQgBgHAGgFQAHgFALAAIAAgSQAAgOAFgHQAEgGALgCQAJAAAEAIQAFAGAAAPIAAARIAEAAQAMABAGAEQAHAGAAAHQAAAJgHAEQgGAEgMAAIgDAAIAABFQAAAPgFAGQgFAIgJAAQgJAAgGgIg");
        this.shape_3.setTransform(67,-34.6,0.964,0.964,7.2,0,0,0.3,-0.1);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A+QgEgGgBgPIgBhOQAAgQAEgGQAFgHAKAAQAGAAAFADQAEACAEAHQAGgHAIgDQAIgEALAAQAXAAANANQANANAAAZIABA4QABAOgGAHQgEAIgKAAQgKAAgFgHQgFgGgBgQIAAgrQAAgQgGgIQgEgGgLAAQgKAAgGAHQgFAJABAOIAAAsQAAAOgEAIQgFAHgKAAQgKAAgFgHg");
        this.shape_4.setTransform(55.1,-33.9,0.964,0.964,7.2,0,0,-0.2,0);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgrAzQgUgSgBgfQgBgcATgWQASgUAcgBQAagBATASQAUATAAAbQAAAIgDAEQgEADgMABIhFACQACALAIAGQAIAGALgBQALAAAOgHQAOgHACAAQAIAAAEAEQAEAEABAHQAAANgRAKQgRALgZABIgDAAQgaAAgTgTgAgQgeQgHAGgBALIAzgCQgCgKgHgGQgHgGgLAAQgIAAgIAHg");
        this.shape_5.setTransform(41.5,-35.4,0.964,0.964,7.2);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgHBCQgFgFgFgLIgphaIAAgFQgBgJAGgFQAFgGAIAAQAIgBAEAFQAFADAEALIAXBCIAShGQADgIAEgFQAFgEAGAAQAIgBAGAFQAGAGgBAIIAAAGIgfBdQgEAMgFAEQgFAEgJABQgHAAgFgEg");
        this.shape_6.setTransform(29.7,-36.6,0.964,0.964,7.2,0,0,0.6,-0.2);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgtBQQgTgUgBgdQgCgdARgUQAQgVAZgCQAKAAAGACQAIADAHAFIgCgkQgBgPAFgHQAEgHAKgBQAKAAAFAHQAGAHAAAOIAHCGQABAPgEAGQgFAIgJAAQgHAAgEgCQgFgEgEgFQgGAHgHADQgIAEgJABIgDAAQgXAAgSgSgAgTAFQgGAJAAAPQABAPAIAJQAIAJAKgBQALgBAHgJQAHgKgBgPQgBgOgIgJQgHgIgLAAQgMABgGAJg");
        this.shape_7.setTransform(16.4,-39.8,0.964,0.964,7.2,0,0,-0.1,0.4);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AhHBZQgFgFgBgJIAAgGIABgGIAlh/QAFgOAHgHQAHgGALgBQAJgBAIAGQAIAFAFALIA2B7IADANQAAAJgFAFQgGAGgIAAQgHABgGgFQgGgEgDgKIgGgQIhBAFIgFASQgCAKgEAEQgGAFgGAAIgBAAQgHAAgGgEgAgZASIAqgDIgYhAg");
        this.shape_8.setTransform(1.5,-40.4,0.964,0.964,7.2,0,0,-0.9,0);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BgQgFgHgBgQIgGiPQAAgQAFgIQAEgHALgBQALAAAFAHQAGAIAAAPIACAqQAGgIAJgDQAIgEAMAAQAYgBAOAOQAOAMABAcIADA8QAAAQgFAHQgFAIgKABQgLAAgGgHQgFgIgBgPIgCgwQAAgRgGgHQgFgHgMAAQgLABgFAIQgFAHAAAQIACAxQABAPgFAIQgFAIgLAAIgCAAQgJAAgFgHg");
        this.shape_9.setTransform(21.9,-59,0.964,0.964,7.2,0,0,-0.4,-0.1);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgjBFQgQgIgBgNQAAgIAEgGQAFgGAGAAQAHgBANAFQANAFAGAAQAEAAAEgDQADgDAAgDQAAgGgUgHIgDgBQgXgIgKgIQgJgJgBgOQgCgTAOgPQAPgOAWgBQAUgCAPAIQAPAIAAAMQABAHgFAFQgEAGgIAAQgEABgMgFQgNgEgEABQgEAAgDACQgCACAAAEQABAGAPAFIANAEQAUAHAIAIQAJAJABANQABAVgPAPQgPAPgYABIgHAAQgSAAgMgGg");
        this.shape_10.setTransform(8.5,-57.1,0.964,0.964,7.2,0,0,-0.3,0);
    
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgEBgQgGgGgCgQIgHhUQgCgPAFgIQAEgIALgBQAJgBAGAHQAHAHAAAQIAIBTQACAQgFAHQgEAJgLAAIgDABQgIAAgEgHgAgUg7QgHgFgCgLQAAgKAGgIQAHgIAJgBQAJAAAIAGQAIAHABAJQAAAKgGAIQgGAIgJABIgDAAQgJAAgGgGg");
        this.shape_11.setTransform(-0.2,-60.5,0.964,0.964,7.2,0,0,0.3,-0.1);
    
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgFBgQgFgGgCgQIgPiPQgCgQAEgHQAFgIAKgCQAKAAAFAGQAHAIABAPIAQCOQABARgEAHQgEAIgLABIgDABQgIAAgFgHg");
        this.shape_12.setTransform(-7.5,-60.6,0.964,0.964,7.2);
    
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgjBmQgTgGgBgOQgBgIAEgGQAFgGAHAAQAEgBAPAEQAPADAMgBQAQgDAGgKQAIgKgCgRIgBgFQgHAMgIAFQgJAGgLACQgZADgUgSQgUgTgFgeQgDgfAPgYQAQgXAcgEQAKgCAIADQAIADAIAGQADgHAEgEQAFgEAFgBQAKgBAGAHQAGAGADAQIALBTQADAZgBALQgBAOgEAJQgGAQgQALQgPAKgWADIgRABQgQAAgLgEgAgGg8QgLABgHALQgGALACAPQABAPAKAIQAIAJALgCQANgCAGgJQAGgLgCgQQgBgPgKgIQgHgIgJAAIgEABg");
        this.shape_13.setTransform(-19.2,-55,0.964,0.964,7.2,0,0,0,0.2);
    
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FFFFFF").s().p("AgvBJQgGgHgDgPIgOhTQgCgRAEgHQADgHALgDQAHAAAFACQAGADAEAFQAGgIAIgFQAJgFAKgCQAZgEAPAMQAQAMAEAbIAKA7QADAPgFAIQgEAJgKABQgLACgGgHQgHgHgCgPIgIguQgDgRgGgHQgGgGgLACQgMACgEAIQgEAJADAQIAIAvQACAPgEAIQgEAJgKABIgFABQgHAAgFgFg");
        this.shape_14.setTransform(-34.1,-57.5,0.964,0.964,7.2,0,0,0,-0.2);
    
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AgfBhQgHgFgDgPIgZiBQgEgSAGgHQAFgIAQgDIAvgJQAOgDAKADQAIAEACAKQACAKgHAGQgGAGgPADIgiAHIAHAiIAcgGQAQgDAIADQAIADADAKQABAKgGAGQgHAGgPADIgdAGIAHAjIAjgHQAQgDAIADQAIADACAKQACALgGAGQgHAGgPADIgxAKIgMABQgHAAgFgCg");
        this.shape_15.setTransform(-48,-59.1,0.964,0.964,7.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 6 copy
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#DB00C0").s().p("ApMBzQgMgKgBgRQgBgGABgEIABgJIAmiAQAGgTALgLQALgKAPgCIAFgBQARgBAOAJQAOAKAGAQIAZA5QAFgPAJgMQAUgZAdgEIAIgBIALAAIgBgEQAAgWAHgMQAJgPASgDIAEAAQAVgBAMAPQAJANABAUIAAAJIAIgCIAFgBQAPgBAMAKQAIAIAGAPIACAEIABgGQADgNAJgJQAJgJAMgBIAEgBQARAAAMALIAFAFQARgQAZgEIAMgBQAkgBAZAYIAEAFQADgIADgEQAJgNAPgDIAGgBQAMAAAKAGIAFgCIAOgEIANgBQAegBASASIAFgFIAJgFIAAAAQAAgWAJgMQAJgNAQgCIAHgBQAUAAAMAQQAHAMABAUIAJAEQAIgHALgCIAIAAQAVAAAKAQQAHALABAMQACgOAGgJQAJgNAQgCIAHgBQAVAAALARIACACIABgCQAJgMAQgDIAIgBQAMABAIAGIACgBIAOgFIAJAAQARAAALAMIAGAHQAQgNAWgEIARgBQAjACAZAaQAXAagBAiQgBAPgIAJQAEAIAAAKQgBAZgcAPQgQAIgPACQgHABgPAAQgmgBgYgbQgZgbACgnIABgIIgGACIgBAAIgBAuQAAAVgJAMQgJAMgQADIgHAAQgVAAgLgQQgDgFgDgJIgIALQgPAPgaAEIgSABQgmgBgVgUQgKgKgFgNQgBAQgHAJQgIANgRADIgHABQgUAAgMgQIgEgJIgEAIQgJAOgRADIgGAAQgVAAgLgQQgJgMAAgVIgBgyIgBAFIABAtQAAAVgIANQgJANgQADIgHAAQgTABgMgQIgCgEIgNAJQgQAKgUADIgPACQgmABgagaQgKgJgHgOIgGASQgFAQgJAIQgJAIgMABIgGABQgPABgMgJQgJgHgIgRIgKgXIAAAGQACAUgIAOQgJAOgSADIgEAAQgMABgKgFIgDACQgKAEgJABIgHABQgbABgYgSIgGAJQgKALgOACIgEAAQgPABgNgJQgJgIgGgPIgBgCIgjACIgBAEQgEAOgIAJQgKAKgMACIgDAAIgDAAQgQAAgKgKgAlnAKQgCADAAAJQABAIACACIADABIAAAAIACgBQACgEAAgHQAAgGgDgFIgDgBIgCABg");
        this.shape_16.setTransform(50.2,-35,0.964,0.964,7.2,0,0,-0.6,0.1);
    
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#DB00C0").s().p("AhnCoQghgLgCgbIgBgJQgHAGgLABQgWAEgPgPQgKgLgDgOQABAQgGALQgJATgWAEIgIABQgOAAgMgJIgEAEQgMAMgVADIgyAKIgRACQgNAAgKgGQgQgKgFgZIgZiBQgGgbALgPQAKgPAagGIAwgJQAWgEAPAGQAUAHAEAXIABALQAJgJAPgDQAOgCAKAEIAEgDQAMgGARgDQAjgGAXASQAHAGAHAKIAHgMQAWghAlgEQAQgDANAEIAEACQAJgHAKgCQAUgCAMALIgCgTQgCgVAHgQQAKgSAXgDQAXgCANAQIADADIAFgHQANgQATgBQATgCAQANQAPAMABAUQACARgKAPIACAEIAHgIQAUgUAfgCQAbgCAVALIAFADIgBgUQAAgXAIgOQALgSAXgBIACAAQAWAAAMARQAKANABAXIAAAGQAGgCAHAAQAjgBAVAVQAUAUABAkIADA7QABAYgJANQgMASgWABIgCAAQgWAAgMgQQgHgKgDgQQAAAPgIALQgLASgXABIgCAAQgVAAgMgQIgCgCIgDADQgUAVgiACIgJABQgXAAgSgJIgIgFQgLAQgVADIgFAAQgTAAgMgPIgCgCIgBACQgKATgXADIgFAAQgPAAgLgJQgBAPgGAOQgKAWgTAPQgUAMgbAEIgWACQgTAAgPgGgAksBFIgBgFIgDAEIAEABgAhAAHIgBABQgCADABAHQABAIADADIABABIACAAIABgCQACgEgBgHQAAgGgEgEIgBgBIgBAAgAk3gIIgGAFIAGADIABgIg");
        this.shape_17.setTransform(-12.5,-57.7,0.964,0.964,7.2,0,0,0.4,0.9);
    
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#A8075C").s().p("ApMBzQgMgLgCgRIAAgJIACgKIAmh/QAGgTAKgLQAMgKAPgDIAEAAQASgCAOAKQAMAIAIASIAZA4QAFgOAJgMQAUgZAdgEIAIgBIAKAAIAAgFQgBgUAIgOQAIgOASgDIAFAAQAVgCAMAQQAJANABAUIAAAJIAIgDIAFAAQAPgBALAKQAJAIAGAPIABAEIACgGQAEgPAIgIQAJgHALgDIAFAAQARAAAMAKIAEAGQAUgRAXgDIALgBQAkgCAaAZIAEAFQACgGAEgGQAJgOAPgCIAGgBQAMAAAKAGIAEgDIAPgEIANgBQAfAAARARIAFgEIAJgFIAAgBQAAgVAJgMQAIgNARgDIAGAAQAWAAAKAQQAJAMAAAUIAJAEQAIgIALgBIAHgBQAVAAALAQQAGAKACANQACgOAGgIQAJgOAQgCIAHAAQAVABALAPIABADIACgDQAJgMAQgCIAHgBQAMAAAJAGIACgBIAOgEIAJgBQARABALAMIAGAGQARgNAUgDQAKgBAIAAQAjABAYAaQAYAbgCAiQAAAOgIAKQAEAJAAAJQAAAYgeAQQgLAGgTAEQgLABgLAAQgmgCgZgbQgYgbABgmIABgIIgFACIgBAAIAAAFIgBApQAAAVgJAMQgJAMgQADIgIAAQgUgBgLgQQgEgHgCgGIgJALQgQAPgYAEIgSABQglAAgWgVQgJgJgGgPQgBAQgHAKQgJAOgQACIgHAAQgVAAgLgQIgEgIIgEAIQgKAOgQACIgGABQgVAAgLgQQgJgMAAgVIgCgyIABAyQABAVgJAMQgJAOgRACIgGABQgUABgLgRIgCgEQgFAFgIAFQgRAKgTADIgPABQglACgbgaQgJgIgIgPIgGARQgFAQgKAJQgIAHgMACIgGABQgQABgLgJQgKgIgHgQIgKgXIAAAGQABAVgHAMQgJAPgSADIgEAAQgLABgLgGIgDACQgKAEgJACIgHABQgcABgXgSIgGAJQgJAKgPACIgEABQgPABgNgKQgJgIgGgPIgBgBIgjACIgBAEQgDANgJAKQgJAJgNADIgDAAIgEAAQgOAAgLgKgAlnAKQgDAEABAHQAAAHADAEIACABIABAAIACgBQACgFAAgGQgBgIgDgEIgCgBg");
        this.shape_18.setTransform(49.4,-32.3,0.964,0.964,7.2,0,0,-0.6,0.1);
    
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#A8075C").s().p("AhnCoQgfgLgEgbIAAgJQgJAFgKACQgXAEgOgQQgIgHgFgRQABAQgGAMQgIATgXADIgIABQgPAAgLgKIgDAFQgMALgWAEIgyAKQgIACgIAAQgOAAgKgGQgQgKgFgZIgZiBQgFgbAKgPQAMgQAZgFIAvgJQAWgFAPAHQAUAIAFAWIAAALQAJgKAQgCQALgCAMAEIAFgDQALgHARgCQAjgGAXASQAJAHAFAIIAHgLQAWghAlgEQAQgDANAFIAEABQAJgHALgCQATgCAMALIgCgSQgCgYAIgNQAKgUAWgCQAXgCAOAQIACADIAFgIQANgPATgBQAVgCAOANQAOALADAUQABATgKAOIADAEIAGgIQAUgTAfgDQAbgCAVALIAGADIgBgUQgBgXAIgOQAMgRAXgCIACAAQAWABALAQQAKANABAXIAAAFIANgBQAjAAAVATQAUAWACAjIACA7QABAWgJAPQgLASgXABIgCAAQgWAAgMgQQgIgMgBgOQgCAQgGAKQgMASgWABIgDAAQgVAAgMgQIgBgCIgEADQgUAUgiAEIgJAAQgXAAgSgJIgIgGQgKARgWACIgEAAQgUAAgMgOIgCgCIgBADQgKASgXACIgFABQgOAAgMgJQgBARgGAMQgIAVgVAQQgTAMgcAEIgVACQgVAAgOgGgAksBFIgBgFIAAABIgDADIAEABgAhAAGIAAABQgCAEAAAHQACAJADACIABABIABAAIABgCQACgEAAgHQgCgIgCgCIgCgBIgBAAgAk3gIIgGAGIAHACIAAgJg");
        this.shape_19.setTransform(-13.3,-55,0.964,0.964,7.2,0,0,0.4,0.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-238.8,-131.3,448.5,150.8);
    
    
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
        this.instance = new lib.Tween29("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(170.7,146.5,0.373,0.373,0,0,0,1.4,35.4);
    
        this.instance_1 = new lib.Tween28("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(178.8,162.2,0.373,0.373,0,0,0,-2.6,-5.9);
    
        this.instance_2 = new lib.Tween34("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(177.5,149.1,0.373,0.373,0,0,0,-13,-9.7);
    
        this.instance_3 = new lib.Tween30("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(174,154.7,0.373,0.373);
    
        this.instance_4 = new lib.Tween31("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(170.6,163,0.373,0.373,0,0,0,2.3,-4);
    
        this.instance_5 = new lib.Tween32("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(168,148.6,0.373,0.373,-6.2,0,0,8.7,-14.3);
    
        this.instance_6 = new lib.Tween33("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(176.8,120.7,0.373,0.373,0,0,0,-21.4,13.4);
    
        this.instance_7 = new lib.Tween35("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(178.2,158.6,0.373,0.373,0,0,0,-21.9,10.8);
    
        this.instance_8 = new lib.Tween20("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(38.4,93.1,0.373,0.373);
    
        this.instance_9 = new lib.Tween1("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(21.3,29.9,0.373,0.373);
    
        this.instance_10 = new lib.Tween21("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(21,33.5,0.373,0.373);
    
        this.instance_11 = new lib.Tween2("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(69.5,37.4,0.373,0.373);
    
        this.instance_12 = new lib.Tween3("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(99.2,69,0.373,0.373);
    
        this.instance_13 = new lib.Tween5("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(103.8,79.7,0.373,0.373,0,0,0,52.5,-10.1);
    
        this.instance_14 = new lib.Tween4("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(104.9,77.1,0.373,0.373,0,0,0,-26.6,15.8);
    
        this.instance_15 = new lib.Tween11("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(50.7,71.9,0.373,0.373);
    
        this.instance_16 = new lib.Tween12("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(74.4,59,0.373,0.373);
    
        this.instance_17 = new lib.Tween6("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(67.1,60.7,0.373,0.373);
    
        this.instance_18 = new lib.Tween7("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(74.5,93.5,0.373,0.373,0,0,0,2.4,-13.6);
    
        this.instance_19 = new lib.Tween8("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(102.6,83.7,0.373,0.373,0,0,0,1.5,-12.2);
    
        this.instance_20 = new lib.Tween24("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(142.7,58.4,0.373,0.373);
    
        this.instance_21 = new lib.Tween25("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(142.5,61,0.373,0.373);
    
        this.instance_22 = new lib.Tween26("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(142.5,63.4,0.373,0.373);
    
        this.instance_23 = new lib.Tween9("synched",0);
        this.instance_23.parent = this;
        this.instance_23.setTransform(143.6,56.4,0.373,0.373,0,0,0,0,-37);
    
        this.instance_24 = new lib.Tween14("synched",0);
        this.instance_24.parent = this;
        this.instance_24.setTransform(108.3,46.2,0.373,0.373);
    
        this.instance_25 = new lib.Tween15("synched",0);
        this.instance_25.parent = this;
        this.instance_25.setTransform(71.4,123.9,0.373,0.373,0,0,0,31.2,97.6);
    
        this.instance_26 = new lib.Tween16("synched",0);
        this.instance_26.parent = this;
        this.instance_26.setTransform(52.2,115.2,0.373,0.373);
    
        this.instance_27 = new lib.Tween23("synched",0);
        this.instance_27.parent = this;
        this.instance_27.setTransform(116.5,103,0.373,0.388,0,0,0,-15.2,87.2);
    
        this.instance_28 = new lib.Tween17("synched",0);
        this.instance_28.parent = this;
        this.instance_28.setTransform(42.7,111.4,0.373,0.373,0,0,0,38.5,64.8);
    
        this.instance_29 = new lib.Tween18("synched",0);
        this.instance_29.parent = this;
        this.instance_29.setTransform(73.3,72.7,0.373,0.373);
    
        this.instance_30 = new lib.Tween19("synched",0);
        this.instance_30.parent = this;
        this.instance_30.setTransform(43,81.8,0.373,0.373);
    
        this.instance_31 = new lib.Tween27("synched",0);
        this.instance_31.parent = this;
        this.instance_31.setTransform(83.7,98.3,0.373,0.373);
    
        this.instance_32 = new lib.Tween10("synched",0);
        this.instance_32.parent = this;
        this.instance_32.setTransform(86.4,82.6,0.373,0.373);
    
        this.instance_33 = new lib.shadow("synched",0);
        this.instance_33.parent = this;
        this.instance_33.setTransform(174.9,169.1,0.365,0.688,0,0,0,39.8,4.5);
        this.instance_33.alpha = 0.301;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-0.1,0.1,196.1,172.1), null);
    
    
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.Tween39("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(7.1,7.2);
        this.instance.filters = [new cjs.ColorFilter(0, 1, 1, 1, 253, -127, 0, 0)];
        this.instance.cache(-9,-9,18,18);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},5).to({startPosition:0},4).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,14.3,14.3);
    
    
    (lib.shape1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 18
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF3366").s().p("AA2F6QhZhhAAieQAAifBahhQBahhCTAAQCNAABZBXIALgGQAagOAKgRQAMgSAAgZQgIAEgJABIgQACQgfAAgTgTQgSgTAAgfQAAghAWgWQAXgWAiAAQAoABAaAfQAaAgAAAyQAABAgsA0QgWAZgYANQA9BYAACBQAACehbBhQhbBiiUgBQiTABhbhigACugdQgtA4AABgQAABfAtA4QAsA4BKAAQBKAAAsg4QAtg4AAhfQAAhggsg4Qgsg5hLAAQhKAAgsA5gAjMG7QgTgWgFgtIgwmPQg4DwgaBiQgcBkgOAXQgKAPgOAGQgPAGgZABQgnAAgUgSQgUgSgLgqIhjmbIg0GFQgHA1gUAWQgTAYghABQgigBgVgVQgUgWAAglIABgUQABgMADgOIBSnIQAKg4AZgYQAXgXAtAAQArAAAaAWQAbAWALAuIBmGOIBfmPQAKgtAagWQAbgWApAAQAwAAAYAZQAaAZAKA8IBKHLIACATIACARQAAAlgWAWQgVAVgjABQgfAAgUgXgALWG2QgSgbAAg3IAAnUQAAg3ASgbQATgaAnAAQAnAAATAaQASAbAAA3IAAHUQAAA3gSAbQgTAagnAAQgnAAgTgagADkkQQgPgOAAgXQAAgKAFgKQAEgLAIgKIBEheQAFgIAGgFQAGgGAIgFQAGgDAHgBQAIgCAIgBQAJABAIACQAOADALALIABABQAQAPAAAYQAAANgGAMQgGANgMAPIhIBOQgNAPgNAIQgMAGgMABQgXAAgOgPg");
        this.shape.setTransform(2.8,16.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF6699").s().p("AA2F6QhZhhAAifQAAieBahhQBahhCTAAQCNAABZBXIALgGQAagOAKgRQAMgSAAgYQgIADgJABIgQACQgfAAgTgTQgSgTAAgfQAAghAWgWQAXgWAiAAQAoABAaAfQAaAgAAAyQAABAgsA0QgWAZgYANQA9BYAACAQAACfhbBhQhbBiiUgBQiTABhbhigACugdQgtA3AABhQAABfAtA4QAsA4BKAAQBKAAAsg4QAtg4AAhfQAAhhgsg3Qgsg5hLAAQhKAAgsA5gAjMG7QgTgWgFgtIgwmPQg4DwgaBiQgcBkgOAXQgKAPgOAGQgPAGgZAAQgnAAgUgRQgUgSgLgpIhjmcIg0GFQgHA0gUAXQgTAYghAAQgiAAgVgVQgUgWAAglIABgUQABgMADgOIBSnIQAKg4AZgYQAXgXAtAAQArgBAaAXQAbAWALAuIBmGOIBfmPQAKgtAagWQAbgXApABQAwgBAYAaQAaAZAKA8IBKHLIACATIACARQAAAlgWAWQgVAVgjAAQgfABgUgXgALWG2QgSgbAAg3IAAnUQAAg3ASgbQATgbAnABQAngBATAbQASAbAAA3IAAHUQAAA3gSAbQgTAagnAAQgnAAgTgagADkkQQgPgNAAgYQAAgKAFgKQAEgLAIgKIBEheQAFgIAGgFQAGgGAIgFQAGgDAHgBQAIgCAIAAQAJAAAIACQAOADALALIABABQAQAQAAAXQAAANgGAMQgGANgMAPIhIBOQgNAPgNAIQgMAGgMABQgXAAgOgPg");
        this.shape_1.setTransform(4.7,18.8);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#990000").s().p("AAABdQgiAAgVgbQgVgZABgpQgBgoAVgaIABAAQAVgaAhAAQAiAAAVAaIABAAQAVAaAAAoQAAAogVAaQgWAbghAAIgBAAgAgmg1IAAABQgQAUAAAgQAAAhAQAUQAPATAXAAQAYAAAPgTQAQgVAAggQAAgggQgUIAAgBQgPgSgYAAQgXAAgPASg");
        this.shape_2.setTransform(-53.5,-50.7);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF3366").s().p("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");
        this.shape_3.setTransform(9.1,-52.3);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC0099").s().p("AN3E2IgEgDQgLgMgBgSQABgRALgMQANgMARAAQASAAAMAMQAMAMAAARQAAASgMAMIgDADQgMAJgPAAQgPAAgLgJgA1kCNQg+hFAAhrQAAhwA/hCQBAhDBrAAQBHAAAxAeQAyAdAAAmQAAATgOAPQgNAPgSAAQgMAAgpgWQgogXgkAAQg2AAgfAmQgfAmAABCQAABCAfAoQAgAnA0AAQArAAAZgZQAZgZABgrIglAAQgmAAgSgLQgSgMAAgZQAAgZASgMQASgMAmAAIBNAAQAoAAARAQQARARAAAlQAABig7A+Qg8A9hgAAQhiAAg+hEgAlkCaQgyg0AAhQQAAhPAygzQAwg0BMAAQBMAAAwA0QAxAzAABPQAABRgxAzQgwA0hMAAQhMAAgwg0gAkZgoQgSAYAAAlQAAAnASAYQATAYAeAAQAeAAATgYQATgYAAgnQgBglgSgYQgUgYgdAAQgeAAgTAYgAMaCZQgzg0ABhOQgBhNAyg1QAxg0BKAAQBHAAAwAxQAvAxABBGQAAAXgLAKQgKAJgeAAIi3AAQADAdAUAQQAVAQAhAAQAdAAAjgQQAkgRAIAAQASAAALALQAMALAAARQAAAhguAbQguAag+AAQhMAAgzgzgANng8QgSARgGAcICHAAQgBgagTgSQgUgRgaAAQgZAAgUAQgArwCXQgtgzAAhOQAAhLAvg1QAtg0BDAAQAbAAATAJQAVAJAPATQAJgRANgIQAMgIAPAAQAaAAAMASQAMASAAAmIAADNQAAAmgMASQgMATgaAAQgRAAgMgJQgLgIgJgTQgPATgXAKQgVAKgaAAQhDAAgsg0gAqhglQgSAXAAAjQAAAmASAXQATAXAeAAQAcAAASgXQATgYAAglQAAgjgTgXQgSgXgcAAQgeAAgTAXgADdCVQgwg2ABhMQAAhLAug0QAug0BBAAQAZAAATAHQATAHASAPIAAheQAAgmANgSQAMgTAbAAQAZAAAMATQANASAAAmIAAFeQAAAmgNATQgMASgZAAQgPAAgNgJQgNgIgJgQQgPARgVAJQgWAJgZAAQhAAAgug1gAEqgpQgTAYAAAlQAAAmATAYQATAYAeAAQAdAAASgXQAUgYgBgnQAAgmgSgXQgTgZgdAAQgeAAgTAZgAVJC1QgNgSAAgmIAAh0QAAgqgMgSQgNgSgeAAQgcAAgOATQgNATAAAnIAAB1QAAAmgMASQgNATgaAAQgaAAgMgTQgNgSAAgmIAAjNQAAgmANgSQAMgSAaAAQAPAAAMAIQAMAIAKARQAQgTAWgIQAWgIAeAAQA9AAAgAjQAgAiAABCIAACSQAAAmgNASQgMATgaAAQgaAAgNgTgAJZC1QgMgSAAgmIAAjNQAAgmAMgSQAMgSAbAAQAaAAAMASQAMASABAmIAADNQgBAmgMATQgMASgaAAQgaAAgNgTgAurC1QgNgSAAgmIAAjNQAAgmANgSQAMgSAaAAQAaAAAMASQANASAAAmIAADNQAAAmgNATQgMASgaAAQgZAAgNgTgAJWjHQgSgRABgYQAAgZARgRQASgSAYAAQAYAAARASQARARAAAZQAAAYgRARQgQASgZAAQgaAAgQgSgAuvjHQgRgRAAgYQAAgZARgRQASgSAYAAQAYAAASASQARARAAAZQgBAYgQARQgRASgZAAQgZAAgRgSgAPai7IgQgHIg5giIg5AiQgHAFgIACQgIADgGAAQgOAAgIgJQgJgJAAgPQAAgLAEgIQAFgIALgIIBHg3QAGgGAHgCQAHgDAGAAQAHAAAGADQAIACAGAGIBHA3QAKAIAFAJQAEAIABAKQAAAPgJAJQgJAJgOAAQgGAAgHgDg");
        this.shape_4.setTransform(9.7,-52.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
        // Layer 17
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(14.3,128.5,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_1 = new lib.Symbol1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-55.8,93.6,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_2 = new lib.Symbol1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(3,-78.3,1.229,1.229,0,0,0,7.1,7.1);
    
        this.instance_3 = new lib.Symbol1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(82.3,-123.3,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_4 = new lib.Symbol1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(160.8,-88.7,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_5 = new lib.Symbol1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(159,-17.9,1.229,1.229,0,0,0,7.1,7.1);
    
        this.instance_6 = new lib.Symbol1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(136.9,42.1,1.229,1.229,0,0,0,7.1,7.1);
    
        this.instance_7 = new lib.Symbol1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(82.3,89.9,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_8 = new lib.Symbol1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-113.3,48.4,1.229,1.229,0,0,0,7.1,7.2);
    
        this.instance_9 = new lib.Symbol1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-153,-8.8,1.229,1.229,0,0,0,7.1,7.1);
    
        this.instance_10 = new lib.Symbol1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-162.6,-73.5,1.229,1.229,0,0,0,7.1,7.1);
    
        this.instance_11 = new lib.Symbol1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-98.6,-129.4,1.229,1.229,0,0,0,7.1,7.2);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        // Layer 16
        this.instance_12 = new lib.Symbol2("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(1,1.1,1,1,0,0,0,180.2,141.1);
        this.instance_12.filters = [new cjs.ColorFilter(0.94140625, 0.87890625, 1, 1, -5, 34, 120, 0)];
        this.instance_12.cache(-2,-2,365,286);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-179.2,-140,360.5,282.2);
    
    
    (lib.mEco_resize = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            if (this.inited === undefined) {
                this.over = new Boolean(false);
                this.inited = 1;
            }
            
            if (this.over == false) {
                this.stop();
                this.parent.icon_ea_check_pausable();
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(105));
    
        // Layer 11
        this.instance = new lib.Symbol4();
        this.instance.parent = this;
        this.instance.setTransform(256,225.1,1,1,0,0,0,98,86.1);
        this.instance.cache(-2,-2,200,176);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(104));
    
        // Layer 43
        this.instance_1 = new lib.Tween37("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(328,279.5,0.373,0.373);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,y:276.7},9).to({scaleX:1.1,scaleY:1.1},17).to({scaleX:0.98,scaleY:0.98},5).to({startPosition:0},6).to({scaleX:0.88,scaleY:0.88,y:278},6).to({scaleX:0.77,scaleY:0.77,y:277.4},4).to({scaleX:0.88,scaleY:0.88,y:278},5).to({scaleX:0.46,scaleY:0.46,y:279.8},7).to({_off:true},1).wait(20));
    
        // Layer 19
        this.instance_2 = new lib.Tween41("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(328.5,267.8,0.373,0.373);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:328.3,y:266.7},9).to({scaleX:0.44,scaleY:0.44,y:265.9},21).to({_off:true},9).wait(41));
    
        // Layer 46
        this.instance_3 = new lib.Tween42("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(328.5,266.8,0.373,0.373);
        this.instance_3._off = true;
    
        this.instance_4 = new lib.Tween40("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(328.2,268.7,0.373,0.373);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},64).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(20));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({y:268.6},19).to({_off:true,x:328.2,y:268.7},1).wait(21));
    
        // lion
        this.instance_5 = new lib.Tween38("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(327.8,268,0.373,0.373);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({scaleX:0.39,scaleY:0.39,rotation:-3.7,y:267},3).to({scaleX:0.41,scaleY:0.41,rotation:0,y:265.5},6).to({rotation:4.5},13).to({rotation:0},4).to({startPosition:0},5).to({startPosition:0},6).to({scaleX:0.4,scaleY:0.4,y:266.7},6).to({scaleX:0.39,scaleY:0.39},4).to({scaleX:0.38,scaleY:0.38,y:266.6},5).to({scaleX:0.37,scaleY:0.37,y:268},7).to({_off:true},1).wait(20));
    
        // lion
        this.instance_6 = new lib.Tween29("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(328.7,285.5,0.373,0.373,0,0,0,1.4,35.4);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({skewY:180,y:284.8},1).to({startPosition:0},7).to({skewY:0},1).to({regX:1.3,regY:35.3,rotation:-9.7,x:329.9,y:287.9},10).to({_off:true},5).wait(60).to({_off:false,regX:1.2,regY:35.4,rotation:0,x:328.8,y:284.8},0).wait(20));
    
        // Layer 29
        this.instance_7 = new lib.Tween28("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(336.8,301.2,0.373,0.373,0,0,0,-2.6,-5.9);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({startPosition:0},15).to({regY:-6,scaleY:0.32,y:302.4},4).to({regY:-5.9,scaleY:0.37,y:301.2},5).to({scaleY:0.43,y:299.2},31).to({scaleY:0.37,x:337,y:300.5},29).wait(20));
    
        // Layer 42
        this.instance_8 = new lib.Tween34("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(335.5,288.1,0.373,0.373,0,0,0,-13,-9.7);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({y:289.5},19).to({_off:true},5).wait(60).to({_off:false,regX:-12.8,x:335.7,y:287.2},0).wait(20));
    
        // tay
        this.instance_9 = new lib.Tween36("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(335.8,288.8,0.373,0.373,75,0,0,-12.5,18.4);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({regY:18.5,rotation:11.8,x:336.6,y:290},9).to({regY:18.4,rotation:32.5,x:336.5},13).to({regY:18.6,rotation:2.5,x:336.6},7).to({startPosition:0},8).to({startPosition:0},10).to({regY:18.4,rotation:62.5,y:288.5},12).to({_off:true},1).wait(20));
    
        // Layer 34
        this.instance_10 = new lib.Tween30("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(332,293.7,0.373,0.373);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({startPosition:0},15).to({scaleY:0.34,y:294.8},4).to({scaleY:0.37,y:293.7},5).to({scaleY:0.4,x:332.2,y:290.8},13).to({startPosition:0},18).to({scaleY:0.37,x:332.3,y:293},29).wait(20));
    
        // chan1
        this.instance_11 = new lib.Tween31("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(328.6,302,0.373,0.373,0,0,0,2.3,-4);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({startPosition:0},15).to({scaleY:0.33,y:302.8},4).to({scaleY:0.37,y:302},5).to({regY:-4.1,scaleY:0.44,y:300.8},31).to({regX:2.1,regY:-4,scaleY:0.37,x:328.7,y:302},29).wait(20));
    
        // Layer 44
        this.instance_12 = new lib.Tween36("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(326.6,289.5,0.373,0.373,0,-75,105,-12.6,18.4);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off:false},0).to({regX:-12.5,skewX:-45,skewY:135},13).to({skewX:-60,skewY:120},10).to({regY:18.5,skewX:-34.5,skewY:145.5},15).to({startPosition:0},9).to({skewX:-83.2,skewY:96.8},12).to({_off:true},1).wait(20));
    
        // flash0.ai
        this.instance_13 = new lib.Tween32("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(326,287.6,0.373,0.373,-6.2,0,0,8.7,-14.3);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({startPosition:0},15).to({y:288.4},4).to({_off:true},5).wait(60).to({_off:false,x:326.1,y:287.1},0).wait(20));
    
        // Layer 38
        this.instance_14 = new lib.Tween33("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(334.8,259.7,0.373,0.373,0,0,0,-21.4,13.4);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({scaleX:0.26},1).to({startPosition:0},8).to({scaleX:0.37},6).to({x:334,y:261.6},4).to({_off:true},5).wait(60).to({_off:false,x:334.9,y:259.7},0).wait(20));
    
        // Layer 32
        this.instance_15 = new lib.Tween35("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(336.2,297.6,0.373,0.373,0,0,0,-21.9,10.8);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({rotation:8.8,x:336.3},14).to({rotation:11.8,x:336.2},7).to({rotation:15},4).to({regX:-22,rotation:-16.2},10).to({rotation:-9.7,y:297.5},17).to({regX:-21.9,regY:10.9,rotation:-0.3,x:336.3,y:297.9},31).to({regX:-22,regY:10.8,rotation:0,y:297.6},1).wait(20));
    
        // Layer 15
        this.instance_16 = new lib.Tween20("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(196.4,232.1,0.373,0.373);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleY:0.31,y:237.6},9,cjs.Ease.get(1)).to({scaleY:0.3,y:238.5},10).to({scaleY:0.32,y:236.2},3).to({scaleY:0.33,x:195.5,y:229.5},5,cjs.Ease.get(1)).to({scaleY:0.3,x:196.4,y:238.5},11,cjs.Ease.get(1)).to({scaleY:0.31,y:237.6},4).to({scaleY:0.3,y:238.5},9,cjs.Ease.get(1)).to({scaleY:0.32,y:237},3).to({scaleY:0.3,y:238.5},3).to({scaleY:0.32,y:237},3).to({scaleY:0.3,y:238.5},4,cjs.Ease.get(1)).to({scaleY:0.37,y:232.1},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 2
        this.instance_17 = new lib.Tween1("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(179.3,168.9,0.373,0.373);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,x:180.5,y:171.9},9,cjs.Ease.get(1)).to({scaleY:0.33,y:174.7},10).to({scaleY:0.36,y:167.9},3).to({scaleX:0.42,scaleY:0.42,rotation:15,x:172.1,y:153.6},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.33,rotation:0,x:180.5,y:174.7},11).to({scaleY:0.34,y:171.9},4).to({scaleY:0.33,y:174.7},9,cjs.Ease.get(1)).to({scaleX:0.35,scaleY:0.34,x:180.2,y:173.4},3).to({scaleX:0.34,scaleY:0.33,x:180.5,y:174.7},3).to({scaleX:0.35,scaleY:0.34,x:180.2,y:173.4},3).to({scaleX:0.34,scaleY:0.33,x:180.5,y:174.7},4,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,x:179.3,y:168.9},24).wait(11));
    
        // Layer 14
        this.instance_18 = new lib.Tween21("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(179,172.5,0.373,0.373);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.35,scaleY:0.35,y:174.9},9,cjs.Ease.get(1)).to({scaleY:0.34,y:177.6},10).to({scaleY:0.36,y:171},3).to({scaleX:0.2,scaleY:0.2,rotation:30,y:174.4},5,cjs.Ease.get(1)).to({scaleX:0.35,scaleY:0.34,rotation:0,y:177.6},11).to({scaleY:0.35,y:174.9},4).to({scaleY:0.34,y:177.6},9,cjs.Ease.get(1)).to({scaleX:0.35,scaleY:0.35,y:176.4},3).to({scaleX:0.35,scaleY:0.34,y:177.6},3).to({scaleX:0.35,scaleY:0.35,y:176.4},3).to({scaleX:0.35,scaleY:0.34,y:177.6},4,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,y:172.5},24).wait(11));
    
        // Layer 3
        this.instance_19 = new lib.Tween2("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(227.5,176.4,0.373,0.373);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.39,scaleY:0.39,x:228.9,y:182.6},13,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.36,y:185.1},6).to({scaleY:0.39,y:179.1},3).to({y:174.9},5,cjs.Ease.get(1)).to({scaleY:0.36,y:185.1},11,cjs.Ease.get(1)).to({scaleY:0.37,y:182.6},6).to({scaleX:0.38,scaleY:0.37,y:185.1},7,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,x:228.6,y:183.1},3).to({scaleX:0.38,scaleY:0.37,x:228.9,y:185.1},3).to({scaleX:0.37,scaleY:0.37,x:228.6,y:183.1},3).to({scaleX:0.38,scaleY:0.37,x:228.9,y:185.1},4,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,x:227.5,y:176.4},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 6
        this.instance_20 = new lib.Tween3("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(257.2,208,0.373,0.373);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({x:258.5,y:212},9,cjs.Ease.get(1)).to({scaleY:0.36,y:213.7},10).to({scaleY:0.39,y:209.6},3).to({rotation:660,x:258.9,y:187.3},7,cjs.Ease.get(1)).to({scaleY:0.36,rotation:720,x:258.5,y:213.7},9,cjs.Ease.get(1)).to({scaleY:0.37,y:212},4).to({scaleY:0.36,y:213.7},9,cjs.Ease.get(1)).to({scaleY:0.37,x:258.2,y:210.7},3).to({scaleY:0.36,x:258.5,y:213.7},3).to({scaleY:0.37,x:258.2,y:209.6},3).to({scaleY:0.36,x:258.5,y:213.7},4,cjs.Ease.get(1)).to({scaleY:0.37,x:257.2,y:208},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 5
        this.instance_21 = new lib.Tween5("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(261.8,218.7,0.373,0.373,0,0,0,52.5,-10.1);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({regX:52.4,regY:-10.2,rotation:-1.8,y:219.8},5,cjs.Ease.get(1)).to({regX:52.5,rotation:-6.7,y:220.3},7).to({regX:52.6,scaleY:0.36,rotation:0,skewX:-0.5,skewY:-0.1,y:221.7},7).to({regX:52.5,scaleY:0.39,skewX:-6.5,skewY:-7,y:218.2},3).to({regX:52.6,skewX:15.2,skewY:14.7,x:259.4,y:213.8},6,cjs.Ease.get(1)).to({regY:-10.1,scaleY:0.36,skewX:-0.7,skewY:-0.3,x:261.8,y:221.8},10,cjs.Ease.get(1)).to({regX:52.5,regY:-10.2,scaleY:0.37,rotation:1,skewX:0,skewY:0,x:261.7,y:220.3},6).to({regX:52.6,scaleY:0.36,rotation:0,skewX:0.6,skewY:0.9,x:261.8,y:221.7},7,cjs.Ease.get(1)).to({regY:-10.1,scaleY:0.37,skewX:4,skewY:4.4,y:221},3).to({regX:52.5,scaleY:0.36,skewX:-6.9,skewY:-6.5,y:221.8},3).to({regX:52.6,regY:-10.2,scaleY:0.37,skewX:3,skewY:3.4,y:221},3).to({regX:52.5,regY:-10.1,scaleY:0.36,skewX:-6.9,skewY:-6.5,y:221.8},4,cjs.Ease.get(1)).to({scaleY:0.37,skewX:0,skewY:0,y:218.7},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 4
        this.instance_22 = new lib.Tween4("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(262.9,216.1,0.373,0.373,0,0,0,-26.6,15.8);
        this.instance_22._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({regY:16,rotation:12.5,x:263.4,y:218.1},5,cjs.Ease.get(1)).to({rotation:15,x:263.6,y:218.9},7).to({regY:15.8,scaleX:0.37,scaleY:0.36,rotation:0,skewX:15.4,skewY:14.6,x:263.7,y:220.4},7).to({scaleX:0.37,scaleY:0.39,skewX:14.4,skewY:15.6,y:216.8},3).to({regX:-26.5,regY:15.9,skewX:-15.6,skewY:-14.4,x:265.2,y:212.9},6,cjs.Ease.get(1)).to({regX:-26.6,regY:15.8,scaleX:0.37,scaleY:0.36,skewX:15.4,skewY:14.6,x:263.7,y:220.4},10,cjs.Ease.get(1)).to({regY:16,scaleX:0.37,scaleY:0.37,rotation:15,skewX:0,skewY:0,x:263.6,y:218.9},6).to({regY:15.8,scaleX:0.37,scaleY:0.36,rotation:0,skewX:15.4,skewY:14.6,x:263.7,y:220.4},7,cjs.Ease.get(1)).to({scaleY:0.37,skewX:3.8,skewY:3,x:263.4,y:219.3},3).to({scaleY:0.36,skewX:15.4,skewY:14.6,x:263.7,y:220.4},3).to({scaleY:0.37,skewX:3.8,skewY:3,x:263.4,y:219.3},3).to({scaleY:0.36,skewX:15.4,skewY:14.6,x:263.7,y:220.4},4,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,skewX:0,skewY:0,x:262.9,y:216.1},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 12
        this.instance_23 = new lib.Tween11("synched",0);
        this.instance_23.parent = this;
        this.instance_23.setTransform(208.7,210.9,0.373,0.373);
        this.instance_23._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({y:213.9},9,cjs.Ease.get(1)).to({scaleY:0.36,y:215.6},10).to({scaleY:0.39,y:211.6},3).to({x:210.2,y:207.1},4,cjs.Ease.get(1)).to({scaleX:0.46,scaleY:0.49,x:211.2,y:209.6},3,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.36,x:208.7,y:215.6},9).to({scaleY:0.37,y:213.9},4).to({scaleY:0.36,y:215.6},9,cjs.Ease.get(1)).to({scaleY:0.37,y:214.5},3).to({scaleY:0.36,y:215.6},3).to({scaleY:0.37,y:214.5},3).to({scaleY:0.36,y:215.6},4,cjs.Ease.get(1)).to({scaleY:0.37,y:210.9},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 13
        this.instance_24 = new lib.Tween12("synched",0);
        this.instance_24.parent = this;
        this.instance_24.setTransform(232.4,198,0.373,0.373);
        this.instance_24._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({y:200.5},10,cjs.Ease.get(1)).to({scaleY:0.36,y:202.5},9).to({scaleY:0.39,y:197.7},3).to({scaleY:0.37,y:186.9},6,cjs.Ease.get(1)).to({scaleY:0.36,y:202.5},10).to({scaleY:0.37,y:200.5},4).to({scaleY:0.36,y:202.5},9,cjs.Ease.get(1)).to({scaleY:0.37,x:232.5,y:202.6},3).to({scaleY:0.36,x:231.8,y:201.9},3).to({scaleY:0.37,x:232.5,y:202.6},3).to({scaleY:0.36,x:231.8,y:201.9},4,cjs.Ease.get(1)).to({scaleY:0.37,x:232.4,y:198},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 7
        this.instance_25 = new lib.Tween6("synched",0);
        this.instance_25.parent = this;
        this.instance_25.setTransform(225.1,199.7,0.373,0.373);
        this.instance_25._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.39,scaleY:0.39,y:202.3},9,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.36,y:204.2},10).to({scaleY:0.39,y:199.5},3).to({y:193.2},7,cjs.Ease.get(1)).to({scaleY:0.36,y:204.2},9,cjs.Ease.get(1)).to({startPosition:0},13,cjs.Ease.get(1)).to({scaleY:0.37,y:203.2},3).to({scaleY:0.36,y:204.2},3).to({scaleY:0.37,y:203.2},3).to({scaleY:0.36,y:204.2},4,cjs.Ease.get(1)).to({scaleY:0.37,y:199.7},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 8
        this.instance_26 = new lib.Tween7("synched",0);
        this.instance_26.parent = this;
        this.instance_26.setTransform(232.5,232.5,0.373,0.373,0,0,0,2.4,-13.6);
        this.instance_26._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({regY:-13.8,scaleX:0.37,scaleY:0.37,rotation:7.7,x:233,y:234.6},4,cjs.Ease.get(1)).to({regX:2.3,regY:-13.7,scaleX:0.37,scaleY:0.37,rotation:-30,x:233.1,y:235.4},5).to({regX:2.4,regY:-13.6,scaleX:0.37,scaleY:0.37,rotation:0,skewX:14.3,skewY:15.7,y:236.4},10,cjs.Ease.get(1)).to({regY:-13.7,scaleX:0.38,scaleY:0.38,skewX:-29,skewY:-31,y:233.9},3).to({regX:2.5,scaleX:0.37,scaleY:0.37,skewX:14.7,skewY:15.4,x:233.2,y:235.8},8,cjs.Ease.get(1)).to({regX:2.3,scaleX:0.37,scaleY:0.37,skewX:-30.7,skewY:-29.3,x:233.1,y:236.4},8).to({regX:2.4,regY:-13.6,skewX:14.3,skewY:15.7},4).to({regX:2.3,regY:-13.7,skewX:-30.7,skewY:-29.3},3).to({regX:2.4,regY:-13.6,skewX:14.3,skewY:15.7},6,cjs.Ease.get(1)).to({scaleY:0.37,skewX:-8.3,skewY:-7.3,x:231.5,y:233.2},3).to({scaleY:0.37,skewX:14.3,skewY:15.7,x:233.1,y:236.4},3).to({scaleY:0.37,skewX:-8.3,skewY:-7.3,x:231.5,y:233.2},3).to({scaleY:0.37,skewX:14.3,skewY:15.7,x:233.1,y:236.4},4,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.37,skewX:0,skewY:0,x:232.5,y:232.5},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 9
        this.instance_27 = new lib.Tween8("synched",0);
        this.instance_27.parent = this;
        this.instance_27.setTransform(260.6,222.7,0.373,0.373,0,0,0,1.5,-12.2);
        this.instance_27._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({startPosition:0},5).to({regX:1.4,rotation:21.5,y:223.8},3).to({regX:1.5,rotation:-21.5,y:225.5},6).to({regY:-12.3,scaleX:0.37,scaleY:0.36,rotation:0,skewX:22.9,skewY:24.1,y:226.8},10).to({scaleX:0.38,scaleY:0.39,skewX:-20.7,skewY:-22.3,x:260.5,y:223.6},3).to({regX:1.4,regY:-12.4,scaleX:0.37,scaleY:0.37,skewX:23.4,skewY:23.7,x:260.7,y:225.7},7,cjs.Ease.get(1)).to({regX:1.6,regY:-12.3,scaleX:0.37,scaleY:0.36,skewX:-22.1,skewY:-20.9,x:260.6,y:226.7},9,cjs.Ease.get(-1)).to({regX:1.4,skewX:7.9,skewY:9.1,x:260.5},4).to({regX:1.6,skewX:-22.1,skewY:-20.9,x:260.6},3).to({regY:-12.2,skewX:16.4,skewY:17.5,y:226.8},6,cjs.Ease.get(1)).to({regX:1.4,regY:-12.3,scaleY:0.37,skewX:-1.8,skewY:-1,x:260.5,y:225},3).to({regX:1.6,regY:-12.2,scaleY:0.36,skewX:16.4,skewY:17.5,x:260.6,y:226.8},3).to({regX:1.4,regY:-12.3,scaleY:0.37,skewX:-1.8,skewY:-1,x:260.5,y:225},3).to({regX:1.6,regY:-12.2,scaleY:0.36,skewX:16.4,skewY:17.5,x:260.6,y:226.8},4,cjs.Ease.get(1)).to({regX:1.5,scaleX:0.37,scaleY:0.37,skewX:0,skewY:0,y:222.7},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 24
        this.instance_28 = new lib.Tween24("synched",0);
        this.instance_28.parent = this;
        this.instance_28.setTransform(300.7,197.4,0.373,0.373);
        this.instance_28._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).to({startPosition:0},5).to({y:201.4},9).to({rotation:15,x:300.6,y:204.7},10).to({x:301.6,y:198.3},3).to({y:200.3},6).to({rotation:14.8,x:301.2,y:201.6},5).to({rotation:15,x:300.7,y:202.9},5).to({startPosition:0},3).to({x:302.4,y:202.5},10).to({startPosition:0},3).to({x:303.4},3).to({x:302.4},3).to({rotation:11,x:302,y:202.4},4,cjs.Ease.get(1)).to({rotation:0,x:300.7,y:197.4},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 25
        this.instance_29 = new lib.Tween25("synched",0);
        this.instance_29.parent = this;
        this.instance_29.setTransform(300.5,200,0.373,0.373);
        this.instance_29._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).to({startPosition:0},5).to({y:204},9).to({rotation:15,x:300.3,y:207.2},10).to({x:301.1,y:201.4},3).to({x:304.9,y:199.5},6).to({rotation:14.8,x:303.4,y:203.1},5).to({rotation:15,x:300.2,y:205.9},5).to({x:299.6},3).to({x:303,y:205.1},10).to({startPosition:0},3).to({x:304,y:205.6},3).to({x:301.9,y:205.1},3).to({rotation:11,x:301.5,y:205},4,cjs.Ease.get(1)).to({rotation:0,x:300.5,y:200},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 26
        this.instance_30 = new lib.Tween26("synched",0);
        this.instance_30.parent = this;
        this.instance_30.setTransform(300.5,202.4,0.373,0.373);
        this.instance_30._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).to({startPosition:0},5).to({y:206.4},9).to({rotation:15,x:299.1,y:209.6},10).to({x:299.9,y:204.5},3).to({x:307.5,y:198.1},6).to({rotation:14.8,x:305.8,y:204.4},5).to({rotation:15,x:298.5,y:209.3},5).to({x:297.4,y:208.8},3).to({x:304.5,y:207.8},10).to({startPosition:0},3).to({x:302.6,y:208.3},3).to({x:301.1},3).to({rotation:11,x:301,y:208},4,cjs.Ease.get(1)).to({rotation:0,x:300.5,y:202.4},24,cjs.Ease.get(1)).wait(11));
    
        // e
        this.instance_31 = new lib.Tween9("synched",0);
        this.instance_31.parent = this;
        this.instance_31.setTransform(301.6,195.4,0.373,0.373,0,0,0,0,-37);
        this.instance_31._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({_off:false},0).to({startPosition:0},5).to({regX:0.1,regY:-36.9,scaleY:0.36,skewX:9,skewY:8.5,y:203.1},19).to({regX:0,scaleY:0.39,skewX:8.4,skewY:9.1,y:198.3},3).to({scaleY:0.38,skewX:-111.5,skewY:-111.2,y:200.3},6,cjs.Ease.get(0.61)).to({regX:-0.1,regY:-36.8,skewX:-126.5,skewY:-126.2,x:301.7},2,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(1)).to({regY:-36.9,scaleY:0.36,skewX:28.5,skewY:28,x:301.5,y:203.1},10,cjs.Ease.get(1)).to({regX:0,regY:-37,skewX:-21,skewY:-21.5,x:301.6,y:201.3},10).to({regX:-0.1,regY:-36.9,scaleX:0.37,scaleY:0.36,skewX:-14,skewY:-14.5,y:202.2},3).to({skewX:-7,skewY:-7.5,y:201.6},3).to({regX:0.1,regY:-37,skewX:0,skewY:-0.5,x:301.7,y:201.3},3).to({regY:-36.9,scaleX:0.37,scaleY:0.36,skewX:9,skewY:8.5,x:301.6,y:201.6},4).to({regX:0,regY:-37,scaleY:0.37,skewX:0,skewY:0,y:195.4},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 16
        this.instance_32 = new lib.Tween14("synched",0);
        this.instance_32.parent = this;
        this.instance_32.setTransform(266.3,185.2,0.373,0.373);
        this.instance_32._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({x:267.7,y:188.4},10,cjs.Ease.get(1)).to({scaleY:0.36,y:190.7},9).to({scaleY:0.39,y:185},3).to({y:180},5,cjs.Ease.get(1)).to({scaleY:0.36,y:190.7},11,cjs.Ease.get(1)).to({scaleY:0.37,y:188.4},4).to({scaleY:0.36,y:190.7},9,cjs.Ease.get(1)).to({scaleY:0.37,x:267.4,y:189.4},3).to({scaleY:0.36,x:267.7,y:190.7},3).to({scaleY:0.37,x:267.4,y:189.4},3).to({scaleY:0.36,x:267.7,y:190.7},4,cjs.Ease.get(1)).to({scaleY:0.37,x:266.3,y:185.2},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 17
        this.instance_33 = new lib.Tween15("synched",0);
        this.instance_33.parent = this;
        this.instance_33.setTransform(229.4,262.9,0.373,0.373,0,0,0,31.2,97.6);
        this.instance_33._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({regY:97.7,scaleY:0.31,skewX:-1.9,y:262.8},14,cjs.Ease.get(1)).to({scaleY:0.3,skewX:-2,y:263},5,cjs.Ease.get(1)).to({scaleY:0.32,skewX:-1.8,y:262.4},3).to({scaleY:0.3,skewX:-2,y:263},16,cjs.Ease.get(1)).to({scaleY:0.31,skewX:-1.9,y:262.8},5).to({scaleY:0.3,skewX:-2,y:263},8,cjs.Ease.get(1)).to({regY:97.5,scaleY:0.32,skewX:-1.3,y:262.9},3).to({regY:97.7,scaleY:0.3,skewX:-2,y:263},3).to({regY:97.5,scaleY:0.32,skewX:-1.3,y:262.9},3).to({regY:97.7,scaleY:0.3,skewX:-2,y:263},4,cjs.Ease.get(1)).to({regY:97.6,scaleY:0.37,skewX:0,y:262.9},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 18
        this.instance_34 = new lib.Tween16("synched",0);
        this.instance_34.parent = this;
        this.instance_34.setTransform(210.2,254.2,0.373,0.373);
        this.instance_34._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.41,scaleY:0.32,y:256.6},9,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.28,y:257.1},10).to({scaleY:0.31,y:256},3).to({scaleY:0.38,y:254},5,cjs.Ease.get(1)).to({scaleY:0.28,y:257.1},11,cjs.Ease.get(1)).to({scaleY:0.29,y:256.6},4).to({scaleY:0.28,y:257.1},9,cjs.Ease.get(1)).to({scaleY:0.31,y:256.4},3).to({scaleY:0.28,y:257.1},3).to({scaleY:0.31,y:256.4},3).to({scaleY:0.28,y:257.1},4,cjs.Ease.get(1)).to({scaleY:0.37,y:254.2},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 23
        this.instance_35 = new lib.Tween23("synched",0);
        this.instance_35.parent = this;
        this.instance_35.setTransform(274.5,242,0.373,0.388,0,0,0,-15.2,87.2);
        this.instance_35._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).to({startPosition:0},5).to({regY:87.3,scaleX:0.4,scaleY:0.35,rotation:1.2,y:242.6},14).to({regY:87.2,scaleX:0.37,scaleY:0.34,rotation:0,skewX:1.3,skewY:1.2,y:243.4},5).to({regY:87.1,scaleY:0.36,skewX:1.2,skewY:1.3,y:241.3},3).to({regY:87.2,scaleY:0.4,x:274.6},5,cjs.Ease.get(1)).to({scaleY:0.34,skewX:1.3,skewY:1.2,x:274.5,y:243.4},11,cjs.Ease.get(1)).to({regY:87.3,scaleY:0.35,rotation:1.2,skewX:0,skewY:0,y:242.6},7).to({regY:87.2,scaleY:0.34,rotation:0,skewX:1.3,skewY:1.2,y:243.4},6,cjs.Ease.get(1)).to({regY:87.3,scaleY:0.35,rotation:0.8,skewX:0,skewY:0,y:243},3).to({regY:87.2,scaleY:0.34,rotation:0,skewX:1.3,skewY:1.2,y:243.4},3).to({regY:87.3,scaleY:0.35,rotation:0.8,skewX:0,skewY:0,y:243},3).to({regY:87.2,scaleY:0.34,rotation:0,skewX:1.3,skewY:1.2,y:243.4},4,cjs.Ease.get(1)).to({scaleY:0.39,skewX:0,skewY:0,y:242},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 20
        this.instance_36 = new lib.Tween17("synched",0);
        this.instance_36.parent = this;
        this.instance_36.setTransform(200.7,250.4,0.373,0.373,0,0,0,38.5,64.8);
        this.instance_36._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).to({startPosition:0},5).to({scaleX:0.39,scaleY:0.32,rotation:3,x:199.6},14).to({regY:64.9,scaleX:0.37,scaleY:0.31,rotation:0,x:200.7,y:251},5).to({regY:64.8,scaleY:0.33,y:249.5},3).to({regY:64.7,scaleY:0.37},4,cjs.Ease.get(1)).to({regY:64.9,scaleY:0.31,y:251},12,cjs.Ease.get(1)).to({regY:64.8,scaleY:0.32,y:250.4},5).to({regY:64.9,scaleY:0.31,y:251},8,cjs.Ease.get(1)).to({regY:64.8,scaleY:0.33,y:250.8},3).to({regY:64.9,scaleY:0.31,y:251},3).to({regY:64.8,scaleY:0.33,y:250.8},3).to({regY:64.9,scaleY:0.31,y:251},4,cjs.Ease.get(1)).to({regY:64.8,scaleY:0.37,y:250.4},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 21
        this.instance_37 = new lib.Tween18("synched",0);
        this.instance_37.parent = this;
        this.instance_37.setTransform(231.3,211.7,0.373,0.373);
        this.instance_37._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.39,scaleY:0.39,y:214.7},12,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.36,y:216.3},7).to({scaleY:0.39,y:212.4},3).to({y:209.1},4,cjs.Ease.get(1)).to({scaleY:0.36,y:216.3},12,cjs.Ease.get(1)).to({scaleY:0.37,y:214.7},7).to({scaleY:0.36,y:216.3},6,cjs.Ease.get(1)).to({scaleY:0.37,y:215.2},3).to({scaleY:0.36,y:216.3},3).to({scaleY:0.37,y:215.2},3).to({scaleY:0.36,y:216.3},4,cjs.Ease.get(1)).to({scaleY:0.37,y:211.7},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 22
        this.instance_38 = new lib.Tween19("synched",0);
        this.instance_38.parent = this;
        this.instance_38.setTransform(201,220.8,0.373,0.373);
        this.instance_38._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.39,scaleY:0.39},9,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.36,y:222.2},10).to({scaleY:0.39,y:218.7},3).to({scaleY:0.36,y:222.2},16,cjs.Ease.get(1)).to({scaleY:0.37,y:220.8},5).to({scaleY:0.36,y:222.2},8,cjs.Ease.get(1)).to({scaleY:0.37,y:221.9},3).to({scaleY:0.36,y:222.2},3).to({scaleY:0.37,y:221.9},3).to({scaleY:0.36,y:222.2},4,cjs.Ease.get(1)).to({scaleY:0.37,y:220.8},24,cjs.Ease.get(1)).wait(11));
    
        // Layer 27
        this.instance_39 = new lib.Tween27("synched",0);
        this.instance_39.parent = this;
        this.instance_39.setTransform(241.7,237.3,0.373,0.373);
        this.instance_39._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleY:0.32,x:243.2,y:241.6},9,cjs.Ease.get(1)).to({scaleY:0.34,y:240.5},10).to({scaleY:0.36,y:239.1},3).to({scaleX:0.37,scaleY:0.44,skewY:3.7,y:235},4).to({scaleX:0.37,scaleY:0.36,skewY:0,y:239.1},12).to({scaleY:0.38,y:238.3},5).to({scaleY:0.36,skewY:1.9,y:240},8).to({scaleY:0.37,skewY:0,y:238.8},3).to({scaleY:0.32,y:241.3},3).to({scaleY:0.37,y:238.8},3).to({scaleY:0.36,skewY:1.9,y:240},4).to({scaleY:0.37,skewY:0,x:241.7,y:237.3},24).wait(11));
    
        // Layer 1
        this.instance_40 = new lib.Tween10("synched",0);
        this.instance_40.parent = this;
        this.instance_40.setTransform(244.4,221.6,0.373,0.373);
        this.instance_40._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).to({startPosition:0},5,cjs.Ease.get(1)).to({scaleX:0.38,scaleY:0.36,x:244.9,y:224.5},9,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.34,x:244.4,y:225.8},10).to({scaleY:0.36,y:223.7},2).to({scaleY:0.37,y:222.6},1).to({scaleY:0.34,y:225.8},16,cjs.Ease.get(1)).to({scaleY:0.35,y:224.5},4).to({scaleX:0.38,scaleY:0.35,y:225.8},9,cjs.Ease.get(1)).to({scaleX:0.37,scaleY:0.35,y:224.8},3).to({scaleX:0.38,scaleY:0.35,y:225.8},3).to({scaleX:0.37,scaleY:0.35,y:224.8},3).to({scaleX:0.38,scaleY:0.35,y:225.8},4,cjs.Ease.get(1)).to({scaleX:0.38,scaleY:0.36,y:224.6},7).to({scaleX:0.37,scaleY:0.37,y:221.6},17).wait(11));
    
        // Layer 33
        this.instance_41 = new lib.Bitmap19();
        this.instance_41.parent = this;
        this.instance_41.setTransform(163,214);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(105));
    
        // Layer 28
        this.instance_42 = new lib.shadow("synched",0);
        this.instance_42.parent = this;
        this.instance_42.setTransform(332.9,308.1,0.365,0.688,0,0,0,39.8,4.5);
        this.instance_42.alpha = 0.301;
        this.instance_42._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({_off:false},0).wait(104));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(157.6,139.1,196.3,174);
    
    
    (lib.thapTit_ani = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 1
        this.instance = new lib.thapTit("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-8.6,110.7,1,1,-8,0,0,4.9,81.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25.4,regY:-46.9,rotation:-7.8,x:-5.6,y:-19},0).wait(1).to({rotation:-7.1,x:-4},0).wait(1).to({rotation:-6.1,x:-1.7,y:-18.9},0).wait(1).to({rotation:-4.8,x:1.1,y:-18.7},0).wait(1).to({rotation:-3.4,x:4.4,y:-18.4},0).wait(1).to({rotation:-1.8,x:8,y:-18},0).wait(1).to({rotation:-0.1,x:11.7,y:-17.5},0).wait(1).to({rotation:1.5,x:15.4,y:-16.8},0).wait(1).to({rotation:3.2,x:19,y:-16.1},0).wait(1).to({rotation:4.6,x:22.3,y:-15.3},0).wait(1).to({rotation:6,x:25.1,y:-14.6},0).wait(1).to({rotation:7,x:27.5,y:-14},0).wait(1).to({rotation:7.7,x:29,y:-13.5},0).wait(1).to({regX:4.8,regY:81.2,rotation:8,x:-8.6,y:110.7},0).wait(1).to({regX:25.4,regY:-46.9,rotation:7.8,x:29.1,y:-13.4},0).wait(1).to({rotation:7.1,x:27.7,y:-13.8},0).wait(1).to({rotation:6.1,x:25.4,y:-14.5},0).wait(1).to({rotation:4.8,x:22.7,y:-15.2},0).wait(1).to({rotation:3.4,x:19.5,y:-15.9},0).wait(1).to({rotation:1.8,x:16,y:-16.6},0).wait(1).to({rotation:0.1,x:12.3,y:-17.3},0).wait(1).to({rotation:-1.5,x:8.6,y:-17.9},0).wait(1).to({rotation:-3.2,x:4.9,y:-18.3},0).wait(1).to({rotation:-4.7,x:1.5,y:-18.6},0).wait(1).to({rotation:-6,x:-1.4,y:-18.8},0).wait(1).to({rotation:-7,x:-3.8,y:-18.9},0).wait(1).to({rotation:-7.7,x:-5.4},0).wait(1).to({regX:4.9,regY:81.2,rotation:-8,x:-8.6,y:110.7},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-89.6,-42.4,168.4,47.1);
    
    
    (lib.Prop_Heart_Cloud_Export = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Layer 16
        this.instance = new lib.shape1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-0.7,-759.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.24,scaleY:1.24,guide:{path:[-0.6,-759.1,-0.6,-759.1,-0.6,-759.1,10.4,-759.1,16.7,-765.7,22.7,-771.9,23.9,-779.8,23.9,-779.8,23.9,-779.9]}},21).to({scaleX:1,scaleY:1,guide:{path:[23.9,-779.9,22.9,-772.1,16.7,-765.7,10.3,-759.1,-0.6,-759.1,-12.5,-760.8,-18.1,-768.4,-22.4,-774.3,-23,-781.2,-23,-781.2,-23,-781.2]}},41).to({guide:{path:[-23,-781.2,-23,-780.8,-22.9,-780.3]}},1).to({guide:{path:[-23,-780.3,-23,-780.2,-23,-780.2,-22.7,-778.5,-22.3,-777.1]}},4).to({guide:{path:[-22.4,-777.1,-22.4,-777,-22.3,-777,-22,-775.9,-21.6,-774.9]}},3).to({guide:{path:[-21.6,-774.9,-21.6,-774.7,-21.5,-774.6]}},1).to({guide:{path:[-21.6,-774.5,-21.6,-774.5,-21.5,-774.4,-21,-773.2,-20.4,-772,-20.4,-771.9,-20.3,-771.8]}},3).to({guide:{path:[-20.2,-771.9,-20,-771.4,-19.7,-771]}},2).to({guide:{path:[-19.8,-770.9,-19.8,-770.9,-19.7,-770.9,-19.3,-770,-18.7,-769.2]}},2).to({guide:{path:[-18.6,-769.2,-18.4,-769,-18.3,-768.7]}},1).to({guide:{path:[-18.2,-768.7,-18.2,-768.7,-18.2,-768.6,-18.1,-768.4,-18,-768.3,-16.9,-766.9,-15.7,-765.6,-15.6,-765.5,-15.4,-765.4]}},5).to({guide:{path:[-15.4,-765.5,-15.3,-765.4,-15.2,-765.3]}},1).to({guide:{path:[-15.2,-765.2,-15.2,-765.2,-15.2,-765.2,-13.5,-763.8,-11.7,-762.7]}},5).to({guide:{path:[-11.8,-762.7,-11.7,-762.6,-11.7,-762.6,-10.2,-761.7,-8.6,-761.1,-8.5,-761,-8.4,-761]}},5).to({guide:{path:[-8.4,-761,-8.3,-761,-8.3,-761,-7.1,-760.5,-6,-760.2,-5.9,-760.2,-5.8,-760.1]}},3).wait(7));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-179.9,-899.2,360.5,282.2);
    
    
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
                this.parent.parent.icon_ea_check_pausable();
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:11.7,regY:-16.2,x:26.5,y:10,alpha:0.306},0).wait(1).to({y:0,alpha:0.556},0).wait(1).to({y:-7.7,alpha:0.75},0).wait(1).to({y:-13.3,alpha:0.889},0).wait(1).to({y:-16.6,alpha:0.972},0).wait(1).to({regX:0,regY:0,x:14.8,y:-1.5,alpha:1},0).wait(1).to({regX:11.7,regY:-16.2,x:26.5,y:-17,alpha:0.926},0).wait(1).to({y:-15.2,alpha:0.743},0).wait(1).to({y:-12.8,alpha:0.503},0).wait(1).to({y:-10.4,alpha:0.263},0).wait(1).to({y:-8.5,alpha:0.076},0).wait(1).to({regX:0,regY:0,x:14.8,y:8.5,alpha:0},0).wait(1));
    
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
        this.tit.setTransform(71.4,0);
    
        this.timeline.addTween(cjs.Tween.get(this.tit).wait(105));
    
        // Layer 1
        this.hit = new lib.hit_1();
        this.hit.parent = this;
        this.hit.setTransform(76.6,69,1,1,0,0,0,76.6,67.4);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(105));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,1.6,153.3,134.9);
    
    
    // stage content:
    (lib.ea2017 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            // createjs.Sound.registerSound(HTML5_SOUND_ROOT+"sounds/voice_ea.mp3", "voice_ea"); 
            var icon_eaSound, icon_eaSoundTimeOut;
            root_ea = this;
            htcv_icon_eaOver = function() {cv_icon_eaOver();}
            htcv_icon_eaOut = function() {cv_icon_eaOut();}
            
            function cv_icon_eaOver() {
                root_ea.ico.over = true;
                root_ea.hit.tit.over = true;
                root_ea.hit.tit.gotoAndPlay(1);
                icon_eaSoundTimeOut = setTimeout(icon_eaSoundTimeOutComplete, 500);
            }
            
            function cv_icon_eaOut() {
                root_ea.ico.over = false;
                root_ea.hit.tit.over = false;
                if (root_ea.hit.tit.currentFrame == 7) {
                    root_ea.hit.tit.play();
                }
                clearTimeout(icon_eaSoundTimeOut);
            }
            
            function icon_eaSoundTimeOutComplete() {
                clearTimeout(icon_eaSoundTimeOut);
                
                // if (root_ea.ico.currentFrame == 0) {
                //     icon_eaSound = createjs.Sound.play("voice_ea");
                // }
                root_ea.ico.play();
            }
            
            this.icon_ea_check_pausable = function() {
                if (root_ea.ico.over == false && root_ea.hit.tit.over == false && root_ea.ico.currentFrame == 0 && root_ea.hit.tit.currentFrame == 0) {
                    cvht_icon_ea_pause();
                }
            }
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    
        // Layer 5
        this.hit = new lib.hit();
        this.hit.parent = this;
        this.hit.setTransform(111,138,1,1,0,0,0,101,88);
    
        this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));
    
        // Layer 1
        this.ico = new lib.mEco_resize();
        this.ico.parent = this;
        this.ico.setTransform(65.8,114.8,1,1,0,0,0,213.8,203.8);
    
        this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(114.9,165,196.1,174);
    // library properties:
    lib.properties = {
        width: 210,
        height: 230,
        fps: 30,
        color: "#ADEFFE",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/ea2017_atlas_.png", id:"ea2017_atlas_"}/*,
            {src:"sounds/voice_ea.mp3", id:"voice_ea"}*/
        ],
        preloads: []
    };
    
    
    
    
    })(lib_ea = lib_ea||{}, images_ea = images_ea||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib_ea, images_ea, createjs, ss, AdobeAn;