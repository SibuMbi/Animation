"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24169],{25824:function(e,n,i){i.d(n,{r:function(){return B}});var t=i(70865),r=i(96670),a=i(26297),o=i(52322),c=i(98788),l=i(47842),s=i(5163),u=i(38419),d=i(27764),f=RegExp("^(".concat("/create/home|/create/home/.*",")$")),v=function(e){var n=e.href;return!(0,d.Yn)({href:n})&&n.startsWith("/create")&&!f.test(n)},p=function(e){var n=e.relativePath;return v({href:n})?n:null},m=i(70314),g=i.n(m),h=g()().publicRuntimeConfig,y=h.nextWebBaseUrl,k=h.catalogBaseUrl,Z=h._app.name,I=function(e){var n=e.href;return n?"catalog"===Z?n.startsWith("/catalog")?null:"".concat(null!=y?y:"").concat(n):k&&"next-web"===Z&&n.startsWith("/catalog")?"".concat(k).concat(n):null:null},_=i(9823),R=i(12281),x=i(39097),P=i.n(x),b=i(5632),C=i(2784),w=i(36347),A=g()().publicRuntimeConfig,F=A.shutterstockBaseUrl,N=A.staticBaseUrl,E=function(e){var n=e.href,i=e.language,t=e.baseUrl;return"en"===i?"".concat(t).concat(n):"".concat(t,"/").concat(i).concat(n)},j=(0,C.forwardRef)(function(e,n){var i=e.linkAs,r=e.href,c=(0,a.Z)(e,["linkAs","href"]);return(0,o.jsx)(C.StrictMode,{children:(0,o.jsx)(P(),(0,t.Z)({passHref:!0,href:r,as:i,prefetch:!1,ref:n},c))})});j.defaultProps={href:""};var M=function(e){var n=null==e?void 0:e.currentTarget,i=null==n?void 0:n.getAttribute("href");return{isHrefChangedByOptimize:i&&(0,d.Yn)({href:i})&&(null==n?void 0:n.getAttribute("data-href-changed-by-optimize")),receivedHref:i}},U=function(e){var n,i,f=e.activeClassName,v=e.linkAs,m=e.className,g=(e.clickAnalyticsLabel,e.href),h=e.cref,y=e.isAbsoluteUrl,k=e.isCoreUrl,Z=e.onClick,R=e.role,x=e.underline,P=e.nocolorinherit,A=(0,a.Z)(e,["activeClassName","linkAs","className","clickAnalyticsLabel","href","cref","isAbsoluteUrl","isCoreUrl","onClick","role","underline","nocolorinherit"]),U=(0,w.y)(),S=U.classes,z=U.cx,D=(0,_.D)().isBrandSstk,B=(0,b.useRouter)(),L=g&&"string"==typeof g?g:g.pathname,Y=z(S.a,(i={},(0,l.Z)(i,f,B.pathname===L&&f),(0,l.Z)(i,S.underline,x&&S.underline),(0,l.Z)(i,S.inherit,"button"!==R&&!P),i),m),H=(0,C.useMemo)(function(){return D&&(0,u.DM)({language:B.locale,relativePath:g})},[g,D,B.locale]),O=p({relativePath:g}),X=I({href:g}),$=X||O||H||(y?E({href:g,language:B.locale,baseUrl:k?F:N}):g),q=!!(X||O||H||(0,d.Yn)({href:$})),W=(0,C.useCallback)((n=(0,c.Z)(function(e){var n,i,a,o,c,l;return(0,s.__generator)(this,function(s){switch(s.label){case 0:if(i=(n=M(e)).isHrefChangedByOptimize,a=n.receivedHref,!i)return[3,2];return e.preventDefault(),e.stopPropagation(),[4,Z(e)];case 1:return s.sent(),o=i?a:$,"_blank"===A.target?window.open(o,A.target):(null===(c=window.NREUM)||void 0===c||null===(l=c.addPageAction)||void 0===l||l.call(c,"UP3-1623 assign finalUrl to href",(0,r.Z)((0,t.Z)({},window.location||{}),{finalUrl:o,isHrefChangedByOptimize:i,receivedHref:a,updatedHref:$})),window.location.href=o),[3,4];case 2:return[4,Z(e)];case 3:s.sent(),s.label=4;case 4:return[2]}})}),function(e){return n.apply(this,arguments)}),[Z,A.target,$]);return q?(0,o.jsx)("a",(0,t.Z)({className:Y,href:$,ref:h,onClick:W,role:R},A)):(0,o.jsx)(j,(0,t.Z)({linkAs:v,className:Y,href:$,ref:h,onClick:W,role:R},A))};U.defaultProps={activeClassName:"active",linkAs:"",className:"",cref:function(){},isCoreUrl:!1,onClick:function(){},nocolorinherit:!1};var S=(0,R.g)(U,{clickTrackProp:"clickAnalyticsLabel"});S.displayName="LinkAnalytics";var z=i(79436),D=i(23490),B=(0,C.forwardRef)(function(e,n){var i=(0,D.N)().isBot,c=e.children,l=e.onClick,s=(0,a.Z)(e,["children","onClick"]);return i?(0,o.jsx)(z.n,(0,r.Z)((0,t.Z)({},s),{children:c})):(0,o.jsx)(S,(0,r.Z)((0,t.Z)({onClick:l,cref:n},s),{children:c}))})},79436:function(e,n,i){i.d(n,{n:function(){return u}});var t=i(47842),r=i(70865),a=i(26297),o=i(52322),c=i(39097),l=i.n(c),s=i(36347),u=function(e){var n,i=e.nocolorinherit,c=e.role,u=e.underline,d=e.className,f=e.linkAs,v=(0,a.Z)(e,["nocolorinherit","role","underline","className","linkAs"]),p=(0,s.y)(),m=p.classes,g=(0,p.cx)(m.a,(n={},(0,t.Z)(n,m.underline,u&&m.underline),(0,t.Z)(n,m.inherit,"button"!==c&&!i),n),d);return(0,o.jsx)(l(),(0,r.Z)({passHref:!0,className:g,prefetch:!1,as:f},v))}},36347:function(e,n,i){i.d(n,{y:function(){return t}});var t=(0,i(8740).ZL)()({a:{textDecoration:"none"},inherit:{color:"inherit"},underline:{"&:hover":{textDecoration:"underline"}}})},25949:function(e,n,i){i.d(n,{FI:function(){return a},Fi:function(){return t},Nd:function(){return o},YC:function(){return r}});var t="model",r="model_and_property",a="model_released",o="property"},29292:function(e,n,i){i.d(n,{Be:function(){return F},CP:function(){return Z},Ky:function(){return I},LJ:function(){return P},OB:function(){return A},Rz:function(){return h},SO:function(){return E},UM:function(){return j},bR:function(){return C},f_:function(){return g},jN:function(){return m},lt:function(){return N},mq:function(){return _},qI:function(){return x},zm:function(){return w}});var t,r=i(47842),a=i(70865),o=i(96670),c=i(50930),l=i(66358),s=i(39232),u=i(86795),d=i(44297),f=i(37546),v=i(18174),p=(t={},(0,r.Z)(t,s.gP,s.k4),(0,r.Z)(t,s.nj,s.pX),(0,r.Z)(t,s.cF,s.pX),(0,r.Z)(t,s.k4,s.k4),(0,r.Z)(t,s.Y_,s.k4),(0,r.Z)(t,s.pX,s.pX),(0,r.Z)(t,s.FM,s.pX),(0,r.Z)(t,s.j0,s.xF),(0,r.Z)(t,s.xF,s.xF),(0,r.Z)(t,s.jr,s.xF),(0,r.Z)(t,s.tn,s.tn),(0,r.Z)(t,s.zo,s.zo),t),m=function(e){return p[(0,f.Lr)(e).type]||p[e.type]||s.k4},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.channels,i=e.isOffsetAsset;if((0,d.PD)({channels:n})||i)return l.P$o},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.channels,i=e.isOffsetAsset;if((0,d.PD)({channels:n})||i)return l.Fz$},y=function(e){var n=e.genres,i=e.moods,t=(void 0===i?[]:i).map(function(e){return"Mood:".concat(e)}),r=(void 0===n?[]:n).map(function(e){return"Genre:".concat(e)});return(0,c.Z)(t).concat((0,c.Z)(r)).join(", ")},k=function(e){var n=e.ucsCategory,i=void 0===n?"":n,t=e.ucsSubCategory,r=void 0===t?"":t;return(0,c.Z)(i?["Category:".concat(i)]:[]).concat((0,c.Z)(r?["Category:".concat(r)]:[])).join(", ")},Z=function(e){var n,i=(0,f.Lr)(e);switch(m(e)){case s.xF:return y(i);case s.tn:return k(i);case s.k4:case s.pX:default:return Array.isArray(n=i.categories)?n.map(function(e){return e.name}).join(", "):n}},I=function(e){var n;return(n=e.channels||(0,f.Lr)(e).channels)&&n.join(",")},_=function(e){var n,i,t,r,a,o,c,l,s,u,d=e.gridItems,v=e.item,p=(0,f.Lr)(v),m=d.findIndex(function(e){var n=e.asset,i=e.image,t=e.mediaItem,r=e.item,a=e.id;return(null==n?void 0:n.mediaItem)?n.mediaItem.id===p.id:n?n.id===p.id:(null==r?void 0:r.mediaItem)?r.mediaItem.id===p.id:t?t.id===p.id:i?i.id===p.id:a===p.id});if(-1===m)return{};var g=m,h=(null===(n=v.meta)||void 0===n?void 0:null===(i=n.pagination)||void 0===i?void 0:i.pageNumber)||(null===(t=v.meta)||void 0===t?void 0:null===(r=t.page)||void 0===r?void 0:r.number),y=(null===(a=v.meta)||void 0===a?void 0:null===(o=a.pagination)||void 0===o?void 0:o.pageSize)||(null===(c=v.meta)||void 0===c?void 0:null===(l=c.page)||void 0===l?void 0:l.size),k=(null===(s=v.meta)||void 0===s?void 0:null===(u=s.pagination)||void 0===u?void 0:u.numInjected)||0;return h&&y&&(g=m+(y+k)*(h-1)),{position:g}},R=function(e){var n=e.cartData,i=e.item,t=e.licenseId,r=e.licensePrice;if(t&&r)return{variant:t,price:r===s.q9?0:Number(r)};if(i.licenseId&&i.price){var a=i.price===s.q9?0:Number(i.price);return{variant:i.licenseId,price:a}}var o=n.items.find(function(e){return e.id===i.id})||{},c=!!o.price||0===parseFloat(o.price),l=o.price===s.q9?0:Number(o.price);return o.licenseId&&c?{variant:o.licenseId,price:l}:{}},x=function(e){var n;return null===(n=(0,f.Lr)(e).id)||void 0===n?void 0:n.toString()},P=function(e){var n=(0,f.Lr)(e),i=n.title,t=n.alt,r=n.description;return i||r||t},b=function(e){var n=e.asset,i=e.language;if(!n)return"en";var t=n.descriptionLanguageMap;return t&&t[i]?i:"en"},C=function(e){var n,i,t,r=e.asset,c=e.cartData,l=e.getSearchContext,s=e.gridItems,u=e.licenseId,f=e.licensePrice,v=e.shouldGetSearchContextFromAsset,p=e.pageSection,y=Z(r),k=x(r),I=g(r),b=h(r);n=v?(null==r?void 0:null===(i=r.meta)||void 0===i?void 0:i.search_context)?{search_context:null==r?void 0:null===(t=r.meta)||void 0===t?void 0:t.search_context}:{}:{search_context:l(r)};var C=(0,a.Z)((0,o.Z)((0,a.Z)((0,o.Z)((0,a.Z)({is_relicense:r.isRelicense,asset_type:(0,d.ZZ)(r),brand:I||m(r)},y?{category:y}:{}),{name:P(r),product_id:k}),b&&{product_line:b},n),{sku:k,page_section:p}),s?_({gridItems:s,item:r}):{});return c?(0,a.Z)((0,o.Z)((0,a.Z)({},C),{cart_id:c.id,quantity:1}),R({item:r,cartData:c,licenseId:u,licensePrice:f})):(0,o.Z)((0,a.Z)({},C),{variant:u||r.licenseId})},w=function(e){var n,i,t,r,a,o,c,l=e.asset,f=e.index,v=e.cartId,p=x(l),m=(null==l?void 0:l.price)===s.q9?0:null==l?void 0:l.price;return{cartItemId:(0,u.Q)({collectionId:v,mappedAssetType:(0,d.A8)(l),assetId:l.id}),currency:null==l?void 0:l.currency,category:"string"==typeof(null==l?void 0:l.categories)?null==l?void 0:l.categories:((null==l?void 0:l.categories)||[]).map(function(e){return e.name}).join(","),title:l.id,license:null==l?void 0:null===(n=l.metadata)||void 0===n?void 0:null===(i=n.cart)||void 0===i?void 0:i.licenseId,format:null==l?void 0:null===(t=l.metadata)||void 0===t?void 0:null===(r=t.cart)||void 0===r?void 0:r.format,size:null==l?void 0:null===(a=l.metadata)||void 0===a?void 0:null===(o=a.cart)||void 0===o?void 0:o.size,description:l.description,idOfProduct:p,image_url:null==l?void 0:null===(c=l.preview)||void 0===c?void 0:c.url,isFootageSelect:l.isFootageSelect,position:f,price:Number(m),productId:p,type:l.type}},A=function(e){var n=e.asset,i=e.isComp,t=e.isPaid,r=e.isQuickDownload,a=e.isRedownload;return{display_meta_lang:b({asset:n,language:e.language}),is_comp:(void 0!==i&&i).toString(),is_editorial:(0,v.pi)(n).toString(),is_paid_license:(void 0!==t&&t).toString(),is_quick_download:(void 0===r||r).toString(),is_redownload:(void 0===a||a).toString()}},F=function(e){var n=e.trackingId,i=e.searchTerm;return(0,a.Z)({},n?{search_tracking_id:n}:{},i?{search_term:i}:{})},N=function(e){var n=e.asset,i=void 0===n?{}:n,t=i.meta,r=void 0===t?{}:t,a=i.id,o=(0,d.EK)(i),c=(null===(l=r.search_context)||void 0===l?void 0:l.search_tracking_id)||r.trackingId;if(o){var l,s,u=a.toUpperCase(),f=Object.keys(r).find(function(e){return e.toUpperCase()===u});return(null===(s=r[f])||void 0===s?void 0:s.trackingId)||c}return c},E=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).trackAnalytics;if(e){var n=e.label,i=e.section;return"".concat(i,".").concat(n)}return""},j=function(e){var n,i;return(null==e?void 0:null===(n=e._analyticsData)||void 0===n?void 0:null===(i=n._data)||void 0===i?void 0:i.page)||{}}},86795:function(e,n,i){i.d(n,{Q:function(){return r}});var t=i(32456),r=function(e){var n=e.collectionId,i=e.mappedAssetType,r=e.assetId;return"".concat(n,"-").concat(t.EY[i],"-").concat(r)}},18174:function(e,n,i){i.d(n,{WB:function(){return d},pi:function(){return u},z6:function(){return s}});var t=i(39232),r=i(25949),a=i(44297),o=function(e){var n=e.hasModelRelease,i=e.hasPropertyRelease,a=e.isEditorialModelRelease,o=e.isPremium,c=e.modelReleaseInfo;return n&&i&&c===r.FI?r.YC:n&&!i&&c===r.FI?r.Fi:!n&&i&&c===r.FI?r.Nd:o&&a?t.ow:a?t.gP:""},c=function(e){var n=e.hasPropertyRelease,i=e.modelReleaseInfo,a=e.isPremium,o=e.isEditorialModelRelease;return n&&i===r.FI?r.YC:n||i!==r.FI?n?r.Nd:a&&o?t.Od:o?t.gP:"":r.Fi},l=function(e){var n=e.type,i=e.isEditorial,r=e.isRexEditorial,a=e.modelReleaseInfo;switch(n){case t.k4:case t.Y_:return!!i&&a===t.gP||r;case t.pX:case t.FM:return a===t.gP||r;default:return!1}},s=function(e){var n=e.hasModelRelease,i=e.hasPropertyRelease,r=e.isEditorial,a=e.isRexEditorial,s=e.isPremium,u=e.modelReleaseInfo,d=e.type,f=l({type:d,isEditorial:r,isRexEditorial:a,modelReleaseInfo:u});switch(d){case t.k4:case t.Y_:return o({hasModelRelease:n,hasPropertyRelease:i,isEditorialModelRelease:f,isPremium:s,modelReleaseInfo:u});case t.pX:case t.FM:return c({isEditorialModelRelease:f,isPremium:s,hasPropertyRelease:i,modelReleaseInfo:u});default:return""}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,a.EK)(e))return!0;var n=e.isEditorial,i=e.modelReleaseInfo;switch(e.type){case t.k4:case t.Y_:case t.pX:case t.FM:return!!n&&i===t.gP;default:return!1}},d=function(e){return u(e)||(null==e?void 0:e.hasModelRelease)||(null==e?void 0:e.hasPropertyRelease)}},38419:function(e,n,i){i.d(n,{DM:function(){return p},DW:function(){return v}});var t=i(47842),r=i(5967),a=i(27764),o=(0,r.j)().shutterstockBaseUrl,c=RegExp("^(/video/search/similar/)(.*)$"),l=RegExp("^(/music/artist/)(.*$)"),s="loggedOut",u=[{regex:c,replaceFn:function(e){return e.replace(c,"$1clip-$2")}},{regex:l,replaceFn:function(e){return e.replace(l,"".concat("/music/search?artist=","$2"))}}],d=(0,t.Z)({},s,RegExp("^(".concat("/(\\?.*)?|/images(\\?.*)?|/image-photo/.*|/image-vector/.*|/image-illustration/.*|/image-generated/.*|/search(\\?.*)?|/search/.*|/order(\\?.*)?|/video(\\?.*)?|/video/search(\\?.*)?|/video/search/(?!similar/|models/|ris/).*|/video/editorial/search(\\?.*)?|/video/editorial/search/.*|/video/clip-.*|/music(\\?.*)?|/music/search(\\?.*)?|/music/search/.*|/music/search/similar/.*|/music/search/ras/.*|/music/track-.*|/editorial(\\?.*)?|/editorial/search(\\?.*)?|/editorial/search/.*|/editorial/image-editorial/.*|/editorial/video/.*|/editorial/video/search(\\?.*)?|/editorial/video/search/.*|/editorial/latest-events(\\?.*)?|/editorial/entertainment(\\?.*)?|/editorial/entertainment/.*|/editorial/news(\\?.*)?|/editorial/news/.*|/editorial/sports(\\?.*)?|/editorial/sports/.*|/editorial/royalty(\\?.*)?|/editorial/royalty/.*|/editorial/compilations(\\?.*)?|/editorial/compilations/.*|/editorial/sets/.*|/catalog(\\?.*)?|/catalog/licenses(\\?.*)?|/catalog/licenses/.*|/catalog/collections(\\?.*)?|/catalog/collections/.*|/catalog/uploads(\\?.*)?|/catalog/uploads/.*|/social/.*|/create/home(\\?.*)?|(/_shutterstock)?/planning(/.*)?(\\?.*)?|/creative-flow|/creative-flow/free-trial|/cookies|/pricing|/pricing/video|/pricing/music|/pricing/editorial|/pricing/creative-flow|/sound-effects(\\?.*)?|/sound-effects/search(\\?.*)?|/sound-effects/search/.*|/sound-effects/sound-.*|/predict(/.*)?(\\?.*)?|/templates(\\?.*)?|/templates/create-.*|/templates/search(\\?.*)?|/templates/search/.*|/templates/(?<slug>.+)|/g/.*|/g/.*/video|/g/.*/about|/g/.*/sets|/g/.*/sets/.*|/explore/sitemap|/generate|/generate/.*|/account/profile|/account/plans|/account/flex-premium|/account/portfolio|/account/billing|/account/purchases|/account/team|/account/connected-accounts|/account/admin|/account/developers/apps|/account/invoice/.*|/account/invoices/.*|/account/invoices/.*/pdf|/account/invoices/.*/receipt/pdf|/account/invite/accept/.*",")$"))),f=function(e){var n=e.href;return!(0,a.Yn)({href:n})&&!d[s].test(n)},v=function(e){var n,i=e.language,t=e.relativePath,r=void 0===t?"":t,c=e.getResultAsRelativeHref;return(0,a.Wg)({pathname:(n=u.find(function(e){return e.regex.test(r)}))?n.replaceFn(r):r,language:i,baseUrl:void 0!==c&&c?"":o})},p=function(e){var n=e.language,i=e.relativePath;return f({href:i})?void 0!==i&&i.length&&"?"===i[0]?i:v({language:n,relativePath:i,getResultAsRelativeHref:!0}):null}},5967:function(e,n,i){i.d(n,{j:function(){return a}});var t=i(70314),r=i.n(t),a=function(){return r()().publicRuntimeConfig}}}]);
//# sourceMappingURL=24169-1e35020d507a2b61.js.map