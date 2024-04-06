"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5370],{65370:(t,e,r)=>{r.r(e),r.d(e,{default:()=>A});var n=function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};function i(t,e,r,n){return new(r||(r=Promise))((function(i,o){function u(t){try{s(n.next(t))}catch(e){o(e)}}function a(t){try{s(n.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,a)}s((n=n.apply(t,e||[])).next())}))}function o(t,e){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(u=0)),u;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(s){a=[6,s],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function u(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return u}"function"==typeof SuppressedError&&SuppressedError;var s,l="KEYS",c="VALUES",h="",d=function(){function t(t,e){var r=t._tree,n=Array.from(r.keys());this.set=t,this._type=e,this._path=n.length>0?[{node:r,keys:n}]:[]}return t.prototype.next=function(){var t=this.dive();return this.backtrack(),t},t.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var t=f(this._path),e=t.node,r=t.keys;if(f(r)===h)return{done:!1,value:this.result()};var n=e.get(f(r));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()},t.prototype.backtrack=function(){if(0!==this._path.length){var t=f(this._path).keys;t.pop(),t.length>0||(this._path.pop(),this.backtrack())}},t.prototype.key=function(){return this.set._prefix+this._path.map((function(t){var e=t.keys;return f(e)})).filter((function(t){return t!==h})).join("")},t.prototype.value=function(){return f(this._path).node.get(h)},t.prototype.result=function(){switch(this._type){case c:return this.value();case l:return this.key();default:return[this.key(),this.value()]}},t.prototype[Symbol.iterator]=function(){return this},t}(),f=function(t){return t[t.length-1]},v=function(t,e,r,n,i,o,a,s){var l,c,d=o*a;try{t:for(var f=u(t.keys()),y=f.next();!y.done;y=f.next()){var p=y.value;if(p===h){var m=i[d-1];m<=r&&n.set(s,[t.get(p),m])}else{for(var _=o,g=0;g<p.length;++g,++_){for(var F=p[g],x=a*_,w=x-a,b=i[x],A=Math.max(0,_-r-1),C=Math.min(a-1,_+r),E=A;E<C;++E){var z=F!==e[E],D=i[w+E]+ +z,S=i[w+E+1]+1,k=i[x+E]+1,I=i[x+E+1]=Math.min(D,S,k);I<b&&(b=I)}if(b>r)continue t}v(t.get(p),e,r,n,i,_,a,s+p)}}}catch(M){l={error:M}}finally{try{y&&!y.done&&(c=f.return)&&c.call(f)}finally{if(l)throw l.error}}},y=function(){function t(t,e){void 0===t&&(t=new Map),void 0===e&&(e=""),this._size=void 0,this._tree=t,this._prefix=e}return t.prototype.atPrefix=function(e){var r,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=a(p(this._tree,e.slice(this._prefix.length)),2),o=i[0],s=i[1];if(void 0===o){var l=a(w(s),2),c=l[0],d=l[1];try{for(var f=u(c.keys()),v=f.next();!v.done;v=f.next()){var y=v.value;if(y!==h&&y.startsWith(d)){var m=new Map;return m.set(y.slice(d.length),c.get(y)),new t(m,e)}}}catch(_){r={error:_}}finally{try{v&&!v.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}}return new t(o,e)},t.prototype.clear=function(){this._size=void 0,this._tree.clear()},t.prototype.delete=function(t){return this._size=void 0,g(this._tree,t)},t.prototype.entries=function(){return new d(this,"ENTRIES")},t.prototype.forEach=function(t){var e,r;try{for(var n=u(this),i=n.next();!i.done;i=n.next()){var o=a(i.value,2);t(o[0],o[1],this)}}catch(s){e={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},t.prototype.fuzzyGet=function(t,e){return function(t,e,r){var n=new Map;if(void 0===e)return n;for(var i=e.length+1,o=i+r,u=new Uint8Array(o*i).fill(r+1),a=0;a<i;++a)u[a]=a;for(var s=1;s<o;++s)u[s*i]=s;return v(t,e,r,n,u,1,i,""),n}(this._tree,t,e)},t.prototype.get=function(t){var e=m(this._tree,t);return void 0!==e?e.get(h):void 0},t.prototype.has=function(t){var e=m(this._tree,t);return void 0!==e&&e.has(h)},t.prototype.keys=function(){return new d(this,l)},t.prototype.set=function(t,e){if("string"!=typeof t)throw new Error("key must be a string");return this._size=void 0,_(this._tree,t).set(h,e),this},Object.defineProperty(t.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var t=this.entries();!t.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),t.prototype.update=function(t,e){if("string"!=typeof t)throw new Error("key must be a string");this._size=void 0;var r=_(this._tree,t);return r.set(h,e(r.get(h))),this},t.prototype.fetch=function(t,e){if("string"!=typeof t)throw new Error("key must be a string");this._size=void 0;var r=_(this._tree,t),n=r.get(h);return void 0===n&&r.set(h,n=e()),n},t.prototype.values=function(){return new d(this,c)},t.prototype[Symbol.iterator]=function(){return this.entries()},t.from=function(e){var r,n,i=new t;try{for(var o=u(e),s=o.next();!s.done;s=o.next()){var l=a(s.value,2),c=l[0],h=l[1];i.set(c,h)}}catch(d){r={error:d}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i},t.fromObject=function(e){return t.from(Object.entries(e))},t}(),p=function(t,e,r){var n,i;if(void 0===r&&(r=[]),0===e.length||null==t)return[t,r];try{for(var o=u(t.keys()),a=o.next();!a.done;a=o.next()){var s=a.value;if(s!==h&&e.startsWith(s))return r.push([t,s]),p(t.get(s),e.slice(s.length),r)}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return r.push([t,e]),p(void 0,"",r)},m=function(t,e){var r,n;if(0===e.length||null==t)return t;try{for(var i=u(t.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;if(a!==h&&e.startsWith(a))return m(t.get(a),e.slice(a.length))}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},_=function(t,e){var r,n,i=e.length;t:for(var o=0;t&&o<i;){try{for(var a=(r=void 0,u(t.keys())),s=a.next();!s.done;s=a.next()){var l=s.value;if(l!==h&&e[o]===l[0]){for(var c=Math.min(i-o,l.length),d=1;d<c&&e[o+d]===l[d];)++d;var f=t.get(l);if(d===l.length)t=f;else{var v=new Map;v.set(l.slice(d),f),t.set(e.slice(o,o+d),v),t.delete(l),t=v}o+=d;continue t}}}catch(p){r={error:p}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}var y=new Map;return t.set(e.slice(o),y),y}return t},g=function(t,e){var r=a(p(t,e),2),n=r[0],i=r[1];if(void 0!==n)if(n.delete(h),0===n.size)F(i);else if(1===n.size){var o=a(n.entries().next().value,2),u=o[0],s=o[1];x(i,u,s)}},F=function(t){if(0!==t.length){var e=a(w(t),2),r=e[0],n=e[1];if(r.delete(n),0===r.size)F(t.slice(0,-1));else if(1===r.size){var i=a(r.entries().next().value,2),o=i[0],u=i[1];o!==h&&x(t.slice(0,-1),o,u)}}},x=function(t,e,r){if(0!==t.length){var n=a(w(t),2),i=n[0],o=n[1];i.set(o+e,r),i.delete(o)}},w=function(t){return t[t.length-1]},b="or",A=function(){function t(t){if(null==(null==t?void 0:t.fields))throw new Error('MiniSearch: option "fields" must be provided');var e=null==t.autoVacuum||!0===t.autoVacuum?V:t.autoVacuum;this._options=n(n(n({},S),t),{autoVacuum:e,searchOptions:n(n({},k),t.searchOptions||{}),autoSuggestOptions:n(n({},I),t.autoSuggestOptions||{})}),this._index=new y,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=O,this.addFields(this._options.fields)}return t.prototype.add=function(t){var e,r,n,i,o,a,s=this._options,l=s.extractField,c=s.tokenize,h=s.processTerm,d=s.fields,f=s.idField,v=l(t,f);if(null==v)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(v))throw new Error("MiniSearch: duplicate ID ".concat(v));var y=this.addDocumentId(v);this.saveStoredFields(y,t);try{for(var p=u(d),m=p.next();!m.done;m=p.next()){var _=m.value,g=l(t,_);if(null!=g){var F=c(g.toString(),_),x=this._fieldIds[_],w=new Set(F).size;this.addFieldLength(y,x,this._documentCount-1,w);try{for(var b=(n=void 0,u(F)),A=b.next();!A.done;A=b.next()){var C=h(A.value,_);if(Array.isArray(C))try{for(var E=(o=void 0,u(C)),z=E.next();!z.done;z=E.next()){var D=z.value;this.addTerm(x,y,D)}}catch(S){o={error:S}}finally{try{z&&!z.done&&(a=E.return)&&a.call(E)}finally{if(o)throw o.error}}else C&&this.addTerm(x,y,C)}}catch(k){n={error:k}}finally{try{A&&!A.done&&(i=b.return)&&i.call(b)}finally{if(n)throw n.error}}}}}catch(I){e={error:I}}finally{try{m&&!m.done&&(r=p.return)&&r.call(p)}finally{if(e)throw e.error}}},t.prototype.addAll=function(t){var e,r;try{for(var n=u(t),i=n.next();!i.done;i=n.next()){var o=i.value;this.add(o)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},t.prototype.addAllAsync=function(t,e){var r=this;void 0===e&&(e={});var n=e.chunkSize,i=void 0===n?10:n,o={chunk:[],promise:Promise.resolve()},u=t.reduce((function(t,e,n){var o=t.chunk,u=t.promise;return o.push(e),(n+1)%i==0?{chunk:[],promise:u.then((function(){return new Promise((function(t){return setTimeout(t,0)}))})).then((function(){return r.addAll(o)}))}:{chunk:o,promise:u}}),o),a=u.chunk;return u.promise.then((function(){return r.addAll(a)}))},t.prototype.remove=function(t){var e,r,n,i,o,a,s=this._options,l=s.tokenize,c=s.processTerm,h=s.extractField,d=s.fields,f=s.idField,v=h(t,f);if(null==v)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var y=this._idToShortId.get(v);if(null==y)throw new Error("MiniSearch: cannot remove document with ID ".concat(v,": it is not in the index"));try{for(var p=u(d),m=p.next();!m.done;m=p.next()){var _=m.value,g=h(t,_);if(null!=g){var F=l(g.toString(),_),x=this._fieldIds[_],w=new Set(F).size;this.removeFieldLength(y,x,this._documentCount,w);try{for(var b=(n=void 0,u(F)),A=b.next();!A.done;A=b.next()){var C=c(A.value,_);if(Array.isArray(C))try{for(var E=(o=void 0,u(C)),z=E.next();!z.done;z=E.next()){var D=z.value;this.removeTerm(x,y,D)}}catch(S){o={error:S}}finally{try{z&&!z.done&&(a=E.return)&&a.call(E)}finally{if(o)throw o.error}}else C&&this.removeTerm(x,y,C)}}catch(k){n={error:k}}finally{try{A&&!A.done&&(i=b.return)&&i.call(b)}finally{if(n)throw n.error}}}}}catch(I){e={error:I}}finally{try{m&&!m.done&&(r=p.return)&&r.call(p)}finally{if(e)throw e.error}}this._storedFields.delete(y),this._documentIds.delete(y),this._idToShortId.delete(v),this._fieldLength.delete(y),this._documentCount-=1},t.prototype.removeAll=function(t){var e,r;if(t)try{for(var n=u(t),i=n.next();!i.done;i=n.next()){var o=i.value;this.remove(o)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new y,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},t.prototype.discard=function(t){var e=this,r=this._idToShortId.get(t);if(null==r)throw new Error("MiniSearch: cannot discard document with ID ".concat(t,": it is not in the index"));this._idToShortId.delete(t),this._documentIds.delete(r),this._storedFields.delete(r),(this._fieldLength.get(r)||[]).forEach((function(t,n){e.removeFieldLength(r,n,e._documentCount,t)})),this._fieldLength.delete(r),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},t.prototype.maybeAutoVacuum=function(){if(!1!==this._options.autoVacuum){var t=this._options.autoVacuum,e=t.minDirtFactor,r=t.minDirtCount,n=t.batchSize,i=t.batchWait;this.conditionalVacuum({batchSize:n,batchWait:i},{minDirtCount:r,minDirtFactor:e})}},t.prototype.discardAll=function(t){var e,r,n=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var i=u(t),o=i.next();!o.done;o=i.next()){var a=o.value;this.discard(a)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}}finally{this._options.autoVacuum=n}this.maybeAutoVacuum()},t.prototype.replace=function(t){var e=this._options,r=e.idField,n=(0,e.extractField)(t,r);this.discard(n),this.add(t)},t.prototype.vacuum=function(t){return void 0===t&&(t={}),this.conditionalVacuum(t)},t.prototype.conditionalVacuum=function(t,e){var r=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&e,null!=this._enqueuedVacuum||(this._enqueuedVacuum=this._currentVacuum.then((function(){var e=r._enqueuedVacuumConditions;return r._enqueuedVacuumConditions=O,r.performVacuuming(t,e)}))),this._enqueuedVacuum):!1===this.vacuumConditionsMet(e)?Promise.resolve():(this._currentVacuum=this.performVacuuming(t),this._currentVacuum)},t.prototype.performVacuuming=function(t,e){return i(this,void 0,void 0,(function(){var r,n,i,s,l,c,h,d,f,v,y,p,m,_,g,F,x,w,b,A,C,E,z,D,S;return o(this,(function(o){switch(o.label){case 0:if(r=this._dirtCount,!this.vacuumConditionsMet(e))return[3,10];n=t.batchSize||M.batchSize,i=t.batchWait||M.batchWait,s=1,o.label=1;case 1:o.trys.push([1,7,8,9]),l=u(this._index),c=l.next(),o.label=2;case 2:if(c.done)return[3,6];h=a(c.value,2),d=h[0],f=h[1];try{for(E=void 0,v=u(f),y=v.next();!y.done;y=v.next()){p=a(y.value,2),m=p[0],_=p[1];try{for(D=void 0,g=u(_),F=g.next();!F.done;F=g.next())x=a(F.value,1),w=x[0],this._documentIds.has(w)||(_.size<=1?f.delete(m):_.delete(w))}catch(k){D={error:k}}finally{try{F&&!F.done&&(S=g.return)&&S.call(g)}finally{if(D)throw D.error}}}}catch(I){E={error:I}}finally{try{y&&!y.done&&(z=v.return)&&z.call(v)}finally{if(E)throw E.error}}return 0===this._index.get(d).size&&this._index.delete(d),s%n!=0?[3,4]:[4,new Promise((function(t){return setTimeout(t,i)}))];case 3:o.sent(),o.label=4;case 4:s+=1,o.label=5;case 5:return c=l.next(),[3,2];case 6:return[3,9];case 7:return b=o.sent(),A={error:b},[3,9];case 8:try{c&&!c.done&&(C=l.return)&&C.call(l)}finally{if(A)throw A.error}return[7];case 9:this._dirtCount-=r,o.label=10;case 10:return[4,null];case 11:return o.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}}))}))},t.prototype.vacuumConditionsMet=function(t){if(null==t)return!0;var e=t.minDirtCount,r=t.minDirtFactor;return e=e||V.minDirtCount,r=r||V.minDirtFactor,this.dirtCount>=e&&this.dirtFactor>=r},Object.defineProperty(t.prototype,"isVacuuming",{get:function(){return null!=this._currentVacuum},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),t.prototype.has=function(t){return this._idToShortId.has(t)},t.prototype.getStoredFields=function(t){var e=this._idToShortId.get(t);if(null!=e)return this._storedFields.get(e)},t.prototype.search=function(e,r){var n,i;void 0===r&&(r={});var o=this.executeQuery(e,r),s=[];try{for(var l=u(o),c=l.next();!c.done;c=l.next()){var h=a(c.value,2),d=h[0],f=h[1],v=f.score,y=f.terms,p=f.match,m=y.length||1,_={id:this._documentIds.get(d),score:v*m,terms:Object.keys(p),queryTerms:y,match:p};Object.assign(_,this._storedFields.get(d)),(null==r.filter||r.filter(_))&&s.push(_)}}catch(g){n={error:g}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}return e===t.wildcard&&null==r.boostDocument&&null==this._options.searchOptions.boostDocument||s.sort(j),s},t.prototype.autoSuggest=function(t,e){var r,i,o,s;void 0===e&&(e={}),e=n(n({},this._options.autoSuggestOptions),e);var l=new Map;try{for(var c=u(this.search(t,e)),h=c.next();!h.done;h=c.next()){var d=h.value,f=d.score,v=(x=d.terms).join(" ");null!=(g=l.get(v))?(g.score+=f,g.count+=1):l.set(v,{score:f,terms:x,count:1})}}catch(b){r={error:b}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}var y=[];try{for(var p=u(l),m=p.next();!m.done;m=p.next()){var _=a(m.value,2),g=_[0],F=_[1],x=(f=F.score,F.terms),w=F.count;y.push({suggestion:g,terms:x,score:f/w})}}catch(A){o={error:A}}finally{try{m&&!m.done&&(s=p.return)&&s.call(p)}finally{if(o)throw o.error}}return y.sort(j),y},Object.defineProperty(t.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),t.loadJSON=function(t,e){if(null==e)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(t),e)},t.getDefault=function(t){if(S.hasOwnProperty(t))return C(S,t);throw new Error('MiniSearch: unknown option "'.concat(t,'"'))},t.loadJS=function(e,r){var n,i,o,s,l,c,h=e.index,d=e.documentCount,f=e.nextId,v=e.documentIds,p=e.fieldIds,m=e.fieldLength,_=e.averageFieldLength,g=e.storedFields,F=e.dirtCount,x=e.serializationVersion;if(1!==x&&2!==x)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var w=new t(r);w._documentCount=d,w._nextId=f,w._documentIds=P(v),w._idToShortId=new Map,w._fieldIds=p,w._fieldLength=P(m),w._avgFieldLength=_,w._storedFields=P(g),w._dirtCount=F||0,w._index=new y;try{for(var b=u(w._documentIds),A=b.next();!A.done;A=b.next()){var C=a(A.value,2),E=C[0],z=C[1];w._idToShortId.set(z,E)}}catch(B){n={error:B}}finally{try{A&&!A.done&&(i=b.return)&&i.call(b)}finally{if(n)throw n.error}}try{for(var D=u(h),S=D.next();!S.done;S=D.next()){var k=a(S.value,2),I=k[0],M=k[1],O=new Map;try{for(var V=(l=void 0,u(Object.keys(M))),L=V.next();!L.done;L=V.next()){var T=L.value,j=M[T];1===x&&(j=j.ds),O.set(parseInt(T,10),P(j))}}catch(W){l={error:W}}finally{try{L&&!L.done&&(c=V.return)&&c.call(V)}finally{if(l)throw l.error}}w._index.set(I,O)}}catch(q){o={error:q}}finally{try{S&&!S.done&&(s=D.return)&&s.call(D)}finally{if(o)throw o.error}}return w},t.prototype.executeQuery=function(e,r){var i=this;if(void 0===r&&(r={}),e===t.wildcard)return this.executeWildcardQuery(r);if("string"!=typeof e){var o=n(n(n({},r),e),{queries:void 0}),u=e.queries.map((function(t){return i.executeQuery(t,o)}));return this.combineResults(u,o.combineWith)}var a=this._options,s=a.tokenize,l=a.processTerm,c=a.searchOptions,h=n(n({tokenize:s,processTerm:l},c),r),d=h.tokenize,f=h.processTerm,v=d(e).flatMap((function(t){return f(t)})).filter((function(t){return!!t})).map(D(h)).map((function(t){return i.executeQuerySpec(t,h)}));return this.combineResults(v,h.combineWith)},t.prototype.executeQuerySpec=function(t,e){var r,i,o,s,l,c,h=n(n({},this._options.searchOptions),e),d=(h.fields||this._options.fields).reduce((function(t,e){var r;return n(n({},t),((r={})[e]=C(h.boost,e)||1,r))}),{}),f=h.boostDocument,v=h.weights,y=h.maxFuzzy,p=h.bm25,m=n(n({},k.weights),v),_=m.fuzzy,g=m.prefix,F=this._index.get(t.term),x=this.termResults(t.term,t.term,1,F,d,f,p);if(t.prefix&&(l=this._index.atPrefix(t.term)),t.fuzzy){var w=!0===t.fuzzy?.2:t.fuzzy,b=w<1?Math.min(y,Math.round(t.term.length*w)):w;b&&(c=this._index.fuzzyGet(t.term,b))}if(l)try{for(var A=u(l),E=A.next();!E.done;E=A.next()){var z=a(E.value,2),D=z[0],S=z[1];if(V=D.length-t.term.length){null==c||c.delete(D);var I=g*D.length/(D.length+.3*V);this.termResults(t.term,D,I,S,d,f,p,x)}}}catch(j){r={error:j}}finally{try{E&&!E.done&&(i=A.return)&&i.call(A)}finally{if(r)throw r.error}}if(c)try{for(var M=u(c.keys()),O=M.next();!O.done;O=M.next()){D=O.value;var V,L=a(c.get(D),2),T=L[0];if(V=L[1]){I=_*D.length/(D.length+V);this.termResults(t.term,D,I,T,d,f,p,x)}}}catch(B){o={error:B}}finally{try{O&&!O.done&&(s=M.return)&&s.call(M)}finally{if(o)throw o.error}}return x},t.prototype.executeWildcardQuery=function(t){var e,r,i=new Map,o=n(n({},this._options.searchOptions),t);try{for(var s=u(this._documentIds),l=s.next();!l.done;l=s.next()){var c=a(l.value,2),h=c[0],d=c[1],f=o.boostDocument?o.boostDocument(d,"",this._storedFields.get(h)):1;i.set(h,{score:f,terms:[],match:{}})}}catch(v){e={error:v}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(e)throw e.error}}return i},t.prototype.combineResults=function(t,e){if(void 0===e&&(e=b),0===t.length)return new Map;var r=e.toLowerCase();return t.reduce(E[r])||new Map},t.prototype.toJSON=function(){var t,e,r,n,i=[];try{for(var o=u(this._index),s=o.next();!s.done;s=o.next()){var l=a(s.value,2),c=l[0],h=l[1],d={};try{for(var f=(r=void 0,u(h)),v=f.next();!v.done;v=f.next()){var y=a(v.value,2),p=y[0],m=y[1];d[p]=Object.fromEntries(m)}}catch(_){r={error:_}}finally{try{v&&!v.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}i.push([c,d])}}catch(g){t={error:g}}finally{try{s&&!s.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:i,serializationVersion:2}},t.prototype.termResults=function(t,e,r,n,i,o,a,s){var l,c,h,d,f;if(void 0===s&&(s=new Map),null==n)return s;try{for(var v=u(Object.keys(i)),y=v.next();!y.done;y=v.next()){var p=y.value,m=i[p],_=this._fieldIds[p],g=n.get(_);if(null!=g){var F=g.size,x=this._avgFieldLength[_];try{for(var w=(h=void 0,u(g.keys())),b=w.next();!b.done;b=w.next()){var A=b.value;if(this._documentIds.has(A)){var E=o?o(this._documentIds.get(A),e,this._storedFields.get(A)):1;if(E){var D=g.get(A),S=this._fieldLength.get(A)[_],k=r*m*E*z(D,F,this._documentCount,S,x,a),I=s.get(A);if(I){I.score+=k,L(I.terms,t);var M=C(I.match,e);M?M.push(p):I.match[e]=[p]}else s.set(A,{score:k,terms:[t],match:(f={},f[e]=[p],f)})}}else this.removeTerm(_,A,e),F-=1}}catch(O){h={error:O}}finally{try{b&&!b.done&&(d=w.return)&&d.call(w)}finally{if(h)throw h.error}}}}}catch(V){l={error:V}}finally{try{y&&!y.done&&(c=v.return)&&c.call(v)}finally{if(l)throw l.error}}return s},t.prototype.addTerm=function(t,e,r){var n=this._index.fetch(r,B),i=n.get(t);if(null==i)(i=new Map).set(e,1),n.set(t,i);else{var o=i.get(e);i.set(e,(o||0)+1)}},t.prototype.removeTerm=function(t,e,r){if(this._index.has(r)){var n=this._index.fetch(r,B),i=n.get(t);null==i||null==i.get(e)?this.warnDocumentChanged(e,t,r):i.get(e)<=1?i.size<=1?n.delete(t):i.delete(e):i.set(e,i.get(e)-1),0===this._index.get(r).size&&this._index.delete(r)}else this.warnDocumentChanged(e,t,r)},t.prototype.warnDocumentChanged=function(t,e,r){var n,i;try{for(var o=u(Object.keys(this._fieldIds)),a=o.next();!a.done;a=o.next()){var s=a.value;if(this._fieldIds[s]===e)return void this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(t),' has changed before removal: term "').concat(r,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'),"version_conflict")}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.addDocumentId=function(t){var e=this._nextId;return this._idToShortId.set(t,e),this._documentIds.set(e,t),this._documentCount+=1,this._nextId+=1,e},t.prototype.addFields=function(t){for(var e=0;e<t.length;e++)this._fieldIds[t[e]]=e},t.prototype.addFieldLength=function(t,e,r,n){var i=this._fieldLength.get(t);null==i&&this._fieldLength.set(t,i=[]),i[e]=n;var o=(this._avgFieldLength[e]||0)*r+n;this._avgFieldLength[e]=o/(r+1)},t.prototype.removeFieldLength=function(t,e,r,n){if(1!==r){var i=this._avgFieldLength[e]*r-n;this._avgFieldLength[e]=i/(r-1)}else this._avgFieldLength[e]=0},t.prototype.saveStoredFields=function(t,e){var r,n,i=this._options,o=i.storeFields,a=i.extractField;if(null!=o&&0!==o.length){var s=this._storedFields.get(t);null==s&&this._storedFields.set(t,s={});try{for(var l=u(o),c=l.next();!c.done;c=l.next()){var h=c.value,d=a(e,h);void 0!==d&&(s[h]=d)}}catch(f){r={error:f}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}}},t.wildcard=Symbol("*"),t}(),C=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0},E=((s={})[b]=function(t,e){var r,n;try{for(var i=u(e.keys()),o=i.next();!o.done;o=i.next()){var a=o.value,s=t.get(a);if(null==s)t.set(a,e.get(a));else{var l=e.get(a),c=l.score,h=l.terms,d=l.match;s.score=s.score+c,s.match=Object.assign(s.match,d),T(s.terms,h)}}}catch(f){r={error:f}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return t},s.and=function(t,e){var r,n,i=new Map;try{for(var o=u(e.keys()),a=o.next();!a.done;a=o.next()){var s=a.value,l=t.get(s);if(null!=l){var c=e.get(s),h=c.score,d=c.terms,f=c.match;T(l.terms,d),i.set(s,{score:l.score+h,terms:l.terms,match:Object.assign(l.match,f)})}}}catch(v){r={error:v}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i},s.and_not=function(t,e){var r,n;try{for(var i=u(e.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;t.delete(a)}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return t},s),z=function(t,e,r,n,i,o){var u=o.k,a=o.b,s=o.d;return Math.log(1+(r-e+.5)/(e+.5))*(s+t*(u+1)/(t+u*(1-a+a*n/i)))},D=function(t){return function(e,r,n){return{term:e,fuzzy:"function"==typeof t.fuzzy?t.fuzzy(e,r,n):t.fuzzy||!1,prefix:"function"==typeof t.prefix?t.prefix(e,r,n):!0===t.prefix}}},S={idField:"id",extractField:function(t,e){return t[e]},tokenize:function(t){return t.split(W)},processTerm:function(t){return t.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(t,e){"function"==typeof(null===console||void 0===console?void 0:console[t])&&console[t](e)},autoVacuum:!0},k={combineWith:b,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:{k:1.2,b:.7,d:.5}},I={combineWith:"and",prefix:function(t,e,r){return e===r.length-1}},M={batchSize:1e3,batchWait:10},O={minDirtFactor:.1,minDirtCount:20},V=n(n({},M),O),L=function(t,e){t.includes(e)||t.push(e)},T=function(t,e){var r,n;try{for(var i=u(e),o=i.next();!o.done;o=i.next()){var a=o.value;t.includes(a)||t.push(a)}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},j=function(t,e){var r=t.score;return e.score-r},B=function(){return new Map},P=function(t){var e,r,n=new Map;try{for(var i=u(Object.keys(t)),o=i.next();!o.done;o=i.next()){var a=o.value;n.set(parseInt(a,10),t[a])}}catch(s){e={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n},W=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u}}]);