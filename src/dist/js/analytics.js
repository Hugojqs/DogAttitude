!function(e,t,a,s,n,i){(s=e.gapi||(e.gapi={})).analytics={q:[],ready:function(e){this.q.push(e)}},n=t.createElement(a),i=t.getElementsByTagName(a)[0],n.src="https://apis.google.com/js/platform.js",i.parentNode.insertBefore(n,i),n.onload=function(){s.load("analytics")}}(window,document,"script"),gapi.analytics.ready(function(){gapi.analytics.auth.authorize({container:"embed-api-auth-container",clientid:"327297218684-fk7ro01uetbohmjv2n1d15uu266nk3m0.apps.googleusercontent.com"});var e=new gapi.analytics.ViewSelector({container:"view-selector-container"});e.execute();var t=new gapi.analytics.googleCharts.DataChart({query:{metrics:"ga:sessions",dimensions:"ga:date","start-date":"30daysAgo","end-date":"yesterday"},chart:{container:"chart-container",type:"LINE",options:{width:"100%"}}}),a=new gapi.analytics.googleCharts.DataChart({query:{metrics:"ga:sessions",dimensions:"ga:country","start-date":"30daysAgo","end-date":"yesterday","max-results":6,sort:"-ga:sessions"},chart:{container:"chart-1-container",type:"GEO",options:{width:"100%",pieHole:4/9}}}),s=new gapi.analytics.googleCharts.DataChart({query:{metrics:"ga:sessions",dimensions:"ga:country","start-date":"30daysAgo","end-date":"yesterday","max-results":6,sort:"-ga:sessions"},chart:{container:"chart-2-container",type:"PIE",options:{width:"100%",pieHole:4/9}}}),n=new gapi.analytics.googleCharts.DataChart({query:{dimensions:"ga:browser",metrics:"ga:sessions","start-date":"30daysAgo","end-date":"yesterday",sort:"-ga:sessions","max-results":"6"},chart:{type:"TABLE",container:"chart-3-container",options:{width:"100%"}}});e.on("change",function(e){t.set({query:{ids:e}}).execute(),a.set({query:{ids:e}}).execute(),s.set({query:{ids:e}}).execute(),n.set({query:{ids:e}}).execute()})});