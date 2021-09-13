const Btn=document.getElementById("btn1");


$(document).ready(function () {

    $(".btn").click(function () {
        $.getJSON("shoplist.json", function (data) {
            var Shoplist_data = '';
            $.each(data, function (key, value) {
                Shoplist_data += '<tr>';
                Shoplist_data += '<td>' + value.Serialno + '</td>';

                Shoplist_data += '<td>' + value.Name + '</td>';

                Shoplist_data += '<td>' + value.Quantity + '</td>';

                Shoplist_data += '<td>' + value.Unit + '</td>';
                Shoplist_data += '<td>' + value.Department + '</td>';
                Shoplist_data += '<td>' + value.Notes + '</td>';

                Shoplist_data += '</tr>';
                Btn.disabled=true;

            });

            $('#table1').append(Shoplist_data);

        });



    });

});
