webpackJsonp([1],{0:function(e,t,n){e.exports=n(161)},161:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(162),l=(a(r),n(164)),o=(a(l),n(165));a(o);$.support.cors=!0,$(function(){(function(){var e=$(".col-md-6").width();(function(){var t=1,n=$("#galleryFrames .slide-prev"),a=$("#galleryFrames .slide-next"),r=$("#galleryFrames .gallery-hot ul"),l=$("#galleryFrames .slide-content li").length,o=$("#galleryFrames .slide-dots");r.width(e*l),$("#galleryFrames img").width(e),r.css("left",-e),a.on("click",function(){u("right")}),n.on("click",function(){u("left")}),o.on("click","li",function(){$(this).addClass("slide-active").siblings().removeClass("slide-active");var n=$(this).text()-t;t=$(this).text(),r.animate({left:"-="+e*n},300)});var i=setInterval(function(){u("right")},5e3);$("#galleryFrames").on("mouseover",function(){clearTimeout(i)}).on("mouseout",function(){i=setInterval(function(){u("right")},5e3)});var u=function(n){r.is(":animated")||("right"===n?(t++,r.animate({left:"-="+e},400),t===l-1&&(t=1,r.animate({left:-e},0))):(t--,r.animate({left:"+="+e},400),0===t&&(t=l-2,r.animate({left:-(e*(l-2))},0))),o.find("li:eq("+(t-1)+")").addClass("slide-active").siblings().removeClass("slide-active"))}})(),function(){function t(t){var r=(u-1)*e,l=$("#editorFeatured .ui-side-index");n.is(":animated")||("right"===t?a===u?(a=1,l.html(a),n.animate({left:0},400)):(a++,l.html(a),n.animate({left:"-="+e},400)):1===a?(a=u,l.html(a),n.animate({left:"-="+r},400)):(a--,l.html(a),n.animate({left:"+="+e},400)))}var n=$("#editorFeatured .screen-body"),a=1,r=$("#editorFeatured .slide-prev"),l=$("#editorFeatured .slide-next"),o=$("#editorFeatured .thumbnail"),i=o.length,u=Math.ceil(i/4),s=o.outerWidth(!0)-o.outerWidth(),c=(e-4*s)/4;o.outerWidth(c),n.width(e*u),$("#editorFeatured .ui-side-max").html(u),l.on("click",function(){t("right")}),r.on("click",function(){t("left")});var f=setInterval(function(){t("right")},5e3);$("#editorFeatured").on("mouseover",function(){clearInterval(f)}).on("mouseout",function(){f=setInterval(function(){t("right")},5e3)})}()})()})},162:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AlbumItem=t.NewAlbums=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),s=a(u),c=n(160),f=a(c),d=n(163),m=a(d),p=t.NewAlbums=function(e){function t(){r(this,t);var e=l(this,Object.getPrototypeOf(t).call(this));return e.state={selected:"最热",loading:!0,data:[]},e}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=[],n=["最热","华语","欧美","日韩","单曲"];if(!this.state.loading){var a=this.state.data;if(a&&a.musics)for(var r="/music/results?cat="+a._id+"&p=0",l=0,o=a.musics.length;l<Math.min(8,o);l++)t.push(s["default"].createElement(h,{data:a.musics[l],key:l}))}return s["default"].createElement("div",null,s["default"].createElement("div",{className:"class-top"},s["default"].createElement("span",null,"新碟榜"),s["default"].createElement(m["default"],{titleTop:n,selected:this.state.selected,onDataChange:function(t){return e.getData(t)}}),s["default"].createElement("a",{href:r,target:"_blank",className:"more"},"更多")),s["default"].createElement("div",{className:"screen"},s["default"].createElement("div",{className:"panel-body screen-body"},t)))}},{key:"componentDidMount",value:function(){var e=this.state.selected;this.getData(e)}},{key:"getData",value:function(e){var t=this,n=this.props.source+encodeURIComponent("新碟榜"+e);$.get(n,function(n){t.setState({loading:!1,selected:e,data:n.data})})}}]),t}(s["default"].Component),h=t.AlbumItem=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"thumbnail"},s["default"].createElement("a",{href:"/music/"+this.props.data._id,target:"_blank"},s["default"].createElement("img",{src:this.props.data.image,alt:this.props.data.title})),s["default"].createElement("div",{className:"caption"},s["default"].createElement("h5",null,this.props.data.title),s["default"].createElement("p",null,this.props.data.singer)))}}]),t}(s["default"].Component);f["default"].render(s["default"].createElement(p,{source:"/musicindex?albumName="}),document.getElementById("newAlbums"))},163:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TitleTop=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),s=a(u),c=n(160),f=(a(c),t.TitleTop=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props.selected,n=this.props.titleTop,a=[];return n.forEach(function(n,r){a.push(s["default"].createElement("li",{className:t===n?"on":"",key:r},s["default"].createElement("a",{href:"javascript:;",onClick:function(t){return e.handleTitleChang(n)}},n)))}),s["default"].createElement("ul",null,a)}},{key:"handleTitleChang",value:function(e){this.props.selected!==e&&this.props.onDataChange(e)}}]),t}(s["default"].Component));e.exports=f},164:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SongItem=t.HotArtistSongs=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),s=a(u),c=n(160),f=a(c),d=n(163),m=a(d),p=t.HotArtistSongs=function(e){function t(){r(this,t);var e=l(this,Object.getPrototypeOf(t).call(this));return e.state={selected:"最热",loading:!0,data:[]},e}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=[],n=["最热","摇滚","民谣","流行","电子"];if(!this.state.loading){var a=this.state.data;if(a&&a.musics)for(var r=0,l=a.musics.length;r<Math.min(10,l);r++)t.push(s["default"].createElement(h,{data:a.musics[r],key:r,value:r+1}))}return s["default"].createElement("div",{className:"billboard"},s["default"].createElement("div",{className:"billboard-hd"},s["default"].createElement("h4",null,"本周单曲榜"),s["default"].createElement("button",{className:"play-button"},s["default"].createElement("i",{className:"glyphicon glyphicon-play"}),s["default"].createElement("span",null,"播放全部"))),s["default"].createElement("div",{className:"billboard-bd class-top"},s["default"].createElement(m["default"],{titleTop:n,selected:this.state.selected,onDataChange:function(t){return e.getData(t)}})),s["default"].createElement("div",{className:"hotArtist-songs"},s["default"].createElement("ul",null,t)))}},{key:"componentDidMount",value:function(){var e=this.state.selected;this.getData(e)}},{key:"getData",value:function(e){var t=this,n=this.props.source+encodeURIComponent("本周单曲榜"+e);$.get(n,function(n){t.setState({loading:!1,selected:e,data:n.data})})}}]),t}(s["default"].Component),h=t.SongItem=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("li",null,s["default"].createElement("a",{href:"/music/"+this.props.data._id,target:"_blank"},s["default"].createElement("img",{src:this.props.data.image,alt:this.props.data.title}),s["default"].createElement("h5",null,this.props.data.title),s["default"].createElement("p",null,this.props.data.singer),s["default"].createElement("span",{className:"order"},this.props.value)))}}]),t}(s["default"].Component);f["default"].render(s["default"].createElement(p,{source:"/musicindex?hotSongs="}),document.getElementById("hotArtistSongs"))},165:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ProgrammeItem=t.HotProgrammes=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),s=a(u),c=n(160),f=a(c),d=n(163),m=a(d),p=t.HotProgrammes=function(e){function t(){r(this,t);var e=l(this,Object.getPrototypeOf(t).call(this));return e.state={selected:"最热",loading:!0,data:[],dataPro:null},e}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=[],n=["最热","流行","摇滚","民谣","原生"];if(!this.state.loading){var a=this.state.data;if(a)for(var r="/music/results?pro="+this.state.dataPro._id+"&p=0",l=0,o=a.length;l<Math.min(6,o);l++)t.push(s["default"].createElement(h,{dataCars:a[l],key:l}))}return s["default"].createElement("div",null,s["default"].createElement("div",{className:"class-top"},s["default"].createElement("span",null,"近期热门歌单"),s["default"].createElement(m["default"],{titleTop:n,selected:this.state.selected,onDataChange:function(t){return e.getData(t)}}),s["default"].createElement("a",{href:r,target:"_blank",className:"more"},"更多")),s["default"].createElement("div",{className:"screen"},s["default"].createElement("div",{className:"panel-body screen-body"},t)))}},{key:"componentDidMount",value:function(){var e=this.state.selected;this.getData(e)}},{key:"getData",value:function(e){var t=this,n=this.props.source+encodeURIComponent("近期热门歌单"+e);$.get(n,function(n){t.setState({loading:!1,selected:e,data:n.data,dataPro:n.dataPro})})}}]),t}(s["default"].Component),h=t.ProgrammeItem=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){for(var e=this.props.dataCars.musics,t=[],n=0,a=e.length;n<Math.min(3,a);n++)t.push(s["default"].createElement("a",{key:n,href:"/music/"+e[n]._id,target:"_blank",title:e[n].title},s["default"].createElement("p",{key:n},n+1+"."+e[n].title)));return t.length>2&&t.push(s["default"].createElement("span",{key:this.props.dataCars._id},"...")),s["default"].createElement("div",{className:"thumbnail"},s["default"].createElement("div",{className:"inner"},s["default"].createElement("h5",null,this.props.dataCars.name),s["default"].createElement("img",{src:e[0]?e[0].image:"",alt:e[0]?e[0].title:"",style:e[0]?{display:"inline"}:{display:"none"}}),t))}}]),t}(s["default"].Component);f["default"].render(s["default"].createElement(p,{source:"/musicindex?hotProName="}),document.getElementById("hotProgrammes"))}});