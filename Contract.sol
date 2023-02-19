// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.8.0;

contract MusicIndustry {
    struct Artist {
        string name;
        string profession;
        // uint star;
        uint fee;
        uint req;
        uint budget;
        address artistAddress;
    }

    struct Music {
        string name;
        // address[] request;
        uint fee;
        // uint star;
        address musicAddress;
    }

    // struct Video{
    //     string name;
    //     uint request;
    //     uint fee;
    //     // uint star;
    //     address videoeAddress;
    // }

    //    Video[] public video;
    //    Poster[] public poster;

    constructor() {
        owner = payable(msg.sender);
    }

    //variables used
    Artist[] public artist;
    Music[] public music;
    address[] artistAdd;
    address[] musicAdd;
    address[] musicInBud;
    address[] artistRqst;
    address payable public owner;

    uint noOfArtist;
    uint public artistBudget;
    uint[] arr;

    //mapping used
    mapping(address => Artist) public addressToArtist;
    mapping(address => uint) musicFee;
    mapping(address => uint) addressToBud;
    mapping(address => address) musicRqst;

    //functions for artists.........
    // function for a new artist
    function art(
        string memory _name,
        string memory _profession,
        uint _fee,
        uint _req,
        uint _budget
    ) public payable {
        artistBudget = _budget;
        Artist memory artists = Artist(
            _name,
            _profession,
            _fee,
            _req,
            _budget,
            msg.sender
        );
        artist.push(artists);
        artistAdd.push(msg.sender);
        addressToBud[msg.sender] = _budget;
        addressToArtist[msg.sender] = artists;
        noOfArtist++;
    }

    //function to select list of music in budget music producers..............

    function inBudget() public {
        uint i;
        while (i < musicAdd.length) {
            if (musicFee[musicAdd[i]] <= addressToBud[msg.sender])
                musicInBud.push(musicAdd[i]);
        }
    }

    //function for sending payment from artist to music producer.....

    function sendPayment(address payable musicProAdd) public payable {
        musicRqst[msg.sender] = musicProAdd;
        uint proFee = musicFee[musicProAdd];
        musicProAdd.transfer(proFee);
    }

    //music in budget function
    //  function musicInBudget(uint index)public payable returns(address){
    //      uint musicfee= musicFee[musicInBud[index]];
    //      uint charge = (musicfee * 6)/100;
    //      uint feeWithCharge = musicfee+charge;
    //      payable(musicInBud[index]).transfer(feeWithCharge);
    //      musicRqst.push(msg.sender);
    //      return msg.sender;
    //  }

    //functions for music producers........
    //function fro new music producer......
    function mus(string memory _name, uint _fee) public payable {
        musicFee[msg.sender] = _fee;

        Music memory musics = Music(_name, _fee, msg.sender);
        musicAdd.push(msg.sender);
        music.push(musics);
    }

    //functino for displaying requests....
    function request() public {
        uint i;
        while (i < musicAdd.length) {
            if (musicRqst[artistAdd[i]] == msg.sender) {
                artistRqst.push(artistAdd[i]);
            }
            i++;
        }
    }
}
