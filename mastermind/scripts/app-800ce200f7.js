!function(){"use strict";angular.module("mastermindUi",["ngAria","oitozero.ngSweetAlert"])}(),function(){"use strict";function e(e){function t(t,n){function s(e){u.type(e).pause()["delete"]()}var u=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,s)}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t};return n}e.$inject=["malarkey"],angular.module("mastermindUi").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t,n){function s(t){e.start(t).then(u)}function u(){a.phase="playing"}function r(){a.model.sendGuess().then(o)}function o(e){var s,u;e.win&&(s=n.duration(e.win.time,"seconds").format("mm:ss"),u=["You won with",e.win.num,"guesses in",s,"minutes!"].join(" "),t.swal("Congrats!",u,"success"))}var a=this;a.phase="welcome",a.start=s,a.model=e,a.resetGuess=a.model.resetGuess,a.guessNext=a.model.guessNext,a.sendGuess=r}e.$inject=["GameModel","SweetAlert","moment"],angular.module("mastermindUi").controller("MainController",e)}(),function(){"use strict";function e(e,t,n){function s(n){return angular.isString(n)&&0!==n.lenght?e.start(n).then(u):t.reject()}function u(e){return p.key=e.game_key,p.guess=m(e.colors.length),p.guessComplete=!1,p.pastResults=[],p.colors=d(e.colors),e}function r(){var t=p.key,n=p.guess.map(i).join("");return e.send(t,n).then(o)}function o(e){return p.pastResults=e.past_results.reverse(),p.win=a(e),p.guess=m(e.colors.length),p.guessComplete=!1,p.pastResults.forEach(function(e){var t=e.guess.split("");e.guess=d(t)}),p}function a(e){return"true"===e.solved||e.solved===!0?{time:e.time_taken,num:e.num_guesses,message:e.further_instructions}:!1}function i(e){return e.code}function c(e){var t=p.guess.indexOf(g);-1!==t&&(p.guess[t]=e,p.guessComplete=-1===p.guess.indexOf(g))}function l(e){p.guessComplete=!1,p.guess[e]=g}function m(e){for(var t=[],n=0;e>n;n++)t.push(g);return t}function d(e){return e.map(function(e){return{code:e,css:n[e]}})}var g={css:"white"},p={pastResults:[],win:!1,start:s,resetGuess:l,guessNext:c,sendGuess:r};return p}e.$inject=["GameApi","$q","colors"],angular.module("mastermindUi").service("GameModel",e)}(),function(){"use strict";function e(e,t){function n(n){return e({method:"post",headers:{"Content-Type":"application/json"},url:t.concat("/new_game"),data:{user:n}}).then(function(e){return e.data})}function s(n,s){return e({method:"post",headers:{"Content-Type":"application/json"},url:t.concat("/guess"),data:{code:s,game_key:n}}).then(function(e){return e.data})}var u={start:n,send:s};return u}e.$inject=["$http","api"],angular.module("mastermindUi").service("GameApi",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("mastermindUi").run(e)}(),function(){"use strict";angular.module("mastermindUi").constant("malarkey",malarkey).constant("moment",moment).constant("api","http://mastermind-pugstunt.herokuapp.com/mastermind/v1").constant("colors",{R:"red",B:"blue",G:"green",Y:"yellow",O:"orange",P:"purple",C:"cyan",M:"pink"})}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("mastermindUi").config(e)}();
//# sourceMappingURL=../maps/scripts/app-800ce200f7.js.map
