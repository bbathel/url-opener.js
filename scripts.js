    var urls,links;                      // these are used later
    var shareble_url = window.location.origin+window.location.pathname+"?urls=";
    var url_regex = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; //this regex helps find urls that have the protocol on them only
    var modal_check_box , shareble_textarea ;
    
    /* this creates the links and adds them to the bottom div
     * it takes one argument which should be a string of urls
     * seperated bye either pipes or commas which is an array
     * of urls to be linked */
    var link_them = function(urls){
      if (urls !== "" && urls !== " " ) {             // if the text area is not empty
            links = urls.split(/[|,\n\s]+/g);         // split the urls on new lines, pipes, and commas. Also, this should get rid of blank lines too.
            $('.collapse').removeClass('collapse');   // show div that contains all the links
            for (link in links) {                     // iterate through each link
              if (links[link] !== " " && links[link] !== "" && links[link].match(url_regex)) {  // if the link happend to be a blank line don't do it (hopefully the regex won't allow this but who knows)
                $("<a class='btn btn-link col-sm-6 col-xs-12 ' target='_blank'href='"+links[link]+"'>"+links[link]+"</a>").appendTo('#links div ');// create the link and add it to the div above the button.
                shareble_url += "|"+links[link];
              }                                       // end if
            }                                         // end for
             $('#share_url').text(shareble_url);      // puts sharable url text inside modal
          }                                           // end if urls
    }                                                 // end link_them();
    
    
    /* This function gets the url parameters for me I took it
     * from some guy on the internet so hopefully it works */
    var get_params = function(){
      var vars = [], hash;
      var q = document.URL.split('?')[1];
      if(q != undefined){
          q = q.split('&');
          for(var i = 0; i < q.length; i++){
              hash = q[i].split('=');
              vars.push(hash[1]);
              vars[hash[0]] = hash[1];
          }
          
      }
      return vars;
    }
    
    /* this does all the stuff to the urls in the text area */
    function submitForm(e){
     e.preventDefault();           // stop the form from submitting
          var $textarea = $('form textarea'); // cache the textarea
          if (window.debug) {      // not really important but you can set the debug variable at the top to true and add some test stuff inside here
            window.alert('submit');
          }
          urls = $textarea.val();  // get the values from the div
          $textarea.val('');       // clears the textarea
          link_them(urls);         // this creates the links and adds them to the bottom div
    }
    
    /* This is for the open urls button to open all of the urls linked */
    function open_links(){
      $('#links .well a').each(
              function(){
                window.open(
                  $(this).attr('href'),
                  '_blank' 
                );                   // end window.open
              }                      // end function inside each
            )                        // end each
    }
    
    
    /* This function takes the params and fills the text area with the urls sent in the query string. */
    function fill_textarea(urls){
      var textarea_string = "";
      var textarea = document.querySelector('textarea')
      if (urls !== "" && urls !== " " ) {             // if the text area is not empty
            links = urls.split(/[|,\n\s]+/g);         // split the urls on new lines, pipes, and commas. Also, this should get rid of blank lines too.
            for (link in links) {                     // iterate through each link
              if (links[link] !== " " && links[link] !== "" && links[link].match(url_regex)) {
                textarea_string += links[link] + '\n';// adds each link to this string with a new line after it
              }                                       // end if links[link]
              textarea.value = textarea_string;
            }                                         // end for in loop
      }                                               // end if urls
    }
    function modal_check_box_handler(){
        modal_check_box = $('#open_urls_link');
        shareble_textarea = $('#myModal textarea')
        modal_check_box.click(
          function(){
            if (modal_check_box.is(':checked')) {    // tests if checkbox is checked
              shareble_textarea.val(shareble_textarea.val()+"&open=true"); // adds a second variable to the query string set to true this will cause this link to automatically open windows
            }
            else
              shareble_textarea.val(shareble_textarea.val().replace('&open=true','')); // removes "&open=true" from the shareble link text.
          }
        )
      }
    $(document).ready(
      function(){
       modal_check_box_handler();
      }
    )
    
