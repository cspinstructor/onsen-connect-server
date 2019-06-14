function getData() {
  ons.notification.toast('ok', { timeout: 2000 });

  var url = 'http://hanchiang.orgfree.com/jsonencode.php?name=apple';

  $.ajax(url)
    .done(function(data) {
      var obj = JSON.parse(data);
      console.log(data);
      //console.log(obj[0].name);

      var output = '<ons-list>';
      if (obj[0]) {
        console.log(obj[0].name);
        obj.forEach(function(record) {
          console.log(record.name);
          output +=
            '<ons-list-item>' +
            ' Name: ' +
            record.name +
            '</ons-list-item>' +
            '<ons-list-item>' +
            ' email: ' +
            record.email +
            '</ons-list-item>';
        });
        output += '<ons-list>';
      } else {
        output +=
          '<ons-list><ons-list-item>Not Found</ons-list-item></ons-list>';
      }

      $('#resultlist').append(output);
    })

    .fail(function(error) {
      console.log(error);
      $('#resultlist').html(error);
    });
}
