;(function () {

	const xlsx = require('tfk-json-to-xlsx');

	var
	makeMemberList = function (member) {
		var memberList = [];
		var newMemberList = [];

		for (var i=0; i < member.result.length; i++) {
			for (var j=0; j< member.result[i].newMember.length; j++) {
				newMemberList.push(member.result[i].newMember[j]);
			}
		}

		for (var i=0; i < member.result.length; i++) {
			for (var j=0; j< member.result[i].member.length; j++) {
				memberList.push(member.result[i].member[j]);
			}
		}
		return {
			"memberList": memberList,
			"newMemberList": newMemberList
		};
	},
	makeBasicTeam = function (member) {
		var basicTeam = [];
		member.result.forEach(function (value, index) {
			basicTeam.push({
				"team": index+1,
				"leader": value.leader
			});
		});
		return basicTeam;
	},
	chooseRandomMember = function (memberList) {
		return Math.floor((Math.random() * memberList.length));

	},
	memberAppender = function (memberList, basicTeam) {
		for (var i=0; (memberList.memberList.length+memberList.newMemberList.length) > 0; i++) {
			for (var j=0; j < basicTeam.length; j++) {
				var currentMember;

				if (memberList.newMemberList.length > 0) {
					currentMember = memberList.newMemberList;
				} else {
					currentMember = memberList.memberList;
				}

				var randomNumber = chooseRandomMember(currentMember);
				var randomMember = currentMember[randomNumber];
				currentMember.splice(randomNumber, 1);

				basicTeam[j]['member'+(i+1)] = randomMember;
				if (memberList.memberList.length+memberList.newMemberList.length === 0) {
					break;
				}
			}
		}

		return basicTeam;
	},
	teamToXlsx = function (successTeam) {
		xlsx.write('team.xlsx', successTeam, function (error) {
			if (error) {
				console.error(error)
			} else {
				console.log("success!");
			}
		});
	},
	initialize = function () {
		var teamMemberFile = null;
		try {
			teamMemberFile = require(process.argv[2]);
		} catch(e) {
			console.log('Sorry, cannot find "' + process.argv[2] + '" file.');
			return;
		}
		
		teamToXlsx(memberAppender(makeMemberList(teamMemberFile), makeBasicTeam(teamMemberFile)));
	}();
})();
