//SPDX-License-Identifier: MIT
pragma solidity >0.5.0 <= 0.9.0;

contract MoodDiary {
    string mood;

    function SetMood(string memory _mood) public {
        mood=_mood;
    }

    function Getmood() public view returns(string memory) {
        return mood;
    }
}