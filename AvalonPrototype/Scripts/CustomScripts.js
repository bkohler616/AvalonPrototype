﻿$(document).ready(
    function () {
        $("#classSelection").click(function () {
            $("#classDirectory1").fadeToggle();
            $("#classDirectory2").fadeToggle();
            $("#classDirectory3").fadeToggle();
            $("#dropdownMenu1").html('Systems and Procedures<span class="caret"></span>');
        });
    });