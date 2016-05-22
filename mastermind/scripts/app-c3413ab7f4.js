!function(){"use strict";angular.module("mastermindUi",["ngAria","oitozero.ngSweetAlert"])}(),function(){"use strict";function e(e){function t(t,n){var s=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t};return n}e.$inject=["malarkey"],angular.module("mastermindUi").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t,n){function s(t){e.start(t).then(function(){o.phase="playing"})}function u(){o.model.sendGuess().then(r)}function r(e){if(e.win){var s=n.duration(e.win.time,"seconds").format("mm:ss"),u=["You won with",e.win.num,"guesses in",s,"minutes"].join(" ");t.swal("Congrats!",u,"success")}}var o=this;o.phase="welcome",o.start=s,o.model=e,o.resetGuess=o.model.resetGuess,o.guessNext=o.model.guessNext,o.sendGuess=u}e.$inject=["GameModel","SweetAlert","moment"],angular.module("mastermindUi").controller("MainController",e)}(),function(){"use strict";function e(e,t,n){function s(n){return angular.isString(n)&&0!==n.lenght?e.start(n).then(function(e){return d.key=e.game_key,d.guess=c(e.colors.length),d.guessComplete=!1,d.colors=l(e.colors),e}):t.reject()}function u(){var t=d.key,n=d.guess.map(o).join("");return e.send(t,n).then(function(e){return d.pastResults=e.past_results.reverse(),d.win=r(e),d.guess=c(e.colors.length),d.guessComplete=!1,d.pastResults.forEach(function(e){var t=e.guess.split("");e.guess=l(t)}),d})}function r(e){return"true"===e.solved||e.solved===!0?{time:e.time_taken,num:e.num_guesses,message:e.further_instructions}:!1}function o(e){return e.code}function a(e){var t=d.guess.indexOf(m);-1!==t&&(d.guess[t]=e,d.guessComplete=-1===d.guess.indexOf(m))}function i(e){d.guessComplete=!1,d.guess[e]=m}function c(e){for(var t=[],n=0;e>n;n++)t.push(m);return t}function l(e){return e.map(function(e){return{code:e,css:n[e]}})}var m={css:"white"},d={pastResults:[],win:!1,start:s,resetGuess:i,guessNext:a,sendGuess:u};return d}e.$inject=["GameApi","$q","colors"],angular.module("mastermindUi").service("GameModel",e)}(),function(){"use strict";function e(e,t){function n(n){return e({method:"post",headers:{"Content-Type":"application/json"},url:t.concat("/new_game"),data:{user:n}}).then(function(e){return e.data})}function s(n,s){return e({method:"post",headers:{"Content-Type":"application/json"},url:t.concat("/guess"),data:{code:s,game_key:n}}).then(function(e){return e.data})}var u={start:n,send:s};return u}e.$inject=["$http","api"],angular.module("mastermindUi").service("GameApi",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("mastermindUi").run(e)}(),function(){"use strict";angular.module("mastermindUi").constant("malarkey",malarkey).constant("moment",moment).constant("api","http://mastermind-pugstunt.herokuapp.com/mastermind/v1").constant("colors",{R:"red",B:"blue",G:"green",Y:"yellow",O:"orange",P:"purple",C:"cyan",M:"pink"})}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("mastermindUi").config(e)}();
//# sourceMappingURL=../maps/scripts/app-c3413ab7f4.js.map