
//dynamic modal
// function modalClick(){
//     $("#Modal").on('show.bs.modal', function (event) {
//         var button = $(event.relatedTarget)
//
//         var title = button.data('title')
//         var thumbnail = button.data('thumbnail')
//         thumbnail = "/static/images/" + thumbnail + "-600.jpg"
//         // var description = button.data('description')
//         var details = button.data('details')
//         var url = button.data('url')
//         var repo = button.data('repo')
//         // var date = button.data('date')
//         var tools = button.data('tools')
//
//         var articles = button.data("articles")
//         var linkname = button.data("linkname")
//
//         var modal = $(this)
//
//         modal.find('.modal-title').text(title)
//         modal.find('#modal-img').attr("src", thumbnail)
//         // modal.find('#project-description').text(description)
//         modal.find('#details').text(details)
//         modal.find('#pj-web-link').attr("href", url)
//         modal.find('#web-link').attr("href", url)
//         modal.find('#git-repo').attr("href", repo)
//         // modal.find('#date-completed').text(date)
//         modal.find('#tools').text(tools)
//         if (articles == 'True'){
//             $("#articles-link").css("display", 'inline')
//
//             var url = "https://chronicle-170419.appspot.com/projects/" + linkname
//
//             modal.find('#articles-link').attr("href", url)
//         } else{
//             $("#articles-link").css("display", 'none')
//         }
//
//     })
// }
//
// function projectDisplay(){
//     $(".project")
//         .mouseover( function() {
//             $(this).find('.proj-img').css('opacity', '0')
//             $(this).find('.inside').css('display', 'block')
//             $(this).find(".pj-icon").css('color', 'white')
//             $(this).css('background-color', "black")
//         })
//         .mouseout( function() {
//             $(this).find('.proj-img').css('opacity', '1')
//             $(this).find('.inside').css('display', 'none')
//             $(this).find(".pj-icon").css('color', 'initial')
//             $(this).css('background-color', "initial")
//         })
//
//         .click( function(){
//             $(".nav-bar").css('display', 'none')
//
//         })
//
//     $("#modal-close").click( function(){
//         if ( $("#fixed-side-nav").css('display') == "none" ){
//             $('.nav-bar').css('display', 'initial')
//         } else {
//             $('.nav-bar').css('display', 'none')
//         }
//     })
//
// }


// function navIt(){
//   var shown = false;
//   $("#close-btn").on("click", function(){
//     if (shown){
//       $(".h-li").css("display", 'none')
//       shown = false;
//     } else {
//       $(".h-li").show();
//       shown = true;
//     }
//   })
// }

// Modal
function modalClick(){
    $('#ModalLong').on('show.bs.modal', function (event) {
      const button = $(event.relatedTarget); // Button that triggered the modal
      const modal = $(this);

      const title = button.data('title');
      modal.find('.modal-title').text(title);
      let thumbnail = button.data('thumbnail');
      thumbnail = "/static/images/" + thumbnail + "-600.jpg";
      console.log(thumbnail)
      modal.find("#modal-img").attr('src', thumbnail);
      const description = button.data('description');
      // const details = button.data('details');
      modal.find('#description').text(description);
      const url = button.data('url');
      modal.find('#modal-weblink').attr("href", url);
      modal.find('#web-link').attr("href", url);
      const repo = button.data('repo');
      modal.find('#git-repo').attr("href", repo);
      const tools = button.data('tools');
      modal.find('#tools').text(tools);
      const articles = button.data("articles");
      if (articles == 'True'){
          const linkname = button.data("linkname");
          $("#articles-link").css("display", 'inline');
          const articlesUrl = "https://chronicle-170419.appspot.com/projects/" + linkname;
          modal.find('#articles-link').attr("href", articlesUrl);
      } else{
          $("#articles-link").css("display", 'none');
      }
    })
}


function displayAll(){
    // navIt();
    modalClick();
    // projectDisplay();

}


$(document).ready(displayAll);
