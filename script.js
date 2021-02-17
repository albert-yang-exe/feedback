
function render(data) {
    
            var html = "<div class='commentBox'><div class='leftPanelImg'><img src='http://via.placeholder.com/100x100'/></div><div class='rightPanel'><span>" + data.name + "</span><div class='date'>" + data.date + "</div><p>" + data.body + "</p></div><div class='clear'></div></div>";
    
            $('#container').append(html);
    
        }
    
        $(document).ready(function() {
    
            var coment = [{
                "name": "Barrack Obama",
                "body": "Yoooooooooooo this website hits harder than my drone strikes!"
            }];
    
            for (var i = 0; i < coment.length; i++) {
                render(coment[i]);
    
            }
    
            $('#addComent').click(function() {
                var addObj = {
                    "name": $('#name').val(),
                    "body": $('#bodyText').val()
                };
    
                coment.push(addObj);
                render(addObj);
                $('#name').val('');
                $('#bodyText').val('');
            });
        });
