<html>
  <head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="scripts.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>window.debug = false;</script>
  </head>
  <body class="fluid-container">
    <div class="row">
      <h1 class="text-center">Url Opener</h1>
    </div>
    <div class="row">
      <p class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">Enter a list of urls seperated by pipes&nbsp;|&nbsp;, commas, or&nbsp;new&nbsp;lines. Then click link button.</p>
      <p class="col-xs-12 col-sm-8 col-sm-offset-2 text-center bg-danger">You Should Include the protocol (&nbsp;http:// , https://&nbsp;)</p>
    </div>
    <div class="row">
      <form class="well col-xs-12 col-sm-8  col-sm-offset-2"action="" id="main">
        <div class="row">
          <textarea class="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1" name="" id="" rows="10"></textarea>
        </div>
        <div class="row" style="margin-top:2.5%;">
          <input class='btn btn-primary col-xs-8 col-xs-offset-2  col-sm-offset-2 col-sm-4' value='Link Them' type="submit">
          <button class="btn btn-danger col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0 " type="reset">Reset</button>
        </div>
      </form>
    </div>
    <div class="row collapse" id="links">
      <div class="well col-xs-12  col-sm-8 col-sm-offset-2">
        
      </div>
    </div>
    <div class="row collapse">
      <button id="open_urls" class="btn btn-primary col-xs-8 col-xs-offset-2 col-sm-2 col-sm-offset-4" >Open URLS</button>
      <button id="share_url_button" class="btn btn-primary col-xs-8 col-xs-offset-2 col-sm-2 col-sm-offset-0" data-toggle="modal" data-target="#myModal">Get Shareble Link</button>
    </div>
    
    
    <!-- Modal that has the shareable link -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Share this link</h4>
          </div>
          <div class="modal-body">
            <textarea id="share_url" class="col-xs-12" style="overflow:auto;">You haven't added any links yet</textarea>
          </div>
          <div class="modal-footer row">
            <label  class="text-info text-left col-xs-7">If you check this box the link above will open the urls when the link is used</label><input class="col-xs-1"type="checkbox" name="open_urls_link" id="open_urls_link">
            <button type="button" class="btn btn-default col-xs-3" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <script>
     
    </script>
    
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
