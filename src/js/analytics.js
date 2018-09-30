
(function(w,d,s,g,js,fs){
    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
    js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
    js.src='https://apis.google.com/js/platform.js';
    fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
  }(window,document,'script'));



  gapi.analytics.ready(function() {

    /**
     * Authorize the user immediately if the user has already granted access.
     * If no access has been created, render an authorize button inside the
     * element with the ID "embed-api-auth-container".
     */
    gapi.analytics.auth.authorize({
      container: 'embed-api-auth-container',
      clientid: '327297218684-fk7ro01uetbohmjv2n1d15uu266nk3m0.apps.googleusercontent.com'
    });
  
  
    /**
     * Create a new ViewSelector instance to be rendered inside of an
     * element with the id "view-selector-container".
     */
    var viewSelector = new gapi.analytics.ViewSelector({
      container: 'view-selector-container'
    });

  
    // Render the view selector to the page.
    viewSelector.execute();
  
  
    /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "chart-container".
     */
    var dataChart = new gapi.analytics.googleCharts.DataChart({
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:date',
        'start-date': '30daysAgo',
        'end-date': 'yesterday'
      },
      chart: {
        container: 'chart-container',
        type: 'LINE',
        options: {
          width: '100%'
        }
      }
    });

    var dataChart1 = new gapi.analytics.googleCharts.DataChart({
        query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:country',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'max-results': 6,
          sort: '-ga:sessions'
        },
        chart: {
          container: 'chart-1-container',
          type: 'GEO',
          options: {
            width: '100%',
            pieHole: 4/9
          }
        }
      });

      var dataChart2 = new gapi.analytics.googleCharts.DataChart({
        query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:country',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'max-results': 6,
          sort: '-ga:sessions'
        },
        chart: {
          container: 'chart-2-container',
          type: 'PIE',
          options: {
            width: '100%',
            pieHole: 4/9
          }
        }
      });

      var dataChart3 = new gapi.analytics.googleCharts.DataChart({
        query: {
          'dimensions': 'ga:browser',
          'metrics': 'ga:sessions',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'sort': '-ga:sessions',
          'max-results': '6'
        },
        chart: {
          type: 'TABLE',
          container: 'chart-3-container',
          options: {
            width: '100%'
          }
        }
      });
    
  
  
    /**
     * Render the dataChart on the page whenever a new view is selected.
     */
    viewSelector.on('change', function(ids) {
      dataChart.set({query: {ids: ids}}).execute();
      dataChart1.set({query: {ids: ids}}).execute();
      dataChart2.set({query: {ids: ids}}).execute();
      dataChart3.set({query: {ids: ids}}).execute();
    });
  
  });