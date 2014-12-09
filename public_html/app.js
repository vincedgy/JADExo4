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
        $("yourName").style.backgroundColor = 'red';
        $("yourNameError").innerHTML = "Merci de remplir le nom !";        
        result = false;
    } else {
        $("yourName").style.backgroundColor = 'white';
    }
    if ($("yourFirstName").value === '') {
        $("yourFirstName").style.backgroundColor = 'red';
        $("yourFirstNameError").innerHTML = "Merci de remplir le prénom !";
        result = false;
    } else {
        $("yourFirstName").style.backgroundColor = 'white';
    }
    if ($("yourNickName").value === '') {
        $("yourNickName").style.backgroundColor = 'red';
        $("yourNickNameError").innerHTML = "Merci de remplir le pseudo !";
        result = false;
    } else {
        $("yourNickName").style.backgroundColor = 'white';
    }
    if ($("yourPhone").value === '') {
        $("yourPhone").style.backgroundColor = 'red';
        $("yourPhoneError").innerHTML = "Merci de remplir le numéro de téléphone !";
        result = false;
    } else if (! telephoneRegexp.test($("yourPhone").value)) {
        $("yourPhone").style.backgroundColor = 'orange';
        $("yourPhoneError").innerHTML = "10 charactères numeriques";
        result = false;
    } else {
        $("yourPhone").style.backgroundColor = 'white';
    }
    
    if ($("youBirthDate").value === '') {
        $("youBirthDate").style.backgroundColor = 'red';
        $("youBirthDateError").innerHTML = "Merci de remplir une date de naissance";
        result = false;
    } else {
        $("youBirthDate").style.backgroundColor = 'white';
    }
    
    return result;
};
