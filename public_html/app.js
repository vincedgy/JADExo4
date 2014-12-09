/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var $ = function (id) {
    return window.document.getElementById(id);
};

var telephoneRegexp = /^0[0-9]{9}$/;

var valider = function () {
    
    var result = true;
    
    $("yourFirstNameError").innerHTML = "";
    $("yourNameError").innerHTML = "";
    $("yourNickNameError").innerHTML = "";
    $("yourPhoneError").innerHTML = "";
    $("youBirthDateError").innerHTML = "";
    
    if ($("yourName").value === '') {
        $("yourNameError").innerHTML = "Merci de remplir le nom !";        
        result = false;
    }
    if ($("yourFirstName").value === '') {
        $("yourFirstNameError").innerHTML = "Merci de remplir le prénom !";
        result = false;
    }
    if ($("yourNickName").value === '') {
        $("yourNickNameError").innerHTML = "Merci de remplir le pseudo !";
        result = false;
    }
    if ($("yourPhone").value === '') {
        $("yourPhoneError").innerHTML = "Merci de remplir le numéro de téléphone !";
        result = false;
    } else if (! telephoneRegexp.test($("yourPhone").value)) {
        $("yourPhoneError").innerHTML = "10 charactères numeriques";
        result = false;
    }
    
    if ($("youBirthDate").value === '') {
        $("youBirthDateError").innerHTML = "Merci de remplir une date de naissance";
        result = false;
    }
    
    return result;
};
