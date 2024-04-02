$(document).ready(function() {

    $('#submitButton').on('click', function() {
      let username = $('#displayName').val();
      let commentText = $('#comment').val()
      if (username === '')
        alert('Display Name is required')
      else if (commentText === '')
        alert('Please enter a comment')
      else (
        $('#comments').prepend(
        `<div class="comment">
            <div class="buttons">
              <button class="editButton">Edit</button>
              <button class="deleteButton">Delete</button>
            </div>
            <div class="commentSubstance"
              <h4 class="username">${username}</h4>
              <p class="commentText">${commentText}</p>
          </div>
        </div>`
        ))
    });
  
    $('#comments').on('click', '.deleteButton', function() {
      $(this).parent().parent().remove();
    })
  
    $('#comments').on('click', '.editButton', function() {
      let commentText = $(this).parent().parent().find('.commentText').text();
    let newCommentText = prompt('Edit your comment', commentText);
    if (newCommentText === null) {
      return;
    } else if (newCommentText === '') {
      alert('Please only submit a comment containing text! Your comment will remain unedited.');
      return;
    } else {
      $(this).parent().parent().find('.commentText').text(newCommentText);
    }
  });

  
  });


  //make stupid edit texbox appear beneath comment being edited instead of a 
  //goddamn alert/prompt - hidden content? Maybe could work

  //fine tune styling
  //i.e. make submit button not look like dick and balls, position edit, delete buttons in top right
  //let commentText = $(this).siblings('.commentText').parent().text();
  //let username = $(this).siblings('.username').parent().text();
  //let newComment = prompt('Edit your comment', commentText);
  //if (newComment === null) {
    //return;
  //} else {
    //$(this).siblings('.commentText').parent().text(newComment);
    //$(this).siblings('.username').text(username);
  //}
//})