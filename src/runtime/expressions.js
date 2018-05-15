var ls;
(function (ls) {
	ls.fail = function() {
		return {
			"%22MainScene%22": function() { return "MainScene" },
			"%22GameScene%22": function() { return "GameScene" }
		}
	};
	ls.MainScene = function() {
		return {
			"%22GameScene%22": function() { return "GameScene" }
		}
	};
	ls.GameScene = function() {
		return {
			"mybullet": function() { return mybullet },
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"5%2Bls.random()*10": function() { return 5+ls.random()*10 },
			"myplane": function() { return myplane },
			"%22%E5%BE%97%E5%88%86%EF%BC%9A%22%2BSystem.myscore": function() { return "得分："+System.myscore },
			"15%2Bls.random()*10": function() { return 15+ls.random()*10 },
			"%22equalTo%22": function() { return "equalTo" },
			"%22middle%22": function() { return "middle" },
			"%22%E8%A1%80%E9%87%8F%EF%BC%9A%22%2BSystem.myblood": function() { return "血量："+System.myblood },
			"bplane.bscore": function() { return bplane.bscore },
			"%22myscore%22": function() { return "myscore" },
			"%22big%22": function() { return "big" },
			"%22myblood%22": function() { return "myblood" },
			"splane.sscore": function() { return splane.sscore },
			"%22fail%22": function() { return "fail" },
			"20%2Bls.random()*380": function() { return 20+ls.random()*380 },
			"enemybullet": function() { return enemybullet },
			"%22small%22": function() { return "small" },
			"mplane": function() { return mplane },
			"10%2Bls.random()*10": function() { return 10+ls.random()*10 },
			"mplane.mscore": function() { return mplane.mscore },
			"splane": function() { return splane },
			"bplane": function() { return bplane }
		}
	};
})(ls || (ls = {}));