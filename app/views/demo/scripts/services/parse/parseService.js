﻿var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('parseService', function ($http) {

    this.med = {};
    
    this.getProfiles = function () {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/profiles'
        }).then(function(res) {
            return res.data.results;
        });
    };

    this.addProfile = function (data) {
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/profiles',
            data: data
        });
    };

    this.updateProfile = function (data) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/profiles/' + data.objectId,
            data: data
        });
    };


    this.removeProfile = function (data) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/profiles/' + data.objectId,
            data: data
        });
    };


    this.getProfile = function (id) {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/profiles/' + id
        }).then(function (response) {
            return response.data;
        });
    };


    this.getMeds = function () {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/medications/'
        }).then(function (res) {
            return res.data.results;
        });
    };

    this.addMed = function (data) {
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/medications',
            data: data
        });
    };

    this.setMed = function (data) {
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/medications/' + data.objectId
        });
    };

    
    
    this.updateMed = function (data) {
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/medications/' + data.objectId,
            data: data
        });
    };

    this.removeMedication = function (data) {
        return $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/medications/' + data.objectId,
        });
    };


});