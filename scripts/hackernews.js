function request(){
    $.get("https://ng-hackernews.lukecs.com/api/stories/top", function(data){
        console.log(data);
        var container = $('#item-list');
        var to_add = [];
        for(var counter = 0; counter < data.length; counter++){
            var item = data[counter];
            var new_list_item = "<a href=\"" + item.url + "\">" + item.title + "</a>";
            to_add.push(new_list_item);
        }
        container.append(to_add);
    })
    .fail(function(){
        console.log("Error loading stories from ng-hackernews.lukecs.com!");
    });    
}

$( document ).ready(function() {
    request();
});