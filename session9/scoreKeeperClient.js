$(document).ready(function(){
    $("#create").click(function(){
        let inputVal = new Array($("#name").val());
        for (let i=0; i<inputVal.length; i++){
            $(".Name").append(inputVal[i]);
        }
    })
    $("#add-round").click(function(){
        var count=1;
        $(".table table-striped").append(`<tr class="row">
        <th class="round" scope="row">Round</th>
        <td><input class="form-control" type="number"></td>
        <td><input class="form-control" type="number"></td>
        <td><input class="form-control" type="number"></td>
        <td><input class="form-control" type="number"></td>
        </tr>`);
        if ($(this).data('clicked', true)){
            count++;
            $("#round").append(` ${count}`);
        }
    })  
})
